/* Antonovych Design — движок презентации. Без библиотек. */
(function () {
  'use strict';

  var S = window.SLIDES || [];
  var WORD = '<span class="logo-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="217.59 14.99 163.96 46.6" role="img" aria-label="Antonovych Design"><g fill="currentColor"><path d="M380.55 58.36L318.73 58.36L318.73 58.22L380.41 58.22L380.41 16.88L218.74 16.88L218.74 58.22L278.35 58.22L278.35 58.36L218.59 58.36L218.59 16.74L380.55 16.74L380.55 58.36"/><path d="M300.39 16.81C300.39 17.26 300.03 17.62 299.57 17.62C299.12 17.62 298.76 17.26 298.76 16.81C298.76 16.36 299.12 15.99 299.57 15.99C300.03 15.99 300.39 16.36 300.39 16.81"/><path d="M285.45 60.16C285.75 60 285.98 59.76 286.14 59.45C286.31 59.13 286.39 58.76 286.39 58.32C286.39 57.9 286.31 57.52 286.16 57.18C286 56.84 285.77 56.58 285.48 56.38C285.19 56.18 284.85 56.09 284.47 56.09C284.26 56.09 284.1 56.1 283.99 56.12C283.88 56.15 283.8 56.19 283.74 56.26C283.69 56.34 283.67 56.44 283.67 56.59L283.67 59.82C283.67 59.96 283.69 60.07 283.73 60.16C283.77 60.24 283.84 60.3 283.96 60.34C284.07 60.38 284.23 60.4 284.43 60.4C284.82 60.4 285.16 60.32 285.45 60.16M282.94 60.47C282.85 60.48 282.58 60.48 282.58 60.48L282.58 60.39C282.58 60.39 282.9 60.38 282.98 60.36C283.06 60.33 283.12 60.28 283.15 60.22C283.18 60.15 283.2 60.04 283.2 59.9L283.2 56.57C283.2 56.43 283.18 56.32 283.15 56.26C283.13 56.19 283.07 56.14 282.99 56.12C282.9 56.09 282.59 56.08 282.59 56.08L282.59 55.99L284.4 55.99C284.9 55.99 285.34 56.07 285.72 56.26C286.11 56.46 286.41 56.72 286.62 57.05C286.83 57.38 286.94 57.75 286.94 58.16C286.94 58.62 286.83 59.03 286.61 59.39C286.39 59.75 286.1 60.02 285.72 60.22C285.35 60.41 284.94 60.48 284.5 60.48C284.37 60.48 282.94 60.47 282.94 60.47"/><path d="M292.22 59.42C292.22 59.42 292.15 60.04 292.15 60.37C292.15 60.41 292.15 60.43 292.13 60.45C292.11 60.47 292.08 60.48 292.04 60.48L289.03 60.48L289.03 60.39C289.03 60.39 289.35 60.38 289.43 60.36C289.52 60.33 289.57 60.28 289.6 60.22C289.64 60.15 289.65 60.04 289.65 59.9L289.65 56.57C289.65 56.43 289.64 56.32 289.6 56.26C289.57 56.19 289.52 56.14 289.43 56.12C289.35 56.09 289.03 56.08 289.03 56.08L289.03 55.99L291.92 55.99C291.96 55.99 291.98 56.01 291.98 56.06L292 56.94L291.92 56.95C291.92 56.95 291.88 56.54 291.69 56.35C291.55 56.22 291.36 56.14 291.14 56.14L290.7 56.14C290.53 56.14 290.41 56.16 290.33 56.18C290.25 56.21 290.19 56.25 290.16 56.32C290.13 56.38 290.12 56.48 290.12 56.61L290.12 58.07L290.99 58.07C291.22 58.07 291.39 58.03 291.48 57.95C291.62 57.84 291.63 57.56 291.63 57.56L291.72 57.56L291.72 58.81L291.64 58.81C291.64 58.81 291.62 58.49 291.48 58.35C291.39 58.26 291.21 58.22 290.97 58.22L290.12 58.22L290.12 59.87C290.12 60 290.13 60.1 290.16 60.16C290.19 60.22 290.24 60.27 290.32 60.29C290.39 60.31 290.51 60.33 290.68 60.33L291.25 60.33C291.48 60.33 291.67 60.25 291.83 60.08C292.05 59.83 292.13 59.41 292.13 59.41L292.22 59.42"/><path d="M295.19 57.32C295.28 57.46 295.39 57.57 295.52 57.67C295.65 57.76 295.83 57.88 296.07 58.02C296.31 58.17 296.51 58.3 296.65 58.4C296.79 58.5 296.91 58.63 297 58.78C297.1 58.94 297.15 59.12 297.15 59.34C297.15 59.57 297.09 59.77 296.98 59.96C296.86 60.15 296.69 60.29 296.47 60.4C296.25 60.51 296 60.55 295.69 60.55C295.09 60.55 294.61 60.26 294.61 60.26L294.5 59.2L294.58 59.19C294.58 59.19 294.71 59.73 295.01 60.08C295.22 60.32 295.49 60.45 295.84 60.45C296.08 60.45 296.28 60.38 296.44 60.25C296.61 60.12 296.69 59.91 296.69 59.62C296.69 59.41 296.64 59.22 296.55 59.06C296.45 58.91 296.34 58.78 296.2 58.67C296.06 58.57 295.88 58.45 295.64 58.31C295.41 58.17 295.23 58.05 295.1 57.95C294.97 57.85 294.86 57.72 294.77 57.57C294.68 57.42 294.63 57.24 294.63 57.03C294.63 56.79 294.69 56.59 294.82 56.42C294.95 56.25 295.11 56.12 295.32 56.04C295.52 55.96 295.74 55.93 295.97 55.93C296.5 55.93 296.91 56.15 296.91 56.15L296.96 57.03L296.88 57.03C296.88 57.03 296.82 56.64 296.58 56.34C296.41 56.13 296.17 56.02 295.85 56.02C295.58 56.02 295.38 56.1 295.25 56.25C295.12 56.41 295.05 56.6 295.05 56.83C295.05 57.02 295.1 57.18 295.19 57.32"/><path d="M300.44 60.22C300.47 60.28 300.53 60.33 300.61 60.36C300.7 60.38 300.83 60.39 301.01 60.39C301.02 60.39 301.01 60.48 301.01 60.48L299.31 60.48C299.31 60.48 299.3 60.39 299.31 60.39C299.49 60.39 299.62 60.38 299.71 60.36C299.79 60.33 299.85 60.28 299.88 60.22C299.91 60.15 299.93 60.04 299.93 59.9L299.93 56.57C299.93 56.43 299.91 56.32 299.88 56.26C299.85 56.19 299.79 56.14 299.71 56.12C299.62 56.09 299.49 56.08 299.31 56.08C299.3 56.08 299.31 55.99 299.31 55.99L301.01 55.99C301.01 55.99 301.02 56.08 301.01 56.08C300.83 56.08 300.7 56.09 300.62 56.12C300.54 56.15 300.48 56.2 300.45 56.27C300.42 56.34 300.4 56.44 300.4 56.59L300.4 59.9C300.4 60.04 300.42 60.15 300.44 60.22"/><path d="M304.33 60.26C303.95 60.06 303.65 59.79 303.45 59.44C303.24 59.1 303.14 58.71 303.14 58.29C303.14 57.83 303.26 57.41 303.5 57.05C303.73 56.7 304.06 56.42 304.47 56.21C304.89 56.01 305.36 55.91 305.88 55.91C306.11 55.91 306.33 55.94 306.55 55.98C306.76 56.03 306.93 56.09 307.07 56.17C307.11 56.2 307.14 56.22 307.15 56.23C307.16 56.25 307.15 57.14 307.15 57.14L307.06 57.15C306.98 56.76 306.86 56.54 306.58 56.35C306.31 56.16 305.97 56.07 305.57 56.07C304.96 56.07 304.5 56.25 304.17 56.6C303.84 56.94 303.67 57.42 303.67 58.03C303.67 58.49 303.77 58.91 303.96 59.28C304.14 59.64 304.41 59.93 304.74 60.13C305.08 60.34 305.45 60.44 305.87 60.44C306.11 60.44 306.3 60.42 306.44 60.38C306.57 60.33 306.67 60.25 306.73 60.13C306.79 60 306.82 59.82 306.82 59.57C306.82 59.33 306.81 59.15 306.78 59.05C306.75 58.96 306.68 58.89 306.57 58.86C306.46 58.82 306.01 58.81 306.01 58.81L306 58.7L307.61 58.7L307.61 58.81C307.61 58.81 307.32 58.83 307.28 59.07C307.26 59.18 307.25 59.37 307.25 59.65C307.25 59.86 307.26 60.01 307.28 60.1C307.3 60.2 307.3 60.25 307.3 60.28C307.3 60.31 307.3 60.32 307.29 60.33C307.28 60.34 307.26 60.35 307.23 60.36C306.65 60.5 306.14 60.56 305.7 60.56C305.17 60.56 304.72 60.46 304.33 60.26"/><path d="M314.4 56.08C314.2 56.08 314.05 56.13 313.96 56.24C313.87 56.35 313.83 56.53 313.83 56.78L313.83 60.56C313.83 60.57 313.82 60.58 313.79 60.59C313.77 60.59 313.75 60.59 313.74 60.58L310.44 56.58L310.38 56.51L310.38 59.7C310.38 59.94 310.42 60.12 310.51 60.23C310.6 60.34 310.74 60.39 310.94 60.39L310.94 60.48L309.64 60.48L309.64 60.39C309.85 60.39 310 60.34 310.08 60.23C310.17 60.12 310.21 59.94 310.21 59.7L310.21 56.34C310.02 56.16 309.84 56.08 309.64 56.08L309.64 55.99L310.56 55.99C310.6 55.99 310.63 56 310.65 56.02C310.66 56.03 310.69 56.07 310.73 56.13C310.79 56.21 310.84 56.29 310.9 56.37L313.66 59.76L313.66 56.78C313.66 56.53 313.62 56.35 313.54 56.24C313.45 56.13 313.3 56.08 313.1 56.08L313.1 55.99L314.4 55.99L314.4 56.08"/><path d="M233.27 39.74L235.64 32.14L237.95 39.74L233.27 39.74M253.73 32.81L253.73 41.28L247.09 29.61L244.13 29.61C245.24 29.96 245.76 30.77 245.76 32.55L245.76 41.65C245.76 43.37 245.12 44.73 244.13 44.73L243.27 44.73C241.8 44.73 241.22 44.33 240.67 42.54L236.47 29.31L236.36 29.31L232.68 41.02C231.66 44.29 231.22 44.7 229.44 44.85L234.07 44.85C232.59 44.72 231.74 44.61 232.81 41.22L233.2 39.91L238.01 39.91L238.78 42.44C239.26 43.98 238.78 44.72 237.34 44.85L240.33 44.85L243.54 44.85L244.13 44.85L245.86 44.85L247.57 44.85C246.61 44.72 245.96 43.44 245.96 41.65L245.96 31.4L253.71 45.14L253.91 45.14L253.91 32.81C253.91 31.03 254.58 29.75 255.54 29.61L252.1 29.61C253.06 29.75 253.73 31.03 253.73 32.81"/><path d="M257.82 29.61L257.19 33.32C257.43 32.61 257.81 29.92 260.98 29.81C261.04 29.81 261.32 29.81 261.39 29.81L261.41 29.81L261.41 42.74C261.41 44.53 260.76 44.72 259.78 44.85L264.78 44.85C263.82 44.72 263.17 44.53 263.17 42.74L263.17 29.81L263.4 29.81C263.49 29.81 263.56 29.81 263.64 29.81C266.75 29.94 267.13 32.61 267.39 33.32L266.74 29.61L257.82 29.61"/><path d="M295.43 32.81L295.43 41.28L288.79 29.61L285.83 29.61C286.94 29.96 287.46 30.77 287.46 32.55L287.46 41.65C287.46 43.44 286.81 44.72 285.83 44.85L289.27 44.85C288.31 44.72 287.66 43.44 287.66 41.65L287.66 31.4L295.41 45.13L295.6 45.13L295.6 32.81C295.6 31.03 296.28 29.75 297.23 29.61L293.79 29.61C294.75 29.75 295.43 31.03 295.43 32.81"/><path d="M311.61 40.54C309.19 44.1 305.03 45.49 302.31 43.64C299.58 41.8 299.33 37.42 301.74 33.86C304.15 30.3 308.31 28.91 311.04 30.76C313.76 32.6 314.02 36.98 311.61 40.54M311.12 30.63C307.49 28.17 302.56 29.12 300.1 32.75C297.64 36.38 298.59 41.31 302.22 43.77C305.85 46.23 310.78 45.28 313.24 41.65C315.7 38.02 314.75 33.09 311.12 30.63"/><path d="M281.14 40.54C278.73 44.1 274.57 45.49 271.84 43.64C269.12 41.8 268.86 37.42 271.27 33.86C273.68 30.3 277.85 28.91 280.57 30.76C283.3 32.6 283.55 36.98 281.14 40.54M280.66 30.63C277.03 28.17 272.09 29.12 269.64 32.75C267.18 36.38 268.13 41.31 271.76 43.77C275.38 46.23 280.32 45.28 282.78 41.65C285.23 38.02 284.28 33.09 280.66 30.63"/><path d="M340.7 29.62L336.81 29.62C338.4 29.69 338.37 30.45 337.53 32.3L334.67 38.35L331.48 31.65C330.78 30.23 330.67 29.69 332.06 29.62L330.7 29.62L328.33 29.62C328.35 29.62 328.38 29.62 328.4 29.61L323.8 29.61C325.29 29.75 326.14 29.88 325.07 33.25L322.24 42.34L319.1 32.01C318.64 30.46 319.1 29.75 320.54 29.61L314.33 29.61C316.01 29.79 316.59 30.03 317.18 31.86L321.41 45.17L321.52 45.17L325.2 33.45C326.08 30.65 326.59 29.79 327.69 29.75C328.39 29.79 328.86 30.16 329.52 31.51L333 38.77L333 41.92C333 43.71 332.47 44.52 331.36 44.86L336.39 44.86C335.28 44.52 334.76 43.71 334.76 41.92L334.76 38.56L337.75 32.3C338.69 30.43 339.53 29.64 340.7 29.63L340.7 29.62"/><path d="M349.15 44.3C345.67 44.3 342.18 41.75 342.18 36.59C342.18 31.69 345.4 29.54 348.34 29.54C350.93 29.54 353.41 31.79 353.02 34.78L353.8 31.1C352.17 29.86 350.09 29.21 348.26 29.21C344.1 29.21 340.22 32.26 340.22 37.29C340.22 42.23 344.14 45.19 348.17 45.19C350.67 45.19 353.2 44.06 354.87 41.53L354.7 41.47C353.37 43.36 351.26 44.3 349.15 44.3"/><path d="M368.1 42.75L368.1 31.74C368.1 29.95 368.75 29.76 369.71 29.62L364.7 29.62C365.68 29.76 366.34 29.95 366.34 31.74L366.34 36.74L359.49 36.74L359.49 31.74C359.49 29.95 360.16 29.76 361.12 29.62L356.11 29.62C357.09 29.76 357.75 29.95 357.75 31.74L357.75 42.75C357.75 44.54 357.09 44.73 356.11 44.86L361.12 44.86C360.16 44.73 359.49 44.54 359.49 42.75L359.49 36.94L366.34 36.94L366.34 42.75C366.34 44.54 365.68 44.73 364.7 44.86L369.71 44.86C368.75 44.73 368.1 44.54 368.1 42.75"/></g></svg></span>';
  function brand(t) { return String(t); }
  var stage = document.getElementById('stage');
  var grid = document.getElementById('grid');
  var bar = document.getElementById('bar');
  var chrome = document.getElementById('chrome');
  var counter = document.getElementById('counter');
  var hint = document.getElementById('hint');
  var cur = 0, busy = false, hideTimer = null, hintTimer = null;

  /* ── сборка слайдов ─────────────────────────────────────────────── */
  S.forEach(function (s, i) {
    var el = document.createElement('section');
    el.className = 'slide' + (s.type === 'text' ? ' text-slide' : '');
    el.setAttribute('aria-hidden', 'true');

    if (s.type === 'cover') {
      var fc = document.createElement('div');
      fc.className = 'frame';
      var ic = document.createElement('img');
      ic.src = s.src; ic.alt = ''; ic.decoding = 'async';
      fc.appendChild(ic);
      el.appendChild(fc);
      el.classList.add('cover');
      var ui = document.createElement('div');
      ui.className = 'cover-ui';
      ui.innerHTML =
        (s.mid  ? '<div class="big">'   + s.mid  + '</div>' : '') +
        (s.foot ? '<div class="small">' + s.foot + '</div>' : '');
      el.appendChild(ui);

      var mark = document.createElement('div');
      mark.className = 'wordmark';
      mark.innerHTML = WORD;
      el.appendChild(mark);

    } else if (s.type === 'text') {
      var inner = document.createElement('div');
      inner.className = 'text-inner';
      var html = '';
      if (s.kicker) html += '<div class="kicker">' + s.kicker + '</div>';
      if (s.logo) {
        html += '<div class="wordmark-text">' +
                WORD +
                (s.year ? '<span class="year">' + s.year + '</span>' : '') + '</div>';
        el.classList.add(s.title ? 'cover-min' : 'logo-only');
      }
      if (s.logo && s.title) html += '<div class="cover-text">';
      if (s.title)  html += '<h2 class="title">' + brand(s.title) + '</h2>';
      if (s.sub)    html += '<div class="sub">' + s.sub + '</div>';
      if (s.logo && s.title) html += '</div>';
      html += '<div class="rule"></div>';
      if (s.lines && s.lines.length) {
        html += '<div class="lines">' +
          s.lines.map(function (l) { return '<span>' + l + '</span>'; }).join('') +
          '</div>';
      }
      inner.innerHTML = html;
      el.appendChild(inner);

      /* прямая речь из ролика, который идёт следом — отдельным блоком внизу экрана.
         Название бренда здесь набирается словом: это сплошной текст. */
      if (s.quotes && s.quotes.length) {
        var who0 = s.quotes[0].who || '';
        var oneVoice = s.quotes.every(function (q) { return (q.who || '') === who0; });
        var wrap = document.createElement('div');
        wrap.className = 'quotes-wrap';
        wrap.innerHTML =
          (oneVoice && who0 ? '<div class="q-who q-who-top">' + who0 + '</div>' : '') +
          '<div class="quotes' + (s.quotes.length > 2 ? ' two-col' : '') +
          (oneVoice ? ' one-voice' : '') + '">' +
          s.quotes.map(function (q) {
            return '<div class="quote">' +
              (!oneVoice && q.who ? '<div class="q-who">' + q.who + '</div>' : '') +
              '<p class="q-text">' + (q.ru || q.text || '') + '</p>' +
              '</div>';
          }).join('') +
          '</div>';
        el.classList.add('has-quotes');
        el.appendChild(wrap);
      }

    } else if (s.type === 'photo' || s.type === 'pair') {
      var f = document.createElement('div');
      f.className = 'frame photo' + (s.type === 'pair' ? ' pair' : '') + (s.small ? ' small' : '') + (s.medium ? ' medium' : '');
      var list = s.type === 'pair' ? s.src : [s.src];
      list.forEach(function (src) {
        var img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.decoding = 'async';
        img.onload = function () {            // кадр не растягиваем больше чем в 1,35 раза — иначе мылится
          var mw = Math.round(this.naturalWidth * 1.35) + 'px';
          this.style.maxWidth = this.parentNode.classList.contains('pair') ? 'min(calc(50% - 1vw), ' + mw + ')' : mw;
          this.style.maxHeight = Math.round(this.naturalHeight * 1.35) + 'px';
        };
        if (i > 1) img.loading = 'lazy';
        f.appendChild(img);
      });
      el.appendChild(f);
      if (s.label) {
        var lb = document.createElement('div');
        lb.className = 'photo-label';
        lb.textContent = s.label;
        el.appendChild(lb);
      }

    } else if (s.type === 'video') {
      var fv = document.createElement('div');
      fv.className = 'frame vid' + (s.portrait ? ' vid-portrait' : '');
      var v = document.createElement('video');
      v.src = s.src;
      v.poster = s.poster || '';
      v.preload = 'none';
      v.muted = true; v.loop = true; v.playsInline = true;
      v.setAttribute('playsinline', '');
      v.setAttribute('webkit-playsinline', '');
      fv.appendChild(v);
      el.appendChild(fv);

      /* перевод титров: рядом с кадром, никогда поверх него */
      if (s.captions && s.captions.length) {
        el.classList.add('has-subs', s.portrait ? 'subs-side' : 'subs-below');
        var box = document.createElement('div');
        box.className = 'subs';
        box.innerHTML = '<div class="subs-who"></div><div class="subs-ru"></div>';
        el.appendChild(box);
        var who = box.querySelector('.subs-who');
        var ru  = box.querySelector('.subs-ru');
        var shown = -1;
        v.addEventListener('timeupdate', function () {
          var t = v.currentTime, idx = -1;
          for (var k = 0; k < s.captions.length; k++) {
            if (t >= s.captions[k].t && t < s.captions[k].to) { idx = k; break; }
          }
          if (idx === shown) return;
          shown = idx;
          if (idx < 0) { box.classList.remove('on'); return; }
          who.textContent = s.captions[idx].who || '';
          ru.textContent  = s.captions[idx].ru;
          box.classList.add('on');
        });
        v.addEventListener('pause', function () { box.classList.remove('on'); shown = -1; });
      }

    }

    stage.appendChild(el);
  });

  var slides = Array.prototype.slice.call(stage.querySelectorAll('.slide'));

  /* ── обзорная сетка ─────────────────────────────────────────────── */
  S.forEach(function (s, i) {
    var fig = document.createElement('figure');
    if (s.type === 'text') {
      fig.innerHTML = '<div class="g-text">' + (s.title ? brand(s.title) : (s.logo ? WORD : '')) + '</div>';
    } else {
      var src = s.type === 'pair' ? s.src[0] : (s.type === 'video' ? s.poster : s.src);
      fig.innerHTML = '<img src="' + src + '" alt="" loading="lazy">';
    }
    fig.innerHTML += '<figcaption>' + String(i + 1).padStart(2, '0') + '</figcaption>';
    fig.addEventListener('click', function () { closeGrid(); go(i); });
    grid.appendChild(fig);
  });

  /* ── звук ───────────────────────────────────────────────────────────
     Фоновая музыка играет сплошняком под слайдами. На видео со своей
     звуковой дорожкой музыка уходит, слышно сам ролик; дальше музыка
     возвращается. Браузер разрешает звук только после первого действия
     пользователя, поэтому музыка стартует с первого клика или клавиши. */
  var MUSIC_VOL = 0.32;
  var music = document.createElement('audio');
  music.src = 'media/audio/background.mp3';
  music.loop = true;
  music.preload = 'auto';
  music.volume = 0;
  document.body.appendChild(music);

  var soundOn = true, audioReady = false, fadeTimer = null;

  function fadeTo(target, ms, done) {
    clearInterval(fadeTimer);
    var from = music.volume, steps = Math.max(1, Math.round(ms / 40)), k = 0;
    fadeTimer = setInterval(function () {
      k++;
      music.volume = Math.max(0, Math.min(1, from + (target - from) * k / steps));
      if (k >= steps) { clearInterval(fadeTimer); if (done) done(); }
    }, 40);
  }

  function musicPlay() {
    if (!audioReady || !soundOn) return;
    music.play().catch(function () {});
    fadeTo(MUSIC_VOL, 700);
  }
  function musicStop() {
    fadeTo(0, 350, function () { music.pause(); });
  }

  function startAudio() {
    if (audioReady) return;
    audioReady = true;
    if (S[cur].type === 'video' && !S[cur].silent) return;  // на ролике музыка молчит
    musicPlay();
  }
  ['click', 'keydown', 'touchstart', 'wheel'].forEach(function (ev) {
    window.addEventListener(ev, startAudio, { once: true, passive: true });
  });
  music.play().then(function () { audioReady = true; fadeTo(MUSIC_VOL, 900); })
              .catch(function () {});

  /* ── переходы ───────────────────────────────────────────────────── */
  function media(i, action) {
    var s = S[i], v = slides[i] && slides[i].querySelector('video');
    if (action === 'play') {
      if (!v) { musicPlay(); return; }
      if (v.preload === 'none') v.preload = 'auto';
      v.currentTime = 0;
      if (s.silent) {               // у ролика нет своей дорожки — музыка продолжает
        v.muted = true;
        musicPlay();
      } else {
        musicStop();
        v.muted = !soundOn;
      }
      v.play().catch(function (err) {
        // звук мог быть ещё запрещён браузером — тогда играем ролик без него
        if (err && err.name === 'NotAllowedError') {
          v.muted = true;
          v.play().catch(function () {});
        }
      });
    } else {
      if (v) { v.pause(); v.muted = true; }
    }
  }

  /* общая кнопка звука */
  var sndBtn = document.createElement('button');
  sndBtn.id = 'sound-toggle';
  sndBtn.type = 'button';
  sndBtn.textContent = '♪';
  sndBtn.title = 'Звук';
  sndBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    soundOn = !soundOn;
    sndBtn.classList.toggle('off', !soundOn);
    audioReady = true;
    var v = slides[cur] && slides[cur].querySelector('video');
    if (!soundOn) {
      clearInterval(fadeTimer); music.pause(); music.volume = 0;
      if (v) v.muted = true;
    } else if (S[cur].type === 'video' && !S[cur].silent) {
      if (v) { v.muted = false; v.play().catch(function () {}); }
    } else {
      musicPlay();
    }
  });
  document.body.appendChild(sndBtn);

  function preload(i) {
    var s = S[i]; if (!s) return;
    if (s.type === 'photo' || s.type === 'pair') {
      (s.type === 'pair' ? s.src : [s.src]).forEach(function (src) { new Image().src = src; });
    }
    var v = slides[i] && slides[i].querySelector('video');
    if (v && v.preload === 'none') v.preload = 'metadata';
  }

  function go(n) {
    if (busy || n === cur || n < 0 || n >= slides.length) return;
    busy = true;
    media(cur, 'pause');
    slides[cur].classList.remove('is-active');
    slides[cur].setAttribute('aria-hidden', 'true');
    cur = n;
    slides[cur].classList.add('is-active');
    slides[cur].setAttribute('aria-hidden', 'false');
    if (S[cur].type === 'video') setTimeout(function () { media(cur, 'play'); }, 260);
    else musicPlay();                       // вернулись к слайдам — музыка снова звучит
    update();
    preload(cur + 1); preload(cur - 1);
    setTimeout(function () { busy = false; }, 620);
  }

  var next = function () { go(cur + 1); };
  var prev = function () { go(cur - 1); };

  function update() {
    bar.style.width = ((cur + 1) / slides.length * 100) + '%';
    counter.textContent = String(cur + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    document.body.classList.toggle('show-counter', S[cur].type === 'text');
    showChrome();
  }

  function showChrome() {
    chrome.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () { chrome.classList.remove('show'); }, 2600);
  }

  /* ── управление ─────────────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { grid.classList.contains('open') ? closeGrid() : openGrid(); return; }
    if (grid.classList.contains('open')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(slides.length - 1);
    else if (e.key === 'f' || e.key === 'F' || e.key === 'а' || e.key === 'А') toggleFull();
    hideHint();
  });

  var wheelLock = false;
  window.addEventListener('wheel', function (e) {
    if (grid.classList.contains('open')) return;
    if (wheelLock || Math.abs(e.deltaY) < 18) return;
    wheelLock = true;
    e.deltaY > 0 ? next() : prev();
    hideHint();
    setTimeout(function () { wheelLock = false; }, 700);
  }, { passive: true });

  var tX = 0, tY = 0;
  window.addEventListener('touchstart', function (e) {
    tX = e.changedTouches[0].clientX; tY = e.changedTouches[0].clientY;
  }, { passive: true });
  window.addEventListener('touchend', function (e) {
    if (grid.classList.contains('open')) return;
    var dx = e.changedTouches[0].clientX - tX, dy = e.changedTouches[0].clientY - tY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); hideHint(); }
    else if (Math.abs(dy) > 55) { dy < 0 ? next() : prev(); hideHint(); }
  }, { passive: true });

  stage.addEventListener('click', function (e) {
    if (e.target.closest('#sound-toggle')) return;
    (e.clientX < window.innerWidth * 0.3) ? prev() : next();
    hideHint();
  });

  window.addEventListener('mousemove', showChrome);

  function openGrid()  { grid.classList.add('open'); }
  function closeGrid() { grid.classList.remove('open'); }

  function toggleFull() {
    if (!document.fullscreenElement) {
      (document.documentElement.requestFullscreen || function () {}).call(document.documentElement);
    } else { document.exitFullscreen(); }
  }

  function hideHint() {
    if (!hint || hint.classList.contains('gone')) return;
    hint.classList.add('gone');
    clearTimeout(hintTimer);
  }

  /* блок реплик стоит внизу экрана — отводим под него место,
     чтобы заголовок слайда не наезжал на него */
  function fitQuotes() {
    Array.prototype.forEach.call(
      stage.querySelectorAll('.text-slide.has-quotes'), function (el) {
        var w = el.querySelector('.quotes-wrap');
        if (w) el.style.paddingBottom = (w.offsetHeight + 56) + 'px';
      });
  }
  window.addEventListener('resize', fitQuotes);
  fitQuotes();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitQuotes);
  setTimeout(fitQuotes, 1200);

  /* ── старт ──────────────────────────────────────────────────────── */
  slides[0].classList.add('is-active');
  slides[0].setAttribute('aria-hidden', 'false');
  update();
  preload(1);
  hintTimer = setTimeout(hideHint, 6000);
})();

/* Полный экран с первого действия зрителя: клик, клавиша или касание.
   Браузеры не дают сайту уйти в полный экран сам по себе — нужен жест. */
(function () {
  var el = document.documentElement;
  var req = el.requestFullscreen || el.webkitRequestFullscreen;
  if (!req) return;
  function goFull(e) {
    if (e.type === 'keydown' && (e.key === 'Escape' || e.key === 'f' || e.key === 'F')) return;
    if (document.fullscreenElement || document.webkitFullscreenElement) return;
    try { var p = req.call(el); if (p && p.catch) p.catch(function () {}); } catch (err) {}
  }
  ['click', 'keydown', 'touchend'].forEach(function (ev) {
    window.addEventListener(ev, goFull, true);
  });
})();
