"use strict";
(() => {
	var v2 = Object.create;
	var Sn = Object.defineProperty;
	var y2 = Object.getOwnPropertyDescriptor;
	var g2 = Object.getOwnPropertyNames;
	var b2 = Object.getPrototypeOf,
		_2 = Object.prototype.hasOwnProperty;
	var F = (e, u) => () => (u || e((u = {
			exports: {}
		}).exports, u), u.exports),
		x2 = (e, u) => {
			for (var t in u) Sn(e, t, {
				get: u[t],
				enumerable: !0
			})
		},
		w2 = (e, u, t, r) => {
			if (u && typeof u == "object" || typeof u == "function")
				for (let D of g2(u)) !_2.call(e, D) && D !== t && Sn(e, D, {
					get: () => u[D],
					enumerable: !(r = y2(u, D)) || r.enumerable
				});
			return e
		};
	var ya = (e, u, t) => (t = e != null ? v2(b2(e)) : {}, w2(u || !e || !e.__esModule ? Sn(t, "default", {
		value: e,
		enumerable: !0
	}) : t, e));
	var Pa = F((Xg, Na) => {
		Na.exports = typeof self == "object" ? self.FormData : window.FormData
	});
	var nu = F((Yx, ms) => {
		var BD = function(e) {
			return e && e.Math == Math && e
		};
		ms.exports = BD(typeof globalThis == "object" && globalThis) || BD(typeof window == "object" && window) || BD(typeof self == "object" && self) || BD(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var V = F((Jx, vs) => {
		vs.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var Gt = F((Xx, ys) => {
		var p8 = V();
		ys.exports = !p8(function() {
			var e = function() {}.bind();
			return typeof e != "function" || e.hasOwnProperty("prototype")
		})
	});
	var Yn = F((Qx, xs) => {
		var B8 = Gt(),
			_s = Function.prototype,
			gs = _s.apply,
			bs = _s.call;
		xs.exports = typeof Reflect == "object" && Reflect.apply || (B8 ? bs.bind(gs) : function() {
			return bs.apply(gs, arguments)
		})
	});
	var K = F((uw, Ts) => {
		var ws = Gt(),
			Ss = Function.prototype,
			Jn = Ss.call,
			h8 = ws && Ss.bind.bind(Jn, Jn);
		Ts.exports = ws ? h8 : function(e) {
			return function() {
				return Jn.apply(e, arguments)
			}
		}
	});
	var Se = F((ew, qs) => {
		var Os = K(),
			m8 = Os({}.toString),
			v8 = Os("".slice);
		qs.exports = function(e) {
			return v8(m8(e), 8, -1)
		}
	});
	var hD = F((tw, Rs) => {
		var y8 = Se(),
			g8 = K();
		Rs.exports = function(e) {
			if (y8(e) === "Function") return g8(e)
		}
	});
	var Qn = F((rw, Is) => {
		var Xn = typeof document == "object" && document.all,
			b8 = typeof Xn > "u" && Xn !== void 0;
		Is.exports = {
			all: Xn,
			IS_HTMLDDA: b8
		}
	});
	var Q = F((Dw, Ps) => {
		var Ns = Qn(),
			_8 = Ns.all;
		Ps.exports = Ns.IS_HTMLDDA ? function(e) {
			return typeof e == "function" || e === _8
		} : function(e) {
			return typeof e == "function"
		}
	});
	var Au = F((nw, ks) => {
		var x8 = V();
		ks.exports = !x8(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var fu = F((iw, Ls) => {
		var w8 = Gt(),
			mD = Function.prototype.call;
		Ls.exports = w8 ? mD.bind(mD) : function() {
			return mD.apply(mD, arguments)
		}
	});
	var u0 = F($s => {
		"use strict";
		var Ms = {}.propertyIsEnumerable,
			js = Object.getOwnPropertyDescriptor,
			S8 = js && !Ms.call({
				1: 2
			}, 1);
		$s.f = S8 ? function(u) {
			var t = js(this, u);
			return !!t && t.enumerable
		} : Ms
	});
	var st = F((sw, Us) => {
		Us.exports = function(e, u) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: u
			}
		}
	});
	var vD = F((ow, Hs) => {
		var T8 = K(),
			O8 = V(),
			q8 = Se(),
			e0 = Object,
			R8 = T8("".split);
		Hs.exports = O8(function() {
			return !e0("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return q8(e) == "String" ? R8(e, "") : e0(e)
		} : e0
	});
	var yD = F((Fw, Vs) => {
		Vs.exports = function(e) {
			return e == null
		}
	});
	var Zt = F((cw, Ks) => {
		var I8 = yD(),
			N8 = TypeError;
		Ks.exports = function(e) {
			if (I8(e)) throw N8("Can't call method on " + e);
			return e
		}
	});
	var Uu = F((Ew, zs) => {
		var P8 = vD(),
			k8 = Zt();
		zs.exports = function(e) {
			return P8(k8(e))
		}
	});
	var bu = F((lw, Zs) => {
		var Ws = Q(),
			Gs = Qn(),
			L8 = Gs.all;
		Zs.exports = Gs.IS_HTMLDDA ? function(e) {
			return typeof e == "object" ? e !== null : Ws(e) || e === L8
		} : function(e) {
			return typeof e == "object" ? e !== null : Ws(e)
		}
	});
	var _u = F((Cw, Ys) => {
		Ys.exports = {}
	});
	var Hu = F((Aw, Xs) => {
		var t0 = _u(),
			r0 = nu(),
			M8 = Q(),
			Js = function(e) {
				return M8(e) ? e : void 0
			};
		Xs.exports = function(e, u) {
			return arguments.length < 2 ? Js(t0[e]) || Js(r0[e]) : t0[e] && t0[e][u] || r0[e] && r0[e][u]
		}
	});
	var du = F((fw, Qs) => {
		var j8 = K();
		Qs.exports = j8({}.isPrototypeOf)
	});
	var Yt = F((dw, uo) => {
		var $8 = Hu();
		uo.exports = $8("navigator", "userAgent") || ""
	});
	var ot = F((pw, io) => {
		var no = nu(),
			D0 = Yt(),
			eo = no.process,
			to = no.Deno,
			ro = eo && eo.versions || to && to.version,
			Do = ro && ro.v8,
			xu, gD;
		Do && (xu = Do.split("."), gD = xu[0] > 0 && xu[0] < 4 ? 1 : +(xu[0] + xu[1]));
		!gD && D0 && (xu = D0.match(/Edge\/(\d+)/), (!xu || xu[1] >= 74) && (xu = D0.match(/Chrome\/(\d+)/), xu && (gD = +xu[1])));
		io.exports = gD
	});
	var Te = F((Bw, so) => {
		var ao = ot(),
			U8 = V();
		so.exports = !!Object.getOwnPropertySymbols && !U8(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && ao && ao < 41
		})
	});
	var n0 = F((hw, oo) => {
		var H8 = Te();
		oo.exports = H8 && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var Jt = F((mw, Fo) => {
		var V8 = Hu(),
			K8 = Q(),
			z8 = du(),
			W8 = n0(),
			G8 = Object;
		Fo.exports = W8 ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var u = V8("Symbol");
			return K8(u) && z8(u.prototype, G8(e))
		}
	});
	var Xt = F((vw, co) => {
		var Z8 = String;
		co.exports = function(e) {
			try {
				return Z8(e)
			} catch {
				return "Object"
			}
		}
	});
	var Ft = F((yw, Eo) => {
		var Y8 = Q(),
			J8 = Xt(),
			X8 = TypeError;
		Eo.exports = function(e) {
			if (Y8(e)) return e;
			throw X8(J8(e) + " is not a function")
		}
	});
	var bD = F((gw, lo) => {
		var Q8 = Ft(),
			uB = yD();
		lo.exports = function(e, u) {
			var t = e[u];
			return uB(t) ? void 0 : Q8(t)
		}
	});
	var Ao = F((bw, Co) => {
		var i0 = fu(),
			a0 = Q(),
			s0 = bu(),
			eB = TypeError;
		Co.exports = function(e, u) {
			var t, r;
			if (u === "string" && a0(t = e.toString) && !s0(r = i0(t, e)) || a0(t = e.valueOf) && !s0(r = i0(t, e)) || u !== "string" && a0(t = e.toString) && !s0(r = i0(t, e))) return r;
			throw eB("Can't convert object to primitive value")
		}
	});
	var ct = F((_w, fo) => {
		fo.exports = !0
	});
	var ho = F((xw, Bo) => {
		var po = nu(),
			tB = Object.defineProperty;
		Bo.exports = function(e, u) {
			try {
				tB(po, e, {
					value: u,
					configurable: !0,
					writable: !0
				})
			} catch {
				po[e] = u
			}
			return u
		}
	});
	var _D = F((ww, vo) => {
		var rB = nu(),
			DB = ho(),
			mo = "__core-js_shared__",
			nB = rB[mo] || DB(mo, {});
		vo.exports = nB
	});
	var Et = F((Sw, go) => {
		var iB = ct(),
			yo = _D();
		(go.exports = function(e, u) {
			return yo[e] || (yo[e] = u !== void 0 ? u : {})
		})("versions", []).push({
			version: "3.26.1",
			mode: iB ? "pure" : "global",
			copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
			license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
			source: "https://github.com/zloirock/core-js"
		})
	});
	var Vu = F((Tw, bo) => {
		var aB = Zt(),
			sB = Object;
		bo.exports = function(e) {
			return sB(aB(e))
		}
	});
	var iu = F((Ow, _o) => {
		var oB = K(),
			FB = Vu(),
			cB = oB({}.hasOwnProperty);
		_o.exports = Object.hasOwn || function(u, t) {
			return cB(FB(u), t)
		}
	});
	var xD = F((qw, xo) => {
		var EB = K(),
			lB = 0,
			CB = Math.random(),
			AB = EB(1 .toString);
		xo.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + AB(++lB + CB, 36)
		}
	});
	var G = F((Rw, qo) => {
		var fB = nu(),
			dB = Et(),
			wo = iu(),
			pB = xD(),
			So = Te(),
			Oo = n0(),
			lt = dB("wks"),
			Oe = fB.Symbol,
			To = Oe && Oe.for,
			BB = Oo ? Oe : Oe && Oe.withoutSetter || pB;
		qo.exports = function(e) {
			if (!wo(lt, e) || !(So || typeof lt[e] == "string")) {
				var u = "Symbol." + e;
				So && wo(Oe, e) ? lt[e] = Oe[e] : Oo && To ? lt[e] = To(u) : lt[e] = BB(u)
			}
			return lt[e]
		}
	});
	var Po = F((Iw, No) => {
		var hB = fu(),
			Ro = bu(),
			Io = Jt(),
			mB = bD(),
			vB = Ao(),
			yB = G(),
			gB = TypeError,
			bB = yB("toPrimitive");
		No.exports = function(e, u) {
			if (!Ro(e) || Io(e)) return e;
			var t = mB(e, bB),
				r;
			if (t) {
				if (u === void 0 && (u = "default"), r = hB(t, e, u), !Ro(r) || Io(r)) return r;
				throw gB("Can't convert object to primitive value")
			}
			return u === void 0 && (u = "number"), vB(e, u)
		}
	});
	var Qt = F((Nw, ko) => {
		var _B = Po(),
			xB = Jt();
		ko.exports = function(e) {
			var u = _B(e, "string");
			return xB(u) ? u : u + ""
		}
	});
	var F0 = F((Pw, Mo) => {
		var wB = nu(),
			Lo = bu(),
			o0 = wB.document,
			SB = Lo(o0) && Lo(o0.createElement);
		Mo.exports = function(e) {
			return SB ? o0.createElement(e) : {}
		}
	});
	var c0 = F((kw, jo) => {
		var TB = Au(),
			OB = V(),
			qB = F0();
		jo.exports = !TB && !OB(function() {
			return Object.defineProperty(qB("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var E0 = F(Uo => {
		var RB = Au(),
			IB = fu(),
			NB = u0(),
			PB = st(),
			kB = Uu(),
			LB = Qt(),
			MB = iu(),
			jB = c0(),
			$o = Object.getOwnPropertyDescriptor;
		Uo.f = RB ? $o : function(u, t) {
			if (u = kB(u), t = LB(t), jB) try {
				return $o(u, t)
			} catch {}
			if (MB(u, t)) return PB(!IB(NB.f, u, t), u[t])
		}
	});
	var Vo = F((Mw, Ho) => {
		var $B = V(),
			UB = Q(),
			HB = /#|\.prototype\./,
			ur = function(e, u) {
				var t = KB[VB(e)];
				return t == WB ? !0 : t == zB ? !1 : UB(u) ? $B(u) : !!u
			},
			VB = ur.normalize = function(e) {
				return String(e).replace(HB, ".").toLowerCase()
			},
			KB = ur.data = {},
			zB = ur.NATIVE = "N",
			WB = ur.POLYFILL = "P";
		Ho.exports = ur
	});
	var wD = F((jw, zo) => {
		var Ko = hD(),
			GB = Ft(),
			ZB = Gt(),
			YB = Ko(Ko.bind);
		zo.exports = function(e, u) {
			return GB(e), u === void 0 ? e : ZB ? YB(e, u) : function() {
				return e.apply(u, arguments)
			}
		}
	});
	var l0 = F(($w, Wo) => {
		var JB = Au(),
			XB = V();
		Wo.exports = JB && XB(function() {
			return Object.defineProperty(function() {}, "prototype", {
				value: 42,
				writable: !1
			}).prototype != 42
		})
	});
	var Iu = F((Uw, Go) => {
		var QB = bu(),
			uh = String,
			eh = TypeError;
		Go.exports = function(e) {
			if (QB(e)) return e;
			throw eh(uh(e) + " is not an object")
		}
	});
	var Ku = F(Yo => {
		var th = Au(),
			rh = c0(),
			Dh = l0(),
			SD = Iu(),
			Zo = Qt(),
			nh = TypeError,
			C0 = Object.defineProperty,
			ih = Object.getOwnPropertyDescriptor,
			A0 = "enumerable",
			f0 = "configurable",
			d0 = "writable";
		Yo.f = th ? Dh ? function(u, t, r) {
			if (SD(u), t = Zo(t), SD(r), typeof u == "function" && t === "prototype" && "value" in r && d0 in r && !r[d0]) {
				var D = ih(u, t);
				D && D[d0] && (u[t] = r.value, r = {
					configurable: f0 in r ? r[f0] : D[f0],
					enumerable: A0 in r ? r[A0] : D[A0],
					writable: !1
				})
			}
			return C0(u, t, r)
		} : C0 : function(u, t, r) {
			if (SD(u), t = Zo(t), SD(r), rh) try {
				return C0(u, t, r)
			} catch {}
			if ("get" in r || "set" in r) throw nh("Accessors not supported");
			return "value" in r && (u[t] = r.value), u
		}
	});
	var qe = F((Vw, Jo) => {
		var ah = Au(),
			sh = Ku(),
			oh = st();
		Jo.exports = ah ? function(e, u, t) {
			return sh.f(e, u, oh(1, t))
		} : function(e, u, t) {
			return e[u] = t, e
		}
	});
	var z = F((Kw, Qo) => {
		"use strict";
		var TD = nu(),
			Fh = Yn(),
			ch = hD(),
			Eh = Q(),
			lh = E0().f,
			Ch = Vo(),
			Ct = _u(),
			Ah = wD(),
			At = qe(),
			Xo = iu(),
			fh = function(e) {
				var u = function(t, r, D) {
					if (this instanceof u) {
						switch (arguments.length) {
							case 0:
								return new e;
							case 1:
								return new e(t);
							case 2:
								return new e(t, r)
						}
						return new e(t, r, D)
					}
					return Fh(e, this, arguments)
				};
				return u.prototype = e.prototype, u
			};
		Qo.exports = function(e, u) {
			var t = e.target,
				r = e.global,
				D = e.stat,
				n = e.proto,
				i = r ? TD : D ? TD[t] : (TD[t] || {}).prototype,
				a = r ? Ct : Ct[t] || At(Ct, t, {})[t],
				o = a.prototype,
				s, c, E, C, f, A, d, m, v;
			for (C in u) s = Ch(r ? C : t + (D ? "." : "#") + C, e.forced), c = !s && i && Xo(i, C), A = a[C], c && (e.dontCallGetSet ? (v = lh(i, C), d = v && v.value) : d = i[C]), f = c && d ? d : u[C], !(c && typeof A == typeof f) && (e.bind && c ? m = Ah(f, TD) : e.wrap && c ? m = fh(f) : n && Eh(f) ? m = ch(f) : m = f, (e.sham || f && f.sham || A && A.sham) && At(m, "sham", !0), At(a, C, m), n && (E = t + "Prototype", Xo(Ct, E) || At(Ct, E, {}), At(Ct[E], C, f), e.real && o && !o[C] && At(o, C, f)))
		}
	});
	var eF = F(() => {
		var dh = z(),
			ph = Au(),
			uF = Ku().f;
		dh({
			target: "Object",
			stat: !0,
			forced: Object.defineProperty !== uF,
			sham: !ph
		}, {
			defineProperty: uF
		})
	});
	var DF = F((Gw, rF) => {
		eF();
		var Bh = _u(),
			tF = Bh.Object,
			hh = rF.exports = function(u, t, r) {
				return tF.defineProperty(u, t, r)
			};
		tF.defineProperty.sham && (hh.sham = !0)
	});
	var iF = F((Zw, nF) => {
		var mh = DF();
		nF.exports = mh
	});
	var zu = F((Yw, aF) => {
		aF.exports = iF()
	});
	var Wu = F((Jw, er) => {
		function vh(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		er.exports = vh, er.exports.__esModule = !0, er.exports.default = er.exports
	});
	var ft = F((Xw, sF) => {
		var yh = Se();
		sF.exports = Array.isArray || function(u) {
			return yh(u) == "Array"
		}
	});
	var OD = F((Qw, FF) => {
		var gh = G(),
			bh = gh("toStringTag"),
			oF = {};
		oF[bh] = "z";
		FF.exports = String(oF) === "[object z]"
	});
	var Re = F((uS, cF) => {
		var _h = OD(),
			xh = Q(),
			qD = Se(),
			wh = G(),
			Sh = wh("toStringTag"),
			Th = Object,
			Oh = qD(function() {
				return arguments
			}()) == "Arguments",
			qh = function(e, u) {
				try {
					return e[u]
				} catch {}
			};
		cF.exports = _h ? qD : function(e) {
			var u, t, r;
			return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(t = qh(u = Th(e), Sh)) == "string" ? t : Oh ? qD(u) : (r = qD(u)) == "Object" && xh(u.callee) ? "Arguments" : r
		}
	});
	var lF = F((eS, EF) => {
		var Rh = K(),
			Ih = Q(),
			p0 = _D(),
			Nh = Rh(Function.toString);
		Ih(p0.inspectSource) || (p0.inspectSource = function(e) {
			return Nh(e)
		});
		EF.exports = p0.inspectSource
	});
	var RD = F((tS, pF) => {
		var Ph = K(),
			kh = V(),
			CF = Q(),
			Lh = Re(),
			Mh = Hu(),
			jh = lF(),
			AF = function() {},
			$h = [],
			fF = Mh("Reflect", "construct"),
			B0 = /^\s*(?:class|function)\b/,
			Uh = Ph(B0.exec),
			Hh = !B0.exec(AF),
			tr = function(u) {
				if (!CF(u)) return !1;
				try {
					return fF(AF, $h, u), !0
				} catch {
					return !1
				}
			},
			dF = function(u) {
				if (!CF(u)) return !1;
				switch (Lh(u)) {
					case "AsyncFunction":
					case "GeneratorFunction":
					case "AsyncGeneratorFunction":
						return !1
				}
				try {
					return Hh || !!Uh(B0, jh(u))
				} catch {
					return !0
				}
			};
		dF.sham = !0;
		pF.exports = !fF || kh(function() {
			var e;
			return tr(tr.call) || !tr(Object) || !tr(function() {
				e = !0
			}) || e
		}) ? dF : tr
	});
	var hF = F((rS, BF) => {
		var Vh = Math.ceil,
			Kh = Math.floor;
		BF.exports = Math.trunc || function(u) {
			var t = +u;
			return (t > 0 ? Kh : Vh)(t)
		}
	});
	var ID = F((DS, mF) => {
		var zh = hF();
		mF.exports = function(e) {
			var u = +e;
			return u !== u || u === 0 ? 0 : zh(u)
		}
	});
	var ND = F((nS, vF) => {
		var Wh = ID(),
			Gh = Math.max,
			Zh = Math.min;
		vF.exports = function(e, u) {
			var t = Wh(e);
			return t < 0 ? Gh(t + u, 0) : Zh(t, u)
		}
	});
	var gF = F((iS, yF) => {
		var Yh = ID(),
			Jh = Math.min;
		yF.exports = function(e) {
			return e > 0 ? Jh(Yh(e), 9007199254740991) : 0
		}
	});
	var Gu = F((aS, bF) => {
		var Xh = gF();
		bF.exports = function(e) {
			return Xh(e.length)
		}
	});
	var rr = F((sS, _F) => {
		"use strict";
		var Qh = Qt(),
			u3 = Ku(),
			e3 = st();
		_F.exports = function(e, u, t) {
			var r = Qh(u);
			r in e ? u3.f(e, r, e3(0, t)) : e[r] = t
		}
	});
	var PD = F((oS, xF) => {
		var t3 = V(),
			r3 = G(),
			D3 = ot(),
			n3 = r3("species");
		xF.exports = function(e) {
			return D3 >= 51 || !t3(function() {
				var u = [],
					t = u.constructor = {};
				return t[n3] = function() {
					return {
						foo: 1
					}
				}, u[e](Boolean).foo !== 1
			})
		}
	});
	var h0 = F((FS, wF) => {
		var i3 = K();
		wF.exports = i3([].slice)
	});
	var OF = F(() => {
		"use strict";
		var a3 = z(),
			SF = ft(),
			s3 = RD(),
			o3 = bu(),
			TF = ND(),
			F3 = Gu(),
			c3 = Uu(),
			E3 = rr(),
			l3 = G(),
			C3 = PD(),
			A3 = h0(),
			f3 = C3("slice"),
			d3 = l3("species"),
			m0 = Array,
			p3 = Math.max;
		a3({
			target: "Array",
			proto: !0,
			forced: !f3
		}, {
			slice: function(u, t) {
				var r = c3(this),
					D = F3(r),
					n = TF(u, D),
					i = TF(t === void 0 ? D : t, D),
					a, o, s;
				if (SF(r) && (a = r.constructor, s3(a) && (a === m0 || SF(a.prototype)) ? a = void 0 : o3(a) && (a = a[d3], a === null && (a = void 0)), a === m0 || a === void 0)) return A3(r, n, i);
				for (o = new(a === void 0 ? m0 : a)(p3(i - n, 0)), s = 0; n < i; n++, s++) n in r && E3(o, s, r[n]);
				return o.length = s, o
			}
		})
	});
	var se = F((lS, qF) => {
		var B3 = _u();
		qF.exports = function(e) {
			return B3[e + "Prototype"]
		}
	});
	var IF = F((CS, RF) => {
		OF();
		var h3 = se();
		RF.exports = h3("Array").slice
	});
	var PF = F((AS, NF) => {
		var m3 = du(),
			v3 = IF(),
			v0 = Array.prototype;
		NF.exports = function(e) {
			var u = e.slice;
			return e === v0 || m3(v0, e) && u === v0.slice ? v3 : u
		}
	});
	var y0 = F((fS, kF) => {
		var y3 = PF();
		kF.exports = y3
	});
	var Dr = F((dS, LF) => {
		LF.exports = y0()
	});
	var oe = F((pS, MF) => {
		var g3 = Re(),
			b3 = String;
		MF.exports = function(e) {
			if (g3(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
			return b3(e)
		}
	});
	var HF = F((BS, UF) => {
		var g0 = K(),
			_3 = ID(),
			x3 = oe(),
			w3 = Zt(),
			S3 = g0("".charAt),
			jF = g0("".charCodeAt),
			T3 = g0("".slice),
			$F = function(e) {
				return function(u, t) {
					var r = x3(w3(u)),
						D = _3(t),
						n = r.length,
						i, a;
					return D < 0 || D >= n ? e ? "" : void 0 : (i = jF(r, D), i < 55296 || i > 56319 || D + 1 === n || (a = jF(r, D + 1)) < 56320 || a > 57343 ? e ? S3(r, D) : i : e ? T3(r, D, D + 2) : (i - 55296 << 10) + (a - 56320) + 65536)
				}
			};
		UF.exports = {
			codeAt: $F(!1),
			charAt: $F(!0)
		}
	});
	var zF = F((hS, KF) => {
		var O3 = nu(),
			q3 = Q(),
			VF = O3.WeakMap;
		KF.exports = q3(VF) && /native code/.test(String(VF))
	});
	var nr = F((mS, GF) => {
		var R3 = Et(),
			I3 = xD(),
			WF = R3("keys");
		GF.exports = function(e) {
			return WF[e] || (WF[e] = I3(e))
		}
	});
	var ir = F((vS, ZF) => {
		ZF.exports = {}
	});
	var MD = F((yS, XF) => {
		var N3 = zF(),
			JF = nu(),
			P3 = bu(),
			k3 = qe(),
			b0 = iu(),
			_0 = _D(),
			L3 = nr(),
			M3 = ir(),
			YF = "Object already initialized",
			x0 = JF.TypeError,
			j3 = JF.WeakMap,
			kD, ar, LD, $3 = function(e) {
				return LD(e) ? ar(e) : kD(e, {})
			},
			U3 = function(e) {
				return function(u) {
					var t;
					if (!P3(u) || (t = ar(u)).type !== e) throw x0("Incompatible receiver, " + e + " required");
					return t
				}
			};
		N3 || _0.state ? (wu = _0.state || (_0.state = new j3), wu.get = wu.get, wu.has = wu.has, wu.set = wu.set, kD = function(e, u) {
			if (wu.has(e)) throw x0(YF);
			return u.facade = e, wu.set(e, u), u
		}, ar = function(e) {
			return wu.get(e) || {}
		}, LD = function(e) {
			return wu.has(e)
		}) : (Ie = L3("state"), M3[Ie] = !0, kD = function(e, u) {
			if (b0(e, Ie)) throw x0(YF);
			return u.facade = e, k3(e, Ie, u), u
		}, ar = function(e) {
			return b0(e, Ie) ? e[Ie] : {}
		}, LD = function(e) {
			return b0(e, Ie)
		});
		var wu, Ie;
		XF.exports = {
			set: kD,
			get: ar,
			has: LD,
			enforce: $3,
			getterFor: U3
		}
	});
	var ec = F((gS, uc) => {
		var w0 = Au(),
			H3 = iu(),
			QF = Function.prototype,
			V3 = w0 && Object.getOwnPropertyDescriptor,
			S0 = H3(QF, "name"),
			K3 = S0 && function() {}.name === "something",
			z3 = S0 && (!w0 || w0 && V3(QF, "name").configurable);
		uc.exports = {
			EXISTS: S0,
			PROPER: K3,
			CONFIGURABLE: z3
		}
	});
	var T0 = F((bS, rc) => {
		var W3 = Uu(),
			G3 = ND(),
			Z3 = Gu(),
			tc = function(e) {
				return function(u, t, r) {
					var D = W3(u),
						n = Z3(D),
						i = G3(r, n),
						a;
					if (e && t != t) {
						for (; n > i;)
							if (a = D[i++], a != a) return !0
					} else
						for (; n > i; i++)
							if ((e || i in D) && D[i] === t) return e || i || 0;
					return !e && -1
				}
			};
		rc.exports = {
			includes: tc(!0),
			indexOf: tc(!1)
		}
	});
	var q0 = F((_S, nc) => {
		var Y3 = K(),
			O0 = iu(),
			J3 = Uu(),
			X3 = T0().indexOf,
			Q3 = ir(),
			Dc = Y3([].push);
		nc.exports = function(e, u) {
			var t = J3(e),
				r = 0,
				D = [],
				n;
			for (n in t) !O0(Q3, n) && O0(t, n) && Dc(D, n);
			for (; u.length > r;) O0(t, n = u[r++]) && (~X3(D, n) || Dc(D, n));
			return D
		}
	});
	var jD = F((xS, ic) => {
		ic.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var R0 = F((wS, ac) => {
		var um = q0(),
			em = jD();
		ac.exports = Object.keys || function(u) {
			return um(u, em)
		}
	});
	var I0 = F(sc => {
		var tm = Au(),
			rm = l0(),
			Dm = Ku(),
			nm = Iu(),
			im = Uu(),
			am = R0();
		sc.f = tm && !rm ? Object.defineProperties : function(u, t) {
			nm(u);
			for (var r = im(t), D = am(t), n = D.length, i = 0, a; n > i;) Dm.f(u, a = D[i++], r[a]);
			return u
		}
	});
	var Fc = F((TS, oc) => {
		var sm = Hu();
		oc.exports = sm("document", "documentElement")
	});
	var sr = F((OS, dc) => {
		var om = Iu(),
			Fm = I0(),
			cc = jD(),
			cm = ir(),
			Em = Fc(),
			lm = F0(),
			Cm = nr(),
			Ec = ">",
			lc = "<",
			P0 = "prototype",
			k0 = "script",
			Ac = Cm("IE_PROTO"),
			N0 = function() {},
			fc = function(e) {
				return lc + k0 + Ec + e + lc + "/" + k0 + Ec
			},
			Cc = function(e) {
				e.write(fc("")), e.close();
				var u = e.parentWindow.Object;
				return e = null, u
			},
			Am = function() {
				var e = lm("iframe"),
					u = "java" + k0 + ":",
					t;
				return e.style.display = "none", Em.appendChild(e), e.src = String(u), t = e.contentWindow.document, t.open(), t.write(fc("document.F=Object")), t.close(), t.F
			},
			$D, UD = function() {
				try {
					$D = new ActiveXObject("htmlfile")
				} catch {}
				UD = typeof document < "u" ? document.domain && $D ? Cc($D) : Am() : Cc($D);
				for (var e = cc.length; e--;) delete UD[P0][cc[e]];
				return UD()
			};
		cm[Ac] = !0;
		dc.exports = Object.create || function(u, t) {
			var r;
			return u !== null ? (N0[P0] = om(u), r = new N0, N0[P0] = null, r[Ac] = u) : r = UD(), t === void 0 ? r : Fm.f(r, t)
		}
	});
	var Bc = F((qS, pc) => {
		var fm = V();
		pc.exports = !fm(function() {
			function e() {}
			return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
		})
	});
	var M0 = F((RS, mc) => {
		var dm = iu(),
			pm = Q(),
			Bm = Vu(),
			hm = nr(),
			mm = Bc(),
			hc = hm("IE_PROTO"),
			L0 = Object,
			vm = L0.prototype;
		mc.exports = mm ? L0.getPrototypeOf : function(e) {
			var u = Bm(e);
			if (dm(u, hc)) return u[hc];
			var t = u.constructor;
			return pm(t) && u instanceof t ? t.prototype : u instanceof L0 ? vm : null
		}
	});
	var or = F((IS, vc) => {
		var ym = qe();
		vc.exports = function(e, u, t, r) {
			return r && r.enumerable ? e[u] = t : ym(e, u, t), e
		}
	});
	var H0 = F((NS, bc) => {
		"use strict";
		var gm = V(),
			bm = Q(),
			_m = bu(),
			xm = sr(),
			yc = M0(),
			wm = or(),
			Sm = G(),
			Tm = ct(),
			U0 = Sm("iterator"),
			gc = !1,
			Zu, j0, $0;
		[].keys && ($0 = [].keys(), "next" in $0 ? (j0 = yc(yc($0)), j0 !== Object.prototype && (Zu = j0)) : gc = !0);
		var Om = !_m(Zu) || gm(function() {
			var e = {};
			return Zu[U0].call(e) !== e
		});
		Om ? Zu = {} : Tm && (Zu = xm(Zu));
		bm(Zu[U0]) || wm(Zu, U0, function() {
			return this
		});
		bc.exports = {
			IteratorPrototype: Zu,
			BUGGY_SAFARI_ITERATORS: gc
		}
	});
	var xc = F((PS, _c) => {
		"use strict";
		var qm = OD(),
			Rm = Re();
		_c.exports = qm ? {}.toString : function() {
			return "[object " + Rm(this) + "]"
		}
	});
	var dt = F((kS, Sc) => {
		var Im = OD(),
			Nm = Ku().f,
			Pm = qe(),
			km = iu(),
			Lm = xc(),
			Mm = G(),
			wc = Mm("toStringTag");
		Sc.exports = function(e, u, t, r) {
			if (e) {
				var D = t ? e : e.prototype;
				km(D, wc) || Nm(D, wc, {
					configurable: !0,
					value: u
				}), r && !Im && Pm(D, "toString", Lm)
			}
		}
	});
	var Ne = F((LS, Tc) => {
		Tc.exports = {}
	});
	var qc = F((MS, Oc) => {
		"use strict";
		var jm = H0().IteratorPrototype,
			$m = sr(),
			Um = st(),
			Hm = dt(),
			Vm = Ne(),
			Km = function() {
				return this
			};
		Oc.exports = function(e, u, t, r) {
			var D = u + " Iterator";
			return e.prototype = $m(jm, {
				next: Um(+!r, t)
			}), Hm(e, D, !1, !0), Vm[D] = Km, e
		}
	});
	var Ic = F((jS, Rc) => {
		var zm = Q(),
			Wm = String,
			Gm = TypeError;
		Rc.exports = function(e) {
			if (typeof e == "object" || zm(e)) return e;
			throw Gm("Can't set " + Wm(e) + " as a prototype")
		}
	});
	var Pc = F(($S, Nc) => {
		var Zm = K(),
			Ym = Iu(),
			Jm = Ic();
		Nc.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var e = !1,
				u = {},
				t;
			try {
				t = Zm(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), t(u, []), e = u instanceof Array
			} catch {}
			return function(D, n) {
				return Ym(D), Jm(n), e ? t(D, n) : D.__proto__ = n, D
			}
		}() : void 0)
	});
	var K0 = F((US, zc) => {
		"use strict";
		var Xm = z(),
			Qm = fu(),
			HD = ct(),
			Vc = ec(),
			u7 = Q(),
			e7 = qc(),
			kc = M0(),
			Lc = Pc(),
			t7 = dt(),
			r7 = qe(),
			V0 = or(),
			D7 = G(),
			Mc = Ne(),
			Kc = H0(),
			n7 = Vc.PROPER,
			i7 = Vc.CONFIGURABLE,
			jc = Kc.IteratorPrototype,
			VD = Kc.BUGGY_SAFARI_ITERATORS,
			Fr = D7("iterator"),
			$c = "keys",
			cr = "values",
			Uc = "entries",
			Hc = function() {
				return this
			};
		zc.exports = function(e, u, t, r, D, n, i) {
			e7(t, u, r);
			var a = function(v) {
					if (v === D && C) return C;
					if (!VD && v in c) return c[v];
					switch (v) {
						case $c:
							return function() {
								return new t(this, v)
							};
						case cr:
							return function() {
								return new t(this, v)
							};
						case Uc:
							return function() {
								return new t(this, v)
							}
					}
					return function() {
						return new t(this)
					}
				},
				o = u + " Iterator",
				s = !1,
				c = e.prototype,
				E = c[Fr] || c["@@iterator"] || D && c[D],
				C = !VD && E || a(D),
				f = u == "Array" && c.entries || E,
				A, d, m;
			if (f && (A = kc(f.call(new e)), A !== Object.prototype && A.next && (!HD && kc(A) !== jc && (Lc ? Lc(A, jc) : u7(A[Fr]) || V0(A, Fr, Hc)), t7(A, o, !0, !0), HD && (Mc[o] = Hc))), n7 && D == cr && E && E.name !== cr && (!HD && i7 ? r7(c, "name", cr) : (s = !0, C = function() {
					return Qm(E, this)
				})), D)
				if (d = {
						values: a(cr),
						keys: n ? C : a($c),
						entries: a(Uc)
					}, i)
					for (m in d)(VD || s || !(m in c)) && V0(c, m, d[m]);
				else Xm({
					target: u,
					proto: !0,
					forced: VD || s
				}, d);
			return (!HD || i) && c[Fr] !== C && V0(c, Fr, C, {
				name: D
			}), Mc[u] = C, d
		}
	});
	var z0 = F((HS, Wc) => {
		Wc.exports = function(e, u) {
			return {
				value: e,
				done: u
			}
		}
	});
	var W0 = F(() => {
		"use strict";
		var a7 = HF().charAt,
			s7 = oe(),
			Zc = MD(),
			o7 = K0(),
			Gc = z0(),
			Yc = "String Iterator",
			F7 = Zc.set,
			c7 = Zc.getterFor(Yc);
		o7(String, "String", function(e) {
			F7(this, {
				type: Yc,
				string: s7(e),
				index: 0
			})
		}, function() {
			var u = c7(this),
				t = u.string,
				r = u.index,
				D;
			return r >= t.length ? Gc(void 0, !0) : (D = a7(t, r), u.index += D.length, Gc(D, !1))
		})
	});
	var Qc = F((zS, Xc) => {
		var E7 = fu(),
			Jc = Iu(),
			l7 = bD();
		Xc.exports = function(e, u, t) {
			var r, D;
			Jc(e);
			try {
				if (r = l7(e, "return"), !r) {
					if (u === "throw") throw t;
					return t
				}
				r = E7(r, e)
			} catch (n) {
				D = !0, r = n
			}
			if (u === "throw") throw t;
			if (D) throw r;
			return Jc(r), t
		}
	});
	var e1 = F((WS, u1) => {
		var C7 = Iu(),
			A7 = Qc();
		u1.exports = function(e, u, t, r) {
			try {
				return r ? u(C7(t)[0], t[1]) : u(t)
			} catch (D) {
				A7(e, "throw", D)
			}
		}
	});
	var r1 = F((GS, t1) => {
		var f7 = G(),
			d7 = Ne(),
			p7 = f7("iterator"),
			B7 = Array.prototype;
		t1.exports = function(e) {
			return e !== void 0 && (d7.Array === e || B7[p7] === e)
		}
	});
	var KD = F((ZS, n1) => {
		var h7 = Re(),
			D1 = bD(),
			m7 = yD(),
			v7 = Ne(),
			y7 = G(),
			g7 = y7("iterator");
		n1.exports = function(e) {
			if (!m7(e)) return D1(e, g7) || D1(e, "@@iterator") || v7[h7(e)]
		}
	});
	var a1 = F((YS, i1) => {
		var b7 = fu(),
			_7 = Ft(),
			x7 = Iu(),
			w7 = Xt(),
			S7 = KD(),
			T7 = TypeError;
		i1.exports = function(e, u) {
			var t = arguments.length < 2 ? S7(e) : u;
			if (_7(t)) return x7(b7(t, e));
			throw T7(w7(e) + " is not iterable")
		}
	});
	var c1 = F((JS, F1) => {
		"use strict";
		var O7 = wD(),
			q7 = fu(),
			R7 = Vu(),
			I7 = e1(),
			N7 = r1(),
			P7 = RD(),
			k7 = Gu(),
			s1 = rr(),
			L7 = a1(),
			M7 = KD(),
			o1 = Array;
		F1.exports = function(u) {
			var t = R7(u),
				r = P7(this),
				D = arguments.length,
				n = D > 1 ? arguments[1] : void 0,
				i = n !== void 0;
			i && (n = O7(n, D > 2 ? arguments[2] : void 0));
			var a = M7(t),
				o = 0,
				s, c, E, C, f, A;
			if (a && !(this === o1 && N7(a)))
				for (C = L7(t, a), f = C.next, c = r ? new this : []; !(E = q7(f, C)).done; o++) A = i ? I7(C, n, [E.value, o], !0) : E.value, s1(c, o, A);
			else
				for (s = k7(t), c = r ? new this(s) : o1(s); s > o; o++) A = i ? n(t[o], o) : t[o], s1(c, o, A);
			return c.length = o, c
		}
	});
	var f1 = F((XS, A1) => {
		var j7 = G(),
			l1 = j7("iterator"),
			C1 = !1;
		try {
			E1 = 0, G0 = {
				next: function() {
					return {
						done: !!E1++
					}
				},
				return: function() {
					C1 = !0
				}
			}, G0[l1] = function() {
				return this
			}, Array.from(G0, function() {
				throw 2
			})
		} catch {}
		var E1, G0;
		A1.exports = function(e, u) {
			if (!u && !C1) return !1;
			var t = !1;
			try {
				var r = {};
				r[l1] = function() {
					return {
						next: function() {
							return {
								done: t = !0
							}
						}
					}
				}, e(r)
			} catch {}
			return t
		}
	});
	var d1 = F(() => {
		var $7 = z(),
			U7 = c1(),
			H7 = f1(),
			V7 = !H7(function(e) {
				Array.from(e)
			});
		$7({
			target: "Array",
			stat: !0,
			forced: V7
		}, {
			from: U7
		})
	});
	var B1 = F((eT, p1) => {
		W0();
		d1();
		var K7 = _u();
		p1.exports = K7.Array.from
	});
	var Z0 = F((tT, h1) => {
		var z7 = B1();
		h1.exports = z7
	});
	var Y0 = F((rT, m1) => {
		m1.exports = Z0()
	});
	var y1 = F((DT, v1) => {
		var W7 = TypeError,
			G7 = 9007199254740991;
		v1.exports = function(e) {
			if (e > G7) throw W7("Maximum allowed index exceeded");
			return e
		}
	});
	var x1 = F((nT, _1) => {
		var g1 = ft(),
			Z7 = RD(),
			Y7 = bu(),
			J7 = G(),
			X7 = J7("species"),
			b1 = Array;
		_1.exports = function(e) {
			var u;
			return g1(e) && (u = e.constructor, Z7(u) && (u === b1 || g1(u.prototype)) ? u = void 0 : Y7(u) && (u = u[X7], u === null && (u = void 0))), u === void 0 ? b1 : u
		}
	});
	var J0 = F((iT, w1) => {
		var Q7 = x1();
		w1.exports = function(e, u) {
			return new(Q7(e))(u === 0 ? 0 : u)
		}
	});
	var X0 = F(() => {
		"use strict";
		var u4 = z(),
			e4 = V(),
			t4 = ft(),
			r4 = bu(),
			D4 = Vu(),
			n4 = Gu(),
			S1 = y1(),
			T1 = rr(),
			i4 = J0(),
			a4 = PD(),
			s4 = G(),
			o4 = ot(),
			O1 = s4("isConcatSpreadable"),
			F4 = o4 >= 51 || !e4(function() {
				var e = [];
				return e[O1] = !1, e.concat()[0] !== e
			}),
			c4 = a4("concat"),
			E4 = function(e) {
				if (!r4(e)) return !1;
				var u = e[O1];
				return u !== void 0 ? !!u : t4(e)
			},
			l4 = !F4 || !c4;
		u4({
			target: "Array",
			proto: !0,
			arity: 1,
			forced: l4
		}, {
			concat: function(u) {
				var t = D4(this),
					r = i4(t, 0),
					D = 0,
					n, i, a, o, s;
				for (n = -1, a = arguments.length; n < a; n++)
					if (s = n === -1 ? t : arguments[n], E4(s))
						for (o = n4(s), S1(D + o), i = 0; i < o; i++, D++) i in s && T1(r, D, s[i]);
					else S1(D + 1), T1(r, D++, s);
				return r.length = D, r
			}
		})
	});
	var q1 = F(() => {});
	var Q0 = F(R1 => {
		var C4 = q0(),
			A4 = jD(),
			f4 = A4.concat("length", "prototype");
		R1.f = Object.getOwnPropertyNames || function(u) {
			return C4(u, f4)
		}
	});
	var ui = F((ET, N1) => {
		var I1 = ND(),
			d4 = Gu(),
			p4 = rr(),
			B4 = Array,
			h4 = Math.max;
		N1.exports = function(e, u, t) {
			for (var r = d4(e), D = I1(u, r), n = I1(t === void 0 ? r : t, r), i = B4(h4(n - D, 0)), a = 0; D < n; D++, a++) p4(i, a, e[D]);
			return i.length = a, i
		}
	});
	var M1 = F((lT, L1) => {
		var m4 = Se(),
			v4 = Uu(),
			P1 = Q0().f,
			y4 = ui(),
			k1 = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			g4 = function(e) {
				try {
					return P1(e)
				} catch {
					return y4(k1)
				}
			};
		L1.exports.f = function(u) {
			return k1 && m4(u) == "Window" ? g4(u) : P1(v4(u))
		}
	});
	var ei = F(j1 => {
		j1.f = Object.getOwnPropertySymbols
	});
	var ti = F($1 => {
		var b4 = G();
		$1.f = b4
	});
	var M = F((fT, H1) => {
		var U1 = _u(),
			_4 = iu(),
			x4 = ti(),
			w4 = Ku().f;
		H1.exports = function(e) {
			var u = U1.Symbol || (U1.Symbol = {});
			_4(u, e) || w4(u, e, {
				value: x4.f(e)
			})
		}
	});
	var ri = F((dT, V1) => {
		var S4 = fu(),
			T4 = Hu(),
			O4 = G(),
			q4 = or();
		V1.exports = function() {
			var e = T4("Symbol"),
				u = e && e.prototype,
				t = u && u.valueOf,
				r = O4("toPrimitive");
			u && !u[r] && q4(u, r, function(D) {
				return S4(t, this)
			}, {
				arity: 1
			})
		}
	});
	var zD = F((pT, z1) => {
		var R4 = wD(),
			I4 = K(),
			N4 = vD(),
			P4 = Vu(),
			k4 = Gu(),
			L4 = J0(),
			K1 = I4([].push),
			Fe = function(e) {
				var u = e == 1,
					t = e == 2,
					r = e == 3,
					D = e == 4,
					n = e == 6,
					i = e == 7,
					a = e == 5 || n;
				return function(o, s, c, E) {
					for (var C = P4(o), f = N4(C), A = R4(s, c), d = k4(f), m = 0, v = E || L4, b = u ? v(o, d) : t || i ? v(o, 0) : void 0, x, P; d > m; m++)
						if ((a || m in f) && (x = f[m], P = A(x, m, C), e))
							if (u) b[m] = P;
							else if (P) switch (e) {
						case 3:
							return !0;
						case 5:
							return x;
						case 6:
							return m;
						case 2:
							K1(b, x)
					} else switch (e) {
						case 4:
							return !1;
						case 7:
							K1(b, x)
					}
					return n ? -1 : r || D ? D : b
				}
			};
		z1.exports = {
			forEach: Fe(0),
			map: Fe(1),
			filter: Fe(2),
			some: Fe(3),
			every: Fe(4),
			find: Fe(5),
			findIndex: Fe(6),
			filterReject: Fe(7)
		}
	});
	var sE = F(() => {
		"use strict";
		var WD = z(),
			Ei = nu(),
			li = fu(),
			M4 = K(),
			j4 = ct(),
			pt = Au(),
			Bt = Te(),
			$4 = V(),
			Z = iu(),
			U4 = du(),
			ai = Iu(),
			GD = Uu(),
			Ci = Qt(),
			H4 = oe(),
			si = st(),
			lr = sr(),
			Z1 = R0(),
			V4 = Q0(),
			Y1 = M1(),
			K4 = ei(),
			J1 = E0(),
			X1 = Ku(),
			z4 = I0(),
			Q1 = u0(),
			Di = or(),
			Ai = Et(),
			W4 = nr(),
			uE = ir(),
			W1 = xD(),
			G4 = G(),
			Z4 = ti(),
			Y4 = M(),
			J4 = ri(),
			X4 = dt(),
			eE = MD(),
			ZD = zD().forEach,
			au = W4("hidden"),
			YD = "Symbol",
			Cr = "prototype",
			Q4 = eE.set,
			G1 = eE.getterFor(YD),
			pu = Object[Cr],
			Pe = Ei.Symbol,
			Er = Pe && Pe[Cr],
			u6 = Ei.TypeError,
			ni = Ei.QObject,
			tE = J1.f,
			ce = X1.f,
			rE = Y1.f,
			e6 = Q1.f,
			DE = M4([].push),
			Yu = Ai("symbols"),
			Ar = Ai("op-symbols"),
			t6 = Ai("wks"),
			oi = !ni || !ni[Cr] || !ni[Cr].findChild,
			Fi = pt && $4(function() {
				return lr(ce({}, "a", {
					get: function() {
						return ce(this, "a", {
							value: 7
						}).a
					}
				})).a != 7
			}) ? function(e, u, t) {
				var r = tE(pu, u);
				r && delete pu[u], ce(e, u, t), r && e !== pu && ce(pu, u, r)
			} : ce,
			ii = function(e, u) {
				var t = Yu[e] = lr(Er);
				return Q4(t, {
					type: YD,
					tag: e,
					description: u
				}), pt || (t.description = u), t
			},
			JD = function(u, t, r) {
				u === pu && JD(Ar, t, r), ai(u);
				var D = Ci(t);
				return ai(r), Z(Yu, D) ? (r.enumerable ? (Z(u, au) && u[au][D] && (u[au][D] = !1), r = lr(r, {
					enumerable: si(0, !1)
				})) : (Z(u, au) || ce(u, au, si(1, {})), u[au][D] = !0), Fi(u, D, r)) : ce(u, D, r)
			},
			fi = function(u, t) {
				ai(u);
				var r = GD(t),
					D = Z1(r).concat(aE(r));
				return ZD(D, function(n) {
					(!pt || li(ci, r, n)) && JD(u, n, r[n])
				}), u
			},
			r6 = function(u, t) {
				return t === void 0 ? lr(u) : fi(lr(u), t)
			},
			ci = function(u) {
				var t = Ci(u),
					r = li(e6, this, t);
				return this === pu && Z(Yu, t) && !Z(Ar, t) ? !1 : r || !Z(this, t) || !Z(Yu, t) || Z(this, au) && this[au][t] ? r : !0
			},
			nE = function(u, t) {
				var r = GD(u),
					D = Ci(t);
				if (!(r === pu && Z(Yu, D) && !Z(Ar, D))) {
					var n = tE(r, D);
					return n && Z(Yu, D) && !(Z(r, au) && r[au][D]) && (n.enumerable = !0), n
				}
			},
			iE = function(u) {
				var t = rE(GD(u)),
					r = [];
				return ZD(t, function(D) {
					!Z(Yu, D) && !Z(uE, D) && DE(r, D)
				}), r
			},
			aE = function(e) {
				var u = e === pu,
					t = rE(u ? Ar : GD(e)),
					r = [];
				return ZD(t, function(D) {
					Z(Yu, D) && (!u || Z(pu, D)) && DE(r, Yu[D])
				}), r
			};
		Bt || (Pe = function() {
			if (U4(Er, this)) throw u6("Symbol is not a constructor");
			var u = !arguments.length || arguments[0] === void 0 ? void 0 : H4(arguments[0]),
				t = W1(u),
				r = function(D) {
					this === pu && li(r, Ar, D), Z(this, au) && Z(this[au], t) && (this[au][t] = !1), Fi(this, t, si(1, D))
				};
			return pt && oi && Fi(pu, t, {
				configurable: !0,
				set: r
			}), ii(t, u)
		}, Er = Pe[Cr], Di(Er, "toString", function() {
			return G1(this).tag
		}), Di(Pe, "withoutSetter", function(e) {
			return ii(W1(e), e)
		}), Q1.f = ci, X1.f = JD, z4.f = fi, J1.f = nE, V4.f = Y1.f = iE, K4.f = aE, Z4.f = function(e) {
			return ii(G4(e), e)
		}, pt && (ce(Er, "description", {
			configurable: !0,
			get: function() {
				return G1(this).description
			}
		}), j4 || Di(pu, "propertyIsEnumerable", ci, {
			unsafe: !0
		})));
		WD({
			global: !0,
			constructor: !0,
			wrap: !0,
			forced: !Bt,
			sham: !Bt
		}, {
			Symbol: Pe
		});
		ZD(Z1(t6), function(e) {
			Y4(e)
		});
		WD({
			target: YD,
			stat: !0,
			forced: !Bt
		}, {
			useSetter: function() {
				oi = !0
			},
			useSimple: function() {
				oi = !1
			}
		});
		WD({
			target: "Object",
			stat: !0,
			forced: !Bt,
			sham: !pt
		}, {
			create: r6,
			defineProperty: JD,
			defineProperties: fi,
			getOwnPropertyDescriptor: nE
		});
		WD({
			target: "Object",
			stat: !0,
			forced: !Bt
		}, {
			getOwnPropertyNames: iE
		});
		J4();
		X4(Pe, YD);
		uE[au] = !0
	});
	var di = F((mT, oE) => {
		var D6 = Te();
		oE.exports = D6 && !!Symbol.for && !!Symbol.keyFor
	});
	var cE = F(() => {
		var n6 = z(),
			i6 = Hu(),
			a6 = iu(),
			s6 = oe(),
			FE = Et(),
			o6 = di(),
			pi = FE("string-to-symbol-registry"),
			F6 = FE("symbol-to-string-registry");
		n6({
			target: "Symbol",
			stat: !0,
			forced: !o6
		}, {
			for: function(e) {
				var u = s6(e);
				if (a6(pi, u)) return pi[u];
				var t = i6("Symbol")(u);
				return pi[u] = t, F6[t] = u, t
			}
		})
	});
	var lE = F(() => {
		var c6 = z(),
			E6 = iu(),
			l6 = Jt(),
			C6 = Xt(),
			A6 = Et(),
			f6 = di(),
			EE = A6("symbol-to-string-registry");
		c6({
			target: "Symbol",
			stat: !0,
			forced: !f6
		}, {
			keyFor: function(u) {
				if (!l6(u)) throw TypeError(C6(u) + " is not a symbol");
				if (E6(EE, u)) return EE[u]
			}
		})
	});
	var gE = F(() => {
		var d6 = z(),
			hE = Hu(),
			mE = Yn(),
			p6 = fu(),
			fr = K(),
			vE = V(),
			B6 = ft(),
			h6 = Q(),
			m6 = bu(),
			CE = Jt(),
			yE = h0(),
			v6 = Te(),
			Ee = hE("JSON", "stringify"),
			XD = fr(/./.exec),
			AE = fr("".charAt),
			y6 = fr("".charCodeAt),
			g6 = fr("".replace),
			b6 = fr(1 .toString),
			_6 = /[\uD800-\uDFFF]/g,
			fE = /^[\uD800-\uDBFF]$/,
			dE = /^[\uDC00-\uDFFF]$/,
			pE = !v6 || vE(function() {
				var e = hE("Symbol")();
				return Ee([e]) != "[null]" || Ee({
					a: e
				}) != "{}" || Ee(Object(e)) != "{}"
			}),
			BE = vE(function() {
				return Ee("\uDF06\uD834") !== '"\\udf06\\ud834"' || Ee("\uDEAD") !== '"\\udead"'
			}),
			x6 = function(e, u) {
				var t = yE(arguments),
					r = u;
				if (!(!m6(u) && e === void 0 || CE(e))) return B6(u) || (u = function(D, n) {
					if (h6(r) && (n = p6(r, this, D, n)), !CE(n)) return n
				}), t[1] = u, mE(Ee, null, t)
			},
			w6 = function(e, u, t) {
				var r = AE(t, u - 1),
					D = AE(t, u + 1);
				return XD(fE, e) && !XD(dE, D) || XD(dE, e) && !XD(fE, r) ? "\\u" + b6(y6(e, 0), 16) : e
			};
		Ee && d6({
			target: "JSON",
			stat: !0,
			arity: 3,
			forced: pE || BE
		}, {
			stringify: function(u, t, r) {
				var D = yE(arguments),
					n = mE(pE ? x6 : Ee, null, D);
				return BE && typeof n == "string" ? g6(n, _6, w6) : n
			}
		})
	});
	var _E = F(() => {
		var S6 = z(),
			T6 = Te(),
			O6 = V(),
			bE = ei(),
			q6 = Vu(),
			R6 = !T6 || O6(function() {
				bE.f(1)
			});
		S6({
			target: "Object",
			stat: !0,
			forced: R6
		}, {
			getOwnPropertySymbols: function(u) {
				var t = bE.f;
				return t ? t(q6(u)) : []
			}
		})
	});
	var xE = F(() => {
		sE();
		cE();
		lE();
		gE();
		_E()
	});
	var wE = F(() => {
		var I6 = M();
		I6("asyncIterator")
	});
	var SE = F(() => {});
	var TE = F(() => {
		var N6 = M();
		N6("hasInstance")
	});
	var OE = F(() => {
		var P6 = M();
		P6("isConcatSpreadable")
	});
	var qE = F(() => {
		var k6 = M();
		k6("iterator")
	});
	var RE = F(() => {
		var L6 = M();
		L6("match")
	});
	var IE = F(() => {
		var M6 = M();
		M6("matchAll")
	});
	var NE = F(() => {
		var j6 = M();
		j6("replace")
	});
	var PE = F(() => {
		var $6 = M();
		$6("search")
	});
	var kE = F(() => {
		var U6 = M();
		U6("species")
	});
	var LE = F(() => {
		var H6 = M();
		H6("split")
	});
	var ME = F(() => {
		var V6 = M(),
			K6 = ri();
		V6("toPrimitive");
		K6()
	});
	var jE = F(() => {
		var z6 = Hu(),
			W6 = M(),
			G6 = dt();
		W6("toStringTag");
		G6(z6("Symbol"), "Symbol")
	});
	var $E = F(() => {
		var Z6 = M();
		Z6("unscopables")
	});
	var UE = F(() => {
		var Y6 = nu(),
			J6 = dt();
		J6(Y6.JSON, "JSON", !0)
	});
	var HE = F(() => {});
	var VE = F(() => {});
	var zE = F((EO, KE) => {
		X0();
		q1();
		xE();
		wE();
		SE();
		TE();
		OE();
		qE();
		RE();
		IE();
		NE();
		PE();
		kE();
		LE();
		ME();
		jE();
		$E();
		UE();
		HE();
		VE();
		var X6 = _u();
		KE.exports = X6.Symbol
	});
	var GE = F((lO, WE) => {
		WE.exports = function() {}
	});
	var hi = F((CO, QE) => {
		"use strict";
		var Q6 = Uu(),
			Bi = GE(),
			ZE = Ne(),
			JE = MD(),
			u9 = Ku().f,
			e9 = K0(),
			QD = z0(),
			t9 = ct(),
			r9 = Au(),
			XE = "Array Iterator",
			D9 = JE.set,
			n9 = JE.getterFor(XE);
		QE.exports = e9(Array, "Array", function(e, u) {
			D9(this, {
				type: XE,
				target: Q6(e),
				index: 0,
				kind: u
			})
		}, function() {
			var e = n9(this),
				u = e.target,
				t = e.kind,
				r = e.index++;
			return !u || r >= u.length ? (e.target = void 0, QD(void 0, !0)) : t == "keys" ? QD(r, !1) : t == "values" ? QD(u[r], !1) : QD([r, u[r]], !1)
		}, "values");
		var YE = ZE.Arguments = ZE.Array;
		Bi("keys");
		Bi("values");
		Bi("entries");
		if (!t9 && r9 && YE.name !== "values") try {
			u9(YE, "name", {
				value: "values"
			})
		} catch {}
	});
	var el = F((AO, ul) => {
		ul.exports = {
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
		}
	});
	var tn = F(() => {
		hi();
		var i9 = el(),
			a9 = nu(),
			s9 = Re(),
			o9 = qe(),
			tl = Ne(),
			F9 = G(),
			rl = F9("toStringTag");
		for (un in i9) mi = a9[un], en = mi && mi.prototype, en && s9(en) !== rl && o9(en, rl, un), tl[un] = tl.Array;
		var mi, en, un
	});
	var vi = F((pO, Dl) => {
		var c9 = zE();
		tn();
		Dl.exports = c9
	});
	var yi = F((BO, nl) => {
		nl.exports = vi()
	});
	var al = F((hO, il) => {
		hi();
		W0();
		var E9 = KD();
		il.exports = E9
	});
	var ol = F((mO, sl) => {
		var l9 = al();
		tn();
		sl.exports = l9
	});
	var cl = F((vO, Fl) => {
		var C9 = ol();
		Fl.exports = C9
	});
	var ll = F((yO, El) => {
		var A9 = cl();
		El.exports = A9
	});
	var Al = F((gO, Cl) => {
		Cl.exports = ll()
	});
	var rn = F((bO, fl) => {
		fl.exports = Al()
	});
	var dl = F(() => {
		var f9 = z(),
			d9 = ft();
		f9({
			target: "Array",
			stat: !0
		}, {
			isArray: d9
		})
	});
	var Bl = F((wO, pl) => {
		dl();
		var p9 = _u();
		pl.exports = p9.Array.isArray
	});
	var gi = F((SO, hl) => {
		var B9 = Bl();
		hl.exports = B9
	});
	var bi = F((TO, ml) => {
		ml.exports = gi()
	});
	var yl = F((OO, vl) => {
		var h9 = gi();
		vl.exports = h9
	});
	var bl = F((qO, gl) => {
		var m9 = yl();
		gl.exports = m9
	});
	var xl = F((RO, _l) => {
		_l.exports = bl()
	});
	var Sl = F((IO, wl) => {
		wl.exports = xl()
	});
	var Tl = F((NO, dr) => {
		var v9 = Sl();

		function y9(e) {
			if (v9(e)) return e
		}
		dr.exports = y9, dr.exports.__esModule = !0, dr.exports.default = dr.exports
	});
	var ql = F((PO, Ol) => {
		var g9 = vi();
		Ol.exports = g9
	});
	var Rl = F(() => {
		var b9 = M();
		b9("asyncDispose")
	});
	var Il = F(() => {
		var _9 = M();
		_9("dispose")
	});
	var Nl = F(() => {
		var x9 = M();
		x9("matcher")
	});
	var Pl = F(() => {
		var w9 = M();
		w9("metadataKey")
	});
	var kl = F(() => {
		var S9 = M();
		S9("observable")
	});
	var Ll = F(() => {
		var T9 = M();
		T9("metadata")
	});
	var Ml = F(() => {
		var O9 = M();
		O9("patternMatch")
	});
	var jl = F(() => {
		var q9 = M();
		q9("replaceAll")
	});
	var Ul = F((QO, $l) => {
		var R9 = ql();
		Rl();
		Il();
		Nl();
		Pl();
		kl();
		Ll();
		Ml();
		jl();
		$l.exports = R9
	});
	var Vl = F((uq, Hl) => {
		Hl.exports = Ul()
	});
	var zl = F((eq, Kl) => {
		Kl.exports = Vl()
	});
	var Wl = F((tq, pr) => {
		var I9 = zl(),
			N9 = rn();

		function P9(e, u) {
			var t = e == null ? null : typeof I9 < "u" && N9(e) || e["@@iterator"];
			if (t != null) {
				var r, D, n, i, a = [],
					o = !0,
					s = !1;
				try {
					if (n = (t = t.call(e)).next, u === 0) {
						if (Object(t) !== t) return;
						o = !1
					} else
						for (; !(o = (r = n.call(t)).done) && (a.push(r.value), a.length !== u); o = !0);
				} catch (c) {
					s = !0, D = c
				} finally {
					try {
						if (!o && t.return != null && (i = t.return(), Object(i) !== i)) return
					} finally {
						if (s) throw D
					}
				}
				return a
			}
		}
		pr.exports = P9, pr.exports.__esModule = !0, pr.exports.default = pr.exports
	});
	var Zl = F((rq, Gl) => {
		var k9 = y0();
		Gl.exports = k9
	});
	var Jl = F((Dq, Yl) => {
		var L9 = Zl();
		Yl.exports = L9
	});
	var Ql = F((nq, Xl) => {
		Xl.exports = Jl()
	});
	var eC = F((iq, uC) => {
		uC.exports = Ql()
	});
	var rC = F((aq, tC) => {
		var M9 = Z0();
		tC.exports = M9
	});
	var nC = F((sq, DC) => {
		var j9 = rC();
		DC.exports = j9
	});
	var aC = F((oq, iC) => {
		iC.exports = nC()
	});
	var oC = F((Fq, sC) => {
		sC.exports = aC()
	});
	var FC = F((cq, Br) => {
		function $9(e, u) {
			(u == null || u > e.length) && (u = e.length);
			for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
			return r
		}
		Br.exports = $9, Br.exports.__esModule = !0, Br.exports.default = Br.exports
	});
	var EC = F((Eq, hr) => {
		var U9 = eC(),
			H9 = oC(),
			cC = FC();

		function V9(e, u) {
			var t;
			if (!!e) {
				if (typeof e == "string") return cC(e, u);
				var r = U9(t = Object.prototype.toString.call(e)).call(t, 8, -1);
				if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return H9(e);
				if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cC(e, u)
			}
		}
		hr.exports = V9, hr.exports.__esModule = !0, hr.exports.default = hr.exports
	});
	var lC = F((lq, mr) => {
		function K9() {
			throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
		}
		mr.exports = K9, mr.exports.__esModule = !0, mr.exports.default = mr.exports
	});
	var _i = F((Cq, vr) => {
		var z9 = Tl(),
			W9 = Wl(),
			G9 = EC(),
			Z9 = lC();

		function Y9(e, u) {
			return z9(e) || W9(e, u) || G9(e, u) || Z9()
		}
		vr.exports = Y9, vr.exports.__esModule = !0, vr.exports.default = vr.exports
	});
	var CC = F(() => {});
	var fC = F((dq, AC) => {
		"use strict";
		var J9 = Iu();
		AC.exports = function() {
			var e = J9(this),
				u = "";
			return e.hasIndices && (u += "d"), e.global && (u += "g"), e.ignoreCase && (u += "i"), e.multiline && (u += "m"), e.dotAll && (u += "s"), e.unicode && (u += "u"), e.unicodeSets && (u += "v"), e.sticky && (u += "y"), u
		}
	});
	var BC = F((pq, pC) => {
		var X9 = fu(),
			Q9 = iu(),
			u5 = du(),
			e5 = fC(),
			dC = RegExp.prototype;
		pC.exports = function(e) {
			var u = e.flags;
			return u === void 0 && !("flags" in dC) && !Q9(e, "flags") && u5(dC, e) ? X9(e5, e) : u
		}
	});
	var mC = F((Bq, hC) => {
		CC();
		var t5 = BC();
		hC.exports = t5
	});
	var gC = F((hq, yC) => {
		var r5 = du(),
			D5 = mC(),
			vC = RegExp.prototype;
		yC.exports = function(e) {
			return e === vC || r5(vC, e) ? D5(e) : e.flags
		}
	});
	var _C = F((mq, bC) => {
		var n5 = gC();
		bC.exports = n5
	});
	var wC = F((vq, xC) => {
		xC.exports = _C()
	});
	var OC = F((yq, TC) => {
		"use strict";
		var SC = Xt(),
			i5 = TypeError;
		TC.exports = function(e, u) {
			if (!delete e[u]) throw i5("Cannot delete property " + SC(u) + " of " + SC(e))
		}
	});
	var IC = F((gq, RC) => {
		var qC = ui(),
			a5 = Math.floor,
			xi = function(e, u) {
				var t = e.length,
					r = a5(t / 2);
				return t < 8 ? s5(e, u) : o5(e, xi(qC(e, 0, r), u), xi(qC(e, r), u), u)
			},
			s5 = function(e, u) {
				for (var t = e.length, r = 1, D, n; r < t;) {
					for (n = r, D = e[r]; n && u(e[n - 1], D) > 0;) e[n] = e[--n];
					n !== r++ && (e[n] = D)
				}
				return e
			},
			o5 = function(e, u, t, r) {
				for (var D = u.length, n = t.length, i = 0, a = 0; i < D || a < n;) e[i + a] = i < D && a < n ? r(u[i], t[a]) <= 0 ? u[i++] : t[a++] : i < D ? u[i++] : t[a++];
				return e
			};
		RC.exports = xi
	});
	var yr = F((bq, NC) => {
		"use strict";
		var F5 = V();
		NC.exports = function(e, u) {
			var t = [][e];
			return !!t && F5(function() {
				t.call(null, u || function() {
					return 1
				}, 1)
			})
		}
	});
	var LC = F((_q, kC) => {
		var c5 = Yt(),
			PC = c5.match(/firefox\/(\d+)/i);
		kC.exports = !!PC && +PC[1]
	});
	var jC = F((xq, MC) => {
		var E5 = Yt();
		MC.exports = /MSIE|Trident/.test(E5)
	});
	var HC = F((wq, UC) => {
		var l5 = Yt(),
			$C = l5.match(/AppleWebKit\/(\d+)\./);
		UC.exports = !!$C && +$C[1]
	});
	var XC = F(() => {
		"use strict";
		var C5 = z(),
			YC = K(),
			A5 = Ft(),
			f5 = Vu(),
			VC = Gu(),
			d5 = OC(),
			KC = oe(),
			wi = V(),
			p5 = IC(),
			B5 = yr(),
			zC = LC(),
			h5 = jC(),
			WC = ot(),
			GC = HC(),
			le = [],
			ZC = YC(le.sort),
			m5 = YC(le.push),
			v5 = wi(function() {
				le.sort(void 0)
			}),
			y5 = wi(function() {
				le.sort(null)
			}),
			g5 = B5("sort"),
			JC = !wi(function() {
				if (WC) return WC < 70;
				if (!(zC && zC > 3)) {
					if (h5) return !0;
					if (GC) return GC < 603;
					var e = "",
						u, t, r, D;
					for (u = 65; u < 76; u++) {
						switch (t = String.fromCharCode(u), u) {
							case 66:
							case 69:
							case 70:
							case 72:
								r = 3;
								break;
							case 68:
							case 71:
								r = 4;
								break;
							default:
								r = 2
						}
						for (D = 0; D < 47; D++) le.push({
							k: t + D,
							v: r
						})
					}
					for (le.sort(function(n, i) {
							return i.v - n.v
						}), D = 0; D < le.length; D++) t = le[D].k.charAt(0), e.charAt(e.length - 1) !== t && (e += t);
					return e !== "DGBEFHACIJK"
				}
			}),
			b5 = v5 || !y5 || !g5 || !JC,
			_5 = function(e) {
				return function(u, t) {
					return t === void 0 ? -1 : u === void 0 ? 1 : e !== void 0 ? +e(u, t) || 0 : KC(u) > KC(t) ? 1 : -1
				}
			};
		C5({
			target: "Array",
			proto: !0,
			forced: b5
		}, {
			sort: function(u) {
				u !== void 0 && A5(u);
				var t = f5(this);
				if (JC) return u === void 0 ? ZC(t) : ZC(t, u);
				var r = [],
					D = VC(t),
					n, i;
				for (i = 0; i < D; i++) i in t && m5(r, t[i]);
				for (p5(r, _5(u)), n = VC(r), i = 0; i < n;) t[i] = r[i++];
				for (; i < D;) d5(t, i++);
				return t
			}
		})
	});
	var uA = F((Oq, QC) => {
		XC();
		var x5 = se();
		QC.exports = x5("Array").sort
	});
	var tA = F((qq, eA) => {
		var w5 = du(),
			S5 = uA(),
			Si = Array.prototype;
		eA.exports = function(e) {
			var u = e.sort;
			return e === Si || w5(Si, e) && u === Si.sort ? S5 : u
		}
	});
	var DA = F((Rq, rA) => {
		var T5 = tA();
		rA.exports = T5
	});
	var iA = F((Iq, nA) => {
		nA.exports = DA()
	});
	var Ti = F((Nq, aA) => {
		aA.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`
	});
	var FA = F((Pq, oA) => {
		var O5 = K(),
			q5 = Zt(),
			R5 = oe(),
			I5 = Ti(),
			sA = O5("".replace),
			Dn = "[" + I5 + "]",
			N5 = RegExp("^" + Dn + Dn + "*"),
			P5 = RegExp(Dn + Dn + "*$"),
			Oi = function(e) {
				return function(u) {
					var t = R5(q5(u));
					return e & 1 && (t = sA(t, N5, "")), e & 2 && (t = sA(t, P5, "")), t
				}
			};
		oA.exports = {
			start: Oi(1),
			end: Oi(2),
			trim: Oi(3)
		}
	});
	var dA = F((kq, fA) => {
		var CA = nu(),
			k5 = V(),
			L5 = K(),
			M5 = oe(),
			j5 = FA().trim,
			cA = Ti(),
			gr = CA.parseInt,
			EA = CA.Symbol,
			lA = EA && EA.iterator,
			AA = /^[+-]?0x/i,
			$5 = L5(AA.exec),
			U5 = gr(cA + "08") !== 8 || gr(cA + "0x16") !== 22 || lA && !k5(function() {
				gr(Object(lA))
			});
		fA.exports = U5 ? function(u, t) {
			var r = j5(M5(u));
			return gr(r, t >>> 0 || ($5(AA, r) ? 16 : 10))
		} : gr
	});
	var BA = F(() => {
		var H5 = z(),
			pA = dA();
		H5({
			global: !0,
			forced: parseInt != pA
		}, {
			parseInt: pA
		})
	});
	var mA = F((jq, hA) => {
		BA();
		var V5 = _u();
		hA.exports = V5.parseInt
	});
	var yA = F(($q, vA) => {
		var K5 = mA();
		vA.exports = K5
	});
	var bA = F((Uq, gA) => {
		gA.exports = yA()
	});
	var xA = F(() => {
		"use strict";
		var z5 = z(),
			W5 = hD(),
			G5 = T0().indexOf,
			Z5 = yr(),
			qi = W5([].indexOf),
			_A = !!qi && 1 / qi([1], 1, -0) < 0,
			Y5 = Z5("indexOf");
		z5({
			target: "Array",
			proto: !0,
			forced: _A || !Y5
		}, {
			indexOf: function(u) {
				var t = arguments.length > 1 ? arguments[1] : void 0;
				return _A ? qi(this, u, t) || 0 : G5(this, u, t)
			}
		})
	});
	var SA = F((Kq, wA) => {
		xA();
		var J5 = se();
		wA.exports = J5("Array").indexOf
	});
	var OA = F((zq, TA) => {
		var X5 = du(),
			Q5 = SA(),
			Ri = Array.prototype;
		TA.exports = function(e) {
			var u = e.indexOf;
			return e === Ri || X5(Ri, e) && u === Ri.indexOf ? Q5 : u
		}
	});
	var RA = F((Wq, qA) => {
		var uv = OA();
		qA.exports = uv
	});
	var br = F((Gq, IA) => {
		IA.exports = RA()
	});
	var PA = F((Zq, NA) => {
		"use strict";
		var ev = zD().forEach,
			tv = yr(),
			rv = tv("forEach");
		NA.exports = rv ? [].forEach : function(u) {
			return ev(this, u, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var LA = F(() => {
		"use strict";
		var Dv = z(),
			kA = PA();
		Dv({
			target: "Array",
			proto: !0,
			forced: [].forEach != kA
		}, {
			forEach: kA
		})
	});
	var jA = F((Xq, MA) => {
		LA();
		var nv = se();
		MA.exports = nv("Array").forEach
	});
	var UA = F((Qq, $A) => {
		var iv = jA();
		$A.exports = iv
	});
	var VA = F((uR, HA) => {
		tn();
		var av = Re(),
			sv = iu(),
			ov = du(),
			Fv = UA(),
			Ii = Array.prototype,
			cv = {
				DOMTokenList: !0,
				NodeList: !0
			};
		HA.exports = function(e) {
			var u = e.forEach;
			return e === Ii || ov(Ii, e) && u === Ii.forEach || sv(cv, av(e)) ? Fv : u
		}
	});
	var Ni = F((eR, KA) => {
		KA.exports = VA()
	});
	var zA = F(() => {
		var Ev = z(),
			lv = Au(),
			Cv = sr();
		Ev({
			target: "Object",
			stat: !0,
			sham: !lv
		}, {
			create: Cv
		})
	});
	var GA = F((DR, WA) => {
		zA();
		var Av = _u(),
			fv = Av.Object;
		WA.exports = function(u, t) {
			return fv.create(u, t)
		}
	});
	var YA = F((nR, ZA) => {
		var dv = GA();
		ZA.exports = dv
	});
	var XA = F((iR, JA) => {
		JA.exports = YA()
	});
	var uf = F((aR, QA) => {
		X0();
		var pv = se();
		QA.exports = pv("Array").concat
	});
	var tf = F((sR, ef) => {
		var Bv = du(),
			hv = uf(),
			Pi = Array.prototype;
		ef.exports = function(e) {
			var u = e.concat;
			return e === Pi || Bv(Pi, e) && u === Pi.concat ? hv : u
		}
	});
	var Df = F((oR, rf) => {
		var mv = tf();
		rf.exports = mv
	});
	var _r = F((FR, nf) => {
		nf.exports = Df()
	});
	var mf = F((Or, hf) => {
		"use strict";
		var vv = Dr(),
			yv = Y0(),
			gv = yi(),
			bv = rn(),
			_v = bi(),
			xv = zu(),
			Ju = Wu();
		xv(Or, "__esModule", {
			value: !0
		});
		Or.default = void 0;
		var wv = Ju(_i()),
			ke = Ju(wC()),
			Sv = Ju(iA()),
			Su = Ju(Dr()),
			Ff = Ju(bA()),
			Xu = Ju(br()),
			Li = Ju(Ni()),
			cf = Ju(XA()),
			Tv = Ju(_r());

		function Sr(e, u) {
			var t = typeof gv < "u" && bv(e) || e["@@iterator"];
			if (!t) {
				if (_v(e) || (t = Ov(e)) || u && e && typeof e.length == "number") {
					t && (e = t);
					var r = 0,
						D = function() {};
					return {
						s: D,
						n: function() {
							return r >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[r++]
							}
						},
						e: function(s) {
							throw s
						},
						f: D
					}
				}
				throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
			}
			var n = !0,
				i = !1,
				a;
			return {
				s: function() {
					t = t.call(e)
				},
				n: function() {
					var s = t.next();
					return n = s.done, s
				},
				e: function(s) {
					i = !0, a = s
				},
				f: function() {
					try {
						!n && t.return != null && t.return()
					} finally {
						if (i) throw a
					}
				}
			}
		}

		function Ov(e, u) {
			var t;
			if (!!e) {
				if (typeof e == "string") return af(e, u);
				var r = vv(t = Object.prototype.toString.call(e)).call(t, 8, -1);
				if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return yv(e);
				if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return af(e, u)
			}
		}

		function af(e, u) {
			(u == null || u > e.length) && (u = e.length);
			for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
			return r
		}
		var k = "xregexp",
			Le = {
				astral: !1,
				namespacing: !0
			},
			Nu = {},
			xr = {},
			ht = {},
			ki = [],
			mt = "default",
			sf = "class",
			qv = {
				default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
				class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
			},
			Rv = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g,
			Iv = /()??/.exec("")[1] === void 0,
			Nv = (0, ke.default)(/x/) !== void 0;

		function Tr(e) {
			var u = !0;
			try {
				if (new RegExp("", e), e === "y") {
					var t = function() {
							return "gy"
						}(),
						r = ".a".replace(new RegExp("a", t), ".") === "..";
					r && (u = !1)
				}
			} catch {
				u = !1
			}
			return u
		}
		var Pv = Tr("d"),
			Mi = Tr("s"),
			Ef = Tr("u"),
			ji = Tr("y"),
			lf = {
				d: Pv,
				g: !0,
				i: !0,
				m: !0,
				s: Mi,
				u: Ef,
				y: ji
			},
			kv = Mi ? /[^dgimsuy]+/g : /[^dgimuy]+/g;

		function Cf(e, u, t, r, D) {
			var n;
			if (e[k] = {
					captureNames: u
				}, D) return e;
			if (e.__proto__) e.__proto__ = h.prototype;
			else
				for (var i in h.prototype) e[i] = h.prototype[i];
			return e[k].source = t, e[k].flags = r && (0, Sv.default)(n = r.split("")).call(n).join(""), e
		}

		function wr(e) {
			return e.replace(/([\s\S])(?=[\s\S]*\1)/g, "")
		}

		function Me(e, u) {
			var t;
			if (!h.isRegExp(e)) throw new TypeError("Type RegExp expected");
			var r = e[k] || {},
				D = Lv(e),
				n = "",
				i = "",
				a = null,
				o = null;
			return u = u || {}, u.removeG && (i += "g"), u.removeY && (i += "y"), i && (D = D.replace(new RegExp("[".concat(i, "]+"), "g"), "")), u.addG && (n += "g"), u.addY && (n += "y"), n && (D = wr(D + n)), u.isInternalOnly || (r.source !== void 0 && (a = r.source), (0, ke.default)(r) != null && (o = n ? wr((0, ke.default)(r) + n) : (0, ke.default)(r))), e = Cf(new RegExp(u.source || e.source, D), Mv(e) ? (0, Su.default)(t = r.captureNames).call(t, 0) : null, a, o, u.isInternalOnly), e
		}

		function Af(e) {
			return (0, Ff.default)(e, 16)
		}

		function ff(e, u, t) {
			var r = e.index + e[0].length,
				D = e.input[e.index - 1],
				n = e.input[r];
			return /^[()|]$/.test(D) || /^[()|]$/.test(n) || e.index === 0 || r === e.input.length || /\(\?(?:[:=!]|<[=!])$/.test(e.input.substring(e.index - 4, e.index)) || jv(e.input, r, t) ? "" : "(?:)"
		}

		function Lv(e) {
			return Nv ? (0, ke.default)(e) : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(e))[1]
		}

		function Mv(e) {
			return !!(e[k] && e[k].captureNames)
		}

		function $i(e) {
			return (0, Ff.default)(e, 10).toString(16)
		}

		function jv(e, u, t) {
			var r = "\\(\\?#[^)]*\\)",
				D = "#[^#\\n]*",
				n = "[?*+]|{\\d+(?:,\\d*)?}",
				i = (0, Xu.default)(t).call(t, "x") !== -1 ? /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/;
			return i.test((0, Su.default)(e).call(e, u))
		}

		function nn(e, u) {
			return Object.prototype.toString.call(e) === "[object ".concat(u, "]")
		}

		function vt(e) {
			if (e == null) throw new TypeError("Cannot convert null or undefined to object");
			return e
		}

		function Ui(e) {
			for (; e.length < 4;) e = "0".concat(e);
			return e
		}

		function $v(e, u) {
			if (wr(u) !== u) throw new SyntaxError("Invalid duplicate regex flag ".concat(u));
			e = e.replace(/^\(\?([\w$]+)\)/, function(n, i) {
				if (/[dgy]/.test(i)) throw new SyntaxError("Cannot use flags dgy in mode modifier ".concat(n));
				return u = wr(u + i), ""
			});
			var t = Sr(u),
				r;
			try {
				for (t.s(); !(r = t.n()).done;) {
					var D = r.value;
					if (!lf[D]) throw new SyntaxError("Unknown regex flag ".concat(D))
				}
			} catch (n) {
				t.e(n)
			} finally {
				t.f()
			}
			return {
				pattern: e,
				flags: u
			}
		}

		function df(e) {
			var u = {};
			return nn(e, "String") ? ((0, Li.default)(h).call(h, e, /[^\s,]+/, function(t) {
				u[t] = !0
			}), u) : e
		}

		function of(e) {
			if (!/^[\w$]$/.test(e)) throw new Error("Flag must be a single character A-Za-z0-9_$");
			lf[e] = !0
		}

		function Uv(e, u, t, r, D) {
			for (var n = ki.length, i = e[t], a = null, o, s; n--;)
				if (s = ki[n], !(s.leadChar && s.leadChar !== i || s.scope !== r && s.scope !== "all" || s.flag && (0, Xu.default)(u).call(u, s.flag) === -1) && (o = h.exec(e, s.regex, t, "sticky"), o)) {
					a = {
						matchLength: o[0].length,
						output: s.handler.call(D, o, r, u),
						reparse: s.reparse
					};
					break
				} return a
		}

		function pf(e) {
			Le.astral = e
		}

		function Bf(e) {
			Le.namespacing = e
		}

		function h(e, u) {
			if (h.isRegExp(e)) {
				if (u !== void 0) throw new TypeError("Cannot supply flags when copying a RegExp");
				return Me(e)
			}
			if (e = e === void 0 ? "" : String(e), u = u === void 0 ? "" : String(u), h.isInstalled("astral") && (0, Xu.default)(u).call(u, "A") === -1 && (u += "A"), ht[e] || (ht[e] = {}), !ht[e][u]) {
				for (var t = {
						hasNamedCapture: !1,
						captureNames: []
					}, r = mt, D = "", n = 0, i, a = $v(e, u), o = a.pattern, s = (0, ke.default)(a); n < o.length;) {
					do i = Uv(o, s, n, r, t), i && i.reparse && (o = (0, Su.default)(o).call(o, 0, n) + i.output + (0, Su.default)(o).call(o, n + i.matchLength)); while (i && i.reparse);
					if (i) D += i.output, n += i.matchLength || 1;
					else {
						var c = h.exec(o, qv[r], n, "sticky"),
							E = (0, wv.default)(c, 1),
							C = E[0];
						D += C, n += C.length, C === "[" && r === mt ? r = sf : C === "]" && r === sf && (r = mt)
					}
				}
				ht[e][u] = {
					pattern: D.replace(/(?:\(\?:\))+/g, "(?:)"),
					flags: s.replace(kv, ""),
					captures: t.hasNamedCapture ? t.captureNames : null
				}
			}
			var f = ht[e][u];
			return Cf(new RegExp(f.pattern, (0, ke.default)(f)), f.captures, e, u)
		}
		h.prototype = /(?:)/;
		h.version = "5.1.1";
		h._clipDuplicates = wr;
		h._hasNativeFlag = Tr;
		h._dec = Af;
		h._hex = $i;
		h._pad4 = Ui;
		h.addToken = function(e, u, t) {
			t = t || {};
			var r = t,
				D = r.optionalFlags;
			if (t.flag && of(t.flag), D) {
				D = D.split("");
				var n = Sr(D),
					i;
				try {
					for (n.s(); !(i = n.n()).done;) {
						var a = i.value;
						of(a)
					}
				} catch (o) {
					n.e(o)
				} finally {
					n.f()
				}
			}
			ki.push({
				regex: Me(e, {
					addG: !0,
					addY: ji,
					isInternalOnly: !0
				}),
				handler: u,
				scope: t.scope || mt,
				flag: t.flag,
				reparse: t.reparse,
				leadChar: t.leadChar
			}), h.cache.flush("patterns")
		};
		h.cache = function(e, u) {
			return xr[e] || (xr[e] = {}), xr[e][u] || (xr[e][u] = h(e, u))
		};
		h.cache.flush = function(e) {
			e === "patterns" ? ht = {} : xr = {}
		};
		h.escape = function(e) {
			return String(vt(e)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, function(u) {
				return "\\u".concat(Ui($i(u.charCodeAt(0))))
			})
		};
		h.exec = function(e, u, t, r) {
			var D = "g",
				n = !1,
				i = !1,
				a;
			n = ji && !!(r || u.sticky && r !== !1), n ? D += "y" : r && (i = !0, D += "FakeY"), u[k] = u[k] || {};
			var o = u[k][D] || (u[k][D] = Me(u, {
				addG: !0,
				addY: n,
				source: i ? "".concat(u.source, "|()") : void 0,
				removeY: r === !1,
				isInternalOnly: !0
			}));
			return t = t || 0, o.lastIndex = t, a = Nu.exec.call(o, e), i && a && a.pop() === "" && (a = null), u.global && (u.lastIndex = a ? o.lastIndex : 0), a
		};
		h.forEach = function(e, u, t) {
			for (var r = 0, D = -1, n; n = h.exec(e, u, r);) t(n, ++D, e, u), r = n.index + (n[0].length || 1)
		};
		h.globalize = function(e) {
			return Me(e, {
				addG: !0
			})
		};
		h.install = function(e) {
			e = df(e), !Le.astral && e.astral && pf(!0), !Le.namespacing && e.namespacing && Bf(!0)
		};
		h.isInstalled = function(e) {
			return !!Le[e]
		};
		h.isRegExp = function(e) {
			return Object.prototype.toString.call(e) === "[object RegExp]"
		};
		h.match = function(e, u, t) {
			var r = u.global && t !== "one" || t === "all",
				D = (r ? "g" : "") + (u.sticky ? "y" : "") || "noGY";
			u[k] = u[k] || {};
			var n = u[k][D] || (u[k][D] = Me(u, {
					addG: !!r,
					removeG: t === "one",
					isInternalOnly: !0
				})),
				i = String(vt(e)).match(n);
			return u.global && (u.lastIndex = t === "one" && i ? i.index + i[0].length : 0), r ? i || [] : i && i[0]
		};
		h.matchChain = function(e, u) {
			return function t(r, D) {
				var n = u[D].regex ? u[D] : {
						regex: u[D]
					},
					i = [];

				function a(E) {
					if (n.backref) {
						var C = "Backreference to undefined group: ".concat(n.backref),
							f = isNaN(n.backref);
						if (f && h.isInstalled("namespacing")) {
							if (!(E.groups && n.backref in E.groups)) throw new ReferenceError(C)
						} else if (!E.hasOwnProperty(n.backref)) throw new ReferenceError(C);
						var A = f && h.isInstalled("namespacing") ? E.groups[n.backref] : E[n.backref];
						i.push(A || "")
					} else i.push(E[0])
				}
				var o = Sr(r),
					s;
				try {
					for (o.s(); !(s = o.n()).done;) {
						var c = s.value;
						(0, Li.default)(h).call(h, c, n.regex, a)
					}
				} catch (E) {
					o.e(E)
				} finally {
					o.f()
				}
				return D === u.length - 1 || !i.length ? i : t(i, D + 1)
			}([e], 0)
		};
		h.replace = function(e, u, t, r) {
			var D = h.isRegExp(u),
				n = u.global && r !== "one" || r === "all",
				i = (n ? "g" : "") + (u.sticky ? "y" : "") || "noGY",
				a = u;
			D ? (u[k] = u[k] || {}, a = u[k][i] || (u[k][i] = Me(u, {
				addG: !!n,
				removeG: r === "one",
				isInternalOnly: !0
			}))) : n && (a = new RegExp(h.escape(String(u)), "g"));
			var o = Nu.replace.call(vt(e), a, t);
			return D && u.global && (u.lastIndex = 0), o
		};
		h.replaceEach = function(e, u) {
			var t = Sr(u),
				r;
			try {
				for (t.s(); !(r = t.n()).done;) {
					var D = r.value;
					e = h.replace(e, D[0], D[1], D[2])
				}
			} catch (n) {
				t.e(n)
			} finally {
				t.f()
			}
			return e
		};
		h.split = function(e, u, t) {
			return Nu.split.call(vt(e), u, t)
		};
		h.test = function(e, u, t, r) {
			return !!h.exec(e, u, t, r)
		};
		h.uninstall = function(e) {
			e = df(e), Le.astral && e.astral && pf(!1), Le.namespacing && e.namespacing && Bf(!1)
		};
		h.union = function(e, u, t) {
			t = t || {};
			var r = t.conjunction || "or",
				D = 0,
				n, i;

			function a(A, d, m) {
				var v = i[D - n];
				if (d) {
					if (++D, v) return "(?<".concat(v, ">")
				} else if (m) return "\\".concat(+m + n);
				return A
			}
			if (!(nn(e, "Array") && e.length)) throw new TypeError("Must provide a nonempty array of patterns to merge");
			var o = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
				s = [],
				c = Sr(e),
				E;
			try {
				for (c.s(); !(E = c.n()).done;) {
					var C = E.value;
					h.isRegExp(C) ? (n = D, i = C[k] && C[k].captureNames || [], s.push(h(C.source).source.replace(o, a))) : s.push(h.escape(C))
				}
			} catch (A) {
				c.e(A)
			} finally {
				c.f()
			}
			var f = r === "none" ? "" : "|";
			return h(s.join(f), u)
		};
		Nu.exec = function(e) {
			var u = this.lastIndex,
				t = RegExp.prototype.exec.apply(this, arguments);
			if (t) {
				if (!Iv && t.length > 1 && (0, Xu.default)(t).call(t, "") !== -1) {
					var r, D = Me(this, {
						removeG: !0,
						isInternalOnly: !0
					});
					(0, Su.default)(r = String(e)).call(r, t.index).replace(D, function() {
						for (var o = arguments.length, s = 1; s < o - 2; ++s)(s < 0 || arguments.length <= s ? void 0 : arguments[s]) === void 0 && (t[s] = void 0)
					})
				}
				if (this[k] && this[k].captureNames) {
					var n = t;
					h.isInstalled("namespacing") && (t.groups = (0, cf.default)(null), n = t.groups);
					for (var i = 1; i < t.length; ++i) {
						var a = this[k].captureNames[i - 1];
						a && (n[a] = t[i])
					}
				} else !t.groups && h.isInstalled("namespacing") && (t.groups = void 0);
				this.global && !t[0].length && this.lastIndex > t.index && (this.lastIndex = t.index)
			}
			return this.global || (this.lastIndex = u), t
		};
		Nu.test = function(e) {
			return !!Nu.exec.call(this, e)
		};
		Nu.match = function(e) {
			if (!h.isRegExp(e)) e = new RegExp(e);
			else if (e.global) {
				var u = String.prototype.match.apply(this, arguments);
				return e.lastIndex = 0, u
			}
			return Nu.exec.call(e, vt(this))
		};
		Nu.replace = function(e, u) {
			var t = h.isRegExp(e),
				r, D, n;
			return t ? (e[k] && (D = e[k].captureNames), r = e.lastIndex) : e += "", nn(u, "Function") ? n = String(this).replace(e, function() {
				for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
				if (D) {
					var s;
					h.isInstalled("namespacing") ? (s = (0, cf.default)(null), a.push(s)) : (a[0] = new String(a[0]), s = a[0]);
					for (var c = 0; c < D.length; ++c) D[c] && (s[D[c]] = a[c + 1])
				}
				return u.apply(void 0, a)
			}) : n = String(vt(this)).replace(e, function() {
				for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
				return String(u).replace(Rv, s);

				function s(c, E, C, f) {
					E = E || C;
					var A = nn(a[a.length - 1], "Object") ? 4 : 3,
						d = a.length - A;
					if (E) {
						if (/^\d+$/.test(E)) {
							var m = +E;
							if (m <= d) return a[m] || ""
						}
						var v = D ? (0, Xu.default)(D).call(D, E) : -1;
						if (v < 0) throw new SyntaxError("Backreference to undefined group ".concat(c));
						return a[v + 1] || ""
					}
					if (f === "" || f === " ") throw new SyntaxError("Invalid token ".concat(c));
					if (f === "&" || +f == 0) return a[0];
					if (f === "$") return "$";
					if (f === "`") {
						var b;
						return (0, Su.default)(b = a[a.length - 1]).call(b, 0, a[a.length - 2])
					}
					if (f === "'") {
						var x;
						return (0, Su.default)(x = a[a.length - 1]).call(x, a[a.length - 2] + a[0].length)
					}
					if (f = +f, !isNaN(f)) {
						if (f > d) throw new SyntaxError("Backreference to undefined group ".concat(c));
						return a[f] || ""
					}
					throw new SyntaxError("Invalid token ".concat(c))
				}
			}), t && (e.global ? e.lastIndex = 0 : e.lastIndex = r), n
		};
		Nu.split = function(e, u) {
			if (!h.isRegExp(e)) return String.prototype.split.apply(this, arguments);
			var t = String(this),
				r = [],
				D = e.lastIndex,
				n = 0,
				i;
			return u = (u === void 0 ? -1 : u) >>> 0, (0, Li.default)(h).call(h, t, e, function(a) {
				a.index + a[0].length > n && (r.push((0, Su.default)(t).call(t, n, a.index)), a.length > 1 && a.index < t.length && Array.prototype.push.apply(r, (0, Su.default)(a).call(a, 1)), i = a[0].length, n = a.index + i)
			}), n === t.length ? (!e.test("") || i) && r.push("") : r.push((0, Su.default)(t).call(t, n)), e.lastIndex = D, r.length > u ? (0, Su.default)(r).call(r, 0, u) : r
		};
		h.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function(e, u) {
			if (e[1] === "B" && u === mt) return e[0];
			throw new SyntaxError("Invalid escape ".concat(e[0]))
		}, {
			scope: "all",
			leadChar: "\\"
		});
		h.addToken(/\\u{([\dA-Fa-f]+)}/, function(e, u, t) {
			var r = Af(e[1]);
			if (r > 1114111) throw new SyntaxError("Invalid Unicode code point ".concat(e[0]));
			if (r <= 65535) return "\\u".concat(Ui($i(r)));
			if (Ef && (0, Xu.default)(t).call(t, "u") !== -1) return e[0];
			throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u")
		}, {
			scope: "all",
			leadChar: "\\"
		});
		h.addToken(/\(\?#[^)]*\)/, ff, {
			leadChar: "("
		});
		h.addToken(/\s+|#[^\n]*\n?/, ff, {
			flag: "x"
		});
		Mi || h.addToken(/\./, function() {
			return "[\\s\\S]"
		}, {
			flag: "s",
			leadChar: "."
		});
		h.addToken(/\\k<([^>]+)>/, function(e) {
			var u, t, r = isNaN(e[1]) ? (0, Xu.default)(u = this.captureNames).call(u, e[1]) + 1 : +e[1],
				D = e.index + e[0].length;
			if (!r || r > this.captureNames.length) throw new SyntaxError("Backreference to undefined group ".concat(e[0]));
			return (0, Tv.default)(t = "\\".concat(r)).call(t, D === e.input.length || isNaN(e.input[D]) ? "" : "(?:)")
		}, {
			leadChar: "\\"
		});
		h.addToken(/\\(\d+)/, function(e, u) {
			if (!(u === mt && /^[1-9]/.test(e[1]) && +e[1] <= this.captureNames.length) && e[1] !== "0") throw new SyntaxError("Cannot use octal escape or backreference to undefined group ".concat(e[0]));
			return e[0]
		}, {
			scope: "all",
			leadChar: "\\"
		});
		h.addToken(/\(\?P?<((?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF])*)>/, function(e) {
			var u;
			if (!h.isInstalled("namespacing") && (e[1] === "length" || e[1] === "__proto__")) throw new SyntaxError("Cannot use reserved word as capture name ".concat(e[0]));
			if ((0, Xu.default)(u = this.captureNames).call(u, e[1]) !== -1) throw new SyntaxError("Cannot use same name for multiple groups ".concat(e[0]));
			return this.captureNames.push(e[1]), this.hasNamedCapture = !0, "("
		}, {
			leadChar: "("
		});
		h.addToken(/\((?!\?)/, function(e, u, t) {
			return (0, Xu.default)(t).call(t, "n") !== -1 ? "(?:" : (this.captureNames.push(null), "(")
		}, {
			optionalFlags: "n",
			leadChar: "("
		});
		var Hv = h;
		Or.default = Hv;
		hf.exports = Or.default
	});
	var gf = F((cR, yf) => {
		var Vv = Ft(),
			Kv = Vu(),
			zv = vD(),
			Wv = Gu(),
			Gv = TypeError,
			vf = function(e) {
				return function(u, t, r, D) {
					Vv(t);
					var n = Kv(u),
						i = zv(n),
						a = Wv(n),
						o = e ? a - 1 : 0,
						s = e ? -1 : 1;
					if (r < 2)
						for (;;) {
							if (o in i) {
								D = i[o], o += s;
								break
							}
							if (o += s, e ? o < 0 : a <= o) throw Gv("Reduce of empty array with no initial value")
						}
					for (; e ? o >= 0 : a > o; o += s) o in i && (D = t(D, i[o], o, n));
					return D
				}
			};
		yf.exports = {
			left: vf(!1),
			right: vf(!0)
		}
	});
	var _f = F((ER, bf) => {
		var Zv = Se(),
			Yv = nu();
		bf.exports = Zv(Yv.process) == "process"
	});
	var wf = F(() => {
		"use strict";
		var Jv = z(),
			Xv = gf().left,
			Qv = yr(),
			xf = ot(),
			uy = _f(),
			ey = Qv("reduce"),
			ty = !uy && xf > 79 && xf < 83;
		Jv({
			target: "Array",
			proto: !0,
			forced: !ey || ty
		}, {
			reduce: function(u) {
				var t = arguments.length;
				return Xv(this, u, t, t > 1 ? arguments[1] : void 0)
			}
		})
	});
	var Tf = F((AR, Sf) => {
		wf();
		var ry = se();
		Sf.exports = ry("Array").reduce
	});
	var qf = F((fR, Of) => {
		var Dy = du(),
			ny = Tf(),
			Hi = Array.prototype;
		Of.exports = function(e) {
			var u = e.reduce;
			return e === Hi || Dy(Hi, e) && u === Hi.reduce ? ny : u
		}
	});
	var If = F((dR, Rf) => {
		var iy = qf();
		Rf.exports = iy
	});
	var Pf = F((pR, Nf) => {
		Nf.exports = If()
	});
	var kf = F(() => {
		"use strict";
		var ay = z(),
			sy = zD().map,
			oy = PD(),
			Fy = oy("map");
		ay({
			target: "Array",
			proto: !0,
			forced: !Fy
		}, {
			map: function(u) {
				return sy(this, u, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var Mf = F((mR, Lf) => {
		kf();
		var cy = se();
		Lf.exports = cy("Array").map
	});
	var $f = F((vR, jf) => {
		var Ey = du(),
			ly = Mf(),
			Vi = Array.prototype;
		jf.exports = function(e) {
			var u = e.map;
			return e === Vi || Ey(Vi, e) && u === Vi.map ? ly : u
		}
	});
	var Hf = F((yR, Uf) => {
		var Cy = $f();
		Uf.exports = Cy
	});
	var Kf = F((gR, Vf) => {
		Vf.exports = Hf()
	});
	var Gf = F((qr, Wf) => {
		"use strict";
		var Ay = zu(),
			an = Wu();
		Ay(qr, "__esModule", {
			value: !0
		});
		qr.default = void 0;
		var fy = an(Pf()),
			zf = an(Kf()),
			dy = an(br()),
			py = an(_r());
		var By = function(u) {
			var t = "xregexp",
				r = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
				D = u.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, r], "g", {
					conjunction: "or"
				});

			function n(c) {
				var E = /^(?:\(\?:\))*\^/,
					C = /\$(?:\(\?:\))*$/;
				return E.test(c) && C.test(c) && C.test(c.replace(/\\[\s\S]/g, "")) ? c.replace(E, "").replace(C, "") : c
			}

			function i(c, E) {
				var C = E ? "x" : "";
				return u.isRegExp(c) ? c[t] && c[t].captureNames ? c : u(c.source, C) : u(c, C)
			}

			function a(c) {
				return c instanceof RegExp ? c : u.escape(c)
			}

			function o(c, E, C) {
				return c["subpattern".concat(C)] = E, c
			}

			function s(c, E, C) {
				var f = E < C.length - 1;
				return c + (f ? "{{subpattern".concat(E, "}}") : "")
			}
			u.tag = function(c) {
				return function(E) {
					for (var C, f, A = arguments.length, d = new Array(A > 1 ? A - 1 : 0), m = 1; m < A; m++) d[m - 1] = arguments[m];
					var v = (0, fy.default)(C = (0, zf.default)(d).call(d, a)).call(C, o, {}),
						b = (0, zf.default)(f = E.raw).call(f, s).join("");
					return u.build(b, v, c)
				}
			}, u.build = function(c, E, C) {
				C = C || "";
				var f = (0, dy.default)(C).call(C, "x") !== -1,
					A = /^\(\?([\w$]+)\)/.exec(c);
				A && (C = u._clipDuplicates(C + A[1]));
				var d = {};
				for (var m in E)
					if (E.hasOwnProperty(m)) {
						var v = i(E[m], f);
						d[m] = {
							pattern: n(v.source),
							names: v[t].captureNames || []
						}
					} var b = i(c, f),
					x = 0,
					P, j = 0,
					$ = [0],
					U = b[t].captureNames || [],
					J = b.source.replace(D, function(ru, Ou, Nt, qu, ue) {
						var W = Ou || Nt,
							uu, ze, We;
						if (W) {
							var va;
							if (!d.hasOwnProperty(W)) throw new ReferenceError("Undefined property ".concat(ru));
							Ou ? (uu = U[j], $[++j] = ++x, ze = "(?<".concat(uu || W, ">")) : ze = "(?:", P = x;
							var B2 = d[W].pattern.replace(r, function(h2, m2, wn) {
								if (m2) {
									if (uu = d[W].names[x - P], ++x, uu) return "(?<".concat(uu, ">")
								} else if (wn) return We = +wn - 1, d[W].names[We] ? "\\k<".concat(d[W].names[We], ">") : "\\".concat(+wn + P);
								return h2
							});
							return (0, py.default)(va = "".concat(ze)).call(va, B2, ")")
						}
						if (qu) {
							if (uu = U[j], $[++j] = ++x, uu) return "(?<".concat(uu, ">")
						} else if (ue) return We = +ue - 1, U[We] ? "\\k<".concat(U[We], ">") : "\\".concat($[+ue]);
						return ru
					});
				return u(J, C)
			}
		};
		qr.default = By;
		Wf.exports = qr.default
	});
	var Jf = F((Rr, Yf) => {
		"use strict";
		var hy = zu(),
			zi = Wu();
		hy(Rr, "__esModule", {
			value: !0
		});
		Rr.default = void 0;
		var Zf = zi(br()),
			Ki = zi(_r()),
			yt = zi(Dr());
		var my = function(u) {
			function t(r, D, n, i) {
				return {
					name: r,
					value: D,
					start: n,
					end: i
				}
			}
			u.matchRecursive = function(r, D, n, i, a) {
				i = i || "", a = a || {};
				var o = (0, Zf.default)(i).call(i, "g") !== -1,
					s = (0, Zf.default)(i).call(i, "y") !== -1,
					c = i.replace(/y/g, "");
				D = u(D, c), n = u(n, c);
				var E, C = a,
					f = C.escapeChar;
				if (f) {
					var A, d;
					if (f.length > 1) throw new Error("Cannot use more than one escape character");
					f = u.escape(f), E = new RegExp((0, Ki.default)(A = (0, Ki.default)(d = "(?:".concat(f, "[\\S\\s]|(?:(?!")).call(d, u.union([D, n], "", {
						conjunction: "or"
					}).source, ")[^")).call(A, f, "])+)+"), i.replace(u._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, ""))
				}
				for (var m = 0, v = 0, b = 0, x = 0, P, j, $, U, J = a.valueNames, ru = [];;) {
					if (f && (b += (u.exec(r, E, b, "sticky") || [""])[0].length), $ = u.exec(r, D, b), U = u.exec(r, n, b), $ && U && ($.index <= U.index ? U = null : $ = null), $ || U) v = ($ || U).index, b = v + ($ || U)[0].length;
					else if (!m) break;
					if (s && !m && v > x) break;
					if ($) m || (P = v, j = b), m += 1;
					else if (U && m) {
						if (m -= 1, !m && (J ? (J[0] && P > x && ru.push(t(J[0], (0, yt.default)(r).call(r, x, P), x, P)), J[1] && ru.push(t(J[1], (0, yt.default)(r).call(r, P, j), P, j)), J[2] && ru.push(t(J[2], (0, yt.default)(r).call(r, j, v), j, v)), J[3] && ru.push(t(J[3], (0, yt.default)(r).call(r, v, b), v, b))) : ru.push((0, yt.default)(r).call(r, j, v)), x = b, !o)) break
					} else {
						var Ou = a.unbalanced || "error";
						if (Ou === "skip" || Ou === "skip-lazy")
							if (U) U = null;
							else {
								if (Ou === "skip") {
									var Nt = u.exec(r, D, P, "sticky")[0].length;
									b = P + (Nt || 1)
								} else b = P + 1;
								m = 0
							}
						else if (Ou === "error") {
							var qu, ue = U ? "right" : "left",
								W = U ? v : P;
							throw new Error((0, Ki.default)(qu = "Unbalanced ".concat(ue, " delimiter found in string at position ")).call(qu, W))
						} else throw new Error("Unsupported value for unbalanced: ".concat(Ou))
					}
					v === b && (b += 1)
				}
				return o && ru.length > 0 && !s && J && J[0] && r.length > x && ru.push(t(J[0], (0, yt.default)(r).call(r, x), x, r.length)), ru
			}
		};
		Rr.default = my;
		Yf.exports = Rr.default
	});
	var ud = F((Ir, Qf) => {
		"use strict";
		var vy = Dr(),
			yy = Y0(),
			gy = yi(),
			by = rn(),
			_y = bi(),
			xy = zu(),
			sn = Wu();
		xy(Ir, "__esModule", {
			value: !0
		});
		Ir.default = void 0;
		var wy = sn(_i()),
			Sy = sn(Ni()),
			Wi = sn(_r()),
			Ty = sn(br());

		function Oy(e, u) {
			var t = typeof gy < "u" && by(e) || e["@@iterator"];
			if (!t) {
				if (_y(e) || (t = qy(e)) || u && e && typeof e.length == "number") {
					t && (e = t);
					var r = 0,
						D = function() {};
					return {
						s: D,
						n: function() {
							return r >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[r++]
							}
						},
						e: function(s) {
							throw s
						},
						f: D
					}
				}
				throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
			}
			var n = !0,
				i = !1,
				a;
			return {
				s: function() {
					t = t.call(e)
				},
				n: function() {
					var s = t.next();
					return n = s.done, s
				},
				e: function(s) {
					i = !0, a = s
				},
				f: function() {
					try {
						!n && t.return != null && t.return()
					} finally {
						if (i) throw a
					}
				}
			}
		}

		function qy(e, u) {
			var t;
			if (!!e) {
				if (typeof e == "string") return Xf(e, u);
				var r = vy(t = Object.prototype.toString.call(e)).call(t, 8, -1);
				if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return yy(e);
				if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xf(e, u)
			}
		}

		function Xf(e, u) {
			(u == null || u > e.length) && (u = e.length);
			for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
			return r
		}
		var Ry = function(u) {
			var t = {},
				r = {},
				D = u._dec,
				n = u._hex,
				i = u._pad4;

			function a(f) {
				return f.replace(/[- _]+/g, "").toLowerCase()
			}

			function o(f) {
				var A = /^\\[xu](.+)/.exec(f);
				return A ? D(A[1]) : f.charCodeAt(f[0] === "\\" ? 1 : 0)
			}

			function s(f) {
				var A = "",
					d = -1;
				return (0, Sy.default)(u).call(u, f, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function(m) {
					var v = o(m[1]);
					v > d + 1 && (A += "\\u".concat(i(n(d + 1))), v > d + 2 && (A += "-\\u".concat(i(n(v - 1))))), d = o(m[2] || m[1])
				}), d < 65535 && (A += "\\u".concat(i(n(d + 1))), d < 65534 && (A += "-\\uFFFF")), A
			}

			function c(f) {
				var A = "b!";
				return t[f][A] || (t[f][A] = s(t[f].bmp))
			}

			function E(f, A) {
				var d = t[f],
					m = "";
				if (d.bmp && !d.isBmpLast) {
					var v;
					m = (0, Wi.default)(v = "[".concat(d.bmp, "]")).call(v, d.astral ? "|" : "")
				}
				if (d.astral && (m += d.astral), d.isBmpLast && d.bmp) {
					var b;
					m += (0, Wi.default)(b = "".concat(d.astral ? "|" : "", "[")).call(b, d.bmp, "]")
				}
				return A ? "(?:(?!".concat(m, ")(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-\uFFFF]))") : "(?:".concat(m, ")")
			}

			function C(f, A) {
				var d = A ? "a!" : "a=";
				return t[f][d] || (t[f][d] = E(f, A))
			}
			u.addToken(/\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/, function(f, A, d) {
				var m = "Invalid double negation ",
					v = "Unknown Unicode token ",
					b = "Unicode token missing data ",
					x = "Astral mode required for Unicode token ",
					P = "Astral mode does not support Unicode tokens within character classes",
					j = (0, wy.default)(f, 6),
					$ = j[0],
					U = j[1],
					J = j[2],
					ru = j[3],
					Ou = j[4],
					Nt = j[5],
					qu = U === "P" || !!J,
					ue = (0, Ty.default)(d).call(d, "A") !== -1,
					W = a(Nt || Ou),
					uu = t[W];
				if (U === "P" && J) throw new SyntaxError(m + $);
				if (!t.hasOwnProperty(W)) throw new SyntaxError(v + $);
				if (ru && !(r[ru] && r[ru][W])) throw new SyntaxError(v + $);
				if (uu.inverseOf) {
					if (W = a(uu.inverseOf), !t.hasOwnProperty(W)) {
						var ze;
						throw new ReferenceError((0, Wi.default)(ze = "".concat(b + $, " -> ")).call(ze, uu.inverseOf))
					}
					uu = t[W], qu = !qu
				}
				if (!(uu.bmp || ue)) throw new SyntaxError(x + $);
				if (ue) {
					if (A === "class") throw new SyntaxError(P);
					return C(W, qu)
				}
				return A === "class" ? qu ? c(W) : uu.bmp : "".concat((qu ? "[^" : "[") + uu.bmp, "]")
			}, {
				scope: "all",
				optionalFlags: "A",
				leadChar: "\\"
			}), u.addUnicodeData = function(f, A) {
				var d = "Unicode token requires name",
					m = "Unicode token has no character data ";
				A && (r[A] = {});
				var v = Oy(f),
					b;
				try {
					for (v.s(); !(b = v.n()).done;) {
						var x = b.value;
						if (!x.name) throw new Error(d);
						if (!(x.inverseOf || x.bmp || x.astral)) throw new Error(m + x.name);
						var P = a(x.name);
						if (t[P] = x, A && (r[A][P] = !0), x.alias) {
							var j = a(x.alias);
							t[j] = x, A && (r[A][j] = !0)
						}
					}
				} catch ($) {
					v.e($)
				} finally {
					v.f()
				}
				u.cache.flush("patterns")
			}, u._getUnicodeProperty = function(f) {
				var A = a(f);
				return t[A]
			}
		};
		Ir.default = Ry;
		Qf.exports = Ir.default
	});
	var td = F((bR, ed) => {
		ed.exports = [{
			name: "C",
			alias: "Other",
			isBmpLast: !0,
			bmp: "\0-\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u0605\u061C\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u086F\u088F-\u0897\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A\u0C3B\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDC\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u1716-\u171E\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ACF-\u1AFF\u1B4D-\u1B4F\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20C1-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31E4-\u31EF\u321F\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA82D-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB6C-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC3-\uFBD2\uFD90\uFD91\uFDC8-\uFDCE\uFDD0-\uFDEF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF",
			astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]"
		}, {
			name: "Cc",
			alias: "Control",
			bmp: "\0-\x7F-\x9F"
		}, {
			name: "Cf",
			alias: "Format",
			bmp: "\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB",
			astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]"
		}, {
			name: "Cn",
			alias: "Unassigned",
			bmp: "\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u05FF\u070E\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u086F\u088F\u0892-\u0897\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A\u0C3B\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDC\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u1716-\u171E\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ACF-\u1AFF\u1B4D-\u1B4F\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u2065\u2072\u2073\u208F\u209D-\u209F\u20C1-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31E4-\u31EF\u321F\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA82D-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB6C-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC3-\uFBD2\uFD90\uFD91\uFDC8-\uFDCE\uFDD0-\uFDEF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD\uFEFE\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFF8\uFFFE\uFFFF",
			astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]"
		}, {
			name: "Co",
			alias: "Private_Use",
			bmp: "\uE000-\uF8FF",
			astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]"
		}, {
			name: "Cs",
			alias: "Surrogate",
			bmp: "\uD800-\uDFFF"
		}, {
			name: "L",
			alias: "Letter",
			bmp: "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
			astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
		}, {
			name: "LC",
			alias: "Cased_Letter",
			bmp: "A-Za-z\xB5\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BC-\u01BF\u01C4-\u0293\u0295-\u02AF\u0370-\u0373\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0560-\u0588\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FD-\u10FF\u13A0-\u13F5\u13F8-\u13FD\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C7B\u2C7E-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA640-\uA66D\uA680-\uA69B\uA722-\uA76F\uA771-\uA787\uA78B-\uA78E\uA790-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F5\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A",
			astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]"
		}, {
			name: "Ll",
			alias: "Lowercase_Letter",
			bmp: "a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A",
			astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]"
		}, {
			name: "Lm",
			alias: "Modifier_Letter",
			bmp: "\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u08C9\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F2-\uA7F4\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uAB69\uFF70\uFF9E\uFF9F",
			astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|\u{1E94B}"
		}, {
			name: "Lo",
			alias: "Other_Letter",
			bmp: "\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05EF-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C8\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1100-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
			astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\u{1DF0A}|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
		}, {
			name: "Lt",
			alias: "Titlecase_Letter",
			bmp: "\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC"
		}, {
			name: "Lu",
			alias: "Uppercase_Letter",
			bmp: "A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A",
			astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]"
		}, {
			name: "M",
			alias: "Mark",
			bmp: "\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F",
			astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"
		}, {
			name: "Mc",
			alias: "Spacing_Mark",
			bmp: "\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\u302E\u302F\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC",
			astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]"
		}, {
			name: "Me",
			alias: "Enclosing_Mark",
			bmp: "\u0488\u0489\u1ABE\u20DD-\u20E0\u20E2-\u20E4\uA670-\uA672"
		}, {
			name: "Mn",
			alias: "Nonspacing_Mark",
			bmp: "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B55\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0D81\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F",
			astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"
		}, {
			name: "N",
			alias: "Number",
			bmp: "0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19",
			astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]"
		}, {
			name: "Nd",
			alias: "Decimal_Number",
			bmp: "0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19",
			astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]"
		}, {
			name: "Nl",
			alias: "Letter_Number",
			bmp: "\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF",
			astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]"
		}, {
			name: "No",
			alias: "Other_Number",
			bmp: "\xB2\xB3\xB9\xBC-\xBE\u09F4-\u09F9\u0B72-\u0B77\u0BF0-\u0BF2\u0C78-\u0C7E\u0D58-\u0D5E\u0D70-\u0D78\u0F2A-\u0F33\u1369-\u137C\u17F0-\u17F9\u19DA\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215F\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA830-\uA835",
			astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]"
		}, {
			name: "P",
			alias: "Punctuation",
			bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65",
			astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\u{1056F}|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\u{1BC9F}|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"
		}, {
			name: "Pc",
			alias: "Connector_Punctuation",
			bmp: "_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F"
		}, {
			name: "Pd",
			alias: "Dash_Punctuation",
			bmp: "\\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u2E5D\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D",
			astral: "\u{10EAD}"
		}, {
			name: "Pe",
			alias: "Close_Punctuation",
			bmp: "\\)\\]\\}\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u2E56\u2E58\u2E5A\u2E5C\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63"
		}, {
			name: "Pf",
			alias: "Final_Punctuation",
			bmp: "\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21"
		}, {
			name: "Pi",
			alias: "Initial_Punctuation",
			bmp: "\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20"
		}, {
			name: "Po",
			alias: "Other_Punctuation",
			bmp: "!-#%-'\\*,\\.\\/:;\\?@\\\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u1805\u1807-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E16\u2E18\u2E19\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E39\u2E3C-\u2E3F\u2E41\u2E43-\u2E4F\u2E52-\u2E54\u3001-\u3003\u303D\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30\uFE45\uFE46\uFE49-\uFE4C\uFE50-\uFE52\uFE54-\uFE57\uFE5F-\uFE61\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C\uFF0E\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65",
			astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\u{1056F}|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\u{1BC9F}|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"
		}, {
			name: "Ps",
			alias: "Open_Punctuation",
			bmp: "\\(\\[\\{\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u2E55\u2E57\u2E59\u2E5B\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62"
		}, {
			name: "S",
			alias: "Symbol",
			bmp: "\\$\\+<->\\^`\\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD",
			astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\u{1173F}|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\u{1BC9C}|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]"
		}, {
			name: "Sc",
			alias: "Currency_Symbol",
			bmp: "\\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20C0\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6",
			astral: "\uD807[\uDFDD-\uDFE0]|\u{1E2FF}|\u{1ECB0}"
		}, {
			name: "Sk",
			alias: "Modifier_Symbol",
			bmp: "\\^`\xA8\xAF\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u0888\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u309B\u309C\uA700-\uA716\uA720\uA721\uA789\uA78A\uAB5B\uAB6A\uAB6B\uFBB2-\uFBC2\uFF3E\uFF40\uFFE3",
			astral: "\uD83C[\uDFFB-\uDFFF]"
		}, {
			name: "Sm",
			alias: "Math_Symbol",
			bmp: "\\+<->\\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC",
			astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]"
		}, {
			name: "So",
			alias: "Other_Symbol",
			bmp: "\xA6\xA9\xAE\xB0\u0482\u058D\u058E\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09FA\u0B70\u0BF3-\u0BF8\u0BFA\u0C7F\u0D4F\u0D79\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A\u218B\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA828-\uA82B\uA836\uA837\uA839\uAA77-\uAA79\uFD40-\uFD4F\uFDCF\uFDFD-\uFDFF\uFFE4\uFFE8\uFFED\uFFEE\uFFFC\uFFFD",
			astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\u{1173F}|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\u{1BC9C}|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\u{1E14F}|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]"
		}, {
			name: "Z",
			alias: "Separator",
			bmp: " \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000"
		}, {
			name: "Zl",
			alias: "Line_Separator",
			bmp: "\u2028"
		}, {
			name: "Zp",
			alias: "Paragraph_Separator",
			bmp: "\u2029"
		}, {
			name: "Zs",
			alias: "Space_Separator",
			bmp: " \xA0\u1680\u2000-\u200A\u202F\u205F\u3000"
		}]
	});
	var Dd = F((Nr, rd) => {
		"use strict";
		var Iy = zu(),
			Ny = Wu();
		Iy(Nr, "__esModule", {
			value: !0
		});
		Nr.default = void 0;
		var Py = Ny(td());
		var ky = function(u) {
			if (!u.addUnicodeData) throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
			u.addUnicodeData(Py.default)
		};
		Nr.default = ky;
		rd.exports = Nr.default
	});
	var id = F((_R, nd) => {
		nd.exports = [{
			name: "ASCII",
			bmp: "\0-\x7F"
		}, {
			name: "Alphabetic",
			bmp: "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u108F\u109A-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1713\u171F-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1ABF\u1AC0\u1ACC-\u1ACE\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4C\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA805\uA807-\uA827\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8F2-\uA8F7\uA8FB\uA8FD-\uA8FF\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uA9E0-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
			astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
		}, {
			name: "Any",
			isBmpLast: !0,
			bmp: "\0-\uFFFF",
			astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]"
		}, {
			name: "Default_Ignorable_Code_Point",
			bmp: "\xAD\u034F\u061C\u115F\u1160\u17B4\u17B5\u180B-\u180F\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8",
			astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]"
		}, {
			name: "Lowercase",
			bmp: "a-z\xAA\xB5\xBA\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02B8\u02C0\u02C1\u02E0-\u02E4\u0345\u0371\u0373\u0377\u037A-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1DBF\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u2071\u207F\u2090-\u209C\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2170-\u217F\u2184\u24D0-\u24E9\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7D\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B-\uA69D\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7F8-\uA7FA\uAB30-\uAB5A\uAB5C-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A",
			astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]"
		}, {
			name: "Noncharacter_Code_Point",
			bmp: "\uFDD0-\uFDEF\uFFFE\uFFFF",
			astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]"
		}, {
			name: "Uppercase",
			bmp: "A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A",
			astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]"
		}, {
			name: "White_Space",
			bmp: "	-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000"
		}]
	});
	var sd = F((Pr, ad) => {
		"use strict";
		var Ly = zu(),
			My = Wu();
		Ly(Pr, "__esModule", {
			value: !0
		});
		Pr.default = void 0;
		var jy = My(id());
		var $y = function(u) {
			if (!u.addUnicodeData) throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
			var t = jy.default;
			t.push({
				name: "Assigned",
				inverseOf: "Cn"
			}), u.addUnicodeData(t)
		};
		Pr.default = $y;
		ad.exports = Pr.default
	});
	var Fd = F((xR, od) => {
		od.exports = [{
			name: "Adlam",
			astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]"
		}, {
			name: "Ahom",
			astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]"
		}, {
			name: "Anatolian_Hieroglyphs",
			astral: "\uD811[\uDC00-\uDE46]"
		}, {
			name: "Arabic",
			bmp: "\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC",
			astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]"
		}, {
			name: "Armenian",
			bmp: "\u0531-\u0556\u0559-\u058A\u058D-\u058F\uFB13-\uFB17"
		}, {
			name: "Avestan",
			astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]"
		}, {
			name: "Balinese",
			bmp: "\u1B00-\u1B4C\u1B50-\u1B7E"
		}, {
			name: "Bamum",
			bmp: "\uA6A0-\uA6F7",
			astral: "\uD81A[\uDC00-\uDE38]"
		}, {
			name: "Bassa_Vah",
			astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]"
		}, {
			name: "Batak",
			bmp: "\u1BC0-\u1BF3\u1BFC-\u1BFF"
		}, {
			name: "Bengali",
			bmp: "\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE"
		}, {
			name: "Bhaiksuki",
			astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]"
		}, {
			name: "Bopomofo",
			bmp: "\u02EA\u02EB\u3105-\u312F\u31A0-\u31BF"
		}, {
			name: "Brahmi",
			astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]"
		}, {
			name: "Braille",
			bmp: "\u2800-\u28FF"
		}, {
			name: "Buginese",
			bmp: "\u1A00-\u1A1B\u1A1E\u1A1F"
		}, {
			name: "Buhid",
			bmp: "\u1740-\u1753"
		}, {
			name: "Canadian_Aboriginal",
			bmp: "\u1400-\u167F\u18B0-\u18F5",
			astral: "\uD806[\uDEB0-\uDEBF]"
		}, {
			name: "Carian",
			astral: "\uD800[\uDEA0-\uDED0]"
		}, {
			name: "Caucasian_Albanian",
			astral: "\uD801[\uDD30-\uDD63\uDD6F]"
		}, {
			name: "Chakma",
			astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]"
		}, {
			name: "Cham",
			bmp: "\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F"
		}, {
			name: "Cherokee",
			bmp: "\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF"
		}, {
			name: "Chorasmian",
			astral: "\uD803[\uDFB0-\uDFCB]"
		}, {
			name: "Common",
			bmp: "\0-@\\[-`\\{-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u02E9\u02EC-\u02FF\u0374\u037E\u0385\u0387\u0605\u060C\u061B\u061F\u0640\u06DD\u08E2\u0964\u0965\u0E3F\u0FD5-\u0FD8\u10FB\u16EB-\u16ED\u1735\u1736\u1802\u1803\u1805\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5-\u1CF7\u1CFA\u2000-\u200B\u200E-\u2064\u2066-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20C0\u2100-\u2125\u2127-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189-\u218B\u2190-\u2426\u2440-\u244A\u2460-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2E00-\u2E5D\u2FF0-\u2FFB\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303C-\u303F\u309B\u309C\u30A0\u30FB\u30FC\u3190-\u319F\u31C0-\u31E3\u3220-\u325F\u327F-\u32CF\u32FF\u3358-\u33FF\u4DC0-\u4DFF\uA700-\uA721\uA788-\uA78A\uA830-\uA839\uA92E\uA9CF\uAB5B\uAB6A\uAB6B\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFF70\uFF9E\uFF9F\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD",
			astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]"
		}, {
			name: "Coptic",
			bmp: "\u03E2-\u03EF\u2C80-\u2CF3\u2CF9-\u2CFF"
		}, {
			name: "Cuneiform",
			astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]"
		}, {
			name: "Cypriot",
			astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]"
		}, {
			name: "Cypro_Minoan",
			astral: "\uD80B[\uDF90-\uDFF2]"
		}, {
			name: "Cyrillic",
			bmp: "\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F"
		}, {
			name: "Deseret",
			astral: "\uD801[\uDC00-\uDC4F]"
		}, {
			name: "Devanagari",
			bmp: "\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF"
		}, {
			name: "Dives_Akuru",
			astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]"
		}, {
			name: "Dogra",
			astral: "\uD806[\uDC00-\uDC3B]"
		}, {
			name: "Duployan",
			astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]"
		}, {
			name: "Egyptian_Hieroglyphs",
			astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]"
		}, {
			name: "Elbasan",
			astral: "\uD801[\uDD00-\uDD27]"
		}, {
			name: "Elymaic",
			astral: "\uD803[\uDFE0-\uDFF6]"
		}, {
			name: "Ethiopic",
			bmp: "\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E",
			astral: "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]"
		}, {
			name: "Georgian",
			bmp: "\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u1C90-\u1CBA\u1CBD-\u1CBF\u2D00-\u2D25\u2D27\u2D2D"
		}, {
			name: "Glagolitic",
			bmp: "\u2C00-\u2C5F",
			astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]"
		}, {
			name: "Gothic",
			astral: "\uD800[\uDF30-\uDF4A]"
		}, {
			name: "Grantha",
			astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]"
		}, {
			name: "Greek",
			bmp: "\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65",
			astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]"
		}, {
			name: "Gujarati",
			bmp: "\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF"
		}, {
			name: "Gunjala_Gondi",
			astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]"
		}, {
			name: "Gurmukhi",
			bmp: "\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76"
		}, {
			name: "Han",
			bmp: "\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9",
			astral: "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
		}, {
			name: "Hangul",
			bmp: "\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC"
		}, {
			name: "Hanifi_Rohingya",
			astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]"
		}, {
			name: "Hanunoo",
			bmp: "\u1720-\u1734"
		}, {
			name: "Hatran",
			astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]"
		}, {
			name: "Hebrew",
			bmp: "\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F"
		}, {
			name: "Hiragana",
			bmp: "\u3041-\u3096\u309D-\u309F",
			astral: "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|\u{1F200}"
		}, {
			name: "Imperial_Aramaic",
			astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]"
		}, {
			name: "Inherited",
			bmp: "\u0300-\u036F\u0485\u0486\u064B-\u0655\u0670\u0951-\u0954\u1AB0-\u1ACE\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u200D\u20D0-\u20F0\u302A-\u302D\u3099\u309A\uFE00-\uFE0F\uFE20-\uFE2D",
			astral: "\uD800[\uDDFD\uDEE0]|\u{1133B}|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]"
		}, {
			name: "Inscriptional_Pahlavi",
			astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]"
		}, {
			name: "Inscriptional_Parthian",
			astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]"
		}, {
			name: "Javanese",
			bmp: "\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF"
		}, {
			name: "Kaithi",
			astral: "\uD804[\uDC80-\uDCC2\uDCCD]"
		}, {
			name: "Kannada",
			bmp: "\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2"
		}, {
			name: "Katakana",
			bmp: "\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D",
			astral: "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]"
		}, {
			name: "Kayah_Li",
			bmp: "\uA900-\uA92D\uA92F"
		}, {
			name: "Kharoshthi",
			astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]"
		}, {
			name: "Khitan_Small_Script",
			astral: "\u{16FE4}|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]"
		}, {
			name: "Khmer",
			bmp: "\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF"
		}, {
			name: "Khojki",
			astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]"
		}, {
			name: "Khudawadi",
			astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]"
		}, {
			name: "Lao",
			bmp: "\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF"
		}, {
			name: "Latin",
			bmp: "A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A",
			astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]"
		}, {
			name: "Lepcha",
			bmp: "\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F"
		}, {
			name: "Limbu",
			bmp: "\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u194F"
		}, {
			name: "Linear_A",
			astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]"
		}, {
			name: "Linear_B",
			astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]"
		}, {
			name: "Lisu",
			bmp: "\uA4D0-\uA4FF",
			astral: "\u{11FB0}"
		}, {
			name: "Lycian",
			astral: "\uD800[\uDE80-\uDE9C]"
		}, {
			name: "Lydian",
			astral: "\uD802[\uDD20-\uDD39\uDD3F]"
		}, {
			name: "Mahajani",
			astral: "\uD804[\uDD50-\uDD76]"
		}, {
			name: "Makasar",
			astral: "\uD807[\uDEE0-\uDEF8]"
		}, {
			name: "Malayalam",
			bmp: "\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F"
		}, {
			name: "Mandaic",
			bmp: "\u0840-\u085B\u085E"
		}, {
			name: "Manichaean",
			astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]"
		}, {
			name: "Marchen",
			astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]"
		}, {
			name: "Masaram_Gondi",
			astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]"
		}, {
			name: "Medefaidrin",
			astral: "\uD81B[\uDE40-\uDE9A]"
		}, {
			name: "Meetei_Mayek",
			bmp: "\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9"
		}, {
			name: "Mende_Kikakui",
			astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]"
		}, {
			name: "Meroitic_Cursive",
			astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]"
		}, {
			name: "Meroitic_Hieroglyphs",
			astral: "\uD802[\uDD80-\uDD9F]"
		}, {
			name: "Miao",
			astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]"
		}, {
			name: "Modi",
			astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]"
		}, {
			name: "Mongolian",
			bmp: "\u1800\u1801\u1804\u1806-\u1819\u1820-\u1878\u1880-\u18AA",
			astral: "\uD805[\uDE60-\uDE6C]"
		}, {
			name: "Mro",
			astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]"
		}, {
			name: "Multani",
			astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]"
		}, {
			name: "Myanmar",
			bmp: "\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F"
		}, {
			name: "Nabataean",
			astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]"
		}, {
			name: "Nandinagari",
			astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]"
		}, {
			name: "New_Tai_Lue",
			bmp: "\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE\u19DF"
		}, {
			name: "Newa",
			astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]"
		}, {
			name: "Nko",
			bmp: "\u07C0-\u07FA\u07FD-\u07FF"
		}, {
			name: "Nushu",
			astral: "\u{16FE1}|\uD82C[\uDD70-\uDEFB]"
		}, {
			name: "Nyiakeng_Puachue_Hmong",
			astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]"
		}, {
			name: "Ogham",
			bmp: "\u1680-\u169C"
		}, {
			name: "Ol_Chiki",
			bmp: "\u1C50-\u1C7F"
		}, {
			name: "Old_Hungarian",
			astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]"
		}, {
			name: "Old_Italic",
			astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]"
		}, {
			name: "Old_North_Arabian",
			astral: "\uD802[\uDE80-\uDE9F]"
		}, {
			name: "Old_Permic",
			astral: "\uD800[\uDF50-\uDF7A]"
		}, {
			name: "Old_Persian",
			astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]"
		}, {
			name: "Old_Sogdian",
			astral: "\uD803[\uDF00-\uDF27]"
		}, {
			name: "Old_South_Arabian",
			astral: "\uD802[\uDE60-\uDE7F]"
		}, {
			name: "Old_Turkic",
			astral: "\uD803[\uDC00-\uDC48]"
		}, {
			name: "Old_Uyghur",
			astral: "\uD803[\uDF70-\uDF89]"
		}, {
			name: "Oriya",
			bmp: "\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77"
		}, {
			name: "Osage",
			astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]"
		}, {
			name: "Osmanya",
			astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]"
		}, {
			name: "Pahawh_Hmong",
			astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]"
		}, {
			name: "Palmyrene",
			astral: "\uD802[\uDC60-\uDC7F]"
		}, {
			name: "Pau_Cin_Hau",
			astral: "\uD806[\uDEC0-\uDEF8]"
		}, {
			name: "Phags_Pa",
			bmp: "\uA840-\uA877"
		}, {
			name: "Phoenician",
			astral: "\uD802[\uDD00-\uDD1B\uDD1F]"
		}, {
			name: "Psalter_Pahlavi",
			astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]"
		}, {
			name: "Rejang",
			bmp: "\uA930-\uA953\uA95F"
		}, {
			name: "Runic",
			bmp: "\u16A0-\u16EA\u16EE-\u16F8"
		}, {
			name: "Samaritan",
			bmp: "\u0800-\u082D\u0830-\u083E"
		}, {
			name: "Saurashtra",
			bmp: "\uA880-\uA8C5\uA8CE-\uA8D9"
		}, {
			name: "Sharada",
			astral: "\uD804[\uDD80-\uDDDF]"
		}, {
			name: "Shavian",
			astral: "\uD801[\uDC50-\uDC7F]"
		}, {
			name: "Siddham",
			astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]"
		}, {
			name: "SignWriting",
			astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]"
		}, {
			name: "Sinhala",
			bmp: "\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4",
			astral: "\uD804[\uDDE1-\uDDF4]"
		}, {
			name: "Sogdian",
			astral: "\uD803[\uDF30-\uDF59]"
		}, {
			name: "Sora_Sompeng",
			astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]"
		}, {
			name: "Soyombo",
			astral: "\uD806[\uDE50-\uDEA2]"
		}, {
			name: "Sundanese",
			bmp: "\u1B80-\u1BBF\u1CC0-\u1CC7"
		}, {
			name: "Syloti_Nagri",
			bmp: "\uA800-\uA82C"
		}, {
			name: "Syriac",
			bmp: "\u0700-\u070D\u070F-\u074A\u074D-\u074F\u0860-\u086A"
		}, {
			name: "Tagalog",
			bmp: "\u1700-\u1715\u171F"
		}, {
			name: "Tagbanwa",
			bmp: "\u1760-\u176C\u176E-\u1770\u1772\u1773"
		}, {
			name: "Tai_Le",
			bmp: "\u1950-\u196D\u1970-\u1974"
		}, {
			name: "Tai_Tham",
			bmp: "\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD"
		}, {
			name: "Tai_Viet",
			bmp: "\uAA80-\uAAC2\uAADB-\uAADF"
		}, {
			name: "Takri",
			astral: "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]"
		}, {
			name: "Tamil",
			bmp: "\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA",
			astral: "\uD807[\uDFC0-\uDFF1\uDFFF]"
		}, {
			name: "Tangsa",
			astral: "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]"
		}, {
			name: "Tangut",
			astral: "\u{16FE0}|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]"
		}, {
			name: "Telugu",
			bmp: "\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F"
		}, {
			name: "Thaana",
			bmp: "\u0780-\u07B1"
		}, {
			name: "Thai",
			bmp: "\u0E01-\u0E3A\u0E40-\u0E5B"
		}, {
			name: "Tibetan",
			bmp: "\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA"
		}, {
			name: "Tifinagh",
			bmp: "\u2D30-\u2D67\u2D6F\u2D70\u2D7F"
		}, {
			name: "Tirhuta",
			astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]"
		}, {
			name: "Toto",
			astral: "\uD838[\uDE90-\uDEAE]"
		}, {
			name: "Ugaritic",
			astral: "\uD800[\uDF80-\uDF9D\uDF9F]"
		}, {
			name: "Vai",
			bmp: "\uA500-\uA62B"
		}, {
			name: "Vithkuqi",
			astral: "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]"
		}, {
			name: "Wancho",
			astral: "\uD838[\uDEC0-\uDEF9\uDEFF]"
		}, {
			name: "Warang_Citi",
			astral: "\uD806[\uDCA0-\uDCF2\uDCFF]"
		}, {
			name: "Yezidi",
			astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]"
		}, {
			name: "Yi",
			bmp: "\uA000-\uA48C\uA490-\uA4C6"
		}, {
			name: "Zanabazar_Square",
			astral: "\uD806[\uDE00-\uDE47]"
		}]
	});
	var Ed = F((kr, cd) => {
		"use strict";
		var Uy = zu(),
			Hy = Wu();
		Uy(kr, "__esModule", {
			value: !0
		});
		kr.default = void 0;
		var Vy = Hy(Fd());
		var Ky = function(u) {
			if (!u.addUnicodeData) throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
			u.addUnicodeData(Vy.default, "Script")
		};
		kr.default = Ky;
		cd.exports = kr.default
	});
	var Cd = F((Lr, ld) => {
		"use strict";
		var zy = zu(),
			je = Wu();
		zy(Lr, "__esModule", {
			value: !0
		});
		Lr.default = void 0;
		var $e = je(mf()),
			Wy = je(Gf()),
			Gy = je(Jf()),
			Zy = je(ud()),
			Yy = je(Dd()),
			Jy = je(sd()),
			Xy = je(Ed());
		(0, Wy.default)($e.default);
		(0, Gy.default)($e.default);
		(0, Zy.default)($e.default);
		(0, Yy.default)($e.default);
		(0, Jy.default)($e.default);
		(0, Xy.default)($e.default);
		var Qy = $e.default;
		Lr.default = Qy;
		ld.exports = Lr.default
	});
	var S2 = () => document.getElementById("app"),
		Ge = () => {
			var e;
			return (e = S2()) == null ? void 0 : e.__vue__
		};

	function ga() {
		if (!Ge()) throw new Error("No Vue instance found.");
		let u = document.getElementById("themebuilder-script");
		if (!u) throw new Error("Could not get script_tag in HTML page");
		let t = u.dataset.agencyId,
			r = u.dataset.embedId;
		if (!t) throw new Error("Could not get agency id from script tag");
		return {
			agencyId: t,
			embedId: r
		}
	}

	function Pt(e, u) {
		return function() {
			return e.apply(u, arguments)
		}
	}
	var {
		toString: _a
	} = Object.prototype, {
		getPrototypeOf: On
	} = Object, qn = (e => u => {
		let t = _a.call(u);
		return e[t] || (e[t] = t.slice(8, -1).toLowerCase())
	})(Object.create(null)), Pu = e => (e = e.toLowerCase(), u => qn(u) === e), eD = e => u => typeof u === e, {
		isArray: Ze
	} = Array, kt = eD("undefined");

	function T2(e) {
		return e !== null && !kt(e) && e.constructor !== null && !kt(e.constructor) && Ae(e.constructor.isBuffer) && e.constructor.isBuffer(e)
	}
	var xa = Pu("ArrayBuffer");

	function O2(e) {
		let u;
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? u = ArrayBuffer.isView(e) : u = e && e.buffer && xa(e.buffer), u
	}
	var q2 = eD("string"),
		Ae = eD("function"),
		wa = eD("number"),
		Rn = e => e !== null && typeof e == "object",
		R2 = e => e === !0 || e === !1,
		uD = e => {
			if (qn(e) !== "object") return !1;
			let u = On(e);
			return (u === null || u === Object.prototype || Object.getPrototypeOf(u) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
		},
		I2 = Pu("Date"),
		N2 = Pu("File"),
		P2 = Pu("Blob"),
		k2 = Pu("FileList"),
		L2 = e => Rn(e) && Ae(e.pipe),
		M2 = e => {
			let u = "[object FormData]";
			return e && (typeof FormData == "function" && e instanceof FormData || _a.call(e) === u || Ae(e.toString) && e.toString() === u)
		},
		j2 = Pu("URLSearchParams"),
		$2 = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

	function Lt(e, u, {
		allOwnKeys: t = !1
	} = {}) {
		if (e === null || typeof e > "u") return;
		let r, D;
		if (typeof e != "object" && (e = [e]), Ze(e))
			for (r = 0, D = e.length; r < D; r++) u.call(null, e[r], r, e);
		else {
			let n = t ? Object.getOwnPropertyNames(e) : Object.keys(e),
				i = n.length,
				a;
			for (r = 0; r < i; r++) a = n[r], u.call(null, e[a], a, e)
		}
	}

	function Sa(e, u) {
		u = u.toLowerCase();
		let t = Object.keys(e),
			r = t.length,
			D;
		for (; r-- > 0;)
			if (D = t[r], u === D.toLowerCase()) return D;
		return null
	}
	var Ta = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
		Oa = e => !kt(e) && e !== Ta;

	function Tn() {
		let {
			caseless: e
		} = Oa(this) && this || {}, u = {}, t = (r, D) => {
			let n = e && Sa(u, D) || D;
			uD(u[n]) && uD(r) ? u[n] = Tn(u[n], r) : uD(r) ? u[n] = Tn({}, r) : Ze(r) ? u[n] = r.slice() : u[n] = r
		};
		for (let r = 0, D = arguments.length; r < D; r++) arguments[r] && Lt(arguments[r], t);
		return u
	}
	var U2 = (e, u, t, {
			allOwnKeys: r
		} = {}) => (Lt(u, (D, n) => {
			t && Ae(D) ? e[n] = Pt(D, t) : e[n] = D
		}, {
			allOwnKeys: r
		}), e),
		H2 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
		V2 = (e, u, t, r) => {
			e.prototype = Object.create(u.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
				value: u.prototype
			}), t && Object.assign(e.prototype, t)
		},
		K2 = (e, u, t, r) => {
			let D, n, i, a = {};
			if (u = u || {}, e == null) return u;
			do {
				for (D = Object.getOwnPropertyNames(e), n = D.length; n-- > 0;) i = D[n], (!r || r(i, e, u)) && !a[i] && (u[i] = e[i], a[i] = !0);
				e = t !== !1 && On(e)
			} while (e && (!t || t(e, u)) && e !== Object.prototype);
			return u
		},
		z2 = (e, u, t) => {
			e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= u.length;
			let r = e.indexOf(u, t);
			return r !== -1 && r === t
		},
		W2 = e => {
			if (!e) return null;
			if (Ze(e)) return e;
			let u = e.length;
			if (!wa(u)) return null;
			let t = new Array(u);
			for (; u-- > 0;) t[u] = e[u];
			return t
		},
		G2 = (e => u => e && u instanceof e)(typeof Uint8Array < "u" && On(Uint8Array)),
		Z2 = (e, u) => {
			let r = (e && e[Symbol.iterator]).call(e),
				D;
			for (;
				(D = r.next()) && !D.done;) {
				let n = D.value;
				u.call(e, n[0], n[1])
			}
		},
		Y2 = (e, u) => {
			let t, r = [];
			for (;
				(t = e.exec(u)) !== null;) r.push(t);
			return r
		},
		J2 = Pu("HTMLFormElement"),
		X2 = e => e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function(t, r, D) {
			return r.toUpperCase() + D
		}),
		ba = (({
			hasOwnProperty: e
		}) => (u, t) => e.call(u, t))(Object.prototype),
		Q2 = Pu("RegExp"),
		qa = (e, u) => {
			let t = Object.getOwnPropertyDescriptors(e),
				r = {};
			Lt(t, (D, n) => {
				u(D, n, e) !== !1 && (r[n] = D)
			}), Object.defineProperties(e, r)
		},
		up = e => {
			qa(e, (u, t) => {
				if (Ae(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1) return !1;
				let r = e[t];
				if (!!Ae(r)) {
					if (u.enumerable = !1, "writable" in u) {
						u.writable = !1;
						return
					}
					u.set || (u.set = () => {
						throw Error("Can not rewrite read-only method '" + t + "'")
					})
				}
			})
		},
		ep = (e, u) => {
			let t = {},
				r = D => {
					D.forEach(n => {
						t[n] = !0
					})
				};
			return Ze(e) ? r(e) : r(String(e).split(u)), t
		},
		tp = () => {},
		rp = (e, u) => (e = +e, Number.isFinite(e) ? e : u),
		Dp = e => {
			let u = new Array(10),
				t = (r, D) => {
					if (Rn(r)) {
						if (u.indexOf(r) >= 0) return;
						if (!("toJSON" in r)) {
							u[D] = r;
							let n = Ze(r) ? [] : {};
							return Lt(r, (i, a) => {
								let o = t(i, D + 1);
								!kt(o) && (n[a] = o)
							}), u[D] = void 0, n
						}
					}
					return r
				};
			return t(e, 0)
		},
		l = {
			isArray: Ze,
			isArrayBuffer: xa,
			isBuffer: T2,
			isFormData: M2,
			isArrayBufferView: O2,
			isString: q2,
			isNumber: wa,
			isBoolean: R2,
			isObject: Rn,
			isPlainObject: uD,
			isUndefined: kt,
			isDate: I2,
			isFile: N2,
			isBlob: P2,
			isRegExp: Q2,
			isFunction: Ae,
			isStream: L2,
			isURLSearchParams: j2,
			isTypedArray: G2,
			isFileList: k2,
			forEach: Lt,
			merge: Tn,
			extend: U2,
			trim: $2,
			stripBOM: H2,
			inherits: V2,
			toFlatObject: K2,
			kindOf: qn,
			kindOfTest: Pu,
			endsWith: z2,
			toArray: W2,
			forEachEntry: Z2,
			matchAll: Y2,
			isHTMLForm: J2,
			hasOwnProperty: ba,
			hasOwnProp: ba,
			reduceDescriptors: qa,
			freezeMethods: up,
			toObjectSet: ep,
			toCamelCase: X2,
			noop: tp,
			toFiniteNumber: rp,
			findKey: Sa,
			global: Ta,
			isContextDefined: Oa,
			toJSONObject: Dp
		};

	function Ye(e, u, t, r, D) {
		Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", u && (this.code = u), t && (this.config = t), r && (this.request = r), D && (this.response = D)
	}
	l.inherits(Ye, Error, {
		toJSON: function() {
			return {
				message: this.message,
				name: this.name,
				description: this.description,
				number: this.number,
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				config: l.toJSONObject(this.config),
				code: this.code,
				status: this.response && this.response.status ? this.response.status : null
			}
		}
	});
	var Ra = Ye.prototype,
		Ia = {};
	["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
		Ia[e] = {
			value: e
		}
	});
	Object.defineProperties(Ye, Ia);
	Object.defineProperty(Ra, "isAxiosError", {
		value: !0
	});
	Ye.from = (e, u, t, r, D, n) => {
		let i = Object.create(Ra);
		return l.toFlatObject(e, i, function(o) {
			return o !== Error.prototype
		}, a => a !== "isAxiosError"), Ye.call(i, e.message, u, t, r, D), i.cause = e, i.name = e.name, n && Object.assign(i, n), i
	};
	var T = Ye;
	var ka = ya(Pa(), 1),
		La = ka.default;

	function In(e) {
		return l.isPlainObject(e) || l.isArray(e)
	}

	function ja(e) {
		return l.endsWith(e, "[]") ? e.slice(0, -2) : e
	}

	function Ma(e, u, t) {
		return e ? e.concat(u).map(function(D, n) {
			return D = ja(D), !t && n ? "[" + D + "]" : D
		}).join(t ? "." : "") : u
	}

	function np(e) {
		return l.isArray(e) && !e.some(In)
	}
	var ip = l.toFlatObject(l, {}, null, function(u) {
		return /^is[A-Z]/.test(u)
	});

	function ap(e) {
		return e && l.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]
	}

	function sp(e, u, t) {
		if (!l.isObject(e)) throw new TypeError("target must be an object");
		u = u || new(La || FormData), t = l.toFlatObject(t, {
			metaTokens: !0,
			dots: !1,
			indexes: !1
		}, !1, function(d, m) {
			return !l.isUndefined(m[d])
		});
		let r = t.metaTokens,
			D = t.visitor || c,
			n = t.dots,
			i = t.indexes,
			o = (t.Blob || typeof Blob < "u" && Blob) && ap(u);
		if (!l.isFunction(D)) throw new TypeError("visitor must be a function");

		function s(A) {
			if (A === null) return "";
			if (l.isDate(A)) return A.toISOString();
			if (!o && l.isBlob(A)) throw new T("Blob is not supported. Use a Buffer instead.");
			return l.isArrayBuffer(A) || l.isTypedArray(A) ? o && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A
		}

		function c(A, d, m) {
			let v = A;
			if (A && !m && typeof A == "object") {
				if (l.endsWith(d, "{}")) d = r ? d : d.slice(0, -2), A = JSON.stringify(A);
				else if (l.isArray(A) && np(A) || l.isFileList(A) || l.endsWith(d, "[]") && (v = l.toArray(A))) return d = ja(d), v.forEach(function(x, P) {
					!(l.isUndefined(x) || x === null) && u.append(i === !0 ? Ma([d], P, n) : i === null ? d : d + "[]", s(x))
				}), !1
			}
			return In(A) ? !0 : (u.append(Ma(m, d, n), s(A)), !1)
		}
		let E = [],
			C = Object.assign(ip, {
				defaultVisitor: c,
				convertValue: s,
				isVisitable: In
			});

		function f(A, d) {
			if (!l.isUndefined(A)) {
				if (E.indexOf(A) !== -1) throw Error("Circular reference detected in " + d.join("."));
				E.push(A), l.forEach(A, function(v, b) {
					(!(l.isUndefined(v) || v === null) && D.call(u, v, l.isString(b) ? b.trim() : b, d, C)) === !0 && f(v, d ? d.concat(b) : [b])
				}), E.pop()
			}
		}
		if (!l.isObject(e)) throw new TypeError("data must be an object");
		return f(e), u
	}
	var ee = sp;

	function $a(e) {
		let u = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+",
			"%00": "\0"
		};
		return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
			return u[r]
		})
	}

	function Ua(e, u) {
		this._pairs = [], e && ee(e, this, u)
	}
	var Ha = Ua.prototype;
	Ha.append = function(u, t) {
		this._pairs.push([u, t])
	};
	Ha.toString = function(u) {
		let t = u ? function(r) {
			return u.call(this, r, $a)
		} : $a;
		return this._pairs.map(function(D) {
			return t(D[0]) + "=" + t(D[1])
		}, "").join("&")
	};
	var tD = Ua;

	function op(e) {
		return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
	}

	function Mt(e, u, t) {
		if (!u) return e;
		let r = t && t.encode || op,
			D = t && t.serialize,
			n;
		if (D ? n = D(u, t) : n = l.isURLSearchParams(u) ? u.toString() : new tD(u, t).toString(r), n) {
			let i = e.indexOf("#");
			i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + n
		}
		return e
	}
	var Nn = class {
			constructor() {
				this.handlers = []
			}
			use(u, t, r) {
				return this.handlers.push({
					fulfilled: u,
					rejected: t,
					synchronous: r ? r.synchronous : !1,
					runWhen: r ? r.runWhen : null
				}), this.handlers.length - 1
			}
			eject(u) {
				this.handlers[u] && (this.handlers[u] = null)
			}
			clear() {
				this.handlers && (this.handlers = [])
			}
			forEach(u) {
				l.forEach(this.handlers, function(r) {
					r !== null && u(r)
				})
			}
		},
		Pn = Nn;
	var rD = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1
	};
	var Va = typeof URLSearchParams < "u" ? URLSearchParams : tD;
	var Ka = FormData;
	var Fp = (() => {
			let e;
			return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
		})(),
		cp = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
		eu = {
			isBrowser: !0,
			classes: {
				URLSearchParams: Va,
				FormData: Ka,
				Blob
			},
			isStandardBrowserEnv: Fp,
			isStandardBrowserWebWorkerEnv: cp,
			protocols: ["http", "https", "file", "blob", "url", "data"]
		};

	function kn(e, u) {
		return ee(e, new eu.classes.URLSearchParams, Object.assign({
			visitor: function(t, r, D, n) {
				return eu.isNode && l.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
			}
		}, u))
	}

	function Ep(e) {
		return l.matchAll(/\w+|\[(\w*)]/g, e).map(u => u[0] === "[]" ? "" : u[1] || u[0])
	}

	function lp(e) {
		let u = {},
			t = Object.keys(e),
			r, D = t.length,
			n;
		for (r = 0; r < D; r++) n = t[r], u[n] = e[n];
		return u
	}

	function Cp(e) {
		function u(t, r, D, n) {
			let i = t[n++],
				a = Number.isFinite(+i),
				o = n >= t.length;
			return i = !i && l.isArray(D) ? D.length : i, o ? (l.hasOwnProp(D, i) ? D[i] = [D[i], r] : D[i] = r, !a) : ((!D[i] || !l.isObject(D[i])) && (D[i] = []), u(t, r, D[i], n) && l.isArray(D[i]) && (D[i] = lp(D[i])), !a)
		}
		if (l.isFormData(e) && l.isFunction(e.entries)) {
			let t = {};
			return l.forEachEntry(e, (r, D) => {
				u(Ep(r), D, t, 0)
			}), t
		}
		return null
	}
	var DD = Cp;
	var Ap = {
		"Content-Type": void 0
	};

	function fp(e, u, t) {
		if (l.isString(e)) try {
			return (u || JSON.parse)(e), l.trim(e)
		} catch (r) {
			if (r.name !== "SyntaxError") throw r
		}
		return (t || JSON.stringify)(e)
	}
	var nD = {
		transitional: rD,
		adapter: ["xhr", "http"],
		transformRequest: [function(u, t) {
			let r = t.getContentType() || "",
				D = r.indexOf("application/json") > -1,
				n = l.isObject(u);
			if (n && l.isHTMLForm(u) && (u = new FormData(u)), l.isFormData(u)) return D && D ? JSON.stringify(DD(u)) : u;
			if (l.isArrayBuffer(u) || l.isBuffer(u) || l.isStream(u) || l.isFile(u) || l.isBlob(u)) return u;
			if (l.isArrayBufferView(u)) return u.buffer;
			if (l.isURLSearchParams(u)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), u.toString();
			let a;
			if (n) {
				if (r.indexOf("application/x-www-form-urlencoded") > -1) return kn(u, this.formSerializer).toString();
				if ((a = l.isFileList(u)) || r.indexOf("multipart/form-data") > -1) {
					let o = this.env && this.env.FormData;
					return ee(a ? {
						"files[]": u
					} : u, o && new o, this.formSerializer)
				}
			}
			return n || D ? (t.setContentType("application/json", !1), fp(u)) : u
		}],
		transformResponse: [function(u) {
			let t = this.transitional || nD.transitional,
				r = t && t.forcedJSONParsing,
				D = this.responseType === "json";
			if (u && l.isString(u) && (r && !this.responseType || D)) {
				let i = !(t && t.silentJSONParsing) && D;
				try {
					return JSON.parse(u)
				} catch (a) {
					if (i) throw a.name === "SyntaxError" ? T.from(a, T.ERR_BAD_RESPONSE, this, null, this.response) : a
				}
			}
			return u
		}],
		timeout: 0,
		xsrfCookieName: "XSRF-TOKEN",
		xsrfHeaderName: "X-XSRF-TOKEN",
		maxContentLength: -1,
		maxBodyLength: -1,
		env: {
			FormData: eu.classes.FormData,
			Blob: eu.classes.Blob
		},
		validateStatus: function(u) {
			return u >= 200 && u < 300
		},
		headers: {
			common: {
				Accept: "application/json, text/plain, */*"
			}
		}
	};
	l.forEach(["delete", "get", "head"], function(u) {
		nD.headers[u] = {}
	});
	l.forEach(["post", "put", "patch"], function(u) {
		nD.headers[u] = l.merge(Ap)
	});
	var Je = nD;
	var dp = l.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
		za = e => {
			let u = {},
				t, r, D;
			return e && e.split(`
`).forEach(function(i) {
				D = i.indexOf(":"), t = i.substring(0, D).trim().toLowerCase(), r = i.substring(D + 1).trim(), !(!t || u[t] && dp[t]) && (t === "set-cookie" ? u[t] ? u[t].push(r) : u[t] = [r] : u[t] = u[t] ? u[t] + ", " + r : r)
			}), u
		};
	var Wa = Symbol("internals");

	function jt(e) {
		return e && String(e).trim().toLowerCase()
	}

	function iD(e) {
		return e === !1 || e == null ? e : l.isArray(e) ? e.map(iD) : String(e)
	}

	function pp(e) {
		let u = Object.create(null),
			t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
			r;
		for (; r = t.exec(e);) u[r[1]] = r[2];
		return u
	}

	function Bp(e) {
		return /^[-_a-zA-Z]+$/.test(e.trim())
	}

	function Ga(e, u, t, r) {
		if (l.isFunction(r)) return r.call(this, u, t);
		if (!!l.isString(u)) {
			if (l.isString(r)) return u.indexOf(r) !== -1;
			if (l.isRegExp(r)) return r.test(u)
		}
	}

	function hp(e) {
		return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (u, t, r) => t.toUpperCase() + r)
	}

	function mp(e, u) {
		let t = l.toCamelCase(" " + u);
		["get", "set", "has"].forEach(r => {
			Object.defineProperty(e, r + t, {
				value: function(D, n, i) {
					return this[r].call(this, u, D, n, i)
				},
				configurable: !0
			})
		})
	}
	var Xe = class {
		constructor(u) {
			u && this.set(u)
		}
		set(u, t, r) {
			let D = this;

			function n(a, o, s) {
				let c = jt(o);
				if (!c) throw new Error("header name must be a non-empty string");
				let E = l.findKey(D, c);
				(!E || D[E] === void 0 || s === !0 || s === void 0 && D[E] !== !1) && (D[E || o] = iD(a))
			}
			let i = (a, o) => l.forEach(a, (s, c) => n(s, c, o));
			return l.isPlainObject(u) || u instanceof this.constructor ? i(u, t) : l.isString(u) && (u = u.trim()) && !Bp(u) ? i(za(u), t) : u != null && n(t, u, r), this
		}
		get(u, t) {
			if (u = jt(u), u) {
				let r = l.findKey(this, u);
				if (r) {
					let D = this[r];
					if (!t) return D;
					if (t === !0) return pp(D);
					if (l.isFunction(t)) return t.call(this, D, r);
					if (l.isRegExp(t)) return t.exec(D);
					throw new TypeError("parser must be boolean|regexp|function")
				}
			}
		}
		has(u, t) {
			if (u = jt(u), u) {
				let r = l.findKey(this, u);
				return !!(r && (!t || Ga(this, this[r], r, t)))
			}
			return !1
		}
		delete(u, t) {
			let r = this,
				D = !1;

			function n(i) {
				if (i = jt(i), i) {
					let a = l.findKey(r, i);
					a && (!t || Ga(r, r[a], a, t)) && (delete r[a], D = !0)
				}
			}
			return l.isArray(u) ? u.forEach(n) : n(u), D
		}
		clear() {
			return Object.keys(this).forEach(this.delete.bind(this))
		}
		normalize(u) {
			let t = this,
				r = {};
			return l.forEach(this, (D, n) => {
				let i = l.findKey(r, n);
				if (i) {
					t[i] = iD(D), delete t[n];
					return
				}
				let a = u ? hp(n) : String(n).trim();
				a !== n && delete t[n], t[a] = iD(D), r[a] = !0
			}), this
		}
		concat(...u) {
			return this.constructor.concat(this, ...u)
		}
		toJSON(u) {
			let t = Object.create(null);
			return l.forEach(this, (r, D) => {
				r != null && r !== !1 && (t[D] = u && l.isArray(r) ? r.join(", ") : r)
			}), t
		} [Symbol.iterator]() {
			return Object.entries(this.toJSON())[Symbol.iterator]()
		}
		toString() {
			return Object.entries(this.toJSON()).map(([u, t]) => u + ": " + t).join(`
`)
		}
		get[Symbol.toStringTag]() {
			return "AxiosHeaders"
		}
		static from(u) {
			return u instanceof this ? u : new this(u)
		}
		static concat(u, ...t) {
			let r = new this(u);
			return t.forEach(D => r.set(D)), r
		}
		static accessor(u) {
			let r = (this[Wa] = this[Wa] = {
					accessors: {}
				}).accessors,
				D = this.prototype;

			function n(i) {
				let a = jt(i);
				r[a] || (mp(D, i), r[a] = !0)
			}
			return l.isArray(u) ? u.forEach(n) : n(u), this
		}
	};
	Xe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
	l.freezeMethods(Xe.prototype);
	l.freezeMethods(Xe);
	var Du = Xe;

	function $t(e, u) {
		let t = this || Je,
			r = u || t,
			D = Du.from(r.headers),
			n = r.data;
		return l.forEach(e, function(a) {
			n = a.call(t, n, D.normalize(), u ? u.status : void 0)
		}), D.normalize(), n
	}

	function Ut(e) {
		return !!(e && e.__CANCEL__)
	}

	function Za(e, u, t) {
		T.call(this, e ?? "canceled", T.ERR_CANCELED, u, t), this.name = "CanceledError"
	}
	l.inherits(Za, T, {
		__CANCEL__: !0
	});
	var te = Za;
	var Ya = null;

	function Ln(e, u, t) {
		let r = t.config.validateStatus;
		!t.status || !r || r(t.status) ? e(t) : u(new T("Request failed with status code " + t.status, [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4], t.config, t.request, t))
	}
	var Ja = eu.isStandardBrowserEnv ? function() {
		return {
			write: function(t, r, D, n, i, a) {
				let o = [];
				o.push(t + "=" + encodeURIComponent(r)), l.isNumber(D) && o.push("expires=" + new Date(D).toGMTString()), l.isString(n) && o.push("path=" + n), l.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ")
			},
			read: function(t) {
				let r = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
				return r ? decodeURIComponent(r[3]) : null
			},
			remove: function(t) {
				this.write(t, "", Date.now() - 864e5)
			}
		}
	}() : function() {
		return {
			write: function() {},
			read: function() {
				return null
			},
			remove: function() {}
		}
	}();

	function Mn(e) {
		return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
	}

	function jn(e, u) {
		return u ? e.replace(/\/+$/, "") + "/" + u.replace(/^\/+/, "") : e
	}

	function Ht(e, u) {
		return e && !Mn(u) ? jn(e, u) : u
	}
	var Xa = eu.isStandardBrowserEnv ? function() {
		let u = /(msie|trident)/i.test(navigator.userAgent),
			t = document.createElement("a"),
			r;

		function D(n) {
			let i = n;
			return u && (t.setAttribute("href", i), i = t.href), t.setAttribute("href", i), {
				href: t.href,
				protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
				host: t.host,
				search: t.search ? t.search.replace(/^\?/, "") : "",
				hash: t.hash ? t.hash.replace(/^#/, "") : "",
				hostname: t.hostname,
				port: t.port,
				pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
			}
		}
		return r = D(window.location.href),
			function(i) {
				let a = l.isString(i) ? D(i) : i;
				return a.protocol === r.protocol && a.host === r.host
			}
	}() : function() {
		return function() {
			return !0
		}
	}();

	function $n(e) {
		let u = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
		return u && u[1] || ""
	}

	function vp(e, u) {
		e = e || 10;
		let t = new Array(e),
			r = new Array(e),
			D = 0,
			n = 0,
			i;
		return u = u !== void 0 ? u : 1e3,
			function(o) {
				let s = Date.now(),
					c = r[n];
				i || (i = s), t[D] = o, r[D] = s;
				let E = n,
					C = 0;
				for (; E !== D;) C += t[E++], E = E % e;
				if (D = (D + 1) % e, D === n && (n = (n + 1) % e), s - i < u) return;
				let f = c && s - c;
				return f ? Math.round(C * 1e3 / f) : void 0
			}
	}
	var Qa = vp;

	function us(e, u) {
		let t = 0,
			r = Qa(50, 250);
		return D => {
			let n = D.loaded,
				i = D.lengthComputable ? D.total : void 0,
				a = n - t,
				o = r(a),
				s = n <= i;
			t = n;
			let c = {
				loaded: n,
				total: i,
				progress: i ? n / i : void 0,
				bytes: a,
				rate: o || void 0,
				estimated: o && i && s ? (i - n) / o : void 0,
				event: D
			};
			c[u ? "download" : "upload"] = !0, e(c)
		}
	}
	var yp = typeof XMLHttpRequest < "u",
		es = yp && function(e) {
			return new Promise(function(t, r) {
				let D = e.data,
					n = Du.from(e.headers).normalize(),
					i = e.responseType,
					a;

				function o() {
					e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a)
				}
				l.isFormData(D) && (eu.isStandardBrowserEnv || eu.isStandardBrowserWebWorkerEnv) && n.setContentType(!1);
				let s = new XMLHttpRequest;
				if (e.auth) {
					let f = e.auth.username || "",
						A = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
					n.set("Authorization", "Basic " + btoa(f + ":" + A))
				}
				let c = Ht(e.baseURL, e.url);
				s.open(e.method.toUpperCase(), Mt(c, e.params, e.paramsSerializer), !0), s.timeout = e.timeout;

				function E() {
					if (!s) return;
					let f = Du.from("getAllResponseHeaders" in s && s.getAllResponseHeaders()),
						d = {
							data: !i || i === "text" || i === "json" ? s.responseText : s.response,
							status: s.status,
							statusText: s.statusText,
							headers: f,
							config: e,
							request: s
						};
					Ln(function(v) {
						t(v), o()
					}, function(v) {
						r(v), o()
					}, d), s = null
				}
				if ("onloadend" in s ? s.onloadend = E : s.onreadystatechange = function() {
						!s || s.readyState !== 4 || s.status === 0 && !(s.responseURL && s.responseURL.indexOf("file:") === 0) || setTimeout(E)
					}, s.onabort = function() {
						!s || (r(new T("Request aborted", T.ECONNABORTED, e, s)), s = null)
					}, s.onerror = function() {
						r(new T("Network Error", T.ERR_NETWORK, e, s)), s = null
					}, s.ontimeout = function() {
						let A = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
							d = e.transitional || rD;
						e.timeoutErrorMessage && (A = e.timeoutErrorMessage), r(new T(A, d.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED, e, s)), s = null
					}, eu.isStandardBrowserEnv) {
					let f = (e.withCredentials || Xa(c)) && e.xsrfCookieName && Ja.read(e.xsrfCookieName);
					f && n.set(e.xsrfHeaderName, f)
				}
				D === void 0 && n.setContentType(null), "setRequestHeader" in s && l.forEach(n.toJSON(), function(A, d) {
					s.setRequestHeader(d, A)
				}), l.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials), i && i !== "json" && (s.responseType = e.responseType), typeof e.onDownloadProgress == "function" && s.addEventListener("progress", us(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && s.upload && s.upload.addEventListener("progress", us(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = f => {
					!s || (r(!f || f.type ? new te(null, e, s) : f), s.abort(), s = null)
				}, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
				let C = $n(c);
				if (C && eu.protocols.indexOf(C) === -1) {
					r(new T("Unsupported protocol " + C + ":", T.ERR_BAD_REQUEST, e));
					return
				}
				s.send(D || null)
			})
		};
	var aD = {
		http: Ya,
		xhr: es
	};
	l.forEach(aD, (e, u) => {
		if (e) {
			try {
				Object.defineProperty(e, "name", {
					value: u
				})
			} catch {}
			Object.defineProperty(e, "adapterName", {
				value: u
			})
		}
	});
	var ts = {
		getAdapter: e => {
			e = l.isArray(e) ? e : [e];
			let {
				length: u
			} = e, t, r;
			for (let D = 0; D < u && (t = e[D], !(r = l.isString(t) ? aD[t.toLowerCase()] : t)); D++);
			if (!r) throw r === !1 ? new T(`Adapter ${t} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(l.hasOwnProp(aD, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`);
			if (!l.isFunction(r)) throw new TypeError("adapter is not a function");
			return r
		},
		adapters: aD
	};

	function Un(e) {
		if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new te(null, e)
	}

	function sD(e) {
		return Un(e), e.headers = Du.from(e.headers), e.data = $t.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ts.getAdapter(e.adapter || Je.adapter)(e).then(function(r) {
			return Un(e), r.data = $t.call(e, e.transformResponse, r), r.headers = Du.from(r.headers), r
		}, function(r) {
			return Ut(r) || (Un(e), r && r.response && (r.response.data = $t.call(e, e.transformResponse, r.response), r.response.headers = Du.from(r.response.headers))), Promise.reject(r)
		})
	}
	var rs = e => e instanceof Du ? e.toJSON() : e;

	function ku(e, u) {
		u = u || {};
		let t = {};

		function r(s, c, E) {
			return l.isPlainObject(s) && l.isPlainObject(c) ? l.merge.call({
				caseless: E
			}, s, c) : l.isPlainObject(c) ? l.merge({}, c) : l.isArray(c) ? c.slice() : c
		}

		function D(s, c, E) {
			if (l.isUndefined(c)) {
				if (!l.isUndefined(s)) return r(void 0, s, E)
			} else return r(s, c, E)
		}

		function n(s, c) {
			if (!l.isUndefined(c)) return r(void 0, c)
		}

		function i(s, c) {
			if (l.isUndefined(c)) {
				if (!l.isUndefined(s)) return r(void 0, s)
			} else return r(void 0, c)
		}

		function a(s, c, E) {
			if (E in u) return r(s, c);
			if (E in e) return r(void 0, s)
		}
		let o = {
			url: n,
			method: n,
			data: n,
			baseURL: i,
			transformRequest: i,
			transformResponse: i,
			paramsSerializer: i,
			timeout: i,
			timeoutMessage: i,
			withCredentials: i,
			adapter: i,
			responseType: i,
			xsrfCookieName: i,
			xsrfHeaderName: i,
			onUploadProgress: i,
			onDownloadProgress: i,
			decompress: i,
			maxContentLength: i,
			maxBodyLength: i,
			beforeRedirect: i,
			transport: i,
			httpAgent: i,
			httpsAgent: i,
			cancelToken: i,
			socketPath: i,
			responseEncoding: i,
			validateStatus: a,
			headers: (s, c) => D(rs(s), rs(c), !0)
		};
		return l.forEach(Object.keys(e).concat(Object.keys(u)), function(c) {
			let E = o[c] || D,
				C = E(e[c], u[c], c);
			l.isUndefined(C) && E !== a || (t[c] = C)
		}), t
	}
	var oD = "1.2.3";
	var Hn = {};
	["object", "boolean", "number", "function", "string", "symbol"].forEach((e, u) => {
		Hn[e] = function(r) {
			return typeof r === e || "a" + (u < 1 ? "n " : " ") + e
		}
	});
	var Ds = {};
	Hn.transitional = function(u, t, r) {
		function D(n, i) {
			return "[Axios v" + oD + "] Transitional option '" + n + "'" + i + (r ? ". " + r : "")
		}
		return (n, i, a) => {
			if (u === !1) throw new T(D(i, " has been removed" + (t ? " in " + t : "")), T.ERR_DEPRECATED);
			return t && !Ds[i] && (Ds[i] = !0, console.warn(D(i, " has been deprecated since v" + t + " and will be removed in the near future"))), u ? u(n, i, a) : !0
		}
	};

	function gp(e, u, t) {
		if (typeof e != "object") throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
		let r = Object.keys(e),
			D = r.length;
		for (; D-- > 0;) {
			let n = r[D],
				i = u[n];
			if (i) {
				let a = e[n],
					o = a === void 0 || i(a, n, e);
				if (o !== !0) throw new T("option " + n + " must be " + o, T.ERR_BAD_OPTION_VALUE);
				continue
			}
			if (t !== !0) throw new T("Unknown option " + n, T.ERR_BAD_OPTION)
		}
	}
	var FD = {
		assertOptions: gp,
		validators: Hn
	};
	var re = FD.validators,
		Qe = class {
			constructor(u) {
				this.defaults = u, this.interceptors = {
					request: new Pn,
					response: new Pn
				}
			}
			request(u, t) {
				typeof u == "string" ? (t = t || {}, t.url = u) : t = u || {}, t = ku(this.defaults, t);
				let {
					transitional: r,
					paramsSerializer: D,
					headers: n
				} = t;
				r !== void 0 && FD.assertOptions(r, {
					silentJSONParsing: re.transitional(re.boolean),
					forcedJSONParsing: re.transitional(re.boolean),
					clarifyTimeoutError: re.transitional(re.boolean)
				}, !1), D !== void 0 && FD.assertOptions(D, {
					encode: re.function,
					serialize: re.function
				}, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
				let i;
				i = n && l.merge(n.common, n[t.method]), i && l.forEach(["delete", "get", "head", "post", "put", "patch", "common"], A => {
					delete n[A]
				}), t.headers = Du.concat(i, n);
				let a = [],
					o = !0;
				this.interceptors.request.forEach(function(d) {
					typeof d.runWhen == "function" && d.runWhen(t) === !1 || (o = o && d.synchronous, a.unshift(d.fulfilled, d.rejected))
				});
				let s = [];
				this.interceptors.response.forEach(function(d) {
					s.push(d.fulfilled, d.rejected)
				});
				let c, E = 0,
					C;
				if (!o) {
					let A = [sD.bind(this), void 0];
					for (A.unshift.apply(A, a), A.push.apply(A, s), C = A.length, c = Promise.resolve(t); E < C;) c = c.then(A[E++], A[E++]);
					return c
				}
				C = a.length;
				let f = t;
				for (E = 0; E < C;) {
					let A = a[E++],
						d = a[E++];
					try {
						f = A(f)
					} catch (m) {
						d.call(this, m);
						break
					}
				}
				try {
					c = sD.call(this, f)
				} catch (A) {
					return Promise.reject(A)
				}
				for (E = 0, C = s.length; E < C;) c = c.then(s[E++], s[E++]);
				return c
			}
			getUri(u) {
				u = ku(this.defaults, u);
				let t = Ht(u.baseURL, u.url);
				return Mt(t, u.params, u.paramsSerializer)
			}
		};
	l.forEach(["delete", "get", "head", "options"], function(u) {
		Qe.prototype[u] = function(t, r) {
			return this.request(ku(r || {}, {
				method: u,
				url: t,
				data: (r || {}).data
			}))
		}
	});
	l.forEach(["post", "put", "patch"], function(u) {
		function t(r) {
			return function(n, i, a) {
				return this.request(ku(a || {}, {
					method: u,
					headers: r ? {
						"Content-Type": "multipart/form-data"
					} : {},
					url: n,
					data: i
				}))
			}
		}
		Qe.prototype[u] = t(), Qe.prototype[u + "Form"] = t(!0)
	});
	var Vt = Qe;
	var Kt = class {
			constructor(u) {
				if (typeof u != "function") throw new TypeError("executor must be a function.");
				let t;
				this.promise = new Promise(function(n) {
					t = n
				});
				let r = this;
				this.promise.then(D => {
					if (!r._listeners) return;
					let n = r._listeners.length;
					for (; n-- > 0;) r._listeners[n](D);
					r._listeners = null
				}), this.promise.then = D => {
					let n, i = new Promise(a => {
						r.subscribe(a), n = a
					}).then(D);
					return i.cancel = function() {
						r.unsubscribe(n)
					}, i
				}, u(function(n, i, a) {
					r.reason || (r.reason = new te(n, i, a), t(r.reason))
				})
			}
			throwIfRequested() {
				if (this.reason) throw this.reason
			}
			subscribe(u) {
				if (this.reason) {
					u(this.reason);
					return
				}
				this._listeners ? this._listeners.push(u) : this._listeners = [u]
			}
			unsubscribe(u) {
				if (!this._listeners) return;
				let t = this._listeners.indexOf(u);
				t !== -1 && this._listeners.splice(t, 1)
			}
			static source() {
				let u;
				return {
					token: new Kt(function(D) {
						u = D
					}),
					cancel: u
				}
			}
		},
		ns = Kt;

	function Vn(e) {
		return function(t) {
			return e.apply(null, t)
		}
	}

	function Kn(e) {
		return l.isObject(e) && e.isAxiosError === !0
	}
	var zn = {
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
		NetworkAuthenticationRequired: 511
	};
	Object.entries(zn).forEach(([e, u]) => {
		zn[u] = e
	});
	var is = zn;

	function as(e) {
		let u = new Vt(e),
			t = Pt(Vt.prototype.request, u);
		return l.extend(t, Vt.prototype, u, {
			allOwnKeys: !0
		}), l.extend(t, u, null, {
			allOwnKeys: !0
		}), t.create = function(D) {
			return as(ku(e, D))
		}, t
	}
	var H = as(Je);
	H.Axios = Vt;
	H.CanceledError = te;
	H.CancelToken = ns;
	H.isCancel = Ut;
	H.VERSION = oD;
	H.toFormData = ee;
	H.AxiosError = T;
	H.Cancel = H.CanceledError;
	H.all = function(u) {
		return Promise.all(u)
	};
	H.spread = Vn;
	H.isAxiosError = Kn;
	H.mergeConfig = ku;
	H.AxiosHeaders = Du;
	H.formToJSON = e => DD(l.isHTMLForm(e) ? new FormData(e) : e);
	H.HttpStatusCode = is;
	H.default = H;
	var ut = H;
	var {
		Axios: mx,
		AxiosError: vx,
		CanceledError: yx,
		isCancel: gx,
		CancelToken: bx,
		VERSION: _x,
		all: xx,
		Cancel: wx,
		isAxiosError: Sx,
		spread: Tx,
		toFormData: Ox,
		AxiosHeaders: qx,
		HttpStatusCode: Rx,
		formToJSON: Ix,
		mergeConfig: Nx
	} = ut;
	var R;
	(function(e) {
		e.assertEqual = D => D;

		function u(D) {}
		e.assertIs = u;

		function t(D) {
			throw new Error
		}
		e.assertNever = t, e.arrayToEnum = D => {
			let n = {};
			for (let i of D) n[i] = i;
			return n
		}, e.getValidEnumValues = D => {
			let n = e.objectKeys(D).filter(a => typeof D[D[a]] != "number"),
				i = {};
			for (let a of n) i[a] = D[a];
			return e.objectValues(i)
		}, e.objectValues = D => e.objectKeys(D).map(function(n) {
			return D[n]
		}), e.objectKeys = typeof Object.keys == "function" ? D => Object.keys(D) : D => {
			let n = [];
			for (let i in D) Object.prototype.hasOwnProperty.call(D, i) && n.push(i);
			return n
		}, e.find = (D, n) => {
			for (let i of D)
				if (n(i)) return i
		}, e.isInteger = typeof Number.isInteger == "function" ? D => Number.isInteger(D) : D => typeof D == "number" && isFinite(D) && Math.floor(D) === D;

		function r(D, n = " | ") {
			return D.map(i => typeof i == "string" ? `'${i}'` : i).join(n)
		}
		e.joinValues = r, e.jsonStringifyReplacer = (D, n) => typeof n == "bigint" ? n.toString() : n
	})(R || (R = {}));
	var B = R.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
		De = e => {
			switch (typeof e) {
				case "undefined":
					return B.undefined;
				case "string":
					return B.string;
				case "number":
					return isNaN(e) ? B.nan : B.number;
				case "boolean":
					return B.boolean;
				case "function":
					return B.function;
				case "bigint":
					return B.bigint;
				case "symbol":
					return B.symbol;
				case "object":
					return Array.isArray(e) ? B.array : e === null ? B.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? B.promise : typeof Map < "u" && e instanceof Map ? B.map : typeof Set < "u" && e instanceof Set ? B.set : typeof Date < "u" && e instanceof Date ? B.date : B.object;
				default:
					return B.unknown
			}
		},
		p = R.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
		bp = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
		mu = class extends Error {
			constructor(u) {
				super(), this.issues = [], this.addIssue = r => {
					this.issues = [...this.issues, r]
				}, this.addIssues = (r = []) => {
					this.issues = [...this.issues, ...r]
				};
				let t = new.target.prototype;
				Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = u
			}
			get errors() {
				return this.issues
			}
			format(u) {
				let t = u || function(n) {
						return n.message
					},
					r = {
						_errors: []
					},
					D = n => {
						for (let i of n.issues)
							if (i.code === "invalid_union") i.unionErrors.map(D);
							else if (i.code === "invalid_return_type") D(i.returnTypeError);
						else if (i.code === "invalid_arguments") D(i.argumentsError);
						else if (i.path.length === 0) r._errors.push(t(i));
						else {
							let a = r,
								o = 0;
							for (; o < i.path.length;) {
								let s = i.path[o];
								o === i.path.length - 1 ? (a[s] = a[s] || {
									_errors: []
								}, a[s]._errors.push(t(i))) : a[s] = a[s] || {
									_errors: []
								}, a = a[s], o++
							}
						}
					};
				return D(this), r
			}
			toString() {
				return this.message
			}
			get message() {
				return JSON.stringify(this.issues, R.jsonStringifyReplacer, 2)
			}
			get isEmpty() {
				return this.issues.length === 0
			}
			flatten(u = t => t.message) {
				let t = {},
					r = [];
				for (let D of this.issues) D.path.length > 0 ? (t[D.path[0]] = t[D.path[0]] || [], t[D.path[0]].push(u(D))) : r.push(u(D));
				return {
					formErrors: r,
					fieldErrors: t
				}
			}
			get formErrors() {
				return this.flatten()
			}
		};
	mu.create = e => new mu(e);
	var zt = (e, u) => {
			let t;
			switch (e.code) {
				case p.invalid_type:
					e.received === B.undefined ? t = "Required" : t = `Expected ${e.expected}, received ${e.received}`;
					break;
				case p.invalid_literal:
					t = `Invalid literal value, expected ${JSON.stringify(e.expected,R.jsonStringifyReplacer)}`;
					break;
				case p.unrecognized_keys:
					t = `Unrecognized key(s) in object: ${R.joinValues(e.keys,", ")}`;
					break;
				case p.invalid_union:
					t = "Invalid input";
					break;
				case p.invalid_union_discriminator:
					t = `Invalid discriminator value. Expected ${R.joinValues(e.options)}`;
					break;
				case p.invalid_enum_value:
					t = `Invalid enum value. Expected ${R.joinValues(e.options)}, received '${e.received}'`;
					break;
				case p.invalid_arguments:
					t = "Invalid function arguments";
					break;
				case p.invalid_return_type:
					t = "Invalid function return type";
					break;
				case p.invalid_date:
					t = "Invalid date";
					break;
				case p.invalid_string:
					typeof e.validation == "object" ? "startsWith" in e.validation ? t = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? t = `Invalid input: must end with "${e.validation.endsWith}"` : R.assertNever(e.validation) : e.validation !== "regex" ? t = `Invalid ${e.validation}` : t = "Invalid";
					break;
				case p.too_small:
					e.type === "array" ? t = `Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)` : e.type === "string" ? t = `String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)` : e.type === "number" ? t = `Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}` : e.type === "date" ? t = `Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(e.minimum)}` : t = "Invalid input";
					break;
				case p.too_big:
					e.type === "array" ? t = `Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)` : e.type === "string" ? t = `String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)` : e.type === "number" ? t = `Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : e.type === "date" ? t = `Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(e.maximum)}` : t = "Invalid input";
					break;
				case p.custom:
					t = "Invalid input";
					break;
				case p.invalid_intersection_types:
					t = "Intersection results could not be merged";
					break;
				case p.not_multiple_of:
					t = `Number must be a multiple of ${e.multipleOf}`;
					break;
				case p.not_finite:
					t = "Number must be finite";
					break;
				default:
					t = u.defaultError, R.assertNever(e)
			}
			return {
				message: t
			}
		},
		cs = zt;

	function _p(e) {
		cs = e
	}

	function ED() {
		return cs
	}
	var lD = e => {
			let {
				data: u,
				path: t,
				errorMaps: r,
				issueData: D
			} = e, n = [...t, ...D.path || []], i = {
				...D,
				path: n
			}, a = "", o = r.filter(s => !!s).slice().reverse();
			for (let s of o) a = s(i, {
				data: u,
				defaultError: a
			}).message;
			return {
				...D,
				path: n,
				message: D.message || a
			}
		},
		xp = [];

	function y(e, u) {
		let t = lD({
			issueData: u,
			data: e.data,
			path: e.path,
			errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, ED(), zt].filter(r => !!r)
		});
		e.common.issues.push(t)
	}
	var X = class {
			constructor() {
				this.value = "valid"
			}
			dirty() {
				this.value === "valid" && (this.value = "dirty")
			}
			abort() {
				this.value !== "aborted" && (this.value = "aborted")
			}
			static mergeArray(u, t) {
				let r = [];
				for (let D of t) {
					if (D.status === "aborted") return _;
					D.status === "dirty" && u.dirty(), r.push(D.value)
				}
				return {
					status: u.value,
					value: r
				}
			}
			static async mergeObjectAsync(u, t) {
				let r = [];
				for (let D of t) r.push({
					key: await D.key,
					value: await D.value
				});
				return X.mergeObjectSync(u, r)
			}
			static mergeObjectSync(u, t) {
				let r = {};
				for (let D of t) {
					let {
						key: n,
						value: i
					} = D;
					if (n.status === "aborted" || i.status === "aborted") return _;
					n.status === "dirty" && u.dirty(), i.status === "dirty" && u.dirty(), (typeof i.value < "u" || D.alwaysSet) && (r[n.value] = i.value)
				}
				return {
					status: u.value,
					value: r
				}
			}
		},
		_ = Object.freeze({
			status: "aborted"
		}),
		Es = e => ({
			status: "dirty",
			value: e
		}),
		tu = e => ({
			status: "valid",
			value: e
		}),
		Wn = e => e.status === "aborted",
		Gn = e => e.status === "dirty",
		CD = e => e.status === "valid",
		AD = e => typeof Promise !== void 0 && e instanceof Promise,
		O;
	(function(e) {
		e.errToObj = u => typeof u == "string" ? {
			message: u
		} : u || {}, e.toString = u => typeof u == "string" ? u : u?.message
	})(O || (O = {}));
	var lu = class {
			constructor(u, t, r, D) {
				this.parent = u, this.data = t, this._path = r, this._key = D
			}
			get path() {
				return this._path.concat(this._key)
			}
		},
		ss = (e, u) => {
			if (CD(u)) return {
				success: !0,
				data: u.value
			}; {
				if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
				let t = new mu(e.common.issues);
				return {
					success: !1,
					error: t
				}
			}
		};

	function S(e) {
		if (!e) return {};
		let {
			errorMap: u,
			invalid_type_error: t,
			required_error: r,
			description: D
		} = e;
		if (u && (t || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
		return u ? {
			errorMap: u,
			description: D
		} : {
			errorMap: (i, a) => i.code !== "invalid_type" ? {
				message: a.defaultError
			} : typeof a.data > "u" ? {
				message: r ?? a.defaultError
			} : {
				message: t ?? a.defaultError
			},
			description: D
		}
	}
	var w = class {
			constructor(u) {
				this.spa = this.safeParseAsync, this._def = u, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
			}
			get description() {
				return this._def.description
			}
			_getType(u) {
				return De(u.data)
			}
			_getOrReturnCtx(u, t) {
				return t || {
					common: u.parent.common,
					data: u.data,
					parsedType: De(u.data),
					schemaErrorMap: this._def.errorMap,
					path: u.path,
					parent: u.parent
				}
			}
			_processInputParams(u) {
				return {
					status: new X,
					ctx: {
						common: u.parent.common,
						data: u.data,
						parsedType: De(u.data),
						schemaErrorMap: this._def.errorMap,
						path: u.path,
						parent: u.parent
					}
				}
			}
			_parseSync(u) {
				let t = this._parse(u);
				if (AD(t)) throw new Error("Synchronous parse encountered promise.");
				return t
			}
			_parseAsync(u) {
				let t = this._parse(u);
				return Promise.resolve(t)
			}
			parse(u, t) {
				let r = this.safeParse(u, t);
				if (r.success) return r.data;
				throw r.error
			}
			safeParse(u, t) {
				var r;
				let D = {
						common: {
							issues: [],
							async: (r = t?.async) !== null && r !== void 0 ? r : !1,
							contextualErrorMap: t?.errorMap
						},
						path: t?.path || [],
						schemaErrorMap: this._def.errorMap,
						parent: null,
						data: u,
						parsedType: De(u)
					},
					n = this._parseSync({
						data: u,
						path: D.path,
						parent: D
					});
				return ss(D, n)
			}
			async parseAsync(u, t) {
				let r = await this.safeParseAsync(u, t);
				if (r.success) return r.data;
				throw r.error
			}
			async safeParseAsync(u, t) {
				let r = {
						common: {
							issues: [],
							contextualErrorMap: t?.errorMap,
							async: !0
						},
						path: t?.path || [],
						schemaErrorMap: this._def.errorMap,
						parent: null,
						data: u,
						parsedType: De(u)
					},
					D = this._parse({
						data: u,
						path: r.path,
						parent: r
					}),
					n = await (AD(D) ? D : Promise.resolve(D));
				return ss(r, n)
			}
			refine(u, t) {
				let r = D => typeof t == "string" || typeof t > "u" ? {
					message: t
				} : typeof t == "function" ? t(D) : t;
				return this._refinement((D, n) => {
					let i = u(D),
						a = () => n.addIssue({
							code: p.custom,
							...r(D)
						});
					return typeof Promise < "u" && i instanceof Promise ? i.then(o => o ? !0 : (a(), !1)) : i ? !0 : (a(), !1)
				})
			}
			refinement(u, t) {
				return this._refinement((r, D) => u(r) ? !0 : (D.addIssue(typeof t == "function" ? t(r, D) : t), !1))
			}
			_refinement(u) {
				return new ou({
					schema: this,
					typeName: g.ZodEffects,
					effect: {
						type: "refinement",
						refinement: u
					}
				})
			}
			superRefine(u) {
				return this._refinement(u)
			}
			optional() {
				return Eu.create(this)
			}
			nullable() {
				return $u.create(this)
			}
			nullish() {
				return this.optional().nullable()
			}
			array() {
				return su.create(this)
			}
			promise() {
				return ae.create(this)
			}
			or(u) {
				return he.create([this, u])
			}
			and(u) {
				return me.create(this, u)
			}
			transform(u) {
				return new ou({
					schema: this,
					typeName: g.ZodEffects,
					effect: {
						type: "transform",
						transform: u
					}
				})
			}
			default (u) {
				let t = typeof u == "function" ? u : () => u;
				return new xe({
					innerType: this,
					defaultValue: t,
					typeName: g.ZodDefault
				})
			}
			brand() {
				return new dD({
					typeName: g.ZodBranded,
					type: this,
					...S(void 0)
				})
			} catch (u) {
				let t = typeof u == "function" ? u : () => u;
				return new it({
					innerType: this,
					defaultValue: t,
					typeName: g.ZodCatch
				})
			}
			describe(u) {
				let t = this.constructor;
				return new t({
					...this._def,
					description: u
				})
			}
			pipe(u) {
				return we.create(this, u)
			}
			isOptional() {
				return this.safeParse(void 0).success
			}
			isNullable() {
				return this.safeParse(null).success
			}
		},
		wp = /^c[^\s-]{8,}$/i,
		Sp = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
		Tp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		Op = e => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}:\\d{2})|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}:\\d{2})|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}:\\d{2})|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"),
		vu = class extends w {
			constructor() {
				super(...arguments), this._regex = (u, t, r) => this.refinement(D => u.test(D), {
					validation: t,
					code: p.invalid_string,
					...O.errToObj(r)
				}), this.nonempty = u => this.min(1, O.errToObj(u)), this.trim = () => new vu({
					...this._def,
					checks: [...this._def.checks, {
						kind: "trim"
					}]
				})
			}
			_parse(u) {
				if (this._def.coerce && (u.data = String(u.data)), this._getType(u) !== B.string) {
					let n = this._getOrReturnCtx(u);
					return y(n, {
						code: p.invalid_type,
						expected: B.string,
						received: n.parsedType
					}), _
				}
				let r = new X,
					D;
				for (let n of this._def.checks)
					if (n.kind === "min") u.data.length < n.value && (D = this._getOrReturnCtx(u, D), y(D, {
						code: p.too_small,
						minimum: n.value,
						type: "string",
						inclusive: !0,
						exact: !1,
						message: n.message
					}), r.dirty());
					else if (n.kind === "max") u.data.length > n.value && (D = this._getOrReturnCtx(u, D), y(D, {
					code: p.too_big,
					maximum: n.value,
					type: "string",
					inclusive: !0,
					exact: !1,
					message: n.message
				}), r.dirty());
				else if (n.kind === "length") {
					let i = u.data.length > n.value,
						a = u.data.length < n.value;
					(i || a) && (D = this._getOrReturnCtx(u, D), i ? y(D, {
						code: p.too_big,
						maximum: n.value,
						type: "string",
						inclusive: !0,
						exact: !0,
						message: n.message
					}) : a && y(D, {
						code: p.too_small,
						minimum: n.value,
						type: "string",
						inclusive: !0,
						exact: !0,
						message: n.message
					}), r.dirty())
				} else if (n.kind === "email") Tp.test(u.data) || (D = this._getOrReturnCtx(u, D), y(D, {
					validation: "email",
					code: p.invalid_string,
					message: n.message
				}), r.dirty());
				else if (n.kind === "uuid") Sp.test(u.data) || (D = this._getOrReturnCtx(u, D), y(D, {
					validation: "uuid",
					code: p.invalid_string,
					message: n.message
				}), r.dirty());
				else if (n.kind === "cuid") wp.test(u.data) || (D = this._getOrReturnCtx(u, D), y(D, {
					validation: "cuid",
					code: p.invalid_string,
					message: n.message
				}), r.dirty());
				else if (n.kind === "url") try {
					new URL(u.data)
				} catch {
					D = this._getOrReturnCtx(u, D), y(D, {
						validation: "url",
						code: p.invalid_string,
						message: n.message
					}), r.dirty()
				} else n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(u.data) || (D = this._getOrReturnCtx(u, D), y(D, {
					validation: "regex",
					code: p.invalid_string,
					message: n.message
				}), r.dirty())) : n.kind === "trim" ? u.data = u.data.trim() : n.kind === "startsWith" ? u.data.startsWith(n.value) || (D = this._getOrReturnCtx(u, D), y(D, {
					code: p.invalid_string,
					validation: {
						startsWith: n.value
					},
					message: n.message
				}), r.dirty()) : n.kind === "endsWith" ? u.data.endsWith(n.value) || (D = this._getOrReturnCtx(u, D), y(D, {
					code: p.invalid_string,
					validation: {
						endsWith: n.value
					},
					message: n.message
				}), r.dirty()) : n.kind === "datetime" ? Op(n).test(u.data) || (D = this._getOrReturnCtx(u, D), y(D, {
					code: p.invalid_string,
					validation: "datetime",
					message: n.message
				}), r.dirty()) : R.assertNever(n);
				return {
					status: r.value,
					value: u.data
				}
			}
			_addCheck(u) {
				return new vu({
					...this._def,
					checks: [...this._def.checks, u]
				})
			}
			email(u) {
				return this._addCheck({
					kind: "email",
					...O.errToObj(u)
				})
			}
			url(u) {
				return this._addCheck({
					kind: "url",
					...O.errToObj(u)
				})
			}
			uuid(u) {
				return this._addCheck({
					kind: "uuid",
					...O.errToObj(u)
				})
			}
			cuid(u) {
				return this._addCheck({
					kind: "cuid",
					...O.errToObj(u)
				})
			}
			datetime(u) {
				var t;
				return typeof u == "string" ? this._addCheck({
					kind: "datetime",
					precision: null,
					offset: !1,
					message: u
				}) : this._addCheck({
					kind: "datetime",
					precision: typeof u?.precision > "u" ? null : u?.precision,
					offset: (t = u?.offset) !== null && t !== void 0 ? t : !1,
					...O.errToObj(u?.message)
				})
			}
			regex(u, t) {
				return this._addCheck({
					kind: "regex",
					regex: u,
					...O.errToObj(t)
				})
			}
			startsWith(u, t) {
				return this._addCheck({
					kind: "startsWith",
					value: u,
					...O.errToObj(t)
				})
			}
			endsWith(u, t) {
				return this._addCheck({
					kind: "endsWith",
					value: u,
					...O.errToObj(t)
				})
			}
			min(u, t) {
				return this._addCheck({
					kind: "min",
					value: u,
					...O.errToObj(t)
				})
			}
			max(u, t) {
				return this._addCheck({
					kind: "max",
					value: u,
					...O.errToObj(t)
				})
			}
			length(u, t) {
				return this._addCheck({
					kind: "length",
					value: u,
					...O.errToObj(t)
				})
			}
			get isDatetime() {
				return !!this._def.checks.find(u => u.kind === "datetime")
			}
			get isEmail() {
				return !!this._def.checks.find(u => u.kind === "email")
			}
			get isURL() {
				return !!this._def.checks.find(u => u.kind === "url")
			}
			get isUUID() {
				return !!this._def.checks.find(u => u.kind === "uuid")
			}
			get isCUID() {
				return !!this._def.checks.find(u => u.kind === "cuid")
			}
			get minLength() {
				let u = null;
				for (let t of this._def.checks) t.kind === "min" && (u === null || t.value > u) && (u = t.value);
				return u
			}
			get maxLength() {
				let u = null;
				for (let t of this._def.checks) t.kind === "max" && (u === null || t.value < u) && (u = t.value);
				return u
			}
		};
	vu.create = e => {
		var u;
		return new vu({
			checks: [],
			typeName: g.ZodString,
			coerce: (u = e?.coerce) !== null && u !== void 0 ? u : !1,
			...S(e)
		})
	};

	function qp(e, u) {
		let t = (e.toString().split(".")[1] || "").length,
			r = (u.toString().split(".")[1] || "").length,
			D = t > r ? t : r,
			n = parseInt(e.toFixed(D).replace(".", "")),
			i = parseInt(u.toFixed(D).replace(".", ""));
		return n % i / Math.pow(10, D)
	}
	var Ru = class extends w {
		constructor() {
			super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
		}
		_parse(u) {
			if (this._def.coerce && (u.data = Number(u.data)), this._getType(u) !== B.number) {
				let n = this._getOrReturnCtx(u);
				return y(n, {
					code: p.invalid_type,
					expected: B.number,
					received: n.parsedType
				}), _
			}
			let r, D = new X;
			for (let n of this._def.checks) n.kind === "int" ? R.isInteger(u.data) || (r = this._getOrReturnCtx(u, r), y(r, {
				code: p.invalid_type,
				expected: "integer",
				received: "float",
				message: n.message
			}), D.dirty()) : n.kind === "min" ? (n.inclusive ? u.data < n.value : u.data <= n.value) && (r = this._getOrReturnCtx(u, r), y(r, {
				code: p.too_small,
				minimum: n.value,
				type: "number",
				inclusive: n.inclusive,
				exact: !1,
				message: n.message
			}), D.dirty()) : n.kind === "max" ? (n.inclusive ? u.data > n.value : u.data >= n.value) && (r = this._getOrReturnCtx(u, r), y(r, {
				code: p.too_big,
				maximum: n.value,
				type: "number",
				inclusive: n.inclusive,
				exact: !1,
				message: n.message
			}), D.dirty()) : n.kind === "multipleOf" ? qp(u.data, n.value) !== 0 && (r = this._getOrReturnCtx(u, r), y(r, {
				code: p.not_multiple_of,
				multipleOf: n.value,
				message: n.message
			}), D.dirty()) : n.kind === "finite" ? Number.isFinite(u.data) || (r = this._getOrReturnCtx(u, r), y(r, {
				code: p.not_finite,
				message: n.message
			}), D.dirty()) : R.assertNever(n);
			return {
				status: D.value,
				value: u.data
			}
		}
		gte(u, t) {
			return this.setLimit("min", u, !0, O.toString(t))
		}
		gt(u, t) {
			return this.setLimit("min", u, !1, O.toString(t))
		}
		lte(u, t) {
			return this.setLimit("max", u, !0, O.toString(t))
		}
		lt(u, t) {
			return this.setLimit("max", u, !1, O.toString(t))
		}
		setLimit(u, t, r, D) {
			return new Ru({
				...this._def,
				checks: [...this._def.checks, {
					kind: u,
					value: t,
					inclusive: r,
					message: O.toString(D)
				}]
			})
		}
		_addCheck(u) {
			return new Ru({
				...this._def,
				checks: [...this._def.checks, u]
			})
		}
		int(u) {
			return this._addCheck({
				kind: "int",
				message: O.toString(u)
			})
		}
		positive(u) {
			return this._addCheck({
				kind: "min",
				value: 0,
				inclusive: !1,
				message: O.toString(u)
			})
		}
		negative(u) {
			return this._addCheck({
				kind: "max",
				value: 0,
				inclusive: !1,
				message: O.toString(u)
			})
		}
		nonpositive(u) {
			return this._addCheck({
				kind: "max",
				value: 0,
				inclusive: !0,
				message: O.toString(u)
			})
		}
		nonnegative(u) {
			return this._addCheck({
				kind: "min",
				value: 0,
				inclusive: !0,
				message: O.toString(u)
			})
		}
		multipleOf(u, t) {
			return this._addCheck({
				kind: "multipleOf",
				value: u,
				message: O.toString(t)
			})
		}
		finite(u) {
			return this._addCheck({
				kind: "finite",
				message: O.toString(u)
			})
		}
		get minValue() {
			let u = null;
			for (let t of this._def.checks) t.kind === "min" && (u === null || t.value > u) && (u = t.value);
			return u
		}
		get maxValue() {
			let u = null;
			for (let t of this._def.checks) t.kind === "max" && (u === null || t.value < u) && (u = t.value);
			return u
		}
		get isInt() {
			return !!this._def.checks.find(u => u.kind === "int")
		}
	};
	Ru.create = e => new Ru({
		checks: [],
		typeName: g.ZodNumber,
		coerce: e?.coerce || !1,
		...S(e)
	});
	var fe = class extends w {
		_parse(u) {
			if (this._def.coerce && (u.data = BigInt(u.data)), this._getType(u) !== B.bigint) {
				let r = this._getOrReturnCtx(u);
				return y(r, {
					code: p.invalid_type,
					expected: B.bigint,
					received: r.parsedType
				}), _
			}
			return tu(u.data)
		}
	};
	fe.create = e => {
		var u;
		return new fe({
			typeName: g.ZodBigInt,
			coerce: (u = e?.coerce) !== null && u !== void 0 ? u : !1,
			...S(e)
		})
	};
	var de = class extends w {
		_parse(u) {
			if (this._def.coerce && (u.data = Boolean(u.data)), this._getType(u) !== B.boolean) {
				let r = this._getOrReturnCtx(u);
				return y(r, {
					code: p.invalid_type,
					expected: B.boolean,
					received: r.parsedType
				}), _
			}
			return tu(u.data)
		}
	};
	de.create = e => new de({
		typeName: g.ZodBoolean,
		coerce: e?.coerce || !1,
		...S(e)
	});
	var Mu = class extends w {
		_parse(u) {
			if (this._def.coerce && (u.data = new Date(u.data)), this._getType(u) !== B.date) {
				let n = this._getOrReturnCtx(u);
				return y(n, {
					code: p.invalid_type,
					expected: B.date,
					received: n.parsedType
				}), _
			}
			if (isNaN(u.data.getTime())) {
				let n = this._getOrReturnCtx(u);
				return y(n, {
					code: p.invalid_date
				}), _
			}
			let r = new X,
				D;
			for (let n of this._def.checks) n.kind === "min" ? u.data.getTime() < n.value && (D = this._getOrReturnCtx(u, D), y(D, {
				code: p.too_small,
				message: n.message,
				inclusive: !0,
				exact: !1,
				minimum: n.value,
				type: "date"
			}), r.dirty()) : n.kind === "max" ? u.data.getTime() > n.value && (D = this._getOrReturnCtx(u, D), y(D, {
				code: p.too_big,
				message: n.message,
				inclusive: !0,
				exact: !1,
				maximum: n.value,
				type: "date"
			}), r.dirty()) : R.assertNever(n);
			return {
				status: r.value,
				value: new Date(u.data.getTime())
			}
		}
		_addCheck(u) {
			return new Mu({
				...this._def,
				checks: [...this._def.checks, u]
			})
		}
		min(u, t) {
			return this._addCheck({
				kind: "min",
				value: u.getTime(),
				message: O.toString(t)
			})
		}
		max(u, t) {
			return this._addCheck({
				kind: "max",
				value: u.getTime(),
				message: O.toString(t)
			})
		}
		get minDate() {
			let u = null;
			for (let t of this._def.checks) t.kind === "min" && (u === null || t.value > u) && (u = t.value);
			return u != null ? new Date(u) : null
		}
		get maxDate() {
			let u = null;
			for (let t of this._def.checks) t.kind === "max" && (u === null || t.value < u) && (u = t.value);
			return u != null ? new Date(u) : null
		}
	};
	Mu.create = e => new Mu({
		checks: [],
		coerce: e?.coerce || !1,
		typeName: g.ZodDate,
		...S(e)
	});
	var tt = class extends w {
		_parse(u) {
			if (this._getType(u) !== B.symbol) {
				let r = this._getOrReturnCtx(u);
				return y(r, {
					code: p.invalid_type,
					expected: B.symbol,
					received: r.parsedType
				}), _
			}
			return tu(u.data)
		}
	};
	tt.create = e => new tt({
		typeName: g.ZodSymbol,
		...S(e)
	});
	var pe = class extends w {
		_parse(u) {
			if (this._getType(u) !== B.undefined) {
				let r = this._getOrReturnCtx(u);
				return y(r, {
					code: p.invalid_type,
					expected: B.undefined,
					received: r.parsedType
				}), _
			}
			return tu(u.data)
		}
	};
	pe.create = e => new pe({
		typeName: g.ZodUndefined,
		...S(e)
	});
	var Be = class extends w {
		_parse(u) {
			if (this._getType(u) !== B.null) {
				let r = this._getOrReturnCtx(u);
				return y(r, {
					code: p.invalid_type,
					expected: B.null,
					received: r.parsedType
				}), _
			}
			return tu(u.data)
		}
	};
	Be.create = e => new Be({
		typeName: g.ZodNull,
		...S(e)
	});
	var ie = class extends w {
		constructor() {
			super(...arguments), this._any = !0
		}
		_parse(u) {
			return tu(u.data)
		}
	};
	ie.create = e => new ie({
		typeName: g.ZodAny,
		...S(e)
	});
	var Lu = class extends w {
		constructor() {
			super(...arguments), this._unknown = !0
		}
		_parse(u) {
			return tu(u.data)
		}
	};
	Lu.create = e => new Lu({
		typeName: g.ZodUnknown,
		...S(e)
	});
	var yu = class extends w {
		_parse(u) {
			let t = this._getOrReturnCtx(u);
			return y(t, {
				code: p.invalid_type,
				expected: B.never,
				received: t.parsedType
			}), _
		}
	};
	yu.create = e => new yu({
		typeName: g.ZodNever,
		...S(e)
	});
	var rt = class extends w {
		_parse(u) {
			if (this._getType(u) !== B.undefined) {
				let r = this._getOrReturnCtx(u);
				return y(r, {
					code: p.invalid_type,
					expected: B.void,
					received: r.parsedType
				}), _
			}
			return tu(u.data)
		}
	};
	rt.create = e => new rt({
		typeName: g.ZodVoid,
		...S(e)
	});
	var su = class extends w {
		_parse(u) {
			let {
				ctx: t,
				status: r
			} = this._processInputParams(u), D = this._def;
			if (t.parsedType !== B.array) return y(t, {
				code: p.invalid_type,
				expected: B.array,
				received: t.parsedType
			}), _;
			if (D.exactLength !== null) {
				let i = t.data.length > D.exactLength.value,
					a = t.data.length < D.exactLength.value;
				(i || a) && (y(t, {
					code: i ? p.too_big : p.too_small,
					minimum: a ? D.exactLength.value : void 0,
					maximum: i ? D.exactLength.value : void 0,
					type: "array",
					inclusive: !0,
					exact: !0,
					message: D.exactLength.message
				}), r.dirty())
			}
			if (D.minLength !== null && t.data.length < D.minLength.value && (y(t, {
					code: p.too_small,
					minimum: D.minLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: D.minLength.message
				}), r.dirty()), D.maxLength !== null && t.data.length > D.maxLength.value && (y(t, {
					code: p.too_big,
					maximum: D.maxLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: D.maxLength.message
				}), r.dirty()), t.common.async) return Promise.all(t.data.map((i, a) => D.type._parseAsync(new lu(t, i, t.path, a)))).then(i => X.mergeArray(r, i));
			let n = t.data.map((i, a) => D.type._parseSync(new lu(t, i, t.path, a)));
			return X.mergeArray(r, n)
		}
		get element() {
			return this._def.type
		}
		min(u, t) {
			return new su({
				...this._def,
				minLength: {
					value: u,
					message: O.toString(t)
				}
			})
		}
		max(u, t) {
			return new su({
				...this._def,
				maxLength: {
					value: u,
					message: O.toString(t)
				}
			})
		}
		length(u, t) {
			return new su({
				...this._def,
				exactLength: {
					value: u,
					message: O.toString(t)
				}
			})
		}
		nonempty(u) {
			return this.min(1, u)
		}
	};
	su.create = (e, u) => new su({
		type: e,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: g.ZodArray,
		...S(u)
	});
	var fD;
	(function(e) {
		e.mergeShapes = (u, t) => ({
			...u,
			...t
		})
	})(fD || (fD = {}));
	var os = e => u => new I({
		...e,
		shape: () => ({
			...e.shape(),
			...u
		})
	});

	function et(e) {
		if (e instanceof I) {
			let u = {};
			for (let t in e.shape) {
				let r = e.shape[t];
				u[t] = Eu.create(et(r))
			}
			return new I({
				...e._def,
				shape: () => u
			})
		} else return e instanceof su ? su.create(et(e.element)) : e instanceof Eu ? Eu.create(et(e.unwrap())) : e instanceof $u ? $u.create(et(e.unwrap())) : e instanceof Cu ? Cu.create(e.items.map(u => et(u))) : e
	}
	var I = class extends w {
		constructor() {
			super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = os(this._def), this.extend = os(this._def)
		}
		_getCached() {
			if (this._cached !== null) return this._cached;
			let u = this._def.shape(),
				t = R.objectKeys(u);
			return this._cached = {
				shape: u,
				keys: t
			}
		}
		_parse(u) {
			if (this._getType(u) !== B.object) {
				let s = this._getOrReturnCtx(u);
				return y(s, {
					code: p.invalid_type,
					expected: B.object,
					received: s.parsedType
				}), _
			}
			let {
				status: r,
				ctx: D
			} = this._processInputParams(u), {
				shape: n,
				keys: i
			} = this._getCached(), a = [];
			if (!(this._def.catchall instanceof yu && this._def.unknownKeys === "strip"))
				for (let s in D.data) i.includes(s) || a.push(s);
			let o = [];
			for (let s of i) {
				let c = n[s],
					E = D.data[s];
				o.push({
					key: {
						status: "valid",
						value: s
					},
					value: c._parse(new lu(D, E, D.path, s)),
					alwaysSet: s in D.data
				})
			}
			if (this._def.catchall instanceof yu) {
				let s = this._def.unknownKeys;
				if (s === "passthrough")
					for (let c of a) o.push({
						key: {
							status: "valid",
							value: c
						},
						value: {
							status: "valid",
							value: D.data[c]
						}
					});
				else if (s === "strict") a.length > 0 && (y(D, {
					code: p.unrecognized_keys,
					keys: a
				}), r.dirty());
				else if (s !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
			} else {
				let s = this._def.catchall;
				for (let c of a) {
					let E = D.data[c];
					o.push({
						key: {
							status: "valid",
							value: c
						},
						value: s._parse(new lu(D, E, D.path, c)),
						alwaysSet: c in D.data
					})
				}
			}
			return D.common.async ? Promise.resolve().then(async () => {
				let s = [];
				for (let c of o) {
					let E = await c.key;
					s.push({
						key: E,
						value: await c.value,
						alwaysSet: c.alwaysSet
					})
				}
				return s
			}).then(s => X.mergeObjectSync(r, s)) : X.mergeObjectSync(r, o)
		}
		get shape() {
			return this._def.shape()
		}
		strict(u) {
			return O.errToObj, new I({
				...this._def,
				unknownKeys: "strict",
				...u !== void 0 ? {
					errorMap: (t, r) => {
						var D, n, i, a;
						let o = (i = (n = (D = this._def).errorMap) === null || n === void 0 ? void 0 : n.call(D, t, r).message) !== null && i !== void 0 ? i : r.defaultError;
						return t.code === "unrecognized_keys" ? {
							message: (a = O.errToObj(u).message) !== null && a !== void 0 ? a : o
						} : {
							message: o
						}
					}
				} : {}
			})
		}
		strip() {
			return new I({
				...this._def,
				unknownKeys: "strip"
			})
		}
		passthrough() {
			return new I({
				...this._def,
				unknownKeys: "passthrough"
			})
		}
		setKey(u, t) {
			return this.augment({
				[u]: t
			})
		}
		merge(u) {
			return new I({
				unknownKeys: u._def.unknownKeys,
				catchall: u._def.catchall,
				shape: () => fD.mergeShapes(this._def.shape(), u._def.shape()),
				typeName: g.ZodObject
			})
		}
		catchall(u) {
			return new I({
				...this._def,
				catchall: u
			})
		}
		pick(u) {
			let t = {};
			return R.objectKeys(u).map(r => {
				this.shape[r] && (t[r] = this.shape[r])
			}), new I({
				...this._def,
				shape: () => t
			})
		}
		omit(u) {
			let t = {};
			return R.objectKeys(this.shape).map(r => {
				R.objectKeys(u).indexOf(r) === -1 && (t[r] = this.shape[r])
			}), new I({
				...this._def,
				shape: () => t
			})
		}
		deepPartial() {
			return et(this)
		}
		partial(u) {
			let t = {};
			if (u) return R.objectKeys(this.shape).map(r => {
				R.objectKeys(u).indexOf(r) === -1 ? t[r] = this.shape[r] : t[r] = this.shape[r].optional()
			}), new I({
				...this._def,
				shape: () => t
			});
			for (let r in this.shape) {
				let D = this.shape[r];
				t[r] = D.optional()
			}
			return new I({
				...this._def,
				shape: () => t
			})
		}
		required(u) {
			let t = {};
			if (u) R.objectKeys(this.shape).map(r => {
				if (R.objectKeys(u).indexOf(r) === -1) t[r] = this.shape[r];
				else {
					let n = this.shape[r];
					for (; n instanceof Eu;) n = n._def.innerType;
					t[r] = n
				}
			});
			else
				for (let r in this.shape) {
					let n = this.shape[r];
					for (; n instanceof Eu;) n = n._def.innerType;
					t[r] = n
				}
			return new I({
				...this._def,
				shape: () => t
			})
		}
		keyof() {
			return ls(R.objectKeys(this.shape))
		}
	};
	I.create = (e, u) => new I({
		shape: () => e,
		unknownKeys: "strip",
		catchall: yu.create(),
		typeName: g.ZodObject,
		...S(u)
	});
	I.strictCreate = (e, u) => new I({
		shape: () => e,
		unknownKeys: "strict",
		catchall: yu.create(),
		typeName: g.ZodObject,
		...S(u)
	});
	I.lazycreate = (e, u) => new I({
		shape: e,
		unknownKeys: "strip",
		catchall: yu.create(),
		typeName: g.ZodObject,
		...S(u)
	});
	var he = class extends w {
		_parse(u) {
			let {
				ctx: t
			} = this._processInputParams(u), r = this._def.options;

			function D(n) {
				for (let a of n)
					if (a.result.status === "valid") return a.result;
				for (let a of n)
					if (a.result.status === "dirty") return t.common.issues.push(...a.ctx.common.issues), a.result;
				let i = n.map(a => new mu(a.ctx.common.issues));
				return y(t, {
					code: p.invalid_union,
					unionErrors: i
				}), _
			}
			if (t.common.async) return Promise.all(r.map(async n => {
				let i = {
					...t,
					common: {
						...t.common,
						issues: []
					},
					parent: null
				};
				return {
					result: await n._parseAsync({
						data: t.data,
						path: t.path,
						parent: i
					}),
					ctx: i
				}
			})).then(D); {
				let n, i = [];
				for (let o of r) {
					let s = {
							...t,
							common: {
								...t.common,
								issues: []
							},
							parent: null
						},
						c = o._parseSync({
							data: t.data,
							path: t.path,
							parent: s
						});
					if (c.status === "valid") return c;
					c.status === "dirty" && !n && (n = {
						result: c,
						ctx: s
					}), s.common.issues.length && i.push(s.common.issues)
				}
				if (n) return t.common.issues.push(...n.ctx.common.issues), n.result;
				let a = i.map(o => new mu(o));
				return y(t, {
					code: p.invalid_union,
					unionErrors: a
				}), _
			}
		}
		get options() {
			return this._def.options
		}
	};
	he.create = (e, u) => new he({
		options: e,
		typeName: g.ZodUnion,
		...S(u)
	});
	var cD = e => e instanceof ye ? cD(e.schema) : e instanceof ou ? cD(e.innerType()) : e instanceof ge ? [e.value] : e instanceof be ? e.options : e instanceof _e ? Object.keys(e.enum) : e instanceof xe ? cD(e._def.innerType) : e instanceof pe ? [void 0] : e instanceof Be ? [null] : null,
		Dt = class extends w {
			_parse(u) {
				let {
					ctx: t
				} = this._processInputParams(u);
				if (t.parsedType !== B.object) return y(t, {
					code: p.invalid_type,
					expected: B.object,
					received: t.parsedType
				}), _;
				let r = this.discriminator,
					D = t.data[r],
					n = this.optionsMap.get(D);
				return n ? t.common.async ? n._parseAsync({
					data: t.data,
					path: t.path,
					parent: t
				}) : n._parseSync({
					data: t.data,
					path: t.path,
					parent: t
				}) : (y(t, {
					code: p.invalid_union_discriminator,
					options: Array.from(this.optionsMap.keys()),
					path: [r]
				}), _)
			}
			get discriminator() {
				return this._def.discriminator
			}
			get options() {
				return this._def.options
			}
			get optionsMap() {
				return this._def.optionsMap
			}
			static create(u, t, r) {
				let D = new Map;
				for (let n of t) {
					let i = cD(n.shape[u]);
					if (!i) throw new Error(`A discriminator value for key \`${u}\` could not be extracted from all schema options`);
					for (let a of i) {
						if (D.has(a)) throw new Error(`Discriminator property ${String(u)} has duplicate value ${String(a)}`);
						D.set(a, n)
					}
				}
				return new Dt({
					typeName: g.ZodDiscriminatedUnion,
					discriminator: u,
					options: t,
					optionsMap: D,
					...S(r)
				})
			}
		};

	function Zn(e, u) {
		let t = De(e),
			r = De(u);
		if (e === u) return {
			valid: !0,
			data: e
		};
		if (t === B.object && r === B.object) {
			let D = R.objectKeys(u),
				n = R.objectKeys(e).filter(a => D.indexOf(a) !== -1),
				i = {
					...e,
					...u
				};
			for (let a of n) {
				let o = Zn(e[a], u[a]);
				if (!o.valid) return {
					valid: !1
				};
				i[a] = o.data
			}
			return {
				valid: !0,
				data: i
			}
		} else if (t === B.array && r === B.array) {
			if (e.length !== u.length) return {
				valid: !1
			};
			let D = [];
			for (let n = 0; n < e.length; n++) {
				let i = e[n],
					a = u[n],
					o = Zn(i, a);
				if (!o.valid) return {
					valid: !1
				};
				D.push(o.data)
			}
			return {
				valid: !0,
				data: D
			}
		} else return t === B.date && r === B.date && +e == +u ? {
			valid: !0,
			data: e
		} : {
			valid: !1
		}
	}
	var me = class extends w {
		_parse(u) {
			let {
				status: t,
				ctx: r
			} = this._processInputParams(u), D = (n, i) => {
				if (Wn(n) || Wn(i)) return _;
				let a = Zn(n.value, i.value);
				return a.valid ? ((Gn(n) || Gn(i)) && t.dirty(), {
					status: t.value,
					value: a.data
				}) : (y(r, {
					code: p.invalid_intersection_types
				}), _)
			};
			return r.common.async ? Promise.all([this._def.left._parseAsync({
				data: r.data,
				path: r.path,
				parent: r
			}), this._def.right._parseAsync({
				data: r.data,
				path: r.path,
				parent: r
			})]).then(([n, i]) => D(n, i)) : D(this._def.left._parseSync({
				data: r.data,
				path: r.path,
				parent: r
			}), this._def.right._parseSync({
				data: r.data,
				path: r.path,
				parent: r
			}))
		}
	};
	me.create = (e, u, t) => new me({
		left: e,
		right: u,
		typeName: g.ZodIntersection,
		...S(t)
	});
	var Cu = class extends w {
		_parse(u) {
			let {
				status: t,
				ctx: r
			} = this._processInputParams(u);
			if (r.parsedType !== B.array) return y(r, {
				code: p.invalid_type,
				expected: B.array,
				received: r.parsedType
			}), _;
			if (r.data.length < this._def.items.length) return y(r, {
				code: p.too_small,
				minimum: this._def.items.length,
				inclusive: !0,
				exact: !1,
				type: "array"
			}), _;
			!this._def.rest && r.data.length > this._def.items.length && (y(r, {
				code: p.too_big,
				maximum: this._def.items.length,
				inclusive: !0,
				exact: !1,
				type: "array"
			}), t.dirty());
			let n = r.data.map((i, a) => {
				let o = this._def.items[a] || this._def.rest;
				return o ? o._parse(new lu(r, i, r.path, a)) : null
			}).filter(i => !!i);
			return r.common.async ? Promise.all(n).then(i => X.mergeArray(t, i)) : X.mergeArray(t, n)
		}
		get items() {
			return this._def.items
		}
		rest(u) {
			return new Cu({
				...this._def,
				rest: u
			})
		}
	};
	Cu.create = (e, u) => {
		if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
		return new Cu({
			items: e,
			typeName: g.ZodTuple,
			rest: null,
			...S(u)
		})
	};
	var ve = class extends w {
			get keySchema() {
				return this._def.keyType
			}
			get valueSchema() {
				return this._def.valueType
			}
			_parse(u) {
				let {
					status: t,
					ctx: r
				} = this._processInputParams(u);
				if (r.parsedType !== B.object) return y(r, {
					code: p.invalid_type,
					expected: B.object,
					received: r.parsedType
				}), _;
				let D = [],
					n = this._def.keyType,
					i = this._def.valueType;
				for (let a in r.data) D.push({
					key: n._parse(new lu(r, a, r.path, a)),
					value: i._parse(new lu(r, r.data[a], r.path, a))
				});
				return r.common.async ? X.mergeObjectAsync(t, D) : X.mergeObjectSync(t, D)
			}
			get element() {
				return this._def.valueType
			}
			static create(u, t, r) {
				return t instanceof w ? new ve({
					keyType: u,
					valueType: t,
					typeName: g.ZodRecord,
					...S(r)
				}) : new ve({
					keyType: vu.create(),
					valueType: u,
					typeName: g.ZodRecord,
					...S(t)
				})
			}
		},
		nt = class extends w {
			_parse(u) {
				let {
					status: t,
					ctx: r
				} = this._processInputParams(u);
				if (r.parsedType !== B.map) return y(r, {
					code: p.invalid_type,
					expected: B.map,
					received: r.parsedType
				}), _;
				let D = this._def.keyType,
					n = this._def.valueType,
					i = [...r.data.entries()].map(([a, o], s) => ({
						key: D._parse(new lu(r, a, r.path, [s, "key"])),
						value: n._parse(new lu(r, o, r.path, [s, "value"]))
					}));
				if (r.common.async) {
					let a = new Map;
					return Promise.resolve().then(async () => {
						for (let o of i) {
							let s = await o.key,
								c = await o.value;
							if (s.status === "aborted" || c.status === "aborted") return _;
							(s.status === "dirty" || c.status === "dirty") && t.dirty(), a.set(s.value, c.value)
						}
						return {
							status: t.value,
							value: a
						}
					})
				} else {
					let a = new Map;
					for (let o of i) {
						let s = o.key,
							c = o.value;
						if (s.status === "aborted" || c.status === "aborted") return _;
						(s.status === "dirty" || c.status === "dirty") && t.dirty(), a.set(s.value, c.value)
					}
					return {
						status: t.value,
						value: a
					}
				}
			}
		};
	nt.create = (e, u, t) => new nt({
		valueType: u,
		keyType: e,
		typeName: g.ZodMap,
		...S(t)
	});
	var ju = class extends w {
		_parse(u) {
			let {
				status: t,
				ctx: r
			} = this._processInputParams(u);
			if (r.parsedType !== B.set) return y(r, {
				code: p.invalid_type,
				expected: B.set,
				received: r.parsedType
			}), _;
			let D = this._def;
			D.minSize !== null && r.data.size < D.minSize.value && (y(r, {
				code: p.too_small,
				minimum: D.minSize.value,
				type: "set",
				inclusive: !0,
				exact: !1,
				message: D.minSize.message
			}), t.dirty()), D.maxSize !== null && r.data.size > D.maxSize.value && (y(r, {
				code: p.too_big,
				maximum: D.maxSize.value,
				type: "set",
				inclusive: !0,
				exact: !1,
				message: D.maxSize.message
			}), t.dirty());
			let n = this._def.valueType;

			function i(o) {
				let s = new Set;
				for (let c of o) {
					if (c.status === "aborted") return _;
					c.status === "dirty" && t.dirty(), s.add(c.value)
				}
				return {
					status: t.value,
					value: s
				}
			}
			let a = [...r.data.values()].map((o, s) => n._parse(new lu(r, o, r.path, s)));
			return r.common.async ? Promise.all(a).then(o => i(o)) : i(a)
		}
		min(u, t) {
			return new ju({
				...this._def,
				minSize: {
					value: u,
					message: O.toString(t)
				}
			})
		}
		max(u, t) {
			return new ju({
				...this._def,
				maxSize: {
					value: u,
					message: O.toString(t)
				}
			})
		}
		size(u, t) {
			return this.min(u, t).max(u, t)
		}
		nonempty(u) {
			return this.min(1, u)
		}
	};
	ju.create = (e, u) => new ju({
		valueType: e,
		minSize: null,
		maxSize: null,
		typeName: g.ZodSet,
		...S(u)
	});
	var ne = class extends w {
			constructor() {
				super(...arguments), this.validate = this.implement
			}
			_parse(u) {
				let {
					ctx: t
				} = this._processInputParams(u);
				if (t.parsedType !== B.function) return y(t, {
					code: p.invalid_type,
					expected: B.function,
					received: t.parsedType
				}), _;

				function r(a, o) {
					return lD({
						data: a,
						path: t.path,
						errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ED(), zt].filter(s => !!s),
						issueData: {
							code: p.invalid_arguments,
							argumentsError: o
						}
					})
				}

				function D(a, o) {
					return lD({
						data: a,
						path: t.path,
						errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ED(), zt].filter(s => !!s),
						issueData: {
							code: p.invalid_return_type,
							returnTypeError: o
						}
					})
				}
				let n = {
						errorMap: t.common.contextualErrorMap
					},
					i = t.data;
				return this._def.returns instanceof ae ? tu(async (...a) => {
					let o = new mu([]),
						s = await this._def.args.parseAsync(a, n).catch(C => {
							throw o.addIssue(r(a, C)), o
						}),
						c = await i(...s);
					return await this._def.returns._def.type.parseAsync(c, n).catch(C => {
						throw o.addIssue(D(c, C)), o
					})
				}) : tu((...a) => {
					let o = this._def.args.safeParse(a, n);
					if (!o.success) throw new mu([r(a, o.error)]);
					let s = i(...o.data),
						c = this._def.returns.safeParse(s, n);
					if (!c.success) throw new mu([D(s, c.error)]);
					return c.data
				})
			}
			parameters() {
				return this._def.args
			}
			returnType() {
				return this._def.returns
			}
			args(...u) {
				return new ne({
					...this._def,
					args: Cu.create(u).rest(Lu.create())
				})
			}
			returns(u) {
				return new ne({
					...this._def,
					returns: u
				})
			}
			implement(u) {
				return this.parse(u)
			}
			strictImplement(u) {
				return this.parse(u)
			}
			static create(u, t, r) {
				return new ne({
					args: u || Cu.create([]).rest(Lu.create()),
					returns: t || Lu.create(),
					typeName: g.ZodFunction,
					...S(r)
				})
			}
		},
		ye = class extends w {
			get schema() {
				return this._def.getter()
			}
			_parse(u) {
				let {
					ctx: t
				} = this._processInputParams(u);
				return this._def.getter()._parse({
					data: t.data,
					path: t.path,
					parent: t
				})
			}
		};
	ye.create = (e, u) => new ye({
		getter: e,
		typeName: g.ZodLazy,
		...S(u)
	});
	var ge = class extends w {
		_parse(u) {
			if (u.data !== this._def.value) {
				let t = this._getOrReturnCtx(u);
				return y(t, {
					code: p.invalid_literal,
					expected: this._def.value
				}), _
			}
			return {
				status: "valid",
				value: u.data
			}
		}
		get value() {
			return this._def.value
		}
	};
	ge.create = (e, u) => new ge({
		value: e,
		typeName: g.ZodLiteral,
		...S(u)
	});

	function ls(e, u) {
		return new be({
			values: e,
			typeName: g.ZodEnum,
			...S(u)
		})
	}
	var be = class extends w {
		_parse(u) {
			if (typeof u.data != "string") {
				let t = this._getOrReturnCtx(u),
					r = this._def.values;
				return y(t, {
					expected: R.joinValues(r),
					received: t.parsedType,
					code: p.invalid_type
				}), _
			}
			if (this._def.values.indexOf(u.data) === -1) {
				let t = this._getOrReturnCtx(u),
					r = this._def.values;
				return y(t, {
					received: t.data,
					code: p.invalid_enum_value,
					options: r
				}), _
			}
			return tu(u.data)
		}
		get options() {
			return this._def.values
		}
		get enum() {
			let u = {};
			for (let t of this._def.values) u[t] = t;
			return u
		}
		get Values() {
			let u = {};
			for (let t of this._def.values) u[t] = t;
			return u
		}
		get Enum() {
			let u = {};
			for (let t of this._def.values) u[t] = t;
			return u
		}
	};
	be.create = ls;
	var _e = class extends w {
		_parse(u) {
			let t = R.getValidEnumValues(this._def.values),
				r = this._getOrReturnCtx(u);
			if (r.parsedType !== B.string && r.parsedType !== B.number) {
				let D = R.objectValues(t);
				return y(r, {
					expected: R.joinValues(D),
					received: r.parsedType,
					code: p.invalid_type
				}), _
			}
			if (t.indexOf(u.data) === -1) {
				let D = R.objectValues(t);
				return y(r, {
					received: r.data,
					code: p.invalid_enum_value,
					options: D
				}), _
			}
			return tu(u.data)
		}
		get enum() {
			return this._def.values
		}
	};
	_e.create = (e, u) => new _e({
		values: e,
		typeName: g.ZodNativeEnum,
		...S(u)
	});
	var ae = class extends w {
		_parse(u) {
			let {
				ctx: t
			} = this._processInputParams(u);
			if (t.parsedType !== B.promise && t.common.async === !1) return y(t, {
				code: p.invalid_type,
				expected: B.promise,
				received: t.parsedType
			}), _;
			let r = t.parsedType === B.promise ? t.data : Promise.resolve(t.data);
			return tu(r.then(D => this._def.type.parseAsync(D, {
				path: t.path,
				errorMap: t.common.contextualErrorMap
			})))
		}
	};
	ae.create = (e, u) => new ae({
		type: e,
		typeName: g.ZodPromise,
		...S(u)
	});
	var ou = class extends w {
		innerType() {
			return this._def.schema
		}
		sourceType() {
			return this._def.schema._def.typeName === g.ZodEffects ? this._def.schema.sourceType() : this._def.schema
		}
		_parse(u) {
			let {
				status: t,
				ctx: r
			} = this._processInputParams(u), D = this._def.effect || null;
			if (D.type === "preprocess") {
				let i = D.transform(r.data);
				return r.common.async ? Promise.resolve(i).then(a => this._def.schema._parseAsync({
					data: a,
					path: r.path,
					parent: r
				})) : this._def.schema._parseSync({
					data: i,
					path: r.path,
					parent: r
				})
			}
			let n = {
				addIssue: i => {
					y(r, i), i.fatal ? t.abort() : t.dirty()
				},
				get path() {
					return r.path
				}
			};
			if (n.addIssue = n.addIssue.bind(n), D.type === "refinement") {
				let i = a => {
					let o = D.refinement(a, n);
					if (r.common.async) return Promise.resolve(o);
					if (o instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
					return a
				};
				if (r.common.async === !1) {
					let a = this._def.schema._parseSync({
						data: r.data,
						path: r.path,
						parent: r
					});
					return a.status === "aborted" ? _ : (a.status === "dirty" && t.dirty(), i(a.value), {
						status: t.value,
						value: a.value
					})
				} else return this._def.schema._parseAsync({
					data: r.data,
					path: r.path,
					parent: r
				}).then(a => a.status === "aborted" ? _ : (a.status === "dirty" && t.dirty(), i(a.value).then(() => ({
					status: t.value,
					value: a.value
				}))))
			}
			if (D.type === "transform")
				if (r.common.async === !1) {
					let i = this._def.schema._parseSync({
						data: r.data,
						path: r.path,
						parent: r
					});
					if (!CD(i)) return i;
					let a = D.transform(i.value, n);
					if (a instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
					return {
						status: t.value,
						value: a
					}
				} else return this._def.schema._parseAsync({
					data: r.data,
					path: r.path,
					parent: r
				}).then(i => CD(i) ? Promise.resolve(D.transform(i.value, n)).then(a => ({
					status: t.value,
					value: a
				})) : i);
			R.assertNever(D)
		}
	};
	ou.create = (e, u, t) => new ou({
		schema: e,
		typeName: g.ZodEffects,
		effect: u,
		...S(t)
	});
	ou.createWithPreprocess = (e, u, t) => new ou({
		schema: u,
		effect: {
			type: "preprocess",
			transform: e
		},
		typeName: g.ZodEffects,
		...S(t)
	});
	var Eu = class extends w {
		_parse(u) {
			return this._getType(u) === B.undefined ? tu(void 0) : this._def.innerType._parse(u)
		}
		unwrap() {
			return this._def.innerType
		}
	};
	Eu.create = (e, u) => new Eu({
		innerType: e,
		typeName: g.ZodOptional,
		...S(u)
	});
	var $u = class extends w {
		_parse(u) {
			return this._getType(u) === B.null ? tu(null) : this._def.innerType._parse(u)
		}
		unwrap() {
			return this._def.innerType
		}
	};
	$u.create = (e, u) => new $u({
		innerType: e,
		typeName: g.ZodNullable,
		...S(u)
	});
	var xe = class extends w {
		_parse(u) {
			let {
				ctx: t
			} = this._processInputParams(u), r = t.data;
			return t.parsedType === B.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
				data: r,
				path: t.path,
				parent: t
			})
		}
		removeDefault() {
			return this._def.innerType
		}
	};
	xe.create = (e, u) => new xe({
		innerType: e,
		typeName: g.ZodDefault,
		defaultValue: typeof u.default == "function" ? u.default : () => u.default,
		...S(u)
	});
	var it = class extends w {
		_parse(u) {
			let {
				ctx: t
			} = this._processInputParams(u), r = this._def.innerType._parse({
				data: t.data,
				path: t.path,
				parent: t
			});
			return AD(r) ? r.then(D => ({
				status: "valid",
				value: D.status === "valid" ? D.value : this._def.defaultValue()
			})) : {
				status: "valid",
				value: r.status === "valid" ? r.value : this._def.defaultValue()
			}
		}
		removeDefault() {
			return this._def.innerType
		}
	};
	it.create = (e, u) => new it({
		innerType: e,
		typeName: g.ZodCatch,
		defaultValue: typeof u.default == "function" ? u.default : () => u.default,
		...S(u)
	});
	var at = class extends w {
		_parse(u) {
			if (this._getType(u) !== B.nan) {
				let r = this._getOrReturnCtx(u);
				return y(r, {
					code: p.invalid_type,
					expected: B.nan,
					received: r.parsedType
				}), _
			}
			return {
				status: "valid",
				value: u.data
			}
		}
	};
	at.create = e => new at({
		typeName: g.ZodNaN,
		...S(e)
	});
	var Rp = Symbol("zod_brand"),
		dD = class extends w {
			_parse(u) {
				let {
					ctx: t
				} = this._processInputParams(u), r = t.data;
				return this._def.type._parse({
					data: r,
					path: t.path,
					parent: t
				})
			}
			unwrap() {
				return this._def.type
			}
		},
		we = class extends w {
			_parse(u) {
				let {
					status: t,
					ctx: r
				} = this._processInputParams(u);
				if (r.common.async) return (async () => {
					let n = await this._def.in._parseAsync({
						data: r.data,
						path: r.path,
						parent: r
					});
					return n.status === "aborted" ? _ : n.status === "dirty" ? (t.dirty(), Es(n.value)) : this._def.out._parseAsync({
						data: n.value,
						path: r.path,
						parent: r
					})
				})(); {
					let D = this._def.in._parseSync({
						data: r.data,
						path: r.path,
						parent: r
					});
					return D.status === "aborted" ? _ : D.status === "dirty" ? (t.dirty(), {
						status: "dirty",
						value: D.value
					}) : this._def.out._parseSync({
						data: D.value,
						path: r.path,
						parent: r
					})
				}
			}
			static create(u, t) {
				return new we({
					in: u,
					out: t,
					typeName: g.ZodPipeline
				})
			}
		},
		Cs = (e, u = {}, t) => e ? ie.create().superRefine((r, D) => {
			if (!e(r)) {
				let n = typeof u == "function" ? u(r) : u,
					i = typeof n == "string" ? {
						message: n
					} : n;
				D.addIssue({
					code: "custom",
					...i,
					fatal: t
				})
			}
		}) : ie.create(),
		Ip = {
			object: I.lazycreate
		},
		g;
	(function(e) {
		e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline"
	})(g || (g = {}));
	var Np = (e, u = {
			message: `Input not instance of ${e.name}`
		}) => Cs(t => t instanceof e, u, !0),
		As = vu.create,
		fs = Ru.create,
		Pp = at.create,
		kp = fe.create,
		ds = de.create,
		Lp = Mu.create,
		Mp = tt.create,
		jp = pe.create,
		$p = Be.create,
		Up = ie.create,
		Hp = Lu.create,
		Vp = yu.create,
		Kp = rt.create,
		zp = su.create,
		Wp = I.create,
		Gp = I.strictCreate,
		Zp = he.create,
		Yp = Dt.create,
		Jp = me.create,
		Xp = Cu.create,
		Qp = ve.create,
		u8 = nt.create,
		e8 = ju.create,
		t8 = ne.create,
		r8 = ye.create,
		D8 = ge.create,
		n8 = be.create,
		i8 = _e.create,
		a8 = ae.create,
		Fs = ou.create,
		s8 = Eu.create,
		o8 = $u.create,
		F8 = ou.createWithPreprocess,
		c8 = we.create,
		E8 = () => As().optional(),
		l8 = () => fs().optional(),
		C8 = () => ds().optional(),
		A8 = {
			string: e => vu.create({
				...e,
				coerce: !0
			}),
			number: e => Ru.create({
				...e,
				coerce: !0
			}),
			boolean: e => de.create({
				...e,
				coerce: !0
			}),
			bigint: e => fe.create({
				...e,
				coerce: !0
			}),
			date: e => Mu.create({
				...e,
				coerce: !0
			})
		},
		f8 = _,
		L = Object.freeze({
			__proto__: null,
			defaultErrorMap: zt,
			setErrorMap: _p,
			getErrorMap: ED,
			makeIssue: lD,
			EMPTY_PATH: xp,
			addIssueToContext: y,
			ParseStatus: X,
			INVALID: _,
			DIRTY: Es,
			OK: tu,
			isAborted: Wn,
			isDirty: Gn,
			isValid: CD,
			isAsync: AD,
			get util() {
				return R
			},
			ZodParsedType: B,
			getParsedType: De,
			ZodType: w,
			ZodString: vu,
			ZodNumber: Ru,
			ZodBigInt: fe,
			ZodBoolean: de,
			ZodDate: Mu,
			ZodSymbol: tt,
			ZodUndefined: pe,
			ZodNull: Be,
			ZodAny: ie,
			ZodUnknown: Lu,
			ZodNever: yu,
			ZodVoid: rt,
			ZodArray: su,
			get objectUtil() {
				return fD
			},
			ZodObject: I,
			ZodUnion: he,
			ZodDiscriminatedUnion: Dt,
			ZodIntersection: me,
			ZodTuple: Cu,
			ZodRecord: ve,
			ZodMap: nt,
			ZodSet: ju,
			ZodFunction: ne,
			ZodLazy: ye,
			ZodLiteral: ge,
			ZodEnum: be,
			ZodNativeEnum: _e,
			ZodPromise: ae,
			ZodEffects: ou,
			ZodTransformer: ou,
			ZodOptional: Eu,
			ZodNullable: $u,
			ZodDefault: xe,
			ZodCatch: it,
			ZodNaN: at,
			BRAND: Rp,
			ZodBranded: dD,
			ZodPipeline: we,
			custom: Cs,
			Schema: w,
			ZodSchema: w,
			late: Ip,
			get ZodFirstPartyTypeKind() {
				return g
			},
			coerce: A8,
			any: Up,
			array: zp,
			bigint: kp,
			boolean: ds,
			date: Lp,
			discriminatedUnion: Yp,
			effect: Fs,
			enum: n8,
			function: t8,
			instanceof: Np,
			intersection: Jp,
			lazy: r8,
			literal: D8,
			map: u8,
			nan: Pp,
			nativeEnum: i8,
			never: Vp,
			null: $p,
			nullable: o8,
			number: fs,
			object: Wp,
			oboolean: C8,
			onumber: l8,
			optional: s8,
			ostring: E8,
			pipeline: c8,
			preprocess: F8,
			promise: a8,
			record: Qp,
			set: e8,
			strictObject: Gp,
			string: As,
			symbol: Mp,
			transformer: Fs,
			tuple: Xp,
			undefined: jp,
			union: Zp,
			unknown: Hp,
			void: Kp,
			NEVER: f8,
			ZodIssueCode: p,
			quotelessJson: bp,
			ZodError: mu
		});
	var Mx = L.object({
			DATABASE_URL: L.string().min(1),
			NODE_ENV: L.enum(["development", "test", "production"]).default("development").optional(),
			NEXTAUTH_SECRET: L.string().min(1),
			NEXTAUTH_URL: L.string().min(1),
			REDIS_URL: L.string().min(1),
			MINIFY: L.enum(["true", "false"]).default("true"),
			DEBUG: L.enum(["true", "false"]).default("false"),
			CACHE_DISABLED: L.enum(["true", "false"]).default("false"),
			SANITY_SECRET_TOKEN: L.string().min(1),
			WEBHOOK_TOKEN: L.string().min(1),
			PUBLITIO_API_KEY: L.string().min(1),
			PUBLITIO_SECRET_KEY: L.string().min(1),
			SLACK_WEBHOOK_URL: L.string().min(1),
			INTERNAL_SECRET_TOKEN: L.string().min(1)
		}),
		ps = L.object({
			NEXT_PUBLIC_APP_MODE: L.enum(["development", "test", "staging", "production"]),
			NEXT_PUBLIC_SANITY_PROJECT_ID: L.string().min(1),
			NEXT_PUBLIC_SANITY_DATASET: L.string().min(1),
			NEXT_PUBLIC_SANITY_PUBLIC_TOKEN: L.string().min(1),
			NEXT_PUBLIC_HOST: L.string().min(1),
			NEXT_PUBLIC_GOOGLE_API_KEY: L.string().min(1)
		}),
		Bs = {
			NEXT_PUBLIC_APP_MODE: "production",
			NEXT_PUBLIC_SANITY_PROJECT_ID: "rfe6d7g7",
			NEXT_PUBLIC_SANITY_DATASET: "production",
			NEXT_PUBLIC_SANITY_PUBLIC_TOKEN: "skRa9MDZW9VsWNjPKtDpewJ1h467O64JO8tghmVxG5kDQ6SWCm5OzQyccv1pqwYLIEWCaT3zKUdha3QtmgHTT0OkwkvIMGvhkDt9Tgm28K9WY3k5L6pHbrzamkDWPo4r4xZXnBnjXWVMeM6RluLc4wv2MmDBKfcqzuS2059T2ZC7gWCnnzBt",
			NEXT_PUBLIC_HOST: "https://builder.themarketerstoolkit.com",
			NEXT_PUBLIC_GOOGLE_API_KEY: "AIzaSyB_VSx1rEGSq-GQIQC8awSlMd_fHqmk54Y"
		};
	var pD = ps.safeParse(Bs),
		d8 = e => Object.entries(e).map(([u, t]) => {
			if (t && "_errors" in t) return `${u}: ${t._errors.join(", ")}
`
		}).filter(Boolean);
	if (!pD.success) throw console.error(`\u274C Invalid environment variables:
`, ...d8(pD.error.format())), new Error("Invalid environment variables");
	for (let e of Object.keys(pD.data))
		if (!e.startsWith("NEXT_PUBLIC_")) throw console.warn(`\u274C Invalid public environment variable name: ${e}. It must begin with 'NEXT_PUBLIC_'`), new Error("Invalid public environment variable name");
	var gu = pD.data;
	var hs = async ({
		agencyId: e,
		embedId: u,
		locationGroupSelector: t
	}) => {
		let r = gu.NEXT_PUBLIC_HOST,
			D = new URLSearchParams({
				agencyId: e
			});
		return u && D.append("embedId", u), t && D.append("locationGroupSelector", t), await ut.get(`${r}/api/agency-settings/hlembed`, {
			params: D
		}).then(i => i.data)
	};
	var Wt = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((u, t) => (t &= 63, t < 36 ? u += t.toString(36) : t < 62 ? u += (t - 26).toString(36).toUpperCase() : t > 62 ? u += "-" : u += "_", u), "");
	var Ad = ya(Cd());
	var on = new Set,
		fd = new Set;
	async function dd(e) {
		for (let u of e) {
			let t = u.srcUrl,
				r = Wt();
			if (ug(t)) return;
			await eg({
				url: t,
				id: r
			}), on.add(r)
		}
	}

	function pd(e, u = "themebuilder-main-style") {
		let t = "";
		for (let D of e) t += D;
		let r = document.createElement("style");
		r.innerHTML = t, r.id = u, r.classList.add(gt), document.head.appendChild(r), fd.add(u)
	}

	function Gi(e) {
		e.forEach(u => {
			let t = document.getElementById(u);
			t && (t.remove(), on.delete(u), on.delete(u))
		})
	}

	function ug(e) {
		return document.querySelector(`link[href="${e}"]`)
	}
	var eg = ({
			id: e,
			url: u
		}) => new Promise((t, r) => {
			let D = document.createElement("link");
			e && (D.id = e), D.type = "text/css", D.rel = "stylesheet", D.href = u, D.classList.add(gt);
			try {
				document.head.appendChild(D), t()
			} catch (n) {
				console.error("Error injecting CSS tag", n), r(n)
			}
		}),
		Fn = () => {
			Gi(Array.from(on).concat(Array.from(fd)))
		},
		Bd = () => {
			let e = gu.NEXT_PUBLIC_HOST;
			document.querySelectorAll("style").forEach(u => {
				var i;
				let t = new RegExp(`url\\(['"]?(?<url>.*?)['"]?\\)`, "gm"),
					r = u.innerHTML,
					D = Ad.default.exec(r, t),
					n = (i = D == null ? void 0 : D.groups) == null ? void 0 : i.url;
				!n || n.startsWith(e) && u.remove()
			})
		};
	var Zi = new Set,
		Yi = new Set;
	async function hd(e) {
		for (let u of e) {
			let t = u.srcUrl,
				r = Wt();
			if (rg(t)) return;
			await Dg({
				id: r,
				url: t
			}), Zi.add(r)
		}
	}

	function md(e) {
		let u = "",
			t = Wt();
		for (let D of e) u += D;
		let r = document.createElement("script");
		r.innerHTML = u, r.id = t, r.classList.add(gt), document.head.appendChild(r), Yi.add(t)
	}

	function tg(e) {
		e.forEach(u => {
			let t = document.getElementById(u);
			t && (t.remove(), Zi.delete(u), Yi.delete(u))
		})
	}

	function rg(e) {
		return document.querySelector(`script[src="${e}"]`)
	}
	var cn = () => {
			tg(Array.from(Zi).concat(Array.from(Yi)))
		},
		Dg = ({
			id: e,
			url: u
		}) => new Promise((t, r) => {
			let D = document.createElement("script");
			D.id = e, D.type = "text/javascript", D.src = u, D.classList.add(gt);
			try {
				document.head.appendChild(D), t()
			} catch (n) {
				console.error("Error injecting script tag", n), r(n)
			}
		});
	var gt = "ghl-themebuilder",
		En = async e => {
			if (e.cssToImports && await dd(e.cssToImports), e.cssToInject) {
				let u = "themebuilder-main-style";
				document.getElementById(u) && Gi([u]), pd([e.cssToInject], u)
			}
			e.jsToImports && await hd(e.jsToImports), e.jsToInject && md([e.jsToInject])
		};
	var Tu = Object.create(null);
	Tu.open = "0";
	Tu.close = "1";
	Tu.ping = "2";
	Tu.pong = "3";
	Tu.message = "4";
	Tu.upgrade = "5";
	Tu.noop = "6";
	var Mr = Object.create(null);
	Object.keys(Tu).forEach(e => {
		Mr[Tu[e]] = e
	});
	var vd = {
		type: "error",
		data: "parser error"
	};
	var ng = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
		ig = typeof ArrayBuffer == "function",
		ag = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer,
		sg = ({
			type: e,
			data: u
		}, t, r) => ng && u instanceof Blob ? t ? r(u) : yd(u, r) : ig && (u instanceof ArrayBuffer || ag(u)) ? t ? r(u) : yd(new Blob([u]), r) : r(Tu[e] + (u || "")),
		yd = (e, u) => {
			let t = new FileReader;
			return t.onload = function() {
				let r = t.result.split(",")[1];
				u("b" + r)
			}, t.readAsDataURL(e)
		},
		ln = sg;
	var gd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		jr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
	for (let e = 0; e < gd.length; e++) jr[gd.charCodeAt(e)] = e;
	var bd = e => {
		let u = e.length * .75,
			t = e.length,
			r, D = 0,
			n, i, a, o;
		e[e.length - 1] === "=" && (u--, e[e.length - 2] === "=" && u--);
		let s = new ArrayBuffer(u),
			c = new Uint8Array(s);
		for (r = 0; r < t; r += 4) n = jr[e.charCodeAt(r)], i = jr[e.charCodeAt(r + 1)], a = jr[e.charCodeAt(r + 2)], o = jr[e.charCodeAt(r + 3)], c[D++] = n << 2 | i >> 4, c[D++] = (i & 15) << 4 | a >> 2, c[D++] = (a & 3) << 6 | o & 63;
		return s
	};
	var og = typeof ArrayBuffer == "function",
		Fg = (e, u) => {
			if (typeof e != "string") return {
				type: "message",
				data: _d(e, u)
			};
			let t = e.charAt(0);
			return t === "b" ? {
				type: "message",
				data: cg(e.substring(1), u)
			} : Mr[t] ? e.length > 1 ? {
				type: Mr[t],
				data: e.substring(1)
			} : {
				type: Mr[t]
			} : vd
		},
		cg = (e, u) => {
			if (og) {
				let t = bd(e);
				return _d(t, u)
			} else return {
				base64: !0,
				data: e
			}
		},
		_d = (e, u) => {
			switch (u) {
				case "blob":
					return e instanceof ArrayBuffer ? new Blob([e]) : e;
				case "arraybuffer":
				default:
					return e
			}
		},
		Cn = Fg;
	var xd = String.fromCharCode(30),
		wd = (e, u) => {
			let t = e.length,
				r = new Array(t),
				D = 0;
			e.forEach((n, i) => {
				ln(n, !1, a => {
					r[i] = a, ++D === t && u(r.join(xd))
				})
			})
		},
		Sd = (e, u) => {
			let t = e.split(xd),
				r = [];
			for (let D = 0; D < t.length; D++) {
				let n = Cn(t[D], u);
				if (r.push(n), n.type === "error") break
			}
			return r
		},
		Ji = 4;

	function N(e) {
		if (e) return Eg(e)
	}

	function Eg(e) {
		for (var u in N.prototype) e[u] = N.prototype[u];
		return e
	}
	N.prototype.on = N.prototype.addEventListener = function(e, u) {
		return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(u), this
	};
	N.prototype.once = function(e, u) {
		function t() {
			this.off(e, t), u.apply(this, arguments)
		}
		return t.fn = u, this.on(e, t), this
	};
	N.prototype.off = N.prototype.removeListener = N.prototype.removeAllListeners = N.prototype.removeEventListener = function(e, u) {
		if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
		var t = this._callbacks["$" + e];
		if (!t) return this;
		if (arguments.length == 1) return delete this._callbacks["$" + e], this;
		for (var r, D = 0; D < t.length; D++)
			if (r = t[D], r === u || r.fn === u) {
				t.splice(D, 1);
				break
			} return t.length === 0 && delete this._callbacks["$" + e], this
	};
	N.prototype.emit = function(e) {
		this._callbacks = this._callbacks || {};
		for (var u = new Array(arguments.length - 1), t = this._callbacks["$" + e], r = 1; r < arguments.length; r++) u[r - 1] = arguments[r];
		if (t) {
			t = t.slice(0);
			for (var r = 0, D = t.length; r < D; ++r) t[r].apply(this, u)
		}
		return this
	};
	N.prototype.emitReserved = N.prototype.emit;
	N.prototype.listeners = function(e) {
		return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
	};
	N.prototype.hasListeners = function(e) {
		return !!this.listeners(e).length
	};
	var Bu = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();

	function An(e, ...u) {
		return u.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {})
	}
	var lg = setTimeout,
		Cg = clearTimeout;

	function Qu(e, u) {
		u.useNativeTimers ? (e.setTimeoutFn = lg.bind(Bu), e.clearTimeoutFn = Cg.bind(Bu)) : (e.setTimeoutFn = setTimeout.bind(Bu), e.clearTimeoutFn = clearTimeout.bind(Bu))
	}
	var Ag = 1.33;

	function Td(e) {
		return typeof e == "string" ? fg(e) : Math.ceil((e.byteLength || e.size) * Ag)
	}

	function fg(e) {
		let u = 0,
			t = 0;
		for (let r = 0, D = e.length; r < D; r++) u = e.charCodeAt(r), u < 128 ? t += 1 : u < 2048 ? t += 2 : u < 55296 || u >= 57344 ? t += 3 : (r++, t += 4);
		return t
	}
	var Xi = class extends Error {
			constructor(u, t, r) {
				super(u), this.description = t, this.context = r, this.type = "TransportError"
			}
		},
		Ue = class extends N {
			constructor(u) {
				super(), this.writable = !1, Qu(this, u), this.opts = u, this.query = u.query, this.readyState = "", this.socket = u.socket
			}
			onError(u, t, r) {
				return super.emitReserved("error", new Xi(u, t, r)), this
			}
			open() {
				return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this
			}
			close() {
				return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
			}
			send(u) {
				this.readyState === "open" && this.write(u)
			}
			onOpen() {
				this.readyState = "open", this.writable = !0, super.emitReserved("open")
			}
			onData(u) {
				let t = Cn(u, this.socket.binaryType);
				this.onPacket(t)
			}
			onPacket(u) {
				super.emitReserved("packet", u)
			}
			onClose(u) {
				this.readyState = "closed", super.emitReserved("close", u)
			}
		};
	var Id = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
		Qi = 64,
		dg = {},
		Od = 0,
		fn = 0,
		qd;

	function Rd(e) {
		let u = "";
		do u = Id[e % Qi] + u, e = Math.floor(e / Qi); while (e > 0);
		return u
	}

	function dn() {
		let e = Rd(+new Date);
		return e !== qd ? (Od = 0, qd = e) : e + "." + Rd(Od++)
	}
	for (; fn < Qi; fn++) dg[Id[fn]] = fn;

	function pn(e) {
		let u = "";
		for (let t in e) e.hasOwnProperty(t) && (u.length && (u += "&"), u += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
		return u
	}

	function Nd(e) {
		let u = {},
			t = e.split("&");
		for (let r = 0, D = t.length; r < D; r++) {
			let n = t[r].split("=");
			u[decodeURIComponent(n[0])] = decodeURIComponent(n[1])
		}
		return u
	}
	var Pd = !1;
	try {
		Pd = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
	} catch {}
	var kd = Pd;

	function ua(e) {
		let u = e.xdomain;
		try {
			if (typeof XMLHttpRequest < "u" && (!u || kd)) return new XMLHttpRequest
		} catch {}
		if (!u) try {
			return new Bu[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
		} catch {}
	}

	function pg() {}
	var Bg = function() {
			return new ua({
				xdomain: !1
			}).responseType != null
		}(),
		Bn = class extends Ue {
			constructor(u) {
				if (super(u), this.polling = !1, typeof location < "u") {
					let r = location.protocol === "https:",
						D = location.port;
					D || (D = r ? "443" : "80"), this.xd = typeof location < "u" && u.hostname !== location.hostname || D !== u.port, this.xs = u.secure !== r
				}
				let t = u && u.forceBase64;
				this.supportsBinary = Bg && !t
			}
			get name() {
				return "polling"
			}
			doOpen() {
				this.poll()
			}
			pause(u) {
				this.readyState = "pausing";
				let t = () => {
					this.readyState = "paused", u()
				};
				if (this.polling || !this.writable) {
					let r = 0;
					this.polling && (r++, this.once("pollComplete", function() {
						--r || t()
					})), this.writable || (r++, this.once("drain", function() {
						--r || t()
					}))
				} else t()
			}
			poll() {
				this.polling = !0, this.doPoll(), this.emitReserved("poll")
			}
			onData(u) {
				let t = r => {
					if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close") return this.onClose({
						description: "transport closed by the server"
					}), !1;
					this.onPacket(r)
				};
				Sd(u, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll())
			}
			doClose() {
				let u = () => {
					this.write([{
						type: "close"
					}])
				};
				this.readyState === "open" ? u() : this.once("open", u)
			}
			write(u) {
				this.writable = !1, wd(u, t => {
					this.doWrite(t, () => {
						this.writable = !0, this.emitReserved("drain")
					})
				})
			}
			uri() {
				let u = this.query || {},
					t = this.opts.secure ? "https" : "http",
					r = "";
				this.opts.timestampRequests !== !1 && (u[this.opts.timestampParam] = dn()), !this.supportsBinary && !u.sid && (u.b64 = 1), this.opts.port && (t === "https" && Number(this.opts.port) !== 443 || t === "http" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port);
				let D = pn(u),
					n = this.opts.hostname.indexOf(":") !== -1;
				return t + "://" + (n ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (D.length ? "?" + D : "")
			}
			request(u = {}) {
				return Object.assign(u, {
					xd: this.xd,
					xs: this.xs
				}, this.opts), new hu(this.uri(), u)
			}
			doWrite(u, t) {
				let r = this.request({
					method: "POST",
					data: u
				});
				r.on("success", t), r.on("error", (D, n) => {
					this.onError("xhr post error", D, n)
				})
			}
			doPoll() {
				let u = this.request();
				u.on("data", this.onData.bind(this)), u.on("error", (t, r) => {
					this.onError("xhr poll error", t, r)
				}), this.pollXhr = u
			}
		},
		hu = class extends N {
			constructor(u, t) {
				super(), Qu(this, t), this.opts = t, this.method = t.method || "GET", this.uri = u, this.async = t.async !== !1, this.data = t.data !== void 0 ? t.data : null, this.create()
			}
			create() {
				let u = An(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
				u.xdomain = !!this.opts.xd, u.xscheme = !!this.opts.xs;
				let t = this.xhr = new ua(u);
				try {
					t.open(this.method, this.uri, this.async);
					try {
						if (this.opts.extraHeaders) {
							t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
							for (let r in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(r) && t.setRequestHeader(r, this.opts.extraHeaders[r])
						}
					} catch {}
					if (this.method === "POST") try {
						t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
					} catch {}
					try {
						t.setRequestHeader("Accept", "*/*")
					} catch {}
					"withCredentials" in t && (t.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout), t.onreadystatechange = () => {
						t.readyState === 4 && (t.status === 200 || t.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
							this.onError(typeof t.status == "number" ? t.status : 0)
						}, 0))
					}, t.send(this.data)
				} catch (r) {
					this.setTimeoutFn(() => {
						this.onError(r)
					}, 0);
					return
				}
				typeof document < "u" && (this.index = hu.requestsCount++, hu.requests[this.index] = this)
			}
			onError(u) {
				this.emitReserved("error", u, this.xhr), this.cleanup(!0)
			}
			cleanup(u) {
				if (!(typeof this.xhr > "u" || this.xhr === null)) {
					if (this.xhr.onreadystatechange = pg, u) try {
						this.xhr.abort()
					} catch {}
					typeof document < "u" && delete hu.requests[this.index], this.xhr = null
				}
			}
			onLoad() {
				let u = this.xhr.responseText;
				u !== null && (this.emitReserved("data", u), this.emitReserved("success"), this.cleanup())
			}
			abort() {
				this.cleanup()
			}
		};
	hu.requestsCount = 0;
	hu.requests = {};
	if (typeof document < "u") {
		if (typeof attachEvent == "function") attachEvent("onunload", Ld);
		else if (typeof addEventListener == "function") {
			let e = "onpagehide" in Bu ? "pagehide" : "unload";
			addEventListener(e, Ld, !1)
		}
	}

	function Ld() {
		for (let e in hu.requests) hu.requests.hasOwnProperty(e) && hu.requests[e].abort()
	}
	var $r = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? u => Promise.resolve().then(u) : (u, t) => t(u, 0))(),
		Ur = Bu.WebSocket || Bu.MozWebSocket,
		hn = !0,
		Md = "arraybuffer";
	var jd = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative",
		mn = class extends Ue {
			constructor(u) {
				super(u), this.supportsBinary = !u.forceBase64
			}
			get name() {
				return "websocket"
			}
			doOpen() {
				if (!this.check()) return;
				let u = this.uri(),
					t = this.opts.protocols,
					r = jd ? {} : An(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
				this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
				try {
					this.ws = hn && !jd ? t ? new Ur(u, t) : new Ur(u) : new Ur(u, t, r)
				} catch (D) {
					return this.emitReserved("error", D)
				}
				this.ws.binaryType = this.socket.binaryType || Md, this.addEventListeners()
			}
			addEventListeners() {
				this.ws.onopen = () => {
					this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
				}, this.ws.onclose = u => this.onClose({
					description: "websocket connection closed",
					context: u
				}), this.ws.onmessage = u => this.onData(u.data), this.ws.onerror = u => this.onError("websocket error", u)
			}
			write(u) {
				this.writable = !1;
				for (let t = 0; t < u.length; t++) {
					let r = u[t],
						D = t === u.length - 1;
					ln(r, this.supportsBinary, n => {
						let i = {};
						hn || (r.options && (i.compress = r.options.compress), this.opts.perMessageDeflate && (typeof n == "string" ? Buffer.byteLength(n) : n.length) < this.opts.perMessageDeflate.threshold && (i.compress = !1));
						try {
							hn ? this.ws.send(n) : this.ws.send(n, i)
						} catch {}
						D && $r(() => {
							this.writable = !0, this.emitReserved("drain")
						}, this.setTimeoutFn)
					})
				}
			}
			doClose() {
				typeof this.ws < "u" && (this.ws.close(), this.ws = null)
			}
			uri() {
				let u = this.query || {},
					t = this.opts.secure ? "wss" : "ws",
					r = "";
				this.opts.port && (t === "wss" && Number(this.opts.port) !== 443 || t === "ws" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port), this.opts.timestampRequests && (u[this.opts.timestampParam] = dn()), this.supportsBinary || (u.b64 = 1);
				let D = pn(u),
					n = this.opts.hostname.indexOf(":") !== -1;
				return t + "://" + (n ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (D.length ? "?" + D : "")
			}
			check() {
				return !!Ur
			}
		};
	var ea = {
		websocket: mn,
		polling: Bn
	};
	var hg = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
		mg = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

	function bt(e) {
		let u = e,
			t = e.indexOf("["),
			r = e.indexOf("]");
		t != -1 && r != -1 && (e = e.substring(0, t) + e.substring(t, r).replace(/:/g, ";") + e.substring(r, e.length));
		let D = hg.exec(e || ""),
			n = {},
			i = 14;
		for (; i--;) n[mg[i]] = D[i] || "";
		return t != -1 && r != -1 && (n.source = u, n.host = n.host.substring(1, n.host.length - 1).replace(/;/g, ":"), n.authority = n.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), n.ipv6uri = !0), n.pathNames = vg(n, n.path), n.queryKey = yg(n, n.query), n
	}

	function vg(e, u) {
		let t = /\/{2,9}/g,
			r = u.replace(t, "/").split("/");
		return (u.slice(0, 1) == "/" || u.length === 0) && r.splice(0, 1), u.slice(-1) == "/" && r.splice(r.length - 1, 1), r
	}

	function yg(e, u) {
		let t = {};
		return u.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, D, n) {
			D && (t[D] = n)
		}), t
	}
	var Fu = class extends N {
		constructor(u, t = {}) {
			super(), u && typeof u == "object" && (t = u, u = null), u ? (u = bt(u), t.hostname = u.host, t.secure = u.protocol === "https" || u.protocol === "wss", t.port = u.port, u.query && (t.query = u.query)) : t.host && (t.hostname = bt(t.host).host), Qu(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
				path: "/engine.io",
				agent: !1,
				withCredentials: !1,
				upgrade: !0,
				timestampParam: "t",
				rememberUpgrade: !1,
				rejectUnauthorized: !0,
				perMessageDeflate: {
					threshold: 1024
				},
				transportOptions: {},
				closeOnBeforeunload: !0
			}, t), this.opts.path = this.opts.path.replace(/\/$/, "") + "/", typeof this.opts.query == "string" && (this.opts.query = Nd(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
				this.transport && (this.transport.removeAllListeners(), this.transport.close())
			}, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
				this.onClose("transport close", {
					description: "network connection lost"
				})
			}, addEventListener("offline", this.offlineEventListener, !1))), this.open()
		}
		createTransport(u) {
			let t = Object.assign({}, this.opts.query);
			t.EIO = Ji, t.transport = u, this.id && (t.sid = this.id);
			let r = Object.assign({}, this.opts.transportOptions[u], this.opts, {
				query: t,
				socket: this,
				hostname: this.hostname,
				secure: this.secure,
				port: this.port
			});
			return new ea[u](r)
		}
		open() {
			let u;
			if (this.opts.rememberUpgrade && Fu.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) u = "websocket";
			else if (this.transports.length === 0) {
				this.setTimeoutFn(() => {
					this.emitReserved("error", "No transports available")
				}, 0);
				return
			} else u = this.transports[0];
			this.readyState = "opening";
			try {
				u = this.createTransport(u)
			} catch {
				this.transports.shift(), this.open();
				return
			}
			u.open(), this.setTransport(u)
		}
		setTransport(u) {
			this.transport && this.transport.removeAllListeners(), this.transport = u, u.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", t => this.onClose("transport close", t))
		}
		probe(u) {
			let t = this.createTransport(u),
				r = !1;
			Fu.priorWebsocketSuccess = !1;
			let D = () => {
				r || (t.send([{
					type: "ping",
					data: "probe"
				}]), t.once("packet", E => {
					if (!r)
						if (E.type === "pong" && E.data === "probe") {
							if (this.upgrading = !0, this.emitReserved("upgrading", t), !t) return;
							Fu.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
								r || this.readyState !== "closed" && (c(), this.setTransport(t), t.send([{
									type: "upgrade"
								}]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush())
							})
						} else {
							let C = new Error("probe error");
							C.transport = t.name, this.emitReserved("upgradeError", C)
						}
				}))
			};

			function n() {
				r || (r = !0, c(), t.close(), t = null)
			}
			let i = E => {
				let C = new Error("probe error: " + E);
				C.transport = t.name, n(), this.emitReserved("upgradeError", C)
			};

			function a() {
				i("transport closed")
			}

			function o() {
				i("socket closed")
			}

			function s(E) {
				t && E.name !== t.name && n()
			}
			let c = () => {
				t.removeListener("open", D), t.removeListener("error", i), t.removeListener("close", a), this.off("close", o), this.off("upgrading", s)
			};
			t.once("open", D), t.once("error", i), t.once("close", a), this.once("close", o), this.once("upgrading", s), t.open()
		}
		onOpen() {
			if (this.readyState = "open", Fu.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
				let u = 0,
					t = this.upgrades.length;
				for (; u < t; u++) this.probe(this.upgrades[u])
			}
		}
		onPacket(u) {
			if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", u), this.emitReserved("heartbeat"), u.type) {
				case "open":
					this.onHandshake(JSON.parse(u.data));
					break;
				case "ping":
					this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
					break;
				case "error":
					let t = new Error("server error");
					t.code = u.data, this.onError(t);
					break;
				case "message":
					this.emitReserved("data", u.data), this.emitReserved("message", u.data);
					break
			}
		}
		onHandshake(u) {
			this.emitReserved("handshake", u), this.id = u.sid, this.transport.query.sid = u.sid, this.upgrades = this.filterUpgrades(u.upgrades), this.pingInterval = u.pingInterval, this.pingTimeout = u.pingTimeout, this.maxPayload = u.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout()
		}
		resetPingTimeout() {
			this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
				this.onClose("ping timeout")
			}, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
		}
		onDrain() {
			this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
		}
		flush() {
			if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
				let u = this.getWritablePackets();
				this.transport.send(u), this.prevBufferLen = u.length, this.emitReserved("flush")
			}
		}
		getWritablePackets() {
			if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
			let t = 1;
			for (let r = 0; r < this.writeBuffer.length; r++) {
				let D = this.writeBuffer[r].data;
				if (D && (t += Td(D)), r > 0 && t > this.maxPayload) return this.writeBuffer.slice(0, r);
				t += 2
			}
			return this.writeBuffer
		}
		write(u, t, r) {
			return this.sendPacket("message", u, t, r), this
		}
		send(u, t, r) {
			return this.sendPacket("message", u, t, r), this
		}
		sendPacket(u, t, r, D) {
			if (typeof t == "function" && (D = t, t = void 0), typeof r == "function" && (D = r, r = null), this.readyState === "closing" || this.readyState === "closed") return;
			r = r || {}, r.compress = r.compress !== !1;
			let n = {
				type: u,
				data: t,
				options: r
			};
			this.emitReserved("packetCreate", n), this.writeBuffer.push(n), D && this.once("flush", D), this.flush()
		}
		close() {
			let u = () => {
					this.onClose("forced close"), this.transport.close()
				},
				t = () => {
					this.off("upgrade", t), this.off("upgradeError", t), u()
				},
				r = () => {
					this.once("upgrade", t), this.once("upgradeError", t)
				};
			return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
				this.upgrading ? r() : u()
			}) : this.upgrading ? r() : u()), this
		}
		onError(u) {
			Fu.priorWebsocketSuccess = !1, this.emitReserved("error", u), this.onClose("transport error", u)
		}
		onClose(u, t) {
			(this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", u, t), this.writeBuffer = [], this.prevBufferLen = 0)
		}
		filterUpgrades(u) {
			let t = [],
				r = 0,
				D = u.length;
			for (; r < D; r++) ~this.transports.indexOf(u[r]) && t.push(u[r]);
			return t
		}
	};
	Fu.protocol = Ji;
	var LI = Fu.protocol;

	function $d(e, u = "", t) {
		let r = e;
		t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), r = bt(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
		let n = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
		return r.id = r.protocol + "://" + n + ":" + r.port + u, r.href = r.protocol + "://" + n + (t && t.port === r.port ? "" : ":" + r.port), r
	}
	var ia = {};
	x2(ia, {
		Decoder: () => Kr,
		Encoder: () => Da,
		PacketType: () => q,
		protocol: () => Kd
	});
	var gg = typeof ArrayBuffer == "function",
		bg = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer,
		Ud = Object.prototype.toString,
		_g = typeof Blob == "function" || typeof Blob < "u" && Ud.call(Blob) === "[object BlobConstructor]",
		xg = typeof File == "function" || typeof File < "u" && Ud.call(File) === "[object FileConstructor]";

	function Vr(e) {
		return gg && (e instanceof ArrayBuffer || bg(e)) || _g && e instanceof Blob || xg && e instanceof File
	}

	function Hr(e, u) {
		if (!e || typeof e != "object") return !1;
		if (Array.isArray(e)) {
			for (let t = 0, r = e.length; t < r; t++)
				if (Hr(e[t])) return !0;
			return !1
		}
		if (Vr(e)) return !0;
		if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1) return Hr(e.toJSON(), !0);
		for (let t in e)
			if (Object.prototype.hasOwnProperty.call(e, t) && Hr(e[t])) return !0;
		return !1
	}

	function Hd(e) {
		let u = [],
			t = e.data,
			r = e;
		return r.data = ta(t, u), r.attachments = u.length, {
			packet: r,
			buffers: u
		}
	}

	function ta(e, u) {
		if (!e) return e;
		if (Vr(e)) {
			let t = {
				_placeholder: !0,
				num: u.length
			};
			return u.push(e), t
		} else if (Array.isArray(e)) {
			let t = new Array(e.length);
			for (let r = 0; r < e.length; r++) t[r] = ta(e[r], u);
			return t
		} else if (typeof e == "object" && !(e instanceof Date)) {
			let t = {};
			for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = ta(e[r], u));
			return t
		}
		return e
	}

	function Vd(e, u) {
		return e.data = ra(e.data, u), e.attachments = void 0, e
	}

	function ra(e, u) {
		if (!e) return e;
		if (e && e._placeholder === !0) {
			if (typeof e.num == "number" && e.num >= 0 && e.num < u.length) return u[e.num];
			throw new Error("illegal attachments")
		} else if (Array.isArray(e))
			for (let t = 0; t < e.length; t++) e[t] = ra(e[t], u);
		else if (typeof e == "object")
			for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (e[t] = ra(e[t], u));
		return e
	}
	var Kd = 5,
		q;
	(function(e) {
		e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
	})(q || (q = {}));
	var Da = class {
			constructor(u) {
				this.replacer = u
			}
			encode(u) {
				return (u.type === q.EVENT || u.type === q.ACK) && Hr(u) ? (u.type = u.type === q.EVENT ? q.BINARY_EVENT : q.BINARY_ACK, this.encodeAsBinary(u)) : [this.encodeAsString(u)]
			}
			encodeAsString(u) {
				let t = "" + u.type;
				return (u.type === q.BINARY_EVENT || u.type === q.BINARY_ACK) && (t += u.attachments + "-"), u.nsp && u.nsp !== "/" && (t += u.nsp + ","), u.id != null && (t += u.id), u.data != null && (t += JSON.stringify(u.data, this.replacer)), t
			}
			encodeAsBinary(u) {
				let t = Hd(u),
					r = this.encodeAsString(t.packet),
					D = t.buffers;
				return D.unshift(r), D
			}
		},
		Kr = class extends N {
			constructor(u) {
				super(), this.reviver = u
			}
			add(u) {
				let t;
				if (typeof u == "string") {
					if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
					t = this.decodeString(u), t.type === q.BINARY_EVENT || t.type === q.BINARY_ACK ? (this.reconstructor = new na(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t)
				} else if (Vr(u) || u.base64)
					if (this.reconstructor) t = this.reconstructor.takeBinaryData(u), t && (this.reconstructor = null, super.emitReserved("decoded", t));
					else throw new Error("got binary data when not reconstructing a packet");
				else throw new Error("Unknown type: " + u)
			}
			decodeString(u) {
				let t = 0,
					r = {
						type: Number(u.charAt(0))
					};
				if (q[r.type] === void 0) throw new Error("unknown packet type " + r.type);
				if (r.type === q.BINARY_EVENT || r.type === q.BINARY_ACK) {
					let n = t + 1;
					for (; u.charAt(++t) !== "-" && t != u.length;);
					let i = u.substring(n, t);
					if (i != Number(i) || u.charAt(t) !== "-") throw new Error("Illegal attachments");
					r.attachments = Number(i)
				}
				if (u.charAt(t + 1) === "/") {
					let n = t + 1;
					for (; ++t && !(u.charAt(t) === "," || t === u.length););
					r.nsp = u.substring(n, t)
				} else r.nsp = "/";
				let D = u.charAt(t + 1);
				if (D !== "" && Number(D) == D) {
					let n = t + 1;
					for (; ++t;) {
						let i = u.charAt(t);
						if (i == null || Number(i) != i) {
							--t;
							break
						}
						if (t === u.length) break
					}
					r.id = Number(u.substring(n, t + 1))
				}
				if (u.charAt(++t)) {
					let n = this.tryParse(u.substr(t));
					if (Kr.isPayloadValid(r.type, n)) r.data = n;
					else throw new Error("invalid payload")
				}
				return r
			}
			tryParse(u) {
				try {
					return JSON.parse(u, this.reviver)
				} catch {
					return !1
				}
			}
			static isPayloadValid(u, t) {
				switch (u) {
					case q.CONNECT:
						return typeof t == "object";
					case q.DISCONNECT:
						return t === void 0;
					case q.CONNECT_ERROR:
						return typeof t == "string" || typeof t == "object";
					case q.EVENT:
					case q.BINARY_EVENT:
						return Array.isArray(t) && t.length > 0;
					case q.ACK:
					case q.BINARY_ACK:
						return Array.isArray(t)
				}
			}
			destroy() {
				this.reconstructor && this.reconstructor.finishedReconstruction()
			}
		},
		na = class {
			constructor(u) {
				this.packet = u, this.buffers = [], this.reconPack = u
			}
			takeBinaryData(u) {
				if (this.buffers.push(u), this.buffers.length === this.reconPack.attachments) {
					let t = Vd(this.reconPack, this.buffers);
					return this.finishedReconstruction(), t
				}
				return null
			}
			finishedReconstruction() {
				this.reconPack = null, this.buffers = []
			}
		};

	function cu(e, u, t) {
		return e.on(u, t),
			function() {
				e.off(u, t)
			}
	}
	var wg = Object.freeze({
			connect: 1,
			connect_error: 1,
			disconnect: 1,
			disconnecting: 1,
			newListener: 1,
			removeListener: 1
		}),
		_t = class extends N {
			constructor(u, t, r) {
				super(), this.connected = !1, this.receiveBuffer = [], this.sendBuffer = [], this.ids = 0, this.acks = {}, this.flags = {}, this.io = u, this.nsp = t, r && r.auth && (this.auth = r.auth), this.io._autoConnect && this.open()
			}
			get disconnected() {
				return !this.connected
			}
			subEvents() {
				if (this.subs) return;
				let u = this.io;
				this.subs = [cu(u, "open", this.onopen.bind(this)), cu(u, "packet", this.onpacket.bind(this)), cu(u, "error", this.onerror.bind(this)), cu(u, "close", this.onclose.bind(this))]
			}
			get active() {
				return !!this.subs
			}
			connect() {
				return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
			}
			open() {
				return this.connect()
			}
			send(...u) {
				return u.unshift("message"), this.emit.apply(this, u), this
			}
			emit(u, ...t) {
				if (wg.hasOwnProperty(u)) throw new Error('"' + u.toString() + '" is a reserved event name');
				t.unshift(u);
				let r = {
					type: q.EVENT,
					data: t
				};
				if (r.options = {}, r.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
					let i = this.ids++,
						a = t.pop();
					this._registerAckCallback(i, a), r.id = i
				}
				let D = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
				return this.flags.volatile && (!D || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r)), this.flags = {}, this
			}
			_registerAckCallback(u, t) {
				let r = this.flags.timeout;
				if (r === void 0) {
					this.acks[u] = t;
					return
				}
				let D = this.io.setTimeoutFn(() => {
					delete this.acks[u];
					for (let n = 0; n < this.sendBuffer.length; n++) this.sendBuffer[n].id === u && this.sendBuffer.splice(n, 1);
					t.call(this, new Error("operation has timed out"))
				}, r);
				this.acks[u] = (...n) => {
					this.io.clearTimeoutFn(D), t.apply(this, [null, ...n])
				}
			}
			packet(u) {
				u.nsp = this.nsp, this.io._packet(u)
			}
			onopen() {
				typeof this.auth == "function" ? this.auth(u => {
					this.packet({
						type: q.CONNECT,
						data: u
					})
				}) : this.packet({
					type: q.CONNECT,
					data: this.auth
				})
			}
			onerror(u) {
				this.connected || this.emitReserved("connect_error", u)
			}
			onclose(u, t) {
				this.connected = !1, delete this.id, this.emitReserved("disconnect", u, t)
			}
			onpacket(u) {
				if (u.nsp === this.nsp) switch (u.type) {
					case q.CONNECT:
						if (u.data && u.data.sid) {
							let D = u.data.sid;
							this.onconnect(D)
						} else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
						break;
					case q.EVENT:
					case q.BINARY_EVENT:
						this.onevent(u);
						break;
					case q.ACK:
					case q.BINARY_ACK:
						this.onack(u);
						break;
					case q.DISCONNECT:
						this.ondisconnect();
						break;
					case q.CONNECT_ERROR:
						this.destroy();
						let r = new Error(u.data.message);
						r.data = u.data.data, this.emitReserved("connect_error", r);
						break
				}
			}
			onevent(u) {
				let t = u.data || [];
				u.id != null && t.push(this.ack(u.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
			}
			emitEvent(u) {
				if (this._anyListeners && this._anyListeners.length) {
					let t = this._anyListeners.slice();
					for (let r of t) r.apply(this, u)
				}
				super.emit.apply(this, u)
			}
			ack(u) {
				let t = this,
					r = !1;
				return function(...D) {
					r || (r = !0, t.packet({
						type: q.ACK,
						id: u,
						data: D
					}))
				}
			}
			onack(u) {
				let t = this.acks[u.id];
				typeof t == "function" && (t.apply(this, u.data), delete this.acks[u.id])
			}
			onconnect(u) {
				this.id = u, this.connected = !0, this.emitBuffered(), this.emitReserved("connect")
			}
			emitBuffered() {
				this.receiveBuffer.forEach(u => this.emitEvent(u)), this.receiveBuffer = [], this.sendBuffer.forEach(u => {
					this.notifyOutgoingListeners(u), this.packet(u)
				}), this.sendBuffer = []
			}
			ondisconnect() {
				this.destroy(), this.onclose("io server disconnect")
			}
			destroy() {
				this.subs && (this.subs.forEach(u => u()), this.subs = void 0), this.io._destroy(this)
			}
			disconnect() {
				return this.connected && this.packet({
					type: q.DISCONNECT
				}), this.destroy(), this.connected && this.onclose("io client disconnect"), this
			}
			close() {
				return this.disconnect()
			}
			compress(u) {
				return this.flags.compress = u, this
			}
			get volatile() {
				return this.flags.volatile = !0, this
			}
			timeout(u) {
				return this.flags.timeout = u, this
			}
			onAny(u) {
				return this._anyListeners = this._anyListeners || [], this._anyListeners.push(u), this
			}
			prependAny(u) {
				return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(u), this
			}
			offAny(u) {
				if (!this._anyListeners) return this;
				if (u) {
					let t = this._anyListeners;
					for (let r = 0; r < t.length; r++)
						if (u === t[r]) return t.splice(r, 1), this
				} else this._anyListeners = [];
				return this
			}
			listenersAny() {
				return this._anyListeners || []
			}
			onAnyOutgoing(u) {
				return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(u), this
			}
			prependAnyOutgoing(u) {
				return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(u), this
			}
			offAnyOutgoing(u) {
				if (!this._anyOutgoingListeners) return this;
				if (u) {
					let t = this._anyOutgoingListeners;
					for (let r = 0; r < t.length; r++)
						if (u === t[r]) return t.splice(r, 1), this
				} else this._anyOutgoingListeners = [];
				return this
			}
			listenersAnyOutgoing() {
				return this._anyOutgoingListeners || []
			}
			notifyOutgoingListeners(u) {
				if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
					let t = this._anyOutgoingListeners.slice();
					for (let r of t) r.apply(this, u.data)
				}
			}
		};

	function He(e) {
		e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
	}
	He.prototype.duration = function() {
		var e = this.ms * Math.pow(this.factor, this.attempts++);
		if (this.jitter) {
			var u = Math.random(),
				t = Math.floor(u * this.jitter * e);
			e = (Math.floor(u * 10) & 1) == 0 ? e - t : e + t
		}
		return Math.min(e, this.max) | 0
	};
	He.prototype.reset = function() {
		this.attempts = 0
	};
	He.prototype.setMin = function(e) {
		this.ms = e
	};
	He.prototype.setMax = function(e) {
		this.max = e
	};
	He.prototype.setJitter = function(e) {
		this.jitter = e
	};
	var xt = class extends N {
		constructor(u, t) {
			var r;
			super(), this.nsps = {}, this.subs = [], u && typeof u == "object" && (t = u, u = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Qu(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : .5), this.backoff = new He({
				min: this.reconnectionDelay(),
				max: this.reconnectionDelayMax(),
				jitter: this.randomizationFactor()
			}), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = u;
			let D = t.parser || ia;
			this.encoder = new D.Encoder, this.decoder = new D.Decoder, this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open()
		}
		reconnection(u) {
			return arguments.length ? (this._reconnection = !!u, this) : this._reconnection
		}
		reconnectionAttempts(u) {
			return u === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = u, this)
		}
		reconnectionDelay(u) {
			var t;
			return u === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = u, (t = this.backoff) === null || t === void 0 || t.setMin(u), this)
		}
		randomizationFactor(u) {
			var t;
			return u === void 0 ? this._randomizationFactor : (this._randomizationFactor = u, (t = this.backoff) === null || t === void 0 || t.setJitter(u), this)
		}
		reconnectionDelayMax(u) {
			var t;
			return u === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = u, (t = this.backoff) === null || t === void 0 || t.setMax(u), this)
		}
		timeout(u) {
			return arguments.length ? (this._timeout = u, this) : this._timeout
		}
		maybeReconnectOnOpen() {
			!this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
		}
		open(u) {
			if (~this._readyState.indexOf("open")) return this;
			this.engine = new Fu(this.uri, this.opts);
			let t = this.engine,
				r = this;
			this._readyState = "opening", this.skipReconnect = !1;
			let D = cu(t, "open", function() {
					r.onopen(), u && u()
				}),
				n = cu(t, "error", i => {
					r.cleanup(), r._readyState = "closed", this.emitReserved("error", i), u ? u(i) : r.maybeReconnectOnOpen()
				});
			if (this._timeout !== !1) {
				let i = this._timeout;
				i === 0 && D();
				let a = this.setTimeoutFn(() => {
					D(), t.close(), t.emit("error", new Error("timeout"))
				}, i);
				this.opts.autoUnref && a.unref(), this.subs.push(function() {
					clearTimeout(a)
				})
			}
			return this.subs.push(D), this.subs.push(n), this
		}
		connect(u) {
			return this.open(u)
		}
		onopen() {
			this.cleanup(), this._readyState = "open", this.emitReserved("open");
			let u = this.engine;
			this.subs.push(cu(u, "ping", this.onping.bind(this)), cu(u, "data", this.ondata.bind(this)), cu(u, "error", this.onerror.bind(this)), cu(u, "close", this.onclose.bind(this)), cu(this.decoder, "decoded", this.ondecoded.bind(this)))
		}
		onping() {
			this.emitReserved("ping")
		}
		ondata(u) {
			try {
				this.decoder.add(u)
			} catch (t) {
				this.onclose("parse error", t)
			}
		}
		ondecoded(u) {
			$r(() => {
				this.emitReserved("packet", u)
			}, this.setTimeoutFn)
		}
		onerror(u) {
			this.emitReserved("error", u)
		}
		socket(u, t) {
			let r = this.nsps[u];
			return r || (r = new _t(this, u, t), this.nsps[u] = r), r
		}
		_destroy(u) {
			let t = Object.keys(this.nsps);
			for (let r of t)
				if (this.nsps[r].active) return;
			this._close()
		}
		_packet(u) {
			let t = this.encoder.encode(u);
			for (let r = 0; r < t.length; r++) this.engine.write(t[r], u.options)
		}
		cleanup() {
			this.subs.forEach(u => u()), this.subs.length = 0, this.decoder.destroy()
		}
		_close() {
			this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
		}
		disconnect() {
			return this._close()
		}
		onclose(u, t) {
			this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", u, t), this._reconnection && !this.skipReconnect && this.reconnect()
		}
		reconnect() {
			if (this._reconnecting || this.skipReconnect) return this;
			let u = this;
			if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
			else {
				let t = this.backoff.duration();
				this._reconnecting = !0;
				let r = this.setTimeoutFn(() => {
					u.skipReconnect || (this.emitReserved("reconnect_attempt", u.backoff.attempts), !u.skipReconnect && u.open(D => {
						D ? (u._reconnecting = !1, u.reconnect(), this.emitReserved("reconnect_error", D)) : u.onreconnect()
					}))
				}, t);
				this.opts.autoUnref && r.unref(), this.subs.push(function() {
					clearTimeout(r)
				})
			}
		}
		onreconnect() {
			let u = this.backoff.attempts;
			this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", u)
		}
	};
	var zr = {};

	function Wr(e, u) {
		typeof e == "object" && (u = e, e = void 0), u = u || {};
		let t = $d(e, u.path || "/socket.io"),
			r = t.source,
			D = t.id,
			n = t.path,
			i = zr[D] && n in zr[D].nsps,
			a = u.forceNew || u["force new connection"] || u.multiplex === !1 || i,
			o;
		return a ? o = new xt(r, u) : (zr[D] || (zr[D] = new xt(r, u)), o = zr[D]), t.query && !u.query && (u.query = t.queryKey), o.socket(t.path, u)
	}
	Object.assign(Wr, {
		Manager: xt,
		Socket: _t,
		io: Wr,
		connect: Wr
	});
	var aa, vn = null,
		Sg = new Event("builderPreviewModeRerendering"),
		zd = async ({
			agencyId: e,
			embedId: u,
			locationGroupSelector: t
		}) => {
			await ut(`${gu.NEXT_PUBLIC_HOST}/api/socket`), aa = Wr(gu.NEXT_PUBLIC_HOST, {
				auth: {
					agencyId: e,
					embedId: u,
					locationGroupSelector: t
				}
			}), aa.on("connect", () => {
				console.log("Toolkit CSS WebSocket connected.")
			}), aa.on("draft-settings-updated", r => {
				window.dispatchEvent(Sg), Bd(), cn(), Fn(), En(r.data), vn = r
			})
		};
	var sa, yn = window,
		St = yn.trustedTypes,
		Wd = St ? St.createPolicy("lit-html", {
			createHTML: e => e
		}) : void 0,
		Ce = `lit$${(Math.random()+"").slice(9)}$`,
		u2 = "?" + Ce,
		Tg = `<${u2}>`,
		Tt = document,
		gn = (e = "") => Tt.createComment(e),
		Zr = e => e === null || typeof e != "object" && typeof e != "function",
		e2 = Array.isArray,
		Og = e => e2(e) || typeof e?.[Symbol.iterator] == "function",
		Gr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
		Gd = /-->/g,
		Zd = />/g,
		Ve = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
		Yd = /'/g,
		Jd = /"/g,
		t2 = /^(?:script|style|textarea|title)$/i,
		r2 = e => (u, ...t) => ({
			_$litType$: e,
			strings: u,
			values: t
		}),
		Ca = r2(1),
		yN = r2(2),
		Yr = Symbol.for("lit-noChange"),
		Y = Symbol.for("lit-nothing"),
		Xd = new WeakMap,
		wt = Tt.createTreeWalker(Tt, 129, null, !1),
		qg = (e, u) => {
			let t = e.length - 1,
				r = [],
				D, n = u === 2 ? "<svg>" : "",
				i = Gr;
			for (let o = 0; o < t; o++) {
				let s = e[o],
					c, E, C = -1,
					f = 0;
				for (; f < s.length && (i.lastIndex = f, E = i.exec(s), E !== null);) f = i.lastIndex, i === Gr ? E[1] === "!--" ? i = Gd : E[1] !== void 0 ? i = Zd : E[2] !== void 0 ? (t2.test(E[2]) && (D = RegExp("</" + E[2], "g")), i = Ve) : E[3] !== void 0 && (i = Ve) : i === Ve ? E[0] === ">" ? (i = D ?? Gr, C = -1) : E[1] === void 0 ? C = -2 : (C = i.lastIndex - E[2].length, c = E[1], i = E[3] === void 0 ? Ve : E[3] === '"' ? Jd : Yd) : i === Jd || i === Yd ? i = Ve : i === Gd || i === Zd ? i = Gr : (i = Ve, D = void 0);
				let A = i === Ve && e[o + 1].startsWith("/>") ? " " : "";
				n += i === Gr ? s + Tg : C >= 0 ? (r.push(c), s.slice(0, C) + "$lit$" + s.slice(C) + Ce + A) : s + Ce + (C === -2 ? (r.push(void 0), o) : A)
			}
			let a = n + (e[t] || "<?>") + (u === 2 ? "</svg>" : "");
			if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
			return [Wd !== void 0 ? Wd.createHTML(a) : a, r]
		},
		Ke = class {
			constructor({
				strings: u,
				_$litType$: t
			}, r) {
				let D;
				this.parts = [];
				let n = 0,
					i = 0,
					a = u.length - 1,
					o = this.parts,
					[s, c] = qg(u, t);
				if (this.el = Ke.createElement(s, r), wt.currentNode = this.el.content, t === 2) {
					let E = this.el.content,
						C = E.firstChild;
					C.remove(), E.append(...C.childNodes)
				}
				for (;
					(D = wt.nextNode()) !== null && o.length < a;) {
					if (D.nodeType === 1) {
						if (D.hasAttributes()) {
							let E = [];
							for (let C of D.getAttributeNames())
								if (C.endsWith("$lit$") || C.startsWith(Ce)) {
									let f = c[i++];
									if (E.push(C), f !== void 0) {
										let A = D.getAttribute(f.toLowerCase() + "$lit$").split(Ce),
											d = /([.?@])?(.*)/.exec(f);
										o.push({
											type: 1,
											index: n,
											name: d[2],
											strings: A,
											ctor: d[1] === "." ? Fa : d[1] === "?" ? ca : d[1] === "@" ? Ea : Rt
										})
									} else o.push({
										type: 6,
										index: n
									})
								} for (let C of E) D.removeAttribute(C)
						}
						if (t2.test(D.tagName)) {
							let E = D.textContent.split(Ce),
								C = E.length - 1;
							if (C > 0) {
								D.textContent = St ? St.emptyScript : "";
								for (let f = 0; f < C; f++) D.append(E[f], gn()), wt.nextNode(), o.push({
									type: 2,
									index: ++n
								});
								D.append(E[C], gn())
							}
						}
					} else if (D.nodeType === 8)
						if (D.data === u2) o.push({
							type: 2,
							index: n
						});
						else {
							let E = -1;
							for (;
								(E = D.data.indexOf(Ce, E + 1)) !== -1;) o.push({
								type: 7,
								index: n
							}), E += Ce.length - 1
						} n++
				}
			}
			static createElement(u, t) {
				let r = Tt.createElement("template");
				return r.innerHTML = u, r
			}
		};

	function Ot(e, u, t = e, r) {
		var D, n, i, a;
		if (u === Yr) return u;
		let o = r !== void 0 ? (D = t._$Co) === null || D === void 0 ? void 0 : D[r] : t._$Cl,
			s = Zr(u) ? void 0 : u._$litDirective$;
		return o?.constructor !== s && ((n = o?._$AO) === null || n === void 0 || n.call(o, !1), s === void 0 ? o = void 0 : (o = new s(e), o._$AT(e, t, r)), r !== void 0 ? ((i = (a = t)._$Co) !== null && i !== void 0 ? i : a._$Co = [])[r] = o : t._$Cl = o), o !== void 0 && (u = Ot(e, o._$AS(e, u.values), o, r)), u
	}
	var oa = class {
			constructor(u, t) {
				this.u = [], this._$AN = void 0, this._$AD = u, this._$AM = t
			}
			get parentNode() {
				return this._$AM.parentNode
			}
			get _$AU() {
				return this._$AM._$AU
			}
			v(u) {
				var t;
				let {
					el: {
						content: r
					},
					parts: D
				} = this._$AD, n = ((t = u?.creationScope) !== null && t !== void 0 ? t : Tt).importNode(r, !0);
				wt.currentNode = n;
				let i = wt.nextNode(),
					a = 0,
					o = 0,
					s = D[0];
				for (; s !== void 0;) {
					if (a === s.index) {
						let c;
						s.type === 2 ? c = new qt(i, i.nextSibling, this, u) : s.type === 1 ? c = new s.ctor(i, s.name, s.strings, this, u) : s.type === 6 && (c = new la(i, this, u)), this.u.push(c), s = D[++o]
					}
					a !== s?.index && (i = wt.nextNode(), a++)
				}
				return n
			}
			p(u) {
				let t = 0;
				for (let r of this.u) r !== void 0 && (r.strings !== void 0 ? (r._$AI(u, r, t), t += r.strings.length - 2) : r._$AI(u[t])), t++
			}
		},
		qt = class {
			constructor(u, t, r, D) {
				var n;
				this.type = 2, this._$AH = Y, this._$AN = void 0, this._$AA = u, this._$AB = t, this._$AM = r, this.options = D, this._$Cm = (n = D?.isConnected) === null || n === void 0 || n
			}
			get _$AU() {
				var u, t;
				return (t = (u = this._$AM) === null || u === void 0 ? void 0 : u._$AU) !== null && t !== void 0 ? t : this._$Cm
			}
			get parentNode() {
				let u = this._$AA.parentNode,
					t = this._$AM;
				return t !== void 0 && u.nodeType === 11 && (u = t.parentNode), u
			}
			get startNode() {
				return this._$AA
			}
			get endNode() {
				return this._$AB
			}
			_$AI(u, t = this) {
				u = Ot(this, u, t), Zr(u) ? u === Y || u == null || u === "" ? (this._$AH !== Y && this._$AR(), this._$AH = Y) : u !== this._$AH && u !== Yr && this.g(u) : u._$litType$ !== void 0 ? this.$(u) : u.nodeType !== void 0 ? this.T(u) : Og(u) ? this.k(u) : this.g(u)
			}
			O(u, t = this._$AB) {
				return this._$AA.parentNode.insertBefore(u, t)
			}
			T(u) {
				this._$AH !== u && (this._$AR(), this._$AH = this.O(u))
			}
			g(u) {
				this._$AH !== Y && Zr(this._$AH) ? this._$AA.nextSibling.data = u : this.T(Tt.createTextNode(u)), this._$AH = u
			}
			$(u) {
				var t;
				let {
					values: r,
					_$litType$: D
				} = u, n = typeof D == "number" ? this._$AC(u) : (D.el === void 0 && (D.el = Ke.createElement(D.h, this.options)), D);
				if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === n) this._$AH.p(r);
				else {
					let i = new oa(n, this),
						a = i.v(this.options);
					i.p(r), this.T(a), this._$AH = i
				}
			}
			_$AC(u) {
				let t = Xd.get(u.strings);
				return t === void 0 && Xd.set(u.strings, t = new Ke(u)), t
			}
			k(u) {
				e2(this._$AH) || (this._$AH = [], this._$AR());
				let t = this._$AH,
					r, D = 0;
				for (let n of u) D === t.length ? t.push(r = new qt(this.O(gn()), this.O(gn()), this, this.options)) : r = t[D], r._$AI(n), D++;
				D < t.length && (this._$AR(r && r._$AB.nextSibling, D), t.length = D)
			}
			_$AR(u = this._$AA.nextSibling, t) {
				var r;
				for ((r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, t); u && u !== this._$AB;) {
					let D = u.nextSibling;
					u.remove(), u = D
				}
			}
			setConnected(u) {
				var t;
				this._$AM === void 0 && (this._$Cm = u, (t = this._$AP) === null || t === void 0 || t.call(this, u))
			}
		},
		Rt = class {
			constructor(u, t, r, D, n) {
				this.type = 1, this._$AH = Y, this._$AN = void 0, this.element = u, this.name = t, this._$AM = D, this.options = n, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = Y
			}
			get tagName() {
				return this.element.tagName
			}
			get _$AU() {
				return this._$AM._$AU
			}
			_$AI(u, t = this, r, D) {
				let n = this.strings,
					i = !1;
				if (n === void 0) u = Ot(this, u, t, 0), i = !Zr(u) || u !== this._$AH && u !== Yr, i && (this._$AH = u);
				else {
					let a = u,
						o, s;
					for (u = n[0], o = 0; o < n.length - 1; o++) s = Ot(this, a[r + o], t, o), s === Yr && (s = this._$AH[o]), i || (i = !Zr(s) || s !== this._$AH[o]), s === Y ? u = Y : u !== Y && (u += (s ?? "") + n[o + 1]), this._$AH[o] = s
				}
				i && !D && this.j(u)
			}
			j(u) {
				u === Y ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, u ?? "")
			}
		},
		Fa = class extends Rt {
			constructor() {
				super(...arguments), this.type = 3
			}
			j(u) {
				this.element[this.name] = u === Y ? void 0 : u
			}
		},
		Rg = St ? St.emptyScript : "",
		ca = class extends Rt {
			constructor() {
				super(...arguments), this.type = 4
			}
			j(u) {
				u && u !== Y ? this.element.setAttribute(this.name, Rg) : this.element.removeAttribute(this.name)
			}
		},
		Ea = class extends Rt {
			constructor(u, t, r, D, n) {
				super(u, t, r, D, n), this.type = 5
			}
			_$AI(u, t = this) {
				var r;
				if ((u = (r = Ot(this, u, t, 0)) !== null && r !== void 0 ? r : Y) === Yr) return;
				let D = this._$AH,
					n = u === Y && D !== Y || u.capture !== D.capture || u.once !== D.once || u.passive !== D.passive,
					i = u !== Y && (D === Y || n);
				n && this.element.removeEventListener(this.name, this, D), i && this.element.addEventListener(this.name, this, u), this._$AH = u
			}
			handleEvent(u) {
				var t, r;
				typeof this._$AH == "function" ? this._$AH.call((r = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && r !== void 0 ? r : this.element, u) : this._$AH.handleEvent(u)
			}
		},
		la = class {
			constructor(u, t, r) {
				this.element = u, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
			}
			get _$AU() {
				return this._$AM._$AU
			}
			_$AI(u) {
				Ot(this, u)
			}
		};
	var Qd = yn.litHtmlPolyfillSupport;
	Qd?.(Ke, qt), ((sa = yn.litHtmlVersions) !== null && sa !== void 0 ? sa : yn.litHtmlVersions = []).push("2.5.0");

	function D2() {
		let e = Ge(),
			u = document.querySelectorAll("style");
		for (let t of u)
			if (t.innerHTML == (e == null ? void 0 : e.company.customCSS)) return !0
	}

	function n2() {
		let e = Ge();
		document.querySelectorAll("style").forEach(u => {
			u.innerHTML == (e == null ? void 0 : e.company.customCSS) && u.remove()
		})
	}

	function i2() {
		let e = Ge(),
			u = e == null ? void 0 : e.company.customCSS,
			t = u == null ? void 0 : u.indexOf(gu.NEXT_PUBLIC_HOST);
		if (t && t > 0) return !0
	}
	var It = "off",
		Aa = "Inpect Mode is enabled. Hover over elements to see their CSS variables.";

	function Ig(e) {
		let u = [...document.styleSheets];
		u = u.filter(r => {
			var D;
			return r.ownerNode instanceof HTMLElement && ((D = r.ownerNode) == null ? void 0 : D.className) === "ghl-themebuilder"
		});
		let t = [];
		for (let r of u) t = t.concat([...r.cssRules]);
		return t = t.filter(r => r instanceof CSSStyleRule && e.matches(r.selectorText)), t
	}

	function Ng(e) {
		let u = [...document.styleSheets];
		u = u.filter(r => {
			var D;
			return r.ownerNode instanceof HTMLElement && ((D = r.ownerNode) == null ? void 0 : D.className) === "ghl-themebuilder"
		});
		let t = [];
		for (let r of u) t = t.concat([...r.cssRules]);
		return t = t.filter(r => r instanceof CSSStyleRule && e.closest(r.selectorText)), t
	}

	function Pg(e) {
		let u = Ig(e),
			t = Ng(e),
			r = new Map,
			D = new Map;
		return u.forEach(n => {
			if (!(n instanceof CSSStyleRule)) return;
			let i = n.style.cssText.match(/var\(--.*?\)/g);
			i && i.forEach(a => {
				let o = a.replace("var(--", "").replace(")", ""),
					s = getComputedStyle(e).getPropertyValue("--" + o);
				r.set(o, s)
			})
		}), t.forEach(n => {
			if (!(n instanceof CSSStyleRule)) return;
			let i = n.style.cssText.match(/var\(--.*?\)/g);
			i && i.forEach(a => {
				let o = a.replace("var(--", "").replace(")", ""),
					s = getComputedStyle(e).getPropertyValue("--" + o);
				D.set(o, s)
			})
		}), {
			foundMatchesVars: r,
			foundClosestVars: D
		}
	}

	function a2() {
		let e = document.getElementById(bn);
		if (!e) return;
		let u = document.createElement("button");
		u.id = da, u.className = "btn-sm btn-outline-info -mr-1 mt-3 float-right", u.textContent = "Inspect", u.addEventListener("click", r => {
			r.preventDefault(), It === "off" ? (It = "on", u.textContent = "Press ESC to Freeze", Lg(), s2("Inspect Mode"), Xr(Aa)) : (u.textContent = "Inspect", fa())
		}), e.appendChild(u);
		let t = document.createElement("p");
		t.id = "themebuilder-inspectmode-copied-text", t.className = "text-success mt-2", t.textContent = "Copied!", t.style.display = "none", e.appendChild(t)
	}

	function kg(e, u) {
		var t, r;
		if (e.size === 0 && u.size === 0) Xr(Aa);
		else {
			u.forEach((o, s) => {
				e.has(s) && u.delete(s)
			});
			let D = [];
			D.push('<p class="bold underline mt-3">Variables</p>');
			for (let [o, s] of e) D.push(`<strong class="themebuilder-var-name">${o}</strong>: <span class="themebuilder-var-value">${s}</span>`);
			if (u.size > 0) {
				D.push('<a id="themebuilder-inspectmode-parent-btn" class="block mt-3">Show parent variables</a>'), D.push('<div id="themebuilder-inspectmode-parent-vars" style="display: none;">'), D.push('<p class="bold underline">Parent Variables</p>');
				for (let [o, s] of u) D.push(`<strong class="themebuilder-var-name">${o}</strong>: <span class="themebuilder-var-value">${s}</span>`);
				D.push("</div>")
			}
			Xr(D.join("<br>"));
			let n = document.getElementById("themebuilder-inspectmode-parent-btn");
			n && n.addEventListener("click", o => {
				var c;
				o.preventDefault();
				let s = document.getElementById("themebuilder-inspectmode-parent-vars");
				s && (s.style.display = "block", n.textContent = "Hide parent variables", (c = document.getElementById("themebuilder-inspectmode-parent-btn")) == null || c.remove())
			});
			let i = document.getElementsByClassName("themebuilder-var-name");
			for (let o = 0; o < i.length; o++)(t = i[o]) == null || t.addEventListener("click", s => {
				s.preventDefault();
				let c = window.getSelection();
				if (c) {
					let C = document.createRange();
					C.selectNodeContents(s.target), c.removeAllRanges(), c.addRange(C)
				}
				let E = s.target.textContent;
				if (E) {
					navigator.clipboard.writeText(E);
					let C = document.getElementById("themebuilder-inspectmode-copied-text");
					C && (C.style.display = "inline", setTimeout(() => {
						C.style.display = "none"
					}, 1e3))
				}
			});
			let a = document.getElementsByClassName("themebuilder-var-value");
			for (let o = 0; o < a.length; o++)(r = a[o]) == null || r.addEventListener("click", s => {
				s.preventDefault();
				let c = window.getSelection();
				if (c) {
					let C = document.createRange();
					C.selectNodeContents(s.target), c.removeAllRanges(), c.addRange(C)
				}
				let E = s.target.textContent;
				if (E) {
					navigator.clipboard.writeText(E);
					let C = document.getElementById("themebuilder-inspectmode-copied-text");
					C && (C.style.display = "inline", setTimeout(() => {
						C.style.display = "none"
					}, 1e3))
				}
			})
		}
	}
	var Jr = [],
		Lg = () => {
			let e = new AbortController;
			Jr.push(e), window.addEventListener("mousemove", r => {
				if (It == "off") return;
				let D = r.target;
				if (!(D instanceof HTMLElement) || D.closest(`#${bn}`)) return;
				D.style.outline = "1px solid red";
				let n = Pg(D);
				kg(n.foundMatchesVars, n.foundClosestVars)
			}, {
				signal: e.signal
			});
			let u = new AbortController;
			Jr.push(u), window.addEventListener("mouseout", r => {
				if (It == "off") return;
				let D = r.target;
				D instanceof HTMLElement && (D.style.outline = "none", Xr(Aa))
			}, {
				signal: u.signal
			});
			let t = new AbortController;
			Jr.push(t), window.addEventListener("keydown", r => {
				if (r.key === "Escape") {
					It = "off";
					let D = document.getElementById(da);
					D && (D.textContent = "Inspect")
				}
			}, {
				signal: t.signal
			})
		},
		fa = () => {
			Jr.forEach(e => e.abort()), Jr.length = 0, It = "off", F2(), o2()
		};
	var pa = "toolkitCssPreview",
		_n = "toolkitCssPreview",
		bn = "preview-mode-container",
		Ba = "preview-mode-title",
		xn = "preview-mode-subtitle",
		da = "inspect-btn",
		c2 = "temporary-custom-css-removable-text",
		E2 = "Themebuilder Preview Mode",
		l2 = "Changes will not be seen on the live site.",
		Mg = Ca`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
`,
		jg = Ca` <div>${l2}</div> `,
		Qr = !1,
		C2 = ({
			agencyId: e,
			embedId: u,
			locationGroupSelector: t
		}) => {
			if (Qr) {
				console.log("Themebuilder: Skipping initializing preview mode, is already running");
				return
			}
			zd({
				agencyId: e,
				embedId: u,
				locationGroupSelector: t
			}), localStorage.setItem(_n, "true");
			let r = document.createElement("div");
			r.id = bn, r.style.position = "fixed", r.style.bottom = "0", r.style.right = "0", r.style.background = "rgb(0,0,0,0.75)", r.style.width = "360px", r.className = "pl-10 pr-5 pt-4 pb-3 rounded-top relative z-50 text-white";
			let D = document.createElement("h6");
			D.id = Ba, D.className = "text-base font-bold text-white", D.textContent = E2;
			let n = document.createElement("p");
			n.id = xn, n.className = "text-xs", n.innerHTML = `${jg.values}`;
			let i = document.createElement("button");
			i.style.position = "absolute", i.style.top = "9px", i.style.right = "4px", i.className = "px-1 rounded hover:bg-[#2d37480d] text-white", i.innerHTML = Mg.strings.join(""), i.addEventListener("click", $g), r.appendChild(D), r.appendChild(n), r.appendChild(i), document.body.appendChild(r), ha(), Qr = !0, a2()
		},
		$g = async () => {
			localStorage.removeItem(_n);
			let e = new URLSearchParams(window.location.search);
			e.delete(pa), Qr = !1, window.location.search = e.toString(), fa()
		}, s2 = e => {
			let u = document.getElementById(Ba);
			u && (u.textContent = e)
		}, o2 = () => {
			let e = document.getElementById(Ba);
			e && (e.textContent = E2)
		}, Xr = e => {
			let u = document.getElementById(xn);
			u && (u.innerHTML = e), ha()
		}, F2 = () => {
			let e = document.getElementById(xn);
			e && (e.textContent = l2)
		}, ha = () => {
			let e = document.getElementById(xn),
				u = document.getElementById(c2);
			if (!i2() && e && !u) {
				let t = document.createElement("div");
				t.id = c2, t.className = "mt-2", t.textContent = "To remove your current CSS and get a Real Preview, ";
				let r = document.createElement("a");
				r.className = "text-white", r.onclick = () => {
					n2(), ha()
				}, r.textContent = "Click Here", t.appendChild(r), e.appendChild(t)
			} else e && !D2() && u && u.remove()
		};
	var A2 = null,
		f2 = e => {
			window.addEventListener("location_change", u => {
				let {
					location_selector: t,
					location_uid: r
				} = u.detail;
				A2 !== t && (A2 = t != null ? t : null, e({
					uid: r,
					selector: t
				}))
			})
		};
	var d2 = () => {
		let e = gu.NEXT_PUBLIC_HOST;
		document.querySelectorAll("style").forEach(t => {
			var r, D;
			if ((r = t.textContent) != null && r.includes(`@import url("${e}/api/dynamic-css`)) {
				let n = (D = t.textContent.match(/@import url\("(.*)"\)/)) == null ? void 0 : D[1];
				if (!n) {
					console.error("Themebuilder: Could not capture existing url inside the style tag with the regex");
					return
				}
				let i = `${n}&t=${Date.now()}`;
				t.textContent = t.textContent.replace(n, i), console.log("ThemeBuilder: Static CSS added timestamp to url", t)
			}
		})
	};
	var p2 = () => {
		var D, n;
		if (window.location.pathname !== "/settings/company") return;
		let e = document.querySelector('textarea[label="Custom CSS"]');
		if (!e) return;
		let u = document.createElement("p");
		u.className = "tb-refresh", u.textContent = "ThemeBuilder style not updated? ";
		let t = document.createElement("a");
		t.onclick = () => {
			d2()
		}, t.textContent = "Click here to force update", u.appendChild(t), (D = e.parentNode) == null || D.insertBefore(u, e);
		let r = document.createElement("style");
		r.textContent = `
        p.tb-refresh+p {
            margin-top: 0;
        }
        `, (n = e.parentNode) == null || n.insertBefore(r, e)
	};
	async function ma({
		agencyId: e,
		embedId: u,
		locationGroupSelector: t
	}) {
		cn(), Fn(), window.__THEMEBUILDER_TAKEDOWN_FUNCTIONS__ && window.__THEMEBUILDER_TAKEDOWN_FUNCTIONS__.forEach(n => n());
		let r;
		Qr && vn ? r = vn : r = await hs({
			agencyId: e,
			embedId: u != null ? u : null,
			locationGroupSelector: t != null ? t : null
		}), En(r.data), (new URLSearchParams(window.location.search).get(pa) === "true" || localStorage.getItem(_n) === "true") && C2({
			agencyId: e,
			embedId: u != null ? u : null,
			locationGroupSelector: t != null ? t : null
		}), p2()
	}
	async function Ug() {
		if (window.__THEMEBUILDER_IS_RUNNING__ || (window.__THEMEBUILDER_IS_RUNNING__ = !0, !document.getElementById("app"))) return;
		let {
			agencyId: u,
			embedId: t
		} = ga();
		ma({
			agencyId: u,
			embedId: t != null ? t : null,
			locationGroupSelector: null
		}), f2(({
			selector: r,
			uid: D
		}) => {
			(!D || D.trim() === "") && (D = r), ma(D === "all-location" ? {
				agencyId: u,
				embedId: t != null ? t : null,
				locationGroupSelector: null
			} : {
				agencyId: u,
				embedId: t != null ? t : null,
				locationGroupSelector: D != null ? D : null
			})
		})
	}
	Ug();
})();
/*!
 * XRegExp 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2007-present MIT License
 */
/*!
 * XRegExp Unicode Base 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2008-present MIT License
 */
/*!
 * XRegExp Unicode Categories 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
/*!
 * XRegExp Unicode Properties 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
/*!
 * XRegExp Unicode Scripts 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
/*!
 * XRegExp.build 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 */
/*!
 * XRegExp.matchRecursive 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2009-present MIT License
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */