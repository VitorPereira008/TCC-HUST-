/*! HÜST RADIO — Player de Vinil Contínuo (só para quando você clica em Pausar) */
(function () {
  'use strict';

  const STORAGE_KEY = 'hust_radio_state_v7';

  const FAIXAS = [
    { titulo: "Meet Me Halfway", artista: "Black Eyed Peas", arquivo: "03 Meet Me Halfway.mp3" },
    { titulo: "The Night Begins To Shine", artista: "B.E.R.", arquivo: "B.E.R._Teen_Titans_Go_-_The_Night_Begins_To_Shine_(mp3.pm).mp3" },
    { titulo: "DtMF", artista: "Bad Bunny", arquivo: "Bad Bunny - DtMF (Letra).mp3" },
    { titulo: "MONACO", artista: "Bad Bunny", arquivo: "Bad Bunny - MONACO.mp3" },
    { titulo: "BAILE INoLVIDABLE", artista: "Bad Bunny", arquivo: "BAILE INoLVIDABLE - Bad Bunny (1).mp3" },
    { titulo: "Danza Kuduro", artista: "Don Omar & Lucenzo", arquivo: "Danza Kuduro.mp3" },
    { titulo: "You Spin Me Round (Like a Record)", artista: "Dead Or Alive", arquivo: "Dead Or Alive - You Spin Me Round (Like a Record) (Official Video).mp3" },
    { titulo: "Blue (Da Ba Dee)", artista: "Eiffel 65", arquivo: "Eiffel 65 - Blue (Da Ba Dee).m4a" },
    { titulo: "Behind Blue Eyes", artista: "Limp Bizkit", arquivo: "076 - Limp Bizkit - Behind Blue Eyes.mp3" },
    { titulo: "It's Tricky", artista: "Run-DMC", arquivo: "Run DMC - Its Tricky.mp3" },
    { titulo: "Feel It Still", artista: "Portugal. The Man", arquivo: "Feel It Still - Portugal. The Man.mp3" },
    { titulo: "Flashing Lights [Instrumental]", artista: "Kanye West", arquivo: "Kanye West - Flashing Lights [Official Instrumental].mp3" },
    { titulo: "ALL THE LOVE [Instrumental]", artista: "Kanye West", arquivo: "YE - ALL THE LOVE [Instrumental].mp3" },
    { titulo: "Good Life [Instrumental]", artista: "Kanye West", arquivo: "Kanye West - Good Life [Official Instrumental] (1).mp3" },
    { titulo: "Never Say Never", artista: "Justin Bieber ft. Jaden Smith", arquivo: "Justin Bieber - Never Say Never ft. Jaden Smith.mp3" },
    { titulo: "What I've Done", artista: "Linkin Park", arquivo: "What I've Done (Official Music Video) [4K Upgrade] - Linkin Park.mp3" },
    { titulo: "WE ON GO", artista: "BIA", arquivo: "WE ON GO   BIA.mp3" },
    { titulo: "Shut Up and Dance", artista: "WALK THE MOON", arquivo: "SpotiDown.App - Shut Up and Dance - WALK THE MOON.mp3" },
    { titulo: "Tempos Modernos", artista: "Claudinho & Buchecha", arquivo: "Tempos modernoscd.mp3" },
    { titulo: "Nosso Sonho", artista: "Claudinho & Buchecha", arquivo: "Nosso sonho.mp3" },
    { titulo: "FE!N", artista: "Travis Scott", arquivo: "Travis_Scott_-_Fein_(mp3.pm).mp3" },
    { titulo: "Rock That Body", artista: "Black Eyed Peas", arquivo: "Rock That Body.mp3" },
    { titulo: "Purple Rain", artista: "Prince", arquivo: "Prince And The Revolution – Purple Rain.mp3" },
    { titulo: "Like Him", artista: "Tyler, The Creator", arquivo: "Like Him.mp3" },
    { titulo: "Tempo Perdido", artista: "Legião Urbana", arquivo: "Legião Urbana - Tempo Perdido.mp3" },
    { titulo: "Stronger", artista: "Kanye West & Daft Punk", arquivo: "Kanye West & Daft Punk- Stronger (MMXIIIvenjix Edit).mp3" },
    { titulo: "Get Lucky", artista: "Daft Punk ft. Pharrell Williams", arquivo: "Get Lucky (feat. Pharrell Williams & Nile Rodgers) - Radio Edit.mp3" },
    { titulo: "Drop It Like It's Hot", artista: "Snoop Dogg", arquivo: "Drop It Like It's Hot snoop dogg.mp3" },
    { titulo: "Heroes", artista: "David Bowie", arquivo: "David Bowie - ＂Heroes＂ (Official Video) [HD].m4a" },
    { titulo: "P.I.M.P. (Remix)", artista: "50 Cent & Snoop Dogg", arquivo: "50 Cent, Snoop Dogg - P.I.M.P. (Snoop Dogg Remix).mp3" },
    { titulo: "Back To Black", artista: "Amy Winehouse", arquivo: "Amy Winehouse - Back To Black.mp3" },
    { titulo: "Daft Punk Remix", artista: "Daft Punk", arquivo: "daft punk tyshi.mp3" }
  ];

  // Se já estiver dentro do iframe, apenas avisa o player pai qual página abriu (para efeito abafado no carrinho)
  if (window.self !== window.top) {
    try {
      if (window.top.__hustNotifyPage) {
        window.top.__hustNotifyPage(window.location.href, document.title);
      }
    } catch (e) {}
    return;
  }

  if (window.HustRadio) return;
  window.HustRadio = true;

  const initialUrl = window.location.href;
  const initialTitle = document.title;

  function isCartUrl(url) {
    return String(url || '').toLowerCase().includes('carrinho');
  }

  function getAudioUrl(arquivo) {
    const nomeLimpo = String(arquivo).replace(/^(\.\/)?audio\//i, '');
    return 'audio/' + encodeURIComponent(nomeLimpo);
  }

  const brokenIndices = new Set();

  let state = {
    index: 0,
    volume: 0.65,
    minimized: false
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === 'object') {
      state = Object.assign(state, saved);
    }
  } catch (e) {}

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        index: state.index,
        volume: audio.volume,
        minimized: state.minimized
      }));
    } catch (e) {}
  }

  const audio = document.createElement('audio');
  audio.preload = 'metadata';
  audio.volume = state.volume;

  let audioCtx = null;
  let filterNode = null;
  let currentUrl = initialUrl;

  function initWebAudio() {
    if (window.location.protocol === 'file:') return;
    if (audioCtx) {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      return;
    }
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      audioCtx = new Ctx();
      const source = audioCtx.createMediaElementSource(audio);
      filterNode = audioCtx.createBiquadFilter();
      filterNode.type = 'lowpass';
      const muffled = isCartUrl(currentUrl);
      filterNode.frequency.value = muffled ? 420 : 22000;
      filterNode.Q.value = muffled ? 1.8 : 0.7;

      source.connect(filterNode);
      filterNode.connect(audioCtx.destination);
    } catch (e) {}
  }

  function aplicarModoCarrinho(url, dock) {
    currentUrl = url;
    const muffled = isCartUrl(url);
    dock.classList.toggle('is-muffled', muffled);
    const badgeEl = dock.querySelector('.hr-badge');
    if (badgeEl) {
      badgeEl.textContent = muffled ? 'HÜST RADIO • ABAFADO' : 'HÜST RADIO • FM';
    }
    if (filterNode && audioCtx) {
      const now = audioCtx.currentTime;
      filterNode.frequency.cancelScheduledValues(now);
      filterNode.frequency.setTargetAtTime(muffled ? 420 : 22000, now, 0.18);
      filterNode.Q.setTargetAtTime(muffled ? 1.8 : 0.7, now, 0.18);
    }
  }

  function montarShell() {
    document.documentElement.style.cssText = 'margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#050608;';
    document.body.style.cssText = 'margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#050608;';
    document.body.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.id = 'hust-app-frame';
    iframe.src = initialUrl;
    iframe.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;border:0;display:block;background:#050608;';
    document.body.appendChild(iframe);

    const style = document.createElement('style');
    style.textContent = `
      #hust-radio-dock {
        position: fixed;
        left: 18px;
        bottom: 18px;
        z-index: 999999;
        display: flex;
        align-items: center;
        gap: 12px;
        background: rgba(12, 14, 18, 0.92);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 999px;
        padding: 8px 14px 8px 8px;
        box-shadow: 0 14px 36px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 46, 59, 0.18);
        color: #f4f6fa;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        max-width: calc(100vw - 36px);
      }
      #hust-radio-dock.is-minimized { padding: 6px; gap: 0; }
      #hust-radio-dock.is-minimized .hr-meta,
      #hust-radio-dock.is-minimized .hr-controls { display: none; }
      .hr-vinyl-wrap {
        position: relative;
        width: 46px;
        height: 46px;
        flex-shrink: 0;
        cursor: pointer;
      }
      .hr-vinyl {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background:
          radial-gradient(circle at center, #0a0b0e 0 16%, #ff2e3b 17% 34%, #111318 35% 38%, #1d2029 42%, #0c0d11 52%, #1d2029 64%, #0c0d11 78%, #262a36 100%);
        border: 1.5px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: hrSpin 5s linear infinite;
        animation-play-state: paused;
      }
      #hust-radio-dock.is-playing .hr-vinyl { animation-play-state: running; }
      .hr-vinyl::after {
        content: '';
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #f4f6fa;
      }
      @keyframes hrSpin { to { transform: rotate(360deg); } }
      .hr-meta {
        min-width: 0;
        max-width: 165px;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .hr-badge {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #ff2e3b;
        transition: color 0.3s ease;
      }
      #hust-radio-dock.is-muffled .hr-badge { color: #c6ff00; }
      .hr-title {
        font-size: 12.5px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #ffffff;
      }
      .hr-artist {
        font-size: 11px;
        color: #9aa2b1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .hr-controls { display: flex; align-items: center; gap: 6px; }
      .hr-btn {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.06);
        color: #fff;
        font-size: 12px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background 0.15s ease, transform 0.15s ease;
      }
      .hr-btn:hover { background: rgba(255, 46, 59, 0.28); transform: scale(1.06); }
      .hr-btn-play {
        width: 34px;
        height: 34px;
        background: #ff2e3b;
        border-color: #ff2e3b;
        font-size: 13px;
      }
      .hr-btn-play:hover { background: #e0222e; }
      @media (max-width: 540px) {
        #hust-radio-dock { left: 12px; bottom: 12px; padding: 6px 10px 6px 6px; }
        .hr-meta { max-width: 115px; }
      }
    `;
    document.head.appendChild(style);

    const dock = document.createElement('div');
    dock.id = 'hust-radio-dock';
    if (state.minimized) dock.classList.add('is-minimized');
    dock.innerHTML = `
      <div class="hr-vinyl-wrap" title="Clique para expandir/recolher o player">
        <div class="hr-vinyl"></div>
      </div>
      <div class="hr-meta">
        <span class="hr-badge">HÜST RADIO • FM</span>
        <div class="hr-title" id="hrTitle">Carregando...</div>
        <div class="hr-artist" id="hrArtist">HÜST</div>
      </div>
      <div class="hr-controls">
        <button type="button" class="hr-btn" id="hrPrev" title="Anterior">⏮</button>
        <button type="button" class="hr-btn hr-btn-play" id="hrPlay" title="Tocar / Pausar">▶</button>
        <button type="button" class="hr-btn" id="hrNext" title="Próxima aleatória">⏭</button>
      </div>
    `;
    document.body.appendChild(dock);

    // Atualiza título, URL e modo abafado sempre que você muda de página dentro do site, SEM parar a música
    window.__hustNotifyPage = function (newUrl, newTitle) {
      if (newTitle) document.title = newTitle;
      try {
        if (window.location.href !== newUrl) {
          history.replaceState(null, newTitle || initialTitle, newUrl);
        }
      } catch (e) {}
      aplicarModoCarrinho(newUrl, dock);
    };

    iframe.addEventListener('load', () => {
      try {
        const frameUrl = iframe.contentWindow.location.href;
        const frameTitle = iframe.contentDocument ? iframe.contentDocument.title : '';
        window.__hustNotifyPage(frameUrl, frameTitle);
      } catch (e) {}
    });

    window.addEventListener('popstate', () => {
      try {
        if (iframe.contentWindow.location.href !== window.location.href) {
          iframe.src = window.location.href;
        }
      } catch (e) {}
    });

    iniciarAudio(dock, initialUrl);
  }

  function iniciarAudio(dock, startUrl) {
    aplicarModoCarrinho(startUrl, dock);

    const titleEl = document.getElementById('hrTitle');
    const artistEl = document.getElementById('hrArtist');
    const btnPlay = document.getElementById('hrPlay');
    const btnPrev = document.getElementById('hrPrev');
    const btnNext = document.getElementById('hrNext');
    const vinylWrap = dock.querySelector('.hr-vinyl-wrap');

    let wantsPlay = false;

    function updateUI(isPlaying) {
      dock.classList.toggle('is-playing', isPlaying);
      btnPlay.textContent = isPlaying ? '⏸' : '▶';
    }

    function loadTrack(idx, autoPlay) {
      state.index = ((idx % FAIXAS.length) + FAIXAS.length) % FAIXAS.length;
      const faixa = FAIXAS[state.index];
      titleEl.textContent = faixa.titulo;
      artistEl.textContent = faixa.artista || 'HÜST';
      audio.src = getAudioUrl(faixa.arquivo);
      saveState();

      if (autoPlay) {
        initWebAudio();
        audio.play().then(() => updateUI(true)).catch(() => updateUI(false));
      }
    }

    function nextRandomTrack(autoPlay = true) {
      const available = [];
      for (let i = 0; i < FAIXAS.length; i++) {
        if (!brokenIndices.has(i) && i !== state.index) available.push(i);
      }
      if (available.length === 0) {
        updateUI(false);
        return;
      }
      const nextIdx = available[Math.floor(Math.random() * available.length)];
      loadTrack(nextIdx, autoPlay);
    }

    audio.addEventListener('error', () => {
      brokenIndices.add(state.index);
      if (brokenIndices.size < FAIXAS.length) {
        nextRandomTrack(wantsPlay);
      } else {
        updateUI(false);
        artistEl.textContent = 'Verifique a pasta audio/';
      }
    });

    btnPlay.addEventListener('click', () => {
      initWebAudio();
      if (audio.paused) {
        wantsPlay = true;
        audio.play().then(() => updateUI(true)).catch(() => {
          wantsPlay = false;
          updateUI(false);
        });
      } else {
        wantsPlay = false;
        audio.pause();
        updateUI(false);
      }
    });

    btnNext.addEventListener('click', () => {
      wantsPlay = true;
      nextRandomTrack(true);
    });

    btnPrev.addEventListener('click', () => {
      if (audio.currentTime > 3) {
        audio.currentTime = 0;
      } else {
        wantsPlay = true;
        loadTrack(state.index - 1, true);
      }
    });

    vinylWrap.addEventListener('click', () => {
      state.minimized = !state.minimized;
      dock.classList.toggle('is-minimized', state.minimized);
      saveState();
    });

    audio.addEventListener('play', () => updateUI(true));
    audio.addEventListener('pause', () => updateUI(false));
    audio.addEventListener('ended', () => {
      wantsPlay = true;
      nextRandomTrack(true);
    });

    loadTrack(state.index, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montarShell);
  } else {
    montarShell();
  }
})();