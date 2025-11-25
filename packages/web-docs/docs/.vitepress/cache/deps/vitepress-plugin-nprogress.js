import "./chunk-5WRI5ZAA.js";

// ../../node_modules/.pnpm/vitepress-plugin-nprogress@0.1.1/node_modules/vitepress-plugin-nprogress/lib/vitepress-plugin-nprogress.js
var N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function M(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var k = { exports: {} };
(function(c, m) {
  (function(r, s) {
    c.exports = s();
  })(N, function() {
    var r = {};
    r.version = "0.2.0";
    var s = r.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    r.configure = function(e) {
      var t, n;
      for (t in e)
        n = e[t], n !== void 0 && e.hasOwnProperty(t) && (s[t] = n);
      return this;
    }, r.status = null, r.set = function(e) {
      var t = r.isStarted();
      e = p(e, s.minimum, 1), r.status = e === 1 ? null : e;
      var n = r.render(!t), o = n.querySelector(s.barSelector), a = s.speed, d = s.easing;
      return n.offsetWidth, E(function(i) {
        s.positionUsing === "" && (s.positionUsing = r.getPositioningCSS()), y(o, T(e, a, d)), e === 1 ? (y(n, {
          transition: "none",
          opacity: 1
        }), n.offsetWidth, setTimeout(function() {
          y(n, {
            transition: "all " + a + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), i();
          }, a);
        }, a)) : setTimeout(i, a);
      }), this;
    }, r.isStarted = function() {
      return typeof r.status == "number";
    }, r.start = function() {
      r.status || r.set(0);
      var e = function() {
        setTimeout(function() {
          r.status && (r.trickle(), e());
        }, s.trickleSpeed);
      };
      return s.trickle && e(), this;
    }, r.done = function(e) {
      return !e && !r.status ? this : r.inc(0.3 + 0.5 * Math.random()).set(1);
    }, r.inc = function(e) {
      var t = r.status;
      return t ? (typeof e != "number" && (e = (1 - t) * p(Math.random() * t, 0.1, 0.95)), t = p(t + e, 0, 0.994), r.set(t)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * s.trickleRate);
    }, function() {
      var e = 0, t = 0;
      r.promise = function(n) {
        return !n || n.state() === "resolved" ? this : (t === 0 && r.start(), e++, t++, n.always(function() {
          t--, t === 0 ? (e = 0, r.done()) : r.set((e - t) / e);
        }), this);
      };
    }(), r.render = function(e) {
      if (r.isRendered()) return document.getElementById("nprogress");
      C(document.documentElement, "nprogress-busy");
      var t = document.createElement("div");
      t.id = "nprogress", t.innerHTML = s.template;
      var n = t.querySelector(s.barSelector), o = e ? "-100" : l(r.status || 0), a = document.querySelector(s.parent), d;
      return y(n, {
        transition: "all 0 linear",
        transform: "translate3d(" + o + "%,0,0)"
      }), s.showSpinner || (d = t.querySelector(s.spinnerSelector), d && P(d)), a != document.body && C(a, "nprogress-custom-parent"), a.appendChild(t), t;
    }, r.remove = function() {
      w(document.documentElement, "nprogress-busy"), w(document.querySelector(s.parent), "nprogress-custom-parent");
      var e = document.getElementById("nprogress");
      e && P(e);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var e = document.body.style, t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
      return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin";
    };
    function p(e, t, n) {
      return e < t ? t : e > n ? n : e;
    }
    function l(e) {
      return (-1 + e) * 100;
    }
    function T(e, t, n) {
      var o;
      return s.positionUsing === "translate3d" ? o = { transform: "translate3d(" + l(e) + "%,0,0)" } : s.positionUsing === "translate" ? o = { transform: "translate(" + l(e) + "%,0)" } : o = { "margin-left": l(e) + "%" }, o.transition = "all " + t + "ms " + n, o;
    }
    var E = /* @__PURE__ */ function() {
      var e = [];
      function t() {
        var n = e.shift();
        n && n(t);
      }
      return function(n) {
        e.push(n), e.length == 1 && t();
      };
    }(), y = /* @__PURE__ */ function() {
      var e = ["Webkit", "O", "Moz", "ms"], t = {};
      function n(i) {
        return i.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(u, f) {
          return f.toUpperCase();
        });
      }
      function o(i) {
        var u = document.body.style;
        if (i in u) return i;
        for (var f = e.length, v = i.charAt(0).toUpperCase() + i.slice(1), g; f--; )
          if (g = e[f] + v, g in u) return g;
        return i;
      }
      function a(i) {
        return i = n(i), t[i] || (t[i] = o(i));
      }
      function d(i, u, f) {
        u = a(u), i.style[u] = f;
      }
      return function(i, u) {
        var f = arguments, v, g;
        if (f.length == 2)
          for (v in u)
            g = u[v], g !== void 0 && u.hasOwnProperty(v) && d(i, v, g);
        else
          d(i, f[1], f[2]);
      };
    }();
    function S(e, t) {
      var n = typeof e == "string" ? e : b(e);
      return n.indexOf(" " + t + " ") >= 0;
    }
    function C(e, t) {
      var n = b(e), o = n + t;
      S(n, t) || (e.className = o.substring(1));
    }
    function w(e, t) {
      var n = b(e), o;
      S(e, t) && (o = n.replace(" " + t + " ", " "), e.className = o.substring(1, o.length - 1));
    }
    function b(e) {
      return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
    }
    function P(e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    }
    return r;
  });
})(k);
var O = k.exports;
var h = M(O);
var R = (c) => {
  if (typeof window > "u") return;
  const { router: m } = c;
  return setTimeout(() => {
    h.configure({ showSpinner: false });
    const r = "onAfterRouteChanged" in m ? "onAfterRouteChanged" : "onAfterRouteChange", s = m.onBeforeRouteChange, p = m[r];
    m.onBeforeRouteChange = (l) => {
      h.start(), s == null || s(l);
    }, m[r] = (l) => {
      h.done(), p == null || p(l);
    };
  }), h;
};
export {
  R as default
};
/*! Bundled license information:

vitepress-plugin-nprogress/lib/vitepress-plugin-nprogress.js:
  (* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
   * @license MIT *)
*/
//# sourceMappingURL=vitepress-plugin-nprogress.js.map
