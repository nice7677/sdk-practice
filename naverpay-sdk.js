!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Naver", [], t) : "object" == typeof exports ? exports.Naver = t() : e.Naver = t()
}(this, function () {
    return function (e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {i: i, l: !1, exports: {}};
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: i})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 29)
    }([function (e, t, n) {
        "use strict";

        function i(e) {
            var t = Object.keys(e).reduce(function (t, n) {
                return t[e[n]] = n, t
            }, {});
            return Object.freeze(Object.keys(e).reduce(function (t, n) {
                return t[n] = e[n], t
            }, function (e) {
                return t[e]
            }))
        }

        t.__esModule = !0, t.default = i
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e() {
                i(this, e)
            }

            return e.getMerchantOriginUrl = function () {
                var e = window.location;
                return e.origin ? e.origin : [e.protocol, "//", e.host].join("")
            }, e
        }();
        t.default = r
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e() {
                i(this, e)
            }

            return e.prototype.attachEvent = function (e, t, n) {
                e.addEventListener(t, n, !1)
            }, e.prototype.detachEvent = function (e, t, n) {
                e.removeEventListener(t, n, !1)
            }, e
        }();
        t.default = r
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = n(12), a = function () {
            function e() {
                i(this, e)
            }

            return e.prototype.find = function () {
                return document.currentScript || function () {
                    for (var e = document.getElementsByTagName("script"), t = r.sdkFilename, n = 0; n < e.length; n++) {
                        var i = new RegExp(t + ".js|" + t + ".min.js", "g");
                        if (e[n].src && e[n].src.match(i)) return e[n]
                    }
                }()
            }, e
        }();
        t.default = a
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e() {
                i(this, e), this.timer = null
            }

            return e.prototype.initLoadChecker = function () {
                this.timer && clearTimeout(this.timer), this.timer = setTimeout(function () {
                    alert("일시적 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
                }, 6e3)
            }, e.prototype.clearLoadChecker = function () {
                this.timer && clearTimeout(this.timer)
            }, e.prototype.isReserveProxyPage = function (e, t) {
                var n = void 0;
                try {
                    n = e.contentWindow.location.origin, void 0 === e.contentWindow.location.ancestorOrigins ? e.contentWindow.location.origin === t && (n = void 0) : e.contentWindow.location.ancestorOrigins[0] === t && (n = void 0)
                } catch (e) {
                }
                return !n
            }, e
        }();
        t.default = new r
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), a = n(8), o = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(a), s = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    mode: "production",
                    payType: "",
                    clientId: "",
                    chainId: "",
                    buttonType: "",
                    buttonEnable: !0,
                    openType: o.default.PAGE,
                    onAuthorize: null,
                    useNaverAppLogin: !1,
                    payload: {
                        modelVersion: 2,
                        merchantUserKey: "",
                        merchantPayKey: "",
                        productName: "",
                        totalPayAmount: 0,
                        taxScopeAmount: 0,
                        taxExScopeAmount: 0,
                        productCount: 1,
                        isExtraDeduction: !1,
                        returnUrl: ""
                    }
                };
                i(this, e), this._payType = t.payType || "NORMAL", this._payType = this._payType.toUpperCase(), this._mode = t.mode || "production", this._clientId = t.clientId, this._chainId = t.chainId, this._buttonType = t.buttonType, this._buttonEnable = t.buttonEnable, this._openType = this._findOpenTypeValue(t.openType), this._onAuthorize = t.onAuthorize, this._useNaverAppLogin = t.useNaverAppLogin, this._payload = t.payload
            }

            return e.prototype._findOpenTypeValue = function (e) {
                for (var t in o.default) if (e === o.default[t]) return e;
                return o.default.PAGE
            }, e.prototype.isDevEnv = function () {
                return "development" === this._mode
            }, r(e, [{
                key: "payType", get: function () {
                    return this._payType
                }
            }, {
                key: "mode", get: function () {
                    return this._mode
                }, set: function (e) {
                    this._mode = e
                }
            }, {
                key: "clientId", get: function () {
                    return this._clientId
                }, set: function (e) {
                    this._clientId = e
                }
            }, {
                key: "chainId", get: function () {
                    return this._chainId
                }
            }, {
                key: "buttonType", get: function () {
                    return this._buttonType
                }
            }, {
                key: "buttonEnable", get: function () {
                    return this._buttonEnable
                }
            }, {
                key: "openType", get: function () {
                    return this._openType
                }, set: function (e) {
                    this._openType = e
                }
            }, {
                key: "payload", get: function () {
                    return this._payload
                }, set: function (e) {
                    this._payload = e
                }
            }, {
                key: "onAuthorize", get: function () {
                    return this._onAuthorize
                }
            }, {
                key: "useNaverAppLogin", get: function () {
                    return this._useNaverAppLogin
                }
            }]), e
        }();
        t.default = s
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = n(1), a = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(r), o = function () {
            function e() {
                i(this, e)
            }

            return e.isDeveloperCenterPayments = function () {
                return a.default.getMerchantOriginUrl().indexOf("developer.pay.naver.com") > 0
            }, e.createDeveloperCenterUrl = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = "?clientId=" + t.clientId + "&productName=" + t.payload.productName + "&totalPayAmount=" + t.payload.totalPayAmount;
                return e.dcPaymentPageUrl + n
            }, e
        }();
        t.default = o
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(8), o = i(a), s = n(6), u = i(s), c = n(9), l = i(c), f = n(10), p = i(f), d = function () {
            function e() {
                r(this, e)
            }

            return e.prototype.open = function (e, t, n) {
                var i = e.paymentPageUrl + n, r = new p.default(i);
                switch (!0 === t.useNaverAppLogin && r.appendParam("appscheme", "true"), i = r.toString(), u.default.isDeveloperCenterPayments() && (i = u.default.createDeveloperCenterUrl(e, t), t.openType = o.default.POPUP), t.openType) {
                    case o.default.POPUP:
                        l.default.open(e.paymentSheetPopupProxyUrl, i, t, n);
                        break;
                    case o.default.PAGE:
                        location.href = i;
                        break;
                    default:
                        location.href = i
                }
            }, e.prototype.close = function () {
                l.default.close()
            }, e
        }();
        t.default = d
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(0), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(i), a = (0, r.default)({PAGE: "page", POPUP: "popup"});
        t.default = a
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(1), o = i(a), s = n(10), u = i(s), c = function () {
            function e() {
                r(this, e)
            }

            return e.prototype.open = function (e, t, n, i) {
                this.iframe && document.getElementsByTagName("body")[0].removeChild(this.iframe), this.iframe = document.createElement("iframe"), this.iframe.id = "_Npay_SDK_paymentsheet_popup_iframe", this.iframe.width = "0", this.iframe.height = "0", this.iframe.innerHTML = "", this.iframe.style.display = "none", this.elBody || (this.elBody = document.getElementsByTagName("body")[0]), this.elBody.appendChild(this.iframe);
                var r = new u.default(e).appendParam("paymentSheetUrl", encodeURIComponent(t)).appendParam("merchantOriginUrl", o.default.getMerchantOriginUrl()).appendParam("onAuthorize", !!n.onAuthorize).appendParam("reserveId", i).appendParam("returnUrl", n.payload.returnUrl ? encodeURIComponent(n.payload.returnUrl) : "").toString();
                this.iframe.contentWindow.location.replace(r)
            }, e.prototype.close = function () {
                var e = {type: "POPUP_CLOSE"};
                this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage(JSON.stringify(e), "*")
            }, e
        }();
        t.default = new c
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e(t) {
                i(this, e), this._sUrl = t
            }

            return e.prototype.hasParameters = function () {
                return -1 !== this._sUrl.indexOf("?")
            }, e.prototype.appendParam = function (e, t) {
                return this.hasParameters() ? (this._sUrl = this._sUrl + "&" + e + "=" + t, this) : (this._sUrl = this._sUrl + "?" + e + "=" + t, this)
            }, e.prototype.toString = function () {
                return this._sUrl
            }, e
        }();
        t.default = r
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(28), o = i(a), s = n(3), u = i(s), c = new u.default, l = function () {
            function e() {
                r(this, e)
            }

            return e.findType = function () {
                var e = c.find();
                if (e) for (var t = e.attributes, n = 0, i = t.length; n < i; n++) {
                    var r = t[n], a = r.name.match(/^data-(.+)$/);
                    if (null !== a) return o.default.SIMPLE
                }
                return o.default.CUSTOM
            }, e.isSimple = function () {
                return o.default.SIMPLE === this.findType()
            }, e.isNormalPay = function () {
                var e = c.find();
                if (e) {
                    var t = e.attributes, n = t.getNamedItem("data-pay-type");
                    if (null === n) return !0;
                    if ("normal" === n.value) return !0
                }
                return !1
            }, e.isNormalSimplePay = function () {
                return !(!this.isNormalPay() || !this.isSimple())
            }, e.isRecurrentPay = function () {
                var e = c.find();
                if (e) {
                    var t = e.attributes, n = t.getNamedItem("data-pay-type");
                    if (null !== n && "recurrent" === n.value) return !0
                }
                return !1
            }, e.isRecurrentSimplePay = function () {
                return !(!this.isRecurrentPay() || !this.isSimple())
            }, e
        }();
        t.default = l
    }, function (e, t) {
        e.exports = {
            name: "naverpay-javascript-sdk",
            version: "1.2.0",
            description: "naverpay integration javascript sdk",
            sdkFilename: "naverpay",
            main: "index.js",
            scripts: {
                test: "mocha --require babel-register --recursive",
                eslint: "eslint .eslintrc.js src/",
                start: "webpack-dev-server --open --port 8081",
                build: "webpack",
                "build-watch": "webpack --watch",
                "build-release": "cross-env NODE_ENV=production webpack",
                karma: "karma start",
                jsdoc: "jsdoc src/**/*.js",
                "code-coverage": "cross-env NODE_ENV=test nyc mocha test/**/*.js"
            },
            author: "naver",
            license: "ISC",
            devDependencies: {
                "babel-core": "^6.25.0",
                "babel-helper-modules": "^6.0.0",
                "babel-loader": "^7.0.0",
                "babel-plugin-transform-es3-member-expression-literals": "^6.22.0",
                "babel-plugin-transform-es3-property-literals": "^6.22.0",
                "babel-plugin-transform-runtime": "^6.23.0",
                "babel-preset-env": "^1.5.1",
                "babel-plugin-istanbul": "^4.1.4",
                chai: "^3.5.0",
                eslint: "^3.19.0",
                karma: "^1.7.0",
                "karma-babel-preprocessor": "^6.0.1",
                "karma-chrome-launcher": "^2.2.0",
                "karma-firefox-launcher": "^1.0.1",
                "karma-ie-launcher": "^1.0.0",
                "karma-mocha": "^1.3.0",
                "karma-safari-launcher": "^1.0.0",
                "karma-webpack": "^2.0.3",
                nyc: "^11.1.0",
                "cross-env": "^5.0.2",
                mocha: "^3.4.1",
                sinon: "^2.3.8",
                webpack: "^2.6.0",
                "webpack-dev-server": "^2.4.5",
                "uglifyjs-webpack-plugin": "^0.4.6"
            },
            dependencies: {"babel-register": "^6.24.1", npm: "^6.4.1"},
            nyc: {
                require: ["babel-register"],
                sourceMap: !1,
                instrument: !1,
                watermarks: {lines: [50, 90], functions: [50, 90], branches: [50, 90], statements: [50, 90]},
                lines: 0,
                statements: 0,
                functions: 0,
                branches: 0,
                include: ["src/**/*.js", "src/*.js"],
                "report-dir": "./coverage",
                reporter: ["lcov", "text"]
            }
        }
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0, t.Pay = void 0;
        var i = n(20), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(i), a = new r.default;
        t.Pay = a
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(3), o = i(a), s = n(2), u = i(s), c = new o.default, l = new u.default, f = function () {
            function e() {
                r(this, e)
            }

            return e.prototype.find = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mediumGreen",
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = arguments[2], i = {
                        smallWhite: {size: "s", color: "white"},
                        mediumWhite: {size: "m", color: "white"},
                        largeWhite: {size: "l", color: "white"},
                        xLargeWhite: {size: "xl", color: "white"},
                        smallGreen: {size: "s", color: "green"},
                        mediumGreen: {size: "m", color: "green"},
                        largeGreen: {size: "l", color: "green"},
                        xLargeGreen: {size: "xl", color: "green"}
                    };
                return this.render(i[e], t, n)
            }, e.prototype.render = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {size: "m", color: "green"},
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "NORMAL";
                return '\n\t\t\t<div class="' + ("NORMAL" === n ? "Npay_payment_box" : "RECURRENT" === n ? "Npay_regular_box" : "") + "  " + (!0 !== t ? " Npay_type_disabled" : " Npay_type_" + e.color) + " Npay_btn_size" + e.size + '">\n\t\t\t\t<a href="#" class="Npay_sdk_payment_btn _payButton">\n\t\t\t\t\t<div class="Npay_sdk_payment_inner">\n\t\t\t\t\t\t<span class="Npay_logo"><em class="Npay_SDK_blind">Npay</em></span>\n\t\t\t\t\t\t<span class="Npay_txt_payment">' + ("NORMAL" === n ? "결제" : "RECURRENT" === n ? "정기결제" : "") + "</span>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n    \t"
            }, e.prototype.createPayButton = function (e, t, n, i) {
                var r = this.find(e, t, n);
                (c.find().parentElement || document.getElementsByTagName("body")[0]).insertAdjacentHTML("beforeend", r);
                var a = document.querySelector("._payButton");
                l.attachEvent(a, "click", i)
            }, e
        }();
        t.default = f
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), o = n(18), s = i(o), u = n(5), c = i(u), l = function () {
            function e() {
                r(this, e)
            }

            return e.prototype.init = function (e) {
                this._initialized = !0, this._payConfig = new c.default(e);
                var t = {mode: this._payConfig.mode, payType: this._payConfig.payType};
                this._urls = new s.default(t)
            }, e.prototype.isInitialized = function () {
                return !0 === this._initialized
            }, a(e, [{
                key: "payConfig", get: function () {
                    return this._payConfig
                }
            }, {
                key: "urls", get: function () {
                    return this._urls
                }
            }]), e
        }();
        t.default = l
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), a = n(24), o = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(a), s = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "development";
                i(this, e), this._mode = t, this._isMobile = o.default.isMobile(), this._pcOriginDomain = "nsp.pay.naver.com", this._pcDomain = "pay.naver.com", this._mobileDomain = "m.pay.naver.com", this._localDomainPrefix = "local", this._alphaDomainPrefix = "alpha", this._devDomainPrefix = "dev", this._testDomainPrefix = "test", this._stgDomainPrefix = "beta", this._cdnDomain = "ssl.pstatic.net"
            }

            return e.prototype.createDomain = function (e) {
                return "development" === this._mode ? this._testDomainPrefix + "-" + e : "staging" === this._mode ? this._stgDomainPrefix + "-" + e : "alpha" === this._mode ? this._alphaDomainPrefix + "-" + e : "dev" === this._mode ? this._devDomainPrefix + "-" + e : "local" === this._mode ? this._localDomainPrefix + "-" + e : e
            }, r(e, [{
                key: "apiDomain", get: function () {
                    return this.createDomain(this._pcOriginDomain)
                }
            }, {
                key: "developerCenterDomain", get: function () {
                    return this.createDomain(this._pcOriginDomain)
                }
            }, {
                key: "baseDomain", get: function () {
                    return this._isMobile ? this.createDomain(this._mobileDomain) : this.createDomain(this._pcDomain)
                }
            }, {
                key: "staticResourceDomain", get: function () {
                    return "development" === this._mode ? this._testDomainPrefix + "-" + this._pcOriginDomain : "alpha" === this._mode ? this._alphaDomainPrefix + "-" + this._pcOriginDomain : "dev" === this._mode ? this._devDomainPrefix + "-" + this._pcOriginDomain : "local" === this._mode ? this._localDomainPrefix + "-" + this._pcOriginDomain : this._cdnDomain
                }
            }]), e
        }();
        t.default = s
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(11), o = i(a), s = n(3), u = i(s), c = n(25), l = i(c), f = new u.default, p = new l.default,
            d = function () {
                function e() {
                    r(this, e)
                }

                return e.prototype.find = function () {
                    if (o.default.isSimple()) {
                        for (var e = f.find(), t = e.attributes, n = {}, i = {}, r = void 0, a = 0, s = t.length; a < s; a++) {
                            r = t[a];
                            var u = r.name.match(/^data-(.+)$/);
                            if (null !== u ? u[1] : void 0) {
                                var c = p.dashToCamelCase(u[1]), l = r.value;
                                if ("payType" === c || "mode" === c || "clientId" === c || "chainId" === c || "buttonType" === c || "buttonEnable" === c || "openType" === c || "onAuthorize" === c || "useNaverAppLogin" === c) "buttonEnable" !== c && "useNaverAppLogin" !== c || (l = "true" === l), n[c] = l; else {
                                    switch (c) {
                                        case"productCount":
                                        case"totalPayAmount":
                                        case"taxScopeAmount":
                                        case"taxExScopeAmount":
                                            l = Number(l);
                                            break;
                                        case"extraDeduction":
                                            c = "isExtraDeduction", l = "true" === l
                                    }
                                    i[c] = l
                                }
                            }
                        }
                        return n.payload = i, n
                    }
                }, e
            }();
        t.default = d
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), o = n(16), s = i(o), u = n(27), c = i(u), l = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    mode: "production",
                    payType: "NORMAL"
                };
                r(this, e);
                var n = t.mode || "production", i = t.payType || "NORMAL";
                this._domains = new s.default(n), this._payOrigin = "https://" + this._domains.baseDomain, this._payApiOrigin = "https://" + this._domains.apiDomain, this._payTypeUrlSelector(i), this._sdkCssUrl = "development" === n || "alpha" === n || "dev" === n ? "https://" + this._domains.staticResourceDomain + "/sdk/css/" : "local" === n ? "https://" + this._domains.staticResourceDomain + "/sdk/css/" : "https://" + this._domains.staticResourceDomain + "/static.pay/z/static/sdk/css/", this._dcPaymentPageUrl = "https://" + this._domains.developerCenterDomain + "/payments/developer", this._paymentSheetPopupProxyUrl = "https://" + this._domains.apiDomain + "/payments/sdk/proxy/paymentSheetPopup", this._payType = i, this._mode = n
            }

            return e.prototype._payTypeUrlSelector = function (e) {
                e === c.default.NORMAL ? this._reserveApiUrl = "https://" + this._domains.apiDomain + "/payments/sdk/proxy/reserve" : e === c.default.RECURRENT && (this._reserveApiUrl = "https://" + this._domains.apiDomain + "/payments/sdk/proxy/recurrent/reserve"), e === c.default.NORMAL ? this._paymentPageUrl = "https://" + this._domains.baseDomain + "/payments/" : e === c.default.RECURRENT && (this._paymentPageUrl = "https://" + this._domains.baseDomain + "/payments/recurrent/")
            }, a(e, [{
                key: "payType", get: function () {
                    return this._payType
                }
            }, {
                key: "mode", get: function () {
                    return this._mode
                }
            }, {
                key: "payApiOrigin", get: function () {
                    return this._payApiOrigin
                }
            }, {
                key: "payOrigin", get: function () {
                    return this._payOrigin
                }
            }, {
                key: "reserveApiUrl", get: function () {
                    return this._reserveApiUrl
                }
            }, {
                key: "paymentPageUrl", get: function () {
                    return this._paymentPageUrl
                }
            }, {
                key: "domains", get: function () {
                    return this._domains
                }
            }, {
                key: "sdkCssUrl", get: function () {
                    return this._sdkCssUrl
                }
            }, {
                key: "dcPaymentPageUrl", get: function () {
                    return this._dcPaymentPageUrl
                }
            }, {
                key: "paymentSheetPopupProxyUrl", get: function () {
                    return this._paymentSheetPopupProxyUrl
                }
            }]), e
        }();
        t.default = l
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(2), o = i(a), s = n(1), u = i(s), c = n(4), l = i(c), f = new o.default, p = function () {
            function e() {
                r(this, e)
            }

            return e.prototype.reserve = function (e, t, n) {
                var i = this;
                this._urls = e, this._payConfig = t, this._sdkType = n;
                var r = document.getElementById("_Npay_SDK_reserve_iframe");
                r || (r = document.createElement("iframe"), r.id = "_Npay_SDK_reserve_iframe", r.width = "0", r.height = "0", r.innerHTML = "", r.style.display = "none", document.getElementsByTagName("body")[0].appendChild(r)), l.default.initLoadChecker(), this._loadEventHandler || (this._loadEventHandler = function () {
                    l.default.isReserveProxyPage(r, i._urls.payApiOrigin) && r.contentWindow.postMessage(i._findReserveParam(i._urls, i._payConfig, i._sdkType), i._urls.payApiOrigin)
                }), f.detachEvent(r, "load", this._loadEventHandler), f.attachEvent(r, "load", this._loadEventHandler), r.contentWindow.location.replace(this._urls.reserveApiUrl)
            }, e.prototype._findReserveParam = function (e, t, n) {
                var i = t.payload;
                if (!i) return "";
                i.clientId = t.clientId, i.chainId = t.chainId;
                var r = void 0;
                i.productItems && (r = "string" == typeof i.productItems ? JSON.parse(t.payload.productItems.replace(/\'/g, '"')) : i.productItems), i.productItems = r, i.merchantOriginUrl = u.default.getMerchantOriginUrl(), i.useCfmYmdt && "number" == typeof i.useCfmYmdt && (i.useCfmYmdt = i.useCfmYmdt.toString());
                var a = {};
                return a.param = i, a.param.sdkType = n, a.baseUrl = "https://" + e.domains.apiDomain, JSON.stringify(a)
            }, e
        }();
        t.default = p
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(11), o = i(a), s = n(5), u = i(s), c = n(23), l = i(c), f = n(14), p = i(f), d = n(17), h = i(d),
            y = n(15), m = i(y), _ = n(7), v = i(_), g = n(19), b = i(g), w = n(21), P = i(w), E = n(6), C = i(E),
            k = n(12), T = new l.default, M = new p.default, N = new h.default, D = new m.default, O = new v.default,
            U = new b.default, A = new P.default, x = function () {
                function e() {
                    if (r(this, e), o.default.isSimple()) {
                        var t = N.find();
                        this.create(t), M.createPayButton(D.payConfig.buttonType, D.payConfig.buttonEnable, D.payConfig.payType, function (e) {
                            U.reserve(D.urls, D.payConfig, "SIMPLE"), e.preventDefault()
                        })
                    }
                }

                return e.prototype.create = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new u.default;
                    return D.init(e), A.init(D.urls, D.payConfig), A.start(), T.load(D.urls.sdkCssUrl, "naverpay_sdk_20180208.css"), this
                }, e.prototype.open = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!D.isInitialized()) return void (D.payConfig.isDevEnv() && alert("[NaverPay sdk not ready] used before Naver.Pay.create() functions invocation. Please check the following link https://developer.pay.naver.com/sdk"));
                    if ("string" == typeof e) return void O.open(D.urls, D.payConfig, e);
                    if (D.payConfig.payload) for (var t in e) "bookAndShowDeduction" === t ? D.payConfig.payload.isBookNShowDeduction = e[t] : D.payConfig.payload[t] = e[t]; else D._payConfig.payload = e;
                    D._payConfig.payload.bookAndShowDeduction = void 0, C.default.isDeveloperCenterPayments() ? O.open(D.urls, D.payConfig, "") : U.reserve(D.urls, D.payConfig, "CUSTOM")
                }, e.prototype.close = function () {
                    O.close(), A.close()
                }, e.prototype.getVersion = function () {
                    return k.version
                }, e
            }();
        t.default = x
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(22), o = i(a), s = n(2), u = i(s), c = n(7), l = i(c), f = n(26), p = i(f), d = n(9), h = i(d),
            y = n(4), m = i(y), _ = new u.default, v = new l.default, g = function () {
                function e() {
                    r(this, e)
                }

                return e.prototype.init = function (e, t) {
                    var n = this;
                    this._urls = e, this._payConfig = t, this._eventHandler = _, this._reserveId = "", this._messageListenHandler || (this._messageListenHandler = function (e) {
                        n.listen(e)
                    })
                }, e.prototype.setEventHandler = function (e) {
                    this._eventHandler = e
                }, e.prototype.start = function () {
                    this._eventHandler.detachEvent(window, "message", this._messageListenHandler), this._eventHandler.attachEvent(window, "message", this._messageListenHandler)
                }, e.prototype.close = function () {
                    this._eventHandler.detachEvent(window, "message", this._messageListenHandler)
                }, e.prototype.listen = function (e) {
                    if (this.checkOrigin(e.origin)) {
                        var t = void 0;
                        try {
                            t = JSON.parse(e.data)
                        } catch (n) {
                            t = e.data
                        }
                        if (t && t.type) switch (t.type) {
                            case o.default.NSP_RESERVE:
                                m.default.clearLoadChecker(), "Success" === t.code ? (this._reserveId = t.body.reserveId, v.open(this._urls, this._payConfig, this._reserveId)) : alert("[error] code : " + t.code + ", message : " + t.message);
                                break;
                            case o.default.NSP_PAY_POPUP_RETURN:
                                var n = this._payConfig.onAuthorize;
                                n && (h.default.close(), setTimeout(function () {
                                    "function" == typeof n ? n(t.body) : p.default.executeByName(window, n, t.body)
                                }, 500))
                        }
                    }
                }, e.prototype.checkOrigin = function (e) {
                    return e === this._urls.payOrigin || e === this._urls.payApiOrigin
                }, e
            }();
        t.default = g
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(0), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(i), a = (0, r.default)({NSP_RESERVE: "NSP_RESERVE", NSP_PAY_POPUP_RETURN: "NSP_PAY_POPUP_RETURN"});
        t.default = a
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e() {
                i(this, e)
            }

            return e.prototype.load = function (e, t) {
                var n = e + t, i = new Date, r = i.getFullYear(), a = i.getMonth() + 1, o = i.getDate(),
                    s = document.createElement("link");
                s.rel = "stylesheet", s.type = "text/css", s.charset = "utf-8", s.async = !1, s.href = n + "?" + r + (a < 10 ? "0" + a : a) + (o < 10 ? "0" + o : o);
                var u = document.getElementsByTagName("head")[0];
                u.appendChild(s, u)
            }, e
        }();
        t.default = r
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e() {
                i(this, e)
            }

            return e.isMobile = function () {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
            }, e.isBrowserSupportsAnimation = function () {
                var e = !0;
                if ("Microsoft Internet Explorer" === navigator.appName) {
                    var t = navigator.userAgent;
                    if (null !== new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t)) {
                        e = parseFloat(RegExp.$1) > 9
                    }
                }
                return e
            }, e
        }();
        t.default = r
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e() {
                i(this, e)
            }

            return e.prototype.dashToCamelCase = function (e) {
                return e.replace(/-(\w)/g, function (e, t) {
                    return t.toUpperCase()
                })
            }, e.prototype.camelToDashCase = function (e) {
                return e.replace(/([A-Z])/g, function (e) {
                    return "-" + e.toLowerCase()
                })
            }, e
        }();
        t.default = r
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e() {
                i(this, e)
            }

            return e.executeByName = function (e, t) {
                for (var n = [].slice.call(arguments).splice(2), i = t.split("."), r = i.pop(), a = 0; a < i.length; a++) e = e[i[a]];
                return e[r].apply(e, n)
            }, e
        }();
        t.default = r
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(0), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(i), a = (0, r.default)({NORMAL: "NORMAL", RECURRENT: "RECURRENT"});
        t.default = a
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(0), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(i), a = (0, r.default)({SIMPLE: "simple", CUSTOM: "custom"});
        t.default = a
    }, function (e, t, n) {
        e.exports = n(13)
    }])
});