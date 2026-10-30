var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t, n) => () => {
    if (n) throw n[0];
    try {
      return (e && (t = e((e = 0))), t);
    } catch (e) {
      throw ((n = [e]), e);
    }
  },
  s = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  c = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  l = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  u = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    l(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  ),
  d = (e) =>
    a.call(e, `module.exports`)
      ? e[`module.exports`]
      : l(t({}, `__esModule`, { value: !0 }), e);
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var f = s((e) => {
    var t = Symbol.for(`react.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.provider`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.iterator;
    function p(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (f && e[f]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var m = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      h = Object.assign,
      g = {};
    function _(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = n || m));
    }
    ((_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `setState(...): takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function v() {}
    v.prototype = _.prototype;
    function y(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = n || m));
    }
    var b = (y.prototype = new v());
    ((b.constructor = y), h(b, _.prototype), (b.isPureReactComponent = !0));
    var x = Array.isArray,
      S = Object.prototype.hasOwnProperty,
      C = { current: null },
      w = { key: !0, ref: !0, __self: !0, __source: !0 };
    function T(e, n, r) {
      var i,
        a = {},
        o = null,
        s = null;
      if (n != null)
        for (i in (n.ref !== void 0 && (s = n.ref),
        n.key !== void 0 && (o = `` + n.key),
        n))
          S.call(n, i) && !w.hasOwnProperty(i) && (a[i] = n[i]);
      var c = arguments.length - 2;
      if (c === 1) a.children = r;
      else if (1 < c) {
        for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
        a.children = l;
      }
      if (e && e.defaultProps)
        for (i in ((c = e.defaultProps), c)) a[i] === void 0 && (a[i] = c[i]);
      return {
        $$typeof: t,
        type: e,
        key: o,
        ref: s,
        props: a,
        _owner: C.current,
      };
    }
    function ee(e, n) {
      return {
        $$typeof: t,
        type: e.type,
        key: n,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function te(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ne(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var re = /\/+/g;
    function E(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ne(`` + e.key)
        : t.toString(36);
    }
    function D(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
            }
        }
      if (c)
        return (
          (c = e),
          (o = o(c)),
          (e = a === `` ? `.` + E(c, 0) : a),
          x(o)
            ? ((i = ``),
              e != null && (i = e.replace(re, `$&/`) + `/`),
              D(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (te(o) &&
                (o = ee(
                  o,
                  i +
                    (!o.key || (c && c.key === o.key)
                      ? ``
                      : (`` + o.key).replace(re, `$&/`) + `/`) +
                    e,
                )),
              r.push(o)),
          1
        );
      if (((c = 0), (a = a === `` ? `.` : a + `:`), x(e)))
        for (var l = 0; l < e.length; l++) {
          s = e[l];
          var u = a + E(s, l);
          c += D(s, r, i, u, o);
        }
      else if (((u = p(e)), typeof u == `function`))
        for (e = u.call(e), l = 0; !(s = e.next()).done;)
          ((s = s.value), (u = a + E(s, l++)), (c += D(s, r, i, u, o)));
      else if (s === `object`)
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      return c;
    }
    function O(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        D(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ie(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var k = { current: null },
      ae = { transition: null },
      A = {
        ReactCurrentDispatcher: k,
        ReactCurrentBatchConfig: ae,
        ReactCurrentOwner: C,
      };
    function oe() {
      throw Error(`act(...) is not supported in production builds of React.`);
    }
    ((e.Children = {
      map: O,
      forEach: function (e, t, n) {
        O(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          O(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          O(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!te(e))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return e;
      },
    }),
      (e.Component = _),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = y),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
      (e.act = oe),
      (e.cloneElement = function (e, n, r) {
        if (e == null)
          throw Error(
            `React.cloneElement(...): The argument must be a React element, but you passed ` +
              e +
              `.`,
          );
        var i = h({}, e.props),
          a = e.key,
          o = e.ref,
          s = e._owner;
        if (n != null) {
          if (
            (n.ref !== void 0 && ((o = n.ref), (s = C.current)),
            n.key !== void 0 && (a = `` + n.key),
            e.type && e.type.defaultProps)
          )
            var c = e.type.defaultProps;
          for (l in n)
            S.call(n, l) &&
              !w.hasOwnProperty(l) &&
              (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
        }
        var l = arguments.length - 2;
        if (l === 1) i.children = r;
        else if (1 < l) {
          c = Array(l);
          for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
          i.children = c;
        }
        return {
          $$typeof: t,
          type: e.type,
          key: a,
          ref: o,
          props: i,
          _owner: s,
        };
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (e.Provider = { $$typeof: o, _context: e }),
          (e.Consumer = e)
        );
      }),
      (e.createElement = T),
      (e.createFactory = function (e) {
        var t = T.bind(null, e);
        return ((t.type = e), t);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = te),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: ie,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = ae.transition;
        ae.transition = {};
        try {
          e();
        } finally {
          ae.transition = t;
        }
      }),
      (e.unstable_act = oe),
      (e.useCallback = function (e, t) {
        return k.current.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return k.current.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e) {
        return k.current.useDeferredValue(e);
      }),
      (e.useEffect = function (e, t) {
        return k.current.useEffect(e, t);
      }),
      (e.useId = function () {
        return k.current.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return k.current.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return k.current.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return k.current.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return k.current.useMemo(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return k.current.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return k.current.useRef(e);
      }),
      (e.useState = function (e) {
        return k.current.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return k.current.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return k.current.useTransition();
      }),
      (e.version = `18.3.1`));
  }),
  p = s((e, t) => {
    t.exports = f();
  }),
  m = s((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      typeof performance == `object` &&
      typeof performance.now == `function`
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = typeof setTimeout == `function` ? setTimeout : null,
      _ = typeof clearTimeout == `function` ? clearTimeout : null,
      v = typeof setImmediate < `u` ? setImmediate : null;
    typeof navigator < `u` &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function b(e) {
      if (((h = !1), y(e), !m))
        if (n(c) !== null) ((m = !0), O(x));
        else {
          var t = n(l);
          t !== null && ie(b, t.startTime - e);
        }
    }
    function x(t, i) {
      ((m = !1), h && ((h = !1), _(w), (w = -1)), (p = !0));
      var a = f;
      try {
        for (
          y(i), d = n(c);
          d !== null && (!(d.expirationTime > i) || (t && !te()));
        ) {
          var o = d.callback;
          if (typeof o == `function`) {
            ((d.callback = null), (f = d.priorityLevel));
            var s = o(d.expirationTime <= i);
            ((i = e.unstable_now()),
              typeof s == `function` ? (d.callback = s) : d === n(c) && r(c),
              y(i));
          } else r(c);
          d = n(c);
        }
        if (d !== null) var u = !0;
        else {
          var g = n(l);
          (g !== null && ie(b, g.startTime - i), (u = !1));
        }
        return u;
      } finally {
        ((d = null), (f = a), (p = !1));
      }
    }
    var S = !1,
      C = null,
      w = -1,
      T = 5,
      ee = -1;
    function te() {
      return !(e.unstable_now() - ee < T);
    }
    function ne() {
      if (C !== null) {
        var t = e.unstable_now();
        ee = t;
        var n = !0;
        try {
          n = C(!0, t);
        } finally {
          n ? re() : ((S = !1), (C = null));
        }
      } else S = !1;
    }
    var re;
    if (typeof v == `function`)
      re = function () {
        v(ne);
      };
    else if (typeof MessageChannel < `u`) {
      var E = new MessageChannel(),
        D = E.port2;
      ((E.port1.onmessage = ne),
        (re = function () {
          D.postMessage(null);
        }));
    } else
      re = function () {
        g(ne, 0);
      };
    function O(e) {
      ((C = e), S || ((S = !0), re()));
    }
    function ie(t, n) {
      w = g(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        m || p || ((m = !0), O(x));
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (T = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(c);
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (_(w), (w = -1)) : (h = !0), ie(b, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), O(x))),
          r
        );
      }),
      (e.unstable_shouldYield = te),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  h = s((e, t) => {
    t.exports = m();
  }),
  g = s((e) => {
    var t = p(),
      n = h();
    function r(e) {
      for (
        var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += `&args[]=` + encodeURIComponent(arguments[n]);
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    var i = new Set(),
      a = {};
    function o(e, t) {
      (s(e, t), s(e + `Capture`, t));
    }
    function s(e, t) {
      for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
    }
    var c = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      l = Object.prototype.hasOwnProperty,
      u =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      d = {},
      f = {};
    function m(e) {
      return l.call(f, e)
        ? !0
        : l.call(d, e)
          ? !1
          : u.test(e)
            ? (f[e] = !0)
            : ((d[e] = !0), !1);
    }
    function g(e, t, n, r) {
      if (n !== null && n.type === 0) return !1;
      switch (typeof t) {
        case `function`:
        case `symbol`:
          return !0;
        case `boolean`:
          return r
            ? !1
            : n === null
              ? ((e = e.toLowerCase().slice(0, 5)),
                e !== `data-` && e !== `aria-`)
              : !n.acceptsBooleans;
        default:
          return !1;
      }
    }
    function _(e, t, n, r) {
      if (t == null || g(e, t, n, r)) return !0;
      if (r) return !1;
      if (n !== null)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function v(e, t, n, r, i, a, o) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o));
    }
    var y = {};
    (`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
      .split(` `)
      .forEach(function (e) {
        y[e] = new v(e, 0, !1, e, null, !1, !1);
      }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        y[t] = new v(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(
        function (e) {
          y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
        },
      ),
      [
        `autoReverse`,
        `externalResourcesRequired`,
        `focusable`,
        `preserveAlpha`,
      ].forEach(function (e) {
        y[e] = new v(e, 2, !1, e, null, !1, !1);
      }),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        y[e] = new v(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        y[e] = new v(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        y[e] = new v(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }));
    var b = /[\-:]([a-z])/g;
    function x(e) {
      return e[1].toUpperCase();
    }
    (`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
      .split(` `)
      .forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(t, 1, !1, e, null, !1, !1);
      }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(b, x);
          y[t] = new v(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(
          t,
          1,
          !1,
          e,
          `http://www.w3.org/XML/1998/namespace`,
          !1,
          !1,
        );
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (y.xlinkHref = new v(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1,
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }));
    function S(e, t, n, r) {
      var i = y.hasOwnProperty(t) ? y[t] : null;
      (i === null
        ? r ||
          !(2 < t.length) ||
          (t[0] !== `o` && t[0] !== `O`) ||
          (t[1] !== `n` && t[1] !== `N`)
        : i.type !== 0) &&
        (_(t, n, i, r) && (n = null),
        r || i === null
          ? m(t) &&
            (n === null ? e.removeAttribute(t) : e.setAttribute(t, `` + n))
          : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? i.type !== 3 && `` : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                ? e.removeAttribute(t)
                : ((i = i.type),
                  (n = i === 3 || (i === 4 && !0 === n) ? `` : `` + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      w = Symbol.for(`react.element`),
      T = Symbol.for(`react.portal`),
      ee = Symbol.for(`react.fragment`),
      te = Symbol.for(`react.strict_mode`),
      ne = Symbol.for(`react.profiler`),
      re = Symbol.for(`react.provider`),
      E = Symbol.for(`react.context`),
      D = Symbol.for(`react.forward_ref`),
      O = Symbol.for(`react.suspense`),
      ie = Symbol.for(`react.suspense_list`),
      k = Symbol.for(`react.memo`),
      ae = Symbol.for(`react.lazy`),
      A = Symbol.for(`react.offscreen`),
      oe = Symbol.iterator;
    function se(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (oe && e[oe]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var j = Object.assign,
      ce;
    function M(e) {
      if (ce === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ce = (t && t[1]) || ``;
        }
      return (
        `
` +
        ce +
        e
      );
    }
    var le = !1;
    function ue(e, t) {
      if (!e || le) return ``;
      le = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == `object` && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && typeof t.stack == `string`) {
          for (
            var i = t.stack.split(`
`),
              a = r.stack.split(`
`),
              o = i.length - 1,
              s = a.length - 1;
            1 <= o && 0 <= s && i[o] !== a[s];
          )
            s--;
          for (; 1 <= o && 0 <= s; o--, s--)
            if (i[o] !== a[s]) {
              if (o !== 1 || s !== 1)
                do
                  if ((o--, s--, 0 > s || i[o] !== a[s])) {
                    var c =
                      `
` + i[o].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        c.includes(`<anonymous>`) &&
                        (c = c.replace(`<anonymous>`, e.displayName)),
                      c
                    );
                  }
                while (1 <= o && 0 <= s);
              break;
            }
        }
      } finally {
        ((le = !1), (Error.prepareStackTrace = n));
      }
      return (e = e ? e.displayName || e.name : ``) ? M(e) : ``;
    }
    function de(e) {
      switch (e.tag) {
        case 5:
          return M(e.type);
        case 16:
          return M(`Lazy`);
        case 13:
          return M(`Suspense`);
        case 19:
          return M(`SuspenseList`);
        case 0:
        case 2:
        case 15:
          return ((e = ue(e.type, !1)), e);
        case 11:
          return ((e = ue(e.type.render, !1)), e);
        case 1:
          return ((e = ue(e.type, !0)), e);
        default:
          return ``;
      }
    }
    function fe(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case ee:
          return `Fragment`;
        case T:
          return `Portal`;
        case ne:
          return `Profiler`;
        case te:
          return `StrictMode`;
        case O:
          return `Suspense`;
        case ie:
          return `SuspenseList`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case E:
            return (e.displayName || `Context`) + `.Consumer`;
          case re:
            return (e._context.displayName || `Context`) + `.Provider`;
          case D:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case k:
            return (
              (t = e.displayName || null),
              t === null ? fe(e.type) || `Memo` : t
            );
          case ae:
            ((t = e._payload), (e = e._init));
            try {
              return fe(e(t));
            } catch {}
        }
      return null;
    }
    function pe(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return `Cache`;
        case 9:
          return (t.displayName || `Context`) + `.Consumer`;
        case 10:
          return (t._context.displayName || `Context`) + `.Provider`;
        case 18:
          return `DehydratedFragment`;
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ``),
            t.displayName || (e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)
          );
        case 7:
          return `Fragment`;
        case 5:
          return t;
        case 4:
          return `Portal`;
        case 3:
          return `Root`;
        case 6:
          return `Text`;
        case 16:
          return fe(t);
        case 8:
          return t === te ? `StrictMode` : `Mode`;
        case 22:
          return `Offscreen`;
        case 12:
          return `Profiler`;
        case 21:
          return `Scope`;
        case 13:
          return `Suspense`;
        case 19:
          return `SuspenseList`;
        case 25:
          return `TracingMarker`;
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == `function`) return t.displayName || t.name || null;
          if (typeof t == `string`) return t;
      }
      return null;
    }
    function me(e) {
      switch (typeof e) {
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function he(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function ge(e) {
      var t = he(e) ? `checked` : `value`,
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = `` + e[t];
      if (
        !e.hasOwnProperty(t) &&
        n !== void 0 &&
        typeof n.get == `function` &&
        typeof n.set == `function`
      ) {
        var i = n.get,
          a = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((r = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function _e(e) {
      e._valueTracker ||= ge(e);
    }
    function ve(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = he(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function ye(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function be(e, t) {
      var n = t.checked;
      return j({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
      });
    }
    function xe(e, t) {
      var n = t.defaultValue == null ? `` : t.defaultValue,
        r = t.checked == null ? t.defaultChecked : t.checked;
      ((n = me(t.value == null ? n : t.value)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            t.type === `checkbox` || t.type === `radio`
              ? t.checked != null
              : t.value != null,
        }));
    }
    function Se(e, t) {
      ((t = t.checked), t != null && S(e, `checked`, t, !1));
    }
    function Ce(e, t) {
      Se(e, t);
      var n = me(t.value),
        r = t.type;
      if (n != null)
        r === `number`
          ? ((n === 0 && e.value === ``) || e.value != n) && (e.value = `` + n)
          : e.value !== `` + n && (e.value = `` + n);
      else if (r === `submit` || r === `reset`) {
        e.removeAttribute(`value`);
        return;
      }
      (t.hasOwnProperty(`value`)
        ? Te(e, t.type, n)
        : t.hasOwnProperty(`defaultValue`) && Te(e, t.type, me(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked));
    }
    function we(e, t, n) {
      if (t.hasOwnProperty(`value`) || t.hasOwnProperty(`defaultValue`)) {
        var r = t.type;
        if (!(
          (r !== `submit` && r !== `reset`) ||
          (t.value !== void 0 && t.value !== null)
        ))
          return;
        ((t = `` + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((n = e.name),
        n !== `` && (e.name = ``),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== `` && (e.name = n));
    }
    function Te(e, t, n) {
      (t !== `number` || ye(e.ownerDocument) !== e) &&
        (n == null
          ? (e.defaultValue = `` + e._wrapperState.initialValue)
          : e.defaultValue !== `` + n && (e.defaultValue = `` + n));
    }
    var Ee = Array.isArray;
    function De(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + me(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Oe(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
      return j({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: `` + e._wrapperState.initialValue,
      });
    }
    function ke(e, t) {
      var n = t.value;
      if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(r(92));
          if (Ee(n)) {
            if (1 < n.length) throw Error(r(93));
            n = n[0];
          }
          t = n;
        }
        ((t ??= ``), (n = t));
      }
      e._wrapperState = { initialValue: me(n) };
    }
    function Ae(e, t) {
      var n = me(t.value),
        r = me(t.defaultValue);
      (n != null &&
        ((n = `` + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = `` + r));
    }
    function je(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== `` &&
        t !== null &&
        (e.value = t);
    }
    function Me(e) {
      switch (e) {
        case `svg`:
          return `http://www.w3.org/2000/svg`;
        case `math`:
          return `http://www.w3.org/1998/Math/MathML`;
        default:
          return `http://www.w3.org/1999/xhtml`;
      }
    }
    function Ne(e, t) {
      return e == null || e === `http://www.w3.org/1999/xhtml`
        ? Me(t)
        : e === `http://www.w3.org/2000/svg` && t === `foreignObject`
          ? `http://www.w3.org/1999/xhtml`
          : e;
    }
    var Pe,
      Fe = (function (e) {
        return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, i);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== `http://www.w3.org/2000/svg` || `innerHTML` in e)
          e.innerHTML = t;
        else {
          for (
            Pe ||= document.createElement(`div`),
              Pe.innerHTML = `<svg>` + t.valueOf().toString() + `</svg>`,
              t = Pe.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild;) e.appendChild(t.firstChild);
        }
      });
    function Ie(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Le = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Re = [`Webkit`, `ms`, `Moz`, `O`];
    Object.keys(Le).forEach(function (e) {
      Re.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Le[t] = Le[e]));
      });
    });
    function ze(e, t, n) {
      return t == null || typeof t == `boolean` || t === ``
        ? ``
        : n ||
            typeof t != `number` ||
            t === 0 ||
            (Le.hasOwnProperty(e) && Le[e])
          ? (`` + t).trim()
          : t + `px`;
    }
    function Be(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = n.indexOf(`--`) === 0,
            i = ze(n, t[n], r);
          (n === `float` && (n = `cssFloat`),
            r ? e.setProperty(n, i) : (e[n] = i));
        }
    }
    var Ve = j(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function He(e, t) {
      if (t) {
        if (Ve[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(r(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(r(60));
          if (
            typeof t.dangerouslySetInnerHTML != `object` ||
            !(`__html` in t.dangerouslySetInnerHTML)
          )
            throw Error(r(61));
        }
        if (t.style != null && typeof t.style != `object`) throw Error(r(62));
      }
    }
    function Ue(e, t) {
      if (e.indexOf(`-`) === -1) return typeof t.is == `string`;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var We = null;
    function Ge(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Ke = null,
      qe = null,
      Je = null;
    function Ye(e) {
      if ((e = Wi(e))) {
        if (typeof Ke != `function`) throw Error(r(280));
        var t = e.stateNode;
        t && ((t = Ki(t)), Ke(e.stateNode, e.type, t));
      }
    }
    function Xe(e) {
      qe ? (Je ? Je.push(e) : (Je = [e])) : (qe = e);
    }
    function Ze() {
      if (qe) {
        var e = qe,
          t = Je;
        if (((Je = qe = null), Ye(e), t))
          for (e = 0; e < t.length; e++) Ye(t[e]);
      }
    }
    function Qe(e, t) {
      return e(t);
    }
    function $e() {}
    var et = !1;
    function tt(e, t, n) {
      if (et) return e(t, n);
      et = !0;
      try {
        return Qe(e, t, n);
      } finally {
        ((et = !1), (qe !== null || Je !== null) && ($e(), Ze()));
      }
    }
    function nt(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var i = Ki(n);
      if (i === null) return null;
      n = i[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((i = !i.disabled) ||
            ((e = e.type),
            (i =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !i));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(r(231, t, typeof n));
      return n;
    }
    var rt = !1;
    if (c)
      try {
        var it = {};
        (Object.defineProperty(it, "passive", {
          get: function () {
            rt = !0;
          },
        }),
          window.addEventListener(`test`, it, it),
          window.removeEventListener(`test`, it, it));
      } catch {
        rt = !1;
      }
    function at(e, t, n, r, i, a, o, s, c) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, l);
      } catch (e) {
        this.onError(e);
      }
    }
    var ot = !1,
      st = null,
      ct = !1,
      lt = null,
      ut = {
        onError: function (e) {
          ((ot = !0), (st = e));
        },
      };
    function dt(e, t, n, r, i, a, o, s, c) {
      ((ot = !1), (st = null), at.apply(ut, arguments));
    }
    function ft(e, t, n, i, a, o, s, c, l) {
      if ((dt.apply(this, arguments), ot)) {
        if (ot) {
          var u = st;
          ((ot = !1), (st = null));
        } else throw Error(r(198));
        ct || ((ct = !0), (lt = u));
      }
    }
    function pt(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function mt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function ht(e) {
      if (pt(e) !== e) throw Error(r(188));
    }
    function gt(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = pt(e)), t === null)) throw Error(r(188));
        return t === e ? e : null;
      }
      for (var n = e, i = t; ;) {
        var a = n.return;
        if (a === null) break;
        var o = a.alternate;
        if (o === null) {
          if (((i = a.return), i !== null)) {
            n = i;
            continue;
          }
          break;
        }
        if (a.child === o.child) {
          for (o = a.child; o;) {
            if (o === n) return (ht(a), e);
            if (o === i) return (ht(a), t);
            o = o.sibling;
          }
          throw Error(r(188));
        }
        if (n.return !== i.return) ((n = a), (i = o));
        else {
          for (var s = !1, c = a.child; c;) {
            if (c === n) {
              ((s = !0), (n = a), (i = o));
              break;
            }
            if (c === i) {
              ((s = !0), (i = a), (n = o));
              break;
            }
            c = c.sibling;
          }
          if (!s) {
            for (c = o.child; c;) {
              if (c === n) {
                ((s = !0), (n = o), (i = a));
                break;
              }
              if (c === i) {
                ((s = !0), (i = o), (n = a));
                break;
              }
              c = c.sibling;
            }
            if (!s) throw Error(r(189));
          }
        }
        if (n.alternate !== i) throw Error(r(190));
      }
      if (n.tag !== 3) throw Error(r(188));
      return n.stateNode.current === n ? e : t;
    }
    function _t(e) {
      return ((e = gt(e)), e === null ? null : vt(e));
    }
    function vt(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null;) {
        var t = vt(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var yt = n.unstable_scheduleCallback,
      bt = n.unstable_cancelCallback,
      xt = n.unstable_shouldYield,
      St = n.unstable_requestPaint,
      Ct = n.unstable_now,
      wt = n.unstable_getCurrentPriorityLevel,
      Tt = n.unstable_ImmediatePriority,
      Et = n.unstable_UserBlockingPriority,
      Dt = n.unstable_NormalPriority,
      Ot = n.unstable_LowPriority,
      kt = n.unstable_IdlePriority,
      At = null,
      jt = null;
    function Mt(e) {
      if (jt && typeof jt.onCommitFiberRoot == `function`)
        try {
          jt.onCommitFiberRoot(At, e, void 0, (e.current.flags & 128) == 128);
        } catch {}
    }
    var Nt = Math.clz32 ? Math.clz32 : It,
      Pt = Math.log,
      Ft = Math.LN2;
    function It(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Pt(e) / Ft) | 0)) | 0);
    }
    var Lt = 64,
      Rt = 4194304;
    function zt(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Bt(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var r = 0,
        i = e.suspendedLanes,
        a = e.pingedLanes,
        o = n & 268435455;
      if (o !== 0) {
        var s = o & ~i;
        s === 0 ? ((a &= o), a !== 0 && (r = zt(a))) : (r = zt(s));
      } else ((o = n & ~i), o === 0 ? a !== 0 && (r = zt(a)) : (r = zt(o)));
      if (r === 0) return 0;
      if (
        t !== 0 &&
        t !== r &&
        (t & i) === 0 &&
        ((i = r & -r), (a = t & -t), i >= a || (i === 16 && a & 4194240))
      )
        return t;
      if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t;)
          ((n = 31 - Nt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
      return r;
    }
    function Vt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Ht(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes;
        0 < a;
      ) {
        var o = 31 - Nt(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Vt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
    }
    function Ut(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e === 0 ? (e & 1073741824 ? 1073741824 : 0) : e
      );
    }
    function Wt() {
      var e = Lt;
      return ((Lt <<= 1), !(Lt & 4194240) && (Lt = 64), e);
    }
    function Gt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Kt(e, t, n) {
      ((e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Nt(t)),
        (e[t] = n));
    }
    function qt(e, t) {
      var n = e.pendingLanes & ~t;
      ((e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements));
      var r = e.eventTimes;
      for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Nt(n),
          a = 1 << i;
        ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a));
      }
    }
    function Jt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Nt(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    var N = 0;
    function Yt(e) {
      return (
        (e &= -e),
        1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var Xt,
      Zt,
      Qt,
      $t,
      en,
      tn = !1,
      nn = [],
      rn = null,
      an = null,
      P = null,
      on = new Map(),
      sn = new Map(),
      cn = [],
      ln =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(
          ` `,
        );
    function un(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          rn = null;
          break;
        case `dragenter`:
        case `dragleave`:
          an = null;
          break;
        case `mouseover`:
        case `mouseout`:
          P = null;
          break;
        case `pointerover`:
        case `pointerout`:
          on.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          sn.delete(t.pointerId);
      }
    }
    function dn(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Wi(t)), t !== null && Zt(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function fn(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((rn = dn(rn, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((an = dn(an, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((P = dn(P, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (on.set(a, dn(on.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            sn.set(a, dn(sn.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function pn(e) {
      var t = Ui(e.target);
      if (t !== null) {
        var n = pt(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = mt(n)), t !== null)) {
              ((e.blockedOn = t),
                en(e.priority, function () {
                  Qt(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function mn(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = Tn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((We = r), n.target.dispatchEvent(r), (We = null));
        } else return ((t = Wi(n)), t !== null && Zt(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function hn(e, t, n) {
      mn(e) && n.delete(t);
    }
    function gn() {
      ((tn = !1),
        rn !== null && mn(rn) && (rn = null),
        an !== null && mn(an) && (an = null),
        P !== null && mn(P) && (P = null),
        on.forEach(hn),
        sn.forEach(hn));
    }
    function _n(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        tn ||
          ((tn = !0),
          n.unstable_scheduleCallback(n.unstable_NormalPriority, gn)));
    }
    function vn(e) {
      function t(t) {
        return _n(t, e);
      }
      if (0 < nn.length) {
        _n(nn[0], e);
        for (var n = 1; n < nn.length; n++) {
          var r = nn[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        rn !== null && _n(rn, e),
          an !== null && _n(an, e),
          P !== null && _n(P, e),
          on.forEach(t),
          sn.forEach(t),
          n = 0;
        n < cn.length;
        n++
      )
        ((r = cn[n]), r.blockedOn === e && (r.blockedOn = null));
      for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null);)
        (pn(n), n.blockedOn === null && cn.shift());
    }
    var yn = C.ReactCurrentBatchConfig,
      bn = !0;
    function xn(e, t, n, r) {
      var i = N,
        a = yn.transition;
      yn.transition = null;
      try {
        ((N = 1), Cn(e, t, n, r));
      } finally {
        ((N = i), (yn.transition = a));
      }
    }
    function Sn(e, t, n, r) {
      var i = N,
        a = yn.transition;
      yn.transition = null;
      try {
        ((N = 4), Cn(e, t, n, r));
      } finally {
        ((N = i), (yn.transition = a));
      }
    }
    function Cn(e, t, n, r) {
      if (bn) {
        var i = Tn(e, t, n, r);
        if (i === null) (hi(e, t, r, wn, n), un(e, r));
        else if (fn(i, e, t, n, r)) r.stopPropagation();
        else if ((un(e, r), t & 4 && -1 < ln.indexOf(e))) {
          for (; i !== null;) {
            var a = Wi(i);
            if (
              (a !== null && Xt(a),
              (a = Tn(e, t, n, r)),
              a === null && hi(e, t, r, wn, n),
              a === i)
            )
              break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else hi(e, t, r, null, n);
      }
    }
    var wn = null;
    function Tn(e, t, n, r) {
      if (((wn = null), (e = Ge(r)), (e = Ui(e)), e !== null))
        if (((t = pt(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
          if (((e = mt(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return ((wn = e), null);
    }
    function En(e) {
      switch (e) {
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 1;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `toggle`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 4;
        case `message`:
          switch (wt()) {
            case Tt:
              return 1;
            case Et:
              return 4;
            case Dt:
            case Ot:
              return 16;
            case kt:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Dn = null,
      On = null,
      kn = null;
    function An() {
      if (kn) return kn;
      var e,
        t = On,
        n = t.length,
        r,
        i = `value` in Dn ? Dn.value : Dn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (kn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function jn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Mn() {
      return !0;
    }
    function Nn() {
      return !1;
    }
    function Pn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Mn
            : Nn),
          (this.isPropagationStopped = Nn),
          this
        );
      }
      return (
        j(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Mn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Mn));
          },
          persist: function () {},
          isPersistent: Mn,
        }),
        t
      );
    }
    var Fn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      In = Pn(Fn),
      Ln = j({}, Fn, { view: 0, detail: 0 }),
      Rn = Pn(Ln),
      zn,
      Bn,
      Vn,
      Hn = j({}, Ln, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: $n,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Vn &&
                (Vn && e.type === `mousemove`
                  ? ((zn = e.screenX - Vn.screenX),
                    (Bn = e.screenY - Vn.screenY))
                  : (Bn = zn = 0),
                (Vn = e)),
              zn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Bn;
        },
      }),
      Un = Pn(Hn),
      Wn = Pn(j({}, Hn, { dataTransfer: 0 })),
      Gn = Pn(j({}, Ln, { relatedTarget: 0 })),
      Kn = Pn(
        j({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      qn = Pn(
        j({}, Fn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Jn = Pn(j({}, Fn, { data: 0 })),
      Yn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Xn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Zn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Qn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Zn[e])
          ? !!t[e]
          : !1;
    }
    function $n() {
      return Qn;
    }
    var er = Pn(
        j({}, Ln, {
          key: function (e) {
            if (e.key) {
              var t = Yn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = jn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Xn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: $n,
          charCode: function (e) {
            return e.type === `keypress` ? jn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? jn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      tr = Pn(
        j({}, Hn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      nr = Pn(
        j({}, Ln, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: $n,
        }),
      ),
      rr = Pn(j({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      ir = Pn(
        j({}, Hn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      ar = [9, 13, 27, 32],
      or = c && `CompositionEvent` in window,
      sr = null;
    c && `documentMode` in document && (sr = document.documentMode);
    var cr = c && `TextEvent` in window && !sr,
      lr = c && (!or || (sr && 8 < sr && 11 >= sr)),
      ur = ` `,
      dr = !1;
    function fr(e, t) {
      switch (e) {
        case `keyup`:
          return ar.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function pr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var mr = !1;
    function hr(e, t) {
      switch (e) {
        case `compositionend`:
          return pr(t);
        case `keypress`:
          return t.which === 32 ? ((dr = !0), ur) : null;
        case `textInput`:
          return ((e = t.data), e === ur && dr ? null : e);
        default:
          return null;
      }
    }
    function gr(e, t) {
      if (mr)
        return e === `compositionend` || (!or && fr(e, t))
          ? ((e = An()), (kn = On = Dn = null), (mr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return lr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var _r = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function vr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!_r[e.type] : t === `textarea`;
    }
    function yr(e, t, n, r) {
      (Xe(r),
        (t = _i(t, `onChange`)),
        0 < t.length &&
          ((n = new In(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var br = null,
      xr = null;
    function Sr(e) {
      ui(e, 0);
    }
    function Cr(e) {
      if (ve(Gi(e))) return e;
    }
    function wr(e, t) {
      if (e === `change`) return t;
    }
    var Tr = !1;
    if (c) {
      var F;
      if (c) {
        var Er = `oninput` in document;
        if (!Er) {
          var Dr = document.createElement(`div`);
          (Dr.setAttribute(`oninput`, `return;`),
            (Er = typeof Dr.oninput == `function`));
        }
        F = Er;
      } else F = !1;
      Tr = F && (!document.documentMode || 9 < document.documentMode);
    }
    function Or() {
      br && (br.detachEvent(`onpropertychange`, kr), (xr = br = null));
    }
    function kr(e) {
      if (e.propertyName === `value` && Cr(xr)) {
        var t = [];
        (yr(t, xr, e, Ge(e)), tt(Sr, t));
      }
    }
    function Ar(e, t, n) {
      e === `focusin`
        ? (Or(), (br = t), (xr = n), br.attachEvent(`onpropertychange`, kr))
        : e === `focusout` && Or();
    }
    function jr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return Cr(xr);
    }
    function Mr(e, t) {
      if (e === `click`) return Cr(t);
    }
    function Nr(e, t) {
      if (e === `input` || e === `change`) return Cr(t);
    }
    function Pr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Fr = typeof Object.is == `function` ? Object.is : Pr;
    function I(e, t) {
      if (Fr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!l.call(t, i) || !Fr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Ir(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Lr(e, t) {
      var n = Ir(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Ir(n);
      }
    }
    function Rr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Rr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function zr() {
      for (var e = window, t = ye(); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ye(e.document);
      }
      return t;
    }
    function Br(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    function Vr(e) {
      var t = zr(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Rr(n.ownerDocument.documentElement, n)
      ) {
        if (r !== null && Br(n)) {
          if (
            ((t = r.start),
            (e = r.end),
            e === void 0 && (e = t),
            `selectionStart` in n)
          )
            ((n.selectionStart = t),
              (n.selectionEnd = Math.min(e, n.value.length)));
          else if (
            ((e =
              ((t = n.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var i = n.textContent.length,
              a = Math.min(r.start, i);
            ((r = r.end === void 0 ? a : Math.min(r.end, i)),
              !e.extend && a > r && ((i = r), (r = a), (a = i)),
              (i = Lr(n, a)));
            var o = Lr(n, r);
            i &&
              o &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== i.node ||
                e.anchorOffset !== i.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()),
              t.setStart(i.node, i.offset),
              e.removeAllRanges(),
              a > r
                ? (e.addRange(t), e.extend(o.node, o.offset))
                : (t.setEnd(o.node, o.offset), e.addRange(t)));
          }
        }
        for (t = [], e = n; (e = e.parentNode);)
          e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof n.focus == `function` && n.focus(), n = 0;
          n < t.length;
          n++
        )
          ((e = t[n]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top));
      }
    }
    var Hr = c && `documentMode` in document && 11 >= document.documentMode,
      L = null,
      Ur = null,
      Wr = null,
      Gr = !1;
    function Kr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Gr ||
        L == null ||
        L !== ye(r) ||
        ((r = L),
        `selectionStart` in r && Br(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Wr && I(Wr, r)) ||
          ((Wr = r),
          (r = _i(Ur, `onSelect`)),
          0 < r.length &&
            ((t = new In(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = L))));
    }
    function qr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Jr = {
        animationend: qr(`Animation`, `AnimationEnd`),
        animationiteration: qr(`Animation`, `AnimationIteration`),
        animationstart: qr(`Animation`, `AnimationStart`),
        transitionend: qr(`Transition`, `TransitionEnd`),
      },
      Yr = {},
      Xr = {};
    c &&
      ((Xr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Jr.animationend.animation,
        delete Jr.animationiteration.animation,
        delete Jr.animationstart.animation),
      `TransitionEvent` in window || delete Jr.transitionend.transition);
    function Zr(e) {
      if (Yr[e]) return Yr[e];
      if (!Jr[e]) return e;
      var t = Jr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Xr) return (Yr[e] = t[n]);
      return e;
    }
    var Qr = Zr(`animationend`),
      $r = Zr(`animationiteration`),
      ei = Zr(`animationstart`),
      ti = Zr(`transitionend`),
      ni = new Map(),
      ri =
        `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    function ii(e, t) {
      (ni.set(e, t), o(t, [e]));
    }
    for (var ai = 0; ai < ri.length; ai++) {
      var oi = ri[ai];
      ii(oi.toLowerCase(), `on` + (oi[0].toUpperCase() + oi.slice(1)));
    }
    (ii(Qr, `onAnimationEnd`),
      ii($r, `onAnimationIteration`),
      ii(ei, `onAnimationStart`),
      ii(`dblclick`, `onDoubleClick`),
      ii(`focusin`, `onFocus`),
      ii(`focusout`, `onBlur`),
      ii(ti, `onTransitionEnd`),
      s(`onMouseEnter`, [`mouseout`, `mouseover`]),
      s(`onMouseLeave`, [`mouseout`, `mouseover`]),
      s(`onPointerEnter`, [`pointerout`, `pointerover`]),
      s(`onPointerLeave`, [`pointerout`, `pointerover`]),
      o(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      o(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      o(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      o(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      o(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      o(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var si =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      ci = new Set(
        `cancel close invalid load scroll toggle`.split(` `).concat(si),
      );
    function li(e, t, n) {
      var r = e.type || `unknown-event`;
      ((e.currentTarget = n), ft(r, t, void 0, e), (e.currentTarget = null));
    }
    function ui(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              (li(i, s, l), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (li(i, s, l), (a = c));
            }
        }
      }
      if (ct) throw ((e = lt), (ct = !1), (lt = null), e);
    }
    function R(e, t) {
      var n = t[Bi];
      n === void 0 && (n = t[Bi] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (mi(t, e, 2, !1), n.add(r));
    }
    function di(e, t, n) {
      var r = 0;
      (t && (r |= 4), mi(n, e, r, t));
    }
    var fi = `_reactListening` + Math.random().toString(36).slice(2);
    function pi(e) {
      if (!e[fi]) {
        ((e[fi] = !0),
          i.forEach(function (t) {
            t !== `selectionchange` &&
              (ci.has(t) || di(t, !1, e), di(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[fi] || ((t[fi] = !0), di(`selectionchange`, !1, t));
      }
    }
    function mi(e, t, n, r) {
      switch (En(t)) {
        case 1:
          var i = xn;
          break;
        case 4:
          i = Sn;
          break;
        default:
          i = Cn;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !rt ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function hi(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
            if (o === 4)
              for (o = r.return; o !== null;) {
                var c = o.tag;
                if (
                  (c === 3 || c === 4) &&
                  ((c = o.stateNode.containerInfo),
                  c === i || (c.nodeType === 8 && c.parentNode === i))
                )
                  return;
                o = o.return;
              }
            for (; s !== null;) {
              if (((o = Ui(s)), o === null)) return;
              if (((c = o.tag), c === 5 || c === 6)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      tt(function () {
        var r = a,
          i = Ge(n),
          o = [];
        a: {
          var s = ni.get(e);
          if (s !== void 0) {
            var c = In,
              l = e;
            switch (e) {
              case `keypress`:
                if (jn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                c = er;
                break;
              case `focusin`:
                ((l = `focus`), (c = Gn));
                break;
              case `focusout`:
                ((l = `blur`), (c = Gn));
                break;
              case `beforeblur`:
              case `afterblur`:
                c = Gn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c = Un;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c = Wn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c = nr;
                break;
              case Qr:
              case $r:
              case ei:
                c = Kn;
                break;
              case ti:
                c = rr;
                break;
              case `scroll`:
                c = Rn;
                break;
              case `wheel`:
                c = ir;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c = qn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c = tr;
            }
            var u = !!(t & 4),
              d = !u && e === `scroll`,
              f = u ? (s === null ? null : s + `Capture`) : s;
            u = [];
            for (var p = r, m; p !== null;) {
              m = p;
              var h = m.stateNode;
              if (
                (m.tag === 5 &&
                  h !== null &&
                  ((m = h),
                  f !== null &&
                    ((h = nt(p, f)), h != null && u.push(gi(p, h, m)))),
                d)
              )
                break;
              p = p.return;
            }
            0 < u.length &&
              ((s = new c(s, l, null, n, i)),
              o.push({ event: s, listeners: u }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              s &&
                n !== We &&
                (l = n.relatedTarget || n.fromElement) &&
                (Ui(l) || l[zi]))
            )
              break a;
            if (
              (c || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? Ui(l) : null),
                  l !== null &&
                    ((d = pt(l)), l !== d || (l.tag !== 5 && l.tag !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l)
            ) {
              if (
                ((u = Un),
                (h = `onMouseLeave`),
                (f = `onMouseEnter`),
                (p = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((u = tr),
                  (h = `onPointerLeave`),
                  (f = `onPointerEnter`),
                  (p = `pointer`)),
                (d = c == null ? s : Gi(c)),
                (m = l == null ? s : Gi(l)),
                (s = new u(h, p + `leave`, c, n, i)),
                (s.target = d),
                (s.relatedTarget = m),
                (h = null),
                Ui(i) === r &&
                  ((u = new u(f, p + `enter`, l, n, i)),
                  (u.target = m),
                  (u.relatedTarget = d),
                  (h = u)),
                (d = h),
                c && l)
              )
                b: {
                  for (u = c, f = l, p = 0, m = u; m; m = vi(m)) p++;
                  for (m = 0, h = f; h; h = vi(h)) m++;
                  for (; 0 < p - m;) ((u = vi(u)), p--);
                  for (; 0 < m - p;) ((f = vi(f)), m--);
                  for (; p--;) {
                    if (u === f || (f !== null && u === f.alternate)) break b;
                    ((u = vi(u)), (f = vi(f)));
                  }
                  u = null;
                }
              else u = null;
              (c !== null && yi(o, s, c, u, !1),
                l !== null && d !== null && yi(o, d, l, u, !0));
            }
          }
          a: {
            if (
              ((s = r ? Gi(r) : window),
              (c = s.nodeName && s.nodeName.toLowerCase()),
              c === `select` || (c === `input` && s.type === `file`))
            )
              var g = wr;
            else if (vr(s))
              if (Tr) g = Nr;
              else {
                g = jr;
                var _ = Ar;
              }
            else
              (c = s.nodeName) &&
                c.toLowerCase() === `input` &&
                (s.type === `checkbox` || s.type === `radio`) &&
                (g = Mr);
            if ((g &&= g(e, r))) {
              yr(o, g, n, i);
              break a;
            }
            (_ && _(e, s, r),
              e === `focusout` &&
                (_ = s._wrapperState) &&
                _.controlled &&
                s.type === `number` &&
                Te(s, `number`, s.value));
          }
          switch (((_ = r ? Gi(r) : window), e)) {
            case `focusin`:
              (vr(_) || _.contentEditable === `true`) &&
                ((L = _), (Ur = r), (Wr = null));
              break;
            case `focusout`:
              Wr = Ur = L = null;
              break;
            case `mousedown`:
              Gr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Gr = !1), Kr(o, n, i));
              break;
            case `selectionchange`:
              if (Hr) break;
            case `keydown`:
            case `keyup`:
              Kr(o, n, i);
          }
          var v;
          if (or)
            b: {
              switch (e) {
                case `compositionstart`:
                  var y = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  y = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  y = `onCompositionUpdate`;
                  break b;
              }
              y = void 0;
            }
          else
            mr
              ? fr(e, n) && (y = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (y = `onCompositionStart`);
          (y &&
            (lr &&
              n.locale !== `ko` &&
              (mr || y !== `onCompositionStart`
                ? y === `onCompositionEnd` && mr && (v = An())
                : ((Dn = i),
                  (On = `value` in Dn ? Dn.value : Dn.textContent),
                  (mr = !0))),
            (_ = _i(r, y)),
            0 < _.length &&
              ((y = new Jn(y, e, null, n, i)),
              o.push({ event: y, listeners: _ }),
              v ? (y.data = v) : ((v = pr(n)), v !== null && (y.data = v)))),
            (v = cr ? hr(e, n) : gr(e, n)) &&
              ((r = _i(r, `onBeforeInput`)),
              0 < r.length &&
                ((i = new Jn(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: i, listeners: r }),
                (i.data = v))));
        }
        ui(o, t);
      });
    }
    function gi(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function _i(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        (i.tag === 5 &&
          a !== null &&
          ((i = a),
          (a = nt(e, n)),
          a != null && r.unshift(gi(e, a, i)),
          (a = nt(e, t)),
          a != null && r.push(gi(e, a, i))),
          (e = e.return));
      }
      return r;
    }
    function vi(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function yi(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (c !== null && c === r) break;
        (s.tag === 5 &&
          l !== null &&
          ((s = l),
          i
            ? ((c = nt(n, a)), c != null && o.unshift(gi(n, c, s)))
            : i || ((c = nt(n, a)), c != null && o.push(gi(n, c, s)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var bi = /\r\n?/g,
      xi = /\u0000|\uFFFD/g;
    function Si(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          bi,
          `
`,
        )
        .replace(xi, ``);
    }
    function Ci(e, t, n) {
      if (((t = Si(t)), Si(e) !== t && n)) throw Error(r(425));
    }
    function wi() {}
    var Ti = null,
      Ei = null;
    function Di(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Oi = typeof setTimeout == `function` ? setTimeout : void 0,
      ki = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Ai = typeof Promise == `function` ? Promise : void 0,
      ji =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Ai === void 0
            ? Oi
            : function (e) {
                return Ai.resolve(null).then(e).catch(Mi);
              };
    function Mi(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Ni(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$`)) {
            if (r === 0) {
              (e.removeChild(i), vn(t));
              return;
            }
            r--;
          } else (n !== `$` && n !== `$?` && n !== `$!`) || r++;
        n = i;
      } while (n);
      vn(t);
    }
    function Pi(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === `$` || t === `$!` || t === `$?`)) break;
          if (t === `/$`) return null;
        }
      }
      return e;
    }
    function Fi(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?`) {
            if (t === 0) return e;
            t--;
          } else n === `/$` && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Ii = Math.random().toString(36).slice(2),
      Li = `__reactFiber$` + Ii,
      Ri = `__reactProps$` + Ii,
      zi = `__reactContainer$` + Ii,
      Bi = `__reactEvents$` + Ii,
      Vi = `__reactListeners$` + Ii,
      Hi = `__reactHandles$` + Ii;
    function Ui(e) {
      var t = e[Li];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[zi] || n[Li])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = Fi(e); e !== null;) {
              if ((n = e[Li])) return n;
              e = Fi(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Wi(e) {
      return (
        (e = e[Li] || e[zi]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function Gi(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(r(33));
    }
    function Ki(e) {
      return e[Ri] || null;
    }
    var qi = [],
      Ji = -1;
    function Yi(e) {
      return { current: e };
    }
    function z(e) {
      0 > Ji || ((e.current = qi[Ji]), (qi[Ji] = null), Ji--);
    }
    function B(e, t) {
      (Ji++, (qi[Ji] = e.current), (e.current = t));
    }
    var Xi = {},
      Zi = Yi(Xi),
      Qi = Yi(!1),
      $i = Xi;
    function ea(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Xi;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i = {},
        a;
      for (a in n) i[a] = t[a];
      return (
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function ta(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function na() {
      (z(Qi), z(Zi));
    }
    function ra(e, t, n) {
      if (Zi.current !== Xi) throw Error(r(168));
      (B(Zi, t), B(Qi, n));
    }
    function ia(e, t, n) {
      var i = e.stateNode;
      if (((t = t.childContextTypes), typeof i.getChildContext != `function`))
        return n;
      for (var a in ((i = i.getChildContext()), i))
        if (!(a in t)) throw Error(r(108, pe(e) || `Unknown`, a));
      return j({}, n, i);
    }
    function aa(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Xi),
        ($i = Zi.current),
        B(Zi, e),
        B(Qi, Qi.current),
        !0
      );
    }
    function oa(e, t, n) {
      var i = e.stateNode;
      if (!i) throw Error(r(169));
      (n
        ? ((e = ia(e, t, $i)),
          (i.__reactInternalMemoizedMergedChildContext = e),
          z(Qi),
          z(Zi),
          B(Zi, e))
        : z(Qi),
        B(Qi, n));
    }
    var sa = null,
      ca = !1,
      la = !1;
    function ua(e) {
      sa === null ? (sa = [e]) : sa.push(e);
    }
    function da(e) {
      ((ca = !0), ua(e));
    }
    function fa() {
      if (!la && sa !== null) {
        la = !0;
        var e = 0,
          t = N;
        try {
          var n = sa;
          for (N = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
          }
          ((sa = null), (ca = !1));
        } catch (t) {
          throw (sa !== null && (sa = sa.slice(e + 1)), yt(Tt, fa), t);
        } finally {
          ((N = t), (la = !1));
        }
      }
      return null;
    }
    var pa = [],
      ma = 0,
      ha = null,
      ga = 0,
      _a = [],
      va = 0,
      ya = null,
      ba = 1,
      xa = ``;
    function Sa(e, t) {
      ((pa[ma++] = ga), (pa[ma++] = ha), (ha = e), (ga = t));
    }
    function Ca(e, t, n) {
      ((_a[va++] = ba), (_a[va++] = xa), (_a[va++] = ya), (ya = e));
      var r = ba;
      e = xa;
      var i = 32 - Nt(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Nt(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ba = (1 << (32 - Nt(t) + i)) | (n << i) | r),
          (xa = a + e));
      } else ((ba = (1 << a) | (n << i) | r), (xa = e));
    }
    function wa(e) {
      e.return !== null && (Sa(e, 1), Ca(e, 1, 0));
    }
    function Ta(e) {
      for (; e === ha;)
        ((ha = pa[--ma]), (pa[ma] = null), (ga = pa[--ma]), (pa[ma] = null));
      for (; e === ya;)
        ((ya = _a[--va]),
          (_a[va] = null),
          (xa = _a[--va]),
          (_a[va] = null),
          (ba = _a[--va]),
          (_a[va] = null));
    }
    var Ea = null,
      Da = null,
      V = !1,
      Oa = null;
    function ka(e, t) {
      var n = Xl(5, null, null, 0);
      ((n.elementType = `DELETED`),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
    }
    function Aa(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t =
              t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null &&
              ((e.stateNode = t), (Ea = e), (Da = Pi(t.firstChild)), !0)
          );
        case 6:
          return (
            (t = e.pendingProps === `` || t.nodeType !== 3 ? null : t),
            t !== null && ((e.stateNode = t), (Ea = e), (Da = null), !0)
          );
        case 13:
          return (
            (t = t.nodeType === 8 ? t : null),
            t !== null &&
              ((n = ya === null ? null : { id: ba, overflow: xa }),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Xl(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ea = e),
              (Da = null),
              !0)
          );
        default:
          return !1;
      }
    }
    function ja(e) {
      return !!(e.mode & 1) && !(e.flags & 128);
    }
    function Ma(e) {
      if (V) {
        var t = Da;
        if (t) {
          var n = t;
          if (!Aa(e, t)) {
            if (ja(e)) throw Error(r(418));
            t = Pi(n.nextSibling);
            var i = Ea;
            t && Aa(e, t)
              ? ka(i, n)
              : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ea = e));
          }
        } else {
          if (ja(e)) throw Error(r(418));
          ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ea = e));
        }
      }
    }
    function Na(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
      )
        e = e.return;
      Ea = e;
    }
    function Pa(e) {
      if (e !== Ea) return !1;
      if (!V) return (Na(e), (V = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== `head` && t !== `body` && !Di(e.type, e.memoizedProps))),
        (t &&= Da))
      ) {
        if (ja(e)) throw (Fa(), Error(r(418)));
        for (; t;) (ka(e, t), (t = Pi(t.nextSibling)));
      }
      if ((Na(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(r(317));
        a: {
          for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === `/$`) {
                if (t === 0) {
                  Da = Pi(e.nextSibling);
                  break a;
                }
                t--;
              } else (n !== `$` && n !== `$!` && n !== `$?`) || t++;
            }
            e = e.nextSibling;
          }
          Da = null;
        }
      } else Da = Ea ? Pi(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Fa() {
      for (var e = Da; e;) e = Pi(e.nextSibling);
    }
    function Ia() {
      ((Da = Ea = null), (V = !1));
    }
    function La(e) {
      Oa === null ? (Oa = [e]) : Oa.push(e);
    }
    var Ra = C.ReactCurrentBatchConfig;
    function za(e, t, n) {
      if (
        ((e = n.ref),
        e !== null && typeof e != `function` && typeof e != `object`)
      ) {
        if (n._owner) {
          if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(r(309));
            var i = n.stateNode;
          }
          if (!i) throw Error(r(147, e));
          var a = i,
            o = `` + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == `function` &&
            t.ref._stringRef === o
            ? t.ref
            : ((t = function (e) {
                var t = a.refs;
                e === null ? delete t[o] : (t[o] = e);
              }),
              (t._stringRef = o),
              t);
        }
        if (typeof e != `string`) throw Error(r(284));
        if (!n._owner) throw Error(r(290, e));
      }
      return e;
    }
    function Ba(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === `[object Object]`
              ? `object with keys {` + Object.keys(t).join(`, `) + `}`
              : e,
          ),
        )
      );
    }
    function Va(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Ha(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function i(e, t) {
        for (e = new Map(); t !== null;)
          (t.key === null ? e.set(t.index, t) : e.set(t.key, t),
            (t = t.sibling));
        return e;
      }
      function a(e, t) {
        return ((e = $l(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 2), n)
                : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 2), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = ru(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === ee
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === ae &&
                  Va(i) === t.type))
            ? ((r = a(t, n.props)), (r.ref = za(e, t, n)), (r.return = e), r)
            : ((r = eu(n.type, n.key, n.props, null, e.mode, r)),
              (r.ref = za(e, t, n)),
              (r.return = e),
              r);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = iu(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = tu(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number`)
          return ((t = ru(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case w:
              return (
                (n = eu(t.type, t.key, t.props, null, e.mode, n)),
                (n.ref = za(e, null, t)),
                (n.return = e),
                n
              );
            case T:
              return ((t = iu(t, e.mode, n)), (t.return = e), t);
            case ae:
              var r = t._init;
              return f(e, r(t._payload), n);
          }
          if (Ee(t) || se(t))
            return ((t = tu(t, e.mode, n, null)), (t.return = e), t);
          Ba(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case w:
              return n.key === i ? l(e, t, n, r) : null;
            case T:
              return n.key === i ? u(e, t, n, r) : null;
            case ae:
              return ((i = n._init), p(e, t, i(n._payload), r));
          }
          if (Ee(n) || se(n)) return i === null ? d(e, t, n, r, null) : null;
          Ba(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case w:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case T:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case ae:
              var a = r._init;
              return m(e, t, n, a(r._payload), i);
          }
          if (Ee(r) || se(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          Ba(t, r);
        }
        return null;
      }
      function h(r, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(r, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(r, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(r, d), V && Sa(r, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(r, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (V && Sa(r, h), l);
        }
        for (d = i(r, d); h < s.length; h++)
          ((g = m(d, r, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(r, e);
            }),
          V && Sa(r, h),
          l
        );
      }
      function g(a, s, c, l) {
        var u = se(c);
        if (typeof u != `function`) throw Error(r(150));
        if (((c = u.call(c)), c == null)) throw Error(r(151));
        for (
          var d = (u = null), h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), V && Sa(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (V && Sa(a, g), u);
        }
        for (h = i(a, h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          V && Sa(a, g),
          u
        );
      }
      function _(e, r, i, o) {
        if (
          (typeof i == `object` &&
            i &&
            i.type === ee &&
            i.key === null &&
            (i = i.props.children),
          typeof i == `object` && i)
        ) {
          switch (i.$$typeof) {
            case w:
              a: {
                for (var c = i.key, l = r; l !== null;) {
                  if (l.key === c) {
                    if (((c = i.type), c === ee)) {
                      if (l.tag === 7) {
                        (n(e, l.sibling),
                          (r = a(l, i.props.children)),
                          (r.return = e),
                          (e = r));
                        break a;
                      }
                    } else if (
                      l.elementType === c ||
                      (typeof c == `object` &&
                        c &&
                        c.$$typeof === ae &&
                        Va(c) === l.type)
                    ) {
                      (n(e, l.sibling),
                        (r = a(l, i.props)),
                        (r.ref = za(e, l, i)),
                        (r.return = e),
                        (e = r));
                      break a;
                    }
                    n(e, l);
                    break;
                  }
                  (t(e, l), (l = l.sibling));
                }
                i.type === ee
                  ? ((r = tu(i.props.children, e.mode, o, i.key)),
                    (r.return = e),
                    (e = r))
                  : ((o = eu(i.type, i.key, i.props, null, e.mode, o)),
                    (o.ref = za(e, r, i)),
                    (o.return = e),
                    (e = o));
              }
              return s(e);
            case T:
              a: {
                for (l = i.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      (n(e, r.sibling),
                        (r = a(r, i.children || [])),
                        (r.return = e),
                        (e = r));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  (t(e, r), (r = r.sibling));
                }
                ((r = iu(i, e.mode, o)), (r.return = e), (e = r));
              }
              return s(e);
            case ae:
              return ((l = i._init), _(e, r, l(i._payload), o));
          }
          if (Ee(i)) return h(e, r, i, o);
          if (se(i)) return g(e, r, i, o);
          Ba(e, i);
        }
        return (typeof i == `string` && i !== ``) || typeof i == `number`
          ? ((i = `` + i),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (r = a(r, i)), (r.return = e), (e = r))
              : (n(e, r), (r = ru(i, e.mode, o)), (r.return = e), (e = r)),
            s(e))
          : n(e, r);
      }
      return _;
    }
    var Ua = Ha(!0),
      Wa = Ha(!1),
      Ga = Yi(null),
      Ka = null,
      qa = null,
      Ja = null;
    function Ya() {
      Ja = qa = Ka = null;
    }
    function Xa(e) {
      var t = Ga.current;
      (z(Ga), (e._currentValue = t));
    }
    function Za(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Qa(e, t) {
      ((Ka = e),
        (Ja = qa = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & t) !== 0 && (Bs = !0), (e.firstContext = null)));
    }
    function $a(e) {
      var t = e._currentValue;
      if (Ja !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), qa === null)) {
          if (Ka === null) throw Error(r(308));
          ((qa = e), (Ka.dependencies = { lanes: 0, firstContext: e }));
        } else qa = qa.next = e;
      return t;
    }
    var eo = null;
    function to(e) {
      eo === null ? (eo = [e]) : eo.push(e);
    }
    function no(e, t, n, r) {
      var i = t.interleaved;
      return (
        i === null ? ((n.next = n), to(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        ro(e, r)
      );
    }
    function ro(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
        ((e.childLanes |= t),
          (n = e.alternate),
          n !== null && (n.childLanes |= t),
          (n = e),
          (e = e.return));
      return n.tag === 3 ? n.stateNode : null;
    }
    var io = !1;
    function ao(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function oo(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function so(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function co(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          ro(e, n)
        );
      }
      return (
        (i = r.interleaved),
        i === null ? ((t.next = t), to(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        ro(e, n)
      );
    }
    function lo(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194240))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Jt(e, n));
      }
    }
    function uo(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    function fo(e, t, n, r) {
      var i = e.updateQueue;
      io = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane,
            p = s.eventTime;
          if ((r & f) === f) {
            u !== null &&
              (u = u.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                });
            a: {
              var m = e,
                h = s;
              switch (((f = t), (p = n), h.tag)) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(p, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = h.payload),
                    (f = typeof m == `function` ? m.call(p, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = j({}, d, f);
                  break a;
                case 2:
                  io = !0;
              }
            }
            s.callback !== null &&
              s.lane !== 0 &&
              ((e.flags |= 64),
              (f = i.effects),
              f === null ? (i.effects = [s]) : f.push(s));
          } else
            ((p = {
              eventTime: p,
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((f = s),
              (s = f.next),
              (f.next = null),
              (i.lastBaseUpdate = f),
              (i.shared.pending = null));
          }
        } while (1);
        if (
          (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          (t = i.shared.interleaved),
          t !== null)
        ) {
          i = t;
          do ((o |= i.lane), (i = i.next));
          while (i !== t);
        } else a === null && (i.shared.lanes = 0);
        ((tl |= o), (e.lanes = o), (e.memoizedState = d));
      }
    }
    function po(e, t, n) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var i = e[t],
            a = i.callback;
          if (a !== null) {
            if (((i.callback = null), (i = n), typeof a != `function`))
              throw Error(r(191, a));
            a.call(i);
          }
        }
    }
    var mo = {},
      ho = Yi(mo),
      go = Yi(mo),
      _o = Yi(mo);
    function vo(e) {
      if (e === mo) throw Error(r(174));
      return e;
    }
    function yo(e, t) {
      switch ((B(_o, t), B(go, e), B(ho, mo), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Ne(null, ``);
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Ne(t, e)));
      }
      (z(ho), B(ho, t));
    }
    function bo() {
      (z(ho), z(go), z(_o));
    }
    function xo(e) {
      vo(_o.current);
      var t = vo(ho.current),
        n = Ne(t, e.type);
      t !== n && (B(go, e), B(ho, n));
    }
    function So(e) {
      go.current === e && (z(ho), z(go));
    }
    var H = Yi(0);
    function Co(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (
            n !== null &&
            ((n = n.dehydrated),
            n === null || n.data === `$?` || n.data === `$!`)
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var wo = [];
    function To() {
      for (var e = 0; e < wo.length; e++)
        wo[e]._workInProgressVersionPrimary = null;
      wo.length = 0;
    }
    var Eo = C.ReactCurrentDispatcher,
      Do = C.ReactCurrentBatchConfig,
      Oo = 0,
      U = null,
      ko = null,
      Ao = null,
      jo = !1,
      Mo = !1,
      No = 0,
      Po = 0;
    function Fo() {
      throw Error(r(321));
    }
    function Io(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Fr(e[n], t[n])) return !1;
      return !0;
    }
    function Lo(e, t, n, i, a, o) {
      if (
        ((Oo = o),
        (U = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Eo.current = e === null || e.memoizedState === null ? bs : xs),
        (e = n(i, a)),
        Mo)
      ) {
        o = 0;
        do {
          if (((Mo = !1), (No = 0), 25 <= o)) throw Error(r(301));
          ((o += 1),
            (Ao = ko = null),
            (t.updateQueue = null),
            (Eo.current = Ss),
            (e = n(i, a)));
        } while (Mo);
      }
      if (
        ((Eo.current = ys),
        (t = ko !== null && ko.next !== null),
        (Oo = 0),
        (Ao = ko = U = null),
        (jo = !1),
        t)
      )
        throw Error(r(300));
      return e;
    }
    function Ro() {
      var e = No !== 0;
      return ((No = 0), e);
    }
    function zo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        Ao === null ? (U.memoizedState = Ao = e) : (Ao = Ao.next = e),
        Ao
      );
    }
    function Bo() {
      if (ko === null) {
        var e = U.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = ko.next;
      var t = Ao === null ? U.memoizedState : Ao.next;
      if (t !== null) ((Ao = t), (ko = e));
      else {
        if (e === null) throw Error(r(310));
        ((ko = e),
          (e = {
            memoizedState: ko.memoizedState,
            baseState: ko.baseState,
            baseQueue: ko.baseQueue,
            queue: ko.queue,
            next: null,
          }),
          Ao === null ? (U.memoizedState = Ao = e) : (Ao = Ao.next = e));
      }
      return Ao;
    }
    function Vo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Ho(e) {
      var t = Bo(),
        n = t.queue;
      if (n === null) throw Error(r(311));
      n.lastRenderedReducer = e;
      var i = ko,
        a = i.baseQueue,
        o = n.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((i.baseQueue = a = o), (n.pending = null));
      }
      if (a !== null) {
        ((o = a.next), (i = i.baseState));
        var c = (s = null),
          l = null,
          u = o;
        do {
          var d = u.lane;
          if ((Oo & d) === d)
            (l !== null &&
              (l = l.next =
                {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
              (i = u.hasEagerState ? u.eagerState : e(i, u.action)));
          else {
            var f = {
              lane: d,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            };
            (l === null ? ((c = l = f), (s = i)) : (l = l.next = f),
              (U.lanes |= d),
              (tl |= d));
          }
          u = u.next;
        } while (u !== null && u !== o);
        (l === null ? (s = i) : (l.next = c),
          Fr(i, t.memoizedState) || (Bs = !0),
          (t.memoizedState = i),
          (t.baseState = s),
          (t.baseQueue = l),
          (n.lastRenderedState = i));
      }
      if (((e = n.interleaved), e !== null)) {
        a = e;
        do ((o = a.lane), (U.lanes |= o), (tl |= o), (a = a.next));
        while (a !== e);
      } else a === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function Uo(e) {
      var t = Bo(),
        n = t.queue;
      if (n === null) throw Error(r(311));
      n.lastRenderedReducer = e;
      var i = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Fr(o, t.memoizedState) || (Bs = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, i];
    }
    function Wo() {}
    function Go(e, t) {
      var n = U,
        i = Bo(),
        a = t(),
        o = !Fr(i.memoizedState, a);
      if (
        (o && ((i.memoizedState = a), (Bs = !0)),
        (i = i.queue),
        rs(Jo.bind(null, n, i, e), [e]),
        i.getSnapshot !== t || o || (Ao !== null && Ao.memoizedState.tag & 1))
      ) {
        if (
          ((n.flags |= 2048),
          Qo(9, qo.bind(null, n, i, a, t), void 0, null),
          Jc === null)
        )
          throw Error(r(349));
        Oo & 30 || Ko(n, t, a);
      }
      return a;
    }
    function Ko(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = U.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (U.updateQueue = t),
            (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function qo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Yo(t) && Xo(e));
    }
    function Jo(e, t, n) {
      return n(function () {
        Yo(t) && Xo(e);
      });
    }
    function Yo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Fr(e, n);
      } catch {
        return !0;
      }
    }
    function Xo(e) {
      var t = ro(e, 1);
      t !== null && bl(t, e, 1, -1);
    }
    function Zo(e) {
      var t = zo();
      return (
        typeof e == `function` && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vo,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = hs.bind(null, U, e)),
        [t.memoizedState, e]
      );
    }
    function Qo(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = U.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (U.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((n = t.lastEffect),
            n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
      );
    }
    function $o() {
      return Bo().memoizedState;
    }
    function es(e, t, n, r) {
      var i = zo();
      ((U.flags |= e),
        (i.memoizedState = Qo(1 | t, n, void 0, r === void 0 ? null : r)));
    }
    function ts(e, t, n, r) {
      var i = Bo();
      r = r === void 0 ? null : r;
      var a = void 0;
      if (ko !== null) {
        var o = ko.memoizedState;
        if (((a = o.destroy), r !== null && Io(r, o.deps))) {
          i.memoizedState = Qo(t, n, a, r);
          return;
        }
      }
      ((U.flags |= e), (i.memoizedState = Qo(1 | t, n, a, r)));
    }
    function ns(e, t) {
      return es(8390656, 8, e, t);
    }
    function rs(e, t) {
      return ts(2048, 8, e, t);
    }
    function is(e, t) {
      return ts(4, 2, e, t);
    }
    function as(e, t) {
      return ts(4, 4, e, t);
    }
    function os(e, t) {
      if (typeof t == `function`)
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function ss(e, t, n) {
      return (
        (n = n == null ? null : n.concat([e])),
        ts(4, 4, os.bind(null, t, e), n)
      );
    }
    function cs() {}
    function ls(e, t) {
      var n = Bo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Io(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function us(e, t) {
      var n = Bo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Io(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function ds(e, t, n) {
      return Oo & 21
        ? (Fr(n, t) ||
            ((n = Wt()), (U.lanes |= n), (tl |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Bs = !0)),
          (e.memoizedState = n));
    }
    function fs(e, t) {
      var n = N;
      ((N = n !== 0 && 4 > n ? n : 4), e(!0));
      var r = Do.transition;
      Do.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((N = n), (Do.transition = r));
      }
    }
    function ps() {
      return Bo().memoizedState;
    }
    function ms(e, t, n) {
      var r = yl(e);
      if (
        ((n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        gs(e))
      )
        _s(t, n);
      else if (((n = no(e, t, n, r)), n !== null)) {
        var i = vl();
        (bl(n, e, r, i), vs(n, t, r));
      }
    }
    function hs(e, t, n) {
      var r = yl(e),
        i = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (gs(e)) _s(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Fr(s, o))) {
              var c = t.interleaved;
              (c === null
                ? ((i.next = i), to(t))
                : ((i.next = c.next), (c.next = i)),
                (t.interleaved = i));
              return;
            }
          } catch {}
        ((n = no(e, t, i, r)),
          n !== null && ((i = vl()), bl(n, e, r, i), vs(n, t, r)));
      }
    }
    function gs(e) {
      var t = e.alternate;
      return e === U || (t !== null && t === U);
    }
    function _s(e, t) {
      Mo = jo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function vs(e, t, n) {
      if (n & 4194240) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Jt(e, n));
      }
    }
    var ys = {
        readContext: $a,
        useCallback: Fo,
        useContext: Fo,
        useEffect: Fo,
        useImperativeHandle: Fo,
        useInsertionEffect: Fo,
        useLayoutEffect: Fo,
        useMemo: Fo,
        useReducer: Fo,
        useRef: Fo,
        useState: Fo,
        useDebugValue: Fo,
        useDeferredValue: Fo,
        useTransition: Fo,
        useMutableSource: Fo,
        useSyncExternalStore: Fo,
        useId: Fo,
        unstable_isNewReconciler: !1,
      },
      bs = {
        readContext: $a,
        useCallback: function (e, t) {
          return ((zo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: $a,
        useEffect: ns,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = n == null ? null : n.concat([e])),
            es(4194308, 4, os.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return es(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return es(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = zo();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = zo();
          return (
            (t = n === void 0 ? t : n(t)),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = ms.bind(null, U, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = zo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: Zo,
        useDebugValue: cs,
        useDeferredValue: function (e) {
          return (zo().memoizedState = e);
        },
        useTransition: function () {
          var e = Zo(!1),
            t = e[0];
          return ((e = fs.bind(null, e[1])), (zo().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var i = U,
            a = zo();
          if (V) {
            if (n === void 0) throw Error(r(407));
            n = n();
          } else {
            if (((n = t()), Jc === null)) throw Error(r(349));
            Oo & 30 || Ko(i, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            ns(Jo.bind(null, i, o, e), [e]),
            (i.flags |= 2048),
            Qo(9, qo.bind(null, i, o, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = zo(),
            t = Jc.identifierPrefix;
          if (V) {
            var n = xa,
              r = ba;
            ((n = (r & ~(1 << (32 - Nt(r) - 1))).toString(32) + n),
              (t = `:` + t + `R` + n),
              (n = No++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `:`));
          } else ((n = Po++), (t = `:` + t + `r` + n.toString(32) + `:`));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      xs = {
        readContext: $a,
        useCallback: ls,
        useContext: $a,
        useEffect: rs,
        useImperativeHandle: ss,
        useInsertionEffect: is,
        useLayoutEffect: as,
        useMemo: us,
        useReducer: Ho,
        useRef: $o,
        useState: function () {
          return Ho(Vo);
        },
        useDebugValue: cs,
        useDeferredValue: function (e) {
          return ds(Bo(), ko.memoizedState, e);
        },
        useTransition: function () {
          return [Ho(Vo)[0], Bo().memoizedState];
        },
        useMutableSource: Wo,
        useSyncExternalStore: Go,
        useId: ps,
        unstable_isNewReconciler: !1,
      },
      Ss = {
        readContext: $a,
        useCallback: ls,
        useContext: $a,
        useEffect: rs,
        useImperativeHandle: ss,
        useInsertionEffect: is,
        useLayoutEffect: as,
        useMemo: us,
        useReducer: Uo,
        useRef: $o,
        useState: function () {
          return Uo(Vo);
        },
        useDebugValue: cs,
        useDeferredValue: function (e) {
          var t = Bo();
          return ko === null
            ? (t.memoizedState = e)
            : ds(t, ko.memoizedState, e);
        },
        useTransition: function () {
          return [Uo(Vo)[0], Bo().memoizedState];
        },
        useMutableSource: Wo,
        useSyncExternalStore: Go,
        useId: ps,
        unstable_isNewReconciler: !1,
      };
    function Cs(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = j({}, t)), (e = e.defaultProps), e))
          t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    function ws(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : j({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ts = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? pt(e) === e : !1;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = vl(),
          i = yl(e),
          a = so(r, i);
        ((a.payload = t),
          n != null && (a.callback = n),
          (t = co(e, a, i)),
          t !== null && (bl(t, e, i, r), lo(t, e, i)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = vl(),
          i = yl(e),
          a = so(r, i);
        ((a.tag = 1),
          (a.payload = t),
          n != null && (a.callback = n),
          (t = co(e, a, i)),
          t !== null && (bl(t, e, i, r), lo(t, e, i)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = vl(),
          r = yl(e),
          i = so(n, r);
        ((i.tag = 2),
          t != null && (i.callback = t),
          (t = co(e, i, r)),
          t !== null && (bl(t, e, r, n), lo(t, e, r)));
      },
    };
    function Es(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !I(n, r) || !I(i, a)
            : !0
      );
    }
    function Ds(e, t, n) {
      var r = !1,
        i = Xi,
        a = t.contextType;
      return (
        typeof a == `object` && a
          ? (a = $a(a))
          : ((i = ta(t) ? $i : Zi.current),
            (r = t.contextTypes),
            (a = (r = r != null) ? ea(e, i) : Xi)),
        (t = new t(n, a)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ts),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      );
    }
    function Os(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ts.enqueueReplaceState(t, t.state, null));
    }
    function ks(e, t, n, r) {
      var i = e.stateNode;
      ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), ao(e));
      var a = t.contextType;
      (typeof a == `object` && a
        ? (i.context = $a(a))
        : ((a = ta(t) ? $i : Zi.current), (i.context = ea(e, a))),
        (i.state = e.memoizedState),
        (a = t.getDerivedStateFromProps),
        typeof a == `function` && (ws(e, t, a, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == `function` ||
          typeof i.getSnapshotBeforeUpdate == `function` ||
          (typeof i.UNSAFE_componentWillMount != `function` &&
            typeof i.componentWillMount != `function`) ||
          ((t = i.state),
          typeof i.componentWillMount == `function` && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == `function` &&
            i.UNSAFE_componentWillMount(),
          t !== i.state && Ts.enqueueReplaceState(i, i.state, null),
          fo(e, n, i, r),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == `function` && (e.flags |= 4194308));
    }
    function As(e, t) {
      try {
        var n = ``,
          r = t;
        do ((n += de(r)), (r = r.return));
        while (r);
        var i = n;
      } catch (e) {
        i =
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack;
      }
      return { value: e, source: t, stack: i, digest: null };
    }
    function js(e, t, n) {
      return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function Ms(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var Ns = typeof WeakMap == `function` ? WeakMap : Map;
    function Ps(e, t, n) {
      ((n = so(-1, n)), (n.tag = 3), (n.payload = { element: null }));
      var r = t.value;
      return (
        (n.callback = function () {
          (ll || ((ll = !0), (ul = r)), Ms(e, t));
        }),
        n
      );
    }
    function Fs(e, t, n) {
      ((n = so(-1, n)), (n.tag = 3));
      var r = e.type.getDerivedStateFromError;
      if (typeof r == `function`) {
        var i = t.value;
        ((n.payload = function () {
          return r(i);
        }),
          (n.callback = function () {
            Ms(e, t);
          }));
      }
      var a = e.stateNode;
      return (
        a !== null &&
          typeof a.componentDidCatch == `function` &&
          (n.callback = function () {
            (Ms(e, t),
              typeof r != `function` &&
                (q === null ? (q = new Set([this])) : q.add(this)));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: n === null ? `` : n,
            });
          }),
        n
      );
    }
    function Is(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Ns();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || (i.add(n), (e = Ul.bind(null, e, t, n)), t.then(e, e));
    }
    function Ls(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function Rs(e, t, n, r, i) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              n.tag === 1 &&
                (n.alternate === null
                  ? (n.tag = 17)
                  : ((t = so(-1, 1)), (t.tag = 2), co(n, t, 1))),
              (n.lanes |= 1)),
          e);
    }
    var zs = C.ReactCurrentOwner,
      Bs = !1;
    function Vs(e, t, n, r) {
      t.child = e === null ? Wa(t, null, n, r) : Ua(t, e.child, n, r);
    }
    function Hs(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      return (
        Qa(t, i),
        (r = Lo(e, t, n, r, a, i)),
        (n = Ro()),
        e !== null && !Bs
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~i),
            cc(e, t, i))
          : (V && n && wa(t), (t.flags |= 1), Vs(e, t, r, i), t.child)
      );
    }
    function Us(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Zl(a) &&
          a.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), Ws(e, t, a, r, i))
          : ((e = eu(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), (e.lanes & i) === 0)) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? I : n),
          n(o, r) && e.ref === t.ref)
        )
          return cc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = $l(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function Ws(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (I(a, r) && e.ref === t.ref)
          if (((Bs = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
            e.flags & 131072 && (Bs = !0);
          else return ((t.lanes = e.lanes), cc(e, t, i));
      }
      return qs(e, t, n, r, i);
    }
    function Gs(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        a = e === null ? null : e.memoizedState;
      if (r.mode === `hidden`)
        if (!(t.mode & 1))
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            B(Qc, Zc),
            (Zc |= n));
        else {
          if (!(n & 1073741824))
            return (
              (e = a === null ? n : a.baseLanes | n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              B(Qc, Zc),
              (Zc |= e),
              null
            );
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = a === null ? n : a.baseLanes),
            B(Qc, Zc),
            (Zc |= r));
        }
      else
        (a === null
          ? (r = n)
          : ((r = a.baseLanes | n), (t.memoizedState = null)),
          B(Qc, Zc),
          (Zc |= r));
      return (Vs(e, t, i, n), t.child);
    }
    function Ks(e, t) {
      var n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function qs(e, t, n, r, i) {
      var a = ta(n) ? $i : Zi.current;
      return (
        (a = ea(t, a)),
        Qa(t, i),
        (n = Lo(e, t, n, r, a, i)),
        (r = Ro()),
        e !== null && !Bs
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~i),
            cc(e, t, i))
          : (V && r && wa(t), (t.flags |= 1), Vs(e, t, n, i), t.child)
      );
    }
    function Js(e, t, n, r, i) {
      if (ta(n)) {
        var a = !0;
        aa(t);
      } else a = !1;
      if ((Qa(t, i), t.stateNode === null))
        (sc(e, t), Ds(t, n, r), ks(t, n, r, i), (r = !0));
      else if (e === null) {
        var o = t.stateNode,
          s = t.memoizedProps;
        o.props = s;
        var c = o.context,
          l = n.contextType;
        typeof l == `object` && l
          ? (l = $a(l))
          : ((l = ta(n) ? $i : Zi.current), (l = ea(t, l)));
        var u = n.getDerivedStateFromProps,
          d =
            typeof u == `function` ||
            typeof o.getSnapshotBeforeUpdate == `function`;
        (d ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== r || c !== l) && Os(t, o, r, l)),
          (io = !1));
        var f = t.memoizedState;
        ((o.state = f),
          fo(t, r, o, i),
          (c = t.memoizedState),
          s !== r || f !== c || Qi.current || io
            ? (typeof u == `function` &&
                (ws(t, n, u, r), (c = t.memoizedState)),
              (s = io || Es(t, n, s, r, f, c, l))
                ? (d ||
                    (typeof o.UNSAFE_componentWillMount != `function` &&
                      typeof o.componentWillMount != `function`) ||
                    (typeof o.componentWillMount == `function` &&
                      o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == `function` &&
                      o.UNSAFE_componentWillMount()),
                  typeof o.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof o.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = c)),
              (o.props = r),
              (o.state = c),
              (o.context = l),
              (r = s))
            : (typeof o.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((o = t.stateNode),
          oo(e, t),
          (s = t.memoizedProps),
          (l = t.type === t.elementType ? s : Cs(t.type, s)),
          (o.props = l),
          (d = t.pendingProps),
          (f = o.context),
          (c = n.contextType),
          typeof c == `object` && c
            ? (c = $a(c))
            : ((c = ta(n) ? $i : Zi.current), (c = ea(t, c))));
        var p = n.getDerivedStateFromProps;
        ((u =
          typeof p == `function` ||
          typeof o.getSnapshotBeforeUpdate == `function`) ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== d || f !== c) && Os(t, o, r, c)),
          (io = !1),
          (f = t.memoizedState),
          (o.state = f),
          fo(t, r, o, i));
        var m = t.memoizedState;
        s !== d || f !== m || Qi.current || io
          ? (typeof p == `function` && (ws(t, n, p, r), (m = t.memoizedState)),
            (l = io || Es(t, n, l, r, f, m, c) || !1)
              ? (u ||
                  (typeof o.UNSAFE_componentWillUpdate != `function` &&
                    typeof o.componentWillUpdate != `function`) ||
                  (typeof o.componentWillUpdate == `function` &&
                    o.componentWillUpdate(r, m, c),
                  typeof o.UNSAFE_componentWillUpdate == `function` &&
                    o.UNSAFE_componentWillUpdate(r, m, c)),
                typeof o.componentDidUpdate == `function` && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof o.componentDidUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (o.props = r),
            (o.state = m),
            (o.context = c),
            (r = l))
          : (typeof o.componentDidUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return Ys(e, t, n, r, a, i);
    }
    function Ys(e, t, n, r, i, a) {
      Ks(e, t);
      var o = !!(t.flags & 128);
      if (!r && !o) return (i && oa(t, n, !1), cc(e, t, a));
      ((r = t.stateNode), (zs.current = t));
      var s =
        o && typeof n.getDerivedStateFromError != `function`
          ? null
          : r.render();
      return (
        (t.flags |= 1),
        e !== null && o
          ? ((t.child = Ua(t, e.child, null, a)), (t.child = Ua(t, null, s, a)))
          : Vs(e, t, s, a),
        (t.memoizedState = r.state),
        i && oa(t, n, !0),
        t.child
      );
    }
    function Xs(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? ra(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && ra(e, t.context, !1),
        yo(e, t.containerInfo));
    }
    function Zs(e, t, n, r, i) {
      return (Ia(), La(i), (t.flags |= 256), Vs(e, t, n, r), t.child);
    }
    var Qs = { dehydrated: null, treeContext: null, retryLane: 0 };
    function $s(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function ec(e, t, n) {
      var r = t.pendingProps,
        i = H.current,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) ||
          (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)),
        s
          ? ((a = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (i |= 1),
        B(H, i & 1),
        e === null)
      )
        return (
          Ma(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? ((t.lanes = t.mode & 1 ? (e.data === `$!` ? 8 : 1073741824) : 1),
              null)
            : ((o = r.children),
              (e = r.fallback),
              a
                ? ((r = t.mode),
                  (a = t.child),
                  (o = { mode: `hidden`, children: o }),
                  !(r & 1) && a !== null
                    ? ((a.childLanes = 0), (a.pendingProps = o))
                    : (a = nu(o, r, 0, null)),
                  (e = tu(e, r, n, null)),
                  (a.return = t),
                  (e.return = t),
                  (a.sibling = e),
                  (t.child = a),
                  (t.child.memoizedState = $s(n)),
                  (t.memoizedState = Qs),
                  e)
                : tc(t, o))
        );
      if (
        ((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null))
      )
        return rc(e, t, o, r, s, i, n);
      if (a) {
        ((a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling));
        var c = { mode: `hidden`, children: r.children };
        return (
          !(o & 1) && t.child !== i
            ? ((r = t.child),
              (r.childLanes = 0),
              (r.pendingProps = c),
              (t.deletions = null))
            : ((r = $l(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
          s === null
            ? ((a = tu(a, o, n, null)), (a.flags |= 2))
            : (a = $l(s, a)),
          (a.return = t),
          (r.return = t),
          (r.sibling = a),
          (t.child = r),
          (r = a),
          (a = t.child),
          (o = e.child.memoizedState),
          (o =
            o === null
              ? $s(n)
              : {
                  baseLanes: o.baseLanes | n,
                  cachePool: null,
                  transitions: o.transitions,
                }),
          (a.memoizedState = o),
          (a.childLanes = e.childLanes & ~n),
          (t.memoizedState = Qs),
          r
        );
      }
      return (
        (a = e.child),
        (e = a.sibling),
        (r = $l(a, { mode: `visible`, children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((n = t.deletions),
          n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
      );
    }
    function tc(e, t) {
      return (
        (t = nu({ mode: `visible`, children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function nc(e, t, n, r) {
      return (
        r !== null && La(r),
        Ua(t, e.child, null, n),
        (e = tc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function rc(e, t, n, i, a, o, s) {
      if (n)
        return t.flags & 256
          ? ((t.flags &= -257), (i = js(Error(r(422)))), nc(e, t, s, i))
          : t.memoizedState === null
            ? ((o = i.fallback),
              (a = t.mode),
              (i = nu({ mode: `visible`, children: i.children }, a, 0, null)),
              (o = tu(o, a, s, null)),
              (o.flags |= 2),
              (i.return = t),
              (o.return = t),
              (i.sibling = o),
              (t.child = i),
              t.mode & 1 && Ua(t, e.child, null, s),
              (t.child.memoizedState = $s(s)),
              (t.memoizedState = Qs),
              o)
            : ((t.child = e.child), (t.flags |= 128), null);
      if (!(t.mode & 1)) return nc(e, t, s, null);
      if (a.data === `$!`) {
        if (((i = a.nextSibling && a.nextSibling.dataset), i)) var c = i.dgst;
        return (
          (i = c),
          (o = Error(r(419))),
          (i = js(o, i, void 0)),
          nc(e, t, s, i)
        );
      }
      if (((c = (s & e.childLanes) !== 0), Bs || c)) {
        if (((i = Jc), i !== null)) {
          switch (s & -s) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          ((a = (a & (i.suspendedLanes | s)) === 0 ? a : 0),
            a !== 0 &&
              a !== o.retryLane &&
              ((o.retryLane = a), ro(e, a), bl(i, e, a, -1)));
        }
        return (Nl(), (i = js(Error(r(421)))), nc(e, t, s, i));
      }
      return a.data === `$?`
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Gl.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (Da = Pi(a.nextSibling)),
          (Ea = t),
          (V = !0),
          (Oa = null),
          e !== null &&
            ((_a[va++] = ba),
            (_a[va++] = xa),
            (_a[va++] = ya),
            (ba = e.id),
            (xa = e.overflow),
            (ya = t)),
          (t = tc(t, i.children)),
          (t.flags |= 4096),
          t);
    }
    function ic(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Za(e.return, t, n));
    }
    function ac(e, t, n, r, i) {
      var a = e.memoizedState;
      a === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i));
    }
    function oc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      if ((Vs(e, t, r.children, n), (r = H.current), r & 2))
        ((r = (r & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && e.flags & 128)
          a: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ic(e, n, t);
            else if (e.tag === 19) ic(e, n, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break a;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break a;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        r &= 1;
      }
      if ((B(H, r), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (i) {
          case `forwards`:
            for (n = t.child, i = null; n !== null;)
              ((e = n.alternate),
                e !== null && Co(e) === null && (i = n),
                (n = n.sibling));
            ((n = i),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
              ac(t, !1, i, n, a));
            break;
          case `backwards`:
            for (n = null, i = t.child, t.child = null; i !== null;) {
              if (((e = i.alternate), e !== null && Co(e) === null)) {
                t.child = i;
                break;
              }
              ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
            }
            ac(t, !0, n, null, a);
            break;
          case `together`:
            ac(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function sc(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function cc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (tl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(r(153));
      if (t.child !== null) {
        for (
          e = t.child, n = $l(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = $l(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function lc(e, t, n) {
      switch (t.tag) {
        case 3:
          (Xs(t), Ia());
          break;
        case 5:
          xo(t);
          break;
        case 1:
          ta(t.type) && aa(t);
          break;
        case 4:
          yo(t, t.stateNode.containerInfo);
          break;
        case 10:
          var r = t.type._context,
            i = t.memoizedProps.value;
          (B(Ga, r._currentValue), (r._currentValue = i));
          break;
        case 13:
          if (((r = t.memoizedState), r !== null))
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (B(H, H.current & 1),
                  (e = cc(e, t, n)),
                  e === null ? null : e.sibling)
                : ec(e, t, n)
              : (B(H, H.current & 1), (t.flags |= 128), null);
          B(H, H.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
            if (r) return oc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            B(H, H.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), Gs(e, t, n));
      }
      return cc(e, t, n);
    }
    var uc = function (e, t) {
        for (var n = t.child; n !== null;) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      },
      dc = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          ((e = t.stateNode), vo(ho.current));
          var o = null;
          switch (n) {
            case `input`:
              ((i = be(e, i)), (r = be(e, r)), (o = []));
              break;
            case `select`:
              ((i = j({}, i, { value: void 0 })),
                (r = j({}, r, { value: void 0 })),
                (o = []));
              break;
            case `textarea`:
              ((i = Oe(e, i)), (r = Oe(e, r)), (o = []));
              break;
            default:
              typeof i.onClick != `function` &&
                typeof r.onClick == `function` &&
                (e.onclick = wi);
          }
          He(n, r);
          var s;
          for (u in ((n = null), i))
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
              if (u === `style`) {
                var c = i[u];
                for (s in c) c.hasOwnProperty(s) && ((n ||= {}), (n[s] = ``));
              } else
                u !== `dangerouslySetInnerHTML` &&
                  u !== `children` &&
                  u !== `suppressContentEditableWarning` &&
                  u !== `suppressHydrationWarning` &&
                  u !== `autoFocus` &&
                  (a.hasOwnProperty(u) ? (o ||= []) : (o ||= []).push(u, null));
          for (u in r) {
            var l = r[u];
            if (
              ((c = i?.[u]),
              r.hasOwnProperty(u) && l !== c && (l != null || c != null))
            )
              if (u === `style`)
                if (c) {
                  for (s in c)
                    !c.hasOwnProperty(s) ||
                      (l && l.hasOwnProperty(s)) ||
                      ((n ||= {}), (n[s] = ``));
                  for (s in l)
                    l.hasOwnProperty(s) &&
                      c[s] !== l[s] &&
                      ((n ||= {}), (n[s] = l[s]));
                } else (n || ((o ||= []), o.push(u, n)), (n = l));
              else
                u === `dangerouslySetInnerHTML`
                  ? ((l = l ? l.__html : void 0),
                    (c = c ? c.__html : void 0),
                    l != null && c !== l && (o ||= []).push(u, l))
                  : u === `children`
                    ? (typeof l != `string` && typeof l != `number`) ||
                      (o ||= []).push(u, `` + l)
                    : u !== `suppressContentEditableWarning` &&
                      u !== `suppressHydrationWarning` &&
                      (a.hasOwnProperty(u)
                        ? (l != null && u === `onScroll` && R(`scroll`, e),
                          o || c === l || (o = []))
                        : (o ||= []).push(u, l));
          }
          n && (o ||= []).push(`style`, n);
          var u = o;
          (t.updateQueue = u) && (t.flags |= 4);
        }
      },
      fc = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
    function pc(e, t) {
      if (!V)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function mc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 14680064),
            (r |= i.flags & 14680064),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function hc(e, t, n) {
      var i = t.pendingProps;
      switch ((Ta(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (mc(t), null);
        case 1:
          return (ta(t.type) && na(), mc(t), null);
        case 3:
          return (
            (i = t.stateNode),
            bo(),
            z(Qi),
            z(Zi),
            To(),
            i.pendingContext &&
              ((i.context = i.pendingContext), (i.pendingContext = null)),
            (e === null || e.child === null) &&
              (Pa(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Oa !== null && (wl(Oa), (Oa = null)))),
            mc(t),
            null
          );
        case 5:
          So(t);
          var o = vo(_o.current);
          if (((n = t.type), e !== null && t.stateNode != null))
            (dc(e, t, n, i, o),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!i) {
              if (t.stateNode === null) throw Error(r(166));
              return (mc(t), null);
            }
            if (((e = vo(ho.current)), Pa(t))) {
              ((i = t.stateNode), (n = t.type));
              var s = t.memoizedProps;
              switch (((i[Li] = t), (i[Ri] = s), (e = !!(t.mode & 1)), n)) {
                case `dialog`:
                  (R(`cancel`, i), R(`close`, i));
                  break;
                case `iframe`:
                case `object`:
                case `embed`:
                  R(`load`, i);
                  break;
                case `video`:
                case `audio`:
                  for (o = 0; o < si.length; o++) R(si[o], i);
                  break;
                case `source`:
                  R(`error`, i);
                  break;
                case `img`:
                case `image`:
                case `link`:
                  (R(`error`, i), R(`load`, i));
                  break;
                case `details`:
                  R(`toggle`, i);
                  break;
                case `input`:
                  (xe(i, s), R(`invalid`, i));
                  break;
                case `select`:
                  ((i._wrapperState = { wasMultiple: !!s.multiple }),
                    R(`invalid`, i));
                  break;
                case `textarea`:
                  (ke(i, s), R(`invalid`, i));
              }
              for (var c in (He(n, s), (o = null), s))
                if (s.hasOwnProperty(c)) {
                  var l = s[c];
                  c === `children`
                    ? typeof l == `string`
                      ? i.textContent !== l &&
                        (!0 !== s.suppressHydrationWarning &&
                          Ci(i.textContent, l, e),
                        (o = [`children`, l]))
                      : typeof l == `number` &&
                        i.textContent !== `` + l &&
                        (!0 !== s.suppressHydrationWarning &&
                          Ci(i.textContent, l, e),
                        (o = [`children`, `` + l]))
                    : a.hasOwnProperty(c) &&
                      l != null &&
                      c === `onScroll` &&
                      R(`scroll`, i);
                }
              switch (n) {
                case `input`:
                  (_e(i), we(i, s, !0));
                  break;
                case `textarea`:
                  (_e(i), je(i));
                  break;
                case `select`:
                case `option`:
                  break;
                default:
                  typeof s.onClick == `function` && (i.onclick = wi);
              }
              ((i = o), (t.updateQueue = i), i !== null && (t.flags |= 4));
            } else {
              ((c = o.nodeType === 9 ? o : o.ownerDocument),
                e === `http://www.w3.org/1999/xhtml` && (e = Me(n)),
                e === `http://www.w3.org/1999/xhtml`
                  ? n === `script`
                    ? ((e = c.createElement(`div`)),
                      (e.innerHTML = `<script><\/script>`),
                      (e = e.removeChild(e.firstChild)))
                    : typeof i.is == `string`
                      ? (e = c.createElement(n, { is: i.is }))
                      : ((e = c.createElement(n)),
                        n === `select` &&
                          ((c = e),
                          i.multiple
                            ? (c.multiple = !0)
                            : i.size && (c.size = i.size)))
                  : (e = c.createElementNS(e, n)),
                (e[Li] = t),
                (e[Ri] = i),
                uc(e, t, !1, !1),
                (t.stateNode = e));
              a: {
                switch (((c = Ue(n, i)), n)) {
                  case `dialog`:
                    (R(`cancel`, e), R(`close`, e), (o = i));
                    break;
                  case `iframe`:
                  case `object`:
                  case `embed`:
                    (R(`load`, e), (o = i));
                    break;
                  case `video`:
                  case `audio`:
                    for (o = 0; o < si.length; o++) R(si[o], e);
                    o = i;
                    break;
                  case `source`:
                    (R(`error`, e), (o = i));
                    break;
                  case `img`:
                  case `image`:
                  case `link`:
                    (R(`error`, e), R(`load`, e), (o = i));
                    break;
                  case `details`:
                    (R(`toggle`, e), (o = i));
                    break;
                  case `input`:
                    (xe(e, i), (o = be(e, i)), R(`invalid`, e));
                    break;
                  case `option`:
                    o = i;
                    break;
                  case `select`:
                    ((e._wrapperState = { wasMultiple: !!i.multiple }),
                      (o = j({}, i, { value: void 0 })),
                      R(`invalid`, e));
                    break;
                  case `textarea`:
                    (ke(e, i), (o = Oe(e, i)), R(`invalid`, e));
                    break;
                  default:
                    o = i;
                }
                for (s in (He(n, o), (l = o), l))
                  if (l.hasOwnProperty(s)) {
                    var u = l[s];
                    s === `style`
                      ? Be(e, u)
                      : s === `dangerouslySetInnerHTML`
                        ? ((u = u ? u.__html : void 0), u != null && Fe(e, u))
                        : s === `children`
                          ? typeof u == `string`
                            ? (n !== `textarea` || u !== ``) && Ie(e, u)
                            : typeof u == `number` && Ie(e, `` + u)
                          : s !== `suppressContentEditableWarning` &&
                            s !== `suppressHydrationWarning` &&
                            s !== `autoFocus` &&
                            (a.hasOwnProperty(s)
                              ? u != null && s === `onScroll` && R(`scroll`, e)
                              : u != null && S(e, s, u, c));
                  }
                switch (n) {
                  case `input`:
                    (_e(e), we(e, i, !1));
                    break;
                  case `textarea`:
                    (_e(e), je(e));
                    break;
                  case `option`:
                    i.value != null &&
                      e.setAttribute(`value`, `` + me(i.value));
                    break;
                  case `select`:
                    ((e.multiple = !!i.multiple),
                      (s = i.value),
                      s == null
                        ? i.defaultValue != null &&
                          De(e, !!i.multiple, i.defaultValue, !0)
                        : De(e, !!i.multiple, s, !1));
                    break;
                  default:
                    typeof o.onClick == `function` && (e.onclick = wi);
                }
                switch (n) {
                  case `button`:
                  case `input`:
                  case `select`:
                  case `textarea`:
                    i = !!i.autoFocus;
                    break a;
                  case `img`:
                    i = !0;
                    break a;
                  default:
                    i = !1;
                }
              }
              i && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return (mc(t), null);
        case 6:
          if (e && t.stateNode != null) fc(e, t, e.memoizedProps, i);
          else {
            if (typeof i != `string` && t.stateNode === null)
              throw Error(r(166));
            if (((n = vo(_o.current)), vo(ho.current), Pa(t))) {
              if (
                ((i = t.stateNode),
                (n = t.memoizedProps),
                (i[Li] = t),
                (s = i.nodeValue !== n) && ((e = Ea), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    Ci(i.nodeValue, n, !!(e.mode & 1));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      Ci(i.nodeValue, n, !!(e.mode & 1));
                }
              s && (t.flags |= 4);
            } else
              ((i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
                (i[Li] = t),
                (t.stateNode = i));
          }
          return (mc(t), null);
        case 13:
          if (
            (z(H),
            (i = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (V && Da !== null && t.mode & 1 && !(t.flags & 128))
              (Fa(), Ia(), (t.flags |= 98560), (s = !1));
            else if (((s = Pa(t)), i !== null && i.dehydrated !== null)) {
              if (e === null) {
                if (!s) throw Error(r(318));
                if (
                  ((s = t.memoizedState),
                  (s = s === null ? null : s.dehydrated),
                  !s)
                )
                  throw Error(r(317));
                s[Li] = t;
              } else
                (Ia(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (mc(t), (s = !1));
            } else (Oa !== null && (wl(Oa), (Oa = null)), (s = !0));
            if (!s) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = n), t)
            : ((i = i !== null),
              i !== (e !== null && e.memoizedState !== null) &&
                i &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || H.current & 1 ? $c === 0 && ($c = 3) : Nl())),
              t.updateQueue !== null && (t.flags |= 4),
              mc(t),
              null);
        case 4:
          return (
            bo(),
            e === null && pi(t.stateNode.containerInfo),
            mc(t),
            null
          );
        case 10:
          return (Xa(t.type._context), mc(t), null);
        case 17:
          return (ta(t.type) && na(), mc(t), null);
        case 19:
          if ((z(H), (s = t.memoizedState), s === null)) return (mc(t), null);
          if (((i = !!(t.flags & 128)), (c = s.rendering), c === null))
            if (i) pc(s, !1);
            else {
              if ($c !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((c = Co(e)), c !== null)) {
                    for (
                      t.flags |= 128,
                        pc(s, !1),
                        i = c.updateQueue,
                        i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        i = n,
                        n = t.child;
                      n !== null;
                    )
                      ((s = n),
                        (e = i),
                        (s.flags &= 14680066),
                        (c = s.alternate),
                        c === null
                          ? ((s.childLanes = 0),
                            (s.lanes = e),
                            (s.child = null),
                            (s.subtreeFlags = 0),
                            (s.memoizedProps = null),
                            (s.memoizedState = null),
                            (s.updateQueue = null),
                            (s.dependencies = null),
                            (s.stateNode = null))
                          : ((s.childLanes = c.childLanes),
                            (s.lanes = c.lanes),
                            (s.child = c.child),
                            (s.subtreeFlags = 0),
                            (s.deletions = null),
                            (s.memoizedProps = c.memoizedProps),
                            (s.memoizedState = c.memoizedState),
                            (s.updateQueue = c.updateQueue),
                            (s.type = c.type),
                            (e = c.dependencies),
                            (s.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (n = n.sibling));
                    return (B(H, (H.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              s.tail !== null &&
                Ct() > sl &&
                ((t.flags |= 128), (i = !0), pc(s, !1), (t.lanes = 4194304));
            }
          else {
            if (!i)
              if (((e = Co(c)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (n = e.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  pc(s, !0),
                  s.tail === null &&
                    s.tailMode === `hidden` &&
                    !c.alternate &&
                    !V)
                )
                  return (mc(t), null);
              } else
                2 * Ct() - s.renderingStartTime > sl &&
                  n !== 1073741824 &&
                  ((t.flags |= 128), (i = !0), pc(s, !1), (t.lanes = 4194304));
            s.isBackwards
              ? ((c.sibling = t.child), (t.child = c))
              : ((n = s.last),
                n === null ? (t.child = c) : (n.sibling = c),
                (s.last = c));
          }
          return s.tail === null
            ? (mc(t), null)
            : ((t = s.tail),
              (s.rendering = t),
              (s.tail = t.sibling),
              (s.renderingStartTime = Ct()),
              (t.sibling = null),
              (n = H.current),
              B(H, i ? (n & 1) | 2 : n & 1),
              t);
        case 22:
        case 23:
          return (
            Al(),
            (i = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
            i && t.mode & 1
              ? Zc & 1073741824 &&
                (mc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : mc(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function gc(e, t) {
      switch ((Ta(t), t.tag)) {
        case 1:
          return (
            ta(t.type) && na(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            bo(),
            z(Qi),
            z(Zi),
            To(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return (So(t), null);
        case 13:
          if (
            (z(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(r(340));
            Ia();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (z(H), null);
        case 4:
          return (bo(), null);
        case 10:
          return (Xa(t.type._context), null);
        case 22:
        case 23:
          return (Al(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var _c = !1,
      vc = !1,
      yc = typeof WeakSet == `function` ? WeakSet : Set,
      W = null;
    function bc(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Y(e, t, n);
          }
        else n.current = null;
    }
    function xc(e, t, n) {
      try {
        n();
      } catch (n) {
        Y(e, t, n);
      }
    }
    var Sc = !1;
    function Cc(e, t) {
      if (((Ti = bn), (e = zr()), Br(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var i = n.getSelection && n.getSelection();
            if (i && i.rangeCount !== 0) {
              n = i.anchorNode;
              var a = i.anchorOffset,
                o = i.focusNode;
              i = i.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === i && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Ei = { focusedElem: e, selectionRange: n }, bn = !1, W = t;
        W !== null;
      )
        if (((t = W), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (W = e));
        else
          for (; W !== null;) {
            t = W;
            try {
              var h = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (h !== null) {
                      var g = h.memoizedProps,
                        _ = h.memoizedState,
                        v = t.stateNode;
                      v.__reactInternalSnapshotBeforeUpdate =
                        v.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? g : Cs(t.type, g),
                          _,
                        );
                    }
                    break;
                  case 3:
                    var y = t.stateNode.containerInfo;
                    y.nodeType === 1
                      ? (y.textContent = ``)
                      : y.nodeType === 9 &&
                        y.documentElement &&
                        y.removeChild(y.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(r(163));
                }
            } catch (e) {
              Y(t, t.return, e);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (W = e));
              break;
            }
            W = t.return;
          }
      return ((h = Sc), (Sc = !1), h);
    }
    function wc(e, t, n) {
      var r = t.updateQueue;
      if (((r = r === null ? null : r.lastEffect), r !== null)) {
        var i = (r = r.next);
        do {
          if ((i.tag & e) === e) {
            var a = i.destroy;
            ((i.destroy = void 0), a !== void 0 && xc(t, n, a));
          }
          i = i.next;
        } while (i !== r);
      }
    }
    function Tc(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t === null ? null : t.lastEffect),
        t !== null)
      ) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function Ec(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 5:
            e = n;
            break;
          default:
            e = n;
        }
        typeof t == `function` ? t(e) : (t.current = e);
      }
    }
    function Dc(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Dc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[Li],
            delete t[Ri],
            delete t[Bi],
            delete t[Vi],
            delete t[Hi])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function Oc(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function kc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Oc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Ac(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? n.nodeType === 8
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (n.nodeType === 8
                ? ((t = n.parentNode), t.insertBefore(e, n))
                : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = wi)));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Ac(e, t, n), e = e.sibling; e !== null;)
          (Ac(e, t, n), (e = e.sibling));
    }
    function jc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (jc(e, t, n), e = e.sibling; e !== null;)
          (jc(e, t, n), (e = e.sibling));
    }
    var Mc = null,
      Nc = !1;
    function Pc(e, t, n) {
      for (n = n.child; n !== null;) (Fc(e, t, n), (n = n.sibling));
    }
    function Fc(e, t, n) {
      if (jt && typeof jt.onCommitFiberUnmount == `function`)
        try {
          jt.onCommitFiberUnmount(At, n);
        } catch {}
      switch (n.tag) {
        case 5:
          vc || bc(n, t);
        case 6:
          var r = Mc,
            i = Nc;
          ((Mc = null),
            Pc(e, t, n),
            (Mc = r),
            (Nc = i),
            Mc !== null &&
              (Nc
                ? ((e = Mc),
                  (n = n.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(n)
                    : e.removeChild(n))
                : Mc.removeChild(n.stateNode)));
          break;
        case 18:
          Mc !== null &&
            (Nc
              ? ((e = Mc),
                (n = n.stateNode),
                e.nodeType === 8
                  ? Ni(e.parentNode, n)
                  : e.nodeType === 1 && Ni(e, n),
                vn(e))
              : Ni(Mc, n.stateNode));
          break;
        case 4:
          ((r = Mc),
            (i = Nc),
            (Mc = n.stateNode.containerInfo),
            (Nc = !0),
            Pc(e, t, n),
            (Mc = r),
            (Nc = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !vc &&
            ((r = n.updateQueue),
            r !== null && ((r = r.lastEffect), r !== null))
          ) {
            i = r = r.next;
            do {
              var a = i,
                o = a.destroy;
              ((a = a.tag),
                o !== void 0 && (a & 2 || a & 4) && xc(n, t, o),
                (i = i.next));
            } while (i !== r);
          }
          Pc(e, t, n);
          break;
        case 1:
          if (
            !vc &&
            (bc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function`)
          )
            try {
              ((r.props = n.memoizedProps),
                (r.state = n.memoizedState),
                r.componentWillUnmount());
            } catch (e) {
              Y(n, t, e);
            }
          Pc(e, t, n);
          break;
        case 21:
          Pc(e, t, n);
          break;
        case 22:
          n.mode & 1
            ? ((vc = (r = vc) || n.memoizedState !== null),
              Pc(e, t, n),
              (vc = r))
            : Pc(e, t, n);
          break;
        default:
          Pc(e, t, n);
      }
    }
    function Ic(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        (n === null && (n = e.stateNode = new yc()),
          t.forEach(function (t) {
            var r = Kl.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          }));
      }
    }
    function Lc(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          try {
            var o = e,
              s = t,
              c = s;
            a: for (; c !== null;) {
              switch (c.tag) {
                case 5:
                  ((Mc = c.stateNode), (Nc = !1));
                  break a;
                case 3:
                  ((Mc = c.stateNode.containerInfo), (Nc = !0));
                  break a;
                case 4:
                  ((Mc = c.stateNode.containerInfo), (Nc = !0));
                  break a;
              }
              c = c.return;
            }
            if (Mc === null) throw Error(r(160));
            (Fc(o, s, a), (Mc = null), (Nc = !1));
            var l = a.alternate;
            (l !== null && (l.return = null), (a.return = null));
          } catch (e) {
            Y(a, t, e);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) (Rc(t, e), (t = t.sibling));
    }
    function Rc(e, t) {
      var n = e.alternate,
        i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Lc(t, e), zc(e), i & 4)) {
            try {
              (wc(3, e, e.return), Tc(3, e));
            } catch (t) {
              Y(e, e.return, t);
            }
            try {
              wc(5, e, e.return);
            } catch (t) {
              Y(e, e.return, t);
            }
          }
          break;
        case 1:
          (Lc(t, e), zc(e), i & 512 && n !== null && bc(n, n.return));
          break;
        case 5:
          if (
            (Lc(t, e),
            zc(e),
            i & 512 && n !== null && bc(n, n.return),
            e.flags & 32)
          ) {
            var a = e.stateNode;
            try {
              Ie(a, ``);
            } catch (t) {
              Y(e, e.return, t);
            }
          }
          if (i & 4 && ((a = e.stateNode), a != null)) {
            var o = e.memoizedProps,
              s = n === null ? o : n.memoizedProps,
              c = e.type,
              l = e.updateQueue;
            if (((e.updateQueue = null), l !== null))
              try {
                (c === `input` &&
                  o.type === `radio` &&
                  o.name != null &&
                  Se(a, o),
                  Ue(c, s));
                var u = Ue(c, o);
                for (s = 0; s < l.length; s += 2) {
                  var d = l[s],
                    f = l[s + 1];
                  d === `style`
                    ? Be(a, f)
                    : d === `dangerouslySetInnerHTML`
                      ? Fe(a, f)
                      : d === `children`
                        ? Ie(a, f)
                        : S(a, d, f, u);
                }
                switch (c) {
                  case `input`:
                    Ce(a, o);
                    break;
                  case `textarea`:
                    Ae(a, o);
                    break;
                  case `select`:
                    var p = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var m = o.value;
                    m == null
                      ? p !== !!o.multiple &&
                        (o.defaultValue == null
                          ? De(a, !!o.multiple, o.multiple ? [] : ``, !1)
                          : De(a, !!o.multiple, o.defaultValue, !0))
                      : De(a, !!o.multiple, m, !1);
                }
                a[Ri] = o;
              } catch (t) {
                Y(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((Lc(t, e), zc(e), i & 4)) {
            if (e.stateNode === null) throw Error(r(162));
            ((a = e.stateNode), (o = e.memoizedProps));
            try {
              a.nodeValue = o;
            } catch (t) {
              Y(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            (Lc(t, e),
            zc(e),
            i & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              vn(t.containerInfo);
            } catch (t) {
              Y(e, e.return, t);
            }
          break;
        case 4:
          (Lc(t, e), zc(e));
          break;
        case 13:
          (Lc(t, e),
            zc(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o ||
                (a.alternate !== null && a.alternate.memoizedState !== null) ||
                (ol = Ct())),
            i & 4 && Ic(e));
          break;
        case 22:
          if (
            ((d = n !== null && n.memoizedState !== null),
            e.mode & 1 ? ((vc = (u = vc) || d), Lc(t, e), (vc = u)) : Lc(t, e),
            zc(e),
            i & 8192)
          ) {
            if (
              ((u = e.memoizedState !== null),
              (e.stateNode.isHidden = u) && !d && e.mode & 1)
            )
              for (W = e, d = e.child; d !== null;) {
                for (f = W = d; W !== null;) {
                  switch (((p = W), (m = p.child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      wc(4, p, p.return);
                      break;
                    case 1:
                      bc(p, p.return);
                      var h = p.stateNode;
                      if (typeof h.componentWillUnmount == `function`) {
                        ((i = p), (n = p.return));
                        try {
                          ((t = i),
                            (h.props = t.memoizedProps),
                            (h.state = t.memoizedState),
                            h.componentWillUnmount());
                        } catch (e) {
                          Y(i, n, e);
                        }
                      }
                      break;
                    case 5:
                      bc(p, p.return);
                      break;
                    case 22:
                      if (p.memoizedState !== null) {
                        Uc(f);
                        continue;
                      }
                  }
                  m === null ? Uc(f) : ((m.return = p), (W = m));
                }
                d = d.sibling;
              }
            a: for (d = null, f = e; ;) {
              if (f.tag === 5) {
                if (d === null) {
                  d = f;
                  try {
                    ((a = f.stateNode),
                      u
                        ? ((o = a.style),
                          typeof o.setProperty == `function`
                            ? o.setProperty(`display`, `none`, `important`)
                            : (o.display = `none`))
                        : ((c = f.stateNode),
                          (l = f.memoizedProps.style),
                          (s =
                            l != null && l.hasOwnProperty(`display`)
                              ? l.display
                              : null),
                          (c.style.display = ze(`display`, s))));
                  } catch (t) {
                    Y(e, e.return, t);
                  }
                }
              } else if (f.tag === 6) {
                if (d === null)
                  try {
                    f.stateNode.nodeValue = u ? `` : f.memoizedProps;
                  } catch (t) {
                    Y(e, e.return, t);
                  }
              } else if (
                ((f.tag !== 22 && f.tag !== 23) ||
                  f.memoizedState === null ||
                  f === e) &&
                f.child !== null
              ) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break a;
              for (; f.sibling === null;) {
                if (f.return === null || f.return === e) break a;
                (d === f && (d = null), (f = f.return));
              }
              (d === f && (d = null),
                (f.sibling.return = f.return),
                (f = f.sibling));
            }
          }
          break;
        case 19:
          (Lc(t, e), zc(e), i & 4 && Ic(e));
          break;
        case 21:
          break;
        default:
          (Lc(t, e), zc(e));
      }
    }
    function zc(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          a: {
            for (var n = e.return; n !== null;) {
              if (Oc(n)) {
                var i = n;
                break a;
              }
              n = n.return;
            }
            throw Error(r(160));
          }
          switch (i.tag) {
            case 5:
              var a = i.stateNode;
              (i.flags & 32 && (Ie(a, ``), (i.flags &= -33)), jc(e, kc(e), a));
              break;
            case 3:
            case 4:
              var o = i.stateNode.containerInfo;
              Ac(e, kc(e), o);
              break;
            default:
              throw Error(r(161));
          }
        } catch (t) {
          Y(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Bc(e, t, n) {
      ((W = e), Vc(e, t, n));
    }
    function Vc(e, t, n) {
      for (var r = !!(e.mode & 1); W !== null;) {
        var i = W,
          a = i.child;
        if (i.tag === 22 && r) {
          var o = i.memoizedState !== null || _c;
          if (!o) {
            var s = i.alternate,
              c = (s !== null && s.memoizedState !== null) || vc;
            s = _c;
            var l = vc;
            if (((_c = o), (vc = c) && !l))
              for (W = i; W !== null;)
                ((o = W),
                  (c = o.child),
                  (o.tag === 22 && o.memoizedState !== null) || c === null
                    ? Wc(i)
                    : ((c.return = o), (W = c)));
            for (; a !== null;) ((W = a), Vc(a, t, n), (a = a.sibling));
            ((W = i), (_c = s), (vc = l));
          }
          Hc(e, t, n);
        } else
          i.subtreeFlags & 8772 && a !== null
            ? ((a.return = i), (W = a))
            : Hc(e, t, n);
      }
    }
    function Hc(e) {
      for (; W !== null;) {
        var t = W;
        if (t.flags & 8772) {
          var n = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  vc || Tc(5, t);
                  break;
                case 1:
                  var i = t.stateNode;
                  if (t.flags & 4 && !vc)
                    if (n === null) i.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? n.memoizedProps
                          : Cs(t.type, n.memoizedProps);
                      i.componentDidUpdate(
                        a,
                        n.memoizedState,
                        i.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  var o = t.updateQueue;
                  o !== null && po(t, o, i);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (s !== null) {
                    if (((n = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          n = t.child.stateNode;
                          break;
                        case 1:
                          n = t.child.stateNode;
                      }
                    po(t, s, n);
                  }
                  break;
                case 5:
                  var c = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = c;
                    var l = t.memoizedProps;
                    switch (t.type) {
                      case `button`:
                      case `input`:
                      case `select`:
                      case `textarea`:
                        l.autoFocus && n.focus();
                        break;
                      case `img`:
                        l.src && (n.src = l.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var u = t.alternate;
                    if (u !== null) {
                      var d = u.memoizedState;
                      if (d !== null) {
                        var f = d.dehydrated;
                        f !== null && vn(f);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(r(163));
              }
            vc || (t.flags & 512 && Ec(t));
          } catch (e) {
            Y(t, t.return, e);
          }
        }
        if (t === e) {
          W = null;
          break;
        }
        if (((n = t.sibling), n !== null)) {
          ((n.return = t.return), (W = n));
          break;
        }
        W = t.return;
      }
    }
    function Uc(e) {
      for (; W !== null;) {
        var t = W;
        if (t === e) {
          W = null;
          break;
        }
        var n = t.sibling;
        if (n !== null) {
          ((n.return = t.return), (W = n));
          break;
        }
        W = t.return;
      }
    }
    function Wc(e) {
      for (; W !== null;) {
        var t = W;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                Tc(4, t);
              } catch (e) {
                Y(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == `function`) {
                var i = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  Y(t, i, e);
                }
              }
              var a = t.return;
              try {
                Ec(t);
              } catch (e) {
                Y(t, a, e);
              }
              break;
            case 5:
              var o = t.return;
              try {
                Ec(t);
              } catch (e) {
                Y(t, o, e);
              }
          }
        } catch (e) {
          Y(t, t.return, e);
        }
        if (t === e) {
          W = null;
          break;
        }
        var s = t.sibling;
        if (s !== null) {
          ((s.return = t.return), (W = s));
          break;
        }
        W = t.return;
      }
    }
    var G = Math.ceil,
      Gc = C.ReactCurrentDispatcher,
      Kc = C.ReactCurrentOwner,
      qc = C.ReactCurrentBatchConfig,
      K = 0,
      Jc = null,
      Yc = null,
      Xc = 0,
      Zc = 0,
      Qc = Yi(0),
      $c = 0,
      el = null,
      tl = 0,
      nl = 0,
      rl = 0,
      il = null,
      al = null,
      ol = 0,
      sl = 1 / 0,
      cl = null,
      ll = !1,
      ul = null,
      q = null,
      dl = !1,
      fl = null,
      pl = 0,
      ml = 0,
      hl = null,
      gl = -1,
      _l = 0;
    function vl() {
      return K & 6 ? Ct() : gl === -1 ? (gl = Ct()) : gl;
    }
    function yl(e) {
      return e.mode & 1
        ? K & 2 && Xc !== 0
          ? Xc & -Xc
          : Ra.transition === null
            ? ((e = N),
              e === 0
                ? ((e = window.event), (e = e === void 0 ? 16 : En(e.type)), e)
                : e)
            : (_l === 0 && (_l = Wt()), _l)
        : 1;
    }
    function bl(e, t, n, i) {
      if (50 < ml) throw ((ml = 0), (hl = null), Error(r(185)));
      (Kt(e, n, i),
        (!(K & 2) || e !== Jc) &&
          (e === Jc && (!(K & 2) && (nl |= n), $c === 4 && El(e, Xc)),
          xl(e, i),
          n === 1 &&
            K === 0 &&
            !(t.mode & 1) &&
            ((sl = Ct() + 500), ca && fa())));
    }
    function xl(e, t) {
      var n = e.callbackNode;
      Ht(e, t);
      var r = Bt(e, e === Jc ? Xc : 0);
      if (r === 0)
        (n !== null && bt(n),
          (e.callbackNode = null),
          (e.callbackPriority = 0));
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && bt(n), t === 1))
          (e.tag === 0 ? da(Dl.bind(null, e)) : ua(Dl.bind(null, e)),
            ji(function () {
              !(K & 6) && fa();
            }),
            (n = null));
        else {
          switch (Yt(r)) {
            case 1:
              n = Tt;
              break;
            case 4:
              n = Et;
              break;
            case 16:
              n = Dt;
              break;
            case 536870912:
              n = kt;
              break;
            default:
              n = Dt;
          }
          n = Jl(n, Sl.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
      }
    }
    function Sl(e, t) {
      if (((gl = -1), (_l = 0), K & 6)) throw Error(r(327));
      var n = e.callbackNode;
      if (Vl() && e.callbackNode !== n) return null;
      var i = Bt(e, e === Jc ? Xc : 0);
      if (i === 0) return null;
      if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = Pl(e, i);
      else {
        t = i;
        var a = K;
        K |= 2;
        var o = Ml();
        (Jc !== e || Xc !== t) && ((cl = null), (sl = Ct() + 500), J(e, t));
        do
          try {
            Il();
            break;
          } catch (t) {
            jl(e, t);
          }
        while (1);
        (Ya(),
          (Gc.current = o),
          (K = a),
          Yc === null ? ((Jc = null), (Xc = 0), (t = $c)) : (t = 0));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((a = Ut(e)), a !== 0 && ((i = a), (t = Cl(e, a)))),
          t === 1)
        )
          throw ((n = el), J(e, 0), El(e, i), xl(e, Ct()), n);
        if (t === 6) El(e, i);
        else {
          if (
            ((a = e.current.alternate),
            !(i & 30) &&
              !Tl(a) &&
              ((t = Pl(e, i)),
              t === 2 && ((o = Ut(e)), o !== 0 && ((i = o), (t = Cl(e, o)))),
              t === 1))
          )
            throw ((n = el), J(e, 0), El(e, i), xl(e, Ct()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = i), t)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 2:
              zl(e, al, cl);
              break;
            case 3:
              if (
                (El(e, i),
                (i & 130023424) === i && ((t = ol + 500 - Ct()), 10 < t))
              ) {
                if (Bt(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & i) !== i)) {
                  (vl(), (e.pingedLanes |= e.suspendedLanes & a));
                  break;
                }
                e.timeoutHandle = Oi(zl.bind(null, e, al, cl), t);
                break;
              }
              zl(e, al, cl);
              break;
            case 4:
              if ((El(e, i), (i & 4194240) === i)) break;
              for (t = e.eventTimes, a = -1; 0 < i;) {
                var s = 31 - Nt(i);
                ((o = 1 << s), (s = t[s]), s > a && (a = s), (i &= ~o));
              }
              if (
                ((i = a),
                (i = Ct() - i),
                (i =
                  (120 > i
                    ? 120
                    : 480 > i
                      ? 480
                      : 1080 > i
                        ? 1080
                        : 1920 > i
                          ? 1920
                          : 3e3 > i
                            ? 3e3
                            : 4320 > i
                              ? 4320
                              : 1960 * G(i / 1960)) - i),
                10 < i)
              ) {
                e.timeoutHandle = Oi(zl.bind(null, e, al, cl), i);
                break;
              }
              zl(e, al, cl);
              break;
            case 5:
              zl(e, al, cl);
              break;
            default:
              throw Error(r(329));
          }
        }
      }
      return (xl(e, Ct()), e.callbackNode === n ? Sl.bind(null, e) : null);
    }
    function Cl(e, t) {
      var n = il;
      return (
        e.current.memoizedState.isDehydrated && (J(e, t).flags |= 256),
        (e = Pl(e, t)),
        e !== 2 && ((t = al), (al = n), t !== null && wl(t)),
        e
      );
    }
    function wl(e) {
      al === null ? (al = e) : al.push.apply(al, e);
    }
    function Tl(e) {
      for (var t = e; ;) {
        if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && ((n = n.stores), n !== null))
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                a = i.getSnapshot;
              i = i.value;
              try {
                if (!Fr(a(), i)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function El(e, t) {
      for (
        t &= ~rl,
          t &= ~nl,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;
      ) {
        var n = 31 - Nt(t),
          r = 1 << n;
        ((e[n] = -1), (t &= ~r));
      }
    }
    function Dl(e) {
      if (K & 6) throw Error(r(327));
      Vl();
      var t = Bt(e, 0);
      if (!(t & 1)) return (xl(e, Ct()), null);
      var n = Pl(e, t);
      if (e.tag !== 0 && n === 2) {
        var i = Ut(e);
        i !== 0 && ((t = i), (n = Cl(e, i)));
      }
      if (n === 1) throw ((n = el), J(e, 0), El(e, t), xl(e, Ct()), n);
      if (n === 6) throw Error(r(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        zl(e, al, cl),
        xl(e, Ct()),
        null
      );
    }
    function Ol(e, t) {
      var n = K;
      K |= 1;
      try {
        return e(t);
      } finally {
        ((K = n), K === 0 && ((sl = Ct() + 500), ca && fa()));
      }
    }
    function kl(e) {
      fl !== null && fl.tag === 0 && !(K & 6) && Vl();
      var t = K;
      K |= 1;
      var n = qc.transition,
        r = N;
      try {
        if (((qc.transition = null), (N = 1), e)) return e();
      } finally {
        ((N = r), (qc.transition = n), (K = t), !(K & 6) && fa());
      }
    }
    function Al() {
      ((Zc = Qc.current), z(Qc));
    }
    function J(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), ki(n)), Yc !== null))
        for (n = Yc.return; n !== null;) {
          var r = n;
          switch ((Ta(r), r.tag)) {
            case 1:
              ((r = r.type.childContextTypes), r != null && na());
              break;
            case 3:
              (bo(), z(Qi), z(Zi), To());
              break;
            case 5:
              So(r);
              break;
            case 4:
              bo();
              break;
            case 13:
              z(H);
              break;
            case 19:
              z(H);
              break;
            case 10:
              Xa(r.type._context);
              break;
            case 22:
            case 23:
              Al();
          }
          n = n.return;
        }
      if (
        ((Jc = e),
        (Yc = e = $l(e.current, null)),
        (Xc = Zc = t),
        ($c = 0),
        (el = null),
        (rl = nl = tl = 0),
        (al = il = null),
        eo !== null)
      ) {
        for (t = 0; t < eo.length; t++)
          if (((n = eo[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var i = r.next,
              a = n.pending;
            if (a !== null) {
              var o = a.next;
              ((a.next = i), (r.next = o));
            }
            n.pending = r;
          }
        eo = null;
      }
      return e;
    }
    function jl(e, t) {
      do {
        var n = Yc;
        try {
          if ((Ya(), (Eo.current = ys), jo)) {
            for (var i = U.memoizedState; i !== null;) {
              var a = i.queue;
              (a !== null && (a.pending = null), (i = i.next));
            }
            jo = !1;
          }
          if (
            ((Oo = 0),
            (Ao = ko = U = null),
            (Mo = !1),
            (No = 0),
            (Kc.current = null),
            n === null || n.return === null)
          ) {
            (($c = 1), (el = t), (Yc = null));
            break;
          }
          a: {
            var o = e,
              s = n.return,
              c = n,
              l = t;
            if (
              ((t = Xc),
              (c.flags |= 32768),
              typeof l == `object` && l && typeof l.then == `function`)
            ) {
              var u = l,
                d = c,
                f = d.tag;
              if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                var p = d.alternate;
                p
                  ? ((d.updateQueue = p.updateQueue),
                    (d.memoizedState = p.memoizedState),
                    (d.lanes = p.lanes))
                  : ((d.updateQueue = null), (d.memoizedState = null));
              }
              var m = Ls(s);
              if (m !== null) {
                ((m.flags &= -257),
                  Rs(m, s, c, o, t),
                  m.mode & 1 && Is(o, u, t),
                  (t = m),
                  (l = u));
                var h = t.updateQueue;
                if (h === null) {
                  var g = new Set();
                  (g.add(l), (t.updateQueue = g));
                } else h.add(l);
                break a;
              }
              if (!(t & 1)) {
                (Is(o, u, t), Nl());
                break a;
              }
              l = Error(r(426));
            } else if (V && c.mode & 1) {
              var _ = Ls(s);
              if (_ !== null) {
                (!(_.flags & 65536) && (_.flags |= 256),
                  Rs(_, s, c, o, t),
                  La(As(l, c)));
                break a;
              }
            }
            ((o = l = As(l, c)),
              $c !== 4 && ($c = 2),
              il === null ? (il = [o]) : il.push(o),
              (o = s));
            do {
              switch (o.tag) {
                case 3:
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var v = Ps(o, l, t);
                  uo(o, v);
                  break a;
                case 1:
                  c = l;
                  var y = o.type,
                    b = o.stateNode;
                  if (
                    !(o.flags & 128) &&
                    (typeof y.getDerivedStateFromError == `function` ||
                      (b !== null &&
                        typeof b.componentDidCatch == `function` &&
                        (q === null || !q.has(b))))
                  ) {
                    ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                    var x = Fs(o, c, t);
                    uo(o, x);
                    break a;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          Rl(n);
        } catch (e) {
          ((t = e), Yc === n && n !== null && (Yc = n = n.return));
          continue;
        }
        break;
      } while (1);
    }
    function Ml() {
      var e = Gc.current;
      return ((Gc.current = ys), e === null ? ys : e);
    }
    function Nl() {
      (($c === 0 || $c === 3 || $c === 2) && ($c = 4),
        Jc === null || (!(tl & 268435455) && !(nl & 268435455)) || El(Jc, Xc));
    }
    function Pl(e, t) {
      var n = K;
      K |= 2;
      var i = Ml();
      (Jc !== e || Xc !== t) && ((cl = null), J(e, t));
      do
        try {
          Fl();
          break;
        } catch (t) {
          jl(e, t);
        }
      while (1);
      if ((Ya(), (K = n), (Gc.current = i), Yc !== null)) throw Error(r(261));
      return ((Jc = null), (Xc = 0), $c);
    }
    function Fl() {
      for (; Yc !== null;) Ll(Yc);
    }
    function Il() {
      for (; Yc !== null && !xt();) Ll(Yc);
    }
    function Ll(e) {
      var t = ql(e.alternate, e, Zc);
      ((e.memoizedProps = e.pendingProps),
        t === null ? Rl(e) : (Yc = t),
        (Kc.current = null));
    }
    function Rl(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((n = gc(n, t)), n !== null)) {
            ((n.flags &= 32767), (Yc = n));
            return;
          }
          if (e !== null)
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            (($c = 6), (Yc = null));
            return;
          }
        } else if (((n = hc(n, t, Zc)), n !== null)) {
          Yc = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          Yc = t;
          return;
        }
        Yc = t = e;
      } while (t !== null);
      $c === 0 && ($c = 5);
    }
    function zl(e, t, n) {
      var r = N,
        i = qc.transition;
      try {
        ((qc.transition = null), (N = 1), Bl(e, t, n, r));
      } finally {
        ((qc.transition = i), (N = r));
      }
      return null;
    }
    function Bl(e, t, n, i) {
      do Vl();
      while (fl !== null);
      if (K & 6) throw Error(r(327));
      n = e.finishedWork;
      var a = e.finishedLanes;
      if (n === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(r(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var o = n.lanes | n.childLanes;
      if (
        (qt(e, o),
        e === Jc && ((Yc = Jc = null), (Xc = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
          dl ||
          ((dl = !0),
          Jl(Dt, function () {
            return (Vl(), null);
          })),
        (o = !!(n.flags & 15990)),
        n.subtreeFlags & 15990 || o)
      ) {
        ((o = qc.transition), (qc.transition = null));
        var s = N;
        N = 1;
        var c = K;
        ((K |= 4),
          (Kc.current = null),
          Cc(e, n),
          Rc(n, e),
          Vr(Ei),
          (bn = !!Ti),
          (Ei = Ti = null),
          (e.current = n),
          Bc(n, e, a),
          St(),
          (K = c),
          (N = s),
          (qc.transition = o));
      } else e.current = n;
      if (
        (dl && ((dl = !1), (fl = e), (pl = a)),
        (o = e.pendingLanes),
        o === 0 && (q = null),
        Mt(n.stateNode, i),
        xl(e, Ct()),
        t !== null)
      )
        for (i = e.onRecoverableError, n = 0; n < t.length; n++)
          ((a = t[n]),
            i(a.value, { componentStack: a.stack, digest: a.digest }));
      if (ll) throw ((ll = !1), (e = ul), (ul = null), e);
      return (
        pl & 1 && e.tag !== 0 && Vl(),
        (o = e.pendingLanes),
        o & 1 ? (e === hl ? ml++ : ((ml = 0), (hl = e))) : (ml = 0),
        fa(),
        null
      );
    }
    function Vl() {
      if (fl !== null) {
        var e = Yt(pl),
          t = qc.transition,
          n = N;
        try {
          if (((qc.transition = null), (N = 16 > e ? 16 : e), fl === null))
            var i = !1;
          else {
            if (((e = fl), (fl = null), (pl = 0), K & 6)) throw Error(r(331));
            var a = K;
            for (K |= 4, W = e.current; W !== null;) {
              var o = W,
                s = o.child;
              if (W.flags & 16) {
                var c = o.deletions;
                if (c !== null) {
                  for (var l = 0; l < c.length; l++) {
                    var u = c[l];
                    for (W = u; W !== null;) {
                      var d = W;
                      switch (d.tag) {
                        case 0:
                        case 11:
                        case 15:
                          wc(8, d, o);
                      }
                      var f = d.child;
                      if (f !== null) ((f.return = d), (W = f));
                      else
                        for (; W !== null;) {
                          d = W;
                          var p = d.sibling,
                            m = d.return;
                          if ((Dc(d), d === u)) {
                            W = null;
                            break;
                          }
                          if (p !== null) {
                            ((p.return = m), (W = p));
                            break;
                          }
                          W = m;
                        }
                    }
                  }
                  var h = o.alternate;
                  if (h !== null) {
                    var g = h.child;
                    if (g !== null) {
                      h.child = null;
                      do {
                        var _ = g.sibling;
                        ((g.sibling = null), (g = _));
                      } while (g !== null);
                    }
                  }
                  W = o;
                }
              }
              if (o.subtreeFlags & 2064 && s !== null)
                ((s.return = o), (W = s));
              else
                b: for (; W !== null;) {
                  if (((o = W), o.flags & 2048))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wc(9, o, o.return);
                    }
                  var v = o.sibling;
                  if (v !== null) {
                    ((v.return = o.return), (W = v));
                    break b;
                  }
                  W = o.return;
                }
            }
            var y = e.current;
            for (W = y; W !== null;) {
              s = W;
              var b = s.child;
              if (s.subtreeFlags & 2064 && b !== null)
                ((b.return = s), (W = b));
              else
                b: for (s = y; W !== null;) {
                  if (((c = W), c.flags & 2048))
                    try {
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Tc(9, c);
                      }
                    } catch (e) {
                      Y(c, c.return, e);
                    }
                  if (c === s) {
                    W = null;
                    break b;
                  }
                  var x = c.sibling;
                  if (x !== null) {
                    ((x.return = c.return), (W = x));
                    break b;
                  }
                  W = c.return;
                }
            }
            if (
              ((K = a),
              fa(),
              jt && typeof jt.onPostCommitFiberRoot == `function`)
            )
              try {
                jt.onPostCommitFiberRoot(At, e);
              } catch {}
            i = !0;
          }
          return i;
        } finally {
          ((N = n), (qc.transition = t));
        }
      }
      return !1;
    }
    function Hl(e, t, n) {
      ((t = As(n, t)),
        (t = Ps(e, t, 1)),
        (e = co(e, t, 1)),
        (t = vl()),
        e !== null && (Kt(e, 1, t), xl(e, t)));
    }
    function Y(e, t, n) {
      if (e.tag === 3) Hl(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Hl(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (q === null || !q.has(r)))
            ) {
              ((e = As(n, e)),
                (e = Fs(t, e, 1)),
                (t = co(t, e, 1)),
                (e = vl()),
                t !== null && (Kt(t, 1, e), xl(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Ul(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (t = vl()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Jc === e &&
          (Xc & n) === n &&
          ($c === 4 || ($c === 3 && (Xc & 130023424) === Xc && 500 > Ct() - ol)
            ? J(e, 0)
            : (rl |= n)),
        xl(e, t));
    }
    function Wl(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = Rt), (Rt <<= 1), !(Rt & 130023424) && (Rt = 4194304))
          : (t = 1));
      var n = vl();
      ((e = ro(e, t)), e !== null && (Kt(e, t, n), xl(e, n)));
    }
    function Gl(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Wl(e, n));
    }
    function Kl(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        default:
          throw Error(r(314));
      }
      (i !== null && i.delete(t), Wl(e, n));
    }
    var ql = function (e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qi.current) Bs = !0;
        else {
          if ((e.lanes & n) === 0 && !(t.flags & 128))
            return ((Bs = !1), lc(e, t, n));
          Bs = !!(e.flags & 131072);
        }
      else ((Bs = !1), V && t.flags & 1048576 && Ca(t, ga, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var i = t.type;
          (sc(e, t), (e = t.pendingProps));
          var a = ea(t, Zi.current);
          (Qa(t, n), (a = Lo(null, t, i, e, a, n)));
          var o = Ro();
          return (
            (t.flags |= 1),
            typeof a == `object` &&
            a &&
            typeof a.render == `function` &&
            a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ta(i) ? ((o = !0), aa(t)) : (o = !1),
                (t.memoizedState =
                  a.state !== null && a.state !== void 0 ? a.state : null),
                ao(t),
                (a.updater = Ts),
                (t.stateNode = a),
                (a._reactInternals = t),
                ks(t, i, e, n),
                (t = Ys(null, t, i, !0, o, n)))
              : ((t.tag = 0),
                V && o && wa(t),
                Vs(null, t, a, n),
                (t = t.child)),
            t
          );
        case 16:
          i = t.elementType;
          a: {
            switch (
              (sc(e, t),
              (e = t.pendingProps),
              (a = i._init),
              (i = a(i._payload)),
              (t.type = i),
              (a = t.tag = Ql(i)),
              (e = Cs(i, e)),
              a)
            ) {
              case 0:
                t = qs(null, t, i, e, n);
                break a;
              case 1:
                t = Js(null, t, i, e, n);
                break a;
              case 11:
                t = Hs(null, t, i, e, n);
                break a;
              case 14:
                t = Us(null, t, i, Cs(i.type, e), n);
                break a;
            }
            throw Error(r(306, i, ``));
          }
          return t;
        case 0:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : Cs(i, a)),
            qs(e, t, i, a, n)
          );
        case 1:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : Cs(i, a)),
            Js(e, t, i, a, n)
          );
        case 3:
          a: {
            if ((Xs(t), e === null)) throw Error(r(387));
            ((i = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              oo(e, t),
              fo(t, i, null, n));
            var s = t.memoizedState;
            if (((i = s.element), o.isDehydrated))
              if (
                ((o = {
                  element: i,
                  isDehydrated: !1,
                  cache: s.cache,
                  pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                  transitions: s.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                ((a = As(Error(r(423)), t)), (t = Zs(e, t, i, n, a)));
                break a;
              } else if (i !== a) {
                ((a = As(Error(r(424)), t)), (t = Zs(e, t, i, n, a)));
                break a;
              } else
                for (
                  Da = Pi(t.stateNode.containerInfo.firstChild),
                    Ea = t,
                    V = !0,
                    Oa = null,
                    n = Wa(t, null, i, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            else {
              if ((Ia(), i === a)) {
                t = cc(e, t, n);
                break a;
              }
              Vs(e, t, i, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            xo(t),
            e === null && Ma(t),
            (i = t.type),
            (a = t.pendingProps),
            (o = e === null ? null : e.memoizedProps),
            (s = a.children),
            Di(i, a) ? (s = null) : o !== null && Di(i, o) && (t.flags |= 32),
            Ks(e, t),
            Vs(e, t, s, n),
            t.child
          );
        case 6:
          return (e === null && Ma(t), null);
        case 13:
          return ec(e, t, n);
        case 4:
          return (
            yo(t, t.stateNode.containerInfo),
            (i = t.pendingProps),
            e === null ? (t.child = Ua(t, null, i, n)) : Vs(e, t, i, n),
            t.child
          );
        case 11:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : Cs(i, a)),
            Hs(e, t, i, a, n)
          );
        case 7:
          return (Vs(e, t, t.pendingProps, n), t.child);
        case 8:
          return (Vs(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Vs(e, t, t.pendingProps.children, n), t.child);
        case 10:
          a: {
            if (
              ((i = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (s = a.value),
              B(Ga, i._currentValue),
              (i._currentValue = s),
              o !== null)
            )
              if (Fr(o.value, s)) {
                if (o.children === a.children && !Qi.current) {
                  t = cc(e, t, n);
                  break a;
                }
              } else
                for (o = t.child, o !== null && (o.return = t); o !== null;) {
                  var c = o.dependencies;
                  if (c !== null) {
                    s = o.child;
                    for (var l = c.firstContext; l !== null;) {
                      if (l.context === i) {
                        if (o.tag === 1) {
                          ((l = so(-1, n & -n)), (l.tag = 2));
                          var u = o.updateQueue;
                          if (u !== null) {
                            u = u.shared;
                            var d = u.pending;
                            (d === null
                              ? (l.next = l)
                              : ((l.next = d.next), (d.next = l)),
                              (u.pending = l));
                          }
                        }
                        ((o.lanes |= n),
                          (l = o.alternate),
                          l !== null && (l.lanes |= n),
                          Za(o.return, n, t),
                          (c.lanes |= n));
                        break;
                      }
                      l = l.next;
                    }
                  } else if (o.tag === 10)
                    s = o.type === t.type ? null : o.child;
                  else if (o.tag === 18) {
                    if (((s = o.return), s === null)) throw Error(r(341));
                    ((s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      Za(s, n, t),
                      (s = o.sibling));
                  } else s = o.child;
                  if (s !== null) s.return = o;
                  else
                    for (s = o; s !== null;) {
                      if (s === t) {
                        s = null;
                        break;
                      }
                      if (((o = s.sibling), o !== null)) {
                        ((o.return = s.return), (s = o));
                        break;
                      }
                      s = s.return;
                    }
                  o = s;
                }
            (Vs(e, t, a.children, n), (t = t.child));
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (i = t.pendingProps.children),
            Qa(t, n),
            (a = $a(a)),
            (i = i(a)),
            (t.flags |= 1),
            Vs(e, t, i, n),
            t.child
          );
        case 14:
          return (
            (i = t.type),
            (a = Cs(i, t.pendingProps)),
            (a = Cs(i.type, a)),
            Us(e, t, i, a, n)
          );
        case 15:
          return Ws(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : Cs(i, a)),
            sc(e, t),
            (t.tag = 1),
            ta(i) ? ((e = !0), aa(t)) : (e = !1),
            Qa(t, n),
            Ds(t, i, a),
            ks(t, i, a, n),
            Ys(null, t, i, !0, e, n)
          );
        case 19:
          return oc(e, t, n);
        case 22:
          return Gs(e, t, n);
      }
      throw Error(r(156, t.tag));
    };
    function Jl(e, t) {
      return yt(e, t);
    }
    function Yl(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Xl(e, t, n, r) {
      return new Yl(e, t, n, r);
    }
    function Zl(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Ql(e) {
      if (typeof e == `function`) return +!!Zl(e);
      if (e != null) {
        if (((e = e.$$typeof), e === D)) return 11;
        if (e === k) return 14;
      }
      return 2;
    }
    function $l(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Xl(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function eu(e, t, n, i, a, o) {
      var s = 2;
      if (((i = e), typeof e == `function`)) Zl(e) && (s = 1);
      else if (typeof e == `string`) s = 5;
      else
        a: switch (e) {
          case ee:
            return tu(n.children, a, o, t);
          case te:
            ((s = 8), (a |= 8));
            break;
          case ne:
            return (
              (e = Xl(12, n, t, a | 2)),
              (e.elementType = ne),
              (e.lanes = o),
              e
            );
          case O:
            return (
              (e = Xl(13, n, t, a)),
              (e.elementType = O),
              (e.lanes = o),
              e
            );
          case ie:
            return (
              (e = Xl(19, n, t, a)),
              (e.elementType = ie),
              (e.lanes = o),
              e
            );
          case A:
            return nu(n, a, o, t);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case re:
                  s = 10;
                  break a;
                case E:
                  s = 9;
                  break a;
                case D:
                  s = 11;
                  break a;
                case k:
                  s = 14;
                  break a;
                case ae:
                  ((s = 16), (i = null));
                  break a;
              }
            throw Error(r(130, e == null ? e : typeof e, ``));
        }
      return (
        (t = Xl(s, n, t, a)),
        (t.elementType = e),
        (t.type = i),
        (t.lanes = o),
        t
      );
    }
    function tu(e, t, n, r) {
      return ((e = Xl(7, e, r, t)), (e.lanes = n), e);
    }
    function nu(e, t, n, r) {
      return (
        (e = Xl(22, e, r, t)),
        (e.elementType = A),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function ru(e, t, n) {
      return ((e = Xl(6, e, null, t)), (e.lanes = n), e);
    }
    function iu(e, t, n) {
      return (
        (t = Xl(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function au(e, t, n, r, i) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Gt(0)),
        (this.expirationTimes = Gt(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Gt(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null));
    }
    function ou(e, t, n, r, i, a, o, s, c) {
      return (
        (e = new au(e, t, n, s, c)),
        t === 1 ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = Xl(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        ao(a),
        e
      );
    }
    function su(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: T,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function cu(e) {
      if (!e) return Xi;
      e = e._reactInternals;
      a: {
        if (pt(e) !== e || e.tag !== 1) throw Error(r(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break a;
            case 1:
              if (ta(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(r(171));
      }
      if (e.tag === 1) {
        var n = e.type;
        if (ta(n)) return ia(e, n, t);
      }
      return t;
    }
    function lu(e, t, n, r, i, a, o, s, c) {
      return (
        (e = ou(n, r, !0, e, i, a, o, s, c)),
        (e.context = cu(null)),
        (n = e.current),
        (r = vl()),
        (i = yl(n)),
        (a = so(r, i)),
        (a.callback = t ?? null),
        co(n, a, i),
        (e.current.lanes = i),
        Kt(e, i, r),
        xl(e, r),
        e
      );
    }
    function uu(e, t, n, r) {
      var i = t.current,
        a = vl(),
        o = yl(i);
      return (
        (n = cu(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = so(a, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = co(i, t, o)),
        e !== null && (bl(e, i, o, a), lo(e, i, o)),
        o
      );
    }
    function du(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function fu(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function pu(e, t) {
      (fu(e, t), (e = e.alternate) && fu(e, t));
    }
    function mu() {
      return null;
    }
    var hu =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            console.error(e);
          };
    function gu(e) {
      this._internalRoot = e;
    }
    ((_u.prototype.render = gu.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(r(409));
        uu(e, t, null, null);
      }),
      (_u.prototype.unmount = gu.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (kl(function () {
              uu(null, e, null, null);
            }),
              (t[zi] = null));
          }
        }));
    function _u(e) {
      this._internalRoot = e;
    }
    _u.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = $t();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
        (cn.splice(n, 0, e), n === 0 && pn(e));
      }
    };
    function vu(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function yu(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `))
      );
    }
    function bu() {}
    function xu(e, t, n, r, i) {
      if (i) {
        if (typeof r == `function`) {
          var a = r;
          r = function () {
            var e = du(o);
            a.call(e);
          };
        }
        var o = lu(t, r, e, 0, null, !1, !1, ``, bu);
        return (
          (e._reactRootContainer = o),
          (e[zi] = o.current),
          pi(e.nodeType === 8 ? e.parentNode : e),
          kl(),
          o
        );
      }
      for (; (i = e.lastChild);) e.removeChild(i);
      if (typeof r == `function`) {
        var s = r;
        r = function () {
          var e = du(c);
          s.call(e);
        };
      }
      var c = ou(e, 0, !1, null, null, !1, !1, ``, bu);
      return (
        (e._reactRootContainer = c),
        (e[zi] = c.current),
        pi(e.nodeType === 8 ? e.parentNode : e),
        kl(function () {
          uu(t, c, n, r);
        }),
        c
      );
    }
    function Su(e, t, n, r, i) {
      var a = n._reactRootContainer;
      if (a) {
        var o = a;
        if (typeof i == `function`) {
          var s = i;
          i = function () {
            var e = du(o);
            s.call(e);
          };
        }
        uu(t, o, e, i);
      } else o = xu(n, t, e, i, r);
      return du(o);
    }
    ((Xt = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = zt(t.pendingLanes);
            n !== 0 &&
              (Jt(t, n | 1),
              xl(t, Ct()),
              !(K & 6) && ((sl = Ct() + 500), fa()));
          }
          break;
        case 13:
          (kl(function () {
            var t = ro(e, 1);
            t !== null && bl(t, e, 1, vl());
          }),
            pu(e, 1));
      }
    }),
      (Zt = function (e) {
        if (e.tag === 13) {
          var t = ro(e, 134217728);
          (t !== null && bl(t, e, 134217728, vl()), pu(e, 134217728));
        }
      }),
      (Qt = function (e) {
        if (e.tag === 13) {
          var t = yl(e),
            n = ro(e, t);
          (n !== null && bl(n, e, t, vl()), pu(e, t));
        }
      }),
      ($t = function () {
        return N;
      }),
      (en = function (e, t) {
        var n = N;
        try {
          return ((N = e), t());
        } finally {
          N = n;
        }
      }),
      (Ke = function (e, t, n) {
        switch (t) {
          case `input`:
            if ((Ce(e, n), (t = n.name), n.type === `radio` && t != null)) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name=` + JSON.stringify(`` + t) + `][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var i = n[t];
                if (i !== e && i.form === e.form) {
                  var a = Ki(i);
                  if (!a) throw Error(r(90));
                  (ve(i), Ce(i, a));
                }
              }
            }
            break;
          case `textarea`:
            Ae(e, n);
            break;
          case `select`:
            ((t = n.value), t != null && De(e, !!n.multiple, t, !1));
        }
      }),
      (Qe = Ol),
      ($e = kl));
    var Cu = { usingClientEntryPoint: !1, Events: [Wi, Gi, Ki, Xe, Ze, Ol] },
      wu = {
        findFiberByHostInstance: Ui,
        bundleType: 0,
        version: `18.3.1`,
        rendererPackageName: `react-dom`,
      },
      Tu = {
        bundleType: wu.bundleType,
        version: wu.version,
        rendererPackageName: wu.rendererPackageName,
        rendererConfig: wu.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: C.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = _t(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: wu.findFiberByHostInstance || mu,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: `18.3.1-next-f1338f8080-20240426`,
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Eu.isDisabled && Eu.supportsFiber)
        try {
          ((At = Eu.inject(Tu)), (jt = Eu));
        } catch {}
    }
    ((e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cu),
      (e.createPortal = function (e, t) {
        var n =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!vu(t)) throw Error(r(200));
        return su(e, t, null, n);
      }),
      (e.createRoot = function (e, t) {
        if (!vu(e)) throw Error(r(299));
        var n = !1,
          i = ``,
          a = hu;
        return (
          t != null &&
            (!0 === t.unstable_strictMode && (n = !0),
            t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
          (t = ou(e, 1, !1, null, null, n, !1, i, a)),
          (e[zi] = t.current),
          pi(e.nodeType === 8 ? e.parentNode : e),
          new gu(t)
        );
      }),
      (e.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == `function`
            ? Error(r(188))
            : ((e = Object.keys(e).join(`,`)), Error(r(268, e)));
        return ((e = _t(t)), (e = e === null ? null : e.stateNode), e);
      }),
      (e.flushSync = function (e) {
        return kl(e);
      }),
      (e.hydrate = function (e, t, n) {
        if (!yu(t)) throw Error(r(200));
        return Su(null, e, t, !0, n);
      }),
      (e.hydrateRoot = function (e, t, n) {
        if (!vu(e)) throw Error(r(405));
        var i = (n != null && n.hydratedSources) || null,
          a = !1,
          o = ``,
          s = hu;
        if (
          (n != null &&
            (!0 === n.unstable_strictMode && (a = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
          (t = lu(t, null, e, 1, n ?? null, a, !1, o, s)),
          (e[zi] = t.current),
          pi(e),
          i)
        )
          for (e = 0; e < i.length; e++)
            ((n = i[e]),
              (a = n._getVersion),
              (a = a(n._source)),
              t.mutableSourceEagerHydrationData == null
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a));
        return new _u(t);
      }),
      (e.render = function (e, t, n) {
        if (!yu(t)) throw Error(r(200));
        return Su(null, e, t, !1, n);
      }),
      (e.unmountComponentAtNode = function (e) {
        if (!yu(e)) throw Error(r(40));
        return e._reactRootContainer
          ? (kl(function () {
              Su(null, null, e, !1, function () {
                ((e._reactRootContainer = null), (e[zi] = null));
              });
            }),
            !0)
          : !1;
      }),
      (e.unstable_batchedUpdates = Ol),
      (e.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
        if (!yu(n)) throw Error(r(200));
        if (e == null || e._reactInternals === void 0) throw Error(r(38));
        return Su(e, t, n, !1, i);
      }),
      (e.version = `18.3.1-next-f1338f8080-20240426`));
  }),
  _ = s((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = g()));
  }),
  v = u(
    s((e) => {
      var t = _();
      ((e.createRoot = t.createRoot), (e.hydrateRoot = t.hydrateRoot));
    })(),
    1,
  ),
  y = u(p(), 1),
  b = 20,
  x = 1e6,
  S = {
    ADD_TOAST: `ADD_TOAST`,
    UPDATE_TOAST: `UPDATE_TOAST`,
    DISMISS_TOAST: `DISMISS_TOAST`,
    REMOVE_TOAST: `REMOVE_TOAST`,
  },
  C = 0;
function w() {
  return ((C = (C + 1) % Number.MAX_VALUE), C.toString());
}
var T = new Map(),
  ee = (e) => {
    if (T.has(e)) return;
    let t = setTimeout(() => {
      (T.delete(e), E({ type: S.REMOVE_TOAST, toastId: e }));
    }, x);
    T.set(e, t);
  },
  te = (e, t) => {
    switch (t.type) {
      case S.ADD_TOAST:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, b) };
      case S.UPDATE_TOAST:
        return {
          ...e,
          toasts: e.toasts.map((e) =>
            e.id === t.toast.id ? { ...e, ...t.toast } : e,
          ),
        };
      case S.DISMISS_TOAST: {
        let { toastId: n } = t;
        return (
          n
            ? ee(n)
            : e.toasts.forEach((e) => {
                ee(e.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((e) =>
              e.id === n || n === void 0 ? { ...e, open: !1 } : e,
            ),
          }
        );
      }
      case S.REMOVE_TOAST:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
    }
  },
  ne = [],
  re = { toasts: [] };
function E(e) {
  ((re = te(re, e)),
    ne.forEach((e) => {
      e(re);
    }));
}
function D({ ...e }) {
  let t = w(),
    n = (e) => E({ type: S.UPDATE_TOAST, toast: { ...e, id: t } }),
    r = () => E({ type: S.DISMISS_TOAST, toastId: t });
  return (
    E({
      type: S.ADD_TOAST,
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (e) => {
          e || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function O() {
  let [e, t] = (0, y.useState)(re);
  return (
    (0, y.useEffect)(
      () => (
        ne.push(t),
        () => {
          let e = ne.indexOf(t);
          e > -1 && ne.splice(e, 1);
        }
      ),
      [e],
    ),
    { ...e, toast: D, dismiss: (e) => E({ type: S.DISMISS_TOAST, toastId: e }) }
  );
}
var ie = u(_(), 1);
typeof window < `u` && window.document && window.document.createElement;
function k(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e?.(r), n === !1 || !r.defaultPrevented)) return t?.(r);
  };
}
function ae(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function A(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = ae(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : ae(e[t], null);
        }
      };
  };
}
function oe(...e) {
  return y.useCallback(A(...e), e);
}
var se = s((e) => {
    var t = p(),
      n = Symbol.for(`react.element`),
      r = Symbol.for(`react.fragment`),
      i = Object.prototype.hasOwnProperty,
      a =
        t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      o = { key: !0, ref: !0, __self: !0, __source: !0 };
    function s(e, t, r) {
      var s,
        c = {},
        l = null,
        u = null;
      for (s in (r !== void 0 && (l = `` + r),
      t.key !== void 0 && (l = `` + t.key),
      t.ref !== void 0 && (u = t.ref),
      t))
        i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
      if (e && e.defaultProps)
        for (s in ((t = e.defaultProps), t)) c[s] === void 0 && (c[s] = t[s]);
      return {
        $$typeof: n,
        type: e,
        key: l,
        ref: u,
        props: c,
        _owner: a.current,
      };
    }
    ((e.Fragment = r), (e.jsx = s), (e.jsxs = s));
  }),
  j = s((e, t) => {
    t.exports = se();
  })();
function ce(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = y.createContext(r),
      a = n.length;
    n = [...n, r];
    let o = (t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = y.useMemo(() => o, Object.values(o));
      return (0, j.jsx)(s.Provider, { value: c, children: r });
    };
    o.displayName = t + `Provider`;
    function s(n, o) {
      let s = o?.[e]?.[a] || i,
        c = y.useContext(s);
      if (c) return c;
      if (r !== void 0) return r;
      throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return [o, s];
  }
  let i = () => {
    let t = n.map((e) => y.createContext(e));
    return function (n) {
      let r = n?.[e] || t;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    };
  };
  return ((i.scopeName = e), [r, M(i, ...t)]);
}
function M(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = () => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function le(e) {
  let t = ue(e),
    n = y.forwardRef((e, n) => {
      let { children: r, ...i } = e,
        a = y.Children.toArray(r),
        o = a.find(fe);
      if (o) {
        let e = o.props.children,
          r = a.map((t) =>
            t === o
              ? y.Children.count(e) > 1
                ? y.Children.only(null)
                : y.isValidElement(e)
                  ? e.props.children
                  : null
              : t,
          );
        return (0, j.jsx)(t, {
          ...i,
          ref: n,
          children: y.isValidElement(e) ? y.cloneElement(e, void 0, r) : null,
        });
      }
      return (0, j.jsx)(t, { ...i, ref: n, children: r });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function ue(e) {
  let t = y.forwardRef((e, t) => {
    let { children: n, ...r } = e;
    if (y.isValidElement(n)) {
      let e = me(n),
        i = pe(r, n.props);
      return (
        n.type !== y.Fragment && (i.ref = t ? A(t, e) : e),
        y.cloneElement(n, i)
      );
    }
    return y.Children.count(n) > 1 ? y.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var de = Symbol(`radix.slottable`);
function fe(e) {
  return (
    y.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === de
  );
}
function pe(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
function me(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function he(e) {
  let t = e + `CollectionProvider`,
    [n, r] = ce(t),
    [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (e) => {
      let { scope: t, children: n } = e,
        r = y.useRef(null),
        a = y.useRef(new Map()).current;
      return (0, j.jsx)(i, {
        scope: t,
        itemMap: a,
        collectionRef: r,
        children: n,
      });
    };
  o.displayName = t;
  let s = e + `CollectionSlot`,
    c = le(s),
    l = y.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = oe(t, a(s, n).collectionRef);
      return (0, j.jsx)(c, { ref: i, children: r });
    });
  l.displayName = s;
  let u = e + `CollectionItemSlot`,
    d = `data-radix-collection-item`,
    f = le(u),
    p = y.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = y.useRef(null),
        s = oe(t, o),
        c = a(u, n);
      return (
        y.useEffect(
          () => (
            c.itemMap.set(o, { ref: o, ...i }),
            () => void c.itemMap.delete(o)
          ),
        ),
        (0, j.jsx)(f, { [d]: ``, ref: s, children: r })
      );
    });
  p.displayName = u;
  function m(t) {
    let n = a(e + `CollectionConsumer`, t);
    return y.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${d}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return [{ Provider: o, Slot: l, ItemSlot: p }, m, r];
}
function ge(e) {
  let t = _e(e),
    n = y.forwardRef((e, n) => {
      let { children: r, ...i } = e,
        a = y.Children.toArray(r),
        o = a.find(ye);
      if (o) {
        let e = o.props.children,
          r = a.map((t) =>
            t === o
              ? y.Children.count(e) > 1
                ? y.Children.only(null)
                : y.isValidElement(e)
                  ? e.props.children
                  : null
              : t,
          );
        return (0, j.jsx)(t, {
          ...i,
          ref: n,
          children: y.isValidElement(e) ? y.cloneElement(e, void 0, r) : null,
        });
      }
      return (0, j.jsx)(t, { ...i, ref: n, children: r });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function _e(e) {
  let t = y.forwardRef((e, t) => {
    let { children: n, ...r } = e;
    if (y.isValidElement(n)) {
      let e = xe(n),
        i = be(r, n.props);
      return (
        n.type !== y.Fragment && (i.ref = t ? A(t, e) : e),
        y.cloneElement(n, i)
      );
    }
    return y.Children.count(n) > 1 ? y.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var ve = Symbol(`radix.slottable`);
function ye(e) {
  return (
    y.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === ve
  );
}
function be(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
function xe(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Se = [
  `a`,
  `button`,
  `div`,
  `form`,
  `h2`,
  `h3`,
  `img`,
  `input`,
  `label`,
  `li`,
  `nav`,
  `ol`,
  `p`,
  `select`,
  `span`,
  `svg`,
  `ul`,
].reduce((e, t) => {
  let n = ge(`Primitive.${t}`),
    r = y.forwardRef((e, r) => {
      let { asChild: i, ...a } = e,
        o = i ? n : t;
      return (
        typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
        (0, j.jsx)(o, { ...a, ref: r })
      );
    });
  return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
}, {});
function Ce(e, t) {
  e && ie.flushSync(() => e.dispatchEvent(t));
}
function we(e) {
  let t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    y.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
function Te(e, t = globalThis?.document) {
  let n = we(e);
  y.useEffect(() => {
    let e = (e) => {
      e.key === `Escape` && n(e);
    };
    return (
      t.addEventListener(`keydown`, e, { capture: !0 }),
      () => t.removeEventListener(`keydown`, e, { capture: !0 })
    );
  }, [n, t]);
}
var Ee = `DismissableLayer`,
  De = `dismissableLayer.update`,
  Oe = `dismissableLayer.pointerDownOutside`,
  ke = `dismissableLayer.focusOutside`,
  Ae,
  je = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Me = y.forwardRef((e, t) => {
    let {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: a,
        onInteractOutside: o,
        onDismiss: s,
        ...c
      } = e,
      l = y.useContext(je),
      [u, d] = y.useState(null),
      f = u?.ownerDocument ?? globalThis?.document,
      [, p] = y.useState({}),
      m = oe(t, (e) => d(e)),
      h = Array.from(l.layers),
      [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      _ = h.indexOf(g),
      v = u ? h.indexOf(u) : -1,
      b = l.layersWithOutsidePointerEventsDisabled.size > 0,
      x = v >= _,
      S = Fe((e) => {
        let t = e.target,
          n = [...l.branches].some((e) => e.contains(t));
        !x || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
      }, f),
      C = Ie((e) => {
        let t = e.target;
        [...l.branches].some((e) => e.contains(t)) ||
          (a?.(e), o?.(e), e.defaultPrevented || s?.());
      }, f);
    return (
      Te((e) => {
        v === l.layers.size - 1 &&
          (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
      }, f),
      y.useEffect(() => {
        if (u)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ae = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = `none`)),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            Le(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Ae);
            }
          );
      }, [u, f, n, l]),
      y.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            Le());
        },
        [u, l],
      ),
      y.useEffect(() => {
        let e = () => p({});
        return (
          document.addEventListener(De, e),
          () => document.removeEventListener(De, e)
        );
      }, []),
      (0, j.jsx)(Se.div, {
        ...c,
        ref: m,
        style: {
          pointerEvents: b ? (x ? `auto` : `none`) : void 0,
          ...e.style,
        },
        onFocusCapture: k(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: k(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: k(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
Me.displayName = Ee;
var Ne = `DismissableLayerBranch`,
  Pe = y.forwardRef((e, t) => {
    let n = y.useContext(je),
      r = y.useRef(null),
      i = oe(t, r);
    return (
      y.useEffect(() => {
        let e = r.current;
        if (e)
          return (
            n.branches.add(e),
            () => {
              n.branches.delete(e);
            }
          );
      }, [n.branches]),
      (0, j.jsx)(Se.div, { ...e, ref: i })
    );
  });
Pe.displayName = Ne;
function Fe(e, t = globalThis?.document) {
  let n = we(e),
    r = y.useRef(!1),
    i = y.useRef(() => {});
  return (
    y.useEffect(() => {
      let e = (e) => {
          if (e.target && !r.current) {
            let r = function () {
                Re(Oe, n, a, { discrete: !0 });
              },
              a = { originalEvent: e };
            e.pointerType === `touch`
              ? (t.removeEventListener(`click`, i.current),
                (i.current = r),
                t.addEventListener(`click`, i.current, { once: !0 }))
              : r();
          } else t.removeEventListener(`click`, i.current);
          r.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener(`pointerdown`, e);
        }, 0);
      return () => {
        (window.clearTimeout(a),
          t.removeEventListener(`pointerdown`, e),
          t.removeEventListener(`click`, i.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Ie(e, t = globalThis?.document) {
  let n = we(e),
    r = y.useRef(!1);
  return (
    y.useEffect(() => {
      let e = (e) => {
        e.target &&
          !r.current &&
          Re(ke, n, { originalEvent: e }, { discrete: !1 });
      };
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Le() {
  let e = new CustomEvent(De);
  document.dispatchEvent(e);
}
function Re(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? Ce(i, a) : i.dispatchEvent(a));
}
var ze = Me,
  Be = Pe,
  Ve = globalThis?.document ? y.useLayoutEffect : () => {},
  He = `Portal`,
  Ue = y.forwardRef((e, t) => {
    let { container: n, ...r } = e,
      [i, a] = y.useState(!1);
    Ve(() => a(!0), []);
    let o = n || (i && globalThis?.document?.body);
    return o ? ie.createPortal((0, j.jsx)(Se.div, { ...r, ref: t }), o) : null;
  });
Ue.displayName = He;
function We(e, t) {
  return y.useReducer((e, n) => t[e][n] ?? e, e);
}
var Ge = (e) => {
  let { present: t, children: n } = e,
    r = Ke(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : y.Children.only(n),
    a = oe(r.ref, Je(i));
  return typeof n == `function` || r.isPresent
    ? y.cloneElement(i, { ref: a })
    : null;
};
Ge.displayName = `Presence`;
function Ke(e) {
  let [t, n] = y.useState(),
    r = y.useRef(null),
    i = y.useRef(e),
    a = y.useRef(`none`),
    [o, s] = We(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    y.useEffect(() => {
      let e = qe(r.current);
      a.current = o === `mounted` ? e : `none`;
    }, [o]),
    Ve(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          o = qe(t);
        (e
          ? s(`MOUNT`)
          : o === `none` || t?.display === `none`
            ? s(`UNMOUNT`)
            : s(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e));
      }
    }, [e, s]),
    Ve(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = (a) => {
            let o = qe(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (s(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                })));
            }
          },
          c = (e) => {
            e.target === t && (a.current = qe(r.current));
          };
        return (
          t.addEventListener(`animationstart`, c),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, c),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o));
          }
        );
      }
      s(`ANIMATION_END`);
    }, [t, s]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(o),
      ref: y.useCallback((e) => {
        ((r.current = e ? getComputedStyle(e) : null), n(e));
      }, []),
    }
  );
}
function qe(e) {
  return e?.animationName || `none`;
}
function Je(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Ye = y.useInsertionEffect || Ve;
function Xe({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  let [i, a, o] = Ze({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    c = s ? e : i;
  {
    let t = y.useRef(e !== void 0);
    y.useEffect(() => {
      let e = t.current;
      (e !== s &&
        console.warn(
          `${r} is changing from ${e ? `controlled` : `uncontrolled`} to ${s ? `controlled` : `uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (t.current = s));
    }, [s, r]);
  }
  return [
    c,
    y.useCallback(
      (t) => {
        if (s) {
          let n = Qe(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o],
    ),
  ];
}
function Ze({ defaultProp: e, onChange: t }) {
  let [n, r] = y.useState(e),
    i = y.useRef(n),
    a = y.useRef(t);
  return (
    Ye(() => {
      a.current = t;
    }, [t]),
    y.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
function Qe(e) {
  return typeof e == `function`;
}
var $e = Object.freeze({
    position: `absolute`,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    wordWrap: `normal`,
  }),
  et = `VisuallyHidden`,
  tt = y.forwardRef((e, t) =>
    (0, j.jsx)(Se.span, { ...e, ref: t, style: { ...$e, ...e.style } }),
  );
tt.displayName = et;
var nt = `ToastProvider`,
  [rt, it, at] = he(`Toast`),
  [ot, st] = ce(`Toast`, [at]),
  [ct, lt] = ot(nt),
  ut = (e) => {
    let {
        __scopeToast: t,
        label: n = `Notification`,
        duration: r = 5e3,
        swipeDirection: i = `right`,
        swipeThreshold: a = 50,
        children: o,
      } = e,
      [s, c] = y.useState(null),
      [l, u] = y.useState(0),
      d = y.useRef(!1),
      f = y.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${nt}\`. Expected non-empty \`string\`.`,
        ),
      (0, j.jsx)(rt.Provider, {
        scope: t,
        children: (0, j.jsx)(ct, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: a,
          toastCount: l,
          viewport: s,
          onViewportChange: c,
          onToastAdd: y.useCallback(() => u((e) => e + 1), []),
          onToastRemove: y.useCallback(() => u((e) => e - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: o,
        }),
      })
    );
  };
ut.displayName = nt;
var dt = `ToastViewport`,
  ft = [`F8`],
  pt = `toast.viewportPause`,
  mt = `toast.viewportResume`,
  ht = y.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        hotkey: r = ft,
        label: i = `Notifications ({hotkey})`,
        ...a
      } = e,
      o = lt(dt, n),
      s = it(n),
      c = y.useRef(null),
      l = y.useRef(null),
      u = y.useRef(null),
      d = y.useRef(null),
      f = oe(t, d, o.onViewportChange),
      p = r.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      m = o.toastCount > 0;
    (y.useEffect(() => {
      let e = (e) => {
        r.length !== 0 &&
          r.every((t) => e[t] || e.code === t) &&
          d.current?.focus();
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [r]),
      y.useEffect(() => {
        let e = c.current,
          t = d.current;
        if (m && e && t) {
          let n = () => {
              if (!o.isClosePausedRef.current) {
                let e = new CustomEvent(pt);
                (t.dispatchEvent(e), (o.isClosePausedRef.current = !0));
              }
            },
            r = () => {
              if (o.isClosePausedRef.current) {
                let e = new CustomEvent(mt);
                (t.dispatchEvent(e), (o.isClosePausedRef.current = !1));
              }
            },
            i = (t) => {
              e.contains(t.relatedTarget) || r();
            },
            a = () => {
              e.contains(document.activeElement) || r();
            };
          return (
            e.addEventListener(`focusin`, n),
            e.addEventListener(`focusout`, i),
            e.addEventListener(`pointermove`, n),
            e.addEventListener(`pointerleave`, a),
            window.addEventListener(`blur`, n),
            window.addEventListener(`focus`, r),
            () => {
              (e.removeEventListener(`focusin`, n),
                e.removeEventListener(`focusout`, i),
                e.removeEventListener(`pointermove`, n),
                e.removeEventListener(`pointerleave`, a),
                window.removeEventListener(`blur`, n),
                window.removeEventListener(`focus`, r));
            }
          );
        }
      }, [m, o.isClosePausedRef]));
    let h = y.useCallback(
      ({ tabbingDirection: e }) => {
        let t = s().map((t) => {
          let n = t.ref.current,
            r = [n, ...Ht(n)];
          return e === `forwards` ? r : r.reverse();
        });
        return (e === `forwards` ? t.reverse() : t).flat();
      },
      [s],
    );
    return (
      y.useEffect(() => {
        let e = d.current;
        if (e) {
          let t = (t) => {
            let n = t.altKey || t.ctrlKey || t.metaKey;
            if (t.key === `Tab` && !n) {
              let n = document.activeElement,
                r = t.shiftKey;
              if (t.target === e && r) {
                l.current?.focus();
                return;
              }
              let i = h({ tabbingDirection: r ? `backwards` : `forwards` }),
                a = i.findIndex((e) => e === n);
              Ut(i.slice(a + 1))
                ? t.preventDefault()
                : r
                  ? l.current?.focus()
                  : u.current?.focus();
            }
          };
          return (
            e.addEventListener(`keydown`, t),
            () => e.removeEventListener(`keydown`, t)
          );
        }
      }, [s, h]),
      (0, j.jsxs)(Be, {
        ref: c,
        role: `region`,
        "aria-label": i.replace(`{hotkey}`, p),
        tabIndex: -1,
        style: { pointerEvents: m ? void 0 : `none` },
        children: [
          m &&
            (0, j.jsx)(_t, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Ut(h({ tabbingDirection: `forwards` }));
              },
            }),
          (0, j.jsx)(rt.Slot, {
            scope: n,
            children: (0, j.jsx)(Se.ol, { tabIndex: -1, ...a, ref: f }),
          }),
          m &&
            (0, j.jsx)(_t, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                Ut(h({ tabbingDirection: `backwards` }));
              },
            }),
        ],
      })
    );
  });
ht.displayName = dt;
var gt = `ToastFocusProxy`,
  _t = y.forwardRef((e, t) => {
    let { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      a = lt(gt, n);
    return (0, j.jsx)(tt, {
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: `fixed` },
      onFocus: (e) => {
        let t = e.relatedTarget;
        a.viewport?.contains(t) || r();
      },
    });
  });
_t.displayName = gt;
var vt = `Toast`,
  yt = `toast.swipeStart`,
  bt = `toast.swipeMove`,
  xt = `toast.swipeCancel`,
  St = `toast.swipeEnd`,
  Ct = y.forwardRef((e, t) => {
    let { forceMount: n, open: r, defaultOpen: i, onOpenChange: a, ...o } = e,
      [s, c] = Xe({ prop: r, defaultProp: i ?? !0, onChange: a, caller: vt });
    return (0, j.jsx)(Ge, {
      present: n || s,
      children: (0, j.jsx)(Et, {
        open: s,
        ...o,
        ref: t,
        onClose: () => c(!1),
        onPause: we(e.onPause),
        onResume: we(e.onResume),
        onSwipeStart: k(e.onSwipeStart, (e) => {
          e.currentTarget.setAttribute(`data-swipe`, `start`);
        }),
        onSwipeMove: k(e.onSwipeMove, (e) => {
          let { x: t, y: n } = e.detail.delta;
          (e.currentTarget.setAttribute(`data-swipe`, `move`),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-move-x`,
              `${t}px`,
            ),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-move-y`,
              `${n}px`,
            ));
        }),
        onSwipeCancel: k(e.onSwipeCancel, (e) => {
          (e.currentTarget.setAttribute(`data-swipe`, `cancel`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-y`));
        }),
        onSwipeEnd: k(e.onSwipeEnd, (e) => {
          let { x: t, y: n } = e.detail.delta;
          (e.currentTarget.setAttribute(`data-swipe`, `end`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-end-x`,
              `${t}px`,
            ),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-end-y`,
              `${n}px`,
            ),
            c(!1));
        }),
      }),
    });
  });
Ct.displayName = vt;
var [wt, Tt] = ot(vt, { onClose() {} }),
  Et = y.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        type: r = `foreground`,
        duration: i,
        open: a,
        onClose: o,
        onEscapeKeyDown: s,
        onPause: c,
        onResume: l,
        onSwipeStart: u,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: p,
        ...m
      } = e,
      h = lt(vt, n),
      [g, _] = y.useState(null),
      v = oe(t, (e) => _(e)),
      b = y.useRef(null),
      x = y.useRef(null),
      S = i || h.duration,
      C = y.useRef(0),
      w = y.useRef(S),
      T = y.useRef(0),
      { onToastAdd: ee, onToastRemove: te } = h,
      ne = we(() => {
        (g?.contains(document.activeElement) && h.viewport?.focus(), o());
      }),
      re = y.useCallback(
        (e) => {
          !e ||
            e === 1 / 0 ||
            (window.clearTimeout(T.current),
            (C.current = new Date().getTime()),
            (T.current = window.setTimeout(ne, e)));
        },
        [ne],
      );
    (y.useEffect(() => {
      let e = h.viewport;
      if (e) {
        let t = () => {
            (re(w.current), l?.());
          },
          n = () => {
            let e = new Date().getTime() - C.current;
            ((w.current -= e), window.clearTimeout(T.current), c?.());
          };
        return (
          e.addEventListener(pt, n),
          e.addEventListener(mt, t),
          () => {
            (e.removeEventListener(pt, n), e.removeEventListener(mt, t));
          }
        );
      }
    }, [h.viewport, S, c, l, re]),
      y.useEffect(() => {
        a && !h.isClosePausedRef.current && re(S);
      }, [a, S, h.isClosePausedRef, re]),
      y.useEffect(() => (ee(), () => te()), [ee, te]));
    let E = y.useMemo(() => (g ? Lt(g) : null), [g]);
    return h.viewport
      ? (0, j.jsxs)(j.Fragment, {
          children: [
            E &&
              (0, j.jsx)(Dt, {
                __scopeToast: n,
                role: `status`,
                "aria-live": r === `foreground` ? `assertive` : `polite`,
                children: E,
              }),
            (0, j.jsx)(wt, {
              scope: n,
              onClose: ne,
              children: ie.createPortal(
                (0, j.jsx)(rt.ItemSlot, {
                  scope: n,
                  children: (0, j.jsx)(ze, {
                    asChild: !0,
                    onEscapeKeyDown: k(s, () => {
                      (h.isFocusedToastEscapeKeyDownRef.current || ne(),
                        (h.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: (0, j.jsx)(Se.li, {
                      tabIndex: 0,
                      "data-state": a ? `open` : `closed`,
                      "data-swipe-direction": h.swipeDirection,
                      ...m,
                      ref: v,
                      style: {
                        userSelect: `none`,
                        touchAction: `none`,
                        ...e.style,
                      },
                      onKeyDown: k(e.onKeyDown, (e) => {
                        e.key === `Escape` &&
                          (s?.(e.nativeEvent),
                          e.nativeEvent.defaultPrevented ||
                            ((h.isFocusedToastEscapeKeyDownRef.current = !0),
                            ne()));
                      }),
                      onPointerDown: k(e.onPointerDown, (e) => {
                        e.button === 0 &&
                          (b.current = { x: e.clientX, y: e.clientY });
                      }),
                      onPointerMove: k(e.onPointerMove, (e) => {
                        if (!b.current) return;
                        let t = e.clientX - b.current.x,
                          n = e.clientY - b.current.y,
                          r = !!x.current,
                          i = [`left`, `right`].includes(h.swipeDirection),
                          a = [`left`, `up`].includes(h.swipeDirection)
                            ? Math.min
                            : Math.max,
                          o = i ? a(0, t) : 0,
                          s = i ? 0 : a(0, n),
                          c = e.pointerType === `touch` ? 10 : 2,
                          l = { x: o, y: s },
                          f = { originalEvent: e, delta: l };
                        r
                          ? ((x.current = l), Rt(bt, d, f, { discrete: !1 }))
                          : zt(l, h.swipeDirection, c)
                            ? ((x.current = l),
                              Rt(yt, u, f, { discrete: !1 }),
                              e.target.setPointerCapture(e.pointerId))
                            : (Math.abs(t) > c || Math.abs(n) > c) &&
                              (b.current = null);
                      }),
                      onPointerUp: k(e.onPointerUp, (e) => {
                        let t = x.current,
                          n = e.target;
                        if (
                          (n.hasPointerCapture(e.pointerId) &&
                            n.releasePointerCapture(e.pointerId),
                          (x.current = null),
                          (b.current = null),
                          t)
                        ) {
                          let n = e.currentTarget,
                            r = { originalEvent: e, delta: t };
                          (zt(t, h.swipeDirection, h.swipeThreshold)
                            ? Rt(St, p, r, { discrete: !0 })
                            : Rt(xt, f, r, { discrete: !0 }),
                            n.addEventListener(
                              `click`,
                              (e) => e.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                h.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Dt = (e) => {
    let { __scopeToast: t, children: n, ...r } = e,
      i = lt(vt, t),
      [a, o] = y.useState(!1),
      [s, c] = y.useState(!1);
    return (
      Bt(() => o(!0)),
      y.useEffect(() => {
        let e = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(e);
      }, []),
      s
        ? null
        : (0, j.jsx)(Ue, {
            asChild: !0,
            children: (0, j.jsx)(tt, {
              ...r,
              children:
                a && (0, j.jsxs)(j.Fragment, { children: [i.label, ` `, n] }),
            }),
          })
    );
  },
  Ot = `ToastTitle`,
  kt = y.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e;
    return (0, j.jsx)(Se.div, { ...r, ref: t });
  });
kt.displayName = Ot;
var At = `ToastDescription`,
  jt = y.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e;
    return (0, j.jsx)(Se.div, { ...r, ref: t });
  });
jt.displayName = At;
var Mt = `ToastAction`,
  Nt = y.forwardRef((e, t) => {
    let { altText: n, ...r } = e;
    return n.trim()
      ? (0, j.jsx)(It, {
          altText: n,
          asChild: !0,
          children: (0, j.jsx)(Ft, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Mt}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Nt.displayName = Mt;
var Pt = `ToastClose`,
  Ft = y.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e,
      i = Tt(Pt, n);
    return (0, j.jsx)(It, {
      asChild: !0,
      children: (0, j.jsx)(Se.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: k(e.onClick, i.onClose),
      }),
    });
  });
Ft.displayName = Pt;
var It = y.forwardRef((e, t) => {
  let { __scopeToast: n, altText: r, ...i } = e;
  return (0, j.jsx)(Se.div, {
    "data-radix-toast-announce-exclude": ``,
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function Lt(e) {
  let t = [];
  return (
    Array.from(e.childNodes).forEach((e) => {
      if (
        (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent),
        Vt(e))
      ) {
        let n = e.ariaHidden || e.hidden || e.style.display === `none`,
          r = e.dataset.radixToastAnnounceExclude === ``;
        if (!n)
          if (r) {
            let n = e.dataset.radixToastAnnounceAlt;
            n && t.push(n);
          } else t.push(...Lt(e));
      }
    }),
    t
  );
}
function Rt(e, t, n, { discrete: r }) {
  let i = n.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? Ce(i, a) : i.dispatchEvent(a));
}
var zt = (e, t, n = 0) => {
  let r = Math.abs(e.x),
    i = Math.abs(e.y),
    a = r > i;
  return t === `left` || t === `right` ? a && r > n : !a && i > n;
};
function Bt(e = () => {}) {
  let t = we(e);
  Ve(() => {
    let e = 0,
      n = 0;
    return (
      (e = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(e), window.cancelAnimationFrame(n));
      }
    );
  }, [t]);
}
function Vt(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Ht(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function Ut(e) {
  let t = document.activeElement;
  return e.some((e) => e === t || (e.focus(), document.activeElement !== t));
}
var Wt = ut,
  Gt = ht,
  Kt = Ct,
  qt = kt,
  Jt = jt,
  N = Nt,
  Yt = Ft;
function Xt(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Xt(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function Zt() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Xt(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Qt = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  $t = Zt,
  en = (e, t) => (n) => {
    if (t?.variants == null) return $t(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = Qt(t) || Qt(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return $t(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  tn = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  nn = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  rn = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  an = (0, y.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, y.createElement)(
        `svg`,
        {
          ref: c,
          ...rn,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: nn(`lucide`, i),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, y.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  P = (e, t) => {
    let n = (0, y.forwardRef)(({ className: n, ...r }, i) =>
      (0, y.createElement)(an, {
        ref: i,
        iconNode: t,
        className: nn(`lucide-${tn(e)}`, n),
        ...r,
      }),
    );
    return ((n.displayName = `${e}`), n);
  },
  on = P(`Activity`, [
    [
      `path`,
      {
        d: `M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,
        key: `169zse`,
      },
    ],
  ]),
  sn = P(`ArrowRight`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  cn = P(`Brain`, [
    [
      `path`,
      {
        d: `M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,
        key: `l5xja`,
      },
    ],
    [
      `path`,
      {
        d: `M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z`,
        key: `ep3f8r`,
      },
    ],
    [
      `path`,
      { d: `M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4`, key: `1p4c4q` },
    ],
    [`path`, { d: `M17.599 6.5a3 3 0 0 0 .399-1.375`, key: `tmeiqw` }],
    [`path`, { d: `M6.003 5.125A3 3 0 0 0 6.401 6.5`, key: `105sqy` }],
    [`path`, { d: `M3.477 10.896a4 4 0 0 1 .585-.396`, key: `ql3yin` }],
    [`path`, { d: `M19.938 10.5a4 4 0 0 1 .585.396`, key: `1qfode` }],
    [`path`, { d: `M6 18a4 4 0 0 1-1.967-.516`, key: `2e4loj` }],
    [`path`, { d: `M19.967 17.484A4 4 0 0 1 18 18`, key: `159ez6` }],
  ]),
  ln = P(`Camera`, [
    [
      `path`,
      {
        d: `M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z`,
        key: `1tc9qg`,
      },
    ],
    [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
  ]),
  un = P(`CircleCheck`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  dn = P(`CloudUpload`, [
    [`path`, { d: `M12 13v8`, key: `1l5pq0` }],
    [
      `path`,
      {
        d: `M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`,
        key: `1pljnt`,
      },
    ],
    [`path`, { d: `m8 17 4-4 4 4`, key: `1quai1` }],
  ]),
  fn = P(`Droplets`, [
    [
      `path`,
      {
        d: `M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z`,
        key: `1ptgy4`,
      },
    ],
    [
      `path`,
      {
        d: `M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97`,
        key: `1sl1rz`,
      },
    ],
  ]),
  pn = P(`FlaskConical`, [
    [
      `path`,
      {
        d: `M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,
        key: `18mbvz`,
      },
    ],
    [`path`, { d: `M6.453 15h11.094`, key: `3shlmq` }],
    [`path`, { d: `M8.5 2h7`, key: `csnxdl` }],
  ]),
  mn = P(`Github`, [
    [
      `path`,
      {
        d: `M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`,
        key: `tonef`,
      },
    ],
    [`path`, { d: `M9 18c-4.51 2-5-2-7-2`, key: `9comsn` }],
  ]),
  hn = P(`History`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
    [`path`, { d: `M12 7v5l4 2`, key: `1fdv2h` }],
  ]),
  gn = P(`Image`, [
    [
      `rect`,
      {
        width: `18`,
        height: `18`,
        x: `3`,
        y: `3`,
        rx: `2`,
        ry: `2`,
        key: `1m3agn`,
      },
    ],
    [`circle`, { cx: `9`, cy: `9`, r: `2`, key: `af1f0g` }],
    [`path`, { d: `m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`, key: `1xmnt7` }],
  ]),
  _n = P(`Leaf`, [
    [
      `path`,
      {
        d: `M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z`,
        key: `nnexq3`,
      },
    ],
    [
      `path`,
      { d: `M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12`, key: `mt58a7` },
    ],
  ]),
  vn = P(`LoaderCircle`, [
    [`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }],
  ]),
  yn = P(`Mail`, [
    [
      `rect`,
      { width: `20`, height: `16`, x: `2`, y: `4`, rx: `2`, key: `18n3k1` },
    ],
    [`path`, { d: `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`, key: `1ocrg3` }],
  ]),
  bn = P(`Menu`, [
    [`line`, { x1: `4`, x2: `20`, y1: `12`, y2: `12`, key: `1e0a9i` }],
    [`line`, { x1: `4`, x2: `20`, y1: `6`, y2: `6`, key: `1owob3` }],
    [`line`, { x1: `4`, x2: `20`, y1: `18`, y2: `18`, key: `yk5zj1` }],
  ]),
  xn = P(`Microscope`, [
    [`path`, { d: `M6 18h8`, key: `1borvv` }],
    [`path`, { d: `M3 22h18`, key: `8prr45` }],
    [`path`, { d: `M14 22a7 7 0 1 0 0-14h-1`, key: `1jwaiy` }],
    [`path`, { d: `M9 14h2`, key: `197e7h` }],
    [`path`, { d: `M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z`, key: `1bmzmy` }],
    [`path`, { d: `M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3`, key: `1drr47` }],
  ]),
  Sn = P(`Palette`, [
    [
      `circle`,
      { cx: `13.5`, cy: `6.5`, r: `.5`, fill: `currentColor`, key: `1okk4w` },
    ],
    [
      `circle`,
      { cx: `17.5`, cy: `10.5`, r: `.5`, fill: `currentColor`, key: `f64h9f` },
    ],
    [
      `circle`,
      { cx: `8.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `fotxhn` },
    ],
    [
      `circle`,
      { cx: `6.5`, cy: `12.5`, r: `.5`, fill: `currentColor`, key: `qy21gx` },
    ],
    [
      `path`,
      {
        d: `M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z`,
        key: `12rzf8`,
      },
    ],
  ]),
  Cn = P(`Plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  wn = P(`RotateCcw`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
  ]),
  Tn = P(`Save`, [
    [
      `path`,
      {
        d: `M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,
        key: `1c8476`,
      },
    ],
    [`path`, { d: `M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`, key: `1ydtos` }],
    [`path`, { d: `M7 3v4a1 1 0 0 0 1 1h7`, key: `t51u73` }],
  ]),
  En = P(`ScanLine`, [
    [`path`, { d: `M3 7V5a2 2 0 0 1 2-2h2`, key: `aa7l1z` }],
    [`path`, { d: `M17 3h2a2 2 0 0 1 2 2v2`, key: `4qcy5o` }],
    [`path`, { d: `M21 17v2a2 2 0 0 1-2 2h-2`, key: `6vwrx8` }],
    [`path`, { d: `M7 21H5a2 2 0 0 1-2-2v-2`, key: `ioqczr` }],
    [`path`, { d: `M7 12h10`, key: `b7w52i` }],
  ]),
  Dn = P(`Search`, [
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
    [`path`, { d: `m21 21-4.3-4.3`, key: `1qie3q` }],
  ]),
  On = P(`ShieldCheck`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  kn = P(`Sparkles`, [
    [
      `path`,
      {
        d: `M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z`,
        key: `4pj2yx`,
      },
    ],
    [`path`, { d: `M20 3v4`, key: `1olli1` }],
    [`path`, { d: `M22 5h-4`, key: `1gvqau` }],
    [`path`, { d: `M4 17v2`, key: `vumght` }],
    [`path`, { d: `M5 18H3`, key: `zchphs` }],
  ]),
  An = P(`Sprout`, [
    [`path`, { d: `M7 20h10`, key: `e6iznv` }],
    [`path`, { d: `M10 20c5.5-2.5.8-6.4 3-10`, key: `161w41` }],
    [
      `path`,
      {
        d: `M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z`,
        key: `9gtqwd`,
      },
    ],
    [
      `path`,
      {
        d: `M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z`,
        key: `bkxnd2`,
      },
    ],
  ]),
  jn = P(`Sun`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M12 2v2`, key: `tus03m` }],
    [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
    [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
    [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
    [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
    [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
    [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
    [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
  ]),
  Mn = P(`Target`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`circle`, { cx: `12`, cy: `12`, r: `6`, key: `1vlfrh` }],
    [`circle`, { cx: `12`, cy: `12`, r: `2`, key: `1c9p78` }],
  ]),
  Nn = P(`Thermometer`, [
    [
      `path`,
      { d: `M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z`, key: `17jzev` },
    ],
  ]),
  Pn = P(`TriangleAlert`, [
    [
      `path`,
      {
        d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
        key: `wmoenq`,
      },
    ],
    [`path`, { d: `M12 9v4`, key: `juzpu7` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  Fn = P(`Twitter`, [
    [
      `path`,
      {
        d: `M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z`,
        key: `pff0z6`,
      },
    ],
  ]),
  In = P(`X`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  Ln = P(`Zap`, [
    [
      `path`,
      {
        d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
        key: `1xq2db`,
      },
    ],
  ]),
  Rn = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  zn = (e, t) => ({ classGroupId: e, validator: t }),
  Bn = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Vn = `-`,
  Hn = [],
  Un = `arbitrary..`,
  Wn = (e) => {
    let t = qn(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Kn(e);
        let n = e.split(Vn);
        return Gn(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Rn(i, t) : t) : i || Hn;
        }
        return n[e] || Hn;
      },
    };
  },
  Gn = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = Gn(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(Vn) : e.slice(t).join(Vn),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Kn = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Un + r : void 0;
        })(),
  qn = (e) => {
    let { theme: t, classGroups: n } = e;
    return Jn(n, t);
  },
  Jn = (e, t) => {
    let n = Bn();
    for (let r in e) {
      let i = e[r];
      Yn(i, n, r, t);
    }
    return n;
  },
  Yn = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      Xn(i, t, n, r);
    }
  },
  Xn = (e, t, n, r) => {
    if (typeof e == `string`) {
      Zn(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Qn(e, t, n, r);
      return;
    }
    $n(e, t, n, r);
  },
  Zn = (e, t, n) => {
    let r = e === `` ? t : er(t, e);
    r.classGroupId = n;
  },
  Qn = (e, t, n, r) => {
    if (tr(e)) {
      Yn(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(zn(n, e)));
  },
  $n = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Yn(o, er(t, a), n, r);
    }
  },
  er = (e, t) => {
    let n = e,
      r = t.split(Vn),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = Bn()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  tr = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  nr = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  rr = `!`,
  ir = `:`,
  ar = [],
  or = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  sr = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === ir) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(rr)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(rr) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return or(t, l, c, u);
      };
    if (t) {
      let e = t + ir,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : or(ar, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  cr = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  lr = (e) => ({
    cache: nr(e.cacheSize),
    parseClassName: sr(e),
    sortModifiers: cr(e),
    ...Wn(e),
  }),
  ur = /\s+/,
  dr = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
      } = t,
      o = [],
      s = e.trim().split(ur),
      c = ``;
    for (let e = s.length - 1; e >= 0; --e) {
      let t = s[e],
        {
          isExternal: l,
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = n(t);
      if (l) {
        c = t + (c.length > 0 ? ` ` + c : c);
        continue;
      }
      let m = !!p,
        h = r(m ? f.substring(0, p) : f);
      if (!h) {
        if (!m) {
          c = t + (c.length > 0 ? ` ` + c : c);
          continue;
        }
        if (((h = r(f)), !h)) {
          c = t + (c.length > 0 ? ` ` + c : c);
          continue;
        }
        m = !1;
      }
      let g = u.length === 0 ? `` : u.length === 1 ? u[0] : a(u).join(`:`),
        _ = d ? g + rr : g,
        v = _ + h;
      if (o.indexOf(v) > -1) continue;
      o.push(v);
      let y = i(h, m);
      for (let e = 0; e < y.length; ++e) {
        let t = y[e];
        o.push(_ + t);
      }
      c = t + (c.length > 0 ? ` ` + c : c);
    }
    return c;
  },
  fr = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;)
      (n = e[t++]) && (r = pr(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  pr = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = pr(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  mr = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = lr(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = dr(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(fr(...e)));
  },
  hr = [],
  gr = (e) => {
    let t = (t) => t[e] || hr;
    return ((t.isThemeGetter = !0), t);
  },
  _r = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  vr = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  yr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  br = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  xr =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Sr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Cr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  wr =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Tr = (e) => yr.test(e),
  F = (e) => !!e && !Number.isNaN(Number(e)),
  Er = (e) => !!e && Number.isInteger(Number(e)),
  Dr = (e) => e.endsWith(`%`) && F(e.slice(0, -1)),
  Or = (e) => br.test(e),
  kr = () => !0,
  Ar = (e) => xr.test(e) && !Sr.test(e),
  jr = () => !1,
  Mr = (e) => Cr.test(e),
  Nr = (e) => wr.test(e),
  Pr = (e) => !I(e) && !L(e),
  Fr = (e) => Xr(e, ei, jr),
  I = (e) => _r.test(e),
  Ir = (e) => Xr(e, ti, Ar),
  Lr = (e) => Xr(e, ni, F),
  Rr = (e) => Xr(e, ii, kr),
  zr = (e) => Xr(e, ri, jr),
  Br = (e) => Xr(e, Qr, jr),
  Vr = (e) => Xr(e, $r, Nr),
  Hr = (e) => Xr(e, ai, Mr),
  L = (e) => vr.test(e),
  Ur = (e) => Zr(e, ti),
  Wr = (e) => Zr(e, ri),
  Gr = (e) => Zr(e, Qr),
  Kr = (e) => Zr(e, ei),
  qr = (e) => Zr(e, $r),
  Jr = (e) => Zr(e, ai, !0),
  Yr = (e) => Zr(e, ii, !0),
  Xr = (e, t, n) => {
    let r = _r.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Zr = (e, t, n = !1) => {
    let r = vr.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Qr = (e) => e === `position` || e === `percentage`,
  $r = (e) => e === `image` || e === `url`,
  ei = (e) => e === `length` || e === `size` || e === `bg-size`,
  ti = (e) => e === `length`,
  ni = (e) => e === `number`,
  ri = (e) => e === `family-name`,
  ii = (e) => e === `number` || e === `weight`,
  ai = (e) => e === `shadow`,
  oi = mr(() => {
    let e = gr(`color`),
      t = gr(`font`),
      n = gr(`text`),
      r = gr(`font-weight`),
      i = gr(`tracking`),
      a = gr(`leading`),
      o = gr(`breakpoint`),
      s = gr(`container`),
      c = gr(`spacing`),
      l = gr(`radius`),
      u = gr(`shadow`),
      d = gr(`inset-shadow`),
      f = gr(`text-shadow`),
      p = gr(`drop-shadow`),
      m = gr(`blur`),
      h = gr(`perspective`),
      g = gr(`aspect`),
      _ = gr(`ease`),
      v = gr(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), L, I],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      C = () => [`auto`, `contain`, `none`],
      w = () => [L, I, c],
      T = () => [Tr, `full`, `auto`, ...w()],
      ee = () => [Er, `none`, `subgrid`, L, I],
      te = () => [`auto`, { span: [`full`, Er, L, I] }, Er, L, I],
      ne = () => [Er, `auto`, L, I],
      re = () => [`auto`, `min`, `max`, `fr`, L, I],
      E = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      D = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      O = () => [`auto`, ...w()],
      ie = () => [
        Tr,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      k = () => [
        Tr,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      ae = () => [
        Tr,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      A = () => [e, L, I],
      oe = () => [...b(), Gr, Br, { position: [L, I] }],
      se = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      j = () => [`auto`, `cover`, `contain`, Kr, Fr, { size: [L, I] }],
      ce = () => [Dr, Ur, Ir],
      M = () => [``, `none`, `full`, l, L, I],
      le = () => [``, F, Ur, Ir],
      ue = () => [`solid`, `dashed`, `dotted`, `double`],
      de = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      fe = () => [F, Dr, Gr, Br],
      pe = () => [``, `none`, m, L, I],
      me = () => [`none`, F, L, I],
      he = () => [`none`, F, L, I],
      ge = () => [F, L, I],
      _e = () => [Tr, `full`, ...w()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [Or],
        breakpoint: [Or],
        color: [kr],
        container: [Or],
        "drop-shadow": [Or],
        ease: [`in`, `out`, `in-out`],
        font: [Pr],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [Or],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [Or],
        shadow: [Or],
        spacing: [`px`, F],
        text: [Or],
        "text-shadow": [Or],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, Tr, I, L, g] }],
        container: [`container`],
        columns: [{ columns: [F, I, L, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: T() }],
        "inset-x": [{ "inset-x": T() }],
        "inset-y": [{ "inset-y": T() }],
        start: [{ "inset-s": T(), start: T() }],
        end: [{ "inset-e": T(), end: T() }],
        "inset-bs": [{ "inset-bs": T() }],
        "inset-be": [{ "inset-be": T() }],
        top: [{ top: T() }],
        right: [{ right: T() }],
        bottom: [{ bottom: T() }],
        left: [{ left: T() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [Er, `auto`, L, I] }],
        basis: [{ basis: [Tr, `full`, `auto`, s, ...w()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [F, Tr, `auto`, `initial`, `none`, I] }],
        grow: [{ grow: [``, F, L, I] }],
        shrink: [{ shrink: [``, F, L, I] }],
        order: [{ order: [Er, `first`, `last`, `none`, L, I] }],
        "grid-cols": [{ "grid-cols": ee() }],
        "col-start-end": [{ col: te() }],
        "col-start": [{ "col-start": ne() }],
        "col-end": [{ "col-end": ne() }],
        "grid-rows": [{ "grid-rows": ee() }],
        "row-start-end": [{ row: te() }],
        "row-start": [{ "row-start": ne() }],
        "row-end": [{ "row-end": ne() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": re() }],
        "auto-rows": [{ "auto-rows": re() }],
        gap: [{ gap: w() }],
        "gap-x": [{ "gap-x": w() }],
        "gap-y": [{ "gap-y": w() }],
        "justify-content": [{ justify: [...E(), `normal`] }],
        "justify-items": [{ "justify-items": [...D(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...D()] }],
        "align-content": [{ content: [`normal`, ...E()] }],
        "align-items": [{ items: [...D(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...D(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": E() }],
        "place-items": [{ "place-items": [...D(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...D()] }],
        p: [{ p: w() }],
        px: [{ px: w() }],
        py: [{ py: w() }],
        ps: [{ ps: w() }],
        pe: [{ pe: w() }],
        pbs: [{ pbs: w() }],
        pbe: [{ pbe: w() }],
        pt: [{ pt: w() }],
        pr: [{ pr: w() }],
        pb: [{ pb: w() }],
        pl: [{ pl: w() }],
        m: [{ m: O() }],
        mx: [{ mx: O() }],
        my: [{ my: O() }],
        ms: [{ ms: O() }],
        me: [{ me: O() }],
        mbs: [{ mbs: O() }],
        mbe: [{ mbe: O() }],
        mt: [{ mt: O() }],
        mr: [{ mr: O() }],
        mb: [{ mb: O() }],
        ml: [{ ml: O() }],
        "space-x": [{ "space-x": w() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": w() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: ie() }],
        "inline-size": [{ inline: [`auto`, ...k()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...k()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...k()] }],
        "block-size": [{ block: [`auto`, ...ae()] }],
        "min-block-size": [{ "min-block": [`auto`, ...ae()] }],
        "max-block-size": [{ "max-block": [`none`, ...ae()] }],
        w: [{ w: [s, `screen`, ...ie()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...ie()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...ie()] },
        ],
        h: [{ h: [`screen`, `lh`, ...ie()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...ie()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...ie()] }],
        "font-size": [{ text: [`base`, n, Ur, Ir] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Yr, Rr] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              Dr,
              I,
            ],
          },
        ],
        "font-family": [{ font: [Wr, zr, t] }],
        "font-features": [{ "font-features": [I] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, L, I] }],
        "line-clamp": [{ "line-clamp": [F, `none`, L, Lr] }],
        leading: [{ leading: [a, ...w()] }],
        "list-image": [{ "list-image": [`none`, L, I] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, L, I] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: A() }],
        "text-color": [{ text: A() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...ue(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [F, `from-font`, `auto`, L, Ir] },
        ],
        "text-decoration-color": [{ decoration: A() }],
        "underline-offset": [{ "underline-offset": [F, `auto`, L, I] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: w() }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              L,
              I,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, L, I] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: oe() }],
        "bg-repeat": [{ bg: se() }],
        "bg-size": [{ bg: j() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  Er,
                  L,
                  I,
                ],
                radial: [``, L, I],
                conic: [Er, L, I],
              },
              qr,
              Vr,
            ],
          },
        ],
        "bg-color": [{ bg: A() }],
        "gradient-from-pos": [{ from: ce() }],
        "gradient-via-pos": [{ via: ce() }],
        "gradient-to-pos": [{ to: ce() }],
        "gradient-from": [{ from: A() }],
        "gradient-via": [{ via: A() }],
        "gradient-to": [{ to: A() }],
        rounded: [{ rounded: M() }],
        "rounded-s": [{ "rounded-s": M() }],
        "rounded-e": [{ "rounded-e": M() }],
        "rounded-t": [{ "rounded-t": M() }],
        "rounded-r": [{ "rounded-r": M() }],
        "rounded-b": [{ "rounded-b": M() }],
        "rounded-l": [{ "rounded-l": M() }],
        "rounded-ss": [{ "rounded-ss": M() }],
        "rounded-se": [{ "rounded-se": M() }],
        "rounded-ee": [{ "rounded-ee": M() }],
        "rounded-es": [{ "rounded-es": M() }],
        "rounded-tl": [{ "rounded-tl": M() }],
        "rounded-tr": [{ "rounded-tr": M() }],
        "rounded-br": [{ "rounded-br": M() }],
        "rounded-bl": [{ "rounded-bl": M() }],
        "border-w": [{ border: le() }],
        "border-w-x": [{ "border-x": le() }],
        "border-w-y": [{ "border-y": le() }],
        "border-w-s": [{ "border-s": le() }],
        "border-w-e": [{ "border-e": le() }],
        "border-w-bs": [{ "border-bs": le() }],
        "border-w-be": [{ "border-be": le() }],
        "border-w-t": [{ "border-t": le() }],
        "border-w-r": [{ "border-r": le() }],
        "border-w-b": [{ "border-b": le() }],
        "border-w-l": [{ "border-l": le() }],
        "divide-x": [{ "divide-x": le() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": le() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...ue(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...ue(), `hidden`, `none`] }],
        "border-color": [{ border: A() }],
        "border-color-x": [{ "border-x": A() }],
        "border-color-y": [{ "border-y": A() }],
        "border-color-s": [{ "border-s": A() }],
        "border-color-e": [{ "border-e": A() }],
        "border-color-bs": [{ "border-bs": A() }],
        "border-color-be": [{ "border-be": A() }],
        "border-color-t": [{ "border-t": A() }],
        "border-color-r": [{ "border-r": A() }],
        "border-color-b": [{ "border-b": A() }],
        "border-color-l": [{ "border-l": A() }],
        "divide-color": [{ divide: A() }],
        "outline-style": [{ outline: [...ue(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [F, L, I] }],
        "outline-w": [{ outline: [``, F, Ur, Ir] }],
        "outline-color": [{ outline: A() }],
        shadow: [{ shadow: [``, `none`, u, Jr, Hr] }],
        "shadow-color": [{ shadow: A() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Jr, Hr] }],
        "inset-shadow-color": [{ "inset-shadow": A() }],
        "ring-w": [{ ring: le() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: A() }],
        "ring-offset-w": [{ "ring-offset": [F, Ir] }],
        "ring-offset-color": [{ "ring-offset": A() }],
        "inset-ring-w": [{ "inset-ring": le() }],
        "inset-ring-color": [{ "inset-ring": A() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Jr, Hr] }],
        "text-shadow-color": [{ "text-shadow": A() }],
        opacity: [{ opacity: [F, L, I] }],
        "mix-blend": [
          { "mix-blend": [...de(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": de() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [F] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": fe() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": fe() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": A() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": A() }],
        "mask-image-t-from-pos": [{ "mask-t-from": fe() }],
        "mask-image-t-to-pos": [{ "mask-t-to": fe() }],
        "mask-image-t-from-color": [{ "mask-t-from": A() }],
        "mask-image-t-to-color": [{ "mask-t-to": A() }],
        "mask-image-r-from-pos": [{ "mask-r-from": fe() }],
        "mask-image-r-to-pos": [{ "mask-r-to": fe() }],
        "mask-image-r-from-color": [{ "mask-r-from": A() }],
        "mask-image-r-to-color": [{ "mask-r-to": A() }],
        "mask-image-b-from-pos": [{ "mask-b-from": fe() }],
        "mask-image-b-to-pos": [{ "mask-b-to": fe() }],
        "mask-image-b-from-color": [{ "mask-b-from": A() }],
        "mask-image-b-to-color": [{ "mask-b-to": A() }],
        "mask-image-l-from-pos": [{ "mask-l-from": fe() }],
        "mask-image-l-to-pos": [{ "mask-l-to": fe() }],
        "mask-image-l-from-color": [{ "mask-l-from": A() }],
        "mask-image-l-to-color": [{ "mask-l-to": A() }],
        "mask-image-x-from-pos": [{ "mask-x-from": fe() }],
        "mask-image-x-to-pos": [{ "mask-x-to": fe() }],
        "mask-image-x-from-color": [{ "mask-x-from": A() }],
        "mask-image-x-to-color": [{ "mask-x-to": A() }],
        "mask-image-y-from-pos": [{ "mask-y-from": fe() }],
        "mask-image-y-to-pos": [{ "mask-y-to": fe() }],
        "mask-image-y-from-color": [{ "mask-y-from": A() }],
        "mask-image-y-to-color": [{ "mask-y-to": A() }],
        "mask-image-radial": [{ "mask-radial": [L, I] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": fe() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": fe() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": A() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": A() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [F] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": fe() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": fe() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": A() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": A() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: oe() }],
        "mask-repeat": [{ mask: se() }],
        "mask-size": [{ mask: j() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, L, I] }],
        filter: [{ filter: [``, `none`, L, I] }],
        blur: [{ blur: pe() }],
        brightness: [{ brightness: [F, L, I] }],
        contrast: [{ contrast: [F, L, I] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Jr, Hr] }],
        "drop-shadow-color": [{ "drop-shadow": A() }],
        grayscale: [{ grayscale: [``, F, L, I] }],
        "hue-rotate": [{ "hue-rotate": [F, L, I] }],
        invert: [{ invert: [``, F, L, I] }],
        saturate: [{ saturate: [F, L, I] }],
        sepia: [{ sepia: [``, F, L, I] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, L, I] }],
        "backdrop-blur": [{ "backdrop-blur": pe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [F, L, I] }],
        "backdrop-contrast": [{ "backdrop-contrast": [F, L, I] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, F, L, I] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [F, L, I] }],
        "backdrop-invert": [{ "backdrop-invert": [``, F, L, I] }],
        "backdrop-opacity": [{ "backdrop-opacity": [F, L, I] }],
        "backdrop-saturate": [{ "backdrop-saturate": [F, L, I] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, F, L, I] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": w() }],
        "border-spacing-x": [{ "border-spacing-x": w() }],
        "border-spacing-y": [{ "border-spacing-y": w() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              L,
              I,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [F, `initial`, L, I] }],
        ease: [{ ease: [`linear`, `initial`, _, L, I] }],
        delay: [{ delay: [F, L, I] }],
        animate: [{ animate: [`none`, v, L, I] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, L, I] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: me() }],
        "rotate-x": [{ "rotate-x": me() }],
        "rotate-y": [{ "rotate-y": me() }],
        "rotate-z": [{ "rotate-z": me() }],
        scale: [{ scale: he() }],
        "scale-x": [{ "scale-x": he() }],
        "scale-y": [{ "scale-y": he() }],
        "scale-z": [{ "scale-z": he() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: ge() }],
        "skew-x": [{ "skew-x": ge() }],
        "skew-y": [{ "skew-y": ge() }],
        transform: [{ transform: [L, I, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: _e() }],
        "translate-x": [{ "translate-x": _e() }],
        "translate-y": [{ "translate-y": _e() }],
        "translate-z": [{ "translate-z": _e() }],
        "translate-none": [`translate-none`],
        accent: [{ accent: A() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: A() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              L,
              I,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scroll-m": [{ "scroll-m": w() }],
        "scroll-mx": [{ "scroll-mx": w() }],
        "scroll-my": [{ "scroll-my": w() }],
        "scroll-ms": [{ "scroll-ms": w() }],
        "scroll-me": [{ "scroll-me": w() }],
        "scroll-mbs": [{ "scroll-mbs": w() }],
        "scroll-mbe": [{ "scroll-mbe": w() }],
        "scroll-mt": [{ "scroll-mt": w() }],
        "scroll-mr": [{ "scroll-mr": w() }],
        "scroll-mb": [{ "scroll-mb": w() }],
        "scroll-ml": [{ "scroll-ml": w() }],
        "scroll-p": [{ "scroll-p": w() }],
        "scroll-px": [{ "scroll-px": w() }],
        "scroll-py": [{ "scroll-py": w() }],
        "scroll-ps": [{ "scroll-ps": w() }],
        "scroll-pe": [{ "scroll-pe": w() }],
        "scroll-pbs": [{ "scroll-pbs": w() }],
        "scroll-pbe": [{ "scroll-pbe": w() }],
        "scroll-pt": [{ "scroll-pt": w() }],
        "scroll-pr": [{ "scroll-pr": w() }],
        "scroll-pb": [{ "scroll-pb": w() }],
        "scroll-pl": [{ "scroll-pl": w() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, L, I] },
        ],
        fill: [{ fill: [`none`, ...A()] }],
        "stroke-w": [{ stroke: [F, Ur, Ir, Lr] }],
        stroke: [{ stroke: [`none`, ...A()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function si(...e) {
  return oi(Zt(e));
}
(window.self, window.top);
var ci = Wt,
  li = y.forwardRef(({ className: e, ...t }, n) =>
    (0, j.jsx)(Gt, {
      ref: n,
      className: si(
        `fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]`,
        e,
      ),
      ...t,
    }),
  );
li.displayName = Gt.displayName;
var ui = en(
    `group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full`,
    {
      variants: {
        variant: {
          default: `border bg-background text-foreground`,
          destructive: `destructive group border-destructive bg-destructive text-destructive-foreground`,
        },
      },
      defaultVariants: { variant: `default` },
    },
  ),
  R = y.forwardRef(({ className: e, variant: t, ...n }, r) =>
    (0, j.jsx)(Kt, { ref: r, className: si(ui({ variant: t }), e), ...n }),
  );
R.displayName = Kt.displayName;
var di = y.forwardRef(({ className: e, ...t }, n) =>
  (0, j.jsx)(N, {
    ref: n,
    className: si(
      `inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive`,
      e,
    ),
    ...t,
  }),
);
di.displayName = N.displayName;
var fi = y.forwardRef(({ className: e, ...t }, n) =>
  (0, j.jsx)(Yt, {
    ref: n,
    className: si(
      `absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600`,
      e,
    ),
    "toast-close": ``,
    ...t,
    children: (0, j.jsx)(In, { className: `h-4 w-4` }),
  }),
);
fi.displayName = Yt.displayName;
var pi = y.forwardRef(({ className: e, ...t }, n) =>
  (0, j.jsx)(qt, { ref: n, className: si(`text-sm font-semibold`, e), ...t }),
);
pi.displayName = qt.displayName;
var mi = y.forwardRef(({ className: e, ...t }, n) =>
  (0, j.jsx)(Jt, { ref: n, className: si(`text-sm opacity-90`, e), ...t }),
);
mi.displayName = Jt.displayName;
function hi() {
  let { toasts: e } = O();
  return (0, j.jsxs)(ci, {
    children: [
      e.map(function ({ id: e, title: t, description: n, action: r, ...i }) {
        return (0, j.jsxs)(
          R,
          {
            ...i,
            children: [
              (0, j.jsxs)(`div`, {
                className: `grid gap-1`,
                children: [
                  t && (0, j.jsx)(pi, { children: t }),
                  n && (0, j.jsx)(mi, { children: n }),
                ],
              }),
              r,
              (0, j.jsx)(fi, {}),
            ],
          },
          e,
        );
      }),
      (0, j.jsx)(li, {}),
    ],
  });
}
var gi = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  _i = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  vi = new (class {
    #e = _i;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function yi(e) {
  setTimeout(e, 0);
}
var bi = typeof window > `u` || `Deno` in globalThis;
function xi() {}
function Si(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ci(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function wi(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ti(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ei(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Di(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== ki(o, t.options)) return !1;
    } else if (!ji(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Oi(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Ai(t.options.mutationKey) !== Ai(a)) return !1;
    } else if (!ji(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function ki(e, t) {
  return (t?.queryKeyHashFn || Ai)(e);
}
function Ai(e) {
  return JSON.stringify(e, (e, t) =>
    Ii(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function ji(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t &&
        e &&
        t &&
        typeof e == `object` &&
        typeof t == `object`
      ? Object.keys(t).every((n) => ji(e[n], t[n]))
      : !1;
}
var Mi = Object.prototype.hasOwnProperty;
function Ni(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = Fi(e) && Fi(t);
  if (!r && !(Ii(e) && Ii(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : Mi.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = Ni(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function Pi(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Fi(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ii(e) {
  if (!Li(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !Li(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Li(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function Ri(e) {
  return new Promise((t) => {
    vi.setTimeout(t, e);
  });
}
function zi(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : Ni(e, t);
}
function Bi(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Vi(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Hi = Symbol();
function Ui(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Hi
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Wi(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function Gi(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var Ki = new (class extends gi {
  #e;
  #t;
  #n;
  constructor() {
    (super(),
      (this.#n = (e) => {
        if (!bi && window.addEventListener) {
          let t = () => e();
          return (
            window.addEventListener(`visibilitychange`, t, !1),
            () => {
              window.removeEventListener(`visibilitychange`, t);
            }
          );
        }
      }));
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#n);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), (this.#t = void 0));
  }
  setEventListener(e) {
    ((this.#n = e),
      this.#t?.(),
      (this.#t = e((e) => {
        typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
      })));
  }
  setFocused(e) {
    this.#e !== e && ((this.#e = e), this.onFocus());
  }
  onFocus() {
    let e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    return typeof this.#e == `boolean`
      ? this.#e
      : globalThis.document?.visibilityState !== `hidden`;
  }
})();
function qi() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var Ji = yi;
function Yi() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = Ji,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var z = Yi(),
  B = new (class extends gi {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (!bi && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function Xi(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Zi(e) {
  return (e ?? `online`) !== `online` || B.isOnline();
}
var Qi = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function $i(e) {
  let t = !1,
    n = 0,
    r,
    i = qi(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new Qi(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      Ki.isFocused() &&
      (e.networkMode === `always` || B.isOnline()) &&
      e.canRun(),
    u = () => Zi(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (bi ? 0 : 3),
            o = e.retryDelay ?? Xi,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            Ri(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var ea = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        Ci(this.gcTime) &&
          (this.#e = vi.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (bi ? 1 / 0 : 3e5));
    }
    clearGcTimeout() {
      this.#e &&= (vi.clearTimeout(this.#e), void 0);
    }
  },
  ta = class extends ea {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(e) {
      (super(),
        (this.#o = !1),
        (this.#a = e.defaultOptions),
        this.setOptions(e.options),
        (this.observers = []),
        (this.#r = e.client),
        (this.#n = this.#r.getQueryCache()),
        (this.queryKey = e.queryKey),
        (this.queryHash = e.queryHash),
        (this.#e = ia(this.options)),
        (this.state = e.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#i?.promise;
    }
    setOptions(e) {
      if (
        ((this.options = { ...this.#a, ...e }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        let e = ia(this.options);
        e.data !== void 0 &&
          (this.setState(ra(e.data, e.dataUpdatedAt)), (this.#e = e));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === `idle` &&
        this.#n.remove(this);
    }
    setData(e, t) {
      let n = zi(this.state.data, e, this.options);
      return (
        this.#s({
          data: n,
          type: `success`,
          dataUpdatedAt: t?.updatedAt,
          manual: t?.manual,
        }),
        n
      );
    }
    setState(e, t) {
      this.#s({ type: `setState`, state: e, setStateOptions: t });
    }
    cancel(e) {
      let t = this.#i?.promise;
      return (this.#i?.cancel(e), t ? t.then(xi).catch(xi) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((e) => Ei(e.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Hi ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return (
        this.getObserversCount() > 0 &&
        this.observers.some((e) => Ti(e.options.staleTime, this) === `static`)
      );
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => e.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(e = 0) {
      return this.state.data === void 0
        ? !0
        : e === `static`
          ? !1
          : this.state.isInvalidated
            ? !0
            : !wi(this.state.dataUpdatedAt, e);
    }
    onFocus() {
      (this.observers
        .find((e) => e.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue());
    }
    onOnline() {
      (this.observers
        .find((e) => e.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue());
    }
    addObserver(e) {
      this.observers.includes(e) ||
        (this.observers.push(e),
        this.clearGcTimeout(),
        this.#n.notify({ type: `observerAdded`, query: this, observer: e }));
    }
    removeObserver(e) {
      this.observers.includes(e) &&
        ((this.observers = this.observers.filter((t) => t !== e)),
        this.observers.length ||
          (this.#i &&
            (this.#o ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: `observerRemoved`, query: this, observer: e }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: `invalidate` });
    }
    async fetch(e, t) {
      if (
        this.state.fetchStatus !== `idle` &&
        this.#i?.status() !== `rejected`
      ) {
        if (this.state.data !== void 0 && t?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#i) return (this.#i.continueRetry(), this.#i.promise);
      }
      if ((e && this.setOptions(e), !this.options.queryFn)) {
        let e = this.observers.find((e) => e.options.queryFn);
        e && this.setOptions(e.options);
      }
      let n = new AbortController(),
        r = (e) => {
          Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => ((this.#o = !0), n.signal),
          });
        },
        i = () => {
          let e = Ui(this.options, t),
            n = (() => {
              let e = {
                client: this.#r,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (r(e), e);
            })();
          return (
            (this.#o = !1),
            this.options.persister ? this.options.persister(e, n, this) : e(n)
          );
        },
        a = (() => {
          let e = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#r,
            state: this.state,
            fetchFn: i,
          };
          return (r(e), e);
        })();
      (this.options.behavior?.onFetch(a, this),
        (this.#t = this.state),
        (this.state.fetchStatus === `idle` ||
          this.state.fetchMeta !== a.fetchOptions?.meta) &&
          this.#s({ type: `fetch`, meta: a.fetchOptions?.meta }),
        (this.#i = $i({
          initialPromise: t?.initialPromise,
          fn: a.fetchFn,
          onCancel: (e) => {
            (e instanceof Qi &&
              e.revert &&
              this.setState({ ...this.#t, fetchStatus: `idle` }),
              n.abort());
          },
          onFail: (e, t) => {
            this.#s({ type: `failed`, failureCount: e, error: t });
          },
          onPause: () => {
            this.#s({ type: `pause` });
          },
          onContinue: () => {
            this.#s({ type: `continue` });
          },
          retry: a.options.retry,
          retryDelay: a.options.retryDelay,
          networkMode: a.options.networkMode,
          canRun: () => !0,
        })));
      try {
        let e = await this.#i.start();
        if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(e),
          this.#n.config.onSuccess?.(e, this),
          this.#n.config.onSettled?.(e, this.state.error, this),
          e
        );
      } catch (e) {
        if (e instanceof Qi) {
          if (e.silent) return this.#i.promise;
          if (e.revert) {
            if (this.state.data === void 0) throw e;
            return this.state.data;
          }
        }
        throw (
          this.#s({ type: `error`, error: e }),
          this.#n.config.onError?.(e, this),
          this.#n.config.onSettled?.(this.state.data, e, this),
          e
        );
      } finally {
        this.scheduleGc();
      }
    }
    #s(e) {
      let t = (t) => {
        switch (e.type) {
          case `failed`:
            return {
              ...t,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case `pause`:
            return { ...t, fetchStatus: `paused` };
          case `continue`:
            return { ...t, fetchStatus: `fetching` };
          case `fetch`:
            return {
              ...t,
              ...na(t.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case `success`:
            let n = {
              ...t,
              ...ra(e.data, e.dataUpdatedAt),
              dataUpdateCount: t.dataUpdateCount + 1,
              ...(!e.manual && {
                fetchStatus: `idle`,
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#t = e.manual ? n : void 0), n);
          case `error`:
            let r = e.error;
            return {
              ...t,
              error: r,
              errorUpdateCount: t.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: t.fetchFailureCount + 1,
              fetchFailureReason: r,
              fetchStatus: `idle`,
              status: `error`,
              isInvalidated: !0,
            };
          case `invalidate`:
            return { ...t, isInvalidated: !0 };
          case `setState`:
            return { ...t, ...e.state };
        }
      };
      ((this.state = t(this.state)),
        z.batch(() => {
          (this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: `updated`, action: e }));
        }));
    }
  };
function na(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Zi(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function ra(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function ia(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var aa = class extends gi {
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#s = null),
      (this.#o = qi()),
      this.bindMethods(),
      this.setOptions(t));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      sa(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ca(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return ca(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this));
  }
  setOptions(e) {
    let t = this.options,
      n = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof Ei(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      t._defaulted &&
        !Pi(this.options, t) &&
        this.#e
          .getQueryCache()
          .notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this,
          }));
    let r = this.hasListeners();
    (r && la(this.#t, n, this.options, t) && this.#h(),
      this.updateResult(),
      r &&
        (this.#t !== n ||
          Ei(this.options.enabled, this.#t) !== Ei(t.enabled, this.#t) ||
          Ti(this.options.staleTime, this.#t) !== Ti(t.staleTime, this.#t)) &&
        this.#g());
    let i = this.#_();
    r &&
      (this.#t !== n ||
        Ei(this.options.enabled, this.#t) !== Ei(t.enabled, this.#t) ||
        i !== this.#p) &&
      this.#v(i);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      n = this.createResult(t, e);
    return (
      da(this, n) &&
        ((this.#r = n), (this.#a = this.options), (this.#i = this.#t.state)),
      n
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (e, n) => (
        this.trackProp(n),
        t?.(n),
        n === `promise` &&
          (this.trackProp(`data`),
          !this.options.experimental_prefetchInRender &&
            this.#o.status === `pending` &&
            this.#o.reject(
              Error(
                `experimental_prefetchInRender feature flag is not enabled`,
              ),
            )),
        Reflect.get(e, n)
      ),
    });
  }
  trackProp(e) {
    this.#m.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    let t = this.#e.defaultQueryOptions(e),
      n = this.#e.getQueryCache().build(this.#e, t);
    return n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return this.#h({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #h(e) {
    this.#S();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(xi)), t);
  }
  #g() {
    this.#b();
    let e = Ti(this.options.staleTime, this.#t);
    if (bi || this.#r.isStale || !Ci(e)) return;
    let t = wi(this.#r.dataUpdatedAt, e) + 1;
    this.#d = vi.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, t);
  }
  #_() {
    return (
      (typeof this.options.refetchInterval == `function`
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(e) {
    (this.#x(),
      (this.#p = e),
      !(
        bi ||
        Ei(this.options.enabled, this.#t) === !1 ||
        !Ci(this.#p) ||
        this.#p === 0
      ) &&
        (this.#f = vi.setInterval(() => {
          (this.options.refetchIntervalInBackground || Ki.isFocused()) &&
            this.#h();
        }, this.#p)));
  }
  #y() {
    (this.#g(), this.#v(this.#_()));
  }
  #b() {
    this.#d &&= (vi.clearTimeout(this.#d), void 0);
  }
  #x() {
    this.#f &&= (vi.clearInterval(this.#f), void 0);
  }
  createResult(e, t) {
    let n = this.#t,
      r = this.options,
      i = this.#r,
      a = this.#i,
      o = this.#a,
      s = e === n ? this.#n : e.state,
      { state: c } = e,
      l = { ...c },
      u = !1,
      d;
    if (t._optimisticResults) {
      let i = this.hasListeners(),
        a = !i && sa(e, t),
        o = i && la(e, n, t, r);
      ((a || o) && (l = { ...l, ...na(c.data, e.options) }),
        t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`));
    }
    let { error: f, errorUpdatedAt: p, status: m } = l;
    d = l.data;
    let h = !1;
    if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
      let e;
      (i?.isPlaceholderData && t.placeholderData === o?.placeholderData
        ? ((e = i.data), (h = !0))
        : (e =
            typeof t.placeholderData == `function`
              ? t.placeholderData(this.#u?.state.data, this.#u)
              : t.placeholderData),
        e !== void 0 && ((m = `success`), (d = zi(i?.data, e, t)), (u = !0)));
    }
    if (t.select && d !== void 0 && !h)
      if (i && d === a?.data && t.select === this.#c) d = this.#l;
      else
        try {
          ((this.#c = t.select),
            (d = t.select(d)),
            (d = zi(i?.data, d, t)),
            (this.#l = d),
            (this.#s = null));
        } catch (e) {
          this.#s = e;
        }
    this.#s && ((f = this.#s), (d = this.#l), (p = Date.now()), (m = `error`));
    let g = l.fetchStatus === `fetching`,
      _ = m === `pending`,
      v = m === `error`,
      y = _ && g,
      b = d !== void 0,
      x = {
        status: m,
        fetchStatus: l.fetchStatus,
        isPending: _,
        isSuccess: m === `success`,
        isError: v,
        isInitialLoading: y,
        isLoading: y,
        data: d,
        dataUpdatedAt: l.dataUpdatedAt,
        error: f,
        errorUpdatedAt: p,
        failureCount: l.fetchFailureCount,
        failureReason: l.fetchFailureReason,
        errorUpdateCount: l.errorUpdateCount,
        isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
        isFetchedAfterMount:
          l.dataUpdateCount > s.dataUpdateCount ||
          l.errorUpdateCount > s.errorUpdateCount,
        isFetching: g,
        isRefetching: g && !_,
        isLoadingError: v && !b,
        isPaused: l.fetchStatus === `paused`,
        isPlaceholderData: u,
        isRefetchError: v && b,
        isStale: ua(e, t),
        refetch: this.refetch,
        promise: this.#o,
        isEnabled: Ei(t.enabled, e) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      let t = x.data !== void 0,
        r = x.status === `error` && !t,
        i = (e) => {
          r ? e.reject(x.error) : t && e.resolve(x.data);
        },
        a = () => {
          let e = (this.#o = x.promise = qi());
          i(e);
        },
        o = this.#o;
      switch (o.status) {
        case `pending`:
          e.queryHash === n.queryHash && i(o);
          break;
        case `fulfilled`:
          (r || x.data !== o.value) && a();
          break;
        case `rejected`:
          (!r || x.error !== o.reason) && a();
      }
    }
    return x;
  }
  updateResult() {
    let e = this.#r,
      t = this.createResult(this.#t, this.options);
    ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      !Pi(t, e) &&
        ((this.#r = t),
        this.#C({
          listeners: (() => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              n = typeof t == `function` ? t() : t;
            if (n === `all` || (!n && !this.#m.size)) return !0;
            let r = new Set(n ?? this.#m);
            return (
              this.options.throwOnError && r.add(`error`),
              Object.keys(this.#r).some((t) => {
                let n = t;
                return this.#r[n] !== e[n] && r.has(n);
              })
            );
          })(),
        })));
  }
  #S() {
    let e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    let t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#y());
  }
  #C(e) {
    z.batch(() => {
      (e.listeners &&
        this.listeners.forEach((e) => {
          e(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: `observerResultsUpdated` }));
    });
  }
};
function oa(e, t) {
  return (
    Ei(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    (e.state.status !== `error` || t.retryOnMount !== !1)
  );
}
function sa(e, t) {
  return oa(e, t) || (e.state.data !== void 0 && ca(e, t, t.refetchOnMount));
}
function ca(e, t, n) {
  if (Ei(t.enabled, e) !== !1 && Ti(t.staleTime, e) !== `static`) {
    let r = typeof n == `function` ? n(e) : n;
    return r === `always` || (r !== !1 && ua(e, t));
  }
  return !1;
}
function la(e, t, n, r) {
  return (
    (e !== t || Ei(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== `error`) &&
    ua(e, n)
  );
}
function ua(e, t) {
  return Ei(t.enabled, e) !== !1 && e.isStaleByTime(Ti(t.staleTime, e));
}
function da(e, t) {
  return !Pi(e.getCurrentResult(), t);
}
function fa(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Gi(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = Ui(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject();
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? Vi : Bi;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? ma : pa,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : pa(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            )
        : l;
    },
  };
}
function pa(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function ma(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var ha = class extends ea {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || ga()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = $i({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      z.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function ga() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var _a = class extends gi {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new ha({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = va(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = va(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = va(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    }
    return !0;
  }
  runNext(e) {
    let t = va(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    z.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => Oi(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Oi(e, t));
  }
  notify(e) {
    z.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return z.batch(() => Promise.all(e.map((e) => e.continue().catch(xi))));
  }
};
function va(e) {
  return e.options.scope?.id;
}
var ya = class extends gi {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? ki(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new ta({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      z.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => Di(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => Di(e, t)) : t;
    }
    notify(e) {
      z.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      z.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      z.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  ba = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new ya()),
        (this.#t = e.mutationCache || new _a()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = Ki.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = B.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(Ti(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = Si(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return z.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      z.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return z.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = z.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(xi).catch(xi);
    }
    invalidateQueries(e, t = {}) {
      return z.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = z.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(xi)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(xi);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(Ti(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(xi).catch(xi);
    }
    fetchInfiniteQuery(e) {
      return ((e.behavior = fa(e.pages)), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(xi).catch(xi);
    }
    ensureInfiniteQueryData(e) {
      return ((e.behavior = fa(e.pages)), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return B.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(Ai(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          ji(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(Ai(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          ji(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= ki(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === Hi && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  xa = y.createContext(void 0),
  Sa = (e) => {
    let t = y.useContext(xa);
    if (e) return e;
    if (!t)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  Ca = ({ client: e, children: t }) => (
    y.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, j.jsx)(xa.Provider, { value: e, children: t })
  ),
  wa = y.createContext(!1),
  Ta = () => y.useContext(wa);
wa.Provider;
function Ea() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var Da = y.createContext(Ea()),
  V = () => y.useContext(Da),
  Oa = (e, t, n) => {
    let r =
      n?.state.error && typeof e.throwOnError == `function`
        ? Wi(e.throwOnError, [n.state.error, n])
        : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || r) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  ka = (e) => {
    y.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  Aa = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: i,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((i && e.data === void 0) || Wi(n, [e.error, r])),
  ja = (e) => {
    if (e.suspense) {
      let t = 1e3,
        n = (e) => (e === `static` ? e : Math.max(e ?? t, t)),
        r = e.staleTime;
      ((e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r)),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t)));
    }
  },
  Ma = (e, t) => e.isLoading && e.isFetching && !t,
  Na = (e, t) => e?.suspense && t.isPending,
  Pa = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function Fa(e, t, n) {
  let r = Ta(),
    i = V(),
    a = Sa(n),
    o = a.defaultQueryOptions(e);
  a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);
  let s = a.getQueryCache().get(o.queryHash);
  ((o._optimisticResults = r ? `isRestoring` : `optimistic`),
    ja(o),
    Oa(o, i, s),
    ka(i));
  let c = !a.getQueryCache().get(o.queryHash),
    [l] = y.useState(() => new t(a, o)),
    u = l.getOptimisticResult(o),
    d = !r && e.subscribed !== !1;
  if (
    (y.useSyncExternalStore(
      y.useCallback(
        (e) => {
          let t = d ? l.subscribe(z.batchCalls(e)) : xi;
          return (l.updateResult(), t);
        },
        [l, d],
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult(),
    ),
    y.useEffect(() => {
      l.setOptions(o);
    }, [o, l]),
    Na(o, u))
  )
    throw Pa(o, l, i);
  if (
    Aa({
      result: u,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: s,
      suspense: o.suspense,
    })
  )
    throw u.error;
  return (
    a.getDefaultOptions().queries?._experimental_afterQuery?.(o, u),
    o.experimental_prefetchInRender &&
      !bi &&
      Ma(u, r) &&
      (c ? Pa(o, l, i) : s?.promise)?.catch(xi).finally(() => {
        l.updateResult();
      }),
    o.notifyOnChangeProps ? u : l.trackResult(u)
  );
}
function Ia(e, t) {
  return Fa(e, aa, t);
}
var La = new ba({
  defaultOptions: { queries: { refetchOnWindowFocus: !1, retry: 1 } },
});
function Ra() {
  return (
    (Ra = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ra.apply(null, arguments)
  );
}
var za;
(function (e) {
  ((e.Pop = `POP`), (e.Push = `PUSH`), (e.Replace = `REPLACE`));
})((za ||= {}));
var Ba = `popstate`;
function Va(e) {
  e === void 0 && (e = {});
  function t(e, t) {
    let { pathname: n, search: r, hash: i } = e.location;
    return Ka(
      ``,
      { pathname: n, search: r, hash: i },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : qa(t);
  }
  return Ya(t, n, null, e);
}
function Ha(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function Ua(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function Wa() {
  return Math.random().toString(36).substr(2, 8);
}
function Ga(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ka(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ra(
      { pathname: typeof e == `string` ? e : e.pathname, search: ``, hash: `` },
      typeof t == `string` ? Ja(t) : t,
      { state: n, key: (t && t.key) || r || Wa() },
    )
  );
}
function qa(e) {
  let { pathname: t = `/`, search: n = ``, hash: r = `` } = e;
  return (
    n && n !== `?` && (t += n.charAt(0) === `?` ? n : `?` + n),
    r && r !== `#` && (t += r.charAt(0) === `#` ? r : `#` + r),
    t
  );
}
function Ja(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Ya(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = za.Pop,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState(Ra({}, o.state, { idx: l }), ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = za.Pop;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = za.Push;
    let r = Ka(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = Ga(r, l),
      f = h.createHref(r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = za.Replace;
    let r = Ka(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = Ga(r, l),
      d = h.createHref(r);
    (o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    let t = i.location.origin === `null` ? i.location.href : i.location.origin,
      n = typeof e == `string` ? e : qa(e);
    return (
      (n = n.replace(/ $/, `%20`)),
      Ha(
        t,
        `No window.location.(origin|href) available to create URL for href: ` +
          n,
      ),
      new URL(n, t)
    );
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(Ba, d),
        (c = e),
        () => {
          (i.removeEventListener(Ba, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
var Xa;
(function (e) {
  ((e.data = `data`),
    (e.deferred = `deferred`),
    (e.redirect = `redirect`),
    (e.error = `error`));
})((Xa ||= {}));
function Za(e, t, n) {
  return (n === void 0 && (n = `/`), Qa(e, t, n, !1));
}
function Qa(e, t, n, r) {
  let i = go((typeof t == `string` ? Ja(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = $a(e);
  to(a);
  let o = null,
    s = ho(i);
  for (let e = 0; o == null && e < a.length; ++e) o = fo(a[e], s, r);
  return o;
}
function $a(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ``));
  let i = (e, i, a) => {
    let o = {
      relativePath: a === void 0 ? e.path || `` : a,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: i,
      route: e,
    };
    o.relativePath.startsWith(`/`) &&
      (Ha(
        o.relativePath.startsWith(r),
        `Absolute route path "` +
          o.relativePath +
          `" nested under path ` +
          (`"` + r + `" is not valid. An absolute child route path `) +
          `must start with the combined path of all its parent routes.`,
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let s = To([r, o.relativePath]),
      c = n.concat(o);
    (e.children &&
      e.children.length > 0 &&
      (Ha(
        e.index !== !0,
        `Index routes must not have child routes. Please remove ` +
          (`all child routes from route path "` + s + `".`),
      ),
      $a(e.children, t, c, s)),
      !(e.path == null && !e.index) &&
        t.push({ path: s, score: lo(s, e.index), routesMeta: c }));
  };
  return (
    e.forEach((e, t) => {
      var n;
      if (e.path === `` || !((n = e.path) != null && n.includes(`?`))) i(e, t);
      else for (let n of eo(e.path)) i(e, t, n);
    }),
    t
  );
}
function eo(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = eo(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function to(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? uo(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var no = /^:[\w-]+$/,
  ro = 3,
  io = 2,
  ao = 1,
  oo = 10,
  so = -2,
  co = (e) => e === `*`;
function lo(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(co) && (r += so),
    t && (r += io),
    n
      .filter((e) => !co(e))
      .reduce((e, t) => e + (no.test(t) ? ro : t === `` ? ao : oo), r)
  );
}
function uo(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function fo(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = po(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        l,
      ),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = po(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: To([a, u.pathname]),
        pathnameBase: Eo(To([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = To([a, u.pathnameBase])));
  }
  return o;
}
function po(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = mo(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, t, n) => {
      let { paramName: r, isOptional: i } = t;
      if (r === `*`) {
        let e = s[n] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let c = s[n];
      return ((e[r] = i && !c ? void 0 : (c || ``).replace(/%2F/g, `/`)), e);
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function mo(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ua(
      e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
      `Route path "` +
        e +
        `" will be treated as if it were ` +
        (`"` + e.replace(/\*$/, `/*`) + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        (`please change the route path to "` + e.replace(/\*$/, `/*`) + `".`),
    ));
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (e, t, n) => (
            r.push({ paramName: t, isOptional: n != null }),
            n ? `/?([^\\/]+)?` : `/([^\\/]+)`
          ),
        );
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function ho(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      Ua(
        !1,
        `The URL path "` +
          e +
          `" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ` +
          (`encoding (` + t + `).`),
      ),
      e
    );
  }
}
function go(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
var _o = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  vo = (e) => _o.test(e);
function yo(e, t) {
  t === void 0 && (t = `/`);
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? Ja(e) : e,
    a;
  if (n)
    if (vo(n)) a = n;
    else {
      if (n.includes(`//`)) {
        let e = n;
        ((n = wo(n)),
          Ua(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ` +
              (e + ` -> ` + n),
          ));
      }
      a = n.startsWith(`/`) ? bo(n.substring(1), `/`) : bo(n, t);
    }
  else a = t;
  return { pathname: a, search: Do(r), hash: Oo(i) };
}
function bo(e, t) {
  let n = t.replace(/\/+$/, ``).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function xo(e, t, n, r) {
  return (
    `Cannot include a '` +
    e +
    `' character in a manually specified ` +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      `].  Please separate it out to the `) +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    `a string in <Link to="..."> and the router will parse it for you.`
  );
}
function So(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function H(e, t) {
  let n = So(e);
  return t
    ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
    : n.map((e) => e.pathnameBase);
}
function Co(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == `string`
    ? (i = Ja(e))
    : ((i = Ra({}, e)),
      Ha(
        !i.pathname || !i.pathname.includes(`?`),
        xo(`?`, `pathname`, `search`, i),
      ),
      Ha(
        !i.pathname || !i.pathname.includes(`#`),
        xo(`#`, `pathname`, `hash`, i),
      ),
      Ha(!i.search || !i.search.includes(`#`), xo(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`;) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = yo(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var wo = (e) => e.replace(/\/\/+/g, `/`),
  To = (e) => wo(e.join(`/`)),
  Eo = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`),
  Do = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Oo = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e);
function U(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
var ko = [`post`, `put`, `patch`, `delete`];
new Set(ko);
var Ao = [`get`, ...ko];
new Set(Ao);
function jo() {
  return (
    (jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jo.apply(null, arguments)
  );
}
var Mo = y.createContext(null),
  No = y.createContext(null),
  Po = y.createContext(null),
  Fo = y.createContext(null),
  Io = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Lo = y.createContext(null);
function Ro(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  !zo() && Ha(!1);
  let { basename: r, navigator: i } = y.useContext(Po),
    { hash: a, pathname: o, search: s } = Go(e, { relative: n }),
    c = o;
  return (
    r !== `/` && (c = o === `/` ? r : To([r, o])),
    i.createHref({ pathname: c, search: s, hash: a })
  );
}
function zo() {
  return y.useContext(Fo) != null;
}
function Bo() {
  return (!zo() && Ha(!1), y.useContext(Fo).location);
}
function Vo() {
  return y.useContext(Fo).navigationType;
}
function Ho(e) {
  y.useContext(Po).static || y.useLayoutEffect(e);
}
function Uo() {
  let { isDataRoute: e } = y.useContext(Io);
  return e ? os() : Wo();
}
function Wo() {
  !zo() && Ha(!1);
  let e = y.useContext(Mo),
    { basename: t, future: n, navigator: r } = y.useContext(Po),
    { matches: i } = y.useContext(Io),
    { pathname: a } = Bo(),
    o = JSON.stringify(H(i, n.v7_relativeSplatPath)),
    s = y.useRef(!1);
  return (
    Ho(() => {
      s.current = !0;
    }),
    y.useCallback(
      function (n, i) {
        if ((i === void 0 && (i = {}), !s.current)) return;
        if (typeof n == `number`) {
          r.go(n);
          return;
        }
        let c = Co(n, JSON.parse(o), a, i.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : To([t, c.pathname])),
          (i.replace ? r.replace : r.push)(c, i.state, i));
      },
      [t, r, o, a, e],
    )
  );
}
function Go(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(Po),
    { matches: i } = y.useContext(Io),
    { pathname: a } = Bo(),
    o = JSON.stringify(H(i, r.v7_relativeSplatPath));
  return y.useMemo(() => Co(e, JSON.parse(o), a, n === `path`), [e, o, a, n]);
}
function Ko(e, t) {
  return qo(e, t);
}
function qo(e, t, n, r) {
  !zo() && Ha(!1);
  let { navigator: i } = y.useContext(Po),
    { matches: a } = y.useContext(Io),
    o = a[a.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let c = o ? o.pathnameBase : `/`;
  o && o.route;
  let l = Bo(),
    u;
  if (t) {
    let e = typeof t == `string` ? Ja(t) : t;
    (!(c === `/` || e.pathname?.startsWith(c)) && Ha(!1), (u = e));
  } else u = l;
  let d = u.pathname || `/`,
    f = d;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    f = `/` + d.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let p = Za(e, { pathname: f }),
    m = Qo(
      p &&
        p.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: To([
              c,
              i.encodeLocation
                ? i.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              e.pathnameBase === `/`
                ? c
                : To([
                    c,
                    i.encodeLocation
                      ? i.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          }),
        ),
      a,
      n,
      r,
    );
  return t && m
    ? y.createElement(
        Fo.Provider,
        {
          value: {
            location: jo(
              {
                pathname: `/`,
                search: ``,
                hash: ``,
                state: null,
                key: `default`,
              },
              u,
            ),
            navigationType: za.Pop,
          },
        },
        m,
      )
    : m;
}
function Jo() {
  let e = as(),
    t = U(e)
      ? e.status + ` ` + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null;
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(`h2`, null, `Unexpected Application Error!`),
    y.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
    n
      ? y.createElement(
          `pre`,
          {
            style: {
              padding: `0.5rem`,
              backgroundColor: `rgba(200,200,200, 0.5)`,
            },
          },
          n,
        )
      : null,
    null,
  );
}
var Yo = y.createElement(Jo, null),
  Xo = class extends y.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        `React Router caught the following error during render`,
        e,
        t,
      );
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : y.createElement(
            Io.Provider,
            { value: this.props.routeContext },
            y.createElement(Lo.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          );
    }
  };
function Zo(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = y.useContext(Mo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Io.Provider, { value: t }, r)
  );
}
function Qo(e, t, n, r) {
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    o = n?.errors;
  if (o != null) {
    let e = a.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
    (!(e >= 0) && Ha(!1), (a = a.slice(0, Math.min(a.length, e + 1))));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: r } = n,
          i =
            t.route.loader &&
            e[t.route.id] === void 0 &&
            (!r || r[t.route.id] === void 0);
        if (t.route.lazy || i) {
          ((s = !0), (a = c >= 0 ? a.slice(0, c + 1) : [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((e, r, i) => {
    let l,
      u = !1,
      d = null,
      f = null;
    n &&
      ((l = o && r.route.id ? o[r.route.id] : void 0),
      (d = r.route.errorElement || Yo),
      s &&
        (c < 0 && i === 0
          ? (cs(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (u = !0),
            (f = null))
          : c === i &&
            ((u = !0), (f = r.route.hydrateFallbackElement || null))));
    let p = t.concat(a.slice(0, i + 1)),
      m = () => {
        let t;
        return (
          (t = l
            ? d
            : u
              ? f
              : r.route.Component
                ? y.createElement(r.route.Component, null)
                : r.route.element
                  ? r.route.element
                  : e),
          y.createElement(Zo, {
            match: r,
            routeContext: { outlet: e, matches: p, isDataRoute: n != null },
            children: t,
          })
        );
      };
    return n && (r.route.ErrorBoundary || r.route.errorElement || i === 0)
      ? y.createElement(Xo, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: l,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var $o = (function (e) {
    return (
      (e.UseBlocker = `useBlocker`),
      (e.UseRevalidator = `useRevalidator`),
      (e.UseNavigateStable = `useNavigate`),
      e
    );
  })($o || {}),
  es = (function (e) {
    return (
      (e.UseBlocker = `useBlocker`),
      (e.UseLoaderData = `useLoaderData`),
      (e.UseActionData = `useActionData`),
      (e.UseRouteError = `useRouteError`),
      (e.UseNavigation = `useNavigation`),
      (e.UseRouteLoaderData = `useRouteLoaderData`),
      (e.UseMatches = `useMatches`),
      (e.UseRevalidator = `useRevalidator`),
      (e.UseNavigateStable = `useNavigate`),
      (e.UseRouteId = `useRouteId`),
      e
    );
  })(es || {});
function ts(e) {
  let t = y.useContext(Mo);
  return (!t && Ha(!1), t);
}
function ns(e) {
  let t = y.useContext(No);
  return (!t && Ha(!1), t);
}
function rs(e) {
  let t = y.useContext(Io);
  return (!t && Ha(!1), t);
}
function is(e) {
  let t = rs(e),
    n = t.matches[t.matches.length - 1];
  return (!n.route.id && Ha(!1), n.route.id);
}
function as() {
  let e = y.useContext(Lo),
    t = ns(es.UseRouteError),
    n = is(es.UseRouteError);
  return e === void 0 ? t.errors?.[n] : e;
}
function os() {
  let { router: e } = ts($o.UseNavigateStable),
    t = is(es.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Ho(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (r, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof r == `number`
              ? e.navigate(r)
              : e.navigate(r, jo({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
var ss = {};
function cs(e, t, n) {
  !t && !ss[e] && (ss[e] = !0);
}
var ls = (e, t, n) => (
  `` +
    t +
    ("You can use the `" + e + "` future flag to opt-in early. ") +
    (`For more information, see ` + n + `.`),
  void 0
);
function us(e, t) {
  (e?.v7_startTransition === void 0 &&
    ls(
      `v7_startTransition`,
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      `https://reactrouter.com/v6/upgrading/future#v7_starttransition`,
    ),
    e?.v7_relativeSplatPath === void 0 &&
      (!t || t.v7_relativeSplatPath === void 0) &&
      ls(
        `v7_relativeSplatPath`,
        `Relative route resolution within Splat routes is changing in v7`,
        `https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`,
      ),
    t &&
      (t.v7_fetcherPersist === void 0 &&
        ls(
          `v7_fetcherPersist`,
          `The persistence behavior of fetchers is changing in v7`,
          `https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`,
        ),
      t.v7_normalizeFormMethod === void 0 &&
        ls(
          `v7_normalizeFormMethod`,
          "Casing of `formMethod` fields is being normalized to uppercase in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`,
        ),
      t.v7_partialHydration === void 0 &&
        ls(
          `v7_partialHydration`,
          "`RouterProvider` hydration behavior is changing in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_partialhydration`,
        ),
      t.v7_skipActionErrorRevalidation === void 0 &&
        ls(
          `v7_skipActionErrorRevalidation`,
          "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`,
        )));
}
function ds(e) {
  Ha(!1);
}
function fs(e) {
  let {
    basename: t = `/`,
    children: n = null,
    location: r,
    navigationType: i = za.Pop,
    navigator: a,
    static: o = !1,
    future: s,
  } = e;
  zo() && Ha(!1);
  let c = t.replace(/^\/*/, `/`),
    l = y.useMemo(
      () => ({
        basename: c,
        navigator: a,
        static: o,
        future: jo({ v7_relativeSplatPath: !1 }, s),
      }),
      [c, s, a, o],
    );
  typeof r == `string` && (r = Ja(r));
  let {
      pathname: u = `/`,
      search: d = ``,
      hash: f = ``,
      state: p = null,
      key: m = `default`,
    } = r,
    h = y.useMemo(() => {
      let e = go(u, c);
      return e == null
        ? null
        : {
            location: { pathname: e, search: d, hash: f, state: p, key: m },
            navigationType: i,
          };
    }, [c, u, d, f, p, m, i]);
  return h == null
    ? null
    : y.createElement(
        Po.Provider,
        { value: l },
        y.createElement(Fo.Provider, { children: n, value: h }),
      );
}
function ps(e) {
  let { children: t, location: n } = e;
  return Ko(hs(t), n);
}
var ms = (function (e) {
  return (
    (e[(e.pending = 0)] = `pending`),
    (e[(e.success = 1)] = `success`),
    (e[(e.error = 2)] = `error`),
    e
  );
})(ms || {});
(new Promise(() => {}), y.Component);
function hs(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (e, r) => {
      if (!y.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === y.Fragment) {
        n.push.apply(n, hs(e.props.children, i));
        return;
      }
      (e.type !== ds && Ha(!1),
        !(!e.props.index || !e.props.children) && Ha(!1));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        loader: e.props.loader,
        action: e.props.action,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.ErrorBoundary != null || e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = hs(e.props.children, i)), n.push(a));
    }),
    n
  );
}
function gs() {
  return (
    (gs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gs.apply(null, arguments)
  );
}
function _s(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function vs(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ys(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !vs(e);
}
var bs = [
    `onClick`,
    `relative`,
    `reloadDocument`,
    `replace`,
    `state`,
    `target`,
    `to`,
    `preventScrollReset`,
    `viewTransition`,
  ],
  xs = `6`;
try {
  window.__reactRouterVersion = xs;
} catch {}
var Ss = y.startTransition;
function Cs(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    a = y.useRef();
  a.current ??= Va({ window: i, v5Compat: !0 });
  let o = a.current,
    [s, c] = y.useState({ action: o.action, location: o.location }),
    { v7_startTransition: l } = r || {},
    u = y.useCallback(
      (e) => {
        l && Ss ? Ss(() => c(e)) : c(e);
      },
      [c, l],
    );
  return (
    y.useLayoutEffect(() => o.listen(u), [o, u]),
    y.useEffect(() => us(r), [r]),
    y.createElement(fs, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
var ws =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  Ts = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Es = y.forwardRef(function (e, t) {
    let {
        onClick: n,
        relative: r,
        reloadDocument: i,
        replace: a,
        state: o,
        target: s,
        to: c,
        preventScrollReset: l,
        viewTransition: u,
      } = e,
      d = _s(e, bs),
      { basename: f } = y.useContext(Po),
      p,
      m = !1;
    if (typeof c == `string` && Ts.test(c) && ((p = c), ws))
      try {
        let e = new URL(window.location.href),
          t = c.startsWith(`//`) ? new URL(e.protocol + c) : new URL(c),
          n = go(t.pathname, f);
        t.origin === e.origin && n != null
          ? (c = n + t.search + t.hash)
          : (m = !0);
      } catch {}
    let h = Ro(c, { relative: r }),
      g = ks(c, {
        replace: a,
        state: o,
        target: s,
        preventScrollReset: l,
        relative: r,
        viewTransition: u,
      });
    function _(e) {
      (n && n(e), e.defaultPrevented || g(e));
    }
    return y.createElement(
      `a`,
      gs({}, d, { href: p || h, onClick: m || i ? n : _, ref: t, target: s }),
    );
  }),
  Ds;
(function (e) {
  ((e.UseScrollRestoration = `useScrollRestoration`),
    (e.UseSubmit = `useSubmit`),
    (e.UseSubmitFetcher = `useSubmitFetcher`),
    (e.UseFetcher = `useFetcher`),
    (e.useViewTransitionState = `useViewTransitionState`));
})((Ds ||= {}));
var Os;
(function (e) {
  ((e.UseFetcher = `useFetcher`),
    (e.UseFetchers = `useFetchers`),
    (e.UseScrollRestoration = `useScrollRestoration`));
})((Os ||= {}));
function ks(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: a,
      relative: o,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    c = Uo(),
    l = Bo(),
    u = Go(e, { relative: o });
  return y.useCallback(
    (t) => {
      if (ys(t, n)) {
        t.preventDefault();
        let n = r === void 0 ? qa(l) === qa(u) : r;
        c(e, {
          replace: n,
          state: i,
          preventScrollReset: a,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [l, c, u, r, i, n, e, a, o, s],
  );
}
function As(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
var { toString: js } = Object.prototype,
  { getPrototypeOf: Ms } = Object,
  { iterator: Ns, toStringTag: Ps } = Symbol,
  Fs = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Is = (e, t) => {
    let n = e,
      r = [];
    for (; n != null && n !== Object.prototype;) {
      if (r.indexOf(n) !== -1) return !1;
      if ((r.push(n), Fs(n, t))) return !0;
      n = Ms(n);
    }
    return !1;
  },
  Ls = (e, t) => (e != null && Is(e, t) ? e[t] : void 0),
  Rs = ((e) => (t) => {
    let n = js.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  zs = (e) => ((e = e.toLowerCase()), (t) => Rs(t) === e),
  Bs = (e) => (t) => typeof t === e,
  { isArray: Vs } = Array,
  Hs = Bs(`undefined`);
function Us(e) {
  return (
    e !== null &&
    !Hs(e) &&
    e.constructor !== null &&
    !Hs(e.constructor) &&
    qs(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
var Ws = zs(`ArrayBuffer`);
function Gs(e) {
  let t;
  return (
    (t =
      typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && Ws(e.buffer)),
    t
  );
}
var Ks = Bs(`string`),
  qs = Bs(`function`),
  Js = Bs(`number`),
  Ys = (e) => typeof e == `object` && !!e,
  Xs = (e) => e === !0 || e === !1,
  Zs = (e) => {
    if (!Ys(e)) return !1;
    let t = Ms(e);
    return (
      (t === null || t === Object.prototype || Ms(t) === null) &&
      !Is(e, Ps) &&
      !Is(e, Ns)
    );
  },
  Qs = (e) => {
    if (!Ys(e) || Us(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  $s = zs(`Date`),
  ec = zs(`File`),
  tc = (e) => !!(e && e.uri !== void 0),
  nc = (e) => e && e.getParts !== void 0,
  rc = zs(`Blob`),
  ic = zs(`FileList`),
  ac = (e) => Ys(e) && qs(e.pipe);
function oc() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : {};
}
var sc = oc(),
  cc = sc.FormData === void 0 ? void 0 : sc.FormData,
  lc = (e) => {
    if (!e) return !1;
    if (cc && e instanceof cc) return !0;
    let t = Ms(e);
    if (!t || t === Object.prototype || !qs(e.append)) return !1;
    let n = Rs(e);
    return (
      n === `formdata` ||
      (n === `object` && qs(e.toString) && e.toString() === `[object FormData]`)
    );
  },
  uc = zs(`URLSearchParams`),
  [dc, fc, pc, mc] = [`ReadableStream`, `Request`, `Response`, `Headers`].map(
    zs,
  ),
  hc = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ``);
function gc(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e == null) return;
  let r, i;
  if ((typeof e != `object` && (e = [e]), Vs(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    if (Us(e)) return;
    let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length,
      o;
    for (r = 0; r < a; r++) ((o = i[r]), t.call(null, e[o], o, e));
  }
}
function _c(e, t) {
  if (Us(e)) return null;
  t = t.toLowerCase();
  let n = Object.keys(e),
    r = n.length,
    i;
  for (; r-- > 0;) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
var vc =
    typeof globalThis < `u`
      ? globalThis
      : typeof self < `u`
        ? self
        : typeof window < `u`
          ? window
          : global,
  yc = (e) => !Hs(e) && e !== vc;
function W(...e) {
  let { caseless: t, skipUndefined: n } = (yc(this) && this) || {},
    r = {},
    i = (e, i) => {
      if (i === `__proto__` || i === `constructor` || i === `prototype`) return;
      let a = (t && typeof i == `string` && _c(r, i)) || i,
        o = Fs(r, a) ? r[a] : void 0;
      Zs(o) && Zs(e)
        ? (r[a] = W(o, e))
        : Zs(e)
          ? (r[a] = W({}, e))
          : Vs(e)
            ? (r[a] = e.slice())
            : (!n || !Hs(e)) && (r[a] = e);
    };
  for (let t = 0, n = e.length; t < n; t++) {
    let n = e[t];
    if (!n || Us(n) || (gc(n, i), typeof n != `object` || Vs(n))) continue;
    let r = Object.getOwnPropertySymbols(n);
    for (let e = 0; e < r.length; e++) {
      let t = r[e];
      jc.call(n, t) && i(n[t], t);
    }
  }
  return r;
}
var bc = (e, t, n, { allOwnKeys: r } = {}) => (
    gc(
      t,
      (t, r) => {
        n && qs(t)
          ? Object.defineProperty(e, r, {
              __proto__: null,
              value: As(t, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, r, {
              __proto__: null,
              value: t,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  xc = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Sc = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        __proto__: null,
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", {
        __proto__: null,
        value: t.prototype,
      }),
      n && Object.assign(e.prototype, n));
  },
  Cc = (e, t, n, r) => {
    let i,
      a,
      o,
      s = {};
    if (((t ||= {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;)
        ((o = i[a]),
          (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0)));
      e = n !== !1 && Ms(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  wc = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    let r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Tc = (e) => {
    if (!e) return null;
    if (Vs(e)) return e;
    let t = e.length;
    if (!Js(t)) return null;
    let n = Array(t);
    for (; t-- > 0;) n[t] = e[t];
    return n;
  },
  Ec = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < `u` && Ms(Uint8Array)),
  Dc = (e, t) => {
    let n = (e && e[Ns]).call(e),
      r;
    for (; (r = n.next()) && !r.done;) {
      let n = r.value;
      t.call(e, n[0], n[1]);
    }
  },
  Oc = (e, t) => {
    let n,
      r = [];
    for (; (n = e.exec(t)) !== null;) r.push(n);
    return r;
  },
  kc = zs(`HTMLFormElement`),
  Ac = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
      return t.toUpperCase() + n;
    }),
  { propertyIsEnumerable: jc } = Object.prototype,
  Mc = zs(`RegExp`),
  Nc = (e, t) => {
    let n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (gc(n, (n, i) => {
      let a;
      (a = t(n, i, e)) !== !1 && (r[i] = a || n);
    }),
      Object.defineProperties(e, r));
  },
  Pc = (e) => {
    Nc(e, (t, n) => {
      if (qs(e) && [`arguments`, `caller`, `callee`].includes(n)) return !1;
      let r = e[n];
      if (qs(r)) {
        if (((t.enumerable = !1), `writable` in t)) {
          t.writable = !1;
          return;
        }
        t.set ||= () => {
          throw Error(`Can not rewrite read-only method '` + n + `'`);
        };
      }
    });
  },
  Fc = (e, t) => {
    let n = {},
      r = (e) => {
        e.forEach((e) => {
          n[e] = !0;
        });
      };
    return (Vs(e) ? r(e) : r(String(e).split(t)), n);
  },
  Ic = () => {},
  Lc = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Rc(e) {
  return !!(e && qs(e.append) && e[Ps] === `FormData` && e[Ns]);
}
var zc = (e) => {
    let t = new WeakSet(),
      n = (e) => {
        if (Ys(e)) {
          if (t.has(e)) return;
          if (Us(e)) return e;
          if (!(`toJSON` in e)) {
            t.add(e);
            let r = Vs(e) ? [] : {};
            return (
              gc(e, (e, t) => {
                let i = n(e);
                !Hs(i) && (r[t] = i);
              }),
              t.delete(e),
              r
            );
          }
        }
        return e;
      };
    return n(e);
  },
  Bc = zs(`AsyncFunction`),
  Vc = (e) => e && (Ys(e) || qs(e)) && qs(e.then) && qs(e.catch),
  Hc = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((e, t) => (
            vc.addEventListener(
              `message`,
              ({ source: n, data: r }) => {
                n === vc && r === e && t.length && t.shift()();
              },
              !1,
            ),
            (n) => {
              (t.push(n), vc.postMessage(e, `*`));
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e))(
    typeof setImmediate == `function`,
    qs(vc.postMessage),
  ),
  Uc =
    typeof queueMicrotask < `u`
      ? queueMicrotask.bind(vc)
      : (typeof process < `u` && process.nextTick) || Hc,
  Wc = (e) => e != null && qs(e[Ns]),
  G = {
    isArray: Vs,
    isArrayBuffer: Ws,
    isBuffer: Us,
    isFormData: lc,
    isArrayBufferView: Gs,
    isString: Ks,
    isNumber: Js,
    isBoolean: Xs,
    isObject: Ys,
    isPlainObject: Zs,
    isEmptyObject: Qs,
    isReadableStream: dc,
    isRequest: fc,
    isResponse: pc,
    isHeaders: mc,
    isUndefined: Hs,
    isDate: $s,
    isFile: ec,
    isReactNativeBlob: tc,
    isReactNative: nc,
    isBlob: rc,
    isRegExp: Mc,
    isFunction: qs,
    isStream: ac,
    isURLSearchParams: uc,
    isTypedArray: Ec,
    isFileList: ic,
    forEach: gc,
    merge: W,
    extend: bc,
    trim: hc,
    stripBOM: xc,
    inherits: Sc,
    toFlatObject: Cc,
    kindOf: Rs,
    kindOfTest: zs,
    endsWith: wc,
    toArray: Tc,
    forEachEntry: Dc,
    matchAll: Oc,
    isHTMLForm: kc,
    hasOwnProperty: Fs,
    hasOwnProp: Fs,
    hasOwnInPrototypeChain: Is,
    getSafeProp: Ls,
    reduceDescriptors: Nc,
    freezeMethods: Pc,
    toObjectSet: Fc,
    toCamelCase: Ac,
    noop: Ic,
    toFiniteNumber: Lc,
    findKey: _c,
    global: vc,
    isContextDefined: yc,
    isSpecCompliantForm: Rc,
    toJSONObject: zc,
    isAsyncFn: Bc,
    isThenable: Vc,
    setImmediate: Hc,
    asap: Uc,
    isIterable: Wc,
    isSafeIterable: (e) => e != null && Is(e, Ns) && Wc(e),
  },
  Gc = G.toObjectSet([
    `age`,
    `authorization`,
    `content-length`,
    `content-type`,
    `etag`,
    `expires`,
    `from`,
    `host`,
    `if-modified-since`,
    `if-unmodified-since`,
    `last-modified`,
    `location`,
    `max-forwards`,
    `proxy-authorization`,
    `referer`,
    `retry-after`,
    `user-agent`,
  ]),
  Kc = (e) => {
    let t = {},
      n,
      r,
      i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (e) {
            ((i = e.indexOf(`:`)),
              (n = e.substring(0, i).trim().toLowerCase()),
              (r = e.substring(i + 1).trim()),
              !(!n || (t[n] && Gc[n])) &&
                (n === `set-cookie`
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + `, ` + r : r)));
          }),
      t
    );
  };
function qc(e) {
  let t = 0,
    n = e.length;
  for (; t < n;) {
    let n = e.charCodeAt(t);
    if (n !== 9 && n !== 32) break;
    t += 1;
  }
  for (; n > t;) {
    let t = e.charCodeAt(n - 1);
    if (t !== 9 && t !== 32) break;
    --n;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
var K = RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`, `g`),
  Jc = RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`, `g`);
function Yc(e, t) {
  return G.isArray(e) ? e.map((e) => Yc(e, t)) : qc(String(e).replace(t, ``));
}
var Xc = (e) => Yc(e, K),
  Zc = (e) => Yc(e, Jc);
function Qc(e) {
  let t = Object.create(null);
  return (
    G.forEach(e.toJSON(), (e, n) => {
      t[n] = Zc(e);
    }),
    t
  );
}
var $c = Symbol(`internals`);
function el(e) {
  return e && String(e).trim().toLowerCase();
}
function tl(e) {
  return e === !1 || e == null ? e : G.isArray(e) ? e.map(tl) : Xc(String(e));
}
function nl(e) {
  let t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
    r;
  for (; (r = n.exec(e));) t[r[1]] = r[2];
  return t;
}
var rl = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function il(e, t, n, r, i) {
  if (G.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), G.isString(t))) {
    if (G.isString(r)) return t.indexOf(r) !== -1;
    if (G.isRegExp(r)) return r.test(t);
  }
}
function al(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function ol(e, t) {
  let n = G.toCamelCase(` ` + t);
  [`get`, `set`, `has`].forEach((r) => {
    Object.defineProperty(e, r + n, {
      __proto__: null,
      value: function (e, n, i) {
        return this[r].call(this, t, e, n, i);
      },
      configurable: !0,
    });
  });
}
var sl = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    let r = this;
    function i(e, t, n) {
      let i = el(t);
      if (!i) return;
      let a = G.findKey(r, i);
      (!a || r[a] === void 0 || n === !0 || (n === void 0 && r[a] !== !1)) &&
        (r[a || t] = tl(e));
    }
    let a = (e, t) => G.forEach(e, (e, n) => i(e, n, t));
    if (G.isPlainObject(e) || e instanceof this.constructor) a(e, t);
    else if (G.isString(e) && (e = e.trim()) && !rl(e)) a(Kc(e), t);
    else if (G.isObject(e) && G.isSafeIterable(e)) {
      let n = Object.create(null),
        r,
        i;
      for (let t of e) {
        if (!G.isArray(t))
          throw TypeError(`Object iterator must return a key-value pair`);
        ((i = t[0]),
          G.hasOwnProp(n, i)
            ? ((r = n[i]), (n[i] = G.isArray(r) ? [...r, t[1]] : [r, t[1]]))
            : (n[i] = t[1]));
      }
      a(n, t);
    } else e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (((e = el(e)), e)) {
      let n = G.findKey(this, e);
      if (n) {
        let e = this[n];
        if (!t) return e;
        if (t === !0) return nl(e);
        if (G.isFunction(t)) return t.call(this, e, n);
        if (G.isRegExp(t)) return t.exec(e);
        throw TypeError(`parser must be boolean|regexp|function`);
      }
    }
  }
  has(e, t) {
    if (((e = el(e)), e)) {
      let n = G.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || il(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    let n = this,
      r = !1;
    function i(e) {
      if (((e = el(e)), e)) {
        let i = G.findKey(n, e);
        i && (!t || il(n, n[i], i, t)) && (delete n[i], (r = !0));
      }
    }
    return (G.isArray(e) ? e.forEach(i) : i(e), r);
  }
  clear(e) {
    let t = Object.keys(this),
      n = t.length,
      r = !1;
    for (; n--;) {
      let i = t[n];
      (!e || il(this, this[i], i, e, !0)) && (delete this[i], (r = !0));
    }
    return r;
  }
  normalize(e) {
    let t = this,
      n = {};
    return (
      G.forEach(this, (r, i) => {
        let a = G.findKey(n, i);
        if (a) {
          ((t[a] = tl(r)), delete t[i]);
          return;
        }
        let o = e ? al(i) : String(i).trim();
        (o !== i && delete t[i], (t[o] = tl(r)), (n[o] = !0));
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    let t = Object.create(null);
    return (
      G.forEach(this, (n, r) => {
        n != null && n !== !1 && (t[r] = e && G.isArray(n) ? n.join(`, `) : n);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + `: ` + t).join(`
`);
  }
  getSetCookie() {
    return this.get(`set-cookie`) || [];
  }
  get [Symbol.toStringTag]() {
    return `AxiosHeaders`;
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    let n = new this(e);
    return (t.forEach((e) => n.set(e)), n);
  }
  static accessor(e) {
    let t = (this[$c] = this[$c] = { accessors: {} }).accessors,
      n = this.prototype;
    function r(e) {
      let r = el(e);
      t[r] || (ol(n, e), (t[r] = !0));
    }
    return (G.isArray(e) ? e.forEach(r) : r(e), this);
  }
};
(sl.accessor([
  `Content-Type`,
  `Content-Length`,
  `Accept`,
  `Accept-Encoding`,
  `User-Agent`,
  `Authorization`,
]),
  G.reduceDescriptors(sl.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[n] = e;
      },
    };
  }),
  G.freezeMethods(sl));
var cl = `[REDACTED ****]`;
function ll(e) {
  if (G.hasOwnProp(e, `toJSON`)) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype;) {
    if (G.hasOwnProp(t, `toJSON`)) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function ul(e, t) {
  let n = new Set(t.map((e) => String(e).toLowerCase())),
    r = [],
    i = (e) => {
      if (typeof e != `object` || !e || G.isBuffer(e)) return e;
      if (r.indexOf(e) !== -1) return;
      (e instanceof sl && (e = e.toJSON()), r.push(e));
      let t;
      if (G.isArray(e))
        ((t = []),
          e.forEach((e, n) => {
            let r = i(e);
            G.isUndefined(r) || (t[n] = r);
          }));
      else {
        if (!G.isPlainObject(e) && ll(e)) return (r.pop(), e);
        t = Object.create(null);
        for (let [r, a] of Object.entries(e)) {
          let e = n.has(r.toLowerCase()) ? cl : i(a);
          G.isUndefined(e) || (t[r] = e);
        }
      }
      return (r.pop(), t);
    };
  return i(e);
}
var q = class e extends Error {
  static from(t, n, r, i, a, o) {
    let s = new e(t.message, n || t.code, r, i, a);
    return (
      Object.defineProperty(s, "cause", {
        __proto__: null,
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      (s.name = t.name),
      t.status != null && s.status == null && (s.status = t.status),
      o && Object.assign(s, o),
      s
    );
  }
  constructor(e, t, n, r, i) {
    (super(e),
      Object.defineProperty(this, "message", {
        __proto__: null,
        value: e,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = `AxiosError`),
      (this.isAxiosError = !0),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && ((this.response = i), (this.status = i.status)));
  }
  toJSON() {
    let e = this.config,
      t = e && G.hasOwnProp(e, `redact`) ? e.redact : void 0,
      n = G.isArray(t) && t.length > 0 ? ul(e, t) : G.toJSONObject(e);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: n,
      code: this.code,
      status: this.status,
    };
  }
};
((q.ERR_BAD_OPTION_VALUE = `ERR_BAD_OPTION_VALUE`),
  (q.ERR_BAD_OPTION = `ERR_BAD_OPTION`),
  (q.ECONNABORTED = `ECONNABORTED`),
  (q.ETIMEDOUT = `ETIMEDOUT`),
  (q.ECONNREFUSED = `ECONNREFUSED`),
  (q.ERR_NETWORK = `ERR_NETWORK`),
  (q.ERR_FR_TOO_MANY_REDIRECTS = `ERR_FR_TOO_MANY_REDIRECTS`),
  (q.ERR_DEPRECATED = `ERR_DEPRECATED`),
  (q.ERR_BAD_RESPONSE = `ERR_BAD_RESPONSE`),
  (q.ERR_BAD_REQUEST = `ERR_BAD_REQUEST`),
  (q.ERR_CANCELED = `ERR_CANCELED`),
  (q.ERR_NOT_SUPPORT = `ERR_NOT_SUPPORT`),
  (q.ERR_INVALID_URL = `ERR_INVALID_URL`),
  (q.ERR_FORM_DATA_DEPTH_EXCEEDED = `ERR_FORM_DATA_DEPTH_EXCEEDED`));
function dl(e) {
  return G.isPlainObject(e) || G.isArray(e);
}
function fl(e) {
  return G.endsWith(e, `[]`) ? e.slice(0, -2) : e;
}
function pl(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (e, t) {
          return ((e = fl(e)), !n && t ? `[` + e + `]` : e);
        })
        .join(n ? `.` : ``)
    : t;
}
function ml(e) {
  return G.isArray(e) && !e.some(dl);
}
var hl = G.toFlatObject(G, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function gl(e, t, n) {
  if (!G.isObject(e)) throw TypeError(`target must be an object`);
  ((t ||= new FormData()),
    (n = G.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (e, t) {
        return !G.isUndefined(t[e]);
      },
    )));
  let r = n.metaTokens,
    i = n.visitor || m,
    a = n.dots,
    o = n.indexes,
    s = n.Blob || (typeof Blob < `u` && Blob),
    c = n.maxDepth === void 0 ? 100 : n.maxDepth,
    l = s && G.isSpecCompliantForm(t),
    u = [];
  if (!G.isFunction(i)) throw TypeError(`visitor must be a function`);
  function d(e) {
    if (e === null) return ``;
    if (G.isDate(e)) return e.toISOString();
    if (G.isBoolean(e)) return e.toString();
    if (!l && G.isBlob(e))
      throw new q(`Blob is not supported. Use a Buffer instead.`);
    if (G.isArrayBuffer(e) || G.isTypedArray(e)) {
      if (l && typeof s == `function`) return new s([e]);
      if (typeof Buffer < `u`) return Buffer.from(e);
      throw new q(
        `Blob is not supported. Use a Buffer instead.`,
        q.ERR_NOT_SUPPORT,
      );
    }
    return e;
  }
  function f(e) {
    if (e > c)
      throw new q(
        `Object is too deeply nested (` + e + ` levels). Max depth: ` + c,
        q.ERR_FORM_DATA_DEPTH_EXCEEDED,
      );
  }
  function p(e, t) {
    if (c === 1 / 0) return JSON.stringify(e);
    let n = [];
    return JSON.stringify(e, function (e, r) {
      if (!G.isObject(r)) return r;
      for (; n.length && n[n.length - 1] !== this;) n.pop();
      return (n.push(r), f(t + n.length - 1), r);
    });
  }
  function m(e, n, i) {
    let s = e;
    if (G.isReactNative(t) && G.isReactNativeBlob(e))
      return (t.append(pl(i, n, a), d(e)), !1);
    if (e && !i && typeof e == `object`) {
      if (G.endsWith(n, `{}`)) ((n = r ? n : n.slice(0, -2)), (e = p(e, 1)));
      else if (
        (G.isArray(e) && ml(e)) ||
        ((G.isFileList(e) || G.endsWith(n, `[]`)) && (s = G.toArray(e)))
      )
        return (
          (n = fl(n)),
          s.forEach(function (e, r) {
            !(G.isUndefined(e) || e === null) &&
              t.append(
                o === !0 ? pl([n], r, a) : o === null ? n : n + `[]`,
                d(e),
              );
          }),
          !1
        );
    }
    return dl(e) ? !0 : (t.append(pl(i, n, a), d(e)), !1);
  }
  let h = Object.assign(hl, {
    defaultVisitor: m,
    convertValue: d,
    isVisitable: dl,
  });
  function g(e, n, r = 0) {
    if (!G.isUndefined(e)) {
      if ((f(r), u.indexOf(e) !== -1))
        throw Error(`Circular reference detected in ` + n.join(`.`));
      (u.push(e),
        G.forEach(e, function (e, a) {
          (!(G.isUndefined(e) || e === null) &&
            i.call(t, e, G.isString(a) ? a.trim() : a, n, h)) === !0 &&
            g(e, n ? n.concat(a) : [a], r + 1);
        }),
        u.pop());
    }
  }
  if (!G.isObject(e)) throw TypeError(`data must be an object`);
  return (g(e), t);
}
function _l(e) {
  let t = {
    "!": `%21`,
    "'": `%27`,
    "(": `%28`,
    ")": `%29`,
    "~": `%7E`,
    "%20": `+`,
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) {
    return t[e];
  });
}
function vl(e, t) {
  ((this._pairs = []), e && gl(e, this, t));
}
var yl = vl.prototype;
((yl.append = function (e, t) {
  this._pairs.push([e, t]);
}),
  (yl.toString = function (e) {
    let t = e ? (t) => e.call(this, t, _l) : _l;
    return this._pairs
      .map(function (e) {
        return t(e[0]) + `=` + t(e[1]);
      }, ``)
      .join(`&`);
  }));
function bl(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, `:`)
    .replace(/%24/g, `$`)
    .replace(/%2C/gi, `,`)
    .replace(/%20/g, `+`);
}
function xl(e, t, n) {
  if (!t) return e;
  e ||= ``;
  let r = G.isFunction(n) ? { serialize: n } : n,
    i = G.getSafeProp(r, `encode`) || bl,
    a = G.getSafeProp(r, `serialize`),
    o;
  if (
    ((o = a
      ? a(t, r)
      : G.isURLSearchParams(t)
        ? t.toString()
        : new vl(t, r).toString(i)),
    o)
  ) {
    let t = e.indexOf(`#`);
    (t !== -1 && (e = e.slice(0, t)),
      (e += (e.indexOf(`?`) === -1 ? `?` : `&`) + o));
  }
  return e;
}
var Sl = class {
    constructor() {
      this.handlers = [];
    }
    use(e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers &&= [];
    }
    forEach(e) {
      G.forEach(this.handlers, function (t) {
        t !== null && e(t);
      });
    }
  },
  Cl = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
    advertiseZstdAcceptEncoding: !1,
    validateStatusUndefinedResolves: !0,
  },
  wl = {
    isBrowser: !0,
    classes: {
      URLSearchParams: typeof URLSearchParams < `u` ? URLSearchParams : vl,
      FormData: typeof FormData < `u` ? FormData : null,
      Blob: typeof Blob < `u` ? Blob : null,
    },
    protocols: [`http`, `https`, `file`, `blob`, `url`, `data`],
  },
  Tl = c({
    hasBrowserEnv: () => El,
    hasStandardBrowserEnv: () => Ol,
    hasStandardBrowserWebWorkerEnv: () => kl,
    navigator: () => Dl,
    origin: () => Al,
  }),
  El = typeof window < `u` && typeof document < `u`,
  Dl = (typeof navigator == `object` && navigator) || void 0,
  Ol =
    El &&
    (!Dl || [`ReactNative`, `NativeScript`, `NS`].indexOf(Dl.product) < 0),
  kl =
    typeof WorkerGlobalScope < `u` &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == `function`,
  Al = (El && window.location.href) || `http://localhost`,
  J = { ...Tl, ...wl };
function jl(e, t) {
  return gl(e, new J.classes.URLSearchParams(), {
    visitor: function (e, t, n, r) {
      return J.isNode && G.isBuffer(e)
        ? (this.append(t, e.toString(`base64`)), !1)
        : r.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
var Ml = 100;
function Nl(e) {
  if (e > Ml)
    throw new q(
      `FormData field is too deeply nested (` +
        e +
        ` levels). Max depth: ` +
        Ml,
      q.ERR_FORM_DATA_DEPTH_EXCEEDED,
    );
}
function Pl(e) {
  let t = [],
    n = /\w+|\[(\w*)]/g,
    r;
  for (; (r = n.exec(e)) !== null;)
    (Nl(t.length), t.push(r[0] === `[]` ? `` : r[1] || r[0]));
  return t;
}
function Fl(e) {
  let t = {},
    n = Object.keys(e),
    r,
    i = n.length,
    a;
  for (r = 0; r < i; r++) ((a = n[r]), (t[a] = e[a]));
  return t;
}
function Il(e) {
  function t(e, n, r, i) {
    Nl(i);
    let a = e[i++];
    if (a === `__proto__`) return !0;
    let o = Number.isFinite(+a),
      s = i >= e.length;
    return (
      (a = !a && G.isArray(r) ? r.length : a),
      s
        ? (G.hasOwnProp(r, a)
            ? (r[a] = G.isArray(r[a]) ? r[a].concat(n) : [r[a], n])
            : (r[a] = n),
          !o)
        : ((!G.hasOwnProp(r, a) || !G.isObject(r[a])) && (r[a] = []),
          t(e, n, r[a], i) && G.isArray(r[a]) && (r[a] = Fl(r[a])),
          !o)
    );
  }
  if (G.isFormData(e) && G.isFunction(e.entries)) {
    let n = {};
    return (
      G.forEachEntry(e, (e, r) => {
        t(Pl(e), r, n, 0);
      }),
      n
    );
  }
  return null;
}
var Ll = (e, t) => (e != null && G.hasOwnProp(e, t) ? e[t] : void 0);
function Rl(e, t, n) {
  if (G.isString(e))
    try {
      return ((t || JSON.parse)(e), G.trim(e));
    } catch (e) {
      if (e.name !== `SyntaxError`) throw e;
    }
  return (n || JSON.stringify)(e);
}
var zl = {
  transitional: Cl,
  adapter: [`xhr`, `http`, `fetch`],
  transformRequest: [
    function (e, t) {
      let n = t.getContentType() || ``,
        r = n.indexOf(`application/json`) > -1,
        i = G.isObject(e);
      if ((i && G.isHTMLForm(e) && (e = new FormData(e)), G.isFormData(e)))
        return r ? JSON.stringify(Il(e)) : e;
      if (
        G.isArrayBuffer(e) ||
        G.isBuffer(e) ||
        G.isStream(e) ||
        G.isFile(e) ||
        G.isBlob(e) ||
        G.isReadableStream(e)
      )
        return e;
      if (G.isArrayBufferView(e)) return e.buffer;
      if (G.isURLSearchParams(e))
        return (
          t.setContentType(
            `application/x-www-form-urlencoded;charset=utf-8`,
            !1,
          ),
          e.toString()
        );
      let a;
      if (i) {
        let t = Ll(this, `formSerializer`);
        if (n.indexOf(`application/x-www-form-urlencoded`) > -1)
          return jl(e, t).toString();
        if ((a = G.isFileList(e)) || n.indexOf(`multipart/form-data`) > -1) {
          let n = Ll(this, `env`),
            r = n && n.FormData;
          return gl(a ? { "files[]": e } : e, r && new r(), t);
        }
      }
      return i || r ? (t.setContentType(`application/json`, !1), Rl(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      let t = Ll(this, `transitional`) || zl.transitional,
        n = t && t.forcedJSONParsing,
        r = Ll(this, `responseType`),
        i = r === `json`;
      if (G.isResponse(e) || G.isReadableStream(e)) return e;
      if (e && G.isString(e) && ((n && !r) || i)) {
        let n = !(t && t.silentJSONParsing) && i;
        try {
          return JSON.parse(e, Ll(this, `parseReviver`));
        } catch (e) {
          if (n)
            throw e.name === `SyntaxError`
              ? q.from(e, q.ERR_BAD_RESPONSE, this, null, Ll(this, `response`))
              : e;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: `XSRF-TOKEN`,
  xsrfHeaderName: `X-XSRF-TOKEN`,
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: J.classes.FormData, Blob: J.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: `application/json, text/plain, */*`,
      "Content-Type": void 0,
    },
  },
};
G.forEach([`delete`, `get`, `head`, `post`, `put`, `patch`, `query`], (e) => {
  zl.headers[e] = {};
});
function Bl(e, t) {
  let n = this || zl,
    r = t || n,
    i = sl.from(r.headers),
    a = r.data;
  return (
    G.forEach(e, function (e) {
      a = e.call(n, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function Vl(e) {
  return !!(e && e.__CANCEL__);
}
var Hl = class extends q {
  constructor(e, t, n) {
    (super(e ?? `canceled`, q.ERR_CANCELED, t, n),
      (this.name = `CanceledError`),
      (this.__CANCEL__ = !0));
  }
};
function Y(e, t, n) {
  let r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new q(
          `Request failed with status code ` + n.status,
          n.status >= 400 && n.status < 500
            ? q.ERR_BAD_REQUEST
            : q.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n,
        ),
      );
}
function Ul(e) {
  let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return (t && t[1]) || ``;
}
function Wl(e, t) {
  e ||= 10;
  let n = Array(e),
    r = Array(e),
    i = 0,
    a = 0,
    o;
  return (
    (t = t === void 0 ? 1e3 : t),
    function (s) {
      let c = Date.now(),
        l = r[a];
      ((o ||= c), (n[i] = s), (r[i] = c));
      let u = a,
        d = 0;
      for (; u !== i;) ((d += n[u++]), (u %= e));
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), c - o < t)) return;
      let f = l && c - l;
      return f ? Math.round((d * 1e3) / f) : void 0;
    }
  );
}
function Gl(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    a,
    o = (t, r = Date.now()) => {
      ((n = r), (i = null), (a &&= (clearTimeout(a), null)), e(...t));
    };
  return [
    (...e) => {
      let t = Date.now(),
        s = t - n;
      s >= r
        ? o(e, t)
        : ((i = e),
          (a ||= setTimeout(() => {
            ((a = null), o(i));
          }, r - s)));
    },
    () => i && o(i),
  ];
}
var Kl = (e, t, n = 3) => {
    let r = 0,
      i = Wl(50, 250);
    return Gl((n) => {
      if (!n || typeof n.loaded != `number`) return;
      let a = n.loaded,
        o = n.lengthComputable ? n.total : void 0,
        s = o == null ? a : Math.min(a, o),
        c = Math.max(0, s - r),
        l = i(c);
      ((r = Math.max(r, s)),
        e({
          loaded: s,
          total: o,
          progress: o ? s / o : void 0,
          bytes: c,
          rate: l || void 0,
          estimated: l && o ? (o - s) / l : void 0,
          event: n,
          lengthComputable: o != null,
          [t ? `download` : `upload`]: !0,
        }));
    }, n);
  },
  ql = (e, t) => {
    let n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Jl =
    (e) =>
    (...t) =>
      G.asap(() => e(...t)),
  Yl = J.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, J.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(J.origin),
        J.navigator && /(msie|trident)/i.test(J.navigator.userAgent),
      )
    : () => !0,
  Xl = J.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, a, o) {
          if (typeof document > `u`) return;
          let s = [`${e}=${encodeURIComponent(t)}`];
          (G.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`),
            G.isString(r) && s.push(`path=${r}`),
            G.isString(i) && s.push(`domain=${i}`),
            a === !0 && s.push(`secure`),
            G.isString(o) && s.push(`SameSite=${o}`),
            (document.cookie = s.join(`; `)));
        },
        read(e) {
          if (typeof document > `u`) return null;
          let t = document.cookie.split(`;`);
          for (let n = 0; n < t.length; n++) {
            let r = t[n].replace(/^\s+/, ``),
              i = r.indexOf(`=`);
            if (i !== -1 && r.slice(0, i) === e)
              try {
                return decodeURIComponent(r.slice(i + 1));
              } catch {
                return r.slice(i + 1);
              }
          }
          return null;
        },
        remove(e) {
          this.write(e, ``, Date.now() - 864e5, `/`);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Zl(e) {
  return typeof e == `string` && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ql(e, t) {
  return t ? e.replace(/\/?\/$/, ``) + `/` + t.replace(/^\/+/, ``) : e;
}
var $l = /^https?:(?!\/\/)/i,
  eu = /[\t\n\r]/g;
function tu(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
  return e.slice(t);
}
function nu(e) {
  return tu(e).replace(eu, ``);
}
function ru(e, t) {
  if (typeof e == `string` && $l.test(nu(e)))
    throw new q(
      `Invalid URL: missing "//" after protocol`,
      q.ERR_INVALID_URL,
      t,
    );
}
function iu(e, t, n, r) {
  ru(t, r);
  let i = !Zl(t);
  return e && (i || n === !1) ? (ru(e, r), Ql(e, t)) : t;
}
var au = (e) => (e instanceof sl ? { ...e } : e);
function ou(e, t) {
  ((e ||= {}), (t ||= {}));
  let n = Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  function r(e, t, n, r) {
    return G.isPlainObject(e) && G.isPlainObject(t)
      ? G.merge.call({ caseless: r }, e, t)
      : G.isPlainObject(t)
        ? G.merge({}, t)
        : G.isArray(t)
          ? t.slice()
          : t;
  }
  function i(e, t, n, i) {
    if (!G.isUndefined(t)) return r(e, t, n, i);
    if (!G.isUndefined(e)) return r(void 0, e, n, i);
  }
  function a(e, t) {
    if (!G.isUndefined(t)) return r(void 0, t);
  }
  function o(e, t) {
    if (!G.isUndefined(t)) return r(void 0, t);
    if (!G.isUndefined(e)) return r(void 0, e);
  }
  function s(n) {
    let r = G.hasOwnProp(t, `transitional`) ? t.transitional : void 0;
    if (!G.isUndefined(r))
      if (G.isPlainObject(r)) {
        if (G.hasOwnProp(r, n)) return r[n];
      } else return;
    let i = G.hasOwnProp(e, `transitional`) ? e.transitional : void 0;
    if (G.isPlainObject(i) && G.hasOwnProp(i, n)) return i[n];
  }
  function c(n, i, a) {
    if (G.hasOwnProp(t, a)) return r(n, i);
    if (G.hasOwnProp(e, a)) return r(void 0, n);
  }
  let l = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    allowedSocketPaths: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (e, t, n) => i(au(e), au(t), n, !0),
  };
  return (
    G.forEach(Object.keys({ ...e, ...t }), function (r) {
      if (r === `__proto__` || r === `constructor` || r === `prototype`) return;
      let a = G.hasOwnProp(l, r) ? l[r] : i,
        o = a(
          G.hasOwnProp(e, r) ? e[r] : void 0,
          G.hasOwnProp(t, r) ? t[r] : void 0,
          r,
        );
      (G.isUndefined(o) && a !== c) || (n[r] = o);
    }),
    G.hasOwnProp(t, `validateStatus`) &&
      G.isUndefined(t.validateStatus) &&
      s(`validateStatusUndefinedResolves`) === !1 &&
      (G.hasOwnProp(e, `validateStatus`)
        ? (n.validateStatus = r(void 0, e.validateStatus))
        : delete n.validateStatus),
    n
  );
}
var su = [`content-type`, `content-length`];
function cu(e, t, n) {
  if (n !== `content-only`) {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([t, n]) => {
    su.includes(t.toLowerCase()) && e.set(t, n);
  });
}
var lu = (e) =>
  encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) =>
    String.fromCharCode(parseInt(t, 16)),
  );
function uu(e) {
  let t = ou({}, e),
    n = (e) => (G.hasOwnProp(t, e) ? t[e] : void 0),
    r = n(`data`),
    i = n(`withXSRFToken`),
    a = n(`xsrfHeaderName`),
    o = n(`xsrfCookieName`),
    s = n(`headers`),
    c = n(`auth`),
    l = n(`baseURL`),
    u = n(`allowAbsoluteUrls`),
    d = n(`url`);
  if (
    ((t.headers = s = sl.from(s)),
    (t.url = xl(iu(l, d, u, t), n(`params`), n(`paramsSerializer`))),
    c)
  ) {
    let t = G.getSafeProp(c, `username`) || ``,
      n = G.getSafeProp(c, `password`) || ``;
    try {
      s.set(`Authorization`, `Basic ` + btoa(t + `:` + (n ? lu(n) : ``)));
    } catch (t) {
      throw q.from(t, q.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (
    (G.isFormData(r) &&
      (J.hasStandardBrowserEnv ||
      J.hasStandardBrowserWebWorkerEnv ||
      G.isReactNative(r)
        ? s.setContentType(void 0)
        : G.isFunction(r.getHeaders) &&
          cu(s, r.getHeaders(), n(`formDataHeaderPolicy`))),
    J.hasStandardBrowserEnv &&
      (G.isFunction(i) && (i = i(t)), i === !0 || (i == null && Yl(t.url))))
  ) {
    let e = a && o && Xl.read(o);
    e && s.set(a, e);
  }
  return t;
}
var du =
    typeof XMLHttpRequest < `u` &&
    function (e) {
      return new Promise(function (t, n) {
        let r = uu(e),
          i = r.data,
          a = sl.from(r.headers).normalize(),
          { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r,
          l,
          u,
          d,
          f,
          p;
        function m() {
          (f && f(),
            p && p(),
            r.cancelToken && r.cancelToken.unsubscribe(l),
            r.signal && r.signal.removeEventListener(`abort`, l));
        }
        let h = new XMLHttpRequest();
        (h.open(r.method.toUpperCase(), r.url, !0), (h.timeout = r.timeout));
        function g() {
          if (!h) return;
          let r = sl.from(
            `getAllResponseHeaders` in h && h.getAllResponseHeaders(),
          );
          (Y(
            function (e) {
              (t(e), m());
            },
            function (e) {
              (n(e), m());
            },
            {
              data:
                !o || o === `text` || o === `json`
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: r,
              config: e,
              request: h,
            },
          ),
            (h = null));
        }
        (`onloadend` in h
          ? (h.onloadend = g)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 &&
                  !(h.responseURL && h.responseURL.startsWith(`file:`))) ||
                setTimeout(g);
            }),
          (h.onabort = function () {
            h &&=
              (n(new q(`Request aborted`, q.ECONNABORTED, e, h)), m(), null);
          }),
          (h.onerror = function (t) {
            let r = new q(
              t && t.message ? t.message : `Network Error`,
              q.ERR_NETWORK,
              e,
              h,
            );
            ((r.event = t || null), n(r), m(), (h = null));
          }),
          (h.ontimeout = function () {
            let t = r.timeout
                ? `timeout of ` + r.timeout + `ms exceeded`
                : `timeout exceeded`,
              i = r.transitional || Cl;
            (r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
              n(
                new q(
                  t,
                  i.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
                  e,
                  h,
                ),
              ),
              m(),
              (h = null));
          }),
          i === void 0 && a.setContentType(null),
          `setRequestHeader` in h &&
            G.forEach(Qc(a), function (e, t) {
              h.setRequestHeader(t, e);
            }),
          G.isUndefined(r.withCredentials) ||
            (h.withCredentials = !!r.withCredentials),
          o && o !== `json` && (h.responseType = r.responseType),
          c && (([d, p] = Kl(c, !0)), h.addEventListener(`progress`, d)),
          s &&
            h.upload &&
            (([u, f] = Kl(s)),
            h.upload.addEventListener(`progress`, u),
            h.upload.addEventListener(`loadend`, f)),
          (r.cancelToken || r.signal) &&
            ((l = (t) => {
              h &&=
                (n(!t || t.type ? new Hl(null, e, h) : t),
                h.abort(),
                m(),
                null);
            }),
            r.cancelToken && r.cancelToken.subscribe(l),
            r.signal &&
              (r.signal.aborted
                ? l()
                : r.signal.addEventListener(`abort`, l))));
        let _ = Ul(r.url);
        if (_ && !J.protocols.includes(_)) {
          (n(new q(`Unsupported protocol ` + _ + `:`, q.ERR_BAD_REQUEST, e)),
            m());
          return;
        }
        h.send(i || null);
      });
    },
  fu = (e, t) => {
    if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
    let n = new AbortController(),
      r = !1,
      i = function (e) {
        if (!r) {
          ((r = !0), o());
          let t = e instanceof Error ? e : this.reason;
          n.abort(
            t instanceof q ? t : new Hl(t instanceof Error ? t.message : t),
          );
        }
      },
      a =
        t &&
        setTimeout(() => {
          ((a = null), i(new q(`timeout of ${t}ms exceeded`, q.ETIMEDOUT)));
        }, t),
      o = () => {
        e &&=
          (a && clearTimeout(a),
          (a = null),
          e.forEach((e) => {
            e.unsubscribe
              ? e.unsubscribe(i)
              : e.removeEventListener(`abort`, i);
          }),
          null);
      };
    e.forEach((e) => e.addEventListener(`abort`, i, { once: !0 }));
    let { signal: s } = n;
    return ((s.unsubscribe = () => G.asap(o)), s);
  },
  pu = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n;) ((i = r + t), yield e.slice(r, i), (r = i));
  },
  mu = async function* (e, t) {
    for await (let n of hu(e)) yield* pu(n, t);
  },
  hu = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    let t = e.getReader();
    try {
      for (;;) {
        let { done: e, value: n } = await t.read();
        if (e) break;
        yield n;
      }
    } finally {
      await t.cancel();
    }
  },
  gu = (e, t, n, r) => {
    let i = mu(e, t),
      a = 0,
      o,
      s = (e) => {
        o || ((o = !0), r && r(e));
      };
    return new ReadableStream(
      {
        async pull(e) {
          try {
            let { done: t, value: r } = await i.next();
            if (t) {
              (s(), e.close());
              return;
            }
            let o = r.byteLength;
            (n && n((a += o)), e.enqueue(new Uint8Array(r)));
          } catch (e) {
            throw (s(e), e);
          }
        },
        cancel(e) {
          return (s(e), i.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  _u = (e) =>
    (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102),
  vu = (e, t, n) =>
    t + 2 < n && _u(e.charCodeAt(t + 1)) && _u(e.charCodeAt(t + 2));
function yu(e) {
  if (!e || typeof e != `string` || !e.startsWith(`data:`)) return 0;
  let t = e.indexOf(`,`);
  if (t < 0) return 0;
  let n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let e = r.length,
      t = r.length;
    for (let n = 0; n < t; n++)
      if (r.charCodeAt(n) === 37 && n + 2 < t) {
        let t = r.charCodeAt(n + 1),
          i = r.charCodeAt(n + 2);
        _u(t) && _u(i) && ((e -= 2), (n += 2));
      }
    let n = 0,
      i = t - 1,
      a = (e) =>
        e >= 2 &&
        r.charCodeAt(e - 2) === 37 &&
        r.charCodeAt(e - 1) === 51 &&
        (r.charCodeAt(e) === 68 || r.charCodeAt(e) === 100);
    (i >= 0 && (r.charCodeAt(i) === 61 ? (n++, i--) : a(i) && (n++, (i -= 3))),
      n === 1 && i >= 0 && (r.charCodeAt(i) === 61 || a(i)) && n++);
    let o = Math.floor(e / 4) * 3 - (n || 0);
    return o > 0 ? o : 0;
  }
  let i = 0;
  for (let e = 0, t = r.length; e < t; e++) {
    let n = r.charCodeAt(e);
    if (n === 37 && vu(r, e, t)) ((i += 1), (e += 2));
    else if (n < 128) i += 1;
    else if (n < 2048) i += 2;
    else if (n >= 55296 && n <= 56319 && e + 1 < t) {
      let t = r.charCodeAt(e + 1);
      t >= 56320 && t <= 57343 ? ((i += 4), e++) : (i += 3);
    } else i += 3;
  }
  return i;
}
var bu = `1.18.1`,
  xu = 65536,
  { isFunction: Su } = G,
  Cu = (e) =>
    encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) =>
      String.fromCharCode(parseInt(t, 16)),
    ),
  wu = (e) => {
    if (!G.isString(e)) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  },
  Tu = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Eu = (e) => {
    let t = e.indexOf(`://`),
      n = e;
    return (
      t !== -1 && (n = n.slice(t + 3)),
      n.includes(`@`) || n.includes(`:`)
    );
  },
  Du = (e) => {
    let t = G.global !== void 0 && G.global !== null ? G.global : globalThis,
      { ReadableStream: n, TextEncoder: r } = t;
    e = G.merge.call(
      { skipUndefined: !0 },
      { Request: t.Request, Response: t.Response },
      e,
    );
    let { fetch: i, Request: a, Response: o } = e,
      s = i ? Su(i) : typeof fetch == `function`,
      c = Su(a),
      l = Su(o);
    if (!s) return !1;
    let u = s && Su(n),
      d =
        s &&
        (typeof r == `function`
          ? (
              (e) => (t) =>
                e.encode(t)
            )(new r())
          : async (e) => new Uint8Array(await new a(e).arrayBuffer())),
      f =
        c &&
        u &&
        Tu(() => {
          let e = !1,
            t = new a(J.origin, {
              body: new n(),
              method: `POST`,
              get duplex() {
                return ((e = !0), `half`);
              },
            }),
            r = t.headers.has(`Content-Type`);
          return (t.body != null && t.body.cancel(), e && !r);
        }),
      p = l && u && Tu(() => G.isReadableStream(new o(``).body)),
      m = { stream: p && ((e) => e.body) };
    s &&
      [`text`, `arrayBuffer`, `blob`, `formData`, `stream`].forEach((e) => {
        !m[e] &&
          (m[e] = (t, n) => {
            let r = t && t[e];
            if (r) return r.call(t);
            throw new q(
              `Response type '${e}' is not supported`,
              q.ERR_NOT_SUPPORT,
              n,
            );
          });
      });
    let h = async (e) => {
        if (e == null) return 0;
        if (G.isBlob(e)) return e.size;
        if (G.isSpecCompliantForm(e))
          return (
            await new a(J.origin, { method: `POST`, body: e }).arrayBuffer()
          ).byteLength;
        if (G.isArrayBufferView(e) || G.isArrayBuffer(e)) return e.byteLength;
        if ((G.isURLSearchParams(e) && (e += ``), G.isString(e)))
          return (await d(e)).byteLength;
      },
      g = async (e, t) => G.toFiniteNumber(e.getContentLength()) ?? h(t);
    return async (e) => {
      let {
          url: t,
          method: n,
          data: s,
          signal: l,
          cancelToken: d,
          timeout: _,
          onDownloadProgress: v,
          onUploadProgress: y,
          responseType: b,
          headers: x,
          withCredentials: S = `same-origin`,
          fetchOptions: C,
          maxContentLength: w,
          maxBodyLength: T,
        } = uu(e),
        ee = G.isNumber(w) && w > -1,
        te = G.isNumber(T) && T > -1,
        ne = (t) => (G.hasOwnProp(e, t) ? e[t] : void 0),
        re = i || fetch;
      b = b ? (b + ``).toLowerCase() : `text`;
      let E = fu([l, d && d.toAbortSignal()], _),
        D = null,
        O =
          E &&
          E.unsubscribe &&
          (() => {
            E.unsubscribe();
          }),
        ie,
        k = null,
        ae = () =>
          new q(
            `Request body larger than maxBodyLength limit`,
            q.ERR_BAD_REQUEST,
            e,
            D,
          );
      try {
        let i,
          l = ne(`auth`);
        if (
          (l &&
            (i = {
              username: G.getSafeProp(l, `username`) || ``,
              password: G.getSafeProp(l, `password`) || ``,
            }),
          Eu(t))
        ) {
          let e = new URL(t, J.origin);
          (!i &&
            (e.username || e.password) &&
            (i = { username: wu(e.username), password: wu(e.password) }),
            (e.username || e.password) &&
              ((e.username = ``), (e.password = ``), (t = e.href)));
        }
        if (
          (i &&
            (x.delete(`authorization`),
            x.set(
              `Authorization`,
              `Basic ` +
                btoa(Cu((i.username || ``) + `:` + (i.password || ``))),
            )),
          ee && typeof t == `string` && t.startsWith(`data:`) && yu(t) > w)
        )
          throw new q(
            `maxContentLength size of ` + w + ` exceeded`,
            q.ERR_BAD_RESPONSE,
            e,
            D,
          );
        if (te && n !== `get` && n !== `head`) {
          let e = await h(s);
          if (typeof e == `number` && isFinite(e) && ((ie = e), e > T))
            throw ae();
        }
        let d = te && (G.isReadableStream(s) || G.isStream(s)),
          _ = (e, t, n) =>
            gu(
              e,
              xu,
              (e) => {
                if (te && e > T) throw (k = ae());
                t && t(e);
              },
              n,
            );
        if (f && n !== `get` && n !== `head` && (y || d)) {
          if (((ie ??= await g(x, s)), ie !== 0 || d)) {
            let e = new a(t, { method: `POST`, body: s, duplex: `half` }),
              n;
            if (
              (G.isFormData(s) &&
                (n = e.headers.get(`content-type`)) &&
                x.setContentType(n),
              e.body)
            ) {
              let [t, n] = (y && ql(ie, Kl(Jl(y)))) || [];
              s = _(e.body, t, n);
            }
          }
        } else if (d && !c && u && n !== `get` && n !== `head`) s = _(s);
        else if (d && c && !f && n !== `get` && n !== `head`)
          throw new q(
            `Stream request bodies are not supported by the current fetch implementation`,
            q.ERR_NOT_SUPPORT,
            e,
            D,
          );
        G.isString(S) || (S = S ? `include` : `omit`);
        let A = c && `credentials` in a.prototype;
        if (G.isFormData(s)) {
          let e = x.getContentType();
          e &&
            /^multipart\/form-data/i.test(e) &&
            !/boundary=/i.test(e) &&
            x.delete(`content-type`);
        }
        x.set(`User-Agent`, `axios/` + bu, !1);
        let oe = {
          ...C,
          signal: E,
          method: n.toUpperCase(),
          headers: Qc(x.normalize()),
          body: s,
          duplex: `half`,
          credentials: A ? S : void 0,
        };
        D = c && new a(t, oe);
        let se = await (c ? re(D, C) : re(t, oe)),
          j = sl.from(se.headers);
        if (ee) {
          let t = G.toFiniteNumber(j.getContentLength());
          if (t != null && t > w)
            throw new q(
              `maxContentLength size of ` + w + ` exceeded`,
              q.ERR_BAD_RESPONSE,
              e,
              D,
            );
        }
        let ce = p && (b === `stream` || b === `response`);
        if (p && se.body && (v || ee || (ce && O))) {
          let t = {};
          [`status`, `statusText`, `headers`].forEach((e) => {
            t[e] = se[e];
          });
          let n = G.toFiniteNumber(j.getContentLength()),
            [r, i] = (v && ql(n, Kl(Jl(v), !0))) || [],
            a = 0;
          se = new o(
            gu(
              se.body,
              xu,
              (t) => {
                if (ee && ((a = t), a > w))
                  throw new q(
                    `maxContentLength size of ` + w + ` exceeded`,
                    q.ERR_BAD_RESPONSE,
                    e,
                    D,
                  );
                r && r(t);
              },
              () => {
                (i && i(), O && O());
              },
            ),
            t,
          );
        }
        b ||= `text`;
        let M = await m[G.findKey(m, b) || `text`](se, e);
        if (ee && !p && !ce) {
          let t;
          if (
            (M != null &&
              (typeof M.byteLength == `number`
                ? (t = M.byteLength)
                : typeof M.size == `number`
                  ? (t = M.size)
                  : typeof M == `string` &&
                    (t =
                      typeof r == `function`
                        ? new r().encode(M).byteLength
                        : M.length)),
            typeof t == `number` && t > w)
          )
            throw new q(
              `maxContentLength size of ` + w + ` exceeded`,
              q.ERR_BAD_RESPONSE,
              e,
              D,
            );
        }
        return (
          !ce && O && O(),
          await new Promise((t, n) => {
            Y(t, n, {
              data: M,
              headers: sl.from(se.headers),
              status: se.status,
              statusText: se.statusText,
              config: e,
              request: D,
            });
          })
        );
      } catch (t) {
        if ((O && O(), E && E.aborted && E.reason instanceof q)) {
          let n = E.reason;
          throw (
            (n.config = e),
            D && (n.request = D),
            t !== n &&
              Object.defineProperty(n, "cause", {
                __proto__: null,
                value: t,
                writable: !0,
                enumerable: !1,
                configurable: !0,
              }),
            n
          );
        }
        if (k) throw (D && !k.request && (k.request = D), k);
        if (t instanceof q) throw (D && !t.request && (t.request = D), t);
        if (
          t &&
          t.name === `TypeError` &&
          /Load failed|fetch/i.test(t.message)
        ) {
          let n = new q(`Network Error`, q.ERR_NETWORK, e, D, t && t.response);
          throw (
            Object.defineProperty(n, "cause", {
              __proto__: null,
              value: t.cause || t,
              writable: !0,
              enumerable: !1,
              configurable: !0,
            }),
            n
          );
        }
        throw q.from(t, t && t.code, e, D, t && t.response);
      }
    };
  },
  Ou = new Map(),
  ku = (e) => {
    let t = (e && e.env) || {},
      { fetch: n, Request: r, Response: i } = t,
      a = [r, i, n],
      o = a.length,
      s,
      c,
      l = Ou;
    for (; o--;)
      ((s = a[o]),
        (c = l.get(s)),
        c === void 0 && l.set(s, (c = o ? new Map() : Du(t))),
        (l = c));
    return c;
  };
ku();
var Au = { http: null, xhr: du, fetch: { get: ku } };
G.forEach(Au, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
var ju = (e) => `- ${e}`,
  Mu = (e) => G.isFunction(e) || e === null || e === !1;
function Nu(e, t) {
  e = G.isArray(e) ? e : [e];
  let { length: n } = e,
    r,
    i,
    a = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let n;
    if (
      ((i = r),
      !Mu(r) && ((i = Au[(n = String(r)).toLowerCase()]), i === void 0))
    )
      throw new q(`Unknown adapter '${n}'`);
    if (i && (G.isFunction(i) || (i = i.get(t)))) break;
    a[n || `#` + o] = i;
  }
  if (!i) {
    let e = Object.entries(a).map(
      ([e, t]) =>
        `adapter ${e} ` +
        (t === !1
          ? `is not supported by the environment`
          : `is not available in the build`),
    );
    throw new q(
      `There is no suitable adapter to dispatch the request ` +
        (n
          ? e.length > 1
            ? `since :
` +
              e.map(ju).join(`
`)
            : ` ` + ju(e[0])
          : `as no adapter specified`),
      q.ERR_NOT_SUPPORT,
    );
  }
  return i;
}
var Pu = { getAdapter: Nu, adapters: Au };
function Fu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Hl(null, e);
}
function Iu(e) {
  return (
    Fu(e),
    (e.headers = sl.from(e.headers)),
    (e.data = Bl.call(e, e.transformRequest)),
    [`post`, `put`, `patch`].indexOf(e.method) !== -1 &&
      e.headers.setContentType(`application/x-www-form-urlencoded`, !1),
    Pu.getAdapter(
      e.adapter || zl.adapter,
      e,
    )(e).then(
      function (t) {
        (Fu(e), (e.response = t));
        try {
          t.data = Bl.call(e, e.transformResponse, t);
        } finally {
          delete e.response;
        }
        return ((t.headers = sl.from(t.headers)), t);
      },
      function (t) {
        if (!Vl(t) && (Fu(e), t && t.response)) {
          e.response = t.response;
          try {
            t.response.data = Bl.call(e, e.transformResponse, t.response);
          } finally {
            delete e.response;
          }
          t.response.headers = sl.from(t.response.headers);
        }
        return Promise.reject(t);
      },
    )
  );
}
var Lu = {};
[`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach(
  (e, t) => {
    Lu[e] = function (n) {
      return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e;
    };
  },
);
var Ru = {};
((Lu.transitional = function (e, t, n) {
  function r(e, t) {
    return (
      `[Axios v` +
      bu +
      `] Transitional option '` +
      e +
      `'` +
      t +
      (n ? `. ` + n : ``)
    );
  }
  return (n, i, a) => {
    if (e === !1)
      throw new q(
        r(i, ` has been removed` + (t ? ` in ` + t : ``)),
        q.ERR_DEPRECATED,
      );
    return (
      t &&
        !Ru[i] &&
        ((Ru[i] = !0),
        console.warn(
          r(
            i,
            ` has been deprecated since v` +
              t +
              ` and will be removed in the near future`,
          ),
        )),
      !e || e(n, i, a)
    );
  };
}),
  (Lu.spelling = function (e) {
    return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
  }));
function zu(e, t, n) {
  if (typeof e != `object` || !e)
    throw new q(`options must be an object`, q.ERR_BAD_OPTION_VALUE);
  let r = Object.keys(e),
    i = r.length;
  for (; i-- > 0;) {
    let a = r[i],
      o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (o) {
      let t = e[a],
        n = t === void 0 || o(t, a, e);
      if (n !== !0)
        throw new q(`option ` + a + ` must be ` + n, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new q(`Unknown option ` + a, q.ERR_BAD_OPTION);
  }
}
var Bu = { assertOptions: zu, validators: Lu },
  Vu = Bu.validators,
  Hu = class {
    constructor(e) {
      ((this.defaults = e || {}),
        (this.interceptors = { request: new Sl(), response: new Sl() }));
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t = {};
          Error.captureStackTrace ? Error.captureStackTrace(t) : (t = Error());
          let n = (() => {
            if (!t.stack) return ``;
            let e = t.stack.indexOf(`
`);
            return e === -1 ? `` : t.stack.slice(e + 1);
          })();
          try {
            if (!e.stack) e.stack = n;
            else if (n) {
              let t = n.indexOf(`
`),
                r =
                  t === -1
                    ? -1
                    : n.indexOf(
                        `
`,
                        t + 1,
                      ),
                i = r === -1 ? `` : n.slice(r + 1);
              String(e.stack).endsWith(i) ||
                (e.stack +=
                  `
` + n);
            }
          } catch {}
        }
        throw e;
      }
    }
    _request(e, t) {
      (typeof e == `string` ? ((t ||= {}), (t.url = e)) : (t = e || {}),
        (t = ou(this.defaults, t)));
      let { transitional: n, paramsSerializer: r, headers: i } = t;
      (n !== void 0 &&
        Bu.assertOptions(
          n,
          {
            silentJSONParsing: Vu.transitional(Vu.boolean),
            forcedJSONParsing: Vu.transitional(Vu.boolean),
            clarifyTimeoutError: Vu.transitional(Vu.boolean),
            legacyInterceptorReqResOrdering: Vu.transitional(Vu.boolean),
            advertiseZstdAcceptEncoding: Vu.transitional(Vu.boolean),
            validateStatusUndefinedResolves: Vu.transitional(Vu.boolean),
          },
          !1,
        ),
        r != null &&
          (G.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : Bu.assertOptions(
                r,
                { encode: Vu.function, serialize: Vu.function },
                !0,
              )),
        t.allowAbsoluteUrls !== void 0 ||
          (this.defaults.allowAbsoluteUrls === void 0
            ? (t.allowAbsoluteUrls = !0)
            : (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)),
        Bu.assertOptions(
          t,
          {
            baseUrl: Vu.spelling(`baseURL`),
            withXsrfToken: Vu.spelling(`withXSRFToken`),
          },
          !0,
        ),
        (t.method = (t.method || this.defaults.method || `get`).toLowerCase()));
      let a = i && G.merge(i.common, i[t.method]);
      (i &&
        G.forEach(
          [`delete`, `get`, `head`, `post`, `put`, `patch`, `query`, `common`],
          (e) => {
            delete i[e];
          },
        ),
        (t.headers = sl.concat(a, i)));
      let o = [],
        s = !0;
      this.interceptors.request.forEach(function (e) {
        if (typeof e.runWhen == `function` && e.runWhen(t) === !1) return;
        s &&= e.synchronous;
        let n = t.transitional || Cl;
        n && n.legacyInterceptorReqResOrdering
          ? o.unshift(e.fulfilled, e.rejected)
          : o.push(e.fulfilled, e.rejected);
      });
      let c = [];
      this.interceptors.response.forEach(function (e) {
        c.push(e.fulfilled, e.rejected);
      });
      let l,
        u = 0,
        d;
      if (!s) {
        let e = [Iu.bind(this), void 0];
        for (
          e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t);
          u < d;
        )
          l = l.then(e[u++], e[u++]);
        return l;
      }
      d = o.length;
      let f = t;
      for (; u < d;) {
        let e = o[u++],
          t = o[u++];
        try {
          f = e(f);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        l = Iu.call(this, f);
      } catch (e) {
        return Promise.reject(e);
      }
      for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
      return l;
    }
    getUri(e) {
      return (
        (e = ou(this.defaults, e)),
        xl(
          iu(e.baseURL, e.url, e.allowAbsoluteUrls, e),
          e.params,
          e.paramsSerializer,
        )
      );
    }
  };
(G.forEach([`delete`, `get`, `head`, `options`], function (e) {
  Hu.prototype[e] = function (t, n) {
    return this.request(
      ou(n || {}, {
        method: e,
        url: t,
        data: n && G.hasOwnProp(n, `data`) ? n.data : void 0,
      }),
    );
  };
}),
  G.forEach([`post`, `put`, `patch`, `query`], function (e) {
    function t(t) {
      return function (n, r, i) {
        return this.request(
          ou(i || {}, {
            method: e,
            headers: t ? { "Content-Type": `multipart/form-data` } : {},
            url: n,
            data: r,
          }),
        );
      };
    }
    ((Hu.prototype[e] = t()),
      e !== `query` && (Hu.prototype[e + `Form`] = t(!0)));
  }));
var Uu = class e {
  constructor(e) {
    if (typeof e != `function`) throw TypeError(`executor must be a function.`);
    let t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    let n = this;
    (this.promise.then((e) => {
      if (!n._listeners) return;
      let t = n._listeners.length;
      for (; t-- > 0;) n._listeners[t](e);
      n._listeners = null;
    }),
      (this.promise.then = (e) => {
        let t,
          r = new Promise((e) => {
            (n.subscribe(e), (t = e));
          }).then(e);
        return (
          (r.cancel = function () {
            n.unsubscribe(t);
          }),
          r
        );
      }),
      e(function (e, r, i) {
        n.reason || ((n.reason = new Hl(e, r, i)), t(n.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    let t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    let e = new AbortController(),
      t = (t) => {
        e.abort(t);
      };
    return (
      this.subscribe(t),
      (e.signal.unsubscribe = () => this.unsubscribe(t)),
      e.signal
    );
  }
  static source() {
    let t;
    return {
      token: new e(function (e) {
        t = e;
      }),
      cancel: t,
    };
  }
};
function Wu(e) {
  return function (t) {
    return e.apply(null, t);
  };
}
function Gu(e) {
  return G.isObject(e) && e.isAxiosError === !0;
}
var Ku = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Ku).forEach(([e, t]) => {
  Ku[t] = e;
});
function qu(e) {
  let t = new Hu(e),
    n = As(Hu.prototype.request, t);
  return (
    G.extend(n, Hu.prototype, t, { allOwnKeys: !0 }),
    G.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (t) {
      return qu(ou(e, t));
    }),
    n
  );
}
var Ju = qu(zl);
((Ju.Axios = Hu),
  (Ju.CanceledError = Hl),
  (Ju.CancelToken = Uu),
  (Ju.isCancel = Vl),
  (Ju.VERSION = bu),
  (Ju.toFormData = gl),
  (Ju.AxiosError = q),
  (Ju.Cancel = Ju.CanceledError),
  (Ju.all = function (e) {
    return Promise.all(e);
  }),
  (Ju.spread = Wu),
  (Ju.isAxiosError = Gu),
  (Ju.mergeConfig = ou),
  (Ju.AxiosHeaders = sl),
  (Ju.formToJSON = (e) => Il(G.isHTMLForm(e) ? new FormData(e) : e)),
  (Ju.getAdapter = Pu.getAdapter),
  (Ju.HttpStatusCode = Ku),
  (Ju.default = Ju));
var Yu = typeof window > `u`,
  Xu = !Yu && window.self !== window.top,
  Zu = !Yu && typeof document > `u`,
  Qu = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15),
  $u = [];
for (let e = 0; e < 256; ++e) $u.push((e + 256).toString(16).slice(1));
function ed(e, t = 0) {
  return (
    $u[e[t + 0]] +
    $u[e[t + 1]] +
    $u[e[t + 2]] +
    $u[e[t + 3]] +
    `-` +
    $u[e[t + 4]] +
    $u[e[t + 5]] +
    `-` +
    $u[e[t + 6]] +
    $u[e[t + 7]] +
    `-` +
    $u[e[t + 8]] +
    $u[e[t + 9]] +
    `-` +
    $u[e[t + 10]] +
    $u[e[t + 11]] +
    $u[e[t + 12]] +
    $u[e[t + 13]] +
    $u[e[t + 14]] +
    $u[e[t + 15]]
  ).toLowerCase();
}
var td,
  nd = new Uint8Array(16);
function rd() {
  if (!td) {
    if (typeof crypto > `u` || !crypto.getRandomValues)
      throw Error(
        `crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`,
      );
    td = crypto.getRandomValues.bind(crypto);
  }
  return td(nd);
}
var id = {
  randomUUID:
    typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto),
};
function ad(e, t, n) {
  e ||= {};
  let r = e.random ?? e.rng?.() ?? rd();
  if (r.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    if (((n ||= 0), n < 0 || n + 16 > t.length))
      throw RangeError(
        `UUID byte range ${n}:${n + 15} is out of buffer bounds`,
      );
    for (let e = 0; e < 16; ++e) t[n + e] = r[e];
    return t;
  }
  return ed(r);
}
function od(e, t, n) {
  return id.randomUUID && !t && !e ? id.randomUUID() : ad(e, t, n);
}
var sd = typeof window < `u` ? window : { base44SharedInstances: {} };
function cd(e, t) {
  return (
    (sd.base44SharedInstances ||= {}),
    sd.base44SharedInstances[e] ||
      (sd.base44SharedInstances[e] = { instance: t() }),
    sd.base44SharedInstances[e].instance
  );
}
var ld = `__user_heartbeat_event__`,
  ud = `__initialization_event__`,
  dd = `__session_duration_event__`,
  fd = `analytics-enable`,
  pd = `base44_analytics_session_id`,
  md = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 6e4,
  },
  X = cd(`analytics`, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    fallbackSessionId: null,
    config: { ...md, ...Dd() },
  })),
  hd = ({
    axiosClient: e,
    serverUrl: t,
    appId: n,
    userAuthModule: r,
    enabled: i,
  }) => {
    let { maxQueueSize: a, throttleTime: o, batchSize: s } = X.config;
    if (!i || !X.config?.enabled || Zu)
      return { track: () => {}, cleanup: () => {} };
    let c,
      l = `${t}/api/apps/${n}/analytics/track/batch`,
      u = async (t) => {
        await e.request({
          method: `POST`,
          url: `/apps/${n}/analytics/track/batch`,
          data: { events: t },
        });
      },
      d = (e) => {
        try {
          let t = JSON.stringify({ events: e }),
            n = new Blob([t], { type: `application/json` });
          return (
            typeof navigator > `u` ||
            t.length > 6e4 ||
            !navigator.sendBeacon(l, n)
          );
        } catch {
          return !1;
        }
      },
      f = async (e, t = {}) => {
        if (e.length === 0) return;
        let n = await Ed(r),
          i = e.map(Cd(n));
        try {
          (!t.isBeacon || !d(i)) && (await u(i));
        } catch {}
      },
      p = () => {
        _d(f, { throttleTime: o, batchSize: s });
      },
      m = (e) => {
        if (X.requestsQueue.length >= a) return;
        let t = Sd();
        (X.requestsQueue.push({ ...e, ...t }), p());
      },
      h = () => {
        (_d(f, { throttleTime: o, batchSize: s }), (c = vd(m)), bd());
      },
      g = () => {
        (gd(), c?.(), xd(m));
        let e = X.requestsQueue.splice(0);
        f(e, { isBeacon: !0 });
      },
      _ = () => {
        typeof window > `u` ||
          (document.visibilityState === `hidden`
            ? g()
            : document.visibilityState === `visible` && h());
      };
    return (
      p(),
      (c = vd(m)),
      yd(m),
      typeof window < `u` && window.addEventListener(`visibilitychange`, _),
      {
        track: m,
        cleanup: () => {
          (gd(),
            c?.(),
            typeof window < `u` &&
              window.removeEventListener(`visibilitychange`, _));
        },
      }
    );
  };
function gd() {
  X.isProcessing = !1;
}
async function _d(e, t) {
  if (X.isProcessing) return;
  X.isProcessing = !0;
  let { throttleTime: n = 1e3, batchSize: r = 30 } = t ?? {};
  for (; X.isProcessing && X.requestsQueue.length > 0;) {
    let t = X.requestsQueue.splice(0, r);
    (t.length && (await e(t)), await new Promise((e) => setTimeout(e, n)));
  }
  X.isProcessing = !1;
}
function vd(e) {
  if (
    typeof window > `u` ||
    X.isHeartBeatProcessing ||
    (X.config.heartBeatInterval ?? 0) < 10
  )
    return () => {};
  X.isHeartBeatProcessing = !0;
  let t = setInterval(() => {
    e({ eventName: ld });
  }, X.config.heartBeatInterval);
  return () => {
    (clearInterval(t), (X.isHeartBeatProcessing = !1));
  };
}
function yd(e) {
  typeof window > `u` ||
    X.wasInitializationTracked ||
    ((X.wasInitializationTracked = !0),
    e({
      eventName: ud,
      properties: { referrer: document == null ? void 0 : document.referrer },
    }));
}
function bd() {
  typeof window > `u` ||
    X.sessionStartTime !== null ||
    (X.sessionStartTime = new Date().toISOString());
}
function xd(e) {
  if (typeof window > `u` || X.sessionStartTime === null) return;
  let t = new Date().getTime() - new Date(X.sessionStartTime).getTime();
  ((X.sessionStartTime = null),
    e({ eventName: dd, properties: { sessionDuration: t } }));
}
function Sd() {
  return {
    timestamp: new Date().toISOString(),
    pageUrl: typeof window < `u` ? (window.location?.pathname ?? null) : null,
  };
}
function Cd(e) {
  return (t) => ({
    event_name: t.eventName,
    properties: t.properties,
    timestamp: t.timestamp,
    page_url: t.pageUrl,
    ...e,
  });
}
var wd = null;
function Td() {
  ((X.sessionContext = null), (wd = null));
}
async function Ed(e) {
  if (!X.sessionContext) {
    if (!e.hasToken()) return { user_id: null, session_id: kd() };
    if (!wd) {
      let t = kd();
      wd = e
        .me()
        .then((e) => ({ user_id: e.id, session_id: t }))
        .catch(() => ({ user_id: null, session_id: t }));
    }
    let t = wd,
      n = await t;
    return (wd === t && (X.sessionContext = n), n);
  }
  return X.sessionContext;
}
function Dd() {
  if (typeof window > `u` || !window.location) return;
  let e = new URLSearchParams(window.location.search).get(fd);
  if (e == null || !e.length) return;
  let t = new URLSearchParams(window.location.search);
  t.delete(fd);
  let n = window.location.pathname + (t.toString() ? `?` + t.toString() : ``);
  return (window.history.replaceState({}, ``, n), { enabled: e === `true` });
}
function Od() {
  return (X.fallbackSessionId ??= Qu());
}
function kd() {
  if (typeof window > `u`) return Od();
  try {
    let e = localStorage.getItem(pd);
    if (!e) {
      let e = Qu();
      return (localStorage.setItem(pd, e), e);
    }
    return e;
  } catch {
    return Od();
  }
}
var Ad = class extends Error {
  constructor(e, t, n, r, i) {
    (super(e),
      (this.name = `Base44Error`),
      (this.status = t),
      (this.code = n),
      (this.data = r),
      (this.originalError = i));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
      data: this.data,
    };
  }
};
function jd({
  baseURL: e,
  headers: t = {},
  token: n,
  interceptResponses: r = !0,
  onError: i,
}) {
  let a = Ju.create({
    baseURL: e,
    headers: {
      "Content-Type": `application/json`,
      Accept: `application/json`,
      ...t,
    },
  });
  return (
    n && (a.defaults.headers.common.Authorization = `Bearer ${n}`),
    a.interceptors.request.use((t) => {
      typeof window < `u` &&
        (window.location && t.headers.set(`X-Origin-URL`, window.location.href),
        t.headers.get(`Authorization`) ||
          t.headers.set(`X-Base44-Anonymous-Id`, kd()));
      let n = od();
      if (((t.requestId = n), Xu))
        try {
          window.parent.postMessage(
            {
              type: `api-request-start`,
              requestId: n,
              data: {
                url: e + t.url,
                method: t.method,
                body: t.data instanceof FormData ? `[FormData object]` : t.data,
              },
            },
            `*`,
          );
        } catch {}
      return t;
    }),
    r &&
      a.interceptors.response.use(
        (e) => {
          let t = e.config?.requestId;
          try {
            Xu &&
              t &&
              window.parent.postMessage(
                {
                  type: `api-request-end`,
                  requestId: t,
                  data: { statusCode: e.status, response: e.data },
                },
                `*`,
              );
          } catch {}
          return e.data;
        },
        (e) => {
          var t;
          let n = new Ad(
            e.response?.data?.message || e.response?.data?.detail || e.message,
            e.response?.status,
            e.response?.data?.code ??
              (t = e.response?.headers)?.get?.call(
                t,
                `x-base44-connector-error`,
              ) ??
              e.response?.headers?.[`x-base44-connector-error`],
            e.response?.data,
            e,
          );
          return (i?.(n), Promise.reject(n));
        },
      ),
    a
  );
}
function Md(e) {
  let { axios: t, appId: n, getSocket: r } = e;
  return new Proxy(
    {},
    {
      get(e, i) {
        if (!(typeof i != `string` || i === `then` || i.startsWith(`_`)))
          return Pd(t, n, i, r);
      },
    },
  );
}
function Nd(e) {
  try {
    let t = JSON.parse(e);
    return {
      type: t.type,
      data: t.data,
      id: t.id || t.data?.id,
      timestamp: t.timestamp || new Date().toISOString(),
    };
  } catch (e) {
    return (
      console.warn(`[Base44 SDK] Failed to parse realtime message:`, e),
      null
    );
  }
}
function Pd(e, t, n, r) {
  let i = `/apps/${t}/entities/${n}`;
  return {
    async list(t, n, r, a) {
      let o = {};
      return (
        t && (o.sort = t),
        n && (o.limit = n),
        r && (o.skip = r),
        a && (o.fields = Array.isArray(a) ? a.join(`,`) : a),
        e.get(i, { params: o })
      );
    },
    async filter(t, n, r, a, o) {
      let s = { q: JSON.stringify(t) };
      return (
        n && (s.sort = n),
        r && (s.limit = r),
        a && (s.skip = a),
        o && (s.fields = Array.isArray(o) ? o.join(`,`) : o),
        e.get(i, { params: s })
      );
    },
    async get(t) {
      return e.get(`${i}/${t}`);
    },
    async create(t) {
      return e.post(i, t);
    },
    async update(t, n) {
      return e.put(`${i}/${t}`, n);
    },
    async delete(t) {
      return e.delete(`${i}/${t}`);
    },
    async deleteMany(t) {
      return e.delete(i, { data: t });
    },
    async bulkCreate(t) {
      return e.post(`${i}/bulk`, t);
    },
    async updateMany(t, n) {
      return e.patch(`${i}/update-many`, { query: t, data: n });
    },
    async bulkUpdate(t) {
      return e.put(`${i}/bulk`, t);
    },
    async importEntities(t) {
      let n = new FormData();
      return (
        n.append(`file`, t, t.name),
        e.post(`${i}/import`, n, {
          headers: { "Content-Type": `multipart/form-data` },
        })
      );
    },
    subscribe(e) {
      let i = `entities:${t}:${n}`;
      return r().subscribeToRoom(i, {
        update_model: (t) => {
          let r = Nd(t.data);
          if (r) {
            r.type !== `delete` &&
              r.data?._oversize &&
              console.error(
                `[Base44 SDK] Realtime broadcast for ${n}#${r.id} was oversize and got slimmed for transport. Fields >10 KB are empty and the rest of the record may be a stub. Call \`entities.${n}.get("${r.id}")\` to fetch the full record.`,
              );
            try {
              e(r);
            } catch (e) {
              console.error(`[Base44 SDK] Subscription callback error:`, e);
            }
          }
        },
      });
    },
  };
}
function Fd(e, t) {
  return {
    async call(n, r, i) {
      if (!n?.trim())
        throw Error(`Integration slug is required and cannot be empty`);
      if (!r?.trim())
        throw Error(`Operation ID is required and cannot be empty`);
      let { pathParams: a, queryParams: o, ...s } = i ?? {},
        c = {
          ...s,
          ...(a && { path_params: a }),
          ...(o && { query_params: o }),
        };
      return await e.post(`/apps/${t}/integrations/custom/${n}/${r}`, c);
    },
  };
}
function Id(e, t) {
  let n = Fd(e, t);
  return new Proxy(
    {},
    {
      get(r, i) {
        if (!(typeof i != `string` || i === `then` || i.startsWith(`_`)))
          return i === `custom`
            ? n
            : new Proxy(
                {},
                {
                  get(n, r) {
                    if (!(
                      typeof r != `string` ||
                      r === `then` ||
                      r.startsWith(`_`)
                    ))
                      return async (n) => {
                        if (typeof n == `string`)
                          throw Error(
                            `Integration ${r} must receive an object with named parameters, received: ${n}`,
                          );
                        let a, o;
                        return (
                          n instanceof FormData ||
                          (n && Object.values(n).some((e) => e instanceof File))
                            ? ((a = new FormData()),
                              Object.keys(n).forEach((e) => {
                                n[e] instanceof File
                                  ? a.append(e, n[e], n[e].name)
                                  : typeof n[e] == `object` && n[e] !== null
                                    ? a.append(e, JSON.stringify(n[e]))
                                    : a.append(e, n[e]);
                              }),
                              (o = `multipart/form-data`))
                            : ((a = n), (o = `application/json`)),
                          i === `Core`
                            ? e.post(
                                `/apps/${t}/integration-endpoints/Core/${r}`,
                                a || n,
                                { headers: { "Content-Type": o } },
                              )
                            : e.post(
                                `/apps/${t}/integration-endpoints/installable/${i}/integration-endpoints/${r}`,
                                a || n,
                                { headers: { "Content-Type": o } },
                              )
                        );
                      };
                  },
                },
              );
      },
    },
  );
}
function Ld() {
  return typeof window > `u` ? !1 : window !== window.parent;
}
function Rd(e, t, n) {
  let r = Math.round(window.screenX + (window.outerWidth - 500) / 2),
    i = Math.round(window.screenY + (window.outerHeight - 600) / 2),
    a = window.open(
      e,
      `base44_auth`,
      `width=500,height=600,left=${r},top=${i},resizable=yes,scrollbars=yes`,
    );
  if (!a) return;
  let o = () => {
      (window.removeEventListener(`message`, s),
        clearInterval(c),
        a.closed || a.close());
    },
    s = (e) => {
      if (e.origin !== n || e.source !== a || !e.data?.access_token) return;
      o();
      let r = new URL(t),
        { access_token: i, is_new_user: s } = e.data;
      (r.searchParams.set(`access_token`, i),
        s != null && r.searchParams.set(`is_new_user`, String(s)),
        (window.location.href = r.toString()));
    },
    c = setInterval(() => {
      a.closed && o();
    }, 500);
  window.addEventListener(`message`, s);
}
function zd(e, t, n, r) {
  let i = null,
    a = () => {
      i = null;
    },
    o = !!r.token;
  return {
    hasToken() {
      return o;
    },
    async me() {
      let t =
        i ??
        e.get(`/apps/${n}/entities/User/me`).finally(() => {
          i === t && (i = null);
        });
      return ((i = t), t);
    },
    async updateMe(t) {
      return e.put(`/apps/${n}/entities/User/me`, t);
    },
    redirectToLogin(e) {
      if (typeof window > `u`)
        throw Error(`Login method can only be used in a browser environment`);
      let t = e
          ? new URL(e, window.location.origin).toString()
          : window.location.href,
        n = `${r.appBaseUrl}/login?from_url=${encodeURIComponent(t)}`;
      window.location.href = n;
    },
    loginWithProvider(e, t = `/`) {
      let i = new URL(t, window.location.origin).toString(),
        a = `app_id=${n}&from_url=${encodeURIComponent(i)}`,
        o;
      o =
        e === `sso`
          ? `/apps/${n}/auth/sso/login`
          : `/apps/auth${e === `google` ? `` : `/${e}`}/login`;
      let s = `${r.appBaseUrl}/api${o}?${a}`;
      if (Ld())
        return Rd(
          `${s}&popup_origin=${encodeURIComponent(window.location.origin)}`,
          i,
          window.location.origin,
        );
      window.location.href = s;
    },
    logout(t) {
      if (
        (delete e.defaults.headers.common.Authorization,
        a(),
        Td(),
        (o = !1),
        typeof window < `u`)
      ) {
        if (window.localStorage)
          try {
            (window.localStorage.removeItem(`base44_access_token`),
              window.localStorage.removeItem(`token`));
          } catch (e) {
            console.error(`Failed to remove token from localStorage:`, e);
          }
        let e = t || window.location.href,
          n = `${r.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(e)}`;
        window.location.href = n;
      }
    },
    setToken(n, r = !0) {
      if (
        n &&
        (a(),
        Td(),
        (o = !0),
        (e.defaults.headers.common.Authorization = `Bearer ${n}`),
        (t.defaults.headers.common.Authorization = `Bearer ${n}`),
        r && typeof window < `u` && window.localStorage)
      )
        try {
          (window.localStorage.setItem(`base44_access_token`, n),
            window.localStorage.setItem(`token`, n));
        } catch (e) {
          console.error(`Failed to save token to localStorage:`, e);
        }
    },
    async loginViaEmailPassword(t, r, i) {
      try {
        let { access_token: a, user: o } = await e.post(
          `/apps/${n}/auth/login`,
          { email: t, password: r, ...(i && { turnstile_token: i }) },
        );
        return (a && this.setToken(a), { access_token: a, user: o });
      } catch (e) {
        throw (e.response?.status === 401 && (await this.logout()), e);
      }
    },
    async isAuthenticated() {
      try {
        return (await this.me(), !0);
      } catch {
        return !1;
      }
    },
    inviteUser(t, r) {
      return e.post(`/apps/${n}/users/invite-user`, { user_email: t, role: r });
    },
    register(t) {
      return e.post(`/apps/${n}/auth/register`, t);
    },
    verifyOtp({ email: t, otpCode: r }) {
      return e.post(`/apps/${n}/auth/verify-otp`, { email: t, otp_code: r });
    },
    resendOtp(t) {
      return e.post(`/apps/${n}/auth/resend-otp`, { email: t });
    },
    resetPasswordRequest(t) {
      return e.post(`/apps/${n}/auth/reset-password-request`, { email: t });
    },
    resetPassword({ resetToken: t, newPassword: r }) {
      return e.post(`/apps/${n}/auth/reset-password`, {
        reset_token: t,
        new_password: r,
      });
    },
    changePassword({ userId: t, currentPassword: r, newPassword: i }) {
      return e.post(`/apps/${n}/auth/change-password`, {
        user_id: t,
        current_password: r,
        new_password: i,
      });
    },
  };
}
function Bd(e, t) {
  return {
    async getAccessToken(n) {
      let r = `/apps/${t}/auth/sso/accesstoken/${n}`;
      return e.get(r);
    },
    async getIdToken(n) {
      let r = `/apps/${t}/auth/sso/idtoken/${n}`;
      return e.get(r);
    },
  };
}
var Vd = new Set([`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`]);
function Hd(e, t) {
  return {
    async getAccessToken(n) {
      if (!n || typeof n != `string`)
        throw Error(`Integration type is required and must be a string`);
      return (
        await e.get(`/apps/${t}/external-auth/tokens/${encodeURIComponent(n)}`)
      ).access_token;
    },
    async getConnection(n) {
      if (!n || typeof n != `string`)
        throw Error(`Integration type is required and must be a string`);
      let r = await e.get(
        `/apps/${t}/external-auth/tokens/${encodeURIComponent(n)}`,
      );
      return {
        accessToken: r.access_token,
        connectionConfig: r.connection_config ?? null,
      };
    },
    async getWorkspaceConnection(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      let r = await e.get(
        `/apps/${t}/external-auth/tokens/connectors/${encodeURIComponent(n)}`,
      );
      return {
        accessToken: r.access_token,
        connectionConfig: r.connection_config ?? null,
      };
    },
    async getCurrentAppUserAccessToken(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      return (
        await e.get(
          `/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}/token`,
        )
      ).access_token;
    },
    async getCurrentAppUserConnection(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      let r = await e.get(
        `/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}/token`,
      );
      return {
        accessToken: r.access_token,
        connectionConfig: r.connection_config ?? null,
      };
    },
    async callApi(n, r) {
      return (
        Ud(n, `Integration type`),
        Wd(e, `/apps/${t}/connectors/${encodeURIComponent(n)}/call`, r)
      );
    },
  };
}
function Ud(e, t) {
  if (!e || typeof e != `string`)
    throw Error(`${t} is required and must be a string`);
}
async function Wd(e, t, n) {
  if (!n || typeof n != `object`)
    throw Error(`Request is required and must be an object`);
  Ud(n.path, `Request path`);
  let r = n.method ?? `GET`;
  if (!Vd.has(r))
    throw Error(
      `Request method must be one of GET, POST, PUT, PATCH, DELETE, or HEAD`,
    );
  let i = await e.post(t, {
    method: r,
    ...(n.host == null ? {} : { host: n.host }),
    path: n.path,
    query: n.query ?? {},
    headers: n.headers ?? {},
    body: n.body ?? null,
  });
  return {
    success: i.success,
    phase: i.phase,
    status: i.status_code ?? null,
    data: i.data,
    dataBase64: i.data_base64 ?? null,
    contentType: i.content_type ?? null,
    headers: i.headers ?? {},
    creditsCharged: i.credits_charged ?? 0,
  };
}
function Gd(e, t) {
  return {
    async connectAppUser(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      return (
        await e.post(
          `/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}/initiate`,
        )
      ).redirect_url;
    },
    async disconnectAppUser(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      await e.delete(
        `/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}`,
      );
    },
  };
}
function Kd(e = {}) {
  let {
      storageKey: t = `base44_access_token`,
      paramName: n = `access_token`,
      saveToStorage: r = !0,
      removeFromUrl: i = !0,
    } = e,
    a = null;
  if (typeof window < `u` && window.location)
    try {
      let e = new URLSearchParams(window.location.search);
      if (((a = e.get(n)), a)) {
        if ((r && qd(a, { storageKey: t }), i)) {
          e.delete(n);
          let t = `${window.location.pathname}${e.toString() ? `?${e.toString()}` : ``}${window.location.hash}`;
          window.history.replaceState({}, document.title, t);
        }
        return a;
      }
    } catch (e) {
      console.error(`Error retrieving token from URL:`, e);
    }
  if (typeof window < `u` && window.localStorage)
    try {
      return ((a = window.localStorage.getItem(t)), a);
    } catch (e) {
      console.error(`Error retrieving token from local storage:`, e);
    }
  return null;
}
function qd(e, t) {
  let { storageKey: n = `base44_access_token` } = t;
  if (typeof window > `u` || !window.localStorage || !e) return !1;
  try {
    return (
      window.localStorage.setItem(n, e),
      window.localStorage.setItem(`token`, e),
      !0
    );
  } catch (e) {
    return (console.error(`Error saving token to local storage:`, e), !1);
  }
}
function Jd({
  axios: e,
  serviceRoleAxios: t,
  appId: n,
  serverUrl: r,
  functionsVersion: i,
  platformHeaders: a,
}) {
  let o = new Headers(a),
    s = (e) => {
      let t = e.defaults.headers.common.Authorization;
      return typeof t == `string` && t.startsWith(`Bearer `) ? t : null;
    };
  return async function (a, c = {}) {
    Yd(a);
    let { fetch: l = fetch, ...u } = c,
      d = new Headers(c.headers),
      f = (e, t) => {
        t && !d.has(e) && d.set(e, t);
      };
    return (
      f(`Authorization`, s(e)),
      f(`Base44-Service-Authorization`, s(t)),
      f(`Base44-App-Id`, n),
      f(`Base44-Api-Url`, r),
      f(`Base44-Functions-Version`, i),
      f(`Base44-State`, o.get(`Base44-State`)),
      f(`X-Data-Env`, o.get(`X-Data-Env`)),
      l(a, { ...u, headers: d })
    );
  };
}
function Yd(e) {
  if (typeof e != `string` || e === ``)
    throw Error(`fetchWithAuth() requires a path, such as '/api/orders'.`);
  let t = e.replace(/[\t\n\r]/g, ``).replace(/^[\x00-\x20]+/, ``);
  if (!t.startsWith(`/`) || t.startsWith(`//`) || t.startsWith(`/\\`))
    throw Error(
      `fetchWithAuth() only sends requests to your app's own origin, so your app's credentials never reach a third party. "${e}" is not a path on it — pass a relative path such as '/api/orders'. Use base44.functions.fetch() to call a Base44 backend function, or plain fetch() for another origin.`,
    );
}
function Xd(e, t, n) {
  let r = (e, t) => (e ? `${String(e).replace(/\/$/, ``)}${t}` : t),
    i = (e) => {
      let t = new Headers();
      if (n?.getAuthHeaders) {
        let e = n.getAuthHeaders();
        Object.entries(e).forEach(([e, n]) => {
          n != null && t.set(e, String(n));
        });
      }
      return (
        e &&
          new Headers(e).forEach((e, n) => {
            t.set(n, e);
          }),
        t
      );
    };
  return {
    async invoke(n, r) {
      if (typeof r == `string`)
        throw Error(
          `Function ${n} must receive an object with named parameters, received: ${r}`,
        );
      let i, a;
      return (
        r instanceof FormData ||
        (r && Object.values(r).some((e) => e instanceof File))
          ? ((i = new FormData()),
            Object.keys(r).forEach((e) => {
              r[e] instanceof File
                ? i.append(e, r[e], r[e].name)
                : typeof r[e] == `object` && r[e] !== null
                  ? i.append(e, JSON.stringify(r[e]))
                  : i.append(e, r[e]);
            }),
            (a = `multipart/form-data`))
          : ((i = r), (a = `application/json`)),
        e.post(`/apps/${t}/functions/${n}`, i || r, {
          headers: { "Content-Type": a },
        })
      );
    },
    async fetch(e, t = {}) {
      let a = `/functions${e.startsWith(`/`) ? e : `/${e}`}`,
        o = i(t.headers),
        s = { ...t, headers: o };
      return await fetch(r(n?.baseURL, a), s);
    },
  };
}
function Zd({ axios: e, getSocket: t, appId: n, serverUrl: r, token: i }) {
  let a = `/apps/${n}/agents`,
    o = {},
    s = () => e.get(`${a}/conversations`),
    c = (t) => e.get(`${a}/conversations/${t}`);
  return {
    getConversations: s,
    getConversation: c,
    listConversations: (t) => e.get(`${a}/conversations`, { params: t }),
    createConversation: (t) => e.post(`${a}/conversations`, t),
    addMessage: async (t, n) =>
      e.post(`${a}/conversations/v2/${t.id}/messages`, n),
    subscribeToConversation: (e, n) => {
      let r = `/agent-conversations/${e}`,
        i = t(),
        a = c(e).then((t) => ((o[e] = t), t));
      return i.subscribeToRoom(r, {
        connect: () => {},
        update_model: async ({ data: t }) => {
          let r = JSON.parse(t);
          if (r._message) {
            await a;
            let t = r._message,
              i = o[e];
            if (i) {
              let r = i.messages || [],
                a = r.findIndex((e) => e.id === t.id),
                s = a === -1 ? [...r, t] : r.map((e, n) => (n === a ? t : e));
              ((o[e] = { ...i, messages: s }), n?.(o[e]));
            }
          }
        },
      });
    },
    getWhatsAppConnectURL: (e) => {
      let t = `${r}/api/apps/${n}/agents/${encodeURIComponent(e)}/whatsapp`,
        a = i ?? Kd();
      return a ? `${t}?token=${a}` : t;
    },
    getTelegramConnectURL: (e) => {
      let t = `${r}/api/apps/${n}/agents/${encodeURIComponent(e)}/telegram`,
        a = i ?? Kd();
      return a ? `${t}?token=${a}` : t;
    },
  };
}
function Qd({ serverUrl: e, token: t, appId: n }) {
  return {
    connection: () => ({
      baseURL: `${e}/api/apps/${n}/ai/openai/v1`,
      token: t ?? Kd() ?? ``,
    }),
  };
}
function $d(e, t) {
  let n = `/app-logs/${t}`;
  return {
    async logUserInApp(t) {
      await e.post(`${n}/log-user-in-app/${t}`);
    },
    async fetchLogs(t = {}) {
      return await e.get(n, { params: t });
    },
    async getStats(t = {}) {
      return await e.get(`${n}/stats`, { params: t });
    },
  };
}
function ef(e, t) {
  return {
    async getPublicSettings() {
      return e.get(`/apps/public/prod/public-settings/by-id/${t}`);
    },
  };
}
function tf(e, t) {
  return {
    async inviteUser(n, r) {
      if (r !== `user` && r !== `admin`)
        throw Error(
          `Invalid role: "${r}". Role must be either "user" or "admin".`,
        );
      return await e.post(`/apps/${t}/runtime/users/invite-user`, {
        user_email: n,
        role: r,
      });
    },
  };
}
var nf = Object.create(null);
((nf.open = `0`),
  (nf.close = `1`),
  (nf.ping = `2`),
  (nf.pong = `3`),
  (nf.message = `4`),
  (nf.upgrade = `5`),
  (nf.noop = `6`));
var rf = Object.create(null);
Object.keys(nf).forEach((e) => {
  rf[nf[e]] = e;
});
var af = { type: `error`, data: `parser error` },
  of =
    typeof Blob == `function` ||
    (typeof Blob < `u` &&
      Object.prototype.toString.call(Blob) === `[object BlobConstructor]`),
  sf = typeof ArrayBuffer == `function`,
  cf = (e) =>
    typeof ArrayBuffer.isView == `function`
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  lf = ({ type: e, data: t }, n, r) =>
    of && t instanceof Blob
      ? n
        ? r(t)
        : uf(t, r)
      : sf && (t instanceof ArrayBuffer || cf(t))
        ? n
          ? r(t)
          : uf(new Blob([t]), r)
        : r(nf[e] + (t || ``)),
  uf = (e, t) => {
    let n = new FileReader();
    return (
      (n.onload = function () {
        let e = n.result.split(`,`)[1];
        t(`b` + (e || ``));
      }),
      n.readAsDataURL(e)
    );
  };
function df(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
var ff;
function pf(e, t) {
  if (of && e.data instanceof Blob)
    return e.data.arrayBuffer().then(df).then(t);
  if (sf && (e.data instanceof ArrayBuffer || cf(e.data))) return t(df(e.data));
  lf(e, !1, (e) => {
    ((ff ||= new TextEncoder()), t(ff.encode(e)));
  });
}
var mf = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
  hf = typeof Uint8Array > `u` ? [] : new Uint8Array(256);
for (let e = 0; e < 64; e++) hf[mf.charCodeAt(e)] = e;
var gf = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      a,
      o,
      s,
      c;
    e[e.length - 1] === `=` && (t--, e[e.length - 2] === `=` && t--);
    let l = new ArrayBuffer(t),
      u = new Uint8Array(l);
    for (r = 0; r < n; r += 4)
      ((a = hf[e.charCodeAt(r)]),
        (o = hf[e.charCodeAt(r + 1)]),
        (s = hf[e.charCodeAt(r + 2)]),
        (c = hf[e.charCodeAt(r + 3)]),
        (u[i++] = (a << 2) | (o >> 4)),
        (u[i++] = ((o & 15) << 4) | (s >> 2)),
        (u[i++] = ((s & 3) << 6) | (c & 63)));
    return l;
  },
  _f = typeof ArrayBuffer == `function`,
  vf = (e, t) => {
    if (typeof e != `string`) return { type: `message`, data: bf(e, t) };
    let n = e.charAt(0);
    return n === `b`
      ? { type: `message`, data: yf(e.substring(1), t) }
      : rf[n]
        ? e.length > 1
          ? { type: rf[n], data: e.substring(1) }
          : { type: rf[n] }
        : af;
  },
  yf = (e, t) => (_f ? bf(gf(e), t) : { base64: !0, data: e }),
  bf = (e, t) => {
    switch (t) {
      case `blob`:
        return e instanceof Blob ? e : new Blob([e]);
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  xf = ``,
  Sf = (e, t) => {
    let n = e.length,
      r = Array(n),
      i = 0;
    e.forEach((e, a) => {
      lf(e, !1, (e) => {
        ((r[a] = e), ++i === n && t(r.join(xf)));
      });
    });
  },
  Cf = (e, t) => {
    let n = e.split(xf),
      r = [];
    for (let e = 0; e < n.length; e++) {
      let i = vf(n[e], t);
      if ((r.push(i), i.type === `error`)) break;
    }
    return r;
  };
function wf() {
  return new TransformStream({
    transform(e, t) {
      pf(e, (n) => {
        let r = n.length,
          i;
        if (r < 126)
          ((i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r));
        else if (r < 65536) {
          i = new Uint8Array(3);
          let e = new DataView(i.buffer);
          (e.setUint8(0, 126), e.setUint16(1, r));
        } else {
          i = new Uint8Array(9);
          let e = new DataView(i.buffer);
          (e.setUint8(0, 127), e.setBigUint64(1, BigInt(r)));
        }
        (e.data && typeof e.data != `string` && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n));
      });
    },
  });
}
var Tf;
function Ef(e) {
  return e.reduce((e, t) => e + t.length, 0);
}
function Df(e, t) {
  if (e[0].length === t) return e.shift();
  let n = new Uint8Array(t),
    r = 0;
  for (let i = 0; i < t; i++)
    ((n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0)));
  return (e.length && r < e[0].length && (e[0] = e[0].slice(r)), n);
}
function Of(e, t) {
  Tf ||= new TextDecoder();
  let n = [],
    r = 0,
    i = -1,
    a = !1;
  return new TransformStream({
    transform(o, s) {
      for (n.push(o); ;) {
        if (r === 0) {
          if (Ef(n) < 1) break;
          let e = Df(n, 1);
          ((a = (e[0] & 128) == 128),
            (i = e[0] & 127),
            (r = i < 126 ? 3 : i === 126 ? 1 : 2));
        } else if (r === 1) {
          if (Ef(n) < 2) break;
          let e = Df(n, 2);
          ((i = new DataView(e.buffer, e.byteOffset, e.length).getUint16(0)),
            (r = 3));
        } else if (r === 2) {
          if (Ef(n) < 8) break;
          let e = Df(n, 8),
            t = new DataView(e.buffer, e.byteOffset, e.length),
            a = t.getUint32(0);
          if (a > 2 ** 21 - 1) {
            s.enqueue(af);
            break;
          }
          ((i = a * 2 ** 32 + t.getUint32(4)), (r = 3));
        } else {
          if (Ef(n) < i) break;
          let e = Df(n, i);
          (s.enqueue(vf(a ? e : Tf.decode(e), t)), (r = 0));
        }
        if (i === 0 || i > e) {
          s.enqueue(af);
          break;
        }
      }
    },
  });
}
function kf(e) {
  if (e) return Af(e);
}
function Af(e) {
  for (var t in kf.prototype) e[t] = kf.prototype[t];
  return e;
}
((kf.prototype.on = kf.prototype.addEventListener =
  function (e, t) {
    return (
      (this._callbacks = this._callbacks || {}),
      (this._callbacks[`$` + e] = this._callbacks[`$` + e] || []).push(t),
      this
    );
  }),
  (kf.prototype.once = function (e, t) {
    function n() {
      (this.off(e, n), t.apply(this, arguments));
    }
    return ((n.fn = t), this.on(e, n), this);
  }),
  (kf.prototype.off =
    kf.prototype.removeListener =
    kf.prototype.removeAllListeners =
    kf.prototype.removeEventListener =
      function (e, t) {
        if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
          return ((this._callbacks = {}), this);
        var n = this._callbacks[`$` + e];
        if (!n) return this;
        if (arguments.length == 1)
          return (delete this._callbacks[`$` + e], this);
        for (var r, i = 0; i < n.length; i++)
          if (((r = n[i]), r === t || r.fn === t)) {
            n.splice(i, 1);
            break;
          }
        return (n.length === 0 && delete this._callbacks[`$` + e], this);
      }),
  (kf.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (
      var t = Array(arguments.length - 1), n = this._callbacks[`$` + e], r = 1;
      r < arguments.length;
      r++
    )
      t[r - 1] = arguments[r];
    if (n) {
      n = n.slice(0);
      for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
    }
    return this;
  }),
  (kf.prototype.emitReserved = kf.prototype.emit),
  (kf.prototype.listeners = function (e) {
    return (
      (this._callbacks = this._callbacks || {}),
      this._callbacks[`$` + e] || []
    );
  }),
  (kf.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length;
  }));
var jf =
    typeof Promise == `function` && typeof Promise.resolve == `function`
      ? (e) => Promise.resolve().then(e)
      : (e, t) => t(e, 0),
  Mf =
    typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : Function(`return this`)(),
  Nf = `arraybuffer`;
function Pf(e, ...t) {
  return t.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
var Ff = Mf.setTimeout,
  If = Mf.clearTimeout;
function Lf(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = Ff.bind(Mf)), (e.clearTimeoutFn = If.bind(Mf)))
    : ((e.setTimeoutFn = Mf.setTimeout.bind(Mf)),
      (e.clearTimeoutFn = Mf.clearTimeout.bind(Mf)));
}
var Rf = 1.33;
function zf(e) {
  return typeof e == `string`
    ? Bf(e)
    : Math.ceil((e.byteLength || e.size) * Rf);
}
function Bf(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    ((t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
          ? (n += 2)
          : t < 55296 || t >= 57344
            ? (n += 3)
            : (r++, (n += 4)));
  return n;
}
function Vf() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function Hf(e) {
  let t = ``;
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += `&`),
      (t += encodeURIComponent(n) + `=` + encodeURIComponent(e[n])));
  return t;
}
function Uf(e) {
  let t = {},
    n = e.split(`&`);
  for (let e = 0, r = n.length; e < r; e++) {
    let r = n[e].split(`=`);
    t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
  }
  return t;
}
var Wf = class extends Error {
    constructor(e, t, n) {
      (super(e),
        (this.description = t),
        (this.context = n),
        (this.type = `TransportError`));
    }
  },
  Gf = class extends kf {
    constructor(e) {
      (super(),
        (this.writable = !1),
        Lf(this, e),
        (this.opts = e),
        (this.query = e.query),
        (this.socket = e.socket),
        (this.supportsBinary = !e.forceBase64));
    }
    onError(e, t, n) {
      return (super.emitReserved(`error`, new Wf(e, t, n)), this);
    }
    open() {
      return ((this.readyState = `opening`), this.doOpen(), this);
    }
    close() {
      return (
        (this.readyState === `opening` || this.readyState === `open`) &&
          (this.doClose(), this.onClose()),
        this
      );
    }
    send(e) {
      this.readyState === `open` && this.write(e);
    }
    onOpen() {
      ((this.readyState = `open`),
        (this.writable = !0),
        super.emitReserved(`open`));
    }
    onData(e) {
      let t = vf(e, this.socket.binaryType);
      this.onPacket(t);
    }
    onPacket(e) {
      super.emitReserved(`packet`, e);
    }
    onClose(e) {
      ((this.readyState = `closed`), super.emitReserved(`close`, e));
    }
    pause(e) {}
    createUri(e, t = {}) {
      return (
        e +
        `://` +
        this._hostname() +
        this._port() +
        this.opts.path +
        this._query(t)
      );
    }
    _hostname() {
      let e = this.opts.hostname;
      return e.indexOf(`:`) === -1 ? e : `[` + e + `]`;
    }
    _port() {
      return this.opts.port &&
        ((this.opts.secure && Number(this.opts.port) !== 443) ||
          (!this.opts.secure && Number(this.opts.port) !== 80))
        ? `:` + this.opts.port
        : ``;
    }
    _query(e) {
      let t = Hf(e);
      return t.length ? `?` + t : ``;
    }
  },
  Kf = class extends Gf {
    constructor() {
      (super(...arguments), (this._polling = !1));
    }
    get name() {
      return `polling`;
    }
    doOpen() {
      this._poll();
    }
    pause(e) {
      this.readyState = `pausing`;
      let t = () => {
        ((this.readyState = `paused`), e());
      };
      if (this._polling || !this.writable) {
        let e = 0;
        (this._polling &&
          (e++,
          this.once(`pollComplete`, function () {
            --e || t();
          })),
          this.writable ||
            (e++,
            this.once(`drain`, function () {
              --e || t();
            })));
      } else t();
    }
    _poll() {
      ((this._polling = !0), this.doPoll(), this.emitReserved(`poll`));
    }
    onData(e) {
      (Cf(e, this.socket.binaryType).forEach((e) => {
        if (
          (this.readyState === `opening` && e.type === `open` && this.onOpen(),
          e.type === `close`)
        )
          return (
            this.onClose({ description: `transport closed by the server` }),
            !1
          );
        this.onPacket(e);
      }),
        this.readyState !== `closed` &&
          ((this._polling = !1),
          this.emitReserved(`pollComplete`),
          this.readyState === `open` && this._poll()));
    }
    doClose() {
      let e = () => {
        this.write([{ type: `close` }]);
      };
      this.readyState === `open` ? e() : this.once(`open`, e);
    }
    write(e) {
      ((this.writable = !1),
        Sf(e, (e) => {
          this.doWrite(e, () => {
            ((this.writable = !0), this.emitReserved(`drain`));
          });
        }));
    }
    uri() {
      let e = this.opts.secure ? `https` : `http`,
        t = this.query || {};
      return (
        !1 !== this.opts.timestampRequests &&
          (t[this.opts.timestampParam] = Vf()),
        !this.supportsBinary && !t.sid && (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  },
  qf = !1;
try {
  qf = typeof XMLHttpRequest < `u` && `withCredentials` in new XMLHttpRequest();
} catch {}
var Jf = qf;
function Yf() {}
var Xf = class extends Kf {
    constructor(e) {
      if ((super(e), typeof location < `u`)) {
        let t = location.protocol === `https:`,
          n = location.port;
        ((n ||= t ? `443` : `80`),
          (this.xd =
            (typeof location < `u` && e.hostname !== location.hostname) ||
            n !== e.port));
      }
    }
    doWrite(e, t) {
      let n = this.request({ method: `POST`, data: e });
      (n.on(`success`, t),
        n.on(`error`, (e, t) => {
          this.onError(`xhr post error`, e, t);
        }));
    }
    doPoll() {
      let e = this.request();
      (e.on(`data`, this.onData.bind(this)),
        e.on(`error`, (e, t) => {
          this.onError(`xhr poll error`, e, t);
        }),
        (this.pollXhr = e));
    }
  },
  Zf = class e extends kf {
    constructor(e, t, n) {
      (super(),
        (this.createRequest = e),
        Lf(this, n),
        (this._opts = n),
        (this._method = n.method || `GET`),
        (this._uri = t),
        (this._data = n.data === void 0 ? null : n.data),
        this._create());
    }
    _create() {
      var t;
      let n = Pf(
        this._opts,
        `agent`,
        `pfx`,
        `key`,
        `passphrase`,
        `cert`,
        `ca`,
        `ciphers`,
        `rejectUnauthorized`,
        `autoUnref`,
      );
      n.xdomain = !!this._opts.xd;
      let r = (this._xhr = this.createRequest(n));
      try {
        r.open(this._method, this._uri, !0);
        try {
          if (this._opts.extraHeaders) {
            r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
            for (let e in this._opts.extraHeaders)
              this._opts.extraHeaders.hasOwnProperty(e) &&
                r.setRequestHeader(e, this._opts.extraHeaders[e]);
          }
        } catch {}
        if (this._method === `POST`)
          try {
            r.setRequestHeader(`Content-type`, `text/plain;charset=UTF-8`);
          } catch {}
        try {
          r.setRequestHeader(`Accept`, `*/*`);
        } catch {}
        ((t = this._opts.cookieJar) == null || t.addCookies(r),
          `withCredentials` in r &&
            (r.withCredentials = this._opts.withCredentials),
          this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
          (r.onreadystatechange = () => {
            var e;
            (r.readyState === 3 &&
              ((e = this._opts.cookieJar) == null ||
                e.parseCookies(r.getResponseHeader(`set-cookie`))),
              r.readyState === 4 &&
                (r.status === 200 || r.status === 1223
                  ? this._onLoad()
                  : this.setTimeoutFn(() => {
                      this._onError(typeof r.status == `number` ? r.status : 0);
                    }, 0)));
          }),
          r.send(this._data));
      } catch (e) {
        this.setTimeoutFn(() => {
          this._onError(e);
        }, 0);
        return;
      }
      typeof document < `u` &&
        ((this._index = e.requestsCount++), (e.requests[this._index] = this));
    }
    _onError(e) {
      (this.emitReserved(`error`, e, this._xhr), this._cleanup(!0));
    }
    _cleanup(t) {
      if (this._xhr !== void 0 && this._xhr !== null) {
        if (((this._xhr.onreadystatechange = Yf), t))
          try {
            this._xhr.abort();
          } catch {}
        (typeof document < `u` && delete e.requests[this._index],
          (this._xhr = null));
      }
    }
    _onLoad() {
      let e = this._xhr.responseText;
      e !== null &&
        (this.emitReserved(`data`, e),
        this.emitReserved(`success`),
        this._cleanup());
    }
    abort() {
      this._cleanup();
    }
  };
if (((Zf.requestsCount = 0), (Zf.requests = {}), typeof document < `u`)) {
  if (typeof attachEvent == `function`) attachEvent(`onunload`, Qf);
  else if (typeof addEventListener == `function`) {
    let e = `onpagehide` in Mf ? `pagehide` : `unload`;
    addEventListener(e, Qf, !1);
  }
}
function Qf() {
  for (let e in Zf.requests)
    Zf.requests.hasOwnProperty(e) && Zf.requests[e].abort();
}
var $f = (function () {
    let e = tp({ xdomain: !1 });
    return e && e.responseType !== null;
  })(),
  ep = class extends Xf {
    constructor(e) {
      super(e);
      let t = e && e.forceBase64;
      this.supportsBinary = $f && !t;
    }
    request(e = {}) {
      return (
        Object.assign(e, { xd: this.xd }, this.opts),
        new Zf(tp, this.uri(), e)
      );
    }
  };
function tp(e) {
  let t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < `u` && (!t || Jf)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new Mf[[`Active`, `Object`].join(`X`)](`Microsoft.XMLHTTP`);
    } catch {}
}
var np =
    typeof navigator < `u` &&
    typeof navigator.product == `string` &&
    navigator.product.toLowerCase() === `reactnative`,
  rp = class extends Gf {
    get name() {
      return `websocket`;
    }
    doOpen() {
      let e = this.uri(),
        t = this.opts.protocols,
        n = np
          ? {}
          : Pf(
              this.opts,
              `agent`,
              `perMessageDeflate`,
              `pfx`,
              `key`,
              `passphrase`,
              `cert`,
              `ca`,
              `ciphers`,
              `rejectUnauthorized`,
              `localAddress`,
              `protocolVersion`,
              `origin`,
              `maxPayload`,
              `family`,
              `checkServerIdentity`,
            );
      this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
      try {
        this.ws = this.createSocket(e, t, n);
      } catch (e) {
        return this.emitReserved(`error`, e);
      }
      ((this.ws.binaryType = this.socket.binaryType), this.addEventListeners());
    }
    addEventListeners() {
      ((this.ws.onopen = () => {
        (this.opts.autoUnref && this.ws._socket.unref(), this.onOpen());
      }),
        (this.ws.onclose = (e) =>
          this.onClose({
            description: `websocket connection closed`,
            context: e,
          })),
        (this.ws.onmessage = (e) => this.onData(e.data)),
        (this.ws.onerror = (e) => this.onError(`websocket error`, e)));
    }
    write(e) {
      this.writable = !1;
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          r = t === e.length - 1;
        lf(n, this.supportsBinary, (e) => {
          try {
            this.doWrite(n, e);
          } catch {}
          r &&
            jf(() => {
              ((this.writable = !0), this.emitReserved(`drain`));
            }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      this.ws !== void 0 &&
        ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
    }
    uri() {
      let e = this.opts.secure ? `wss` : `ws`,
        t = this.query || {};
      return (
        this.opts.timestampRequests && (t[this.opts.timestampParam] = Vf()),
        this.supportsBinary || (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  },
  ip = Mf.WebSocket || Mf.MozWebSocket,
  ap = {
    websocket: class extends rp {
      createSocket(e, t, n) {
        return np ? new ip(e, t, n) : t ? new ip(e, t) : new ip(e);
      }
      doWrite(e, t) {
        this.ws.send(t);
      }
    },
    webtransport: class extends Gf {
      get name() {
        return `webtransport`;
      }
      doOpen() {
        try {
          this._transport = new WebTransport(
            this.createUri(`https`),
            this.opts.transportOptions[this.name],
          );
        } catch (e) {
          return this.emitReserved(`error`, e);
        }
        (this._transport.closed
          .then(() => {
            this.onClose();
          })
          .catch((e) => {
            this.onError(`webtransport error`, e);
          }),
          this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then((e) => {
              let t = Of(2 ** 53 - 1, this.socket.binaryType),
                n = e.readable.pipeThrough(t).getReader(),
                r = wf();
              (r.readable.pipeTo(e.writable),
                (this._writer = r.writable.getWriter()));
              let i = () => {
                n.read()
                  .then(({ done: e, value: t }) => {
                    e || (this.onPacket(t), i());
                  })
                  .catch((e) => {});
              };
              i();
              let a = { type: `open` };
              (this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(a).then(() => this.onOpen()));
            });
          }));
      }
      write(e) {
        this.writable = !1;
        for (let t = 0; t < e.length; t++) {
          let n = e[t],
            r = t === e.length - 1;
          this._writer.write(n).then(() => {
            r &&
              jf(() => {
                ((this.writable = !0), this.emitReserved(`drain`));
              }, this.setTimeoutFn);
          });
        }
      }
      doClose() {
        var e;
        (e = this._transport) == null || e.close();
      }
    },
    polling: ep,
  },
  op =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  sp = [
    `source`,
    `protocol`,
    `authority`,
    `userInfo`,
    `user`,
    `password`,
    `host`,
    `port`,
    `relative`,
    `path`,
    `directory`,
    `file`,
    `query`,
    `anchor`,
  ];
function cp(e) {
  if (e.length > 8e3) throw `URI too long`;
  let t = e,
    n = e.indexOf(`[`),
    r = e.indexOf(`]`);
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, `;`) +
      e.substring(r, e.length));
  let i = op.exec(e || ``),
    a = {},
    o = 14;
  for (; o--;) a[sp[o]] = i[o] || ``;
  return (
    n != -1 &&
      r != -1 &&
      ((a.source = t),
      (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, `:`)),
      (a.authority = a.authority
        .replace(`[`, ``)
        .replace(`]`, ``)
        .replace(/;/g, `:`)),
      (a.ipv6uri = !0)),
    (a.pathNames = lp(a, a.path)),
    (a.queryKey = up(a, a.query)),
    a
  );
}
function lp(e, t) {
  let n = t.replace(/\/{2,9}/g, `/`).split(`/`);
  return (
    (t.slice(0, 1) == `/` || t.length === 0) && n.splice(0, 1),
    t.slice(-1) == `/` && n.splice(n.length - 1, 1),
    n
  );
}
function up(e, t) {
  let n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
      t && (n[t] = r);
    }),
    n
  );
}
var dp =
    typeof addEventListener == `function` &&
    typeof removeEventListener == `function`,
  fp = [];
dp &&
  addEventListener(
    `offline`,
    () => {
      fp.forEach((e) => e());
    },
    !1,
  );
var pp = class e extends kf {
  constructor(e, t) {
    if (
      (super(),
      (this.binaryType = Nf),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      e && typeof e == `object` && ((t = e), (e = null)),
      e)
    ) {
      let n = cp(e);
      ((t.hostname = n.host),
        (t.secure = n.protocol === `https` || n.protocol === `wss`),
        (t.port = n.port),
        n.query && (t.query = n.query));
    } else t.host && (t.hostname = cp(t.host).host);
    (Lf(this, t),
      (this.secure =
        t.secure == null
          ? typeof location < `u` && location.protocol === `https:`
          : t.secure),
      t.hostname && !t.port && (t.port = this.secure ? `443` : `80`),
      (this.hostname =
        t.hostname ||
        (typeof location < `u` ? location.hostname : `localhost`)),
      (this.port =
        t.port ||
        (typeof location < `u` && location.port
          ? location.port
          : this.secure
            ? `443`
            : `80`)),
      (this.transports = []),
      (this._transportsByName = {}),
      t.transports.forEach((e) => {
        let t = e.prototype.name;
        (this.transports.push(t), (this._transportsByName[t] = e));
      }),
      (this.opts = Object.assign(
        {
          path: `/engine.io`,
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: `t`,
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        t,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, ``) +
        (this.opts.addTrailingSlash ? `/` : ``)),
      typeof this.opts.query == `string` &&
        (this.opts.query = Uf(this.opts.query)),
      dp &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            `beforeunload`,
            this._beforeunloadEventListener,
            !1,
          )),
        this.hostname !== `localhost` &&
          ((this._offlineEventListener = () => {
            this._onClose(`transport close`, {
              description: `network connection lost`,
            });
          }),
          fp.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open());
  }
  createTransport(e) {
    let t = Object.assign({}, this.opts.query);
    ((t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id));
    let n = Object.assign(
      {},
      this.opts,
      {
        query: t,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[e],
    );
    return new this._transportsByName[e](n);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved(`error`, `No transports available`);
      }, 0);
      return;
    }
    let t =
      this.opts.rememberUpgrade &&
      e.priorWebsocketSuccess &&
      this.transports.indexOf(`websocket`) !== -1
        ? `websocket`
        : this.transports[0];
    this.readyState = `opening`;
    let n = this.createTransport(t);
    (n.open(), this.setTransport(n));
  }
  setTransport(e) {
    (this.transport && this.transport.removeAllListeners(),
      (this.transport = e),
      e
        .on(`drain`, this._onDrain.bind(this))
        .on(`packet`, this._onPacket.bind(this))
        .on(`error`, this._onError.bind(this))
        .on(`close`, (e) => this._onClose(`transport close`, e)));
  }
  onOpen() {
    ((this.readyState = `open`),
      (e.priorWebsocketSuccess = this.transport.name === `websocket`),
      this.emitReserved(`open`),
      this.flush());
  }
  _onPacket(e) {
    if (
      this.readyState === `opening` ||
      this.readyState === `open` ||
      this.readyState === `closing`
    )
      switch (
        (this.emitReserved(`packet`, e), this.emitReserved(`heartbeat`), e.type)
      ) {
        case `open`:
          this.onHandshake(JSON.parse(e.data));
          break;
        case `ping`:
          (this._sendPacket(`pong`),
            this.emitReserved(`ping`),
            this.emitReserved(`pong`),
            this._resetPingTimeout());
          break;
        case `error`:
          let t = Error(`server error`);
          ((t.code = e.data), this._onError(t));
          break;
        case `message`:
          (this.emitReserved(`data`, e.data),
            this.emitReserved(`message`, e.data));
      }
  }
  onHandshake(e) {
    (this.emitReserved(`handshake`, e),
      (this.id = e.sid),
      (this.transport.query.sid = e.sid),
      (this._pingInterval = e.pingInterval),
      (this._pingTimeout = e.pingTimeout),
      (this._maxPayload = e.maxPayload),
      this.onOpen(),
      this.readyState !== `closed` && this._resetPingTimeout());
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    let e = this._pingInterval + this._pingTimeout;
    ((this._pingTimeoutTime = Date.now() + e),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose(`ping timeout`);
      }, e)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref());
  }
  _onDrain() {
    (this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0
        ? this.emitReserved(`drain`)
        : this.flush());
  }
  flush() {
    if (
      this.readyState !== `closed` &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      let e = this._getWritablePackets();
      (this.transport.send(e),
        (this._prevBufferLen = e.length),
        this.emitReserved(`flush`));
    }
  }
  _getWritablePackets() {
    if (!(
      this._maxPayload &&
      this.transport.name === `polling` &&
      this.writeBuffer.length > 1
    ))
      return this.writeBuffer;
    let e = 1;
    for (let t = 0; t < this.writeBuffer.length; t++) {
      let n = this.writeBuffer[t].data;
      if ((n && (e += zf(n)), t > 0 && e > this._maxPayload))
        return this.writeBuffer.slice(0, t);
      e += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    let e = Date.now() > this._pingTimeoutTime;
    return (
      e &&
        ((this._pingTimeoutTime = 0),
        jf(() => {
          this._onClose(`ping timeout`);
        }, this.setTimeoutFn)),
      e
    );
  }
  write(e, t, n) {
    return (this._sendPacket(`message`, e, t, n), this);
  }
  send(e, t, n) {
    return (this._sendPacket(`message`, e, t, n), this);
  }
  _sendPacket(e, t, n, r) {
    if (
      (typeof t == `function` && ((r = t), (t = void 0)),
      typeof n == `function` && ((r = n), (n = null)),
      this.readyState === `closing` || this.readyState === `closed`)
    )
      return;
    ((n ||= {}), (n.compress = !1 !== n.compress));
    let i = { type: e, data: t, options: n };
    (this.emitReserved(`packetCreate`, i),
      this.writeBuffer.push(i),
      r && this.once(`flush`, r),
      this.flush());
  }
  close() {
    let e = () => {
        (this._onClose(`forced close`), this.transport.close());
      },
      t = () => {
        (this.off(`upgrade`, t), this.off(`upgradeError`, t), e());
      },
      n = () => {
        (this.once(`upgrade`, t), this.once(`upgradeError`, t));
      };
    return (
      (this.readyState === `opening` || this.readyState === `open`) &&
        ((this.readyState = `closing`),
        this.writeBuffer.length
          ? this.once(`drain`, () => {
              this.upgrading ? n() : e();
            })
          : this.upgrading
            ? n()
            : e()),
      this
    );
  }
  _onError(t) {
    if (
      ((e.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === `opening`)
    )
      return (this.transports.shift(), this._open());
    (this.emitReserved(`error`, t), this._onClose(`transport error`, t));
  }
  _onClose(e, t) {
    if (
      this.readyState === `opening` ||
      this.readyState === `open` ||
      this.readyState === `closing`
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners(`close`),
        this.transport.close(),
        this.transport.removeAllListeners(),
        dp &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              `beforeunload`,
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        let e = fp.indexOf(this._offlineEventListener);
        e !== -1 && fp.splice(e, 1);
      }
      ((this.readyState = `closed`),
        (this.id = null),
        this.emitReserved(`close`, e, t),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0));
    }
  }
};
pp.protocol = 4;
var mp = class extends pp {
    constructor() {
      (super(...arguments), (this._upgrades = []));
    }
    onOpen() {
      if ((super.onOpen(), this.readyState === `open` && this.opts.upgrade))
        for (let e = 0; e < this._upgrades.length; e++)
          this._probe(this._upgrades[e]);
    }
    _probe(e) {
      let t = this.createTransport(e),
        n = !1;
      pp.priorWebsocketSuccess = !1;
      let r = () => {
        n ||
          (t.send([{ type: `ping`, data: `probe` }]),
          t.once(`packet`, (e) => {
            if (!n)
              if (e.type === `pong` && e.data === `probe`) {
                if (
                  ((this.upgrading = !0), this.emitReserved(`upgrading`, t), !t)
                )
                  return;
                ((pp.priorWebsocketSuccess = t.name === `websocket`),
                  this.transport.pause(() => {
                    n ||
                      (this.readyState !== `closed` &&
                        (l(),
                        this.setTransport(t),
                        t.send([{ type: `upgrade` }]),
                        this.emitReserved(`upgrade`, t),
                        (t = null),
                        (this.upgrading = !1),
                        this.flush()));
                  }));
              } else {
                let e = Error(`probe error`);
                ((e.transport = t.name), this.emitReserved(`upgradeError`, e));
              }
          }));
      };
      function i() {
        n || ((n = !0), l(), t.close(), (t = null));
      }
      let a = (e) => {
        let n = Error(`probe error: ` + e);
        ((n.transport = t.name), i(), this.emitReserved(`upgradeError`, n));
      };
      function o() {
        a(`transport closed`);
      }
      function s() {
        a(`socket closed`);
      }
      function c(e) {
        t && e.name !== t.name && i();
      }
      let l = () => {
        (t.removeListener(`open`, r),
          t.removeListener(`error`, a),
          t.removeListener(`close`, o),
          this.off(`close`, s),
          this.off(`upgrading`, c));
      };
      (t.once(`open`, r),
        t.once(`error`, a),
        t.once(`close`, o),
        this.once(`close`, s),
        this.once(`upgrading`, c),
        this._upgrades.indexOf(`webtransport`) !== -1 && e !== `webtransport`
          ? this.setTimeoutFn(() => {
              n || t.open();
            }, 200)
          : t.open());
    }
    onHandshake(e) {
      ((this._upgrades = this._filterUpgrades(e.upgrades)),
        super.onHandshake(e));
    }
    _filterUpgrades(e) {
      let t = [];
      for (let n = 0; n < e.length; n++)
        ~this.transports.indexOf(e[n]) && t.push(e[n]);
      return t;
    }
  },
  hp = class extends mp {
    constructor(e, t = {}) {
      let n = typeof e == `object`,
        r = n ? { ...e } : { ...t };
      ((!r.transports ||
        (r.transports && typeof r.transports[0] == `string`)) &&
        (r.transports = (
          r.transports || [`polling`, `websocket`, `webtransport`]
        )
          .map((e) => ap[e])
          .filter((e) => !!e)),
        super(n ? r : e, r));
    }
  };
hp.protocol;
function gp(e, t = ``, n) {
  let r = e;
  ((n ||= typeof location < `u` && location),
    (e ??= n.protocol + `//` + n.host),
    typeof e == `string` &&
      (e.charAt(0) === `/` &&
        (e = e.charAt(1) === `/` ? n.protocol + e : n.host + e),
      /^(https?|wss?):\/\//.test(e) ||
        (e = n === void 0 ? `https://` + e : n.protocol + `//` + e),
      (r = cp(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = `80`)
        : /^(http|ws)s$/.test(r.protocol) && (r.port = `443`)),
    (r.path = r.path || `/`));
  let i = r.host.indexOf(`:`) === -1 ? r.host : `[` + r.host + `]`;
  return (
    (r.id = r.protocol + `://` + i + `:` + r.port + t),
    (r.href =
      r.protocol + `://` + i + (n && n.port === r.port ? `` : `:` + r.port)),
    r
  );
}
var _p = typeof ArrayBuffer == `function`,
  vp = (e) =>
    typeof ArrayBuffer.isView == `function`
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  yp = Object.prototype.toString,
  bp =
    typeof Blob == `function` ||
    (typeof Blob < `u` && yp.call(Blob) === `[object BlobConstructor]`),
  xp =
    typeof File == `function` ||
    (typeof File < `u` && yp.call(File) === `[object FileConstructor]`);
function Sp(e) {
  return (
    (_p && (e instanceof ArrayBuffer || vp(e))) ||
    (bp && e instanceof Blob) ||
    (xp && e instanceof File)
  );
}
function Cp(e, t) {
  if (!e || typeof e != `object`) return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++) if (Cp(e[t])) return !0;
    return !1;
  }
  if (Sp(e)) return !0;
  if (e.toJSON && typeof e.toJSON == `function` && arguments.length === 1)
    return Cp(e.toJSON(), !0);
  for (let t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && Cp(e[t])) return !0;
  return !1;
}
function wp(e) {
  let t = [],
    n = e.data,
    r = e;
  return (
    (r.data = Tp(n, t)),
    (r.attachments = t.length),
    { packet: r, buffers: t }
  );
}
function Tp(e, t) {
  if (!e) return e;
  if (Sp(e)) {
    let n = { _placeholder: !0, num: t.length };
    return (t.push(e), n);
  }
  if (Array.isArray(e)) {
    let n = Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = Tp(e[r], t);
    return n;
  }
  if (typeof e == `object` && !(e instanceof Date)) {
    let n = {};
    for (let r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Tp(e[r], t));
    return n;
  }
  return e;
}
function Ep(e, t) {
  return ((e.data = Dp(e.data, t)), delete e.attachments, e);
}
function Dp(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == `number` && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw Error(`illegal attachments`);
  }
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = Dp(e[n], t);
  else if (typeof e == `object`)
    for (let n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Dp(e[n], t));
  return e;
}
var Op = c({
    Decoder: () => jp,
    Encoder: () => Ap,
    PacketType: () => Z,
    isPacketValid: () => Rp,
    protocol: () => 5,
  }),
  kp = [
    `connect`,
    `connect_error`,
    `disconnect`,
    `disconnecting`,
    `newListener`,
    `removeListener`,
  ],
  Z;
(function (e) {
  ((e[(e.CONNECT = 0)] = `CONNECT`),
    (e[(e.DISCONNECT = 1)] = `DISCONNECT`),
    (e[(e.EVENT = 2)] = `EVENT`),
    (e[(e.ACK = 3)] = `ACK`),
    (e[(e.CONNECT_ERROR = 4)] = `CONNECT_ERROR`),
    (e[(e.BINARY_EVENT = 5)] = `BINARY_EVENT`),
    (e[(e.BINARY_ACK = 6)] = `BINARY_ACK`));
})((Z ||= {}));
var Ap = class {
    constructor(e) {
      this.replacer = e;
    }
    encode(e) {
      return (e.type === Z.EVENT || e.type === Z.ACK) && Cp(e)
        ? this.encodeAsBinary({
            type: e.type === Z.EVENT ? Z.BINARY_EVENT : Z.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id,
          })
        : [this.encodeAsString(e)];
    }
    encodeAsString(e) {
      let t = `` + e.type;
      return (
        (e.type === Z.BINARY_EVENT || e.type === Z.BINARY_ACK) &&
          (t += e.attachments + `-`),
        e.nsp && e.nsp !== `/` && (t += e.nsp + `,`),
        e.id != null && (t += e.id),
        e.data != null && (t += JSON.stringify(e.data, this.replacer)),
        t
      );
    }
    encodeAsBinary(e) {
      let t = wp(e),
        n = this.encodeAsString(t.packet),
        r = t.buffers;
      return (r.unshift(n), r);
    }
  },
  jp = class e extends kf {
    constructor(e) {
      (super(),
        (this.opts = Object.assign(
          { reviver: void 0, maxAttachments: 10 },
          typeof e == `function` ? { reviver: e } : e,
        )));
    }
    add(e) {
      let t;
      if (typeof e == `string`) {
        if (this.reconstructor)
          throw Error(`got plaintext data when reconstructing a packet`);
        t = this.decodeString(e);
        let n = t.type === Z.BINARY_EVENT;
        n || t.type === Z.BINARY_ACK
          ? ((t.type = n ? Z.EVENT : Z.ACK),
            (this.reconstructor = new Mp(t)),
            t.attachments === 0 && super.emitReserved(`decoded`, t))
          : super.emitReserved(`decoded`, t);
      } else if (Sp(e) || e.base64)
        if (this.reconstructor)
          ((t = this.reconstructor.takeBinaryData(e)),
            t &&
              ((this.reconstructor = null), super.emitReserved(`decoded`, t)));
        else throw Error(`got binary data when not reconstructing a packet`);
      else throw Error(`Unknown type: ` + e);
    }
    decodeString(t) {
      let n = 0,
        r = { type: Number(t.charAt(0)) };
      if (Z[r.type] === void 0) throw Error(`unknown packet type ` + r.type);
      if (r.type === Z.BINARY_EVENT || r.type === Z.BINARY_ACK) {
        let e = n + 1;
        for (; t.charAt(++n) !== `-` && n != t.length;);
        let i = t.substring(e, n);
        if (i != Number(i) || t.charAt(n) !== `-`)
          throw Error(`Illegal attachments`);
        let a = Number(i);
        if (!Pp(a) || a < 0) throw Error(`Illegal attachments`);
        if (a > this.opts.maxAttachments) throw Error(`too many attachments`);
        r.attachments = a;
      }
      if (t.charAt(n + 1) === `/`) {
        let e = n + 1;
        for (; ++n && t.charAt(n) !== `,` && n !== t.length;);
        r.nsp = t.substring(e, n);
      } else r.nsp = `/`;
      let i = t.charAt(n + 1);
      if (i !== `` && Number(i) == i) {
        let e = n + 1;
        for (; ++n;) {
          let e = t.charAt(n);
          if (e == null || Number(e) != e) {
            --n;
            break;
          }
          if (n === t.length) break;
        }
        r.id = Number(t.substring(e, n + 1));
      }
      if (t.charAt(++n)) {
        let i = this.tryParse(t.substr(n));
        if (e.isPayloadValid(r.type, i)) r.data = i;
        else throw Error(`invalid payload`);
      }
      return r;
    }
    tryParse(e) {
      try {
        return JSON.parse(e, this.opts.reviver);
      } catch {
        return !1;
      }
    }
    static isPayloadValid(e, t) {
      switch (e) {
        case Z.CONNECT:
          return Ip(t);
        case Z.DISCONNECT:
          return t === void 0;
        case Z.CONNECT_ERROR:
          return typeof t == `string` || Ip(t);
        case Z.EVENT:
        case Z.BINARY_EVENT:
          return (
            Array.isArray(t) &&
            (typeof t[0] == `number` ||
              (typeof t[0] == `string` && kp.indexOf(t[0]) === -1))
          );
        case Z.ACK:
        case Z.BINARY_ACK:
          return Array.isArray(t);
      }
    }
    destroy() {
      this.reconstructor &&=
        (this.reconstructor.finishedReconstruction(), null);
    }
  },
  Mp = class {
    constructor(e) {
      ((this.packet = e), (this.buffers = []), (this.reconPack = e));
    }
    takeBinaryData(e) {
      if (
        (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments)
      ) {
        let e = Ep(this.reconPack, this.buffers);
        return (this.finishedReconstruction(), e);
      }
      return null;
    }
    finishedReconstruction() {
      ((this.reconPack = null), (this.buffers = []));
    }
  };
function Np(e) {
  return typeof e == `string`;
}
var Pp =
  Number.isInteger ||
  function (e) {
    return typeof e == `number` && isFinite(e) && Math.floor(e) === e;
  };
function Fp(e) {
  return e === void 0 || Pp(e);
}
function Ip(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function Lp(e, t) {
  switch (e) {
    case Z.CONNECT:
      return t === void 0 || Ip(t);
    case Z.DISCONNECT:
      return t === void 0;
    case Z.EVENT:
      return (
        Array.isArray(t) &&
        (typeof t[0] == `number` ||
          (typeof t[0] == `string` && kp.indexOf(t[0]) === -1))
      );
    case Z.ACK:
      return Array.isArray(t);
    case Z.CONNECT_ERROR:
      return typeof t == `string` || Ip(t);
    default:
      return !1;
  }
}
function Rp(e) {
  return Np(e.nsp) && Fp(e.id) && Lp(e.type, e.data);
}
function zp(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
var Bp = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
  }),
  Vp = class extends kf {
    constructor(e, t, n) {
      (super(),
        (this.connected = !1),
        (this.recovered = !1),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this._queue = []),
        (this._queueSeq = 0),
        (this.ids = 0),
        (this.acks = {}),
        (this.flags = {}),
        (this.io = e),
        (this.nsp = t),
        n && n.auth && (this.auth = n.auth),
        (this._opts = Object.assign({}, n)),
        this.io._autoConnect && this.open());
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs) return;
      let e = this.io;
      this.subs = [
        zp(e, `open`, this.onopen.bind(this)),
        zp(e, `packet`, this.onpacket.bind(this)),
        zp(e, `error`, this.onerror.bind(this)),
        zp(e, `close`, this.onclose.bind(this)),
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return this.connected
        ? this
        : (this.subEvents(),
          this.io._reconnecting || this.io.open(),
          this.io._readyState === `open` && this.onopen(),
          this);
    }
    open() {
      return this.connect();
    }
    send(...e) {
      return (e.unshift(`message`), this.emit.apply(this, e), this);
    }
    emit(e, ...t) {
      if (Bp.hasOwnProperty(e))
        throw Error(`"` + e.toString() + `" is a reserved event name`);
      if (
        (t.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      )
        return (this._addToQueue(t), this);
      let n = { type: Z.EVENT, data: t };
      if (
        ((n.options = {}),
        (n.options.compress = this.flags.compress !== !1),
        typeof t[t.length - 1] == `function`)
      ) {
        let e = this.ids++,
          r = t.pop();
        (this._registerAckCallback(e, r), (n.id = e));
      }
      let r = this.io.engine?.transport?.writable,
        i = this.connected && !this.io.engine?._hasPingExpired();
      return (
        (this.flags.volatile && !r) ||
          (i
            ? (this.notifyOutgoingListeners(n), this.packet(n))
            : this.sendBuffer.push(n)),
        (this.flags = {}),
        this
      );
    }
    _registerAckCallback(e, t) {
      let n = this.flags.timeout ?? this._opts.ackTimeout;
      if (n === void 0) {
        this.acks[e] = t;
        return;
      }
      let r = this.io.setTimeoutFn(() => {
          delete this.acks[e];
          for (let t = 0; t < this.sendBuffer.length; t++)
            this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
          t.call(this, Error(`operation has timed out`));
        }, n),
        i = (...e) => {
          (this.io.clearTimeoutFn(r), t.apply(this, e));
        };
      ((i.withError = !0), (this.acks[e] = i));
    }
    emitWithAck(e, ...t) {
      return new Promise((n, r) => {
        let i = (e, t) => (e ? r(e) : n(t));
        ((i.withError = !0), t.push(i), this.emit(e, ...t));
      });
    }
    _addToQueue(e) {
      let t;
      typeof e[e.length - 1] == `function` && (t = e.pop());
      let n = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: !1,
        args: e,
        flags: Object.assign({ fromQueue: !0 }, this.flags),
      };
      (e.push(
        (e, ...r) => (
          this._queue[0],
          e === null
            ? (this._queue.shift(), t && t(null, ...r))
            : n.tryCount > this._opts.retries &&
              (this._queue.shift(), t && t(e)),
          (n.pending = !1),
          this._drainQueue()
        ),
      ),
        this._queue.push(n),
        this._drainQueue());
    }
    _drainQueue(e = !1) {
      if (!this.connected || this._queue.length === 0) return;
      let t = this._queue[0];
      (t.pending && !e) ||
        ((t.pending = !0),
        t.tryCount++,
        (this.flags = t.flags),
        this.emit.apply(this, t.args));
    }
    packet(e) {
      ((e.nsp = this.nsp), this.io._packet(e));
    }
    onopen() {
      typeof this.auth == `function`
        ? this.auth((e) => {
            this._sendConnectPacket(e);
          })
        : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(e) {
      this.packet({
        type: Z.CONNECT,
        data: this._pid
          ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
          : e,
      });
    }
    onerror(e) {
      this.connected || this.emitReserved(`connect_error`, e);
    }
    onclose(e, t) {
      ((this.connected = !1),
        delete this.id,
        this.emitReserved(`disconnect`, e, t),
        this._clearAcks());
    }
    _clearAcks() {
      Object.keys(this.acks).forEach((e) => {
        if (!this.sendBuffer.some((t) => String(t.id) === e)) {
          let t = this.acks[e];
          (delete this.acks[e],
            t.withError && t.call(this, Error(`socket has been disconnected`)));
        }
      });
    }
    onpacket(e) {
      if (e.nsp === this.nsp)
        switch (e.type) {
          case Z.CONNECT:
            e.data && e.data.sid
              ? this.onconnect(e.data.sid, e.data.pid)
              : this.emitReserved(
                  `connect_error`,
                  Error(
                    `It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)`,
                  ),
                );
            break;
          case Z.EVENT:
          case Z.BINARY_EVENT:
            this.onevent(e);
            break;
          case Z.ACK:
          case Z.BINARY_ACK:
            this.onack(e);
            break;
          case Z.DISCONNECT:
            this.ondisconnect();
            break;
          case Z.CONNECT_ERROR:
            this.destroy();
            let t = Error(e.data.message);
            ((t.data = e.data.data), this.emitReserved(`connect_error`, t));
        }
    }
    onevent(e) {
      let t = e.data || [];
      (e.id != null && t.push(this.ack(e.id)),
        this.connected
          ? this.emitEvent(t)
          : this.receiveBuffer.push(Object.freeze(t)));
    }
    emitEvent(e) {
      if (this._anyListeners && this._anyListeners.length) {
        let t = this._anyListeners.slice();
        for (let n of t) n.apply(this, e);
      }
      (super.emit.apply(this, e),
        this._pid &&
          e.length &&
          typeof e[e.length - 1] == `string` &&
          (this._lastOffset = e[e.length - 1]));
    }
    ack(e) {
      let t = this,
        n = !1;
      return function (...r) {
        n || ((n = !0), t.packet({ type: Z.ACK, id: e, data: r }));
      };
    }
    onack(e) {
      let t = this.acks[e.id];
      typeof t == `function` &&
        (delete this.acks[e.id],
        t.withError && e.data.unshift(null),
        t.apply(this, e.data));
    }
    onconnect(e, t) {
      ((this.id = e),
        (this.recovered = t && this._pid === t),
        (this._pid = t),
        (this.connected = !0),
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved(`connect`));
    }
    emitBuffered() {
      (this.receiveBuffer.forEach((e) => this.emitEvent(e)),
        (this.receiveBuffer = []),
        this.sendBuffer.forEach((e) => {
          (this.notifyOutgoingListeners(e), this.packet(e));
        }),
        (this.sendBuffer = []));
    }
    ondisconnect() {
      (this.destroy(), this.onclose(`io server disconnect`));
    }
    destroy() {
      ((this.subs &&= (this.subs.forEach((e) => e()), void 0)),
        this.io._destroy(this));
    }
    disconnect() {
      return (
        this.connected && this.packet({ type: Z.DISCONNECT }),
        this.destroy(),
        this.connected && this.onclose(`io client disconnect`),
        this
      );
    }
    close() {
      return this.disconnect();
    }
    compress(e) {
      return ((this.flags.compress = e), this);
    }
    get volatile() {
      return ((this.flags.volatile = !0), this);
    }
    timeout(e) {
      return ((this.flags.timeout = e), this);
    }
    onAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.push(e),
        this
      );
    }
    prependAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.unshift(e),
        this
      );
    }
    offAny(e) {
      if (!this._anyListeners) return this;
      if (e) {
        let t = this._anyListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return (t.splice(n, 1), this);
      } else this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.push(e),
        this
      );
    }
    prependAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.unshift(e),
        this
      );
    }
    offAnyOutgoing(e) {
      if (!this._anyOutgoingListeners) return this;
      if (e) {
        let t = this._anyOutgoingListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return (t.splice(n, 1), this);
      } else this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(e) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        let t = this._anyOutgoingListeners.slice();
        for (let n of t) n.apply(this, e.data);
      }
    }
  };
function Hp(e) {
  ((e ||= {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0));
}
((Hp.prototype.duration = function () {
  var e = this.ms * this.factor ** +this.attempts++;
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
}),
  (Hp.prototype.reset = function () {
    this.attempts = 0;
  }),
  (Hp.prototype.setMin = function (e) {
    this.ms = e;
  }),
  (Hp.prototype.setMax = function (e) {
    this.max = e;
  }),
  (Hp.prototype.setJitter = function (e) {
    this.jitter = e;
  }));
var Up = class extends kf {
    constructor(e, t) {
      (super(),
        (this.nsps = {}),
        (this.subs = []),
        e && typeof e == `object` && ((t = e), (e = void 0)),
        (t ||= {}),
        (t.path = t.path || `/socket.io`),
        (this.opts = t),
        Lf(this, t),
        this.reconnection(t.reconnection !== !1),
        this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(t.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
        this.randomizationFactor(t.randomizationFactor ?? 0.5),
        (this.backoff = new Hp({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor(),
        })),
        this.timeout(t.timeout == null ? 2e4 : t.timeout),
        (this._readyState = `closed`),
        (this.uri = e));
      let n = t.parser || Op;
      ((this.encoder = new n.Encoder()),
        (this.decoder = new n.Decoder()),
        (this._autoConnect = t.autoConnect !== !1),
        this._autoConnect && this.open());
    }
    reconnection(e) {
      return arguments.length
        ? ((this._reconnection = !!e), e || (this.skipReconnect = !0), this)
        : this._reconnection;
    }
    reconnectionAttempts(e) {
      return e === void 0
        ? this._reconnectionAttempts
        : ((this._reconnectionAttempts = e), this);
    }
    reconnectionDelay(e) {
      var t;
      return e === void 0
        ? this._reconnectionDelay
        : ((this._reconnectionDelay = e),
          (t = this.backoff) == null || t.setMin(e),
          this);
    }
    randomizationFactor(e) {
      var t;
      return e === void 0
        ? this._randomizationFactor
        : ((this._randomizationFactor = e),
          (t = this.backoff) == null || t.setJitter(e),
          this);
    }
    reconnectionDelayMax(e) {
      var t;
      return e === void 0
        ? this._reconnectionDelayMax
        : ((this._reconnectionDelayMax = e),
          (t = this.backoff) == null || t.setMax(e),
          this);
    }
    timeout(e) {
      return arguments.length ? ((this._timeout = e), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting &&
        this._reconnection &&
        this.backoff.attempts === 0 &&
        this.reconnect();
    }
    open(e) {
      if (~this._readyState.indexOf(`open`)) return this;
      this.engine = new hp(this.uri, this.opts);
      let t = this.engine,
        n = this;
      ((this._readyState = `opening`), (this.skipReconnect = !1));
      let r = zp(t, `open`, function () {
          (n.onopen(), e && e());
        }),
        i = (t) => {
          (this.cleanup(),
            (this._readyState = `closed`),
            this.emitReserved(`error`, t),
            e ? e(t) : this.maybeReconnectOnOpen());
        },
        a = zp(t, `error`, i);
      if (!1 !== this._timeout) {
        let e = this._timeout,
          n = this.setTimeoutFn(() => {
            (r(), i(Error(`timeout`)), t.close());
          }, e);
        (this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          }));
      }
      return (this.subs.push(r), this.subs.push(a), this);
    }
    connect(e) {
      return this.open(e);
    }
    onopen() {
      (this.cleanup(), (this._readyState = `open`), this.emitReserved(`open`));
      let e = this.engine;
      this.subs.push(
        zp(e, `ping`, this.onping.bind(this)),
        zp(e, `data`, this.ondata.bind(this)),
        zp(e, `error`, this.onerror.bind(this)),
        zp(e, `close`, this.onclose.bind(this)),
        zp(this.decoder, `decoded`, this.ondecoded.bind(this)),
      );
    }
    onping() {
      this.emitReserved(`ping`);
    }
    ondata(e) {
      try {
        this.decoder.add(e);
      } catch (e) {
        this.onclose(`parse error`, e);
      }
    }
    ondecoded(e) {
      jf(() => {
        this.emitReserved(`packet`, e);
      }, this.setTimeoutFn);
    }
    onerror(e) {
      this.emitReserved(`error`, e);
    }
    socket(e, t) {
      let n = this.nsps[e];
      return (
        n
          ? this._autoConnect && !n.active && n.connect()
          : ((n = new Vp(this, e, t)), (this.nsps[e] = n)),
        n
      );
    }
    _destroy(e) {
      let t = Object.keys(this.nsps);
      for (let e of t) if (this.nsps[e].active) return;
      this._close();
    }
    _packet(e) {
      let t = this.encoder.encode(e);
      for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
    }
    cleanup() {
      (this.subs.forEach((e) => e()),
        (this.subs.length = 0),
        this.decoder.destroy());
    }
    _close() {
      ((this.skipReconnect = !0),
        (this._reconnecting = !1),
        this.onclose(`forced close`));
    }
    disconnect() {
      return this._close();
    }
    onclose(e, t) {
      var n;
      (this.cleanup(),
        (n = this.engine) == null || n.close(),
        this.backoff.reset(),
        (this._readyState = `closed`),
        this.emitReserved(`close`, e, t),
        this._reconnection && !this.skipReconnect && this.reconnect());
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      let e = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        (this.backoff.reset(),
          this.emitReserved(`reconnect_failed`),
          (this._reconnecting = !1));
      else {
        let t = this.backoff.duration();
        this._reconnecting = !0;
        let n = this.setTimeoutFn(() => {
          e.skipReconnect ||
            (this.emitReserved(`reconnect_attempt`, e.backoff.attempts),
            !e.skipReconnect &&
              e.open((t) => {
                t
                  ? ((e._reconnecting = !1),
                    e.reconnect(),
                    this.emitReserved(`reconnect_error`, t))
                  : e.onreconnect();
              }));
        }, t);
        (this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          }));
      }
    }
    onreconnect() {
      let e = this.backoff.attempts;
      ((this._reconnecting = !1),
        this.backoff.reset(),
        this.emitReserved(`reconnect`, e));
    }
  },
  Wp = {};
function Gp(e, t) {
  (typeof e == `object` && ((t = e), (e = void 0)), (t ||= {}));
  let n = gp(e, t.path || `/socket.io`),
    r = n.source,
    i = n.id,
    a = n.path,
    o = Wp[i] && a in Wp[i].nsps,
    s = t.forceNew || t[`force new connection`] || !1 === t.multiplex || o,
    c;
  return (
    s ? (c = new Up(r, t)) : (Wp[i] || (Wp[i] = new Up(r, t)), (c = Wp[i])),
    n.query && !t.query && (t.query = n.queryKey),
    c.socket(n.path, t)
  );
}
Object.assign(Gp, { Manager: Up, Socket: Vp, io: Gp, connect: Gp });
var Kp = 250;
function qp(e, t) {
  let n = e.token ?? Kd(),
    r = { app_id: e.appId, token: n };
  n || (r.anonymous_id = kd());
  let i = Gp(e.serverUrl, {
    path: e.mountPath,
    transports: e.transports,
    query: r,
  });
  return (
    i.on(
      `connect`,
      async () => (console.log(`connect`, i.id), t.connect?.call(t)),
    ),
    i.on(`update_model`, async (e) => t.update_model?.call(t, e)),
    i.on(`error`, async (e) => t.error?.call(t, e)),
    i.on(
      `connect_error`,
      async (e) => (console.error(`connect_error`, e), t.error?.call(t, e)),
    ),
    i
  );
}
function Jp({ config: e }) {
  let t = { ...e },
    n = {},
    r = {},
    i = {
      connect: async () => {
        let e = [];
        (Object.keys(n).forEach((t) => {
          let n = f(t);
          n.length !== 0 &&
            (l(t),
            n.forEach(({ connect: t }) => {
              e.push((async () => t?.())());
            }));
        }),
          await Promise.all(e));
      },
      update_model: async (e) => {
        let t = f(e.room).map((t) => t.update_model?.call(t, e));
        await Promise.all(t);
      },
      error: async (e) => {
        console.error(`error`, e);
        let t = Object.values(n)
          .flat()
          .map((t) => t.error?.call(t, e));
        await Promise.all(t);
      },
    },
    a = qp(e, i);
  function o() {
    s();
  }
  function s() {
    (m(), a && a.disconnect());
  }
  function c(e) {
    (o(), (t = { ...t, ...e }), (a = qp(t, i)));
  }
  function l(e) {
    a.emit(`join`, e);
  }
  function u(e) {
    a.emit(`leave`, e);
  }
  async function d(e, t) {
    let n = JSON.stringify(t);
    return i.update_model?.call(i, { room: e, data: n });
  }
  function f(e) {
    return n[e] ?? [];
  }
  function p(e) {
    let t = r[e];
    t && (clearTimeout(t), delete r[e]);
  }
  function m() {
    Object.keys(r).forEach((e) => {
      (clearTimeout(r[e]),
        delete r[e],
        (n[e]?.length ?? 0) === 0 && delete n[e]);
    });
  }
  function h(e) {
    (p(e),
      (r[e] = setTimeout(() => {
        (delete r[e], !((n[e]?.length ?? 0) > 0) && (u(e), delete n[e]));
      }, Kp)));
  }
  return {
    socket: a,
    subscribeToRoom: (e, t) => {
      (n[e] ? p(e) : (l(e), (n[e] = [])), n[e].push(t));
      let r = !1;
      return () => {
        r ||
          ((r = !0),
          (n[e] = n[e]?.filter((e) => e !== t) ?? []),
          n[e].length === 0 && h(e));
      };
    },
    updateConfig: c,
    updateModel: d,
    disconnect: s,
  };
}
(!globalThis.EventTarget || !globalThis.Event) &&
  console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Yp = class extends Event {
    message;
    error;
    constructor(e, t) {
      (super(`error`, t), (this.message = e.message), (this.error = e));
    }
  },
  Xp = class extends Event {
    code;
    reason;
    wasClean = !0;
    constructor(e = 1e3, t = ``, n) {
      (super(`close`, n), (this.code = e), (this.reason = t));
    }
  },
  Zp = { Event, ErrorEvent: Yp, CloseEvent: Xp };
function Qp(e, t) {
  if (!e) throw Error(t);
}
function $p(e) {
  return new e.constructor(e.type, e);
}
function em(e) {
  return `data` in e
    ? new MessageEvent(e.type, e)
    : `code` in e || `reason` in e
      ? new Xp(e.code || 1999, e.reason || `unknown reason`, e)
      : `error` in e
        ? new Yp(e.error, e)
        : new Event(e.type, e);
}
var tm =
    typeof process < `u` &&
    process.versions?.node !== void 0 &&
    typeof document > `u`
      ? em
      : $p,
  nm = {
    maxReconnectionDelay: 1e4,
    minReconnectionDelay: 1e3 + Math.random() * 4e3,
    minUptime: 5e3,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4e3,
    maxRetries: 1 / 0,
    maxEnqueuedMessages: 1 / 0,
    startClosed: !1,
    debug: !1,
  },
  rm = !1,
  im = class e extends EventTarget {
    _ws;
    _retryCount = -1;
    _uptimeTimeout;
    _connectTimeout;
    _shouldReconnect = !0;
    _connectLock = !1;
    _binaryType = `blob`;
    _closeCalled = !1;
    _messageQueue = [];
    _url;
    _protocols;
    _options;
    constructor(e, t, n = {}) {
      (super(),
        (this._url = e),
        (this._protocols = t),
        (this._options = n),
        this._options.startClosed && (this._shouldReconnect = !1),
        this._connect());
    }
    static get CONNECTING() {
      return 0;
    }
    static get OPEN() {
      return 1;
    }
    static get CLOSING() {
      return 2;
    }
    static get CLOSED() {
      return 3;
    }
    get CONNECTING() {
      return e.CONNECTING;
    }
    get OPEN() {
      return e.OPEN;
    }
    get CLOSING() {
      return e.CLOSING;
    }
    get CLOSED() {
      return e.CLOSED;
    }
    get binaryType() {
      return this._ws ? this._ws.binaryType : this._binaryType;
    }
    set binaryType(e) {
      ((this._binaryType = e), this._ws && (this._ws.binaryType = e));
    }
    get retryCount() {
      return Math.max(this._retryCount, 0);
    }
    get bufferedAmount() {
      return (
        this._messageQueue.reduce(
          (e, t) => (
            typeof t == `string`
              ? (e += t.length)
              : t instanceof Blob
                ? (e += t.size)
                : (e += t.byteLength),
            e
          ),
          0,
        ) + (this._ws ? this._ws.bufferedAmount : 0)
      );
    }
    get extensions() {
      return this._ws ? this._ws.extensions : ``;
    }
    get protocol() {
      return this._ws ? this._ws.protocol : ``;
    }
    get readyState() {
      return this._ws
        ? this._ws.readyState
        : this._options.startClosed
          ? e.CLOSED
          : e.CONNECTING;
    }
    get url() {
      return this._ws ? this._ws.url : ``;
    }
    get shouldReconnect() {
      return this._shouldReconnect;
    }
    onclose = null;
    onerror = null;
    onmessage = null;
    onopen = null;
    close(e = 1e3, t) {
      if (
        ((this._closeCalled = !0),
        (this._shouldReconnect = !1),
        this._clearTimeouts(),
        !this._ws)
      ) {
        this._debug(`close enqueued: no ws instance`);
        return;
      }
      if (this._ws.readyState === this.CLOSED) {
        this._debug(`close: already closed`);
        return;
      }
      this._ws.close(e, t);
    }
    reconnect(e, t) {
      ((this._shouldReconnect = !0),
        (this._closeCalled = !1),
        (this._retryCount = -1),
        !this._ws ||
          this._ws.readyState === this.CLOSED ||
          this._disconnect(e, t),
        this._connect());
    }
    send(e) {
      if (this._ws && this._ws.readyState === this.OPEN)
        (this._debug(`send`, e), this._ws.send(e));
      else {
        let { maxEnqueuedMessages: t = nm.maxEnqueuedMessages } = this._options;
        this._messageQueue.length < t &&
          (this._debug(`enqueue`, e), this._messageQueue.push(e));
      }
    }
    _debug(...e) {
      this._options.debug && console.log.apply(console, [`RWS>`, ...e]);
    }
    _getNextDelay() {
      let {
          reconnectionDelayGrowFactor: e = nm.reconnectionDelayGrowFactor,
          minReconnectionDelay: t = nm.minReconnectionDelay,
          maxReconnectionDelay: n = nm.maxReconnectionDelay,
        } = this._options,
        r = 0;
      return (
        this._retryCount > 0 &&
          ((r = t * e ** (this._retryCount - 1)), r > n && (r = n)),
        this._debug(`next delay`, r),
        r
      );
    }
    _wait() {
      return new Promise((e) => {
        setTimeout(e, this._getNextDelay());
      });
    }
    _getNextProtocols(e) {
      if (!e) return Promise.resolve(null);
      if (typeof e == `string` || Array.isArray(e)) return Promise.resolve(e);
      if (typeof e == `function`) {
        let t = e();
        if (!t) return Promise.resolve(null);
        if (typeof t == `string` || Array.isArray(t)) return Promise.resolve(t);
        if (t.then) return t;
      }
      throw Error(`Invalid protocols`);
    }
    _getNextUrl(e) {
      if (typeof e == `string`) return Promise.resolve(e);
      if (typeof e == `function`) {
        let t = e();
        if (typeof t == `string`) return Promise.resolve(t);
        if (t.then) return t;
      }
      throw Error(`Invalid URL`);
    }
    _connect() {
      if (this._connectLock || !this._shouldReconnect) return;
      this._connectLock = !0;
      let {
        maxRetries: e = nm.maxRetries,
        connectionTimeout: t = nm.connectionTimeout,
      } = this._options;
      if (this._retryCount >= e) {
        this._debug(`max retries reached`, this._retryCount, `>=`, e);
        return;
      }
      (this._retryCount++,
        this._debug(`connect`, this._retryCount),
        this._removeListeners(),
        this._wait()
          .then(() =>
            Promise.all([
              this._getNextUrl(this._url),
              this._getNextProtocols(this._protocols || null),
            ]),
          )
          .then(([e, n]) => {
            if (this._closeCalled) {
              this._connectLock = !1;
              return;
            }
            !this._options.WebSocket &&
              typeof WebSocket > `u` &&
              !rm &&
              (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`),
              (rm = !0));
            let r = this._options.WebSocket || WebSocket;
            (this._debug(`connect`, { url: e, protocols: n }),
              (this._ws = n ? new r(e, n) : new r(e)),
              (this._ws.binaryType = this._binaryType),
              (this._connectLock = !1),
              this._addListeners(),
              (this._connectTimeout = setTimeout(
                () => this._handleTimeout(),
                t,
              )));
          })
          .catch((e) => {
            ((this._connectLock = !1),
              this._handleError(new Zp.ErrorEvent(Error(e.message), this)));
          }));
    }
    _handleTimeout() {
      (this._debug(`timeout event`),
        this._handleError(new Zp.ErrorEvent(Error(`TIMEOUT`), this)));
    }
    _disconnect(e = 1e3, t) {
      if ((this._clearTimeouts(), this._ws)) {
        this._removeListeners();
        try {
          (this._ws.close(e, t),
            this._handleClose(new Zp.CloseEvent(e, t, this)));
        } catch {}
      }
    }
    _acceptOpen() {
      (this._debug(`accept open`), (this._retryCount = 0));
    }
    _handleOpen = (e) => {
      this._debug(`open event`);
      let { minUptime: t = nm.minUptime } = this._options;
      (clearTimeout(this._connectTimeout),
        (this._uptimeTimeout = setTimeout(() => this._acceptOpen(), t)),
        Qp(this._ws, `WebSocket is not defined`),
        (this._ws.binaryType = this._binaryType),
        this._messageQueue.forEach((e) => this._ws?.send(e)),
        (this._messageQueue = []),
        this.onopen && this.onopen(e),
        this.dispatchEvent(tm(e)));
    };
    _handleMessage = (e) => {
      (this._debug(`message event`),
        this.onmessage && this.onmessage(e),
        this.dispatchEvent(tm(e)));
    };
    _handleError = (e) => {
      (this._debug(`error event`, e.message),
        this._disconnect(void 0, e.message === `TIMEOUT` ? `timeout` : void 0),
        this.onerror && this.onerror(e),
        this._debug(`exec error listeners`),
        this.dispatchEvent(tm(e)),
        this._connect());
    };
    _handleClose = (e) => {
      (this._debug(`close event`),
        this._clearTimeouts(),
        this._shouldReconnect && this._connect(),
        this.onclose && this.onclose(e),
        this.dispatchEvent(tm(e)));
    };
    _removeListeners() {
      this._ws &&
        (this._debug(`removeListeners`),
        this._ws.removeEventListener(`open`, this._handleOpen),
        this._ws.removeEventListener(`close`, this._handleClose),
        this._ws.removeEventListener(`message`, this._handleMessage),
        this._ws.removeEventListener(`error`, this._handleError));
    }
    _addListeners() {
      this._ws &&
        (this._debug(`addListeners`),
        this._ws.addEventListener(`open`, this._handleOpen),
        this._ws.addEventListener(`close`, this._handleClose),
        this._ws.addEventListener(`message`, this._handleMessage),
        this._ws.addEventListener(`error`, this._handleError));
    }
    _clearTimeouts() {
      (clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout));
    }
  },
  am = 1e3,
  om = 3e3,
  sm = new Set([405, 409, 422, 503]),
  cm = new Set([400, 403, 404]);
function lm(e) {
  let t = e && typeof e == `object` ? e.status : void 0;
  return typeof t == `number` ? t : void 0;
}
function um(e) {
  return e instanceof Error ? e : Error(String(e));
}
var dm = class {
  constructor(e, t, n, r, i) {
    ((this.onClose = i),
      (this.listeners = new Set()),
      (this.heartbeat = null),
      (this.closed = !1),
      (this.id = r?.id ?? crypto.randomUUID()));
    let a = n.transport === `proxy`,
      o = new im(async () => {
        var r;
        if (this.closed) throw Error(`Actor connection is closed`);
        if (!a)
          try {
            let { websocket_url: r, token: i } = await n.mintConnectionToken(
              e,
              t,
              this.id,
            );
            return `${r}${r.includes(`?`) ? `&` : `?`}token=${encodeURIComponent(i)}`;
          } catch (e) {
            let t = lm(e);
            if (!(n.transport !== `direct` && t !== void 0 && sm.has(t))) {
              t !== void 0 && cm.has(t) && this.close();
              try {
                (r = n.onMintError) == null || r.call(n, um(e));
              } catch {}
              throw e;
            }
            a = !0;
          }
        return pm(
          n.host,
          e,
          t,
          this.id,
          n.appId,
          n.getAuthToken(),
          n.functionsVersion,
        );
      });
    this.ws = o;
    let s = Date.now(),
      c = () => {
        s = Date.now();
      };
    (o.addEventListener(`open`, c),
      o.addEventListener(`message`, (e) => {
        c();
        let t;
        try {
          t = JSON.parse(e.data);
        } catch {
          return;
        }
        if ((t && typeof t == `object` ? t.type : void 0) !== `__pong`)
          for (let e of this.listeners) e(t);
      }),
      (this.heartbeat = setInterval(() => {
        if (Date.now() - s > om) {
          (c(), o.readyState === o.OPEN && o.reconnect());
          return;
        }
        try {
          o.send(JSON.stringify({ type: `__ping` }));
        } catch {}
      }, am)));
  }
  subscribe(e) {
    return (
      this.listeners.add(e),
      {
        unsubscribe: () => {
          this.listeners.delete(e);
        },
      }
    );
  }
  send(e) {
    this.closed || this.ws.send(JSON.stringify(e));
  }
  close() {
    this.closed ||
      ((this.closed = !0),
      (this.heartbeat &&= (clearInterval(this.heartbeat), null)),
      this.listeners.clear(),
      this.ws.close(),
      this.onClose());
  }
};
function fm(e, t, n, r) {
  let i = null;
  return {
    connect(a) {
      if (i) return i;
      let o = new dm(e, t, n, a, () => {
        (r.delete(o), i === o && (i = null));
      });
      return ((i = o), r.add(o), o);
    },
  };
}
function pm(e, t, n, r, i, a, o) {
  let s = e.replace(/^(http|https|ws|wss):\/\//, ``);
  s.endsWith(`/`) && (s = s.slice(0, -1));
  let c =
      s.startsWith(`localhost:`) ||
      s.startsWith(`127.0.0.1:`) ||
      s.startsWith(`192.168.`) ||
      s.startsWith(`10.`) ||
      (s.startsWith(`172.`) &&
        s.split(`.`)[1] >= `16` &&
        s.split(`.`)[1] <= `31`) ||
      s.startsWith(`[::ffff:7f00:1]:`),
    l = new URLSearchParams([
      [`_pk`, r],
      [`app_id`, i],
      [`handler`, t],
    ]);
  return (
    a && l.append(`token`, a),
    o && l.append(`fv`, o),
    `${c ? `ws` : `wss`}://${s}/parties/${t}/${n}?${l}`
  );
}
function mm(e, t) {
  return e && !e.startsWith(`/`) ? e : (t ?? e);
}
function hm(e) {
  let t = new Set();
  return {
    module: new Proxy(
      {},
      {
        get(n, r) {
          if (typeof r == `string` && r !== `then`)
            return (n) => fm(r, n, e, t);
        },
      },
    ),
    closeAll: () => {
      for (let e of [...t]) e.close();
    },
  };
}
function gm(e) {
  let {
      serverUrl: t = `https://base44.app`,
      appId: n,
      analytics: r,
      token: i,
      serviceToken: a,
      requiresAuth: o = !1,
      appBaseUrl: s,
      options: c,
      functionsVersion: l,
      headers: u,
    } = e,
    d = typeof s == `string` ? s : ``,
    f = {
      serverUrl: t,
      mountPath: `/ws-user-apps/socket.io/`,
      transports: [`websocket`],
      appId: n,
      token: i,
    },
    p = null,
    m = () => ((p ||= Jp({ config: f })), p),
    h = { ...u, "X-App-Id": String(n) },
    g = l ? { ...h, "Base44-Functions-Version": l } : h,
    _ = jd({ baseURL: `${t}/api`, headers: h, token: i, onError: c?.onError }),
    v = jd({
      baseURL: `${t}/api`,
      headers: g,
      token: i,
      interceptResponses: !1,
      onError: c?.onError,
    }),
    y = { ...h, ...(i ? { "on-behalf-of": `Bearer ${i}` } : {}) },
    b = jd({ baseURL: `${t}/api`, headers: y, token: a, onError: c?.onError }),
    x = jd({
      baseURL: `${t}/api`,
      headers: g,
      token: a,
      interceptResponses: !1,
    }),
    S = jd({ baseURL: `${t}/api`, headers: h }),
    C = zd(_, v, n, { appBaseUrl: d, serverUrl: t, token: i });
  if (typeof window < `u`) {
    let e = i || Kd();
    e && C.setToken(e);
  }
  let w = hm({
      appId: n,
      host: mm(t, typeof window < `u` ? window.location?.origin : void 0),
      functionsVersion: l,
      getAuthToken: () => i || Kd(),
      mintConnectionToken: async (e, t, r) => {
        let a = i || Kd();
        return await S.post(
          `/apps/${n}/actors/${encodeURIComponent(e)}/connection-token`,
          { room: t, connection_id: r },
          {
            headers: {
              ...(a ? { Authorization: `Bearer ${a}` } : {}),
              ...(l ? { "Base44-Functions-Version": l } : {}),
            },
          },
        );
      },
      transport: c?.actorsTransport,
      onMintError: c?.onError,
    }),
    T = {
      entities: Md({ axios: _, appId: n, getSocket: m }),
      integrations: Id(_, n),
      connectors: Gd(_, n),
      auth: C,
      functions: Xd(v, n, {
        getAuthHeaders: () => {
          let e = {},
            t = i || Kd();
          return (t && (e.Authorization = `Bearer ${t}`), e);
        },
        baseURL: v.defaults?.baseURL,
      }),
      agents: Zd({ axios: _, getSocket: m, appId: n, serverUrl: t, token: i }),
      aiGateway: Qd({ serverUrl: t, token: i, appId: n }),
      appLogs: $d(_, n),
      app: ef(_, n),
      users: tf(_, n),
      analytics: hd({
        axiosClient: _,
        serverUrl: t,
        appId: n,
        userAuthModule: C,
        enabled: r?.enabled ?? !0,
      }),
      actors: w.module,
      cleanup: () => {
        (T.analytics.cleanup(), w.closeAll(), p && p.disconnect());
      },
    },
    ee = {
      entities: Md({ axios: b, appId: n, getSocket: m }),
      integrations: Id(b, n),
      sso: Bd(b, n),
      connectors: Hd(b, n),
      functions: Xd(x, n, {
        getAuthHeaders: () => {
          let e = {};
          return (a && (e.Authorization = `Bearer ${a}`), e);
        },
        baseURL: x.defaults?.baseURL,
      }),
      agents: Zd({ axios: b, getSocket: m, appId: n, serverUrl: t, token: i }),
      aiGateway: Qd({ serverUrl: t, token: a, appId: n }),
      appLogs: $d(b, n),
      cleanup: () => {
        p && p.disconnect();
      },
    };
  return (
    o &&
      typeof window < `u` &&
      setTimeout(async () => {
        try {
          (await T.auth.isAuthenticated()) ||
            T.auth.redirectToLogin(window.location.href);
        } catch (e) {
          (console.error(`Authentication check failed:`, e),
            T.auth.redirectToLogin(window.location.href));
        }
      }, 0),
    {
      ...T,
      fetchWithAuth: Jd({
        axios: _,
        serviceRoleAxios: b,
        appId: String(n),
        serverUrl: t,
        functionsVersion: l,
        platformHeaders: u,
      }),
      setToken(e) {
        (T.auth.setToken(e), p && p.updateConfig({ token: e }), (f.token = e));
      },
      getConfig() {
        return { serverUrl: t, appId: n, requiresAuth: o };
      },
      get asServiceRole() {
        if (!a)
          throw Error(
            `Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.`,
          );
        return ee;
      },
    }
  );
}
var _m = {
    ...(!(typeof window > `u`) &&
      new URLSearchParams(window.location.search).get(`clear_access_token`) ===
        `true` &&
      (window.localStorage.removeItem(`base44_access_token`),
      window.localStorage.removeItem(`token`)),
    {
      appId: `6aa10f724eeb77be0b0ff502`,
      token: Kd(),
      functionsVersion: `prod`,
      appBaseUrl: void 0,
    }),
  },
  { appId: vm, token: ym, functionsVersion: bm, appBaseUrl: xm } = _m,
  Sm = gm({
    appId: vm,
    token: ym,
    functionsVersion: bm,
    serverUrl: ``,
    appBaseUrl: xm,
  });
function Cm({}) {
  let e = Bo().pathname.substring(1),
    { data: t, isFetched: n } = Ia({
      queryKey: [`user`],
      queryFn: async () => {
        try {
          return { user: await Sm.auth.me(), isAuthenticated: !0 };
        } catch {
          return { user: null, isAuthenticated: !1 };
        }
      },
    });
  return (0, j.jsx)(`div`, {
    className: `min-h-screen flex items-center justify-center p-6 bg-slate-50`,
    children: (0, j.jsx)(`div`, {
      className: `max-w-md w-full`,
      children: (0, j.jsxs)(`div`, {
        className: `text-center space-y-6`,
        children: [
          (0, j.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, j.jsx)(`h1`, {
                className: `text-7xl font-light text-slate-300`,
                children: `404`,
              }),
              (0, j.jsx)(`div`, {
                className: `h-0.5 w-16 bg-slate-200 mx-auto`,
              }),
            ],
          }),
          (0, j.jsxs)(`div`, {
            className: `space-y-3`,
            children: [
              (0, j.jsx)(`h2`, {
                className: `text-2xl font-medium text-slate-800`,
                children: `Page Not Found`,
              }),
              (0, j.jsxs)(`p`, {
                className: `text-slate-600 leading-relaxed`,
                children: [
                  `The page `,
                  (0, j.jsxs)(`span`, {
                    className: `font-medium text-slate-700`,
                    children: [`"`, e, `"`],
                  }),
                  ` could not be found in this application.`,
                ],
              }),
            ],
          }),
          n &&
            t.isAuthenticated &&
            t.user?.role === `admin` &&
            (0, j.jsx)(`div`, {
              className: `mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200`,
              children: (0, j.jsxs)(`div`, {
                className: `flex items-start space-x-3`,
                children: [
                  (0, j.jsx)(`div`, {
                    className: `flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5`,
                    children: (0, j.jsx)(`div`, {
                      className: `w-2 h-2 rounded-full bg-orange-400`,
                    }),
                  }),
                  (0, j.jsxs)(`div`, {
                    className: `text-left space-y-1`,
                    children: [
                      (0, j.jsx)(`p`, {
                        className: `text-sm font-medium text-slate-700`,
                        children: `Admin Note`,
                      }),
                      (0, j.jsx)(`p`, {
                        className: `text-sm text-slate-600 leading-relaxed`,
                        children: `This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat.`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          (0, j.jsx)(`div`, {
            className: `pt-6`,
            children: (0, j.jsxs)(`button`, {
              onClick: () => (window.location.href = `/`),
              className: `inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500`,
              children: [
                (0, j.jsx)(`svg`, {
                  className: `w-4 h-4 mr-2`,
                  fill: `none`,
                  stroke: `currentColor`,
                  viewBox: `0 0 24 24`,
                  children: (0, j.jsx)(`path`, {
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    strokeWidth: 2,
                    d: `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`,
                  }),
                }),
                `Go Home`,
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
var wm = (0, y.createContext)(),
  Tm = ({ children: e }) => {
    let [t, n] = (0, y.useState)(null),
      [r, i] = (0, y.useState)(!1),
      [a, o] = (0, y.useState)(!0),
      [s, c] = (0, y.useState)(!0),
      [l, u] = (0, y.useState)(null),
      [d, f] = (0, y.useState)(!1),
      [p, m] = (0, y.useState)(null);
    (0, y.useEffect)(() => {
      h();
    }, []);
    let h = async () => {
        try {
          (c(!0), u(null));
          try {
            let e = await Sm.app.getPublicSettings();
            (m(e), _m.token ? await g() : (o(!1), i(!1), f(!0)), c(!1));
          } catch (e) {
            if (
              (console.error(`App state check failed:`, e),
              e.status === 403 && e.data?.extra_data?.reason)
            ) {
              let t = e.data.extra_data.reason;
              u(
                t === `auth_required`
                  ? {
                      type: `auth_required`,
                      message: `Authentication required`,
                    }
                  : t === `user_not_registered`
                    ? {
                        type: `user_not_registered`,
                        message: `User not registered for this app`,
                      }
                    : { type: t, message: e.message },
              );
            } else
              u({
                type: `unknown`,
                message: e.message || `Failed to load app`,
              });
            (c(!1), o(!1));
          }
        } catch (e) {
          (console.error(`Unexpected error:`, e),
            u({
              type: `unknown`,
              message: e.message || `An unexpected error occurred`,
            }),
            c(!1),
            o(!1));
        }
      },
      g = async () => {
        try {
          o(!0);
          let e = await Sm.auth.me();
          (n(e), i(!0), o(!1), f(!0));
        } catch (e) {
          (console.error(`User auth check failed:`, e),
            o(!1),
            i(!1),
            f(!0),
            (e.status === 401 || e.status === 403) &&
              u({ type: `auth_required`, message: `Authentication required` }));
        }
      };
    return (0, j.jsx)(wm.Provider, {
      value: {
        user: t,
        isAuthenticated: r,
        isLoadingAuth: a,
        isLoadingPublicSettings: s,
        authError: l,
        appPublicSettings: p,
        authChecked: d,
        logout: (e = !0) => {
          (n(null),
            i(!1),
            e ? Sm.auth.logout(window.location.href) : Sm.auth.logout());
        },
        navigateToLogin: () => {
          Sm.auth.redirectToLogin(window.location.href);
        },
        checkUserAuth: g,
        checkAppState: h,
      },
      children: e,
    });
  },
  Em = () => {
    let e = (0, y.useContext)(wm);
    if (!e) throw Error(`useAuth must be used within an AuthProvider`);
    return e;
  },
  Dm = () =>
    (0, j.jsx)(`div`, {
      className: `flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50`,
      children: (0, j.jsx)(`div`, {
        className: `max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100`,
        children: (0, j.jsxs)(`div`, {
          className: `text-center`,
          children: [
            (0, j.jsx)(`div`, {
              className: `inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100`,
              children: (0, j.jsx)(`svg`, {
                className: `w-8 h-8 text-orange-600`,
                fill: `none`,
                stroke: `currentColor`,
                viewBox: `0 0 24 24`,
                children: (0, j.jsx)(`path`, {
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  strokeWidth: `2`,
                  d: `M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`,
                }),
              }),
            }),
            (0, j.jsx)(`h1`, {
              className: `text-3xl font-bold text-slate-900 mb-4`,
              children: `Access Restricted`,
            }),
            (0, j.jsx)(`p`, {
              className: `text-slate-600 mb-8`,
              children: `You are not registered to use this application. Please contact the app administrator to request access.`,
            }),
            (0, j.jsxs)(`div`, {
              className: `p-4 bg-slate-50 rounded-md text-sm text-slate-600`,
              children: [
                (0, j.jsx)(`p`, {
                  children: `If you believe this is an error, you can:`,
                }),
                (0, j.jsxs)(`ul`, {
                  className: `list-disc list-inside mt-2 space-y-1`,
                  children: [
                    (0, j.jsx)(`li`, {
                      children: `Verify you are logged in with the correct account`,
                    }),
                    (0, j.jsx)(`li`, {
                      children: `Contact the app administrator for access`,
                    }),
                    (0, j.jsx)(`li`, {
                      children: `Try logging out and back in again`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Om = (e) => {
    let t = e.slice(1);
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  };
function km() {
  let { pathname: e, hash: t } = Bo(),
    n = Vo();
  return (
    (0, y.useEffect)(() => {
      if (n !== `POP`) {
        if (t) {
          let e = Om(t),
            n = window.setTimeout(() => {
              document
                .getElementById(e)
                ?.scrollIntoView({ behavior: `smooth` });
            }, 50);
          return () => window.clearTimeout(n);
        }
        window.scrollTo({ top: 0, left: 0, behavior: `instant` });
      }
    }, [e, t, n]),
    null
  );
}
var Am = (0, y.createContext)({});
function jm(e) {
  let t = (0, y.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var Mm = (0, y.createContext)(null),
  Nm = (0, y.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  }),
  Pm = class extends y.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current;
      if (t && e.isPresent && !this.props.isPresent) {
        let e = this.props.sizeRef.current;
        ((e.height = t.offsetHeight || 0),
          (e.width = t.offsetWidth || 0),
          (e.top = t.offsetTop),
          (e.left = t.offsetLeft));
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  };
function Fm({ children: e, isPresent: t }) {
  let n = (0, y.useId)(),
    r = (0, y.useRef)(null),
    i = (0, y.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: a } = (0, y.useContext)(Nm);
  return (
    (0, y.useInsertionEffect)(() => {
      let { width: e, height: o, top: s, left: c } = i.current;
      if (t || !r.current || !e || !o) return;
      r.current.dataset.motionPopId = n;
      let l = document.createElement(`style`);
      return (
        a && (l.nonce = a),
        document.head.appendChild(l),
        l.sheet &&
          l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(l);
        }
      );
    }, [t]),
    (0, j.jsx)(Pm, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: y.cloneElement(e, { ref: r }),
    })
  );
}
var Im = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
}) => {
  let s = jm(Lm),
    c = (0, y.useId)(),
    l = (0, y.useCallback)(
      (e) => {
        s.set(e, !0);
        for (let e of s.values()) if (!e) return;
        r && r();
      },
      [s, r],
    ),
    u = (0, y.useMemo)(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: l,
        register: (e) => (s.set(e, !1), () => s.delete(e)),
      }),
      a ? [Math.random(), l] : [n, l],
    );
  return (
    (0, y.useMemo)(() => {
      s.forEach((e, t) => s.set(t, !1));
    }, [n]),
    y.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    o === `popLayout` && (e = (0, j.jsx)(Fm, { isPresent: n, children: e })),
    (0, j.jsx)(Mm.Provider, { value: u, children: e })
  );
};
function Lm() {
  return new Map();
}
function Rm(e = !0) {
  let t = (0, y.useContext)(Mm);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, y.useId)();
  (0, y.useEffect)(() => {
    e && i(a);
  }, [e]);
  let o = (0, y.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var zm = (e) => e.key || ``;
function Bm(e) {
  let t = [];
  return (
    y.Children.forEach(e, (e) => {
      (0, y.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var Vm = typeof window < `u`,
  Hm = Vm ? y.useLayoutEffect : y.useEffect,
  Um = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
  }) => {
    let [s, c] = Rm(o),
      l = (0, y.useMemo)(() => Bm(e), [e]),
      u = o && !s ? [] : l.map(zm),
      d = (0, y.useRef)(!0),
      f = (0, y.useRef)(l),
      p = jm(() => new Map()),
      [m, h] = (0, y.useState)(l),
      [g, _] = (0, y.useState)(l);
    Hm(() => {
      ((d.current = !1), (f.current = l));
      for (let e = 0; e < g.length; e++) {
        let t = zm(g[e]);
        u.includes(t) ? p.delete(t) : p.get(t) !== !0 && p.set(t, !1);
      }
    }, [g, u.length, u.join(`-`)]);
    let v = [];
    if (l !== m) {
      let e = [...l];
      for (let t = 0; t < g.length; t++) {
        let n = g[t],
          r = zm(n);
        u.includes(r) || (e.splice(t, 0, n), v.push(n));
      }
      (a === `wait` && v.length && (e = v), _(Bm(e)), h(l));
      return;
    }
    let { forceRender: b } = (0, y.useContext)(Am);
    return (0, j.jsx)(j.Fragment, {
      children: g.map((e) => {
        let m = zm(e),
          h = o && !s ? !1 : l === g || u.includes(m);
        return (0, j.jsx)(
          Im,
          {
            isPresent: h,
            initial: !d.current || n ? void 0 : !1,
            custom: h ? void 0 : t,
            presenceAffectsLayout: i,
            mode: a,
            onExitComplete: h
              ? void 0
              : () => {
                  if (p.has(m)) p.set(m, !0);
                  else return;
                  let e = !0;
                  (p.forEach((t) => {
                    t || (e = !1);
                  }),
                    e && (b?.(), _(f.current), o && c?.(), r && r()));
                },
            children: e,
          },
          m,
        );
      }),
    });
  },
  Wm = (e) => e,
  Gm = Wm,
  Km = Wm;
function qm(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Jm = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Ym = (e) => e * 1e3,
  Xm = (e) => e / 1e3,
  Zm = { skipAnimations: !1, useManualTiming: !1 };
function Qm(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.has(e) || s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var $m = [
    `read`,
    `resolveKeyframes`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ],
  eh = 40;
function th(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = $m.reduce((e, t) => ((e[t] = Qm(a)), e), {}),
    {
      read: s,
      resolveKeyframes: c,
      update: l,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    p = () => {
      let a = Zm.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, eh), 1)),
        (i.timestamp = a),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p)));
    },
    m = () => {
      ((n = !0), (r = !0), i.isProcessing || e(p));
    };
  return {
    schedule: $m.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < $m.length; t++) o[$m[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: Q,
    cancel: nh,
    state: rh,
    steps: ih,
  } = th(typeof requestAnimationFrame < `u` ? requestAnimationFrame : Wm, !0),
  ah = (0, y.createContext)({ strict: !1 }),
  oh = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  sh = {};
for (let e in oh) sh[e] = { isEnabled: (t) => oh[e].some((e) => !!t[e]) };
function ch(e) {
  for (let t in e) sh[t] = { ...sh[t], ...e[t] };
}
var lh = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function uh(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    lh.has(e)
  );
}
var dh = c({ default: () => fh }),
  fh,
  ph = o(() => {
    throw (
      (fh = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`,
      )
    );
  }),
  mh = (e) => !uh(e);
function hh(e) {
  e && (mh = (t) => (t.startsWith(`on`) ? !uh(t) : e(t)));
}
try {
  hh((ph(), d(dh)).default);
} catch {}
function gh(e, t, n) {
  let r = {};
  for (let i in e)
    (i !== `values` || typeof e.values != `object`) &&
      (mh(i) ||
        (n === !0 && uh(i)) ||
        (!t && !uh(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
      (r[i] = e[i]);
  return r;
}
function _h(e) {
  if (typeof Proxy > `u`) return e;
  let t = new Map();
  return new Proxy((...t) => e(...t), {
    get: (n, r) =>
      r === `create` ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
  });
}
var vh = (0, y.createContext)({});
function yh(e) {
  return typeof e == `string` || Array.isArray(e);
}
function bh(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
var xh = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  Sh = [`initial`, ...xh];
function Ch(e) {
  return bh(e.animate) || Sh.some((t) => yh(e[t]));
}
function wh(e) {
  return !!(Ch(e) || e.variants);
}
function Th(e, t) {
  if (Ch(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || yh(t) ? t : void 0,
      animate: yh(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function Eh(e) {
  let { initial: t, animate: n } = Th(e, (0, y.useContext)(vh));
  return (0, y.useMemo)(() => ({ initial: t, animate: n }), [Dh(t), Dh(n)]);
}
function Dh(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var Oh = Symbol.for(`motionComponentSymbol`);
function kh(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function Ah(e, t, n) {
  return (0, y.useCallback)(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == `function` ? n(r) : kh(n) && (n.current = r)));
    },
    [t],
  );
}
var jh = (e) => e.replace(/([a-z])([A-Z])/gu, `$1-$2`).toLowerCase(),
  Mh = `data-` + jh(`framerAppearId`),
  { schedule: Nh, cancel: Ph } = th(queueMicrotask, !1),
  Fh = (0, y.createContext)({});
function Ih(e, t, n, r, i) {
  let { visualElement: a } = (0, y.useContext)(vh),
    o = (0, y.useContext)(ah),
    s = (0, y.useContext)(Mm),
    c = (0, y.useContext)(Nm).reducedMotion,
    l = (0, y.useRef)(null);
  ((r ||= o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  let u = l.current,
    d = (0, y.useContext)(Fh);
  u &&
    !u.projection &&
    i &&
    (u.type === `html` || u.type === `svg`) &&
    Lh(l.current, n, i, d);
  let f = (0, y.useRef)(!1);
  (0, y.useInsertionEffect)(() => {
    u && f.current && u.update(n, s);
  });
  let p = n[Mh],
    m = (0, y.useRef)(
      !!p &&
        !window.MotionHandoffIsComplete?.call(window, p) &&
        window.MotionHasOptimisedAnimation?.call(window, p),
    );
  return (
    Hm(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        Nh.render(u.render),
        m.current && u.animationState && u.animationState.animateChanges());
    }),
    (0, y.useEffect)(() => {
      u &&
        (!m.current && u.animationState && u.animationState.animateChanges(),
        (m.current &&=
          (queueMicrotask(() => {
            var e;
            (e = window.MotionHandoffMarkAsComplete) == null ||
              e.call(window, p);
          }),
          !1)));
    }),
    u
  );
}
function Lh(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : Rh(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && kh(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    }));
}
function Rh(e) {
  if (e) return e.options.allowProjection === !1 ? Rh(e.parent) : e.projection;
}
function zh({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && ch(e);
  function a(a, o) {
    let s,
      c = { ...(0, y.useContext)(Nm), ...a, layoutId: Bh(a) },
      { isStatic: l } = c,
      u = Eh(a),
      d = r(a, l);
    if (!l && Vm) {
      Vh(c, e);
      let n = Hh(c);
      ((s = n.MeasureLayout),
        (u.visualElement = Ih(i, d, c, t, n.ProjectionNode)));
    }
    return (0, j.jsxs)(vh.Provider, {
      value: u,
      children: [
        s && u.visualElement
          ? (0, j.jsx)(s, { visualElement: u.visualElement, ...c })
          : null,
        n(i, a, Ah(d, u.visualElement, o), d, l, u.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == `string` ? i : `create(${i.displayName ?? i.name ?? ``})`}`;
  let o = (0, y.forwardRef)(a);
  return ((o[Oh] = i), o);
}
function Bh({ layoutId: e }) {
  let t = (0, y.useContext)(Am).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function Vh(e, t) {
  (0, y.useContext)(ah).strict;
}
function Hh(e) {
  let { drag: t, layout: n } = sh;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var Uh = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function Wh(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(Uh.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Gh(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function Kh(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = Gh(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = Gh(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
var qh = (e) => Array.isArray(e),
  Jh = (e) => !!(e && typeof e == `object` && e.mix && e.toValue),
  Yh = (e) => (qh(e) ? e[e.length - 1] || 0 : e),
  Xh = (e) => !!(e && e.getVelocity);
function Zh(e) {
  let t = Xh(e) ? e.get() : e;
  return Jh(t) ? t.toValue() : t;
}
function Qh(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  a,
) {
  let o = { latestValues: eg(r, i, a, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (e) => n({ props: r, current: e, ...o })),
      (o.onUpdate = (e) => n(e))),
    o
  );
}
var $h = (e) => (t, n) => {
  let r = (0, y.useContext)(vh),
    i = (0, y.useContext)(Mm),
    a = () => Qh(e, t, r, i);
  return n ? a() : jm(a);
};
function eg(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Zh(a[e]);
  let { initial: o, animate: s } = e,
    c = Ch(e),
    l = wh(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !bh(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = Kh(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var tg = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  ng = new Set(tg),
  rg = (e) => (t) => typeof t == `string` && t.startsWith(e),
  ig = rg(`--`),
  ag = rg(`var(--`),
  og = (e) => (ag(e) ? sg.test(e.split(`/*`)[0].trim()) : !1),
  sg =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  cg = (e, t) => (t && typeof e == `number` ? t.transform(e) : e),
  lg = (e, t, n) => (n > t ? t : n < e ? e : n),
  ug = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  dg = { ...ug, transform: (e) => lg(0, 1, e) },
  fg = { ...ug, default: 1 },
  pg = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  mg = pg(`deg`),
  hg = pg(`%`),
  $ = pg(`px`),
  gg = pg(`vh`),
  _g = pg(`vw`),
  vg = {
    ...hg,
    parse: (e) => hg.parse(e) / 100,
    transform: (e) => hg.transform(e * 100),
  },
  yg = {
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    radius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    backgroundPositionX: $,
    backgroundPositionY: $,
  },
  bg = {
    rotate: mg,
    rotateX: mg,
    rotateY: mg,
    rotateZ: mg,
    scale: fg,
    scaleX: fg,
    scaleY: fg,
    scaleZ: fg,
    skew: mg,
    skewX: mg,
    skewY: mg,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: dg,
    originX: vg,
    originY: vg,
    originZ: $,
  },
  xg = { ...ug, transform: Math.round },
  Sg = {
    ...yg,
    ...bg,
    zIndex: xg,
    size: $,
    fillOpacity: dg,
    strokeOpacity: dg,
    numOctaves: xg,
  },
  Cg = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  wg = tg.length;
function Tg(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < wg; a++) {
    let o = tg[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (
      ((c =
        typeof s == `number`
          ? s === +!!o.startsWith(`scale`)
          : parseFloat(s) === 0),
      !c || n)
    ) {
      let e = cg(s, Sg[o]);
      if (!c) {
        i = !1;
        let t = Cg[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r);
}
function Eg(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (ng.has(e)) {
      o = !0;
      continue;
    }
    if (ig(e)) {
      i[e] = n;
      continue;
    }
    {
      let t = cg(n, Sg[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Tg(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var Dg = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  Og = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function kg(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? Dg : Og;
  e[a.offset] = $.transform(-r);
  let o = $.transform(t),
    s = $.transform(n);
  e[a.array] = `${o} ${s}`;
}
function Ag(e, t, n) {
  return typeof e == `string` ? e : $.transform(t + n * e);
}
function jg(e, t, n) {
  return `${Ag(t, e.x, e.width)} ${Ag(n, e.y, e.height)}`;
}
function Mg(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: a,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  d,
) {
  if ((Eg(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: f, style: p, dimensions: m } = e;
  (f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (i !== void 0 || a !== void 0 || p.transform) &&
      (p.transformOrigin = jg(
        m,
        i === void 0 ? 0.5 : i,
        a === void 0 ? 0.5 : a,
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && kg(f, o, s, c, !1));
}
var Ng = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Pg = () => ({ ...Ng(), attrs: {} }),
  Fg = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function Ig(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let t in n) e.style.setProperty(t, n[t]);
}
var Lg = new Set([
  `baseFrequency`,
  `diffuseConstant`,
  `kernelMatrix`,
  `kernelUnitLength`,
  `keySplines`,
  `keyTimes`,
  `limitingConeAngle`,
  `markerHeight`,
  `markerWidth`,
  `numOctaves`,
  `targetX`,
  `targetY`,
  `surfaceScale`,
  `specularConstant`,
  `specularExponent`,
  `stdDeviation`,
  `tableValues`,
  `viewBox`,
  `gradientTransform`,
  `pathLength`,
  `startOffset`,
  `textLength`,
  `lengthAdjust`,
]);
function Rg(e, t, n, r) {
  Ig(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(Lg.has(n) ? n : jh(n), t.attrs[n]);
}
var zg = {};
function Bg(e) {
  Object.assign(zg, e);
}
function Vg(e, { layout: t, layoutId: n }) {
  return (
    ng.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!zg[e] || e === `opacity`))
  );
}
function Hg(e, t, n) {
  let { style: r } = e,
    i = {};
  for (let a in r)
    (Xh(r[a]) ||
      (t.style && Xh(t.style[a])) ||
      Vg(a, e) ||
      n?.getValue(a)?.liveStyle !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function Ug(e, t, n) {
  let r = Hg(e, t, n);
  for (let n in e)
    if (Xh(e[n]) || Xh(t[n])) {
      let t =
        tg.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function Wg(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == `function` ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
var Gg = [`x`, `y`, `width`, `height`, `cx`, `cy`, `r`],
  Kg = {
    useVisualState: $h({
      scrapeMotionValuesFromProps: Ug,
      createRenderState: Pg,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let a = !!e.drag;
        if (!a) {
          for (let e in i)
            if (ng.has(e)) {
              a = !0;
              break;
            }
        }
        if (!a) return;
        let o = !t;
        if (t)
          for (let n = 0; n < Gg.length; n++) {
            let r = Gg[n];
            e[r] !== t[r] && (o = !0);
          }
        o &&
          Q.read(() => {
            (Wg(n, r),
              Q.render(() => {
                (Mg(r, i, Fg(n.tagName), e.transformTemplate), Rg(n, r));
              }));
          });
      },
    }),
  },
  qg = {
    useVisualState: $h({
      scrapeMotionValuesFromProps: Hg,
      createRenderState: Ng,
    }),
  };
function Jg(e, t, n) {
  for (let r in t) !Xh(t[r]) && !Vg(r, n) && (e[r] = t[r]);
}
function Yg({ transformTemplate: e }, t) {
  return (0, y.useMemo)(() => {
    let n = Ng();
    return (Eg(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function Xg(e, t) {
  let n = e.style || {},
    r = {};
  return (Jg(r, n, e), Object.assign(r, Yg(e, t)), r);
}
function Zg(e, t) {
  let n = {},
    r = Xg(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function Qg(e, t, n, r) {
  let i = (0, y.useMemo)(() => {
    let n = Pg();
    return (
      Mg(n, t, Fg(r), e.transformTemplate),
      { ...n.attrs, style: { ...n.style } }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (Jg(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
function $g(e = !1) {
  return (t, n, r, { latestValues: i }, a) => {
    let o = (Wh(t) ? Qg : Zg)(n, i, a, t),
      s = gh(n, typeof t == `string`, e),
      c = t === y.Fragment ? {} : { ...s, ...o, ref: r },
      { children: l } = n,
      u = (0, y.useMemo)(() => (Xh(l) ? l.get() : l), [l]);
    return (0, y.createElement)(t, { ...c, children: u });
  };
}
function e_(e, t) {
  return function (n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    return zh({
      ...(Wh(n) ? Kg : qg),
      preloadedFeatures: e,
      useRender: $g(r),
      createVisualElement: t,
      Component: n,
    });
  };
}
function t_(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function n_(e, t, n) {
  let r = e.getProps();
  return Kh(r, t, n === void 0 ? r.custom : n, e);
}
var r_ = qm(() => window.ScrollTimeline !== void 0),
  i_ = class {
    constructor(e) {
      ((this.stop = () => this.runAll(`stop`)),
        (this.animations = e.filter(Boolean)));
    }
    get finished() {
      return Promise.all(
        this.animations.map((e) => (`finished` in e ? e.finished : e)),
      );
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      let n = this.animations.map((n) => {
        if (r_() && n.attachTimeline) return n.attachTimeline(e);
        if (typeof t == `function`) return t(n);
      });
      return () => {
        n.forEach((e, t) => {
          (e && e(), this.animations[t].stop());
        });
      };
    }
    get time() {
      return this.getAll(`time`);
    }
    set time(e) {
      this.setAll(`time`, e);
    }
    get speed() {
      return this.getAll(`speed`);
    }
    set speed(e) {
      this.setAll(`speed`, e);
    }
    get startTime() {
      return this.getAll(`startTime`);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    flatten() {
      this.runAll(`flatten`);
    }
    play() {
      this.runAll(`play`);
    }
    pause() {
      this.runAll(`pause`);
    }
    cancel() {
      this.runAll(`cancel`);
    }
    complete() {
      this.runAll(`complete`);
    }
  },
  a_ = class extends i_ {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  };
function o_(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
var s_ = 2e4;
function c_(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4;) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function l_(e) {
  return typeof e == `function`;
}
function u_(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
var d_ = (e) => Array.isArray(e) && typeof e[0] == `number`,
  f_ = { linearEasing: void 0 };
function p_(e, t) {
  let n = qm(e);
  return () => f_[t] ?? n();
}
var m_ = p_(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  h_ = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++) r += e(Jm(0, i - 1, t)) + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function g_(e) {
  return !!(
    (typeof e == `function` && m_()) ||
    !e ||
    (typeof e == `string` && (e in v_ || m_())) ||
    d_(e) ||
    (Array.isArray(e) && e.every(g_))
  );
}
var __ = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  v_ = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: __([0, 0.65, 0.55, 1]),
    circOut: __([0.55, 0, 1, 0.45]),
    backIn: __([0.31, 0.01, 0.66, -0.59]),
    backOut: __([0.33, 1.53, 0.69, 0.99]),
  };
function y_(e, t) {
  if (e)
    return typeof e == `function` && m_()
      ? h_(e, t)
      : d_(e)
        ? __(e)
        : Array.isArray(e)
          ? e.map((e) => y_(e, t) || v_.easeOut)
          : v_[e];
}
var b_ = { x: !1, y: !1 };
function x_() {
  return b_.x || b_.y;
}
function S_(e, t, n) {
  if (e instanceof Element) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function C_(e, t) {
  let n = S_(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function w_(e) {
  return (t) => {
    t.pointerType === `touch` || x_() || e(t);
  };
}
function T_(e, t, n = {}) {
  let [r, i, a] = C_(e, n),
    o = w_((e) => {
      let { target: n } = e,
        r = t(e);
      if (typeof r != `function` || !n) return;
      let a = w_((e) => {
        (r(e), n.removeEventListener(`pointerleave`, a));
      });
      n.addEventListener(`pointerleave`, a, i);
    });
  return (
    r.forEach((e) => {
      e.addEventListener(`pointerenter`, o, i);
    }),
    a
  );
}
var E_ = (e, t) => (t ? e === t || E_(e, t.parentElement) : !1),
  D_ = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  O_ = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function k_(e) {
  return O_.has(e.tagName) || e.tabIndex !== -1;
}
var A_ = new WeakSet();
function j_(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function M_(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }),
  );
}
var N_ = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = j_(() => {
    if (A_.has(n)) return;
    M_(n, `down`);
    let e = j_(() => {
      M_(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => M_(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function P_(e) {
  return D_(e) && !x_();
}
function F_(e, t, n = {}) {
  let [r, i, a] = C_(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!P_(e) || A_.has(r)) return;
      A_.add(r);
      let a = t(e),
        o = (e, t) => {
          (window.removeEventListener(`pointerup`, s),
            window.removeEventListener(`pointercancel`, c),
            !(!P_(e) || !A_.has(r)) &&
              (A_.delete(r), typeof a == `function` && a(e, { success: t })));
        },
        s = (e) => {
          o(e, n.useGlobalTarget || E_(r, e.target));
        },
        c = (e) => {
          o(e, !1);
        };
      (window.addEventListener(`pointerup`, s, i),
        window.addEventListener(`pointercancel`, c, i));
    };
  return (
    r.forEach((e) => {
      (!k_(e) && e.getAttribute(`tabindex`) === null && (e.tabIndex = 0),
        (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        e.addEventListener(`focus`, (e) => N_(e, i), i));
    }),
    a
  );
}
function I_(e) {
  return e === `x` || e === `y`
    ? b_[e]
      ? null
      : ((b_[e] = !0),
        () => {
          b_[e] = !1;
        })
    : b_.x || b_.y
      ? null
      : ((b_.x = b_.y = !0),
        () => {
          b_.x = b_.y = !1;
        });
}
var L_ = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...tg]),
  R_;
function z_() {
  R_ = void 0;
}
var B_ = {
  now: () => (
    R_ === void 0 &&
      B_.set(
        rh.isProcessing || Zm.useManualTiming
          ? rh.timestamp
          : performance.now(),
      ),
    R_
  ),
  set: (e) => {
    ((R_ = e), queueMicrotask(z_));
  },
};
function V_(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function H_(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var U_ = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (V_(this.subscriptions, e), () => H_(this.subscriptions, e));
  }
  notify(e, t, n) {
    let r = this.subscriptions.length;
    if (r)
      if (r === 1) this.subscriptions[0](e, t, n);
      else
        for (let i = 0; i < r; i++) {
          let r = this.subscriptions[i];
          r && r(e, t, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
function W_(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var G_ = 30,
  K_ = (e) => !isNaN(parseFloat(e)),
  q_ = { current: void 0 },
  J_ = class {
    constructor(e, t = {}) {
      ((this.version = `11.18.2`),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e, t = !0) => {
          let n = B_.now();
          (this.updatedAt !== n && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            t &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current));
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = B_.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = K_(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new U_());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              Q.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    get() {
      return (q_.current && q_.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = B_.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > G_
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, G_);
      return W_(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function Y_(e, t) {
  return new J_(e, t);
}
function X_(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Y_(n));
}
function Z_(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = n_(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) X_(e, t, Yh(i[t]));
}
function Q_(e) {
  return !!(Xh(e) && e.add);
}
function $_(e, t) {
  let n = e.getValue(`willChange`);
  if (Q_(n)) return n.add(t);
}
function ev(e) {
  return e.props[Mh];
}
var tv = { current: !1 },
  nv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  rv = 1e-7,
  iv = 12;
function av(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = nv(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > rv && ++s < iv);
  return o;
}
function ov(e, t, n, r) {
  if (e === t && n === r) return Wm;
  let i = (t) => av(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : nv(i(e), t, r));
}
var sv = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  cv = (e) => (t) => 1 - e(1 - t),
  lv = ov(0.33, 1.53, 0.69, 0.99),
  uv = cv(lv),
  dv = sv(uv),
  fv = (e) => ((e *= 2) < 1 ? 0.5 * uv(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  pv = (e) => 1 - Math.sin(Math.acos(e)),
  mv = cv(pv),
  hv = sv(pv),
  gv = (e) => /^0[^.\s]+$/u.test(e);
function _v(e) {
  return typeof e == `number`
    ? e === 0
    : e === null || e === `none` || e === `0` || gv(e);
}
var vv = (e) => Math.round(e * 1e5) / 1e5,
  yv = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function bv(e) {
  return e == null;
}
var xv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Sv = (e, t) => (n) =>
    !!(
      (typeof n == `string` && xv.test(n) && n.startsWith(e)) ||
      (t && !bv(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Cv = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(yv);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  wv = (e) => lg(0, 255, e),
  Tv = { ...ug, transform: (e) => Math.round(wv(e)) },
  Ev = {
    test: Sv(`rgb`, `red`),
    parse: Cv(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      Tv.transform(e) +
      `, ` +
      Tv.transform(t) +
      `, ` +
      Tv.transform(n) +
      `, ` +
      vv(dg.transform(r)) +
      `)`,
  };
function Dv(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Ov = { test: Sv(`#`), parse: Dv, transform: Ev.transform },
  kv = {
    test: Sv(`hsl`, `hue`),
    parse: Cv(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      hg.transform(vv(t)) +
      `, ` +
      hg.transform(vv(n)) +
      `, ` +
      vv(dg.transform(r)) +
      `)`,
  },
  Av = {
    test: (e) => Ev.test(e) || Ov.test(e) || kv.test(e),
    parse: (e) =>
      Ev.test(e) ? Ev.parse(e) : kv.test(e) ? kv.parse(e) : Ov.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? Ev.transform(e)
          : kv.transform(e),
  },
  jv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Mv(e) {
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (e.match(yv)?.length || 0) + (e.match(jv)?.length || 0) > 0
  );
}
var Nv = `number`,
  Pv = `color`,
  Fv = `var`,
  Iv = `var(`,
  Lv = "${}",
  Rv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function zv(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        Rv,
        (e) => (
          Av.test(e)
            ? (r.color.push(a), i.push(Pv), n.push(Av.parse(e)))
            : e.startsWith(Iv)
              ? (r.var.push(a), i.push(Fv), n.push(e))
              : (r.number.push(a), i.push(Nv), n.push(parseFloat(e))),
          ++a,
          Lv
        ),
      )
      .split(Lv),
    indexes: r,
    types: i,
  };
}
function Bv(e) {
  return zv(e).values;
}
function Vv(e) {
  let { split: t, types: n } = zv(e),
    r = t.length;
  return (e) => {
    let i = ``;
    for (let a = 0; a < r; a++)
      if (((i += t[a]), e[a] !== void 0)) {
        let t = n[a];
        i += t === Nv ? vv(e[a]) : t === Pv ? Av.transform(e[a]) : e[a];
      }
    return i;
  };
}
var Hv = (e) => (typeof e == `number` ? 0 : e);
function Uv(e) {
  let t = Bv(e);
  return Vv(e)(t.map(Hv));
}
var Wv = { test: Mv, parse: Bv, createTransformer: Vv, getAnimatableNone: Uv },
  Gv = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function Kv(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(yv) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!Gv.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var qv = /\b([a-z-]*)\(.*?\)/gu,
  Jv = {
    ...Wv,
    getAnimatableNone: (e) => {
      let t = e.match(qv);
      return t ? t.map(Kv).join(` `) : e;
    },
  },
  Yv = {
    ...Sg,
    color: Av,
    backgroundColor: Av,
    outlineColor: Av,
    fill: Av,
    stroke: Av,
    borderColor: Av,
    borderTopColor: Av,
    borderRightColor: Av,
    borderBottomColor: Av,
    borderLeftColor: Av,
    filter: Jv,
    WebkitFilter: Jv,
  },
  Xv = (e) => Yv[e];
function Zv(e, t) {
  let n = Xv(e);
  return (
    n !== Jv && (n = Wv),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var Qv = new Set([`auto`, `none`, `0`]);
function $v(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !Qv.has(t) && zv(t).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let r of t) e[r] = Zv(n, i);
}
var ey = (e) => e === ug || e === $,
  ty = (e, t) => parseFloat(e.split(`, `)[t]),
  ny =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === `none` || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return ty(i[1], t);
      {
        let t = r.match(/^matrix\((.+)\)$/u);
        return t ? ty(t[1], e) : 0;
      }
    },
  ry = new Set([`x`, `y`, `z`]),
  iy = tg.filter((e) => !ry.has(e));
function ay(e) {
  let t = [];
  return (
    iy.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var oy = {
  width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: ny(4, 13),
  y: ny(5, 14),
};
((oy.translateX = oy.x), (oy.translateY = oy.y));
var sy = new Set(),
  cy = !1,
  ly = !1;
function uy() {
  if (ly) {
    let e = Array.from(sy).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = ay(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            var r;
            (r = e.getValue(t)) == null || r.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((ly = !1), (cy = !1), sy.forEach((e) => e.complete()), sy.clear());
}
function dy() {
  sy.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (ly = !0));
  });
}
function fy() {
  (dy(), uy());
}
var py = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.isScheduled = !0),
        this.isAsync
          ? (sy.add(this),
            cy || ((cy = !0), Q.read(dy), Q.resolveKeyframes(uy)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (e[i] === null)
          if (i === 0) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, a);
              r != null && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          } else e[i] = e[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      ((this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        sy.delete(this));
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), sy.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  },
  my = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  hy = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function gy(e) {
  let t = hy.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var _y = 4;
function vy(e, t, n = 1) {
  Km(
    n <= _y,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
  );
  let [r, i] = gy(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return my(e) ? parseFloat(e) : e;
  }
  return og(i) ? vy(i, t, n + 1) : i;
}
var yy = (e) => (t) => t.test(e),
  by = [ug, $, hg, mg, _g, gg, { test: (e) => e === `auto`, parse: (e) => e }],
  xy = (e) => by.find(yy(e)),
  Sy = class extends py {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), og(r))) {
          let i = vy(r, t.current);
          (i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !L_.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = xy(r),
        o = xy(i);
      if (a !== o)
        if (ey(a) && ey(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++) _v(e[t]) && n.push(t);
      n.length && $v(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = oy[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current),
        )),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      ((n[i] = oy[t](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Cy = (e, t) =>
    t !== `zIndex` &&
    !!(
      typeof e == `number` ||
      Array.isArray(e) ||
      (typeof e == `string` &&
        (Wv.test(e) || e === `0`) &&
        !e.startsWith(`url(`))
    );
function wy(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ty(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Cy(i, t),
    s = Cy(a, t);
  return (
    Gm(
      o === s,
      `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`,
    ),
    !o || !s ? !1 : wy(e) || ((n === `spring` || l_(n)) && r)
  );
}
var Ey = (e) => e !== null;
function Dy(e, { repeat: t, repeatType: n = `loop` }, r) {
  let i = e.filter(Ey),
    a = t && n !== `loop` && t % 2 == 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
var Oy = 40,
  ky = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      ...o
    }) {
      ((this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = B_.now()),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          ...o,
        }),
        this.updateFinishedPromise());
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > Oy
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && fy(),
        this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      ((this.resolvedAt = B_.now()), (this.hasAttemptedResolve = !0));
      let {
        name: n,
        type: r,
        velocity: i,
        delay: a,
        onComplete: o,
        onUpdate: s,
        isGenerator: c,
      } = this.options;
      if (!c && !Ty(e, n, r, i))
        if (tv.current || !a) {
          (s && s(Dy(e, this.options, t)),
            o && o(),
            this.resolveFinishedPromise());
          return;
        } else this.options.duration = 0;
      let l = this.initPlayback(e, t);
      l !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...l }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    flatten() {
      ((this.options.type = `keyframes`), (this.options.ease = `linear`));
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  Ay = (e, t, n) => e + (t - e) * n;
function jy(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function My({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = jy(s, r, e + 1 / 3)), (a = jy(s, r, e)), (o = jy(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ny(e, t) {
  return (n) => (n > 0 ? t : e);
}
var Py = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Fy = [Ov, Ev, kv],
  Iy = (e) => Fy.find((t) => t.test(e));
function Ly(e) {
  let t = Iy(e);
  if (
    (Gm(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === kv && (n = My(n)), n);
}
var Ry = (e, t) => {
    let n = Ly(e),
      r = Ly(t);
    if (!n || !r) return Ny(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = Py(n.red, r.red, e)),
      (i.green = Py(n.green, r.green, e)),
      (i.blue = Py(n.blue, r.blue, e)),
      (i.alpha = Ay(n.alpha, r.alpha, e)),
      Ev.transform(i)
    );
  },
  zy = (e, t) => (n) => t(e(n)),
  By = (...e) => e.reduce(zy),
  Vy = new Set([`none`, `hidden`]);
function Hy(e, t) {
  return Vy.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Uy(e, t) {
  return (n) => Ay(e, t, n);
}
function Wy(e) {
  return typeof e == `number`
    ? Uy
    : typeof e == `string`
      ? og(e)
        ? Ny
        : Av.test(e)
          ? Ry
          : Jy
      : Array.isArray(e)
        ? Gy
        : typeof e == `object`
          ? Av.test(e)
            ? Ry
            : Ky
          : Ny;
}
function Gy(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => Wy(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function Ky(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Wy(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function qy(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
var Jy = (e, t) => {
  let n = Wv.createTransformer(t),
    r = zv(e),
    i = zv(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Vy.has(e) && !i.values.length) || (Vy.has(t) && !r.values.length)
      ? Hy(e, t)
      : By(Gy(qy(r, i), i.values), n)
    : (Gm(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
      ),
      Ny(e, t));
};
function Yy(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? Ay(e, t, n)
    : Wy(e)(e, t);
}
var Xy = 5;
function Zy(e, t, n) {
  let r = Math.max(t - Xy, 0);
  return W_(n - e(r), t - r);
}
var Qy = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  $y = 0.001;
function eb({
  duration: e = Qy.duration,
  bounce: t = Qy.bounce,
  velocity: n = Qy.velocity,
  mass: r = Qy.mass,
}) {
  let i, a;
  Gm(e <= Ym(Qy.maxDuration), `Spring duration must be 10 seconds or less`);
  let o = 1 - t;
  ((o = lg(Qy.minDamping, Qy.maxDamping, o)),
    (e = lg(Qy.minDuration, Qy.maxDuration, Xm(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = rb(t, o),
            c = Math.exp(-i);
          return $y - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = rb(t ** 2, o);
          return ((-i(t) + $y > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = nb(i, a, s);
  if (((e = Ym(e)), isNaN(c)))
    return { stiffness: Qy.stiffness, damping: Qy.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var tb = 12;
function nb(e, t, n) {
  let r = n;
  for (let n = 1; n < tb; n++) r -= e(r) / t(r);
  return r;
}
function rb(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var ib = [`duration`, `bounce`],
  ab = [`stiffness`, `damping`, `mass`];
function ob(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function sb(e) {
  let t = {
    velocity: Qy.velocity,
    stiffness: Qy.stiffness,
    damping: Qy.damping,
    mass: Qy.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!ob(e, ab) && ob(e, ib))
    if (e.visualDuration) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * lg(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Qy.mass, stiffness: i, damping: a };
    } else {
      let n = eb(e);
      ((t = { ...t, ...n, mass: Qy.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function cb(e = Qy.visualDuration, t = Qy.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = sb({ ...n, velocity: -Xm(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = Xm(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? Qy.restSpeed.granular : Qy.restSpeed.default),
    (i ||= v ? Qy.restDelta.granular : Qy.restDelta.default));
  let y;
  if (h < 1) {
    let e = rb(_, h);
    y = (t) => {
      let n = Math.exp(-h * _ * t);
      return (
        o - n * (((m + h * _ * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
      );
    };
  } else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
  else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
  }
  let b = {
    calculatedDuration: (p && d) || null,
    next: (e) => {
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = 0;
        h < 1 && (n = e === 0 ? Ym(m) : Zy(y, e, t));
        let a = Math.abs(n) <= r,
          c = Math.abs(o - t) <= i;
        s.done = a && c;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(c_(b), s_),
        t = h_((t) => b.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
  };
  return b;
}
function lb({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = cb({
          keyframes: [f.value, m(f.value)],
          velocity: Zy(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
var ub = ov(0.42, 0, 1, 1),
  db = ov(0, 0, 0.58, 1),
  fb = ov(0.42, 0, 0.58, 1),
  pb = (e) => Array.isArray(e) && typeof e[0] != `number`,
  mb = {
    linear: Wm,
    easeIn: ub,
    easeInOut: fb,
    easeOut: db,
    circIn: pv,
    circInOut: hv,
    circOut: mv,
    backIn: uv,
    backInOut: dv,
    backOut: lv,
    anticipate: fv,
  },
  hb = (e) => {
    if (d_(e)) {
      Km(
        e.length === 4,
        `Cubic bezier arrays must contain four numerical values.`,
      );
      let [t, n, r, i] = e;
      return ov(t, n, r, i);
    }
    return typeof e == `string`
      ? (Km(mb[e] !== void 0, `Invalid easing type '${e}'`), mb[e])
      : e;
  };
function gb(e, t, n) {
  let r = [],
    i = n || Yy,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = By(Array.isArray(t) ? t[n] || Wm : t, a)), r.push(a));
  }
  return r;
}
function _b(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if (
    (Km(a === t.length, `Both input and output ranges must be the same length`),
    a === 1)
  )
    return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = gb(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = Jm(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(lg(e[0], e[a - 1], t)) : l;
}
function vb(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Jm(0, t, r);
    e.push(Ay(n, 1, i));
  }
}
function yb(e) {
  let t = [0];
  return (vb(t, e.length - 1), t);
}
function bb(e, t) {
  return e.map((e) => e * t);
}
function xb(e, t) {
  return e.map(() => t || fb).splice(0, e.length - 1);
}
function Sb({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = pb(r) ? r.map(hb) : hb(r),
    a = { done: !1, value: t[0] },
    o = _b(bb(n && n.length === t.length ? n : yb(t), e), t, {
      ease: Array.isArray(i) ? i : xb(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var Cb = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: () => Q.update(t, !0),
      stop: () => nh(t),
      now: () => (rh.isProcessing ? rh.timestamp : B_.now()),
    };
  },
  wb = { decay: lb, inertia: lb, tween: Sb, keyframes: Sb, spring: cb },
  Tb = (e) => e / 100,
  Eb = class extends ky {
    constructor(e) {
      (super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = `running`),
        (this.startTime = null),
        (this.state = `idle`),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === `idle`)
          )
            return;
          this.teardown();
          let { onStop: e } = this.options;
          e && e();
        }));
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options,
        a = r?.KeyframeResolver || py,
        o = (e, t) => this.onKeyframesResolved(e, t);
      ((this.resolver = new a(i, o, t, n, r)), this.resolver.scheduleResolve());
    }
    flatten() {
      (super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes),
          ));
    }
    initPlayback(e) {
      let {
          type: t = `keyframes`,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = this.options,
        o = l_(t) ? t : wb[t] || Sb,
        s,
        c;
      o !== Sb &&
        typeof e[0] != `number` &&
        ((s = By(Tb, Yy(e[0], e[1]))), (e = [0, 100]));
      let l = o({ ...this.options, keyframes: e });
      (i === `mirror` &&
        (c = o({ ...this.options, keyframes: [...e].reverse(), velocity: -a })),
        l.calculatedDuration === null && (l.calculatedDuration = c_(l)));
      let { calculatedDuration: u } = l,
        d = u + r,
        f = d * (n + 1) - r;
      return {
        generator: l,
        mirroredGenerator: c,
        mapPercentToKeyframes: s,
        calculatedDuration: u,
        resolvedDuration: d,
        totalDuration: f,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      (this.play(),
        this.pendingPlayState === `paused` || !e
          ? this.pause()
          : (this.state = this.pendingPlayState));
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: e } = this.options;
        return { done: !0, value: e[e.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: a,
        mapPercentToKeyframes: o,
        keyframes: s,
        calculatedDuration: c,
        totalDuration: l,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: d,
        repeat: f,
        repeatType: p,
        repeatDelay: m,
        onUpdate: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - l / this.speed, this.startTime)),
        (this.currentTime = t
          ? e
          : this.holdTime === null
            ? Math.round(e - this.startTime) * this.speed
            : this.holdTime));
      let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        _ = this.speed >= 0 ? g < 0 : g > l;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = l));
      let v = this.currentTime,
        y = i;
      if (f) {
        let e = Math.min(this.currentTime, l) / u,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, f + 1)),
          t % 2 &&
            (p === `reverse`
              ? ((n = 1 - n), m && (n -= m / u))
              : p === `mirror` && (y = a)),
          (v = lg(0, 1, n) * u));
      }
      let b = _ ? { done: !1, value: s[0] } : y.next(v);
      o && (b.value = o(b.value));
      let { done: x } = b;
      !_ &&
        c !== null &&
        (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && r !== void 0 && (b.value = Dy(s, this.options, r)),
        h && h(b.value),
        S && this.finish(),
        b
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? Xm(e.calculatedDuration) : 0;
    }
    get time() {
      return Xm(this.currentTime);
    }
    set time(e) {
      ((e = Ym(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      ((this.playbackSpeed = e), t && (this.time = Xm(this.currentTime)));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = `running`;
        return;
      }
      if (this.isStopped) return;
      let { driver: e = Cb, onPlay: t, startTime: n } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), t && t());
      let r = this.driver.now();
      (this.holdTime === null
        ? this.startTime
          ? this.state === `finished` && (this.startTime = r)
          : (this.startTime = n ?? this.calcStartTime())
        : (this.startTime = r - this.holdTime),
        this.state === `finished` && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      if (!this._resolved) {
        this.pendingPlayState = `paused`;
        return;
      }
      ((this.state = `paused`), (this.holdTime = this.currentTime ?? 0));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.pendingPlayState = this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.teardown(), (this.state = `finished`));
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      (this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel());
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
  },
  Db = new Set([`opacity`, `clipPath`, `filter`, `transform`]);
function Ob(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeInOut`,
    times: c,
  } = {},
) {
  let l = { [t]: n };
  c && (l.offset = c);
  let u = y_(s, i);
  return (
    Array.isArray(u) && (l.easing = u),
    e.animate(l, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? `linear` : u,
      fill: `both`,
      iterations: a + 1,
      direction: o === `reverse` ? `alternate` : `normal`,
    })
  );
}
var kb = qm(() => Object.hasOwnProperty.call(Element.prototype, `animate`)),
  Ab = 10,
  jb = 2e4;
function Mb(e) {
  return l_(e.type) || e.type === `spring` || !g_(e.ease);
}
function Nb(e, t) {
  let n = new Eb({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    a = 0;
  for (; !r.done && a < jb;) ((r = n.sample(a)), i.push(r.value), (a += Ab));
  return { times: void 0, keyframes: i, duration: a - Ab, ease: `linear` };
}
var Pb = { anticipate: fv, backInOut: dv, circInOut: hv };
function Fb(e) {
  return e in Pb;
}
var Ib = class extends ky {
    constructor(e) {
      super(e);
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
      ((this.resolver = new Sy(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r,
      )),
        this.resolver.scheduleResolve());
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: i,
        type: a,
        motionValue: o,
        name: s,
        startTime: c,
      } = this.options;
      if (!o.owner || !o.owner.current) return !1;
      if (
        (typeof i == `string` && m_() && Fb(i) && (i = Pb[i]), Mb(this.options))
      ) {
        let {
            onComplete: t,
            onUpdate: o,
            motionValue: s,
            element: c,
            ...l
          } = this.options,
          u = Nb(e, l);
        ((e = u.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (n = u.duration),
          (r = u.times),
          (i = u.ease),
          (a = `keyframes`));
      }
      let l = Ob(o.owner.current, s, e, {
        ...this.options,
        duration: n,
        times: r,
        ease: i,
      });
      return (
        (l.startTime = c ?? this.calcStartTime()),
        this.pendingTimeline
          ? (u_(l, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (l.onfinish = () => {
              let { onComplete: n } = this.options;
              (o.set(Dy(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise());
            }),
        { animation: l, duration: n, times: r, type: a, ease: i, keyframes: e }
      );
    }
    get duration() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { duration: t } = e;
      return Xm(t);
    }
    get time() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { animation: t } = e;
      return Xm(t.currentTime || 0);
    }
    set time(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.currentTime = Ym(e);
    }
    get speed() {
      let { resolved: e } = this;
      if (!e) return 1;
      let { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      let { resolved: e } = this;
      if (!e) return `idle`;
      let { animation: t } = e;
      return t.playState;
    }
    get startTime() {
      let { resolved: e } = this;
      if (!e) return null;
      let { animation: t } = e;
      return t.startTime;
    }
    attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e;
      else {
        let { resolved: t } = this;
        if (!t) return Wm;
        let { animation: n } = t;
        u_(n, e);
      }
      return Wm;
    }
    play() {
      if (this.isStopped) return;
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      (t.playState === `finished` && this.updateFinishedPromise(), t.play());
    }
    pause() {
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      t.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === `idle`)
      )
        return;
      (this.resolveFinishedPromise(), this.updateFinishedPromise());
      let { resolved: e } = this;
      if (!e) return;
      let {
        animation: t,
        keyframes: n,
        duration: r,
        type: i,
        ease: a,
        times: o,
      } = e;
      if (t.playState === `idle` || t.playState === `finished`) return;
      if (this.time) {
        let {
            motionValue: e,
            onUpdate: t,
            onComplete: s,
            element: c,
            ...l
          } = this.options,
          u = new Eb({
            ...l,
            keyframes: n,
            duration: r,
            type: i,
            ease: a,
            times: o,
            isGenerator: !0,
          }),
          d = Ym(this.time);
        e.setWithVelocity(u.sample(d - Ab).value, u.sample(d).value, Ab);
      }
      let { onStop: s } = this.options;
      (s && s(), this.cancel());
    }
    complete() {
      let { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      let { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      let {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: a,
        type: o,
      } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
        return !1;
      let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
      return (
        kb() &&
        n &&
        Db.has(n) &&
        !s &&
        !c &&
        !r &&
        i !== `mirror` &&
        a !== 0 &&
        o !== `inertia`
      );
    }
  },
  Lb = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  Rb = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  zb = { type: `keyframes`, duration: 0.8 },
  Bb = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Vb = (e, { keyframes: t }) =>
    t.length > 2
      ? zb
      : ng.has(e)
        ? e.startsWith(`scale`)
          ? Rb(t[1])
          : Lb
        : Bb;
function Hb({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
var Ub =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = o_(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l -= Ym(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: `easeOut`,
      velocity: t.getVelocity(),
      ...s,
      delay: -l,
      onUpdate: (e) => {
        (t.set(e), s.onUpdate && s.onUpdate(e));
      },
      onComplete: () => {
        (o(), s.onComplete && s.onComplete());
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i,
    };
    (Hb(s) || (u = { ...u, ...Vb(e, u) }),
      u.duration && (u.duration = Ym(u.duration)),
      u.repeatDelay && (u.repeatDelay = Ym(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      (tv.current || Zm.skipAnimations) &&
        ((d = !0), (u.duration = 0), (u.delay = 0)),
      d && !a && t.get() !== void 0)
    ) {
      let e = Dy(u.keyframes, s);
      if (e !== void 0)
        return (
          Q.update(() => {
            (u.onUpdate(e), u.onComplete());
          }),
          new a_([])
        );
    }
    return !a && Ib.supports(u) ? new Ib(u) : new Eb(u);
  };
function Wb({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Gb(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
  r && (a = r);
  let c = [],
    l = i && e.animationState && e.animationState.getState()[i];
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (l && Wb(l, t))) continue;
    let o = { delay: n, ...o_(a || {}, t) },
      u = !1;
    if (window.MotionHandoffAnimation) {
      let n = ev(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, Q);
        e !== null && ((o.startTime = e), (u = !0));
      }
    }
    ($_(e, t),
      r.start(
        Ub(t, r, i, e.shouldReduceMotion && L_.has(t) ? { type: !1 } : o, e, u),
      ));
    let d = r.animation;
    d && c.push(d);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        Q.update(() => {
          o && Z_(e, o);
        });
      }),
    c
  );
}
function Kb(e, t, n = {}) {
  let r = n_(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(Gb(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i;
            return qb(e, t, a + r, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  }
  return Promise.all([a(), o(n.delay)]);
}
function qb(e, t, n = 0, r = 0, i = 1, a) {
  let o = [],
    s = (e.variantChildren.size - 1) * r,
    c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
  return (
    Array.from(e.variantChildren)
      .sort(Jb)
      .forEach((e, r) => {
        (e.notify(`AnimationStart`, t),
          o.push(
            Kb(e, t, { ...a, delay: n + c(r) }).then(() =>
              e.notify(`AnimationComplete`, t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function Jb(e, t) {
  return e.sortNodePosition(t);
}
function Yb(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => Kb(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = Kb(e, t, n);
  else {
    let i = typeof t == `function` ? n_(e, t, n.custom) : t;
    r = Promise.all(Gb(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var Xb = Sh.length;
function Zb(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && Zb(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < Xb; n++) {
    let r = Sh[n],
      i = e.props[r];
    (yh(i) || i === !1) && (t[r] = i);
  }
  return t;
}
var Qb = [...xh].reverse(),
  $b = xh.length;
function ex(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => Yb(e, t, n)));
}
function tx(e) {
  let t = ex(e),
    n = ix(),
    r = !0,
    i = (t) => (n, r) => {
      let i = n_(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function a(n) {
    t = n(e);
  }
  function o(a) {
    let { props: o } = e,
      s = Zb(e.parent) || {},
      c = [],
      l = new Set(),
      u = {},
      d = 1 / 0;
    for (let t = 0; t < $b; t++) {
      let f = Qb[t],
        p = n[f],
        m = o[f] === void 0 ? s[f] : o[f],
        h = yh(m),
        g = f === a ? p.isActive : null;
      g === !1 && (d = t);
      let _ = m === s[f] && m !== o[f] && h;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (p.protectedKeys = { ...u }),
        (!p.isActive && g === null) ||
          (!m && !p.prevProp) ||
          bh(m) ||
          typeof m == `boolean`)
      )
        continue;
      let v = nx(p.prevProp, m),
        y = v || (f === a && p.isActive && !_ && h) || (t > d && h),
        b = !1,
        x = Array.isArray(m) ? m : [m],
        S = x.reduce(i(f), {});
      g === !1 && (S = {});
      let { prevResolvedValues: C = {} } = p,
        w = { ...C, ...S },
        T = (t) => {
          ((y = !0),
            l.has(t) && ((b = !0), l.delete(t)),
            (p.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in w) {
        let t = S[e],
          n = C[e];
        if (u.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = qh(t) && qh(n) ? !t_(t, n) : t !== n),
          r
            ? t == null
              ? l.add(e)
              : T(e)
            : t !== void 0 && l.has(e)
              ? T(e)
              : (p.protectedKeys[e] = !0));
      }
      ((p.prevProp = m),
        (p.prevResolvedValues = S),
        p.isActive && (u = { ...u, ...S }),
        r && e.blockInitialAnimation && (y = !1),
        y &&
          (!(_ && v) || b) &&
          c.push(...x.map((e) => ({ animation: e, options: { type: f } }))));
    }
    if (l.size) {
      let t = {};
      (l.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        c.push({ animation: t }));
    }
    let f = !!c.length;
    return (
      r &&
        (o.initial === !1 || o.initial === o.animate) &&
        !e.manuallyAnimateOnMount &&
        (f = !1),
      (r = !1),
      f ? t(c) : Promise.resolve()
    );
  }
  function s(t, r) {
    var i;
    if (n[t].isActive === r) return Promise.resolve();
    ((i = e.variantChildren) == null ||
      i.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let a = o(t);
    for (let e in n) n[e].protectedKeys = {};
    return a;
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      ((n = ix()), (r = !0));
    },
  };
}
function nx(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !t_(t, e) : !1;
}
function rx(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ix() {
  return {
    animate: rx(!0),
    whileInView: rx(),
    whileHover: rx(),
    whileTap: rx(),
    whileDrag: rx(),
    whileFocus: rx(),
    exit: rx(),
  };
}
var ax = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  },
  ox = class extends ax {
    constructor(e) {
      (super(e), (e.animationState ||= tx(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      bh(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      (this.node.animationState.reset(),
        (e = this.unmountControls) == null || e.call(this));
    }
  },
  sx = 0,
  cx = {
    animation: { Feature: ox },
    exit: {
      Feature: class extends ax {
        constructor() {
          (super(...arguments), (this.id = sx++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive(`exit`, !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      },
    },
  };
function lx(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function ux(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var dx = (e) => (t) => D_(t) && e(t, ux(t));
function fx(e, t, n, r) {
  return lx(e, t, dx(n), r);
}
var px = (e, t) => Math.abs(e - t);
function mx(e, t) {
  let n = px(e.x, t.x),
    r = px(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var hx = class {
  constructor(
    e,
    t,
    { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let e = vx(this.lastMoveEventInfo, this.history),
          t = this.startEvent !== null,
          n = mx(e.offset, { x: 0, y: 0 }) >= 3;
        if (!t && !n) return;
        let { point: r } = e,
          { timestamp: i } = rh;
        this.history.push({ ...r, timestamp: i });
        let { onStart: a, onMove: o } = this.handlers;
        (t ||
          (a && a(this.lastMoveEvent, e),
          (this.startEvent = this.lastMoveEvent)),
          o && o(this.lastMoveEvent, e));
      }),
      (this.handlePointerMove = (e, t) => {
        ((this.lastMoveEvent = e),
          (this.lastMoveEventInfo = gx(t, this.transformPagePoint)),
          Q.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (e, t) => {
        this.end();
        let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
        if (
          (this.dragSnapToOrigin && i && i(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        let a = vx(
          e.type === `pointercancel`
            ? this.lastMoveEventInfo
            : gx(t, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && n && n(e, a), r && r(e, a));
      }),
      !D_(e))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || window));
    let a = gx(ux(e), this.transformPagePoint),
      { point: o } = a,
      { timestamp: s } = rh;
    this.history = [{ ...o, timestamp: s }];
    let { onSessionStart: c } = t;
    (c && c(e, vx(a, this.history)),
      (this.removeListeners = By(
        fx(this.contextWindow, `pointermove`, this.handlePointerMove),
        fx(this.contextWindow, `pointerup`, this.handlePointerUp),
        fx(this.contextWindow, `pointercancel`, this.handlePointerUp),
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), nh(this.updatePoint));
  }
};
function gx(e, t) {
  return t ? { point: t(e.point) } : e;
}
function _x(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function vx({ point: e }, t) {
  return {
    point: e,
    delta: _x(e, bx(t)),
    offset: _x(e, yx(t)),
    velocity: xx(t, 0.1),
  };
}
function yx(e) {
  return e[0];
}
function bx(e) {
  return e[e.length - 1];
}
function xx(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = bx(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ym(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  let a = Xm(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
var Sx = 0.9999,
  Cx = 1.0001,
  wx = -0.01,
  Tx = 0.01;
function Ex(e) {
  return e.max - e.min;
}
function Dx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ox(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Ay(t.min, t.max, e.origin)),
    (e.scale = Ex(n) / Ex(t)),
    (e.translate = Ay(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Sx && e.scale <= Cx) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= wx && e.translate <= Tx) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function kx(e, t, n, r) {
  (Ox(e.x, t.x, n.x, r ? r.originX : void 0),
    Ox(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Ax(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Ex(t)));
}
function jx(e, t, n) {
  (Ax(e.x, t.x, n.x), Ax(e.y, t.y, n.y));
}
function Mx(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Ex(t)));
}
function Nx(e, t, n) {
  (Mx(e.x, t.x, n.x), Mx(e.y, t.y, n.y));
}
function Px(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Ay(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Ay(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Fx(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Ix(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Fx(e.x, n, i), y: Fx(e.y, t, r) };
}
function Lx(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function Rx(e, t) {
  return { x: Lx(e.x, t.x), y: Lx(e.y, t.y) };
}
function zx(e, t) {
  let n = 0.5,
    r = Ex(e),
    i = Ex(t);
  return (
    i > r
      ? (n = Jm(t.min, t.max - r, e.min))
      : r > i && (n = Jm(e.min, e.max - i, t.min)),
    lg(0, 1, n)
  );
}
function Bx(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Vx = 0.35;
function Hx(e = Vx) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Vx),
    { x: Ux(e, `left`, `right`), y: Ux(e, `top`, `bottom`) }
  );
}
function Ux(e, t, n) {
  return { min: Wx(e, t), max: Wx(e, n) };
}
function Wx(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var Gx = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Kx = () => ({ x: Gx(), y: Gx() }),
  qx = () => ({ min: 0, max: 0 }),
  Jx = () => ({ x: qx(), y: qx() });
function Yx(e) {
  return [e(`x`), e(`y`)];
}
function Xx({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Zx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Qx(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function $x(e) {
  return e === void 0 || e === 1;
}
function eS({ scale: e, scaleX: t, scaleY: n }) {
  return !$x(e) || !$x(t) || !$x(n);
}
function tS(e) {
  return (
    eS(e) ||
    nS(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function nS(e) {
  return rS(e.x) || rS(e.y);
}
function rS(e) {
  return e && e !== `0%`;
}
function iS(e, t, n) {
  return n + t * (e - n);
}
function aS(e, t, n, r, i) {
  return (i !== void 0 && (e = iS(e, i, r)), iS(e, n, r) + t);
}
function oS(e, t = 0, n = 1, r, i) {
  ((e.min = aS(e.min, t, n, r, i)), (e.max = aS(e.max, t, n, r, i)));
}
function sS(e, { x: t, y: n }) {
  (oS(e.x, t.translate, t.scale, t.originPoint),
    oS(e.y, n.translate, n.scale, n.originPoint));
}
var cS = 0.999999999999,
  lS = 1.0000000000001;
function uS(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        pS(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), sS(e, o)),
      r && tS(a.latestValues) && pS(e, a.latestValues));
  }
  (t.x < lS && t.x > cS && (t.x = 1), t.y < lS && t.y > cS && (t.y = 1));
}
function dS(e, t) {
  ((e.min += t), (e.max += t));
}
function fS(e, t, n, r, i = 0.5) {
  oS(e, t, n, Ay(e.min, e.max, i), r);
}
function pS(e, t) {
  (fS(e.x, t.x, t.scaleX, t.scale, t.originX),
    fS(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function mS(e, t) {
  return Xx(Qx(e.getBoundingClientRect(), t));
}
function hS(e, t, n) {
  let r = mS(e, n),
    { scroll: i } = t;
  return (i && (dS(r.x, i.offset.x), dS(r.y, i.offset.y)), r);
}
var gS = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  _S = new WeakMap(),
  vS = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Jx()),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (e) => {
          let { dragSnapToOrigin: n } = this.getProps();
          (n ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(ux(e).point));
        },
        i = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = I_(n)),
            !this.openDragLock)
          )
            return;
          ((this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Yx((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (hg.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = Ex(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && Q.postRender(() => i(e, t)),
            $_(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        a = (e, t) => {
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = bS(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && a(e, t));
        },
        o = (e, t) => this.stop(e, t),
        s = () =>
          Yx(
            (e) =>
              this.getAnimationState(e) === `paused` &&
              this.getAxisMotionValue(e).animation?.play(),
          ),
        { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new hx(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: a,
          onSessionEnd: o,
          resumeAnimation: s,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: c,
          contextWindow: gS(this.visualElement),
        },
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && Q.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0));
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !yS(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (a = Px(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && kh(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : (this.constraints = e && n ? Ix(n.layoutBox, e) : !1),
        (this.elastic = Hx(t)),
        r !== this.constraints &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Yx((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = Bx(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !kh(e)) return !1;
      let n = e.current;
      Km(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = hS(n, r.root, this.visualElement.getTransformPagePoint()),
        a = Rx(r.layout.layoutBox, i);
      if (t) {
        let e = t(Zx(a));
        ((this.hasMutatedConstraints = !!e), e && (a = Xx(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = Yx((o) => {
          if (!yS(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          a && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        $_(this.visualElement, e),
        n.start(Ub(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Yx((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      Yx((e) => this.getAxisMotionValue(e).animation?.pause());
    }
    getAnimationState(e) {
      return this.getAxisMotionValue(e).animation?.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps();
      return (
        n[t] ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      Yx((t) => {
        let { drag: n } = this.getProps();
        if (!yS(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t];
          i.set(e[t] - Ay(n, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!kh(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      Yx((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = zx({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Yx((t) => {
          if (!yS(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(Ay(i, a, r[t]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      _S.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = fx(e, `pointerdown`, (e) => {
          let { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        n = () => {
          let { dragConstraints: e } = this.getProps();
          kh(e) &&
            e.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener(`measure`, n);
      (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        Q.read(n));
      let a = lx(window, `resize`, () => this.scalePositionWithinConstraints()),
        o = r.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (Yx((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (a(), t(), i(), o && o());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = Vx,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function yS(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function bS(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var xS = class extends ax {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = Wm),
        (this.removeListeners = Wm),
        (this.controls = new vS(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || Wm));
    }
    unmount() {
      (this.removeGroupControls(), this.removeListeners());
    }
  },
  SS = (e) => (t, n) => {
    e && Q.postRender(() => e(t, n));
  },
  CS = class extends ax {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = Wm));
    }
    onPointerDown(e) {
      this.session = new hx(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: gS(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: SS(e),
        onStart: SS(t),
        onMove: n,
        onEnd: (e, t) => {
          (delete this.session, r && Q.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = fx(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  wS = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function TS(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var ES = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if ($.test(e)) e = parseFloat(e);
        else return e;
      return `${TS(e, t.target.x)}% ${TS(e, t.target.y)}%`;
    },
  },
  DS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = Wv.parse(e);
      if (i.length > 5) return r;
      let a = Wv.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = Ay(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  OS = class extends y.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (Bg(AS),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener(`animationComplete`, () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (wS.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        a = n.projection;
      return a
        ? ((a.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                Q.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        Nh.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function kS(e) {
  let [t, n] = Rm(),
    r = (0, y.useContext)(Am);
  return (0, j.jsx)(OS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, y.useContext)(Fh),
    isPresent: t,
    safeToRemove: n,
  });
}
var AS = {
  borderRadius: {
    ...ES,
    applyTo: [
      `borderTopLeftRadius`,
      `borderTopRightRadius`,
      `borderBottomLeftRadius`,
      `borderBottomRightRadius`,
    ],
  },
  borderTopLeftRadius: ES,
  borderTopRightRadius: ES,
  borderBottomLeftRadius: ES,
  borderBottomRightRadius: ES,
  boxShadow: DS,
};
function jS(e, t, n) {
  let r = Xh(e) ? e : Y_(e);
  return (r.start(Ub(``, r, t, n)), r.animation);
}
function MS(e) {
  return e instanceof SVGElement && e.tagName !== `svg`;
}
var NS = (e, t) => e.depth - t.depth,
  PS = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (V_(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (H_(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(NS),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function FS(e, t) {
  let n = B_.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (nh(r), e(a - t));
    };
  return (Q.read(r, !0), () => nh(r));
}
var IS = [`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`],
  LS = IS.length,
  RS = (e) => (typeof e == `string` ? parseFloat(e) : e),
  zS = (e) => typeof e == `number` || $.test(e);
function BS(e, t, n, r, i, a) {
  i
    ? ((e.opacity = Ay(0, n.opacity === void 0 ? 1 : n.opacity, HS(r))),
      (e.opacityExit = Ay(t.opacity === void 0 ? 1 : t.opacity, 0, US(r))))
    : a &&
      (e.opacity = Ay(
        t.opacity === void 0 ? 1 : t.opacity,
        n.opacity === void 0 ? 1 : n.opacity,
        r,
      ));
  for (let i = 0; i < LS; i++) {
    let a = `border${IS[i]}Radius`,
      o = VS(t, a),
      s = VS(n, a);
    (o !== void 0 || s !== void 0) &&
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || zS(o) === zS(s)
        ? ((e[a] = Math.max(Ay(RS(o), RS(s), r), 0)),
          (hg.test(s) || hg.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = Ay(t.rotate || 0, n.rotate || 0, r));
}
function VS(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var HS = WS(0, 0.5, mv),
  US = WS(0.5, 0.95, Wm);
function WS(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Jm(e, t, r)));
}
function GS(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function KS(e, t) {
  (GS(e.x, t.x), GS(e.y, t.y));
}
function qS(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function JS(e, t, n, r, i) {
  return (
    (e -= t),
    (e = iS(e, 1 / n, r)),
    i !== void 0 && (e = iS(e, 1 / i, r)),
    e
  );
}
function YS(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (hg.test(t) &&
      ((t = parseFloat(t)), (t = Ay(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = Ay(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = JS(e.min, t, n, s, i)),
    (e.max = JS(e.max, t, n, s, i)));
}
function XS(e, t, [n, r, i], a, o) {
  YS(e, t[n], t[r], t[i], t.scale, a, o);
}
var ZS = [`x`, `scaleX`, `originX`],
  QS = [`y`, `scaleY`, `originY`];
function $S(e, t, n, r) {
  (XS(e.x, t, ZS, n ? n.x : void 0, r ? r.x : void 0),
    XS(e.y, t, QS, n ? n.y : void 0, r ? r.y : void 0));
}
function eC(e) {
  return e.translate === 0 && e.scale === 1;
}
function tC(e) {
  return eC(e.x) && eC(e.y);
}
function nC(e, t) {
  return e.min === t.min && e.max === t.max;
}
function rC(e, t) {
  return nC(e.x, t.x) && nC(e.y, t.y);
}
function iC(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function aC(e, t) {
  return iC(e.x, t.x) && iC(e.y, t.y);
}
function oC(e) {
  return Ex(e.x) / Ex(e.y);
}
function sC(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
var cC = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    (V_(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if (
      (H_(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((t) => e === t);
    if (t === 0) return !1;
    let n;
    for (let e = t; e >= 0; e--) {
      let t = this.members[e];
      if (t.isPresent !== !1) {
        n = t;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      (n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      (t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function lC(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      rotateX: i,
      rotateY: a,
      skewX: o,
      skewY: s,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var uC = {
    type: `projectionFrame`,
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  dC = typeof window < `u` && window.MotionDebug !== void 0,
  fC = [``, `X`, `Y`, `Z`],
  pC = { visibility: `hidden` },
  mC = 1e3,
  hC = 0;
function gC(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function _C(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = ev(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, Q, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && _C(r);
}
function vC({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = hC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            dC &&
              (uC.totalNodes =
                uC.resolvedTargetDeltas =
                uC.recalculatedProjection =
                  0),
            this.nodes.forEach(xC),
            this.nodes.forEach(OC),
            this.nodes.forEach(kC),
            this.nodes.forEach(SC),
            dC && window.MotionDebug.record(uC));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new PS());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new U_()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t, n = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = MS(t)), (this.instance = t));
      let { layoutId: r, layout: i, visualElement: a } = this.options;
      if (
        (a && !a.current && a.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        n && (i || r) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = () => (this.root.updateBlockedByResize = !1);
        e(t, () => {
          ((this.root.updateBlockedByResize = !0),
            n && n(),
            (n = FS(r, 250)),
            wS.hasAnimatedSinceResize &&
              ((wS.hasAnimatedSinceResize = !1), this.nodes.forEach(DC)));
        });
      }
      (r && this.root.registerSharedNode(r, this),
        this.options.animate !== !1 &&
          a &&
          (r || i) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let i = this.options.transition || a.getDefaultTransition() || IC,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  a.getProps(),
                c = !this.targetLayout || !aC(this.targetLayout, r) || n,
                l = !t && n;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(e, l));
                let t = { ...o_(i, `layout`), onPlay: o, onComplete: s };
                ((a.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t));
              } else
                (t || DC(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        nh(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(AC),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          _C(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(wC));
        return;
      }
      (this.isUpdating || this.nodes.forEach(TC),
        (this.isUpdating = !1),
        this.nodes.forEach(EC),
        this.nodes.forEach(yC),
        this.nodes.forEach(bC),
        this.clearAllSnapshots());
      let e = B_.now();
      ((rh.delta = lg(0, 1e3 / 60, e - rh.timestamp)),
        (rh.timestamp = e),
        (rh.isProcessing = !0),
        ih.update.process(rh),
        ih.preRender.process(rh),
        ih.render.process(rh),
        (rh.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Nh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(CC), this.sharedNodes.forEach(jC));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Q.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = Jx()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !tC(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        (t || tS(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        BC(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return Jx();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(HC))) {
        let { scroll: e } = this.root;
        e && (dS(t.x, e.offset.x), dS(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = Jx();
      if ((KS(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && KS(t, e), dS(t.x, i.offset.x), dS(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1) {
      let n = Jx();
      KS(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e];
        (!t &&
          r.options.layoutScroll &&
          r.scroll &&
          r !== r.root &&
          pS(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
          tS(r.latestValues) && pS(n, r.latestValues));
      }
      return (tS(this.latestValues) && pS(n, this.latestValues), n);
    }
    removeTransform(e) {
      let t = Jx();
      KS(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!n.instance || !tS(n.latestValues)) continue;
        eS(n.latestValues) && n.updateSnapshot();
        let r = Jx();
        (KS(r, n.measurePageBox()),
          $S(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r));
      }
      return (tS(this.latestValues) && $S(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 || e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== rh.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (!(
        e ||
        (n && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!(!this.layout || !(r || i))) {
        if (
          ((this.resolvedRelativeTargetAt = rh.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let e = this.getClosestProjectingParent();
          e && e.layout && this.animationProgress !== 1
            ? ((this.relativeParent = e),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Jx()),
              (this.relativeTargetOrigin = Jx()),
              Nx(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                e.layout.layoutBox,
              ),
              KS(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Jx()), (this.targetWithTransforms = Jx())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                jx(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : KS(this.target, this.layout.layoutBox),
                  sS(this.target, this.targetDelta))
                : KS(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let e = this.getClosestProjectingParent();
            e &&
            !!e.resumingFrom == !!this.resumingFrom &&
            !e.options.layoutScroll &&
            e.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Jx()),
                (this.relativeTargetOrigin = Jx()),
                Nx(this.relativeTargetOrigin, this.target, e.target),
                KS(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          dC && uC.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        eS(this.parent.latestValues) ||
        nS(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === rh.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      KS(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (uS(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = Jx())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (qS(this.prevProjectionDelta.x, this.projectionDelta.x),
          qS(this.prevProjectionDelta.y, this.projectionDelta.y)),
        kx(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !sC(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !sC(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        dC && uC.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      var t;
      if (((t = this.options.visualElement) == null || t.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Kx()),
        (this.projectionDelta = Kx()),
        (this.projectionDeltaWithTransform = Kx()));
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = { ...this.latestValues },
        a = Kx();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let o = Jx(),
        s =
          (n ? n.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(FC));
      this.animationProgress = 0;
      let d;
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3;
        (MC(a.x, e.x, n),
          MC(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Nx(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            PC(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && rC(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= Jx()),
            KS(d, this.relativeTarget)),
          s &&
            ((this.animationValues = i), BS(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        (this.pendingAnimation &&= (nh(this.pendingAnimation), void 0)),
        (this.pendingAnimation = Q.update(() => {
          ((wS.hasAnimatedSinceResize = !0),
            (this.currentAnimation = jS(0, mC, {
              ...e,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(mC),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          VC(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || Jx();
          let t = Ex(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = Ex(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (KS(t, n),
          pS(t, i),
          kx(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new cC()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && gC(`z`, e, r, this.animationValues);
      for (let t = 0; t < fC.length; t++)
        (gC(`rotate${fC[t]}`, e, r, this.animationValues),
          gC(`skew${fC[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    getProjectionStyles(e) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return pC;
      let t = { visibility: `` },
        n = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (t.opacity = ``),
          (t.pointerEvents = Zh(e?.pointerEvents) || ``),
          (t.transform = n ? n(this.latestValues, ``) : `none`),
          t
        );
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        let t = {};
        return (
          this.options.layoutId &&
            ((t.opacity =
              this.latestValues.opacity === void 0
                ? 1
                : this.latestValues.opacity),
            (t.pointerEvents = Zh(e?.pointerEvents) || ``)),
          this.hasProjected &&
            !tS(this.latestValues) &&
            ((t.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)),
          t
        );
      }
      let i = r.animationValues || r.latestValues;
      (this.applyTransformsToTarget(),
        (t.transform = lC(
          this.projectionDeltaWithTransform,
          this.treeScale,
          i,
        )),
        n && (t.transform = n(i, t.transform)));
      let { x: a, y: o } = this.projectionDelta;
      ((t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`),
        (t.opacity = r.animationValues
          ? r === this
            ? (i.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit
          : r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit));
      for (let e in zg) {
        if (i[e] === void 0) continue;
        let { correct: n, applyTo: a } = zg[e],
          o = t.transform === `none` ? i[e] : n(i[e], r);
        if (a) {
          let e = a.length;
          for (let n = 0; n < e; n++) t[a[n]] = o;
        } else t[e] = o;
      }
      return (
        this.options.layoutId &&
          (t.pointerEvents = r === this ? Zh(e?.pointerEvents) || `` : `none`),
        t
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(wC),
        this.root.sharedNodes.clear());
    }
  };
}
function yC(e) {
  e.updateLayout();
}
function bC(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    i === `size`
      ? Yx((e) => {
          let r = a ? t.measuredBox[e] : t.layoutBox[e],
            i = Ex(r);
          ((r.min = n[e].min), (r.max = r.min + i));
        })
      : VC(i, t.layoutBox, n) &&
        Yx((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = Ex(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = Kx();
    kx(o, n, t.layoutBox);
    let s = Kx();
    a ? kx(s, e.applyTransform(r, !0), t.measuredBox) : kx(s, n, t.layoutBox);
    let c = !tC(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = Jx();
          Nx(o, t.layoutBox, i.layoutBox);
          let s = Jx();
          (Nx(s, n, a.layoutBox),
            aC(o, s) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = s),
              (e.relativeTargetOrigin = o),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function xC(e) {
  (dC && uC.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function SC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function CC(e) {
  e.clearSnapshot();
}
function wC(e) {
  e.clearMeasurements();
}
function TC(e) {
  e.isLayoutDirty = !1;
}
function EC(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function DC(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function OC(e) {
  e.resolveTargetDelta();
}
function kC(e) {
  e.calcProjection();
}
function AC(e) {
  e.resetSkewAndRotation();
}
function jC(e) {
  e.removeLeadSnapshot();
}
function MC(e, t, n) {
  ((e.translate = Ay(t.translate, 0, n)),
    (e.scale = Ay(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function NC(e, t, n, r) {
  ((e.min = Ay(t.min, n.min, r)), (e.max = Ay(t.max, n.max, r)));
}
function PC(e, t, n, r) {
  (NC(e.x, t.x, n.x, r), NC(e.y, t.y, n.y, r));
}
function FC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var IC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  LC = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  RC = LC(`applewebkit/`) && !LC(`chrome/`) ? Math.round : Wm;
function zC(e) {
  ((e.min = RC(e.min)), (e.max = RC(e.max)));
}
function BC(e) {
  (zC(e.x), zC(e.y));
}
function VC(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !Dx(oC(t), oC(n), 0.2))
  );
}
function HC(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var UC = vC({
    attachResizeListener: (e, t) => lx(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  WC = { current: void 0 },
  GC = vC({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!WC.current) {
        let e = new UC({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (WC.current = e));
      }
      return WC.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  KC = {
    pan: { Feature: CS },
    drag: { Feature: xS, ProjectionNode: GC, MeasureLayout: kS },
  };
function qC(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && Q.postRender(() => i(t, ux(t)));
}
var JC = class extends ax {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = T_(
          e,
          (e) => (qC(this.node, e, `Start`), (e) => qC(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  YC = class extends ax {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = By(
        lx(this.node.current, `focus`, () => this.onFocus()),
        lx(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function XC(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && Q.postRender(() => i(t, ux(t)));
}
var ZC = class extends ax {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = F_(
          e,
          (e) => (
            XC(this.node, e, `Start`),
            (e, { success: t }) => XC(this.node, e, t ? `End` : `Cancel`)
          ),
          { useGlobalTarget: this.node.props.globalTapTarget },
        ));
    }
    unmount() {}
  },
  QC = new WeakMap(),
  $C = new WeakMap(),
  ew = (e) => {
    let t = QC.get(e.target);
    t && t(e);
  },
  tw = (e) => {
    e.forEach(ew);
  };
function nw({ root: e, ...t }) {
  let n = e || document;
  $C.has(n) || $C.set(n, {});
  let r = $C.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(tw, { root: e, ...t })),
    r[i]
  );
}
function rw(e, t, n) {
  let r = nw(t);
  return (
    QC.set(e, n),
    r.observe(e),
    () => {
      (QC.delete(e), r.unobserve(e));
    }
  );
}
var iw = { some: 0, all: 1 },
  aw = class extends ax {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : iw[r],
        };
      return rw(this.node.current, a, (e) => {
        let { isIntersecting: t } = e;
        if (
          this.isInView === t ||
          ((this.isInView = t), i && !t && this.hasEnteredView)
        )
          return;
        (t && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive(`whileInView`, t));
        let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
          a = t ? n : r;
        a && a(e);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(ow(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function ow({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var sw = {
    inView: { Feature: aw },
    tap: { Feature: ZC },
    focus: { Feature: YC },
    hover: { Feature: JC },
  },
  cw = { layout: { ProjectionNode: GC, MeasureLayout: kS } },
  lw = { current: null },
  uw = { current: !1 };
function dw() {
  if (((uw.current = !0), Vm))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (lw.current = e.matches);
      (e.addListener(t), t());
    } else lw.current = !1;
}
var fw = [...by, Av, Wv],
  pw = (e) => fw.find(yy(e)),
  mw = new WeakMap();
function hw(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (Xh(i)) e.addValue(r, i);
    else if (Xh(a)) e.addValue(r, Y_(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, Y_(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var gw = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  _w = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: a,
      },
      o = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = py),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = B_.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), Q.render(this.render, !1, !0));
        }));
      let { latestValues: s, renderState: c, onUpdate: l } = a;
      ((this.onUpdate = l),
        (this.latestValues = s),
        (this.baseTarget = { ...s }),
        (this.initialValues = t.initial ? { ...s } : {}),
        (this.renderState = c),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = o),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = Ch(t)),
        (this.isVariantNode = wh(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let e in d) {
        let t = d[e];
        s[e] !== void 0 && Xh(t) && t.set(s[e], !1);
      }
    }
    mount(e) {
      ((this.current = e),
        mw.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        uw.current || dw(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === `never`
            ? !1
            : this.reducedMotionConfig === `always` || lw.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (mw.delete(this.current),
        this.projection && this.projection.unmount(),
        nh(this.notifyUpdate),
        nh(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      let n = ng.has(e),
        r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && Q.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0));
        }),
        i = t.on(`renderRequest`, this.scheduleRender),
        a;
      (window.MotionCheckAppearSync &&
        (a = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i(), a && a(), t.owner && t.stop());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in sh) {
        let t = sh[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Jx();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < gw.length; t++) {
        let n = gw[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = hw(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this));
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = Y_(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (my(n) || gv(n))
            ? (n = parseFloat(n))
            : !pw(n) && Wv.test(t) && (n = Zv(e, t)),
          this.setBaseTarget(e, Xh(n) ? n.get() : n)),
        Xh(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = Kh(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !Xh(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new U_()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  },
  vw = class extends _w {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Sy));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Xh(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  };
function yw(e) {
  return window.getComputedStyle(e);
}
var bw = class extends vw {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = Ig));
    }
    readValueFromInstance(e, t) {
      if (ng.has(t)) {
        let e = Xv(t);
        return (e && e.default) || 0;
      }
      {
        let n = yw(e),
          r = (ig(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return mS(e, t);
    }
    build(e, t, n) {
      Eg(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Hg(e, t, n);
    }
  },
  xw = class extends vw {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Jx));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (ng.has(t)) {
        let e = Xv(t);
        return (e && e.default) || 0;
      }
      return ((t = Lg.has(t) ? t : jh(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Ug(e, t, n);
    }
    build(e, t, n) {
      Mg(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      Rg(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = Fg(e.tagName)), super.mount(e));
    }
  },
  Sw = (e, t) =>
    Wh(e) ? new xw(t) : new bw(t, { allowProjection: e !== y.Fragment }),
  Cw = _h(e_({ ...cx, ...sw, ...KC, ...cw }, Sw));
function ww() {
  let [e, t] = (0, y.useState)(!1),
    n = Bo(),
    r = [
      { label: `Home`, path: `/` },
      { label: `Detect`, path: `/detect` },
      { label: `Identify`, path: `/identify` },
      { label: `History`, path: `/history` },
    ],
    i = (e) => n.pathname === e;
  return (0, j.jsxs)(`header`, {
    className: `fixed top-0 inset-x-0 z-50`,
    children: [
      (0, j.jsx)(`div`, {
        className: `glass border-b border-border/40`,
        children: (0, j.jsxs)(`nav`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between`,
          children: [
            (0, j.jsxs)(Es, {
              to: `/`,
              className: `flex items-center gap-2 group`,
              children: [
                (0, j.jsx)(`div`, {
                  className: `w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform`,
                  children: (0, j.jsx)(_n, { className: `w-5 h-5 text-white` }),
                }),
                (0, j.jsxs)(`span`, {
                  className: `font-heading font-bold text-lg tracking-tight`,
                  children: [
                    `Flora`,
                    (0, j.jsx)(`span`, {
                      className: `text-gradient`,
                      children: `Pulse`,
                    }),
                  ],
                }),
              ],
            }),
            (0, j.jsxs)(`div`, {
              className: `hidden md:flex items-center gap-1`,
              children: [
                r.map((e) =>
                  (0, j.jsx)(
                    Es,
                    {
                      to: e.path,
                      className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${i(e.path) ? `bg-primary/10 text-primary` : `text-muted-foreground hover:text-foreground hover:bg-muted/60`}`,
                      children: e.label,
                    },
                    e.path,
                  ),
                ),
                (0, j.jsx)(Es, {
                  to: `/detect`,
                  className: `ml-2 px-5 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30`,
                  children: `Scan a Plant`,
                }),
              ],
            }),
            (0, j.jsx)(`button`, {
              onClick: () => t(!e),
              className: `md:hidden p-2 rounded-lg hover:bg-muted/60 transition-colors`,
              "aria-label": `Menu`,
              children: e
                ? (0, j.jsx)(In, { className: `w-5 h-5` })
                : (0, j.jsx)(bn, { className: `w-5 h-5` }),
            }),
          ],
        }),
      }),
      (0, j.jsx)(Um, {
        children:
          e &&
          (0, j.jsx)(Cw.div, {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: `md:hidden glass border-b border-border/40`,
            children: (0, j.jsxs)(`div`, {
              className: `px-4 py-4 space-y-1`,
              children: [
                r.map((e) =>
                  (0, j.jsx)(
                    Es,
                    {
                      to: e.path,
                      onClick: () => t(!1),
                      className: `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${i(e.path) ? `bg-primary/10 text-primary` : `text-foreground hover:bg-muted/60`}`,
                      children: e.label,
                    },
                    e.path,
                  ),
                ),
                (0, j.jsx)(Es, {
                  to: `/detect`,
                  onClick: () => t(!1),
                  className: `block px-4 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground text-center mt-2`,
                  children: `Scan a Plant`,
                }),
              ],
            }),
          }),
      }),
    ],
  });
}
function Tw() {
  return (0, j.jsx)(`footer`, {
    className: `border-t border-border/60 bg-mesh mt-20`,
    children: (0, j.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12`,
      children: [
        (0, j.jsxs)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-4 gap-8`,
          children: [
            (0, j.jsxs)(`div`, {
              className: `md:col-span-2`,
              children: [
                (0, j.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-4`,
                  children: [
                    (0, j.jsx)(`div`, {
                      className: `w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center`,
                      children: (0, j.jsx)(_n, {
                        className: `w-5 h-5 text-white`,
                      }),
                    }),
                    (0, j.jsxs)(`span`, {
                      className: `font-heading font-bold text-lg`,
                      children: [
                        `Flora`,
                        (0, j.jsx)(`span`, {
                          className: `text-gradient`,
                          children: `Pulse`,
                        }),
                        ` AI`,
                      ],
                    }),
                  ],
                }),
                (0, j.jsx)(`p`, {
                  className: `text-sm text-muted-foreground max-w-sm leading-relaxed`,
                  children: `AI-powered plant disease detection. Snap a photo, get an instant diagnosis, and keep your plants thriving.`,
                }),
              ],
            }),
            (0, j.jsxs)(`div`, {
              children: [
                (0, j.jsx)(`h4`, {
                  className: `font-semibold text-sm mb-3`,
                  children: `Navigate`,
                }),
                (0, j.jsxs)(`ul`, {
                  className: `space-y-2 text-sm text-muted-foreground`,
                  children: [
                    (0, j.jsx)(`li`, {
                      children: (0, j.jsx)(Es, {
                        to: `/`,
                        className: `hover:text-primary transition-colors`,
                        children: `Home`,
                      }),
                    }),
                    (0, j.jsx)(`li`, {
                      children: (0, j.jsx)(Es, {
                        to: `/detect`,
                        className: `hover:text-primary transition-colors`,
                        children: `Detect`,
                      }),
                    }),
                    (0, j.jsx)(`li`, {
                      children: (0, j.jsx)(Es, {
                        to: `/history`,
                        className: `hover:text-primary transition-colors`,
                        children: `History`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, j.jsxs)(`div`, {
              children: [
                (0, j.jsx)(`h4`, {
                  className: `font-semibold text-sm mb-3`,
                  children: `Connect`,
                }),
                (0, j.jsxs)(`div`, {
                  className: `flex gap-3`,
                  children: [
                    (0, j.jsx)(`a`, {
                      href: `#`,
                      className: `w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors`,
                      "aria-label": `Twitter`,
                      children: (0, j.jsx)(Fn, { className: `w-4 h-4` }),
                    }),
                    (0, j.jsx)(`a`, {
                      href: `#`,
                      className: `w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors`,
                      "aria-label": `GitHub`,
                      children: (0, j.jsx)(mn, { className: `w-4 h-4` }),
                    }),
                    (0, j.jsx)(`a`, {
                      href: `#`,
                      className: `w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors`,
                      "aria-label": `Email`,
                      children: (0, j.jsx)(yn, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, j.jsxs)(`div`, {
          className: `mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3`,
          children: [
            (0, j.jsxs)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: [
                `© `,
                new Date().getFullYear(),
                ` Flora Pulse AI. All rights reserved.`,
              ],
            }),
            (0, j.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: `Made with 🌿 for healthier plants`,
            }),
          ],
        }),
      ],
    }),
  });
}
var Ew = `https://media.base44.com/images/public/6aa10f724eeb77be0b0ff502/10ba7d9c7_generated_image.png`,
  Dw = [
    {
      icon: cn,
      title: `Accurate & Researched`,
      desc: `AI cross-references live web research across 100s of conditions — fungal, bacterial, viral, pest, and nutrient — for precise, trustworthy answers you can rely on.`,
    },
    {
      icon: Ln,
      title: `Instant Results`,
      desc: `Get a full report — disease name, severity, symptoms, cause, treatment, and prevention — in one tap.`,
    },
    {
      icon: On,
      title: `Actionable Advice`,
      desc: `Clear, practical treatment steps and prevention tips you can follow right away to save your plants.`,
    },
  ],
  Ow = [
    {
      icon: ln,
      title: `Snap or Upload`,
      desc: `Take a clear photo of the affected leaf, stem, or plant and upload it.`,
    },
    {
      icon: En,
      title: `AI Analyzes`,
      desc: `Flora Pulse AI scans the image for signs of disease, pests, and stress.`,
    },
    {
      icon: _n,
      title: `Get Your Report`,
      desc: `Receive a detailed diagnosis with treatment and prevention guidance.`,
    },
  ];
function kw() {
  return (0, j.jsxs)(`div`, {
    className: `min-h-screen bg-mesh`,
    children: [
      (0, j.jsx)(ww, {}),
      (0, j.jsx)(`section`, {
        className: `relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden`,
        children: (0, j.jsxs)(`div`, {
          className: `max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center`,
          children: [
            (0, j.jsxs)(Cw.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              children: [
                (0, j.jsxs)(`div`, {
                  className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6`,
                  children: [
                    (0, j.jsx)(kn, { className: `w-3.5 h-3.5` }),
                    `AI Plant Pathology`,
                  ],
                }),
                (0, j.jsxs)(`h1`, {
                  className: `font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight`,
                  children: [
                    `Detect plant diseases `,
                    (0, j.jsx)(`span`, {
                      className: `text-gradient`,
                      children: `in seconds`,
                    }),
                    `, not days.`,
                  ],
                }),
                (0, j.jsx)(`p`, {
                  className: `mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg`,
                  children: `Flora Pulse AI turns your phone camera into a plant doctor. Upload a photo and get an instant, expert-level diagnosis with treatment you can act on.`,
                }),
                (0, j.jsxs)(`div`, {
                  className: `mt-8 flex flex-col sm:flex-row gap-3`,
                  children: [
                    (0, j.jsxs)(Es, {
                      to: `/detect`,
                      className: `inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all`,
                      children: [
                        `Scan a Plant Now`,
                        (0, j.jsx)(sn, { className: `w-4 h-4` }),
                      ],
                    }),
                    (0, j.jsx)(Es, {
                      to: `/history`,
                      className: `inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-card border border-border font-semibold hover:bg-muted/60 transition-all`,
                      children: `View History`,
                    }),
                  ],
                }),
                (0, j.jsxs)(`div`, {
                  className: `mt-10 flex items-center gap-6 text-sm text-muted-foreground`,
                  children: [
                    (0, j.jsxs)(`div`, {
                      children: [
                        (0, j.jsx)(`span`, {
                          className: `font-bold text-foreground text-lg`,
                          children: `100s+`,
                        }),
                        ` diseases`,
                      ],
                    }),
                    (0, j.jsx)(`div`, { className: `w-px h-8 bg-border` }),
                    (0, j.jsxs)(`div`, {
                      children: [
                        (0, j.jsx)(`span`, {
                          className: `font-bold text-foreground text-lg`,
                          children: `15s`,
                        }),
                        ` deep research`,
                      ],
                    }),
                    (0, j.jsx)(`div`, { className: `w-px h-8 bg-border` }),
                    (0, j.jsxs)(`div`, {
                      children: [
                        (0, j.jsx)(`span`, {
                          className: `font-bold text-foreground text-lg`,
                          children: `Free`,
                        }),
                        ` to try`,
                      ],
                    }),
                  ],
                }),
                (0, j.jsxs)(`div`, {
                  className: `mt-8 flex flex-wrap gap-2.5`,
                  children: [
                    (0, j.jsxs)(`span`, {
                      className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-foreground/80`,
                      children: [
                        (0, j.jsx)(Mn, {
                          className: `w-3.5 h-3.5 text-primary`,
                        }),
                        ` Accurate & Web-Researched`,
                      ],
                    }),
                    (0, j.jsxs)(`span`, {
                      className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-foreground/80`,
                      children: [
                        (0, j.jsx)(Dn, {
                          className: `w-3.5 h-3.5 text-primary`,
                        }),
                        ` Deep Research in 15s`,
                      ],
                    }),
                    (0, j.jsxs)(`span`, {
                      className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-foreground/80`,
                      children: [
                        (0, j.jsx)(xn, {
                          className: `w-3.5 h-3.5 text-primary`,
                        }),
                        ` Identify Any Plant`,
                      ],
                    }),
                    (0, j.jsxs)(`span`, {
                      className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-foreground/80`,
                      children: [
                        (0, j.jsx)(Sn, {
                          className: `w-3.5 h-3.5 text-primary`,
                        }),
                        ` Color-Coded Results`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, j.jsxs)(Cw.div, {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: {
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              },
              className: `relative`,
              children: [
                (0, j.jsx)(`div`, {
                  className: `absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl`,
                }),
                (0, j.jsxs)(`div`, {
                  className: `relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-border`,
                  children: [
                    (0, j.jsx)(`img`, {
                      src: Ew,
                      alt: `Healthy plant leaf`,
                      className: `w-full h-[420px] object-cover`,
                    }),
                    (0, j.jsxs)(`div`, {
                      className: `absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 flex items-center gap-3`,
                      children: [
                        (0, j.jsx)(`div`, {
                          className: `w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0`,
                          children: (0, j.jsx)(_n, {
                            className: `w-5 h-5 text-white`,
                          }),
                        }),
                        (0, j.jsxs)(`div`, {
                          children: [
                            (0, j.jsx)(`p`, {
                              className: `text-sm font-semibold`,
                              children: `Healthy Plant Detected`,
                            }),
                            (0, j.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: `98% confidence · No action needed`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        className: `py-20 px-4 sm:px-6 lg:px-8`,
        children: (0, j.jsxs)(`div`, {
          className: `max-w-7xl mx-auto`,
          children: [
            (0, j.jsxs)(`div`, {
              className: `text-center max-w-2xl mx-auto mb-14`,
              children: [
                (0, j.jsx)(`h2`, {
                  className: `font-heading font-bold text-3xl sm:text-4xl tracking-tight`,
                  children: `Why Flora Pulse AI`,
                }),
                (0, j.jsx)(`p`, {
                  className: `mt-4 text-muted-foreground`,
                  children: `Everything you need to keep your plants healthy, powered by cutting-edge AI.`,
                }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `grid md:grid-cols-3 gap-6`,
              children: Dw.map((e, t) =>
                (0, j.jsxs)(
                  Cw.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.5, delay: t * 0.1 },
                    className: `rounded-3xl p-7 bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all`,
                    children: [
                      (0, j.jsx)(`div`, {
                        className: `w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-5`,
                        children: (0, j.jsx)(e.icon, {
                          className: `w-6 h-6 text-primary`,
                        }),
                      }),
                      (0, j.jsx)(`h3`, {
                        className: `font-heading font-semibold text-lg mb-2`,
                        children: e.title,
                      }),
                      (0, j.jsx)(`p`, {
                        className: `text-sm text-muted-foreground leading-relaxed`,
                        children: e.desc,
                      }),
                    ],
                  },
                  e.title,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        className: `py-20 px-4 sm:px-6 lg:px-8 bg-muted/30`,
        children: (0, j.jsxs)(`div`, {
          className: `max-w-7xl mx-auto`,
          children: [
            (0, j.jsxs)(`div`, {
              className: `text-center max-w-2xl mx-auto mb-14`,
              children: [
                (0, j.jsx)(`h2`, {
                  className: `font-heading font-bold text-3xl sm:text-4xl tracking-tight`,
                  children: `How it works`,
                }),
                (0, j.jsx)(`p`, {
                  className: `mt-4 text-muted-foreground`,
                  children: `Three simple steps from photo to diagnosis.`,
                }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `grid md:grid-cols-3 gap-8`,
              children: Ow.map((e, t) =>
                (0, j.jsxs)(
                  Cw.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.5, delay: t * 0.12 },
                    className: `relative text-center`,
                    children: [
                      (0, j.jsxs)(`div`, {
                        className: `relative inline-flex`,
                        children: [
                          (0, j.jsx)(`div`, {
                            className: `w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto shadow-lg shadow-primary/20`,
                            children: (0, j.jsx)(e.icon, {
                              className: `w-7 h-7`,
                            }),
                          }),
                          (0, j.jsx)(`span`, {
                            className: `absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center`,
                            children: t + 1,
                          }),
                        ],
                      }),
                      (0, j.jsx)(`h3`, {
                        className: `font-heading font-semibold text-lg mt-5 mb-2`,
                        children: e.title,
                      }),
                      (0, j.jsx)(`p`, {
                        className: `text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed`,
                        children: e.desc,
                      }),
                    ],
                  },
                  e.title,
                ),
              ),
            }),
            (0, j.jsx)(`div`, {
              className: `text-center mt-12`,
              children: (0, j.jsxs)(Es, {
                to: `/detect`,
                className: `inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all`,
                children: [
                  `Try it now`,
                  (0, j.jsx)(sn, { className: `w-4 h-4` }),
                ],
              }),
            }),
          ],
        }),
      }),
      (0, j.jsx)(Tw, {}),
    ],
  });
}
function Aw({ onUploaded: e, disabled: t }) {
  let n = (0, y.useRef)(null),
    [r, i] = (0, y.useState)(null),
    [a, o] = (0, y.useState)(!1),
    [s, c] = (0, y.useState)(!1),
    { toast: l } = O(),
    u = async (t) => {
      if (t) {
        if (!t.type.startsWith(`image/`)) {
          l({ title: `Please upload an image file`, variant: `destructive` });
          return;
        }
        (i(URL.createObjectURL(t)), o(!0));
        try {
          let { file_url: n } = await Sm.integrations.Core.UploadFile({
            file: t,
          });
          e(n);
        } catch (e) {
          (l({
            title: `Upload failed`,
            description: e.message,
            variant: `destructive`,
          }),
            i(null));
        } finally {
          o(!1);
        }
      }
    };
  return (0, j.jsxs)(`div`, {
    className: `w-full`,
    children: [
      (0, j.jsx)(`input`, {
        ref: n,
        type: `file`,
        accept: `image/*`,
        className: `hidden`,
        onChange: (e) => u(e.target.files?.[0]),
        disabled: t,
      }),
      (0, j.jsx)(Um, {
        mode: `wait`,
        children: r
          ? (0, j.jsxs)(
              Cw.div,
              {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.96 },
                className: `relative rounded-3xl overflow-hidden border border-border bg-card shadow-lg group`,
                children: [
                  (0, j.jsx)(`img`, {
                    src: r,
                    alt: `Plant preview`,
                    className: `w-full h-72 sm:h-80 object-cover`,
                  }),
                  (0, j.jsx)(`div`, {
                    className: `absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`,
                  }),
                  (0, j.jsx)(`button`, {
                    onClick: () => {
                      (i(null), e(null), n.current && (n.current.value = ``));
                    },
                    disabled: t || a,
                    className: `absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-destructive hover:text-white transition-colors shadow-lg`,
                    "aria-label": `Remove image`,
                    children: (0, j.jsx)(In, { className: `w-4 h-4` }),
                  }),
                  a &&
                    (0, j.jsx)(`div`, {
                      className: `absolute inset-0 glass flex items-center justify-center`,
                      children: (0, j.jsxs)(`div`, {
                        className: `flex flex-col items-center gap-2`,
                        children: [
                          (0, j.jsx)(`div`, {
                            className: `w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin`,
                          }),
                          (0, j.jsx)(`span`, {
                            className: `text-sm font-medium`,
                            children: `Uploading…`,
                          }),
                        ],
                      }),
                    }),
                ],
              },
              `preview`,
            )
          : (0, j.jsxs)(
              Cw.button,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => n.current?.click(),
                onDragOver: (e) => {
                  (e.preventDefault(), c(!0));
                },
                onDragLeave: () => c(!1),
                onDrop: (e) => {
                  (e.preventDefault(), c(!1), u(e.dataTransfer.files?.[0]));
                },
                disabled: t,
                className: `w-full h-72 sm:h-80 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center gap-4 transition-all cursor-pointer ${s ? `border-primary bg-primary/5 scale-[1.01]` : `border-border hover:border-primary/50 hover:bg-muted/40`}`,
                children: [
                  (0, j.jsx)(`div`, {
                    className: `w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center`,
                    children: (0, j.jsx)(dn, {
                      className: `w-8 h-8 text-primary`,
                    }),
                  }),
                  (0, j.jsxs)(`div`, {
                    className: `text-center px-6`,
                    children: [
                      (0, j.jsx)(`p`, {
                        className: `font-semibold text-base`,
                        children: `Drop a plant photo here`,
                      }),
                      (0, j.jsx)(`p`, {
                        className: `text-sm text-muted-foreground mt-1`,
                        children: `or click to browse — JPG, PNG up to 10MB`,
                      }),
                    ],
                  }),
                  (0, j.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-xs text-muted-foreground`,
                    children: [
                      (0, j.jsx)(gn, { className: `w-3.5 h-3.5` }),
                      (0, j.jsx)(`span`, {
                        children: `Leaf, stem, or whole plant`,
                      }),
                    ],
                  }),
                ],
              },
              `dropzone`,
            ),
      }),
    ],
  });
}
var jw = {
    none: {
      label: `None`,
      color: `text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40`,
    },
    low: {
      label: `Low`,
      color: `text-yellow-600 bg-yellow-50 dark:bg-yellow-950/40`,
    },
    moderate: {
      label: `Moderate`,
      color: `text-orange-600 bg-orange-50 dark:bg-orange-950/40`,
    },
    high: { label: `High`, color: `text-red-600 bg-red-50 dark:bg-red-950/40` },
    severe: {
      label: `Severe`,
      color: `text-red-700 bg-red-100 dark:bg-red-950/60`,
    },
  },
  Mw = {
    issue: {
      card: `bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50`,
      icon: `bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400`,
      title: `text-red-700 dark:text-red-300`,
    },
    cause: {
      card: `bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50`,
      icon: `bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400`,
      title: `text-amber-700 dark:text-amber-300`,
    },
    cure: {
      card: `bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50`,
      icon: `bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400`,
      title: `text-emerald-700 dark:text-emerald-300`,
    },
    prevent: {
      card: `bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-900/50`,
      icon: `bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400`,
      title: `text-sky-700 dark:text-sky-300`,
    },
  };
function Nw({ result: e, imageUrl: t }) {
  let n = jw[e.severity] || jw.none,
    r = e.is_healthy;
  return (0, j.jsxs)(Cw.div, {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    className: `space-y-4`,
    children: [
      (0, j.jsx)(`div`, {
        className: `rounded-3xl p-6 border ${r ? `border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/30 dark:border-emerald-800` : `border-red-200 bg-red-50/50 dark:bg-red-950/30 dark:border-red-800`}`,
        children: (0, j.jsxs)(`div`, {
          className: `flex items-start gap-4`,
          children: [
            (0, j.jsx)(`div`, {
              className: `w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${r ? `bg-emerald-500` : `bg-red-500`}`,
              children: r
                ? (0, j.jsx)(un, { className: `w-6 h-6 text-white` })
                : (0, j.jsx)(Pn, { className: `w-6 h-6 text-white` }),
            }),
            (0, j.jsxs)(`div`, {
              className: `flex-1 min-w-0`,
              children: [
                (0, j.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-2 mb-1`,
                  children: [
                    (0, j.jsx)(`h3`, {
                      className: `text-xl font-bold font-heading`,
                      children: e.plant_name,
                    }),
                    (0, j.jsxs)(`span`, {
                      className: `px-2.5 py-0.5 rounded-full text-xs font-semibold ${n.color}`,
                      children: [n.label, ` severity`],
                    }),
                  ],
                }),
                (0, j.jsx)(`p`, {
                  className: `text-sm font-medium text-foreground/80`,
                  children: r
                    ? `No disease detected — your plant looks healthy! 🌿`
                    : e.disease_name,
                }),
                (0, j.jsxs)(`div`, {
                  className: `flex items-center gap-2 mt-3`,
                  children: [
                    (0, j.jsx)(`div`, {
                      className: `flex-1 h-2 rounded-full bg-black/10 overflow-hidden`,
                      children: (0, j.jsx)(Cw.div, {
                        initial: { width: 0 },
                        animate: { width: `${e.confidence}%` },
                        transition: { duration: 0.8, ease: `easeOut` },
                        className: `h-full rounded-full ${r ? `bg-emerald-500` : `bg-red-500`}`,
                      }),
                    }),
                    (0, j.jsxs)(`span`, {
                      className: `text-xs font-semibold tabular-nums`,
                      children: [Math.round(e.confidence), `% confidence`],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, j.jsxs)(`div`, {
        className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
        children: [
          (0, j.jsx)(Pw, {
            theme: `issue`,
            icon: (0, j.jsx)(on, { className: `w-4 h-4` }),
            title: `Symptoms — What's the issue`,
            text: e.symptoms,
          }),
          (0, j.jsx)(Pw, {
            theme: `cause`,
            icon: (0, j.jsx)(pn, { className: `w-4 h-4` }),
            title: `Likely Cause`,
            text: e.cause,
          }),
          (0, j.jsx)(Pw, {
            theme: `cure`,
            icon: (0, j.jsx)(kn, { className: `w-4 h-4` }),
            title: `How to Cure — Treatment`,
            text: e.treatment,
          }),
          (0, j.jsx)(Pw, {
            theme: `prevent`,
            icon: (0, j.jsx)(On, { className: `w-4 h-4` }),
            title: `Prevention`,
            text: e.prevention,
          }),
        ],
      }),
    ],
  });
}
function Pw({ theme: e, icon: t, title: n, text: r }) {
  let i = Mw[e];
  return (0, j.jsxs)(`div`, {
    className: `rounded-2xl p-5 border ${i.card}`,
    children: [
      (0, j.jsxs)(`div`, {
        className: `flex items-center gap-2 mb-2`,
        children: [
          (0, j.jsx)(`div`, {
            className: `w-7 h-7 rounded-lg flex items-center justify-center ${i.icon}`,
            children: t,
          }),
          (0, j.jsx)(`h4`, {
            className: `font-semibold text-sm ${i.title}`,
            children: n,
          }),
        ],
      }),
      (0, j.jsx)(`p`, {
        className: `text-sm text-foreground/75 leading-relaxed`,
        children: r,
      }),
    ],
  });
}
function Fw() {
  let [e, t] = (0, y.useState)(null),
    [n, r] = (0, y.useState)(!1),
    [i, a] = (0, y.useState)(null),
    [o, s] = (0, y.useState)(!1),
    { toast: c } = O();
  return (0, j.jsxs)(`div`, {
    className: `min-h-screen bg-mesh`,
    children: [
      (0, j.jsx)(ww, {}),
      (0, j.jsx)(`section`, {
        className: `pt-28 pb-16 px-4 sm:px-6 lg:px-8`,
        children: (0, j.jsxs)(`div`, {
          className: `max-w-3xl mx-auto`,
          children: [
            (0, j.jsxs)(Cw.div, {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: `text-center mb-8`,
              children: [
                (0, j.jsxs)(`div`, {
                  className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4`,
                  children: [
                    (0, j.jsx)(En, { className: `w-3.5 h-3.5` }),
                    `Plant Disease Scanner`,
                  ],
                }),
                (0, j.jsx)(`h1`, {
                  className: `font-heading font-bold text-3xl sm:text-4xl tracking-tight`,
                  children: `Scan your plant`,
                }),
                (0, j.jsx)(`p`, {
                  className: `mt-3 text-muted-foreground`,
                  children: `Upload a clear photo and let AI diagnose it instantly.`,
                }),
              ],
            }),
            (0, j.jsx)(Aw, { onUploaded: t, disabled: n }),
            (0, j.jsxs)(`div`, {
              className: `mt-6 flex flex-col sm:flex-row gap-3 justify-center`,
              children: [
                (0, j.jsx)(`button`, {
                  onClick: async () => {
                    if (e) {
                      (r(!0), a(null), s(!1));
                      try {
                        let t = await Sm.functions.invoke(
                          `detectPlantDisease`,
                          { image_url: e },
                        );
                        a(t.data);
                      } catch (e) {
                        c({
                          title: `Analysis failed`,
                          description: e.message,
                          variant: `destructive`,
                        });
                      } finally {
                        r(!1);
                      }
                    }
                  },
                  disabled: !e || n,
                  className: `inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-all`,
                  children: n
                    ? (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsx)(vn, { className: `w-4 h-4 animate-spin` }),
                          `Analyzing…`,
                        ],
                      })
                    : (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsx)(kn, { className: `w-4 h-4` }),
                          `Diagnose Plant`,
                        ],
                      }),
                }),
                i &&
                  (0, j.jsxs)(`button`, {
                    onClick: () => {
                      (t(null), a(null), s(!1));
                    },
                    className: `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-card border border-border font-semibold hover:bg-muted/60 transition-all`,
                    children: [
                      (0, j.jsx)(wn, { className: `w-4 h-4` }),
                      `New Scan`,
                    ],
                  }),
              ],
            }),
            (0, j.jsx)(Um, {
              children:
                n &&
                (0, j.jsxs)(Cw.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: `mt-8 rounded-3xl border border-border bg-card p-10 text-center`,
                  children: [
                    (0, j.jsxs)(`div`, {
                      className: `relative w-20 h-20 mx-auto mb-4`,
                      children: [
                        (0, j.jsx)(`div`, {
                          className: `absolute inset-0 rounded-full border-4 border-primary/15`,
                        }),
                        (0, j.jsx)(`div`, {
                          className: `absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin`,
                        }),
                        (0, j.jsx)(`div`, {
                          className: `absolute inset-0 flex items-center justify-center`,
                          children: (0, j.jsx)(_n, {
                            className: `w-7 h-7 text-primary`,
                          }),
                        }),
                      ],
                    }),
                    (0, j.jsx)(`p`, {
                      className: `font-semibold`,
                      children: `Analyzing your plant…`,
                    }),
                    (0, j.jsx)(`p`, {
                      className: `text-sm text-muted-foreground mt-1`,
                      children: `This usually takes a few seconds.`,
                    }),
                  ],
                }),
            }),
            i &&
              !n &&
              (0, j.jsxs)(Cw.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                className: `mt-8 space-y-4`,
                children: [
                  (0, j.jsx)(Nw, { result: i, imageUrl: e }),
                  (0, j.jsx)(`div`, {
                    className: `flex justify-center`,
                    children: (0, j.jsx)(`button`, {
                      onClick: async () => {
                        if (i)
                          try {
                            (await Sm.entities.PlantScan.create({
                              image_url: e,
                              plant_name: i.plant_name,
                              is_healthy: i.is_healthy,
                              disease_name: i.disease_name,
                              confidence: i.confidence,
                              severity: i.severity,
                              symptoms: i.symptoms,
                              cause: i.cause,
                              treatment: i.treatment,
                              prevention: i.prevention,
                            }),
                              s(!0),
                              c({
                                title: `Scan saved to history`,
                                description: `View it anytime in your History page.`,
                              }));
                          } catch (e) {
                            c({
                              title: `Could not save scan`,
                              description: e.message,
                              variant: `destructive`,
                            });
                          }
                      },
                      disabled: o,
                      className: `inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border font-semibold hover:bg-muted/60 disabled:opacity-60 transition-all`,
                      children: o
                        ? (0, j.jsxs)(j.Fragment, {
                            children: [
                              (0, j.jsx)(Tn, {
                                className: `w-4 h-4 text-primary`,
                              }),
                              `Saved to History`,
                            ],
                          })
                        : (0, j.jsxs)(j.Fragment, {
                            children: [
                              (0, j.jsx)(Tn, { className: `w-4 h-4` }),
                              `Save to History`,
                            ],
                          }),
                    }),
                  }),
                ],
              }),
          ],
        }),
      }),
      (0, j.jsx)(Tw, {}),
    ],
  });
}
var Iw = {
    identity: {
      card: `bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50`,
      icon: `bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400`,
      title: `text-emerald-700 dark:text-emerald-300`,
    },
    light: {
      card: `bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50`,
      icon: `bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400`,
      title: `text-amber-700 dark:text-amber-300`,
    },
    water: {
      card: `bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-900/50`,
      icon: `bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400`,
      title: `text-sky-700 dark:text-sky-300`,
    },
    soil: {
      card: `bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900/50`,
      icon: `bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400`,
      title: `text-orange-700 dark:text-orange-300`,
    },
    temp: {
      card: `bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50`,
      icon: `bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400`,
      title: `text-rose-700 dark:text-rose-300`,
    },
    facts: {
      card: `bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-900/50`,
      icon: `bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400`,
      title: `text-violet-700 dark:text-violet-300`,
    },
    health: {
      card: `bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50`,
      icon: `bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400`,
      title: `text-emerald-700 dark:text-emerald-300`,
    },
  },
  Lw = {
    easy: `bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300`,
    moderate: `bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300`,
    difficult: `bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300`,
  };
function Rw({ result: e }) {
  let t = e.is_healthy,
    n = Lw[e.care_level] || Lw.moderate;
  return (0, j.jsxs)(Cw.div, {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    className: `space-y-4`,
    children: [
      (0, j.jsx)(`div`, {
        className: `rounded-3xl p-6 border border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/30 dark:border-emerald-800`,
        children: (0, j.jsxs)(`div`, {
          className: `flex items-start gap-4`,
          children: [
            (0, j.jsx)(`div`, {
              className: `w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-gradient-to-br from-primary to-accent`,
              children: (0, j.jsx)(_n, { className: `w-6 h-6 text-white` }),
            }),
            (0, j.jsxs)(`div`, {
              className: `flex-1 min-w-0`,
              children: [
                (0, j.jsx)(`h3`, {
                  className: `text-xl font-bold font-heading`,
                  children: e.plant_name,
                }),
                (0, j.jsx)(`p`, {
                  className: `text-sm italic text-muted-foreground`,
                  children: e.scientific_name,
                }),
                (0, j.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-2 mt-2`,
                  children: [
                    (0, j.jsx)(`span`, {
                      className: `px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300`,
                      children: e.plant_type,
                    }),
                    e.family &&
                      (0, j.jsx)(`span`, {
                        className: `px-2.5 py-0.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground`,
                        children: e.family,
                      }),
                    (0, j.jsxs)(`span`, {
                      className: `px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${n}`,
                      children: [e.care_level, ` care`],
                    }),
                  ],
                }),
                (0, j.jsxs)(`div`, {
                  className: `flex items-center gap-2 mt-3`,
                  children: [
                    (0, j.jsx)(`div`, {
                      className: `flex-1 h-2 rounded-full bg-black/10 overflow-hidden`,
                      children: (0, j.jsx)(Cw.div, {
                        initial: { width: 0 },
                        animate: { width: `${e.confidence}%` },
                        transition: { duration: 0.8, ease: `easeOut` },
                        className: `h-full rounded-full bg-primary`,
                      }),
                    }),
                    (0, j.jsxs)(`span`, {
                      className: `text-xs font-semibold tabular-nums`,
                      children: [Math.round(e.confidence), `% match`],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, j.jsxs)(`div`, {
        className: `rounded-2xl p-5 border border-border bg-card`,
        children: [
          (0, j.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-2`,
            children: [
              (0, j.jsx)(`div`, {
                className: `w-7 h-7 rounded-lg flex items-center justify-center bg-primary/15 text-primary`,
                children: (0, j.jsx)(xn, { className: `w-4 h-4` }),
              }),
              (0, j.jsx)(`h4`, {
                className: `font-semibold text-sm`,
                children: `About this plant`,
              }),
            ],
          }),
          (0, j.jsx)(`p`, {
            className: `text-sm text-foreground/75 leading-relaxed`,
            children: e.description,
          }),
        ],
      }),
      (0, j.jsx)(zw, {
        theme: `health`,
        icon: t
          ? (0, j.jsx)(un, { className: `w-4 h-4` })
          : (0, j.jsx)(Pn, { className: `w-4 h-4` }),
        title: `Plant Health`,
        text:
          e.health_note ||
          (t
            ? `This plant appears healthy and in good condition.`
            : `Some signs of stress are visible.`),
      }),
      (0, j.jsxs)(`div`, {
        className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
        children: [
          (0, j.jsx)(zw, {
            theme: `light`,
            icon: (0, j.jsx)(jn, { className: `w-4 h-4` }),
            title: `Light`,
            text: e.light_requirements,
          }),
          (0, j.jsx)(zw, {
            theme: `water`,
            icon: (0, j.jsx)(fn, { className: `w-4 h-4` }),
            title: `Watering`,
            text: e.water_requirements,
          }),
          (0, j.jsx)(zw, {
            theme: `soil`,
            icon: (0, j.jsx)(An, { className: `w-4 h-4` }),
            title: `Soil`,
            text: e.soil_requirements,
          }),
          e.temperature_range &&
            (0, j.jsx)(zw, {
              theme: `temp`,
              icon: (0, j.jsx)(Nn, { className: `w-4 h-4` }),
              title: `Temperature`,
              text: e.temperature_range,
            }),
        ],
      }),
      (0, j.jsx)(zw, {
        theme: `facts`,
        icon: (0, j.jsx)(kn, { className: `w-4 h-4` }),
        title: `Fun Facts`,
        text: e.fun_facts,
      }),
    ],
  });
}
function zw({ theme: e, icon: t, title: n, text: r }) {
  let i = Iw[e];
  return (0, j.jsxs)(`div`, {
    className: `rounded-2xl p-5 border ${i.card}`,
    children: [
      (0, j.jsxs)(`div`, {
        className: `flex items-center gap-2 mb-2`,
        children: [
          (0, j.jsx)(`div`, {
            className: `w-7 h-7 rounded-lg flex items-center justify-center ${i.icon}`,
            children: t,
          }),
          (0, j.jsx)(`h4`, {
            className: `font-semibold text-sm ${i.title}`,
            children: n,
          }),
        ],
      }),
      (0, j.jsx)(`p`, {
        className: `text-sm text-foreground/75 leading-relaxed`,
        children: r,
      }),
    ],
  });
}
var Bw = [
  `Scanning visual features…`,
  `Matching against plant database…`,
  `Researching species details…`,
  `Compiling care guidance…`,
];
function Vw() {
  let [e, t] = (0, y.useState)(null),
    [n, r] = (0, y.useState)(!1),
    [i, a] = (0, y.useState)(null),
    [o, s] = (0, y.useState)(!1),
    [c, l] = (0, y.useState)(0),
    { toast: u } = O();
  return (0, j.jsxs)(`div`, {
    className: `min-h-screen bg-mesh`,
    children: [
      (0, j.jsx)(ww, {}),
      (0, j.jsx)(`section`, {
        className: `pt-28 pb-16 px-4 sm:px-6 lg:px-8`,
        children: (0, j.jsxs)(`div`, {
          className: `max-w-3xl mx-auto`,
          children: [
            (0, j.jsxs)(Cw.div, {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: `text-center mb-8`,
              children: [
                (0, j.jsxs)(`div`, {
                  className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4`,
                  children: [
                    (0, j.jsx)(xn, { className: `w-3.5 h-3.5` }),
                    `Plant Identifier & Research`,
                  ],
                }),
                (0, j.jsx)(`h1`, {
                  className: `font-heading font-bold text-3xl sm:text-4xl tracking-tight`,
                  children: `What plant is this?`,
                }),
                (0, j.jsx)(`p`, {
                  className: `mt-3 text-muted-foreground`,
                  children: `Upload any plant photo and get a deep, researched profile — species, type, care guide, and fun facts. No disease focus here.`,
                }),
              ],
            }),
            (0, j.jsx)(Aw, { onUploaded: t, disabled: n }),
            (0, j.jsxs)(`div`, {
              className: `mt-6 flex flex-col sm:flex-row gap-3 justify-center`,
              children: [
                (0, j.jsx)(`button`, {
                  onClick: async () => {
                    if (!e) return;
                    (r(!0), a(null), s(!1), l(0));
                    let t = setInterval(
                      () => l((e) => (e < Bw.length - 1 ? e + 1 : e)),
                      3500,
                    );
                    try {
                      let t = await Sm.functions.invoke(`identifyPlant`, {
                        image_url: e,
                      });
                      a(t.data);
                    } catch (e) {
                      u({
                        title: `Research failed`,
                        description: e.message,
                        variant: `destructive`,
                      });
                    } finally {
                      (clearInterval(t), r(!1));
                    }
                  },
                  disabled: !e || n,
                  className: `inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-all`,
                  children: n
                    ? (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsx)(vn, { className: `w-4 h-4 animate-spin` }),
                          `Researching…`,
                        ],
                      })
                    : (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsx)(Dn, { className: `w-4 h-4` }),
                          `Identify & Research`,
                        ],
                      }),
                }),
                i &&
                  (0, j.jsxs)(`button`, {
                    onClick: () => {
                      (t(null), a(null), s(!1));
                    },
                    className: `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-card border border-border font-semibold hover:bg-muted/60 transition-all`,
                    children: [
                      (0, j.jsx)(wn, { className: `w-4 h-4` }),
                      `New Plant`,
                    ],
                  }),
              ],
            }),
            (0, j.jsx)(Um, {
              children:
                n &&
                (0, j.jsxs)(Cw.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: `mt-8 rounded-3xl border border-border bg-card p-10`,
                  children: [
                    (0, j.jsxs)(`div`, {
                      className: `relative w-20 h-20 mx-auto mb-6`,
                      children: [
                        (0, j.jsx)(`div`, {
                          className: `absolute inset-0 rounded-full border-4 border-primary/15`,
                        }),
                        (0, j.jsx)(`div`, {
                          className: `absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin`,
                        }),
                        (0, j.jsx)(`div`, {
                          className: `absolute inset-0 flex items-center justify-center`,
                          children: (0, j.jsx)(_n, {
                            className: `w-7 h-7 text-primary`,
                          }),
                        }),
                      ],
                    }),
                    (0, j.jsx)(`div`, {
                      className: `space-y-2.5 max-w-xs mx-auto`,
                      children: Bw.map((e, t) =>
                        (0, j.jsxs)(
                          `div`,
                          {
                            className: `flex items-center gap-2.5 text-sm`,
                            children: [
                              (0, j.jsx)(`div`, {
                                className: `w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${t < c ? `bg-primary text-primary-foreground` : t === c ? `bg-primary/20 text-primary` : `bg-muted text-muted-foreground`}`,
                                children:
                                  t < c
                                    ? `✓`
                                    : t === c
                                      ? (0, j.jsx)(`div`, {
                                          className: `w-2 h-2 rounded-full bg-primary animate-pulse`,
                                        })
                                      : ``,
                              }),
                              (0, j.jsx)(`span`, {
                                className:
                                  t <= c
                                    ? `text-foreground font-medium`
                                    : `text-muted-foreground`,
                                children: e,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, j.jsx)(`p`, {
                      className: `text-center text-xs text-muted-foreground mt-5`,
                      children: `Deep research takes ~10–15 seconds for precise results.`,
                    }),
                  ],
                }),
            }),
            i &&
              !n &&
              (0, j.jsxs)(Cw.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                className: `mt-8 space-y-4`,
                children: [
                  (0, j.jsx)(Rw, { result: i }),
                  (0, j.jsx)(`div`, {
                    className: `flex justify-center`,
                    children: (0, j.jsx)(`button`, {
                      onClick: async () => {
                        if (i)
                          try {
                            (await Sm.entities.PlantInfo.create({
                              image_url: e,
                              plant_name: i.plant_name,
                              scientific_name: i.scientific_name,
                              plant_type: i.plant_type,
                              family: i.family,
                              description: i.description,
                              is_healthy: i.is_healthy,
                              health_note: i.health_note,
                              care_level: i.care_level,
                              light_requirements: i.light_requirements,
                              water_requirements: i.water_requirements,
                              soil_requirements: i.soil_requirements,
                              temperature_range: i.temperature_range,
                              fun_facts: i.fun_facts,
                              confidence: i.confidence,
                            }),
                              s(!0),
                              u({
                                title: `Plant info saved`,
                                description: `View it in your History under the “Plant IDs” tab.`,
                              }));
                          } catch (e) {
                            u({
                              title: `Could not save`,
                              description: e.message,
                              variant: `destructive`,
                            });
                          }
                      },
                      disabled: o,
                      className: `inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border font-semibold hover:bg-muted/60 disabled:opacity-60 transition-all`,
                      children: o
                        ? (0, j.jsxs)(j.Fragment, {
                            children: [
                              (0, j.jsx)(Tn, {
                                className: `w-4 h-4 text-primary`,
                              }),
                              `Saved to History`,
                            ],
                          })
                        : (0, j.jsxs)(j.Fragment, {
                            children: [
                              (0, j.jsx)(Tn, { className: `w-4 h-4` }),
                              `Save to History`,
                            ],
                          }),
                    }),
                  }),
                ],
              }),
          ],
        }),
      }),
      (0, j.jsx)(Tw, {}),
    ],
  });
}
function Hw(e) {
  let [t, n] = y.useState(null);
  return (
    y.useLayoutEffect(() => {
      let t = e.current;
      if (!t) return;
      let r = t.getBoundingClientRect();
      n({ width: r.width, height: r.height });
      let i = new ResizeObserver(([e]) => {
        let { width: t, height: r } = e.contentRect;
        n({ width: t, height: r });
      });
      return (i.observe(t), () => i.disconnect());
    }, [e]),
    t
  );
}
var Uw = {
    "media.base44.com": `/images/public/`,
    "static.wixstatic.com": `/media/`,
  },
  Ww = { OPTIMIZED: `optimized`, ORIGINAL: `original`, FALLBACK: `fallback` },
  Gw = [1, 2, 3],
  Kw = 6e3;
function qw(e) {
  try {
    let t = new URL(e);
    if (
      t.protocol !== `https:` ||
      t.username ||
      t.password ||
      (t.port && t.port !== `443`)
    )
      return null;
    let n = Uw[t.hostname];
    if (!n) return null;
    let r = t.pathname.match(/^(.*)\/v1\/(?:fill|fit)\/[^/]+\/[^/]+$/i),
      i = r ? r[1] : t.pathname,
      a = i.split(`/`).pop();
    return !i.startsWith(n) ||
      !a ||
      !/\.[a-z0-9]+$/i.test(a) ||
      /\.svg$/i.test(a)
      ? null
      : { baseUrl: `${t.origin}${i}`, filename: a };
  } catch {
    return null;
  }
}
var Jw = (e) => Math.min(Math.max(Math.round(e), 1), Kw),
  Yw = (e) => Math.min(1, Math.max(0, e));
function Xw(
  { baseUrl: e, filename: t },
  { width: n, height: r, crop: i, focalPoint: a, quality: o },
) {
  let s = [`w_${Jw(n)}`, `h_${Jw(r || n)}`];
  (i && s.push(a ? `fp_${Yw(a.x).toFixed(2)}_${Yw(a.y).toFixed(2)}` : `al_c`),
    s.push(`q_${o}`, `usm_0.66_1.00_0.01`, `enc_webp`, `quality_auto`));
  let c = /\.gif$/i.test(t) ? t : t.replace(/\.[a-z0-9]+$/i, ``) + `.webp`;
  return `${e}/v1/${i ? `fill` : `fit`}/${s.join(`,`)}/${c}`;
}
function Zw(e, t) {
  return Gw.map(
    (n) =>
      `${Xw(e, { ...t, width: t.width * n, height: t.height ? t.height * n : void 0 })} ${n}x`,
  ).join(`, `);
}
function Qw(e, t) {
  return t?.baseUrl || e;
}
function $w(e) {
  return e === Ww.OPTIMIZED ? Ww.ORIGINAL : Ww.FALLBACK;
}
var eT = `https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png`,
  tT = y.forwardRef(
    ({ aspectRatio: e, className: t, style: n, children: r }, i) =>
      (0, j.jsx)(`span`, {
        ref: i,
        className: si(`inline-block relative`, t),
        style: { aspectRatio: e, ...n },
        children: r,
      }),
  );
tT.displayName = `ImageWrapper`;
var nT = y.forwardRef(
  (
    {
      parsed: e,
      fittingType: t,
      focalPoint: n,
      quality: r,
      className: i,
      style: a,
      aspectRatio: o,
      onLoad: s,
      ...c
    },
    l,
  ) => {
    let u = y.useRef(null),
      d = y.useRef(null),
      f = Hw(u),
      [p, m] = y.useState(!1);
    (y.useImperativeHandle(l, () => d.current),
      y.useEffect(() => {
        m(!1);
      }, [e.baseUrl]));
    let h = t !== `fit`,
      g = f && {
        width: f.width || 1024,
        height: f.height ? f.height : void 0,
        crop: h,
        focalPoint: h ? n : void 0,
        quality: r,
      };
    return (0, j.jsxs)(tT, {
      ref: u,
      aspectRatio: o,
      className: i,
      style: a,
      children: [
        g &&
          !p &&
          (0, j.jsx)(`img`, {
            src: Xw(e, {
              ...g,
              width: 20,
              height: g.height
                ? Math.max(1, Math.round((20 * g.height) / g.width))
                : void 0,
              quality: 20,
            }),
            alt: ``,
            "aria-hidden": `true`,
            className: `w-full h-full inset-0 absolute`,
            style: {
              objectFit: t === `fit` ? `contain` : `cover`,
              filter: `blur(10px)`,
              transform: `scale(1.1)`,
            },
          }),
        g &&
          (0, j.jsx)(`img`, {
            ref: d,
            src: Xw(e, g),
            srcSet: Zw(e, g),
            loading: `lazy`,
            className: si(
              `w-full h-full inset-0 absolute`,
              t === `fit` ? `object-contain` : `object-cover`,
            ),
            onLoad: (e) => {
              (m(!0), s?.(e));
            },
            ...c,
          }),
      ],
    });
  },
);
nT.displayName = `ResponsiveImage`;
var rT = y.forwardRef(
  (
    {
      src: e,
      fittingType: t = `fill`,
      originWidth: n,
      originHeight: r,
      focalPointX: i,
      focalPointY: a,
      quality: o = 90,
      onError: s,
      ...c
    },
    l,
  ) => {
    let u = e && e !== eT ? qw(e) : null,
      d = u ? Ww.OPTIMIZED : Ww.ORIGINAL,
      [f, p] = y.useState({ src: e, mode: d }),
      m = f.src === e ? f.mode : d;
    y.useEffect(() => {
      p({ src: e, mode: d });
    }, [e, d]);
    let h = (t) => {
        if (m === Ww.FALLBACK) return;
        let n = $w(m);
        (p({ src: e, mode: n }), n === Ww.FALLBACK && s?.(t));
      },
      g = { ...c, onError: h };
    if (!e)
      return (0, j.jsx)(`img`, {
        ref: l,
        src: eT,
        ...g,
        "data-empty-image": !0,
      });
    let _ = m === Ww.OPTIMIZED ? u : null;
    if (!_) {
      let t = m === Ww.FALLBACK,
        n = t ? eT : Qw(e, u);
      return (0, j.jsx)(`img`, {
        ref: l,
        src: n,
        ...g,
        "data-error-image": t || void 0,
      });
    }
    let v =
        typeof i == `number` && typeof a == `number` ? { x: i, y: a } : void 0,
      b = n && r ? `${n} / ${r}` : void 0;
    return (0, j.jsx)(nT, {
      ref: l,
      parsed: _,
      fittingType: t,
      focalPoint: v,
      quality: o,
      aspectRatio: b,
      ...g,
    });
  },
);
rT.displayName = `Image`;
function iT() {
  let [e, t] = (0, y.useState)(`scans`),
    [n, r] = (0, y.useState)(null),
    [i, a] = (0, y.useState)(null),
    [o, s] = (0, y.useState)(null);
  return (
    (0, y.useEffect)(() => {
      (async () => {
        try {
          let [e, t] = await Promise.all([
            Sm.entities.PlantScan.list(`-created_date`, 50),
            Sm.entities.PlantInfo.list(`-created_date`, 50),
          ]);
          (r(e), a(t));
        } catch {
          (r([]), a([]));
        }
      })();
    }, []),
    (0, j.jsxs)(`div`, {
      className: `min-h-screen bg-mesh`,
      children: [
        (0, j.jsx)(ww, {}),
        (0, j.jsx)(`section`, {
          className: `pt-28 pb-16 px-4 sm:px-6 lg:px-8`,
          children: (0, j.jsxs)(`div`, {
            className: `max-w-5xl mx-auto`,
            children: [
              (0, j.jsxs)(Cw.div, {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: `mb-8`,
                children: [
                  (0, j.jsxs)(`div`, {
                    className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4`,
                    children: [
                      (0, j.jsx)(hn, { className: `w-3.5 h-3.5` }),
                      `History`,
                    ],
                  }),
                  (0, j.jsx)(`h1`, {
                    className: `font-heading font-bold text-3xl sm:text-4xl tracking-tight`,
                    children: `Your saved scans`,
                  }),
                  (0, j.jsx)(`p`, {
                    className: `mt-3 text-muted-foreground`,
                    children: `Review every diagnosis and plant you've identified with Flora Pulse AI.`,
                  }),
                ],
              }),
              (0, j.jsxs)(`div`, {
                className: `inline-flex p-1 rounded-full bg-muted/60 mb-8`,
                children: [
                  (0, j.jsxs)(`button`, {
                    onClick: () => t(`scans`),
                    className: `inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${e === `scans` ? `bg-card text-primary shadow-sm` : `text-muted-foreground hover:text-foreground`}`,
                    children: [
                      (0, j.jsx)(En, { className: `w-4 h-4` }),
                      `Disease Scans`,
                      n &&
                        n.length > 0 &&
                        (0, j.jsx)(`span`, {
                          className: `text-xs opacity-60`,
                          children: n.length,
                        }),
                    ],
                  }),
                  (0, j.jsxs)(`button`, {
                    onClick: () => t(`plants`),
                    className: `inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${e === `plants` ? `bg-card text-primary shadow-sm` : `text-muted-foreground hover:text-foreground`}`,
                    children: [
                      (0, j.jsx)(xn, { className: `w-4 h-4` }),
                      `Plant IDs`,
                      i &&
                        i.length > 0 &&
                        (0, j.jsx)(`span`, {
                          className: `text-xs opacity-60`,
                          children: i.length,
                        }),
                    ],
                  }),
                ],
              }),
              e === `scans`
                ? (0, j.jsx)(aT, { scans: n, onSelect: s })
                : (0, j.jsx)(oT, { plants: i, onSelect: s }),
            ],
          }),
        }),
        o &&
          (0, j.jsx)(Cw.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            onClick: () => s(null),
            className: `fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4`,
            children: (0, j.jsxs)(Cw.div, {
              initial: { scale: 0.95, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              onClick: (e) => e.stopPropagation(),
              className: `bg-card rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto no-scrollbar shadow-2xl`,
              children: [
                (0, j.jsxs)(`div`, {
                  className: `relative h-56 overflow-hidden rounded-t-3xl`,
                  children: [
                    (0, j.jsx)(rT, {
                      src: o.image_url,
                      alt: o.plant_name,
                      className: `w-full h-full`,
                      fittingType: `fill`,
                    }),
                    (0, j.jsx)(`button`, {
                      onClick: () => s(null),
                      className: `absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-destructive hover:text-white transition-colors`,
                      children: (0, j.jsx)(In, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, j.jsx)(`div`, {
                  className: `p-6 space-y-4`,
                  children:
                    e === `scans`
                      ? (0, j.jsxs)(j.Fragment, {
                          children: [
                            (0, j.jsxs)(`div`, {
                              className: `flex items-center gap-2 flex-wrap`,
                              children: [
                                (0, j.jsx)(`h2`, {
                                  className: `font-heading font-bold text-xl`,
                                  children: o.plant_name,
                                }),
                                (0, j.jsx)(`span`, {
                                  className: `px-2.5 py-0.5 rounded-full text-xs font-semibold ${o.is_healthy ? `bg-emerald-100 text-emerald-700` : `bg-red-100 text-red-700`}`,
                                  children: o.is_healthy
                                    ? `Healthy`
                                    : o.disease_name,
                                }),
                              ],
                            }),
                            (0, j.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, j.jsx)(`div`, {
                                  className: `flex-1 h-2 rounded-full bg-muted overflow-hidden`,
                                  children: (0, j.jsx)(`div`, {
                                    className: `h-full rounded-full bg-primary`,
                                    style: { width: `${o.confidence}%` },
                                  }),
                                }),
                                (0, j.jsxs)(`span`, {
                                  className: `text-xs font-semibold tabular-nums`,
                                  children: [Math.round(o.confidence), `%`],
                                }),
                              ],
                            }),
                            (0, j.jsx)(uT, {
                              label: `Symptoms`,
                              text: o.symptoms,
                            }),
                            (0, j.jsx)(uT, {
                              label: `Likely Cause`,
                              text: o.cause,
                            }),
                            (0, j.jsx)(uT, {
                              label: `Treatment`,
                              text: o.treatment,
                            }),
                            (0, j.jsx)(uT, {
                              label: `Prevention`,
                              text: o.prevention,
                            }),
                          ],
                        })
                      : (0, j.jsxs)(j.Fragment, {
                          children: [
                            (0, j.jsxs)(`div`, {
                              children: [
                                (0, j.jsx)(`h2`, {
                                  className: `font-heading font-bold text-xl`,
                                  children: o.plant_name,
                                }),
                                (0, j.jsx)(`p`, {
                                  className: `text-sm italic text-muted-foreground`,
                                  children: o.scientific_name,
                                }),
                              ],
                            }),
                            (0, j.jsxs)(`div`, {
                              className: `flex flex-wrap gap-2`,
                              children: [
                                (0, j.jsx)(`span`, {
                                  className: `px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize bg-emerald-100 text-emerald-700`,
                                  children: o.plant_type,
                                }),
                                o.family &&
                                  (0, j.jsx)(`span`, {
                                    className: `px-2.5 py-0.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground`,
                                    children: o.family,
                                  }),
                                (0, j.jsxs)(`span`, {
                                  className: `px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize bg-amber-100 text-amber-700`,
                                  children: [o.care_level, ` care`],
                                }),
                              ],
                            }),
                            (0, j.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, j.jsx)(`div`, {
                                  className: `flex-1 h-2 rounded-full bg-muted overflow-hidden`,
                                  children: (0, j.jsx)(`div`, {
                                    className: `h-full rounded-full bg-primary`,
                                    style: { width: `${o.confidence}%` },
                                  }),
                                }),
                                (0, j.jsxs)(`span`, {
                                  className: `text-xs font-semibold tabular-nums`,
                                  children: [
                                    Math.round(o.confidence),
                                    `% match`,
                                  ],
                                }),
                              ],
                            }),
                            (0, j.jsx)(uT, {
                              label: `About`,
                              text: o.description,
                            }),
                            (0, j.jsx)(uT, {
                              label: `Plant Health`,
                              text: o.health_note,
                            }),
                            (0, j.jsx)(uT, {
                              label: `Light`,
                              text: o.light_requirements,
                            }),
                            (0, j.jsx)(uT, {
                              label: `Watering`,
                              text: o.water_requirements,
                            }),
                            (0, j.jsx)(uT, {
                              label: `Soil`,
                              text: o.soil_requirements,
                            }),
                            o.temperature_range &&
                              (0, j.jsx)(uT, {
                                label: `Temperature`,
                                text: o.temperature_range,
                              }),
                            (0, j.jsx)(uT, {
                              label: `Fun Facts`,
                              text: o.fun_facts,
                            }),
                          ],
                        }),
                }),
              ],
            }),
          }),
        (0, j.jsx)(Tw, {}),
      ],
    })
  );
}
function aT({ scans: e, onSelect: t }) {
  return e === null
    ? (0, j.jsx)(cT, {})
    : e.length === 0
      ? (0, j.jsx)(lT, { label: `disease scan`, cta: `/detect` })
      : (0, j.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`,
          children: e.map((e, n) =>
            (0, j.jsx)(
              sT,
              {
                item: e,
                i: n,
                onSelect: t,
                healthy: e.is_healthy,
                title: e.plant_name,
                sub: e.is_healthy ? `No disease detected` : e.disease_name,
              },
              e.id,
            ),
          ),
        });
}
function oT({ plants: e, onSelect: t }) {
  return e === null
    ? (0, j.jsx)(cT, {})
    : e.length === 0
      ? (0, j.jsx)(lT, { label: `plant identification`, cta: `/identify` })
      : (0, j.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`,
          children: e.map((e, n) =>
            (0, j.jsx)(
              sT,
              {
                item: e,
                i: n,
                onSelect: t,
                healthy: e.is_healthy,
                title: e.plant_name,
                sub: e.scientific_name,
                badge: `match ${Math.round(e.confidence)}%`,
              },
              e.id,
            ),
          ),
        });
}
function sT({
  item: e,
  i: t,
  onSelect: n,
  healthy: r,
  title: i,
  sub: a,
  badge: o,
}) {
  return (0, j.jsxs)(Cw.button, {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: t * 0.05 },
    onClick: () => n(e),
    className: `text-left rounded-3xl overflow-hidden border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all`,
    children: [
      (0, j.jsxs)(`div`, {
        className: `relative h-44 overflow-hidden`,
        children: [
          (0, j.jsx)(rT, {
            src: e.image_url,
            alt: i,
            className: `w-full h-full`,
            fittingType: `fill`,
          }),
          (0, j.jsx)(`div`, {
            className: `absolute top-3 right-3`,
            children: r
              ? (0, j.jsxs)(`span`, {
                  className: `px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white flex items-center gap-1`,
                  children: [
                    (0, j.jsx)(un, { className: `w-3 h-3` }),
                    ` Healthy`,
                  ],
                })
              : (0, j.jsxs)(`span`, {
                  className: `px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-500 text-white flex items-center gap-1`,
                  children: [
                    (0, j.jsx)(Pn, { className: `w-3 h-3` }),
                    ` Issue`,
                  ],
                }),
          }),
        ],
      }),
      (0, j.jsxs)(`div`, {
        className: `p-4`,
        children: [
          (0, j.jsx)(`h3`, {
            className: `font-heading font-semibold truncate`,
            children: i || `Unknown plant`,
          }),
          (0, j.jsx)(`p`, {
            className: `text-xs text-muted-foreground mt-0.5 truncate italic`,
            children: a,
          }),
          (0, j.jsxs)(`div`, {
            className: `flex items-center justify-between mt-3 text-xs text-muted-foreground`,
            children: [
              (0, j.jsx)(`span`, {
                children: o || `${Math.round(e.confidence)}% confidence`,
              }),
              (0, j.jsx)(`span`, {
                children: new Date(e.created_date).toLocaleDateString(),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function cT() {
  return (0, j.jsx)(`div`, {
    className: `flex items-center justify-center py-20`,
    children: (0, j.jsx)(`div`, {
      className: `w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin`,
    }),
  });
}
function lT({ label: e, cta: t }) {
  return (0, j.jsxs)(Cw.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    className: `text-center py-20 rounded-3xl border border-dashed border-border`,
    children: [
      (0, j.jsx)(`div`, {
        className: `w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4`,
        children: (0, j.jsx)(_n, { className: `w-8 h-8 text-primary` }),
      }),
      (0, j.jsxs)(`h3`, {
        className: `font-heading font-semibold text-lg`,
        children: [`No `, e, `s yet`],
      }),
      (0, j.jsx)(`p`, {
        className: `text-sm text-muted-foreground mt-1 mb-6`,
        children: `Your saved results will appear here.`,
      }),
      (0, j.jsxs)(Es, {
        to: t,
        className: `inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all`,
        children: [(0, j.jsx)(Cn, { className: `w-4 h-4` }), `Get started`],
      }),
    ],
  });
}
function uT({ label: e, text: t }) {
  return t
    ? (0, j.jsxs)(`div`, {
        children: [
          (0, j.jsx)(`h4`, {
            className: `font-semibold text-sm mb-1`,
            children: e,
          }),
          (0, j.jsx)(`p`, {
            className: `text-sm text-muted-foreground leading-relaxed`,
            children: t,
          }),
        ],
      })
    : null;
}
var dT = () => {
  let {
    isLoadingAuth: e,
    isLoadingPublicSettings: t,
    authError: n,
    navigateToLogin: r,
  } = Em();
  if (t || e)
    return (0, j.jsx)(`div`, {
      className: `fixed inset-0 flex items-center justify-center`,
      children: (0, j.jsx)(`div`, {
        className: `w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin`,
      }),
    });
  if (n) {
    if (n.type === `user_not_registered`) return (0, j.jsx)(Dm, {});
    if (n.type === `auth_required`) return (r(), null);
  }
  return (0, j.jsxs)(ps, {
    children: [
      (0, j.jsx)(ds, { path: `/`, element: (0, j.jsx)(kw, {}) }),
      (0, j.jsx)(ds, { path: `/detect`, element: (0, j.jsx)(Fw, {}) }),
      (0, j.jsx)(ds, { path: `/identify`, element: (0, j.jsx)(Vw, {}) }),
      (0, j.jsx)(ds, { path: `/history`, element: (0, j.jsx)(iT, {}) }),
      (0, j.jsx)(ds, { path: `*`, element: (0, j.jsx)(Cm, {}) }),
    ],
  });
};
function fT() {
  return (0, j.jsx)(Tm, {
    children: (0, j.jsxs)(Ca, {
      client: La,
      children: [
        (0, j.jsxs)(Cs, { children: [(0, j.jsx)(km, {}), (0, j.jsx)(dT, {})] }),
        (0, j.jsx)(hi, {}),
      ],
    }),
  });
}
v.createRoot(document.getElementById(`root`)).render((0, j.jsx)(fT, {}));
