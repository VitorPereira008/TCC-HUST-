/*! HÜST FX — intro da logo, fundos animados, sequência de 15 s e utilidades compartilhadas.
    Carregue UMA vez no <head> de cada página:  <script src="hust-fx.js"></script>
    Não depende de nenhuma biblioteca. Para mudar a duração das sequências, edite DURACAO_SEQUENCIA_MS. */
(function () {
  'use strict';
  var D = document, W = window, R = D.documentElement;
  if (W.HustFX) return;

  /* ---------- CONFIG ---------- */
  var DURACAO_SEQUENCIA_MS = 15000;           // entrada no banco e pagamento
  var LOGO_VB = '0 0 1019 494';
  var LOGO_D = 'M1000.5 488.5C998.9 487.7 992.5 485.3 986.5 483.1C980.5 481 973 478.2 970 477C967 475.8 963.6 474.6 962.5 474.3C961.4 474.1 959.6 473.5 958.5 473C957.4 472.6 953.6 471.1 950 469.6C946.4 468.2 943.1 467 942.7 467C942.2 467 940.4 466.3 938.7 465.5C934.3 463.5 923.2 459.4 912.7 455.9C907.9 454.3 902.5 452.4 900.7 451.6C898.9 450.9 893.7 448.8 889 447C884.3 445.3 879.7 443.4 878.8 442.9C877.8 442.4 876.3 442 875.5 442C874.7 442 873.2 441.6 872.2 441.1C870 440 865.4 438.2 851 433C815.1 420.2 814.9 420 809.5 389.5C808.6 384.6 807.5 378.7 807 376.5C805.1 368.6 799.4 331.7 796.9 311.5C796.3 306.6 795.6 287.6 795.3 269.5C794.7 233.4 795.3 221.9 799.9 176.6C800.5 170.6 800.8 165.4 800.4 165.1C799.6 164.3 793 171.8 787.9 179.3C785.6 182.6 783.3 185.9 782.8 186.4C782 187.5 780.2 189.9 770.9 202.5C768.5 205.8 765.2 210.5 763.5 213C761.9 215.5 760.3 217.7 759.9 218C759.6 218.3 757.2 221.7 754.5 225.5C751.7 229.3 746.1 237.1 742 242.7C737.9 248.3 731.6 257 728 262.1C718.1 276.1 717.5 276.7 714.9 274.4C711.8 271.7 702 259.3 702 258.2C702 257.7 701.3 256.7 700.5 256C697.6 253.6 689 234.6 688 228.5C685 210.2 688.5 188.5 697.1 171.1C712 141.2 732 119.1 759.5 102.3C764 99.5 790 87.1 796.5 84.6C800.4 83.1 806.6 80.6 810.5 79C814.4 77.5 821.1 75 825.5 73.5C829.9 72 839.6 68.4 847 65.5C861.2 60 863.2 59.2 893 48.5C903.2 44.8 912.9 41.2 914.5 40.5C916.1 39.8 920 38.3 923 37.2C940.8 30.6 945.8 28.7 948.8 27.4C950.6 26.6 952.9 26 953.8 26C954.8 26 957.6 25 960.1 23.9C964.4 21.7 976.1 17.4 991 12.3C995.1 10.9 999.7 9.1 1001.2 8.4C1002.6 7.6 1004.4 7 1005.2 7C1005.9 7 1007.8 6.3 1009.4 5.5C1015.9 2.1 1016.1 5.4 1009.8 12C1006.5 15.5 1000.1 23.8 988 40.2C981.4 49 977.6 54.8 972.9 63C971.4 65.5 969.3 69.1 968.2 71C963.9 78.3 959.1 87.9 954.6 98C952 103.8 949.5 109.4 949 110.5C944.5 119.9 937 144.3 932 165.5C928.6 180 928.2 182.1 927 189.5C926.4 193.3 925.5 198.8 925 201.5C923.6 209.4 922.2 217.8 920.9 227.3C919 240.6 918.7 240.6 903.3 225.2C896.3 218.1 888.3 210 885.7 207.2C883.1 204.3 880.5 202 880 202C879.5 202 878.7 201.3 878.2 200.5C877.8 199.6 870.1 191.5 861.2 182.5C841.9 162.9 838.8 161.5 844.6 174.6C846 177.9 847.6 181.4 848 182.5C848.5 183.6 850.5 188.6 852.5 193.5C854.6 198.4 857.5 205.3 859.1 208.7C860.7 212.1 862 215.6 862 216.5C862 217.3 862.3 218 862.8 218C863.2 218 864.4 220.1 865.4 222.8C866.5 225.4 868.6 230.4 870.3 234C871.9 237.6 873.9 242.1 874.7 244C879.3 254.6 912.3 321.5 915.9 327.5C916.9 329.1 920.3 335.4 923.4 341.5C926.6 347.6 929.5 352.9 930 353.5C930.4 354.1 932.5 357.6 934.6 361.5C941.8 374.9 943.5 377.8 950.8 389.6C954.8 396.2 958.5 402.2 959 403C959.5 403.8 962.6 408.9 965.9 414.4C969.3 419.8 972 424.6 972 425.1C972 425.6 972.5 426 973 426C973.5 426 974 426.4 974 426.8C974 427.3 976.4 431.3 979.2 435.6C982.1 440 987.9 448.8 992 455.3C996.1 461.9 1001 469.1 1002.8 471.5C1004.5 473.9 1006 476.3 1006 476.9C1006 477.4 1007.2 479.3 1008.7 481C1013.9 487.2 1008.4 492.2 1000.5 488.5ZM10 477.5C9 476.3 9 475.7 10.1 474.2C12.2 471.5 19.9 462.8 23.1 459.5C24.7 457.9 26 456.1 26 455.7C26 455.2 28.6 451.6 31.8 447.7C35 443.7 38.2 439.5 39 438.4C42.5 433.2 56.1 415.2 58.9 411.9C60.6 409.9 62 408 62 407.7C62 407 74.4 387.7 78.8 381.5C81.7 377.4 86.2 369.4 94.2 354C98.1 346.5 101.7 338.9 108 324.5C124.5 286.9 129.7 241.8 121.9 203.5C117.3 181 114.3 172.1 102.6 146.8C101.2 143.9 100 141.1 99.8 140.5C99.6 139.9 96.6 134.4 93 128.3C89.4 122.1 85.8 115.8 85 114.3C84.2 112.7 82.3 109.9 80.7 107.9C79.2 105.9 78 104 78 103.7C78 103.3 75.2 99.2 71.8 94.4C63.4 82.9 61.9 80.8 59.5 77.4C52.7 67.6 26.3 36.3 12.9 22.2C2 10.8 1.4 8.1 10.4 11C12.1 11.5 16.6 12.9 20.5 14C24.4 15.2 28.4 16.5 29.5 17C30.6 17.4 34.4 18.5 38 19.3C50.2 22.2 76.5 29 78 29.7C78.8 30 82.9 31.1 87 32C110.4 37.2 123.7 40.3 125.5 41C126.6 41.5 130.9 42.4 135 43C139.1 43.7 147.4 45.3 153.4 46.6C159.4 47.9 170.9 50.1 178.9 51.5C195.3 54.3 197 55.2 195.2 60.2C193.5 65.2 188.4 79.1 187.1 82.5C186.4 84.2 185.2 88 184.3 91C179 110.2 177.5 115.7 175.1 126C169.3 149.9 168.5 155.7 168.5 172.5C168.5 188.4 168.5 188.5 171.7 195C174.7 201.3 175.1 201.6 179.7 202.8C197.1 207.3 213.3 190.5 218.4 162.9C220.3 152.9 220.6 122.8 219 108.6C217.3 93.9 214.9 76.8 213.9 72.5C213.4 70.3 212.9 66.7 212.8 64.5L212.5 60.5 L217.5 60.6C228.5 60.9 276.6 68 281.5 70.1C289.4 73.5 289 70.7 291.6 149.5C294.8 244.9 295.5 267.6 297.9 332.7C298.4 348.7 299.2 365.2 299.6 369.2C301.3 388.2 297.5 392.5 274.5 397C272.3 397.5 265.1 399.2 258.6 400.9C239.3 405.9 231.4 404.7 228.2 396.3C225.9 390.2 224 383 224 380.6C224 379.2 223.5 377.8 223 377.5C222.4 377.2 222 375.4 222 373.7C221.9 371.9 221.3 367.8 220.5 364.5C218.5 356.2 218.5 332.3 220.5 327.8C222.3 323.7 229.3 303 231 297C231.7 294.5 232.6 291.5 233.1 290.3C234.6 286.4 238 263.1 238 256.7C238 250.2 235.8 241.7 233.4 238.9C232.6 238.1 232 236.9 232 236.4C232 235.9 229.6 233.1 226.8 230.3C214.9 218.6 196.7 214.4 185.5 220.7C168.2 230.3 159.9 253.4 165.9 274.8C167.7 281.1 174.5 296.9 175.9 298C177 298.8 189.6 317.2 192 321.5C197.6 331.2 197.5 330.8 197.4 345C197.4 352.4 196.8 361 196.2 364C186.1 413.8 182.4 420.5 161.3 427.1C157.6 428.2 152.9 429.8 151 430.6C149.1 431.4 145 432.7 142 433.5C139 434.3 132 436.5 126.5 438.5C121 440.4 115.4 442 114.1 442C112.7 442 110.9 442.6 110.1 443.3C109.2 444.1 104.2 446.1 99 447.8C67.5 458.3 44.1 466.5 23.5 474.4C9.5 479.8 11.5 479.3 10 477.5ZM763.5 400.4C754 398.5 745.8 396.6 742 395.5C739.5 394.8 733.2 393.2 728 392C712.5 388.5 689.8 383.1 686 382C684.1 381.5 676.6 379.7 669.5 378C662.4 376.4 654.9 374.5 653 374C651.1 373.4 640.7 370.9 630 368.4C619.3 365.9 608.9 363.5 607 363C605.1 362.5 601.2 361.6 598.5 361C595.8 360.3 592.4 359.4 591 359C589.6 358.6 585.8 357.6 582.5 356.9C579.2 356.3 572.2 354.6 567 353.2C561.8 351.9 555.7 350.4 553.5 350C551.3 349.5 548.1 348.8 546.5 348.5C530.9 345.2 527.8 339.9 525.9 312.5C522.9 271.8 523.7 225.2 527.4 219.2C529.4 215.9 536.3 219.5 545.7 228.4C546.8 229.6 549.7 232.1 552.1 234C554.4 235.9 557 238.2 557.9 239.1C559.3 240.4 583.2 261.2 591.9 268.6C593.8 270.2 596.2 272.4 597.4 273.5C598.5 274.6 601.5 277.2 604 279.3C609.3 283.9 618.4 291.8 622.1 295.1C624.8 297.5 627.9 300.2 644.5 314.5C649.5 318.8 654.3 323 655.2 323.9C656.2 324.8 658.1 326.4 659.6 327.5C661 328.6 663.4 330.6 665 332C666.5 333.4 672.1 338.3 677.5 343C682.9 347.7 687.8 352 688.4 352.5C693.2 357 715.1 371 717.4 371C717.6 371 718.3 369.5 718.9 367.8C720.2 364 719 357.2 715.9 350.4C714.8 348.1 714 345.8 714 345.2C714 344.6 711.3 341.3 708 337.8C704.7 334.4 702 331.2 702 330.8C702 330.3 701.6 330 701 330C700.5 330 697.7 327.7 694.8 324.9C691.9 322.1 685 316 679.5 311.2C674 306.5 665.5 298.9 660.5 294.5C655.5 290.1 648.1 283.6 644 280C639.9 276.5 635.6 272.8 634.5 271.8C630 267.6 621.2 260 616.8 256.4C614.2 254.2 603.4 245 592.8 235.8C582.2 226.7 571.1 217.4 568.1 215.3C565.2 213.2 561.3 210.3 559.5 208.8C557.7 207.2 555.9 206 555.5 206C552.4 206 531.3 185.4 528.1 179.2C525.1 173.4 525.1 154.9 528 143C534.9 115.5 541 107.7 565.7 95C578.6 88.3 591.8 86 640.9 82C647.7 81.4 654.2 80.8 655.4 80.5C656.5 80.2 661.3 79.5 666 79C674.8 78 682.3 76.9 709 72.6C732.1 68.9 741.6 67.3 751 65.5C755.7 64.6 764 63.2 769.5 62.4C775 61.5 782 60.4 785 59.8C795.5 57.9 801.3 57.7 800.8 59.1C799.5 63.1 783.7 71.8 756 84C750.8 86.3 744.6 89.5 742.2 91.1C739.8 92.7 737.7 94 737.5 94C736.1 94 719.7 107.7 715 112.7C706.9 121.4 702 127.2 700.8 129.5C700.2 130.6 698.7 132.8 697.4 134.3C695 137.1 688 151 684.2 160.5C681.5 167.3 679.9 173.6 674.1 200.1C673 205.3 669 213.1 666.2 215.7C662.5 219.2 655.2 218.9 651.8 215.2C648.9 212.1 642.2 202.5 640.9 199.5C640.4 198.4 639.6 196.8 639.1 196C636.3 191.7 624.8 167.1 621 157.5C614.4 140.9 609.3 136.3 596.5 135.3C590.4 134.8 588.9 135.1 585 137.1C578 140.7 574 143.4 574 144.4C574 144.9 572.9 146.7 571.6 148.4C565.1 156.9 563.2 175.2 568 182.3C569.4 184.3 571 186 571.5 186C572.1 186 573.3 186.8 574.1 187.8C576.3 190.2 583.9 197.1 594.3 206.3C606.5 217.1 612.5 222.7 618.7 228.8C621.6 231.6 624.4 234 624.9 234C625.4 234 626 234.3 626.2 234.8C626.4 235.2 631 239.5 636.5 244.4C647.4 254.1 661.8 267.2 668.6 273.5C671 275.7 674.4 278.7 676.2 280.2C678 281.7 682.3 285.5 685.7 288.7C689.2 291.9 693.9 296.1 696.2 298.2C698.6 300.2 702.1 303.3 704 305.2C709 310.1 718.6 318.7 725.4 324.5C732.6 330.7 735.4 333.1 740.5 337.9C746.5 343.4 755.5 351.6 765 360C769.6 364.1 775.8 369.9 778.7 372.8C781.6 375.6 784.3 378 784.7 378C786.4 378.1 795 387 796 389.5C797.3 392.8 796.3 393.7 787.5 398.1C781.6 400.9 771.3 401.9 763.5 400.4ZM376 370.4C349.9 368.9 336.7 365.3 328.3 357.6C316.5 346.8 315.1 342.5 314 313.5C313.5 300.9 312.6 282.9 312 273.5C311.5 264.1 310.5 246.2 310 233.5C307.8 182.5 306 143.5 304.9 125C304.3 114.3 303.7 98.5 303.6 90L303.5 74.5 L308 74.2C321 73.2 349.5 80 363.5 87.5C389.2 101.2 398 118.6 396.6 153C395.9 170.4 395.3 174.1 387.4 206.5C384.4 219.2 381.5 231.1 381 233C380.5 234.9 379.4 239.2 378.5 242.5C377.7 245.8 376.5 250.8 375.9 253.5C375.4 256.2 374.4 260.3 373.9 262.5C373.3 264.7 372.5 268.3 372.1 270.5C371.6 272.7 370.6 277.1 370 280.3C366.9 294.5 375.4 306.7 393 312.9C394.9 313.6 397.4 314.6 398.5 315C407.6 318.6 425.5 319 434.3 315.9C449.7 310.4 454.6 302.5 451 289.1C449.8 284.7 446.1 267.8 442.6 250.5C440 238.3 439.4 235.5 437.1 226.2C436.5 224.2 434.7 216.2 433 208.5C429.6 193.2 424.7 172.1 422.9 165C422.3 162.5 421.2 157.6 420.5 154C419.8 150.4 418.1 143 416.6 137.5C415.2 132 414 126.5 414 125.3C414 124.1 413.6 122.8 413 122.5C412.4 122.2 412 119.6 412 116.9C412 112.3 412.3 111.6 416.2 108C418.6 105.8 420.9 104 421.3 104C421.8 104 423.4 103.2 424.8 102.2C428 100 444.9 94.6 453.5 93C456.8 92.4 461.1 91.4 463.1 90.9C465.1 90.4 468.3 90 470.2 90C472.1 90 475 89.6 476.6 89.1C482.6 87.2 502.8 85.6 504.4 86.9C506.3 88.5 506.9 95.6 508.1 133C508.7 150.3 509.6 176 510.1 190C514.7 311.8 514.7 311.2 512 318.9C505 339.8 485.4 353.6 449 363.5C445.4 364.4 440.5 365.9 438 366.6C428.1 369.6 395.9 371.6 376 370.4Z';
  var REDUZIR = !!(W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------- HELPERS ---------- */
  function lerSS(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function gravarSS(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  function lerLS(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function brl(n) { return Number(n || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function parsePreco(texto, padrao) {
    var m = String(texto || '').match(/(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d{1,2}))?/);
    if (!m) return padrao;
    var n = parseFloat(m[1].replace(/\./g, '') + '.' + (m[2] || '0'));
    return isFinite(n) && n > 0 ? n : padrao;
  }
  function logoSVG(cls) {
    return '<svg class="' + cls + '" viewBox="' + LOGO_VB + '" aria-hidden="true" focusable="false"><path d="' + LOGO_D + '" fill="currentColor" fill-rule="evenodd"/></svg>';
  }
  function icone(nome) {
    var p = {
      lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
      check: '<path d="m5 12 5 5L20 7"/>',
      face: '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 10v1M15 10v1M12 10v3h-1M9.5 16c1.4 1.2 3.6 1.2 5 0"/>'
    }[nome];
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }

  /* ---------- CSS (injetado — funciona em qualquer página, inclusive banco e cadastro) ---------- */
  var CSS = [
    /* INTRO */
    '#hx-intro{--r:clamp(92px,30vw,142px);position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;background:radial-gradient(circle at 50% 44%,#0c1f13 0%,#050805 58%,#020202 100%);color:#34c85a;transition:opacity .6s ease,visibility .6s;cursor:pointer}',
    '#hx-intro.sai{opacity:0;visibility:hidden}',
    '#hx-intro .stage{position:relative;width:calc(var(--r)*2 + 28px);height:calc(var(--r)*2 + 28px);display:grid;place-items:center}',
    '#hx-intro .logo{width:calc(var(--r)*1.35);height:auto;color:#34c85a;filter:drop-shadow(0 0 16px rgba(52,200,90,.55));animation:hxLogoIn .85s cubic-bezier(.2,.8,.2,1) both,hxBreath 1.2s ease-in-out .85s infinite}',
    '#hx-intro .ring{position:absolute;inset:0;transition:transform .75s cubic-bezier(.6,0,.2,1),opacity .6s ease}',
    '#hx-intro .dot{position:absolute;left:50%;top:50%;width:11px;height:11px;margin:-5.5px 0 0 -5.5px;border-radius:50%;background:#34c85a;box-shadow:0 0 12px rgba(52,200,90,.8);transform:rotate(calc(var(--i)*30deg)) translateY(calc(var(--r)*-1));animation:hxDot 1.2s ease-in-out infinite;animation-delay:calc(var(--i)*-.1s)}',
    '#hx-intro.fecha .ring{transform:scale(.08) rotate(160deg);opacity:0}',
    '#hx-intro.fecha .logo{animation:hxLogoOut .55s ease forwards}',
    '@keyframes hxLogoIn{from{opacity:0;transform:scale(.6);clip-path:inset(-30% 100% -30% -30%)}to{opacity:1;transform:scale(1);clip-path:inset(-30% -30% -30% -30%)}}',
    '@keyframes hxBreath{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}',
    '@keyframes hxLogoOut{to{transform:scale(1.18);opacity:0;filter:drop-shadow(0 0 40px rgba(52,200,90,1))}}',
    '@keyframes hxDot{0%,100%{opacity:.18;scale:.5}50%{opacity:1;scale:1.2}}',

    /* FUNDO ANIMADO */
    '.hx-bg{position:fixed;inset:0;z-index:-1;overflow:hidden;pointer-events:none;contain:strict}',
    '.hx-blob{position:absolute;width:70vmax;height:70vmax;border-radius:50%;will-change:transform;background:radial-gradient(circle at center,var(--c) 0%,transparent 62%)}',
    '.hx-b1{--c:rgba(255,51,51,.17);left:-26vmax;top:-22vmax;animation:hxMove1 32s ease-in-out infinite alternate}',
    '.hx-b2{--c:rgba(52,200,90,.11);right:-32vmax;top:18vh;animation:hxMove2 40s ease-in-out infinite alternate}',
    '.hx-b3{--c:rgba(255,51,51,.10);left:18vw;bottom:-46vmax;animation:hxMove3 36s ease-in-out infinite alternate}',
    'html[data-hust="banco"] .hx-b1{--c:rgba(130,10,209,.22)}html[data-hust="banco"] .hx-b2{--c:rgba(155,33,232,.14)}html[data-hust="banco"] .hx-b3{--c:rgba(130,10,209,.12)}',
    'html[data-hust="admin"] .hx-b1{--c:rgba(52,200,90,.14)}html[data-hust="admin"] .hx-b2{--c:rgba(0,255,102,.09)}html[data-hust="admin"] .hx-b3{--c:rgba(52,200,90,.08)}',
    '@keyframes hxMove1{to{transform:translate3d(30vw,22vh,0) scale(1.15)}}',
    '@keyframes hxMove2{to{transform:translate3d(-28vw,-14vh,0) scale(.9)}}',
    '@keyframes hxMove3{to{transform:translate3d(24vw,-20vh,0) scale(1.2)}}',
    '.hx-grid{position:absolute;inset:-64px;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:64px 64px;-webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000 0%,transparent 75%);mask-image:radial-gradient(ellipse at 50% 30%,#000 0%,transparent 75%);animation:hxGrid 18s linear infinite;will-change:transform}',
    '@keyframes hxGrid{to{transform:translate3d(64px,64px,0)}}',
    '.hx-p{position:absolute;bottom:-12px;left:var(--x);width:var(--s);height:var(--s);border-radius:50%;background:var(--pc);box-shadow:0 0 10px var(--pc);opacity:0;animation:hxRise var(--d) linear var(--w) infinite;will-change:transform}',
    '@keyframes hxRise{0%{transform:translate3d(0,0,0);opacity:0}10%{opacity:.55}90%{opacity:.3}100%{transform:translate3d(var(--dx),-112vh,0);opacity:0}}',
    '.hx-pausa .hx-bg *,.hx-pausa .hx-bg{animation-play-state:paused!important}',
    '@media (prefers-reduced-motion:reduce){.hx-bg *{animation:none!important}.hx-p{display:none}}',

    /* PROGRESSO DE ROLAGEM + VOLTAR AO TOPO */
    '#hx-prog{position:fixed;top:0;left:0;height:3px;width:100%;transform-origin:0 50%;transform:scaleX(0);background:linear-gradient(90deg,#34c85a,#ff3333);z-index:2147482000;pointer-events:none}',
    '#hx-top{position:fixed;right:18px;bottom:18px;width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.22);background:rgba(15,15,15,.88);color:#fff;display:grid;place-items:center;cursor:pointer;opacity:0;visibility:hidden;transform:translateY(12px);transition:opacity .25s,transform .25s,visibility .25s,background .2s;z-index:9000}',
    '#hx-top.on{opacity:1;visibility:visible;transform:none}#hx-top:hover{background:#ff3333;border-color:#ff3333}',
    '#hx-top svg{width:20px;height:20px}',

    /* DETALHES */
    '.card img:not(.hx-ok){background:linear-gradient(100deg,#0a0a0a 30%,#181818 50%,#0a0a0a 70%);background-size:200% 100%;animation:hxShimmer 1.4s linear infinite}',
    '@keyframes hxShimmer{to{background-position:-200% 0}}',
    '.navbar nav a[aria-current="page"]{color:#ff3333;box-shadow:inset 0 -2px 0 #ff3333}',
    '.hx-admin-btn{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:20px;background:#00ff66;border:1px solid #00ff66;color:#000;font-size:13px;font-weight:800;letter-spacing:.8px;text-decoration:none;white-space:nowrap}.hx-admin-btn svg{width:16px;height:16px}.hx-admin-btn:hover{background:#34c85a}',
    'html[data-hust-admin] #btn-perfil{border-color:#00ff66;box-shadow:0 0 12px rgba(0,255,102,.2)}',
    '.hx-steps{list-style:none;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:34px auto -14px;padding:0 20px;max-width:1200px;counter-reset:s}',
    '.hx-steps li{counter-increment:s;display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.12);color:#8a8a8a;font-size:.82rem;font-weight:700;letter-spacing:.04em}',
    '.hx-steps li::before{content:counter(s);display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#1a1a1a;color:#aaa;font-size:.75rem}',
    '.hx-steps li.on{color:#fff;border-color:#34c85a;background:rgba(52,200,90,.08)}.hx-steps li.on::before{background:#34c85a;color:#000}',
    '#login-page .bi-person-bounding-box{animation:hxFace 1.6s ease-in-out infinite}',
    '@keyframes hxFace{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.12);opacity:1}}',

    /* SEQUÊNCIA DE 15 SEGUNDOS */
    '#hx-seq{--a:#34c85a;--glow:rgba(52,200,90,.18);--bgc:#0c1f13;position:fixed;inset:0;z-index:2147483100;display:flex;flex-direction:column;color:#fff;font-family:inherit;background:radial-gradient(circle at 50% 38%,var(--bgc) 0%,#050505 60%,#020202 100%);opacity:0;transition:opacity .45s ease;overflow:hidden;outline:0}',
    '#hx-seq[data-tipo="pagamento"]{--a:#a45cf0;--glow:rgba(155,33,232,.22);--bgc:#1a0b2b}',
    '#hx-seq.on{opacity:1}#hx-seq.fim{opacity:0}',
    '#hx-seq::before{content:"";position:absolute;width:80vmax;height:80vmax;left:-24vmax;top:-34vmax;background:radial-gradient(circle,var(--glow),transparent 60%);animation:hxMove1 20s ease-in-out infinite alternate}',
    '#hx-seq::after{content:"";position:absolute;width:70vmax;height:70vmax;right:-30vmax;bottom:-36vmax;background:radial-gradient(circle,rgba(255,51,51,.10),transparent 60%);animation:hxMove2 24s ease-in-out infinite alternate}',
    '.hx-seq-top,.hx-seq-stage,.hx-seq-foot{position:relative;z-index:1}',
    '.hx-seq-top{display:flex;justify-content:space-between;align-items:center;padding:18px 22px}',
    '.hx-seq-brand svg{height:28px;width:auto;color:#34c85a;display:block}',
    '.hx-seq-lock{display:inline-flex;align-items:center;gap:8px;font-size:.76rem;letter-spacing:.14em;text-transform:uppercase;color:#9aa5a0}',
    '.hx-seq-lock svg{width:16px;height:16px}',
    '.hx-seq-stage{flex:1;overflow:hidden}',
    '.hx-sc{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:0 20px;text-align:center;opacity:0;visibility:hidden;transform:translateY(14px) scale(.98);transition:opacity .5s ease,transform .5s ease,visibility .5s}',
    '.hx-sc.on{opacity:1;visibility:visible;transform:none}',
    '.hx-sc.sai{opacity:0;visibility:hidden;transform:translateY(-14px) scale(1.02)}',
    '.hx-sc h2{font-size:clamp(1.4rem,4.6vw,2.2rem);font-weight:900;letter-spacing:.01em;margin:0;color:#fff}',
    '.hx-sc p{color:#b9c2bd;margin:0;max-width:36ch;font-size:clamp(.9rem,2.6vw,1.05rem);line-height:1.5}',
    /* logo desenhada */
    '.hx-art-logo{width:min(64vw,340px);height:auto;overflow:visible;filter:drop-shadow(0 0 22px rgba(52,200,90,.35))}',
    '.hx-draw{fill:#34c85a;fill-opacity:0;stroke:#34c85a;stroke-width:6;stroke-dasharray:1;stroke-dashoffset:1;stroke-linejoin:round}',
    '.hx-sc.on .hx-draw{animation:hxDraw 1.7s ease forwards,hxFill .8s ease 1.3s forwards}',
    '@keyframes hxDraw{to{stroke-dashoffset:0}}@keyframes hxFill{to{fill-opacity:1;stroke-opacity:0}}',
    '.hx-chips{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}',
    '.hx-chip{padding:8px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.05);font-weight:700;font-size:.95rem}.hx-chip b{color:var(--a)}',
    /* escudo */
    '.hx-shield{position:relative;width:132px;height:132px;display:grid;place-items:center;color:var(--a)}',
    '.hx-shield svg{width:78px;height:78px;position:relative;z-index:2;filter:drop-shadow(0 0 14px var(--a))}',
    '.hx-shield::before,.hx-shield::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid var(--a);opacity:0}',
    '.hx-sc.on .hx-shield::before{animation:hxPing 1.8s ease-out infinite}.hx-sc.on .hx-shield::after{animation:hxPing 1.8s ease-out .9s infinite}',
    '@keyframes hxPing{0%{transform:scale(.55);opacity:.7}100%{transform:scale(1.5);opacity:0}}',
    '.hx-list{list-style:none;margin:0;padding:0;display:grid;gap:8px;text-align:left}',
    '.hx-list li{display:flex;align-items:center;gap:10px;opacity:0;transform:translateX(-10px);color:#d6ddd8;font-size:.95rem}',
    '.hx-list li svg{width:18px;height:18px;color:var(--a);flex:none}',
    '.hx-sc.on .hx-list li{animation:hxLi .5s ease forwards;animation-delay:calc(var(--k)*.75s + .5s)}',
    '@keyframes hxLi{to{opacity:1;transform:none}}',
    /* conexão loja <-> banco */
    '.hx-link{display:flex;align-items:center;width:min(86vw,520px)}',
    '.hx-node{flex:none;width:92px;height:92px;border-radius:50%;display:grid;place-items:center;background:#0d0d0d;border:2px solid rgba(255,255,255,.14);position:relative}',
    '.hx-node svg{width:56px;height:auto;color:#34c85a}',
    '.hx-node.nt{border-color:#820AD1;font-weight:800;font-size:.78rem;letter-spacing:-.02em;line-height:1.1}.hx-node.nt b{color:#9B21E8;display:block}',
    '.hx-sc.on .hx-node{animation:hxNode 1.6s ease-in-out infinite}.hx-sc.on .hx-node.nt{animation-delay:.8s}',
    '@keyframes hxNode{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0)}50%{box-shadow:0 0 0 12px rgba(255,255,255,.06)}}',
    '.hx-wire{position:relative;flex:1;height:2px;margin:0 6px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.28) 0 6px,transparent 6px 12px)}',
    '.hx-wire i{position:absolute;top:-4px;left:0;width:10px;height:10px;border-radius:50%;background:var(--a);box-shadow:0 0 12px var(--a);opacity:0}',
    '.hx-sc.on .hx-wire i{animation:hxPacket 1.6s linear infinite;animation-delay:calc(var(--k)*.32s)}',
    '@keyframes hxPacket{0%{left:0;opacity:0}12%{opacity:1}88%{opacity:1}100%{left:calc(100% - 10px);opacity:0}}',
    /* leitura facial */
    '.hx-scan{position:relative;width:150px;height:150px;display:grid;place-items:center;color:var(--a)}',
    '.hx-scan svg{width:84px;height:84px;opacity:.92}',
    '.hx-scan b{position:absolute;width:30px;height:30px;border:3px solid var(--a)}',
    '.hx-scan b:nth-of-type(1){top:0;left:0;border-right:0;border-bottom:0;border-top-left-radius:16px}.hx-scan b:nth-of-type(2){top:0;right:0;border-left:0;border-bottom:0;border-top-right-radius:16px}',
    '.hx-scan b:nth-of-type(3){bottom:0;left:0;border-right:0;border-top:0;border-bottom-left-radius:16px}.hx-scan b:nth-of-type(4){bottom:0;right:0;border-left:0;border-top:0;border-bottom-right-radius:16px}',
    '.hx-scan u{position:absolute;left:8px;right:8px;top:8px;height:3px;border-radius:3px;background:linear-gradient(90deg,transparent,var(--a),transparent);box-shadow:0 0 16px var(--a);text-decoration:none}',
    '.hx-sc.on .hx-scan u{animation:hxSweep 1.5s ease-in-out infinite alternate}@keyframes hxSweep{to{top:calc(100% - 11px)}}',
    /* cartão */
    '.hx-card{position:relative;width:230px;height:144px;border-radius:16px;background:linear-gradient(135deg,#820AD1,#4b0a86);box-shadow:0 18px 50px rgba(130,10,209,.38);padding:16px;text-align:left;overflow:hidden}',
    '.hx-card::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.28) 50%,transparent 65%);transform:translateX(-120%)}',
    '.hx-sc.on .hx-card::after{animation:hxShine 1.6s ease-in-out infinite}@keyframes hxShine{to{transform:translateX(120%)}}',
    '.hx-card i{display:block;width:34px;height:26px;border-radius:5px;background:linear-gradient(135deg,#e5b13a,#f7d070)}',
    '.hx-card span{position:absolute;left:16px;bottom:14px;font-size:.8rem;letter-spacing:.2em;opacity:.9}',
    /* saldo */
    '.hx-bars{width:min(80vw,380px);display:grid;gap:16px;text-align:left}',
    '.hx-bars small{display:flex;justify-content:space-between;color:#b9c2bd;font-size:.82rem;margin-bottom:6px}.hx-bars small b{color:#fff}',
    '.hx-track{height:10px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}.hx-track i{display:block;height:100%;width:0;border-radius:99px;background:var(--a)}',
    '.hx-sc.on .hx-track i{animation:hxFillBar 1.6s cubic-bezier(.3,.7,.2,1) forwards .3s}@keyframes hxFillBar{to{width:var(--w)}}',
    /* caixas / estoque */
    '.hx-boxes{display:flex;gap:12px;align-items:flex-end;height:96px}',
    '.hx-boxes i{display:block;width:54px;border-radius:8px;border:2px solid var(--a);background:rgba(164,92,240,.14);opacity:0;transform:translateY(-40px)}',
    '.hx-boxes i:nth-child(1){height:50px}.hx-boxes i:nth-child(2){height:72px}.hx-boxes i:nth-child(3){height:90px}',
    '.hx-sc.on .hx-boxes i{animation:hxDrop .6s cubic-bezier(.3,1.4,.5,1) forwards;animation-delay:calc(var(--k)*.45s + .2s)}@keyframes hxDrop{to{opacity:1;transform:none}}',
    /* concluído */
    '.hx-check{position:relative;width:130px;height:130px;display:grid;place-items:center}',
    '.hx-check svg{width:100%;height:100%;overflow:visible}',
    '.hx-check circle,.hx-check path{fill:none;stroke:var(--a);stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1}',
    '.hx-sc.on .hx-check circle{animation:hxDraw .8s ease forwards}.hx-sc.on .hx-check path{animation:hxDraw .5s ease forwards .6s}',
    '.hx-burst i{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px;border-radius:50%;background:var(--a);opacity:0}',
    '.hx-sc.on .hx-burst i{animation:hxBurst 1.1s ease-out forwards .7s}',
    '@keyframes hxBurst{0%{opacity:1;transform:rotate(calc(var(--k)*30deg)) translateY(0)}100%{opacity:0;transform:rotate(calc(var(--k)*30deg)) translateY(-120px)}}',
    /* rodapé */
    '.hx-seq-foot{padding:0 min(8vw,64px) 28px;display:grid;gap:10px}',
    '.hx-seq-msg{font-size:.92rem;color:#c9d2cd;min-height:1.4em;text-align:center}',
    '.hx-seq-bar{height:6px;border-radius:99px;background:rgba(255,255,255,.1);overflow:hidden}',
    '.hx-seq-bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--a),#fff);border-radius:99px}',
    '.hx-seq-meta{display:flex;justify-content:space-between;align-items:center;font-size:.8rem;color:#8b958f;font-variant-numeric:tabular-nums}',
    '.hx-skip{background:transparent;border:1px solid rgba(255,255,255,.2);color:#cfd6d2;padding:6px 14px;border-radius:99px;cursor:pointer;font:inherit;opacity:0;pointer-events:none;transition:opacity .3s,background .2s}',
    '.hx-skip.vis{opacity:1;pointer-events:auto}.hx-skip:hover{background:rgba(255,255,255,.1)}'
  ].join('\n');

  var st = D.createElement('style');
  st.id = 'hx-css';
  st.textContent = CSS;
  (D.head || R).appendChild(st);

  /* ---------- INTRO COM A LOGO (bolinhas de carregamento) ---------- */
  function intro() {
    // A intro só aparece: na 1ª vez da sessão, e ao entrar/sair do BANCO e do CADASTRO.
    // Clicar em INÍCIO na navbar NÃO dispara a intro.
    var atual = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var anterior = lerSS('hust_pag_anterior');
    var SENSIVEIS = ['banco.html', 'cadastro.html'];
    gravarSS('hust_pag_anterior', atual);
    var desligada = R.getAttribute('data-hust-intro') === 'off' || /[?&]semintro\b/.test(location.search);
    var primeira = !lerSS('hust_intro_visto');
    gravarSS('hust_intro_visto', '1');
    var passaPorBancoOuCadastro = SENSIVEIS.indexOf(atual) > -1 || SENSIVEIS.indexOf(anterior) > -1;
    if (desligada || !(primeira || passaPorBancoOuCadastro)) return;

    var minimo = REDUZIR ? 900 : (primeira ? 2300 : 1500);
    var t0 = Date.now(), fechando = false;
    var overflowAntes = R.style.overflow;
    R.style.overflow = 'hidden';

    var el = D.createElement('div');
    el.id = 'hx-intro';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-label', 'Carregando Hüst');
    var pontos = '';
    for (var i = 0; i < 12; i++) pontos += '<i class="dot" style="--i:' + i + '"></i>';
    el.innerHTML = '<div class="stage"><div class="ring">' + pontos + '</div>' + logoSVG('logo') + '</div>';
    R.appendChild(el);

    function fechar() {
      if (fechando) return;
      fechando = true;
      el.classList.add('fecha');
      setTimeout(function () { el.classList.add('sai'); }, 520);
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); R.style.overflow = overflowAntes; }, 1250);
    }
    el.addEventListener('click', fechar);
    setTimeout(fechar, 7000);
    function agendar() { setTimeout(fechar, Math.max(0, minimo - (Date.now() - t0))); }
    if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', agendar); else agendar();
  }

  /* ---------- FUNDO ANIMADO ---------- */
  function fundo() {
    if (!D.body || D.querySelector('.hx-bg')) return;
    var tema = R.getAttribute('data-hust') || 'loja';
    var cores = tema === 'banco' ? ['#9B21E8', '#820AD1', '#ffffff'] : tema === 'admin' ? ['#34c85a', '#00ff66', '#ffffff'] : ['#34c85a', '#ff3333', '#ffffff'];
    var qtd = W.innerWidth < 640 ? 10 : 20, ps = '';
    for (var i = 0; i < qtd; i++) {
      var d = 16 + Math.random() * 16;
      ps += '<i class="hx-p" style="--x:' + (Math.random() * 100).toFixed(1) + '%;--s:' + (2 + Math.random() * 2.5).toFixed(1) + 'px;--d:' + d.toFixed(1) + 's;--w:-' + (Math.random() * d).toFixed(1) + 's;--dx:' + Math.round(-50 + Math.random() * 100) + 'px;--pc:' + cores[i % cores.length] + '"></i>';
    }
    var bg = D.createElement('div');
    bg.className = 'hx-bg';
    bg.setAttribute('aria-hidden', 'true');
    bg.innerHTML = '<div class="hx-blob hx-b1"></div><div class="hx-blob hx-b2"></div><div class="hx-blob hx-b3"></div><div class="hx-grid"></div>' + ps;
    D.body.insertBefore(bg, D.body.firstChild);
    D.addEventListener('visibilitychange', function () { R.classList.toggle('hx-pausa', D.hidden); });
  }

  /* ---------- PROGRESSO DE ROLAGEM + VOLTAR AO TOPO ---------- */
  function interfaceRolagem() {
    if (!D.body || D.getElementById('hx-prog')) return;
    var barra = D.createElement('div'); barra.id = 'hx-prog'; barra.setAttribute('aria-hidden', 'true');
    var topo = D.createElement('button'); topo.id = 'hx-top'; topo.type = 'button'; topo.setAttribute('aria-label', 'Voltar ao topo');
    topo.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
    topo.addEventListener('click', function () { W.scrollTo({ top: 0, behavior: REDUZIR ? 'auto' : 'smooth' }); });
    D.body.appendChild(barra); D.body.appendChild(topo);
    var pend = false;
    function atualizar() {
      pend = false;
      var h = R.scrollHeight - W.innerHeight, y = W.pageYOffset || R.scrollTop || 0;
      barra.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, y / h) : 0) + ')';
      topo.classList.toggle('on', y > 600);
    }
    W.addEventListener('scroll', function () { if (!pend) { pend = true; requestAnimationFrame(atualizar); } }, { passive: true });
    atualizar();
  }

  /* ---------- MENU MOBILE: hambúrguer (3 linhas) à direita + gaveta com as páginas ---------- */
  function menuMobile() {
    var navbar = D.querySelector('.navbar'), nav = D.getElementById('menuNav');
    if (!navbar || !nav || D.getElementById('hx-burger')) return;
    var n = (lerLS('hust_carrinho') || []).length;
    var acoes = D.createElement('div');
    acoes.className = 'hx-mobile-actions';
    acoes.innerHTML =
      '<a class="hx-cart-mini" href="carrinho.html" aria-label="Carrinho"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg><span class="hx-cart-n">' + n + '</span></a>' +
      '<button type="button" id="hx-burger" class="hx-burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="menuNav"><i></i><i></i><i></i></button>';
    navbar.appendChild(acoes);
    var fundoNav = D.createElement('div'); fundoNav.className = 'hx-nav-bg'; D.body.appendChild(fundoNav);
    var burger = D.getElementById('hx-burger'), aberto = false, overflowAntes = '';
    function definir(v) {
      aberto = v;
      nav.classList.toggle('hx-open', v); fundoNav.classList.toggle('on', v);
      burger.setAttribute('aria-expanded', v ? 'true' : 'false');
      burger.setAttribute('aria-label', v ? 'Fechar menu' : 'Abrir menu');
      if (v) { overflowAntes = R.style.overflow; R.style.overflow = 'hidden'; } else { R.style.overflow = overflowAntes; }
    }
    burger.addEventListener('click', function () { definir(!aberto); });
    fundoNav.addEventListener('click', function () { definir(false); });
    nav.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a')) definir(false); });
    D.addEventListener('keydown', function (e) { if (e.key === 'Escape' && aberto) definir(false); });
    W.addEventListener('resize', function () { if (aberto && W.innerWidth > 768) definir(false); });
    W.addEventListener('pageshow', function () { if (aberto) definir(false); });
  }

  /* ---------- ADMIN: escolher a foto de perfil entre os participantes (estilo Netflix) ---------- */
  var EQUIPE = [
    { nome: 'Pedro Marchetti', img: './img/Pedro.png' }, { nome: 'Lucas', img: './img/Lucas.png' },
    { nome: 'Vitor Pereira', img: './img/Vitor (2).png' }, { nome: 'Lorenzo', img: './img/Lorenzo.png' },
    { nome: 'Marcos', img: './img/Marcos.png' }, { nome: 'Paulo', img: './img/Paulo.jpg' },
    { nome: 'Logo HÜST', img: './img/logoHustverme.png' }
  ];
  function seletorFotosAdmin() {
    var modal = D.getElementById('modalPerfil');
    if (!modal || D.getElementById('seletorIconesAdmin')) return;      // o index já tem o próprio (usa a mesma lista)
    function montar() {
      var u = lerLS('hust_user'), card = modal.querySelector('.perfil-card');
      if (!card || !u || !u.isAdmin || D.getElementById('hx-picker')) return;
      var caixa = D.createElement('div');
      caixa.id = 'hx-picker'; caixa.className = 'netflix-picker-box';
      caixa.innerHTML = '<div class="netflix-picker-titulo">✅ Ícones dos Participantes (Modo Admin)</div><div class="netflix-grid"></div><button type="button" class="btn-link-url-admin">🔗 Ou colar link (URL) personalizado</button>';
      var grade = caixa.querySelector('.netflix-grid');
      function marcar() {
        var atual = (lerLS('hust_user') || {}).foto;
        [].forEach.call(grade.children, function (b) { b.classList.toggle('ativo', b.getAttribute('data-img') === atual); });
      }
      function aplicar(src) {
        var usr = lerLS('hust_user'); if (!usr) return;
        usr.foto = src; try { localStorage.setItem('hust_user', JSON.stringify(usr)); } catch (e) {}
        ['img-perfil-nav', 'img-perfil-modal'].forEach(function (id) { var im = D.getElementById(id); if (im) im.src = src; });
        if (typeof W.verificarPerfil === 'function') W.verificarPerfil();
        marcar();
      }
      EQUIPE.forEach(function (it) {
        var b = D.createElement('button');
        b.type = 'button'; b.className = 'netflix-icon-card'; b.title = it.nome; b.setAttribute('aria-label', it.nome); b.setAttribute('data-img', it.img);
        b.innerHTML = '<img src="' + esc(it.img) + '" alt="' + esc(it.nome) + '" onerror="this.src=\'./img/logoHustverme.png\'">';
        b.addEventListener('click', function () { aplicar(it.img); });
        grade.appendChild(b);
      });
      caixa.querySelector('.btn-link-url-admin').addEventListener('click', function () {
        var url = W.prompt('Cole aqui o link (URL) da nova foto de perfil:');
        if (url && url.trim()) aplicar(url.trim());
      });
      var sair = card.querySelector('.btn-sair-conta');
      card.insertBefore(caixa, sair || null);
      marcar();
    }
    new MutationObserver(function () { if (modal.style.display === 'flex') montar(); }).observe(modal, { attributes: true, attributeFilter: ['style'] });
  }

  /* ---------- MODO ADMIN: botão ESTOQUE na navbar de todas as páginas ---------- */
  function modoAdmin() {
    var u = lerLS('hust_user');
    if (!u || !u.isAdmin) return;
    R.setAttribute('data-hust-admin', '1');
    setTimeout(function () {
      var perfil = D.getElementById('btn-perfil');
      if (!perfil || !perfil.parentNode) return;
      var ja = perfil.parentNode.parentNode.querySelectorAll('a[href]');
      for (var i = 0; i < ja.length; i++) { if (/estoque\.html$/i.test(ja[i].getAttribute('href') || '') && ja[i].textContent.trim()) return; }
      var a = D.createElement('a');
      a.className = 'hx-admin-btn'; a.href = 'estoque.html'; a.title = 'Painel de estoque (administrador)';
      a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>ESTOQUE';
      perfil.parentNode.insertBefore(a, perfil.nextSibling);
      var nav = D.getElementById('menuNav');
      if (nav && !nav.querySelector('.hx-admin-link')) { var l = D.createElement('a'); l.className = 'hx-admin-link'; l.href = 'estoque.html'; l.textContent = 'ESTOQUE (ADMIN)'; nav.appendChild(l); }
    }, 500);
  }

  /* ---------- MENU: DESTACA A PÁGINA ATUAL ---------- */
  function menuAtual() {
    var atual = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var links = D.querySelectorAll('.navbar nav a[href]');
    for (var i = 0; i < links.length; i++) {
      var h = (links[i].getAttribute('href') || '').split('?')[0].split('#')[0].toLowerCase();
      if (h === atual) links[i].setAttribute('aria-current', 'page');
    }
  }

  /* ---------- IMAGENS: remove o brilho de carregamento quando chegam ---------- */
  D.addEventListener('load', function (e) { if (e.target && e.target.tagName === 'IMG') e.target.classList.add('hx-ok'); }, true);
  D.addEventListener('error', function (e) { if (e.target && e.target.tagName === 'IMG') e.target.classList.add('hx-ok'); }, true);

  /* ---------- VÍDEOS: só tocam quando aparecem na tela ---------- */
  function videosInteligentes() {
    if (!('IntersectionObserver' in W)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { if (v.hasAttribute('autoplay')) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } }
        else v.pause();
      });
    }, { threshold: 0.25 });
    D.querySelectorAll('video[autoplay]').forEach(function (v) { io.observe(v); });
  }

  var TOQUE = W.matchMedia ? W.matchMedia('(max-width:768px), (hover:none) and (pointer:coarse)') : { matches: false };

  /* ---------- CARROSSÉIS DE PRODUTOS (um só código para todas as páginas) ---------- */
  function initCarrosseis(raiz) {
    (raiz || D).querySelectorAll('.secao-produtos').forEach(function (secao) {
      var lista = secao.querySelector('.lista'), vp = secao.querySelector('.carrossel-produtos');
      var bE = secao.querySelector('.btn-esquerda'), bD = secao.querySelector('.btn-direita');
      if (!lista || !vp || !bE || !bD || secao.getAttribute('data-hx-car')) return;
      secao.setAttribute('data-hx-car', '1');
      var pos = 0;
      function passo() {
        var c = lista.querySelector('.card'); if (!c) return 300;
        var cs = W.getComputedStyle(lista), gap = parseFloat(cs.columnGap || cs.gap) || 20;
        return c.getBoundingClientRect().width + gap;
      }
      function limite() { return Math.min(0, -(lista.scrollWidth - vp.clientWidth)); }
      function aplicar() {
        var l = limite();
        if (pos < l) pos = l; if (pos > 0) pos = 0;
        lista.style.transform = 'translate3d(' + pos + 'px,0,0)';
        bE.disabled = pos >= 0; bD.disabled = pos <= l + 1;
      }
      bD.addEventListener('click', function () { pos -= passo(); aplicar(); });
      bE.addEventListener('click', function () { pos += passo(); aplicar(); });
      var x0 = null;
      // No celular/tablet o carrossel é rolagem nativa com o dedo (sem setas); estes gestos valem só p/ telas híbridas
      vp.addEventListener('touchstart', function (e) { x0 = TOQUE.matches ? null : e.touches[0].clientX; }, { passive: true });
      vp.addEventListener('touchend', function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0; x0 = null;
        if (Math.abs(dx) > 40) { pos += dx < 0 ? -passo() : passo(); aplicar(); }
      }, { passive: true });
      W.addEventListener('resize', aplicar);
      aplicar();
    });
  }

  /* ---------- SEQUÊNCIA DE 15 SEGUNDOS ---------- */
  function listaItens(textos) {
    return '<ul class="hx-list">' + textos.map(function (t, k) { return '<li style="--k:' + k + '">' + icone('check') + esc(t) + '</li>'; }).join('') + '</ul>';
  }
  function artLink() {
    var pk = ''; for (var k = 0; k < 5; k++) pk += '<i style="--k:' + k + '"></i>';
    return '<div class="hx-link"><div class="hx-node">' + logoSVG('') + '</div><div class="hx-wire">' + pk + '</div><div class="hx-node nt"><span><b>nova</b>trust</span></div></div>';
  }
  function artCheck() {
    var b = ''; for (var k = 0; k < 12; k++) b += '<i style="--k:' + k + '"></i>';
    return '<div class="hx-check"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" pathLength="1"/><path d="m30 52 14 14 27-30" pathLength="1"/></svg><div class="hx-burst">' + b + '</div></div>';
  }
  function cenasDe(tipo, op) {
    var nome = esc(op.usuario || 'cliente'), itens = Number(op.itens || 0), total = Number(op.total || 0), saldo = Number(op.saldo || 0);
    if (tipo === 'pagamento') {
      var base = Math.max(saldo, total, 1);
      return [
        { ms: 3000, t: 'Autorizando pagamento', s: 'Compra na ' + esc(op.loja || 'HÜST TÊNIS') + ' · ' + brl(total), msg: 'Autorizando a transação…',
          h: '<div class="hx-card"><i></i><span>•••• •••• •••• 8842</span></div>' },
        { ms: 3200, t: 'Validando saldo', s: 'Conferindo o saldo disponível na conta.', msg: 'Validando saldo…',
          h: '<div class="hx-bars"><div><small><span>Saldo disponível</span><b>' + brl(saldo) + '</b></small><div class="hx-track"><i style="--w:100%"></i></div></div><div><small><span>Valor da compra</span><b>' + brl(total) + '</b></small><div class="hx-track"><i style="--w:' + Math.min(100, Math.round(total / base * 100)) + '%"></i></div></div></div>' },
        { ms: 3600, t: 'Confirmando com a loja', s: 'Avisando a Hüst sobre o pagamento.', msg: 'Confirmando com a HÜST…', h: artLink() },
        { ms: 3000, t: 'Atualizando estoque', s: 'Separando suas peças.', msg: 'Atualizando estoque…',
          h: '<div class="hx-boxes"><i style="--k:0"></i><i style="--k:1"></i><i style="--k:2"></i></div>' + listaItens(['Peças reservadas', 'Estoque atualizado']) },
        { ms: 2200, t: 'Pagamento aprovado', s: 'Obrigado pela compra!', msg: 'Finalizando…', h: artCheck() }
      ];
    }
    return [
      { ms: 3000, t: 'Pedido confirmado', s: 'Seu carrinho foi reservado na Hüst.', msg: 'Reservando seu pedido…',
        h: '<svg class="hx-art-logo" viewBox="' + LOGO_VB + '" aria-hidden="true"><path class="hx-draw" pathLength="1" d="' + LOGO_D + '" fill-rule="evenodd"/></svg>' +
           '<div class="hx-chips"><span class="hx-chip"><b data-count="' + itens + '" data-int="1">0</b> ' + (itens === 1 ? 'item' : 'itens') + '</span><span class="hx-chip">Total <b data-count="' + total + '">R$ 0,00</b></span></div>' },
      { ms: 3200, t: 'Protegendo sua compra', s: '', msg: 'Criptografando seus dados…',
        h: '<div class="hx-shield">' + icone('shield') + '</div>' + listaItens(['Conexão criptografada', 'Carrinho validado', 'Dados protegidos']) },
      { ms: 3600, t: 'Conectando ao NovaTrust', s: 'Abrindo um canal seguro entre a loja e o banco.', msg: 'Estabelecendo conexão com o banco…', h: artLink() },
      { ms: 3000, t: 'Olá, ' + nome, s: 'Autenticando seu acesso.', msg: 'Reconhecendo face…',
        h: '<div class="hx-scan"><b></b><b></b><b></b><b></b>' + icone('face') + '<u></u></div>' },
      { ms: 2200, t: 'Tudo pronto', s: 'Abrindo o NovaTrust.', msg: 'Redirecionando para o banco…', h: artCheck() }
    ];
  }

  function sequencia(op) {
    op = op || {};
    if (D.getElementById('hx-seq') || !D.body) return Promise.resolve(false);
    var tipo = op.tipo === 'pagamento' ? 'pagamento' : 'checkout';
    return new Promise(function (resolve) {
      var cenas = cenasDe(tipo, op), f = (op.duracao || DURACAO_SEQUENCIA_MS) / 15000, total = 0;
      cenas.forEach(function (c) { c.ms = Math.round(c.ms * f); total += c.ms; });

      var root = D.createElement('div');
      root.id = 'hx-seq'; root.tabIndex = -1;
      root.setAttribute('data-tipo', tipo);
      root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true');
      root.setAttribute('aria-label', tipo === 'pagamento' ? 'Processando pagamento' : 'Preparando pagamento seguro');
      root.innerHTML =
        '<div class="hx-seq-top"><span class="hx-seq-brand">' + logoSVG('') + '</span><span class="hx-seq-lock">' + icone('lock') + 'Ambiente seguro</span></div>' +
        '<div class="hx-seq-stage">' + cenas.map(function (c) { return '<section class="hx-sc"><h2>' + c.t + '</h2>' + (c.s ? '<p>' + c.s + '</p>' : '') + c.h + '</section>'; }).join('') + '</div>' +
        '<div class="hx-seq-foot"><div class="hx-seq-msg" aria-live="polite"></div><div class="hx-seq-bar"><i></i></div>' +
        '<div class="hx-seq-meta"><span class="hx-pct">0%</span>' + (op.permitirPular === false ? '<span></span>' : '<button type="button" class="hx-skip">Pular</button>') + '</div></div>';
      D.body.appendChild(root);

      var overflowAntes = R.style.overflow; R.style.overflow = 'hidden';
      var scs = root.querySelectorAll('.hx-sc'), msg = root.querySelector('.hx-seq-msg'), bar = root.querySelector('.hx-seq-bar i');
      var pct = root.querySelector('.hx-pct'), skip = root.querySelector('.hx-skip');
      var timers = [], raf = 0, fim = false, atual = -1, t0 = performance.now();

      function contar(sc) {
        sc.querySelectorAll('[data-count]').forEach(function (el) {
          var alvo = parseFloat(el.getAttribute('data-count')) || 0, inteiro = el.hasAttribute('data-int'), ini = performance.now();
          (function passo(agora) {
            var p = Math.min(1, (agora - ini) / 1200), v = alvo * (1 - Math.pow(1 - p, 3));
            el.textContent = inteiro ? String(Math.round(v)) : brl(v);
            if (p < 1) requestAnimationFrame(passo);
          })(ini);
        });
      }
      function mostrar(i) {
        if (atual >= 0) { scs[atual].classList.remove('on'); scs[atual].classList.add('sai'); }
        atual = i; scs[i].classList.remove('sai'); scs[i].classList.add('on');
        msg.textContent = cenas[i].msg; contar(scs[i]);
      }
      function tick() {
        if (fim) return;
        var el = performance.now() - t0;
        pct.textContent = Math.min(100, Math.round(el / total * 100)) + '%';
        raf = requestAnimationFrame(tick);
      }
      function encerrar(pulou) {
        if (fim) return; fim = true;
        timers.forEach(clearTimeout); cancelAnimationFrame(raf);
        D.removeEventListener('keydown', teclas);
        pct.textContent = '100%'; bar.style.transition = 'width .2s linear'; bar.style.width = '100%';
        function liberar() { R.style.overflow = overflowAntes; }
        if (op.manter) { liberar(); resolve(true); return; }       // navegação: mantém a tela até a próxima página abrir
        root.classList.add('fim');
        setTimeout(function () { if (root.parentNode) root.parentNode.removeChild(root); liberar(); resolve(true); }, pulou ? 380 : 460);
      }
      function teclas(e) { if (e.key === 'Escape' && op.permitirPular !== false) encerrar(true); }
      D.addEventListener('keydown', teclas);
      if (skip) {
        skip.addEventListener('click', function () { encerrar(true); });
        timers.push(setTimeout(function () { skip.classList.add('vis'); }, 3500));
      }

      requestAnimationFrame(function () {
        root.classList.add('on'); root.focus();
        bar.style.transition = 'width ' + total + 'ms linear'; bar.style.width = '100%';
        var acc = 0;
        cenas.forEach(function (c, i) { timers.push(setTimeout(function () { mostrar(i); }, acc)); acc += c.ms; });
        timers.push(setTimeout(function () { encerrar(false); }, total));
        tick();
      });
    });
  }
  /* voltar pelo botão "voltar" do navegador não deve deixar a tela presa */
  W.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    var s = D.getElementById('hx-seq'); if (s && s.parentNode) s.parentNode.removeChild(s);
    R.style.overflow = '';
  });

  /* ---------- INICIALIZAÇÃO ---------- */
  intro();
  function pronto() { fundo(); interfaceRolagem(); menuAtual(); menuMobile(); seletorFotosAdmin(); modoAdmin(); videosInteligentes(); initCarrosseis(); }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', pronto); else pronto();

  W.HustFX = { sequencia: sequencia, parsePreco: parsePreco, brl: brl, initCarrosseis: initCarrosseis, lerLS: lerLS, DURACAO_SEQUENCIA_MS: DURACAO_SEQUENCIA_MS };
})();

