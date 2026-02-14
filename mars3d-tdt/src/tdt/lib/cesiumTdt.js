import * as mars3d from "mars3d"
const Cesium = mars3d.Cesium

if (!Cesium.when) {
  Cesium.when = Cesium.when || {}
  Cesium.when.defer = Cesium.defer
}
if (!Cesium.defaultValue) {
  Cesium.defaultValue = function (a, b) {
    return a ?? b
  }
}

//github地址：https://github.com/ngcc-tdt/demo/

;(function (e) {
  var t = {}
  function i(r) {
    if (t[r]) return t[r].exports
    var n = (t[r] = {
      i: r,
      l: !1,
      exports: {}
    })
    return e[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports
  }
  return (
    (i.m = e),
    (i.c = t),
    (i.d = function (e, t, r) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
        })
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e
      if (4 & t && "object" === typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (i.r(r),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
        }),
        2 & t && "string" !== typeof e)
      )
        for (var n in e)
          i.d(
            r,
            n,
            function (t) {
              return e[t]
            }.bind(null, n)
          )
      return r
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return i.d(t, "a", t), t
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (i.p = ""),
    i((i.s = 242))
  )
})([
  //方法数组
  function (e, t, i) {
    var r = i(175),
      n = i(6)
    function o(t) {
      return (
        (e.exports = o =
          "function" === typeof n && "symbol" === typeof r
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && "function" === typeof n && e.constructor === n && e !== n.prototype ? "symbol" : typeof e
              }),
        o(t)
      )
    }
    e.exports = o
  },
  function (e, t, i) {
    e.exports = i(172)
  },
  function (e, t, i) {
    e.exports = i(169)
  },
  function (e, t, i) {
    e.exports = i(160)
  },
  function (e, t, i) {
    var r = i(50)("wks"),
      n = i(28),
      o = i(10).Symbol,
      a = "function" === typeof o
    ;(e.exports = function (e) {
      return r[e] || (r[e] = (a && o[e]) || (a ? o : n)("Symbol." + e))
    }).store = r
  },
  function (e, t) {},
  function (e, t, i) {},
  function (e, t) {
    var i = (e.exports =
      "undefined" !== typeof window && window.Math === Math
        ? window
        : "undefined" !== typeof self && self.Math === Math
        ? self
        : Function("return this")())
    "number" === typeof __g && (__g = i)
  },
  function (e, t, i) {
    e.exports = i(167)
  },
  function (e, t, i) {
    e.exports = i(154)
  },
  function (e, t) {
    var i = (e.exports =
      "undefined" !== typeof window && window.Math === Math
        ? window
        : "undefined" !== typeof self && self.Math === Math
        ? self
        : Function("return this")())
    "number" === typeof __g && (__g = i)
  },
  function (e, t, i) {},
  function (e, t, i) {
    var r = i(7),
      n = i(5),
      o = i(59),
      a = i(32),
      s = i(31),
      x = function (e, t, i) {
        var l,
          c,
          u,
          h = e & x.F,
          f = e & x.G,
          d = e & x.S,
          g = e & x.P,
          p = e & x.B,
          m = e & x.W,
          b = f ? n : n[t] || (n[t] = {}),
          v = b.prototype,
          C = f ? r : d ? r[t] : (r[t] || {}).prototype
        for (l in (f && (i = t), i))
          ((c = !h && C && void 0 !== C[l]) && s(b, l)) ||
            ((u = c ? C[l] : i[l]),
            (b[l] =
              f && "function" !== typeof C[l]
                ? i[l]
                : p && c
                ? o(u, r)
                : m && C[l] === u
                ? (function (e) {
                    var t = function (t, i, r) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e()
                          case 1:
                            return new e(t)
                          case 2:
                            return new e(t, i)
                        }
                        return new e(t, i, r)
                      }
                      return e.apply(this, arguments)
                    }
                    return (t.prototype = e.prototype), t
                  })(u)
                : g && "function" === typeof u
                ? o(Function.call, u)
                : u),
            g && (((b.virtual || (b.virtual = {}))[l] = u), e & x.R && v && !v[l] && a(v, l, u)))
      }
    ;(x.F = 1), (x.G = 2), (x.S = 4), (x.P = 8), (x.B = 16), (x.W = 32), (x.U = 64), (x.R = 128), (e.exports = x)
  },
  function (e, t, i) {
    var r = i(17),
      n = i(98),
      o = i(44),
      a = Object.defineProperty
    t.f = i(11)
      ? Object.defineProperty
      : function (e, t, i) {
          if ((r(e), (t = o(t, !0)), r(i), n))
            try {
              return a(e, t, i)
            } catch (e) {}
          if ("get" in i || "set" in i) throw TypeError("Accessors not supported!")
          return "value" in i && (e[t] = i.value), e
        }
  },
  function (e, t, i) {
    var r = i(75)("wks"),
      n = i(58),
      o = i(7).Symbol,
      a = "function" === typeof o
    ;(e.exports = function (e) {
      return r[e] || (r[e] = (a && o[e]) || (a ? o : n)("Symbol." + e))
    }).store = r
  },
  function (e, t, i) {
    e.exports = i(147)
  },
  function (e, t, i) {
    e.exports = i(164)
  },
  function (e, t, i) {
    var r = i(21)
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!")
      return e
    }
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  },
  function (e, t, i) {
    var r = i(29),
      n = Math.min
    e.exports = function (e) {
      return e > 0 ? n(r(e), 9007199254740991) : 0
    }
  },
  function (e, t, i) {
    var r = i(13),
      n = i(45)
    e.exports = i(11)
      ? function (e, t, i) {
          return r.f(e, t, n(1, i))
        }
      : function (e, t, i) {
          return (e[t] = i), e
        }
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" === typeof e ? null !== e : "function" === typeof e
    }
  },
  function (e, t, i) {
    var r = i(10),
      n = i(20),
      o = i(24),
      a = i(28)("src"),
      s = i(150),
      x = ("" + s).split("toString")
    ;(i(43).inspectSource = function (e) {
      return s.call(e)
    }),
      (e.exports = function (e, t, i, s) {
        var l = "function" === typeof i
        l && (o(i, "name") || n(i, "name", t)),
          e[t] !== i &&
            (l && (o(i, a) || n(i, a, e[t] ? "" + e[t] : x.join(String(t)))),
            e === r ? (e[t] = i) : s ? (e[t] ? (e[t] = i) : n(e, t, i)) : (delete e[t], n(e, t, i)))
      })(Function.prototype, "toString", function () {
        return ("function" === typeof this && this[a]) || s.call(this)
      })
  },
  function (e, t, i) {
    var r = i(10),
      n = i(43),
      o = i(20),
      a = i(22),
      s = i(51),
      x = function (e, t, i) {
        var l,
          c,
          u,
          h,
          f = e & x.F,
          d = e & x.G,
          g = e & x.S,
          p = e & x.P,
          m = e & x.B,
          b = d ? r : g ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
          v = d ? n : n[t] || (n[t] = {}),
          C = v.prototype || (v.prototype = {})
        for (l in (d && (i = t), i))
          (u = ((c = !f && b && void 0 !== b[l]) ? b : i)[l]),
            (h = m && c ? s(u, r) : p && "function" === typeof u ? s(Function.call, u) : u),
            b && a(b, l, u, e & x.U),
            v[l] !== u && o(v, l, h),
            p && C[l] !== u && (C[l] = u)
      }
    ;(r.core = n), (x.F = 1), (x.G = 2), (x.S = 4), (x.P = 8), (x.B = 16), (x.W = 32), (x.U = 64), (x.R = 128), (e.exports = x)
  },
  function (e, t) {
    var i = {}.hasOwnProperty
    e.exports = function (e, t) {
      return i.call(e, t)
    }
  },
  function (e, t, i) {
    e.exports = !i(40)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7
          }
        }).a
      )
    })
  },
  function (e, t, i) {
    var r = i(27),
      n = i(107),
      o = i(78),
      a = Object.defineProperty
    t.f = i(25)
      ? Object.defineProperty
      : function (e, t, i) {
          if ((r(e), (t = o(t, !0)), r(i), n))
            try {
              return a(e, t, i)
            } catch (e) {}
          if ("get" in i || "set" in i) throw TypeError("Accessors not supported!")
          return "value" in i && (e[t] = i.value), e
        }
  },
  function (e, t, i) {
    var r = i(33)
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!")
      return e
    }
  },
  function (e, t) {
    var i = 0,
      r = Math.random()
    e.exports = function (e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + r).toString(36))
    }
  },
  function (e, t) {
    var i = Math.ceil,
      r = Math.floor
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : i)(e)
    }
  },
  function (e, t, i) {
    var r = i(38)
    e.exports = function (e) {
      return Object(r(e))
    }
  },
  function (e, t) {
    var i = {}.hasOwnProperty
    e.exports = function (e, t) {
      return i.call(e, t)
    }
  },
  function (e, t, i) {
    var r = i(26),
      n = i(61)
    e.exports = i(25)
      ? function (e, t, i) {
          return r.f(e, t, n(1, i))
        }
      : function (e, t, i) {
          return (e[t] = i), e
        }
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" === typeof e ? null !== e : "function" === typeof e
    }
  },
  function (e, t, i) {},
  function (e, t) {
    e.exports = !1
  },
  function (e, t) {
    e.exports = {}
  },
  function (e, t, i) {
    var r = i(100),
      n = i(38)
    e.exports = function (e) {
      return r(n(e))
    }
  },
  function (e, t) {
    e.exports = function (e) {
      if (null === e) throw TypeError("Can't call method on  " + e)
      return e
    }
  },
  function (e, t, i) {
    var r = i(156),
      n = i(56)
    e.exports = function (e) {
      return r(n(e))
    }
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  },
  function (e, t, i) {
    var r = i(102),
      n = i(71).concat("length", "prototype")
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return r(e, n)
      }
  },
  function (e, t, i) {},
  function (e, t) {},
  function (e, t, i) {
    var r = i(21)
    e.exports = function (e, t) {
      if (!r(e)) return e
      var i, n
      if (t && "function" === typeof (i = e.toString) && !r((n = i.call(e)))) return n
      if ("function" === typeof (i = e.valueOf) && !r((n = i.call(e)))) return n
      if (!t && "function" === typeof (i = e.toString) && !r((n = i.call(e)))) return n
      throw TypeError("Can't convert object to primitive value")
    }
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  },
  function (e, t) {
    var i = {}.toString
    e.exports = function (e) {
      return i.call(e).slice(8, -1)
    }
  },
  function (e, t) {
    var i = {}.toString
    e.exports = function (e) {
      return i.call(e).slice(8, -1)
    }
  },
  function (e, t) {
    e.exports = !0
  },
  function (e, t) {
    e.exports = {}
  },
  function (e, t, i) {
    var r = i(43),
      n = i(10),
      o = n["__core-js_shared__"] || (n["__core-js_shared__"] = {})
    ;(e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
      version: r.version,
      mode: i(35) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
  },
  function (e, t, i) {
    var r = i(101)
    e.exports = function (e, t, i) {
      if ((r(e), void 0 === t)) return e
      switch (i) {
        case 1:
          return function (i) {
            return e.call(t, i)
          }
        case 2:
          return function (i, r) {
            return e.call(t, i, r)
          }
        case 3:
          return function (i, r, n) {
            return e.call(t, i, r, n)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }
  },
  function (e, t, i) {
    var r = i(17),
      n = i(152),
      o = i(71),
      a = i(70)("IE_PROTO"),
      s = function () {},
      x = function () {
        var e,
          t = i(99)("iframe"),
          r = o.length
        for (
          t.style.display = "none",
            i(153).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            x = e.F;
          r--;

        )
          delete x.prototype[o[r]]
        return x()
      }
    e.exports =
      Object.create ||
      function (e, t) {
        var i
        return null !== e ? ((s.prototype = r(e)), (i = new s()), (s.prototype = null), (i[a] = e)) : (i = x()), void 0 === t ? i : n(i, t)
      }
  },
  function (e, t, i) {
    var r = i(102),
      n = i(71)
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, n)
      }
  },
  function (e, t, i) {
    var r = i(29),
      n = Math.max,
      o = Math.min
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? n(e + t, 0) : o(e, t)
    }
  },
  function (e, t, i) {
    var r = i(13).f,
      n = i(24),
      o = i(4)("toStringTag")
    e.exports = function (e, t, i) {
      e &&
        !n((e = i ? e : e.prototype), o) &&
        r(e, o, {
          configurable: !0,
          value: t
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      if (null === e) throw TypeError("Can't call method on  " + e)
      return e
    }
  },
  function (e, t, i) {
    var r = i(105),
      n = i(76)
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, n)
      }
  },
  function (e, t) {
    var i = 0,
      r = Math.random()
    e.exports = function (e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + r).toString(36))
    }
  },
  function (e, t, i) {
    var r = i(60)
    e.exports = function (e, t, i) {
      if ((r(e), void 0 === t)) return e
      switch (i) {
        case 1:
          return function (i) {
            return e.call(t, i)
          }
        case 2:
          return function (i, r) {
            return e.call(t, i, r)
          }
        case 3:
          return function (i, r, n) {
            return e.call(t, i, r, n)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" !== typeof e) throw TypeError(e + " is not a function!")
      return e
    }
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  },
  function (e, t, i) {
    var r = i(63),
      n = RegExp.prototype.exec
    e.exports = function (e, t) {
      var i = e.exec
      if ("function" === typeof i) {
        var o = i.call(e, t)
        if ("object" !== typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null")
        return o
      }
      if ("RegExp" !== r(e)) throw new TypeError("RegExp#exec called on incompatible receiver")
      return n.call(e, t)
    }
  },
  function (e, t, i) {
    var r = i(46),
      n = i(4)("toStringTag"),
      o =
        "Arguments" ==
        r(
          (function () {
            return arguments
          })()
        )
    e.exports = function (e) {
      var t, i, a
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (i = (function (e, t) {
            try {
              return e[t]
            } catch (e) {}
          })((t = Object(e)), n))
        ? i
        : o
        ? r(t)
        : "Object" === (a = r(t)) && "function" === typeof t.callee
        ? "Arguments"
        : a
    }
  },
  function (e, t, i) {
    var r = i(17)
    e.exports = function () {
      var e = r(this),
        t = ""
      return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
  },
  function (e, t, i) {
    i(163)
    var r = i(22),
      n = i(20),
      o = i(18),
      a = i(38),
      s = i(4),
      x = i(82),
      l = s("species"),
      c = !o(function () {
        var e = /./
        return (
          (e.exec = function () {
            var e = []
            return (
              (e.groups = {
                a: "7"
              }),
              e
            )
          }),
          "7" !== "".replace(e, "$<a>")
        )
      }),
      u = (function () {
        var e = /(?:)/,
          t = e.exec
        e.exec = function () {
          return t.apply(this, arguments)
        }
        var i = "ab".split(e)
        return 2 === i.length && "a" === i[0] && "b" === i[1]
      })()
    e.exports = function (e, t, i) {
      var h = s(e),
        f = !o(function () {
          var t = {}
          return (
            (t[h] = function () {
              return 7
            }),
            7 !== ""[e](t)
          )
        }),
        d = f
          ? !o(function () {
              var t = !1,
                i = /a/
              return (
                (i.exec = function () {
                  return (t = !0), null
                }),
                "split" === e &&
                  ((i.constructor = {}),
                  (i.constructor[l] = function () {
                    return i
                  })),
                i[h](""),
                !t
              )
            })
          : void 0
      if (!f || !d || ("replace" === e && !c) || ("split" === e && !u)) {
        var g = /./[h],
          p = i(a, h, ""[e], function (e, t, i, r, n) {
            return t.exec === x
              ? f && !n
                ? {
                    done: !0,
                    value: g.call(t, i, r)
                  }
                : {
                    done: !0,
                    value: e.call(i, t, r)
                  }
              : {
                  done: !1
                }
          }),
          m = p[0],
          b = p[1]
        r(String.prototype, e, m),
          n(
            RegExp.prototype,
            h,
            2 === t
              ? function (e, t) {
                  return b.call(e, this, t)
                }
              : function (e) {
                  return b.call(e, this)
                }
          )
      }
    }
  },
  function (e, t, i) {
    var r = i(26).f,
      n = i(31),
      o = i(14)("toStringTag")
    e.exports = function (e, t, i) {
      e &&
        !n((e = i ? e : e.prototype), o) &&
        r(e, o, {
          configurable: !0,
          value: t
        })
    }
  },
  function (e, t, i) {
    var r = i(93),
      n = i(45),
      o = i(37),
      a = i(44),
      s = i(24),
      x = i(98),
      l = Object.getOwnPropertyDescriptor
    t.f = i(11)
      ? l
      : function (e, t) {
          if (((e = o(e)), (t = a(t, !0)), x))
            try {
              return l(e, t)
            } catch (e) {}
          if (s(e, t)) return n(!r.f.call(e, t), e[t])
        }
  },
  function (e, t, i) {
    e.exports = i(214)
  },
  function (e, t, i) {},
  function (e, t, i) {
    var r = i(50)("keys"),
      n = i(28)
    e.exports = function (e) {
      return r[e] || (r[e] = n(e))
    }
  },
  function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  },
  function (e, t, i) {
    var r = i(56)
    e.exports = function (e) {
      return Object(r(e))
    }
  },
  function (e, t) {
    var i = Math.ceil,
      r = Math.floor
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : i)(e)
    }
  },
  function (e, t, i) {
    var r = i(75)("keys"),
      n = i(58)
    e.exports = function (e) {
      return r[e] || (r[e] = n(e))
    }
  },
  function (e, t, i) {
    var r = i(5),
      n = i(7),
      o = n["__core-js_shared__"] || (n["__core-js_shared__"] = {})
    ;(e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
      version: r.version,
      mode: i(48) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
  },
  function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  },
  function (e, t, i) {
    var r = i(33),
      n = i(7).document,
      o = r(n) && r(n.createElement)
    e.exports = function (e) {
      return o ? n.createElement(e) : {}
    }
  },
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {
    var r = i(21),
      n = i(46),
      o = i(4)("match")
    e.exports = function (e) {
      var t
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" === n(e))
    }
  },
  function (e, t, i) {
    var r = i(162)(!0)
    e.exports = function (e, t, i) {
      return t + (i ? r(e, t).length : 1)
    }
  },
  function (e, t, i) {
    var r,
      n,
      o = i(64),
      a = RegExp.prototype.exec,
      s = String.prototype.replace,
      x = a,
      l = ((r = /a/), (n = /b*/g), a.call(r, "a"), a.call(n, "a"), 0 !== r.lastIndex || 0 !== n.lastIndex),
      c = void 0 !== /()??/.exec("")[1]
    ;(l || c) &&
      (x = function (e) {
        var t,
          i,
          r,
          n,
          x = this
        return (
          c && (i = new RegExp("^" + x.source + "$(?!\\s)", o.call(x))),
          l && (t = x.lastIndex),
          (r = a.call(x, e)),
          l && r && (x.lastIndex = x.global ? r.index + r[0].length : t),
          c &&
            r &&
            r.length > 1 &&
            s.call(r[0], i, function () {
              for (n = 1; n < arguments.length - 2; n++) void 0 === arguments[n] && (r[n] = void 0)
            }),
          r
        )
      }),
      (e.exports = x)
  },
  function (e, t, i) {
    var r = i(27),
      n = i(109),
      o = i(76),
      a = i(74)("IE_PROTO"),
      s = function () {},
      x = function () {
        var e,
          t = i(77)("iframe"),
          r = o.length
        for (
          t.style.display = "none",
            i(110).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            x = e.F;
          r--;

        )
          delete x.prototype[o[r]]
        return x()
      }
    e.exports =
      Object.create ||
      function (e, t) {
        var i
        return null !== e ? ((s.prototype = r(e)), (i = new s()), (s.prototype = null), (i[a] = e)) : (i = x()), void 0 === t ? i : n(i, t)
      }
  },
  function (e, t, i) {
    var r = i(13).f,
      n = Function.prototype,
      o = /^\s*function ([^ (]*)/
    "name" in n ||
      (i(11) &&
        r(n, "name", {
          configurable: !0,
          get: function () {
            try {
              return ("" + this).match(o)[1]
            } catch (e) {
              return ""
            }
          }
        }))
  },
  function (e, t, i) {
    i(166)
    var r = i(17),
      n = i(64),
      o = i(11),
      a = /./.toString,
      s = function (e) {
        i(22)(RegExp.prototype, "toString", e, !0)
      }
    i(18)(function () {
      return (
        "/a/b" !=
        a.call({
          source: "a",
          flags: "b"
        })
      )
    })
      ? s(function () {
          var e = r(this)
          return "/".concat(e.source, "/", "flags" in e ? e.flags : !o && e instanceof RegExp ? n.call(e) : void 0)
        })
      : "toString" !== a.name &&
        s(function () {
          return a.call(this)
        })
  },
  function (e, t, i) {
    var r = i(63),
      n = {}
    ;(n[i(4)("toStringTag")] = "z"),
      n + "" !== "[object z]" &&
        i(22)(
          Object.prototype,
          "toString",
          function () {
            return "[object " + r(this) + "]"
          },
          !0
        )
  },
  function (e, t) {},
  function (e, t, i) {},
  function (e, t, i) {
    t.f = i(14)
  },
  function (e, t, i) {
    var r = i(7),
      n = i(5),
      o = i(48),
      a = i(89),
      s = i(26).f
    e.exports = function (e) {
      var t = n.Symbol || (n.Symbol = o ? {} : r.Symbol || {})
      "_" === e.charAt(0) ||
        e in t ||
        s(t, e, {
          value: a.f(e)
        })
    }
  },
  function (e, t) {
    t.f = {}.propertyIsEnumerable
  },
  function (e, t, i) {
    var r = i(30),
      n = i(54),
      o = i(19)
    e.exports = function (e) {
      for (
        var t = r(this),
          i = o(t.length),
          a = arguments.length,
          s = n(a > 1 ? arguments[1] : void 0, i),
          x = a > 2 ? arguments[2] : void 0,
          l = void 0 === x ? i : n(x, i);
        l > s;

      )
        t[s++] = e
      return t
    }
  },
  function (e, t) {
    t.f = {}.propertyIsEnumerable
  },
  function (e, t, i) {
    var r = i(60)
    function n(e) {
      var t, i
      ;(this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== i) throw TypeError("Bad Promise constructor")
        ;(t = e), (i = r)
      })),
        (this.resolve = r(t)),
        (this.reject = r(i))
    }
    e.exports.f = function (e) {
      return new n(e)
    }
  },
  function (e, t) {},
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e)
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l
            }
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i
            }
          }),
          Object.defineProperty(t, "exports", {
            enumerable: !0
          }),
          (t.webpackPolyfill = 1)
      }
      return t
    }
  },
  function (e, t, i) {
    var r = i(4)("unscopables"),
      n = Array.prototype
    null === n[r] && i(20)(n, r, {}),
      (e.exports = function (e) {
        n[r][e] = !0
      })
  },
  function (e, t, i) {
    e.exports =
      !i(11) &&
      !i(18)(function () {
        return (
          7 !=
          Object.defineProperty(i(99)("div"), "a", {
            get: function () {
              return 7
            }
          }).a
        )
      })
  },
  function (e, t, i) {
    var r = i(21),
      n = i(10).document,
      o = r(n) && r(n.createElement)
    e.exports = function (e) {
      return o ? n.createElement(e) : {}
    }
  },
  function (e, t, i) {
    var r = i(46)
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" === r(e) ? e.split("") : Object(e)
        }
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" !== typeof e) throw TypeError(e + " is not a function!")
      return e
    }
  },
  function (e, t, i) {
    var r = i(24),
      n = i(37),
      o = i(103)(!1),
      a = i(70)("IE_PROTO")
    e.exports = function (e, t) {
      var i,
        s = n(e),
        x = 0,
        l = []
      for (i in s) i !== a && r(s, i) && l.push(i)
      for (; t.length > x; ) r(s, (i = t[x++])) && (~o(l, i) || l.push(i))
      return l
    }
  },
  function (e, t, i) {
    var r = i(37),
      n = i(19),
      o = i(54)
    e.exports = function (e) {
      return function (t, i, a) {
        var s,
          x = r(t),
          l = n(x.length),
          c = o(a, l)
        if (e && i !== i) {
          for (; l > c; ) if ((s = x[c++]) !== s) return !0
        } else for (; l > c; c++) if ((e || c in x) && x[c] === i) return e || c || 0
        return !e && -1
      }
    }
  },
  function (e, t, i) {
    var r = i(24),
      n = i(30),
      o = i(70)("IE_PROTO"),
      a = Object.prototype
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = n(e)),
          r(e, o)
            ? e[o]
            : "function" === typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        )
      }
  },
  function (e, t, i) {
    var r = i(31),
      n = i(39),
      o = i(157)(!1),
      a = i(74)("IE_PROTO")
    e.exports = function (e, t) {
      var i,
        s = n(e),
        x = 0,
        l = []
      for (i in s) i !== a && r(s, i) && l.push(i)
      for (; t.length > x; ) r(s, (i = t[x++])) && (~o(l, i) || l.push(i))
      return l
    }
  },
  function (e, t, i) {
    var r = i(73),
      n = Math.min
    e.exports = function (e) {
      return e > 0 ? n(r(e), 9007199254740991) : 0
    }
  },
  function (e, t, i) {
    e.exports =
      !i(25) &&
      !i(40)(function () {
        return (
          7 !=
          Object.defineProperty(i(77)("div"), "a", {
            get: function () {
              return 7
            }
          }).a
        )
      })
  },
  function (e, t, i) {
    var r = i(17),
      n = i(101),
      o = i(4)("species")
    e.exports = function (e, t) {
      var i,
        a = r(e).constructor
      return void 0 === a || null === (i = r(a)[o]) ? t : n(i)
    }
  },
  function (e, t, i) {
    var r = i(26),
      n = i(27),
      o = i(57)
    e.exports = i(25)
      ? Object.defineProperties
      : function (e, t) {
          n(e)
          for (var i, a = o(t), s = a.length, x = 0; s > x; ) r.f(e, (i = a[x++]), t[i])
          return e
        }
  },
  function (e, t, i) {
    var r = i(7).document
    e.exports = r && r.documentElement
  },
  function (e, t, i) {
    var r = i(47)
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" === r(e)
      }
  },
  function (e, t, i) {
    var r = i(12),
      n = i(56),
      o = i(40),
      a = i(87),
      s = "[" + a + "]",
      x = RegExp("^" + s + s + "*"),
      l = RegExp(s + s + "*$"),
      c = function (e, t, i) {
        var n = {},
          s = o(function () {
            return !!a[e]() || "​" !== "​"[e]()
          }),
          x = (n[e] = s ? t(u) : a[e])
        i && (n[i] = x), r(r.P + r.F * s, "String", n)
      },
      u = (c.trim = function (e, t) {
        return (e = String(n(e))), 1 & t && (e = e.replace(x, "")), 2 & t && (e = e.replace(l, "")), e
      })
    e.exports = c
  },
  function (e, t, i) {
    var r = i(177)(!0)
    i(114)(
      String,
      "String",
      function (e) {
        ;(this._t = String(e)), (this._i = 0)
      },
      function () {
        var e,
          t = this._t,
          i = this._i
        return i >= t.length
          ? {
              value: void 0,
              done: !0
            }
          : ((e = r(t, i)),
            (this._i += e.length),
            {
              value: e,
              done: !1
            })
      }
    )
  },
  function (e, t, i) {
    var r = i(48),
      n = i(12),
      o = i(115),
      a = i(32),
      s = i(49),
      x = i(178),
      l = i(66),
      c = i(179),
      u = i(14)("iterator"),
      h = !([].keys && "next" in [].keys()),
      f = function () {
        return this
      }
    e.exports = function (e, t, i, d, g, p, m) {
      x(i, t, d)
      var b,
        v,
        C,
        y = function (e) {
          if (!h && e in w) return w[e]
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new i(this, e)
              }
          }
          return function () {
            return new i(this, e)
          }
        },
        _ = t + " Iterator",
        A = "values" === g,
        I = !1,
        w = e.prototype,
        G = w[u] || w["@@iterator"] || (g && w[g]),
        E = G || y(g),
        S = g ? (A ? y("entries") : E) : void 0,
        T = ("Array" === t && w.entries) || G
      if (
        (T && (C = c(T.call(new e()))) !== Object.prototype && C.next && (l(C, _, !0), r || "function" === typeof C[u] || a(C, u, f)),
        A &&
          G &&
          "values" !== G.name &&
          ((I = !0),
          (E = function () {
            return G.call(this)
          })),
        (r && !m) || (!h && !I && w[u]) || a(w, u, E),
        (s[t] = E),
        (s[_] = f),
        g)
      )
        if (
          ((b = {
            values: A ? E : y("values"),
            keys: p ? E : y("keys"),
            entries: S
          }),
          m)
        )
          for (v in b) v in w || o(w, v, b[v])
        else n(n.P + n.F * (h || I), t, b)
      return b
    }
  },
  function (e, t, i) {
    e.exports = i(32)
  },
  function (e, t, i) {},
  function (e, t) {
    t.f = Object.getOwnPropertySymbols
  },
  function (e, t, i) {
    var r = i(105),
      n = i(76).concat("length", "prototype")
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return r(e, n)
      }
  },
  function (e, t) {},
  function (e, t, i) {
    var r,
      n,
      o
      /**
       * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
       * Backing buffer: ArrayBuffer, Accessor: Uint8Array
       * Released under the Apache License, Version 2.0
       * see: https://github.com/dcodeIO/bytebuffer.js for details
       */
    ;(n = [i(191)]),
      void 0 ===
        (o =
          "function" ==
          typeof (r = function (e) {
            var t = function (e, i, n) {
              if ((void 0 === e && (e = t.DEFAULT_CAPACITY), void 0 === i && (i = t.DEFAULT_ENDIAN), void 0 === n && (n = t.DEFAULT_NOASSERT), !n)) {
                if ((e |= 0) < 0) throw RangeError("Illegal capacity")
                ;(i = !!i), (n = !!n)
              }
              ;(this.buffer = 0 === e ? r : new ArrayBuffer(e)),
                (this.view = 0 === e ? null : new Uint8Array(this.buffer)),
                (this.offset = 0),
                (this.markedOffset = -1),
                (this.limit = e),
                (this.littleEndian = i),
                (this.noAssert = n)
            }
            ;(t.VERSION = "5.0.1"),
              (t.LITTLE_ENDIAN = !0),
              (t.BIG_ENDIAN = !1),
              (t.DEFAULT_CAPACITY = 16),
              (t.DEFAULT_ENDIAN = t.BIG_ENDIAN),
              (t.DEFAULT_NOASSERT = !1),
              (t.Long = e || null)
            var i = t.prototype
            i.__isByteBuffer__,
              Object.defineProperty(i, "__isByteBuffer__", {
                value: !0,
                enumerable: !1,
                configurable: !1
              })
            var r = new ArrayBuffer(0),
              n = String.fromCharCode
            function o(e) {
              var t = 0
              return function () {
                return t < e.length ? e.charCodeAt(t++) : null
              }
            }
            function a() {
              var e = [],
                t = []
              return function () {
                if (0 === arguments.length) return t.join("") + n.apply(String, e)
                e.length + arguments.length > 1024 && (t.push(n.apply(String, e)), (e.length = 0)), Array.prototype.push.apply(e, arguments)
              }
            }
            function s(e, t, i, r, n) {
              var o,
                a,
                s = 8 * n - r - 1,
                x = (1 << s) - 1,
                l = x >> 1,
                c = -7,
                u = i ? n - 1 : 0,
                h = i ? -1 : 1,
                f = e[t + u]
              for (u += h, o = f & ((1 << -c) - 1), f >>= -c, c += s; c > 0; o = 256 * o + e[t + u], u += h, c -= 8);
              for (a = o & ((1 << -c) - 1), o >>= -c, c += r; c > 0; a = 256 * a + e[t + u], u += h, c -= 8);
              if (0 === o) o = 1 - l
              else {
                if (o === x) return a ? NaN : (1 / 0) * (f ? -1 : 1)
                ;(a += Math.pow(2, r)), (o -= l)
              }
              return (f ? -1 : 1) * a * Math.pow(2, o - r)
            }
            function x(e, t, i, r, n, o) {
              var a,
                s,
                x,
                l = 8 * o - n - 1,
                c = (1 << l) - 1,
                u = c >> 1,
                h = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                f = r ? 0 : o - 1,
                d = r ? 1 : -1,
                g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
              for (
                t = Math.abs(t),
                  isNaN(t) || t === 1 / 0
                    ? ((s = isNaN(t) ? 1 : 0), (a = c))
                    : ((a = Math.floor(Math.log(t) / Math.LN2)),
                      t * (x = Math.pow(2, -a)) < 1 && (a--, (x *= 2)),
                      (t += a + u >= 1 ? h / x : h * Math.pow(2, 1 - u)) * x >= 2 && (a++, (x /= 2)),
                      a + u >= c
                        ? ((s = 0), (a = c))
                        : a + u >= 1
                        ? ((s = (t * x - 1) * Math.pow(2, n)), (a += u))
                        : ((s = t * Math.pow(2, u - 1) * Math.pow(2, n)), (a = 0)));
                n >= 8;
                e[i + f] = 255 & s, f += d, s /= 256, n -= 8
              );
              for (a = (a << n) | s, l += n; l > 0; e[i + f] = 255 & a, f += d, a /= 256, l -= 8);
              e[i + f - d] |= 128 * g
            }
            ;(t.accessor = function () {
              return Uint8Array
            }),
              (t.allocate = function (e, i, r) {
                return new t(e, i, r)
              }),
              (t.concat = function (e, i, r, n) {
                ;("boolean" !== typeof i && "string" === typeof i) || ((n = r), (r = i), (i = void 0))
                for (var o, a = 0, s = 0, x = e.length; s < x; ++s)
                  t.isByteBuffer(e[s]) || (e[s] = t.wrap(e[s], i)), (o = e[s].limit - e[s].offset) > 0 && (a += o)
                if (0 === a) return new t(0, r, n)
                var l,
                  c = new t(a, r, n)
                for (s = 0; s < x; )
                  (o = (l = e[s++]).limit - l.offset) <= 0 || (c.view.set(l.view.subarray(l.offset, l.limit), c.offset), (c.offset += o))
                return (c.limit = c.offset), (c.offset = 0), c
              }),
              (t.isByteBuffer = function (e) {
                return !0 === (e && e.__isByteBuffer__)
              }),
              (t.type = function () {
                return ArrayBuffer
              }),
              (t.wrap = function (e, r, n, o) {
                if (("string" !== typeof r && ((o = n), (n = r), (r = void 0)), "string" === typeof e))
                  switch ((void 0 === r && (r = "utf8"), r)) {
                    case "base64":
                      return t.fromBase64(e, n)
                    case "hex":
                      return t.fromHex(e, n)
                    case "binary":
                      return t.fromBinary(e, n)
                    case "utf8":
                      return t.fromUTF8(e, n)
                    case "debug":
                      return t.fromDebug(e, n)
                    default:
                      throw Error("Unsupported encoding: " + r)
                  }
                if (null === e || "object" !== typeof e) throw TypeError("Illegal buffer")
                var a
                if (t.isByteBuffer(e)) return ((a = i.clone.call(e)).markedOffset = -1), a
                if (e instanceof Uint8Array)
                  (a = new t(0, n, o)),
                    e.length > 0 &&
                      ((a.buffer = e.buffer), (a.offset = e.byteOffset), (a.limit = e.byteOffset + e.byteLength), (a.view = new Uint8Array(e.buffer)))
                else if (e instanceof ArrayBuffer)
                  (a = new t(0, n, o)),
                    e.byteLength > 0 &&
                      ((a.buffer = e), (a.offset = 0), (a.limit = e.byteLength), (a.view = e.byteLength > 0 ? new Uint8Array(e) : null))
                else {
                  if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer")
                  ;(a = new t(e.length, n, o)).limit = e.length
                  for (var s = 0; s < e.length; ++s) a.view[s] = e[s]
                }
                return a
              }),
              (i.writeBitSet = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array")
                  if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var r,
                  n = t,
                  o = e.length,
                  a = o >> 3,
                  s = 0
                for (t += this.writeVarint32(o, t); a--; )
                  (r =
                    (1 & !!e[s++]) |
                    ((1 & !!e[s++]) << 1) |
                    ((1 & !!e[s++]) << 2) |
                    ((1 & !!e[s++]) << 3) |
                    ((1 & !!e[s++]) << 4) |
                    ((1 & !!e[s++]) << 5) |
                    ((1 & !!e[s++]) << 6) |
                    ((1 & !!e[s++]) << 7)),
                    this.writeByte(r, t++)
                if (s < o) {
                  var x = 0
                  for (r = 0; s < o; ) r |= (1 & !!e[s++]) << x++
                  this.writeByte(r, t++)
                }
                return i ? ((this.offset = t), this) : t - n
              }),
              (i.readBitSet = function (e) {
                var t = void 0 === e
                t && (e = this.offset)
                var i,
                  r = this.readVarint32(e),
                  n = r.value,
                  o = n >> 3,
                  a = 0,
                  s = []
                for (e += r.length; o--; )
                  (i = this.readByte(e++)),
                    (s[a++] = !!(1 & i)),
                    (s[a++] = !!(2 & i)),
                    (s[a++] = !!(4 & i)),
                    (s[a++] = !!(8 & i)),
                    (s[a++] = !!(16 & i)),
                    (s[a++] = !!(32 & i)),
                    (s[a++] = !!(64 & i)),
                    (s[a++] = !!(128 & i))
                if (a < n) {
                  var x = 0
                  for (i = this.readByte(e++); a < n; ) s[a++] = !!((i >> x++) & 1)
                }
                return t && (this.offset = e), s
              }),
              (i.readBytes = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength)
                }
                var r = this.slice(t, t + e)
                return i && (this.offset += e), r
              }),
              (i.writeBytes = i.append),
              (i.writeInt8 = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)")
                  if (((e |= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 1
                var r = this.buffer.byteLength
                return t > r && this.resize((r *= 2) > t ? r : t), (t -= 1), (this.view[t] = e), i && (this.offset += 1), this
              }),
              (i.writeByte = i.writeInt8),
              (i.readInt8 = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var i = this.view[e]
                return 128 === (128 & i) && (i = -(255 - i + 1)), t && (this.offset += 1), i
              }),
              (i.readByte = i.readInt8),
              (i.writeUint8 = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)")
                  if (((e >>>= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 1
                var r = this.buffer.byteLength
                return t > r && this.resize((r *= 2) > t ? r : t), (t -= 1), (this.view[t] = e), i && (this.offset += 1), this
              }),
              (i.writeUInt8 = i.writeUint8),
              (i.readUint8 = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var i = this.view[e]
                return t && (this.offset += 1), i
              }),
              (i.readUInt8 = i.readUint8),
              (i.writeInt16 = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)")
                  if (((e |= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 2
                var r = this.buffer.byteLength
                return (
                  t > r && this.resize((r *= 2) > t ? r : t),
                  (t -= 2),
                  this.littleEndian
                    ? ((this.view[t + 1] = (65280 & e) >>> 8), (this.view[t] = 255 & e))
                    : ((this.view[t] = (65280 & e) >>> 8), (this.view[t + 1] = 255 & e)),
                  i && (this.offset += 2),
                  this
                )
              }),
              (i.writeShort = i.writeInt16),
              (i.readInt16 = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                }
                var i = 0
                return (
                  this.littleEndian ? ((i = this.view[e]), (i |= this.view[e + 1] << 8)) : ((i = this.view[e] << 8), (i |= this.view[e + 1])),
                  32768 === (32768 & i) && (i = -(65535 - i + 1)),
                  t && (this.offset += 2),
                  i
                )
              }),
              (i.readShort = i.readInt16),
              (i.writeUint16 = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)")
                  if (((e >>>= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 2
                var r = this.buffer.byteLength
                return (
                  t > r && this.resize((r *= 2) > t ? r : t),
                  (t -= 2),
                  this.littleEndian
                    ? ((this.view[t + 1] = (65280 & e) >>> 8), (this.view[t] = 255 & e))
                    : ((this.view[t] = (65280 & e) >>> 8), (this.view[t + 1] = 255 & e)),
                  i && (this.offset += 2),
                  this
                )
              }),
              (i.writeUInt16 = i.writeUint16),
              (i.readUint16 = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                }
                var i = 0
                return (
                  this.littleEndian ? ((i = this.view[e]), (i |= this.view[e + 1] << 8)) : ((i = this.view[e] << 8), (i |= this.view[e + 1])),
                  t && (this.offset += 2),
                  i
                )
              }),
              (i.readUInt16 = i.readUint16),
              (i.writeInt32 = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)")
                  if (((e |= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4
                var r = this.buffer.byteLength
                return (
                  t > r && this.resize((r *= 2) > t ? r : t),
                  (t -= 4),
                  this.littleEndian
                    ? ((this.view[t + 3] = (e >>> 24) & 255),
                      (this.view[t + 2] = (e >>> 16) & 255),
                      (this.view[t + 1] = (e >>> 8) & 255),
                      (this.view[t] = 255 & e))
                    : ((this.view[t] = (e >>> 24) & 255),
                      (this.view[t + 1] = (e >>> 16) & 255),
                      (this.view[t + 2] = (e >>> 8) & 255),
                      (this.view[t + 3] = 255 & e)),
                  i && (this.offset += 4),
                  this
                )
              }),
              (i.writeInt = i.writeInt32),
              (i.readInt32 = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var i = 0
                return (
                  this.littleEndian
                    ? ((i = this.view[e + 2] << 16), (i |= this.view[e + 1] << 8), (i |= this.view[e]), (i += (this.view[e + 3] << 24) >>> 0))
                    : ((i = this.view[e + 1] << 16), (i |= this.view[e + 2] << 8), (i |= this.view[e + 3]), (i += (this.view[e] << 24) >>> 0)),
                  (i |= 0),
                  t && (this.offset += 4),
                  i
                )
              }),
              (i.readInt = i.readInt32),
              (i.writeUint32 = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)")
                  if (((e >>>= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4
                var r = this.buffer.byteLength
                return (
                  t > r && this.resize((r *= 2) > t ? r : t),
                  (t -= 4),
                  this.littleEndian
                    ? ((this.view[t + 3] = (e >>> 24) & 255),
                      (this.view[t + 2] = (e >>> 16) & 255),
                      (this.view[t + 1] = (e >>> 8) & 255),
                      (this.view[t] = 255 & e))
                    : ((this.view[t] = (e >>> 24) & 255),
                      (this.view[t + 1] = (e >>> 16) & 255),
                      (this.view[t + 2] = (e >>> 8) & 255),
                      (this.view[t + 3] = 255 & e)),
                  i && (this.offset += 4),
                  this
                )
              }),
              (i.writeUInt32 = i.writeUint32),
              (i.readUint32 = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var i = 0
                return (
                  this.littleEndian
                    ? ((i = this.view[e + 2] << 16), (i |= this.view[e + 1] << 8), (i |= this.view[e]), (i += (this.view[e + 3] << 24) >>> 0))
                    : ((i = this.view[e + 1] << 16), (i |= this.view[e + 2] << 8), (i |= this.view[e + 3]), (i += (this.view[e] << 24) >>> 0)),
                  t && (this.offset += 4),
                  i
                )
              }),
              (i.readUInt32 = i.readUint32),
              e &&
                ((i.writeInt64 = function (t, i) {
                  var r = void 0 === i
                  if ((r && (i = this.offset), !this.noAssert)) {
                    if ("number" === typeof t) t = e.fromNumber(t)
                    else if ("string" === typeof t) t = e.fromString(t)
                    else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)")
                    if ("number" !== typeof i || i % 1 !== 0) throw TypeError("Illegal offset: " + i + " (not an integer)")
                    if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                      throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
                  }
                  "number" === typeof t ? (t = e.fromNumber(t)) : "string" === typeof t && (t = e.fromString(t)), (i += 8)
                  var n = this.buffer.byteLength
                  i > n && this.resize((n *= 2) > i ? n : i), (i -= 8)
                  var o = t.low,
                    a = t.high
                  return (
                    this.littleEndian
                      ? ((this.view[i + 3] = (o >>> 24) & 255),
                        (this.view[i + 2] = (o >>> 16) & 255),
                        (this.view[i + 1] = (o >>> 8) & 255),
                        (this.view[i] = 255 & o),
                        (i += 4),
                        (this.view[i + 3] = (a >>> 24) & 255),
                        (this.view[i + 2] = (a >>> 16) & 255),
                        (this.view[i + 1] = (a >>> 8) & 255),
                        (this.view[i] = 255 & a))
                      : ((this.view[i] = (a >>> 24) & 255),
                        (this.view[i + 1] = (a >>> 16) & 255),
                        (this.view[i + 2] = (a >>> 8) & 255),
                        (this.view[i + 3] = 255 & a),
                        (i += 4),
                        (this.view[i] = (o >>> 24) & 255),
                        (this.view[i + 1] = (o >>> 16) & 255),
                        (this.view[i + 2] = (o >>> 8) & 255),
                        (this.view[i + 3] = 255 & o)),
                    r && (this.offset += 8),
                    this
                  )
                }),
                (i.writeLong = i.writeInt64),
                (i.readInt64 = function (t) {
                  var i = void 0 === t
                  if ((i && (t = this.offset), !this.noAssert)) {
                    if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                    if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength)
                      throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
                  }
                  var r = 0,
                    n = 0
                  this.littleEndian
                    ? ((r = this.view[t + 2] << 16),
                      (r |= this.view[t + 1] << 8),
                      (r |= this.view[t]),
                      (r += (this.view[t + 3] << 24) >>> 0),
                      (t += 4),
                      (n = this.view[t + 2] << 16),
                      (n |= this.view[t + 1] << 8),
                      (n |= this.view[t]),
                      (n += (this.view[t + 3] << 24) >>> 0))
                    : ((n = this.view[t + 1] << 16),
                      (n |= this.view[t + 2] << 8),
                      (n |= this.view[t + 3]),
                      (n += (this.view[t] << 24) >>> 0),
                      (t += 4),
                      (r = this.view[t + 1] << 16),
                      (r |= this.view[t + 2] << 8),
                      (r |= this.view[t + 3]),
                      (r += (this.view[t] << 24) >>> 0))
                  var o = new e(r, n, !1)
                  return i && (this.offset += 8), o
                }),
                (i.readLong = i.readInt64),
                (i.writeUint64 = function (t, i) {
                  var r = void 0 === i
                  if ((r && (i = this.offset), !this.noAssert)) {
                    if ("number" === typeof t) t = e.fromNumber(t)
                    else if ("string" === typeof t) t = e.fromString(t)
                    else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)")
                    if ("number" !== typeof i || i % 1 !== 0) throw TypeError("Illegal offset: " + i + " (not an integer)")
                    if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                      throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
                  }
                  "number" === typeof t ? (t = e.fromNumber(t)) : "string" === typeof t && (t = e.fromString(t)), (i += 8)
                  var n = this.buffer.byteLength
                  i > n && this.resize((n *= 2) > i ? n : i), (i -= 8)
                  var o = t.low,
                    a = t.high
                  return (
                    this.littleEndian
                      ? ((this.view[i + 3] = (o >>> 24) & 255),
                        (this.view[i + 2] = (o >>> 16) & 255),
                        (this.view[i + 1] = (o >>> 8) & 255),
                        (this.view[i] = 255 & o),
                        (i += 4),
                        (this.view[i + 3] = (a >>> 24) & 255),
                        (this.view[i + 2] = (a >>> 16) & 255),
                        (this.view[i + 1] = (a >>> 8) & 255),
                        (this.view[i] = 255 & a))
                      : ((this.view[i] = (a >>> 24) & 255),
                        (this.view[i + 1] = (a >>> 16) & 255),
                        (this.view[i + 2] = (a >>> 8) & 255),
                        (this.view[i + 3] = 255 & a),
                        (i += 4),
                        (this.view[i] = (o >>> 24) & 255),
                        (this.view[i + 1] = (o >>> 16) & 255),
                        (this.view[i + 2] = (o >>> 8) & 255),
                        (this.view[i + 3] = 255 & o)),
                    r && (this.offset += 8),
                    this
                  )
                }),
                (i.writeUInt64 = i.writeUint64),
                (i.readUint64 = function (t) {
                  var i = void 0 === t
                  if ((i && (t = this.offset), !this.noAssert)) {
                    if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                    if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength)
                      throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
                  }
                  var r = 0,
                    n = 0
                  this.littleEndian
                    ? ((r = this.view[t + 2] << 16),
                      (r |= this.view[t + 1] << 8),
                      (r |= this.view[t]),
                      (r += (this.view[t + 3] << 24) >>> 0),
                      (t += 4),
                      (n = this.view[t + 2] << 16),
                      (n |= this.view[t + 1] << 8),
                      (n |= this.view[t]),
                      (n += (this.view[t + 3] << 24) >>> 0))
                    : ((n = this.view[t + 1] << 16),
                      (n |= this.view[t + 2] << 8),
                      (n |= this.view[t + 3]),
                      (n += (this.view[t] << 24) >>> 0),
                      (t += 4),
                      (r = this.view[t + 1] << 16),
                      (r |= this.view[t + 2] << 8),
                      (r |= this.view[t + 3]),
                      (r += (this.view[t] << 24) >>> 0))
                  var o = new e(r, n, !0)
                  return i && (this.offset += 8), o
                }),
                (i.readUInt64 = i.readUint64)),
              (i.writeFloat32 = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e) throw TypeError("Illegal value: " + e + " (not a number)")
                  if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4
                var r = this.buffer.byteLength
                return (
                  t > r && this.resize((r *= 2) > t ? r : t), (t -= 4), x(this.view, e, t, this.littleEndian, 23, 4), i && (this.offset += 4), this
                )
              }),
              (i.writeFloat = i.writeFloat32),
              (i.readFloat32 = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var i = s(this.view, e, this.littleEndian, 23, 4)
                return t && (this.offset += 4), i
              }),
              (i.readFloat = i.readFloat32),
              (i.writeFloat64 = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e) throw TypeError("Illegal value: " + e + " (not a number)")
                  if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 8
                var r = this.buffer.byteLength
                return (
                  t > r && this.resize((r *= 2) > t ? r : t), (t -= 8), x(this.view, e, t, this.littleEndian, 52, 8), i && (this.offset += 8), this
                )
              }),
              (i.writeDouble = i.writeFloat64),
              (i.readFloat64 = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                }
                var i = s(this.view, e, this.littleEndian, 52, 8)
                return t && (this.offset += 8), i
              }),
              (i.readDouble = i.readFloat64),
              (t.MAX_VARINT32_BYTES = 5),
              (t.calculateVarint32 = function (e) {
                return (e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5
              }),
              (t.zigZagEncode32 = function (e) {
                return (((e |= 0) << 1) ^ (e >> 31)) >>> 0
              }),
              (t.zigZagDecode32 = function (e) {
                return ((e >>> 1) ^ -(1 & e)) | 0
              }),
              (i.writeVarint32 = function (e, i) {
                var r = void 0 === i
                if ((r && (i = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)")
                  if (((e |= 0), "number" !== typeof i || i % 1 !== 0)) throw TypeError("Illegal offset: " + i + " (not an integer)")
                  if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
                }
                var n,
                  o = t.calculateVarint32(e)
                i += o
                var a = this.buffer.byteLength
                for (i > a && this.resize((a *= 2) > i ? a : i), i -= o, e >>>= 0; e >= 128; ) (n = (127 & e) | 128), (this.view[i++] = n), (e >>>= 7)
                return (this.view[i++] = e), r ? ((this.offset = i), this) : o
              }),
              (i.writeVarint32ZigZag = function (e, i) {
                return this.writeVarint32(t.zigZagEncode32(e), i)
              }),
              (i.readVarint32 = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var i,
                  r = 0,
                  n = 0
                do {
                  if (!this.noAssert && e > this.limit) {
                    var o = Error("Truncated")
                    throw ((o.truncated = !0), o)
                  }
                  ;(i = this.view[e++]), r < 5 && (n |= (127 & i) << (7 * r)), ++r
                } while (0 !== (128 & i))
                return (
                  (n |= 0),
                  t
                    ? ((this.offset = e), n)
                    : {
                        value: n,
                        length: r
                      }
                )
              }),
              (i.readVarint32ZigZag = function (e) {
                var i = this.readVarint32(e)
                return "object" === typeof i ? (i.value = t.zigZagDecode32(i.value)) : (i = t.zigZagDecode32(i)), i
              }),
              e &&
                ((t.MAX_VARINT64_BYTES = 10),
                (t.calculateVarint64 = function (t) {
                  "number" === typeof t ? (t = e.fromNumber(t)) : "string" === typeof t && (t = e.fromString(t))
                  var i = t.toInt() >>> 0,
                    r = t.shiftRightUnsigned(28).toInt() >>> 0,
                    n = t.shiftRightUnsigned(56).toInt() >>> 0
                  return 0 === n
                    ? 0 === r
                      ? i < 16384
                        ? i < 128
                          ? 1
                          : 2
                        : i < 1 << 21
                        ? 3
                        : 4
                      : r < 16384
                      ? r < 128
                        ? 5
                        : 6
                      : r < 1 << 21
                      ? 7
                      : 8
                    : n < 128
                    ? 9
                    : 10
                }),
                (t.zigZagEncode64 = function (t) {
                  return (
                    "number" === typeof t
                      ? (t = e.fromNumber(t, !1))
                      : "string" === typeof t
                      ? (t = e.fromString(t, !1))
                      : !1 !== t.unsigned && (t = t.toSigned()),
                    t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned()
                  )
                }),
                (t.zigZagDecode64 = function (t) {
                  return (
                    "number" === typeof t
                      ? (t = e.fromNumber(t, !1))
                      : "string" === typeof t
                      ? (t = e.fromString(t, !1))
                      : !1 !== t.unsigned && (t = t.toSigned()),
                    t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned()
                  )
                }),
                (i.writeVarint64 = function (i, r) {
                  var n = void 0 === r
                  if ((n && (r = this.offset), !this.noAssert)) {
                    if ("number" === typeof i) i = e.fromNumber(i)
                    else if ("string" === typeof i) i = e.fromString(i)
                    else if (!(i && i instanceof e)) throw TypeError("Illegal value: " + i + " (not an integer or Long)")
                    if ("number" !== typeof r || r % 1 !== 0) throw TypeError("Illegal offset: " + r + " (not an integer)")
                    if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                      throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                  }
                  "number" === typeof i
                    ? (i = e.fromNumber(i, !1))
                    : "string" === typeof i
                    ? (i = e.fromString(i, !1))
                    : !1 !== i.unsigned && (i = i.toSigned())
                  var o = t.calculateVarint64(i),
                    a = i.toInt() >>> 0,
                    s = i.shiftRightUnsigned(28).toInt() >>> 0,
                    x = i.shiftRightUnsigned(56).toInt() >>> 0
                  r += o
                  var l = this.buffer.byteLength
                  switch ((r > l && this.resize((l *= 2) > r ? l : r), (r -= o), o)) {
                    case 10:
                      this.view[r + 9] = (x >>> 7) & 1
                    case 9:
                      this.view[r + 8] = 9 !== o ? 128 | x : 127 & x
                    case 8:
                      this.view[r + 7] = 8 !== o ? (s >>> 21) | 128 : (s >>> 21) & 127
                    case 7:
                      this.view[r + 6] = 7 !== o ? (s >>> 14) | 128 : (s >>> 14) & 127
                    case 6:
                      this.view[r + 5] = 6 !== o ? (s >>> 7) | 128 : (s >>> 7) & 127
                    case 5:
                      this.view[r + 4] = 5 !== o ? 128 | s : 127 & s
                    case 4:
                      this.view[r + 3] = 4 !== o ? (a >>> 21) | 128 : (a >>> 21) & 127
                    case 3:
                      this.view[r + 2] = 3 !== o ? (a >>> 14) | 128 : (a >>> 14) & 127
                    case 2:
                      this.view[r + 1] = 2 !== o ? (a >>> 7) | 128 : (a >>> 7) & 127
                    case 1:
                      this.view[r] = 1 !== o ? 128 | a : 127 & a
                  }
                  return n ? ((this.offset += o), this) : o
                }),
                (i.writeVarint64ZigZag = function (e, i) {
                  return this.writeVarint64(t.zigZagEncode64(e), i)
                }),
                (i.readVarint64 = function (t) {
                  var i = void 0 === t
                  if ((i && (t = this.offset), !this.noAssert)) {
                    if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                    if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                      throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
                  }
                  var r = t,
                    n = 0,
                    o = 0,
                    a = 0,
                    s = 0
                  if (
                    ((n = 127 & (s = this.view[t++])),
                    128 & s &&
                      ((n |= (127 & (s = this.view[t++])) << 7),
                      (128 & s || (this.noAssert && void 0 === s)) &&
                        ((n |= (127 & (s = this.view[t++])) << 14),
                        (128 & s || (this.noAssert && void 0 === s)) &&
                          ((n |= (127 & (s = this.view[t++])) << 21),
                          (128 & s || (this.noAssert && void 0 === s)) &&
                            ((o = 127 & (s = this.view[t++])),
                            (128 & s || (this.noAssert && void 0 === s)) &&
                              ((o |= (127 & (s = this.view[t++])) << 7),
                              (128 & s || (this.noAssert && void 0 === s)) &&
                                ((o |= (127 & (s = this.view[t++])) << 14),
                                (128 & s || (this.noAssert && void 0 === s)) &&
                                  ((o |= (127 & (s = this.view[t++])) << 21),
                                  (128 & s || (this.noAssert && void 0 === s)) &&
                                    ((a = 127 & (s = this.view[t++])),
                                    (128 & s || (this.noAssert && void 0 === s)) &&
                                      ((a |= (127 & (s = this.view[t++])) << 7), 128 & s || (this.noAssert && void 0 === s)))))))))))
                  )
                    throw Error("Buffer overrun")
                  var x = e.fromBits(n | (o << 28), (o >>> 4) | (a << 24), !1)
                  return i
                    ? ((this.offset = t), x)
                    : {
                        value: x,
                        length: t - r
                      }
                }),
                (i.readVarint64ZigZag = function (i) {
                  var r = this.readVarint64(i)
                  return r && r.value instanceof e ? (r.value = t.zigZagDecode64(r.value)) : (r = t.zigZagDecode64(r)), r
                })),
              (i.writeCString = function (e, t) {
                var i = void 0 === t
                i && (t = this.offset)
                var r,
                  n = e.length
                if (!this.noAssert) {
                  if ("string" !== typeof e) throw TypeError("Illegal str: Not a string")
                  for (r = 0; r < n; ++r) if (0 === e.charCodeAt(r)) throw RangeError("Illegal str: Contains NULL-characters")
                  if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                ;(n = c.calculateUTF16asUTF8(o(e))[1]), (t += n + 1)
                var a = this.buffer.byteLength
                return (
                  t > a && this.resize((a *= 2) > t ? a : t),
                  (t -= n + 1),
                  c.encodeUTF16toUTF8(
                    o(e),
                    function (e) {
                      this.view[t++] = e
                    }.bind(this)
                  ),
                  (this.view[t++] = 0),
                  i ? ((this.offset = t), this) : n
                )
              }),
              (i.readCString = function (e) {
                var t = void 0 === e
                if ((t && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var i,
                  r = e,
                  n = -1
                return (
                  c.decodeUTF8toUTF16(
                    function () {
                      if (0 === n) return null
                      if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit)
                      return 0 === (n = this.view[e++]) ? null : n
                    }.bind(this),
                    (i = a()),
                    !0
                  ),
                  t
                    ? ((this.offset = e), i())
                    : {
                        string: i(),
                        length: e - r
                      }
                )
              }),
              (i.writeIString = function (e, t) {
                var i = void 0 === t
                if ((i && (t = this.offset), !this.noAssert)) {
                  if ("string" !== typeof e) throw TypeError("Illegal str: Not a string")
                  if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var r,
                  n = t
                ;(r = c.calculateUTF16asUTF8(o(e), this.noAssert)[1]), (t += 4 + r)
                var a = this.buffer.byteLength
                if (
                  (t > a && this.resize((a *= 2) > t ? a : t),
                  (t -= 4 + r),
                  this.littleEndian
                    ? ((this.view[t + 3] = (r >>> 24) & 255),
                      (this.view[t + 2] = (r >>> 16) & 255),
                      (this.view[t + 1] = (r >>> 8) & 255),
                      (this.view[t] = 255 & r))
                    : ((this.view[t] = (r >>> 24) & 255),
                      (this.view[t + 1] = (r >>> 16) & 255),
                      (this.view[t + 2] = (r >>> 8) & 255),
                      (this.view[t + 3] = 255 & r)),
                  (t += 4),
                  c.encodeUTF16toUTF8(
                    o(e),
                    function (e) {
                      this.view[t++] = e
                    }.bind(this)
                  ),
                  t !== n + 4 + r)
                )
                  throw RangeError("Illegal range: Truncated data, " + t + " === " + (t + 4 + r))
                return i ? ((this.offset = t), this) : t - n
              }),
              (i.readIString = function (e) {
                var i = void 0 === e
                if ((i && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var r = e,
                  n = this.readUint32(e),
                  o = this.readUTF8String(n, t.METRICS_BYTES, (e += 4))
                return (
                  (e += o.length),
                  i
                    ? ((this.offset = e), o.string)
                    : {
                        string: o.string,
                        length: e - r
                      }
                )
              }),
              (t.METRICS_CHARS = "c"),
              (t.METRICS_BYTES = "b"),
              (i.writeUTF8String = function (e, t) {
                var i,
                  r = void 0 === t
                if ((r && (t = this.offset), !this.noAssert)) {
                  if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: " + t + " (not an integer)")
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var n = t
                ;(i = c.calculateUTF16asUTF8(o(e))[1]), (t += i)
                var a = this.buffer.byteLength
                return (
                  t > a && this.resize((a *= 2) > t ? a : t),
                  (t -= i),
                  c.encodeUTF16toUTF8(
                    o(e),
                    function (e) {
                      this.view[t++] = e
                    }.bind(this)
                  ),
                  r ? ((this.offset = t), this) : t - n
                )
              }),
              (i.writeString = i.writeUTF8String),
              (t.calculateUTF8Chars = function (e) {
                return c.calculateUTF16asUTF8(o(e))[0]
              }),
              (t.calculateUTF8Bytes = function (e) {
                return c.calculateUTF16asUTF8(o(e))[1]
              }),
              (t.calculateString = t.calculateUTF8Bytes),
              (i.readUTF8String = function (e, i, r) {
                "number" === typeof i && ((r = i), (i = void 0))
                var n = void 0 === r
                if ((n && (r = this.offset), void 0 === i && (i = t.METRICS_CHARS), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal length: " + e + " (not an integer)")
                  if (((e |= 0), "number" !== typeof r || r % 1 !== 0)) throw TypeError("Illegal offset: " + r + " (not an integer)")
                  if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                }
                var o,
                  s = 0,
                  x = r
                if (i === t.METRICS_CHARS) {
                  if (
                    ((o = a()),
                    c.decodeUTF8(
                      function () {
                        return s < e && r < this.limit ? this.view[r++] : null
                      }.bind(this),
                      function (e) {
                        ++s, c.UTF8toUTF16(e, o)
                      }
                    ),
                    s !== e)
                  )
                    throw RangeError("Illegal range: Truncated data, " + s + " === " + e)
                  return n
                    ? ((this.offset = r), o())
                    : {
                        string: o(),
                        length: r - x
                      }
                }
                if (i === t.METRICS_BYTES) {
                  if (!this.noAssert) {
                    if ("number" !== typeof r || r % 1 !== 0) throw TypeError("Illegal offset: " + r + " (not an integer)")
                    if ((r >>>= 0) < 0 || r + e > this.buffer.byteLength)
                      throw RangeError("Illegal offset: 0 <= " + r + " (+" + e + ") <= " + this.buffer.byteLength)
                  }
                  var l = r + e
                  if (
                    (c.decodeUTF8toUTF16(
                      function () {
                        return r < l ? this.view[r++] : null
                      }.bind(this),
                      (o = a()),
                      this.noAssert
                    ),
                    r !== l)
                  )
                    throw RangeError("Illegal range: Truncated data, " + r + " === " + l)
                  return n
                    ? ((this.offset = r), o())
                    : {
                        string: o(),
                        length: r - x
                      }
                }
                throw TypeError("Unsupported metrics: " + i)
              }),
              (i.readString = i.readUTF8String),
              (i.writeVString = function (e, i) {
                var r = void 0 === i
                if ((r && (i = this.offset), !this.noAssert)) {
                  if ("string" !== typeof e) throw TypeError("Illegal str: Not a string")
                  if ("number" !== typeof i || i % 1 !== 0) throw TypeError("Illegal offset: " + i + " (not an integer)")
                  if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
                }
                var n,
                  a,
                  s = i
                ;(n = c.calculateUTF16asUTF8(o(e), this.noAssert)[1]), (a = t.calculateVarint32(n)), (i += a + n)
                var x = this.buffer.byteLength
                if (
                  (i > x && this.resize((x *= 2) > i ? x : i),
                  (i -= a + n),
                  (i += this.writeVarint32(n, i)),
                  c.encodeUTF16toUTF8(
                    o(e),
                    function (e) {
                      this.view[i++] = e
                    }.bind(this)
                  ),
                  i !== s + n + a)
                )
                  throw RangeError("Illegal range: Truncated data, " + i + " === " + (i + n + a))
                return r ? ((this.offset = i), this) : i - s
              }),
              (i.readVString = function (e) {
                var i = void 0 === e
                if ((i && (e = this.offset), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var r = e,
                  n = this.readVarint32(e),
                  o = this.readUTF8String(n.value, t.METRICS_BYTES, (e += n.length))
                return (
                  (e += o.length),
                  i
                    ? ((this.offset = e), o.string)
                    : {
                        string: o.string,
                        length: e - r
                      }
                )
              }),
              (i.append = function (e, i, r) {
                ;("number" !== typeof i && "string" === typeof i) || ((r = i), (i = void 0))
                var n = void 0 === r
                if ((n && (r = this.offset), !this.noAssert)) {
                  if ("number" !== typeof r || r % 1 !== 0) throw TypeError("Illegal offset: " + r + " (not an integer)")
                  if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                }
                e instanceof t || (e = t.wrap(e, i))
                var o = e.limit - e.offset
                if (o <= 0) return this
                r += o
                var a = this.buffer.byteLength
                return (
                  r > a && this.resize((a *= 2) > r ? a : r),
                  (r -= o),
                  this.view.set(e.view.subarray(e.offset, e.limit), r),
                  (e.offset += o),
                  n && (this.offset += o),
                  this
                )
              }),
              (i.appendTo = function (e, t) {
                return e.append(this, t), this
              }),
              (i.assert = function (e) {
                return (this.noAssert = !e), this
              }),
              (i.capacity = function () {
                return this.buffer.byteLength
              }),
              (i.clear = function () {
                return (this.offset = 0), (this.limit = this.buffer.byteLength), (this.markedOffset = -1), this
              }),
              (i.clone = function (e) {
                var i = new t(0, this.littleEndian, this.noAssert)
                return (
                  e
                    ? ((i.buffer = new ArrayBuffer(this.buffer.byteLength)), (i.view = new Uint8Array(i.buffer)))
                    : ((i.buffer = this.buffer), (i.view = this.view)),
                  (i.offset = this.offset),
                  (i.markedOffset = this.markedOffset),
                  (i.limit = this.limit),
                  i
                )
              }),
              (i.compact = function (e, t) {
                if ((void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer")
                  if (((e >>>= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal end: Not an integer")
                  if (((t >>>= 0), e < 0 || e > t || t > this.buffer.byteLength))
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                if (0 === e && t === this.buffer.byteLength) return this
                var i = t - e
                if (0 === i)
                  return (
                    (this.buffer = r),
                    (this.view = null),
                    this.markedOffset >= 0 && (this.markedOffset -= e),
                    (this.offset = 0),
                    (this.limit = 0),
                    this
                  )
                var n = new ArrayBuffer(i),
                  o = new Uint8Array(n)
                return (
                  o.set(this.view.subarray(e, t)),
                  (this.buffer = n),
                  (this.view = o),
                  this.markedOffset >= 0 && (this.markedOffset -= e),
                  (this.offset = 0),
                  (this.limit = i),
                  this
                )
              }),
              (i.copy = function (e, i) {
                if ((void 0 === e && (e = this.offset), void 0 === i && (i = this.limit), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer")
                  if (((e >>>= 0), "number" !== typeof i || i % 1 !== 0)) throw TypeError("Illegal end: Not an integer")
                  if (((i >>>= 0), e < 0 || e > i || i > this.buffer.byteLength))
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + i + " <= " + this.buffer.byteLength)
                }
                if (e === i) return new t(0, this.littleEndian, this.noAssert)
                var r = i - e,
                  n = new t(r, this.littleEndian, this.noAssert)
                return (n.offset = 0), (n.limit = r), n.markedOffset >= 0 && (n.markedOffset -= e), this.copyTo(n, 0, e, i), n
              }),
              (i.copyTo = function (e, i, r, n) {
                var o, a
                if (!this.noAssert && !t.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer")
                if (
                  ((i = (a = void 0 === i) ? e.offset : 0 | i),
                  (r = (o = void 0 === r) ? this.offset : 0 | r),
                  (n = void 0 === n ? this.limit : 0 | n),
                  i < 0 || i > e.buffer.byteLength)
                )
                  throw RangeError("Illegal target range: 0 <= " + i + " <= " + e.buffer.byteLength)
                if (r < 0 || n > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength)
                var s = n - r
                return 0 === s
                  ? e
                  : (e.ensureCapacity(i + s), e.view.set(this.view.subarray(r, n), i), o && (this.offset += s), a && (e.offset += s), this)
              }),
              (i.ensureCapacity = function (e) {
                var t = this.buffer.byteLength
                return t < e ? this.resize((t *= 2) > e ? t : e) : this
              }),
              (i.fill = function (e, t, i) {
                var r = void 0 === t
                if (
                  (r && (t = this.offset),
                  "string" === typeof e && e.length > 0 && (e = e.charCodeAt(0)),
                  void 0 === t && (t = this.offset),
                  void 0 === i && (i = this.limit),
                  !this.noAssert)
                ) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal value: " + e + " (not an integer)")
                  if (((e |= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal begin: Not an integer")
                  if (((t >>>= 0), "number" !== typeof i || i % 1 !== 0)) throw TypeError("Illegal end: Not an integer")
                  if (((i >>>= 0), t < 0 || t > i || i > this.buffer.byteLength))
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + i + " <= " + this.buffer.byteLength)
                }
                if (t >= i) return this
                for (; t < i; ) this.view[t++] = e
                return r && (this.offset = t), this
              }),
              (i.flip = function () {
                return (this.limit = this.offset), (this.offset = 0), this
              }),
              (i.mark = function (e) {
                if (((e = void 0 === e ? this.offset : e), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal offset: " + e + " (not an integer)")
                  if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                }
                return (this.markedOffset = e), this
              }),
              (i.order = function (e) {
                if (!this.noAssert && "boolean" !== typeof e) throw TypeError("Illegal littleEndian: Not a boolean")
                return (this.littleEndian = !!e), this
              }),
              (i.LE = function (e) {
                return (this.littleEndian = void 0 === e || !!e), this
              }),
              (i.BE = function (e) {
                return (this.littleEndian = void 0 !== e && !e), this
              }),
              (i.prepend = function (e, i, r) {
                ;("number" !== typeof i && "string" === typeof i) || ((r = i), (i = void 0))
                var n = void 0 === r
                if ((n && (r = this.offset), !this.noAssert)) {
                  if ("number" !== typeof r || r % 1 !== 0) throw TypeError("Illegal offset: " + r + " (not an integer)")
                  if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                }
                e instanceof t || (e = t.wrap(e, i))
                var o = e.limit - e.offset
                if (o <= 0) return this
                var a = o - r
                if (a > 0) {
                  var s = new ArrayBuffer(this.buffer.byteLength + a),
                    x = new Uint8Array(s)
                  x.set(this.view.subarray(r, this.buffer.byteLength), o),
                    (this.buffer = s),
                    (this.view = x),
                    (this.offset += a),
                    this.markedOffset >= 0 && (this.markedOffset += a),
                    (this.limit += a),
                    (r += a)
                } else new Uint8Array(this.buffer)
                return this.view.set(e.view.subarray(e.offset, e.limit), r - o), (e.offset = e.limit), n && (this.offset -= o), this
              }),
              (i.prependTo = function (e, t) {
                return e.prepend(this, t), this
              }),
              (i.printDebug = function (e) {
                "function" !== typeof e && (e = console.log.bind(console)),
                  e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
              }),
              (i.remaining = function () {
                return this.limit - this.offset
              }),
              (i.reset = function () {
                return this.markedOffset >= 0 ? ((this.offset = this.markedOffset), (this.markedOffset = -1)) : (this.offset = 0), this
              }),
              (i.resize = function (e) {
                if (!this.noAssert) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal capacity: " + e + " (not an integer)")
                  if ((e |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + e)
                }
                if (this.buffer.byteLength < e) {
                  var t = new ArrayBuffer(e),
                    i = new Uint8Array(t)
                  i.set(this.view), (this.buffer = t), (this.view = i)
                }
                return this
              }),
              (i.reverse = function (e, t) {
                if ((void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer")
                  if (((e >>>= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal end: Not an integer")
                  if (((t >>>= 0), e < 0 || e > t || t > this.buffer.byteLength))
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                return e === t || Array.prototype.reverse.call(this.view.subarray(e, t)), this
              }),
              (i.skip = function (e) {
                if (!this.noAssert) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal length: " + e + " (not an integer)")
                  e |= 0
                }
                var t = this.offset + e
                if (!this.noAssert && (t < 0 || t > this.buffer.byteLength))
                  throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength)
                return (this.offset = t), this
              }),
              (i.slice = function (e, t) {
                if ((void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer")
                  if (((e >>>= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal end: Not an integer")
                  if (((t >>>= 0), e < 0 || e > t || t > this.buffer.byteLength))
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                var i = this.clone()
                return (i.offset = e), (i.limit = t), i
              }),
              (i.toBuffer = function (e) {
                var t = this.offset,
                  i = this.limit
                if (!this.noAssert) {
                  if ("number" !== typeof t || t % 1 !== 0) throw TypeError("Illegal offset: Not an integer")
                  if (((t >>>= 0), "number" !== typeof i || i % 1 !== 0)) throw TypeError("Illegal limit: Not an integer")
                  if (((i >>>= 0), t < 0 || t > i || i > this.buffer.byteLength))
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + i + " <= " + this.buffer.byteLength)
                }
                if (!e && 0 === t && i === this.buffer.byteLength) return this.buffer
                if (t === i) return r
                var n = new ArrayBuffer(i - t)
                return new Uint8Array(n).set(new Uint8Array(this.buffer).subarray(t, i), 0), n
              }),
              (i.toArrayBuffer = i.toBuffer),
              (i.toString = function (e, t, i) {
                if (void 0 === e)
                  return (
                    "ByteBufferAB(offset=" +
                    this.offset +
                    ",markedOffset=" +
                    this.markedOffset +
                    ",limit=" +
                    this.limit +
                    ",capacity=" +
                    this.capacity() +
                    ")"
                  )
                switch (("number" === typeof e && (i = t = e = "utf8"), e)) {
                  case "utf8":
                    return this.toUTF8(t, i)
                  case "base64":
                    return this.toBase64(t, i)
                  case "hex":
                    return this.toHex(t, i)
                  case "binary":
                    return this.toBinary(t, i)
                  case "debug":
                    return this.toDebug()
                  case "columns":
                    return this.toColumns()
                  default:
                    throw Error("Unsupported encoding: " + e)
                }
              })
            var l = (function () {
              for (
                var e = {},
                  t = [
                    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102,
                    103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54,
                    55, 56, 57, 43, 47
                  ],
                  i = [],
                  r = 0,
                  n = t.length;
                r < n;
                ++r
              )
                i[t[r]] = r
              return (
                (e.encode = function (e, i) {
                  for (var r, n; null !== (r = e()); )
                    i(t[(r >> 2) & 63]),
                      (n = (3 & r) << 4),
                      null !== (r = e())
                        ? (i(t[63 & ((n |= (r >> 4) & 15) | ((r >> 4) & 15))]),
                          (n = (15 & r) << 2),
                          null !== (r = e()) ? (i(t[63 & (n | ((r >> 6) & 3))]), i(t[63 & r])) : (i(t[63 & n]), i(61)))
                        : (i(t[63 & n]), i(61), i(61))
                }),
                (e.decode = function (e, t) {
                  var r, n, o
                  function a(e) {
                    throw Error("Illegal character code: " + e)
                  }
                  for (; null !== (r = e()); )
                    if (
                      (void 0 === (n = i[r]) && a(r),
                      null !== (r = e()) && (void 0 === (o = i[r]) && a(r), t(((n << 2) >>> 0) | ((48 & o) >> 4)), null !== (r = e())))
                    ) {
                      if (void 0 === (n = i[r])) {
                        if (61 === r) break
                        a(r)
                      }
                      if ((t((((15 & o) << 4) >>> 0) | ((60 & n) >> 2)), null !== (r = e()))) {
                        if (void 0 === (o = i[r])) {
                          if (61 === r) break
                          a(r)
                        }
                        t((((3 & n) << 6) >>> 0) | o)
                      }
                    }
                }),
                (e.test = function (e) {
                  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
                }),
                e
              )
            })()
            ;(i.toBase64 = function (e, t) {
              if ((void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), (t |= 0), (e |= 0) < 0 || t > this.capacity || e > t))
                throw RangeError("begin, end")
              var i
              return (
                l.encode(
                  function () {
                    return e < t ? this.view[e++] : null
                  }.bind(this),
                  (i = a())
                ),
                i()
              )
            }),
              (t.fromBase64 = function (e, i) {
                if ("string" !== typeof e) throw TypeError("str")
                var r = new t((e.length / 4) * 3, i),
                  n = 0
                return (
                  l.decode(o(e), function (e) {
                    r.view[n++] = e
                  }),
                  (r.limit = n),
                  r
                )
              }),
              (t.btoa = function (e) {
                return t.fromBinary(e).toBase64()
              }),
              (t.atob = function (e) {
                return t.fromBase64(e).toBinary()
              }),
              (i.toBinary = function (e, t) {
                if ((void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), (t |= 0), (e |= 0) < 0 || t > this.capacity() || e > t))
                  throw RangeError("begin, end")
                if (e === t) return ""
                for (var i = [], r = []; e < t; ) i.push(this.view[e++]), i.length >= 1024 && (r.push(String.fromCharCode.apply(String, i)), (i = []))
                return r.join("") + String.fromCharCode.apply(String, i)
              }),
              (t.fromBinary = function (e, i) {
                if ("string" !== typeof e) throw TypeError("str")
                for (var r, n = 0, o = e.length, a = new t(o, i); n < o; ) {
                  if ((r = e.charCodeAt(n)) > 255) throw RangeError("illegal char code: " + r)
                  a.view[n++] = r
                }
                return (a.limit = o), a
              }),
              (i.toDebug = function (e) {
                for (var t, i = -1, r = this.buffer.byteLength, n = "", o = "", a = ""; i < r; ) {
                  if (
                    (-1 !== i &&
                      ((n += (t = this.view[i]) < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase()),
                      e && (o += t > 32 && t < 127 ? String.fromCharCode(t) : ".")),
                    ++i,
                    e && i > 0 && i % 16 === 0 && i !== r)
                  ) {
                    for (; n.length < 51; ) n += " "
                    ;(a += n + o + "\n"), (n = o = "")
                  }
                  i === this.offset && i === this.limit
                    ? (n += i === this.markedOffset ? "!" : "|")
                    : i === this.offset
                    ? (n += i === this.markedOffset ? "[" : "<")
                    : i === this.limit
                    ? (n += i === this.markedOffset ? "]" : ">")
                    : (n += i === this.markedOffset ? "'" : e || (0 !== i && i !== r) ? " " : "")
                }
                if (e && " " !== n) {
                  for (; n.length < 51; ) n += " "
                  a += n + o + "\n"
                }
                return e ? a : n
              }),
              (t.fromDebug = function (e, i, r) {
                for (var n, o, a = e.length, s = new t(((a + 1) / 3) | 0, i, r), x = 0, l = 0, c = !1, u = !1, h = !1, f = !1, d = !1; x < a; ) {
                  switch ((n = e.charAt(x++))) {
                    case "!":
                      if (!r) {
                        if (u || h || f) {
                          d = !0
                          break
                        }
                        u = h = f = !0
                      }
                      ;(s.offset = s.markedOffset = s.limit = l), (c = !1)
                      break
                    case "|":
                      if (!r) {
                        if (u || f) {
                          d = !0
                          break
                        }
                        u = f = !0
                      }
                      ;(s.offset = s.limit = l), (c = !1)
                      break
                    case "[":
                      if (!r) {
                        if (u || h) {
                          d = !0
                          break
                        }
                        u = h = !0
                      }
                      ;(s.offset = s.markedOffset = l), (c = !1)
                      break
                    case "<":
                      if (!r) {
                        if (u) {
                          d = !0
                          break
                        }
                        u = !0
                      }
                      ;(s.offset = l), (c = !1)
                      break
                    case "]":
                      if (!r) {
                        if (f || h) {
                          d = !0
                          break
                        }
                        f = h = !0
                      }
                      ;(s.limit = s.markedOffset = l), (c = !1)
                      break
                    case ">":
                      if (!r) {
                        if (f) {
                          d = !0
                          break
                        }
                        f = !0
                      }
                      ;(s.limit = l), (c = !1)
                      break
                    case "'":
                      if (!r) {
                        if (h) {
                          d = !0
                          break
                        }
                        h = !0
                      }
                      ;(s.markedOffset = l), (c = !1)
                      break
                    case " ":
                      c = !1
                      break
                    default:
                      if (!r && c) {
                        d = !0
                        break
                      }
                      if (((o = parseInt(n + e.charAt(x++), 16)), !r && (isNaN(o) || o < 0 || o > 255)))
                        throw TypeError("Illegal str: Not a debug encoded string")
                      ;(s.view[l++] = o), (c = !0)
                  }
                  if (d) throw TypeError("Illegal str: Invalid symbol at " + x)
                }
                if (!r) {
                  if (!u || !f) throw TypeError("Illegal str: Missing offset or limit")
                  if (l < s.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + l + " < " + a)
                }
                return s
              }),
              (i.toHex = function (e, t) {
                if (((e = void 0 === e ? this.offset : e), (t = void 0 === t ? this.limit : t), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer")
                  if (((e >>>= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal end: Not an integer")
                  if (((t >>>= 0), e < 0 || e > t || t > this.buffer.byteLength))
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                for (var i, r = new Array(t - e); e < t; ) (i = this.view[e++]) < 16 ? r.push("0", i.toString(16)) : r.push(i.toString(16))
                return r.join("")
              }),
              (t.fromHex = function (e, i, r) {
                if (!r) {
                  if ("string" !== typeof e) throw TypeError("Illegal str: Not a string")
                  if (e.length % 2 !== 0) throw TypeError("Illegal str: Length not a multiple of 2")
                }
                for (var n, o = e.length, a = new t((o / 2) | 0, i), s = 0, x = 0; s < o; s += 2) {
                  if (((n = parseInt(e.substring(s, s + 2), 16)), !r && (!isFinite(n) || n < 0 || n > 255)))
                    throw TypeError("Illegal str: Contains non-hex characters")
                  a.view[x++] = n
                }
                return (a.limit = x), a
              })
            var c = (function () {
              var e = {
                MAX_CODEPOINT: 1114111,
                encodeUTF8: function (e, t) {
                  var i = null
                  for (
                    "number" === typeof e &&
                    ((i = e),
                    (e = function () {
                      return null
                    }));
                    null !== i || null !== (i = e());

                  )
                    i < 128
                      ? t(127 & i)
                      : i < 2048
                      ? (t(((i >> 6) & 31) | 192), t((63 & i) | 128))
                      : i < 65536
                      ? (t(((i >> 12) & 15) | 224), t(((i >> 6) & 63) | 128), t((63 & i) | 128))
                      : (t(((i >> 18) & 7) | 240), t(((i >> 12) & 63) | 128), t(((i >> 6) & 63) | 128), t((63 & i) | 128)),
                      (i = null)
                },
                decodeUTF8: function (e, t) {
                  for (
                    var i,
                      r,
                      n,
                      o,
                      a = function (e) {
                        e = e.slice(0, e.indexOf(null))
                        var t = Error(e.toString())
                        throw ((t.name = "TruncatedError"), (t.bytes = e), t)
                      };
                    null !== (i = e());

                  )
                    if (0 === (128 & i)) t(i)
                    else if (192 === (224 & i)) null === (r = e()) && a([i, r]), t(((31 & i) << 6) | (63 & r))
                    else if (224 === (240 & i))
                      (null === (r = e()) || null === (n = e())) && a([i, r, n]), t(((15 & i) << 12) | ((63 & r) << 6) | (63 & n))
                    else {
                      if (240 !== (248 & i)) throw RangeError("Illegal starting byte: " + i)
                      ;(null === (r = e()) || null === (n = e()) || null === (o = e())) && a([i, r, n, o]),
                        t(((7 & i) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & o))
                    }
                },
                UTF16toUTF8: function (e, t) {
                  for (var i, r = null; null !== (i = null !== r ? r : e()); )
                    i >= 55296 && i <= 57343 && null !== (r = e()) && r >= 56320 && r <= 57343
                      ? (t(1024 * (i - 55296) + r - 56320 + 65536), (r = null))
                      : t(i)
                  null !== r && t(r)
                },
                UTF8toUTF16: function (e, t) {
                  var i = null
                  for (
                    "number" === typeof e &&
                    ((i = e),
                    (e = function () {
                      return null
                    }));
                    null !== i || null !== (i = e());

                  )
                    i <= 65535 ? t(i) : (t(55296 + ((i -= 65536) >> 10)), t((i % 1024) + 56320)), (i = null)
                },
                encodeUTF16toUTF8: function (t, i) {
                  e.UTF16toUTF8(t, function (t) {
                    e.encodeUTF8(t, i)
                  })
                },
                decodeUTF8toUTF16: function (t, i) {
                  e.decodeUTF8(t, function (t) {
                    e.UTF8toUTF16(t, i)
                  })
                },
                calculateCodePoint: function (e) {
                  return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
                },
                calculateUTF8: function (e) {
                  for (var t, i = 0; null !== (t = e()); ) i += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4
                  return i
                },
                calculateUTF16asUTF8: function (t) {
                  var i = 0,
                    r = 0
                  return (
                    e.UTF16toUTF8(t, function (e) {
                      ++i, (r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4)
                    }),
                    [i, r]
                  )
                }
              }
              return e
            })()
            return (
              (i.toUTF8 = function (e, t) {
                if ((void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert)) {
                  if ("number" !== typeof e || e % 1 !== 0) throw TypeError("Illegal begin: Not an integer")
                  if (((e >>>= 0), "number" !== typeof t || t % 1 !== 0)) throw TypeError("Illegal end: Not an integer")
                  if (((t >>>= 0), e < 0 || e > t || t > this.buffer.byteLength))
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                var i
                try {
                  c.decodeUTF8toUTF16(
                    function () {
                      return e < t ? this.view[e++] : null
                    }.bind(this),
                    (i = a())
                  )
                } catch (i) {
                  if (e !== t) throw RangeError("Illegal range: Truncated data, " + e + " !== " + t)
                }
                return i()
              }),
              (t.fromUTF8 = function (e, i, r) {
                if (!r && "string" !== typeof e) throw TypeError("Illegal str: Not a string")
                var n = new t(c.calculateUTF16asUTF8(o(e), !0)[1], i, r),
                  a = 0
                return (
                  c.encodeUTF16toUTF8(o(e), function (e) {
                    n.view[a++] = e
                  }),
                  (n.limit = a),
                  n
                )
              }),
              t
            )
          })
            ? r.apply(t, n)
            : r) || (e.exports = o)
  },
  function (e, t) {
    ;(function (t) {
      e.exports = t
    }).call(this, {})
  },
  function (e, t, i) {
    ;(function (e) {
      function i(e, t) {
        for (var i = 0, r = e.length - 1; r >= 0; r--) {
          var n = e[r]
          "." === n ? e.splice(r, 1) : ".." === n ? (e.splice(r, 1), i++) : i && (e.splice(r, 1), i--)
        }
        if (t) for (; i--; i) e.unshift("..")
        return e
      }
      function r(e, t) {
        if (e.filter) return e.filter(t)
        for (var i = [], r = 0; r < e.length; r++) t(e[r], r, e) && i.push(e[r])
        return i
      }
      ;(t.resolve = function () {
        for (var t = "", n = !1, o = arguments.length - 1; o >= -1 && !n; o--) {
          var a = o >= 0 ? arguments[o] : e.cwd()
          if ("string" !== typeof a) throw new TypeError("Arguments to path.resolve must be strings")
          a && ((t = a + "/" + t), (n = "/" === a.charAt(0)))
        }
        return (
          (n ? "/" : "") +
            (t = i(
              r(t.split("/"), function (e) {
                return !!e
              }),
              !n
            ).join("/")) || "."
        )
      }),
        (t.normalize = function (e) {
          var o = t.isAbsolute(e),
            a = "/" === n(e, -1)
          return (
            (e = i(
              r(e.split("/"), function (e) {
                return !!e
              }),
              !o
            ).join("/")) ||
              o ||
              (e = "."),
            e && a && (e += "/"),
            (o ? "/" : "") + e
          )
        }),
        (t.isAbsolute = function (e) {
          return "/" === e.charAt(0)
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0)
          return t.normalize(
            r(e, function (e, t) {
              if ("string" !== typeof e) throw new TypeError("Arguments to path.join must be strings")
              return e
            }).join("/")
          )
        }),
        (t.relative = function (e, i) {
          function r(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++);
            for (var i = e.length - 1; i >= 0 && "" === e[i]; i--);
            return t > i ? [] : e.slice(t, i - t + 1)
          }
          ;(e = t.resolve(e).substr(1)), (i = t.resolve(i).substr(1))
          for (var n = r(e.split("/")), o = r(i.split("/")), a = Math.min(n.length, o.length), s = a, x = 0; x < a; x++)
            if (n[x] !== o[x]) {
              s = x
              break
            }
          var l = []
          for (x = s; x < n.length; x++) l.push("..")
          return (l = l.concat(o.slice(s))).join("/")
        }),
        (t.sep = "/"),
        (t.delimiter = ":"),
        (t.dirname = function (e) {
          if (("string" !== typeof e && (e += ""), 0 === e.length)) return "."
          for (var t = e.charCodeAt(0), i = 47 === t, r = -1, n = !0, o = e.length - 1; o >= 1; --o)
            if (47 === (t = e.charCodeAt(o))) {
              if (!n) {
                r = o
                break
              }
            } else n = !1
          return -1 === r ? (i ? "/" : ".") : i && 1 === r ? "/" : e.slice(0, r)
        }),
        (t.basename = function (e, t) {
          var i = (function (e) {
            "string" !== typeof e && (e += "")
            var t,
              i = 0,
              r = -1,
              n = !0
            for (t = e.length - 1; t >= 0; --t)
              if (47 === e.charCodeAt(t)) {
                if (!n) {
                  i = t + 1
                  break
                }
              } else -1 === r && ((n = !1), (r = t + 1))
            return -1 === r ? "" : e.slice(i, r)
          })(e)
          return t && i.substr(-1 * t.length) === t && (i = i.substr(0, i.length - t.length)), i
        }),
        (t.extname = function (e) {
          "string" !== typeof e && (e += "")
          for (var t = -1, i = 0, r = -1, n = !0, o = 0, a = e.length - 1; a >= 0; --a) {
            var s = e.charCodeAt(a)
            if (47 !== s) -1 === r && ((n = !1), (r = a + 1)), 46 === s ? (-1 === t ? (t = a) : 1 !== o && (o = 1)) : -1 !== t && (o = -1)
            else if (!n) {
              i = a + 1
              break
            }
          }
          return -1 === t || -1 === r || 0 === o || (1 === o && t === r - 1 && t === i + 1) ? "" : e.slice(t, r)
        })
      var n =
        "b" === "ab".substr(-1)
          ? function (e, t, i) {
              return e.substr(t, i)
            }
          : function (e, t, i) {
              return t < 0 && (t = e.length + t), e.substr(t, i)
            }
    }).call(this, i(95))
  },
  function (e, t, i) {
    for (
      var r,
        n = i(10),
        o = i(20),
        a = i(28),
        s = a("typed_array"),
        x = a("view"),
        l = !(!n.ArrayBuffer || !n.DataView),
        c = l,
        u = 0,
        h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
      u < 9;

    )
      (r = n[h[u++]]) ? (o(r.prototype, s, !0), o(r.prototype, x, !0)) : (c = !1)
    e.exports = {
      ABV: l,
      CONSTR: c,
      TYPED: s,
      VIEW: x
    }
  },
  function (e, t, i) {
    var r = i(22)
    e.exports = function (e, t, i) {
      for (var n in t) r(e, n, t[n], i)
      return e
    }
  },
  function (e, t) {
    e.exports = function (e, t, i, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e)) throw TypeError(i + ": incorrect invocation!")
      return e
    }
  },
  function (e, t, i) {
    var r = i(29),
      n = i(19)
    e.exports = function (e) {
      if (void 0 === e) return 0
      var t = r(e),
        i = n(t)
      if (t !== i) throw RangeError("Wrong length!")
      return i
    }
  },
  function (e, t, i) {
    var r = i(46)
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" === r(e)
      }
  },
  function (e, t, i) {
    var r = i(10),
      n = i(13),
      o = i(11),
      a = i(4)("species")
    e.exports = function (e) {
      var t = r[e]
      o &&
        t &&
        !t[a] &&
        n.f(t, a, {
          configurable: !0,
          get: function () {
            return this
          }
        })
    }
  },
  function (e, t, i) {
    var r = i(23),
      n = i(19),
      o = i(130),
      a = "".endsWith
    r(r.P + r.F * i(131)("endsWith"), "String", {
      endsWith: function (e) {
        var t = o(this, e, "endsWith"),
          i = arguments.length > 1 ? arguments[1] : void 0,
          r = n(t.length),
          s = void 0 === i ? r : Math.min(n(i), r),
          x = String(e)
        return a ? a.call(t, x, s) : t.slice(s - x.length, s) === x
      }
    })
  },
  function (e, t, i) {
    var r = i(80),
      n = i(38)
    e.exports = function (e, t, i) {
      if (r(t)) throw TypeError("String#" + i + " doesn't accept regex!")
      return String(n(e))
    }
  },
  function (e, t, i) {
    var r = i(4)("match")
    e.exports = function (e) {
      var t = /./
      try {
        "/./"[e](t)
      } catch (i) {
        try {
          return (t[r] = !1), !"/./"[e](t)
        } catch (e) {}
      }
      return !0
    }
  },
  function (e, t, i) {
    var r = i(23),
      n = i(19),
      o = i(130),
      a = "".startsWith
    r(r.P + r.F * i(131)("startsWith"), "String", {
      startsWith: function (e) {
        var t = o(this, e, "startsWith"),
          i = n(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          r = String(e)
        return a ? a.call(t, r, i) : t.slice(i, i + r.length) === r
      }
    })
  },
  function (e, t, i) {
    var r = i(47),
      n = i(14)("toStringTag"),
      o =
        "Arguments" ==
        r(
          (function () {
            return arguments
          })()
        )
    e.exports = function (e) {
      var t, i, a
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (i = (function (e, t) {
            try {
              return e[t]
            } catch (e) {}
          })((t = Object(e)), n))
        ? i
        : o
        ? r(t)
        : "Object" === (a = r(t)) && "function" === typeof t.callee
        ? "Arguments"
        : a
    }
  },
  function (e, t, i) {
    var r = i(27),
      n = i(60),
      o = i(14)("species")
    e.exports = function (e, t) {
      var i,
        a = r(e).constructor
      return void 0 === a || null === (i = r(a)[o]) ? t : n(i)
    }
  },
  function (e, t, i) {
    var r,
      n,
      o,
      a = i(59),
      s = i(221),
      x = i(110),
      l = i(77),
      c = i(7),
      u = c.process,
      h = c.setImmediate,
      f = c.clearImmediate,
      d = c.MessageChannel,
      g = c.Dispatch,
      p = 0,
      m = {},
      b = function () {
        var e = +this
        if (m.hasOwnProperty(e)) {
          var t = m[e]
          delete m[e], t()
        }
      },
      v = function (e) {
        b.call(e.data)
      }
    ;(h && f) ||
      ((h = function (e) {
        for (var t = [], i = 1; arguments.length > i; ) t.push(arguments[i++])
        return (
          (m[++p] = function () {
            s("function" === typeof e ? e : Function(e), t)
          }),
          r(p),
          p
        )
      }),
      (f = function (e) {
        delete m[e]
      }),
      "process" === i(47)(u)
        ? (r = function (e) {
            u.nextTick(a(b, e, 1))
          })
        : g && g.now
        ? (r = function (e) {
            g.now(a(b, e, 1))
          })
        : d
        ? ((o = (n = new d()).port2), (n.port1.onmessage = v), (r = a(o.postMessage, o, 1)))
        : c.addEventListener && "function" === typeof postMessage && !c.importScripts
        ? ((r = function (e) {
            c.postMessage(e + "", "*")
          }),
          c.addEventListener("message", v, !1))
        : (r =
            "onreadystatechange" in l("script")
              ? function (e) {
                  x.appendChild(l("script")).onreadystatechange = function () {
                    x.removeChild(this), b.call(e)
                  }
                }
              : function (e) {
                  setTimeout(a(b, e, 1), 0)
                })),
      (e.exports = {
        set: h,
        clear: f
      })
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return {
          e: !1,
          v: e()
        }
      } catch (e) {
        return {
          e: !0,
          v: e
        }
      }
    }
  },
  function (e, t, i) {
    var r = i(27),
      n = i(33),
      o = i(94)
    e.exports = function (e, t) {
      if ((r(e), n(t) && t.constructor === e)) return t
      var i = o.f(e)
      return (0, i.resolve)(t), i.promise
    }
  },
  function (e, t, i) {
    var r = i(10),
      n = i(43),
      o = i(35),
      a = i(139),
      s = i(13).f
    e.exports = function (e) {
      var t = n.Symbol || (n.Symbol = o ? {} : r.Symbol || {})
      "_" === e.charAt(0) ||
        e in t ||
        s(t, e, {
          value: a.f(e)
        })
    }
  },
  function (e, t, i) {
    t.f = i(4)
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols
  },
  function (e, t, i) {
    var r = i(10),
      n = i(24),
      o = i(46),
      a = i(142),
      s = i(44),
      x = i(18),
      l = i(41).f,
      c = i(67).f,
      u = i(13).f,
      h = i(235).trim,
      f = r.Number,
      d = f,
      g = f.prototype,
      p = "Number" === o(i(52)(g)),
      m = "trim" in String.prototype,
      b = function (e) {
        var t = s(e, !1)
        if ("string" === typeof t && t.length > 2) {
          var i,
            r,
            n,
            o = (t = m ? t.trim() : h(t, 3)).charCodeAt(0)
          if (43 === o || 45 === o) {
            if (88 === (i = t.charCodeAt(2)) || 120 === i) return NaN
          } else if (48 === o) {
            switch (t.charCodeAt(1)) {
              case 66:
              case 98:
                ;(r = 2), (n = 49)
                break
              case 79:
              case 111:
                ;(r = 8), (n = 55)
                break
              default:
                return +t
            }
            for (var a, x = t.slice(2), l = 0, c = x.length; l < c; l++) if ((a = x.charCodeAt(l)) < 48 || a > n) return NaN
            return parseInt(x, r)
          }
        }
        return +t
      }
    if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
      f = function (e) {
        var t = arguments.length < 1 ? 0 : e,
          i = this
        return i instanceof f &&
          (p
            ? x(function () {
                g.valueOf.call(i)
              })
            : "Number" !== o(i))
          ? a(new d(b(t)), i, f)
          : b(t)
      }
      for (
        var v,
          C = i(11)
            ? l(d)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          y = 0;
        C.length > y;
        y++
      )
        n(d, (v = C[y])) && !n(f, v) && u(f, v, c(d, v))
      ;(f.prototype = g), (g.constructor = f), i(22)(r, "Number", f)
    }
  },
  function (e, t, i) {
    var r = i(21),
      n = i(234).set
    e.exports = function (e, t, i) {
      var o,
        a = t.constructor
      return a !== i && "function" === typeof a && (o = a.prototype) !== i.prototype && r(o) && n && n(e, o), e
    }
  },
  function (e, t, i) {
    var r = i(10),
      n = i(142),
      o = i(13).f,
      a = i(41).f,
      s = i(80),
      x = i(64),
      l = r.RegExp,
      c = l,
      u = l.prototype,
      h = /a/g,
      f = /a/g,
      d = new l(h) !== h
    if (
      i(11) &&
      (!d ||
        i(18)(function () {
          return (f[i(4)("match")] = !1), l(h) !== h || l(f) === f || "/a/i" !== l(h, "i")
        }))
    ) {
      l = function (e, t) {
        var i = this instanceof l,
          r = s(e),
          o = void 0 === t
        return !i && r && e.constructor === l && o
          ? e
          : n(d ? new c(r && !o ? e.source : e, t) : c((r = e instanceof l) ? e.source : e, r && o ? x.call(e) : t), i ? this : u, l)
      }
      for (
        var g = function (e) {
            ;(e in l) ||
              o(l, e, {
                configurable: !0,
                get: function () {
                  return c[e]
                },
                set: function (t) {
                  c[e] = t
                }
              })
          },
          p = a(c),
          m = 0;
        p.length > m;

      )
        g(p[m++])
      ;(u.constructor = l), (l.prototype = u), i(22)(r, "RegExp", l)
    }
    i(128)("RegExp")
  },
  function (e, t, i) {
    e.exports = i(193)
  },
  function (e, t, i) {
    e.exports = i(209)
  },
  function (e, t, i) {
    ;(function (e, t) {
      var r = i(15),
        n = i.n(r),
        o = (i(69), i(42), i(9)),
        a = i.n(o),
        s = i(3),
        x = i.n(s),
        l = (i(79), i(16)),
        c = i.n(l),
        u = (i(84), i(85), i(86), i(8)),
        h = i.n(u),
        f = i(2),
        d = i.n(f),
        g = i(1),
        p = i.n(g),
        m = (i(88), i(0)),
        b = i.n(m)
      !(function (e, r) {
        // var n = i(120)
        // ;(window.dcodeIO = window.dcodeIO || {}),
        //   (window.dcodeIO.ByteBuffer = n),
        //   "function" === typeof define && i(121)
        //     ? define(["bytebuffer"], r)
        //     : "object" === b()(t) && t && t.exports
        //     ? (t.exports = r(i(120), !0))
        //     : ((e.dcodeIO = e.dcodeIO || {}).ProtoBuf = r(e.dcodeIO.ByteBuffer))

        e.dcodeIO = e.dcodeIO || {}
        e.dcodeIO.ProtoBuf = r(i(120), true)
      })(window, function (t, r) {
        var o,
          s = {}
        return (
          (s.ByteBuffer = t),
          (s.Long = t.Long || null),
          (s.VERSION = "5.0.1"),
          (s.WIRE_TYPES = {}),
          (s.WIRE_TYPES.VARINT = 0),
          (s.WIRE_TYPES.BITS64 = 1),
          (s.WIRE_TYPES.LDELIM = 2),
          (s.WIRE_TYPES.STARTGROUP = 3),
          (s.WIRE_TYPES.ENDGROUP = 4),
          (s.WIRE_TYPES.BITS32 = 5),
          (s.PACKABLE_WIRE_TYPES = [s.WIRE_TYPES.VARINT, s.WIRE_TYPES.BITS64, s.WIRE_TYPES.BITS32]),
          (s.TYPES = {
            int32: {
              name: "int32",
              wireType: s.WIRE_TYPES.VARINT,
              defaultValue: 0
            },
            uint32: {
              name: "uint32",
              wireType: s.WIRE_TYPES.VARINT,
              defaultValue: 0
            },
            sint32: {
              name: "sint32",
              wireType: s.WIRE_TYPES.VARINT,
              defaultValue: 0
            },
            int64: {
              name: "int64",
              wireType: s.WIRE_TYPES.VARINT,
              defaultValue: s.Long ? s.Long.ZERO : void 0
            },
            uint64: {
              name: "uint64",
              wireType: s.WIRE_TYPES.VARINT,
              defaultValue: s.Long ? s.Long.UZERO : void 0
            },
            sint64: {
              name: "sint64",
              wireType: s.WIRE_TYPES.VARINT,
              defaultValue: s.Long ? s.Long.ZERO : void 0
            },
            bool: {
              name: "bool",
              wireType: s.WIRE_TYPES.VARINT,
              defaultValue: !1
            },
            double: {
              name: "double",
              wireType: s.WIRE_TYPES.BITS64,
              defaultValue: 0
            },
            string: {
              name: "string",
              wireType: s.WIRE_TYPES.LDELIM,
              defaultValue: ""
            },
            bytes: {
              name: "bytes",
              wireType: s.WIRE_TYPES.LDELIM,
              defaultValue: null
            },
            fixed32: {
              name: "fixed32",
              wireType: s.WIRE_TYPES.BITS32,
              defaultValue: 0
            },
            sfixed32: {
              name: "sfixed32",
              wireType: s.WIRE_TYPES.BITS32,
              defaultValue: 0
            },
            fixed64: {
              name: "fixed64",
              wireType: s.WIRE_TYPES.BITS64,
              defaultValue: s.Long ? s.Long.UZERO : void 0
            },
            sfixed64: {
              name: "sfixed64",
              wireType: s.WIRE_TYPES.BITS64,
              defaultValue: s.Long ? s.Long.ZERO : void 0
            },
            float: {
              name: "float",
              wireType: s.WIRE_TYPES.BITS32,
              defaultValue: 0
            },
            enum: {
              name: "enum",
              wireType: s.WIRE_TYPES.VARINT,
              defaultValue: 0
            },
            message: {
              name: "message",
              wireType: s.WIRE_TYPES.LDELIM,
              defaultValue: null
            },
            group: {
              name: "group",
              wireType: s.WIRE_TYPES.STARTGROUP,
              defaultValue: null
            }
          }),
          (s.MAP_KEY_TYPES = [
            s.TYPES.int32,
            s.TYPES.sint32,
            s.TYPES.sfixed32,
            s.TYPES.uint32,
            s.TYPES.fixed32,
            s.TYPES.int64,
            s.TYPES.sint64,
            s.TYPES.sfixed64,
            s.TYPES.uint64,
            s.TYPES.fixed64,
            s.TYPES.bool,
            s.TYPES.string,
            s.TYPES.bytes
          ]),
          (s.ID_MIN = 1),
          (s.ID_MAX = 536870911),
          (s.convertFieldsToCamelCase = !1),
          (s.populateAccessors = !0),
          (s.populateDefaults = !0),
          (s.Util =
            (((o = {}).IS_NODE = !("object" !== (void 0 === e ? "undefined" : b()(e)) || "[object process]" !== e + "" || e.browser)),
            (o.XHR = function () {
              for (
                var e = [
                    function () {
                      return new XMLHttpRequest()
                    },
                    function () {
                      return new ActiveXObject("Msxml2.XMLHTTP")
                    },
                    function () {
                      return new ActiveXObject("Msxml3.XMLHTTP")
                    },
                    function () {
                      return new ActiveXObject("Microsoft.XMLHTTP")
                    }
                  ],
                  t = null,
                  i = 0;
                i < e.length;
                i++
              ) {
                try {
                  t = e[i]()
                } catch (e) {
                  continue
                }
                break
              }
              if (!t) throw Error("XMLHttpRequest is not supported")
              return t
            }),
            (o.fetch = function (e, t) {
              if ((t && "function" !== typeof t && (t = null), o.IS_NODE)) {
                var r = i(192)
                if (t)
                  r.readFile(e, function (e, i) {
                    t(e ? null : "" + i)
                  })
                else
                  try {
                    return r.readFileSync(e)
                  } catch (e) {
                    return null
                  }
              } else {
                var n = o.XHR()
                if (
                  (n.open("GET", e, !!t),
                  n.setRequestHeader("Accept", "text/plain"),
                  "function" === typeof n.overrideMimeType && n.overrideMimeType("text/plain"),
                  !t)
                )
                  return n.send(null), 200 === n.status || (0 === n.status && "string" === typeof n.responseText) ? n.responseText : null
                ;(n.onreadystatechange = function () {
                  4 === n.readyState && (200 === n.status || (0 === n.status && "string" === typeof n.responseText) ? t(n.responseText) : t(null))
                }),
                  4 !== n.readyState && n.send(null)
              }
            }),
            (o.toCamelCase = function (e) {
              return e.replace(/_([a-zA-Z])/g, function (e, t) {
                return t.toUpperCase()
              })
            }),
            o)),
          (s.Lang = {
            DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
            RULE: /^(?:required|optional|repeated|map)$/,
            TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
            NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
            TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
            TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
            FQTYPEREF: /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,
            NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
            NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
            NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
            NUMBER_OCT: /^0[0-7]+$/,
            NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
            BOOL: /^(?:true|false)$/i,
            ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
            NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
            WHITESPACE: /\s/,
            STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
            STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
            STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
          }),
          (s.DotProto = (function (e, t) {
            function i(e, i) {
              var r = -1,
                n = 1
              if (("-" === e.charAt(0) && ((n = -1), (e = e.substring(1))), t.NUMBER_DEC.test(e))) r = p()(e)
              else if (t.NUMBER_HEX.test(e)) r = p()(e.substring(2), 16)
              else {
                if (!t.NUMBER_OCT.test(e)) throw Error("illegal id value: " + (0 > n ? "-" : "") + e)
                r = p()(e.substring(1), 8)
              }
              if (((r = (n * r) | 0), !i && 0 > r)) throw Error("illegal id value: " + (0 > n ? "-" : "") + e)
              return r
            }
            function r(e) {
              var i = 1
              if (("-" === e.charAt(0) && ((i = -1), (e = e.substring(1))), t.NUMBER_DEC.test(e))) return i * p()(e, 10)
              if (t.NUMBER_HEX.test(e)) return i * p()(e.substring(2), 16)
              if (t.NUMBER_OCT.test(e)) return i * p()(e.substring(1), 8)
              if ("inf" === e) return (1 / 0) * i
              if ("nan" === e) return NaN
              if (t.NUMBER_FLT.test(e)) return i * d()(e)
              throw Error("illegal number value: " + (0 > i ? "-" : "") + e)
            }
            function n(e, t, i) {
              void 0 === e[t] ? (e[t] = i) : (h()(e[t]) || (e[t] = [e[t]]), e[t].push(i))
            }
            var o = {},
              a = function (e) {
                ;(this.source = e + ""), (this.index = 0), (this.line = 1), (this.stack = []), (this._stringOpen = null)
              }
            ;((s = a.prototype)._readString = function () {
              var e = '"' === this._stringOpen ? t.STRING_DQ : t.STRING_SQ
              e.lastIndex = this.index - 1
              var i = e.exec(this.source)
              if (!i) throw Error("unterminated string")
              return (this.index = e.lastIndex), this.stack.push(this._stringOpen), (this._stringOpen = null), i[1]
            }),
              (s.next = function () {
                if (0 < this.stack.length) return this.stack.shift()
                if (this.index >= this.source.length) return null
                if (null !== this._stringOpen) return this._readString()
                var e, i
                do {
                  for (e = !1; t.WHITESPACE.test((i = this.source.charAt(this.index))); )
                    if (("\n" === i && ++this.line, ++this.index === this.source.length)) return null
                  if ("/" === this.source.charAt(this.index))
                    if ((++this.index, "/" === this.source.charAt(this.index))) {
                      for (; "\n" !== this.source.charAt(++this.index); ) if (this.index === this.source.length) return null
                      ++this.index, ++this.line, (e = !0)
                    } else {
                      if ("*" !== (i = this.source.charAt(this.index))) return "/"
                      do {
                        if (("\n" === i && ++this.line, ++this.index === this.source.length)) return null
                        ;(e = i), (i = this.source.charAt(this.index))
                      } while ("*" !== e || "/" !== i)
                      ++this.index, (e = !0)
                    }
                } while (e)
                if (this.index === this.source.length) return null
                if (((i = this.index), (t.DELIM.lastIndex = 0), !t.DELIM.test(this.source.charAt(i++))))
                  for (; i < this.source.length && !t.DELIM.test(this.source.charAt(i)); ) ++i
                return ('"' !== (i = this.source.substring(this.index, (this.index = i))) && "'" !== i) || (this._stringOpen = i), i
              }),
              (s.peek = function () {
                if (0 === this.stack.length) {
                  var e = this.next()
                  if (null === e) return null
                  this.stack.push(e)
                }
                return this.stack[0]
              }),
              (s.skip = function (e) {
                var t = this.next()
                if (t !== e) throw Error("illegal '" + t + "', '" + e + "' expected")
              }),
              (s.omit = function (e) {
                return this.peek() === e && (this.next(), !0)
              }),
              (s.toString = function () {
                return "Tokenizer (" + this.index + "/" + this.source.length + " at line " + this.line + ")"
              }),
              (o.Tokenizer = a)
            var s,
              x = function (e) {
                ;(this.tn = new a(e)), (this.proto3 = !1)
              }
            return (
              ((s = x.prototype).parse = function () {
                var e,
                  i,
                  r = {
                    name: "[ROOT]",
                    package: null,
                    messages: [],
                    enums: [],
                    imports: [],
                    options: {},
                    services: []
                  },
                  n = !0
                try {
                  for (; (e = this.tn.next()); )
                    switch (e) {
                      case "package":
                        if (!n || null !== r.package) throw Error("unexpected 'package'")
                        if (((e = this.tn.next()), !t.TYPEREF.test(e))) throw Error("illegal package name: " + e)
                        this.tn.skip(";"), (r.package = e)
                        break
                      case "import":
                        if (!n) throw Error("unexpected 'import'")
                        ;("public" === (e = this.tn.peek()) || (i = "weak" === e)) && this.tn.next(),
                          (e = this._readString()),
                          this.tn.skip(";"),
                          i || r.imports.push(e)
                        break
                      case "syntax":
                        if (!n) throw Error("unexpected 'syntax'")
                        this.tn.skip("="), "proto3" === (r.syntax = this._readString()) && (this.proto3 = !0), this.tn.skip(";")
                        break
                      case "message":
                        this._parseMessage(r, null), (n = !1)
                        break
                      case "enum":
                        this._parseEnum(r), (n = !1)
                        break
                      case "option":
                        this._parseOption(r)
                        break
                      case "service":
                        this._parseService(r)
                        break
                      case "extend":
                        this._parseExtend(r)
                        break
                      default:
                        throw Error("unexpected '" + e + "'")
                    }
                } catch (e) {
                  throw ((e.message = "Parse error at line " + this.tn.line + ": " + e.message), e)
                }
                return delete r.name, r
              }),
              (x.parse = function (e) {
                return new x(e).parse()
              }),
              (s._readString = function () {
                var e,
                  t = ""
                do {
                  if ("'" !== (e = this.tn.next()) && '"' !== e) throw Error("illegal string delimiter: " + e)
                  ;(t += this.tn.next()), this.tn.skip(e), (e = this.tn.peek())
                } while ('"' === e || '"' === e)
                return t
              }),
              (s._readValue = function (e) {
                var i = this.tn.peek()
                if ('"' === i || "'" === i) return this._readString()
                if ((this.tn.next(), t.NUMBER.test(i))) return r(i)
                if (t.BOOL.test(i)) return "true" === i.toLowerCase()
                if (e && t.TYPEREF.test(i)) return i
                throw Error("illegal value: " + i)
              }),
              (s._parseOption = function (e, i) {
                var r = this.tn.next(),
                  n = !1
                if (("(" === r && ((n = !0), (r = this.tn.next())), !t.TYPEREF.test(r))) throw Error("illegal option name: " + r)
                var o = r
                n && (this.tn.skip(")"), (o = "(" + o + ")"), (r = this.tn.peek()), t.FQTYPEREF.test(r) && ((o += r), this.tn.next())),
                  this.tn.skip("="),
                  this._parseOptionValue(e, o),
                  i || this.tn.skip(";")
              }),
              (s._parseOptionValue = function (e, i) {
                var r = this.tn.peek()
                if ("{" !== r) n(e.options, i, this._readValue(!0))
                else
                  for (this.tn.skip("{"); "}" !== (r = this.tn.next()); ) {
                    if (!t.NAME.test(r)) throw Error("illegal option name: " + i + "." + r)
                    this.tn.omit(":") ? n(e.options, i + "." + r, this._readValue(!0)) : this._parseOptionValue(e, i + "." + r)
                  }
              }),
              (s._parseService = function (e) {
                var i = this.tn.next()
                if (!t.NAME.test(i)) throw Error("illegal service name at line " + this.tn.line + ": " + i)
                var r = {
                  name: i,
                  rpc: {},
                  options: {}
                }
                for (this.tn.skip("{"); "}" !== (i = this.tn.next()); )
                  if ("option" === i) this._parseOption(r)
                  else {
                    if ("rpc" !== i) throw Error("illegal service token: " + i)
                    this._parseServiceRPC(r)
                  }
                this.tn.omit(";"), e.services.push(r)
              }),
              (s._parseServiceRPC = function (e) {
                var i = this.tn.next()
                if (!t.NAME.test(i)) throw Error("illegal rpc service method name: " + i)
                var r = i,
                  n = {
                    request: null,
                    response: null,
                    request_stream: !1,
                    response_stream: !1,
                    options: {}
                  }
                if (
                  (this.tn.skip("("),
                  "stream" === (i = this.tn.next()).toLowerCase() && ((n.request_stream = !0), (i = this.tn.next())),
                  !t.TYPEREF.test(i))
                )
                  throw Error("illegal rpc service request type: " + i)
                if (((n.request = i), this.tn.skip(")"), "returns" !== (i = this.tn.next()).toLowerCase()))
                  throw Error("illegal rpc service request type delimiter: " + i)
                if (
                  (this.tn.skip("("),
                  "stream" === (i = this.tn.next()).toLowerCase() && ((n.response_stream = !0), (i = this.tn.next())),
                  (n.response = i),
                  this.tn.skip(")"),
                  "{" === (i = this.tn.peek()))
                ) {
                  for (this.tn.next(); "}" !== (i = this.tn.next()); ) {
                    if ("option" !== i) throw Error("illegal rpc service token: " + i)
                    this._parseOption(n)
                  }
                  this.tn.omit(";")
                } else this.tn.skip(";")
                void 0 === e.rpc && (e.rpc = {}), (e.rpc[r] = n)
              }),
              (s._parseMessage = function (e, r) {
                var n = !!r,
                  o = this.tn.next(),
                  a = {
                    name: "",
                    fields: [],
                    enums: [],
                    messages: [],
                    options: {},
                    services: [],
                    oneofs: {}
                  }
                if (!t.NAME.test(o)) throw Error("illegal " + (n ? "group" : "message") + " name: " + o)
                for (
                  a.name = o,
                    n && (this.tn.skip("="), (r.id = i(this.tn.next())), (a.isGroup = !0)),
                    "[" === (o = this.tn.peek()) && r && this._parseFieldOptions(r),
                    this.tn.skip("{");
                  "}" !== (o = this.tn.next());

                )
                  if (t.RULE.test(o)) this._parseMessageField(a, o)
                  else if ("oneof" === o) this._parseMessageOneOf(a)
                  else if ("enum" === o) this._parseEnum(a)
                  else if ("message" === o) this._parseMessage(a)
                  else if ("option" === o) this._parseOption(a)
                  else if ("service" === o) this._parseService(a)
                  else if ("extensions" === o)
                    a.hasOwnProperty("extensions")
                      ? (a.extensions = a.extensions.concat(this._parseExtensionRanges()))
                      : (a.extensions = this._parseExtensionRanges())
                  else if ("reserved" === o) this._parseIgnored()
                  else if ("extend" === o) this._parseExtend(a)
                  else {
                    if (!t.TYPEREF.test(o)) throw Error("illegal message token: " + o)
                    if (!this.proto3) throw Error("illegal field rule: " + o)
                    this._parseMessageField(a, "optional", o)
                  }
                return this.tn.omit(";"), e.messages.push(a), a
              }),
              (s._parseIgnored = function () {
                for (; ";" !== this.tn.peek(); ) this.tn.next()
                this.tn.skip(";")
              }),
              (s._parseMessageField = function (e, r, n) {
                if (!t.RULE.test(r)) throw Error("illegal message field rule: " + r)
                var o = {
                  rule: r,
                  type: "",
                  name: "",
                  options: {},
                  id: 0
                }
                if ("map" === r) {
                  if (n) throw Error("illegal type: " + n)
                  if ((this.tn.skip("<"), (r = this.tn.next()), !t.TYPE.test(r) && !t.TYPEREF.test(r)))
                    throw Error("illegal message field type: " + r)
                  if (((o.keytype = r), this.tn.skip(","), (r = this.tn.next()), !t.TYPE.test(r) && !t.TYPEREF.test(r)))
                    throw Error("illegal message field: " + r)
                  if (((o.type = r), this.tn.skip(">"), (r = this.tn.next()), !t.NAME.test(r))) throw Error("illegal message field name: " + r)
                  ;(o.name = r),
                    this.tn.skip("="),
                    (o.id = i(this.tn.next())),
                    "[" === (r = this.tn.peek()) && this._parseFieldOptions(o),
                    this.tn.skip(";")
                } else if ("group" === (n = void 0 !== n ? n : this.tn.next())) {
                  if (((r = this._parseMessage(e, o)), !/^[A-Z]/.test(r.name))) throw Error("illegal group name: " + r.name)
                  ;(o.type = r.name), (o.name = r.name.toLowerCase()), this.tn.omit(";")
                } else {
                  if (!t.TYPE.test(n) && !t.TYPEREF.test(n)) throw Error("illegal message field type: " + n)
                  if (((o.type = n), (r = this.tn.next()), !t.NAME.test(r))) throw Error("illegal message field name: " + r)
                  ;(o.name = r),
                    this.tn.skip("="),
                    (o.id = i(this.tn.next())),
                    "[" === (r = this.tn.peek()) && this._parseFieldOptions(o),
                    this.tn.skip(";")
                }
                return e.fields.push(o), o
              }),
              (s._parseMessageOneOf = function (e) {
                var i = this.tn.next()
                if (!t.NAME.test(i)) throw Error("illegal oneof name: " + i)
                var r = i,
                  n = []
                for (this.tn.skip("{"); "}" !== (i = this.tn.next()); ) ((i = this._parseMessageField(e, "optional", i)).oneof = r), n.push(i.id)
                this.tn.omit(";"), (e.oneofs[r] = n)
              }),
              (s._parseFieldOptions = function (e) {
                this.tn.skip("[")
                for (var t = !0; "]" !== this.tn.peek(); ) t || this.tn.skip(","), this._parseOption(e, !0), (t = !1)
                this.tn.next()
              }),
              (s._parseEnum = function (e) {
                var r = {
                    name: "",
                    values: [],
                    options: {}
                  },
                  n = this.tn.next()
                if (!t.NAME.test(n)) throw Error("illegal name: " + n)
                for (r.name = n, this.tn.skip("{"); "}" !== (n = this.tn.next()); )
                  if ("option" === n) this._parseOption(r)
                  else {
                    if (!t.NAME.test(n)) throw Error("illegal name: " + n)
                    this.tn.skip("=")
                    var o = {
                      name: n,
                      id: i(this.tn.next(), !0)
                    }
                    "[" === (n = this.tn.peek()) &&
                      this._parseFieldOptions({
                        options: {}
                      }),
                      this.tn.skip(";"),
                      r.values.push(o)
                  }
                this.tn.omit(";"), e.enums.push(r)
              }),
              (s._parseExtensionRanges = function () {
                var t,
                  i,
                  n = []
                do {
                  for (i = []; ; ) {
                    switch ((t = this.tn.next())) {
                      case "min":
                        t = e.ID_MIN
                        break
                      case "max":
                        t = e.ID_MAX
                        break
                      default:
                        t = r(t)
                    }
                    if ((i.push(t), 2 === i.length)) break
                    if ("to" !== this.tn.peek()) {
                      i.push(t)
                      break
                    }
                    this.tn.next()
                  }
                  n.push(i)
                } while (this.tn.omit(","))
                return this.tn.skip(";"), n
              }),
              (s._parseExtend = function (e) {
                var i = this.tn.next()
                if (!t.TYPEREF.test(i)) throw Error("illegal extend reference: " + i)
                var r = {
                  ref: i,
                  fields: []
                }
                for (this.tn.skip("{"); "}" !== (i = this.tn.next()); )
                  if (t.RULE.test(i)) this._parseMessageField(r, i)
                  else {
                    if (!t.TYPEREF.test(i)) throw Error("illegal extend token: " + i)
                    if (!this.proto3) throw Error("illegal field rule: " + i)
                    this._parseMessageField(r, "optional", i)
                  }
                return this.tn.omit(";"), e.messages.push(r), r
              }),
              (s.toString = function () {
                return "Parser at line " + this.tn.line
              }),
              (o.Parser = x),
              o
            )
          })(s, s.Lang)),
          (s.Reflect = (function (e) {
            function i(t, i) {
              if (
                t &&
                "number" === typeof t.low &&
                "number" === typeof t.high &&
                "boolean" === typeof t.unsigned &&
                t.low === t.low &&
                t.high === t.high
              )
                return new e.Long(t.low, t.high, void 0 === i ? t.unsigned : i)
              if ("string" === typeof t) return e.Long.fromString(t, i || !1, 10)
              if ("number" === typeof t) return e.Long.fromNumber(t, i || !1)
              throw Error("not convertible to Long")
            }
            function r(t, i) {
              var n = 7 & (o = i.readVarint32()),
                o = o >>> 3
              switch (n) {
                case e.WIRE_TYPES.VARINT:
                  do {
                    o = i.readUint8()
                  } while (128 === (128 & o))
                  break
                case e.WIRE_TYPES.BITS64:
                  i.offset += 8
                  break
                case e.WIRE_TYPES.LDELIM:
                  ;(o = i.readVarint32()), (i.offset += o)
                  break
                case e.WIRE_TYPES.STARTGROUP:
                  r(o, i)
                  break
                case e.WIRE_TYPES.ENDGROUP:
                  if (o === t) return !1
                  throw Error("Illegal GROUPEND after unknown group: " + o + " (" + t + " expected)")
                case e.WIRE_TYPES.BITS32:
                  i.offset += 4
                  break
                default:
                  throw Error("Illegal wire type in unknown group " + t + ": " + n)
              }
              return !0
            }
            var o = {},
              s = function (e, t, i) {
                ;(this.builder = e), (this.parent = t), (this.name = i)
              }
            ;((l = s.prototype).fqn = function () {
              for (var e = this.name, t = this; ; ) {
                if (null === (t = t.parent)) break
                e = t.name + "." + e
              }
              return e
            }),
              (l.toString = function (e) {
                return (e ? this.className + " " : "") + this.fqn()
              }),
              (l.build = function () {
                throw Error(this.toString(!0) + " cannot be built directly")
              }),
              (o.T = s)
            var l,
              u = function (e, t, i, r, n) {
                s.call(this, e, t, i), (this.className = "Namespace"), (this.children = []), (this.options = r || {}), (this.syntax = n || "proto2")
              }
            ;((l = u.prototype = c()(s.prototype)).getChildren = function (e) {
              if (null === (e = e || null)) return this.children.slice()
              for (var t = [], i = 0, r = this.children.length; i < r; ++i) this.children[i] instanceof e && t.push(this.children[i])
              return t
            }),
              (l.addChild = function (e) {
                var t
                if ((t = this.getChild(e.name)))
                  if (t instanceof g.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName
                  else {
                    if (!(e instanceof g.Field && e.name !== e.originalName && null === this.getChild(e.originalName)))
                      throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name)
                    e.name = e.originalName
                  }
                this.children.push(e)
              }),
              (l.getChild = function (e) {
                for (var t = "number" === typeof e ? "id" : "name", i = 0, r = this.children.length; i < r; ++i)
                  if (this.children[i][t] === e) return this.children[i]
                return null
              }),
              (l.resolve = function (e, t) {
                var i = "string" === typeof e ? e.split(".") : e,
                  r = this,
                  n = 0
                if ("" === i[n]) {
                  for (; null !== r.parent; ) r = r.parent
                  n++
                }
                do {
                  do {
                    if (!(r instanceof o.Namespace)) {
                      r = null
                      break
                    }
                    if (!((r = r.getChild(i[n])) && r instanceof o.T) || (t && !(r instanceof o.Namespace))) {
                      r = null
                      break
                    }
                    n++
                  } while (n < i.length)
                  if (null !== r) break
                  if (null !== this.parent) return this.parent.resolve(e, t)
                } while (null !== r)
                return r
              }),
              (l.qn = function (e) {
                var t = [],
                  i = e
                do {
                  t.unshift(i.name), (i = i.parent)
                } while (null !== i)
                for (i = 1; i <= t.length; i++) {
                  var r = t.slice(t.length - i)
                  if (e === this.resolve(r, e instanceof o.Namespace)) return r.join(".")
                }
                return e.fqn()
              }),
              (l.build = function () {
                for (var e, t = {}, i = this.children, r = 0, n = i.length; r < n; ++r) (e = i[r]) instanceof u && (t[e.name] = e.build())
                return (
                  x.a &&
                    x()(t, "$options", {
                      value: this.buildOpt()
                    }),
                  t
                )
              }),
              (l.buildOpt = function () {
                for (var e = {}, t = a()(this.options), i = 0, r = t.length; i < r; ++i) e[t[i]] = this.options[t[i]]
                return e
              }),
              (l.getOption = function (e) {
                return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null
              }),
              (o.Namespace = u)
            var f = function (t, i, r, n, o) {
                if (
                  ((this.type = t),
                  (this.resolvedType = i),
                  (this.isMapKey = r),
                  (this.syntax = n),
                  (this.name = o),
                  r && 0 > e.MAP_KEY_TYPES.indexOf(t))
                )
                  throw Error("Invalid map key type: " + t.name)
              },
              d = f.prototype
            ;(f.defaultFieldValue = function (i) {
              if (("string" === typeof i && (i = e.TYPES[i]), void 0 === i.defaultValue))
                throw Error("default value for type " + i.name + " is not supported")
              return i === e.TYPES.bytes ? new t(0) : i.defaultValue
            }),
              (d.toString = function () {
                return (this.name || "") + (this.isMapKey ? "map" : "value") + " element"
              }),
              (d.verifyValue = function (r) {
                function n(e, t) {
                  throw Error("Illegal value for " + o.toString(!0) + " of type " + o.type.name + ": " + e + " (" + t + ")")
                }
                var o = this
                switch (this.type) {
                  case e.TYPES.int32:
                  case e.TYPES.sint32:
                  case e.TYPES.sfixed32:
                    return ("number" !== typeof r || (r === r && 0 !== r % 1)) && n(b()(r), "not an integer"), 4294967295 < r ? 0 | r : r
                  case e.TYPES.uint32:
                  case e.TYPES.fixed32:
                    return ("number" !== typeof r || (r === r && 0 !== r % 1)) && n(b()(r), "not an integer"), 0 > r ? r >>> 0 : r
                  case e.TYPES.int64:
                  case e.TYPES.sint64:
                  case e.TYPES.sfixed64:
                    if (e.Long)
                      try {
                        return i(r, !1)
                      } catch (e) {
                        n(b()(r), e.message)
                      }
                    else n(b()(r), "requires Long.js")
                  case e.TYPES.uint64:
                  case e.TYPES.fixed64:
                    if (e.Long)
                      try {
                        return i(r, !0)
                      } catch (e) {
                        n(b()(r), e.message)
                      }
                    else n(b()(r), "requires Long.js")
                  case e.TYPES.bool:
                    return "boolean" !== typeof r && n(b()(r), "not a boolean"), r
                  case e.TYPES.float:
                  case e.TYPES.double:
                    return "number" !== typeof r && n(b()(r), "not a number"), r
                  case e.TYPES.string:
                    return "string" === typeof r || (r && r instanceof String) || n(b()(r), "not a string"), "" + r
                  case e.TYPES.bytes:
                    return t.isByteBuffer(r) ? r : t.wrap(r, "base64")
                  case e.TYPES.enum:
                    for (var a = this.resolvedType.getChildren(e.Reflect.Enum.Value), s = 0; s < a.length; s++)
                      if (a[s].name === r || a[s].id === r) return a[s].id
                    if ("proto3" === this.syntax)
                      return (
                        ("number" !== typeof r || (r === r && 0 !== r % 1)) && n(b()(r), "not an integer"),
                        (4294967295 < r || 0 > r) && n(b()(r), "not in range for uint32"),
                        r
                      )
                    n(r, "not a valid enum value")
                  case e.TYPES.group:
                  case e.TYPES.message:
                    if (((r && "object" === b()(r)) || n(b()(r), "object expected"), r instanceof this.resolvedType.clazz)) return r
                    if (r instanceof e.Builder.Message) {
                      a = {}
                      for (s in r) r.hasOwnProperty(s) && (a[s] = r[s])
                      r = a
                    }
                    return new this.resolvedType.clazz(r)
                }
                throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + r + " (undefined type " + this.type + ")")
              }),
              (d.calculateLength = function (i, r) {
                if (null === r) return 0
                var n
                switch (this.type) {
                  case e.TYPES.int32:
                    return 0 > r ? t.calculateVarint64(r) : t.calculateVarint32(r)
                  case e.TYPES.uint32:
                    return t.calculateVarint32(r)
                  case e.TYPES.sint32:
                    return t.calculateVarint32(t.zigZagEncode32(r))
                  case e.TYPES.fixed32:
                  case e.TYPES.sfixed32:
                  case e.TYPES.float:
                    return 4
                  case e.TYPES.int64:
                  case e.TYPES.uint64:
                    return t.calculateVarint64(r)
                  case e.TYPES.sint64:
                    return t.calculateVarint64(t.zigZagEncode64(r))
                  case e.TYPES.fixed64:
                  case e.TYPES.sfixed64:
                    return 8
                  case e.TYPES.bool:
                    return 1
                  case e.TYPES.enum:
                    return t.calculateVarint32(r)
                  case e.TYPES.double:
                    return 8
                  case e.TYPES.string:
                    return (n = t.calculateUTF8Bytes(r)), t.calculateVarint32(n) + n
                  case e.TYPES.bytes:
                    if (0 > r.remaining()) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining")
                    return t.calculateVarint32(r.remaining()) + r.remaining()
                  case e.TYPES.message:
                    return (n = this.resolvedType.calculate(r)), t.calculateVarint32(n) + n
                  case e.TYPES.group:
                    return (n = this.resolvedType.calculate(r)) + t.calculateVarint32((i << 3) | e.WIRE_TYPES.ENDGROUP)
                }
                throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)")
              }),
              (d.encodeValue = function (i, r, n) {
                if (null === r) return n
                switch (this.type) {
                  case e.TYPES.int32:
                    0 > r ? n.writeVarint64(r) : n.writeVarint32(r)
                    break
                  case e.TYPES.uint32:
                    n.writeVarint32(r)
                    break
                  case e.TYPES.sint32:
                    n.writeVarint32ZigZag(r)
                    break
                  case e.TYPES.fixed32:
                    n.writeUint32(r)
                    break
                  case e.TYPES.sfixed32:
                    n.writeInt32(r)
                    break
                  case e.TYPES.int64:
                  case e.TYPES.uint64:
                    n.writeVarint64(r)
                    break
                  case e.TYPES.sint64:
                    n.writeVarint64ZigZag(r)
                    break
                  case e.TYPES.fixed64:
                    n.writeUint64(r)
                    break
                  case e.TYPES.sfixed64:
                    n.writeInt64(r)
                    break
                  case e.TYPES.bool:
                    "string" === typeof r ? n.writeVarint32("false" === r.toLowerCase() ? 0 : !!r) : n.writeVarint32(r ? 1 : 0)
                    break
                  case e.TYPES.enum:
                    n.writeVarint32(r)
                    break
                  case e.TYPES.float:
                    n.writeFloat32(r)
                    break
                  case e.TYPES.double:
                    n.writeFloat64(r)
                    break
                  case e.TYPES.string:
                    n.writeVString(r)
                    break
                  case e.TYPES.bytes:
                    if (0 > r.remaining()) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining")
                    ;(i = r.offset), n.writeVarint32(r.remaining()), n.append(r), (r.offset = i)
                    break
                  case e.TYPES.message:
                    ;(i = new t().LE()), this.resolvedType.encode(r, i), n.writeVarint32(i.offset), n.append(i.flip())
                    break
                  case e.TYPES.group:
                    this.resolvedType.encode(r, n), n.writeVarint32((i << 3) | e.WIRE_TYPES.ENDGROUP)
                    break
                  default:
                    throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)")
                }
                return n
              }),
              (d.decode = function (t, i, r) {
                if (i !== this.type.wireType) throw Error("Unexpected wire type for element")
                switch (this.type) {
                  case e.TYPES.int32:
                    return 0 | t.readVarint32()
                  case e.TYPES.uint32:
                    return t.readVarint32() >>> 0
                  case e.TYPES.sint32:
                    return 0 | t.readVarint32ZigZag()
                  case e.TYPES.fixed32:
                    return t.readUint32() >>> 0
                  case e.TYPES.sfixed32:
                    return 0 | t.readInt32()
                  case e.TYPES.int64:
                    return t.readVarint64()
                  case e.TYPES.uint64:
                    return t.readVarint64().toUnsigned()
                  case e.TYPES.sint64:
                    return t.readVarint64ZigZag()
                  case e.TYPES.fixed64:
                    return t.readUint64()
                  case e.TYPES.sfixed64:
                    return t.readInt64()
                  case e.TYPES.bool:
                    return !!t.readVarint32()
                  case e.TYPES.enum:
                    return t.readVarint32()
                  case e.TYPES.float:
                    return t.readFloat()
                  case e.TYPES.double:
                    return t.readDouble()
                  case e.TYPES.string:
                    return t.readVString()
                  case e.TYPES.bytes:
                    if (((r = t.readVarint32()), t.remaining() < r))
                      throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + r + " required but got only " + t.remaining())
                    return ((i = t.clone()).limit = i.offset + r), (t.offset += r), i
                  case e.TYPES.message:
                    return (r = t.readVarint32()), this.resolvedType.decode(t, r)
                  case e.TYPES.group:
                    return this.resolvedType.decode(t, -1, r)
                }
                throw Error("[INTERNAL] Illegal decode type")
              }),
              (d.valueFromString = function (i) {
                if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element")
                switch (this.type) {
                  case e.TYPES.int32:
                  case e.TYPES.sint32:
                  case e.TYPES.sfixed32:
                  case e.TYPES.uint32:
                  case e.TYPES.fixed32:
                    return this.verifyValue(p()(i))
                  case e.TYPES.int64:
                  case e.TYPES.sint64:
                  case e.TYPES.sfixed64:
                  case e.TYPES.uint64:
                  case e.TYPES.fixed64:
                    return this.verifyValue(i)
                  case e.TYPES.bool:
                    return "true" === i
                  case e.TYPES.string:
                    return this.verifyValue(i)
                  case e.TYPES.bytes:
                    return t.fromBinary(i)
                }
              }),
              (d.valueToString = function (t) {
                if (!this.isMapKey) throw Error("valueToString() called on non-map-key element")
                return this.type === e.TYPES.bytes ? t.toString("binary") : t.toString()
              }),
              (o.Element = f)
            var g = function (e, t, i, r, n, o) {
              u.call(this, e, t, i, r, o),
                (this.className = "Message"),
                (this.extensions = void 0),
                (this.clazz = null),
                (this.isGroup = !!n),
                (this._fieldsByName = this._fieldsById = this._fields = null)
            }
            ;((d = g.prototype = c()(u.prototype)).build = function (i) {
              if (this.clazz && !i) return this.clazz
              ;(i = (function (e, i) {
                function r(i, n, o, a) {
                  if (null === i || "object" !== b()(i)) {
                    if (a && a instanceof e.Reflect.Enum) if (null !== (c = e.Reflect.Enum.getName(a.object, i))) return c
                    return i
                  }
                  if (t.isByteBuffer(i)) return n ? i.toBase64() : i.toBuffer()
                  if (e.Long.isLong(i)) return o ? i.toString() : e.Long.fromValue(i)
                  var s
                  if (h()(i))
                    return (
                      (s = []),
                      i.forEach(function (e, t) {
                        s[t] = r(e, n, o, a)
                      }),
                      s
                    )
                  if (((s = {}), i instanceof e.Map)) {
                    for (var x = (c = i.entries()).next(); !x.done; x = c.next())
                      s[i.keyElem.valueToString(x.value[0])] = r(x.value[1], n, o, i.valueElem.resolvedType)
                    return s
                  }
                  var l,
                    c = i.$type
                  x = void 0
                  for (l in i) i.hasOwnProperty(l) && (c && (x = c.getChild(l)) ? (s[l] = r(i[l], n, o, x.resolvedType)) : (s[l] = r(i[l], n, o)))
                  return s
                }
                var o = i.getChildren(e.Reflect.Message.Field),
                  a = i.getChildren(e.Reflect.Message.OneOf),
                  s = function r(n, s) {
                    e.Builder.Message.call(this)
                    for (var x = 0, l = a.length; x < l; ++x) this[a[x].name] = null
                    for (x = 0, l = o.length; x < l; ++x) {
                      var c = o[x]
                      ;(this[c.name] = c.repeated ? [] : c.map ? new e.Map(c) : null),
                        (!c.required && "proto3" !== i.syntax) || null === c.defaultValue || (this[c.name] = c.defaultValue)
                    }
                    if (0 < arguments.length)
                      if (
                        1 !== arguments.length ||
                        null === n ||
                        "object" !== b()(n) ||
                        !("function" !== typeof n.encode || n instanceof r) ||
                        h()(n) ||
                        n instanceof e.Map ||
                        t.isByteBuffer(n) ||
                        n instanceof ArrayBuffer ||
                        (e.Long && n instanceof e.Long)
                      )
                        for (x = 0, l = arguments.length; x < l; ++x) void 0 !== (c = arguments[x]) && this.$set(o[x].name, c)
                      else this.$set(n)
                  },
                  l = (s.prototype = c()(e.Builder.Message.prototype))
                ;(l.add = function (t, r, n) {
                  var o = i._fieldsByName[t]
                  if (!n) {
                    if (!o) throw Error(this + "#" + t + " is undefined")
                    if (!(o instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: " + o.toString(!0))
                    if (!o.repeated) throw Error(this + "#" + t + " is not a repeated field")
                    r = o.verifyValue(r, !0)
                  }
                  return null === this[t] && (this[t] = []), this[t].push(r), this
                }),
                  (l.$add = l.add),
                  (l.set = function (t, r, n) {
                    if (t && "object" === b()(t)) {
                      for (var o in ((n = r), t)) t.hasOwnProperty(o) && void 0 !== (r = t[o]) && this.$set(o, r, n)
                      return this
                    }
                    if (((o = i._fieldsByName[t]), n)) this[t] = r
                    else {
                      if (!o) throw Error(this + "#" + t + " is not a field: undefined")
                      if (!(o instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: " + o.toString(!0))
                      this[o.name] = r = o.verifyValue(r)
                    }
                    return (
                      o &&
                        o.oneof &&
                        ((n = this[o.oneof.name]),
                        null !== r
                          ? (null !== n && n !== o.name && (this[n] = null), (this[o.oneof.name] = o.name))
                          : n === t && (this[o.oneof.name] = null)),
                      this
                    )
                  }),
                  (l.$set = l.set),
                  (l.get = function (t, r) {
                    if (r) return this[t]
                    var n = i._fieldsByName[t]
                    if (!(n && n instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: undefined")
                    if (!(n instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: " + n.toString(!0))
                    return this[n.name]
                  }),
                  (l.$get = l.get)
                for (var u = 0; u < o.length; u++) {
                  var f = o[u]
                  f instanceof e.Reflect.Message.ExtensionField ||
                    (i.builder.options.populateAccessors &&
                      (function (e) {
                        var t =
                            (t = e.originalName.replace(/(_[a-zA-Z])/g, function (e) {
                              return e.toUpperCase().replace("_", "")
                            }))
                              .substring(0, 1)
                              .toUpperCase() + t.substring(1),
                          r = e.originalName.replace(/([A-Z])/g, function (e) {
                            return "_" + e
                          }),
                          n = function (t, i) {
                            return (this[e.name] = i ? t : e.verifyValue(t)), this
                          },
                          o = function () {
                            return this[e.name]
                          }
                        null === i.getChild("set" + t) && (l["set" + t] = n),
                          null === i.getChild("set_" + r) && (l["set_" + r] = n),
                          null === i.getChild("get" + t) && (l["get" + t] = o),
                          null === i.getChild("get_" + r) && (l["get_" + r] = o)
                      })(f))
                }
                return (
                  (l.encode = function (e, r) {
                    "boolean" === typeof e && ((r = e), (e = void 0))
                    var n = !1
                    e || ((e = new t()), (n = !0))
                    var o = e.littleEndian
                    try {
                      return i.encode(this, e.LE(), r), (n ? e.flip() : e).LE(o)
                    } catch (t) {
                      throw (e.LE(o), t)
                    }
                  }),
                  (s.encode = function (e, t, i) {
                    return new s(e).encode(t, i)
                  }),
                  (l.calculate = function () {
                    return i.calculate(this)
                  }),
                  (l.encodeDelimited = function (e, r) {
                    var n = !1
                    e || ((e = new t()), (n = !0))
                    var o = new t().LE()
                    return i.encode(this, o, r).flip(), e.writeVarint32(o.remaining()), e.append(o), n ? e.flip() : e
                  }),
                  (l.encodeAB = function () {
                    try {
                      return this.encode().toArrayBuffer()
                    } catch (e) {
                      throw (e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e)
                    }
                  }),
                  (l.toArrayBuffer = l.encodeAB),
                  (l.encodeNB = function () {
                    try {
                      return this.encode().toBuffer()
                    } catch (e) {
                      throw (e.encoded && (e.encoded = e.encoded.toBuffer()), e)
                    }
                  }),
                  (l.toBuffer = l.encodeNB),
                  (l.encode64 = function () {
                    try {
                      return this.encode().toBase64()
                    } catch (e) {
                      throw (e.encoded && (e.encoded = e.encoded.toBase64()), e)
                    }
                  }),
                  (l.toBase64 = l.encode64),
                  (l.encodeHex = function () {
                    try {
                      return this.encode().toHex()
                    } catch (e) {
                      throw (e.encoded && (e.encoded = e.encoded.toHex()), e)
                    }
                  }),
                  (l.toHex = l.encodeHex),
                  (l.toRaw = function (e, t) {
                    return r(this, !!e, !!t, this.$type)
                  }),
                  (l.encodeJSON = function () {
                    return n()(r(this, !0, !0, this.$type))
                  }),
                  (s.decode = function (e, r, n) {
                    "string" === typeof r && ((n = r), (r = -1)),
                      "string" === typeof e ? (e = t.wrap(e, n || "base64")) : t.isByteBuffer(e) || (e = t.wrap(e)),
                      (n = e.littleEndian)
                    try {
                      var o = i.decode(e.LE(), r)
                      return e.LE(n), o
                    } catch (t) {
                      throw (e.LE(n), t)
                    }
                  }),
                  (s.decodeDelimited = function (e, r) {
                    if (("string" === typeof e ? (e = t.wrap(e, r || "base64")) : t.isByteBuffer(e) || (e = t.wrap(e)), 1 > e.remaining()))
                      return null
                    var n = e.offset,
                      o = e.readVarint32()
                    if (e.remaining() < o) return (e.offset = n), null
                    try {
                      var a = i.decode(e.slice(e.offset, e.offset + o).LE())
                      return (e.offset += o), a
                    } catch (t) {
                      throw ((e.offset += o), t)
                    }
                  }),
                  (s.decode64 = function (e) {
                    return s.decode(e, "base64")
                  }),
                  (s.decodeHex = function (e) {
                    return s.decode(e, "hex")
                  }),
                  (s.decodeJSON = function (e) {
                    return new s(JSON.parse(e))
                  }),
                  (l.toString = function () {
                    return i.toString()
                  }),
                  x.a &&
                    (x()(s, "$options", {
                      value: i.buildOpt()
                    }),
                    x()(l, "$options", {
                      value: s.$options
                    }),
                    x()(s, "$type", {
                      value: i
                    }),
                    x()(l, "$type", {
                      value: i
                    })),
                  s
                )
              })(e, this)),
                (this._fields = []),
                (this._fieldsById = {}),
                (this._fieldsByName = {})
              for (var r, o = 0, a = this.children.length; o < a; o++)
                if ((r = this.children[o]) instanceof v || r instanceof g || r instanceof y) {
                  if (i.hasOwnProperty(r.name))
                    throw Error(
                      "Illegal reflect child of " + this.toString(!0) + ": " + r.toString(!0) + " cannot override static property '" + r.name + "'"
                    )
                  i[r.name] = r.build()
                } else if (r instanceof g.Field) r.build(), this._fields.push(r), (this._fieldsById[r.id] = r), (this._fieldsByName[r.name] = r)
                else if (!(r instanceof g.OneOf || r instanceof C))
                  throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[o].toString(!0))
              return (this.clazz = i)
            }),
              (d.encode = function (e, t, i) {
                for (var r, n, o = null, a = 0, s = this._fields.length; a < s; ++a)
                  (n = e[(r = this._fields[a]).name]), r.required && null === n ? null === o && (o = r) : r.encode(i ? n : r.verifyValue(n), t, e)
                if (null !== o) throw (((e = Error("Missing at least one required field for " + this.toString(!0) + ": " + o)).encoded = t), e)
                return t
              }),
              (d.calculate = function (e) {
                for (var t, i, r = 0, n = 0, o = this._fields.length; n < o; ++n) {
                  if (((i = e[(t = this._fields[n]).name]), t.required && null === i))
                    throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t)
                  r += t.calculate(i, e)
                }
                return r
              }),
              (d.decode = function (t, i, n) {
                "number" !== typeof i && (i = -1)
                for (var o, a, s, x = t.offset, l = new this.clazz(); t.offset < x + i || (-1 === i && 0 < t.remaining()); ) {
                  if (((s = (o = t.readVarint32()) >>> 3), (a = 7 & o) === e.WIRE_TYPES.ENDGROUP)) {
                    if (s !== n)
                      throw Error(
                        "Illegal group end indicator for " + this.toString(!0) + ": " + s + " (" + (n ? n + " expected" : "not a group") + ")"
                      )
                    break
                  }
                  if ((o = this._fieldsById[s]))
                    o.repeated && !o.options.packed
                      ? l[o.name].push(o.decode(a, t))
                      : o.map
                      ? ((a = o.decode(a, t)), l[o.name].set(a[0], a[1]))
                      : ((l[o.name] = o.decode(a, t)),
                        o.oneof && (null !== (a = l[o.oneof.name]) && a !== o.name && (l[a] = null), (l[o.oneof.name] = o.name)))
                  else
                    switch (a) {
                      case e.WIRE_TYPES.VARINT:
                        t.readVarint32()
                        break
                      case e.WIRE_TYPES.BITS32:
                        t.offset += 4
                        break
                      case e.WIRE_TYPES.BITS64:
                        t.offset += 8
                        break
                      case e.WIRE_TYPES.LDELIM:
                        ;(o = t.readVarint32()), (t.offset += o)
                        break
                      case e.WIRE_TYPES.STARTGROUP:
                        for (; r(s, t); );
                        break
                      default:
                        throw Error("Illegal wire type for unknown field " + s + " in " + this.toString(!0) + "#decode: " + a)
                    }
                }
                for (t = 0, i = this._fields.length; t < i; ++t)
                  if (null === l[(o = this._fields[t]).name])
                    if ("proto3" === this.syntax) l[o.name] = o.defaultValue
                    else {
                      if (o.required)
                        throw (((t = Error("Missing at least one required field for " + this.toString(!0) + ": " + o.name)).decoded = l), t)
                      e.populateDefaults && null !== o.defaultValue && (l[o.name] = o.defaultValue)
                    }
                return l
              }),
              (o.Message = g)
            var m = function (t, i, r, n, o, a, x, l, c, u) {
              s.call(this, t, i, a),
                (this.className = "Message.Field"),
                (this.required = "required" === r),
                (this.repeated = "repeated" === r),
                (this.map = "map" === r),
                (this.keyType = n || null),
                (this.type = o),
                (this.resolvedType = null),
                (this.id = x),
                (this.options = l || {}),
                (this.defaultValue = null),
                (this.oneof = c || null),
                (this.syntax = u || "proto2"),
                (this.originalName = this.name),
                (this.keyElement = this.element = null),
                !this.builder.options.convertFieldsToCamelCase || this instanceof g.ExtensionField || (this.name = e.Util.toCamelCase(this.name))
            }
            ;((d = m.prototype = c()(s.prototype)).build = function () {
              ;(this.element = new f(this.type, this.resolvedType, !1, this.syntax, this.name)),
                this.map && (this.keyElement = new f(this.keyType, void 0, !0, this.syntax, this.name)),
                "proto3" !== this.syntax || this.repeated || this.map
                  ? void 0 !== this.options.default && (this.defaultValue = this.verifyValue(this.options.default))
                  : (this.defaultValue = f.defaultFieldValue(this.type))
            }),
              (d.verifyValue = function (t, i) {
                function r(e, t) {
                  throw Error("Illegal value for " + o.toString(!0) + " of type " + o.type.name + ": " + e + " (" + t + ")")
                }
                i = i || !1
                var n,
                  o = this
                if (null === t)
                  return (
                    this.required && r(b()(t), "required"),
                    "proto3" === this.syntax && this.type !== e.TYPES.message && r(b()(t), "proto3 field without field presence cannot be null"),
                    null
                  )
                if (this.repeated && !i) {
                  h()(t) || (t = [t])
                  var a = []
                  for (n = 0; n < t.length; n++) a.push(this.element.verifyValue(t[n]))
                  return a
                }
                return this.map && !i
                  ? t instanceof e.Map
                    ? t
                    : (t instanceof Object || r(b()(t), "expected ProtoBuf.Map or raw object for map field"), new e.Map(this, t))
                  : (!this.repeated && h()(t) && r(b()(t), "no array expected"), this.element.verifyValue(t))
              }),
              (d.hasWirePresence = function (t, i) {
                if ("proto3" !== this.syntax) return null !== t
                if (this.oneof && i[this.oneof.name] === this.name) return !0
                switch (this.type) {
                  case e.TYPES.int32:
                  case e.TYPES.sint32:
                  case e.TYPES.sfixed32:
                  case e.TYPES.uint32:
                  case e.TYPES.fixed32:
                    return 0 !== t
                  case e.TYPES.int64:
                  case e.TYPES.sint64:
                  case e.TYPES.sfixed64:
                  case e.TYPES.uint64:
                  case e.TYPES.fixed64:
                    return 0 !== t.low || 0 !== t.high
                  case e.TYPES.bool:
                    return t
                  case e.TYPES.float:
                  case e.TYPES.double:
                    return 0 !== t
                  case e.TYPES.string:
                    return 0 < t.length
                  case e.TYPES.bytes:
                    return 0 < t.remaining()
                  case e.TYPES.enum:
                    return 0 !== t
                  case e.TYPES.message:
                    return null !== t
                  default:
                    return !0
                }
              }),
              (d.encode = function (i, r, n) {
                if (null === this.type || "object" !== b()(this.type))
                  throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type)
                if (null === i || (this.repeated && 0 === i.length)) return r
                try {
                  var o
                  if (this.repeated)
                    if (this.options.packed && 0 <= e.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)) {
                      r.writeVarint32((this.id << 3) | e.WIRE_TYPES.LDELIM), r.ensureCapacity((r.offset += 1))
                      var a = r.offset
                      for (o = 0; o < i.length; o++) this.element.encodeValue(this.id, i[o], r)
                      var s = r.offset - a,
                        x = t.calculateVarint32(s)
                      if (1 < x) {
                        var l = r.slice(a, r.offset)
                        a = a + (x - 1)
                        ;(r.offset = a), r.append(l)
                      }
                      r.writeVarint32(s, a - x)
                    } else
                      for (o = 0; o < i.length; o++) r.writeVarint32((this.id << 3) | this.type.wireType), this.element.encodeValue(this.id, i[o], r)
                  else
                    this.map
                      ? i.forEach(function (i, n, o) {
                          ;(o =
                            t.calculateVarint32(8 | this.keyType.wireType) +
                            this.keyElement.calculateLength(1, n) +
                            t.calculateVarint32(16 | this.type.wireType) +
                            this.element.calculateLength(2, i)),
                            r.writeVarint32((this.id << 3) | e.WIRE_TYPES.LDELIM),
                            r.writeVarint32(o),
                            r.writeVarint32(8 | this.keyType.wireType),
                            this.keyElement.encodeValue(1, n, r),
                            r.writeVarint32(16 | this.type.wireType),
                            this.element.encodeValue(2, i, r)
                        }, this)
                      : this.hasWirePresence(i, n) && (r.writeVarint32((this.id << 3) | this.type.wireType), this.element.encodeValue(this.id, i, r))
                } catch (e) {
                  throw Error("Illegal value for " + this.toString(!0) + ": " + i + " (" + e + ")")
                }
                return r
              }),
              (d.calculate = function (i, r) {
                if (((i = this.verifyValue(i)), null === this.type || "object" !== b()(this.type)))
                  throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type)
                if (null === i || (this.repeated && 0 === i.length)) return 0
                var n = 0
                try {
                  var o, a
                  if (this.repeated)
                    if (this.options.packed && 0 <= e.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)) {
                      for (n += t.calculateVarint32((this.id << 3) | e.WIRE_TYPES.LDELIM), o = a = 0; o < i.length; o++)
                        a += this.element.calculateLength(this.id, i[o])
                      ;(n += t.calculateVarint32(a)), (n += a)
                    } else
                      for (o = 0; o < i.length; o++)
                        (n += t.calculateVarint32((this.id << 3) | this.type.wireType)), (n += this.element.calculateLength(this.id, i[o]))
                  else
                    this.map
                      ? i.forEach(function (i, r, o) {
                          ;(i =
                            t.calculateVarint32(8 | this.keyType.wireType) +
                            this.keyElement.calculateLength(1, r) +
                            t.calculateVarint32(16 | this.type.wireType) +
                            this.element.calculateLength(2, i)),
                            (n += t.calculateVarint32((this.id << 3) | e.WIRE_TYPES.LDELIM)),
                            (n += t.calculateVarint32(i)),
                            (n += i)
                        }, this)
                      : this.hasWirePresence(i, r) &&
                        ((n += t.calculateVarint32((this.id << 3) | this.type.wireType)), (n += this.element.calculateLength(this.id, i)))
                } catch (e) {
                  throw Error("Illegal value for " + this.toString(!0) + ": " + i + " (" + e + ")")
                }
                return n
              }),
              (d.decode = function (t, i, r) {
                if (
                  !(
                    (!this.map && t === this.type.wireType) ||
                    (!r && this.repeated && this.options.packed && t === e.WIRE_TYPES.LDELIM) ||
                    (this.map && t === e.WIRE_TYPES.LDELIM)
                  )
                )
                  throw Error("Illegal wire type for field " + this.toString(!0) + ": " + t + " (" + this.type.wireType + " expected)")
                if (
                  t === e.WIRE_TYPES.LDELIM &&
                  this.repeated &&
                  this.options.packed &&
                  0 <= e.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) &&
                  !r
                ) {
                  for (t = i.readVarint32(), t = i.offset + t, r = []; i.offset < t; ) r.push(this.decode(this.type.wireType, i, !0))
                  return r
                }
                if (this.map) {
                  var n = f.defaultFieldValue(this.keyType)
                  if (((r = f.defaultFieldValue(this.type)), (t = i.readVarint32()), i.remaining() < t))
                    throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + t + " required but got only " + i.remaining())
                  var o = i.clone()
                  for (o.limit = o.offset + t, i.offset += t; 0 < o.remaining(); )
                    if (((t = 7 & (i = o.readVarint32())), 1 === (i >>>= 3))) n = this.keyElement.decode(o, t, i)
                    else {
                      if (2 !== i) throw Error("Unexpected tag in map field key/value submessage")
                      r = this.element.decode(o, t, i)
                    }
                  return [n, r]
                }
                return this.element.decode(i, t, this.id)
              }),
              (o.Message.Field = m),
              ((d = function (e, t, i, r, n, o, a) {
                m.call(this, e, t, i, null, r, n, o, a)
              }).prototype = c()(m.prototype)),
              (o.Message.ExtensionField = d),
              (o.Message.OneOf = function (e, t, i) {
                s.call(this, e, t, i), (this.fields = [])
              })
            var v = function (e, t, i, r, n) {
              u.call(this, e, t, i, r, n), (this.className = "Enum"), (this.object = null)
            }
            ;(v.getName = function (e, t) {
              for (var i, r = a()(e), n = 0; n < r.length; ++n) if (e[(i = r[n])] === t) return i
              return null
            }),
              ((v.prototype = c()(u.prototype)).build = function (t) {
                if (this.object && !t) return this.object
                t = new e.Builder.Enum()
                for (var i = this.getChildren(v.Value), r = 0, n = i.length; r < n; ++r) t[i[r].name] = i[r].id
                return (
                  x.a &&
                    x()(t, "$options", {
                      value: this.buildOpt(),
                      enumerable: !1
                    }),
                  (this.object = t)
                )
              }),
              (o.Enum = v),
              ((d = function (e, t, i, r) {
                s.call(this, e, t, i), (this.className = "Enum.Value"), (this.id = r)
              }).prototype = c()(s.prototype)),
              (o.Enum.Value = d)
            var C = function (e, t, i, r) {
              s.call(this, e, t, i), (this.field = r)
            }
            ;(C.prototype = c()(s.prototype)), (o.Extension = C)
            var y = function (e, t, i, r) {
              u.call(this, e, t, i, r), (this.className = "Service"), (this.clazz = null)
            }
            ;((y.prototype = c()(u.prototype)).build = function (i) {
              return this.clazz && !i
                ? this.clazz
                : (this.clazz = (function (e, i) {
                    for (
                      var r = function (t) {
                          e.Builder.Service.call(this),
                            (this.rpcImpl =
                              t ||
                              function (e, t, i) {
                                setTimeout(i.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0)
                              })
                        },
                        n = (r.prototype = c()(e.Builder.Service.prototype)),
                        o = i.getChildren(e.Reflect.Service.RPCMethod),
                        a = 0;
                      a < o.length;
                      a++
                    )
                      !(function (e) {
                        ;(n[e.name] = function (r, n) {
                          try {
                            try {
                              r = e.resolvedRequestType.clazz.decode(t.wrap(r))
                            } catch (e) {
                              if (!(e instanceof TypeError)) throw e
                            }
                            if (null === r || "object" !== b()(r)) throw Error("Illegal arguments")
                            r instanceof e.resolvedRequestType.clazz || (r = new e.resolvedRequestType.clazz(r)),
                              this.rpcImpl(e.fqn(), r, function (t, r) {
                                if (t) n(t)
                                else {
                                  null === r && (r = "")
                                  try {
                                    r = e.resolvedResponseType.clazz.decode(r)
                                  } catch (e) {}
                                  r && r instanceof e.resolvedResponseType.clazz
                                    ? n(null, r)
                                    : n(Error("Illegal response type received in service method " + i.name + "#" + e.name))
                                }
                              })
                          } catch (e) {
                            setTimeout(n.bind(this, e), 0)
                          }
                        }),
                          (r[e.name] = function (t, i, n) {
                            new r(t)[e.name](i, n)
                          }),
                          x.a &&
                            (x()(r[e.name], "$options", {
                              value: e.buildOpt()
                            }),
                            x()(n[e.name], "$options", {
                              value: r[e.name].$options
                            }))
                      })(o[a])
                    return (
                      x.a &&
                        (x()(r, "$options", {
                          value: i.buildOpt()
                        }),
                        x()(n, "$options", {
                          value: r.$options
                        }),
                        x()(r, "$type", {
                          value: i
                        }),
                        x()(n, "$type", {
                          value: i
                        })),
                      r
                    )
                  })(e, this))
            }),
              (o.Service = y)
            var _ = function (e, t, i, r) {
              s.call(this, e, t, i), (this.className = "Service.Method"), (this.options = r || {})
            }
            return (
              ((_.prototype = c()(s.prototype)).buildOpt = l.buildOpt),
              (o.Service.Method = _),
              ((l = function (e, t, i, r, n, o, a, s) {
                _.call(this, e, t, i, s),
                  (this.className = "Service.RPCMethod"),
                  (this.requestName = r),
                  (this.responseName = n),
                  (this.requestStream = o),
                  (this.responseStream = a),
                  (this.resolvedResponseType = this.resolvedRequestType = null)
              }).prototype = c()(_.prototype)),
              (o.Service.RPCMethod = l),
              o
            )
          })(s)),
          (s.Builder = (function (e, t, r) {
            var o = function (e) {
                ;(this.ptr = this.ns = new r.Namespace(this, null, "")),
                  (this.resolved = !1),
                  (this.result = null),
                  (this.files = {}),
                  (this.importRoot = null),
                  (this.options = e || {})
              },
              s = o.prototype
            return (
              (o.isMessage = function (e) {
                return "string" === typeof e.name && void 0 === e.values && void 0 === e.rpc
              }),
              (o.isMessageField = function (e) {
                return "string" === typeof e.rule && "string" === typeof e.name && "string" === typeof e.type && void 0 !== e.id
              }),
              (o.isEnum = function (e) {
                return !("string" !== typeof e.name || void 0 === e.values || !h()(e.values) || 0 === e.values.length)
              }),
              (o.isService = function (e) {
                return !("string" !== typeof e.name || "object" !== b()(e.rpc) || !e.rpc)
              }),
              (o.isExtend = function (e) {
                return "string" === typeof e.ref
              }),
              (s.reset = function () {
                return (this.ptr = this.ns), this
              }),
              (s.define = function (e) {
                if ("string" !== typeof e || !t.TYPEREF.test(e)) throw Error("illegal namespace: " + e)
                return (
                  e.split(".").forEach(function (e) {
                    var t = this.ptr.getChild(e)
                    null === t && this.ptr.addChild((t = new r.Namespace(this, this.ptr, e))), (this.ptr = t)
                  }, this),
                  this
                )
              }),
              (s.create = function (t) {
                if (!t) return this
                if (h()(t)) {
                  if (0 === t.length) return this
                  t = t.slice()
                } else t = [t]
                for (var i = [t]; 0 < i.length; ) {
                  if (((t = i.pop()), !h()(t))) throw Error("not a valid namespace: " + n()(t))
                  for (; 0 < t.length; ) {
                    var s = t.shift()
                    if (o.isMessage(s)) {
                      var x = new r.Message(this, this.ptr, s.name, s.options, s.isGroup, s.syntax),
                        l = {}
                      s.oneofs &&
                        a()(s.oneofs).forEach(function (e) {
                          x.addChild((l[e] = new r.Message.OneOf(this, x, e)))
                        }, this),
                        s.fields &&
                          s.fields.forEach(function (e) {
                            if (null !== x.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + x.name + ": " + e.id)
                            if (e.options && "object" !== b()(e.options)) throw Error("illegal field options in " + x.name + "#" + e.name)
                            var t = null
                            if ("string" === typeof e.oneof && !(t = l[e.oneof]))
                              throw Error("illegal oneof in " + x.name + "#" + e.name + ": " + e.oneof)
                            ;(e = new r.Message.Field(this, x, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, s.syntax)),
                              t && t.fields.push(e),
                              x.addChild(e)
                          }, this)
                      var c = []
                      if (
                        (s.enums &&
                          s.enums.forEach(function (e) {
                            c.push(e)
                          }),
                        s.messages &&
                          s.messages.forEach(function (e) {
                            c.push(e)
                          }),
                        s.services &&
                          s.services.forEach(function (e) {
                            c.push(e)
                          }),
                        s.extensions && (x.extensions = "number" === typeof s.extensions[0] ? [s.extensions] : s.extensions),
                        this.ptr.addChild(x),
                        0 < c.length)
                      ) {
                        i.push(t), (t = c), (c = null), (this.ptr = x), (x = null)
                        continue
                      }
                      c = null
                    } else if (o.isEnum(s))
                      (x = new r.Enum(this, this.ptr, s.name, s.options, s.syntax)),
                        s.values.forEach(function (e) {
                          x.addChild(new r.Enum.Value(this, x, e.name, e.id))
                        }, this),
                        this.ptr.addChild(x)
                    else if (o.isService(s))
                      (x = new r.Service(this, this.ptr, s.name, s.options)),
                        a()(s.rpc).forEach(function (e) {
                          var t = s.rpc[e]
                          x.addChild(new r.Service.RPCMethod(this, x, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options))
                        }, this),
                        this.ptr.addChild(x)
                    else {
                      if (!o.isExtend(s)) throw Error("not a valid definition: " + n()(s))
                      if ((x = this.ptr.resolve(s.ref, !0)))
                        s.fields.forEach(function (t) {
                          if (null !== x.getChild(0 | t.id)) throw Error("duplicate extended field id in " + x.name + ": " + t.id)
                          if (x.extensions) {
                            var i = !1
                            if (
                              (x.extensions.forEach(function (e) {
                                t.id >= e[0] && t.id <= e[1] && (i = !0)
                              }),
                              !i)
                            )
                              throw Error("illegal extended field id in " + x.name + ": " + t.id + " (not within valid ranges)")
                          }
                          var n = t.name
                          this.options.convertFieldsToCamelCase && (n = e.Util.toCamelCase(n))
                          n = new r.Message.ExtensionField(this, x, t.rule, t.type, this.ptr.fqn() + "." + n, t.id, t.options)
                          var o = new r.Extension(this, this.ptr, t.name, n)
                          ;(n.extension = o), this.ptr.addChild(o), x.addChild(n)
                        }, this)
                      else if (!/\.?google\.protobuf\./.test(s.ref)) throw Error("extended message " + s.ref + " is not defined")
                    }
                    x = s = null
                  }
                  ;(t = null), (this.ptr = this.ptr.parent)
                }
                return (this.resolved = !1), (this.result = null), this
              }),
              (s.import = function (t, r) {
                var n = "/"
                if ("string" === typeof r) {
                  if ((e.Util.IS_NODE && (r = i(122).resolve(r)), !0 === this.files[r])) return this.reset()
                  this.files[r] = !0
                } else if ("object" === b()(r)) {
                  var o = r.root
                  if (
                    (e.Util.IS_NODE && (o = i(122).resolve(o)),
                    (0 <= o.indexOf("\\") || 0 <= r.file.indexOf("\\")) && (n = "\\"),
                    (o = o + n + r.file),
                    !0 === this.files[o])
                  )
                    return this.reset()
                  this.files[o] = !0
                }
                if (t.imports && 0 < t.imports.length) {
                  var s = !1
                  "object" === b()(r)
                    ? ((this.importRoot = r.root),
                      (s = !0),
                      (o = this.importRoot),
                      (r = r.file),
                      (0 <= o.indexOf("\\") || 0 <= r.indexOf("\\")) && (n = "\\"))
                    : "string" === typeof r
                    ? this.importRoot
                      ? (o = this.importRoot)
                      : 0 <= r.indexOf("/")
                      ? "" === (o = r.replace(/\/[^\/]*$/, "")) && (o = "/")
                      : 0 <= r.indexOf("\\")
                      ? ((o = r.replace(/\\[^\\]*$/, "")), (n = "\\"))
                      : (o = ".")
                    : (o = null)
                  for (var x = 0; x < t.imports.length; x++)
                    if ("string" === typeof t.imports[x]) {
                      if (!o) throw Error("cannot determine import root")
                      var l = t.imports[x]
                      if ("google/protobuf/descriptor.proto" !== l && ((l = o + n + l), !0 !== this.files[l])) {
                        ;/\.proto$/i.test(l) && !e.DotProto && (l = l.replace(/\.proto$/, ".json"))
                        var c = e.Util.fetch(l)
                        if (null === c) throw Error("failed to import '" + l + "' in '" + r + "': file not found")
                        ;/\.json$/i.test(l) ? this.import(JSON.parse(c + ""), l) : this.import(e.DotProto.Parser.parse(c), l)
                      }
                    } else
                      r
                        ? /\.(\w+)$/.test(r)
                          ? this.import(
                              t.imports[x],
                              r.replace(/^(.+)\.(\w+)$/, function (e, t, i) {
                                return t + "_import" + x + "." + i
                              })
                            )
                          : this.import(t.imports[x], r + "_import" + x)
                        : this.import(t.imports[x])
                  s && (this.importRoot = null)
                }
                t.package && this.define(t.package),
                  t.syntax &&
                    (function e(t) {
                      t.messages &&
                        t.messages.forEach(function (i) {
                          ;(i.syntax = t.syntax), e(i)
                        }),
                        t.enums &&
                          t.enums.forEach(function (e) {
                            e.syntax = t.syntax
                          })
                    })(t)
                var u = this.ptr
                return (
                  t.options &&
                    a()(t.options).forEach(function (e) {
                      u.options[e] = t.options[e]
                    }),
                  t.messages && (this.create(t.messages), (this.ptr = u)),
                  t.enums && (this.create(t.enums), (this.ptr = u)),
                  t.services && (this.create(t.services), (this.ptr = u)),
                  t.extends && this.create(t.extends),
                  this.reset()
                )
              }),
              (s.resolveAll = function () {
                var i
                if (null === this.ptr || "object" === b()(this.ptr.type)) return this
                if (this.ptr instanceof r.Namespace)
                  this.ptr.children.forEach(function (e) {
                    ;(this.ptr = e), this.resolveAll()
                  }, this)
                else if (this.ptr instanceof r.Message.Field) {
                  if (t.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type]
                  else {
                    if (!t.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type)
                    if (
                      !(i = (this.ptr instanceof r.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))
                    )
                      throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type)
                    if (((this.ptr.resolvedType = i), i instanceof r.Enum)) {
                      if (((this.ptr.type = e.TYPES.enum), "proto3" === this.ptr.syntax && "proto3" !== i.syntax))
                        throw Error("proto3 message cannot reference proto2 enum")
                    } else {
                      if (!(i instanceof r.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type)
                      this.ptr.type = i.isGroup ? e.TYPES.group : e.TYPES.message
                    }
                  }
                  if (this.ptr.map) {
                    if (!t.TYPE.test(this.ptr.keyType))
                      throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType)
                    this.ptr.keyType = e.TYPES[this.ptr.keyType]
                  }
                } else if (this.ptr instanceof e.Reflect.Service.Method) {
                  if (!(this.ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0))
                  if (!((i = this.ptr.parent.resolve(this.ptr.requestName, !0)) && i instanceof e.Reflect.Message))
                    throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName)
                  if (
                    ((this.ptr.resolvedRequestType = i),
                    !((i = this.ptr.parent.resolve(this.ptr.responseName, !0)) && i instanceof e.Reflect.Message))
                  )
                    throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName)
                  this.ptr.resolvedResponseType = i
                } else if (
                  !(
                    this.ptr instanceof e.Reflect.Message.OneOf ||
                    this.ptr instanceof e.Reflect.Extension ||
                    this.ptr instanceof e.Reflect.Enum.Value
                  )
                )
                  throw Error("illegal object in namespace: " + b()(this.ptr) + ": " + this.ptr)
                return this.reset()
              }),
              (s.build = function (e) {
                if (
                  (this.reset(),
                  this.resolved || (this.resolveAll(), (this.resolved = !0), (this.result = null)),
                  null === this.result && (this.result = this.ns.build()),
                  !e)
                )
                  return this.result
                e = "string" === typeof e ? e.split(".") : e
                for (var t = this.result, i = 0; i < e.length; i++) {
                  if (!t[e[i]]) {
                    t = null
                    break
                  }
                  t = t[e[i]]
                }
                return t
              }),
              (s.lookup = function (e, t) {
                return e ? this.ns.resolve(e, t) : this.ns
              }),
              (s.toString = function () {
                return "Builder"
              }),
              (o.Message = function () {}),
              (o.Enum = function () {}),
              (o.Service = function () {}),
              o
            )
          })(s, s.Lang, s.Reflect)),
          (s.Map = (function (e, t) {
            function i(e) {
              var t = 0
              return {
                next: function () {
                  return t < e.length
                    ? {
                        done: !1,
                        value: e[t++]
                      }
                    : {
                        done: !0
                      }
                }
              }
            }
            var r = function (e, i) {
                if (!e.map) throw Error("field is not a map")
                if (
                  ((this.field = e),
                  (this.keyElem = new t.Element(e.keyType, null, !0, e.syntax)),
                  (this.valueElem = new t.Element(e.type, e.resolvedType, !1, e.syntax)),
                  (this.map = {}),
                  x()(this, "size", {
                    get: function () {
                      return a()(this.map).length
                    }
                  }),
                  i)
                )
                  for (var r = a()(i), n = 0; n < r.length; n++) {
                    var o = this.keyElem.valueFromString(r[n]),
                      s = this.valueElem.verifyValue(i[r[n]])
                    this.map[this.keyElem.valueToString(o)] = {
                      key: o,
                      value: s
                    }
                  }
              },
              n = r.prototype
            return (
              (n.clear = function () {
                this.map = {}
              }),
              (n.delete = function (e) {
                var t = (e = this.keyElem.valueToString(this.keyElem.verifyValue(e))) in this.map
                return delete this.map[e], t
              }),
              (n.entries = function () {
                for (var e, t = [], r = a()(this.map), n = 0; n < r.length; n++) t.push([(e = this.map[r[n]]).key, e.value])
                return i(t)
              }),
              (n.keys = function () {
                for (var e = [], t = a()(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].key)
                return i(e)
              }),
              (n.values = function () {
                for (var e = [], t = a()(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].value)
                return i(e)
              }),
              (n.forEach = function (e, t) {
                for (var i, r = a()(this.map), n = 0; n < r.length; n++) e.call(t, (i = this.map[r[n]]).value, i.key, this)
              }),
              (n.set = function (e, t) {
                var i = this.keyElem.verifyValue(e),
                  r = this.valueElem.verifyValue(t)
                return (
                  (this.map[this.keyElem.valueToString(i)] = {
                    key: i,
                    value: r
                  }),
                  this
                )
              }),
              (n.get = function (e) {
                return (e = this.keyElem.valueToString(this.keyElem.verifyValue(e))) in this.map ? this.map[e].value : void 0
              }),
              (n.has = function (e) {
                return this.keyElem.valueToString(this.keyElem.verifyValue(e)) in this.map
              }),
              r
            )
          })(0, s.Reflect)),
          (s.loadProto = function (e, t, i) {
            return (
              ("string" === typeof t || (t && "string" === typeof t.file && "string" === typeof t.root)) && ((i = t), (t = void 0)),
              s.loadJson(s.DotProto.Parser.parse(e), t, i)
            )
          }),
          (s.protoFromString = s.loadProto),
          (s.loadProtoFile = function (e, t, i) {
            if ((t && "object" === b()(t) ? ((i = t), (t = null)) : (t && "function" === typeof t) || (t = null), t))
              return s.Util.fetch("string" === typeof e ? e : e.root + "/" + e.file, function (r) {
                if (null === r) t(Error("Failed to fetch file"))
                else
                  try {
                    t(null, s.loadProto(r, i, e))
                  } catch (e) {
                    t(e)
                  }
              })
            var r = s.Util.fetch("object" === b()(e) ? e.root + "/" + e.file : e)
            return null === r ? null : s.loadProto(r, i, e)
          }),
          (s.protoFromFile = s.loadProtoFile),
          (s.newBuilder = function (e) {
            return (
              void 0 === (e = e || {}).convertFieldsToCamelCase && (e.convertFieldsToCamelCase = s.convertFieldsToCamelCase),
              void 0 === e.populateAccessors && (e.populateAccessors = s.populateAccessors),
              new s.Builder(e)
            )
          }),
          (s.loadJson = function (e, t, i) {
            return (
              ("string" === typeof t || (t && "string" === typeof t.file && "string" === typeof t.root)) && ((i = t), (t = null)),
              (t && "object" === b()(t)) || (t = s.newBuilder()),
              "string" === typeof e && (e = JSON.parse(e)),
              t.import(e, i),
              t.resolveAll(),
              t
            )
          }),
          (s.loadJsonFile = function (e, t, i) {
            if ((t && "object" === b()(t) ? ((i = t), (t = null)) : (t && "function" === typeof t) || (t = null), t))
              return s.Util.fetch("string" === typeof e ? e : e.root + "/" + e.file, function (r) {
                if (null === r) t(Error("Failed to fetch file"))
                else
                  try {
                    t(null, s.loadJson(JSON.parse(r), i, e))
                  } catch (e) {
                    t(e)
                  }
              })
            var r = s.Util.fetch("object" === b()(e) ? e.root + "/" + e.file : e)
            return null === r ? null : s.loadJson(JSON.parse(r), i, e)
          }),
          s
        )
      })
    }).call(this, i(95), i(96)(e))
  },
  function (e, t, i) {
    var r = i(5),
      n =
        r.JSON ||
        (r.JSON = {
          stringify: JSON.stringify
        })
    e.exports = function (e) {
      return n.stringify.apply(n, arguments)
    }
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        value: t,
        done: !!e
      }
    }
  },
  function (e, t, i) {},
  function (e, t, i) {
    e.exports = i(50)("native-function-to-string", Function.toString)
  },
  function (e, t, i) {
    var r = i(52),
      n = i(45),
      o = i(55),
      a = {}
    i(20)(a, i(4)("iterator"), function () {
      return this
    }),
      (e.exports = function (e, t, i) {
        ;(e.prototype = r(a, {
          next: n(1, i)
        })),
          o(e, t + " Iterator")
      })
  },
  function (e, t, i) {
    var r = i(13),
      n = i(17),
      o = i(53)
    e.exports = i(11)
      ? Object.defineProperties
      : function (e, t) {
          n(e)
          for (var i, a = o(t), s = a.length, x = 0; s > x; ) r.f(e, (i = a[x++]), t[i])
          return e
        }
  },
  function (e, t, i) {
    var r = i(10).document
    e.exports = r && r.documentElement
  },
  function (e, t, i) {
    i(155), (e.exports = i(5).Object.keys)
  },
  function (e, t, i) {
    var r = i(72),
      n = i(57)
    i(159)("keys", function () {
      return function (e) {
        return n(r(e))
      }
    })
  },
  function (e, t, i) {
    var r = i(47)
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" === r(e) ? e.split("") : Object(e)
        }
  },
  function (e, t, i) {
    var r = i(39),
      n = i(106),
      o = i(158)
    e.exports = function (e) {
      return function (t, i, a) {
        var s,
          x = r(t),
          l = n(x.length),
          c = o(a, l)
        if (e && i !== i) {
          for (; l > c; ) if ((s = x[c++]) !== s) return !0
        } else for (; l > c; c++) if ((e || c in x) && x[c] === i) return e || c || 0
        return !e && -1
      }
    }
  },
  function (e, t, i) {
    var r = i(73),
      n = Math.max,
      o = Math.min
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? n(e + t, 0) : o(e, t)
    }
  },
  function (e, t, i) {
    var r = i(12),
      n = i(5),
      o = i(40)
    e.exports = function (e, t) {
      var i = (n.Object || {})[e] || Object[e],
        a = {}
      ;(a[e] = t(i)),
        r(
          r.S +
            r.F *
              o(function () {
                i(1)
              }),
          "Object",
          a
        )
    }
  },
  function (e, t, i) {
    i(161)
    var r = i(5).Object
    e.exports = function (e, t, i) {
      return r.defineProperty(e, t, i)
    }
  },
  function (e, t, i) {
    var r = i(12)
    r(r.S + r.F * !i(25), "Object", {
      defineProperty: i(26).f
    })
  },
  function (e, t, i) {
    var r = i(29),
      n = i(38)
    e.exports = function (e) {
      return function (t, i) {
        var o,
          a,
          s = String(n(t)),
          x = r(i),
          l = s.length
        return x < 0 || x >= l
          ? e
            ? ""
            : void 0
          : (o = s.charCodeAt(x)) < 55296 || o > 56319 || x + 1 === l || (a = s.charCodeAt(x + 1)) < 56320 || a > 57343
          ? e
            ? s.charAt(x)
            : o
          : e
          ? s.slice(x, x + 2)
          : a - 56320 + ((o - 55296) << 10) + 65536
      }
    }
  },
  function (e, t, i) {
    var r = i(82)
    i(23)(
      {
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
      },
      {
        exec: r
      }
    )
  },
  function (e, t, i) {
    i(165)
    var r = i(5).Object
    e.exports = function (e, t) {
      return r.create(e, t)
    }
  },
  function (e, t, i) {
    var r = i(12)
    r(r.S, "Object", {
      create: i(83)
    })
  },
  function (e, t, i) {
    i(11) &&
      "g" !== /./g.flags &&
      i(13).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: i(64)
      })
  },
  function (e, t, i) {
    i(168), (e.exports = i(5).Array.isArray)
  },
  function (e, t, i) {
    var r = i(12)
    r(r.S, "Array", {
      isArray: i(111)
    })
  },
  function (e, t, i) {
    i(170), (e.exports = i(5).parseFloat)
  },
  function (e, t, i) {
    var r = i(12),
      n = i(171)
    r(r.G + r.F * (parseFloat !== n), {
      parseFloat: n
    })
  },
  function (e, t, i) {
    var r = i(7).parseFloat,
      n = i(112).trim
    e.exports =
      1 / r(i(87) + "-0") !== -1 / 0
        ? function (e) {
            var t = n(String(e), 3),
              i = r(t)
            return 0 === i && "-" === t.charAt(0) ? -0 : i
          }
        : r
  },
  function (e, t, i) {
    i(173), (e.exports = i(5).parseInt)
  },
  function (e, t, i) {
    var r = i(12),
      n = i(174)
    r(r.G + r.F * (parseInt !== n), {
      parseInt: n
    })
  },
  function (e, t, i) {
    var r = i(7).parseInt,
      n = i(112).trim,
      o = i(87),
      a = /^[-+]?0[xX]/
    e.exports =
      8 !== r(o + "08") || 22 !== r(o + "0x16")
        ? function (e, t) {
            var i = n(String(e), 3)
            return r(i, t >>> 0 || (a.test(i) ? 16 : 10))
          }
        : r
  },
  function (e, t, i) {
    e.exports = i(176)
  },
  function (e, t, i) {
    i(113), i(116), (e.exports = i(89).f("iterator"))
  },
  function (e, t, i) {
    var r = i(73),
      n = i(56)
    e.exports = function (e) {
      return function (t, i) {
        var o,
          a,
          s = String(n(t)),
          x = r(i),
          l = s.length
        return x < 0 || x >= l
          ? e
            ? ""
            : void 0
          : (o = s.charCodeAt(x)) < 55296 || o > 56319 || x + 1 === l || (a = s.charCodeAt(x + 1)) < 56320 || a > 57343
          ? e
            ? s.charAt(x)
            : o
          : e
          ? s.slice(x, x + 2)
          : a - 56320 + ((o - 55296) << 10) + 65536
      }
    }
  },
  function (e, t, i) {
    var r = i(83),
      n = i(61),
      o = i(66),
      a = {}
    i(32)(a, i(14)("iterator"), function () {
      return this
    }),
      (e.exports = function (e, t, i) {
        ;(e.prototype = r(a, {
          next: n(1, i)
        })),
          o(e, t + " Iterator")
      })
  },
  function (e, t, i) {
    var r = i(31),
      n = i(72),
      o = i(74)("IE_PROTO"),
      a = Object.prototype
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = n(e)),
          r(e, o)
            ? e[o]
            : "function" === typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        )
      }
  },
  function (e, t, i) {
    var r = i(181),
      n = i(182),
      o = i(49),
      a = i(39)
    ;(e.exports = i(114)(
      Array,
      "Array",
      function (e, t) {
        ;(this._t = a(e)), (this._i = 0), (this._k = t)
      },
      function () {
        var e = this._t,
          t = this._k,
          i = this._i++
        return !e || i >= e.length ? ((this._t = void 0), n(1)) : n(0, "keys" === t ? i : "values" === t ? e[i] : [i, e[i]])
      },
      "values"
    )),
      (o.Arguments = o.Array),
      r("keys"),
      r("values"),
      r("entries")
  },
  function (e, t) {
    e.exports = function () {}
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        value: t,
        done: !!e
      }
    }
  },
  function (e, t, i) {
    i(184), i(119), i(189), i(190), (e.exports = i(5).Symbol)
  },
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {
    var r,
      n,
      o
      /**
       * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
       * Released under the Apache License, Version 2.0
       * see: https://github.com/dcodeIO/long.js for details
       */
    ;(n = []),
      void 0 ===
        (o =
          "function" ==
          typeof (r = function () {
            function e(e, t, i) {
              ;(this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!i)
            }
            function t(e) {
              return !0 === (e && e.__isLong__)
            }
            e.prototype.__isLong__,
              Object.defineProperty(e.prototype, "__isLong__", {
                value: !0,
                enumerable: !1,
                configurable: !1
              }),
              (e.isLong = t)
            var i = {},
              r = {}
            function n(e, t) {
              var n, o, s
              return t
                ? (s = 0 <= (e >>>= 0) && e < 256) && (o = r[e])
                  ? o
                  : ((n = a(e, (0 | e) < 0 ? -1 : 0, !0)), s && (r[e] = n), n)
                : (s = -128 <= (e |= 0) && e < 128) && (o = i[e])
                ? o
                : ((n = a(e, e < 0 ? -1 : 0, !1)), s && (i[e] = n), n)
            }
            function o(e, t) {
              if (isNaN(e) || !isFinite(e)) return t ? g : d
              if (t) {
                if (e < 0) return g
                if (e >= u) return C
              } else {
                if (e <= -h) return y
                if (e + 1 >= h) return v
              }
              return e < 0 ? o(-e, t).neg() : a(e % c | 0, (e / c) | 0, t)
            }
            function a(t, i, r) {
              return new e(t, i, r)
            }
            ;(e.fromInt = n), (e.fromNumber = o), (e.fromBits = a)
            var s = Math.pow
            function x(e, t, i) {
              if (0 === e.length) throw Error("empty string")
              if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return d
              if (("number" === typeof t ? ((i = t), (t = !1)) : (t = !!t), (i = i || 10) < 2 || 36 < i)) throw RangeError("radix")
              var r
              if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen")
              if (0 === r) return x(e.substring(1), t, i).neg()
              for (var n = o(s(i, 8)), a = d, l = 0; l < e.length; l += 8) {
                var c = Math.min(8, e.length - l),
                  u = parseInt(e.substring(l, l + c), i)
                if (c < 8) {
                  var h = o(s(i, c))
                  a = a.mul(h).add(o(u))
                } else a = (a = a.mul(n)).add(o(u))
              }
              return (a.unsigned = t), a
            }
            function l(t) {
              return t instanceof e ? t : "number" === typeof t ? o(t) : "string" === typeof t ? x(t) : a(t.low, t.high, t.unsigned)
            }
            ;(e.fromString = x), (e.fromValue = l)
            var c = 4294967296,
              u = c * c,
              h = u / 2,
              f = n(1 << 24),
              d = n(0)
            e.ZERO = d
            var g = n(0, !0)
            e.UZERO = g
            var p = n(1)
            e.ONE = p
            var m = n(1, !0)
            e.UONE = m
            var b = n(-1)
            e.NEG_ONE = b
            var v = a(-1, 2147483647, !1)
            e.MAX_VALUE = v
            var C = a(-1, -1, !0)
            e.MAX_UNSIGNED_VALUE = C
            var y = a(0, -2147483648, !1)
            e.MIN_VALUE = y
            var _ = e.prototype
            return (
              (_.toInt = function () {
                return this.unsigned ? this.low >>> 0 : this.low
              }),
              (_.toNumber = function () {
                return this.unsigned ? (this.high >>> 0) * c + (this.low >>> 0) : this.high * c + (this.low >>> 0)
              }),
              (_.toString = function (e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix")
                if (this.isZero()) return "0"
                if (this.isNegative()) {
                  if (this.eq(y)) {
                    var t = o(e),
                      i = this.div(t),
                      r = i.mul(t).sub(this)
                    return i.toString(e) + r.toInt().toString(e)
                  }
                  return "-" + this.neg().toString(e)
                }
                for (var n = o(s(e, 6), this.unsigned), a = this, x = ""; ; ) {
                  var l = a.div(n),
                    c = (a.sub(l.mul(n)).toInt() >>> 0).toString(e)
                  if ((a = l).isZero()) return c + x
                  for (; c.length < 6; ) c = "0" + c
                  x = "" + c + x
                }
              }),
              (_.getHighBits = function () {
                return this.high
              }),
              (_.getHighBitsUnsigned = function () {
                return this.high >>> 0
              }),
              (_.getLowBits = function () {
                return this.low
              }),
              (_.getLowBitsUnsigned = function () {
                return this.low >>> 0
              }),
              (_.getNumBitsAbs = function () {
                if (this.isNegative()) return this.eq(y) ? 64 : this.neg().getNumBitsAbs()
                for (var e = 0 !== this.high ? this.high : this.low, t = 31; t > 0 && 0 === (e & (1 << t)); t--);
                return 0 !== this.high ? t + 33 : t + 1
              }),
              (_.isZero = function () {
                return 0 === this.high && 0 === this.low
              }),
              (_.isNegative = function () {
                return !this.unsigned && this.high < 0
              }),
              (_.isPositive = function () {
                return this.unsigned || this.high >= 0
              }),
              (_.isOdd = function () {
                return 1 === (1 & this.low)
              }),
              (_.isEven = function () {
                return 0 === (1 & this.low)
              }),
              (_.equals = function (e) {
                return (
                  t(e) || (e = l(e)),
                  (this.unsigned === e.unsigned || this.high >>> 31 !== 1 || e.high >>> 31 !== 1) && this.high === e.high && this.low === e.low
                )
              }),
              (_.eq = _.equals),
              (_.notEquals = function (e) {
                return !this.eq(e)
              }),
              (_.neq = _.notEquals),
              (_.lessThan = function (e) {
                return this.comp(e) < 0
              }),
              (_.lt = _.lessThan),
              (_.lessThanOrEqual = function (e) {
                return this.comp(e) <= 0
              }),
              (_.lte = _.lessThanOrEqual),
              (_.greaterThan = function (e) {
                return this.comp(e) > 0
              }),
              (_.gt = _.greaterThan),
              (_.greaterThanOrEqual = function (e) {
                return this.comp(e) >= 0
              }),
              (_.gte = _.greaterThanOrEqual),
              (_.compare = function (e) {
                if ((t(e) || (e = l(e)), this.eq(e))) return 0
                var i = this.isNegative(),
                  r = e.isNegative()
                return i && !r
                  ? -1
                  : !i && r
                  ? 1
                  : this.unsigned
                  ? e.high >>> 0 > this.high >>> 0 || (e.high === this.high && e.low >>> 0 > this.low >>> 0)
                    ? -1
                    : 1
                  : this.sub(e).isNegative()
                  ? -1
                  : 1
              }),
              (_.comp = _.compare),
              (_.negate = function () {
                return !this.unsigned && this.eq(y) ? y : this.not().add(p)
              }),
              (_.neg = _.negate),
              (_.add = function (e) {
                t(e) || (e = l(e))
                var i = this.high >>> 16,
                  r = 65535 & this.high,
                  n = this.low >>> 16,
                  o = 65535 & this.low,
                  s = e.high >>> 16,
                  x = 65535 & e.high,
                  c = e.low >>> 16,
                  u = 0,
                  h = 0,
                  f = 0,
                  d = 0
                return (
                  (f += (d += o + (65535 & e.low)) >>> 16),
                  (h += (f += n + c) >>> 16),
                  (u += (h += r + x) >>> 16),
                  (u += i + s),
                  a(((f &= 65535) << 16) | (d &= 65535), ((u &= 65535) << 16) | (h &= 65535), this.unsigned)
                )
              }),
              (_.subtract = function (e) {
                return t(e) || (e = l(e)), this.add(e.neg())
              }),
              (_.sub = _.subtract),
              (_.multiply = function (e) {
                if (this.isZero()) return d
                if ((t(e) || (e = l(e)), e.isZero())) return d
                if (this.eq(y)) return e.isOdd() ? y : d
                if (e.eq(y)) return this.isOdd() ? y : d
                if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg()
                if (e.isNegative()) return this.mul(e.neg()).neg()
                if (this.lt(f) && e.lt(f)) return o(this.toNumber() * e.toNumber(), this.unsigned)
                var i = this.high >>> 16,
                  r = 65535 & this.high,
                  n = this.low >>> 16,
                  s = 65535 & this.low,
                  x = e.high >>> 16,
                  c = 65535 & e.high,
                  u = e.low >>> 16,
                  h = 65535 & e.low,
                  g = 0,
                  p = 0,
                  m = 0,
                  b = 0
                return (
                  (m += (b += s * h) >>> 16),
                  (p += (m += n * h) >>> 16),
                  (m &= 65535),
                  (p += (m += s * u) >>> 16),
                  (g += (p += r * h) >>> 16),
                  (p &= 65535),
                  (g += (p += n * u) >>> 16),
                  (p &= 65535),
                  (g += (p += s * c) >>> 16),
                  (g += i * h + r * u + n * c + s * x),
                  a(((m &= 65535) << 16) | (b &= 65535), ((g &= 65535) << 16) | (p &= 65535), this.unsigned)
                )
              }),
              (_.mul = _.multiply),
              (_.divide = function (e) {
                if ((t(e) || (e = l(e)), e.isZero())) throw Error("division by zero")
                if (this.isZero()) return this.unsigned ? g : d
                var i, r, n
                if (this.unsigned) {
                  if ((e.unsigned || (e = e.toUnsigned()), e.gt(this))) return g
                  if (e.gt(this.shru(1))) return m
                  n = g
                } else {
                  if (this.eq(y))
                    return e.eq(p) || e.eq(b)
                      ? y
                      : e.eq(y)
                      ? p
                      : (i = this.shr(1).div(e).shl(1)).eq(d)
                      ? e.isNegative()
                        ? p
                        : b
                      : ((r = this.sub(e.mul(i))), (n = i.add(r.div(e))))
                  if (e.eq(y)) return this.unsigned ? g : d
                  if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg()
                  if (e.isNegative()) return this.div(e.neg()).neg()
                  n = d
                }
                for (r = this; r.gte(e); ) {
                  i = Math.max(1, Math.floor(r.toNumber() / e.toNumber()))
                  for (var a = Math.ceil(Math.log(i) / Math.LN2), x = a <= 48 ? 1 : s(2, a - 48), c = o(i), u = c.mul(e); u.isNegative() || u.gt(r); )
                    u = (c = o((i -= x), this.unsigned)).mul(e)
                  c.isZero() && (c = p), (n = n.add(c)), (r = r.sub(u))
                }
                return n
              }),
              (_.div = _.divide),
              (_.modulo = function (e) {
                return t(e) || (e = l(e)), this.sub(this.div(e).mul(e))
              }),
              (_.mod = _.modulo),
              (_.not = function () {
                return a(~this.low, ~this.high, this.unsigned)
              }),
              (_.and = function (e) {
                return t(e) || (e = l(e)), a(this.low & e.low, this.high & e.high, this.unsigned)
              }),
              (_.or = function (e) {
                return t(e) || (e = l(e)), a(this.low | e.low, this.high | e.high, this.unsigned)
              }),
              (_.xor = function (e) {
                return t(e) || (e = l(e)), a(this.low ^ e.low, this.high ^ e.high, this.unsigned)
              }),
              (_.shiftLeft = function (e) {
                return (
                  t(e) && (e = e.toInt()),
                  0 === (e &= 63)
                    ? this
                    : e < 32
                    ? a(this.low << e, (this.high << e) | (this.low >>> (32 - e)), this.unsigned)
                    : a(0, this.low << (e - 32), this.unsigned)
                )
              }),
              (_.shl = _.shiftLeft),
              (_.shiftRight = function (e) {
                return (
                  t(e) && (e = e.toInt()),
                  0 === (e &= 63)
                    ? this
                    : e < 32
                    ? a((this.low >>> e) | (this.high << (32 - e)), this.high >> e, this.unsigned)
                    : a(this.high >> (e - 32), this.high >= 0 ? 0 : -1, this.unsigned)
                )
              }),
              (_.shr = _.shiftRight),
              (_.shiftRightUnsigned = function (e) {
                if ((t(e) && (e = e.toInt()), 0 === (e &= 63))) return this
                var i = this.high
                return e < 32 ? a((this.low >>> e) | (i << (32 - e)), i >>> e, this.unsigned) : a(32 === e ? i : i >>> (e - 32), 0, this.unsigned)
              }),
              (_.shru = _.shiftRightUnsigned),
              (_.toSigned = function () {
                return this.unsigned ? a(this.low, this.high, !1) : this
              }),
              (_.toUnsigned = function () {
                return this.unsigned ? this : a(this.low, this.high, !0)
              }),
              (_.toBytes = function (e) {
                return e ? this.toBytesLE() : this.toBytesBE()
              }),
              (_.toBytesLE = function () {
                var e = this.high,
                  t = this.low
                return [255 & t, (t >>> 8) & 255, (t >>> 16) & 255, (t >>> 24) & 255, 255 & e, (e >>> 8) & 255, (e >>> 16) & 255, (e >>> 24) & 255]
              }),
              (_.toBytesBE = function () {
                var e = this.high,
                  t = this.low
                return [(e >>> 24) & 255, (e >>> 16) & 255, (e >>> 8) & 255, 255 & e, (t >>> 24) & 255, (t >>> 16) & 255, (t >>> 8) & 255, 255 & t]
              }),
              e
            )
          })
            ? r.apply(t, n)
            : r) || (e.exports = o)
  },
  function (e, t) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t) {},
  function (e, t, i) {
    var r = i(7),
      n = i(135).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      a = r.process,
      s = r.Promise,
      x = "process" === i(47)(a)
    e.exports = function () {
      var e,
        t,
        i,
        l = function () {
          var r, n
          for (x && (r = a.domain) && r.exit(); e; ) {
            ;(n = e.fn), (e = e.next)
            try {
              n()
            } catch (r) {
              throw (e ? i() : (t = void 0), r)
            }
          }
          ;(t = void 0), r && r.enter()
        }
      if (x)
        i = function () {
          a.nextTick(l)
        }
      else if (!o || (r.navigator && r.navigator.standalone))
        if (s && s.resolve) {
          var c = s.resolve(void 0)
          i = function () {
            c.then(l)
          }
        } else
          i = function () {
            n.call(r, l)
          }
      else {
        var u = !0,
          h = document.createTextNode("")
        new o(l).observe(h, {
          characterData: !0
        }),
          (i = function () {
            h.data = u = !u
          })
      }
      return function (r) {
        var n = {
          fn: r,
          next: void 0
        }
        t && (t.next = n), e || ((e = n), i()), (t = n)
      }
    }
  },
  function (e, t, i) {
    var r = i(7).navigator
    e.exports = (r && r.userAgent) || ""
  },
  function (e, t, i) {
    var r = i(32)
    e.exports = function (e, t, i) {
      for (var n in t) i && e[n] ? (e[n] = t[n]) : r(e, n, t[n])
      return e
    }
  },
  function (e, t, i) {
    //不能删除
    var r = i(7),
      n = i(5),
      o = i(26),
      a = i(25),
      s = i(14)("species")
    e.exports = function (e) {
      var t = "function" === typeof n[e] ? n[e] : r[e]
      a &&
        t &&
        !t[s] &&
        o.f(t, s, {
          configurable: !0,
          get: function () {
            return this
          }
        })
    }
  },
  function (e, t, i) {
    //不能删除
    var r = i(14)("iterator"),
      n = !1
    try {
      var o = [7][r]()
      ;(o.return = function () {
        n = !0
      }),
        Array.from(o, function () {
          throw 2
        })
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !n) return !1
      var i = !1
      try {
        var o = [7],
          a = o[r]()
        ;(a.next = function () {
          return {
            done: (i = !0)
          }
        }),
          (o[r] = function () {
            return a
          }),
          e(o)
      } catch (e) {}
      return i
    }
  },
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t) {},
  function (module) {},
  function (e, t) {},
  function (e, t, i) {},
  function (e, t) {},
  function (e, t, i) {},
  function (e, i, r) {
    r.r(i)
    r(146)
    var g = (r(211), r(212), r(85), r(213), r(1)),
      p = r.n(g),
      v = r(68),
      C = r.n(v),
      I = (r(84), r(141), r(143), r(0)),
      w = r.n(I)

    let strName = {
      0: "length",
      8: "function",
      22: "Ellipsoid",
      49: "POSITIVE_INFINITY",
      69: "GeoOption",
      104: "getTime",
      109: "add",
      125: "min",
      139: "height",
      163: "globe",
      239: "ellipsoid",
      252: "scale",
      255: "GEO_VERSION_NUMBER",
      256: "Cesium Version: 1.63",
      265: "maxLevel",
      271: "scene",
      272: "WGS84",
      275: "toDegrees",
      294: "match",
      304: "addEventListener",
      315: "viewer",
      336: "style",
      362: "Color",
      374: "name",
      380: "push",
      398: "Entity",
      400: "values",
      404: "entities",
      408: "activate",
      410: "width",
      469: "slice",
      484: "forEach",
      545: "show",
      601: "splice",
      604: "pop",
      619: "Rectangle",
      638: "fromCssColorString",
      646: "index",
      682: "east",
      684: "north",
      694: "undefined",
      723: "indexOf",
      748: "point",
      795: "text",
      978: "sort",
      984: "showBackground",
      985: "backgroundColor",
      986: "horizontalOrigin",
      987: "verticalOrigin",
      988: "pixelOffset",
      990: "outlineWidth",
      1018: "bold",
      1163: "_ready",
      1183: "number",
      1203: "buffer",
      1234: "minY",
      1298: "getValue",
      1329: "toString",
      1513: "FLOAT",
      1674: "_tilingScheme",
      1711: "url",
      1883: "_name",
      1884: "createGuid",
      1894: "Event",
      2034: "split",
      2408: "level",
      2409: "rectangle",
      2439: "substring",
      2519: "GeographicTilingScheme",
      2530: "getNumberOfYTilesAtLevel",
      2542: "when",
      2543: "defer",
      2552: "resolve",
      2555: "getTileDataAvailable",
      2556: "_errorEvent",
      2557: "_credit",
      2558: "string",
      2564: "{s}",
      2571: "_maxTerrainLevel",
      2577: "TerrainProvider",
      2588: "replace",
      2606: "_surface",
      2611: "tileXYToRectangle",
      2621: "reject",
      2638: "subdomains",
      2660: "HeightmapTerrainData",
      2678: "_dataType",
      2679: "dataType",
      2680: "GeoTerrainProvider",
      2681: "INT",
      2682: "_tileType",
      2683: "tileType",
      2684: "HEIGHTMAP",
      2685: "_urls",
      2686: "urls",
      2687: "_urls_length",
      2688: "_url_i",
      2689: "_url_step",
      2690: "_readyPromise",
      2691: "credit",
      2692: "_heightmapWidth",
      2693: "_heightmapHeight",
      2694: "getEstimatedLevelZeroGeometricErrorForAHeightmap",
      2695: "_opacity",
      2696: "opacity",
      2697: "_maxExtent",
      2698: "maxExtent",
      2699: "_topLevel",
      2700: "_bottomLevel",
      2701: "bottomLevel",
      2702: "ready",
      2705: "requestTileGeometry",
      2706: "&y=",
      2707: "&l=",
      2708: "_proxy",
      2710: "QUANTIZED_MESH",
      2711: "_terrainDataStructure",
      2712: "_skirtHeight",
      2713: "getLevelMaximumGeometricError",
      2714: "getvHeightBuffer",
      2715: "_vHeightBuffer",
      2716: "transformBuffer",
      2718: "requestFunction",
      2719: "GET",
      2720: "open",
      2721: "responseType",
      2722: "arraybuffer",
      2723: "async",
      2724: "RequestScheduler",
      2725: "request",
      2726: "readyState",
      2727: "status",
      2728: "response",
      2729: "byteLength",
      2730: "Inflate",
      2731: "decompress",
      2732: "_rectangles",
      2735: "subarray",
      2749: "int",
      2750: "float",
      2751: "quantized-mesh",
      2752: "heightmap",
      2768: "onerror",
      2770: "onload",
      2806: "_moveEnd",
      2807: "_changed",
      3362: "build",
      3531: "keys",
      3608: "proxy",
      3609: "metadata",
      3610: "roadMetadata",
      3611: "roadUrl",
      3612: "labelGraphics",
      3613: "billboardGraphics",
      3614: "aotuCollide",
      3615: "collisionPadding",
      3616: "serverFirstStyle",
      3617: "tileCache",
      3618: "labelCache",
      3619: "_isInitial",
      3620: "_latelyGrid",
      3621: "_UUID",
      3622: "GEO_WTFS_LABEL_",
      3623: "_UUIDRoad",
      3624: "getCacheTile",
      3625: "removeCacheTile",
      3626: "getCacheLabel",
      3627: "oid",
      3628: "addCacheLabel",
      3629: "removeCacheLabel",
      3630: "timestamp",
      3631: "getTileUrl",
      3633: "getIcoUrl",
      3635: "getRoadTileUrl",
      3636: "_timer",
      3637: "_tilesToRender",
      3638: "getTilesToRender",
      3639: "compareArray",
      3640: "_queueCall",
      3641: "_latelyRefreshStamp",
      3642: "_latelyCollisionStamp",
      3643: "collisionDetection",
      3644: "boundBox",
      3645: "minLevel",
      3646: "{z}",
      3647: "{x}",
      3648: "CutString",
      3649: "tile",
      3650: "addCacheTile",
      3651: "addLabelAndIco",
      3652: "delaySynchronous",
      3653: "send",
      3656: "Name",
      3657: "initTDT",
      3658: "pois",
      3659: "createLabel",
      3660: "_timer2",
      3661: "coordinate",
      3662: "font",
      3663: "px ",
      3664: "stringTable",
      3665: "label",
      3667: "fontStyle",
      3670: "fontColor",
      3671: "shiningColor",
      3672: "shiningSize",
      3673: "backgroundPadding",
      3674: "eyeOffset",
      3675: "disableDepthTestDistance",
      3676: "heightReference",
      3677: "NONE",
      3678: "symbolID",
      3679: "billboard",
      3681: "displayHeight",
      3684: "priority",
      3685: "xyz",
      3686: "debug",
      3688: "SceneTransforms",
      3689: "getLabelReact",
      3696: "collisionBox",
      3697: "bindEvent",
      3698: "moveEnd",
      3699: "changed",
      3700: "unbindEvent",
      3702: "entity",
      3703: "minX",
      3706: "option optimize_for = LITE_RUNTIME;",
      3707: "package GEOPOI;",
      3708: "enum enumGeometryType {",
      3709: "ePoint = 0;",
      3710: "eMultiLineString = 1;",
      3711: "ePolygon = 2;",
      3712: "} ;",
      3713: "message PBPOI{",
      3714: "required uint64 OID = 1;",
      3715: "required string Name =2;",
      3716: "repeated double Coordinates =3 [packed=true];",
      3717: "required enumGeometryType GeometryType = 4;",
      3718: "optional int32 Interate = 5;",
      3719: "optional int32 SymbolID = 10  [default = 0];",
      3720: "optional double DisplayHeight = 11 [default = 32];",
      3721: "optional uint32 ShiningColor=12 [default =0];",
      3722: "optional uint32\tFontNameIndex=13 [default =0];",
      3723: "optional int32\tFontSize=14 [default =18];",
      3724: "optional uint32\tFontColor=15 [default =0];",
      3725: "repeated string s = 1;",
      3726: "message PBPOITile{",
      3727: "required int64 Version = 1;",
      3728: "required StringTable StringTable = 3;",
      3729: "repeated PBPOI POIS = 4;",
      3730: "ProtoBuf",
      3732: "loadProto",
      3733: "GeoPOI.proto",
      3734: "GEOPOI",
      3735: "PBPOITile",
      3736: "enum enumZCoordType {eCloseGround = 0;eCloseSeaSurface = 1;eRelativelyGround = 2;eAbsolute = 3;};",
      3737: "optional enumZCoordType ZCoordType = 16 [default = eAbsolute];",
      3738: "message StringTable {",
      3739: "required int64 TileKey = 2;",
      3740: "GeoPOI2.proto",
      3741: "optional int32 Priority = 5;",
      3742: "repeated int32 Interates =6 [packed=true];",
      3743: "optional int32 FontStyle=17;",
      3744: "optional int32 ShiningSize=18;",
      3745: "GeoPOI3.proto",
      3747: "version",
      3748: "Version",
      3749: "titleKey",
      3750: "TileKey",
      3751: "StringTable",
      3752: "POIS",
      3753: "OID",
      3754: "SymbolID",
      3755: "DisplayHeight",
      3756: "ShiningColor",
      3757: "fontNameIndex",
      3758: "FontNameIndex",
      3759: "fontSize",
      3760: "FontSize",
      3761: "ZCoordType",
      3763: "geometryType",
      3764: "Coordinates",
      3765: "interates",
      3766: "Interates",
      3767: "FontStyle",
      3768: "ShiningSize",
      3769: "GeoWTFS",
      3919: "execScript",
      3922: "getParent",
      3930: "bufferSize",
      3931: "bufferType",
      3932: "resize",
      3945: "Zlib.Inflate",
      3946: "Zlib.Inflate.prototype.decompress",
      3947: "Zlib.Inflate.BufferType",
      3948: "Zlib.Deflate",
      3949: "Zlib.Deflate.compress",
      3950: "Zlib.Deflate.prototype.compress"
    }

    function P(e) {
      e = Number(e)
      return strName[e]
    }

    var T
    !(function (e) {
      if (("undefined" === typeof define ? "undefined" : w()(define)) === P("0x8") && define[P("0xd")]) {
        define(e)
      } else {
        e()
      }
    })(function () {}),
      (T = Cesium) &&
        ((T[P("0x45")] = {
          GeoCamera: !0,
          GeoCameraEventAggregator: !0,
          GeoScreenSpaceCameraController: !0
        }),
        (T[P("0xff")] = P("0x100")))

    if (
      //GeoTerrainProvider 地形服务
      ((function (Cesium) {
        var t = (Cesium.GeoTerrainProvider = function (i = {}) {
          if (!Cesium["defined"](i.urls)) throw new Cesium[P("0x15")](P("0xa75"))
          ;(this[P("0xa76")] = Cesium.defaultValue(i[P("0xa77")], Cesium[P("0xa78")][P("0xa79")])),
            (this[P("0xa7a")] = Cesium.defaultValue(i[P("0xa7b")], t[P("0xa7c")])),
            (this[P("0xa7d")] = i[P("0xa7e")]),
            (this[P("0xa7f")] = this[P("0xa7d")].length),
            (this[P("0xa80")] = 0),
            (this[P("0xa81")] = 0),
            (this[P("0xa0b")] = Cesium.defaultValue(i[P("0xa77")], Cesium[P("0xa78")][P("0xa79")])),
            (this[P("0x9fc")] = new Cesium[P("0x766")]()),
            (this[P("0x48b")] = !1),
            (this[P("0xa82")] = Cesium.when.defer()),
            (this._proxy = i.proxy),
            (this._terrainDataStructure = {
              heightScale: 0.001,
              heightOffset: -1e3,
              elementsPerHeight: 3,
              stride: 4,
              elementMultiplier: 256,
              isBigEndian: !0
            })
          var r = i[P("0xa83")]
          w()(r) === P("0x9fe") && (r = new Cesium[P("0x9ff")](r)), (this[P("0x9fd")] = r), (this._tilingScheme = void 0), (this._rectangles = [])
          var n = Cesium.defaultValue(i[P("0xef")], Cesium[P("0x16")][P("0x110")])
          ;(this[P("0x68a")] = new Cesium[P("0x9d7")]({
            ellipsoid: n
          })),
            (this[P("0xa84")] = 64),
            (this[P("0xa85")] = 64),
            (this._levelZeroMaximumGeometricError = Cesium[P("0xa11")][P("0xa86")](
              n,
              Math[P("0x7d")](this[P("0xa84")], this[P("0xa85")]),
              this[P("0x68a")].getNumberOfXTilesAtLevel(0)
            )),
            (this[P("0x48b")] = !0),
            this[P("0xa82")][P("0x9f8")](!0),
            (this[P("0x75b")] = i[P("0x176")]),
            (this[P("0xa87")] = i[P("0xa88")]),
            (this[P("0xa89")] = i[P("0xa8a")]),
            (this[P("0xa8b")] = Cesium.defaultValue(i.topLevel, 5)),
            (this[P("0xa8c")] = Cesium.defaultValue(i[P("0xa8d")], 25))
        })
        function i(t, i) {
          return (
            ((i = Cesium["defined"](i) ? i : new Cesium.Request())[P("0x6af")] = t),
            (i[P("0xa9e")] = function () {
              var i,
                r,
                n = P("0xa9f"),
                o = new XMLHttpRequest()
              return (
                o[P("0xaa0")](n, t, !0),
                (o[P("0xaa1")] = P("0xaa2")),
                (o[P("0xaa3")] = !1),
                o.send(null),
                (i = o),
                (r = Cesium[P("0x9ee")].defer()),
                (i.onreadystatechange = function () {
                  if (4 === i[P("0xaa6")])
                    if (200 === i[P("0xaa7")]) {
                      if (Cesium["defined"](i[P("0xaa8")])) {
                        for (var t = new DataView(i[P("0xaa8")]), n = new Uint8Array(t[P("0xaa9")]), o = 0; o < t.byteLength; )
                          (n[o] = t.getUint8(o, !0)), o++
                        var a = (function (t) {
                          if (!(t[P("0x0")] < 1e3)) {
                            var i = new Zlib[P("0xaaa")](t)
                            return Cesium["defined"](i) ? i[P("0xaab")]() : void 0
                          }
                        })(n)
                        Cesium["defined"](a) ? r[P("0x9f8")](a) : r[P("0xa3d")](void 0)
                      }
                    } else (400 <= i[P("0xaa7")] || 0 === i[P("0xaa7")]) && r.reject(void 0)
                }),
                r.promise
              )
            }),
            Cesium[P("0xaa4")][P("0xaa5")](i)
          )
        }
        Object.defineProperties(t.prototype, {
          errorEvent: {
            get: function () {
              return this[P("0x9fc")]
            }
          },
          credit: {
            get: function () {
              return this[P("0x9fd")]
            }
          },
          tilingScheme: {
            get: function () {
              if (!this[P("0xa8e")]) throw new Cesium[P("0x15")](P("0xa8f"))
              return this._tilingScheme
            }
          },
          ready: {
            get: function () {
              return this._ready
            }
          },
          readyPromise: {
            get: function () {
              return this[P("0xa82")][P("0xa90")]
            }
          },
          hasWaterMask: {
            get: function () {
              return !1
            }
          },
          hasVertexNormals: {
            get: function () {
              return !1
            }
          }
        }),
          (t.prototype[P("0xa91")] = function (r, o, a, s) {
            if (!this.ready) throw new Cesium.DeveloperError(P("0xa8f"))
            1 < this[P("0xa7f")] &&
              (this[P("0xa81")] < 8
                ? this[P("0xa81")]++
                : ((this[P("0xa81")] = 0), this[P("0xa80")]++, this[P("0xa80")] >= this._urls_length && (this[P("0xa80")] = 0)))
            var x = this[P("0xa7d")][this[P("0xa80")]]
            if ((this[P("0x68a")][P("0x9e2")](a), a < this[P("0xa8c")] && a >= this[P("0xa8b")])) {
              var l,
                c = -1 === x[P("0x2d3")]("?") ? "?" : "&",
                u = x + c + "x=" + r + P("0xa92") + o + P("0xa93") + (a + 1),
                h = this[P("0xa94")]
              if ((Cesium.defined(h) && (u = h["getURL"](u)), (s = Cesium.defaultValue(s, !0)))) {
                if (((l = i(u, s)), !Cesium.defined(l))) return
              } else l = i(u)
              if (this._tileType === t[P("0xa96")])
                return l.then(function (Cesium) {
                  return (function (Cesium, t, i, r, n) {
                    var o = 0,
                      a = 3 * Float64Array[P("0x4b5")],
                      s = 4 * Float64Array[P("0x4b5")],
                      x = 3 * Uint16Array.BYTES_PER_ELEMENT,
                      l = Uint16Array[P("0x4b5")],
                      c = 3 * l,
                      u = new DataView(t),
                      h = new Cartesian3(u[P("0xaad")](o, !0), u[P("0xaad")](o + 8, !0), u[P("0xaad")](o + 16, !0))
                    o += a
                    var f = u[P("0xaae")](o, !0)
                    o += Float32Array.BYTES_PER_ELEMENT
                    var d = u[P("0xaae")](o, !0)
                    o += Float32Array.BYTES_PER_ELEMENT
                    var g = new BoundingSphere(
                      new Cartesian3(u.getFloat64(o, !0), u[P("0xaad")](o + 8, !0), u[P("0xaad")](o + 16, !0)),
                      u[P("0xaad")](o + a, !0)
                    )
                    o += s
                    var p = new Cartesian3(u[P("0xaad")](o, !0), u[P("0xaad")](o + 8, !0), u[P("0xaad")](o + 16, !0))
                    o += a
                    var m = u.getUint32(o, !0)
                    o += Uint32Array.BYTES_PER_ELEMENT
                    var b = new Uint16Array(t, o, 3 * m)
                    ;(o += m * x), 65536 < m && (c = 3 * (l = Uint32Array[P("0x4b5")]))
                    var v = b[P("0xaaf")](0, m),
                      C = b[P("0xaaf")](m, 2 * m),
                      y = b[P("0xaaf")](2 * m, 3 * m)
                    AttributeCompression.zigZagDeltaDecode(v, C, y), o % l !== 0 && (o += l - (o % l))
                    var _ = u[P("0xab0")](o, !0)
                    o += Uint32Array[P("0x4b5")]
                    var A = IndexDatatype[P("0xab1")](m, t, o, 3 * _)
                    o += _ * c
                    for (var I = 0, w = A[P("0x0")], G = 0; G < w; ++G) {
                      var E = A[G]
                      ;(A[G] = I - E), 0 === E && ++I
                    }
                    var S = u[P("0xab0")](o, !0)
                    o += Uint32Array.BYTES_PER_ELEMENT
                    var T = IndexDatatype[P("0xab1")](m, t, o, S)
                    o += S * l
                    var M = u[P("0xab0")](o, !0)
                    o += Uint32Array[P("0x4b5")]
                    var N = IndexDatatype[P("0xab1")](m, t, o, M)
                    o += M * l
                    var L = u[P("0xab0")](o, !0)
                    o += Uint32Array.BYTES_PER_ELEMENT
                    var R = IndexDatatype[P("0xab1")](m, t, o, L)
                    o += L * l
                    var O = u[P("0xab0")](o, !0)
                    o += Uint32Array[P("0x4b5")]
                    var F,
                      D,
                      U = IndexDatatype.createTypedArrayFromArrayBuffer(m, t, o, O)
                    for (o += O * l; o < u[P("0xaa9")]; ) {
                      var k = u[P("0xab2")](o, !0)
                      o += Uint8Array[P("0x4b5")]
                      var B = u.getUint32(o, !0)
                      if (((o += Uint32Array[P("0x4b5")]), k === QuantizedMeshExtensionIds[P("0xab3")] && Cesium[P("0xab4")]))
                        F = new Uint8Array(t, o, 2 * m)
                      else if (k === QuantizedMeshExtensionIds[P("0xab5")] && Cesium._requestWaterMask) D = new Uint8Array(t, o, B)
                      else if (k === QuantizedMeshExtensionIds[P("0xab6")] && Cesium[P("0xab7")]) {
                        var W = u[P("0xab0")](o, !0)
                        if (0 < W) {
                          var j = getStringFromTypedArray(new Uint8Array(t), o + Uint32Array[P("0x4b5")], W),
                            V = JSON[P("0x946")](j)[P("0xab8")]
                          if (defined(V))
                            for (var z = 0; z < V[P("0x0")]; ++z)
                              for (var H = i + z + 1, q = V[z], X = (Cesium._tilingScheme[P("0x9e2")](H), 0); X < q[P("0x0")]; ++X) {
                                var Y = q[X]
                                Y[P("0xab9")], Y.startY
                              }
                        }
                      }
                      o += B
                    }
                    var K,
                      Q = 5 * Cesium[P("0xa99")](i),
                      Z = Cesium[P("0x68a")][P("0xa33")](r, n, i)
                    return (
                      Z.width < CesiumMath.PI_OVER_TWO + CesiumMath[P("0xaba")] &&
                        (K = OrientedBoundingBox[P("0xabb")](Z, f, d, Cesium[P("0x68a")][P("0xef")])),
                      new QuantizedMeshTerrainData({
                        center: h,
                        minimumHeight: f,
                        maximumHeight: d,
                        boundingSphere: g,
                        orientedBoundingBox: K,
                        horizonOcclusionPoint: p,
                        quantizedVertices: b,
                        encodedNormals: F,
                        indices: A,
                        westIndices: T,
                        southIndices: N,
                        eastIndices: R,
                        northIndices: U,
                        westSkirtHeight: Q,
                        southSkirtHeight: Q,
                        eastSkirtHeight: Q,
                        northSkirtHeight: Q,
                        waterMask: D,
                        credits: Cesium[P("0xabc")]
                      })
                    )
                  })(provider, Cesium, a, r, o)
                })
              var f = this
              return l.then(function (t) {
                var i = f.transformBuffer(t)
                if (Cesium.defined(i)) {
                  var s = new Cesium[P("0xa64")]({
                    buffer: i,
                    width: f[P("0xa84")],
                    height: f[P("0xa85")],
                    childTileMask: n(f, r, o, a),
                    structure: f[P("0xa97")]
                  })
                  return (s[P("0xa98")] = 6e3), s
                }
              })
            }
            if (a < this[P("0xa8b")]) {
              var d = this[P("0xa84")],
                g = this[P("0xa85")],
                p = n(this, r, o, a),
                m = this._terrainDataStructure
              return new Cesium[P("0xa64")]({
                buffer: this.getvHeightBuffer(),
                width: d,
                height: g,
                childTileMask: p,
                structure: m
              })
            }
            return a >= this[P("0xa8c")]
              ? new C.a(function (e, t) {
                  t("该级别不发送请求！")
                })
              : void 0
          }),
          (t.prototype[P("0xa99")] = function (t) {
            if (!this[P("0xa8e")]) throw new Cesium[P("0x15")]("requestTileGeometry must not be called before ready returns true.")
            return this._levelZeroMaximumGeometricError / (1 << t)
          }),
          (t.prototype[P("0x9fb")] = function (Cesium, t, i) {
            if (i < 25) return !0
          }),
          (t.prototype[P("0xa9a")] = function () {
            var t = this[P("0xa9b")]
            if (!Cesium["defined"](t)) {
              t = new Uint8ClampedArray(this._heightmapWidth * this._heightmapHeight * 4)
              for (var i = 0; i < this[P("0xa84")] * this[P("0xa85")] * 4; ) (t[i++] = 15), (t[i++] = 66), (t[i++] = 64), (t[i++] = 255)
              this[P("0xa9b")] = t
            }
            return t
          }),
          (t.prototype[P("0xa9c")] = function (t) {
            var i = 2
            this._dataType === Cesium.GeoTerrainProvider[P("0xa79")] ? (i = 2) : this._dataType === Cesium[P("0xa78")].FLOAT && (i = 4)
            var r = t
            if (r[P("0x0")] !== 22500 * i) return null
            for (
              var n,
                o,
                a,
                s,
                x,
                l = new ArrayBuffer(i),
                c = new DataView(l),
                u = this[P("0xa84")],
                h = this[P("0xa85")],
                f = new Uint8Array(u * h * 4),
                d = 0;
              d < h;
              d++
            )
              for (var g = 0; g < u; g++) {
                ;(s = p()((149 * d) / (h - 1))),
                  (x = p()((149 * g) / (u - 1))),
                  (1e4 <
                    (n =
                      4 === i
                        ? ((o = i * (150 * s + x)),
                          c.setInt8(0, r[o]),
                          c[P("0xa9d")](1, r[o + 1]),
                          c[P("0xa9d")](2, r[o + 2]),
                          c.setInt8(3, r[o + 3]),
                          c.getFloat32(0, !0))
                        : r[(o = i * (150 * s + x))] + 256 * r[o + 1]) ||
                    n < -2e3) &&
                    (n = 0)
                var m = (n + 1e3) / 0.001
                ;(f[(a = 4 * (d * u + g))] = m / 65536),
                  (f[1 + a] = (m - 256 * f[a] * 256) / 256),
                  (f[2 + a] = m - 256 * f[a] * 256 - 256 * f[1 + a]),
                  (f[3 + a] = 255)
              }
            return f
          })
        var r = new Cesium[P("0x26b")]()
        function n(t, i, n, a) {
          for (var s = t._tilingScheme, x = t[P("0xaac")], l = s[P("0xa33")](i, n, a), c = 0, u = 0; u < x[P("0x0")] && 15 !== c; ++u) {
            var h = x[u]
            if (!(h[P("0x109")] <= a)) {
              var f = h[P("0x969")],
                d = Cesium[P("0x26b")][P("0x348")](f, l, r)
              Cesium["defined"](d) &&
                (o(s, f, 2 * i, 2 * n, a + 1) && (c |= 4),
                o(s, f, 2 * i + 1, 2 * n, a + 1) && (c |= 8),
                o(s, f, 2 * i, 2 * n + 1, a + 1) && (c |= 1),
                o(s, f, 2 * i + 1, 2 * n + 1, a + 1) && (c |= 2))
            }
          }
          return c
        }
        function o(t, i, n, o, a) {
          var s = t[P("0xa33")](n, o, a)
          return Cesium["defined"](Cesium.Rectangle.intersection(s, i, r))
        }
        ;(t[P("0xa79")] = P("0xabd")), (t[P("0x5e9")] = P("0xabe")), (t.QUANTIZED_MESH = P("0xabf")), (t[P("0xa7c")] = P("0xac0"))
      })(Cesium),
      //Cesium.GeoWTFS 三维地名服务
      (function (Cesium) {
        var t = Cesium.defaultValue
        function i(i) {
          ;(i = t(i, {})),
            (this[P("0xe18")] = i.proxy),
            (this.viewer = i.viewer),
            (this.url = i[P("0x6af")]),
            (this[P("0xe19")] = i.metadata),
            (this[P("0xe1a")] = i.roadMetadata),
            (this[P("0xe1b")] = i[P("0xe1b")]),
            (this[P("0xe1c")] = i.labelGraphics ? i.labelGraphics : {}),
            (this[P("0xe1d")] = i[P("0xe1d")] ? i.billboardGraphics : {}),
            (this[P("0xe1e")] = !!i.aotuCollide),
            (this.collisionPadding = i[P("0xe1f")] ? i[P("0xe1f")] : [3, 5, 3, 5]),
            (this[P("0xe20")] = !!i[P("0xe20")]),
            (this[P("0xa4e")] = i.subdomains),
            Array.isArray(this[P("0xa4e")])
              ? (this[P("0xa4e")] = this[P("0xa4e")].slice())
              : Cesium["defined"](this[P("0xa4e")]) && 0 < this[P("0xa4e")][P("0x0")]
              ? (this[P("0xa4e")] = this[P("0xa4e")][P("0x7f2")](""))
              : (this[P("0xa4e")] = ["a", "b", "c"]),
            (this[P("0xe21")] = []),
            (this[P("0xe22")] = []),
            (this[P("0xe23")] = !1),
            (this[P("0xe24")] = []),
            (this._latelyRefreshStamp = 0),
            (this._latelyCollisionStamp = 0)
          var r = Cesium[P("0x75c")]()
          ;(this[P("0xe25")] = P("0xe26") + r),
            (this[P("0xe27")] = "GEO_WTFS_LABEL_ROAD_" + r),
            (this.viewer.camera.percentageChanged = 0.18),
            this.bindEvent()
        }
        function r(Cesium, t) {
          return (
            (t[P("0xe77")] >= Cesium[P("0xe77")] && t.minX <= Cesium.maxX && t[P("0x4d2")] >= Cesium[P("0x4d2")] && t[P("0x4d2")] <= Cesium.maxY) ||
            (t[P("0xe78")] >= Cesium[P("0xe77")] &&
              t.maxX <= Cesium[P("0xe78")] &&
              t[P("0xe79")] >= Cesium[P("0x4d2")] &&
              t[P("0xe79")] <= Cesium.maxY) ||
            (t[P("0xe77")] >= Cesium[P("0xe77")] &&
              t[P("0xe77")] <= Cesium[P("0xe78")] &&
              t[P("0xe79")] >= Cesium[P("0x4d2")] &&
              t.maxY <= Cesium[P("0xe79")]) ||
            (t[P("0xe78")] >= Cesium[P("0xe77")] && t.maxX <= Cesium.maxX && t[P("0x4d2")] >= Cesium[P("0x4d2")] && t[P("0x4d2")] <= Cesium.maxY)
          )
        }
        function n(Cesium, t) {
          var i = Cesium.x,
            r = Cesium.y,
            n = Cesium.width,
            o = Cesium.height,
            a = t.x,
            s = t.y,
            x = t[P("0x19a")],
            l = t[P("0x8b")]
          return !((a <= i && a + x <= i) || (i <= a && i + n <= a) || (s <= r && s + l <= r) || (r <= s && r + o <= s))
        }
        Cesium["defined"],
          Object.defineProperties(i.prototype, {}),
          (i.prototype[P("0xe28")] = function (Cesium, t, i, r) {
            for (var n = 0; n < this[P("0xe21")].length; n++)
              if (this[P("0xe21")][n].x === Cesium && this[P("0xe21")][n].y === t && this[P("0xe21")][n].z === i && this[P("0xe21")][n].t === r)
                return this[P("0xe21")][n]
            return null
          }),
          (i.prototype.addCacheTile = function (Cesium) {
            999 < this[P("0xe21")][P("0x0")] && this[P("0xe21")][P("0x259")](0, 500),
              this[P("0xe29")](Cesium.x, Cesium.y, Cesium.z, Cesium.t),
              this[P("0xe21")][P("0x17c")](Cesium)
          }),
          (i.prototype[P("0xe29")] = function (Cesium, t, i, r) {
            for (var n = 0; n < this.tileCache[P("0x0")]; n++)
              if (this[P("0xe21")][n].x === Cesium && this[P("0xe21")][n].y === t && this[P("0xe21")][n].z === i && this[P("0xe21")][n].t === r) {
                this[P("0xe21")][P("0x259")](n, 1)
                break
              }
          }),
          (i.prototype[P("0xe2a")] = function (Cesium) {
            for (var t = 0; t < this.labelCache[P("0x0")]; t++)
              if (this.labelCache[t][P("0x176")] === this[P("0xe25")] && this[P("0xe22")][t][P("0xe2b")] === Cesium) return this.labelCache[t]
            return null
          }),
          (i.prototype[P("0xe2c")] = function (Cesium) {
            999 < this[P("0xe22")].length && this[P("0xe22")].splice(0, 250),
              this[P("0xe2d")](Cesium[P("0xe2b")]),
              (Cesium[P("0xe2e")] = new Date().getTime()),
              this[P("0xe22")][P("0x17c")](Cesium)
          }),
          (i.prototype[P("0xe2d")] = function (Cesium) {
            for (var t = 0; t < this[P("0xe22")].length; t++)
              if (this[P("0xe22")][t][P("0x176")] === this._UUID && this.labelCache[t][P("0xe2b")] === Cesium) {
                this[P("0xe22")][P("0x259")](t, 1)
                break
              }
          }),
          (i.prototype[P("0xe2f")] = function () {
            return (this[P("0xe18")] ? this.proxy.proxy : "") + this.url + P("0xe30")
          }),
          (i.prototype[P("0xe31")] = function () {
            return (this[P("0xe18")] ? this.proxy[P("0xe18")] : "") + this.url + P("0xe32")
          }),
          (i.prototype[P("0xe33")] = function () {
            return (this[P("0xe18")] ? this[P("0xe18")][P("0xe18")] : "") + this[P("0xe1b")]
          }),
          (i.prototype._moveEnd = function () {
            var Cesium = this
            clearTimeout(this[P("0xe34")])
            var t = this.viewer.scene[P("0xa3")][P("0xa2e")]
            if (t[P("0xe35")][P("0x0")] < 2 || 0 < t._tileLoadQueueHigh.length)
              this[P("0xe34")] = setTimeout(function () {
                Cesium._moveEnd()
              }, 100)
            else {
              var i = this[P("0xe36")]()
              if (this[P("0xe37")](i, this._latelyGrid)) return
              this[P("0xe38")](i), Cesium.delaySynchronous()
            }
          }),
          (i.prototype._changed = function () {
            var Cesium = new Date().getTime(),
              t = Cesium - this[P("0xe39")],
              i = Cesium - this[P("0xe3a")]
            300 < t && this._moveEnd(), 150 < i && this[P("0xe3b")]()
          }),
          (i.prototype._queueCall = function (Cesium) {
            var t = this
            ;(t[P("0xe24")] = Cesium),
              (t[P("0xe39")] = new Date()[P("0x68")]()),
              Cesium[P("0x1e4")](function (Cesium, i, n) {
                if (t[P("0xe19")] && r(t.metadata[P("0xe3c")], Cesium.boundBox)) {
                  if (t.metadata[P("0xe3d")] > Cesium[P("0x968")] + 1 || t[P("0xe19")][P("0x109")] < Cesium[P("0x968")] + 1) return
                  var o = t[P("0xe28")](Cesium.x, Cesium.y, Cesium.level + 1, 0)
                  if (o) t.addLabelAndIco(o)
                  else {
                    var s = t[P("0xe2f")]()
                        .replace(P("0xe3e"), Cesium.level + 1)
                        [P("0xa1c")]("{y}", Cesium.y)
                        .replace(P("0xe3f"), Cesium.x)
                        .replace(P("0xa04"), t[P("0xa4e")][(Cesium.x + Cesium.y + Cesium[P("0x968")]) % t[P("0xa4e")][P("0x0")]]),
                      x = new XMLHttpRequest()
                    x[P("0xaa0")](P("0xa9f"), s, !0),
                      (x[P("0xaa1")] = P("0xaa2")),
                      (x[P("0xad2")] = function () {
                        if (!(x.status < 200 || 300 <= x[P("0xaa7")])) {
                          var Cesium = t[P("0xe40")](x[P("0xaa8")])
                          if (Cesium)
                            ((i = a(Cesium)).x = this.tile.x),
                              (i.y = this[P("0xe41")].y),
                              (i.z = this.tile.z),
                              (i.t = 0),
                              t[P("0xe42")](i),
                              t[P("0xe43")](i)
                          else {
                            var i = {
                              x: this[P("0xe41")].x,
                              y: this[P("0xe41")].y,
                              z: this[P("0xe41")].z,
                              t: 0
                            }
                            t[P("0xe42")](i), t[P("0xe44")]()
                          }
                        }
                      }),
                      (x[P("0xad0")] = function (e) {
                        // console.log(e)
                      }),
                      x[P("0xe45")](),
                      (x.tile = {
                        x: Cesium.x,
                        y: Cesium.y,
                        z: Cesium[P("0x968")] + 1
                      })
                  }
                }
                if (t[P("0xe1a")] && r(t[P("0xe1a")][P("0xe3c")], Cesium.boundBox)) {
                  if (t[P("0xe1a")][P("0xe3d")] > Cesium[P("0x968")] + 1 || t[P("0xe1a")][P("0x109")] < Cesium[P("0x968")] + 1) return
                  if ((o = t[P("0xe28")](Cesium.x, Cesium.y, Cesium[P("0x968")] + 1, 1))) t[P("0xe43")](o)
                  else {
                    var l = t[P("0xe33")]()
                        [P("0xa1c")](P("0xe3e"), Cesium[P("0x968")] + 1)
                        .replace("{y}", Cesium.y)
                        [P("0xa1c")]("{x}", Cesium.x),
                      c = new XMLHttpRequest()
                    c[P("0xaa0")](P("0xa9f"), l, !0),
                      (c[P("0xaa1")] = P("0xe46")),
                      (c[P("0xad2")] = function () {
                        if (!(c[P("0xaa7")] < 200 || 300 <= c[P("0xaa7")])) {
                          var Cesium = c[P("0xaa8")]
                          if (Cesium) {
                            var i = {
                              pois: Cesium[P("0x815")](function (Cesium, t, i) {
                                return {
                                  oid: Cesium.LabelPoint.X + "_" + Cesium[P("0xe47")].Y,
                                  name: Cesium[P("0x344")][P("0x33d")][P("0xe48")],
                                  coordinate: [Cesium.LabelPoint.X, Cesium.LabelPoint.Y, Cesium.LabelPoint.Z ? Cesium[P("0xe47")].Z : 0]
                                }
                              }),
                              x: this[P("0xe41")].x,
                              y: this[P("0xe41")].y,
                              z: this.tile.z,
                              t: 1
                            }
                            t[P("0xe42")](i), t[P("0xe43")](i)
                          } else
                            (i = {
                              x: this.tile.x,
                              y: this[P("0xe41")].y,
                              z: this.tile.z,
                              t: 1
                            }),
                              t[P("0xe42")](i),
                              t[P("0xe44")]()
                        }
                      }),
                      (c.onerror = function (Cesium) {
                        console.error(Cesium)
                      }),
                      c[P("0xe45")](),
                      (c[P("0xe41")] = {
                        x: Cesium.x,
                        y: Cesium.y,
                        z: Cesium[P("0x968")] + 1
                      })
                  }
                }
              })
          }),
          (i.prototype[P("0xe49")] = function (Cesium) {
            var t = 0,
              i = this
            ;(i[P("0xe23")] = !0), i[P("0xe38")](Cesium)
            var r = setInterval(function () {
              3 < t && ((i[P("0xe23")] = !1), clearInterval(r)), t % 2 === 0 && i[P("0xe1e")] && i[P("0xe3b")](), t++
            }, 600)
            return i
          }),
          (i.prototype[P("0xe36")] = function () {
            for (
              var t = this.viewer.scene[P("0xa3")][P("0xa2e")]._tilesToRender
                  .map(function (t, i, r) {
                    return {
                      x: t.x,
                      y: t.y,
                      level: t.level,
                      boundBox: {
                        minX: Cesium.Math.toDegrees(t[P("0x969")].west),
                        minY: Cesium.Math.toDegrees(t[P("0x969")].south),
                        maxX: Cesium.Math.toDegrees(t[P("0x969")][P("0x2aa")]),
                        maxY: Cesium.Math[P("0x113")](t[P("0x969")][P("0x2ac")])
                      }
                    }
                  })
                  .sort(function (Cesium, t) {
                    return t[P("0x968")] - Cesium.level
                  }),
                i = [t[0][P("0x968")]],
                r = 0;
              r < t[P("0x0")];
              r++
            )
              t[r][P("0x968")] !== i[i.length - 1] && i[P("0x17c")](t[r][P("0x968")]), 4 < i[P("0x0")] && (t[P("0x259")](r), r--)
            return t
          }),
          (i.prototype.addLabelAndIco = function (Cesium) {
            if (Cesium.pois)
              for (var t = 0; t < Cesium[P("0xe4a")][P("0x0")]; t++) {
                var i = this[P("0xe2a")](Cesium[P("0xe4a")][t][P("0xe2b")])
                ;(i = i || this[P("0xe4b")](Cesium[P("0xe4a")][t], Cesium)), this[P("0xe2c")](i)
              }
            this[P("0xe44")]()
          }),
          (i.prototype.delaySynchronous = function () {
            var Cesium = this
            clearTimeout(Cesium._timer2),
              (Cesium[P("0xe4c")] = setTimeout(function () {
                Cesium.synchronousLabel()
              }, 100))
          }),
          (i.prototype.synchronousLabel = function () {
            for (var Cesium = 0; Cesium < this.labelCache[P("0x0")]; Cesium++)
              this[P("0xe22")][Cesium].timestamp >= this[P("0xe39")] &&
                !this.viewer[P("0x194")].contains(this.labelCache[Cesium]) &&
                (this._isInitial && this[P("0xe1e")] && (this[P("0xe22")][Cesium][P("0x221")] = !1),
                this.viewer[P("0x194")][P("0x6d")](this.labelCache[Cesium]))
            if (!this[P("0xe23")]) {
              for (Cesium = 0; Cesium < this.viewer.entities[P("0x190")][P("0x0")]; Cesium++)
                !this.viewer[P("0x194")][P("0x190")][Cesium][P("0x176")] ||
                  (this.viewer[P("0x194")][P("0x190")][Cesium][P("0x176")] !== this[P("0xe25")] &&
                    this.viewer[P("0x194")][P("0x190")][Cesium].name !== this[P("0xe27")]) ||
                  (this.viewer[P("0x194")][P("0x190")][Cesium].timestamp < this._latelyRefreshStamp &&
                    (this.viewer[P("0x194")].remove(this.viewer[P("0x194")][P("0x190")][Cesium]), Cesium--))
              this[P("0xe1e")] && this[P("0xe3b")]()
            }
          }),
          (i.prototype[P("0xe4b")] = function (t, i) {
            if (t) {
              var r,
                n,
                o = {
                  show: !0,
                  position: Cesium.Cartesian3.fromDegrees(t[P("0xe4d")][0], t[P("0xe4d")][1], t[P("0xe4d")][2]),
                  label: {
                    text: t.name
                  }
                }
              this.serverFirstStyle && void 0 !== t.fontSize
                ? ((o.label[P("0xe4e")] = t.fontSize + P("0xe4f")),
                  void 0 !== t.fontNameIndex && i[P("0xe50")] && i[P("0xe50")][t.fontNameIndex]
                    ? (o[P("0xe51")][P("0xe4e")] += i[P("0xe50")][t.fontNameIndex])
                    : (o[P("0xe51")].font += P("0xe52")),
                  (!this[P("0xe1c")][P("0x3fa")] && 1 !== t[P("0xe53")] && 3 !== t[P("0xe53")]) || (r = !0),
                  (2 !== t[P("0xe53")] && 3 !== t.fontStyle) || (n = !0),
                  r && (o[P("0xe51")][P("0xe4e")] = P("0xe54") + o[P("0xe51")].font),
                  n && (o[P("0xe51")][P("0xe4e")] = P("0xe55") + o[P("0xe51")][P("0xe4e")]))
                : this[P("0xe1c")][P("0xe4e")] && (o[P("0xe51")].font = this[P("0xe1c")][P("0xe4e")]),
                this[P("0xe20")] && void 0 !== t[P("0xe56")]
                  ? (o[P("0xe51")].fillColor = Cesium[P("0x16a")].fromCssColorString(this.HexadecimalConversion(t[P("0xe56")])))
                  : this.labelGraphics.fillColor && (o.label[P("0x3dd")] = this[P("0xe1c")][P("0x3dd")]),
                this[P("0xe20")] && void 0 !== t[P("0xe57")]
                  ? (o[P("0xe51")].outlineColor = Cesium.Color[P("0x27e")](this.HexadecimalConversion(t[P("0xe57")])))
                  : this[P("0xe1c")][P("0x3df")] && (o[P("0xe51")][P("0x3df")] = this[P("0xe1c")][P("0x3df")]),
                this[P("0xe20")] && w()(t.shiningSize) === P("0x49f")
                  ? (o.label[P("0x3de")] = t[P("0xe58")])
                  : void 0 !== this[P("0xe1c")].outlineWidth && (o[P("0xe51")][P("0x3de")] = this[P("0xe1c")][P("0x3de")]),
                this.serverFirstStyle && void 0 !== t[P("0x3d8")]
                  ? (o[P("0xe51")][P("0x3d8")] = t[P("0x3d8")])
                  : void 0 !== this[P("0xe1c")].showBackground && (o[P("0xe51")][P("0x3d8")] = this[P("0xe1c")].showBackground),
                this.serverFirstStyle && void 0 !== t.backgroundColor
                  ? (o[P("0xe51")][P("0x3d9")] = t[P("0x3d9")])
                  : void 0 !== this[P("0xe1c")][P("0x3d9")] && (o[P("0xe51")][P("0x3d9")] = this[P("0xe1c")][P("0x3d9")]),
                this.serverFirstStyle && void 0 !== t[P("0xe59")]
                  ? (o[P("0xe51")].backgroundPadding = t.backgroundPadding)
                  : void 0 !== this[P("0xe1c")][P("0xe59")] && (o[P("0xe51")][P("0xe59")] = this[P("0xe1c")][P("0xe59")]),
                i.t
                  ? ((o[P("0xe51")].verticalOrigin = Cesium[P("0x24d")][P("0x24c")]), (o[P("0xe51")][P("0x3da")] = Cesium[P("0x24b")][P("0x24c")]))
                  : (this[P("0xe20")] && void 0 !== t[P("0x3db")]
                      ? (o[P("0xe51")][P("0x3db")] = t[P("0x3db")])
                      : void 0 !== this[P("0xe1c")].verticalOrigin && (o[P("0xe51")][P("0x3db")] = this[P("0xe1c")][P("0x3db")]),
                    this[P("0xe20")] && void 0 !== t[P("0x3da")]
                      ? (o.label[P("0x3da")] = t[P("0x3da")])
                      : void 0 !== this[P("0xe1c")].horizontalOrigin && (o[P("0xe51")].horizontalOrigin = this[P("0xe1c")].horizontalOrigin)),
                this[P("0xe20")] && void 0 !== t.eyeOffset
                  ? (o[P("0xe51")][P("0xe5a")] = t[P("0xe5a")])
                  : void 0 !== this[P("0xe1c")][P("0xe5a")] && (o.label[P("0xe5a")] = this[P("0xe1c")][P("0xe5a")]),
                this[P("0xe20")] && void 0 !== t[P("0x3dc")]
                  ? (o[P("0xe51")][P("0x3dc")] = t.pixelOffset)
                  : void 0 !== this[P("0xe1c")].pixelOffset && (o[P("0xe51")].pixelOffset = this.labelGraphics[P("0x3dc")]),
                this[P("0xe20")] && void 0 !== t[P("0x150")]
                  ? (o.label[P("0x150")] = t[P("0x150")])
                  : void 0 !== this[P("0xe1c")][P("0x150")] && (o[P("0xe51")].style = this.labelGraphics[P("0x150")]),
                this[P("0xe20")] && void 0 !== t[P("0xfc")]
                  ? (o.label.scale = t.scale)
                  : void 0 !== this[P("0xe1c")].scale && (o.label[P("0xfc")] = this[P("0xe1c")][P("0xfc")]),
                (o[P("0xe51")][P("0xe5b")] = this.labelGraphics[P("0xe5b")]),
                (o.label[P("0xe5c")] = this[P("0xe1c")][P("0xe5c")] ? this.labelGraphics.heightReference : Cesium.HeightReference[P("0xe5d")]),
                void 0 !== t.symbolID &&
                  -1 < t[P("0xe5e")] &&
                  ((o[P("0xe5f")] = {
                    image: this[P("0xe31")]()
                      [P("0xa1c")](P("0xe60"), t[P("0xe5e")])
                      [P("0xa1c")](P("0xa04"), this.subdomains[(i.x + i.y + i.z) % this[P("0xa4e")][P("0x0")]])
                  }),
                  this[P("0xe20")] && void 0 !== t[P("0xe61")]
                    ? ((o.billboard.width = t.displayHeight), (o[P("0xe5f")].height = t[P("0xe61")]))
                    : (void 0 === this.billboardGraphics[P("0x19a")] && void 0 === this[P("0xe1d")][P("0x8b")]) ||
                      ((o[P("0xe5f")].width = this[P("0xe1d")].width), (o.billboard[P("0x8b")] = this.billboardGraphics[P("0x8b")])),
                  i.t
                    ? ((o.label[P("0x3db")] = Cesium[P("0x24d")][P("0x3c7")]), (o[P("0xe51")][P("0x3da")] = Cesium[P("0x24b")][P("0x24c")]))
                    : (this[P("0xe20")] && void 0 !== t[P("0x3db")]
                        ? (o[P("0xe5f")].verticalOrigin = t.verticalOrigin)
                        : void 0 !== this.billboardGraphics.verticalOrigin && (o[P("0xe5f")][P("0x3db")] = this[P("0xe1d")][P("0x3db")]),
                      this[P("0xe20")] && void 0 !== t[P("0x3da")]
                        ? (o[P("0xe5f")].horizontalOrigin = t.horizontalOrigin)
                        : void 0 !== this.billboardGraphics[P("0x3da")] && (o[P("0xe5f")][P("0x3da")] = this[P("0xe1d")][P("0x3da")])),
                  this[P("0xe20")] && void 0 !== t[P("0xe5a")]
                    ? (o[P("0xe5f")][P("0xe5a")] = t[P("0xe5a")])
                    : void 0 !== this[P("0xe1d")].eyeOffset && (o[P("0xe5f")][P("0xe5a")] = this[P("0xe1d")][P("0xe5a")]),
                  this[P("0xe20")] && void 0 !== t.pixelOffset
                    ? (o.billboard[P("0x3dc")] = t[P("0x3dc")])
                    : void 0 !== this.billboardGraphics[P("0x3dc")] && (o[P("0xe5f")].pixelOffset = this[P("0xe1d")][P("0x3dc")]),
                  this[P("0xe20")] && void 0 !== t[P("0xfb")]
                    ? (o[P("0xe5f")][P("0xfb")] = t[P("0xfb")])
                    : void 0 !== this.billboardGraphics.rotation && (o.billboard[P("0xfb")] = this.billboardGraphics[P("0xfb")]),
                  this[P("0xe20")] && void 0 !== t.alignedAxis
                    ? (o[P("0xe5f")][P("0xe62")] = t[P("0xe62")])
                    : void 0 !== this.billboardGraphics[P("0xe62")] && (o[P("0xe5f")].alignedAxis = this.billboardGraphics[P("0xe62")]),
                  this[P("0xe20")] && void 0 !== t[P("0x169")]
                    ? (o[P("0xe5f")].color = t[P("0x169")])
                    : void 0 !== this[P("0xe1d")].color && (o[P("0xe5f")][P("0x169")] = this[P("0xe1d")].color),
                  this.serverFirstStyle && void 0 !== t[P("0xfc")]
                    ? (o[P("0xe5f")][P("0xfc")] = t.scale)
                    : void 0 !== this[P("0xe1d")].scale && (o[P("0xe5f")].scale = this[P("0xe1d")][P("0xfc")]),
                  (o.billboard[P("0xe5b")] = this[P("0xe1d")][P("0xe5b")]),
                  (o.billboard[P("0xe5c")] = this[P("0xe1d")][P("0xe5c")] ? this[P("0xe1d")][P("0xe5c")] : Cesium[P("0xe63")].NONE))
              var a = new Cesium[P("0x18e")](o)
              return (
                (a[P("0x176")] = i.t ? this[P("0xe27")] : this[P("0xe25")]),
                (a[P("0xe2b")] = t.oid),
                (a[P("0xe64")] = t[P("0xe64")] ? t[P("0xe64")] : 0),
                (a[P("0xe65")] = i.x + "_" + i.y + "_" + (i.z - 1)),
                a
              )
            }
          }),
          (i.prototype.getPropertyValue = function (Cesium, t, i, r) {
            return void 0 !== t[Cesium] ? t[Cesium] : void 0 !== i[Cesium] ? i[Cesium] : r
          }),
          (i.prototype[P("0xe3b")] = function () {
            if (this[P("0xe66")])
              for (var t = document[P("0xe67")](P("0xe66")), i = 0; i < t[P("0x0")]; i++) this.viewer[P("0x131")][P("0x41b")](t[i]), i--
            var r = [],
              o = this.viewer[P("0x194")][P("0x190")]
            for (i = 0; i < o[P("0x0")]; i++)
              if (o[i][P("0x176")] && (o[i][P("0x176")] === this[P("0xe25")] || o[i][P("0x176")] === this[P("0xe27")])) {
                var a, s
                ;(a = Cesium[P("0xe68")].worldToDrawingBufferCoordinates(this.viewer.scene, o[i].position[P("0x512")](0))),
                  (o[i][P("0x221")] = !0),
                  (s = this[P("0xe69")]({
                    point: a,
                    entity: o[i]
                  })),
                  (o[i].collisionBox = s)
                for (var x = null, l = 0; l < r.length; l++)
                  if (r[l][P("0xe65")] === o[i].xyz) {
                    x = r[l]
                    break
                  }
                if (
                  (x ||
                    ((x = {
                      xyz: o[i][P("0xe65")],
                      entities: []
                    }),
                    r.push(x)),
                  x[P("0x194")][P("0x17c")](o[i]),
                  this[P("0xe66")])
                ) {
                  var c = document[P("0x15c")](P("0x15d"))
                  c[P("0x21b")](P("0xe6a"), P("0xe66")),
                    (c[P("0x150")][P("0xe6b")] =
                      P("0xe6c") +
                      s.y +
                      P("0xe6d") +
                      s.x +
                      P("0xe6e") +
                      s.width +
                      P("0xe6f") +
                      s[P("0x8b")] +
                      "px; border: solid 1px red; color: rgba(0,0,0,0);"),
                    (c[P("0x40a")] = o[i][P("0xe51")][P("0x31b")].getValue(0)),
                    this.viewer.container.appendChild(c)
                }
              }
            for (var u = 0; u < r[P("0x0")]; u++)
              for (
                r[u].entities[P("0x3d2")](function (Cesium, t) {
                  return Cesium[P("0xe64")] - t[P("0xe64")]
                }),
                  i = 0;
                i < r[u][P("0x194")][P("0x0")];
                i++
              )
                if (r[u][P("0x194")][i].show)
                  for (l = i + 1; l < r[u].entities[P("0x0")]; l++)
                    r[u].entities[l][P("0x221")] &&
                      n(r[u][P("0x194")][i][P("0xe70")], r[u][P("0x194")][l][P("0xe70")]) &&
                      (r[u][P("0x194")][l][P("0x221")] = !1)
            var h = []
            for (u = 0; u < r.length; u++)
              for (i = 0; i < r[u][P("0x194")][P("0x0")]; i++) r[u][P("0x194")][i][P("0x221")] && h[P("0x17c")](r[u][P("0x194")][i])
            for (i = 0; i < h[P("0x0")]; i++)
              if (h[i][P("0x221")])
                for (
                  h[P("0x3d2")](function (Cesium, t) {
                    return Cesium.priority - t[P("0xe64")]
                  }),
                    l = i + 1;
                  l < h[P("0x0")];
                  l++
                )
                  h[l].show && n(h[i][P("0xe70")], h[l][P("0xe70")]) && (h[l].show = !1)
          }),
          (i.prototype[P("0xe71")] = function () {
            this.viewer.scene.camera.moveEnd.addEventListener(this._moveEnd, this)
            this.viewer.scene.camera.changed.addEventListener(this._changed, this)
          }),
          (i.prototype[P("0xe74")] = function () {
            this.viewer.scene.camera.moveEnd.removeEventListener(this._moveEnd, this)
            this.viewer.scene.camera.changed.removeEventListener(this._changed, this)
          }),
          (i.prototype[P("0x198")] = function () {
            ;(this[P("0xe24")] = []), this._moveEnd()
          }),
          (i.prototype["destroy"] = function () {
            for (var Cesium = 0; Cesium < this.viewer[P("0x194")][P("0x190")][P("0x0")]; Cesium++)
              !this.viewer[P("0x194")][P("0x190")][Cesium].name ||
                (this.viewer.entities[P("0x190")][Cesium][P("0x176")] !== this._UUID &&
                  this.viewer.entities.values[Cesium].name !== this[P("0xe27")]) ||
                (this.viewer[P("0x194")].remove(this.viewer.entities[P("0x190")][Cesium]), Cesium--)
            ;(this.viewer.camera.percentageChanged = 0.5),
              this[P("0xe74")](),
              (this[P("0x16f")] = this[P("0x16f")] && this[P("0x16f")].destroy()),
              (this[P("0xe18")] = void 0),
              (this.viewer = void 0),
              (this[P("0x6af")] = void 0),
              (this[P("0xe1c")] = void 0),
              (this[P("0xe1d")] = void 0),
              (this[P("0xe1e")] = void 0),
              (this.collisionPadding = void 0),
              (this.tileCache = void 0),
              (this.labelCache = void 0),
              (this[P("0xe24")] = void 0),
              (this[P("0xe39")] = void 0),
              (this[P("0xe75")] = void 0)
          }),
          (i.prototype[P("0xe37")] = function (Cesium, t) {
            for (var i = !1, r = 0; r < Cesium[P("0x0")]; r++) {
              for (var n = !1, o = 0; o < t.length; o++)
                if (Cesium[r].x === t[o].x && Cesium[r].y === t[o].y && Cesium[r].level === t[o][P("0x968")]) {
                  n = !0
                  break
                }
              if (!n) {
                i = !0
                break
              }
            }
            return !i
          }),
          (i.prototype[P("0xe69")] = function (Cesium) {
            var t = p()(Cesium[P("0xe76")].label[P("0xe4e")])
            t = 0 < t ? t : 15
            for (var i = Cesium[P("0xe76")].label[P("0x31b")][P("0x512")](0)[P("0x7f2")]("\n"), r = 0, n = i[P("0x0")], a = 0; a < i[P("0x0")]; a++) {
              var s = o(i[a]) / 2
              r < s && (r = s)
            }
            var x = Cesium[P("0xe76")][P("0xe5f")]
                ? Cesium[P("0xe76")][P("0xe5f")][P("0x19a")][P("0x512")](0) * Cesium[P("0xe76")][P("0xe5f")].scale[P("0x512")](0)
                : 1,
              l = Cesium.entity[P("0xe5f")]
                ? Cesium[P("0xe76")].billboard.height.getValue(0) * Cesium.entity[P("0xe5f")][P("0xfc")][P("0x512")](0)
                : 1
            return {
              x: (Cesium[P("0x2ec")] ? Cesium[P("0x2ec")].x : -999) - x / 2 - this[P("0xe1f")][3],
              y: (Cesium[P("0x2ec")] ? Cesium.point.y : -999) - l / 2 - this[P("0xe1f")][0],
              width:
                t * Cesium[P("0xe76")][P("0xe51")][P("0xfc")][P("0x512")](0) * r +
                Cesium[P("0xe76")][P("0xe51")][P("0x3dc")][P("0x512")](0).x +
                x +
                this[P("0xe1f")][1],
              height:
                t * Cesium[P("0xe76")][P("0xe51")].scale.getValue(0) * (n + 0.5 * (n - 1)) +
                Cesium[P("0xe76")][P("0xe51")][P("0x3dc")][P("0x512")](0).y +
                l / 2 +
                this[P("0xe1f")][2]
            }
          }),
          (i.prototype.CutString = function (Cesium) {
            if (!Cesium) return ""
            var t = Cesium[P("0xaa9")]
            return t <= 28 ? "" : Cesium[P("0x1d5")](19, t - 9)
          }),
          (i.prototype.HexadecimalConversion = function (Cesium) {
            if (4278190080 === Cesium) return "#000000"
            var t = 4278190080 | p()(-Number(Cesium))
            if (((Cesium = ""), (t = t[P("0x531")](16)[P("0x987")](1))[P("0x0")] < 6)) for (var i = 6 - t[P("0x0")], r = 0; r < i; r++) Cesium += "0"
            return "#" + Cesium + t
          }),
          (i.prototype.getLabelVisibility = function (Cesium) {
            if (!Cesium) return !1
            var t = this.viewer[P("0x48")].getBoundingClientRect()
            return !(Cesium.x < -10 || Cesium.x > t[P("0x9b")] + 10 || Cesium.y < -10 || Cesium.y > t[P("0x9aa")] + 10)
          })
        var o = function (Cesium) {
            for (var t = 0, i = 0; i < Cesium[P("0x0")]; i++) null !== Cesium.charAt(i)[P("0x126")](/[^\x00-\xff]/gi) ? (t += 2) : (t += 1)
            return t
          },
          a = function (Cesium) {
            var t = {
                stringTable: [],
                pois: [],
                enumGeometryType: [
                  {
                    ePoint: 0
                  },
                  {
                    eMultiLineString: 1
                  },
                  {
                    ePolygon: 2
                  }
                ],
                enumZCoordType: [
                  {
                    eCloseGround: 0
                  },
                  {
                    eCloseSeaSurface: 1
                  },
                  {
                    eRelativelyGround: 2
                  },
                  {
                    eAbsolute: 3
                  }
                ]
              },
              i = (function () {
                var Cesium =
                  P("0xe7a") +
                  P("0xe7b") +
                  P("0xe7c") +
                  P("0xe7d") +
                  P("0xe7e") +
                  P("0xe7f") +
                  P("0xe80") +
                  P("0xe81") +
                  P("0xe82") +
                  P("0xe83") +
                  P("0xe84") +
                  P("0xe85") +
                  P("0xe86") +
                  P("0xe87") +
                  P("0xe88") +
                  P("0xe89") +
                  P("0xe8a") +
                  P("0xe8b") +
                  P("0xe8c") +
                  "};message StringTable {" +
                  P("0xe8d") +
                  "}" +
                  P("0xe8e") +
                  P("0xe8f") +
                  "required int64 TileKey = 2;" +
                  P("0xe90") +
                  P("0xe91") +
                  "};"
                if ("undefined" === typeof dcodeIO || !dcodeIO[P("0xe92")]) throw new Error(P("0xe93"))
                return dcodeIO[P("0xe92")][P("0xe94")](Cesium, "GEOPOI", P("0xe95"))[P("0xd22")](P("0xe96"))[P("0xe97")]
              })(),
              r = (function () {
                var Cesium =
                  P("0xe7a") +
                  P("0xe7b") +
                  P("0xe7c") +
                  P("0xe7d") +
                  P("0xe7e") +
                  P("0xe7f") +
                  "};" +
                  P("0xe98") +
                  P("0xe81") +
                  P("0xe82") +
                  P("0xe83") +
                  P("0xe84") +
                  P("0xe85") +
                  P("0xe86") +
                  "optional int32 SymbolID = 10  [default = 0];" +
                  P("0xe88") +
                  P("0xe89") +
                  "optional uint32\tFontNameIndex=13 [default =0];" +
                  P("0xe8b") +
                  P("0xe8c") +
                  P("0xe99") +
                  "};" +
                  P("0xe9a") +
                  "repeated string s = 1;}" +
                  P("0xe8e") +
                  "required int64 Version = 1;" +
                  P("0xe9b") +
                  P("0xe90") +
                  "repeated PBPOI POIS = 4;};"
                if ("undefined" === typeof dcodeIO || !dcodeIO[P("0xe92")])
                  throw new Error("ProtoBuf.js is not present. Please see www/index.html for manual setup instructions.")
                return dcodeIO[P("0xe92")][P("0xe94")](Cesium, P("0xe96"), P("0xe9c")).build(P("0xe96")).PBPOITile
              })(),
              n = (function () {
                var Cesium =
                  "option optimize_for = LITE_RUNTIME;" +
                  P("0xe7b") +
                  P("0xe7c") +
                  "ePoint = 0;" +
                  P("0xe7e") +
                  P("0xe7f") +
                  "};enum enumZCoordType {eCloseGround = 0;eCloseSeaSurface = 1;eRelativelyGround = 2;eAbsolute = 3;};message PBPOI{" +
                  P("0xe82") +
                  P("0xe83") +
                  "repeated double Coordinates =3 [packed=true];" +
                  P("0xe85") +
                  P("0xe9d") +
                  P("0xe9e") +
                  P("0xe87") +
                  P("0xe88") +
                  P("0xe89") +
                  P("0xe8a") +
                  P("0xe8b") +
                  P("0xe8c") +
                  P("0xe99") +
                  P("0xe9f") +
                  P("0xea0") +
                  "};" +
                  P("0xe9a") +
                  P("0xe8d") +
                  "}message PBPOITile{" +
                  P("0xe8f") +
                  "required int64 TileKey = 2;" +
                  P("0xe90") +
                  P("0xe91") +
                  "};"
                if (("undefined" === typeof dcodeIO ? "undefined" : w()(dcodeIO)) === P("0x2b6") || !dcodeIO[P("0xe92")]) throw new Error(P("0xe93"))
                return dcodeIO[P("0xe92")][P("0xe94")](Cesium, P("0xe96"), P("0xea1"))[P("0xd22")](P("0xe96"))[P("0xe97")]
              })()
            t[P("0xe4a")][P("0x0")] = 0
            var o,
              a = Cesium
            try {
              o = n.decode(a)
            } catch (e) {
              // console.log(e)
            }
            if (!o)
              try {
                o = r[P("0xea2")](a)
              } catch (Cesium) {
                // console.log(Cesium[P("0xa63")]), (o = i[P("0xea2")](a))
              }
            ;(t[P("0xea3")] = p()(o[P("0xea4")][P("0x531")]())), (t[P("0xea5")] = p()(o[P("0xea6")][P("0x531")]())), (t.stringTable = [])
            for (var s = o.StringTable.s.length, x = 0; x < s; x++) t[P("0xe50")][P("0x17c")](o[P("0xea7")].s[x].toString())
            return (
              o[P("0xea8")][P("0x1e4")](function (Cesium) {
                var i = {}
                ;(i[P("0xe2b")] = p()(Cesium[P("0xea9")][P("0x531")]()) + "_" + t[P("0xea5")]),
                  (i.name = Cesium[P("0xe48")][P("0x531")]()),
                  (i[P("0xe5e")] = p()(Cesium[P("0xeaa")].toString())),
                  (i[P("0xe61")] = Cesium[P("0xeab")]),
                  (i[P("0xe57")] = Cesium[P("0xeac")]),
                  (i[P("0xead")] = Cesium[P("0xeae")]),
                  (i[P("0xeaf")] = Cesium[P("0xeb0")]),
                  (i[P("0xe56")] = Cesium.FontColor),
                  Cesium[P("0xeb1")] && (i[P("0xeb2")] = Cesium[P("0xeb1")]),
                  (i[P("0xeb3")] = Cesium.GeometryType),
                  (i[P("0xe4d")] = Cesium[P("0xeb4")]),
                  (i[P("0xe64")] = w()(Cesium.Priority) === P("0x2b6") ? null : Cesium.Priority),
                  (i[P("0xeb5")] = w()(Cesium[P("0xeb6")]) === P("0x2b6") ? null : Cesium[P("0xeb6")]),
                  (i[P("0xe53")] = w()(Cesium.FontStyle) === P("0x2b6") ? null : Cesium[P("0xeb7")]),
                  (i.shiningSize = w()(Cesium.ShiningSize) === P("0x2b6") ? null : Cesium[P("0xeb8")]),
                  t[P("0xe4a")][P("0x17c")](i)
              }),
              t
            )
          }
        Cesium[P("0xeb9")] = i
      })(Cesium))
    ) {
    }

    ;(function () {
      function e(e) {
        throw e
      }
      var t = void 0,
        i = this
      function r(e, r) {
        var n,
          o = e[P("0x7f2")]("."),
          a = i
        o[0] in a || !a[P("0xf4f")] || a[P("0xf4f")](P("0xf50") + o[0])
        for (; o.length && (n = o.shift()); ) o[P("0x0")] || r === t ? (a = a[n] ? a[n] : (a[n] = {})) : (a[n] = r)
      }
      var n =
        "undefined" !== typeof Uint8Array &&
        P("0x2b6") !== ("undefined" === typeof Uint16Array ? "undefined" : w()(Uint16Array)) &&
        P("0x2b6") !== ("undefined" === typeof Uint32Array ? "undefined" : w()(Uint32Array)) &&
        P("0x2b6") !== ("undefined" === typeof DataView ? "undefined" : w()(DataView))
      function o(t, i) {
        ;(this[P("0x286")] = P("0x49f") === w()(i) ? i : 0),
          (this.i = 0),
          (this.buffer = t instanceof (n ? Uint8Array : Array) ? t : new (n ? Uint8Array : Array)(32768)),
          2 * this.buffer[P("0x0")] <= this[P("0x286")] && e(Error(P("0xf51"))),
          this.buffer.length <= this.index && this.f()
      }
      ;(o.prototype.f = function () {
        var e,
          t = this[P("0x4b3")],
          i = t[P("0x0")],
          r = new (n ? Uint8Array : Array)(i << 1)
        if (n) r.set(t)
        else for (e = 0; e < i; ++e) r[e] = t[e]
        return (this[P("0x4b3")] = r)
      }),
        (o.prototype.d = function (e, t, i) {
          var r,
            n = this[P("0x4b3")],
            o = this[P("0x286")],
            a = this.i,
            s = n[o]
          if (
            (i &&
              1 < t &&
              (e =
                8 < t
                  ? ((u[255 & e] << 24) | (u[(e >>> 8) & 255] << 16) | (u[(e >>> 16) & 255] << 8) | u[(e >>> 24) & 255]) >> (32 - t)
                  : u[e] >> (8 - t)),
            t + a < 8)
          )
            (s = (s << t) | e), (a += t)
          else
            for (r = 0; r < t; ++r)
              (s = (s << 1) | ((e >> (t - r - 1)) & 1)), 8 === ++a && ((a = 0), (n[o++] = u[s]), (s = 0), o === n[P("0x0")] && (n = this.f()))
          ;(n[o] = s), (this[P("0x4b3")] = n), (this.i = a), (this[P("0x286")] = o)
        }),
        (o.prototype.finish = function () {
          var e = this[P("0x4b3")],
            t = this[P("0x286")]
          return 0 < this.i && ((e[t] <<= 8 - this.i), (e[t] = u[e[t]]), t++), n ? e.subarray(0, t) : ((e.length = t), e)
        })
      var a,
        s = new (n ? Uint8Array : Array)(256)
      for (a = 0; a < 256; ++a) {
        for (var x = (c = a), l = 7, c = c >>> 1; c; c >>>= 1) (x <<= 1), (x |= 1 & c), --l
        s[a] = ((x << l) & 255) >>> 0
      }
      var u = s
      function h(e) {
        ;(this[P("0x4b3")] = new (n ? Uint16Array : Array)(2 * e)), (this.length = 0)
      }
      function f(e) {
        var t,
          i,
          r,
          o,
          a,
          s,
          x,
          l,
          c,
          u,
          h = e[P("0x0")],
          f = 0,
          d = Number[P("0x31")]
        for (l = 0; l < h; ++l) e[l] > f && (f = e[l]), e[l] < d && (d = e[l])
        for (t = 1 << f, i = new (n ? Uint32Array : Array)(t), r = 1, o = 0, a = 2; r <= f; ) {
          for (l = 0; l < h; ++l)
            if (e[l] === r) {
              for (x = o, c = s = 0; c < r; ++c) (s = (s << 1) | (1 & x)), (x >>= 1)
              for (u = (r << 16) | l, c = s; c < t; c += a) i[c] = u
              ++o
            }
          ++r, (o <<= 1), (a <<= 1)
        }
        return [i, f, d]
      }
      function d(e, t) {
        ;(this.h = p),
          (this.w = 0),
          (this["input"] = n && e instanceof Array ? new Uint8Array(e) : e),
          (this.b = 0),
          t &&
            (t[P("0xf54")] && (this.w = t[P("0xf54")]),
            P("0x49f") === w()(t[P("0xf55")]) && (this.h = t.compressionType),
            t[P("0xf56")] && (this.a = n && t[P("0xf56")] instanceof Array ? new Uint8Array(t[P("0xf56")]) : t[P("0xf56")]),
            "number" === typeof t.outputIndex && (this.b = t[P("0xf57")])),
          this.a || (this.a = new (n ? Uint8Array : Array)(32768))
      }
      ;(h.prototype[P("0xf52")] = function (e) {
        return 2 * (((e - 2) / 4) | 0)
      }),
        (h.prototype[P("0x17c")] = function (e, t) {
          var i,
            r,
            n,
            o = this[P("0x4b3")]
          for (i = this[P("0x0")], o[this[P("0x0")]++] = t, o[this[P("0x0")]++] = e; 0 < i && ((r = this[P("0xf52")](i)), o[i] > o[r]); )
            (n = o[i]), (o[i] = o[r]), (o[r] = n), (n = o[i + 1]), (o[i + 1] = o[r + 1]), (o[r + 1] = n), (i = r)
          return this[P("0x0")]
        }),
        (h.prototype[P("0x25c")] = function () {
          var e,
            t,
            i,
            r,
            n,
            o = this.buffer
          for (
            t = o[0], e = o[1], this[P("0x0")] -= 2, o[0] = o[this.length], o[1] = o[this[P("0x0")] + 1], n = 0;
            !((r = 2 * n + 2) >= this[P("0x0")]) && (r + 2 < this[P("0x0")] && o[r + 2] > o[r] && (r += 2), o[r] > o[n]);

          )
            (i = o[n]), (o[n] = o[r]), (o[r] = i), (i = o[n + 1]), (o[n + 1] = o[r + 1]), (o[r + 1] = i), (n = r)
          return {
            index: e,
            value: t,
            length: this.length
          }
        })
      var g,
        p = 2,
        m = {
          NONE: 0,
          r: 1,
          k: p,
          O: 3
        },
        b = []
      for (g = 0; g < 288; g++)
        switch (!0) {
          case g <= 143:
            b[P("0x17c")]([g + 48, 8])
            break
          case g <= 255:
            b.push([g - 144 + 400, 9])
            break
          case g <= 279:
            b[P("0x17c")]([g - 256 + 0, 7])
            break
          case g <= 287:
            b.push([g - 280 + 192, 8])
            break
          default:
            e("invalid literal: " + g)
        }
      function v(e, t) {
        ;(this[P("0x0")] = e), (this.H = t)
      }
      d.prototype.j = function () {
        var i,
          r,
          a,
          s,
          x = this["input"]
        switch (this.h) {
          case 0:
            for (a = 0, s = x[P("0x0")]; a < s; ) {
              var l,
                c,
                u,
                h = (r = n ? x[P("0xaaf")](a, a + 65535) : x.slice(a, a + 65535)),
                f = (a += r.length) === s,
                d = t,
                g = t,
                m = this.a,
                v = this.b
              if (n) {
                for (m = new Uint8Array(this.a[P("0x4b3")]); m[P("0x0")] <= v + h[P("0x0")] + 5; ) m = new Uint8Array(m[P("0x0")] << 1)
                m.set(this.a)
              }
              if (
                ((l = f ? 1 : 0),
                (m[v++] = 0 | l),
                (u = (65536 + ~(c = h[P("0x0")])) & 65535),
                (m[v++] = 255 & c),
                (m[v++] = (c >>> 8) & 255),
                (m[v++] = 255 & u),
                (m[v++] = (u >>> 8) & 255),
                n)
              )
                m.set(h, v), (v += h[P("0x0")]), (m = m.subarray(0, v))
              else {
                for (d = 0, g = h.length; d < g; ++d) m[v++] = h[d]
                m[P("0x0")] = v
              }
              ;(this.b = v), (this.a = m)
            }
            break
          case 1:
            var C = new o(n ? new Uint8Array(this.a[P("0x4b3")]) : this.a, this.b)
            C.d(1, 1, !0), C.d(1, 2, !0)
            var y,
              A,
              w,
              E = _(this, x)
            for (y = 0, A = E[P("0x0")]; y < A; y++)
              if (((w = E[y]), o.prototype.d.apply(C, b[w]), 256 < w)) C.d(E[++y], E[++y], !0), C.d(E[++y], 5), C.d(E[++y], E[++y], !0)
              else if (256 === w) break
            ;(this.a = C[P("0xf2f")]()), (this.b = this.a[P("0x0")])
            break
          case p:
            var S,
              T,
              M,
              N,
              L,
              R,
              O,
              F,
              D,
              U,
              k,
              B,
              W,
              j,
              V,
              z = new o(n ? new Uint8Array(this.a[P("0x4b3")]) : this.a, this.b),
              H = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
              q = Array(19)
            for (
              S = p, z.d(1, 1, !0), z.d(S, 2, !0), T = _(this, x), O = G((R = I(this.M, 15))), D = G((F = I(this.L, 7))), M = 286;
              257 < M && 0 === R[M - 1];
              M--
            );
            for (N = 30; 1 < N && 0 === F[N - 1]; N--);
            var X,
              Y,
              K,
              Q,
              Z,
              J,
              $ = M,
              ee = N,
              te = new (n ? Uint32Array : Array)($ + ee),
              ie = new (n ? Uint32Array : Array)(316),
              re = new (n ? Uint8Array : Array)(19)
            for (X = Y = 0; X < $; X++) te[Y++] = R[X]
            for (X = 0; X < ee; X++) te[Y++] = F[X]
            if (!n) for (X = 0, Q = re.length; X < Q; ++X) re[X] = 0
            for (X = Z = 0, Q = te.length; X < Q; X += Y) {
              for (Y = 1; X + Y < Q && te[X + Y] === te[X]; ++Y);
              if (((K = Y), 0 === te[X]))
                if (K < 3) for (; 0 < K--; ) re[(ie[Z++] = 0)]++
                else
                  for (; 0 < K; )
                    K - 3 < (J = K < 138 ? K : 138) && J < K && (J = K - 3),
                      J <= 10 ? ((ie[Z++] = 17), (ie[Z++] = J - 3), re[17]++) : ((ie[Z++] = 18), (ie[Z++] = J - 11), re[18]++),
                      (K -= J)
              else if (((ie[Z++] = te[X]), re[te[X]]++, --K < 3)) for (; 0 < K--; ) (ie[Z++] = te[X]), re[te[X]]++
              else for (; 0 < K; ) K - 3 < (J = K < 6 ? K : 6) && J < K && (J = K - 3), (ie[Z++] = 16), (ie[Z++] = J - 3), re[16]++, (K -= J)
            }
            for (i = n ? ie[P("0xaaf")](0, Z) : ie[P("0x1d5")](0, Z), U = I(re, 7), j = 0; j < 19; j++) q[j] = U[H[j]]
            for (L = 19; 4 < L && 0 === q[L - 1]; L--);
            for (k = G(U), z.d(M - 257, 5, !0), z.d(N - 1, 5, !0), z.d(L - 4, 4, !0), j = 0; j < L; j++) z.d(q[j], 3, !0)
            for (j = 0, V = i[P("0x0")]; j < V; j++)
              if (((B = i[j]), z.d(k[B], U[B], !0), 16 <= B)) {
                switch ((j++, B)) {
                  case 16:
                    W = 2
                    break
                  case 17:
                    W = 3
                    break
                  case 18:
                    W = 7
                    break
                  default:
                    e(P("0xf58") + B)
                }
                z.d(i[j], W, !0)
              }
            var ne,
              oe,
              ae,
              se,
              xe,
              le,
              ce,
              ue,
              he = [O, R],
              fe = [D, F]
            for (xe = he[0], le = he[1], ce = fe[0], ue = fe[1], ne = 0, oe = T[P("0x0")]; ne < oe; ++ne)
              if (((ae = T[ne]), z.d(xe[ae], le[ae], !0), 256 < ae))
                z.d(T[++ne], T[++ne], !0), (se = T[++ne]), z.d(ce[se], ue[se], !0), z.d(T[++ne], T[++ne], !0)
              else if (256 === ae) break
            ;(this.a = z.finish()), (this.b = this.a[P("0x0")])
            break
          default:
            e("invalid compression type")
        }
        return this.a
      }
      var C = (function () {
          function t(t) {
            switch (!0) {
              case 3 === t:
                return [257, t - 3, 0]
              case 4 === t:
                return [258, t - 4, 0]
              case 5 === t:
                return [259, t - 5, 0]
              case 6 === t:
                return [260, t - 6, 0]
              case 7 === t:
                return [261, t - 7, 0]
              case 8 === t:
                return [262, t - 8, 0]
              case 9 === t:
                return [263, t - 9, 0]
              case 10 === t:
                return [264, t - 10, 0]
              case t <= 12:
                return [265, t - 11, 1]
              case t <= 14:
                return [266, t - 13, 1]
              case t <= 16:
                return [267, t - 15, 1]
              case t <= 18:
                return [268, t - 17, 1]
              case t <= 22:
                return [269, t - 19, 2]
              case t <= 26:
                return [270, t - 23, 2]
              case t <= 30:
                return [271, t - 27, 2]
              case t <= 34:
                return [272, t - 31, 2]
              case t <= 42:
                return [273, t - 35, 3]
              case t <= 50:
                return [274, t - 43, 3]
              case t <= 58:
                return [275, t - 51, 3]
              case t <= 66:
                return [276, t - 59, 3]
              case t <= 82:
                return [277, t - 67, 4]
              case t <= 98:
                return [278, t - 83, 4]
              case t <= 114:
                return [279, t - 99, 4]
              case t <= 130:
                return [280, t - 115, 4]
              case t <= 162:
                return [281, t - 131, 5]
              case t <= 194:
                return [282, t - 163, 5]
              case t <= 226:
                return [283, t - 195, 5]
              case t <= 257:
                return [284, t - 227, 5]
              case 258 === t:
                return [285, t - 258, 0]
              default:
                e("invalid length: " + t)
            }
          }
          var i,
            r,
            n = []
          for (i = 3; i <= 258; i++) (r = t(i)), (n[i] = (r[2] << 24) | (r[1] << 16) | r[0])
          return n
        })(),
        y = n ? new Uint32Array(C) : C
      function _(i, r) {
        function o(t, i) {
          var r,
            n,
            o,
            a,
            s = t.H,
            x = [],
            l = 0
          switch (((r = y[t[P("0x0")]]), (x[l++] = 65535 & r), (x[l++] = (r >> 16) & 255), (x[l++] = r >> 24), !0)) {
            case 1 === s:
              n = [0, s - 1, 0]
              break
            case 2 === s:
              n = [1, s - 2, 0]
              break
            case 3 === s:
              n = [2, s - 3, 0]
              break
            case 4 === s:
              n = [3, s - 4, 0]
              break
            case s <= 6:
              n = [4, s - 5, 1]
              break
            case s <= 8:
              n = [5, s - 7, 1]
              break
            case s <= 12:
              n = [6, s - 9, 2]
              break
            case s <= 16:
              n = [7, s - 13, 2]
              break
            case s <= 24:
              n = [8, s - 17, 3]
              break
            case s <= 32:
              n = [9, s - 25, 3]
              break
            case s <= 48:
              n = [10, s - 33, 4]
              break
            case s <= 64:
              n = [11, s - 49, 4]
              break
            case s <= 96:
              n = [12, s - 65, 5]
              break
            case s <= 128:
              n = [13, s - 97, 5]
              break
            case s <= 192:
              n = [14, s - 129, 6]
              break
            case s <= 256:
              n = [15, s - 193, 6]
              break
            case s <= 384:
              n = [16, s - 257, 7]
              break
            case s <= 512:
              n = [17, s - 385, 7]
              break
            case s <= 768:
              n = [18, s - 513, 8]
              break
            case s <= 1024:
              n = [19, s - 769, 8]
              break
            case s <= 1536:
              n = [20, s - 1025, 9]
              break
            case s <= 2048:
              n = [21, s - 1537, 9]
              break
            case s <= 3072:
              n = [22, s - 2049, 10]
              break
            case s <= 4096:
              n = [23, s - 3073, 10]
              break
            case s <= 6144:
              n = [24, s - 4097, 11]
              break
            case s <= 8192:
              n = [25, s - 6145, 11]
              break
            case s <= 12288:
              n = [26, s - 8193, 12]
              break
            case s <= 16384:
              n = [27, s - 12289, 12]
              break
            case s <= 24576:
              n = [28, s - 16385, 13]
              break
            case s <= 32768:
              n = [29, s - 24577, 13]
              break
            default:
              e(P("0xf59"))
          }
          for (r = n, x[l++] = r[0], x[l++] = r[1], x[l++] = r[2], o = 0, a = x[P("0x0")]; o < a; ++o) p[m++] = x[o]
          v[x[0]]++, C[x[3]]++, (b = t[P("0x0")] + i - 1), (f = null)
        }
        var a,
          s,
          x,
          l,
          c,
          u,
          h,
          f,
          d,
          g = {},
          p = n ? new Uint16Array(2 * r[P("0x0")]) : [],
          m = 0,
          b = 0,
          v = new (n ? Uint32Array : Array)(286),
          C = new (n ? Uint32Array : Array)(30),
          _ = i.w
        if (!n) {
          for (x = 0; x <= 285; ) v[x++] = 0
          for (x = 0; x <= 29; ) C[x++] = 0
        }
        for (v[256] = 1, a = 0, s = r[P("0x0")]; a < s; ++a) {
          for (x = c = 0, l = 3; x < l && a + x !== s; ++x) c = (c << 8) | r[a + x]
          if ((g[c] === t && (g[c] = []), (u = g[c]), !(0 < b--))) {
            for (; 0 < u[P("0x0")] && 32768 < a - u[0]; ) u[P("0x513")]()
            if (s <= a + 3) {
              for (f && o(f, -1), x = 0, l = s - a; x < l; ++x) (d = r[a + x]), (p[m++] = d), ++v[d]
              break
            }
            0 < u[P("0x0")]
              ? ((h = A(r, a, u)),
                f ? (f[P("0x0")] < h.length ? ((d = r[a - 1]), (p[m++] = d), ++v[d], o(h, 0)) : o(f, -1)) : h[P("0x0")] < _ ? (f = h) : o(h, 0))
              : f
              ? o(f, -1)
              : ((d = r[a]), (p[m++] = d), ++v[d])
          }
          u.push(a)
        }
        return (p[m++] = 256), v[256]++, (i.M = v), (i.L = C), n ? p[P("0xaaf")](0, m) : p
      }
      function A(e, t, i) {
        var r,
          n,
          o,
          a,
          s,
          x,
          l = 0,
          c = e.length
        ;(a = 0), (x = i[P("0x0")])
        e: for (; a < x; a++) {
          if (((r = i[x - a - 1]), (o = 3) < l)) {
            for (s = l; 3 < s; s--) if (e[r + s - 1] !== e[t + s - 1]) continue e
            o = l
          }
          for (; o < 258 && t + o < c && e[r + o] === e[t + o]; ) ++o
          if ((l < o && ((n = r), (l = o)), 258 === o)) break
        }
        return new v(l, t - n)
      }
      function I(e, t) {
        var i,
          r,
          o,
          a,
          s,
          x = e[P("0x0")],
          l = new h(572),
          c = new (n ? Uint8Array : Array)(x)
        if (!n) for (a = 0; a < x; a++) c[a] = 0
        for (a = 0; a < x; ++a) 0 < e[a] && l[P("0x17c")](a, e[a])
        if (((i = Array(l[P("0x0")] / 2)), (r = new (n ? Uint32Array : Array)(l[P("0x0")] / 2)), 1 === i[P("0x0")]))
          return (c[l[P("0x25c")]()[P("0x286")]] = 1), c
        for (a = 0, s = l[P("0x0")] / 2; a < s; ++a) (i[a] = l[P("0x25c")]()), (r[a] = i[a][P("0x3")])
        for (
          o = (function (e, t, i) {
            function r(e) {
              var i = d[e][g[e]]
              i === t ? (r(e + 1), r(e + 1)) : --h[i], ++g[e]
            }
            var o,
              a,
              s,
              x,
              l,
              c = new (n ? Uint16Array : Array)(i),
              u = new (n ? Uint8Array : Array)(i),
              h = new (n ? Uint8Array : Array)(t),
              f = Array(i),
              d = Array(i),
              g = Array(i),
              p = (1 << i) - t,
              m = 1 << (i - 1)
            for (c[i - 1] = t, a = 0; a < i; ++a)
              p < m ? (u[a] = 0) : ((u[a] = 1), (p -= m)), (p <<= 1), (c[i - 2 - a] = ((c[i - 1 - a] / 2) | 0) + t)
            for (c[0] = u[0], f[0] = Array(c[0]), d[0] = Array(c[0]), a = 1; a < i; ++a)
              c[a] > 2 * c[a - 1] + u[a] && (c[a] = 2 * c[a - 1] + u[a]), (f[a] = Array(c[a])), (d[a] = Array(c[a]))
            for (o = 0; o < t; ++o) h[o] = i
            for (s = 0; s < c[i - 1]; ++s) (f[i - 1][s] = e[s]), (d[i - 1][s] = s)
            for (o = 0; o < i; ++o) g[o] = 0
            for (1 === u[i - 1] && (--h[0], ++g[i - 1]), a = i - 2; 0 <= a; --a) {
              for (x = o = 0, l = g[a + 1], s = 0; s < c[a]; s++)
                (x = f[a + 1][l] + f[a + 1][l + 1]) > e[o] ? ((f[a][s] = x), (d[a][s] = t), (l += 2)) : ((f[a][s] = e[o]), (d[a][s] = o), ++o)
              ;(g[a] = 0), 1 === u[a] && r(a)
            }
            return h
          })(r, r[P("0x0")], t),
            a = 0,
            s = i[P("0x0")];
          a < s;
          ++a
        )
          c[i[a][P("0x286")]] = o[a]
        return c
      }
      function G(e) {
        var t,
          i,
          r,
          o,
          a = new (n ? Uint16Array : Array)(e.length),
          s = [],
          x = [],
          l = 0
        for (t = 0, i = e[P("0x0")]; t < i; t++) s[e[t]] = 1 + (0 | s[e[t]])
        for (t = 1, i = 16; t <= i; t++) (x[t] = l), (l += 0 | s[t]), (l <<= 1)
        for (t = 0, i = e.length; t < i; t++)
          for (l = x[e[t]], x[e[t]] += 1, r = a[t] = 0, o = e[t]; r < o; r++) (a[t] = (a[t] << 1) | (1 & l)), (l >>>= 1)
        return a
      }
      function E(t, i) {
        switch (
          ((this.l = []),
          (this.m = 32768),
          (this.e = this.g = this.c = this.q = 0),
          (this["input"] = n ? new Uint8Array(t) : t),
          (this.s = !1),
          (this.n = T),
          (this.C = !1),
          (i || ((i = {}), 0)) &&
            (i[P("0x286")] && (this.c = i[P("0x286")]),
            i[P("0xf5a")] && (this.m = i.bufferSize),
            i.bufferType && (this.n = i[P("0xf5b")]),
            i[P("0xf5c")] && (this.C = i[P("0xf5c")])),
          this.n)
        ) {
          case S:
            ;(this.b = 32768), (this.a = new (n ? Uint8Array : Array)(32768 + this.m + 258))
            break
          case T:
            ;(this.b = 0), (this.a = new (n ? Uint8Array : Array)(this.m)), (this.f = this.K), (this.t = this.I), (this.o = this.J)
            break
          default:
            e(Error(P("0xf5d")))
        }
      }
      var S = 0,
        T = 1,
        M = S,
        N = T
      E.prototype.p = function () {
        for (; !this.s; ) {
          var i = Z(this, 3)
          switch ((1 & i && (this.s = !0), (i >>>= 1))) {
            case 0:
              var r = this["input"],
                o = this.c,
                a = this.a,
                s = this.b,
                x = r.length,
                l = t,
                c = a[P("0x0")],
                u = t
              switch (
                ((this.e = this.g = 0),
                x <= o + 1 && e(Error("invalid uncompressed block header: LEN")),
                (l = r[o++] | (r[o++] << 8)),
                x <= o + 1 && e(Error("invalid uncompressed block header: NLEN")),
                l === ~(r[o++] | (r[o++] << 8)) && e(Error(P("0xf5e"))),
                o + l > r[P("0x0")] && e(Error(P("0xf5f"))),
                this.n)
              ) {
                case S:
                  for (; s + l > a[P("0x0")]; ) {
                    if (((l -= u = c - s), n)) a.set(r[P("0xaaf")](o, o + u), s), (s += u), (o += u)
                    else for (; u--; ) a[s++] = r[o++]
                    ;(this.b = s), (a = this.f()), (s = this.b)
                  }
                  break
                case T:
                  for (; s + l > a[P("0x0")]; )
                    a = this.f({
                      v: 2
                    })
                  break
                default:
                  e(Error("invalid inflate mode"))
              }
              if (n) a[P("0xf60")](r.subarray(o, o + l), s), (s += l), (o += l)
              else for (; l--; ) a[s++] = r[o++]
              ;(this.c = o), (this.b = s), (this.a = a)
              break
            case 1:
              this.o(Y, Q)
              break
            case 2:
              $(this)
              break
            default:
              e(Error(P("0xf61") + i))
          }
        }
        return this.t()
      }
      var L,
        R,
        O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        F = n ? new Uint16Array(O) : O,
        D = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
        U = n ? new Uint16Array(D) : D,
        k = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
        B = n ? new Uint8Array(k) : k,
        W = [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577
        ],
        j = n ? new Uint16Array(W) : W,
        V = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        z = n ? new Uint8Array(V) : V,
        H = new (n ? Uint8Array : Array)(288)
      for (L = 0, R = H[P("0x0")]; L < R; ++L) H[L] = L <= 143 ? 8 : L <= 255 ? 9 : L <= 279 ? 7 : 8
      var q,
        X,
        Y = f(H),
        K = new (n ? Uint8Array : Array)(30)
      for (q = 0, X = K[P("0x0")]; q < X; ++q) K[q] = 5
      var Q = f(K)
      function Z(t, i) {
        for (var r, n = t.g, o = t.e, a = t["input"], s = t.c, x = a[P("0x0")]; o < i; ) x <= s && e(Error(P("0xf5f"))), (n |= a[s++] << o), (o += 8)
        return (r = n & ((1 << i) - 1)), (t.g = n >>> i), (t.e = o - i), (t.c = s), r
      }
      function J(e, t) {
        for (var i, r, n = e.g, o = e.e, a = e["input"], s = e.c, x = a[P("0x0")], l = t[0], c = t[1]; o < c && !(x <= s); )
          (n |= a[s++] << o), (o += 8)
        return (r = (i = l[n & ((1 << c) - 1)]) >>> 16), (e.g = n >> r), (e.e = o - r), (e.c = s), 65535 & i
      }
      function $(e) {
        function t(e, t, i) {
          var r,
            n,
            o,
            a = this.z
          for (o = 0; o < e; )
            switch ((r = J(this, t))) {
              case 16:
                for (n = 3 + Z(this, 2); n--; ) i[o++] = a
                break
              case 17:
                for (n = 3 + Z(this, 3); n--; ) i[o++] = 0
                a = 0
                break
              case 18:
                for (n = 11 + Z(this, 7); n--; ) i[o++] = 0
                a = 0
                break
              default:
                a = i[o++] = r
            }
          return (this.z = a), i
        }
        var i,
          r,
          o,
          a,
          s = Z(e, 5) + 257,
          x = Z(e, 5) + 1,
          l = Z(e, 4) + 4,
          c = new (n ? Uint8Array : Array)(F[P("0x0")])
        for (a = 0; a < l; ++a) c[F[a]] = Z(e, 3)
        if (!n) for (a = l, l = c.length; a < l; ++a) c[F[a]] = 0
        ;(i = f(c)),
          (r = new (n ? Uint8Array : Array)(s)),
          (o = new (n ? Uint8Array : Array)(x)),
          (e.z = 0),
          e.o(f(t["call"](e, s, i, r)), f(t["call"](e, x, i, o)))
      }
      function ee(e) {
        if (P("0x9fe") === w()(e)) {
          var t,
            i,
            r = e.split("")
          for (t = 0, i = r[P("0x0")]; t < i; t++) r[t] = (255 & r[t].charCodeAt(0)) >>> 0
          e = r
        }
        for (var n, o = 1, a = 0, s = e.length, x = 0; 0 < s; ) {
          for (s -= n = 1024 < s ? 1024 : s; (a += o += e[x++]), --n; );
          ;(o %= 65521), (a %= 65521)
        }
        return ((a << 16) | o) >>> 0
      }
      function te(t, i) {
        var r, n
        switch (
          ((this.input = t),
          (this.c = 0),
          (i || ((i = {}), 0)) && (i[P("0x286")] && (this.c = i.index), i.verify && (this.N = i[P("0xf62")])),
          (r = t[this.c++]),
          (n = t[this.c++]),
          15 & r)
        ) {
          case ie:
            this.method = ie
            break
          default:
            e(Error(P("0xf63")))
        }
        0 !== ((r << 8) + n) % 31 && e(Error(P("0xf64") + (((r << 8) + n) % 31))),
          32 & n && e(Error(P("0xf65"))),
          (this.B = new E(t, {
            index: this.c,
            bufferSize: i[P("0xf5a")],
            bufferType: i[P("0xf5b")],
            resize: i[P("0xf5c")]
          }))
      }
      ;(E.prototype.o = function (e, t) {
        var i = this.a,
          r = this.b
        this.u = e
        for (var n, o, a, s, x = i[P("0x0")] - 258; 256 !== (n = J(this, e)); )
          if (n < 256) x <= r && ((this.b = r), (i = this.f()), (r = this.b)), (i[r++] = n)
          else
            for (
              s = U[(o = n - 257)],
                0 < B[o] && (s += Z(this, B[o])),
                n = J(this, t),
                a = j[n],
                0 < z[n] && (a += Z(this, z[n])),
                x <= r && ((this.b = r), (i = this.f()), (r = this.b));
              s--;

            )
              i[r] = i[r++ - a]
        for (; 8 <= this.e; ) (this.e -= 8), this.c--
        this.b = r
      }),
        (E.prototype.J = function (e, t) {
          var i = this.a,
            r = this.b
          this.u = e
          for (var n, o, a, s, x = i.length; 256 !== (n = J(this, e)); )
            if (n < 256) x <= r && (x = (i = this.f()).length), (i[r++] = n)
            else
              for (
                s = U[(o = n - 257)],
                  0 < B[o] && (s += Z(this, B[o])),
                  n = J(this, t),
                  a = j[n],
                  0 < z[n] && (a += Z(this, z[n])),
                  x < r + s && (x = (i = this.f()).length);
                s--;

              )
                i[r] = i[r++ - a]
          for (; 8 <= this.e; ) (this.e -= 8), this.c--
          this.b = r
        }),
        (E.prototype.f = function () {
          var e,
            t,
            i = new (n ? Uint8Array : Array)(this.b - 32768),
            r = this.b - 32768,
            o = this.a
          if (n) i.set(o[P("0xaaf")](32768, i.length))
          else for (e = 0, t = i.length; e < t; ++e) i[e] = o[e + 32768]
          if ((this.l[P("0x17c")](i), (this.q += i[P("0x0")]), n)) o[P("0xf60")](o[P("0xaaf")](r, 32768 + r))
          else for (e = 0; e < 32768; ++e) o[e] = o[r + e]
          return (this.b = 32768), o
        }),
        (E.prototype.K = function (e) {
          var t,
            i,
            r,
            o = (this["input"][P("0x0")] / this.c + 1) | 0,
            a = this["input"],
            s = this.a
          return (
            e && ("number" === typeof e.v && (o = e.v), P("0x49f") === w()(e.G) && (o += e.G)),
            (i = o < 2 ? ((r = (((a.length - this.c) / this.u[2] / 2) * 258) | 0) < s[P("0x0")] ? s.length + r : s[P("0x0")] << 1) : s.length * o),
            n ? (t = new Uint8Array(i)).set(s) : (t = s),
            (this.a = t)
          )
        }),
        (E.prototype.t = function () {
          var e,
            t,
            i,
            r,
            o,
            a = 0,
            s = this.a,
            x = this.l,
            l = new (n ? Uint8Array : Array)(this.q + (this.b - 32768))
          if (0 === x.length) return n ? this.a[P("0xaaf")](32768, this.b) : this.a.slice(32768, this.b)
          for (t = 0, i = x[P("0x0")]; t < i; ++t) for (r = 0, o = (e = x[t]).length; r < o; ++r) l[a++] = e[r]
          for (t = 32768, i = this.b; t < i; ++t) l[a++] = s[t]
          return (this.l = []), (this[P("0x4b3")] = l)
        }),
        (E.prototype.I = function () {
          var e,
            t = this.b
          return (
            n
              ? this.C
                ? (e = new Uint8Array(t))[P("0xf60")](this.a[P("0xaaf")](0, t))
                : (e = this.a[P("0xaaf")](0, t))
              : (this.a[P("0x0")] > t && (this.a[P("0x0")] = t), (e = this.a)),
            (this[P("0x4b3")] = e)
          )
        }),
        (te.prototype.p = function () {
          var t,
            i = this["input"]
          return (
            (t = this.B.p()),
            (this.c = this.B.c),
            this.N && ((i[this.c++] << 24) | (i[this.c++] << 16) | (i[this.c++] << 8) | i[this.c++]) >>> 0 !== ee(t) && e(Error(P("0xf66"))),
            t
          )
        })
      var ie = 8
      function re(e, t) {
        ;(this["input"] = e), (this.a = new (n ? Uint8Array : Array)(32768)), (this.h = ne.k)
        var i,
          r = {}
        for (i in ((t || ((t = {}), 0)) && P("0x49f") === w()(t.compressionType) && (this.h = t[P("0xf55")]), t)) r[i] = t[i]
        ;(r[P("0xf56")] = this.a), (this.A = new d(this.input, r))
      }
      var ne = m
      function oe(e, t) {
        var i, n, o, a
        if (Object[P("0xdcb")]) i = Object[P("0xdcb")](t)
        else for (n in ((i = []), (o = 0), t)) i[o++] = n
        for (o = 0, a = i[P("0x0")]; o < a; ++o) r(e + "." + (n = i[o]), t[n])
      }
      ;(re.prototype.j = function () {
        var t,
          i,
          r,
          o,
          a,
          s,
          x,
          l = 0
        switch (((x = this.a), (t = ie))) {
          case ie:
            i = Math[P("0xf67")] * Math[P("0x133")](32768) - 8
            break
          default:
            e(Error(P("0xf68")))
        }
        switch (((r = (i << 4) | t), (x[l++] = r), t)) {
          case ie:
            switch (this.h) {
              case ne.NONE:
                a = 0
                break
              case ne.r:
                a = 1
                break
              case ne.k:
                a = 2
                break
              default:
                e(Error("unsupported compression type"))
            }
            break
          default:
            e(Error(P("0xf68")))
        }
        return (
          (o = (a << 6) | 0),
          (x[l++] = o | (31 - ((256 * r + o) % 31))),
          (s = ee(this.input)),
          (this.A.b = l),
          (l = (x = this.A.j()).length),
          n &&
            ((x = new Uint8Array(x[P("0x4b3")])).length <= l + 4 && ((this.a = new Uint8Array(x[P("0x0")] + 4)), this.a[P("0xf60")](x), (x = this.a)),
            (x = x[P("0xaaf")](0, l + 4))),
          (x[l++] = (s >> 24) & 255),
          (x[l++] = (s >> 16) & 255),
          (x[l++] = (s >> 8) & 255),
          (x[l++] = 255 & s),
          x
        )
      }),
        r(P("0xf69"), te),
        r(P("0xf6a"), te.prototype.p),
        oe(P("0xf6b"), {
          ADAPTIVE: N,
          BLOCK: M
        }),
        r(P("0xf6c"), re),
        r(P("0xf6d"), function (e, t) {
          return new re(e, t).j()
        }),
        r(P("0xf6e"), re.prototype.j),
        oe("Zlib.Deflate.CompressionType", {
          NONE: ne[P("0xe5d")],
          FIXED: ne.r,
          DYNAMIC: ne.k
        })
    })["call"](window)

    r(237)
  }
])
