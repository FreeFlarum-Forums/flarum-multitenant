module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_forum__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_forum__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _src_forum__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));

/** @license
 SoundManager 2: JavaScript Sound for the Web
 ----------------------------------------------
 http://schillmania.com/projects/soundmanager2/
 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt
 V2.97a.20170601
*/

(function (h, g) {
  function J(sb, J) {
    function ha(b) {
      return c.preferFlash && G && !c.ignoreFlash && c.flash[b] !== g && c.flash[b];
    }

    function r(b) {
      return function (d) {
        var e = this._s;
        e && e._a ? d = b.call(this, d) : (e && e.id ? c._wD(e.id + ": Ignoring " + d.type) : c._wD("HTML5::Ignoring " + d.type), d = null);
        return d;
      };
    }

    this.setupOptions = {
      url: sb || null,
      flashVersion: 8,
      debugMode: !0,
      debugFlash: !1,
      useConsole: !0,
      consoleOnly: !0,
      waitForWindowLoad: !1,
      bgColor: "#ffffff",
      useHighPerformance: !1,
      flashPollingInterval: null,
      html5PollingInterval: null,
      flashLoadTimeout: 1E3,
      wmode: null,
      allowScriptAccess: "always",
      useFlashBlock: !1,
      useHTML5Audio: !0,
      forceUseGlobalHTML5Audio: !1,
      ignoreMobileRestrictions: !1,
      html5Test: /^(probably|maybe)$/i,
      preferFlash: !1,
      noSWFCache: !1,
      idPrefix: "sound"
    };
    this.defaultOptions = {
      autoLoad: !1,
      autoPlay: !1,
      from: null,
      loops: 1,
      onid3: null,
      onerror: null,
      onload: null,
      whileloading: null,
      onplay: null,
      onpause: null,
      onresume: null,
      whileplaying: null,
      onposition: null,
      onstop: null,
      onfinish: null,
      multiShot: !0,
      multiShotEvents: !1,
      position: null,
      pan: 0,
      playbackRate: 1,
      stream: !0,
      to: null,
      type: null,
      usePolicyFile: !1,
      volume: 100
    };
    this.flash9Options = {
      onfailure: null,
      isMovieStar: null,
      usePeakData: !1,
      useWaveformData: !1,
      useEQData: !1,
      onbufferchange: null,
      ondataerror: null
    };
    this.movieStarOptions = {
      bufferTime: 3,
      serverURL: null,
      onconnect: null,
      duration: null
    };
    this.audioFormats = {
      mp3: {
        type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
        required: !0
      },
      mp4: {
        related: ["aac", "m4a", "m4b"],
        type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
        required: !1
      },
      ogg: {
        type: ["audio/ogg; codecs=vorbis"],
        required: !1
      },
      opus: {
        type: ["audio/ogg; codecs=opus", "audio/opus"],
        required: !1
      },
      wav: {
        type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
        required: !1
      },
      flac: {
        type: ["audio/flac"],
        required: !1
      }
    };
    this.movieID = "sm2-container";
    this.id = J || "sm2movie";
    this.debugID = "soundmanager-debug";
    this.debugURLParam = /([#?&])debug=1/i;
    this.versionNumber = "V2.97a.20170601";
    this.altURL = this.movieURL = this.version = null;
    this.enabled = this.swfLoaded = !1;
    this.oMC = null;
    this.sounds = {};
    this.soundIDs = [];
    this.didFlashBlock = this.muted = !1;
    this.filePattern = null;
    this.filePatterns = {
      flash8: /\.mp3(\?.*)?$/i,
      flash9: /\.mp3(\?.*)?$/i
    };
    this.features = {
      buffering: !1,
      peakData: !1,
      waveformData: !1,
      eqData: !1,
      movieStar: !1
    };
    this.sandbox = {
      type: null,
      types: {
        remote: "remote (domain-based) rules",
        localWithFile: "local with file access (no internet access)",
        localWithNetwork: "local with network (internet access only, no local access)",
        localTrusted: "local, trusted (local+internet access)"
      },
      description: null,
      noRemote: null,
      noLocal: null
    };
    this.html5 = {
      usingFlash: null
    };
    this.flash = {};
    this.ignoreFlash = this.html5Only = !1;

    var V,
        c = this,
        Ya = null,
        l = null,
        E,
        v = navigator.userAgent,
        ia = h.location.href.toString(),
        m = document,
        xa,
        Za,
        ya,
        n,
        H = [],
        za = !0,
        C,
        W = !1,
        X = !1,
        q = !1,
        y = !1,
        ja = !1,
        p,
        tb = 0,
        Y,
        _A,
        _Aa,
        Q,
        Ba,
        O,
        _R,
        S,
        $a,
        Ca,
        Da,
        _ka,
        z,
        la,
        _P,
        _Ea,
        Z,
        ma,
        na,
        T,
        ab,
        Fa,
        bb = ["log", "info", "warn", "error"],
        Ga,
        Ha,
        cb,
        aa = null,
        Ia = null,
        t,
        Ja,
        U,
        db,
        oa,
        pa,
        K,
        w,
        ba = !1,
        Ka = !1,
        eb,
        fb,
        gb,
        qa = 0,
        ca = null,
        ra,
        L = [],
        da,
        u = null,
        hb,
        sa,
        ea,
        ib,
        M,
        ta,
        _La,
        jb,
        x,
        kb = Array.prototype.slice,
        B = !1,
        Ma,
        G,
        Na,
        lb,
        I,
        mb,
        Oa,
        fa,
        nb = 0,
        Pa,
        Qa = v.match(/(ipad|iphone|ipod)/i),
        Ra = v.match(/android/i),
        N = v.match(/msie|trident/i),
        ub = v.match(/webkit/i),
        ua = v.match(/safari/i) && !v.match(/chrome/i),
        Sa = v.match(/opera/i),
        va = v.match(/(mobile|pre\/|xoom)/i) || Qa || Ra,
        Ta = !ia.match(/usehtml5audio/i) && !ia.match(/sm2-ignorebadua/i) && ua && !v.match(/silk/i) && v.match(/OS\sX\s10_6_([3-7])/i),
        Ua = h.console !== g && console.log !== g,
        Va = m.hasFocus !== g ? m.hasFocus() : null,
        wa = ua && (m.hasFocus === g || !m.hasFocus()),
        ob = !wa,
        pb = /(mp3|mp4|mpa|m4a|m4b)/i,
        ga = m.location ? m.location.protocol.match(/http/i) : null,
        vb = ga ? "" : "//",
        qb = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4|m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
        rb = "mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),
        wb = new RegExp("\\.(" + rb.join("|") + ")(\\?.*)?$", "i");

    this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
    this.useAltURL = !ga;
    ib = [null, "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED"];
    var Wa;

    try {
      Wa = Audio !== g && (Sa && opera !== g && 10 > opera.version() ? new Audio(null) : new Audio()).canPlayType !== g;
    } catch (xb) {
      Wa = !1;
    }

    this.hasHTML5 = Wa;

    this.setup = function (b) {
      var d = !c.url;
      b !== g && q && u && c.ok() && (b.flashVersion !== g || b.url !== g || b.html5Test !== g) && K(t("setupLate"));

      _Aa(b);

      if (!B) if (va) {
        if (!c.setupOptions.ignoreMobileRestrictions || c.setupOptions.forceUseGlobalHTML5Audio) L.push(z.globalHTML5), B = !0;
      } else c.setupOptions.forceUseGlobalHTML5Audio && (L.push(z.globalHTML5), B = !0);
      if (!Pa && va) if (c.setupOptions.ignoreMobileRestrictions) L.push(z.ignoreMobile);else if (c.setupOptions.useHTML5Audio && !c.setupOptions.preferFlash || c._wD(z.mobileUA), c.setupOptions.useHTML5Audio = !0, c.setupOptions.preferFlash = !1, Qa) c.ignoreFlash = !0;else if (Ra && !v.match(/android\s2\.3/i) || !Ra) c._wD(z.globalHTML5), B = !0;
      b && (d && Z && b.url !== g && c.beginDelayedInit(), Z || b.url === g || "complete" !== m.readyState || setTimeout(_P, 1));
      Pa = !0;
      return c;
    };

    this.supported = this.ok = function () {
      return u ? q && !y : c.useHTML5Audio && c.hasHTML5;
    };

    this.getMovie = function (c) {
      return E(c) || m[c] || h[c];
    };

    this.createSound = function (b, d) {
      function e() {
        f = oa(f);
        c.sounds[f.id] = new V(f);
        c.soundIDs.push(f.id);
        return c.sounds[f.id];
      }

      var a, f;
      a = null;
      a = "soundManager.createSound(): " + t(q ? "notOK" : "notReady");
      if (!q || !c.ok()) return K(a), !1;
      d !== g && (b = {
        id: b,
        url: d
      });
      f = _A(b);
      f.url = ra(f.url);
      f.id === g && (f.id = c.setupOptions.idPrefix + nb++);
      f.id.toString().charAt(0).match(/^[0-9]$/) && c._wD("soundManager.createSound(): " + t("badID", f.id), 2);

      c._wD("soundManager.createSound(): " + f.id + (f.url ? " (" + f.url + ")" : ""), 1);

      if (w(f.id, !0)) return c._wD("soundManager.createSound(): " + f.id + " exists", 1), c.sounds[f.id];
      if (sa(f)) a = e(), c.html5Only || c._wD(f.id + ": Using HTML5"), a._setup_html5(f);else {
        if (c.html5Only) return c._wD(f.id + ": No HTML5 support for this sound, and no Flash. Exiting."), e();
        if (c.html5.usingFlash && f.url && f.url.match(/data:/i)) return c._wD(f.id + ": data: URIs not supported via Flash. Exiting."), e();
        8 < n && (null === f.isMovieStar && (f.isMovieStar = !!(f.serverURL || f.type && f.type.match(qb) || f.url && f.url.match(wb))), f.isMovieStar && (c._wD("soundManager.createSound(): using MovieStar handling"), 1 < f.loops && p("noNSLoop")));
        f = pa(f, "soundManager.createSound(): ");
        a = e();
        8 === n ? l._createSound(f.id, f.loops || 1, f.usePolicyFile) : (l._createSound(f.id, f.url, f.usePeakData, f.useWaveformData, f.useEQData, f.isMovieStar, f.isMovieStar ? f.bufferTime : !1, f.loops || 1, f.serverURL, f.duration || null, f.autoPlay, !0, f.autoLoad, f.usePolicyFile), f.serverURL || (a.connected = !0, f.onconnect && f.onconnect.apply(a)));
        f.serverURL || !f.autoLoad && !f.autoPlay || a.load(f);
      }
      !f.serverURL && f.autoPlay && a.play();
      return a;
    };

    this.destroySound = function (b, d) {
      if (!w(b)) return !1;
      var e = c.sounds[b],
          a;
      e.stop();
      e._iO = {};
      e.unload();

      for (a = 0; a < c.soundIDs.length; a++) {
        if (c.soundIDs[a] === b) {
          c.soundIDs.splice(a, 1);
          break;
        }
      }

      d || e.destruct(!0);
      delete c.sounds[b];
      return !0;
    };

    this.load = function (b, d) {
      return w(b) ? c.sounds[b].load(d) : !1;
    };

    this.unload = function (b) {
      return w(b) ? c.sounds[b].unload() : !1;
    };

    this.onposition = this.onPosition = function (b, d, e, a) {
      return w(b) ? c.sounds[b].onposition(d, e, a) : !1;
    };

    this.clearOnPosition = function (b, d, e) {
      return w(b) ? c.sounds[b].clearOnPosition(d, e) : !1;
    };

    this.start = this.play = function (b, d) {
      var e = null,
          a = d && !(d instanceof Object);
      if (!q || !c.ok()) return K("soundManager.play(): " + t(q ? "notOK" : "notReady")), !1;
      if (w(b, a)) a && (d = {
        url: d
      });else {
        if (!a) return !1;
        a && (d = {
          url: d
        });
        d && d.url && (c._wD('soundManager.play(): Attempting to create "' + b + '"', 1), d.id = b, e = c.createSound(d).play());
      }
      null === e && (e = c.sounds[b].play(d));
      return e;
    };

    this.setPlaybackRate = function (b, d, e) {
      return w(b) ? c.sounds[b].setPlaybackRate(d, e) : !1;
    };

    this.setPosition = function (b, d) {
      return w(b) ? c.sounds[b].setPosition(d) : !1;
    };

    this.stop = function (b) {
      if (!w(b)) return !1;

      c._wD("soundManager.stop(" + b + ")", 1);

      return c.sounds[b].stop();
    };

    this.stopAll = function () {
      var b;

      c._wD("soundManager.stopAll()", 1);

      for (b in c.sounds) {
        c.sounds.hasOwnProperty(b) && c.sounds[b].stop();
      }
    };

    this.pause = function (b) {
      return w(b) ? c.sounds[b].pause() : !1;
    };

    this.pauseAll = function () {
      var b;

      for (b = c.soundIDs.length - 1; 0 <= b; b--) {
        c.sounds[c.soundIDs[b]].pause();
      }
    };

    this.resume = function (b) {
      return w(b) ? c.sounds[b].resume() : !1;
    };

    this.resumeAll = function () {
      var b;

      for (b = c.soundIDs.length - 1; 0 <= b; b--) {
        c.sounds[c.soundIDs[b]].resume();
      }
    };

    this.togglePause = function (b) {
      return w(b) ? c.sounds[b].togglePause() : !1;
    };

    this.setPan = function (b, d) {
      return w(b) ? c.sounds[b].setPan(d) : !1;
    };

    this.setVolume = function (b, d) {
      var e, a;

      if (b !== g && !isNaN(b) && d === g) {
        e = 0;

        for (a = c.soundIDs.length; e < a; e++) {
          c.sounds[c.soundIDs[e]].setVolume(b);
        }

        return !1;
      }

      return w(b) ? c.sounds[b].setVolume(d) : !1;
    };

    this.mute = function (b) {
      var d = 0;
      b instanceof String && (b = null);

      if (b) {
        if (!w(b)) return !1;

        c._wD('soundManager.mute(): Muting "' + b + '"');

        return c.sounds[b].mute();
      }

      c._wD("soundManager.mute(): Muting all sounds");

      for (d = c.soundIDs.length - 1; 0 <= d; d--) {
        c.sounds[c.soundIDs[d]].mute();
      }

      return c.muted = !0;
    };

    this.muteAll = function () {
      c.mute();
    };

    this.unmute = function (b) {
      b instanceof String && (b = null);

      if (b) {
        if (!w(b)) return !1;

        c._wD('soundManager.unmute(): Unmuting "' + b + '"');

        return c.sounds[b].unmute();
      }

      c._wD("soundManager.unmute(): Unmuting all sounds");

      for (b = c.soundIDs.length - 1; 0 <= b; b--) {
        c.sounds[c.soundIDs[b]].unmute();
      }

      c.muted = !1;
      return !0;
    };

    this.unmuteAll = function () {
      c.unmute();
    };

    this.toggleMute = function (b) {
      return w(b) ? c.sounds[b].toggleMute() : !1;
    };

    this.getMemoryUse = function () {
      var c = 0;
      l && 8 !== n && (c = parseInt(l._getMemoryUse(), 10));
      return c;
    };

    this.disable = function (b) {
      var d;
      b === g && (b = !1);
      if (y) return !1;
      y = !0;
      p("shutdown", 1);

      for (d = c.soundIDs.length - 1; 0 <= d; d--) {
        Ga(c.sounds[c.soundIDs[d]]);
      }

      Ga(c);
      Y(b);
      x.remove(h, "load", _R);
      return !0;
    };

    this.canPlayMIME = function (b) {
      var d;
      c.hasHTML5 && (d = ea({
        type: b
      }));
      !d && u && (d = b && c.ok() ? !!(8 < n && b.match(qb) || b.match(c.mimePattern)) : null);
      return d;
    };

    this.canPlayURL = function (b) {
      var d;
      c.hasHTML5 && (d = ea({
        url: b
      }));
      !d && u && (d = b && c.ok() ? !!b.match(c.filePattern) : null);
      return d;
    };

    this.canPlayLink = function (b) {
      return b.type !== g && b.type && c.canPlayMIME(b.type) ? !0 : c.canPlayURL(b.href);
    };

    this.getSoundById = function (b, d) {
      if (!b) return null;
      var e = c.sounds[b];
      e || d || c._wD('soundManager.getSoundById(): Sound "' + b + '" not found.', 2);
      return e;
    };

    this.onready = function (b, d) {
      if ("function" === typeof b) q && c._wD(t("queue", "onready")), d || (d = h), Ba("onready", b, d), O();else throw t("needFunction", "onready");
      return !0;
    };

    this.ontimeout = function (b, d) {
      if ("function" === typeof b) q && c._wD(t("queue", "ontimeout")), d || (d = h), Ba("ontimeout", b, d), O({
        type: "ontimeout"
      });else throw t("needFunction", "ontimeout");
      return !0;
    };

    this._writeDebug = function (b, d) {
      var e, a;
      if (!c.setupOptions.debugMode) return !1;

      if (Ua && c.useConsole) {
        if (d && "object" === typeof d) console.log(b, d);else if (bb[d] !== g) console[bb[d]](b);else console.log(b);
        if (c.consoleOnly) return !0;
      }

      e = E("soundmanager-debug");
      if (!e) return !1;
      a = m.createElement("div");
      0 === ++tb % 2 && (a.className = "sm2-alt");
      d = d === g ? 0 : parseInt(d, 10);
      a.appendChild(m.createTextNode(b));
      d && (2 <= d && (a.style.fontWeight = "bold"), 3 === d && (a.style.color = "#ff3333"));
      e.insertBefore(a, e.firstChild);
      return !0;
    };

    -1 !== ia.indexOf("sm2-debug=alert") && (this._writeDebug = function (c) {
      h.alert(c);
    });
    this._wD = this._writeDebug;

    this._debug = function () {
      var b, d;
      p("currentObj", 1);
      b = 0;

      for (d = c.soundIDs.length; b < d; b++) {
        c.sounds[c.soundIDs[b]]._debug();
      }
    };

    this.reboot = function (b, d) {
      c.soundIDs.length && c._wD("Destroying " + c.soundIDs.length + " SMSound object" + (1 !== c.soundIDs.length ? "s" : "") + "...");
      var e, a, f;

      for (e = c.soundIDs.length - 1; 0 <= e; e--) {
        c.sounds[c.soundIDs[e]].destruct();
      }

      if (l) try {
        N && (Ia = l.innerHTML), aa = l.parentNode.removeChild(l);
      } catch (g) {
        p("badRemove", 2);
      }
      Ia = aa = u = l = null;
      c.enabled = Z = q = ba = Ka = W = X = y = B = c.swfLoaded = !1;
      c.soundIDs = [];
      c.sounds = {};
      nb = 0;
      Pa = !1;
      if (b) H = [];else for (e in H) {
        if (H.hasOwnProperty(e)) for (a = 0, f = H[e].length; a < f; a++) {
          H[e][a].fired = !1;
        }
      }
      d || c._wD("soundManager: Rebooting...");
      c.html5 = {
        usingFlash: null
      };
      c.flash = {};
      c.html5Only = !1;
      c.ignoreFlash = !1;
      h.setTimeout(function () {
        d || c.beginDelayedInit();
      }, 20);
      return c;
    };

    this.reset = function () {
      p("reset");
      return c.reboot(!0, !0);
    };

    this.getMoviePercent = function () {
      return l && "PercentLoaded" in l ? l.PercentLoaded() : null;
    };

    this.beginDelayedInit = function () {
      ja = !0;

      _P();

      setTimeout(function () {
        if (Ka) return !1;
        na();
        la();
        return Ka = !0;
      }, 20);
      S();
    };

    this.destruct = function () {
      c._wD("soundManager.destruct()");

      c.disable(!0);
    };

    V = function V(b) {
      var d,
          e,
          a = this,
          f,
          h,
          k,
          F,
          m,
          q,
          r = !1,
          D = [],
          v = 0,
          Xa,
          y,
          u = null,
          z;
      e = d = null;
      this.sID = this.id = b.id;
      this.url = b.url;
      this._iO = this.instanceOptions = this.options = _A(b);
      this.pan = this.options.pan;
      this.volume = this.options.volume;
      this.isHTML5 = !1;
      this._a = null;
      z = !this.url;
      this.id3 = {};

      this._debug = function () {
        c._wD(a.id + ": Merged options:", a.options);
      };

      this.load = function (b) {
        var d = null,
            e;
        b !== g ? a._iO = _A(b, a.options) : (b = a.options, a._iO = b, u && u !== a.url && (p("manURL"), a._iO.url = a.url, a.url = null));
        a._iO.url || (a._iO.url = a.url);
        a._iO.url = ra(a._iO.url);
        e = a.instanceOptions = a._iO;

        c._wD(a.id + ": load (" + e.url + ")");

        if (!e.url && !a.url) return c._wD(a.id + ": load(): url is unassigned. Exiting.", 2), a;
        a.isHTML5 || 8 !== n || a.url || e.autoPlay || c._wD(a.id + ": Flash 8 load() limitation: Wait for onload() before calling play().", 1);
        if (e.url === a.url && 0 !== a.readyState && 2 !== a.readyState) return p("onURL", 1), 3 === a.readyState && e.onload && fa(a, function () {
          e.onload.apply(a, [!!a.duration]);
        }), a;
        a.loaded = !1;
        a.readyState = 1;
        a.playState = 0;
        a.id3 = {};
        if (sa(e)) d = a._setup_html5(e), d._called_load ? c._wD(a.id + ": Ignoring request to load again") : (a._html5_canplay = !1, a.url !== e.url && (c._wD(p("manURL") + ": " + e.url), a._a.src = e.url, a.setPosition(0)), a._a.autobuffer = "auto", a._a.preload = "auto", a._a._called_load = !0);else {
          if (c.html5Only) return c._wD(a.id + ": No flash support. Exiting."), a;
          if (a._iO.url && a._iO.url.match(/data:/i)) return c._wD(a.id + ": data: URIs not supported via Flash. Exiting."), a;

          try {
            a.isHTML5 = !1, a._iO = pa(oa(e)), a._iO.autoPlay && (a._iO.position || a._iO.from) && (c._wD(a.id + ": Disabling autoPlay because of non-zero offset case"), a._iO.autoPlay = !1), e = a._iO, 8 === n ? l._load(a.id, e.url, e.stream, e.autoPlay, e.usePolicyFile) : l._load(a.id, e.url, !!e.stream, !!e.autoPlay, e.loops || 1, !!e.autoLoad, e.usePolicyFile);
          } catch (f) {
            p("smError", 2), C("onload", !1), T({
              type: "SMSOUND_LOAD_JS_EXCEPTION",
              fatal: !0
            });
          }
        }
        a.url = e.url;
        return a;
      };

      this.unload = function () {
        0 !== a.readyState && (c._wD(a.id + ": unload()"), a.isHTML5 ? (F(), a._a && (a._a.pause(), u = ta(a._a))) : 8 === n ? l._unload(a.id, "about:blank") : l._unload(a.id), f());
        return a;
      };

      this.destruct = function (b) {
        c._wD(a.id + ": Destruct");

        a.isHTML5 ? (F(), a._a && (a._a.pause(), ta(a._a), B || k(), a._a._s = null, a._a = null)) : (a._iO.onfailure = null, l._destroySound(a.id));
        b || c.destroySound(a.id, !0);
      };

      this.start = this.play = function (b, d) {
        var e, f, k, _F, _h;

        f = !0;
        e = a.id + ": play(): ";
        d = d === g ? !0 : d;
        b || (b = {});
        a.url && (a._iO.url = a.url);
        a._iO = _A(a._iO, a.options);
        a._iO = _A(b, a._iO);
        a._iO.url = ra(a._iO.url);
        a.instanceOptions = a._iO;
        if (!a.isHTML5 && a._iO.serverURL && !a.connected) return a.getAutoPlay() || (c._wD(e + " Netstream not connected yet - setting autoPlay"), a.setAutoPlay(!0)), a;
        sa(a._iO) && (a._setup_html5(a._iO), m());

        if (1 === a.playState && !a.paused) {
          f = a._iO.multiShot;
          if (!f) return c._wD(e + "Already playing (one-shot)", 1), a.isHTML5 && a.setPosition(a._iO.position), a;

          c._wD(e + "Already playing (multi-shot)", 1);
        }

        b.url && b.url !== a.url && (a.readyState || a.isHTML5 || 8 !== n || !z ? a.load(a._iO) : z = !1);
        if (a.loaded) c._wD(e.substr(0, e.lastIndexOf(":")));else if (0 === a.readyState) {
          c._wD(e + "Attempting to load");

          if (a.isHTML5 || c.html5Only) {
            if (a.isHTML5) a.load(a._iO);else return c._wD(e + "Unsupported type. Exiting."), a;
          } else a._iO.autoPlay = !0, a.load(a._iO);
          a.instanceOptions = a._iO;
        } else {
          if (2 === a.readyState) return c._wD(e + "Could not load - exiting", 2), a;

          c._wD(e + "Loading - attempting to play...");
        }
        !a.isHTML5 && 9 === n && 0 < a.position && a.position === a.duration && (c._wD(e + "Sound at end, resetting to position: 0"), b.position = 0);
        a.paused && 0 <= a.position && (!a._iO.serverURL || 0 < a.position) ? (c._wD(e + "Resuming from paused state", 1), a.resume()) : (a._iO = _A(b, a._iO), (!a.isHTML5 && null !== a._iO.position && 0 < a._iO.position || null !== a._iO.from && 0 < a._iO.from || null !== a._iO.to) && 0 === a.instanceCount && 0 === a.playState && !a._iO.serverURL && (f = function f() {
          a._iO = _A(b, a._iO);
          a.play(a._iO);
        }, a.isHTML5 && !a._html5_canplay ? (c._wD(e + "Beginning load for non-zero offset case"), a.load({
          _oncanplay: f
        })) : a.isHTML5 || a.loaded || a.readyState && 2 === a.readyState || (c._wD(e + "Preloading for non-zero offset case"), a.load({
          onload: f
        })), a._iO = y()), (!a.instanceCount || a._iO.multiShotEvents || a.isHTML5 && a._iO.multiShot && !B || !a.isHTML5 && 8 < n && !a.getAutoPlay()) && a.instanceCount++, a._iO.onposition && 0 === a.playState && q(a), a.playState = 1, a.paused = !1, a.position = a._iO.position === g || isNaN(a._iO.position) ? 0 : a._iO.position, a.isHTML5 || (a._iO = pa(oa(a._iO))), a._iO.onplay && d && (a._iO.onplay.apply(a), r = !0), a.setVolume(a._iO.volume, !0), a.setPan(a._iO.pan, !0), 1 !== a._iO.playbackRate && a.setPlaybackRate(a._iO.playbackRate), a.isHTML5 ? 2 > a.instanceCount ? (m(), e = a._setup_html5(), a.setPosition(a._iO.position), e.play()) : (c._wD(a.id + ": Cloning Audio() for instance #" + a.instanceCount + "..."), k = new Audio(a._iO.url), _F = function F() {
          x.remove(k, "ended", _F);

          a._onfinish(a);

          ta(k);
          k = null;
        }, _h = function h() {
          x.remove(k, "canplay", _h);

          try {
            k.currentTime = a._iO.position / 1E3;
          } catch (c) {
            K(a.id + ": multiShot play() failed to apply position of " + a._iO.position / 1E3);
          }

          k.play();
        }, x.add(k, "ended", _F), a._iO.volume !== g && (k.volume = Math.max(0, Math.min(1, a._iO.volume / 100))), a.muted && (k.muted = !0), a._iO.position ? x.add(k, "canplay", _h) : k.play()) : (f = l._start(a.id, a._iO.loops || 1, 9 === n ? a.position : a.position / 1E3, a._iO.multiShot || !1), 9 !== n || f || (c._wD(e + "No sound hardware, or 32-sound ceiling hit", 2), a._iO.onplayerror && a._iO.onplayerror.apply(a))));
        return a;
      };

      this.stop = function (b) {
        var d = a._iO;
        1 === a.playState && (c._wD(a.id + ": stop()"), a._onbufferchange(0), a._resetOnPosition(0), a.paused = !1, a.isHTML5 || (a.playState = 0), Xa(), d.to && a.clearOnPosition(d.to), a.isHTML5 ? a._a && (b = a.position, a.setPosition(0), a.position = b, a._a.pause(), a.playState = 0, a._onTimer(), F()) : (l._stop(a.id, b), d.serverURL && a.unload()), a.instanceCount = 0, a._iO = {}, d.onstop && d.onstop.apply(a));
        return a;
      };

      this.setAutoPlay = function (b) {
        c._wD(a.id + ": Autoplay turned " + (b ? "on" : "off"));

        a._iO.autoPlay = b;
        a.isHTML5 || (l._setAutoPlay(a.id, b), b && !a.instanceCount && 1 === a.readyState && (a.instanceCount++, c._wD(a.id + ": Incremented instance count to " + a.instanceCount)));
      };

      this.getAutoPlay = function () {
        return a._iO.autoPlay;
      };

      this.setPlaybackRate = function (b) {
        var d = Math.max(.5, Math.min(4, b));
        d !== b && c._wD(a.id + ": setPlaybackRate(" + b + "): limiting rate to " + d, 2);
        if (a.isHTML5) try {
          a._iO.playbackRate = d, a._a.playbackRate = d;
        } catch (e) {
          c._wD(a.id + ": setPlaybackRate(" + d + ") failed: " + e.message, 2);
        }
        return a;
      };

      this.setPosition = function (b) {
        b === g && (b = 0);
        var d = a.isHTML5 ? Math.max(b, 0) : Math.min(a.duration || a._iO.duration, Math.max(b, 0));
        a.position = d;
        b = a.position / 1E3;

        a._resetOnPosition(a.position);

        a._iO.position = d;
        if (!a.isHTML5) b = 9 === n ? a.position : b, a.readyState && 2 !== a.readyState && l._setPosition(a.id, b, a.paused || !a.playState, a._iO.multiShot);else if (a._a) {
          if (a._html5_canplay) {
            if (a._a.currentTime.toFixed(3) !== b.toFixed(3)) {
              c._wD(a.id + ": setPosition(" + b + ")");

              try {
                a._a.currentTime = b, (0 === a.playState || a.paused) && a._a.pause();
              } catch (e) {
                c._wD(a.id + ": setPosition(" + b + ") failed: " + e.message, 2);
              }
            }
          } else if (b) return c._wD(a.id + ": setPosition(" + b + "): Cannot seek yet, sound not ready", 2), a;

          a.paused && a._onTimer(!0);
        }
        return a;
      };

      this.pause = function (b) {
        if (a.paused || 0 === a.playState && 1 !== a.readyState) return a;

        c._wD(a.id + ": pause()");

        a.paused = !0;
        a.isHTML5 ? (a._setup_html5().pause(), F()) : (b || b === g) && l._pause(a.id, a._iO.multiShot);
        a._iO.onpause && a._iO.onpause.apply(a);
        return a;
      };

      this.resume = function () {
        var b = a._iO;
        if (!a.paused) return a;

        c._wD(a.id + ": resume()");

        a.paused = !1;
        a.playState = 1;
        a.isHTML5 ? (a._setup_html5().play(), m()) : (b.isMovieStar && !b.serverURL && a.setPosition(a.position), l._pause(a.id, b.multiShot));
        !r && b.onplay ? (b.onplay.apply(a), r = !0) : b.onresume && b.onresume.apply(a);
        return a;
      };

      this.togglePause = function () {
        c._wD(a.id + ": togglePause()");

        if (0 === a.playState) return a.play({
          position: 9 !== n || a.isHTML5 ? a.position / 1E3 : a.position
        }), a;
        a.paused ? a.resume() : a.pause();
        return a;
      };

      this.setPan = function (b, c) {
        b === g && (b = 0);
        c === g && (c = !1);
        a.isHTML5 || l._setPan(a.id, b);
        a._iO.pan = b;
        c || (a.pan = b, a.options.pan = b);
        return a;
      };

      this.setVolume = function (b, d) {
        b === g && (b = 100);
        d === g && (d = !1);
        a.isHTML5 ? a._a && (c.muted && !a.muted && (a.muted = !0, a._a.muted = !0), a._a.volume = Math.max(0, Math.min(1, b / 100))) : l._setVolume(a.id, c.muted && !a.muted || a.muted ? 0 : b);
        a._iO.volume = b;
        d || (a.volume = b, a.options.volume = b);
        return a;
      };

      this.mute = function () {
        a.muted = !0;
        a.isHTML5 ? a._a && (a._a.muted = !0) : l._setVolume(a.id, 0);
        return a;
      };

      this.unmute = function () {
        a.muted = !1;
        var b = a._iO.volume !== g;
        a.isHTML5 ? a._a && (a._a.muted = !1) : l._setVolume(a.id, b ? a._iO.volume : a.options.volume);
        return a;
      };

      this.toggleMute = function () {
        return a.muted ? a.unmute() : a.mute();
      };

      this.onposition = this.onPosition = function (b, c, d) {
        D.push({
          position: parseInt(b, 10),
          method: c,
          scope: d !== g ? d : a,
          fired: !1
        });
        return a;
      };

      this.clearOnPosition = function (a, b) {
        var c;
        a = parseInt(a, 10);
        if (!isNaN(a)) for (c = 0; c < D.length; c++) {
          a !== D[c].position || b && b !== D[c].method || (D[c].fired && v--, D.splice(c, 1));
        }
      };

      this._processOnPosition = function () {
        var b, c;
        b = D.length;
        if (!b || !a.playState || v >= b) return !1;

        for (--b; 0 <= b; b--) {
          c = D[b], !c.fired && a.position >= c.position && (c.fired = !0, v++, c.method.apply(c.scope, [c.position]));
        }

        return !0;
      };

      this._resetOnPosition = function (a) {
        var b, c;
        b = D.length;
        if (!b) return !1;

        for (--b; 0 <= b; b--) {
          c = D[b], c.fired && a <= c.position && (c.fired = !1, v--);
        }

        return !0;
      };

      y = function y() {
        var b = a._iO,
            d = b.from,
            e = b.to,
            f,
            _g;

        _g = function g() {
          c._wD(a.id + ': "To" time of ' + e + " reached.");

          a.clearOnPosition(e, _g);
          a.stop();
        };

        f = function f() {
          c._wD(a.id + ': Playing "from" ' + d);

          if (null !== e && !isNaN(e)) a.onPosition(e, _g);
        };

        null === d || isNaN(d) || (b.position = d, b.multiShot = !1, f());
        return b;
      };

      q = function q() {
        var b,
            c = a._iO.onposition;
        if (c) for (b in c) {
          if (c.hasOwnProperty(b)) a.onPosition(parseInt(b, 10), c[b]);
        }
      };

      Xa = function Xa() {
        var b,
            c = a._iO.onposition;
        if (c) for (b in c) {
          c.hasOwnProperty(b) && a.clearOnPosition(parseInt(b, 10));
        }
      };

      m = function m() {
        a.isHTML5 && eb(a);
      };

      F = function F() {
        a.isHTML5 && fb(a);
      };

      f = function f(b) {
        b || (D = [], v = 0);
        r = !1;
        a._hasTimer = null;
        a._a = null;
        a._html5_canplay = !1;
        a.bytesLoaded = null;
        a.bytesTotal = null;
        a.duration = a._iO && a._iO.duration ? a._iO.duration : null;
        a.durationEstimate = null;
        a.buffered = [];
        a.eqData = [];
        a.eqData.left = [];
        a.eqData.right = [];
        a.failures = 0;
        a.isBuffering = !1;
        a.instanceOptions = {};
        a.instanceCount = 0;
        a.loaded = !1;
        a.metadata = {};
        a.readyState = 0;
        a.muted = !1;
        a.paused = !1;
        a.peakData = {
          left: 0,
          right: 0
        };
        a.waveformData = {
          left: [],
          right: []
        };
        a.playState = 0;
        a.position = null;
        a.id3 = {};
      };

      f();

      this._onTimer = function (b) {
        var c,
            f = !1,
            g = {};
        (a._hasTimer || b) && a._a && (b || (0 < a.playState || 1 === a.readyState) && !a.paused) && (c = a._get_html5_duration(), c !== d && (d = c, a.duration = c, f = !0), a.durationEstimate = a.duration, c = 1E3 * a._a.currentTime || 0, c !== e && (e = c, f = !0), (f || b) && a._whileplaying(c, g, g, g, g));
        return f;
      };

      this._get_html5_duration = function () {
        var b = a._iO;
        return (b = a._a && a._a.duration ? 1E3 * a._a.duration : b && b.duration ? b.duration : null) && !isNaN(b) && Infinity !== b ? b : null;
      };

      this._apply_loop = function (a, b) {
        !a.loop && 1 < b && c._wD("Note: Native HTML5 looping is infinite.", 1);
        a.loop = 1 < b ? "loop" : "";
      };

      this._setup_html5 = function (b) {
        b = _A(a._iO, b);
        var c = B ? Ya : a._a,
            d = decodeURI(b.url),
            e;
        B ? d === decodeURI(Ma) && (e = !0) : d === decodeURI(u) && (e = !0);

        if (c) {
          if (c._s) if (B) c._s && c._s.playState && !e && c._s.stop();else if (!B && d === decodeURI(u)) return a._apply_loop(c, b.loops), c;
          e || (u && f(!1), c.src = b.url, Ma = u = a.url = b.url, c._called_load = !1);
        } else b.autoLoad || b.autoPlay ? (a._a = new Audio(b.url), a._a.load()) : a._a = Sa && 10 > opera.version() ? new Audio(null) : new Audio(), c = a._a, c._called_load = !1, B && (Ya = c);

        a.isHTML5 = !0;
        a._a = c;
        c._s = a;
        h();

        a._apply_loop(c, b.loops);

        b.autoLoad || b.autoPlay ? a.load() : (c.autobuffer = !1, c.preload = "auto");
        return c;
      };

      h = function h() {
        if (a._a._added_events) return !1;
        var b;
        a._a._added_events = !0;

        for (b in I) {
          I.hasOwnProperty(b) && a._a && a._a.addEventListener(b, I[b], !1);
        }

        return !0;
      };

      k = function k() {
        var b;

        c._wD(a.id + ": Removing event listeners");

        a._a._added_events = !1;

        for (b in I) {
          I.hasOwnProperty(b) && a._a && a._a.removeEventListener(b, I[b], !1);
        }
      };

      this._onload = function (b) {
        var d = !!b || !a.isHTML5 && 8 === n && a.duration;
        b = a.id + ": ";

        c._wD(b + (d ? "onload()" : "Failed to load / invalid sound?" + (a.duration ? " -" : " Zero-length duration reported.") + " (" + a.url + ")"), d ? 1 : 2);

        d || a.isHTML5 || (!0 === c.sandbox.noRemote && c._wD(b + t("noNet"), 1), !0 === c.sandbox.noLocal && c._wD(b + t("noLocal"), 1));
        a.loaded = d;
        a.readyState = d ? 3 : 2;

        a._onbufferchange(0);

        d || a.isHTML5 || a._onerror();
        a._iO.onload && fa(a, function () {
          a._iO.onload.apply(a, [d]);
        });
        return !0;
      };

      this._onerror = function (b, c) {
        a._iO.onerror && fa(a, function () {
          a._iO.onerror.apply(a, [b, c]);
        });
      };

      this._onbufferchange = function (b) {
        if (0 === a.playState || b && a.isBuffering || !b && !a.isBuffering) return !1;
        a.isBuffering = 1 === b;
        a._iO.onbufferchange && (c._wD(a.id + ": Buffer state change: " + b), a._iO.onbufferchange.apply(a, [b]));
        return !0;
      };

      this._onsuspend = function () {
        a._iO.onsuspend && (c._wD(a.id + ": Playback suspended"), a._iO.onsuspend.apply(a));
        return !0;
      };

      this._onfailure = function (b, d, e) {
        a.failures++;

        c._wD(a.id + ": Failure (" + a.failures + "): " + b);

        if (a._iO.onfailure && 1 === a.failures) a._iO.onfailure(b, d, e);else c._wD(a.id + ": Ignoring failure");
      };

      this._onwarning = function (b, c, d) {
        if (a._iO.onwarning) a._iO.onwarning(b, c, d);
      };

      this._onfinish = function () {
        var b = a._iO.onfinish;

        a._onbufferchange(0);

        a._resetOnPosition(0);

        a.instanceCount && (a.instanceCount--, a.instanceCount || (Xa(), a.playState = 0, a.paused = !1, a.instanceCount = 0, a.instanceOptions = {}, a._iO = {}, F(), a.isHTML5 && (a.position = 0)), a.instanceCount && !a._iO.multiShotEvents || !b || (c._wD(a.id + ": onfinish()"), fa(a, function () {
          b.apply(a);
        })));
      };

      this._whileloading = function (b, c, d, e) {
        var f = a._iO;
        a.bytesLoaded = b;
        a.bytesTotal = c;
        a.duration = Math.floor(d);
        a.bufferLength = e;
        a.durationEstimate = a.isHTML5 || f.isMovieStar ? a.duration : f.duration ? a.duration > f.duration ? a.duration : f.duration : parseInt(a.bytesTotal / a.bytesLoaded * a.duration, 10);
        a.isHTML5 || (a.buffered = [{
          start: 0,
          end: a.duration
        }]);
        (3 !== a.readyState || a.isHTML5) && f.whileloading && f.whileloading.apply(a);
      };

      this._whileplaying = function (b, c, d, e, f) {
        var k = a._iO;
        if (isNaN(b) || null === b) return !1;
        a.position = Math.max(0, b);

        a._processOnPosition();

        !a.isHTML5 && 8 < n && (k.usePeakData && c !== g && c && (a.peakData = {
          left: c.leftPeak,
          right: c.rightPeak
        }), k.useWaveformData && d !== g && d && (a.waveformData = {
          left: d.split(","),
          right: e.split(",")
        }), k.useEQData && f !== g && f && f.leftEQ && (b = f.leftEQ.split(","), a.eqData = b, a.eqData.left = b, f.rightEQ !== g && f.rightEQ && (a.eqData.right = f.rightEQ.split(","))));
        1 === a.playState && (a.isHTML5 || 8 !== n || a.position || !a.isBuffering || a._onbufferchange(0), k.whileplaying && k.whileplaying.apply(a));
        return !0;
      };

      this._oncaptiondata = function (b) {
        c._wD(a.id + ": Caption data received.");

        a.captiondata = b;
        a._iO.oncaptiondata && a._iO.oncaptiondata.apply(a, [b]);
      };

      this._onmetadata = function (b, d) {
        c._wD(a.id + ": Metadata received.");

        var e = {},
            f,
            g;
        f = 0;

        for (g = b.length; f < g; f++) {
          e[b[f]] = d[f];
        }

        a.metadata = e;
        a._iO.onmetadata && a._iO.onmetadata.call(a, a.metadata);
      };

      this._onid3 = function (b, d) {
        c._wD(a.id + ": ID3 data received.");

        var e = [],
            f,
            g;
        f = 0;

        for (g = b.length; f < g; f++) {
          e[b[f]] = d[f];
        }

        a.id3 = _A(a.id3, e);
        a._iO.onid3 && a._iO.onid3.apply(a);
      };

      this._onconnect = function (b) {
        b = 1 === b;

        c._wD(a.id + ": " + (b ? "Connected." : "Failed to connect? - " + a.url), b ? 1 : 2);

        if (a.connected = b) a.failures = 0, w(a.id) && (a.getAutoPlay() ? a.play(g, a.getAutoPlay()) : a._iO.autoLoad && a.load()), a._iO.onconnect && a._iO.onconnect.apply(a, [b]);
      };

      this._ondataerror = function (b) {
        0 < a.playState && (c._wD(a.id + ": Data error: " + b), a._iO.ondataerror && a._iO.ondataerror.apply(a));
      };

      this._debug();
    };

    ma = function ma() {
      return m.body || m.getElementsByTagName("div")[0];
    };

    E = function E(b) {
      return m.getElementById(b);
    };

    _A = function A(b, d) {
      var e = b || {},
          a,
          f;
      a = d === g ? c.defaultOptions : d;

      for (f in a) {
        a.hasOwnProperty(f) && e[f] === g && (e[f] = "object" !== typeof a[f] || null === a[f] ? a[f] : _A(e[f], a[f]));
      }

      return e;
    };

    fa = function fa(b, c) {
      b.isHTML5 || 8 !== n ? c() : h.setTimeout(c, 0);
    };

    Q = {
      onready: 1,
      ontimeout: 1,
      defaultOptions: 1,
      flash9Options: 1,
      movieStarOptions: 1
    };

    _Aa = function Aa(b, d) {
      var e,
          a = !0,
          f = d !== g,
          h = c.setupOptions;

      if (b === g) {
        a = [];

        for (e in h) {
          h.hasOwnProperty(e) && a.push(e);
        }

        for (e in Q) {
          Q.hasOwnProperty(e) && ("object" === typeof c[e] ? a.push(e + ": {...}") : c[e] instanceof Function ? a.push(e + ": function() {...}") : a.push(e));
        }

        c._wD(t("setup", a.join(", ")));

        return !1;
      }

      for (e in b) {
        if (b.hasOwnProperty(e)) if ("object" !== typeof b[e] || null === b[e] || b[e] instanceof Array || b[e] instanceof RegExp) f && Q[d] !== g ? c[d][e] = b[e] : h[e] !== g ? (c.setupOptions[e] = b[e], c[e] = b[e]) : Q[e] === g ? (K(t(c[e] === g ? "setupUndef" : "setupError", e), 2), a = !1) : c[e] instanceof Function ? c[e].apply(c, b[e] instanceof Array ? b[e] : [b[e]]) : c[e] = b[e];else if (Q[e] === g) K(t(c[e] === g ? "setupUndef" : "setupError", e), 2), a = !1;else return _Aa(b[e], e);
      }

      return a;
    };

    x = function () {
      function b(a) {
        a = kb.call(a);
        var b = a.length;
        e ? (a[1] = "on" + a[1], 3 < b && a.pop()) : 3 === b && a.push(!1);
        return a;
      }

      function c(b, d) {
        var g = b.shift(),
            h = [a[d]];
        if (e) g[h](b[0], b[1]);else g[h].apply(g, b);
      }

      var e = h.attachEvent,
          a = {
        add: e ? "attachEvent" : "addEventListener",
        remove: e ? "detachEvent" : "removeEventListener"
      };
      return {
        add: function add() {
          c(b(arguments), "add");
        },
        remove: function remove() {
          c(b(arguments), "remove");
        }
      };
    }();

    I = {
      abort: r(function () {
        c._wD(this._s.id + ": abort");
      }),
      canplay: r(function () {
        var b = this._s,
            d;

        if (!b._html5_canplay) {
          b._html5_canplay = !0;

          c._wD(b.id + ": canplay");

          b._onbufferchange(0);

          d = b._iO.position === g || isNaN(b._iO.position) ? null : b._iO.position / 1E3;

          if (this.currentTime !== d) {
            c._wD(b.id + ": canplay: Setting position to " + d);

            try {
              this.currentTime = d;
            } catch (e) {
              c._wD(b.id + ": canplay: Setting position of " + d + " failed: " + e.message, 2);
            }
          }

          b._iO._oncanplay && b._iO._oncanplay();
        }
      }),
      canplaythrough: r(function () {
        var b = this._s;
        b.loaded || (b._onbufferchange(0), b._whileloading(b.bytesLoaded, b.bytesTotal, b._get_html5_duration()), b._onload(!0));
      }),
      durationchange: r(function () {
        var b = this._s,
            d;
        d = b._get_html5_duration();
        isNaN(d) || d === b.duration || (c._wD(this._s.id + ": durationchange (" + d + ")" + (b.duration ? ", previously " + b.duration : "")), b.durationEstimate = b.duration = d);
      }),
      ended: r(function () {
        var b = this._s;

        c._wD(b.id + ": ended");

        b._onfinish();
      }),
      error: r(function () {
        var b = ib[this.error.code] || null;

        c._wD(this._s.id + ": HTML5 error, code " + this.error.code + (b ? " (" + b + ")" : ""));

        this._s._onload(!1);

        this._s._onerror(this.error.code, b);
      }),
      loadeddata: r(function () {
        var b = this._s;

        c._wD(b.id + ": loadeddata");

        b._loaded || ua || (b.duration = b._get_html5_duration());
      }),
      loadedmetadata: r(function () {
        c._wD(this._s.id + ": loadedmetadata");
      }),
      loadstart: r(function () {
        c._wD(this._s.id + ": loadstart");

        this._s._onbufferchange(1);
      }),
      play: r(function () {
        this._s._onbufferchange(0);
      }),
      playing: r(function () {
        c._wD(this._s.id + ": playing " + String.fromCharCode(9835));

        this._s._onbufferchange(0);
      }),
      progress: r(function (b) {
        var d = this._s,
            e,
            a,
            f;
        e = 0;
        var g = "progress" === b.type,
            k = b.target.buffered,
            h = b.loaded || 0,
            m = b.total || 1;
        d.buffered = [];

        if (k && k.length) {
          e = 0;

          for (a = k.length; e < a; e++) {
            d.buffered.push({
              start: 1E3 * k.start(e),
              end: 1E3 * k.end(e)
            });
          }

          e = 1E3 * (k.end(0) - k.start(0));
          h = Math.min(1, e / (1E3 * b.target.duration));

          if (g && 1 < k.length) {
            f = [];
            a = k.length;

            for (e = 0; e < a; e++) {
              f.push(1E3 * b.target.buffered.start(e) + "-" + 1E3 * b.target.buffered.end(e));
            }

            c._wD(this._s.id + ": progress, timeRanges: " + f.join(", "));
          }

          g && !isNaN(h) && c._wD(this._s.id + ": progress, " + Math.floor(100 * h) + "% loaded");
        }

        isNaN(h) || (d._whileloading(h, m, d._get_html5_duration()), h && m && h === m && I.canplaythrough.call(this, b));
      }),
      ratechange: r(function () {
        c._wD(this._s.id + ": ratechange");
      }),
      suspend: r(function (b) {
        var d = this._s;

        c._wD(this._s.id + ": suspend");

        I.progress.call(this, b);

        d._onsuspend();
      }),
      stalled: r(function () {
        c._wD(this._s.id + ": stalled");
      }),
      timeupdate: r(function () {
        this._s._onTimer();
      }),
      waiting: r(function () {
        var b = this._s;

        c._wD(this._s.id + ": waiting");

        b._onbufferchange(1);
      })
    };

    sa = function sa(b) {
      return b && (b.type || b.url || b.serverURL) ? b.serverURL || b.type && ha(b.type) ? !1 : b.type ? ea({
        type: b.type
      }) : ea({
        url: b.url
      }) || c.html5Only || b.url.match(/data:/i) : !1;
    };

    ta = function ta(b) {
      var d;
      b && (d = ua ? "about:blank" : c.html5.canPlayType("audio/wav") ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==" : "about:blank", b.src = d, b._called_unload !== g && (b._called_load = !1));
      B && (Ma = null);
      return d;
    };

    ea = function ea(b) {
      if (!c.useHTML5Audio || !c.hasHTML5) return !1;
      var d = b.url || null;
      b = b.type || null;
      var e = c.audioFormats,
          a;
      if (b && c.html5[b] !== g) return c.html5[b] && !ha(b);

      if (!M) {
        M = [];

        for (a in e) {
          e.hasOwnProperty(a) && (M.push(a), e[a].related && (M = M.concat(e[a].related)));
        }

        M = new RegExp("\\.(" + M.join("|") + ")(\\?.*)?$", "i");
      }

      (a = d ? d.toLowerCase().match(M) : null) && a.length ? a = a[1] : b && (d = b.indexOf(";"), a = (-1 !== d ? b.substr(0, d) : b).substr(6));
      a && c.html5[a] !== g ? d = c.html5[a] && !ha(a) : (b = "audio/" + a, d = c.html5.canPlayType({
        type: b
      }), d = (c.html5[a] = d) && c.html5[b] && !ha(b));
      return d;
    };

    jb = function jb() {
      function b(a) {
        var b,
            e = b = !1;
        if (!d || "function" !== typeof d.canPlayType) return b;

        if (a instanceof Array) {
          k = 0;

          for (b = a.length; k < b; k++) {
            if (c.html5[a[k]] || d.canPlayType(a[k]).match(c.html5Test)) e = !0, c.html5[a[k]] = !0, c.flash[a[k]] = !!a[k].match(pb);
          }

          b = e;
        } else a = d && "function" === typeof d.canPlayType ? d.canPlayType(a) : !1, b = !(!a || !a.match(c.html5Test));

        return b;
      }

      if (!c.useHTML5Audio || !c.hasHTML5) return u = c.html5.usingFlash = !0, !1;
      var d = Audio !== g ? Sa && 10 > opera.version() ? new Audio(null) : new Audio() : null,
          e,
          a,
          f = {},
          h,
          k;
      h = c.audioFormats;

      for (e in h) {
        if (h.hasOwnProperty(e) && (a = "audio/" + e, f[e] = b(h[e].type), f[a] = f[e], e.match(pb) ? (c.flash[e] = !0, c.flash[a] = !0) : (c.flash[e] = !1, c.flash[a] = !1), h[e] && h[e].related)) for (k = h[e].related.length - 1; 0 <= k; k--) {
          f["audio/" + h[e].related[k]] = f[e], c.html5[h[e].related[k]] = f[e], c.flash[h[e].related[k]] = f[e];
        }
      }

      f.canPlayType = d ? b : null;
      c.html5 = _A(c.html5, f);
      c.html5.usingFlash = hb();
      u = c.html5.usingFlash;
      return !0;
    };

    z = {
      notReady: "Unavailable - wait until onready() has fired.",
      notOK: "Audio support is not available.",
      domError: "soundManagerexception caught while appending SWF to DOM.",
      spcWmode: "Removing wmode, preventing known SWF loading issue(s)",
      swf404: "soundManager: Verify that %s is a valid path.",
      tryDebug: "Try soundManager.debugFlash = true for more security details (output goes to SWF.)",
      checkSWF: "See SWF output for more debug info.",
      localFail: "soundManager: Non-HTTP page (" + m.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
      waitFocus: "soundManager: Special case: Waiting for SWF to load with window focus...",
      waitForever: "soundManager: Waiting indefinitely for Flash (will recover if unblocked)...",
      waitSWF: "soundManager: Waiting for 100% SWF load...",
      needFunction: "soundManager: Function object expected for %s",
      badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
      currentObj: "soundManager: _debug(): Current sound objects",
      waitOnload: "soundManager: Waiting for window.onload()",
      docLoaded: "soundManager: Document already loaded",
      onload: "soundManager: initComplete(): calling soundManager.onload()",
      onloadOK: "soundManager.onload() complete",
      didInit: "soundManager: init(): Already called?",
      secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
      badRemove: "soundManager: Failed to remove Flash node.",
      shutdown: "soundManager.disable(): Shutting down",
      queue: "soundManager: Queueing %s handler",
      smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
      fbTimeout: "No flash response, applying .swf_timedout CSS...",
      fbLoaded: "Flash loaded",
      fbHandler: "soundManager: flashBlockHandler()",
      manURL: "SMSound.load(): Using manually-assigned URL",
      onURL: "soundManager.load(): current URL already assigned.",
      badFV: 'soundManager.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
      as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
      noNSLoop: "Note: Looping not implemented for MovieStar formats",
      needfl9: "Note: Switching to flash 9, required for MP4 formats.",
      mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
      needFlash: "soundManager: Fatal error: Flash is needed to play some required formats, but is not available.",
      gotFocus: "soundManager: Got window focus.",
      policy: "Enabling usePolicyFile for data access",
      setup: "soundManager.setup(): allowed parameters: %s",
      setupError: 'soundManager.setup(): "%s" cannot be assigned with this method.',
      setupUndef: 'soundManager.setup(): Could not find option "%s"',
      setupLate: "soundManager.setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
      noURL: "soundManager: Flash URL required. Call soundManager.setup({url:...}) to get started.",
      sm2Loaded: "SoundManager 2: Ready. " + String.fromCharCode(10003),
      reset: "soundManager.reset(): Removing event callbacks",
      mobileUA: "Mobile UA detected, preferring HTML5 by default.",
      globalHTML5: "Using singleton HTML5 Audio() pattern for this device.",
      ignoreMobile: "Ignoring mobile restrictions for this device."
    };

    t = function t() {
      var b, c, e, a;
      b = kb.call(arguments);
      c = b.shift();
      if ((a = z && z[c] ? z[c] : "") && b && b.length) for (c = 0, e = b.length; c < e; c++) {
        a = a.replace("%s", b[c]);
      }
      return a;
    };

    oa = function oa(b) {
      8 === n && 1 < b.loops && b.stream && (p("as2loop"), b.stream = !1);
      return b;
    };

    pa = function pa(b, d) {
      b && !b.usePolicyFile && (b.onid3 || b.usePeakData || b.useWaveformData || b.useEQData) && (c._wD((d || "") + t("policy")), b.usePolicyFile = !0);
      return b;
    };

    K = function K(b) {
      Ua && console.warn !== g ? console.warn(b) : c._wD(b);
    };

    xa = function xa() {
      return !1;
    };

    Ga = function Ga(b) {
      for (var c in b) {
        b.hasOwnProperty(c) && "function" === typeof b[c] && (b[c] = xa);
      }
    };

    Ha = function Ha(b) {
      b === g && (b = !1);
      (y || b) && c.disable(b);
    };

    cb = function cb(b) {
      var d = null;
      if (b) if (b.match(/\.swf(\?.*)?$/i)) {
        if (d = b.substr(b.toLowerCase().lastIndexOf(".swf?") + 4)) return b;
      } else b.lastIndexOf("/") !== b.length - 1 && (b += "/");
      b = (b && -1 !== b.lastIndexOf("/") ? b.substr(0, b.lastIndexOf("/") + 1) : "./") + c.movieURL;
      c.noSWFCache && (b += "?ts=" + new Date().getTime());
      return b;
    };

    Da = function Da() {
      n = parseInt(c.flashVersion, 10);
      8 !== n && 9 !== n && (c._wD(t("badFV", n, 8)), c.flashVersion = n = 8);
      var b = c.debugMode || c.debugFlash ? "_debug.swf" : ".swf";
      c.useHTML5Audio && !c.html5Only && c.audioFormats.mp4.required && 9 > n && (c._wD(t("needfl9")), c.flashVersion = n = 9);
      c.version = c.versionNumber + (c.html5Only ? " (HTML5-only mode)" : 9 === n ? " (AS3/Flash 9)" : " (AS2/Flash 8)");
      8 < n ? (c.defaultOptions = _A(c.defaultOptions, c.flash9Options), c.features.buffering = !0, c.defaultOptions = _A(c.defaultOptions, c.movieStarOptions), c.filePatterns.flash9 = new RegExp("\\.(mp3|" + rb.join("|") + ")(\\?.*)?$", "i"), c.features.movieStar = !0) : c.features.movieStar = !1;
      c.filePattern = c.filePatterns[8 !== n ? "flash9" : "flash8"];
      c.movieURL = (8 === n ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", b);
      c.features.peakData = c.features.waveformData = c.features.eqData = 8 < n;
    };

    ab = function ab(b, c) {
      l && l._setPolling(b, c);
    };

    Fa = function Fa() {
      c.debugURLParam.test(ia) && (c.setupOptions.debugMode = c.debugMode = !0);

      if (!E(c.debugID)) {
        var b, d, e, a;

        if (!(!c.debugMode || E(c.debugID) || Ua && c.useConsole && c.consoleOnly)) {
          b = m.createElement("div");
          b.id = c.debugID + "-toggle";
          d = {
            position: "fixed",
            bottom: "0px",
            right: "0px",
            width: "1.2em",
            height: "1.2em",
            lineHeight: "1.2em",
            margin: "2px",
            textAlign: "center",
            border: "1px solid #999",
            cursor: "pointer",
            background: "#fff",
            color: "#333",
            zIndex: 10001
          };
          b.appendChild(m.createTextNode("-"));
          b.onclick = db;
          b.title = "Toggle SM2 debug console";
          v.match(/msie 6/i) && (b.style.position = "absolute", b.style.cursor = "hand");

          for (a in d) {
            d.hasOwnProperty(a) && (b.style[a] = d[a]);
          }

          d = m.createElement("div");
          d.id = c.debugID;
          d.style.display = c.debugMode ? "block" : "none";

          if (c.debugMode && !E(b.id)) {
            try {
              e = ma(), e.appendChild(b);
            } catch (f) {
              throw Error(t("domError") + " \n" + f.toString());
            }

            e.appendChild(d);
          }
        }
      }
    };

    w = this.getSoundById;

    p = function p(b, d) {
      return b ? c._wD(t(b), d) : "";
    };

    db = function db() {
      var b = E(c.debugID),
          d = E(c.debugID + "-toggle");
      b && (za ? (d.innerHTML = "+", b.style.display = "none") : (d.innerHTML = "-", b.style.display = "block"), za = !za);
    };

    C = function C(b, c, e) {
      if (h.sm2Debugger !== g) try {
        sm2Debugger.handleEvent(b, c, e);
      } catch (a) {
        return !1;
      }
      return !0;
    };

    U = function U() {
      var b = [];
      c.debugMode && b.push("sm2_debug");
      c.debugFlash && b.push("flash_debug");
      c.useHighPerformance && b.push("high_performance");
      return b.join(" ");
    };

    Ja = function Ja() {
      var b = t("fbHandler"),
          d = c.getMoviePercent(),
          e = {
        type: "FLASHBLOCK"
      };
      c.html5Only || (c.ok() ? (c.didFlashBlock && c._wD(b + ": Unblocked"), c.oMC && (c.oMC.className = [U(), "movieContainer", "swf_loaded" + (c.didFlashBlock ? " swf_unblocked" : "")].join(" "))) : (u && (c.oMC.className = U() + " movieContainer " + (null === d ? "swf_timedout" : "swf_error"), c._wD(b + ": " + t("fbTimeout") + (d ? " (" + t("fbLoaded") + ")" : ""))), c.didFlashBlock = !0, O({
        type: "ontimeout",
        ignoreInit: !0,
        error: e
      }), T(e)));
    };

    Ba = function Ba(b, c, e) {
      H[b] === g && (H[b] = []);
      H[b].push({
        method: c,
        scope: e || null,
        fired: !1
      });
    };

    O = function O(b) {
      b || (b = {
        type: c.ok() ? "onready" : "ontimeout"
      });
      if (!q && b && !b.ignoreInit || "ontimeout" === b.type && (c.ok() || y && !b.ignoreInit)) return !1;
      var d = {
        success: b && b.ignoreInit ? c.ok() : !y
      },
          e = b && b.type ? H[b.type] || [] : [],
          a = [],
          f,
          d = [d],
          g = u && !c.ok();
      b.error && (d[0].error = b.error);
      b = 0;

      for (f = e.length; b < f; b++) {
        !0 !== e[b].fired && a.push(e[b]);
      }

      if (a.length) for (b = 0, f = a.length; b < f; b++) {
        a[b].scope ? a[b].method.apply(a[b].scope, d) : a[b].method.apply(this, d), g || (a[b].fired = !0);
      }
      return !0;
    };

    _R = function R() {
      h.setTimeout(function () {
        c.useFlashBlock && Ja();
        O();
        "function" === typeof c.onload && (p("onload", 1), c.onload.apply(h), p("onloadOK", 1));
        c.waitForWindowLoad && x.add(h, "load", _R);
      }, 1);
    };

    Na = function Na() {
      if (G !== g) return G;
      var b = !1,
          c = navigator,
          e,
          a = h.ActiveXObject,
          f;

      try {
        f = c.plugins;
      } catch (m) {
        f = void 0;
      }

      if (f && f.length) (c = c.mimeTypes) && c["application/x-shockwave-flash"] && c["application/x-shockwave-flash"].enabledPlugin && c["application/x-shockwave-flash"].enabledPlugin.description && (b = !0);else if (a !== g && !v.match(/MSAppHost/i)) {
        try {
          e = new a("ShockwaveFlash.ShockwaveFlash");
        } catch (k) {
          e = null;
        }

        b = !!e;
      }
      return G = b;
    };

    hb = function hb() {
      var b,
          d,
          e = c.audioFormats;
      Qa && v.match(/os (1|2|3_0|3_1)\s/i) ? (c.hasHTML5 = !1, c.html5Only = !0, c.oMC && (c.oMC.style.display = "none")) : c.useHTML5Audio && (c.html5 && c.html5.canPlayType || (c._wD("SoundManager: No HTML5 Audio() support detected."), c.hasHTML5 = !1), Ta && c._wD("soundManager: Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " + (G ? "will use flash fallback for MP3/MP4, if available" : " would use flash fallback for MP3/MP4, but none detected."), 1));
      if (c.useHTML5Audio && c.hasHTML5) for (d in da = !0, e) {
        e.hasOwnProperty(d) && e[d].required && (c.html5.canPlayType(e[d].type) ? c.preferFlash && (c.flash[d] || c.flash[e[d].type]) && (b = !0) : (da = !1, b = !0));
      }
      c.ignoreFlash && (b = !1, da = !0);
      c.html5Only = c.hasHTML5 && c.useHTML5Audio && !b;
      return !c.html5Only;
    };

    ra = function ra(b) {
      var d,
          e,
          a = 0;

      if (b instanceof Array) {
        d = 0;

        for (e = b.length; d < e; d++) {
          if (b[d] instanceof Object) {
            if (c.canPlayMIME(b[d].type)) {
              a = d;
              break;
            }
          } else if (c.canPlayURL(b[d])) {
            a = d;
            break;
          }
        }

        b[a].url && (b[a] = b[a].url);
        b = b[a];
      }

      return b;
    };

    eb = function eb(b) {
      b._hasTimer || (b._hasTimer = !0, !va && c.html5PollingInterval && (null === ca && 0 === qa && (ca = setInterval(gb, c.html5PollingInterval)), qa++));
    };

    fb = function fb(b) {
      b._hasTimer && (b._hasTimer = !1, !va && c.html5PollingInterval && qa--);
    };

    gb = function gb() {
      var b;
      if (null === ca || qa) for (b = c.soundIDs.length - 1; 0 <= b; b--) {
        c.sounds[c.soundIDs[b]].isHTML5 && c.sounds[c.soundIDs[b]]._hasTimer && c.sounds[c.soundIDs[b]]._onTimer();
      } else clearInterval(ca), ca = null;
    };

    T = function T(b) {
      b = b !== g ? b : {};
      "function" === typeof c.onerror && c.onerror.apply(h, [{
        type: b.type !== g ? b.type : null
      }]);
      b.fatal !== g && b.fatal && c.disable();
    };

    lb = function lb() {
      if (Ta && Na()) {
        var b = c.audioFormats,
            d,
            e;

        for (e in b) {
          if (b.hasOwnProperty(e) && ("mp3" === e || "mp4" === e) && (c._wD("soundManager: Using flash fallback for " + e + " format"), c.html5[e] = !1, b[e] && b[e].related)) for (d = b[e].related.length - 1; 0 <= d; d--) {
            c.html5[b[e].related[d]] = !1;
          }
        }
      }
    };

    this._setSandboxType = function (b) {
      var d = c.sandbox;
      d.type = b;
      d.description = d.types[d.types[b] !== g ? b : "unknown"];
      "localWithFile" === d.type ? (d.noRemote = !0, d.noLocal = !1, p("secNote", 2)) : "localWithNetwork" === d.type ? (d.noRemote = !1, d.noLocal = !0) : "localTrusted" === d.type && (d.noRemote = !1, d.noLocal = !1);
    };

    this._externalInterfaceOK = function (b) {
      if (!c.swfLoaded) {
        var d;
        C("swf", !0);
        C("flashtojs", !0);
        c.swfLoaded = !0;
        wa = !1;
        Ta && lb();
        b && b.replace(/\+dev/i, "") === c.versionNumber.replace(/\+dev/i, "") ? setTimeout(ya, N ? 100 : 1) : (d = 'soundManager: Fatal: JavaScript file build "' + c.versionNumber + '" does not match Flash SWF build "' + b + '" at ' + c.url + ". Ensure both are up-to-date.", setTimeout(function () {
          throw Error(d);
        }, 0));
      }
    };

    na = function na(b, d) {
      function e() {
        var a = [],
            b,
            d = [];
        b = "SoundManager " + c.version + (!c.html5Only && c.useHTML5Audio ? c.hasHTML5 ? " + HTML5 audio" : ", no HTML5 audio support" : "");
        c.html5Only ? c.html5PollingInterval && a.push("html5PollingInterval (" + c.html5PollingInterval + "ms)") : (c.preferFlash && a.push("preferFlash"), c.useHighPerformance && a.push("useHighPerformance"), c.flashPollingInterval && a.push("flashPollingInterval (" + c.flashPollingInterval + "ms)"), c.html5PollingInterval && a.push("html5PollingInterval (" + c.html5PollingInterval + "ms)"), c.wmode && a.push("wmode (" + c.wmode + ")"), c.debugFlash && a.push("debugFlash"), c.useFlashBlock && a.push("flashBlock"));
        a.length && (d = d.concat([a.join(" + ")]));

        c._wD(b + (d.length ? " + " + d.join(", ") : ""), 1);

        mb();
      }

      function a(a, b) {
        return '<param name="' + a + '" value="' + b + '" />';
      }

      if (W && X) return !1;
      if (c.html5Only) return Da(), e(), c.oMC = E(c.movieID), ya(), X = W = !0, !1;
      var f = d || c.url,
          h = c.altURL || f,
          k = ma(),
          l = U(),
          n = null,
          n = m.getElementsByTagName("html")[0],
          p,
          r,
          q,
          n = n && n.dir && n.dir.match(/rtl/i);
      b = b === g ? c.id : b;
      Da();
      c.url = cb(ga ? f : h);
      d = c.url;
      c.wmode = !c.wmode && c.useHighPerformance ? "transparent" : c.wmode;
      null !== c.wmode && (v.match(/msie 8/i) || !N && !c.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (L.push(z.spcWmode), c.wmode = null);
      k = {
        name: b,
        id: b,
        src: d,
        quality: "high",
        allowScriptAccess: c.allowScriptAccess,
        bgcolor: c.bgColor,
        pluginspage: vb + "www.macromedia.com/go/getflashplayer",
        title: "JS/Flash audio component (SoundManager 2)",
        type: "application/x-shockwave-flash",
        wmode: c.wmode,
        hasPriority: "true"
      };
      c.debugFlash && (k.FlashVars = "debug=1");
      c.wmode || delete k.wmode;
      if (N) f = m.createElement("div"), r = ['<object id="' + b + '" data="' + d + '" type="' + k.type + '" title="' + k.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', a("movie", d), a("AllowScriptAccess", c.allowScriptAccess), a("quality", k.quality), c.wmode ? a("wmode", c.wmode) : "", a("bgcolor", c.bgColor), a("hasPriority", "true"), c.debugFlash ? a("FlashVars", k.FlashVars) : "", "</object>"].join("");else for (p in f = m.createElement("embed"), k) {
        k.hasOwnProperty(p) && f.setAttribute(p, k[p]);
      }
      Fa();
      l = U();
      if (k = ma()) if (c.oMC = E(c.movieID) || m.createElement("div"), c.oMC.id) q = c.oMC.className, c.oMC.className = (q ? q + " " : "movieContainer") + (l ? " " + l : ""), c.oMC.appendChild(f), N && (p = c.oMC.appendChild(m.createElement("div")), p.className = "sm2-object-box", p.innerHTML = r), X = !0;else {
        c.oMC.id = c.movieID;
        c.oMC.className = "movieContainer " + l;
        p = l = null;
        c.useFlashBlock || (c.useHighPerformance ? l = {
          position: "fixed",
          width: "8px",
          height: "8px",
          bottom: "0px",
          left: "0px",
          overflow: "hidden"
        } : (l = {
          position: "absolute",
          width: "6px",
          height: "6px",
          top: "-9999px",
          left: "-9999px"
        }, n && (l.left = Math.abs(parseInt(l.left, 10)) + "px")));
        ub && (c.oMC.style.zIndex = 1E4);
        if (!c.debugFlash) for (q in l) {
          l.hasOwnProperty(q) && (c.oMC.style[q] = l[q]);
        }

        try {
          N || c.oMC.appendChild(f), k.appendChild(c.oMC), N && (p = c.oMC.appendChild(m.createElement("div")), p.className = "sm2-object-box", p.innerHTML = r), X = !0;
        } catch (u) {
          throw Error(t("domError") + " \n" + u.toString());
        }
      }
      W = !0;
      e();
      return !0;
    };

    la = function la() {
      if (c.html5Only) return na(), !1;
      if (l) return !1;
      if (!c.url) return p("noURL"), !1;
      l = c.getMovie(c.id);
      l || (aa ? (N ? c.oMC.innerHTML = Ia : c.oMC.appendChild(aa), aa = null, W = !0) : na(c.id, c.url), l = c.getMovie(c.id));
      "function" === typeof c.oninitmovie && setTimeout(c.oninitmovie, 1);
      Oa();
      return !0;
    };

    S = function S() {
      setTimeout($a, 1E3);
    };

    Ca = function Ca() {
      h.setTimeout(function () {
        K("soundManager: useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...");
        c.setup({
          preferFlash: !1
        }).reboot();
        c.didFlashBlock = !0;
        c.beginDelayedInit();
      }, 1);
    };

    $a = function $a() {
      var b,
          d = !1;
      c.url && !ba && (ba = !0, x.remove(h, "load", S), G && wa && !Va ? p("waitFocus") : (q || (b = c.getMoviePercent(), 0 < b && 100 > b && (d = !0)), setTimeout(function () {
        b = c.getMoviePercent();
        d ? (ba = !1, c._wD(t("waitSWF")), h.setTimeout(S, 1)) : (q || (c._wD("soundManager: No Flash response within expected time. Likely causes: " + (0 === b ? "SWF load failed, " : "") + "Flash blocked or JS-Flash security error." + (c.debugFlash ? " " + t("checkSWF") : ""), 2), !ga && b && (p("localFail", 2), c.debugFlash || p("tryDebug", 2)), 0 === b && c._wD(t("swf404", c.url), 1), C("flashtojs", !1, ": Timed out" + (ga ? " (Check flash security or flash blockers)" : " (No plugin/missing SWF?)"))), !q && ob && (null === b ? c.useFlashBlock || 0 === c.flashLoadTimeout ? (c.useFlashBlock && Ja(), p("waitForever")) : !c.useFlashBlock && da ? Ca() : (p("waitForever"), O({
          type: "ontimeout",
          ignoreInit: !0,
          error: {
            type: "INIT_FLASHBLOCK"
          }
        })) : 0 === c.flashLoadTimeout ? p("waitForever") : !c.useFlashBlock && da ? Ca() : Ha(!0)));
      }, c.flashLoadTimeout)));
    };

    _ka = function ka() {
      if (Va || !wa) return x.remove(h, "focus", _ka), !0;
      Va = ob = !0;
      p("gotFocus");
      ba = !1;
      S();
      x.remove(h, "focus", _ka);
      return !0;
    };

    Oa = function Oa() {
      L.length && (c._wD("SoundManager 2: " + L.join(" "), 1), L = []);
    };

    mb = function mb() {
      Oa();
      var b,
          d = [];

      if (c.useHTML5Audio && c.hasHTML5) {
        for (b in c.audioFormats) {
          c.audioFormats.hasOwnProperty(b) && d.push(b + " = " + c.html5[b] + (!c.html5[b] && u && c.flash[b] ? " (using flash)" : c.preferFlash && c.flash[b] && u ? " (preferring flash)" : c.html5[b] ? "" : " (" + (c.audioFormats[b].required ? "required, " : "") + "and no flash support)"));
        }

        c._wD("SoundManager 2 HTML5 support: " + d.join(", "), 1);
      }
    };

    Y = function Y(b) {
      if (q) return !1;
      if (c.html5Only) return p("sm2Loaded", 1), q = !0, _R(), C("onload", !0), !0;
      var d = !0,
          e;
      c.useFlashBlock && c.flashLoadTimeout && !c.getMoviePercent() || (q = !0);
      e = {
        type: !G && u ? "NO_FLASH" : "INIT_TIMEOUT"
      };

      c._wD("SoundManager 2 " + (y ? "failed to load" : "loaded") + " (" + (y ? "Flash security/load error" : "OK") + ") " + String.fromCharCode(y ? 10006 : 10003), y ? 2 : 1);

      y || b ? (c.useFlashBlock && c.oMC && (c.oMC.className = U() + " " + (null === c.getMoviePercent() ? "swf_timedout" : "swf_error")), O({
        type: "ontimeout",
        error: e,
        ignoreInit: !0
      }), C("onload", !1), T(e), d = !1) : C("onload", !0);
      y || (c.waitForWindowLoad && !ja ? (p("waitOnload"), x.add(h, "load", _R)) : (c.waitForWindowLoad && ja && p("docLoaded"), _R()));
      return d;
    };

    Za = function Za() {
      var b,
          d = c.setupOptions;

      for (b in d) {
        d.hasOwnProperty(b) && (c[b] === g ? c[b] = d[b] : c[b] !== d[b] && (c.setupOptions[b] = c[b]));
      }
    };

    ya = function ya() {
      if (q) return p("didInit"), !1;
      if (c.html5Only) return q || (x.remove(h, "load", c.beginDelayedInit), c.enabled = !0, Y()), !0;
      la();

      try {
        l._externalInterfaceTest(!1), ab(!0, c.flashPollingInterval || (c.useHighPerformance ? 10 : 50)), c.debugMode || l._disableDebug(), c.enabled = !0, C("jstoflash", !0), c.html5Only || x.add(h, "unload", xa);
      } catch (b) {
        return c._wD("js/flash exception: " + b.toString()), C("jstoflash", !1), T({
          type: "JS_TO_FLASH_EXCEPTION",
          fatal: !0
        }), Ha(!0), Y(), !1;
      }

      Y();
      x.remove(h, "load", c.beginDelayedInit);
      return !0;
    };

    _P = function P() {
      if (Z) return !1;
      Z = !0;
      Za();
      Fa();
      !G && c.hasHTML5 && (c._wD("SoundManager 2: No Flash detected" + (c.useHTML5Audio ? ". Trying HTML5-only mode." : ", enabling HTML5."), 1), c.setup({
        useHTML5Audio: !0,
        preferFlash: !1
      }));
      jb();
      !G && u && (L.push(z.needFlash), c.setup({
        flashLoadTimeout: 1
      }));
      m.removeEventListener && m.removeEventListener("DOMContentLoaded", _P, !1);
      la();
      return !0;
    };

    _La = function La() {
      "complete" === m.readyState && (_P(), m.detachEvent("onreadystatechange", _La));
      return !0;
    };

    _Ea = function Ea() {
      ja = !0;

      _P();

      x.remove(h, "load", _Ea);
    };

    Na();
    x.add(h, "focus", _ka);
    x.add(h, "load", S);
    x.add(h, "load", _Ea);
    m.addEventListener ? m.addEventListener("DOMContentLoaded", _P, !1) : m.attachEvent ? m.attachEvent("onreadystatechange", _La) : (C("onload", !1), T({
      type: "NO_DOM2_EVENTS",
      fatal: !0
    }));
  }

  if (!h || !h.document) throw Error("SoundManager requires a browser with window and document objects.");
  var V = null;
  h.SM2_DEFER !== g && SM2_DEFER || (V = new J());
   true && module && "object" === typeof module.exports ? (module.exports.SoundManager = J, module.exports.soundManager = V) : "function" === typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") && define(function () {
    return {
      constructor: J,
      getInstance: function getInstance(g) {
        !h.soundManager && g instanceof Function && (g = g(J), g instanceof J && (h.soundManager = g));
        return h.soundManager;
      }
    };
  });
  h.SoundManager = J;
  h.soundManager = V;
})(window);

!function () {
  "use strict";

  function s() {
    var t = this,
        e = this,
        i = soundManager,
        s = navigator.userAgent.match(/msie/i);
    this.playableClass = "inline-playable", this.excludeClass = "inline-exclude", this.links = [], this.sounds = [], this.soundsByURL = [], this.indexByURL = [], this.lastSound = null, this.soundCount = 0, this.config = {
      playNext: !1,
      autoPlay: !1
    }, this.css = {
      sDefault: "sm2_link",
      sLoading: "sm2_loading",
      sPlaying: "sm2_playing",
      sPaused: "sm2_paused"
    }, this.addEventHandler = void 0 !== window.addEventListener ? function (s, e, n) {
      return s.addEventListener(e, n, !1);
    } : function (s, e, n) {
      s.attachEvent("on" + e, n);
    }, this.removeEventHandler = void 0 !== window.removeEventListener ? function (s, e, n) {
      return s.removeEventListener(e, n, !1);
    } : function (s, e, n) {
      return s.detachEvent("on" + e, n);
    }, this.classContains = function (s, e) {
      return void 0 !== s.className && s.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
    }, this.addClass = function (s, e) {
      s && e && !t.classContains(s, e) && (s.className = (s.className ? s.className + " " : "") + e);
    }, this.removeClass = function (s, e) {
      s && e && t.classContains(s, e) && (s.className = s.className.replace(new RegExp("( " + e + ")|(" + e + ")", "g"), ""));
    }, this.getSoundByURL = function (s) {
      return void 0 !== t.soundsByURL[s] ? t.soundsByURL[s] : null;
    }, this.isChildOfNode = function (s, e) {
      if (!s || !s.parentNode) return !1;

      for (e = e.toLowerCase(); s = s.parentNode, s && s.parentNode && s.nodeName.toLowerCase() !== e;) {
        ;
      }

      return s.nodeName.toLowerCase() === e ? s : null;
    }, this.events = {
      play: function play() {
        e.removeClass(this._data.oLink, this._data.className), this._data.className = e.css.sPlaying, e.addClass(this._data.oLink, this._data.className);
      },
      stop: function stop() {
        e.removeClass(this._data.oLink, this._data.className), this._data.className = "";
      },
      pause: function pause() {
        e.removeClass(this._data.oLink, this._data.className), this._data.className = e.css.sPaused, e.addClass(this._data.oLink, this._data.className);
      },
      resume: function resume() {
        e.removeClass(this._data.oLink, this._data.className), this._data.className = e.css.sPlaying, e.addClass(this._data.oLink, this._data.className);
      },
      finish: function finish() {
        var s;
        e.removeClass(this._data.oLink, this._data.className), this._data.className = "", !e.config.playNext || (s = e.indexByURL[this._data.oLink.href] + 1) < e.links.length && e.handleClick({
          target: e.links[s]
        });
      }
    }, this.stopEvent = function (s) {
      return void 0 !== s && void 0 !== s.preventDefault ? s.preventDefault() : "undefined" != typeof event && void 0 !== event.returnValue && (event.returnValue = !1), !1;
    }, this.getTheDamnLink = s ? function (s) {
      return s && s.target ? s.target : window.event.srcElement;
    } : function (s) {
      return s.target;
    }, this.handleClick = function (s) {
      if (void 0 !== s.button && 1 < s.button) return !0;
      var e = t.getTheDamnLink(s);
      if ("a" !== e.nodeName.toLowerCase() && !(e = t.isChildOfNode(e, "a"))) return !0;
      if (!e.href || !i.canPlayLink(e) && !t.classContains(e, t.playableClass) || t.classContains(e, t.excludeClass)) return !0;
      var n = e.href,
          a = t.getSoundByURL(n);
      return a ? (a === t.lastSound || (i._writeDebug("sound different than last sound: " + t.lastSound.id), t.lastSound && t.stopSound(t.lastSound)), a.togglePause()) : (t.lastSound && t.stopSound(t.lastSound), (a = i.createSound({
        id: "inlineMP3Sound" + t.soundCount++,
        url: n,
        onplay: t.events.play,
        onstop: t.events.stop,
        onpause: t.events.pause,
        onresume: t.events.resume,
        onfinish: t.events.finish,
        type: e.type || null
      }))._data = {
        oLink: e,
        className: t.css.sPlaying
      }, t.soundsByURL[n] = a, t.sounds.push(a), a.play()), t.lastSound = a, void 0 !== s && void 0 !== s.preventDefault ? s.preventDefault() : event.returnValue = !1, !1;
    }, this.stopSound = function (s) {
      soundManager.stop(s.id), soundManager.unload(s.id);
    }, this.init = function () {
      i._writeDebug("inlinePlayer.init()");

      for (var s = document.getElementsByTagName("a"), e = 0, n = 0, a = s.length; n < a; n++) {
        !i.canPlayLink(s[n]) && !t.classContains(s[n], t.playableClass) || t.classContains(s[n], t.excludeClass) || (t.addClass(s[n], t.css.sDefault), t.links[e] = s[n], t.indexByURL[s[n].href] = e, e++);
      }

      0 < e && (t.addEventHandler(document, "click", t.handleClick), t.config.autoPlay && t.handleClick({
        target: t.links[0],
        preventDefault: function preventDefault() {}
      })), i._writeDebug("inlinePlayer.init(): Found " + e + " relevant items.");
    }, this.init();
  }

  window.inlinePlayer = null, soundManager.setup({
    debugMode: !1,
    preferFlash: !1,
    useFlashBlock: !1,
    url: "../../swf/",
    flashVersion: 9
  }), soundManager.onready(function () {
    new s();
  });
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

app.initializers.add('zerosonesfun/flarum-inline-audio', function () {
  return;
});

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map