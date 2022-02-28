var TossPayments = function () {
    "use strict";

    function t(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function e(e) {
        for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2 ? t(Object(n), !0).forEach((function (t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function r(t) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r(t)
    }

    function n(t, e, r, n, o, i, a) {
        try {
            var u = t[i](a), c = u.value
        } catch (t) {
            return void r(t)
        }
        u.done ? e(c) : Promise.resolve(c).then(n, o)
    }

    function o(t) {
        return function () {
            var e = this, r = arguments;
            return new Promise((function (o, i) {
                var a = t.apply(e, r);

                function u(t) {
                    n(a, o, i, u, c, "next", t)
                }

                function c(t) {
                    n(a, o, i, u, c, "throw", t)
                }

                u(void 0)
            }))
        }
    }

    function i(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function a(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function u(t) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, u(t)
    }

    function c(t, e) {
        return c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        }, c(t, e)
    }

    function s() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
        } catch (t) {
            return !1
        }
    }

    function f(t, e, r) {
        return f = s() ? Reflect.construct : function (t, e, r) {
            var n = [null];
            n.push.apply(n, e);
            var o = new (Function.bind.apply(t, n));
            return r && c(o, r.prototype), o
        }, f.apply(null, arguments)
    }

    function l(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return l = function (t) {
            if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
            var r;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n)
            }

            function n() {
                return f(t, arguments, u(this).constructor)
            }

            return n.prototype = Object.create(t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), c(n, t)
        }, l(t)
    }

    function h(t, e) {
        if (null == t) return {};
        var r, n, o = function (t, e) {
            if (null == t) return {};
            var r, n, o = {}, i = Object.keys(t);
            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
        }
        return o
    }

    function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function v(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return p(t)
    }

    function d(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == r) return;
            var n, o, i = [], a = !0, u = !1;
            try {
                for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0) ;
            } catch (t) {
                u = !0, o = t
            } finally {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (u) throw o
                }
            }
            return i
        }(t, e) || g(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function y(t) {
        return function (t) {
            if (Array.isArray(t)) return m(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || g(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(t, e) {
        if (t) {
            if ("string" == typeof t) return m(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(t, e) : void 0
        }
    }

    function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    var b = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        w = function (t) {
            return t && t.Math == Math && t
        },
        S = w("object" == typeof globalThis && globalThis) || w("object" == typeof window && window) || w("object" == typeof self && self) || w("object" == typeof b && b) || function () {
            return this
        }() || Function("return this")(), O = {}, E = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }, P = !E((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })), x = !E((function () {
            var t = function () {
            }.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        })), j = x, R = Function.prototype.call, L = j ? R.bind(R) : function () {
            return R.apply(R, arguments)
        }, T = {}, _ = {}.propertyIsEnumerable, A = Object.getOwnPropertyDescriptor, k = A && !_.call({1: 2}, 1);
    T.f = k ? function (t) {
        var e = A(this, t);
        return !!e && e.enumerable
    } : _;
    var I, U, C = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
        }, F = x, M = Function.prototype, N = M.bind, B = M.call, H = F && N.bind(B, B), q = F ? function (t) {
            return t && H(t)
        } : function (t) {
            return t && function () {
                return B.apply(t, arguments)
            }
        }, G = q, D = G({}.toString), z = G("".slice), Y = function (t) {
            return z(D(t), 8, -1)
        }, K = q, W = E, $ = Y, V = S.Object, J = K("".split), Q = W((function () {
            return !V("z").propertyIsEnumerable(0)
        })) ? function (t) {
            return "String" == $(t) ? J(t, "") : V(t)
        } : V, X = S.TypeError, Z = function (t) {
            if (null == t) throw X("Can't call method on " + t);
            return t
        }, tt = Q, et = Z, rt = function (t) {
            return tt(et(t))
        }, nt = function (t) {
            return "function" == typeof t
        }, ot = nt, it = function (t) {
            return "object" == typeof t ? null !== t : ot(t)
        }, at = S, ut = nt, ct = function (t) {
            return ut(t) ? t : void 0
        }, st = function (t, e) {
            return arguments.length < 2 ? ct(at[t]) : at[t] && at[t][e]
        }, ft = q({}.isPrototypeOf), lt = st("navigator", "userAgent") || "", ht = S, pt = lt, vt = ht.process,
        dt = ht.Deno, yt = vt && vt.versions || dt && dt.version, gt = yt && yt.v8;
    gt && (U = (I = gt.split("."))[0] > 0 && I[0] < 4 ? 1 : +(I[0] + I[1])), !U && pt && (!(I = pt.match(/Edge\/(\d+)/)) || I[1] >= 74) && (I = pt.match(/Chrome\/(\d+)/)) && (U = +I[1]);
    var mt = U, bt = mt, wt = E, St = !!Object.getOwnPropertySymbols && !wt((function () {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && bt && bt < 41
        })), Ot = St && !Symbol.sham && "symbol" == typeof Symbol.iterator, Et = st, Pt = nt, xt = ft, jt = Ot,
        Rt = S.Object, Lt = jt ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            var e = Et("Symbol");
            return Pt(e) && xt(e.prototype, Rt(t))
        }, Tt = S.String, _t = function (t) {
            try {
                return Tt(t)
            } catch (t) {
                return "Object"
            }
        }, At = nt, kt = _t, It = S.TypeError, Ut = function (t) {
            if (At(t)) return t;
            throw It(kt(t) + " is not a function")
        }, Ct = Ut, Ft = function (t, e) {
            var r = t[e];
            return null == r ? void 0 : Ct(r)
        }, Mt = L, Nt = nt, Bt = it, Ht = S.TypeError, qt = {exports: {}}, Gt = S, Dt = Object.defineProperty,
        zt = function (t, e) {
            try {
                Dt(Gt, t, {value: e, configurable: !0, writable: !0})
            } catch (r) {
                Gt[t] = e
            }
            return e
        }, Yt = zt, Kt = "__core-js_shared__", Wt = S[Kt] || Yt(Kt, {}), $t = Wt;
    (qt.exports = function (t, e) {
        return $t[t] || ($t[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.21.1",
        mode: "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var Vt = Z, Jt = S.Object, Qt = function (t) {
            return Jt(Vt(t))
        }, Xt = Qt, Zt = q({}.hasOwnProperty), te = Object.hasOwn || function (t, e) {
            return Zt(Xt(t), e)
        }, ee = q, re = 0, ne = Math.random(), oe = ee(1..toString), ie = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + oe(++re + ne, 36)
        }, ae = S, ue = qt.exports, ce = te, se = ie, fe = St, le = Ot, he = ue("wks"), pe = ae.Symbol, ve = pe && pe.for,
        de = le ? pe : pe && pe.withoutSetter || se, ye = function (t) {
            if (!ce(he, t) || !fe && "string" != typeof he[t]) {
                var e = "Symbol." + t;
                fe && ce(pe, t) ? he[t] = pe[t] : he[t] = le && ve ? ve(e) : de(e)
            }
            return he[t]
        }, ge = L, me = it, be = Lt, we = Ft, Se = function (t, e) {
            var r, n;
            if ("string" === e && Nt(r = t.toString) && !Bt(n = Mt(r, t))) return n;
            if (Nt(r = t.valueOf) && !Bt(n = Mt(r, t))) return n;
            if ("string" !== e && Nt(r = t.toString) && !Bt(n = Mt(r, t))) return n;
            throw Ht("Can't convert object to primitive value")
        }, Oe = ye, Ee = S.TypeError, Pe = Oe("toPrimitive"), xe = function (t, e) {
            if (!me(t) || be(t)) return t;
            var r, n = we(t, Pe);
            if (n) {
                if (void 0 === e && (e = "default"), r = ge(n, t, e), !me(r) || be(r)) return r;
                throw Ee("Can't convert object to primitive value")
            }
            return void 0 === e && (e = "number"), Se(t, e)
        }, je = Lt, Re = function (t) {
            var e = xe(t, "string");
            return je(e) ? e : e + ""
        }, Le = it, Te = S.document, _e = Le(Te) && Le(Te.createElement), Ae = function (t) {
            return _e ? Te.createElement(t) : {}
        }, ke = Ae, Ie = !P && !E((function () {
            return 7 != Object.defineProperty(ke("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })), Ue = P, Ce = L, Fe = T, Me = C, Ne = rt, Be = Re, He = te, qe = Ie, Ge = Object.getOwnPropertyDescriptor;
    O.f = Ue ? Ge : function (t, e) {
        if (t = Ne(t), e = Be(e), qe) try {
            return Ge(t, e)
        } catch (t) {
        }
        if (He(t, e)) return Me(!Ce(Fe.f, t, e), t[e])
    };
    var De = {}, ze = P && E((function () {
            return 42 != Object.defineProperty((function () {
            }), "prototype", {value: 42, writable: !1}).prototype
        })), Ye = S, Ke = it, We = Ye.String, $e = Ye.TypeError, Ve = function (t) {
            if (Ke(t)) return t;
            throw $e(We(t) + " is not an object")
        }, Je = P, Qe = Ie, Xe = ze, Ze = Ve, tr = Re, er = S.TypeError, rr = Object.defineProperty,
        nr = Object.getOwnPropertyDescriptor, or = "enumerable", ir = "configurable", ar = "writable";
    De.f = Je ? Xe ? function (t, e, r) {
        if (Ze(t), e = tr(e), Ze(r), "function" == typeof t && "prototype" === e && "value" in r && ar in r && !r.writable) {
            var n = nr(t, e);
            n && n.writable && (t[e] = r.value, r = {
                configurable: ir in r ? r.configurable : n.configurable,
                enumerable: or in r ? r.enumerable : n.enumerable,
                writable: !1
            })
        }
        return rr(t, e, r)
    } : rr : function (t, e, r) {
        if (Ze(t), e = tr(e), Ze(r), Qe) try {
            return rr(t, e, r)
        } catch (t) {
        }
        if ("get" in r || "set" in r) throw er("Accessors not supported");
        return "value" in r && (t[e] = r.value), t
    };
    var ur = De, cr = C, sr = P ? function (t, e, r) {
        return ur.f(t, e, cr(1, r))
    } : function (t, e, r) {
        return t[e] = r, t
    }, fr = {exports: {}}, lr = nt, hr = Wt, pr = q(Function.toString);
    lr(hr.inspectSource) || (hr.inspectSource = function (t) {
        return pr(t)
    });
    var vr, dr, yr, gr = hr.inspectSource, mr = nt, br = gr, wr = S.WeakMap, Sr = mr(wr) && /native code/.test(br(wr)),
        Or = qt.exports, Er = ie, Pr = Or("keys"), xr = function (t) {
            return Pr[t] || (Pr[t] = Er(t))
        }, jr = {}, Rr = Sr, Lr = S, Tr = q, _r = it, Ar = sr, kr = te, Ir = Wt, Ur = xr, Cr = jr,
        Fr = "Object already initialized", Mr = Lr.TypeError, Nr = Lr.WeakMap;
    if (Rr || Ir.state) {
        var Br = Ir.state || (Ir.state = new Nr), Hr = Tr(Br.get), qr = Tr(Br.has), Gr = Tr(Br.set);
        vr = function (t, e) {
            if (qr(Br, t)) throw new Mr(Fr);
            return e.facade = t, Gr(Br, t, e), e
        }, dr = function (t) {
            return Hr(Br, t) || {}
        }, yr = function (t) {
            return qr(Br, t)
        }
    } else {
        var Dr = Ur("state");
        Cr[Dr] = !0, vr = function (t, e) {
            if (kr(t, Dr)) throw new Mr(Fr);
            return e.facade = t, Ar(t, Dr, e), e
        }, dr = function (t) {
            return kr(t, Dr) ? t[Dr] : {}
        }, yr = function (t) {
            return kr(t, Dr)
        }
    }
    var zr = {
            set: vr, get: dr, has: yr, enforce: function (t) {
                return yr(t) ? dr(t) : vr(t, {})
            }, getterFor: function (t) {
                return function (e) {
                    var r;
                    if (!_r(e) || (r = dr(e)).type !== t) throw Mr("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        }, Yr = P, Kr = te, Wr = Function.prototype, $r = Yr && Object.getOwnPropertyDescriptor, Vr = Kr(Wr, "name"), Jr = {
            EXISTS: Vr, PROPER: Vr && "something" === function () {
            }.name, CONFIGURABLE: Vr && (!Yr || Yr && $r(Wr, "name").configurable)
        }, Qr = S, Xr = nt, Zr = te, tn = sr, en = zt, rn = gr, nn = Jr.CONFIGURABLE, on = zr.get, an = zr.enforce,
        un = String(String).split("String");
    (fr.exports = function (t, e, r, n) {
        var o, i = !!n && !!n.unsafe, a = !!n && !!n.enumerable, u = !!n && !!n.noTargetGet,
            c = n && void 0 !== n.name ? n.name : e;
        Xr(r) && ("Symbol(" === String(c).slice(0, 7) && (c = "[" + String(c).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!Zr(r, "name") || nn && r.name !== c) && tn(r, "name", c), (o = an(r)).source || (o.source = un.join("string" == typeof c ? c : ""))), t !== Qr ? (i ? !u && t[e] && (a = !0) : delete t[e], a ? t[e] = r : tn(t, e, r)) : a ? t[e] = r : en(e, r)
    })(Function.prototype, "toString", (function () {
        return Xr(this) && on(this).source || rn(this)
    }));
    var cn = {}, sn = Math.ceil, fn = Math.floor, ln = function (t) {
            var e = +t;
            return e != e || 0 === e ? 0 : (e > 0 ? fn : sn)(e)
        }, hn = ln, pn = Math.max, vn = Math.min, dn = function (t, e) {
            var r = hn(t);
            return r < 0 ? pn(r + e, 0) : vn(r, e)
        }, yn = ln, gn = Math.min, mn = function (t) {
            return t > 0 ? gn(yn(t), 9007199254740991) : 0
        }, bn = mn, wn = function (t) {
            return bn(t.length)
        }, Sn = rt, On = dn, En = wn, Pn = function (t) {
            return function (e, r, n) {
                var o, i = Sn(e), a = En(i), u = On(n, a);
                if (t && r != r) {
                    for (; a > u;) if ((o = i[u++]) != o) return !0
                } else for (; a > u; u++) if ((t || u in i) && i[u] === r) return t || u || 0;
                return !t && -1
            }
        }, xn = {includes: Pn(!0), indexOf: Pn(!1)}, jn = te, Rn = rt, Ln = xn.indexOf, Tn = jr, _n = q([].push),
        An = function (t, e) {
            var r, n = Rn(t), o = 0, i = [];
            for (r in n) !jn(Tn, r) && jn(n, r) && _n(i, r);
            for (; e.length > o;) jn(n, r = e[o++]) && (~Ln(i, r) || _n(i, r));
            return i
        },
        kn = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        In = An, Un = kn.concat("length", "prototype");
    cn.f = Object.getOwnPropertyNames || function (t) {
        return In(t, Un)
    };
    var Cn = {};
    Cn.f = Object.getOwnPropertySymbols;
    var Fn = st, Mn = cn, Nn = Cn, Bn = Ve, Hn = q([].concat), qn = Fn("Reflect", "ownKeys") || function (t) {
            var e = Mn.f(Bn(t)), r = Nn.f;
            return r ? Hn(e, r(t)) : e
        }, Gn = te, Dn = qn, zn = O, Yn = De, Kn = function (t, e, r) {
            for (var n = Dn(e), o = Yn.f, i = zn.f, a = 0; a < n.length; a++) {
                var u = n[a];
                Gn(t, u) || r && Gn(r, u) || o(t, u, i(e, u))
            }
        }, Wn = E, $n = nt, Vn = /#|\.prototype\./, Jn = function (t, e) {
            var r = Xn[Qn(t)];
            return r == to || r != Zn && ($n(e) ? Wn(e) : !!e)
        }, Qn = Jn.normalize = function (t) {
            return String(t).replace(Vn, ".").toLowerCase()
        }, Xn = Jn.data = {}, Zn = Jn.NATIVE = "N", to = Jn.POLYFILL = "P", eo = Jn, ro = S, no = O.f, oo = sr,
        io = fr.exports, ao = zt, uo = Kn, co = eo, so = function (t, e) {
            var r, n, o, i, a, u = t.target, c = t.global, s = t.stat;
            if (r = c ? ro : s ? ro[u] || ao(u, {}) : (ro[u] || {}).prototype) for (n in e) {
                if (i = e[n], o = t.noTargetGet ? (a = no(r, n)) && a.value : r[n], !co(c ? n : u + (s ? "." : "#") + n, t.forced) && void 0 !== o) {
                    if (typeof i == typeof o) continue;
                    uo(i, o)
                }
                (t.sham || o && o.sham) && oo(i, "sham", !0), io(r, n, i, t)
            }
        }, fo = x, lo = Function.prototype, ho = lo.apply, po = lo.call,
        vo = "object" == typeof Reflect && Reflect.apply || (fo ? po.bind(ho) : function () {
            return po.apply(ho, arguments)
        }), yo = Y, go = Array.isArray || function (t) {
            return "Array" == yo(t)
        }, mo = {};
    mo[ye("toStringTag")] = "z";
    var bo = "[object z]" === String(mo), wo = S, So = bo, Oo = nt, Eo = Y, Po = ye("toStringTag"), xo = wo.Object,
        jo = "Arguments" == Eo(function () {
            return arguments
        }()), Ro = So ? Eo : function (t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
                try {
                    return t[e]
                } catch (t) {
                }
            }(e = xo(t), Po)) ? r : jo ? Eo(e) : "Object" == (n = Eo(e)) && Oo(e.callee) ? "Arguments" : n
        }, Lo = Ro, To = S.String, _o = function (t) {
            if ("Symbol" === Lo(t)) throw TypeError("Cannot convert a Symbol value to a string");
            return To(t)
        }, Ao = {}, ko = An, Io = kn, Uo = Object.keys || function (t) {
            return ko(t, Io)
        }, Co = P, Fo = ze, Mo = De, No = Ve, Bo = rt, Ho = Uo;
    Ao.f = Co && !Fo ? Object.defineProperties : function (t, e) {
        No(t);
        for (var r, n = Bo(e), o = Ho(e), i = o.length, a = 0; i > a;) Mo.f(t, r = o[a++], n[r]);
        return t
    };
    var qo, Go = st("document", "documentElement"), Do = Ve, zo = Ao, Yo = kn, Ko = jr, Wo = Go, $o = Ae,
        Vo = xr("IE_PROTO"), Jo = function () {
        }, Qo = function (t) {
            return "<script>" + t + "</" + "script>"
        }, Xo = function (t) {
            t.write(Qo("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        }, Zo = function () {
            try {
                qo = new ActiveXObject("htmlfile")
            } catch (t) {
            }
            var t, e;
            Zo = "undefined" != typeof document ? document.domain && qo ? Xo(qo) : ((e = $o("iframe")).style.display = "none", Wo.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Qo("document.F=Object")), t.close(), t.F) : Xo(qo);
            for (var r = Yo.length; r--;) delete Zo.prototype[Yo[r]];
            return Zo()
        };
    Ko[Vo] = !0;
    var ti = Object.create || function (t, e) {
            var r;
            return null !== t ? (Jo.prototype = Do(t), r = new Jo, Jo.prototype = null, r[Vo] = t) : r = Zo(), void 0 === e ? r : zo.f(r, e)
        }, ei = {}, ri = Re, ni = De, oi = C, ii = function (t, e, r) {
            var n = ri(e);
            n in t ? ni.f(t, n, oi(0, r)) : t[n] = r
        }, ai = dn, ui = wn, ci = ii, si = S.Array, fi = Math.max, li = function (t, e, r) {
            for (var n = ui(t), o = ai(e, n), i = ai(void 0 === r ? n : r, n), a = si(fi(i - o, 0)), u = 0; o < i; o++, u++) ci(a, u, t[o]);
            return a.length = u, a
        }, hi = Y, pi = rt, vi = cn.f, di = li,
        yi = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    ei.f = function (t) {
        return yi && "Window" == hi(t) ? function (t) {
            try {
                return vi(t)
            } catch (t) {
                return di(yi)
            }
        }(t) : vi(pi(t))
    };
    var gi = q([].slice), mi = {}, bi = ye;
    mi.f = bi;
    var wi = S, Si = te, Oi = mi, Ei = De.f, Pi = function (t) {
            var e = wi.Symbol || (wi.Symbol = {});
            Si(e, t) || Ei(e, t, {value: Oi.f(t)})
        }, xi = De.f, ji = te, Ri = ye("toStringTag"), Li = function (t, e, r) {
            t && !r && (t = t.prototype), t && !ji(t, Ri) && xi(t, Ri, {configurable: !0, value: e})
        }, Ti = Ut, _i = x, Ai = q(q.bind), ki = function (t, e) {
            return Ti(t), void 0 === e ? t : _i ? Ai(t, e) : function () {
                return t.apply(e, arguments)
            }
        }, Ii = q, Ui = E, Ci = nt, Fi = Ro, Mi = gr, Ni = function () {
        }, Bi = [], Hi = st("Reflect", "construct"), qi = /^\s*(?:class|function)\b/, Gi = Ii(qi.exec), Di = !qi.exec(Ni),
        zi = function (t) {
            if (!Ci(t)) return !1;
            try {
                return Hi(Ni, Bi, t), !0
            } catch (t) {
                return !1
            }
        }, Yi = function (t) {
            if (!Ci(t)) return !1;
            switch (Fi(t)) {
                case"AsyncFunction":
                case"GeneratorFunction":
                case"AsyncGeneratorFunction":
                    return !1
            }
            try {
                return Di || !!Gi(qi, Mi(t))
            } catch (t) {
                return !0
            }
        };
    Yi.sham = !0;
    var Ki = !Hi || Ui((function () {
            var t;
            return zi(zi.call) || !zi(Object) || !zi((function () {
                t = !0
            })) || t
        })) ? Yi : zi, Wi = S, $i = go, Vi = Ki, Ji = it, Qi = ye("species"), Xi = Wi.Array, Zi = function (t) {
            var e;
            return $i(t) && (e = t.constructor, (Vi(e) && (e === Xi || $i(e.prototype)) || Ji(e) && null === (e = e[Qi])) && (e = void 0)), void 0 === e ? Xi : e
        }, ta = function (t, e) {
            return new (Zi(t))(0 === e ? 0 : e)
        }, ea = ki, ra = Q, na = Qt, oa = wn, ia = ta, aa = q([].push), ua = function (t) {
            var e = 1 == t, r = 2 == t, n = 3 == t, o = 4 == t, i = 6 == t, a = 7 == t, u = 5 == t || i;
            return function (c, s, f, l) {
                for (var h, p, v = na(c), d = ra(v), y = ea(s, f), g = oa(d), m = 0, b = l || ia, w = e ? b(c, g) : r || a ? b(c, 0) : void 0; g > m; m++) if ((u || m in d) && (p = y(h = d[m], m, v), t)) if (e) w[m] = p; else if (p) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return m;
                    case 2:
                        aa(w, h)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        aa(w, h)
                }
                return i ? -1 : n || o ? o : w
            }
        }, ca = {
            forEach: ua(0),
            map: ua(1),
            filter: ua(2),
            some: ua(3),
            every: ua(4),
            find: ua(5),
            findIndex: ua(6),
            filterReject: ua(7)
        }, sa = so, fa = S, la = st, ha = vo, pa = L, va = q, da = P, ya = St, ga = E, ma = te, ba = go, wa = nt, Sa = it,
        Oa = ft, Ea = Lt, Pa = Ve, xa = Qt, ja = rt, Ra = Re, La = _o, Ta = C, _a = ti, Aa = Uo, ka = cn, Ia = ei,
        Ua = Cn, Ca = O, Fa = De, Ma = Ao, Na = T, Ba = gi, Ha = fr.exports, qa = qt.exports, Ga = jr, Da = ie, za = ye,
        Ya = mi, Ka = Pi, Wa = Li, $a = zr, Va = ca.forEach, Ja = xr("hidden"), Qa = "Symbol", Xa = za("toPrimitive"),
        Za = $a.set, tu = $a.getterFor(Qa), eu = Object.prototype, ru = fa.Symbol, nu = ru && ru.prototype,
        ou = fa.TypeError, iu = fa.QObject, au = la("JSON", "stringify"), uu = Ca.f, cu = Fa.f, su = Ia.f, fu = Na.f,
        lu = va([].push), hu = qa("symbols"), pu = qa("op-symbols"), vu = qa("string-to-symbol-registry"),
        du = qa("symbol-to-string-registry"), yu = qa("wks"), gu = !iu || !iu.prototype || !iu.prototype.findChild,
        mu = da && ga((function () {
            return 7 != _a(cu({}, "a", {
                get: function () {
                    return cu(this, "a", {value: 7}).a
                }
            })).a
        })) ? function (t, e, r) {
            var n = uu(eu, e);
            n && delete eu[e], cu(t, e, r), n && t !== eu && cu(eu, e, n)
        } : cu, bu = function (t, e) {
            var r = hu[t] = _a(nu);
            return Za(r, {type: Qa, tag: t, description: e}), da || (r.description = e), r
        }, wu = function (t, e, r) {
            t === eu && wu(pu, e, r), Pa(t);
            var n = Ra(e);
            return Pa(r), ma(hu, n) ? (r.enumerable ? (ma(t, Ja) && t[Ja][n] && (t[Ja][n] = !1), r = _a(r, {enumerable: Ta(0, !1)})) : (ma(t, Ja) || cu(t, Ja, Ta(1, {})), t[Ja][n] = !0), mu(t, n, r)) : cu(t, n, r)
        }, Su = function (t, e) {
            Pa(t);
            var r = ja(e), n = Aa(r).concat(xu(r));
            return Va(n, (function (e) {
                da && !pa(Ou, r, e) || wu(t, e, r[e])
            })), t
        }, Ou = function (t) {
            var e = Ra(t), r = pa(fu, this, e);
            return !(this === eu && ma(hu, e) && !ma(pu, e)) && (!(r || !ma(this, e) || !ma(hu, e) || ma(this, Ja) && this[Ja][e]) || r)
        }, Eu = function (t, e) {
            var r = ja(t), n = Ra(e);
            if (r !== eu || !ma(hu, n) || ma(pu, n)) {
                var o = uu(r, n);
                return !o || !ma(hu, n) || ma(r, Ja) && r[Ja][n] || (o.enumerable = !0), o
            }
        }, Pu = function (t) {
            var e = su(ja(t)), r = [];
            return Va(e, (function (t) {
                ma(hu, t) || ma(Ga, t) || lu(r, t)
            })), r
        }, xu = function (t) {
            var e = t === eu, r = su(e ? pu : ja(t)), n = [];
            return Va(r, (function (t) {
                !ma(hu, t) || e && !ma(eu, t) || lu(n, hu[t])
            })), n
        };
    (ya || (ru = function () {
        if (Oa(nu, this)) throw ou("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? La(arguments[0]) : void 0, e = Da(t), r = function (t) {
            this === eu && pa(r, pu, t), ma(this, Ja) && ma(this[Ja], e) && (this[Ja][e] = !1), mu(this, e, Ta(1, t))
        };
        return da && gu && mu(eu, e, {configurable: !0, set: r}), bu(e, t)
    }, Ha(nu = ru.prototype, "toString", (function () {
        return tu(this).tag
    })), Ha(ru, "withoutSetter", (function (t) {
        return bu(Da(t), t)
    })), Na.f = Ou, Fa.f = wu, Ma.f = Su, Ca.f = Eu, ka.f = Ia.f = Pu, Ua.f = xu, Ya.f = function (t) {
        return bu(za(t), t)
    }, da && (cu(nu, "description", {
        configurable: !0, get: function () {
            return tu(this).description
        }
    }), Ha(eu, "propertyIsEnumerable", Ou, {unsafe: !0}))), sa({
        global: !0,
        wrap: !0,
        forced: !ya,
        sham: !ya
    }, {Symbol: ru}), Va(Aa(yu), (function (t) {
        Ka(t)
    })), sa({target: Qa, stat: !0, forced: !ya}, {
        for: function (t) {
            var e = La(t);
            if (ma(vu, e)) return vu[e];
            var r = ru(e);
            return vu[e] = r, du[r] = e, r
        }, keyFor: function (t) {
            if (!Ea(t)) throw ou(t + " is not a symbol");
            if (ma(du, t)) return du[t]
        }, useSetter: function () {
            gu = !0
        }, useSimple: function () {
            gu = !1
        }
    }), sa({target: "Object", stat: !0, forced: !ya, sham: !da}, {
        create: function (t, e) {
            return void 0 === e ? _a(t) : Su(_a(t), e)
        }, defineProperty: wu, defineProperties: Su, getOwnPropertyDescriptor: Eu
    }), sa({target: "Object", stat: !0, forced: !ya}, {
        getOwnPropertyNames: Pu,
        getOwnPropertySymbols: xu
    }), sa({
        target: "Object", stat: !0, forced: ga((function () {
            Ua.f(1)
        }))
    }, {
        getOwnPropertySymbols: function (t) {
            return Ua.f(xa(t))
        }
    }), au) && sa({
        target: "JSON", stat: !0, forced: !ya || ga((function () {
            var t = ru();
            return "[null]" != au([t]) || "{}" != au({a: t}) || "{}" != au(Object(t))
        }))
    }, {
        stringify: function (t, e, r) {
            var n = Ba(arguments), o = e;
            if ((Sa(e) || void 0 !== t) && !Ea(t)) return ba(e) || (e = function (t, e) {
                if (wa(o) && (e = pa(o, this, t, e)), !Ea(e)) return e
            }), n[1] = e, ha(au, null, n)
        }
    });
    if (!nu[Xa]) {
        var ju = nu.valueOf;
        Ha(nu, Xa, (function (t) {
            return pa(ju, this)
        }))
    }
    Wa(ru, Qa), Ga[Ja] = !0;
    var Ru = so, Lu = P, Tu = S, _u = q, Au = te, ku = nt, Iu = ft, Uu = _o, Cu = De.f, Fu = Kn, Mu = Tu.Symbol,
        Nu = Mu && Mu.prototype;
    if (Lu && ku(Mu) && (!("description" in Nu) || void 0 !== Mu().description)) {
        var Bu = {}, Hu = function () {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : Uu(arguments[0]),
                e = Iu(Nu, this) ? new Mu(t) : void 0 === t ? Mu() : Mu(t);
            return "" === t && (Bu[e] = !0), e
        };
        Fu(Hu, Mu), Hu.prototype = Nu, Nu.constructor = Hu;
        var qu = "Symbol(test)" == String(Mu("test")), Gu = _u(Nu.toString), Du = _u(Nu.valueOf),
            zu = /^Symbol\((.*)\)[^)]+$/, Yu = _u("".replace), Ku = _u("".slice);
        Cu(Nu, "description", {
            configurable: !0, get: function () {
                var t = Du(this), e = Gu(t);
                if (Au(Bu, t)) return "";
                var r = qu ? Ku(e, 7, -1) : Yu(e, zu, "$1");
                return "" === r ? void 0 : r
            }
        }), Ru({global: !0, forced: !0}, {Symbol: Hu})
    }
    var Wu = Ro, $u = bo ? {}.toString : function () {
        return "[object " + Wu(this) + "]"
    }, Vu = bo, Ju = fr.exports, Qu = $u;
    Vu || Ju(Object.prototype, "toString", Qu, {unsafe: !0}), Pi("iterator");
    var Xu = ti, Zu = De, tc = ye("unscopables"), ec = Array.prototype;
    null == ec[tc] && Zu.f(ec, tc, {configurable: !0, value: Xu(null)});
    var rc, nc, oc, ic = {}, ac = !E((function () {
            function t() {
            }

            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })), uc = S, cc = te, sc = nt, fc = Qt, lc = ac, hc = xr("IE_PROTO"), pc = uc.Object, vc = pc.prototype,
        dc = lc ? pc.getPrototypeOf : function (t) {
            var e = fc(t);
            if (cc(e, hc)) return e[hc];
            var r = e.constructor;
            return sc(r) && e instanceof r ? r.prototype : e instanceof pc ? vc : null
        }, yc = E, gc = nt, mc = dc, bc = fr.exports, wc = ye("iterator"), Sc = !1;
    [].keys && ("next" in (oc = [].keys()) ? (nc = mc(mc(oc))) !== Object.prototype && (rc = nc) : Sc = !0);
    var Oc = null == rc || yc((function () {
        var t = {};
        return rc[wc].call(t) !== t
    }));
    Oc && (rc = {}), gc(rc[wc]) || bc(rc, wc, (function () {
        return this
    }));
    var Ec = {IteratorPrototype: rc, BUGGY_SAFARI_ITERATORS: Sc}, Pc = Ec.IteratorPrototype, xc = ti, jc = C, Rc = Li,
        Lc = ic, Tc = function () {
            return this
        }, _c = function (t, e, r, n) {
            var o = e + " Iterator";
            return t.prototype = xc(Pc, {next: jc(+!n, r)}), Rc(t, o, !1), Lc[o] = Tc, t
        }, Ac = S, kc = nt, Ic = Ac.String, Uc = Ac.TypeError, Cc = q, Fc = Ve, Mc = function (t) {
            if ("object" == typeof t || kc(t)) return t;
            throw Uc("Can't set " + Ic(t) + " as a prototype")
        }, Nc = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, e = !1, r = {};
            try {
                (t = Cc(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), e = r instanceof Array
            } catch (t) {
            }
            return function (r, n) {
                return Fc(r), Mc(n), e ? t(r, n) : r.__proto__ = n, r
            }
        }() : void 0), Bc = so, Hc = L, qc = Jr, Gc = nt, Dc = _c, zc = dc, Yc = Nc, Kc = Li, Wc = sr, $c = fr.exports,
        Vc = ic, Jc = qc.PROPER, Qc = qc.CONFIGURABLE, Xc = Ec.IteratorPrototype, Zc = Ec.BUGGY_SAFARI_ITERATORS,
        ts = ye("iterator"), es = "keys", rs = "values", ns = "entries", os = function () {
            return this
        }, is = function (t, e, r, n, o, i, a) {
            Dc(r, e, n);
            var u, c, s, f = function (t) {
                    if (t === o && d) return d;
                    if (!Zc && t in p) return p[t];
                    switch (t) {
                        case es:
                        case rs:
                        case ns:
                            return function () {
                                return new r(this, t)
                            }
                    }
                    return function () {
                        return new r(this)
                    }
                }, l = e + " Iterator", h = !1, p = t.prototype, v = p[ts] || p["@@iterator"] || o && p[o],
                d = !Zc && v || f(o), y = "Array" == e && p.entries || v;
            if (y && (u = zc(y.call(new t))) !== Object.prototype && u.next && (zc(u) !== Xc && (Yc ? Yc(u, Xc) : Gc(u[ts]) || $c(u, ts, os)), Kc(u, l, !0)), Jc && o == rs && v && v.name !== rs && (Qc ? Wc(p, "name", rs) : (h = !0, d = function () {
                return Hc(v, this)
            })), o) if (c = {
                values: f(rs),
                keys: i ? d : f(es),
                entries: f(ns)
            }, a) for (s in c) (Zc || h || !(s in p)) && $c(p, s, c[s]); else Bc({
                target: e,
                proto: !0,
                forced: Zc || h
            }, c);
            return p[ts] !== d && $c(p, ts, d, {name: o}), Vc[e] = d, c
        }, as = rt, us = function (t) {
            ec[tc][t] = !0
        }, cs = ic, ss = zr, fs = De.f, ls = is, hs = P, ps = "Array Iterator", vs = ss.set, ds = ss.getterFor(ps),
        ys = ls(Array, "Array", (function (t, e) {
            vs(this, {type: ps, target: as(t), index: 0, kind: e})
        }), (function () {
            var t = ds(this), e = t.target, r = t.kind, n = t.index++;
            return !e || n >= e.length ? (t.target = void 0, {value: void 0, done: !0}) : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {value: e[n], done: !1} : {value: [n, e[n]], done: !1}
        }), "values"), gs = cs.Arguments = cs.Array;
    if (us("keys"), us("values"), us("entries"), hs && "values" !== gs.name) try {
        fs(gs, "name", {value: "values"})
    } catch (t) {
    }
    var ms = q, bs = ln, ws = _o, Ss = Z, Os = ms("".charAt), Es = ms("".charCodeAt), Ps = ms("".slice),
        xs = function (t) {
            return function (e, r) {
                var n, o, i = ws(Ss(e)), a = bs(r), u = i.length;
                return a < 0 || a >= u ? t ? "" : void 0 : (n = Es(i, a)) < 55296 || n > 56319 || a + 1 === u || (o = Es(i, a + 1)) < 56320 || o > 57343 ? t ? Os(i, a) : n : t ? Ps(i, a, a + 2) : o - 56320 + (n - 55296 << 10) + 65536
            }
        }, js = {codeAt: xs(!1), charAt: xs(!0)}, Rs = js.charAt, Ls = _o, Ts = zr, _s = is, As = "String Iterator",
        ks = Ts.set, Is = Ts.getterFor(As);
    _s(String, "String", (function (t) {
        ks(this, {type: As, string: Ls(t), index: 0})
    }), (function () {
        var t, e = Is(this), r = e.string, n = e.index;
        return n >= r.length ? {value: void 0, done: !0} : (t = Rs(r, n), e.index += t.length, {value: t, done: !1})
    }));
    var Us = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }, Cs = Ae("span").classList, Fs = Cs && Cs.constructor && Cs.constructor.prototype,
        Ms = Fs === Object.prototype ? void 0 : Fs, Ns = S, Bs = Us, Hs = Ms, qs = ys, Gs = sr, Ds = ye,
        zs = Ds("iterator"), Ys = Ds("toStringTag"), Ks = qs.values, Ws = function (t, e) {
            if (t) {
                if (t[zs] !== Ks) try {
                    Gs(t, zs, Ks)
                } catch (e) {
                    t[zs] = Ks
                }
                if (t[Ys] || Gs(t, Ys, e), Bs[e]) for (var r in qs) if (t[r] !== qs[r]) try {
                    Gs(t, r, qs[r])
                } catch (e) {
                    t[r] = qs[r]
                }
            }
        };
    for (var $s in Bs) Ws(Ns[$s] && Ns[$s].prototype, $s);
    Ws(Hs, "DOMTokenList"), Pi("asyncIterator"), Pi("toStringTag"), Li(S.JSON, "JSON", !0), Li(Math, "Math", !0);
    var Vs = Qt, Js = dc, Qs = ac;
    so({
        target: "Object", stat: !0, forced: E((function () {
            Js(1)
        })), sham: !Qs
    }, {
        getPrototypeOf: function (t) {
            return Js(Vs(t))
        }
    });
    var Xs = P, Zs = Jr.EXISTS, tf = q, ef = De.f, rf = Function.prototype, nf = tf(rf.toString),
        of = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, af = tf(of.exec);
    Xs && !Zs && ef(rf, "name", {
        configurable: !0, get: function () {
            try {
                return af(of, nf(this))[1]
            } catch (t) {
                return ""
            }
        }
    });
    var uf = S.Promise, cf = fr.exports, sf = function (t, e, r) {
            for (var n in e) cf(t, n, e[n], r);
            return t
        }, ff = st, lf = De, hf = P, pf = ye("species"), vf = ft, df = S.TypeError, yf = function (t, e) {
            if (vf(e, t)) return t;
            throw df("Incorrect invocation")
        }, gf = ic, mf = ye("iterator"), bf = Array.prototype, wf = function (t) {
            return void 0 !== t && (gf.Array === t || bf[mf] === t)
        }, Sf = Ro, Of = Ft, Ef = ic, Pf = ye("iterator"), xf = function (t) {
            if (null != t) return Of(t, Pf) || Of(t, "@@iterator") || Ef[Sf(t)]
        }, jf = L, Rf = Ut, Lf = Ve, Tf = _t, _f = xf, Af = S.TypeError, kf = function (t, e) {
            var r = arguments.length < 2 ? _f(t) : e;
            if (Rf(r)) return Lf(jf(r, t));
            throw Af(Tf(t) + " is not iterable")
        }, If = L, Uf = Ve, Cf = Ft, Ff = function (t, e, r) {
            var n, o;
            Uf(t);
            try {
                if (!(n = Cf(t, "return"))) {
                    if ("throw" === e) throw r;
                    return r
                }
                n = If(n, t)
            } catch (t) {
                o = !0, n = t
            }
            if ("throw" === e) throw r;
            if (o) throw n;
            return Uf(n), r
        }, Mf = ki, Nf = L, Bf = Ve, Hf = _t, qf = wf, Gf = wn, Df = ft, zf = kf, Yf = xf, Kf = Ff, Wf = S.TypeError,
        $f = function (t, e) {
            this.stopped = t, this.result = e
        }, Vf = $f.prototype, Jf = ye("iterator"), Qf = !1;
    try {
        var Xf = 0, Zf = {
            next: function () {
                return {done: !!Xf++}
            }, return: function () {
                Qf = !0
            }
        };
        Zf[Jf] = function () {
            return this
        }, Array.from(Zf, (function () {
            throw 2
        }))
    } catch (t) {
    }
    var tl, el, rl, nl, ol = Ki, il = _t, al = S.TypeError, ul = Ve, cl = function (t) {
            if (ol(t)) return t;
            throw al(il(t) + " is not a constructor")
        }, sl = ye("species"), fl = S.TypeError, ll = function (t, e) {
            if (t < e) throw fl("Not enough arguments");
            return t
        }, hl = /(?:ipad|iphone|ipod).*applewebkit/i.test(lt), pl = "process" == Y(S.process), vl = S, dl = vo, yl = ki,
        gl = nt, ml = te, bl = E, wl = Go, Sl = gi, Ol = Ae, El = ll, Pl = hl, xl = pl, jl = vl.setImmediate,
        Rl = vl.clearImmediate, Ll = vl.process, Tl = vl.Dispatch, _l = vl.Function, Al = vl.MessageChannel,
        kl = vl.String, Il = 0, Ul = {}, Cl = "onreadystatechange";
    try {
        tl = vl.location
    } catch (t) {
    }
    var Fl = function (t) {
        if (ml(Ul, t)) {
            var e = Ul[t];
            delete Ul[t], e()
        }
    }, Ml = function (t) {
        return function () {
            Fl(t)
        }
    }, Nl = function (t) {
        Fl(t.data)
    }, Bl = function (t) {
        vl.postMessage(kl(t), tl.protocol + "//" + tl.host)
    };
    jl && Rl || (jl = function (t) {
        El(arguments.length, 1);
        var e = gl(t) ? t : _l(t), r = Sl(arguments, 1);
        return Ul[++Il] = function () {
            dl(e, void 0, r)
        }, el(Il), Il
    }, Rl = function (t) {
        delete Ul[t]
    }, xl ? el = function (t) {
        Ll.nextTick(Ml(t))
    } : Tl && Tl.now ? el = function (t) {
        Tl.now(Ml(t))
    } : Al && !Pl ? (nl = (rl = new Al).port2, rl.port1.onmessage = Nl, el = yl(nl.postMessage, nl)) : vl.addEventListener && gl(vl.postMessage) && !vl.importScripts && tl && "file:" !== tl.protocol && !bl(Bl) ? (el = Bl, vl.addEventListener("message", Nl, !1)) : el = Cl in Ol("script") ? function (t) {
        wl.appendChild(Ol("script")).onreadystatechange = function () {
            wl.removeChild(this), Fl(t)
        }
    } : function (t) {
        setTimeout(Ml(t), 0)
    });
    var Hl, ql, Gl, Dl, zl, Yl, Kl, Wl, $l = {set: jl, clear: Rl}, Vl = S,
        Jl = /ipad|iphone|ipod/i.test(lt) && void 0 !== Vl.Pebble, Ql = /web0s(?!.*chrome)/i.test(lt), Xl = S, Zl = ki,
        th = O.f, eh = $l.set, rh = hl, nh = Jl, oh = Ql, ih = pl,
        ah = Xl.MutationObserver || Xl.WebKitMutationObserver, uh = Xl.document, ch = Xl.process, sh = Xl.Promise,
        fh = th(Xl, "queueMicrotask"), lh = fh && fh.value;
    lh || (Hl = function () {
        var t, e;
        for (ih && (t = ch.domain) && t.exit(); ql;) {
            e = ql.fn, ql = ql.next;
            try {
                e()
            } catch (t) {
                throw ql ? Dl() : Gl = void 0, t
            }
        }
        Gl = void 0, t && t.enter()
    }, rh || ih || oh || !ah || !uh ? !nh && sh && sh.resolve ? ((Kl = sh.resolve(void 0)).constructor = sh, Wl = Zl(Kl.then, Kl), Dl = function () {
        Wl(Hl)
    }) : ih ? Dl = function () {
        ch.nextTick(Hl)
    } : (eh = Zl(eh, Xl), Dl = function () {
        eh(Hl)
    }) : (zl = !0, Yl = uh.createTextNode(""), new ah(Hl).observe(Yl, {characterData: !0}), Dl = function () {
        Yl.data = zl = !zl
    }));
    var hh = lh || function (t) {
        var e = {fn: t, next: void 0};
        Gl && (Gl.next = e), ql || (ql = e, Dl()), Gl = e
    }, ph = {}, vh = Ut, dh = function (t) {
        var e, r;
        this.promise = new t((function (t, n) {
            if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
            e = t, r = n
        })), this.resolve = vh(e), this.reject = vh(r)
    };
    ph.f = function (t) {
        return new dh(t)
    };
    var yh = Ve, gh = it, mh = ph, bh = S, wh = function () {
        this.head = null, this.tail = null
    };
    wh.prototype = {
        add: function (t) {
            var e = {item: t, next: null};
            this.head ? this.tail.next = e : this.head = e, this.tail = e
        }, get: function () {
            var t = this.head;
            if (t) return this.head = t.next, this.tail === t && (this.tail = null), t.item
        }
    };
    var Sh, Oh, Eh, Ph, xh = wh, jh = "object" == typeof window, Rh = so, Lh = S, Th = st, _h = L, Ah = uf,
        kh = fr.exports, Ih = sf, Uh = Nc, Ch = Li, Fh = function (t) {
            var e = ff(t), r = lf.f;
            hf && e && !e[pf] && r(e, pf, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }, Mh = Ut, Nh = nt, Bh = it, Hh = yf, qh = gr, Gh = function (t, e, r) {
            var n, o, i, a, u, c, s, f = r && r.that, l = !(!r || !r.AS_ENTRIES), h = !(!r || !r.IS_ITERATOR),
                p = !(!r || !r.INTERRUPTED), v = Mf(e, f), d = function (t) {
                    return n && Kf(n, "normal", t), new $f(!0, t)
                }, y = function (t) {
                    return l ? (Bf(t), p ? v(t[0], t[1], d) : v(t[0], t[1])) : p ? v(t, d) : v(t)
                };
            if (h) n = t; else {
                if (!(o = Yf(t))) throw Wf(Hf(t) + " is not iterable");
                if (qf(o)) {
                    for (i = 0, a = Gf(t); a > i; i++) if ((u = y(t[i])) && Df(Vf, u)) return u;
                    return new $f(!1)
                }
                n = zf(t, o)
            }
            for (c = n.next; !(s = Nf(c, n)).done;) {
                try {
                    u = y(s.value)
                } catch (t) {
                    Kf(n, "throw", t)
                }
                if ("object" == typeof u && u && Df(Vf, u)) return u
            }
            return new $f(!1)
        }, Dh = function (t, e) {
            if (!e && !Qf) return !1;
            var r = !1;
            try {
                var n = {};
                n[Jf] = function () {
                    return {
                        next: function () {
                            return {done: r = !0}
                        }
                    }
                }, t(n)
            } catch (t) {
            }
            return r
        }, zh = function (t, e) {
            var r, n = ul(t).constructor;
            return void 0 === n || null == (r = ul(n)[sl]) ? e : cl(r)
        }, Yh = $l.set, Kh = hh, Wh = function (t, e) {
            if (yh(t), gh(e) && e.constructor === t) return e;
            var r = mh.f(t);
            return (0, r.resolve)(e), r.promise
        }, $h = function (t, e) {
            var r = bh.console;
            r && r.error && (1 == arguments.length ? r.error(t) : r.error(t, e))
        }, Vh = ph, Jh = function (t) {
            try {
                return {error: !1, value: t()}
            } catch (t) {
                return {error: !0, value: t}
            }
        }, Qh = xh, Xh = zr, Zh = eo, tp = jh, ep = pl, rp = mt, np = ye("species"), op = "Promise", ip = Xh.getterFor(op),
        ap = Xh.set, up = Xh.getterFor(op), cp = Ah && Ah.prototype, sp = Ah, fp = cp, lp = Lh.TypeError,
        hp = Lh.document, pp = Lh.process, vp = Vh.f, dp = vp, yp = !!(hp && hp.createEvent && Lh.dispatchEvent),
        gp = Nh(Lh.PromiseRejectionEvent), mp = "unhandledrejection", bp = !1, wp = Zh(op, (function () {
            var t = qh(sp), e = t !== String(sp);
            if (!e && 66 === rp) return !0;
            if (rp >= 51 && /native code/.test(t)) return !1;
            var r = new sp((function (t) {
                t(1)
            })), n = function (t) {
                t((function () {
                }), (function () {
                }))
            };
            return (r.constructor = {})[np] = n, !(bp = r.then((function () {
            })) instanceof n) || !e && tp && !gp
        })), Sp = wp || !Dh((function (t) {
            sp.all(t).catch((function () {
            }))
        })), Op = function (t) {
            var e;
            return !(!Bh(t) || !Nh(e = t.then)) && e
        }, Ep = function (t, e) {
            var r, n, o, i = e.value, a = 1 == e.state, u = a ? t.ok : t.fail, c = t.resolve, s = t.reject, f = t.domain;
            try {
                u ? (a || (2 === e.rejection && Lp(e), e.rejection = 1), !0 === u ? r = i : (f && f.enter(), r = u(i), f && (f.exit(), o = !0)), r === t.promise ? s(lp("Promise-chain cycle")) : (n = Op(r)) ? _h(n, r, c, s) : c(r)) : s(i)
            } catch (t) {
                f && !o && f.exit(), s(t)
            }
        }, Pp = function (t, e) {
            t.notified || (t.notified = !0, Kh((function () {
                for (var r, n = t.reactions; r = n.get();) Ep(r, t);
                t.notified = !1, e && !t.rejection && jp(t)
            })))
        }, xp = function (t, e, r) {
            var n, o;
            yp ? ((n = hp.createEvent("Event")).promise = e, n.reason = r, n.initEvent(t, !1, !0), Lh.dispatchEvent(n)) : n = {
                promise: e,
                reason: r
            }, !gp && (o = Lh["on" + t]) ? o(n) : t === mp && $h("Unhandled promise rejection", r)
        }, jp = function (t) {
            _h(Yh, Lh, (function () {
                var e, r = t.facade, n = t.value;
                if (Rp(t) && (e = Jh((function () {
                    ep ? pp.emit("unhandledRejection", n, r) : xp(mp, r, n)
                })), t.rejection = ep || Rp(t) ? 2 : 1, e.error)) throw e.value
            }))
        }, Rp = function (t) {
            return 1 !== t.rejection && !t.parent
        }, Lp = function (t) {
            _h(Yh, Lh, (function () {
                var e = t.facade;
                ep ? pp.emit("rejectionHandled", e) : xp("rejectionhandled", e, t.value)
            }))
        }, Tp = function (t, e, r) {
            return function (n) {
                t(e, n, r)
            }
        }, _p = function (t, e, r) {
            t.done || (t.done = !0, r && (t = r), t.value = e, t.state = 2, Pp(t, !0))
        }, Ap = function (t, e, r) {
            if (!t.done) {
                t.done = !0, r && (t = r);
                try {
                    if (t.facade === e) throw lp("Promise can't be resolved itself");
                    var n = Op(e);
                    n ? Kh((function () {
                        var r = {done: !1};
                        try {
                            _h(n, e, Tp(Ap, r, t), Tp(_p, r, t))
                        } catch (e) {
                            _p(r, e, t)
                        }
                    })) : (t.value = e, t.state = 1, Pp(t, !1))
                } catch (e) {
                    _p({done: !1}, e, t)
                }
            }
        };
    if (wp && (fp = (sp = function (t) {
        Hh(this, fp), Mh(t), _h(Sh, this);
        var e = ip(this);
        try {
            t(Tp(Ap, e), Tp(_p, e))
        } catch (t) {
            _p(e, t)
        }
    }).prototype, (Sh = function (t) {
        ap(this, {
            type: op,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new Qh,
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = Ih(fp, {
        then: function (t, e) {
            var r = up(this), n = vp(zh(this, sp));
            return r.parent = !0, n.ok = !Nh(t) || t, n.fail = Nh(e) && e, n.domain = ep ? pp.domain : void 0, 0 == r.state ? r.reactions.add(n) : Kh((function () {
                Ep(n, r)
            })), n.promise
        }, catch: function (t) {
            return this.then(void 0, t)
        }
    }), Oh = function () {
        var t = new Sh, e = ip(t);
        this.promise = t, this.resolve = Tp(Ap, e), this.reject = Tp(_p, e)
    }, Vh.f = vp = function (t) {
        return t === sp || t === Eh ? new Oh(t) : dp(t)
    }, Nh(Ah) && cp !== Object.prototype)) {
        Ph = cp.then, bp || (kh(cp, "then", (function (t, e) {
            var r = this;
            return new sp((function (t, e) {
                _h(Ph, r, t, e)
            })).then(t, e)
        }), {unsafe: !0}), kh(cp, "catch", fp.catch, {unsafe: !0}));
        try {
            delete cp.constructor
        } catch (t) {
        }
        Uh && Uh(cp, fp)
    }
    Rh({global: !0, wrap: !0, forced: wp}, {Promise: sp}), Ch(sp, op, !1), Fh(op), Eh = Th(op), Rh({
        target: op,
        stat: !0,
        forced: wp
    }, {
        reject: function (t) {
            var e = vp(this);
            return _h(e.reject, void 0, t), e.promise
        }
    }), Rh({target: op, stat: !0, forced: wp}, {
        resolve: function (t) {
            return Wh(this, t)
        }
    }), Rh({target: op, stat: !0, forced: Sp}, {
        all: function (t) {
            var e = this, r = vp(e), n = r.resolve, o = r.reject, i = Jh((function () {
                var r = Mh(e.resolve), i = [], a = 0, u = 1;
                Gh(t, (function (t) {
                    var c = a++, s = !1;
                    u++, _h(r, e, t).then((function (t) {
                        s || (s = !0, i[c] = t, --u || n(i))
                    }), o)
                })), --u || n(i)
            }));
            return i.error && o(i.value), r.promise
        }, race: function (t) {
            var e = this, r = vp(e), n = r.reject, o = Jh((function () {
                var o = Mh(e.resolve);
                Gh(t, (function (t) {
                    _h(o, e, t).then(r.resolve, n)
                }))
            }));
            return o.error && n(o.value), r.promise
        }
    });
    var kp = E, Ip = function (t, e) {
        var r = [][t];
        return !!r && kp((function () {
            r.call(null, e || function () {
                return 1
            }, 1)
        }))
    }, Up = ca.forEach, Cp = Ip("forEach") ? [].forEach : function (t) {
        return Up(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }, Fp = S, Mp = Us, Np = Ms, Bp = Cp, Hp = sr, qp = function (t) {
        if (t && t.forEach !== Bp) try {
            Hp(t, "forEach", Bp)
        } catch (e) {
            t.forEach = Bp
        }
    };
    for (var Gp in Mp) Mp[Gp] && qp(Fp[Gp] && Fp[Gp].prototype);
    qp(Np);
    var Dp = E, zp = mt, Yp = ye("species"), Kp = function (t) {
            return zp >= 51 || !Dp((function () {
                var e = [];
                return (e.constructor = {})[Yp] = function () {
                    return {foo: 1}
                }, 1 !== e[t](Boolean).foo
            }))
        }, Wp = so, $p = S, Vp = go, Jp = Ki, Qp = it, Xp = dn, Zp = wn, tv = rt, ev = ii, rv = ye, nv = gi,
        ov = Kp("slice"), iv = rv("species"), av = $p.Array, uv = Math.max;
    Wp({target: "Array", proto: !0, forced: !ov}, {
        slice: function (t, e) {
            var r, n, o, i = tv(this), a = Zp(i), u = Xp(t, a), c = Xp(void 0 === e ? a : e, a);
            if (Vp(i) && (r = i.constructor, (Jp(r) && (r === av || Vp(r.prototype)) || Qp(r) && null === (r = r[iv])) && (r = void 0), r === av || void 0 === r)) return nv(i, u, c);
            for (n = new (void 0 === r ? av : r)(uv(c - u, 0)), o = 0; u < c; u++, o++) u in i && ev(n, o, i[u]);
            return n.length = o, n
        }
    }), so({global: !0}, {globalThis: S});
    !function (t) {
        var e = function (t) {
            var e, n = Object.prototype, o = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator", u = i.asyncIterator || "@@asyncIterator",
                c = i.toStringTag || "@@toStringTag";

            function s(t, e, r) {
                return Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
            }

            try {
                s({}, "")
            } catch (t) {
                s = function (t, e, r) {
                    return t[e] = r
                }
            }

            function f(t, e, r, n) {
                var o = e && e.prototype instanceof g ? e : g, i = Object.create(o.prototype), a = new T(n || []);
                return i._invoke = function (t, e, r) {
                    var n = h;
                    return function (o, i) {
                        if (n === v) throw new Error("Generator is already running");
                        if (n === d) {
                            if ("throw" === o) throw i;
                            return A()
                        }
                        for (r.method = o, r.arg = i; ;) {
                            var a = r.delegate;
                            if (a) {
                                var u = j(a, r);
                                if (u) {
                                    if (u === y) continue;
                                    return u
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                                if (n === h) throw n = d, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = v;
                            var c = l(t, e, r);
                            if ("normal" === c.type) {
                                if (n = r.done ? d : p, c.arg === y) continue;
                                return {value: c.arg, done: r.done}
                            }
                            "throw" === c.type && (n = d, r.method = "throw", r.arg = c.arg)
                        }
                    }
                }(t, r, a), i
            }

            function l(t, e, r) {
                try {
                    return {type: "normal", arg: t.call(e, r)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            t.wrap = f;
            var h = "suspendedStart", p = "suspendedYield", v = "executing", d = "completed", y = {};

            function g() {
            }

            function m() {
            }

            function b() {
            }

            var w = {};
            s(w, a, (function () {
                return this
            }));
            var S = Object.getPrototypeOf, O = S && S(S(_([])));
            O && O !== n && o.call(O, a) && (w = O);
            var E = b.prototype = g.prototype = Object.create(w);

            function P(t) {
                ["next", "throw", "return"].forEach((function (e) {
                    s(t, e, (function (t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function x(t, e) {
                function n(i, a, u, c) {
                    var s = l(t[i], t, a);
                    if ("throw" !== s.type) {
                        var f = s.arg, h = f.value;
                        return h && "object" === r(h) && o.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                            n("next", t, u, c)
                        }), (function (t) {
                            n("throw", t, u, c)
                        })) : e.resolve(h).then((function (t) {
                            f.value = t, u(f)
                        }), (function (t) {
                            return n("throw", t, u, c)
                        }))
                    }
                    c(s.arg)
                }

                var i;
                this._invoke = function (t, r) {
                    function o() {
                        return new e((function (e, o) {
                            n(t, r, e, o)
                        }))
                    }

                    return i = i ? i.then(o, o) : o()
                }
            }

            function j(t, r) {
                var n = t.iterator[r.method];
                if (n === e) {
                    if (r.delegate = null, "throw" === r.method) {
                        if (t.iterator.return && (r.method = "return", r.arg = e, j(t, r), "throw" === r.method)) return y;
                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return y
                }
                var o = l(n, t.iterator, r.arg);
                if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, y;
                var i = o.arg;
                return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, y) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y)
            }

            function R(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function L(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function T(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(R, this), this.reset(!0)
            }

            function _(t) {
                if (t) {
                    var r = t[a];
                    if (r) return r.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1, i = function r() {
                            for (; ++n < t.length;) if (o.call(t, n)) return r.value = t[n], r.done = !1, r;
                            return r.value = e, r.done = !0, r
                        };
                        return i.next = i
                    }
                }
                return {next: A}
            }

            function A() {
                return {value: e, done: !0}
            }

            return m.prototype = b, s(E, "constructor", b), s(b, "constructor", m), m.displayName = s(b, c, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, c, "GeneratorFunction")), t.prototype = Object.create(E), t
            }, t.awrap = function (t) {
                return {__await: t}
            }, P(x.prototype), s(x.prototype, u, (function () {
                return this
            })), t.AsyncIterator = x, t.async = function (e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new x(f(e, r, n, o), i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function (t) {
                    return t.done ? t.value : a.next()
                }))
            }, P(E), s(E, c, "Generator"), s(E, a, (function () {
                return this
            })), s(E, "toString", (function () {
                return "[object Generator]"
            })), t.keys = function (t) {
                var e = [];
                for (var r in t) e.push(r);
                return e.reverse(), function r() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
            }, t.values = _, T.prototype = {
                constructor: T, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(L), !t) for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    if (this.done) throw t;
                    var r = this;

                    function n(n, o) {
                        return u.type = "throw", u.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i], u = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var c = o.call(a, "catchLoc"), s = o.call(a, "finallyLoc");
                            if (c && s) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (c) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var i = n;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
                }, complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
                }, finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), L(r), y
                    }
                }, catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                L(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, r, n) {
                    return this.delegate = {
                        iterator: _(t),
                        resultName: r,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = e
        } catch (t) {
            "object" === ("undefined" == typeof globalThis ? "undefined" : r(globalThis)) ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
        }
    }({exports: {}});
    var cv, sv, fv = it, lv = Y, hv = ye("match"), pv = function (t) {
        var e;
        return fv(t) && (void 0 !== (e = t[hv]) ? !!e : "RegExp" == lv(t))
    }, vv = S.TypeError, dv = ye("match"), yv = so, gv = q, mv = O.f, bv = mn, wv = _o, Sv = function (t) {
        if (pv(t)) throw vv("The method doesn't accept regular expressions");
        return t
    }, Ov = Z, Ev = function (t) {
        var e = /./;
        try {
            "/./"[t](e)
        } catch (r) {
            try {
                return e[dv] = !1, "/./"[t](e)
            } catch (t) {
            }
        }
        return !1
    }, Pv = gv("".startsWith), xv = gv("".slice), jv = Math.min, Rv = Ev("startsWith");
    yv({
        target: "String",
        proto: !0,
        forced: !!(Rv || (cv = mv(String.prototype, "startsWith"), !cv || cv.writable)) && !Rv
    }, {
        startsWith: function (t) {
            var e = wv(Ov(this));
            Sv(t);
            var r = bv(jv(arguments.length > 1 ? arguments[1] : void 0, e.length)), n = wv(t);
            return Pv ? Pv(e, n, r) : xv(e, r, r + n.length) === n
        }
    }), function (t) {
        t["준비"] = "READY", t["결제중"] = "ON_PAYMENT", t["완료"] = "DONE"
    }(sv || (sv = {}));
    var Lv = sv.준비, Tv = {
            get isReady() {
                return Lv === sv.준비
            }, setReady: function () {
                Lv = sv.준비
            }, setOnPayment: function () {
                Lv = sv.결제중
            }, setDone: function () {
                Lv = sv.완료
            }
        }, _v = so, Av = S, kv = E, Iv = go, Uv = it, Cv = Qt, Fv = wn, Mv = ii, Nv = ta, Bv = Kp, Hv = mt,
        qv = ye("isConcatSpreadable"), Gv = 9007199254740991, Dv = "Maximum allowed index exceeded", zv = Av.TypeError,
        Yv = Hv >= 51 || !kv((function () {
            var t = [];
            return t[qv] = !1, t.concat()[0] !== t
        })), Kv = Bv("concat"), Wv = function (t) {
            if (!Uv(t)) return !1;
            var e = t[qv];
            return void 0 !== e ? !!e : Iv(t)
        };
    _v({target: "Array", proto: !0, forced: !Yv || !Kv}, {
        concat: function (t) {
            var e, r, n, o, i, a = Cv(this), u = Nv(a, 0), c = 0;
            for (e = -1, n = arguments.length; e < n; e++) if (Wv(i = -1 === e ? a : arguments[e])) {
                if (c + (o = Fv(i)) > Gv) throw zv(Dv);
                for (r = 0; r < o; r++, c++) r in i && Mv(u, c, i[r])
            } else {
                if (c >= Gv) throw zv(Dv);
                Mv(u, c++, i)
            }
            return u.length = c, u
        }
    });
    var $v = "live", Vv = "https://api.tosspayments.com", Jv = "https://event.tosspayments.com", Qv = Ve,
        Xv = function () {
            var t = Qv(this), e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }, Zv = q, td = Jr.PROPER, ed = fr.exports, rd = Ve, nd = ft, od = _o, id = E, ad = Xv, ud = "toString",
        cd = RegExp.prototype, sd = cd.toString, fd = Zv(ad), ld = id((function () {
            return "/a/b" != sd.call({source: "a", flags: "b"})
        })), hd = td && sd.name != ud;
    (ld || hd) && ed(RegExp.prototype, ud, (function () {
        var t = rd(this), e = od(t.source), r = t.flags;
        return "/" + e + "/" + od(void 0 === r && nd(cd, t) && !("flags" in cd) ? fd(t) : r)
    }), {unsafe: !0});
    var pd = "@tosspayments/client-id";

    function vd() {
        try {
            var t = localStorage.getItem(pd);
            if (null != t) return t;
            var e = Math.random().toString(36).substring(2);
            return localStorage.setItem(pd, e), e
        } catch (t) {
            return "LOCAL_STORAGE_NOT_ACCESSIBLE"
        }
    }

    var dd = function (t) {
        !function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {writable: !1}), e && c(t, e)
        }(h, t);
        var e, r, n, o, f, l = (e = h, r = s(), function () {
            var t, n = u(e);
            if (r) {
                var o = u(this).constructor;
                t = Reflect.construct(n, arguments, o)
            } else t = n.apply(this, arguments);
            return v(this, t)
        });

        function h(t) {
            var e, r = t.code, n = t.message;
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, h), a(p(e = l.call(this, "[".concat(r, "]: ").concat(n))), "isTossPaymentsError", !0), e.message = n, e.code = r, e
        }

        return n = h, o && i(n.prototype, o), f && i(n, f), Object.defineProperty(n, "prototype", {writable: !1}), n
    }(l(Error));
    var yd = Qt, gd = Uo;

    function md(t, e, r) {
        return new Promise((function (n, o) {
            var i, a, u = new XMLHttpRequest;
            u.open(t, e, !0), u.withCredentials = null !== (i = null == r ? void 0 : r.credentials) && void 0 !== i && i, u.setRequestHeader("Content-Type", "application/json"), null != (null == r ? void 0 : r.timeout) && (u.timeout = r.timeout), Object.keys(null !== (a = null == r ? void 0 : r.headers) && void 0 !== a ? a : {}).forEach((function (t) {
                u.setRequestHeader(t, r.headers[t])
            })), "GET" === t ? u.send() : u.send(JSON.stringify(null == r ? void 0 : r.body)), u.addEventListener("error", (function (t) {
                o(t)
            })), u.addEventListener("load", (function () {
                if (u.status >= 400) {
                    var t = bd(u.responseText);
                    return (null == (e = t) ? void 0 : e.hasOwnProperty("message")) && (null == e ? void 0 : e.hasOwnProperty("code")) ? o(new dd(t)) : o(t)
                }
                var e;
                n(bd(u.response))
            }))
        }))
    }

    function bd(t) {
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(t)
        } catch (e) {
            return t
        }
    }

    function wd(t) {
        var r = "Basic ".concat(window.btoa("".concat(t, ":")));
        return {
            get: function (t) {
                return md("GET", "".concat(Vv).concat(t), {credentials: !0, headers: {Authorization: r}})
            }, post: function (t, n) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return md("POST", "".concat(Vv).concat(t), {
                    credentials: !0,
                    headers: e({Authorization: r}, o.headers),
                    body: n
                })
            }
        }
    }

    function Sd(t, e) {
        return wd(t).post("/v1/billing/authorizations", e)
    }

    so({
        target: "Object", stat: !0, forced: E((function () {
            gd(1)
        }))
    }, {
        keys: function (t) {
            return gd(yd(t))
        }
    });
    var Od = so, Ed = Q, Pd = rt, xd = Ip, jd = q([].join), Rd = Ed != Object, Ld = xd("join", ",");
    Od({target: "Array", proto: !0, forced: Rd || !Ld}, {
        join: function (t) {
            return jd(Pd(this), void 0 === t ? "," : t)
        }
    });
    var Td = ca.map;
    so({target: "Array", proto: !0, forced: !Kp("map")}, {
        map: function (t) {
            return Td(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var _d = P, Ad = q, kd = Uo, Id = rt, Ud = Ad(T.f), Cd = Ad([].push), Fd = function (t) {
        return function (e) {
            for (var r, n = Id(e), o = kd(n), i = o.length, a = 0, u = []; i > a;) r = o[a++], _d && !Ud(n, r) || Cd(u, t ? [r, n[r]] : n[r]);
            return u
        }
    }, Md = {entries: Fd(!0), values: Fd(!1)}.entries;
    so({target: "Object", stat: !0}, {
        entries: function (t) {
            return Md(t)
        }
    });
    var Nd, Bd, Hd = E, qd = S.RegExp, Gd = Hd((function () {
            var t = qd("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd")
        })), Dd = Gd || Hd((function () {
            return !qd("a", "y").sticky
        })), zd = {
            BROKEN_CARET: Gd || Hd((function () {
                var t = qd("^r", "gy");
                return t.lastIndex = 2, null != t.exec("str")
            })), MISSED_STICKY: Dd, UNSUPPORTED_Y: Gd
        }, Yd = E, Kd = S.RegExp, Wd = Yd((function () {
            var t = Kd(".", "s");
            return !(t.dotAll && t.exec("\n") && "s" === t.flags)
        })), $d = E, Vd = S.RegExp, Jd = $d((function () {
            var t = Vd("(?<a>b)", "g");
            return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
        })), Qd = L, Xd = q, Zd = _o, ty = Xv, ey = zd, ry = qt.exports, ny = ti, oy = zr.get, iy = Wd, ay = Jd,
        uy = ry("native-string-replace", String.prototype.replace), cy = RegExp.prototype.exec, sy = cy,
        fy = Xd("".charAt), ly = Xd("".indexOf), hy = Xd("".replace), py = Xd("".slice),
        vy = (Bd = /b*/g, Qd(cy, Nd = /a/, "a"), Qd(cy, Bd, "a"), 0 !== Nd.lastIndex || 0 !== Bd.lastIndex),
        dy = ey.BROKEN_CARET, yy = void 0 !== /()??/.exec("")[1];
    (vy || yy || dy || iy || ay) && (sy = function (t) {
        var e, r, n, o, i, a, u, c = this, s = oy(c), f = Zd(t), l = s.raw;
        if (l) return l.lastIndex = c.lastIndex, e = Qd(sy, l, f), c.lastIndex = l.lastIndex, e;
        var h = s.groups, p = dy && c.sticky, v = Qd(ty, c), d = c.source, y = 0, g = f;
        if (p && (v = hy(v, "y", ""), -1 === ly(v, "g") && (v += "g"), g = py(f, c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== fy(f, c.lastIndex - 1)) && (d = "(?: " + d + ")", g = " " + g, y++), r = new RegExp("^(?:" + d + ")", v)), yy && (r = new RegExp("^" + d + "$(?!\\s)", v)), vy && (n = c.lastIndex), o = Qd(cy, p ? r : c, g), p ? o ? (o.input = py(o.input, y), o[0] = py(o[0], y), o.index = c.lastIndex, c.lastIndex += o[0].length) : c.lastIndex = 0 : vy && o && (c.lastIndex = c.global ? o.index + o[0].length : n), yy && o && o.length > 1 && Qd(uy, o[0], r, (function () {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (o[i] = void 0)
        })), o && h) for (o.groups = a = ny(null), i = 0; i < h.length; i++) a[(u = h[i])[0]] = o[u[1]];
        return o
    });

    function gy() {
        return /MSIE|Trident/i.test(window.navigator.userAgent)
    }

    function my() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window) || !gy() && /android/i.test(window.navigator.userAgent)
    }

    so({target: "RegExp", proto: !0, forced: /./.exec !== sy}, {exec: sy});
    var by = "___tosspayments_iframe___", wy = "___tosspayments_dimmer___";

    function Sy(t, e) {
        var r = document.getElementById(e);
        if (null != r) return r;
        var n = document.createElement(t);
        return n.id = e, n
    }

    function Oy() {
        var t = Sy("form", "___tosspayments_form___");
        return t.style.border = "0", t.style.clip = "rect(0 0 0 0)", t.style.height = "1px", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.padding = "0", t.style.position = "absolute", t.style.whiteSpace = "nowrap", t.style.width = "1px", t
    }

    function Ey(t) {
        var r = t.id, n = void 0 === r ? by : r, o = t.styles, i = Sy("iframe", n);
        return i.name = n, Ry(i, e({border: "none"}, o)), i
    }

    function Py(t) {
        var r = t.width, n = t.height, o = t.id, i = void 0 === o ? by : o, a = t.styles;
        return Ey({
            id: i,
            styles: e({
                position: "absolute",
                border: "none",
                top: "50%",
                left: "50%",
                width: "".concat(r, "px"),
                height: "".concat(n, "px"),
                marginLeft: "-".concat(r / 2, "px"),
                marginTop: "-".concat(n / 2, "px"),
                backgroundColor: "#ffffff"
            }, a)
        })
    }

    function xy() {
        return Py({width: 720, height: 645})
    }

    function jy() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.styles, n = Sy("div", wy);
        return Ry(n, e({
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "9999999",
            transform: "translateZ(0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            margin: "0",
            padding: "0"
        }, r)), n
    }

    function Ry(t, e) {
        for (var r in e) t.style[r] = e[r]
    }

    var Ly = ca.filter;
    so({target: "Array", proto: !0, forced: !Kp("filter")}, {
        filter: function (t) {
            return Ly(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ty = [];

    function _y(t) {
        var e = t.data;
        if (function (t) {
            return !0 === (null == t ? void 0 : t.tosspayments)
        }(e)) {
            var r, n = function (t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = g(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0, o = function () {
                        };
                        return {
                            s: o, n: function () {
                                return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                            }, e: function (t) {
                                throw t
                            }, f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0, u = !1;
                return {
                    s: function () {
                        r = r.call(t)
                    }, n: function () {
                        var t = r.next();
                        return a = t.done, t
                    }, e: function (t) {
                        u = !0, i = t
                    }, f: function () {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }(Ty);
            try {
                for (n.s(); !(r = n.n()).done;) {
                    (0, r.value)({target: e.window, type: e.type, params: e.params})
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
        }
    }

    var Ay = {
        add: function (t) {
            1 === (Ty = [].concat(y(Ty), [t])).length && window.addEventListener("message", _y)
        }, remove: function (t) {
            0 === (Ty = Ty.filter((function (e) {
                return e !== t
            }))).length && window.removeEventListener("message", _y)
        }, consume: function () {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {
                return !0
            };
            return new Promise((function (r) {
                t.add((function n(o) {
                    e(o) && (r(o), t.remove(n))
                }))
            }))
        }, clear: function () {
            Ty = [], window.removeEventListener("message", _y)
        }
    };

    function ky(t, e) {
        return Iy.apply(this, arguments)
    }

    function Iy() {
        return Iy = o(regeneratorRuntime.mark((function t(e, r) {
            var n, o, i, a, u, c, s, f, l, h = arguments;
            return regeneratorRuntime.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (n = h.length > 2 && void 0 !== h[2] ? h[2] : {}, o = n.dimmer, i = void 0 === o ? jy() : o, a = n.iframe, u = void 0 === a ? Py({
                            width: 650,
                            height: 650
                        }) : a, c = n.target, s = void 0 === c ? my() ? "_self" : u.name : c, f = Oy(), u.title = "토스페이먼츠 전자결제", f.action = "".concat(Vv).concat(e), f.method = "post", f.innerHTML = Object.entries(r).map((function (t) {
                            var e = d(t, 2), r = e[0], n = e[1];
                            return '<input name="'.concat(r, '" value="').concat(n, '" />')
                        })).join("\n"), "_self" !== s) {
                            t.next = 12;
                            break
                        }
                        return f.target = "_self", document.body.appendChild(f), f.submit(), t.abrupt("return");
                    case 12:
                        return f.target = u.name, i.appendChild(f), i.appendChild(u), document.body.appendChild(i), Ay.consume((function (t) {
                            var e = t.target, r = t.type;
                            return "LEGACY" === e && "initialize" === r
                        })).then((function () {
                            u.style.borderRadius = "20px"
                        })), l = Ay.consume((function (t) {
                            var e = t.target, r = t.type;
                            return "LEGACY" === e && "cancel" === r
                        })), f.submit(), t.next = 21, l;
                    case 21:
                        throw document.body.removeChild(i), Tv.setReady(), new dd({
                            code: "USER_CANCEL",
                            message: "취소되었습니다"
                        });
                    case 24:
                    case"end":
                        return t.stop()
                }
            }), t)
        }))), Iy.apply(this, arguments)
    }

    function Uy() {
        return (Uy = o(regeneratorRuntime.mark((function t(r, n, o) {
            var i, a;
            return regeneratorRuntime.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (Tv.isReady) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        return Tv.setOnPayment(), t.next = 5, Sd(r, e({payMethod: n}, o));
                    case 5:
                        return i = t.sent, a = i.authKey, t.abrupt("return", ky("/proxy/pages/billing/load", {
                            clientKey: r,
                            authKey: a
                        }));
                    case 8:
                    case"end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }

    var Cy = E, Fy = ye("iterator"), My = !Cy((function () {
            var t = new URL("b?a=1&b=2&c=3", "http://a"), e = t.searchParams, r = "";
            return t.pathname = "c%20d", e.forEach((function (t, n) {
                e.delete("b"), r += n + t
            })), !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[Fy] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host
        })), Ny = P, By = q, Hy = L, qy = E, Gy = Uo, Dy = Cn, zy = T, Yy = Qt, Ky = Q, Wy = Object.assign,
        $y = Object.defineProperty, Vy = By([].concat), Jy = !Wy || qy((function () {
            if (Ny && 1 !== Wy({b: 1}, Wy($y({}, "a", {
                enumerable: !0, get: function () {
                    $y(this, "b", {value: 3, enumerable: !1})
                }
            }), {b: 2})).b) return !0;
            var t = {}, e = {}, r = Symbol(), n = "abcdefghijklmnopqrst";
            return t[r] = 7, n.split("").forEach((function (t) {
                e[t] = t
            })), 7 != Wy({}, t)[r] || Gy(Wy({}, e)).join("") != n
        })) ? function (t, e) {
            for (var r = Yy(t), n = arguments.length, o = 1, i = Dy.f, a = zy.f; n > o;) for (var u, c = Ky(arguments[o++]), s = i ? Vy(Gy(c), i(c)) : Gy(c), f = s.length, l = 0; f > l;) u = s[l++], Ny && !Hy(a, c, u) || (r[u] = c[u]);
            return r
        } : Wy, Qy = Ve, Xy = Ff, Zy = ki, tg = L, eg = Qt, rg = function (t, e, r, n) {
            try {
                return n ? e(Qy(r)[0], r[1]) : e(r)
            } catch (e) {
                Xy(t, "throw", e)
            }
        }, ng = wf, og = Ki, ig = wn, ag = ii, ug = kf, cg = xf, sg = S.Array, fg = q, lg = 2147483647, hg = /[^\0-\u007E]/,
        pg = /[.\u3002\uFF0E\uFF61]/g, vg = "Overflow: input needs wider integers to process", dg = S.RangeError,
        yg = fg(pg.exec), gg = Math.floor, mg = String.fromCharCode, bg = fg("".charCodeAt), wg = fg([].join),
        Sg = fg([].push), Og = fg("".replace), Eg = fg("".split), Pg = fg("".toLowerCase), xg = function (t) {
            return t + 22 + 75 * (t < 26)
        }, jg = function (t, e, r) {
            var n = 0;
            for (t = r ? gg(t / 700) : t >> 1, t += gg(t / e); t > 455;) t = gg(t / 35), n += 36;
            return gg(n + 36 * t / (t + 38))
        }, Rg = function (t) {
            var e = [];
            t = function (t) {
                for (var e = [], r = 0, n = t.length; r < n;) {
                    var o = bg(t, r++);
                    if (o >= 55296 && o <= 56319 && r < n) {
                        var i = bg(t, r++);
                        56320 == (64512 & i) ? Sg(e, ((1023 & o) << 10) + (1023 & i) + 65536) : (Sg(e, o), r--)
                    } else Sg(e, o)
                }
                return e
            }(t);
            var r, n, o = t.length, i = 128, a = 0, u = 72;
            for (r = 0; r < t.length; r++) (n = t[r]) < 128 && Sg(e, mg(n));
            var c = e.length, s = c;
            for (c && Sg(e, "-"); s < o;) {
                var f = lg;
                for (r = 0; r < t.length; r++) (n = t[r]) >= i && n < f && (f = n);
                var l = s + 1;
                if (f - i > gg((lg - a) / l)) throw dg(vg);
                for (a += (f - i) * l, i = f, r = 0; r < t.length; r++) {
                    if ((n = t[r]) < i && ++a > lg) throw dg(vg);
                    if (n == i) {
                        for (var h = a, p = 36; ;) {
                            var v = p <= u ? 1 : p >= u + 26 ? 26 : p - u;
                            if (h < v) break;
                            var d = h - v, y = 36 - v;
                            Sg(e, mg(xg(v + d % y))), h = gg(d / y), p += 36
                        }
                        Sg(e, mg(xg(h))), u = jg(a, l, s == c), a = 0, s++
                    }
                }
                a++, i++
            }
            return wg(e, "")
        }, Lg = li, Tg = Math.floor, _g = function (t, e) {
            var r = t.length, n = Tg(r / 2);
            return r < 8 ? Ag(t, e) : kg(t, _g(Lg(t, 0, n), e), _g(Lg(t, n), e), e)
        }, Ag = function (t, e) {
            for (var r, n, o = t.length, i = 1; i < o;) {
                for (n = i, r = t[i]; n && e(t[n - 1], r) > 0;) t[n] = t[--n];
                n !== i++ && (t[n] = r)
            }
            return t
        }, kg = function (t, e, r, n) {
            for (var o = e.length, i = r.length, a = 0, u = 0; a < o || u < i;) t[a + u] = a < o && u < i ? n(e[a], r[u]) <= 0 ? e[a++] : r[u++] : a < o ? e[a++] : r[u++];
            return t
        }, Ig = _g, Ug = so, Cg = S, Fg = st, Mg = L, Ng = q, Bg = My, Hg = fr.exports, qg = sf, Gg = Li, Dg = _c, zg = zr,
        Yg = yf, Kg = nt, Wg = te, $g = ki, Vg = Ro, Jg = Ve, Qg = it, Xg = _o, Zg = ti, tm = C, em = kf, rm = xf,
        nm = ll, om = Ig, im = ye("iterator"), am = "URLSearchParams", um = "URLSearchParamsIterator", cm = zg.set,
        sm = zg.getterFor(am), fm = zg.getterFor(um), lm = Fg("fetch"), hm = Fg("Request"), pm = Fg("Headers"),
        vm = hm && hm.prototype, dm = pm && pm.prototype, ym = Cg.RegExp, gm = Cg.TypeError, mm = Cg.decodeURIComponent,
        bm = Cg.encodeURIComponent, wm = Ng("".charAt), Sm = Ng([].join), Om = Ng([].push), Em = Ng("".replace),
        Pm = Ng([].shift), xm = Ng([].splice), jm = Ng("".split), Rm = Ng("".slice), Lm = /\+/g, Tm = Array(4),
        _m = function (t) {
            return Tm[t - 1] || (Tm[t - 1] = ym("((?:%[\\da-f]{2}){" + t + "})", "gi"))
        }, Am = function (t) {
            try {
                return mm(t)
            } catch (e) {
                return t
            }
        }, km = function (t) {
            var e = Em(t, Lm, " "), r = 4;
            try {
                return mm(e)
            } catch (t) {
                for (; r;) e = Em(e, _m(r--), Am);
                return e
            }
        }, Im = /[!'()~]|%20/g, Um = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
        Cm = function (t) {
            return Um[t]
        }, Fm = function (t) {
            return Em(bm(t), Im, Cm)
        }, Mm = Dg((function (t, e) {
            cm(this, {type: um, iterator: em(sm(t).entries), kind: e})
        }), "Iterator", (function () {
            var t = fm(this), e = t.kind, r = t.iterator.next(), n = r.value;
            return r.done || (r.value = "keys" === e ? n.key : "values" === e ? n.value : [n.key, n.value]), r
        }), !0), Nm = function (t) {
            this.entries = [], this.url = null, void 0 !== t && (Qg(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === wm(t, 0) ? Rm(t, 1) : t : Xg(t)))
        };
    Nm.prototype = {
        type: am, bindURL: function (t) {
            this.url = t, this.update()
        }, parseObject: function (t) {
            var e, r, n, o, i, a, u, c = rm(t);
            if (c) for (r = (e = em(t, c)).next; !(n = Mg(r, e)).done;) {
                if (i = (o = em(Jg(n.value))).next, (a = Mg(i, o)).done || (u = Mg(i, o)).done || !Mg(i, o).done) throw gm("Expected sequence with length 2");
                Om(this.entries, {key: Xg(a.value), value: Xg(u.value)})
            } else for (var s in t) Wg(t, s) && Om(this.entries, {key: s, value: Xg(t[s])})
        }, parseQuery: function (t) {
            if (t) for (var e, r, n = jm(t, "&"), o = 0; o < n.length;) (e = n[o++]).length && (r = jm(e, "="), Om(this.entries, {
                key: km(Pm(r)),
                value: km(Sm(r, "="))
            }))
        }, serialize: function () {
            for (var t, e = this.entries, r = [], n = 0; n < e.length;) t = e[n++], Om(r, Fm(t.key) + "=" + Fm(t.value));
            return Sm(r, "&")
        }, update: function () {
            this.entries.length = 0, this.parseQuery(this.url.query)
        }, updateURL: function () {
            this.url && this.url.update()
        }
    };
    var Bm = function () {
        Yg(this, Hm);
        var t = arguments.length > 0 ? arguments[0] : void 0;
        cm(this, new Nm(t))
    }, Hm = Bm.prototype;
    if (qg(Hm, {
        append: function (t, e) {
            nm(arguments.length, 2);
            var r = sm(this);
            Om(r.entries, {key: Xg(t), value: Xg(e)}), r.updateURL()
        }, delete: function (t) {
            nm(arguments.length, 1);
            for (var e = sm(this), r = e.entries, n = Xg(t), o = 0; o < r.length;) r[o].key === n ? xm(r, o, 1) : o++;
            e.updateURL()
        }, get: function (t) {
            nm(arguments.length, 1);
            for (var e = sm(this).entries, r = Xg(t), n = 0; n < e.length; n++) if (e[n].key === r) return e[n].value;
            return null
        }, getAll: function (t) {
            nm(arguments.length, 1);
            for (var e = sm(this).entries, r = Xg(t), n = [], o = 0; o < e.length; o++) e[o].key === r && Om(n, e[o].value);
            return n
        }, has: function (t) {
            nm(arguments.length, 1);
            for (var e = sm(this).entries, r = Xg(t), n = 0; n < e.length;) if (e[n++].key === r) return !0;
            return !1
        }, set: function (t, e) {
            nm(arguments.length, 1);
            for (var r, n = sm(this), o = n.entries, i = !1, a = Xg(t), u = Xg(e), c = 0; c < o.length; c++) (r = o[c]).key === a && (i ? xm(o, c--, 1) : (i = !0, r.value = u));
            i || Om(o, {key: a, value: u}), n.updateURL()
        }, sort: function () {
            var t = sm(this);
            om(t.entries, (function (t, e) {
                return t.key > e.key ? 1 : -1
            })), t.updateURL()
        }, forEach: function (t) {
            for (var e, r = sm(this).entries, n = $g(t, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < r.length;) n((e = r[o++]).value, e.key, this)
        }, keys: function () {
            return new Mm(this, "keys")
        }, values: function () {
            return new Mm(this, "values")
        }, entries: function () {
            return new Mm(this, "entries")
        }
    }, {enumerable: !0}), Hg(Hm, im, Hm.entries, {name: "entries"}), Hg(Hm, "toString", (function () {
        return sm(this).serialize()
    }), {enumerable: !0}), Gg(Bm, am), Ug({global: !0, forced: !Bg}, {URLSearchParams: Bm}), !Bg && Kg(pm)) {
        var qm = Ng(dm.has), Gm = Ng(dm.set), Dm = function (t) {
            if (Qg(t)) {
                var e, r = t.body;
                if (Vg(r) === am) return e = t.headers ? new pm(t.headers) : new pm, qm(e, "content-type") || Gm(e, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), Zg(t, {
                    body: tm(0, Xg(r)),
                    headers: tm(0, e)
                })
            }
            return t
        };
        if (Kg(lm) && Ug({global: !0, enumerable: !0, forced: !0}, {
            fetch: function (t) {
                return lm(t, arguments.length > 1 ? Dm(arguments[1]) : {})
            }
        }), Kg(hm)) {
            var zm = function (t) {
                return Yg(this, vm), new hm(t, arguments.length > 1 ? Dm(arguments[1]) : {})
            };
            vm.constructor = zm, zm.prototype = vm, Ug({global: !0, forced: !0}, {Request: zm})
        }
    }
    var Ym, Km = {URLSearchParams: Bm, getState: sm}, Wm = so, $m = P, Vm = My, Jm = S, Qm = ki, Xm = q, Zm = Ao.f,
        tb = fr.exports, eb = yf, rb = te, nb = Jy, ob = function (t) {
            var e = eg(t), r = og(this), n = arguments.length, o = n > 1 ? arguments[1] : void 0, i = void 0 !== o;
            i && (o = Zy(o, n > 2 ? arguments[2] : void 0));
            var a, u, c, s, f, l, h = cg(e), p = 0;
            if (!h || this == sg && ng(h)) for (a = ig(e), u = r ? new this(a) : sg(a); a > p; p++) l = i ? o(e[p], p) : e[p], ag(u, p, l); else for (f = (s = ug(e, h)).next, u = r ? new this : []; !(c = tg(f, s)).done; p++) l = i ? rg(s, o, [c.value, p], !0) : c.value, ag(u, p, l);
            return u.length = p, u
        }, ib = li, ab = js.codeAt, ub = function (t) {
            var e, r, n = [], o = Eg(Og(Pg(t), pg, "."), ".");
            for (e = 0; e < o.length; e++) r = o[e], Sg(n, yg(hg, r) ? "xn--" + Rg(r) : r);
            return wg(n, ".")
        }, cb = _o, sb = Li, fb = ll, lb = Km, hb = zr, pb = hb.set, vb = hb.getterFor("URL"), db = lb.URLSearchParams,
        yb = lb.getState, gb = Jm.URL, mb = Jm.TypeError, bb = Jm.parseInt, wb = Math.floor, Sb = Math.pow,
        Ob = Xm("".charAt), Eb = Xm(/./.exec), Pb = Xm([].join), xb = Xm(1..toString), jb = Xm([].pop),
        Rb = Xm([].push), Lb = Xm("".replace), Tb = Xm([].shift), _b = Xm("".split), Ab = Xm("".slice),
        kb = Xm("".toLowerCase), Ib = Xm([].unshift), Ub = "Invalid scheme", Cb = "Invalid host", Fb = "Invalid port",
        Mb = /[a-z]/i, Nb = /[\d+-.a-z]/i, Bb = /\d/, Hb = /^0x/i, qb = /^[0-7]+$/, Gb = /^\d+$/, Db = /^[\da-f]+$/i,
        zb = /[\0\t\n\r #%/:<>?@[\\\]^|]/, Yb = /[\0\t\n\r #/:<>?@[\\\]^|]/,
        Kb = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, Wb = /[\t\n\r]/g, $b = function (t) {
            var e, r, n, o;
            if ("number" == typeof t) {
                for (e = [], r = 0; r < 4; r++) Ib(e, t % 256), t = wb(t / 256);
                return Pb(e, ".")
            }
            if ("object" == typeof t) {
                for (e = "", n = function (t) {
                    for (var e = null, r = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > r && (e = n, r = o), n = null, o = 0) : (null === n && (n = i), ++o);
                    return o > r && (e = n, r = o), e
                }(t), r = 0; r < 8; r++) o && 0 === t[r] || (o && (o = !1), n === r ? (e += r ? ":" : "::", o = !0) : (e += xb(t[r], 16), r < 7 && (e += ":")));
                return "[" + e + "]"
            }
            return t
        }, Vb = {}, Jb = nb({}, Vb, {" ": 1, '"': 1, "<": 1, ">": 1, "`": 1}),
        Qb = nb({}, Jb, {"#": 1, "?": 1, "{": 1, "}": 1}),
        Xb = nb({}, Qb, {"/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1}),
        Zb = function (t, e) {
            var r = ab(t, 0);
            return r > 32 && r < 127 && !rb(e, t) ? t : encodeURIComponent(t)
        }, tw = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443}, ew = function (t, e) {
            var r;
            return 2 == t.length && Eb(Mb, Ob(t, 0)) && (":" == (r = Ob(t, 1)) || !e && "|" == r)
        }, rw = function (t) {
            var e;
            return t.length > 1 && ew(Ab(t, 0, 2)) && (2 == t.length || "/" === (e = Ob(t, 2)) || "\\" === e || "?" === e || "#" === e)
        }, nw = function (t) {
            return "." === t || "%2e" === kb(t)
        }, ow = {}, iw = {}, aw = {}, uw = {}, cw = {}, sw = {}, fw = {}, lw = {}, hw = {}, pw = {}, vw = {}, dw = {},
        yw = {}, gw = {}, mw = {}, bw = {}, ww = {}, Sw = {}, Ow = {}, Ew = {}, Pw = {}, xw = function (t, e, r) {
            var n, o, i, a = cb(t);
            if (e) {
                if (o = this.parse(a)) throw mb(o);
                this.searchParams = null
            } else {
                if (void 0 !== r && (n = new xw(r, !0)), o = this.parse(a, null, n)) throw mb(o);
                (i = yb(new db)).bindURL(this), this.searchParams = i
            }
        };
    xw.prototype = {
        type: "URL", parse: function (t, e, r) {
            var n, o, i, a, u, c = this, s = e || ow, f = 0, l = "", h = !1, p = !1, v = !1;
            for (t = cb(t), e || (c.scheme = "", c.username = "", c.password = "", c.host = null, c.port = null, c.path = [], c.query = null, c.fragment = null, c.cannotBeABaseURL = !1, t = Lb(t, Kb, "")), t = Lb(t, Wb, ""), n = ob(t); f <= n.length;) {
                switch (o = n[f], s) {
                    case ow:
                        if (!o || !Eb(Mb, o)) {
                            if (e) return Ub;
                            s = aw;
                            continue
                        }
                        l += kb(o), s = iw;
                        break;
                    case iw:
                        if (o && (Eb(Nb, o) || "+" == o || "-" == o || "." == o)) l += kb(o); else {
                            if (":" != o) {
                                if (e) return Ub;
                                l = "", s = aw, f = 0;
                                continue
                            }
                            if (e && (c.isSpecial() != rb(tw, l) || "file" == l && (c.includesCredentials() || null !== c.port) || "file" == c.scheme && !c.host)) return;
                            if (c.scheme = l, e) return void (c.isSpecial() && tw[c.scheme] == c.port && (c.port = null));
                            l = "", "file" == c.scheme ? s = gw : c.isSpecial() && r && r.scheme == c.scheme ? s = uw : c.isSpecial() ? s = lw : "/" == n[f + 1] ? (s = cw, f++) : (c.cannotBeABaseURL = !0, Rb(c.path, ""), s = Ow)
                        }
                        break;
                    case aw:
                        if (!r || r.cannotBeABaseURL && "#" != o) return Ub;
                        if (r.cannotBeABaseURL && "#" == o) {
                            c.scheme = r.scheme, c.path = ib(r.path), c.query = r.query, c.fragment = "", c.cannotBeABaseURL = !0, s = Pw;
                            break
                        }
                        s = "file" == r.scheme ? gw : sw;
                        continue;
                    case uw:
                        if ("/" != o || "/" != n[f + 1]) {
                            s = sw;
                            continue
                        }
                        s = hw, f++;
                        break;
                    case cw:
                        if ("/" == o) {
                            s = pw;
                            break
                        }
                        s = Sw;
                        continue;
                    case sw:
                        if (c.scheme = r.scheme, o == Ym) c.username = r.username, c.password = r.password, c.host = r.host, c.port = r.port, c.path = ib(r.path), c.query = r.query; else if ("/" == o || "\\" == o && c.isSpecial()) s = fw; else if ("?" == o) c.username = r.username, c.password = r.password, c.host = r.host, c.port = r.port, c.path = ib(r.path), c.query = "", s = Ew; else {
                            if ("#" != o) {
                                c.username = r.username, c.password = r.password, c.host = r.host, c.port = r.port, c.path = ib(r.path), c.path.length--, s = Sw;
                                continue
                            }
                            c.username = r.username, c.password = r.password, c.host = r.host, c.port = r.port, c.path = ib(r.path), c.query = r.query, c.fragment = "", s = Pw
                        }
                        break;
                    case fw:
                        if (!c.isSpecial() || "/" != o && "\\" != o) {
                            if ("/" != o) {
                                c.username = r.username, c.password = r.password, c.host = r.host, c.port = r.port, s = Sw;
                                continue
                            }
                            s = pw
                        } else s = hw;
                        break;
                    case lw:
                        if (s = hw, "/" != o || "/" != Ob(l, f + 1)) continue;
                        f++;
                        break;
                    case hw:
                        if ("/" != o && "\\" != o) {
                            s = pw;
                            continue
                        }
                        break;
                    case pw:
                        if ("@" == o) {
                            h && (l = "%40" + l), h = !0, i = ob(l);
                            for (var d = 0; d < i.length; d++) {
                                var y = i[d];
                                if (":" != y || v) {
                                    var g = Zb(y, Xb);
                                    v ? c.password += g : c.username += g
                                } else v = !0
                            }
                            l = ""
                        } else if (o == Ym || "/" == o || "?" == o || "#" == o || "\\" == o && c.isSpecial()) {
                            if (h && "" == l) return "Invalid authority";
                            f -= ob(l).length + 1, l = "", s = vw
                        } else l += o;
                        break;
                    case vw:
                    case dw:
                        if (e && "file" == c.scheme) {
                            s = bw;
                            continue
                        }
                        if (":" != o || p) {
                            if (o == Ym || "/" == o || "?" == o || "#" == o || "\\" == o && c.isSpecial()) {
                                if (c.isSpecial() && "" == l) return Cb;
                                if (e && "" == l && (c.includesCredentials() || null !== c.port)) return;
                                if (a = c.parseHost(l)) return a;
                                if (l = "", s = ww, e) return;
                                continue
                            }
                            "[" == o ? p = !0 : "]" == o && (p = !1), l += o
                        } else {
                            if ("" == l) return Cb;
                            if (a = c.parseHost(l)) return a;
                            if (l = "", s = yw, e == dw) return
                        }
                        break;
                    case yw:
                        if (!Eb(Bb, o)) {
                            if (o == Ym || "/" == o || "?" == o || "#" == o || "\\" == o && c.isSpecial() || e) {
                                if ("" != l) {
                                    var m = bb(l, 10);
                                    if (m > 65535) return Fb;
                                    c.port = c.isSpecial() && m === tw[c.scheme] ? null : m, l = ""
                                }
                                if (e) return;
                                s = ww;
                                continue
                            }
                            return Fb
                        }
                        l += o;
                        break;
                    case gw:
                        if (c.scheme = "file", "/" == o || "\\" == o) s = mw; else {
                            if (!r || "file" != r.scheme) {
                                s = Sw;
                                continue
                            }
                            if (o == Ym) c.host = r.host, c.path = ib(r.path), c.query = r.query; else if ("?" == o) c.host = r.host, c.path = ib(r.path), c.query = "", s = Ew; else {
                                if ("#" != o) {
                                    rw(Pb(ib(n, f), "")) || (c.host = r.host, c.path = ib(r.path), c.shortenPath()), s = Sw;
                                    continue
                                }
                                c.host = r.host, c.path = ib(r.path), c.query = r.query, c.fragment = "", s = Pw
                            }
                        }
                        break;
                    case mw:
                        if ("/" == o || "\\" == o) {
                            s = bw;
                            break
                        }
                        r && "file" == r.scheme && !rw(Pb(ib(n, f), "")) && (ew(r.path[0], !0) ? Rb(c.path, r.path[0]) : c.host = r.host), s = Sw;
                        continue;
                    case bw:
                        if (o == Ym || "/" == o || "\\" == o || "?" == o || "#" == o) {
                            if (!e && ew(l)) s = Sw; else if ("" == l) {
                                if (c.host = "", e) return;
                                s = ww
                            } else {
                                if (a = c.parseHost(l)) return a;
                                if ("localhost" == c.host && (c.host = ""), e) return;
                                l = "", s = ww
                            }
                            continue
                        }
                        l += o;
                        break;
                    case ww:
                        if (c.isSpecial()) {
                            if (s = Sw, "/" != o && "\\" != o) continue
                        } else if (e || "?" != o) if (e || "#" != o) {
                            if (o != Ym && (s = Sw, "/" != o)) continue
                        } else c.fragment = "", s = Pw; else c.query = "", s = Ew;
                        break;
                    case Sw:
                        if (o == Ym || "/" == o || "\\" == o && c.isSpecial() || !e && ("?" == o || "#" == o)) {
                            if (".." === (u = kb(u = l)) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (c.shortenPath(), "/" == o || "\\" == o && c.isSpecial() || Rb(c.path, "")) : nw(l) ? "/" == o || "\\" == o && c.isSpecial() || Rb(c.path, "") : ("file" == c.scheme && !c.path.length && ew(l) && (c.host && (c.host = ""), l = Ob(l, 0) + ":"), Rb(c.path, l)), l = "", "file" == c.scheme && (o == Ym || "?" == o || "#" == o)) for (; c.path.length > 1 && "" === c.path[0];) Tb(c.path);
                            "?" == o ? (c.query = "", s = Ew) : "#" == o && (c.fragment = "", s = Pw)
                        } else l += Zb(o, Qb);
                        break;
                    case Ow:
                        "?" == o ? (c.query = "", s = Ew) : "#" == o ? (c.fragment = "", s = Pw) : o != Ym && (c.path[0] += Zb(o, Vb));
                        break;
                    case Ew:
                        e || "#" != o ? o != Ym && ("'" == o && c.isSpecial() ? c.query += "%27" : c.query += "#" == o ? "%23" : Zb(o, Vb)) : (c.fragment = "", s = Pw);
                        break;
                    case Pw:
                        o != Ym && (c.fragment += Zb(o, Jb))
                }
                f++
            }
        }, parseHost: function (t) {
            var e, r, n;
            if ("[" == Ob(t, 0)) {
                if ("]" != Ob(t, t.length - 1)) return Cb;
                if (e = function (t) {
                    var e, r, n, o, i, a, u, c = [0, 0, 0, 0, 0, 0, 0, 0], s = 0, f = null, l = 0, h = function () {
                        return Ob(t, l)
                    };
                    if (":" == h()) {
                        if (":" != Ob(t, 1)) return;
                        l += 2, f = ++s
                    }
                    for (; h();) {
                        if (8 == s) return;
                        if (":" != h()) {
                            for (e = r = 0; r < 4 && Eb(Db, h());) e = 16 * e + bb(h(), 16), l++, r++;
                            if ("." == h()) {
                                if (0 == r) return;
                                if (l -= r, s > 6) return;
                                for (n = 0; h();) {
                                    if (o = null, n > 0) {
                                        if (!("." == h() && n < 4)) return;
                                        l++
                                    }
                                    if (!Eb(Bb, h())) return;
                                    for (; Eb(Bb, h());) {
                                        if (i = bb(h(), 10), null === o) o = i; else {
                                            if (0 == o) return;
                                            o = 10 * o + i
                                        }
                                        if (o > 255) return;
                                        l++
                                    }
                                    c[s] = 256 * c[s] + o, 2 != ++n && 4 != n || s++
                                }
                                if (4 != n) return;
                                break
                            }
                            if (":" == h()) {
                                if (l++, !h()) return
                            } else if (h()) return;
                            c[s++] = e
                        } else {
                            if (null !== f) return;
                            l++, f = ++s
                        }
                    }
                    if (null !== f) for (a = s - f, s = 7; 0 != s && a > 0;) u = c[s], c[s--] = c[f + a - 1], c[f + --a] = u; else if (8 != s) return;
                    return c
                }(Ab(t, 1, -1)), !e) return Cb;
                this.host = e
            } else if (this.isSpecial()) {
                if (t = ub(t), Eb(zb, t)) return Cb;
                if (e = function (t) {
                    var e, r, n, o, i, a, u, c = _b(t, ".");
                    if (c.length && "" == c[c.length - 1] && c.length--, (e = c.length) > 4) return t;
                    for (r = [], n = 0; n < e; n++) {
                        if ("" == (o = c[n])) return t;
                        if (i = 10, o.length > 1 && "0" == Ob(o, 0) && (i = Eb(Hb, o) ? 16 : 8, o = Ab(o, 8 == i ? 1 : 2)), "" === o) a = 0; else {
                            if (!Eb(10 == i ? Gb : 8 == i ? qb : Db, o)) return t;
                            a = bb(o, i)
                        }
                        Rb(r, a)
                    }
                    for (n = 0; n < e; n++) if (a = r[n], n == e - 1) {
                        if (a >= Sb(256, 5 - e)) return null
                    } else if (a > 255) return null;
                    for (u = jb(r), n = 0; n < r.length; n++) u += r[n] * Sb(256, 3 - n);
                    return u
                }(t), null === e) return Cb;
                this.host = e
            } else {
                if (Eb(Yb, t)) return Cb;
                for (e = "", r = ob(t), n = 0; n < r.length; n++) e += Zb(r[n], Vb);
                this.host = e
            }
        }, cannotHaveUsernamePasswordPort: function () {
            return !this.host || this.cannotBeABaseURL || "file" == this.scheme
        }, includesCredentials: function () {
            return "" != this.username || "" != this.password
        }, isSpecial: function () {
            return rb(tw, this.scheme)
        }, shortenPath: function () {
            var t = this.path, e = t.length;
            !e || "file" == this.scheme && 1 == e && ew(t[0], !0) || t.length--
        }, serialize: function () {
            var t = this, e = t.scheme, r = t.username, n = t.password, o = t.host, i = t.port, a = t.path, u = t.query,
                c = t.fragment, s = e + ":";
            return null !== o ? (s += "//", t.includesCredentials() && (s += r + (n ? ":" + n : "") + "@"), s += $b(o), null !== i && (s += ":" + i)) : "file" == e && (s += "//"), s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + Pb(a, "/") : "", null !== u && (s += "?" + u), null !== c && (s += "#" + c), s
        }, setHref: function (t) {
            var e = this.parse(t);
            if (e) throw mb(e);
            this.searchParams.update()
        }, getOrigin: function () {
            var t = this.scheme, e = this.port;
            if ("blob" == t) try {
                return new jw(t.path[0]).origin
            } catch (t) {
                return "null"
            }
            return "file" != t && this.isSpecial() ? t + "://" + $b(this.host) + (null !== e ? ":" + e : "") : "null"
        }, getProtocol: function () {
            return this.scheme + ":"
        }, setProtocol: function (t) {
            this.parse(cb(t) + ":", ow)
        }, getUsername: function () {
            return this.username
        }, setUsername: function (t) {
            var e = ob(cb(t));
            if (!this.cannotHaveUsernamePasswordPort()) {
                this.username = "";
                for (var r = 0; r < e.length; r++) this.username += Zb(e[r], Xb)
            }
        }, getPassword: function () {
            return this.password
        }, setPassword: function (t) {
            var e = ob(cb(t));
            if (!this.cannotHaveUsernamePasswordPort()) {
                this.password = "";
                for (var r = 0; r < e.length; r++) this.password += Zb(e[r], Xb)
            }
        }, getHost: function () {
            var t = this.host, e = this.port;
            return null === t ? "" : null === e ? $b(t) : $b(t) + ":" + e
        }, setHost: function (t) {
            this.cannotBeABaseURL || this.parse(t, vw)
        }, getHostname: function () {
            var t = this.host;
            return null === t ? "" : $b(t)
        }, setHostname: function (t) {
            this.cannotBeABaseURL || this.parse(t, dw)
        }, getPort: function () {
            var t = this.port;
            return null === t ? "" : cb(t)
        }, setPort: function (t) {
            this.cannotHaveUsernamePasswordPort() || ("" == (t = cb(t)) ? this.port = null : this.parse(t, yw))
        }, getPathname: function () {
            var t = this.path;
            return this.cannotBeABaseURL ? t[0] : t.length ? "/" + Pb(t, "/") : ""
        }, setPathname: function (t) {
            this.cannotBeABaseURL || (this.path = [], this.parse(t, ww))
        }, getSearch: function () {
            var t = this.query;
            return t ? "?" + t : ""
        }, setSearch: function (t) {
            "" == (t = cb(t)) ? this.query = null : ("?" == Ob(t, 0) && (t = Ab(t, 1)), this.query = "", this.parse(t, Ew)), this.searchParams.update()
        }, getSearchParams: function () {
            return this.searchParams.facade
        }, getHash: function () {
            var t = this.fragment;
            return t ? "#" + t : ""
        }, setHash: function (t) {
            "" != (t = cb(t)) ? ("#" == Ob(t, 0) && (t = Ab(t, 1)), this.fragment = "", this.parse(t, Pw)) : this.fragment = null
        }, update: function () {
            this.query = this.searchParams.serialize() || null
        }
    };
    var jw = function (t) {
        var e = eb(this, Rw), r = fb(arguments.length, 1) > 1 ? arguments[1] : void 0, n = pb(e, new xw(t, !1, r));
        $m || (e.href = n.serialize(), e.origin = n.getOrigin(), e.protocol = n.getProtocol(), e.username = n.getUsername(), e.password = n.getPassword(), e.host = n.getHost(), e.hostname = n.getHostname(), e.port = n.getPort(), e.pathname = n.getPathname(), e.search = n.getSearch(), e.searchParams = n.getSearchParams(), e.hash = n.getHash())
    }, Rw = jw.prototype, Lw = function (t, e) {
        return {
            get: function () {
                return vb(this)[t]()
            }, set: e && function (t) {
                return vb(this)[e](t)
            }, configurable: !0, enumerable: !0
        }
    };
    if ($m && Zm(Rw, {
        href: Lw("serialize", "setHref"),
        origin: Lw("getOrigin"),
        protocol: Lw("getProtocol", "setProtocol"),
        username: Lw("getUsername", "setUsername"),
        password: Lw("getPassword", "setPassword"),
        host: Lw("getHost", "setHost"),
        hostname: Lw("getHostname", "setHostname"),
        port: Lw("getPort", "setPort"),
        pathname: Lw("getPathname", "setPathname"),
        search: Lw("getSearch", "setSearch"),
        searchParams: Lw("getSearchParams"),
        hash: Lw("getHash", "setHash")
    }), tb(Rw, "toJSON", (function () {
        return vb(this).serialize()
    }), {enumerable: !0}), tb(Rw, "toString", (function () {
        return vb(this).serialize()
    }), {enumerable: !0}), gb) {
        var Tw = gb.createObjectURL, _w = gb.revokeObjectURL;
        Tw && tb(jw, "createObjectURL", Qm(Tw, gb)), _w && tb(jw, "revokeObjectURL", Qm(_w, gb))
    }
    sb(jw, "URL"), Wm({global: !0, forced: !Vm, sham: !$m}, {URL: jw});
    var Aw = "PAYCO", kw = "TOSSPAY";

    function Iw() {
        return Uw.apply(this, arguments)
    }

    function Uw() {
        return Uw = o(regeneratorRuntime.mark((function t() {
            var r, n, o = arguments;
            return regeneratorRuntime.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        r = o.length > 0 && void 0 !== o[0] ? o[0] : {}, n = e({
                            host: window.location.host,
                            phase: $v
                        }, r), t.next = 7;
                        break;
                    case 7:
                        return t.prev = 7, t.next = 10, md("POST", "".concat(Jv, "/api/v1/logging"), {body: n});
                    case 10:
                        t.next = 15;
                        break;
                    case 12:
                        t.prev = 12, t.t0 = t.catch(7), console.error(t.t0);
                    case 15:
                    case"end":
                        return t.stop()
                }
            }), t, null, [[7, 12]])
        }))), Uw.apply(this, arguments)
    }

    function Cw(t, r) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = wd(t), i = n.isLegacy,
            a = void 0 === i || i, u = n.language, c = void 0 === u ? "ko" : u;
        return o.post("/v1/payments", e(e({}, r), {}, {isLegacy: a}), {headers: {"Accept-Language": c}})
    }

    var Fw = {
        "카드": "CARD",
        "가상계좌": "VIRTUAL_ACCOUNT",
        "휴대폰": "MOBILE_PHONE",
        "토스결제": "TOSSPAY",
        "계좌이체": "TRANSFER",
        "문화상품권": "CULTURE_GIFT_CERTIFICATE",
        "게임문화상품권": "GAME_GIFT_CERTIFICATE",
        "도서문화상품권": "BOOK_GIFT_CERTIFICATE",
        "해외간편결제": "FOREIGN_EASY_PAY"
    }, Mw = ["successUrl", "failUrl"], Nw = ["forceFailure"], Bw = 1006098;

    function Hw(t, e, r) {
        return qw.apply(this, arguments)
    }

    function qw() {
        return (qw = o(regeneratorRuntime.mark((function t(r, n, o) {
            var i, a, u, c, s, f, l, p, v, y, g, m, b, w, S, O;
            return regeneratorRuntime.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (Tv.isReady) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        return Tv.setOnPayment(), a = d("string" == typeof n ? [n, o] : [void 0, n], 2), u = a[0], c = a[1], s = void 0 === u ? "" : null !== (i = Fw[u]) && void 0 !== i ? i : u, f = Gw(c), l = f.forceFailure, p = void 0 !== l && l, v = h(f, Nw), t.prev = 6, m = (g = s === Fw.카드) && "DIRECT" === (null === (y = v.flowMode) || void 0 === y ? void 0 : y.toUpperCase()), b = g && !0 === v.useInternationalCardOnly, w = m && ("페이코" === v.easyPay || v.easyPay === Aw), S = s !== Fw.해외간편결제, t.next = 14, Cw(r, s === Fw.토스결제 ? e(e({}, v), {}, {
                            easyPay: kw,
                            flowMode: "DIRECT"
                        }) : v, {isLegacy: S, language: b ? "en" : "ko"});
                    case 14:
                        return O = t.sent, Iw({
                            log_name: "payment_window::window_load_done",
                            schema_id: Bw,
                            screen_name: "payment_window",
                            log_type: "event",
                            event_type: "background",
                            event_name: "window_load_done",
                            value: vd(),
                            clientkey: r,
                            paymentkey: O.key
                        }), t.abrupt("return", ky("/proxy/pages/load", {
                            clientKey: r,
                            paymentKey: O.key,
                            methodType: s === Fw.토스결제 ? Fw.카드 : s,
                            isForcedFail: p
                        }, m ? {
                            dimmer: w ? void 0 : jy({styles: {background: "none"}}),
                            iframe: w ? xy() : Ey({
                                styles: {
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%"
                                }
                            })
                        } : s === Fw.해외간편결제 ? {target: "_self"} : void 0));
                    case 19:
                        throw t.prev = 19, t.t0 = t.catch(6), Tv.setReady(), t.t0;
                    case 23:
                    case"end":
                        return t.stop()
                }
            }), t, null, [[6, 19]])
        })))).apply(this, arguments)
    }

    function Gw(t) {
        var r = t.successUrl, n = t.failUrl;
        return e(e({}, h(t, Mw)), {}, {successUrl: new URL(r).toString(), failUrl: new URL(n).toString()})
    }

    function Dw(t) {
        function e() {
            return (e = o(regeneratorRuntime.mark((function e(r, n) {
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Hw(t, r, n));
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        return function () {
            if (Yw || !my()) return;
            Yw = !0, window.addEventListener("pageshow", (function (t) {
                t.persisted && Tv.setReady()
            }))
        }(), t.startsWith("test_") && Iw({
            log_name: "payment_window::tosspayments_init",
            schema_id: 1006096,
            screen_name: "payment_window",
            log_type: "event",
            event_type: "background",
            event_name: "tosspayments_init",
            value: vd()
        }), {
            requestPayment: function (t, r) {
                return e.apply(this, arguments)
            }, requestBillingAuth: function (e, r) {
                return function (t, e, r) {
                    return Uy.apply(this, arguments)
                }(t, e, r)
            }
        }
    }

    function zw(t) {
        if (gy()) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !1, !0), void window.dispatchEvent(e)
        }
        window.dispatchEvent(new Event(t))
    }

    Dw.__versionHash__ = "8eae8b0e8c3a071489ae3ba42ce9c05a785b0f8c", window.TossPayments = Dw, zw("tossPaymentsInitialize"), zw("TossPayments:initialize:TossPayments");
    var Yw = !1;
    return Dw
}();