/* ============================================================================
   HÜST — ESTOQUE × LOJA
   Lê o banco do painel admin (localStorage 'hust_estoque_db') e aplica na vitrine:
   produto BLOQUEADO ou com 0 un. => selo "ESGOTADO", botão COMPRA RÁPIDA travado,
   "Adicionar ao Carrinho" do modal travado e aviso "Produto esgotado" na tela.
   Atualiza sozinho quando o admin altera o estoque (mesma aba, outra aba ou outro retorno à página).
   Não altera nenhum outro comportamento/visual das páginas.
   ========================================================================== */
(function () {
  'use strict';
  var D = document, W = window;
  var CHAVE = 'hust_estoque_db';
  var MSG = 'Produto esgotado: não há mais estoque disponível.';
  var ultimoBruto = null;

  /* ---------- leitura do banco ---------- */
  function lerBruto() { try { return localStorage.getItem(CHAVE); } catch (e) { return null; } }
  function lerDB(bruto) {
    try { var a = JSON.parse(bruto); return Array.isArray(a) ? a : null; } catch (e) { return null; }
  }
  function chaveImg(src) {
    try {
      var p = decodeURIComponent(new URL(src, W.location.href).pathname).toLowerCase();
      var i = p.indexOf('/img/');
      return i >= 0 ? p.slice(i) : p;
    } catch (e) { return String(src || '').toLowerCase(); }
  }
  function chaveNome(n) { return String(n || '').replace(/\s+/g, ' ').trim().toLowerCase(); }
  function indisponivel(item) {
    var q = Number(item && item.qtd);
    return !!(item && item.bloqueado) || (isFinite(q) && q <= 0);
  }
  function montarMapas(db) {
    var porImg = {}, porNome = {};
    (db || []).forEach(function (it) {
      if (!it) return;
      if (it.imagem) porImg[chaveImg(it.imagem)] = it;
      if (it.nome) porNome[chaveNome(it.nome)] = it;
    });
    return { img: porImg, nome: porNome };
  }

  /* ---------- estilos (só afetam produtos esgotados) ---------- */
  function injetarCSS() {
    if (D.getElementById('hx-estoque-css')) return;
    var s = D.createElement('style'); s.id = 'hx-estoque-css';
    s.textContent = [
      '.card.hx-esgotado img{opacity:.38;filter:grayscale(.65)}',
      '.card.hx-esgotado .compra{background:#262626!important;color:#9a9a9a!important;border-color:#3a3a3a!important;cursor:not-allowed!important;box-shadow:none!important;transform:none!important}',
      '.hx-esg-selo{position:absolute;z-index:5;top:40%;left:50%;transform:translate(-50%,-50%) rotate(-8deg);padding:8px 18px;border:2px solid #ff3333;border-radius:8px;background:rgba(0,0,0,.84);color:#ff3333;font-weight:900;font-size:.95rem;letter-spacing:.14em;white-space:nowrap;pointer-events:none;text-transform:uppercase}',
      '#modalBtnComprar.hx-esgotado-btn{background:#262626!important;color:#9a9a9a!important;border-color:#3a3a3a!important;cursor:not-allowed!important;box-shadow:none!important}',
      '#hx-toast-estoque{position:fixed;left:50%;bottom:28px;transform:translate(-50%,16px);max-width:min(92vw,460px);padding:14px 20px;border-radius:12px;background:#111;border:1px solid #ff3333;border-left:5px solid #ff3333;color:#fff;font-size:.95rem;font-weight:700;line-height:1.35;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.6);opacity:0;visibility:hidden;transition:opacity .25s ease,transform .25s ease,visibility .25s;z-index:2147483200}',
      '#hx-toast-estoque.on{opacity:1;visibility:visible;transform:translate(-50%,0)}',
      '@media (prefers-reduced-motion:reduce){#hx-toast-estoque{transition:none}}'
    ].join('');
    (D.head || D.documentElement).appendChild(s);
  }

  /* ---------- aviso na tela ---------- */
  var toastTimer = null;
  function avisar() {
    var t = D.getElementById('hx-toast-estoque');
    if (!t) {
      t = D.createElement('div'); t.id = 'hx-toast-estoque';
      t.setAttribute('role', 'alert'); t.setAttribute('aria-live', 'assertive');
      D.body.appendChild(t);
    }
    t.textContent = MSG;
    t.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('on'); }, 3500);
  }

  /* ---------- aplicar o estado em cada card ---------- */
  function posicionarSelo(card) {
    var selo = card.querySelector('.hx-esg-selo'), img = card.querySelector('img');
    if (!selo || !img || !img.offsetHeight) return;
    var top = 0, left = 0, el = img;
    while (el && el !== card) { top += el.offsetTop; left += el.offsetLeft; el = el.offsetParent; }
    if (el !== card) return;
    selo.style.top = (top + img.offsetHeight / 2) + 'px';
    selo.style.left = (left + img.offsetWidth / 2) + 'px';
  }
  function marcarEsgotado(card, btn) {
    if (!card.classList.contains('hx-esgotado')) {
      card.classList.add('hx-esgotado');
      if (W.getComputedStyle(card).position === 'static') card.style.position = 'relative';
      var img = card.querySelector('img');
      if (img && !img.dataset.hxEsgLoad) {
        img.dataset.hxEsgLoad = '1';
        img.addEventListener('load', function () { posicionarSelo(card); });
      }
    }
    if (!card.querySelector('.hx-esg-selo')) {
      var s = D.createElement('div'); s.className = 'hx-esg-selo'; s.textContent = 'Esgotado';
      card.appendChild(s);
    }
    if (btn) {
      if (btn.dataset.hxTxt === undefined) btn.dataset.hxTxt = btn.textContent;
      btn.textContent = 'ESGOTADO';
      btn.setAttribute('aria-disabled', 'true');
      btn.setAttribute('title', MSG);
    }
    posicionarSelo(card);
  }
  function marcarDisponivel(card, btn) {
    if (!card.classList.contains('hx-esgotado')) return;
    card.classList.remove('hx-esgotado');
    var s = card.querySelector('.hx-esg-selo'); if (s) s.parentNode.removeChild(s);
    if (btn) {
      if (btn.dataset.hxTxt !== undefined) { btn.textContent = btn.dataset.hxTxt; delete btn.dataset.hxTxt; }
      btn.removeAttribute('aria-disabled'); btn.removeAttribute('title');
    }
  }
  function aplicar() {
    var bruto = lerBruto();
    ultimoBruto = bruto;
    var db = lerDB(bruto);
    var mapas = montarMapas(db);
    var cards = D.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i], btn = card.querySelector('.compra');
      if (!btn) continue;
      var img = card.querySelector('img'), nomeEl = card.querySelector('.nome');
      var item = null;
      if (db) {
        if (img) item = mapas.img[chaveImg(img.getAttribute('src') || img.src)] || null;
        if (!item && nomeEl) item = mapas.nome[chaveNome(nomeEl.textContent)] || null;
      }
      if (item && indisponivel(item)) marcarEsgotado(card, btn); else marcarDisponivel(card, btn);
    }
    if (cardAberto) atualizarBotaoModal(cardAberto);
  }

  /* ---------- botão "Adicionar ao Carrinho" do modal de detalhes ---------- */
  var cardAberto = null;
  function atualizarBotaoModal(card) {
    var b = D.getElementById('modalBtnComprar'); if (!b) return;
    var esg = !!(card && card.classList.contains('hx-esgotado'));
    if (esg) {
      if (b.dataset.hxTxt === undefined) b.dataset.hxTxt = b.textContent;
      b.textContent = 'Produto Esgotado';
      b.classList.add('hx-esgotado-btn');
      b.setAttribute('aria-disabled', 'true');
    } else if (b.dataset.hxTxt !== undefined) {
      b.textContent = b.dataset.hxTxt; delete b.dataset.hxTxt;
      b.classList.remove('hx-esgotado-btn'); b.removeAttribute('aria-disabled');
    }
  }

  /* ---------- bloqueio da compra (roda ANTES dos scripts das páginas) ---------- */
  D.addEventListener('click', function (e) {
    var alvo = e.target; if (!alvo || !alvo.closest) return;

    var botao = alvo.closest('.compra');
    if (botao) {
      var card = botao.closest('.card');
      if (card && card.classList.contains('hx-esgotado')) {
        e.preventDefault(); e.stopImmediatePropagation(); avisar();
      }
      return;
    }
    var imgCard = alvo.closest('.card img');
    if (imgCard) {
      cardAberto = imgCard.closest('.card');
      setTimeout(function () { atualizarBotaoModal(cardAberto); }, 0);
    }
  }, true);

  /* ---------- manter sincronizado ---------- */
  function checar() { if (lerBruto() !== ultimoBruto) aplicar(); }
  function iniciar() {
    injetarCSS(); aplicar();
    W.addEventListener('storage', function (e) { if (!e.key || e.key === CHAVE) aplicar(); });
    W.addEventListener('pageshow', aplicar);
    W.addEventListener('resize', function () {
      var c = D.querySelectorAll('.card.hx-esgotado');
      for (var i = 0; i < c.length; i++) posicionarSelo(c[i]);
    });
    D.addEventListener('visibilitychange', function () { if (!D.hidden) checar(); });
    setInterval(checar, 2000);
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
