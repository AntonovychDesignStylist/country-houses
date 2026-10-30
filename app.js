/* Antonovych Design — движок презентации. Без библиотек. */
(function () {
  'use strict';

  var S = window.SLIDES || [];
  var WORD = '<span class="logo-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="148.75 71.00 422.50 47.50" role="img" aria-label="Antonovych"> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 471.550781 116.578125 L 468.902344 116.578125 L 468.902344 96.882812 L 453.246094 72.390625 L 456.464844 72.390625 L 471.171875 95.367188 L 481.902344 78.636719 C 483.292969 76.429688 484.746094 74.15625 485.375 72.390625 L 487.773438 72.390625 C 485.753906 74.597656 484.304688 76.746094 482.851562 79.015625 L 471.550781 96.691406 Z M 471.550781 116.578125 "/> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 430.519531 116.578125 L 427.808594 116.578125 L 411.207031 72.390625 L 414.046875 72.390625 L 430.015625 115.25 L 441.820312 84.636719 C 444.472656 77.691406 445.292969 75.167969 445.292969 72.390625 L 447.878906 72.390625 C 446.429688 75.101562 445.480469 77.816406 442.765625 84.824219 Z M 430.519531 116.578125 "/> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 184.21875 116.714844 L 180.90625 116.714844 L 175.414062 102.320312 L 156.960938 102.320312 C 154.363281 109.328125 156.960938 102.320312 151.257812 116.714844 L 150 116.714844 C 152.476562 110.765625 154.949219 104.175781 157.378906 97.886719 L 167.066406 72.722656 L 167.320312 72.722656 L 184.261719 116.675781 Z M 175.246094 101.8125 L 166.1875 78.253906 L 158.511719 98.222656 L 157.128906 101.8125 Z M 175.246094 101.8125 "/> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 192.214844 116.8125 L 191.269531 116.8125 L 191.269531 72.625 L 193.921875 72.625 L 222.074219 112.269531 L 222.074219 72.625 L 223.019531 72.625 L 223.019531 116.8125 L 222.074219 116.8125 L 192.214844 74.835938 Z M 192.214844 116.8125 "/> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 249.710938 116.964844 L 247.058594 116.964844 L 247.058594 73.726562 L 231.464844 73.726562 L 231.464844 72.777344 L 265.425781 72.777344 L 265.425781 73.726562 L 249.710938 73.726562 Z M 249.710938 116.964844 "/> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 277.441406 109.859375 C 269.101562 101.519531 269.101562 87.960938 277.441406 79.582031 C 285.78125 71.242188 299.339844 71.242188 307.71875 79.582031 C 316.097656 87.921875 316.058594 101.476562 307.71875 109.859375 C 299.378906 118.199219 285.820312 118.199219 277.441406 109.859375 M 305.292969 107.351562 C 313.511719 99.136719 314.578125 87.015625 307.429688 79.867188 C 300.28125 72.71875 288.164062 73.828125 279.949219 82.003906 C 271.730469 90.21875 270.621094 102.421875 277.730469 109.53125 C 284.878906 116.679688 297.078125 115.527344 305.292969 107.3125 Z M 305.292969 107.351562 "/> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 323.867188 116.8125 L 322.921875 116.8125 L 322.921875 72.625 L 325.574219 72.625 L 353.726562 112.269531 L 353.726562 72.625 L 354.671875 72.625 L 354.671875 116.8125 L 353.726562 116.8125 L 323.867188 74.835938 Z M 323.867188 116.8125 "/> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 369.863281 109.859375 C 361.523438 101.519531 361.523438 87.960938 369.863281 79.582031 C 378.203125 71.242188 391.761719 71.242188 400.140625 79.582031 C 408.519531 87.921875 408.480469 101.476562 400.140625 109.859375 C 391.800781 118.199219 378.242188 118.199219 369.863281 109.859375 M 397.714844 107.351562 C 405.933594 99.136719 407 87.015625 399.851562 79.867188 C 392.703125 72.71875 380.585938 73.828125 372.371094 82.003906 C 364.152344 90.21875 363.042969 102.421875 370.152344 109.53125 C 377.300781 116.679688 389.5 115.527344 397.714844 107.3125 Z M 397.714844 107.351562 "/> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 513.628906 117.4375 C 500.496094 117.4375 490.460938 107.214844 490.460938 94.652344 C 490.460938 86.066406 495.382812 78.617188 502.582031 74.765625 C 510.914062 70.285156 522.464844 71.484375 530.039062 76.660156 L 528.210938 79.4375 C 521.582031 73 510.722656 71.675781 502.898438 75.589844 C 496.519531 78.808594 493.238281 85.496094 493.300781 92.566406 C 493.363281 107.085938 502.832031 116.050781 515.269531 116.050781 C 521.582031 116.050781 527.769531 113.335938 531.238281 109.234375 L 531.933594 109.738281 C 527.578125 114.851562 521.011719 117.4375 513.628906 117.4375 "/> <path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 541.59375 116.8125 L 538.945312 116.8125 L 538.945312 72.625 L 541.59375 72.625 L 541.59375 93.078125 L 567.347656 93.078125 L 567.347656 72.625 L 570 72.625 L 570 116.8125 L 567.347656 116.8125 L 567.347656 94.023438 L 541.59375 94.023438 Z M 541.59375 116.8125 "/> </svg></span>';
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
