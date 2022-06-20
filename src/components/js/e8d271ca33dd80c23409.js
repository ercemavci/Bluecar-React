(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [4],
    {
        "+IV6": function (e, t) {
            function n(t) {
                return (
                    (e.exports = n = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    n(t)
                );
            }
            e.exports = n;
        },
        "46Dl": function (e, t) {
            function n(e, t) {
                switch (t.type) {
                    case "text":
                        return e + t.content;
                    case "tag":
                        return (
                            (e +=
                                "<" +
                                t.name +
                                (t.attrs
                                    ? (function (e) {
                                          var t = [];
                                          for (var n in e) t.push(n + '="' + e[n] + '"');
                                          return t.length ? " " + t.join(" ") : "";
                                      })(t.attrs)
                                    : "") +
                                (t.voidElement ? "/>" : ">")),
                            t.voidElement ? e : e + t.children.reduce(n, "") + "</" + t.name + ">"
                        );
                }
            }
            e.exports = function (e) {
                return e.reduce(function (e, t) {
                    return e + n("", t);
                }, "");
            };
        },
        "4ukQ": function (e, t) {
            (e.exports = function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        "5WRv": function (e, t, n) {
            var r = n("iNmH"),
                o = n("Qatm"),
                i = n("Zhxd"),
                a = n("kluZ");
            e.exports = function (e) {
                return r(e) || o(e) || i(e) || a();
            };
        },
        "9cvu": function (e, t, n) {
            var r = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g,
                o = n("y/N9");
            e.exports = function (e) {
                var t,
                    n = 0,
                    i = !0,
                    a = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] };
                return (
                    e.replace(r, function (r) {
                        if ("=" === r) return (i = !0), void n++;
                        i ? (0 === n ? ((o[r] || "/" === e.charAt(e.length - 2)) && (a.voidElement = !0), (a.name = r)) : ((a.attrs[t] = r.replace(/^['"]|['"]$/g, "")), (t = void 0))) : (t && (a.attrs[t] = t), (t = r)), n++, (i = !1);
                    }),
                    a
                );
            };
        },
        "9fEB": function (e, t, n) {
            "use strict";
            n("OvAC");
            (t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
            var r,
                o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== typeof e && "function" !== typeof e)) return { default: e };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                        }
                    (n.default = e), t && t.set(e, n);
                    return n;
                })(n("mXGw")),
                i = (r = n("GlZI")) && r.__esModule ? r : { default: r },
                a = n("9rrO"),
                s = n("bxxT"),
                u = n("vI6Y");
            function c() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (c = function () {
                        return e;
                    }),
                    e
                );
            }
            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [o.default.createElement("meta", { charSet: "utf-8" })];
                return e || t.push(o.default.createElement("meta", { name: "viewport", content: "width=device-width" })), t;
            }
            function f(e, t) {
                return "string" === typeof t || "number" === typeof t
                    ? e
                    : t.type === o.default.Fragment
                    ? e.concat(
                          o.default.Children.toArray(t.props.children).reduce(function (e, t) {
                              return "string" === typeof t || "number" === typeof t ? e : e.concat(t);
                          }, [])
                      )
                    : e.concat(t);
            }
            var p = ["name", "httpEquiv", "charSet", "itemProp"];
            function d(e, t) {
                return e
                    .reduce(function (e, t) {
                        var n = o.default.Children.toArray(t.props.children);
                        return e.concat(n);
                    }, [])
                    .reduce(f, [])
                    .reverse()
                    .concat(l(t.inAmpMode))
                    .filter(
                        (function () {
                            var e = new Set(),
                                t = new Set(),
                                n = new Set(),
                                r = {};
                            return function (o) {
                                var i = !0,
                                    a = !1;
                                if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                                    a = !0;
                                    var s = o.key.slice(o.key.indexOf("$") + 1);
                                    e.has(s) ? (i = !1) : e.add(s);
                                }
                                switch (o.type) {
                                    case "title":
                                    case "base":
                                        t.has(o.type) ? (i = !1) : t.add(o.type);
                                        break;
                                    case "meta":
                                        for (var u = 0, c = p.length; u < c; u++) {
                                            var l = p[u];
                                            if (o.props.hasOwnProperty(l))
                                                if ("charSet" === l) n.has(l) ? (i = !1) : n.add(l);
                                                else {
                                                    var f = o.props[l],
                                                        d = r[l] || new Set();
                                                    ("name" === l && a) || !d.has(f) ? (d.add(f), (r[l] = d)) : (i = !1);
                                                }
                                        }
                                }
                                return i;
                            };
                        })()
                    )
                    .reverse()
                    .map(function (e, t) {
                        var n = e.key || t;
                        return o.default.cloneElement(e, { key: n });
                    });
            }
            function g(e) {
                var t = e.children,
                    n = (0, o.useContext)(a.AmpStateContext),
                    r = (0, o.useContext)(s.HeadManagerContext);
                return o.default.createElement(i.default, { reduceComponentsToState: d, headManager: r, inAmpMode: (0, u.isInAmpMode)(n) }, t);
            }
            g.rewind = function () {};
            var h = g;
            t.default = h;
        },
        "9rrO": function (e, t, n) {
            "use strict";
            var r;
            (t.__esModule = !0), (t.AmpStateContext = void 0);
            var o = ((r = n("mXGw")) && r.__esModule ? r : { default: r }).default.createContext({});
            t.AmpStateContext = o;
        },
        CVgh: function (e, t) {
            (e.exports = function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        CuQK: function (e, t) {
            (e.exports = function (e, t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        (o = !0), (i = u);
                    } finally {
                        try {
                            r || null == s.return || s.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        Emrw: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return M;
            }),
                n.d(t, "c", function () {
                    return H;
                }),
                n.d(t, "d", function () {
                    return G;
                }),
                n.d(t, "b", function () {
                    return ze;
                });
            var r = n("JtH5"),
                o = n.n(r),
                i = n("XCNj"),
                a = n.n(i),
                s = n("H6M5"),
                u = n.n(s),
                c = n("mXGw"),
                l = n.n(c),
                f = n("fACT"),
                p = n.n(f),
                d = n("RM/1"),
                g = n.n(d),
                h = n("kckn"),
                v = n.n(h);
            var y,
                m = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0 },
                b = l.a.createContext();
            function S() {
                return m;
            }
            var O = (function () {
                function e() {
                    g()(this, e), (this.usedNamespaces = {});
                }
                return (
                    v()(e, [
                        {
                            key: "addUsedNamespaces",
                            value: function (e) {
                                var t = this;
                                e.forEach(function (e) {
                                    t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
                                });
                            },
                        },
                        {
                            key: "getUsedNamespaces",
                            value: function () {
                                return Object.keys(this.usedNamespaces);
                            },
                        },
                    ]),
                    e
                );
            })();
            function x() {
                return y;
            }
            function k() {
                if (console && console.warn) {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    "string" === typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])), (e = console).warn.apply(e, n);
                }
            }
            var E = {};
            function w() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                ("string" === typeof t[0] && E[t[0]]) || ("string" === typeof t[0] && (E[t[0]] = new Date()), k.apply(void 0, t));
            }
            function j(e, t, n) {
                e.loadNamespaces(t, function () {
                    if (e.isInitialized) n();
                    else {
                        e.on("initialized", function t() {
                            setTimeout(function () {
                                e.off("initialized", t);
                            }, 0),
                                n();
                        });
                    }
                });
            }
            function _(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!t.languages || !t.languages.length) return w("i18n.languages were undefined or empty", t.languages), !0;
                var r = t.languages[0],
                    o = !!t.options && t.options.fallbackLng,
                    i = t.languages[t.languages.length - 1];
                if ("cimode" === r.toLowerCase()) return !0;
                var a = function (e, n) {
                    var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                    return -1 === r || 2 === r;
                };
                return (
                    !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e)) &&
                    (!!t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || !(!a(r, e) || (o && !a(i, e))))
                );
            }
            function C(e) {
                return e.displayName || e.name || ("string" === typeof e && e.length > 0 ? e : "Unknown");
            }
            function R(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? R(Object(n), !0).forEach(function (t) {
                              u()(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : R(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            function P(e, t) {
                if (!e) return !1;
                var n = e.props ? e.props.children : e.children;
                return t ? n.length > 0 : !!n;
            }
            function T(e) {
                return e ? (e && e.children ? e.children : e.props && e.props.children) : [];
            }
            function A(e) {
                return Array.isArray(e) ? e : [e];
            }
            function N(e, t) {
                if (!e) return "";
                var n = "",
                    r = A(e),
                    i = t.transKeepBasicHtmlNodesFor || [];
                return (
                    r.forEach(function (e, r) {
                        if ("string" === typeof e) n += "".concat(e);
                        else if (l.a.isValidElement(e)) {
                            var s = Object.keys(e.props).length,
                                u = i.indexOf(e.type) > -1,
                                c = e.props.children;
                            if (!c && u && 0 === s) n += "<".concat(e.type, "/>");
                            else if (c || (u && 0 === s))
                                if (e.props.i18nIsDynamicList) n += "<".concat(r, "></").concat(r, ">");
                                else if (u && 1 === s && "string" === typeof c) n += "<".concat(e.type, ">").concat(c, "</").concat(e.type, ">");
                                else {
                                    var f = N(c, t);
                                    n += "<".concat(r, ">").concat(f, "</").concat(r, ">");
                                }
                            else n += "<".concat(r, "></").concat(r, ">");
                        } else if ("object" === a()(e)) {
                            var p = e.format,
                                d = o()(e, ["format"]),
                                g = Object.keys(d);
                            if (1 === g.length) {
                                var h = p ? "".concat(g[0], ", ").concat(p) : g[0];
                                n += "{{".concat(h, "}}");
                            } else k("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", e);
                        } else k("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", e);
                    }),
                    n
                );
            }
            function I(e, t, n, r, o) {
                if ("" === t) return [];
                var i = r.transKeepBasicHtmlNodesFor || [],
                    s = t && new RegExp(i.join("|")).test(t);
                if (!e && !s) return [t];
                var u = {};
                !(function e(t) {
                    A(t).forEach(function (t) {
                        "string" !== typeof t && (P(t) ? e(T(t)) : "object" !== a()(t) || l.a.isValidElement(t) || Object.assign(u, t));
                    });
                })(e);
                var c = n.services.interpolator.interpolate(t, L(L({}, u), o), n.language),
                    f = p.a.parse("<0>".concat(c, "</0>"));
                function d(e, t, n) {
                    var r = T(e),
                        o = h(r, t.children, n);
                    return (function (e) {
                        return (
                            "[object Array]" === Object.prototype.toString.call(e) &&
                            e.every(function (e) {
                                return l.a.isValidElement(e);
                            })
                        );
                    })(r) && 0 === o.length
                        ? r
                        : o;
                }
                function g(e, t, n, r, o) {
                    e.dummy && (e.children = t), n.push(l.a.cloneElement(e, L(L({}, e.props), {}, { key: r }), o ? void 0 : t));
                }
                function h(t, n, o) {
                    var u = A(t);
                    return A(n).reduce(function (t, n, c) {
                        var f = n.children && n.children[0] && n.children[0].content;
                        if ("tag" === n.type) {
                            var p = u[parseInt(n.name, 10)];
                            !p && 1 === o.length && o[0][n.name] && (p = o[0][n.name]), p || (p = {});
                            var v =
                                    0 !== Object.keys(n.attrs).length
                                        ? (function (e, t) {
                                              var n = L({}, t);
                                              return (n.props = Object.assign(e.props, t.props)), n;
                                          })({ props: n.attrs }, p)
                                        : p,
                                y = l.a.isValidElement(v),
                                m = y && P(n, !0) && !n.voidElement,
                                b = s && "object" === a()(v) && v.dummy && !y,
                                S = "object" === a()(e) && null !== e && Object.hasOwnProperty.call(e, n.name);
                            if ("string" === typeof v) t.push(v);
                            else if (P(v) || m) {
                                g(v, d(v, n, o), t, c);
                            } else if (b) {
                                var O = h(u, n.children, o);
                                t.push(l.a.cloneElement(v, L(L({}, v.props), {}, { key: c }), O));
                            } else if (Number.isNaN(parseFloat(n.name))) {
                                if (S) g(v, d(v, n, o), t, c, n.voidElement);
                                else if (r.transSupportBasicHtmlNodes && i.indexOf(n.name) > -1)
                                    if (n.voidElement) t.push(l.a.createElement(n.name, { key: "".concat(n.name, "-").concat(c) }));
                                    else {
                                        var x = h(u, n.children, o);
                                        t.push(l.a.createElement(n.name, { key: "".concat(n.name, "-").concat(c) }, x));
                                    }
                                else if (n.voidElement) t.push("<".concat(n.name, " />"));
                                else {
                                    var k = h(u, n.children, o);
                                    t.push("<".concat(n.name, ">").concat(k, "</").concat(n.name, ">"));
                                }
                            } else if ("object" !== a()(v) || y) 1 === n.children.length && f ? t.push(l.a.cloneElement(v, L(L({}, v.props), {}, { key: c }), f)) : t.push(l.a.cloneElement(v, L(L({}, v.props), {}, { key: c })));
                            else {
                                var E = n.children[0] ? f : null;
                                E && t.push(E);
                            }
                        } else "text" === n.type && t.push(n.content);
                        return t;
                    }, []);
                }
                return T(h([{ dummy: !0, children: e }], f, A(e || []))[0]);
            }
            function M(e) {
                var t = e.children,
                    n = e.count,
                    r = e.parent,
                    i = e.i18nKey,
                    a = e.tOptions,
                    s = void 0 === a ? {} : a,
                    u = e.values,
                    f = e.defaults,
                    p = e.components,
                    d = e.ns,
                    g = e.i18n,
                    h = e.t,
                    v = o()(e, ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t"]),
                    y = Object(c.useContext)(b) || {},
                    m = y.i18n,
                    O = y.defaultNS,
                    k = g || m || x();
                if (!k) return w("You will need to pass in an i18next instance by using i18nextReactModule"), t;
                var E =
                        h ||
                        k.t.bind(k) ||
                        function (e) {
                            return e;
                        },
                    j = L(L({}, S()), k.options && k.options.react),
                    _ = d || E.ns || O || (k.options && k.options.defaultNS);
                _ = "string" === typeof _ ? [_] : _ || ["translation"];
                var C = f || N(t, j) || j.transEmptyNodeValue || i,
                    R = j.hashTransKey,
                    P = i || (R ? R(C) : C),
                    T = u ? s.interpolation : { interpolation: L(L({}, s.interpolation), {}, { prefix: "#$?", suffix: "?$#" }) },
                    A = L(L(L(L({}, s), {}, { count: n }, u), T), {}, { defaultValue: C, ns: _ }),
                    M = I(p || t, P ? E(P, A) : C, k, j, A),
                    D = void 0 !== r ? r : j.defaultTransParent;
                return D ? l.a.createElement(D, v, M) : M;
            }
            var D = n("JkJP"),
                U = n.n(D);
            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? F(Object(n), !0).forEach(function (t) {
                              u()(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : F(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            function H(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.i18n,
                    r = Object(c.useContext)(b) || {},
                    o = r.i18n,
                    i = r.defaultNS,
                    a = n || o || x();
                if ((a && !a.reportNamespaces && (a.reportNamespaces = new O()), !a)) {
                    w("You will need to pass in an i18next instance by using initReactI18next");
                    var s = function (e) {
                            return Array.isArray(e) ? e[e.length - 1] : e;
                        },
                        u = [s, {}, !1];
                    return (u.t = s), (u.i18n = {}), (u.ready = !1), u;
                }
                a.options.react && void 0 !== a.options.react.wait && w("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                var l = V(V(V({}, S()), a.options.react), t),
                    f = l.useSuspense,
                    p = e || i || (a.options && a.options.defaultNS);
                (p = "string" === typeof p ? [p] : p || ["translation"]), a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(p);
                var d =
                    (a.isInitialized || a.initializedStoreOnce) &&
                    p.every(function (e) {
                        return _(e, a, l);
                    });
                function g() {
                    return a.getFixedT(null, "fallback" === l.nsMode ? p : p[0]);
                }
                var h = Object(c.useState)(g),
                    v = U()(h, 2),
                    y = v[0],
                    m = v[1],
                    k = Object(c.useRef)(!0);
                Object(c.useEffect)(
                    function () {
                        var e = l.bindI18n,
                            t = l.bindI18nStore;
                        function n() {
                            k.current && m(g);
                        }
                        return (
                            (k.current = !0),
                            d ||
                                f ||
                                j(a, p, function () {
                                    k.current && m(g);
                                }),
                            e && a && a.on(e, n),
                            t && a && a.store.on(t, n),
                            function () {
                                (k.current = !1),
                                    e &&
                                        a &&
                                        e.split(" ").forEach(function (e) {
                                            return a.off(e, n);
                                        }),
                                    t &&
                                        a &&
                                        t.split(" ").forEach(function (e) {
                                            return a.store.off(e, n);
                                        });
                            }
                        );
                    },
                    [a, p.join()]
                );
                var E = Object(c.useRef)(!0);
                Object(c.useEffect)(
                    function () {
                        k.current && !E.current && m(g), (E.current = !1);
                    },
                    [a]
                );
                var C = [y, a, d];
                if (((C.t = y), (C.i18n = a), (C.ready = d), d)) return C;
                if (!d && !f) return C;
                throw new Promise(function (e) {
                    j(a, p, function () {
                        e();
                    });
                });
            }
            function K(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? K(Object(n), !0).forEach(function (t) {
                              u()(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : K(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            function G(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return function (n) {
                    function r(r) {
                        var i = r.forwardedRef,
                            a = o()(r, ["forwardedRef"]),
                            s = H(e, a),
                            u = U()(s, 3),
                            c = u[0],
                            f = u[1],
                            p = u[2],
                            d = B(B({}, a), {}, { t: c, i18n: f, tReady: p });
                        return t.withRef && i ? (d.ref = i) : !t.withRef && i && (d.forwardedRef = i), l.a.createElement(n, d);
                    }
                    (r.displayName = "withI18nextTranslation(".concat(C(n), ")")), (r.WrappedComponent = n);
                    return t.withRef
                        ? l.a.forwardRef(function (e, t) {
                              return l.a.createElement(r, Object.assign({}, e, { forwardedRef: t }));
                          })
                        : r;
                };
            }
            var J = n("T1pQ"),
                W = n.n(J),
                Y = n("GeWT"),
                z = n.n(Y);
            function q(e) {
                var t = e.i18n,
                    n = e.defaultNS,
                    r = e.children,
                    o = Object(c.useMemo)(
                        function () {
                            return { i18n: t, defaultNS: n };
                        },
                        [t, n]
                    );
                return Object(c.createElement)(b.Provider, { value: o }, r);
            }
            var X = {
                defaultNS: "common",
                errorStackTraceLimit: 0,
                i18n: { defaultLocale: "en", locales: ["en"] },
                get initImmediate() {
                    return "undefined" !== typeof window;
                },
                interpolation: {
                    escapeValue: !1,
                    format: function (e, t) {
                        return "uppercase" === t ? e.toUpperCase() : e;
                    },
                    formatSeparator: ",",
                },
                load: "currentOnly",
                localeExtension: "json",
                localePath: "./public/locales",
                localeStructure: "{{lng}}/{{ns}}",
                react: { useSuspense: !0 },
                serializeConfig: !0,
                strictMode: !0,
                use: [],
            };
            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? $(Object(n), !0).forEach(function (t) {
                              u()(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : $(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var Z = ["backend", "detection"],
                ee = function (e) {
                    if ("string" !== typeof (null === e || void 0 === e ? void 0 : e.lng)) throw new Error("config.lng was not passed into createConfig");
                    var t = e.i18n,
                        n = o()(e, ["i18n"]),
                        r = X.i18n,
                        i = Q(Q(Q(Q({}, o()(X, ["i18n"])), n), r), t),
                        a = i.defaultNS,
                        s = i.lng,
                        u = (i.locales, i.localeExtension),
                        c = i.localePath,
                        l = i.localeStructure;
                    if ("cimode" === s) return i;
                    "undefined" === typeof i.fallbackLng && (i.fallbackLng = i.defaultLocale);
                    var f = c;
                    return (
                        c.match(/^\.?\/public\//) && (f = c.replace(/^\.?\/public/, "")),
                        (i.backend = { addPath: "".concat(f, "/").concat(l, ".missing.").concat(u), loadPath: "".concat(f, "/").concat(l, ".").concat(u) }),
                        (i.ns = [a]),
                        Z.forEach(function (t) {
                            e[t] && (i[t] = Q(Q({}, i[t]), e[t]));
                        }),
                        i
                    );
                };
            function te(e) {
                return (te =
                    "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function ne(e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            }
            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? Object(arguments[t]) : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            ne(e, t, n[t]);
                        });
                }
                return e;
            }
            function oe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function ie(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function ae(e, t, n) {
                return t && ie(e.prototype, t), n && ie(e, n), e;
            }
            function se(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function ue(e, t) {
                return !t || ("object" !== a()(t) && "function" !== typeof t) ? se(e) : t;
            }
            function ce(e) {
                return (ce = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function le(e, t) {
                return (le =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function fe(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && le(e, t);
            }
            var pe = {
                    type: "logger",
                    log: function (e) {
                        this.output("log", e);
                    },
                    warn: function (e) {
                        this.output("warn", e);
                    },
                    error: function (e) {
                        this.output("error", e);
                    },
                    output: function (e, t) {
                        console && console[e] && console[e].apply(console, t);
                    },
                },
                de = new ((function () {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        oe(this, e), this.init(t, n);
                    }
                    return (
                        ae(e, [
                            {
                                key: "init",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    (this.prefix = t.prefix || "i18next:"), (this.logger = e || pe), (this.options = t), (this.debug = t.debug);
                                },
                            },
                            {
                                key: "setDebug",
                                value: function (e) {
                                    this.debug = e;
                                },
                            },
                            {
                                key: "log",
                                value: function () {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return this.forward(t, "log", "", !0);
                                },
                            },
                            {
                                key: "warn",
                                value: function () {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return this.forward(t, "warn", "", !0);
                                },
                            },
                            {
                                key: "error",
                                value: function () {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return this.forward(t, "error", "");
                                },
                            },
                            {
                                key: "deprecate",
                                value: function () {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
                                },
                            },
                            {
                                key: "forward",
                                value: function (e, t, n, r) {
                                    return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e));
                                },
                            },
                            {
                                key: "create",
                                value: function (t) {
                                    return new e(this.logger, re({}, { prefix: "".concat(this.prefix, ":").concat(t, ":") }, this.options));
                                },
                            },
                        ]),
                        e
                    );
                })())(),
                ge = (function () {
                    function e() {
                        oe(this, e), (this.observers = {});
                    }
                    return (
                        ae(e, [
                            {
                                key: "on",
                                value: function (e, t) {
                                    var n = this;
                                    return (
                                        e.split(" ").forEach(function (e) {
                                            (n.observers[e] = n.observers[e] || []), n.observers[e].push(t);
                                        }),
                                        this
                                    );
                                },
                            },
                            {
                                key: "off",
                                value: function (e, t) {
                                    this.observers[e] &&
                                        (t
                                            ? (this.observers[e] = this.observers[e].filter(function (e) {
                                                  return e !== t;
                                              }))
                                            : delete this.observers[e]);
                                },
                            },
                            {
                                key: "emit",
                                value: function (e) {
                                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                                    if (this.observers[e]) {
                                        var o = [].concat(this.observers[e]);
                                        o.forEach(function (e) {
                                            e.apply(void 0, n);
                                        });
                                    }
                                    if (this.observers["*"]) {
                                        var i = [].concat(this.observers["*"]);
                                        i.forEach(function (t) {
                                            t.apply(t, [e].concat(n));
                                        });
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })();
            function he() {
                var e,
                    t,
                    n = new Promise(function (n, r) {
                        (e = n), (t = r);
                    });
                return (n.resolve = e), (n.reject = t), n;
            }
            function ve(e) {
                return null == e ? "" : "" + e;
            }
            function ye(e, t, n) {
                e.forEach(function (e) {
                    t[e] && (n[e] = t[e]);
                });
            }
            function me(e, t, n) {
                function r(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
                }
                function o() {
                    return !e || "string" === typeof e;
                }
                for (var i = "string" !== typeof t ? [].concat(t) : t.split("."); i.length > 1; ) {
                    if (o()) return {};
                    var a = r(i.shift());
                    !e[a] && n && (e[a] = new n()), (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
                }
                return o() ? {} : { obj: e, k: r(i.shift()) };
            }
            function be(e, t, n) {
                var r = me(e, t, Object);
                r.obj[r.k] = n;
            }
            function Se(e, t) {
                var n = me(e, t),
                    r = n.obj,
                    o = n.k;
                if (r) return r[o];
            }
            function Oe(e, t, n) {
                var r = Se(e, n);
                return void 0 !== r ? r : Se(t, n);
            }
            function xe(e, t, n) {
                for (var r in t)
                    "__proto__" !== r && "constructor" !== r && (r in e ? ("string" === typeof e[r] || e[r] instanceof String || "string" === typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : xe(e[r], t[r], n)) : (e[r] = t[r]));
                return e;
            }
            function ke(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            }
            var Ee = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
            function we(e) {
                return "string" === typeof e
                    ? e.replace(/[&<>"'\/]/g, function (e) {
                          return Ee[e];
                      })
                    : e;
            }
            var je = "undefined" !== typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
            function _e(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                if (e) {
                    if (e[t]) return e[t];
                    for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
                        if ("string" === typeof o[r[i]] && i + 1 < r.length) return;
                        if (void 0 === o[r[i]]) {
                            for (var a = 2, s = r.slice(i, i + a).join(n), u = o[s]; void 0 === u && r.length > i + a; ) a++, (u = o[(s = r.slice(i, i + a).join(n))]);
                            if (void 0 === u) return;
                            if ("string" === typeof u) return u;
                            if (s && "string" === typeof u[s]) return u[s];
                            var c = r.slice(i + a).join(n);
                            return c ? _e(u, c, n) : void 0;
                        }
                        o = o[r[i]];
                    }
                    return o;
                }
            }
            var Ce = (function (e) {
                    function t(e) {
                        var n,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
                        return (
                            oe(this, t),
                            (n = ue(this, ce(t).call(this))),
                            je && ge.call(se(n)),
                            (n.data = e || {}),
                            (n.options = r),
                            void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                            void 0 === n.options.ignoreJSONStructure && (n.options.ignoreJSONStructure = !0),
                            n
                        );
                    }
                    return (
                        fe(t, e),
                        ae(t, [
                            {
                                key: "addNamespaces",
                                value: function (e) {
                                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                                },
                            },
                            {
                                key: "removeNamespaces",
                                value: function (e) {
                                    var t = this.options.ns.indexOf(e);
                                    t > -1 && this.options.ns.splice(t, 1);
                                },
                            },
                            {
                                key: "getResource",
                                value: function (e, t, n) {
                                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                                        i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure,
                                        a = [e, t];
                                    n && "string" !== typeof n && (a = a.concat(n)), n && "string" === typeof n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (a = e.split("."));
                                    var s = Se(this.data, a);
                                    return s || !i || "string" !== typeof n ? s : _e(this.data && this.data[e] && this.data[e][t], n, o);
                                },
                            },
                            {
                                key: "addResource",
                                value: function (e, t, n, r) {
                                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 },
                                        i = this.options.keySeparator;
                                    void 0 === i && (i = ".");
                                    var a = [e, t];
                                    n && (a = a.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && ((r = t), (t = (a = e.split("."))[1])), this.addNamespaces(t), be(this.data, a, r), o.silent || this.emit("added", e, t, n, r);
                                },
                            },
                            {
                                key: "addResources",
                                value: function (e, t, n) {
                                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: !1 };
                                    for (var o in n) ("string" !== typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o])) || this.addResource(e, t, o, n[o], { silent: !0 });
                                    r.silent || this.emit("added", e, t, n);
                                },
                            },
                            {
                                key: "addResourceBundle",
                                value: function (e, t, n, r, o) {
                                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: !1 },
                                        a = [e, t];
                                    e.indexOf(".") > -1 && ((r = n), (n = t), (t = (a = e.split("."))[1])), this.addNamespaces(t);
                                    var s = Se(this.data, a) || {};
                                    r ? xe(s, n, o) : (s = re({}, s, n)), be(this.data, a, s), i.silent || this.emit("added", e, t, n);
                                },
                            },
                            {
                                key: "removeResourceBundle",
                                value: function (e, t) {
                                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
                                },
                            },
                            {
                                key: "hasResourceBundle",
                                value: function (e, t) {
                                    return void 0 !== this.getResource(e, t);
                                },
                            },
                            {
                                key: "getResourceBundle",
                                value: function (e, t) {
                                    return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? re({}, {}, this.getResource(e, t)) : this.getResource(e, t);
                                },
                            },
                            {
                                key: "getDataByLanguage",
                                value: function (e) {
                                    return this.data[e];
                                },
                            },
                            {
                                key: "toJSON",
                                value: function () {
                                    return this.data;
                                },
                            },
                        ]),
                        t
                    );
                })(ge),
                Re = {
                    processors: {},
                    addPostProcessor: function (e) {
                        this.processors[e.name] = e;
                    },
                    handle: function (e, t, n, r, o) {
                        var i = this;
                        return (
                            e.forEach(function (e) {
                                i.processors[e] && (t = i.processors[e].process(t, n, r, o));
                            }),
                            t
                        );
                    },
                },
                Le = {},
                Pe = (function (e) {
                    function t(e) {
                        var n,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (
                            oe(this, t),
                            (n = ue(this, ce(t).call(this))),
                            je && ge.call(se(n)),
                            ye(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, se(n)),
                            (n.options = r),
                            void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                            (n.logger = de.create("translator")),
                            n
                        );
                    }
                    return (
                        fe(t, e),
                        ae(
                            t,
                            [
                                {
                                    key: "changeLanguage",
                                    value: function (e) {
                                        e && (this.language = e);
                                    },
                                },
                                {
                                    key: "exists",
                                    value: function (e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} },
                                            n = this.resolve(e, t);
                                        return n && void 0 !== n.res;
                                    },
                                },
                                {
                                    key: "extractFromKey",
                                    value: function (e, t) {
                                        var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                                        void 0 === n && (n = ":");
                                        var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                            o = t.ns || this.options.defaultNS;
                                        if (n && e.indexOf(n) > -1) {
                                            var i = e.match(this.interpolator.nestingRegexp);
                                            if (i && i.length > 0) return { key: e, namespaces: o };
                                            var a = e.split(n);
                                            (n !== r || (n === r && this.options.ns.indexOf(a[0]) > -1)) && (o = a.shift()), (e = a.join(r));
                                        }
                                        return "string" === typeof o && (o = [o]), { key: e, namespaces: o };
                                    },
                                },
                                {
                                    key: "translate",
                                    value: function (e, n, r) {
                                        var o = this;
                                        if (("object" !== te(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), void 0 === e || null === e)) return "";
                                        Array.isArray(e) || (e = [String(e)]);
                                        var i = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                            a = this.extractFromKey(e[e.length - 1], n),
                                            s = a.key,
                                            u = a.namespaces,
                                            c = u[u.length - 1],
                                            l = n.lng || this.language,
                                            f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                        if (l && "cimode" === l.toLowerCase()) {
                                            if (f) {
                                                var p = n.nsSeparator || this.options.nsSeparator;
                                                return c + p + s;
                                            }
                                            return s;
                                        }
                                        var d = this.resolve(e, n),
                                            g = d && d.res,
                                            h = (d && d.usedKey) || s,
                                            v = (d && d.exactUsedKey) || s,
                                            y = Object.prototype.toString.apply(g),
                                            m = ["[object Number]", "[object Function]", "[object RegExp]"],
                                            b = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                            S = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                            O = "string" !== typeof g && "boolean" !== typeof g && "number" !== typeof g;
                                        if (S && g && O && m.indexOf(y) < 0 && ("string" !== typeof b || "[object Array]" !== y)) {
                                            if (!n.returnObjects && !this.options.returnObjects)
                                                return (
                                                    this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                                                    this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, g, n) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.")
                                                );
                                            if (i) {
                                                var x = "[object Array]" === y,
                                                    k = x ? [] : {},
                                                    E = x ? v : h;
                                                for (var w in g)
                                                    if (Object.prototype.hasOwnProperty.call(g, w)) {
                                                        var j = "".concat(E).concat(i).concat(w);
                                                        (k[w] = this.translate(j, re({}, n, { joinArrays: !1, ns: u }))), k[w] === j && (k[w] = g[w]);
                                                    }
                                                g = k;
                                            }
                                        } else if (S && "string" === typeof b && "[object Array]" === y) (g = g.join(b)) && (g = this.extendTranslation(g, e, n, r));
                                        else {
                                            var _ = !1,
                                                C = !1,
                                                R = void 0 !== n.count && "string" !== typeof n.count,
                                                L = t.hasDefaultValue(n),
                                                P = R ? this.pluralResolver.getSuffix(l, n.count) : "",
                                                T = n["defaultValue".concat(P)] || n.defaultValue;
                                            !this.isValidLookup(g) && L && ((_ = !0), (g = T)), this.isValidLookup(g) || ((C = !0), (g = s));
                                            var A = L && T !== g && this.options.updateMissing;
                                            if (C || _ || A) {
                                                if ((this.logger.log(A ? "updateKey" : "missingKey", l, c, s, A ? T : g), i)) {
                                                    var N = this.resolve(s, re({}, n, { keySeparator: !1 }));
                                                    N &&
                                                        N.res &&
                                                        this.logger.warn(
                                                            "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                                                        );
                                                }
                                                var I = [],
                                                    M = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                                if ("fallback" === this.options.saveMissingTo && M && M[0]) for (var D = 0; D < M.length; D++) I.push(M[D]);
                                                else "all" === this.options.saveMissingTo ? (I = this.languageUtils.toResolveHierarchy(n.lng || this.language)) : I.push(n.lng || this.language);
                                                var U = function (e, t, r) {
                                                    o.options.missingKeyHandler
                                                        ? o.options.missingKeyHandler(e, c, t, A ? r : g, A, n)
                                                        : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, c, t, A ? r : g, A, n),
                                                        o.emit("missingKey", e, c, t, g);
                                                };
                                                this.options.saveMissing &&
                                                    (this.options.saveMissingPlurals && R
                                                        ? I.forEach(function (e) {
                                                              o.pluralResolver.getSuffixes(e).forEach(function (t) {
                                                                  U([e], s + t, n["defaultValue".concat(t)] || T);
                                                              });
                                                          })
                                                        : U(I, s, T));
                                            }
                                            (g = this.extendTranslation(g, e, n, d, r)),
                                                C && g === s && this.options.appendNamespaceToMissingKey && (g = "".concat(c, ":").concat(s)),
                                                C && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(g));
                                        }
                                        return g;
                                    },
                                },
                                {
                                    key: "extendTranslation",
                                    value: function (e, t, n, r, o) {
                                        var i = this;
                                        if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, { resolved: r });
                                        else if (!n.skipInterpolation) {
                                            n.interpolation && this.interpolator.init(re({}, n, { interpolation: re({}, this.options.interpolation, n.interpolation) }));
                                            var a,
                                                s = (n.interpolation && n.interpolation.skipOnVariables) || this.options.interpolation.skipOnVariables;
                                            if (s) {
                                                var u = e.match(this.interpolator.nestingRegexp);
                                                a = u && u.length;
                                            }
                                            var c = n.replace && "string" !== typeof n.replace ? n.replace : n;
                                            if ((this.options.interpolation.defaultVariables && (c = re({}, this.options.interpolation.defaultVariables, c)), (e = this.interpolator.interpolate(e, c, n.lng || this.language, n)), s)) {
                                                var l = e.match(this.interpolator.nestingRegexp);
                                                a < (l && l.length) && (n.nest = !1);
                                            }
                                            !1 !== n.nest &&
                                                (e = this.interpolator.nest(
                                                    e,
                                                    function () {
                                                        for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                                                        return o && o[0] === r[0] && !n.context
                                                            ? (i.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])), null)
                                                            : i.translate.apply(i, r.concat([t]));
                                                    },
                                                    n
                                                )),
                                                n.interpolation && this.interpolator.reset();
                                        }
                                        var f = n.postProcess || this.options.postProcess,
                                            p = "string" === typeof f ? [f] : f;
                                        return (
                                            void 0 !== e && null !== e && p && p.length && !1 !== n.applyPostProcessor && (e = Re.handle(p, e, t, this.options && this.options.postProcessPassResolved ? re({ i18nResolved: r }, n) : n, this)),
                                            e
                                        );
                                    },
                                },
                                {
                                    key: "resolve",
                                    value: function (e) {
                                        var t,
                                            n,
                                            r,
                                            o,
                                            i,
                                            a = this,
                                            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return (
                                            "string" === typeof e && (e = [e]),
                                            e.forEach(function (e) {
                                                if (!a.isValidLookup(t)) {
                                                    var u = a.extractFromKey(e, s),
                                                        c = u.key;
                                                    n = c;
                                                    var l = u.namespaces;
                                                    a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                                                    var f = void 0 !== s.count && "string" !== typeof s.count,
                                                        p = void 0 !== s.context && "string" === typeof s.context && "" !== s.context,
                                                        d = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                                    l.forEach(function (e) {
                                                        a.isValidLookup(t) ||
                                                            ((i = e),
                                                            !Le["".concat(d[0], "-").concat(e)] &&
                                                                a.utils &&
                                                                a.utils.hasLoadedNamespace &&
                                                                !a.utils.hasLoadedNamespace(i) &&
                                                                ((Le["".concat(d[0], "-").concat(e)] = !0),
                                                                a.logger.warn(
                                                                    'key "'.concat(n, '" for languages "').concat(d.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'),
                                                                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                                                )),
                                                            d.forEach(function (n) {
                                                                if (!a.isValidLookup(t)) {
                                                                    o = n;
                                                                    var i,
                                                                        u,
                                                                        l = c,
                                                                        d = [l];
                                                                    if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(d, c, n, e, s);
                                                                    else
                                                                        f && (i = a.pluralResolver.getSuffix(n, s.count)),
                                                                            f && p && d.push(l + i),
                                                                            p && d.push((l += "".concat(a.options.contextSeparator).concat(s.context))),
                                                                            f && d.push((l += i));
                                                                    for (; (u = d.pop()); ) a.isValidLookup(t) || ((r = u), (t = a.getResource(n, e, u, s)));
                                                                }
                                                            }));
                                                    });
                                                }
                                            }),
                                            { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i }
                                        );
                                    },
                                },
                                {
                                    key: "isValidLookup",
                                    value: function (e) {
                                        return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e);
                                    },
                                },
                                {
                                    key: "getResource",
                                    value: function (e, t, n) {
                                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r);
                                    },
                                },
                            ],
                            [
                                {
                                    key: "hasDefaultValue",
                                    value: function (e) {
                                        var t = "defaultValue";
                                        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
                                        return !1;
                                    },
                                },
                            ]
                        ),
                        t
                    );
                })(ge);
            function Te(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }
            var Ae = (function () {
                    function e(t) {
                        oe(this, e), (this.options = t), (this.whitelist = this.options.supportedLngs || !1), (this.supportedLngs = this.options.supportedLngs || !1), (this.logger = de.create("languageUtils"));
                    }
                    return (
                        ae(e, [
                            {
                                key: "getScriptPartFromCode",
                                value: function (e) {
                                    if (!e || e.indexOf("-") < 0) return null;
                                    var t = e.split("-");
                                    return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")));
                                },
                            },
                            {
                                key: "getLanguagePartFromCode",
                                value: function (e) {
                                    if (!e || e.indexOf("-") < 0) return e;
                                    var t = e.split("-");
                                    return this.formatLanguageCode(t[0]);
                                },
                            },
                            {
                                key: "formatLanguageCode",
                                value: function (e) {
                                    if ("string" === typeof e && e.indexOf("-") > -1) {
                                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                            n = e.split("-");
                                        return (
                                            this.options.lowerCaseLng
                                                ? (n = n.map(function (e) {
                                                      return e.toLowerCase();
                                                  }))
                                                : 2 === n.length
                                                ? ((n[0] = n[0].toLowerCase()), (n[1] = n[1].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Te(n[1].toLowerCase())))
                                                : 3 === n.length &&
                                                  ((n[0] = n[0].toLowerCase()),
                                                  2 === n[1].length && (n[1] = n[1].toUpperCase()),
                                                  "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                                                  t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Te(n[1].toLowerCase())),
                                                  t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Te(n[2].toLowerCase()))),
                                            n.join("-")
                                        );
                                    }
                                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
                                },
                            },
                            {
                                key: "isWhitelisted",
                                value: function (e) {
                                    return (
                                        this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),
                                        this.isSupportedCode(e)
                                    );
                                },
                            },
                            {
                                key: "isSupportedCode",
                                value: function (e) {
                                    return (
                                        ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                                        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                                    );
                                },
                            },
                            {
                                key: "getBestMatchFromCodes",
                                value: function (e) {
                                    var t,
                                        n = this;
                                    return e
                                        ? (e.forEach(function (e) {
                                              if (!t) {
                                                  var r = n.formatLanguageCode(e);
                                                  (n.options.supportedLngs && !n.isSupportedCode(r)) || (t = r);
                                              }
                                          }),
                                          !t &&
                                              this.options.supportedLngs &&
                                              e.forEach(function (e) {
                                                  if (!t) {
                                                      var r = n.getLanguagePartFromCode(e);
                                                      if (n.isSupportedCode(r)) return (t = r);
                                                      t = n.options.supportedLngs.find(function (e) {
                                                          if (0 === e.indexOf(r)) return e;
                                                      });
                                                  }
                                              }),
                                          t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                                          t)
                                        : null;
                                },
                            },
                            {
                                key: "getFallbackCodes",
                                value: function (e, t) {
                                    if (!e) return [];
                                    if (("function" === typeof e && (e = e(t)), "string" === typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e))) return e;
                                    if (!t) return e.default || [];
                                    var n = e[t];
                                    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
                                },
                            },
                            {
                                key: "toResolveHierarchy",
                                value: function (e, t) {
                                    var n = this,
                                        r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                        o = [],
                                        i = function (e) {
                                            e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)));
                                        };
                                    return (
                                        "string" === typeof e && e.indexOf("-") > -1
                                            ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)),
                                              "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)),
                                              "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e)))
                                            : "string" === typeof e && i(this.formatLanguageCode(e)),
                                        r.forEach(function (e) {
                                            o.indexOf(e) < 0 && i(n.formatLanguageCode(e));
                                        }),
                                        o
                                    );
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Ne = [
                    { lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 },
                    {
                        lngs: [
                            "af",
                            "an",
                            "ast",
                            "az",
                            "bg",
                            "bn",
                            "ca",
                            "da",
                            "de",
                            "dev",
                            "el",
                            "en",
                            "eo",
                            "es",
                            "et",
                            "eu",
                            "fi",
                            "fo",
                            "fur",
                            "fy",
                            "gl",
                            "gu",
                            "ha",
                            "hi",
                            "hu",
                            "hy",
                            "ia",
                            "it",
                            "kn",
                            "ku",
                            "lb",
                            "mai",
                            "ml",
                            "mn",
                            "mr",
                            "nah",
                            "nap",
                            "nb",
                            "ne",
                            "nl",
                            "nn",
                            "no",
                            "nso",
                            "pa",
                            "pap",
                            "pms",
                            "ps",
                            "pt-PT",
                            "rm",
                            "sco",
                            "se",
                            "si",
                            "so",
                            "son",
                            "sq",
                            "sv",
                            "sw",
                            "ta",
                            "te",
                            "tk",
                            "ur",
                            "yo",
                        ],
                        nr: [1, 2],
                        fc: 2,
                    },
                    { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 },
                    { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 },
                    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
                    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
                    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
                    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
                    { lngs: ["fr"], nr: [1, 2], fc: 9 },
                    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
                    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
                    { lngs: ["is"], nr: [1, 2], fc: 12 },
                    { lngs: ["jv"], nr: [0, 1], fc: 13 },
                    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
                    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
                    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
                    { lngs: ["mk"], nr: [1, 2], fc: 17 },
                    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
                    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
                    { lngs: ["or"], nr: [2, 1], fc: 2 },
                    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
                    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
                    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
                ],
                Ie = {
                    1: function (e) {
                        return Number(e > 1);
                    },
                    2: function (e) {
                        return Number(1 != e);
                    },
                    3: function (e) {
                        return 0;
                    },
                    4: function (e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
                    },
                    5: function (e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
                    },
                    6: function (e) {
                        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
                    },
                    7: function (e) {
                        return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
                    },
                    8: function (e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
                    },
                    9: function (e) {
                        return Number(e >= 2);
                    },
                    10: function (e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
                    },
                    11: function (e) {
                        return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3);
                    },
                    12: function (e) {
                        return Number(e % 10 != 1 || e % 100 == 11);
                    },
                    13: function (e) {
                        return Number(0 !== e);
                    },
                    14: function (e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
                    },
                    15: function (e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
                    },
                    16: function (e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
                    },
                    17: function (e) {
                        return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
                    },
                    18: function (e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2);
                    },
                    19: function (e) {
                        return Number(1 == e ? 0 : 0 == e || (e % 100 > 1 && e % 100 < 11) ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
                    },
                    20: function (e) {
                        return Number(1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2);
                    },
                    21: function (e) {
                        return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
                    },
                    22: function (e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
                    },
                };
            function Me() {
                var e = {};
                return (
                    Ne.forEach(function (t) {
                        t.lngs.forEach(function (n) {
                            e[n] = { numbers: t.nr, plurals: Ie[t.fc] };
                        });
                    }),
                    e
                );
            }
            var De = (function () {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        oe(this, e), (this.languageUtils = t), (this.options = n), (this.logger = de.create("pluralResolver")), (this.rules = Me());
                    }
                    return (
                        ae(e, [
                            {
                                key: "addRule",
                                value: function (e, t) {
                                    this.rules[e] = t;
                                },
                            },
                            {
                                key: "getRule",
                                value: function (e) {
                                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
                                },
                            },
                            {
                                key: "needsPlural",
                                value: function (e) {
                                    var t = this.getRule(e);
                                    return t && t.numbers.length > 1;
                                },
                            },
                            {
                                key: "getPluralFormsOfKey",
                                value: function (e, t) {
                                    return this.getSuffixes(e).map(function (e) {
                                        return t + e;
                                    });
                                },
                            },
                            {
                                key: "getSuffixes",
                                value: function (e) {
                                    var t = this,
                                        n = this.getRule(e);
                                    return n
                                        ? n.numbers.map(function (n) {
                                              return t.getSuffix(e, n);
                                          })
                                        : [];
                                },
                            },
                            {
                                key: "getSuffix",
                                value: function (e, t) {
                                    var n = this,
                                        r = this.getRule(e);
                                    if (r) {
                                        var o = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)),
                                            i = r.numbers[o];
                                        this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? (i = "plural") : 1 === i && (i = ""));
                                        var a = function () {
                                            return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString();
                                        };
                                        return "v1" === this.options.compatibilityJSON
                                            ? 1 === i
                                                ? ""
                                                : "number" === typeof i
                                                ? "_plural_".concat(i.toString())
                                                : a()
                                            : "v2" === this.options.compatibilityJSON || (this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0])
                                            ? a()
                                            : this.options.prepend && o.toString()
                                            ? this.options.prepend + o.toString()
                                            : o.toString();
                                    }
                                    return this.logger.warn("no plural rule found for: ".concat(e)), "";
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Ue = (function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        oe(this, e),
                            (this.logger = de.create("interpolator")),
                            (this.options = t),
                            (this.format =
                                (t.interpolation && t.interpolation.format) ||
                                function (e) {
                                    return e;
                                }),
                            this.init(t);
                    }
                    return (
                        ae(e, [
                            {
                                key: "init",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    e.interpolation || (e.interpolation = { escapeValue: !0 });
                                    var t = e.interpolation;
                                    (this.escape = void 0 !== t.escape ? t.escape : we),
                                        (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
                                        (this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                                        (this.prefix = t.prefix ? ke(t.prefix) : t.prefixEscaped || "{{"),
                                        (this.suffix = t.suffix ? ke(t.suffix) : t.suffixEscaped || "}}"),
                                        (this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","),
                                        (this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-"),
                                        (this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || ""),
                                        (this.nestingPrefix = t.nestingPrefix ? ke(t.nestingPrefix) : t.nestingPrefixEscaped || ke("$t(")),
                                        (this.nestingSuffix = t.nestingSuffix ? ke(t.nestingSuffix) : t.nestingSuffixEscaped || ke(")")),
                                        (this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ","),
                                        (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                                        (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
                                        this.resetRegExp();
                                },
                            },
                            {
                                key: "reset",
                                value: function () {
                                    this.options && this.init(this.options);
                                },
                            },
                            {
                                key: "resetRegExp",
                                value: function () {
                                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                                    this.regexp = new RegExp(e, "g");
                                    var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                                    this.regexpUnescape = new RegExp(t, "g");
                                    var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                                    this.nestingRegexp = new RegExp(n, "g");
                                },
                            },
                            {
                                key: "interpolate",
                                value: function (e, t, n, r) {
                                    var o,
                                        i,
                                        a,
                                        s = this,
                                        u = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
                                    function c(e) {
                                        return e.replace(/\$/g, "$$$$");
                                    }
                                    var l = function (e) {
                                        if (e.indexOf(s.formatSeparator) < 0) {
                                            var o = Oe(t, u, e);
                                            return s.alwaysFormat ? s.format(o, void 0, n, re({}, r, t, { interpolationkey: e })) : o;
                                        }
                                        var i = e.split(s.formatSeparator),
                                            a = i.shift().trim(),
                                            c = i.join(s.formatSeparator).trim();
                                        return s.format(Oe(t, u, a), c, n, re({}, r, t, { interpolationkey: a }));
                                    };
                                    this.resetRegExp();
                                    var f = (r && r.missingInterpolationHandler) || this.options.missingInterpolationHandler,
                                        p = (r && r.interpolation && r.interpolation.skipOnVariables) || this.options.interpolation.skipOnVariables;
                                    return (
                                        [
                                            {
                                                regex: this.regexpUnescape,
                                                safeValue: function (e) {
                                                    return c(e);
                                                },
                                            },
                                            {
                                                regex: this.regexp,
                                                safeValue: function (e) {
                                                    return s.escapeValue ? c(s.escape(e)) : c(e);
                                                },
                                            },
                                        ].forEach(function (t) {
                                            for (a = 0; (o = t.regex.exec(e)); ) {
                                                if (void 0 === (i = l(o[1].trim())))
                                                    if ("function" === typeof f) {
                                                        var n = f(e, o, r);
                                                        i = "string" === typeof n ? n : "";
                                                    } else {
                                                        if (p) {
                                                            i = o[0];
                                                            continue;
                                                        }
                                                        s.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), (i = "");
                                                    }
                                                else "string" === typeof i || s.useRawValueToEscape || (i = ve(i));
                                                var u = t.safeValue(i);
                                                if (((e = e.replace(o[0], u)), p ? ((t.regex.lastIndex += u.length), (t.regex.lastIndex -= o[0].length)) : (t.regex.lastIndex = 0), ++a >= s.maxReplaces)) break;
                                            }
                                        }),
                                        e
                                    );
                                },
                            },
                            {
                                key: "nest",
                                value: function (e, t) {
                                    var n,
                                        r,
                                        o = this,
                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        a = re({}, i);
                                    function s(e, t) {
                                        var n = this.nestingOptionsSeparator;
                                        if (e.indexOf(n) < 0) return e;
                                        var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
                                            o = "{".concat(r[1]);
                                        (e = r[0]), (o = (o = this.interpolate(o, a)).replace(/'/g, '"'));
                                        try {
                                            (a = JSON.parse(o)), t && (a = re({}, t, a));
                                        } catch (i) {
                                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), i), "".concat(e).concat(n).concat(o);
                                        }
                                        return delete a.defaultValue, e;
                                    }
                                    for (a.applyPostProcessor = !1, delete a.defaultValue; (n = this.nestingRegexp.exec(e)); ) {
                                        var u = [],
                                            c = !1;
                                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                            var l = n[1].split(this.formatSeparator).map(function (e) {
                                                return e.trim();
                                            });
                                            (n[1] = l.shift()), (u = l), (c = !0);
                                        }
                                        if ((r = t(s.call(this, n[1].trim(), a), a)) && n[0] === e && "string" !== typeof r) return r;
                                        "string" !== typeof r && (r = ve(r)),
                                            r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), (r = "")),
                                            c &&
                                                (r = u.reduce(function (e, t) {
                                                    return o.format(e, t, i.lng, re({}, i, { interpolationkey: n[1].trim() }));
                                                }, r.trim())),
                                            (e = e.replace(n[0], r)),
                                            (this.regexp.lastIndex = 0);
                                    }
                                    return e;
                                },
                            },
                        ]),
                        e
                    );
                })();
            var Fe = (function (e) {
                function t(e, n, r) {
                    var o,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return (
                        oe(this, t),
                        (o = ue(this, ce(t).call(this))),
                        je && ge.call(se(o)),
                        (o.backend = e),
                        (o.store = n),
                        (o.services = r),
                        (o.languageUtils = r.languageUtils),
                        (o.options = i),
                        (o.logger = de.create("backendConnector")),
                        (o.state = {}),
                        (o.queue = []),
                        o.backend && o.backend.init && o.backend.init(r, i.backend, i),
                        o
                    );
                }
                return (
                    fe(t, e),
                    ae(t, [
                        {
                            key: "queueLoad",
                            value: function (e, t, n, r) {
                                var o = this,
                                    i = [],
                                    a = [],
                                    s = [],
                                    u = [];
                                return (
                                    e.forEach(function (e) {
                                        var r = !0;
                                        t.forEach(function (t) {
                                            var s = "".concat(e, "|").concat(t);
                                            !n.reload && o.store.hasResourceBundle(e, t)
                                                ? (o.state[s] = 2)
                                                : o.state[s] < 0 ||
                                                  (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : ((o.state[s] = 1), (r = !1), a.indexOf(s) < 0 && a.push(s), i.indexOf(s) < 0 && i.push(s), u.indexOf(t) < 0 && u.push(t)));
                                        }),
                                            r || s.push(e);
                                    }),
                                    (i.length || a.length) && this.queue.push({ pending: a, loaded: {}, errors: [], callback: r }),
                                    { toLoad: i, pending: a, toLoadLanguages: s, toLoadNamespaces: u }
                                );
                            },
                        },
                        {
                            key: "loaded",
                            value: function (e, t, n) {
                                var r = e.split("|"),
                                    o = r[0],
                                    i = r[1];
                                t && this.emit("failedLoading", o, i, t), n && this.store.addResourceBundle(o, i, n), (this.state[e] = t ? -1 : 2);
                                var a = {};
                                this.queue.forEach(function (n) {
                                    !(function (e, t, n, r) {
                                        var o = me(e, t, Object),
                                            i = o.obj,
                                            a = o.k;
                                        (i[a] = i[a] || []), r && (i[a] = i[a].concat(n)), r || i[a].push(n);
                                    })(n.loaded, [o], i),
                                        (function (e, t) {
                                            for (var n = e.indexOf(t); -1 !== n; ) e.splice(n, 1), (n = e.indexOf(t));
                                        })(n.pending, e),
                                        t && n.errors.push(t),
                                        0 !== n.pending.length ||
                                            n.done ||
                                            (Object.keys(n.loaded).forEach(function (e) {
                                                a[e] || (a[e] = []),
                                                    n.loaded[e].length &&
                                                        n.loaded[e].forEach(function (t) {
                                                            a[e].indexOf(t) < 0 && a[e].push(t);
                                                        });
                                            }),
                                            (n.done = !0),
                                            n.errors.length ? n.callback(n.errors) : n.callback());
                                }),
                                    this.emit("loaded", a),
                                    (this.queue = this.queue.filter(function (e) {
                                        return !e.done;
                                    }));
                            },
                        },
                        {
                            key: "read",
                            value: function (e, t, n) {
                                var r = this,
                                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                                    a = arguments.length > 5 ? arguments[5] : void 0;
                                return e.length
                                    ? this.backend[n](e, t, function (s, u) {
                                          s && u && o < 5
                                              ? setTimeout(function () {
                                                    r.read.call(r, e, t, n, o + 1, 2 * i, a);
                                                }, i)
                                              : a(s, u);
                                      })
                                    : a(null, {});
                            },
                        },
                        {
                            key: "prepareLoading",
                            value: function (e, t) {
                                var n = this,
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    o = arguments.length > 3 ? arguments[3] : void 0;
                                if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                                "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" === typeof t && (t = [t]);
                                var i = this.queueLoad(e, t, r, o);
                                if (!i.toLoad.length) return i.pending.length || o(), null;
                                i.toLoad.forEach(function (e) {
                                    n.loadOne(e);
                                });
                            },
                        },
                        {
                            key: "load",
                            value: function (e, t, n) {
                                this.prepareLoading(e, t, {}, n);
                            },
                        },
                        {
                            key: "reload",
                            value: function (e, t, n) {
                                this.prepareLoading(e, t, { reload: !0 }, n);
                            },
                        },
                        {
                            key: "loadOne",
                            value: function (e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    r = e.split("|"),
                                    o = r[0],
                                    i = r[1];
                                this.read(o, i, "read", void 0, void 0, function (r, a) {
                                    r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r),
                                        !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a),
                                        t.loaded(e, r, a);
                                });
                            },
                        },
                        {
                            key: "saveMissing",
                            value: function (e, t, n, r, o) {
                                var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                                this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)
                                    ? this.logger.warn(
                                          'did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'),
                                          "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                      )
                                    : void 0 !== n && null !== n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, r, null, re({}, i, { isUpdate: o })), e && e[0] && this.store.addResource(e[0], t, n, r));
                            },
                        },
                    ]),
                    t
                );
            })(ge);
            function Ve() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    whitelist: !1,
                    nonExplicitWhitelist: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !0,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function (e) {
                        var t = {};
                        if (("object" === te(e[1]) && (t = e[1]), "string" === typeof e[1] && (t.defaultValue = e[1]), "string" === typeof e[2] && (t.tDescription = e[2]), "object" === te(e[2]) || "object" === te(e[3]))) {
                            var n = e[3] || e[2];
                            Object.keys(n).forEach(function (e) {
                                t[e] = n[e];
                            });
                        }
                        return t;
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: function (e, t, n, r) {
                            return e;
                        },
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !1,
                    },
                };
            }
            function He(e) {
                return (
                    "string" === typeof e.ns && (e.ns = [e.ns]),
                    "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
                    "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
                    e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), (e.supportedLngs = e.whitelist)),
                    e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
                    e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
                    e
                );
            }
            function Ke() {}
            var Be = new ((function (e) {
                    function t() {
                        var e,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        if ((oe(this, t), (e = ue(this, ce(t).call(this))), je && ge.call(se(e)), (e.options = He(n)), (e.services = {}), (e.logger = de), (e.modules = { external: [] }), r && !e.isInitialized && !n.isClone)) {
                            if (!e.options.initImmediate) return e.init(n, r), ue(e, se(e));
                            setTimeout(function () {
                                e.init(n, r);
                            }, 0);
                        }
                        return e;
                    }
                    return (
                        fe(t, e),
                        ae(t, [
                            {
                                key: "init",
                                value: function () {
                                    var e = this,
                                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = arguments.length > 1 ? arguments[1] : void 0;
                                    function r(e) {
                                        return e ? ("function" === typeof e ? new e() : e) : null;
                                    }
                                    if (
                                        ("function" === typeof t && ((n = t), (t = {})),
                                        t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),
                                        t.nonExplicitWhitelist &&
                                            !t.nonExplicitSupportedLngs &&
                                            this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),
                                        (this.options = re({}, Ve(), this.options, He(t))),
                                        (this.format = this.options.interpolation.format),
                                        n || (n = Ke),
                                        !this.options.isClone)
                                    ) {
                                        this.modules.logger ? de.init(r(this.modules.logger), this.options) : de.init(null, this.options);
                                        var o = new Ae(this.options);
                                        this.store = new Ce(this.options.resources, this.options);
                                        var i = this.services;
                                        (i.logger = de),
                                            (i.resourceStore = this.store),
                                            (i.languageUtils = o),
                                            (i.pluralResolver = new De(o, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix })),
                                            (i.interpolator = new Ue(this.options)),
                                            (i.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
                                            (i.backendConnector = new Fe(r(this.modules.backend), i.resourceStore, i, this.options)),
                                            i.backendConnector.on("*", function (t) {
                                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                                e.emit.apply(e, [t].concat(r));
                                            }),
                                            this.modules.languageDetector && ((i.languageDetector = r(this.modules.languageDetector)), i.languageDetector.init(i, this.options.detection, this.options)),
                                            this.modules.i18nFormat && ((i.i18nFormat = r(this.modules.i18nFormat)), i.i18nFormat.init && i.i18nFormat.init(this)),
                                            (this.translator = new Pe(this.services, this.options)),
                                            this.translator.on("*", function (t) {
                                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                                e.emit.apply(e, [t].concat(r));
                                            }),
                                            this.modules.external.forEach(function (t) {
                                                t.init && t.init(e);
                                            });
                                    }
                                    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                                        var a = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                        a.length > 0 && "dev" !== a[0] && (this.options.lng = a[0]);
                                    }
                                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                                    var s = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                                    s.forEach(function (t) {
                                        e[t] = function () {
                                            var n;
                                            return (n = e.store)[t].apply(n, arguments);
                                        };
                                    });
                                    var u = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                                    u.forEach(function (t) {
                                        e[t] = function () {
                                            var n;
                                            return (n = e.store)[t].apply(n, arguments), e;
                                        };
                                    });
                                    var c = he(),
                                        l = function () {
                                            var t = function (t, r) {
                                                e.isInitialized && e.logger.warn("init: i18next is already initialized. You should call init just once!"),
                                                    (e.isInitialized = !0),
                                                    e.options.isClone || e.logger.log("initialized", e.options),
                                                    e.emit("initialized", e.options),
                                                    c.resolve(r),
                                                    n(t, r);
                                            };
                                            if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
                                            e.changeLanguage(e.options.lng, t);
                                        };
                                    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), c;
                                },
                            },
                            {
                                key: "loadResources",
                                value: function (e) {
                                    var t = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke,
                                        r = n,
                                        o = "string" === typeof e ? e : this.language;
                                    if (("function" === typeof e && (r = e), !this.options.resources || this.options.partialBundledLanguages)) {
                                        if (o && "cimode" === o.toLowerCase()) return r();
                                        var i = [],
                                            a = function (e) {
                                                e &&
                                                    t.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
                                                        i.indexOf(e) < 0 && i.push(e);
                                                    });
                                            };
                                        if (o) a(o);
                                        else {
                                            var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                            s.forEach(function (e) {
                                                return a(e);
                                            });
                                        }
                                        this.options.preload &&
                                            this.options.preload.forEach(function (e) {
                                                return a(e);
                                            }),
                                            this.services.backendConnector.load(i, this.options.ns, r);
                                    } else r(null);
                                },
                            },
                            {
                                key: "reloadResources",
                                value: function (e, t, n) {
                                    var r = he();
                                    return (
                                        e || (e = this.languages),
                                        t || (t = this.options.ns),
                                        n || (n = Ke),
                                        this.services.backendConnector.reload(e, t, function (e) {
                                            r.resolve(), n(e);
                                        }),
                                        r
                                    );
                                },
                            },
                            {
                                key: "use",
                                value: function (e) {
                                    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                                    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                                    return (
                                        "backend" === e.type && (this.modules.backend = e),
                                        ("logger" === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
                                        "languageDetector" === e.type && (this.modules.languageDetector = e),
                                        "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                                        "postProcessor" === e.type && Re.addPostProcessor(e),
                                        "3rdParty" === e.type && this.modules.external.push(e),
                                        this
                                    );
                                },
                            },
                            {
                                key: "changeLanguage",
                                value: function (e, t) {
                                    var n = this;
                                    this.isLanguageChangingTo = e;
                                    var r = he();
                                    this.emit("languageChanging", e);
                                    var o = function (e) {
                                        var o = "string" === typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                                        o &&
                                            (n.language || ((n.language = o), (n.languages = n.services.languageUtils.toResolveHierarchy(o))),
                                            n.translator.language || n.translator.changeLanguage(o),
                                            n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(o)),
                                            n.loadResources(o, function (e) {
                                                !(function (e, o) {
                                                    o
                                                        ? ((n.language = o),
                                                          (n.languages = n.services.languageUtils.toResolveHierarchy(o)),
                                                          n.translator.changeLanguage(o),
                                                          (n.isLanguageChangingTo = void 0),
                                                          n.emit("languageChanged", o),
                                                          n.logger.log("languageChanged", o))
                                                        : (n.isLanguageChangingTo = void 0),
                                                        r.resolve(function () {
                                                            return n.t.apply(n, arguments);
                                                        }),
                                                        t &&
                                                            t(e, function () {
                                                                return n.t.apply(n, arguments);
                                                            });
                                                })(e, o);
                                            });
                                    };
                                    return (
                                        e || !this.services.languageDetector || this.services.languageDetector.async
                                            ? !e && this.services.languageDetector && this.services.languageDetector.async
                                                ? this.services.languageDetector.detect(o)
                                                : o(e)
                                            : o(this.services.languageDetector.detect()),
                                        r
                                    );
                                },
                            },
                            {
                                key: "getFixedT",
                                value: function (e, t) {
                                    var n = this,
                                        r = function e(t, r) {
                                            var o;
                                            if ("object" !== te(r)) {
                                                for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) a[s - 2] = arguments[s];
                                                o = n.options.overloadTranslationOptionHandler([t, r].concat(a));
                                            } else o = re({}, r);
                                            return (o.lng = o.lng || e.lng), (o.lngs = o.lngs || e.lngs), (o.ns = o.ns || e.ns), n.t(t, o);
                                        };
                                    return "string" === typeof e ? (r.lng = e) : (r.lngs = e), (r.ns = t), r;
                                },
                            },
                            {
                                key: "t",
                                value: function () {
                                    var e;
                                    return this.translator && (e = this.translator).translate.apply(e, arguments);
                                },
                            },
                            {
                                key: "exists",
                                value: function () {
                                    var e;
                                    return this.translator && (e = this.translator).exists.apply(e, arguments);
                                },
                            },
                            {
                                key: "setDefaultNamespace",
                                value: function (e) {
                                    this.options.defaultNS = e;
                                },
                            },
                            {
                                key: "hasLoadedNamespace",
                                value: function (e) {
                                    var t = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                                    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                                    var r = this.languages[0],
                                        o = !!this.options && this.options.fallbackLng,
                                        i = this.languages[this.languages.length - 1];
                                    if ("cimode" === r.toLowerCase()) return !0;
                                    var a = function (e, n) {
                                        var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                                        return -1 === r || 2 === r;
                                    };
                                    if (n.precheck) {
                                        var s = n.precheck(this, a);
                                        if (void 0 !== s) return s;
                                    }
                                    return !!this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || !(!a(r, e) || (o && !a(i, e)));
                                },
                            },
                            {
                                key: "loadNamespaces",
                                value: function (e, t) {
                                    var n = this,
                                        r = he();
                                    return this.options.ns
                                        ? ("string" === typeof e && (e = [e]),
                                          e.forEach(function (e) {
                                              n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                                          }),
                                          this.loadResources(function (e) {
                                              r.resolve(), t && t(e);
                                          }),
                                          r)
                                        : (t && t(), Promise.resolve());
                                },
                            },
                            {
                                key: "loadLanguages",
                                value: function (e, t) {
                                    var n = he();
                                    "string" === typeof e && (e = [e]);
                                    var r = this.options.preload || [],
                                        o = e.filter(function (e) {
                                            return r.indexOf(e) < 0;
                                        });
                                    return o.length
                                        ? ((this.options.preload = r.concat(o)),
                                          this.loadResources(function (e) {
                                              n.resolve(), t && t(e);
                                          }),
                                          n)
                                        : (t && t(), Promise.resolve());
                                },
                            },
                            {
                                key: "dir",
                                value: function (e) {
                                    if ((e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e)) return "rtl";
                                    return [
                                        "ar",
                                        "shu",
                                        "sqr",
                                        "ssh",
                                        "xaa",
                                        "yhd",
                                        "yud",
                                        "aao",
                                        "abh",
                                        "abv",
                                        "acm",
                                        "acq",
                                        "acw",
                                        "acx",
                                        "acy",
                                        "adf",
                                        "ads",
                                        "aeb",
                                        "aec",
                                        "afb",
                                        "ajp",
                                        "apc",
                                        "apd",
                                        "arb",
                                        "arq",
                                        "ars",
                                        "ary",
                                        "arz",
                                        "auz",
                                        "avl",
                                        "ayh",
                                        "ayl",
                                        "ayn",
                                        "ayp",
                                        "bbz",
                                        "pga",
                                        "he",
                                        "iw",
                                        "ps",
                                        "pbt",
                                        "pbu",
                                        "pst",
                                        "prp",
                                        "prd",
                                        "ug",
                                        "ur",
                                        "ydd",
                                        "yds",
                                        "yih",
                                        "ji",
                                        "yi",
                                        "hbo",
                                        "men",
                                        "xmn",
                                        "fa",
                                        "jpr",
                                        "peo",
                                        "pes",
                                        "prs",
                                        "dv",
                                        "sam",
                                    ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0
                                        ? "rtl"
                                        : "ltr";
                                },
                            },
                            {
                                key: "createInstance",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = arguments.length > 1 ? arguments[1] : void 0;
                                    return new t(e, n);
                                },
                            },
                            {
                                key: "cloneInstance",
                                value: function () {
                                    var e = this,
                                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke,
                                        o = re({}, this.options, n, { isClone: !0 }),
                                        i = new t(o),
                                        a = ["store", "services", "language"];
                                    return (
                                        a.forEach(function (t) {
                                            i[t] = e[t];
                                        }),
                                        (i.services = re({}, this.services)),
                                        (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
                                        (i.translator = new Pe(i.services, i.options)),
                                        i.translator.on("*", function (e) {
                                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                                            i.emit.apply(i, [e].concat(n));
                                        }),
                                        i.init(o, r),
                                        (i.translator.options = i.options),
                                        (i.translator.backendConnector.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
                                        i
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(ge))(),
                Ge = function (e) {
                    var t,
                        n,
                        r = Be.createInstance(e);
                    r.isInitialized
                        ? (t = Promise.resolve(Be.t))
                        : (null === e ||
                              void 0 === e ||
                              null === (n = e.use) ||
                              void 0 === n ||
                              n.forEach(function (e) {
                                  return r.use(e);
                              }),
                          (t = r.init(e)));
                    return { i18n: r, initPromise: t };
                },
                Je = l.a.createElement;
            function We(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? We(Object(n), !0).forEach(function (t) {
                              u()(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : We(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var ze = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = function (n) {
                        var r,
                            o = null,
                            i = null;
                        if (null === n || void 0 === n || null === (r = n.pageProps) || void 0 === r ? void 0 : r._nextI18Next) {
                            var a,
                                s = n.pageProps._nextI18Next.userConfig,
                                u = n.pageProps._nextI18Next,
                                l = u.initialI18nStore,
                                f = u.initialLocale;
                            if (null === s && null === t) throw new Error("appWithTranslation was called without a next-i18next config");
                            if ((null !== t && (s = t), !(null === (a = s) || void 0 === a ? void 0 : a.i18n))) throw new Error("appWithTranslation was called without config.i18n");
                            i = f;
                            var p = Ge(Ye(Ye({}, ee(Ye(Ye({}, s), {}, { lng: f }))), {}, { lng: f, resources: l }));
                            (o = p.i18n),
                                Object(c.useMemo)(
                                    function () {
                                        o;
                                    },
                                    [o]
                                );
                        }
                        return null !== o ? Je(q, { i18n: o }, Je(e, W()({ key: i }, n))) : Je(e, W()({ key: i }, n));
                    };
                return z()(n, e);
            };
        },
        Fnoh: function (e, t, n) {
            "use strict";
            n.d(t, "g", function () {
                return i;
            }),
                n.d(t, "i", function () {
                    return a;
                }),
                n.d(t, "h", function () {
                    return s;
                }),
                n.d(t, "a", function () {
                    return u;
                }),
                n.d(t, "f", function () {
                    return c;
                }),
                n.d(t, "e", function () {
                    return l;
                }),
                n.d(t, "b", function () {
                    return f;
                }),
                n.d(t, "c", function () {
                    return p;
                }),
                n.d(t, "d", function () {
                    return d;
                }),
                n.d(t, "j", function () {
                    return g;
                }),
                n.d(t, "k", function () {
                    return h;
                }),
                n.d(t, "n", function () {
                    return v;
                }),
                n.d(t, "m", function () {
                    return y;
                }),
                n.d(t, "l", function () {
                    return m;
                });
            var r = n("TiKg"),
                o = n.n(r),
                i = 1e3,
                a = 60,
                s = 60,
                u = 86400,
                c = 4,
                l = 6,
                f = 8,
                p = 10,
                d = 12,
                g = function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = e / i / a;
                    return t ? Math.round(n) : n;
                },
                h = function (e) {
                    return o()(e).format("DD.MM.YYYY");
                },
                v = function (e, t) {
                    var n = o()().utc(),
                        r = (function (e) {
                            var t = e / a;
                            return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] ? t : Math.round(t);
                        })(o()().utcOffset(), !1),
                        i = o()("".concat(e.date, "T").concat(e.time)).add(-t + r, "hours"),
                        s = o.a.duration(i.diff(n)).asHours();
                    return Math.ceil(s);
                },
                y = function (e, t) {
                    var n = o.a.duration(t.diff(e)).asDays();
                    return Math.ceil(n);
                },
                m = function (e) {
                    var t = o()(),
                        n = o()(e.date + e.time, "YYYYMMDDHHmm"),
                        r = o.a.duration(n.diff(t)).asDays();
                    return Math.ceil(r);
                };
        },
        GlZI: function (e, t, n) {
            "use strict";
            var r = n("5WRv"),
                o = n("SDJZ"),
                i = n("NToG"),
                a = (n("T1e2"), n("eef+")),
                s = n("K4DB"),
                u = n("+IV6");
            function c(e) {
                var t = (function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return s(this, n);
                };
            }
            (t.__esModule = !0), (t.default = void 0);
            var l = n("mXGw"),
                f = (function (e) {
                    a(n, e);
                    var t = c(n);
                    function n(e) {
                        var i;
                        return (
                            o(this, n),
                            ((i = t.call(this, e))._hasHeadManager = void 0),
                            (i.emitChange = function () {
                                i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances), i.props));
                            }),
                            (i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances),
                            i
                        );
                    }
                    return (
                        i(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function () {
                                    this.emitChange();
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return null;
                                },
                            },
                        ]),
                        n
                    );
                })(l.Component);
            t.default = f;
        },
        H6M5: function (e, t) {
            (e.exports = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        JkJP: function (e, t, n) {
            var r = n("T6Yf"),
                o = n("CuQK"),
                i = n("kgcy"),
                a = n("4ukQ");
            (e.exports = function (e, t) {
                return r(e) || o(e, t) || i(e, t) || a();
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        JtH5: function (e, t, n) {
            var r = n("CVgh");
            (e.exports = function (e, t) {
                if (null == e) return {};
                var n,
                    o,
                    i = r(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        K4DB: function (e, t, n) {
            var r = n("e+GP"),
                o = n("T1e2");
            e.exports = function (e, t) {
                return !t || ("object" !== r(t) && "function" !== typeof t) ? o(e) : t;
            };
        },
        K7wk: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return h;
            }),
                n.d(t, "i", function () {
                    return v;
                }),
                n.d(t, "h", function () {
                    return y;
                }),
                n.d(t, "b", function () {
                    return m;
                }),
                n.d(t, "g", function () {
                    return b;
                }),
                n.d(t, "c", function () {
                    return S;
                }),
                n.d(t, "e", function () {
                    return O;
                }),
                n.d(t, "d", function () {
                    return x;
                }),
                n.d(t, "f", function () {
                    return k;
                }),
                n.d(t, "j", function () {
                    return E;
                });
            var r = n("NthX"),
                o = n.n(r),
                i = n("eijD"),
                a = n("vJCJ"),
                s = n("zrOO"),
                u = n("7sFu"),
                c = n("Z3Jd"),
                l = n("QGV/"),
                f = n("pivC"),
                p = n("rxnA"),
                d = n("VtKY"),
                g = n("Fnoh"),
                h = function (e) {
                    var t,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
                    return function () {
                        for (var r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                        clearTimeout(t),
                            (t = setTimeout(function () {
                                e.apply(r, i);
                            }, n));
                    };
                },
                v = function () {
                    return "unknown" !== Object(c.a)();
                },
                y = function (e) {
                    return Object(u.f)(e).split("|");
                },
                m = function (e) {
                    return s.g[e];
                },
                b = function () {
                    var e = a.event;
                    return e && Object.keys(e).length > 0 && Object(g.l)(e.from) <= -1 && Object(g.l)(e.to) > -1 ? e.name : "";
                },
                S = function () {
                    return Object(d.d)("cr") ? 1 : 0;
                },
                O = function (e) {
                    return e.reduce(function (e, t) {
                        return e + t.usdPrice.price;
                    }, 0);
                },
                x = function (e, t, n) {
                    return "undefined" !== typeof n ? (e.total - e.netPrice - n).toFixed(p.Hb) : (e.total - e.netPrice + t).toFixed(p.Hb);
                },
                k = function (e, t, n) {
                    return "undefined" !== typeof n ? (e.total - n).toFixed(p.Hb) : ((100 * (t + e.total)) / 100).toFixed(p.Hb);
                },
                E = (function () {
                    var e = Object(i.a)(
                        o.a.mark(function e(t, n, r) {
                            var i, a, s, u, c, p, d, g, h, v;
                            return o.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (((i = t.query.pln), (a = t.query.dln), (s = t.query.pcc), (u = t.query.dcc), !i || !a)) {
                                                e.next = 25;
                                                break;
                                            }
                                            (c = [i, a]), (p = [s, u]), (d = 0);
                                        case 8:
                                            if (!(d < c.length)) {
                                                e.next = 25;
                                                break;
                                            }
                                            if (((g = { location: c[d], country: p[d] }), c[0] !== c[1])) {
                                                e.next = 20;
                                                break;
                                            }
                                            return (e.next = 13), Object(l.K)(!1, r, g);
                                        case 13:
                                            return (h = e.sent), n.dispatch(Object(f.e)(h[0])), n.dispatch(Object(f.f)(h)), n.dispatch(Object(f.b)(h[0])), e.abrupt("break", 25);
                                        case 20:
                                            (v = Object(l.K)(!1, r, g)), 0 === d ? (n.dispatch(Object(f.e)(v[0])), n.dispatch(Object(f.f)(v))) : n.dispatch(Object(f.b)(v[0]));
                                        case 22:
                                            d++, (e.next = 8);
                                            break;
                                        case 25:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n, r) {
                        return e.apply(this, arguments);
                    };
                })();
        },
        Mthw: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return a;
            });
            var r = n("mXGw"),
                o = n("vj+v").default,
                i = r.createContext(new o()),
                a = (i.Provider, i.Consumer);
            t.b = i;
        },
        Qatm: function (e, t) {
            e.exports = function (e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            };
        },
        "RM/1": function (e, t) {
            (e.exports = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        T1e2: function (e, t) {
            e.exports = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            };
        },
        T1pQ: function (e, t) {
            function n() {
                return (
                    (e.exports = n =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    (e.exports.default = e.exports),
                    (e.exports.__esModule = !0),
                    n.apply(this, arguments)
                );
            }
            (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
        },
        T6Yf: function (e, t) {
            (e.exports = function (e) {
                if (Array.isArray(e)) return e;
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        XCNj: function (e, t) {
            function n(t) {
                return (
                    "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                        ? ((e.exports = n = function (e) {
                              return typeof e;
                          }),
                          (e.exports.default = e.exports),
                          (e.exports.__esModule = !0))
                        : ((e.exports = n = function (e) {
                              return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          }),
                          (e.exports.default = e.exports),
                          (e.exports.__esModule = !0)),
                    n(t)
                );
            }
            (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
        },
        Z3Jd: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return r;
            });
            var r = function (e) {
                var t = e || navigator.userAgent || navigator.vendor || window.opera;
                return /android/i.test(t) ? "android" : /iPad|iPhone|iPod/.test(t) && !window.MSStream ? "ios" : /Mobile|IEMobile|Windows Phone|BlackBerry|webOS/i.test(t) ? "other" : "unknown";
            };
        },
        bxxT: function (e, t, n) {
            "use strict";
            var r;
            (t.__esModule = !0), (t.HeadManagerContext = void 0);
            var o = ((r = n("mXGw")) && r.__esModule ? r : { default: r }).default.createContext({});
            t.HeadManagerContext = o;
        },
        "c7+U": function (e, t, n) {
            "use strict";
            n.d(t, "c", function () {
                return i;
            }),
                n.d(t, "a", function () {
                    return a;
                }),
                n.d(t, "k", function () {
                    return s;
                }),
                n.d(t, "o", function () {
                    return u;
                }),
                n.d(t, "q", function () {
                    return c;
                }),
                n.d(t, "p", function () {
                    return l;
                }),
                n.d(t, "v", function () {
                    return f;
                }),
                n.d(t, "n", function () {
                    return p;
                }),
                n.d(t, "x", function () {
                    return d;
                }),
                n.d(t, "w", function () {
                    return g;
                }),
                n.d(t, "d", function () {
                    return h;
                }),
                n.d(t, "b", function () {
                    return v;
                }),
                n.d(t, "r", function () {
                    return y;
                }),
                n.d(t, "u", function () {
                    return m;
                }),
                n.d(t, "s", function () {
                    return b;
                }),
                n.d(t, "t", function () {
                    return S;
                }),
                n.d(t, "h", function () {
                    return O;
                }),
                n.d(t, "e", function () {
                    return x;
                }),
                n.d(t, "l", function () {
                    return k;
                }),
                n.d(t, "f", function () {
                    return E;
                }),
                n.d(t, "m", function () {
                    return w;
                }),
                n.d(t, "C", function () {
                    return j;
                }),
                n.d(t, "g", function () {
                    return _;
                }),
                n.d(t, "j", function () {
                    return C;
                }),
                n.d(t, "y", function () {
                    return R;
                }),
                n.d(t, "B", function () {
                    return L;
                }),
                n.d(t, "z", function () {
                    return P;
                }),
                n.d(t, "A", function () {
                    return T;
                }),
                n.d(t, "i", function () {
                    return A;
                });
            var r = n("rxnA"),
                o = n("lJBP"),
                i = function (e) {
                    return { type: o.z, payload: e };
                },
                a = function (e) {
                    return { type: o.y, payload: e };
                },
                s = function (e) {
                    var t = document.location,
                        n = 0;
                    return (
                        t.search.includes(r.L) && (t.search.includes(r.K) ? (n = r.Lb) : t.search.includes(r.J) ? (n = r.Kb) : t.search.includes(r.I) && (n = r.Jb)),
                        function (t) {
                            t({ type: o.a, payload: { steps: e, updateMode: n } });
                        }
                    );
                },
                u = function () {
                    return { type: o.l };
                },
                c = function (e) {
                    return { type: o.n, payload: e };
                },
                l = function (e) {
                    return { type: o.m, payload: e };
                },
                f = function (e) {
                    return { type: o.v, payload: e };
                },
                p = function (e) {
                    return { type: o.c, payload: e };
                },
                d = function (e) {
                    return { type: o.e, payload: e };
                },
                g = function (e) {
                    return { type: o.d, payload: e };
                },
                h = function () {
                    return { type: o.b };
                },
                v = function (e) {
                    return { type: o.k, payload: e };
                },
                y = function () {
                    return { type: o.r };
                },
                m = function () {
                    return { type: o.u };
                },
                b = function (e) {
                    return { type: o.s, payload: e };
                },
                S = function (e) {
                    return { type: o.t, payload: e };
                },
                O = function () {
                    return { type: o.j };
                },
                x = function () {
                    return { type: o.h };
                },
                k = function (e) {
                    return { type: o.f, payload: e };
                },
                E = function () {
                    return { type: o.i };
                },
                w = function (e) {
                    return { type: o.g, payload: e };
                },
                j = function (e) {
                    return { type: o.A, payload: e };
                },
                _ = function () {
                    return { type: o.C };
                },
                C = function (e) {
                    return { type: o.D, payload: e };
                },
                R = function (e) {
                    return { type: o.B, payload: e };
                },
                L = function (e) {
                    return { type: o.x, payload: e };
                },
                P = function (e) {
                    return { type: o.w, payload: e };
                },
                T = function (e) {
                    return { type: o.F, payload: e };
                },
                A = function () {
                    return { type: o.E };
                };
        },
        "dV/x": function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return o;
            });
            var r = n("+I+c");
            function o(e, t) {
                if (null == e) return {};
                var n,
                    o,
                    i = Object(r.a)(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            }
        },
        "eef+": function (e, t, n) {
            var r = n("WI9V");
            e.exports = function (e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && r(e, t);
            };
        },
        fACT: function (e, t, n) {
            e.exports = { parse: n("fSXM"), stringify: n("46Dl") };
        },
        fSXM: function (e, t, n) {
            var r = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,
                o = n("9cvu"),
                i = Object.create ? Object.create(null) : {};
            function a(e, t, n, r, o) {
                var i = t.indexOf("<", r),
                    a = t.slice(r, -1 === i ? void 0 : i);
                /^\s*$/.test(a) && (a = " "), ((!o && i > -1 && n + e.length >= 0) || " " !== a) && e.push({ type: "text", content: a });
            }
            e.exports = function (e, t) {
                t || (t = {}), t.components || (t.components = i);
                var n,
                    s = [],
                    u = -1,
                    c = [],
                    l = {},
                    f = !1;
                return (
                    e.replace(r, function (r, i) {
                        if (f) {
                            if (r !== "</" + n.name + ">") return;
                            f = !1;
                        }
                        var p,
                            d = "/" !== r.charAt(1),
                            g = 0 === r.indexOf("\x3c!--"),
                            h = i + r.length,
                            v = e.charAt(h);
                        d &&
                            !g &&
                            (u++,
                            "tag" === (n = o(r)).type && t.components[n.name] && ((n.type = "component"), (f = !0)),
                            n.voidElement || f || !v || "<" === v || a(n.children, e, u, h, t.ignoreWhitespace),
                            (l[n.tagName] = n),
                            0 === u && s.push(n),
                            (p = c[u - 1]) && p.children.push(n),
                            (c[u] = n)),
                            (g || !d || n.voidElement) && (g || u--, !f && "<" !== v && v && a((p = -1 === u ? s : c[u].children), e, u, h, t.ignoreWhitespace));
                    }),
                    !s.length && e.length && a(s, e, 0, 0, t.ignoreWhitespace),
                    s
                );
            };
        },
        gxYI: function (e, t, n) {
            "use strict";
            n.d(t, "d", function () {
                return r;
            }),
                n.d(t, "c", function () {
                    return o;
                }),
                n.d(t, "b", function () {
                    return i;
                }),
                n.d(t, "h", function () {
                    return a;
                }),
                n.d(t, "a", function () {
                    return s;
                }),
                n.d(t, "l", function () {
                    return u;
                }),
                n.d(t, "m", function () {
                    return c;
                }),
                n.d(t, "g", function () {
                    return l;
                }),
                n.d(t, "i", function () {
                    return f;
                }),
                n.d(t, "j", function () {
                    return p;
                }),
                n.d(t, "e", function () {
                    return d;
                }),
                n.d(t, "k", function () {
                    return g;
                }),
                n.d(t, "f", function () {
                    return h;
                });
            var r = "SET_DATERANGE_TIME",
                o = "SET_COUNTRY",
                i = "SET_CITY",
                a = "SET_LOCATION",
                s = "LOAD_LOCATION",
                u = "SET_SEARCH_TERM",
                c = "SET_START_TIME",
                l = "SET_END_TIME",
                f = "SET_PICKUP_LOCATION",
                p = "SET_PICKUP_LOCATIONS",
                d = "SET_DROPOFF_LOCATION",
                g = "SET_PICKUP_TIME",
                h = "SET_DROPOFF_TIME";
        },
        iFEh: function (e, t) {
            (e.exports = function (e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        iNmH: function (e, t, n) {
            var r = n("+Sw5");
            e.exports = function (e) {
                if (Array.isArray(e)) return r(e);
            };
        },
        jPX1: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return r;
            }),
                n.d(t, "a", function () {
                    return o;
                });
            var r = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (e = (e = (e = "" + e).replace(/ /g, "-")).replace(/%20/g, "-")), t && (e = e.toLowerCase()), e;
                },
                o = function (e, t) {
                    if ("undefined" !== typeof (t = decodeURIComponent(t).split("?"))[1]) {
                        var n = [];
                        if ((t = t[1].split("&")))
                            for (var r = 0; r < t.length; r++) {
                                var o = t[r].split("=");
                                n[o[0]] = o[1];
                            }
                        return n[e];
                    }
                };
        },
        kckn: function (e, t) {
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            (e.exports = function (e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e;
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        kgcy: function (e, t, n) {
            var r = n("iFEh");
            (e.exports = function (e, t) {
                if (e) {
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
                }
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        kluZ: function (e, t) {
            e.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        lJBP: function (e, t, n) {
            "use strict";
            n.d(t, "l", function () {
                return r;
            }),
                n.d(t, "n", function () {
                    return o;
                }),
                n.d(t, "m", function () {
                    return i;
                }),
                n.d(t, "v", function () {
                    return a;
                }),
                n.d(t, "c", function () {
                    return s;
                }),
                n.d(t, "e", function () {
                    return u;
                }),
                n.d(t, "d", function () {
                    return c;
                }),
                n.d(t, "k", function () {
                    return l;
                }),
                n.d(t, "r", function () {
                    return f;
                }),
                n.d(t, "u", function () {
                    return p;
                }),
                n.d(t, "s", function () {
                    return d;
                }),
                n.d(t, "t", function () {
                    return g;
                }),
                n.d(t, "o", function () {
                    return h;
                }),
                n.d(t, "q", function () {
                    return v;
                }),
                n.d(t, "p", function () {
                    return y;
                }),
                n.d(t, "j", function () {
                    return m;
                }),
                n.d(t, "g", function () {
                    return b;
                }),
                n.d(t, "i", function () {
                    return S;
                }),
                n.d(t, "f", function () {
                    return O;
                }),
                n.d(t, "h", function () {
                    return x;
                }),
                n.d(t, "b", function () {
                    return k;
                }),
                n.d(t, "a", function () {
                    return E;
                }),
                n.d(t, "A", function () {
                    return w;
                }),
                n.d(t, "C", function () {
                    return j;
                }),
                n.d(t, "D", function () {
                    return _;
                }),
                n.d(t, "B", function () {
                    return C;
                }),
                n.d(t, "x", function () {
                    return R;
                }),
                n.d(t, "w", function () {
                    return L;
                }),
                n.d(t, "z", function () {
                    return P;
                }),
                n.d(t, "F", function () {
                    return T;
                }),
                n.d(t, "E", function () {
                    return A;
                }),
                n.d(t, "y", function () {
                    return N;
                });
            var r = "CARS_RESULTS_RESULTS_GET_CARS_LIST_BEGIN",
                o = "CARS_RESULTS_RESULTS_GET_CARS_LIST_SUCCESS",
                i = "CARS_RESULTS_RESULTS_GET_CARS_LIST_FAILURE",
                a = "CARS_RESULTS_TO_DETAILS_SUCCESS",
                s = "CARS_RESULTS_DETAILS_GET_CAR_SUCCESS",
                u = "CARS_RESULTS_DETAILS_UPDATE_SELECTED_EXTRAS",
                c = "CARS_RESULTS_DETAILS_UPDATE_FEES_AND_TAXES",
                l = "CARS_RESULTS_RESULTS_CHANGE_SELECTED_SORT",
                f = "CARS_RESULTS_RESULTS_SAVE_CAR_BEGIN",
                p = "CARS_RESULTS_RESULTS_SAVE_CAR_SUCCESS",
                d = "CARS_RESULTS_RESULTS_SAVE_CAR_FAILURE",
                g = "CARS_RESULTS_RESULTS_SAVE_CAR_RESET_STATES",
                h = "CARS_RESULTS_RESULTS_GET_LOCATION_OF_HOTEL_BEGIN",
                v = "CARS_RESULTS_RESULTS_GET_LOCATION_OF_HOTEL_SUCCESS",
                y = "CARS_RESULTS_RESULTS_GET_LOCATION_OF_HOTEL_FAILURE",
                m = "CARS_RESULTS_RESET_REFERENCE_NUMBER",
                b = "CARS_RESULTS_GET_BTAG_CAR",
                S = "CARS_RESULTS_RESET_BTAG_CAR",
                O = "CARS_RESULTS_GET_BOOKED_CAR",
                x = "CARS_RESULTS_RESET_BOOKED_CAR",
                k = "CARS_RESULTS_CLEAR_ALL_SORT",
                E = "CARS_RESULTS_CHANGE_STEPS",
                w = "DRIVER_DETAILS_UPDATE",
                j = "PAYMENT_DETAILS_RESET",
                _ = "PAYMENT_DETAILS_SET",
                C = "PAYMENT_COMPENSATION_SET",
                R = "CAR_RESULTS_DETAILS_UPDATE_PRICE",
                L = "CAR_RESULTS_DETAILS_SET_PRICE_SUMMARY",
                P = "CHANGE_UPDATE_MODE",
                T = "SET_UPSALE_DATA",
                A = "RESET_UPSALE_DATA",
                N = "CHANGE_REDIRECT_CONFIRMATION";
        },
        pWCa: function (e, t, n) {
            e.exports = n("9fEB");
        },
        pivC: function (e, t, n) {
            "use strict";
            n.d(t, "f", function () {
                return o;
            }),
                n.d(t, "e", function () {
                    return i;
                }),
                n.d(t, "b", function () {
                    return a;
                }),
                n.d(t, "g", function () {
                    return s;
                }),
                n.d(t, "c", function () {
                    return u;
                }),
                n.d(t, "a", function () {
                    return c;
                }),
                n.d(t, "d", function () {
                    return l;
                });
            var r = n("gxYI"),
                o = function (e) {
                    return { type: r.j, locations: e };
                },
                i = function (e) {
                    return { type: r.i, location: e };
                },
                a = function (e) {
                    return { type: r.e, location: e };
                },
                s = function (e) {
                    return { type: r.k, time: e };
                },
                u = function (e) {
                    return { type: r.f, time: e };
                },
                c = function (e) {
                    return { type: r.d, time: e };
                },
                l = function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return { type: r.h, location: e, isPickup: t };
                };
        },
        vI6Y: function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
                (t.isInAmpMode = a),
                (t.useAmp = function () {
                    return a(o.default.useContext(i.AmpStateContext));
                });
            var r,
                o = (r = n("mXGw")) && r.__esModule ? r : { default: r },
                i = n("9rrO");
            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    o = void 0 !== r && r,
                    i = e.hasQuery,
                    a = void 0 !== i && i;
                return n || (o && a);
            }
        },
        wK2p: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return l;
            });
            var r = n("mK0O"),
                o = n("aNYv"),
                i = n("jPX1"),
                a = n("vJCJ"),
                s = n("VtKY"),
                u = n("rxnA");
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            var l = function (e, t, n) {
                var l = { language: !0, currency: !0, cor: !0 },
                    f = a.hideNavElements,
                    p = f.byParams,
                    d = f.byPath;
                Object.entries(p).forEach(function (t) {
                    var n = Object(o.a)(t, 2),
                        r = n[0],
                        a = n[1],
                        s = !0;
                    a.forEach(function (t) {
                        var n = 0;
                        t.forEach(function (t) {
                            Object(i.a)(t, e) && n++;
                        }),
                            n === t.length && (s = !1);
                    }),
                        (l[r] = s);
                }),
                    Object.entries(d).forEach(function (t) {
                        var n = Object(o.a)(t, 2),
                            r = n[0];
                        n[1].some(function (t) {
                            return e.includes(t);
                        }) && (l[r] = !1);
                    });
                var g = e.includes(u.P) ? t.btag : "",
                    h = Object(i.a)("btag", e) || g || "",
                    v = {},
                    y = {};
                Object.entries(a.btagCookies).forEach(function (n) {
                    var a,
                        s = Object(o.a)(n, 2),
                        u = s[0],
                        l = s[1],
                        f = l.btag,
                        p = l.uid;
                    !h && null !== (a = t.btag) && void 0 !== a && a.includes(u) && f && (h = f.cookieValue),
                        p && Object(i.a)(p.parameterName, e) ? (v = { name: p.cookieKey, value: Object(i.a)(p.parameterName, e), sendBack: p.sendBack }) : (h && !h.includes(u)) || (t.btagClickId && (v = t.btagClickId)),
                        h === u &&
                            null !== f &&
                            void 0 !== f &&
                            f.cobranding &&
                            (y = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? c(Object(n), !0).forEach(function (t) {
                                              Object(r.a)(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                        : c(Object(n)).forEach(function (t) {
                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                          });
                                }
                                return e;
                            })({ name: f.cookieValue }, f.cobranding));
                }),
                    (h = h.toLowerCase()),
                    (v = (function (e) {
                        try {
                            JSON.parse(e);
                        } catch (t) {
                            return !1;
                        }
                        return !0;
                    })(v)
                        ? JSON.parse(v)
                        : v);
                var m = { name: h, clickId: v, coBranding: y },
                    b = { clientId: t.clientId ? t.clientId : 0, gaClientId: t.gaClientId ? t.gaClientId : "0", fingerId: t.fingerId ? t.fingerId : 0, atcId: t.atc_id ? t.atc_id : "" };
                return { prevPage: n, activePage: Object(s.c)(e), btag: m, showNavElements: l, client: b };
            };
        },
        xHkc: function (e, t, n) {
            "use strict";
            n("W0B4");
        },
        xQps: function (e, t) {
            (function (t) {
                e.exports = (function () {
                    var e = {
                            880: function (e) {
                                e.exports = function (e) {
                                    return (
                                        e.webpackPolyfill ||
                                            ((e.deprecate = function () {}),
                                            (e.paths = []),
                                            e.children || (e.children = []),
                                            Object.defineProperty(e, "loaded", {
                                                enumerable: !0,
                                                get: function () {
                                                    return e.l;
                                                },
                                            }),
                                            Object.defineProperty(e, "id", {
                                                enumerable: !0,
                                                get: function () {
                                                    return e.i;
                                                },
                                            }),
                                            (e.webpackPolyfill = 1)),
                                        e
                                    );
                                };
                            },
                        },
                        n = {};
                    function r(t) {
                        if (n[t]) return n[t].exports;
                        var o = (n[t] = { exports: {} }),
                            i = !0;
                        try {
                            e[t](o, o.exports, r), (i = !1);
                        } finally {
                            i && delete n[t];
                        }
                        return o.exports;
                    }
                    return (r.ab = t + "/"), r(880);
                })();
            }.call(this, "/"));
        },
        "y/N9": function (e, t) {
            e.exports = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, menuitem: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };
        },
        zrOO: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return i;
            }),
                n.d(t, "d", function () {
                    return a;
                }),
                n.d(t, "a", function () {
                    return s;
                }),
                n.d(t, "e", function () {
                    return u;
                }),
                n.d(t, "f", function () {
                    return c;
                }),
                n.d(t, "c", function () {
                    return l;
                }),
                n.d(t, "g", function () {
                    return f;
                });
            var r,
                o = n("mK0O"),
                i = 2,
                a = 3,
                s = 5,
                u = 10,
                c = 11,
                l = 12,
                f =
                    ((r = {}),
                    Object(o.a)(r, 1, "Pending"),
                    Object(o.a)(r, i, "Confirmed"),
                    Object(o.a)(r, a, "Quote"),
                    Object(o.a)(r, s, "Canceled"),
                    Object(o.a)(r, 8, "Rebook"),
                    Object(o.a)(r, 9, "Refund"),
                    Object(o.a)(r, u, "Reclamation"),
                    Object(o.a)(r, c, "Voided"),
                    Object(o.a)(r, l, "Initialized"),
                    r);
        },
    },
]);
