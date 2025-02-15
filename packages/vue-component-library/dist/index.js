import { createElementBlock as o, openBlock as i, createElementVNode as u, defineAsyncComponent as d, inject as ne, ref as H, computed as p, watch as rr, createBlock as I, unref as T, withModifiers as ut, normalizeClass as A, createVNode as q, createCommentVNode as m, createTextVNode as G, withDirectives as U, vModelRadio as pe, vModelText as ce, mergeProps as Ir, Fragment as B, renderList as N, toDisplayString as D, vModelCheckbox as Pr, vModelSelect as Er, resolveComponent as rt, withCtx as ee, renderSlot as Z, resolveDynamicComponent as X, defineComponent as te, normalizeStyle as de, reactive as Dr, onMounted as Rr, createStaticVNode as fe, vShow as dt } from "vue";
const qr = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-close"
};
function nr(e, t) {
  return i(), o("svg", qr, t[0] || (t[0] = [
    u("circle", {
      cx: "16",
      cy: "15.8645",
      r: "12",
      fill: "#F2F2F2",
      class: "svg__fill--secondary-grey-01"
    }, null, -1),
    u("path", {
      d: "M22 21.8088 10 9.91943",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    u("path", {
      d: "m10.0497 21.8645 11.9017-12",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1)
  ]));
}
const tt = { render: nr }, Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tt,
  render: nr
}, Symbol.toStringTag, { value: "Module" })), W = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, Ar = {
  key: 0,
  class: "success-message"
}, Br = {
  key: 1,
  id: "app",
  method: "post",
  class: "form"
}, Nr = { class: "formTitleWrapper" }, jr = {
  key: 0,
  class: "form-errors"
}, Wr = { key: 1 }, Vr = {
  key: 2,
  class: "input-wrapper input-radio"
}, Yr = { for: "in-person" }, Ur = { for: "online" }, zr = { class: "input-wrapper" }, Gr = { class: "input-container" }, Zr = {
  key: 3,
  class: "input-wrapper"
}, Qr = { for: "email" }, Xr = { key: 0 }, Jr = { key: 1 }, Kr = ["required"], en = ["for"], tn = {
  key: 0,
  class: "required"
}, rn = {
  key: 1,
  class: "textareaWrapper"
}, nn = ["for"], an = {
  key: 0,
  class: "required"
}, sn = ["onUpdate:modelValue"], on = {
  key: 2,
  class: "radio-wrapper"
}, ln = ["for"], cn = ["id", "onUpdate:modelValue", "value", "name"], un = {
  key: 3,
  class: "checkbox-wrapper"
}, dn = ["id", "onUpdate:modelValue", "true-value", "value"], hn = ["for"], fn = ["id", "onUpdate:modelValue", "name"], mn = ["value"], gn = {
  __name: "BlockForm",
  setup(e) {
    const t = d(() => Promise.resolve().then(() => at)), r = ne("eventId"), n = ne("blockFormData"), a = ne("registrationType"), s = ne("libcalWaitlist"), l = ne("libcalEndpoint");
    console.log("BlockForm eventId", r.value), console.log("BlockForm blockFormData", n.value), console.log("BlockForm registrationType", a.value), console.log("BlockForm libcalWaitlist", s.value), console.log("BlockForm libcalEndpoint", l);
    const c = H([]), h = H(""), f = H(""), y = H(""), w = H({}), M = H({}), _ = H(null), g = H(!1), v = H(!1), L = H({}), O = H(!1), R = H(""), x = p(() => n.value.questions ? n.value.questions.map((E) => (E.type === "string" || E.type === "radio" || E.type === "dropdown" ? M.value[E.id] = "" : M.value[E.id] = [], w.value[E.id] = E.required, {
      ...E,
      classes: `input-${E.type}`
    })) : []);
    function F() {
      console.log("registrationTypeInput", R.value, a.value && a === "both");
      const E = {
        form: {
          first_name: h.value,
          last_name: f.value,
          email: y.value,
          questions: []
        },
        registration_type: a && a.value !== "both" && a.value !== "" ? a.value : a.value && a.value === "both" ? R.value : "",
        is_waitlist: s.value && s.value !== "" ? s.value : "0"
      };
      E.form.questions = n.value.questions.map((k) => ({
        id: k.id,
        answer: M.value[k.id]
      })), console.log("data submitting", JSON.stringify(E));
      let b = "";
      console.log("eventId", r), l ? b = `${l}api/1.1/events/${r.value}/register` : b = `${process.env.VUE_APP_CALENDAR_LIBRARY_URL}${r}/register`, fetch(b, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(E)
      }).then(() => {
        v.value = !0, L.value = {
          code: "success",
          text: "One seat is sent to LibCal to be registered or will be on wait list"
        };
      }).catch((k) => {
        console.error(k), v.value = !0, L.value = {
          code: "error",
          text: k
        };
      });
    }
    function C() {
      let E = !1, b = !1, k = !1;
      h.value && f.value && (E = !0), n.value.emailMethod.status === "required" && y.value && (b = !0), a && a.value === "both" && R.value === "" ? k = !1 : (a && a.value, k = !0), c.value = [], E || c.value.push("Full Name 1 required."), b || c.value.push("Email 2 required."), k || c.value.push("Registration Type 3 required.");
      for (const P of n.value.questions)
        w.value[P.id] && !M.value[P.id] ? P.type === "string" ? c.value.push(
          `${n.value.questions.label} 4a required.`
        ) : c.value.push(`${P.label} 4b required.`) : w.value[P.id] && P.type === "checkbox" && M.value[P.id].length === 0 && c.value.push(`${P.label} 4c required.`);
      c.value.length === 0 ? F() : window.scrollTo(0, 0);
    }
    function j() {
      O.value = !0;
    }
    function S() {
      O.value = !1;
    }
    function V() {
      clearTimeout(_.value), g.value = !1, O.value = !1;
    }
    return rr(L, () => {
      g.value = !0, _.value = setTimeout(V, 113e3);
    }), (E, b) => O.value ? (i(), o("div", {
      key: 1,
      class: A(["block-form", {
        "form-error": c.value.length,
        "form-success": g.value
      }])
    }, [
      g.value ? (i(), o("div", Ar, [
        b[8] || (b[8] = u("h3", null, "Registration complete", -1)),
        b[9] || (b[9] = u("p", null, "Please check your email to view your booking.", -1)),
        u("button", {
          type: "button",
          class: "notification--remove",
          onClick: b[1] || (b[1] = (k) => V())
        }, [
          q(T(tt), { class: "svg-glyph-close" })
        ])
      ])) : (i(), o("form", Br, [
        u("div", Nr, [
          b[10] || (b[10] = u("h3", { class: "formTitle" }, " Registration ", -1)),
          u("button", {
            type: "button",
            onClick: b[2] || (b[2] = (k) => S())
          }, [
            q(T(tt), { class: "svg-glyph-close" })
          ])
        ]),
        c.value.length ? (i(), o("div", jr, b[11] || (b[11] = [
          u("p", null, " Please complete the required fields to complete registration ", -1)
        ]))) : m("", !0),
        c.value.length ? (i(), o("br", Wr)) : m("", !0),
        b[18] || (b[18] = u("div", { class: "registrationInfo" }, [
          u("p", null, "Registration is required for this event.")
        ], -1)),
        T(a) === "both" ? (i(), o("div", Vr, [
          b[14] || (b[14] = u("legend", null, [
            G(" Registration Type "),
            u("span", { class: "required" }, "(required)")
          ], -1)),
          u("label", Yr, [
            U(u("input", {
              id: "in-person",
              "onUpdate:modelValue": b[3] || (b[3] = (k) => R.value = k),
              type: "radio",
              value: "in-person",
              required: ""
            }, null, 512), [
              [pe, R.value]
            ]),
            b[12] || (b[12] = G("in-person"))
          ]),
          u("label", Ur, [
            U(u("input", {
              id: "online",
              "onUpdate:modelValue": b[4] || (b[4] = (k) => R.value = k),
              type: "radio",
              value: "online"
            }, null, 512), [
              [pe, R.value]
            ]),
            b[13] || (b[13] = G(" online"))
          ])
        ])) : m("", !0),
        u("div", zr, [
          b[15] || (b[15] = u("label", null, [
            G("Full Name "),
            u("span", { class: "required" }, "(required)")
          ], -1)),
          u("div", Gr, [
            U(u("input", {
              id: "firstName",
              "onUpdate:modelValue": b[5] || (b[5] = (k) => h.value = k),
              type: "text",
              name: "firstName",
              required: "",
              placeholder: "First Name"
            }, null, 512), [
              [ce, h.value]
            ]),
            U(u("input", {
              id: "lastName",
              "onUpdate:modelValue": b[6] || (b[6] = (k) => f.value = k),
              type: "text",
              name: "lastName",
              required: "",
              placeholder: "Last Name"
            }, null, 512), [
              [ce, f.value]
            ])
          ])
        ]),
        T(n).emailMethod ? (i(), o("div", Zr, [
          u("label", Qr, [
            T(n).emailMethod.status === "required" ? (i(), o("span", Xr, b[16] || (b[16] = [
              G(" Email "),
              u("span", { class: "required" }, "(required)", -1)
            ]))) : (i(), o("span", Jr, "Email"))
          ]),
          U(u("input", Ir({
            id: "email",
            "onUpdate:modelValue": b[7] || (b[7] = (k) => y.value = k),
            type: "email",
            name: "email",
            required: T(n).emailMethod.status
          }, {}), null, 16, Kr), [
            [ce, y.value]
          ])
        ])) : m("", !0),
        (i(!0), o(B, null, N(x.value, (k) => (i(), o("div", {
          key: k.id,
          class: "input-wrapper parsedQuestionsLabelWrapper"
        }, [
          k.type !== "string" ? (i(), o("label", {
            key: 0,
            for: k.id,
            class: A(k.required ? "questionRequired" : "")
          }, [
            G(D(k.label) + " ", 1),
            k.required ? (i(), o("span", tn, " (required) ")) : m("", !0)
          ], 10, en)) : m("", !0),
          k.type === "string" ? (i(), o("div", rn, [
            u("label", {
              for: k.id,
              class: A(k.required ? "questionRequired" : "")
            }, [
              G(D(k.label) + " ", 1),
              k.required ? (i(), o("span", an, "(required)")) : m("", !0)
            ], 10, nn),
            U(u("textarea", {
              "onUpdate:modelValue": (P) => M.value[k.id] = P,
              placeholder: "Add multiple lines"
            }, null, 8, sn), [
              [ce, M.value[k.id]]
            ])
          ])) : m("", !0),
          k.type === "radio" ? (i(), o("div", on, [
            (i(!0), o(B, null, N(k.options, (P, ae) => (i(), o("div", {
              key: ae,
              class: "radioWrapper"
            }, [
              u("label", { for: P }, [
                U(u("input", {
                  id: P,
                  "onUpdate:modelValue": (ye) => M.value[k.id] = ye,
                  type: "radio",
                  value: P,
                  name: k.id
                }, null, 8, cn), [
                  [pe, M.value[k.id]]
                ]),
                G(" " + D(P), 1)
              ], 8, ln)
            ]))), 128))
          ])) : m("", !0),
          k.type === "checkbox" ? (i(), o("div", un, [
            (i(!0), o(B, null, N(k.options, (P, ae) => (i(), o("div", {
              key: ae,
              class: "checkboxWrapper"
            }, [
              U(u("input", {
                id: P,
                "onUpdate:modelValue": (ye) => M.value[k.id] = ye,
                type: "checkbox",
                "true-value": P,
                value: P
              }, null, 8, dn), [
                [Pr, M.value[k.id]]
              ]),
              u("label", { for: P }, D(P), 9, hn)
            ]))), 128))
          ])) : m("", !0),
          k.type === "dropdown" ? U((i(), o("select", {
            key: 4,
            id: k.id,
            "onUpdate:modelValue": (P) => M.value[k.id] = P,
            name: k.id,
            class: A(["input-dropdown", k.classes])
          }, [
            b[17] || (b[17] = u("option", {
              disabled: "",
              value: ""
            }, " Please select one ", -1)),
            (i(!0), o(B, null, N(k.options, (P, ae) => (i(), o("option", {
              key: ae,
              value: P
            }, D(P), 9, mn))), 128))
          ], 10, fn)), [
            [Er, M.value[k.id]]
          ]) : m("", !0)
        ]))), 128)),
        q(T(t), {
          type: "submit",
          label: "Register",
          "icon-name": "none",
          "is-secondary": !0,
          onClick: ut(C, ["prevent"])
        })
      ]))
    ], 2)) : (i(), I(T(t), {
      key: 0,
      label: "Register",
      "icon-name": "none",
      "is-secondary": !0,
      class: "register-button",
      onClick: b[0] || (b[0] = ut((k) => j(), ["prevent"]))
    }));
  }
}, nt = /* @__PURE__ */ W(gn, [["__scopeId", "data-v-201d7bab"]]);
function ar() {
  return ne("theme");
}
function sr(e = "") {
  let t = !1;
  return (e == null || String(e).indexOf("/") === 0 || !e.includes(".") && e.length !== 0) && (t = !0), t;
}
const vn = ["1", "_blank", "blank"], yn = ["", null];
function pn(e = "", t = "") {
  let r = "";
  return vn.includes(e) || yn.includes(e) && !sr(t) ? r = "_blank" : r = "", r;
}
function kn(e = "") {
  let t = !1;
  switch (!0) {
    case String(e).indexOf("/") === 0:
      t = !0;
      break;
  }
  return t;
}
const bn = {
  name: "SmartLink",
  props: {
    to: {
      type: String,
      default: ""
    },
    linkTarget: {
      type: String,
      default: ""
    },
    isDownload: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    parsedTarget() {
      return pn(this.linkTarget, this.to);
    },
    isRelative() {
      return !!kn(this.to);
    },
    parsedTo() {
      return this.isRelative && !this.isDownload && !this.parsedTarget ? this.to !== "/" && !this.to.endsWith("/") && !this.to.includes("q=") && !this.to.includes("&filters=") ? `${this.to}/` : this.to : this.to;
    }
  }
}, wn = ["href"], _n = ["href", "target"], Sn = {
  key: 3,
  class: "smart-link is-link"
};
function Mn(e, t, r, n, a, s) {
  const l = rt("router-link");
  return s.isRelative && !r.isDownload && !s.parsedTarget ? (i(), I(l, {
    key: 0,
    class: "smart-link is-router-link",
    to: s.parsedTo
  }, {
    default: ee(() => [
      Z(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["to"])) : r.isDownload ? (i(), o("a", {
    key: 1,
    href: r.to,
    class: "smart-link is-link",
    download: ""
  }, [
    Z(e.$slots, "default", {}, void 0, !0)
  ], 8, wn)) : r.to ? (i(), o("a", {
    key: 2,
    href: r.to,
    target: s.parsedTarget,
    class: "smart-link is-link"
  }, [
    Z(e.$slots, "default", {}, void 0, !0)
  ], 8, _n)) : (i(), o("button", Sn, [
    Z(e.$slots, "default", {}, void 0, !0)
  ]));
}
const me = /* @__PURE__ */ W(bn, [["render", Mn], ["__scopeId", "data-v-57dec64c"]]), Ln = { class: "label" }, xn = { class: "hover" }, Fn = { class: "label" }, Tn = {
  __name: "ButtonLink",
  props: {
    to: {
      type: String,
      default: ""
    },
    /**
     * Determines what text the button should have.
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Determines what icon should be used in button.
     * Do not include this prop if it is an internal link.
     */
    iconName: {
      type: String,
      default: ""
    },
    isSecondary: {
      type: Boolean,
      default: !1
    },
    isTertiary: {
      type: Boolean,
      default: !1
    },
    isQuaternary: {
      type: Boolean,
      default: !1
    },
    isDownload: {
      type: Boolean,
      default: !1
    },
    linkTarget: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = d(
      () => import("./icon-external-link-WeOL_8ZY.js")
    ), n = d(
      () => import("./icon-arrow-right-wLk03dY8.js")
    ), a = d(
      () => import("./icon-download-Dp9VXiET.js")
    ), s = d(
      () => Promise.resolve().then(() => Hr)
    ), l = ar(), c = p(() => [
      "button-link",
      (l == null ? void 0 : l.value) || "",
      t.isSecondary ? "is-secondary" : t.isTertiary ? "is-tertiary" : t.isQuaternary ? "is-quaternary" : ""
    ]), h = p(() => {
      switch (!0) {
        case t.isDownload:
          return a;
        case t.iconName === "none":
          return "";
        case sr(t.to):
          return n;
        case (t.linkTarget === "_blank" || t.iconName === "svg-external-link"):
          return r;
        case t.iconName === "icon-close":
          return s;
        // case props.iconName:
        //     return props.iconName
        default:
          return r;
      }
    });
    return (f, y) => (i(), I(me, {
      to: e.to,
      class: A(c.value),
      "is-download": e.isDownload,
      "link-target": e.linkTarget
    }, {
      default: ee(() => [
        u("span", Ln, D(e.label), 1),
        Z(f.$slots, "default", {}, void 0, !0),
        h.value !== "" ? (i(), I(X(h.value), {
          key: 0,
          class: "arrow",
          "aria-hidden": "true"
        })) : m("", !0),
        u("div", xn, [
          u("span", Fn, D(e.label), 1),
          h.value !== "" ? (i(), I(X(h.value), {
            key: 0,
            class: "arrow",
            "aria-hidden": "true"
          })) : m("", !0)
        ])
      ]),
      _: 3
    }, 8, ["to", "class", "is-download", "link-target"]));
  }
}, ir = /* @__PURE__ */ W(Tn, [["__scopeId", "data-v-2c45c183"]]), at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), $n = {
  name: "IconWithLink",
  components: {
    SmartLink: me,
    SvgIconConsultation: d(
      () => import("./icon-chat-DCvwPwHu.js")
    ),
    SvgIconList: d(
      () => import("./icon-list-CvgvlR7v.js")
    ),
    SvgIconLocation: d(
      () => import("./icon-location-DNog__Cl.js")
    ),
    SvgIconPhone: d(
      () => import("./icon-phone-DPv-PoqA.js")
    ),
    SvgIconSearch: d(
      () => import("./icon-search-iss6-A2x.js")
    ),
    SvgIconVirtual: d(
      () => import("./icon-virtual-CwZieS3s.js")
    ),
    SvgIconHeadphones: d(
      () => import("./icon-headphones-Vk0iXmnu.js")
    ),
    SvgIconVideo: d(
      () => import("./icon-video-Tda9BGRR.js")
    ),
    SvgIconImageStack: d(
      () => import("./icon-image-stack-B7_3hmGM.js")
    ),
    SvgIconMoney: d(
      () => import("./icon-money-BxPRObPA.js")
    ),
    SvgIconMessage: d(
      () => import("./icon-message-CyHSPUb-.js")
    ),
    SvgIconPlay: d(
      () => import("./icon-play-BaMxYNFG.js")
    ),
    SvgIconPlayFilled: d(
      () => import("./icon-play-filled-Dvcf_yQh.js")
    ),
    SvgIconEye: d(
      () => import("./icon-eye-L7brvvQ3.js")
    ),
    SvgIconCheck: d(
      () => import("./icon-check-CKGDA7ua.js")
    ),
    SvgIconEmail: d(
      () => import("./icon-email-d9JGcdKa.js")
    ),
    SvgIconCard: d(
      () => import("./icon-card-BiKDOVdQ.js")
    ),
    SvgIconCalendar: d(
      () => import("./icon-calendar-BFfsVZ3B.js")
    ),
    SvgIconLaptop: d(
      () => import("./icon-laptop-Bmg8PSn7.js")
    ),
    SvgIconBook: d(
      () => import("./icon-book-Dhs3bbZ0.js")
    ),
    SvgIconLocker: d(
      () => import("./icon-locker-BBQPsbYg.js")
    ),
    SvgIconPerson: d(
      () => import("./icon-person-BPUoRkt6.js")
    ),
    SvgIconAccessible: d(
      () => import("./icon-accessible-C8Gup1rK.js")
    ),
    SvgIconClock: d(
      () => import("./icon-clock-CG3EE-5W.js")
    ),
    SvgIconChair: d(
      () => import("./icon-chair-D8fW8Dnx.js")
    ),
    SvgIconLight: d(
      () => import("./icon-light-wkkuRssP.js")
    ),
    SvgIconLocationFilled: d(
      () => import("./icon-location-filled-Cyf_QfPI.js")
    ),
    SvgIconAlert: d(
      () => import("./icon-alert-C-nJ0RMX.js")
    ),
    SvgIconShareEmail: d(
      () => import("./icon-share-email-ds0LMlnf.js")
    ),
    SvgIconSharePrinter: d(
      () => Promise.resolve().then(() => fi)
    ),
    SvgIconShareFacebook: d(
      () => import("./icon-share-facebook-jNsnyfWc.js")
    ),
    SvgIconShareInstagram: d(
      () => import("./icon-share-instagram-CHpDcj4d.js")
    ),
    SvgIconShareLinkedin: d(
      () => import("./icon-share-linkedin-D_WCf0Fz.js")
    ),
    SvgIconShareTwitter: d(
      () => import("./icon-share-twitter-CS2kovPG.js")
    ),
    SvgIconShareWhatsapp: d(
      () => import("./icon-share-whatsapp-B2hhPPEt.js")
    ),
    // FTVA Icons
    SvgIconFtvaAppleinc: d(
      () => import("./icon-ftva-appleinc-D6O1BYI_.js")
    ),
    SvgIconFtvaGcal: d(
      () => import("./icon-ftva-gcal-C7UpU-sa.js")
    ),
    SvgIconFtvaOutlook: d(
      () => import("./icon-ftva-outlook-D01ntAYf.js")
    ),
    SvgIconFtvaDownload: d(
      () => import("./icon-ftva-download-CfgJu8GR.js")
    ),
    SvgIconFtvaShare: d(
      () => import("./icon-ftva-share-bwURDOcD.js")
    ),
    SvgIconFtvaSocialConfirm: d(
      () => import("./icon-ftva-social_confirm-iljw2AFe.js")
    ),
    SvgIconFtvaSocialEmail: d(
      () => import("./icon-ftva-social_email-C1L_bljr.js")
    ),
    SvgIconFtvaSocialFacebook: d(
      () => import("./icon-ftva-social_facebook-BgnF7yg7.js")
    ),
    SvgIconFtvaSocialLink: d(
      () => import("./icon-ftva-social_link-BZIDORpF.js")
    ),
    SvgIconFtvaSocialX: d(
      () => import("./icon-ftva-social_x-7x5Xoj9-.js")
    )
  },
  props: {
    text: {
      type: String,
      required: !0
    },
    iconName: {
      type: String,
      required: !0
    },
    to: {
      // URL to link to
      type: String,
      default: ""
    }
  }
}, Cn = { class: "icon-with-link" }, On = ["textContent"], In = {
  key: 1,
  class: "icon-with-link-container"
}, Pn = ["textContent"];
function En(e, t, r, n, a, s) {
  const l = rt("SmartLink");
  return i(), o("div", Cn, [
    r.to ? (i(), I(l, {
      key: 0,
      to: r.to,
      class: "icon-with-link-container link"
    }, {
      default: ee(() => [
        (i(), I(X(r.iconName), {
          class: "icon",
          "aria-hidden": "true"
        })),
        u("div", {
          class: "text",
          textContent: D(r.text)
        }, null, 8, On)
      ]),
      _: 1
    }, 8, ["to"])) : (i(), o("div", In, [
      (i(), I(X(r.iconName), {
        class: "icon",
        "aria-hidden": "true"
      })),
      u("div", {
        class: "text",
        textContent: D(r.text)
      }, null, 8, Pn)
    ]))
  ]);
}
const or = /* @__PURE__ */ W($n, [["render", En], ["__scopeId", "data-v-065bd989"]]), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: or
}, Symbol.toStringTag, { value: "Module" })), Dn = ["src", "height", "width", "alt", "srcset", "sizes", "object-fit"], Rn = ["innerHTML"], qn = {
  key: 1,
  class: "credit"
}, Hn = { class: "credit-text" }, An = /* @__PURE__ */ te({
  __name: "ResponsiveImage",
  props: {
    media: {
      type: Object,
      default: () => {
      }
    },
    src: {
      type: String,
      default: ""
    },
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    alt: {
      type: String,
      default: ""
    },
    srcset: {
      type: String,
      default: ""
    },
    sizes: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: Number,
      default: 0
    },
    objectFit: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = H(!1), n = H(!1);
    function a() {
      r.value = !0;
    }
    function s() {
      n.value = !0;
    }
    const l = p(() => {
      let y = "";
      return t.media.focalPoint && t.media.focalPoint.length > 0 && (y = `object-position:${t.media.focalPoint.map((M) => `${M * 100}%`).join(" ")}`), y;
    }), c = p(() => {
      const y = t.media.height || t.height, w = t.media.width || t.width;
      return t.aspectRatio || y / w * 100;
    }), h = p(() => ({
      paddingBottom: `${c.value}%`
    })), f = p(() => [
      "responsive-image",
      `object-fit-${t.objectFit}`,
      { "has-loaded": r },
      { "has-errored": n }
    ]);
    return (y, w) => t.media && t.media.src ? (i(), o("figure", {
      key: 0,
      class: A(f.value)
    }, [
      u("img", {
        src: t.media.src || t.src,
        height: t.media.width || t.width,
        width: t.media.height || t.height,
        alt: t.media.alt || t.alt,
        srcset: t.media.srcset || t.srcset,
        sizes: t.media.sizes || t.sizes,
        "object-fit": t.objectFit,
        style: de(l.value),
        class: "media",
        onLoad: a,
        onError: s
      }, null, 44, Dn),
      t.media.caption || t.caption ? (i(), o("figcaption", {
        key: 0,
        class: "caption",
        innerHTML: t.media.caption || t.caption
      }, null, 8, Rn)) : m("", !0),
      u("div", {
        class: "sizer",
        style: de(h.value)
      }, null, 4),
      Z(y.$slots, "default", {}, void 0, !0),
      y.$slots.credit ? (i(), o("div", qn, [
        u("div", Hn, [
          Z(y.$slots, "credit", {}, void 0, !0)
        ])
      ])) : m("", !0)
    ], 2)) : m("", !0);
  }
}), cr = /* @__PURE__ */ W(An, [["__scopeId", "data-v-c5a3f593"]]), Bn = ["src", "alt", "controls", "autoplay", "muted", "loop", "playsinline"], Nn = /* @__PURE__ */ te({
  __name: "ResponsiveVideo",
  props: {
    media: {
      type: Object,
      default: () => ({})
    },
    mode: {
      type: String,
      default: "intrinsic-ratio"
    },
    aspectRatio: {
      type: Number,
      default: 0
    },
    objectFit: {
      type: String,
      default: "cover"
    },
    playsinline: {
      type: Boolean,
      default: !0
    },
    autoplay: {
      type: Boolean,
      default: !0
    },
    loop: {
      type: Boolean,
      default: !1
    },
    muted: {
      type: Boolean,
      default: !0
    },
    controls: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["ended", "error", "error-image", "error-video", "loaded", "loaded-image", "loaded-video", "playing"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = H(null), s = Dr({
      video: !1
    }), l = H({
      video: !1
    }), c = p(() => Object.values(l.value).includes(!0)), h = p(() => Object.values(s).every(Boolean)), f = p(() => r.media.src), y = p(() => {
      const S = r.media.height;
      return S && typeof S == "string" ? Number.parseInt(S) : S;
    }), w = p(() => {
      const S = r.media.width;
      return S && typeof S == "string" ? Number.parseInt(S) : S;
    }), M = p(() => {
      let S = "landscape";
      switch (!0) {
        case y.value > w.value:
          S = "portrait";
          break;
        case y.value === w.value:
          S = "square";
          break;
      }
      return S;
    }), _ = p(() => [
      "responsive-video",
      `mode-${r.mode}`,
      { "has-loaded": h.value },
      { "has-error": c.value },
      { "has-video-error": l.value.video },
      `is-orientation-${M.value}`,
      `object-fit-${r.objectFit}`
    ]), g = p(() => {
      let S = r.aspectRatio || y.value / w.value * 100;
      return S || (S = 0), S;
    }), v = p(() => r.media.focalPoint.length > 0 ? {
      x: r.media.focalPoint[0],
      y: r.media.focalPoint[1]
    } : {
      x: "0.5",
      y: "0.5"
    }), L = p(() => r.media.alt), O = p(() => {
      const S = {};
      return r.mode === "intrinsic-ratio" && (S.paddingBottom = `${g.value}%`), S;
    }), R = p(() => {
      const S = {};
      return v.value.x !== "" && v.value.y !== "" && (S.objectPosition = `${v.value.x}% ${v.value.y}%`), S;
    });
    rr(f, (S) => {
      S && (s.video = !1, l.value.video = !1);
    }), Rr(() => {
      f.value && (s.video = a.value.readyState >= 3);
    });
    function x(S) {
      s[S] = !0, n("loaded", S), n(`loaded-${S}`);
    }
    function F(S) {
      l.value[S] = !0, n("error", S), n(`error-${S}`);
    }
    function C(S) {
      n("ended", S);
    }
    function j() {
      n("playing");
    }
    return (S, V) => (i(), o("figure", {
      class: A(_.value)
    }, [
      f.value ? (i(), o("video", {
        key: 0,
        ref_key: "videoRef",
        ref: a,
        class: "media media-video",
        src: f.value,
        alt: L.value,
        style: de(R.value),
        controls: e.controls,
        autoplay: e.autoplay,
        muted: e.muted,
        loop: e.loop,
        playsinline: e.playsinline,
        onLoadeddata: V[0] || (V[0] = (E) => x("video")),
        onError: V[1] || (V[1] = (E) => F("video")),
        onEnded: C,
        onPlaying: j
      }, null, 44, Bn)) : m("", !0),
      u("div", {
        class: "sizer",
        style: de(O.value)
      }, null, 4),
      V[2] || (V[2] = u("div", { class: "background-color" }, null, -1)),
      Z(S.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ur = /* @__PURE__ */ W(Nn, [["__scopeId", "data-v-b034df33"]]);
function jn(e = "") {
  if (e == null)
    return e;
  const t = /<a\s[^>]*?target=["'_blank][^>]*>.*?<\/a>/g;
  return e.replace(t, (r) => `${r.replace("</a>", "")}<span class="visually-hidden">(opens in a new tab)</span></a>`);
}
function Wn(e = "") {
  return e == null ? e : e.includes("https://test-craft.library.ucla.edu") ? e.replaceAll("https://test-craft.library.ucla.edu", "") : e.includes("https://stage-craft.library.ucla.edu") ? e.replaceAll("https://stage-craft.library.ucla.edu", "") : e.replaceAll("https://craft.library.ucla.edu", "");
}
const Vn = ["innerHTML"], Yn = /* @__PURE__ */ te({
  __name: "RichText",
  props: {
    richTextContent: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = ar(), n = p(() => ["rich-text", (r == null ? void 0 : r.value) || ""]), a = p(() => {
      const s = Wn(t.richTextContent);
      return jn(s);
    });
    return (s, l) => (i(), o("div", {
      class: A(n.value)
    }, [
      u("div", {
        class: "parsed-content",
        innerHTML: a.value
      }, null, 8, Vn),
      Z(s.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), dr = /* @__PURE__ */ W(Yn, [["__scopeId", "data-v-7e21c6ae"]]), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" }));
function st(e = "") {
  return e === null || /^https?:\/\//.test(e) || e.startsWith("/") || (e = `/${e}`), e;
}
const Un = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, zn = (e, t, r) => {
  let n;
  const a = Un[e];
  return typeof a == "string" ? n = a : t === 1 ? n = a.one : n = a.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function ke(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const Gn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Zn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Qn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xn = {
  date: ke({
    formats: Gn,
    defaultWidth: "full"
  }),
  time: ke({
    formats: Zn,
    defaultWidth: "full"
  }),
  dateTime: ke({
    formats: Qn,
    defaultWidth: "full"
  })
}, Jn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Kn = (e, t, r, n) => Jn[e];
function se(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let a;
    if (n === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : l;
      a = e.formattingValues[c] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, c = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[c] || e.values[l];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[s];
  };
}
const ea = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ta = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ra = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, na = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, aa = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, sa = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ia = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, oa = {
  ordinalNumber: ia,
  era: se({
    values: ea,
    defaultWidth: "wide"
  }),
  quarter: se({
    values: ta,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: se({
    values: ra,
    defaultWidth: "wide"
  }),
  day: se({
    values: na,
    defaultWidth: "wide"
  }),
  dayPeriod: se({
    values: aa,
    defaultWidth: "wide",
    formattingValues: sa,
    defaultFormattingWidth: "wide"
  })
};
function ie(e) {
  return (t, r = {}) => {
    const n = r.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], s = t.match(a);
    if (!s)
      return null;
    const l = s[0], c = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], h = Array.isArray(c) ? ca(c, (w) => w.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      la(c, (w) => w.test(l))
    );
    let f;
    f = e.valueCallback ? e.valueCallback(h) : h, f = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(f)
    ) : f;
    const y = t.slice(l.length);
    return { value: f, rest: y };
  };
}
function la(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function ca(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function ua(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const a = n[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let l = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    l = r.valueCallback ? r.valueCallback(l) : l;
    const c = t.slice(a.length);
    return { value: l, rest: c };
  };
}
const da = /^(\d+)(th|st|nd|rd)?/i, ha = /\d+/i, fa = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ma = {
  any: [/^b/i, /^(a|c)/i]
}, ga = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, va = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ya = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, pa = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ka = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ba = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, wa = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, _a = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Sa = {
  ordinalNumber: ua({
    matchPattern: da,
    parsePattern: ha,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ie({
    matchPatterns: fa,
    defaultMatchWidth: "wide",
    parsePatterns: ma,
    defaultParseWidth: "any"
  }),
  quarter: ie({
    matchPatterns: ga,
    defaultMatchWidth: "wide",
    parsePatterns: va,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ie({
    matchPatterns: ya,
    defaultMatchWidth: "wide",
    parsePatterns: pa,
    defaultParseWidth: "any"
  }),
  day: ie({
    matchPatterns: ka,
    defaultMatchWidth: "wide",
    parsePatterns: ba,
    defaultParseWidth: "any"
  }),
  dayPeriod: ie({
    matchPatterns: wa,
    defaultMatchWidth: "any",
    parsePatterns: _a,
    defaultParseWidth: "any"
  })
}, Ma = {
  code: "en-US",
  formatDistance: zn,
  formatLong: Xn,
  formatRelative: Kn,
  localize: oa,
  match: Sa,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let La = {};
function ge() {
  return La;
}
const fr = 6048e5, xa = 864e5, ht = Symbol.for("constructDateFrom");
function J(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && ht in e ? e[ht](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function z(e, t) {
  return J(t || e, e);
}
function ft(e) {
  const t = z(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function Fa(e, ...t) {
  const r = J.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function mt(e, t) {
  const r = z(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function Ta(e, t, r) {
  const [n, a] = Fa(
    r == null ? void 0 : r.in,
    e,
    t
  ), s = mt(n), l = mt(a), c = +s - ft(s), h = +l - ft(l);
  return Math.round((c - h) / xa);
}
function $a(e, t) {
  const r = z(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function Ca(e, t) {
  const r = z(e, t == null ? void 0 : t.in);
  return Ta(r, $a(r)) + 1;
}
function le(e, t) {
  var c, h, f, y;
  const r = ge(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((h = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((y = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : y.weekStartsOn) ?? 0, a = z(e, t == null ? void 0 : t.in), s = a.getDay(), l = (s < n ? 7 : 0) + s - n;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function he(e, t) {
  return le(e, { ...t, weekStartsOn: 1 });
}
function mr(e, t) {
  const r = z(e, t == null ? void 0 : t.in), n = r.getFullYear(), a = J(r, 0);
  a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const s = he(a), l = J(r, 0);
  l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
  const c = he(l);
  return r.getTime() >= s.getTime() ? n + 1 : r.getTime() >= c.getTime() ? n : n - 1;
}
function Oa(e, t) {
  const r = mr(e, t), n = J(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), he(n);
}
function Ia(e, t) {
  const r = z(e, t == null ? void 0 : t.in), n = +he(r) - +Oa(r);
  return Math.round(n / fr) + 1;
}
function gr(e, t) {
  var y, w, M, _;
  const r = z(e, t == null ? void 0 : t.in), n = r.getFullYear(), a = ge(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((w = (y = t == null ? void 0 : t.locale) == null ? void 0 : y.options) == null ? void 0 : w.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((_ = (M = a.locale) == null ? void 0 : M.options) == null ? void 0 : _.firstWeekContainsDate) ?? 1, l = J((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(n + 1, 0, s), l.setHours(0, 0, 0, 0);
  const c = le(l, t), h = J((t == null ? void 0 : t.in) || e, 0);
  h.setFullYear(n, 0, s), h.setHours(0, 0, 0, 0);
  const f = le(h, t);
  return +r >= +c ? n + 1 : +r >= +f ? n : n - 1;
}
function Pa(e, t) {
  var c, h, f, y;
  const r = ge(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((y = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, a = gr(e, t), s = J((t == null ? void 0 : t.in) || e, 0);
  return s.setFullYear(a, 0, n), s.setHours(0, 0, 0, 0), le(s, t);
}
function Ea(e, t) {
  const r = z(e, t == null ? void 0 : t.in), n = +le(r, t) - +Pa(r, t);
  return Math.round(n / fr) + 1;
}
function $(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Q = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return $(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : $(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return $(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return $(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return $(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return $(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return $(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return $(a, t.length);
  }
}, re = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, gt = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
      return r.ordinalNumber(a, { unit: "year" });
    }
    return Q.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const a = gr(e, n), s = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const l = s % 100;
      return $(l, 2);
    }
    return t === "Yo" ? r.ordinalNumber(s, { unit: "year" }) : $(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = mr(e);
    return $(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return $(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(n);
      // 01, 02, 03, 04
      case "QQ":
        return $(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(n);
      // 01, 02, 03, 04
      case "qq":
        return $(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Q.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(n + 1);
      // 01, 02, ..., 12
      case "LL":
        return $(n + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const a = Ea(e, n);
    return t === "wo" ? r.ordinalNumber(a, { unit: "week" }) : $(a, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Ia(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : $(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Q.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Ca(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : $(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const a = e.getDay(), s = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return $(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return r.ordinalNumber(s, { unit: "day" });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const a = e.getDay(), s = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return $(s, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return r.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), a = n === 0 ? 7 : n;
    switch (t) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return $(a, t.length);
      // 2nd
      case "io":
        return r.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n === 12 ? a = re.noon : n === 0 ? a = re.midnight : a = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n >= 17 ? a = re.evening : n >= 12 ? a = re.afternoon : n >= 4 ? a = re.morning : a = re.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return Q.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Q.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : $(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : $(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Q.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Q.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Q.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return yt(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return K(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return K(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return yt(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return K(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return K(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + vt(n, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + K(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + vt(n, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + K(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return $(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return $(+e, t.length);
  }
};
function vt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), s = n % 60;
  return s === 0 ? r + String(a) : r + String(a) + t + $(s, 2);
}
function yt(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + $(Math.abs(e) / 60, 2) : K(e, t);
}
function K(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = $(Math.trunc(n / 60), 2), s = $(n % 60, 2);
  return r + a + t + s;
}
const pt = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, vr = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Da = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return pt(e, t);
  let s;
  switch (n) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", pt(n, t)).replace("{{time}}", vr(a, t));
}, Ra = {
  p: vr,
  P: Da
}, qa = /^D+$/, Ha = /^Y+$/, Aa = ["D", "DD", "YY", "YYYY"];
function Ba(e) {
  return qa.test(e);
}
function Na(e) {
  return Ha.test(e);
}
function ja(e, t, r) {
  const n = Wa(e, t, r);
  if (console.warn(n), Aa.includes(e)) throw new RangeError(n);
}
function Wa(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Va(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ya(e) {
  return !(!Va(e) && typeof e != "number" || isNaN(+z(e)));
}
const Ua = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, za = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ga = /^'([^]*?)'?$/, Za = /''/g, Qa = /[a-zA-Z]/;
function Y(e, t, r) {
  var y, w, M, _;
  const n = ge(), a = n.locale ?? Ma, s = n.firstWeekContainsDate ?? ((w = (y = n.locale) == null ? void 0 : y.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, l = n.weekStartsOn ?? ((_ = (M = n.locale) == null ? void 0 : M.options) == null ? void 0 : _.weekStartsOn) ?? 0, c = z(e, r == null ? void 0 : r.in);
  if (!Ya(c))
    throw new RangeError("Invalid time value");
  let h = t.match(za).map((g) => {
    const v = g[0];
    if (v === "p" || v === "P") {
      const L = Ra[v];
      return L(g, a.formatLong);
    }
    return g;
  }).join("").match(Ua).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const v = g[0];
    if (v === "'")
      return { isToken: !1, value: Xa(g) };
    if (gt[v])
      return { isToken: !0, value: g };
    if (v.match(Qa))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: g };
  });
  a.localize.preprocessor && (h = a.localize.preprocessor(c, h));
  const f = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: a
  };
  return h.map((g) => {
    if (!g.isToken) return g.value;
    const v = g.value;
    (Na(v) || Ba(v)) && ja(v, t, String(e));
    const L = gt[v[0]];
    return L(c, v, a.localize, f);
  }).join("");
}
function Xa(e) {
  const t = e.match(Ga);
  return t ? t[1].replace(Za, "'") : e;
}
function it(e = "", t = "", r = "long") {
  const n = Y(new Date(e), "MMMM d, Y"), a = Y(new Date(t), "MMMM d, Y");
  let s = `${n} - ${a}`;
  if (n === a && (s = Y(new Date(e), "MMMM d, Y")), t || (s = n), r === "short" || r === "shortWithYear") {
    const l = s.slice(0, 3), c = s.split(" ").slice(1).join(" ");
    if (t && t !== e) {
      const h = Y(new Date(e), "MMM d"), f = Y(new Date(t), "MMM d");
      if (r === "shortWithYear") {
        const y = Y(new Date(t), "MMM d, Y");
        return `${h} - ${y}`;
      }
      return `${h} - ${f}`;
    }
    return `${l} ${c}`;
  }
  return s;
}
function ot(e = "", t = "") {
  const r = Y(new Date(e), "h:mm aaa"), n = Y(new Date(t), "h:mm aaa");
  let a = `${r} - ${n}`;
  return r === n && (a = Y(new Date(e), "h:mm aaa")), t || (a = r), a;
}
function ve(e = "") {
  let t = "default";
  if (e == null)
    return t;
  switch (!0) {
    case e.includes("/help/"):
    case e.includes("/projects/"):
      t = "help";
      break;
    case e.includes("/about/"):
    case e.includes("/impact/"):
    case e.includes("/applicants/"):
      t = "about";
      break;
    case e.includes("/visit/"):
    case e.includes("/events-exhibits/"):
    case e.includes("/who-we-are/"):
      t = "visit";
      break;
  }
  return t;
}
const Ja = {
  width: "42",
  height: "100",
  viewBox: "0 0 42 100",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__graphic-category-slash"
};
function yr(e, t) {
  return i(), o("svg", Ja, t[0] || (t[0] = [
    u("path", {
      d: "M40.8666 1L20.4532 51.5248L7.48442 83.6237L1.00001 99.6732",
      stroke: "#0AA5FF",
      "stroke-width": "1.5",
      class: "svg__stroke--default-cyan-03"
    }, null, -1)
  ]));
}
const pr = { render: yr }, kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pr,
  render: yr
}, Symbol.toStringTag, { value: "Module" })), Ka = {
  width: "900",
  height: "300",
  viewBox: "0 0 900 300",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__graphic-hatch-lines"
};
function es(e, t) {
  return i(), o("svg", Ka, t[0] || (t[0] = [
    fe('<path d="M144.445 318.242L12.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M160.445 318.242L28.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M176.445 318.242L44.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M192.445 318.242L60.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M208.445 318.242L76.7009 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M224.445 318.242L92.7009 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M240.445 318.242L108.701 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M256.445 318.242L124.701 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M272.445 318.242L140.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M288.445 318.242L156.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M304.445 318.242L172.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M320.445 318.242L188.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M336.445 318.242L204.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M352.445 318.242L220.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M368.445 318.242L236.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M384.445 318.242L252.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M400.445 318.242L268.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M416.445 318.242L284.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M432.445 318.242L300.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M448.445 318.242L316.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M464.445 318.242L332.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M480.445 318.242L348.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M496.445 318.242L364.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M512.445 318.242L380.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M528.445 318.242L396.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M544.445 318.242L412.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M560.445 318.242L428.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M576.445 318.242L444.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M592.445 318.242L460.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M608.445 318.242L476.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M624.445 318.242L492.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M640.445 318.242L508.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M656.445 318.242L524.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M672.445 318.242L540.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M688.445 318.242L556.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M704.445 318.242L572.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M720.445 318.242L588.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M736.445 318.242L604.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M752.445 318.242L620.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M768.445 318.242L636.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M784.445 318.242L654.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M800.445 318.242L670.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M816.445 318.242L686.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M832.445 318.242L702.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M848.445 318.242L718.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M864.445 318.242L734.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M880.445 318.242L750.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path>', 47)
  ]));
}
const br = { render: es }, ts = {
  width: "225",
  height: "496",
  viewBox: "0 0 225 496",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function rs(e, t) {
  return i(), o("svg", ts, t[0] || (t[0] = [
    u("g", null, [
      u("path", {
        opacity: "0.25",
        d: "M71.1732 72.8843L243 0.393311V49.8933L105.538 107.886L48.6001 247.893L105.538 387.9L243 445.893V495.393L71.1732 422.902L0 247.893L71.1732 72.8843Z",
        fill: "#F2F2F2"
      })
    ], -1)
  ]));
}
const wr = { render: rs }, ns = { class: "slot" }, as = {
  key: 0,
  class: "breadcrumb"
}, ss = { class: "text" }, is = {
  key: 0,
  class: "gradient"
}, os = { class: "hatch-box" }, ls = { class: "clipped-box" }, cs = ["innerHTML"], us = { class: "hatch" }, ds = { class: "meta" }, hs = ["innerHTML"], fs = { key: 1 }, ms = { key: 2 }, gs = ["innerHTML"], vs = { class: "meta-text" }, ys = {
  key: 0,
  class: "date-created"
}, ps = ["innerHTML"], ks = {
  key: 1,
  class: "byline"
}, bs = ["innerHTML"], ws = {
  key: 3,
  class: "schedule"
}, _s = ["innerHTML"], Ss = ["innerHTML"], Ms = {
  key: 4,
  class: "location-group"
}, Ls = {
  key: 0,
  class: "block-form-container"
}, xs = /* @__PURE__ */ te({
  __name: "BannerFeatured",
  props: {
    media: {
      type: Object,
      default: () => {
      }
    },
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: ""
    },
    dateCreated: {
      type: String,
      default: ""
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    },
    locations: {
      type: Array,
      default: () => []
    },
    byline: {
      type: Array,
      default: () => []
    },
    to: {
      // URL to link to, if blank won't link
      type: String,
      default: ""
    },
    breadcrumb: {
      type: String,
      default: ""
    },
    prompt: {
      // text that displays on blue button, e.g. "View exhibit". Links to `props.to`
      type: String,
      default: ""
    },
    alignRight: {
      type: Boolean,
      default: !0
    },
    ratio: {
      type: Number,
      default: 56.25
    },
    registerEvent: {
      type: Boolean,
      default: !1
    },
    titleLink: {
      type: String,
      default: ""
    },
    sectionHandle: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = p(() => {
      if (t.media && t.media.src) {
        const v = t.media.src.toLowerCase().split(".").pop();
        return v === "mp4" || v === "m4a" || v === "f4v" || v === "m4b" || v === "mov";
      } else
        return !1;
    }), n = p(() => r.value ? ur : cr), a = p(() => r.value ? null : t.media), s = p(() => {
      if (!r.value)
        return null;
      const g = t.media;
      return {
        src: g.src,
        focalPoint: g.focalPoint,
        sizes: g.sizes,
        height: g.height,
        width: g.width,
        alt: g.alt,
        caption: g.caption,
        poster: g.poster
      };
    }), l = p(() => r.value ? s.value : a.value), c = p(() => t.ratio), h = p(() => t.locations.map((g) => ({
      ...g,
      svg: g.title === "Online" ? "svg-icon-virtual" : "svg-icon-location",
      class: g.title === "Online" ? "location-online" : "location-link",
      to: g.to != null ? st(g.to) : ""
    }))), f = p(() => it(t.startDate, t.endDate)), y = p(() => Y(new Date(t.dateCreated), "MMMM d, Y")), w = p(() => t.startDate && t.sectionHandle === "event" ? ot(t.startDate, t.endDate) : ""), M = p(() => ve(t.to)), _ = p(() => [
      "banner-featured",
      { "hatch-left": !t.alignRight },
      `color-${M.value}`
    ]);
    return (g, v) => (i(), o("div", {
      class: A(_.value)
    }, [
      u("div", ns, [
        Z(g.$slots, "default", {}, () => [
          e.breadcrumb ? (i(), o("div", as, [
            q(T(pr), {
              class: "heading-line",
              "aria-hidden": "true"
            }),
            u("h2", ss, D(e.breadcrumb), 1)
          ])) : m("", !0)
        ], !0)
      ]),
      (i(), I(X(n.value), {
        class: "media",
        media: l.value,
        "aspect-ratio": c.value
      }, {
        default: ee(() => [
          r.value ? m("", !0) : (i(), o("div", is)),
          q(T(wr), {
            class: "molecule",
            "aria-hidden": "true"
          })
        ]),
        _: 1
      }, 8, ["media", "aspect-ratio"])),
      u("div", os, [
        u("div", ls, [
          e.category ? (i(), o("h2", {
            key: 0,
            class: "category category-mobile",
            innerHTML: e.category
          }, null, 8, cs)) : m("", !0)
        ]),
        u("div", us, [
          q(T(br), {
            class: "svg",
            "aria-hidden": "true"
          })
        ])
      ]),
      u("div", ds, [
        e.category ? (i(), o("div", {
          key: 0,
          class: "category category-desktop",
          innerHTML: e.category
        }, null, 8, hs)) : m("", !0),
        e.titleLink.length > 0 ? (i(), o("div", fs, [
          q(me, {
            id: "banner-featured",
            to: e.titleLink,
            class: "title title-linked"
          }, {
            default: ee(() => [
              G(D(e.title), 1)
            ]),
            _: 1
          }, 8, ["to"])
        ])) : (i(), o("div", ms, [
          u("h3", {
            id: "banner-featured",
            class: "title",
            innerHTML: e.title
          }, null, 8, gs)
        ])),
        u("div", vs, [
          e.dateCreated ? (i(), o("div", ys, [
            e.dateCreated ? (i(), o("time", {
              key: 0,
              class: "date-created",
              innerHTML: y.value
            }, null, 8, ps)) : m("", !0)
          ])) : m("", !0),
          e.byline.length ? (i(), o("div", ks, [
            (i(!0), o(B, null, N(e.byline, (L, O) => (i(), o("div", {
              key: `external-${O}`,
              class: "byline-item",
              innerHTML: L
            }, null, 8, bs))), 128))
          ])) : m("", !0),
          e.description ? (i(), I(dr, {
            key: 2,
            class: "description",
            "rich-text-content": e.description
          }, null, 8, ["rich-text-content"])) : m("", !0),
          e.startDate || e.endDate ? (i(), o("div", ws, [
            e.startDate ? (i(), o("time", {
              key: 0,
              class: "schedule-item",
              innerHTML: f.value
            }, null, 8, _s)) : m("", !0),
            w.value ? (i(), o("time", {
              key: 1,
              class: "schedule-item",
              innerHTML: w.value
            }, null, 8, Ss)) : m("", !0)
          ])) : m("", !0),
          e.locations.length ? (i(), o("div", Ms, [
            (i(!0), o(B, null, N(h.value, (L) => (i(), I(or, {
              key: `location-${L.id}`,
              text: L.title,
              "icon-name": L.svg,
              to: L.to,
              class: A(L.class)
            }, null, 8, ["text", "icon-name", "to", "class"]))), 128))
          ])) : m("", !0)
        ]),
        e.to ? (i(), I(ir, {
          key: 3,
          id: "banner-featured-button",
          label: e.prompt,
          to: e.to,
          "aria-labelledby": "banner-featured-button banner-featured",
          class: "button"
        }, null, 8, ["label", "to"])) : m("", !0)
      ]),
      !e.to && e.registerEvent ? (i(), o("div", Ls, [
        q(nt)
      ])) : m("", !0)
    ], 2));
  }
}), vo = /* @__PURE__ */ W(xs, [["__scopeId", "data-v-d975c59b"]]), Fs = {
  key: 0,
  class: "category"
}, Ts = ["innerHTML"], $s = { class: "hatch-box" }, Cs = { class: "hatch" }, Os = { class: "meta" }, Is = ["innerHTML"], Ps = { class: "meta-text" }, Es = { class: "meta-block" }, Ds = {
  key: 0,
  class: "byline-item"
}, Rs = {
  key: 1,
  class: "subject-areas"
}, qs = ["innerHTML"], Hs = ["innerHTML"], As = ["innerHTML"], Bs = {
  key: 0,
  class: "contact-info-group"
}, Ns = {
  key: 1,
  class: "location-group"
}, js = {
  key: 1,
  class: "block-form-container"
}, Ws = /* @__PURE__ */ te({
  __name: "BannerHeader",
  props: {
    media: {
      type: Object,
      default: () => {
      }
    },
    title: {
      type: String,
      required: !0
    },
    text: {
      type: String,
      default: ""
    },
    byline: {
      type: Array,
      default: () => []
    },
    contributors: {
      type: Array,
      default: () => []
    },
    subjectAreas: {
      type: Array,
      default: () => []
    },
    dateCreated: {
      type: String,
      default: ""
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    },
    locations: {
      type: Array,
      default: () => []
    },
    to: {
      // URL to link to, if blank won't link
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: ""
    },
    prompt: {
      // text that displays on blue button, e.g. "View exhibit". Links to `props.to`
      type: String,
      default: ""
    },
    alignRight: {
      type: Boolean,
      default: !0
    },
    ratio: {
      type: Number,
      default: 56.25
    },
    // contact info for Location Detail Page
    email: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      default: ""
    },
    addressLink: {
      type: String,
      default: ""
    },
    staffDirectoryLink: {
      type: String,
      default: ""
    },
    isEvent: {
      type: Boolean,
      default: !1
    },
    registerEvent: {
      type: Boolean,
      default: !1
    },
    sectionHandle: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = d(() => Promise.resolve().then(() => at)), n = d(() => Promise.resolve().then(() => hr)), a = d(() => Promise.resolve().then(() => lr)), s = d(() => Promise.resolve().then(() => kr)), l = p(() => ve(t.to)), c = p(() => [
      "banner-header",
      { "hatch-left": !t.alignRight },
      `color-${l.value}`
    ]), h = p(() => {
      if (t.media && t.media.src) {
        const F = t.media.src.toLowerCase().split(".").pop();
        return F === "mp4" || F === "m4a" || F === "f4v" || F === "m4b" || F === "mov";
      } else
        return !1;
    }), f = p(() => h.value ? ur : cr), y = p(() => h.value ? null : t.media), w = p(() => {
      if (!h.value)
        return null;
      const x = t.media;
      return {
        src: x.src,
        focalPoint: x.focalPoint,
        sizes: x.sizes,
        height: x.height,
        width: x.width,
        alt: x.alt,
        caption: x.caption,
        poster: x.poster
      };
    }), M = p(() => h.value ? w.value : y.value), _ = p(() => Y(new Date(t.dateCreated), "MMMM d, Y")), g = p(() => it(t.startDate, t.endDate)), v = p(() => t.startDate && t.sectionHandle === "event" ? ot(t.startDate, t.endDate) : ""), L = p(() => t.ratio), O = p(() => t.category ? "gradient" : "gradient-no-category"), R = p(() => t.locations.map((x) => {
      let F = "svg-icon-location";
      return x.title === "Online" && (F = "svg-icon-virtual"), {
        ...x,
        svg: F,
        to: x.to != null ? st(x.to) : ""
      };
    }));
    return (x, F) => (i(), o("div", {
      class: A(c.value)
    }, [
      e.category ? (i(), o("div", Fs, [
        q(T(s), {
          class: "heading-line",
          "aria-hidden": "true"
        }),
        u("div", {
          class: "text",
          innerHTML: e.category
        }, null, 8, Ts)
      ])) : m("", !0),
      (i(), I(X(f.value), {
        class: "media",
        media: M.value,
        "aspect-ratio": L.value
      }, {
        default: ee(() => [
          h.value ? m("", !0) : (i(), o("div", {
            key: 0,
            class: A(O.value)
          }, null, 2)),
          q(T(wr), {
            class: "molecule",
            "aria-hidden": "true"
          })
        ]),
        _: 1
      }, 8, ["media", "aspect-ratio"])),
      u("div", $s, [
        F[0] || (F[0] = u("div", { class: "clipped-box" }, null, -1)),
        u("div", Cs, [
          q(T(br), {
            class: "svg",
            "aria-hidden": "true"
          })
        ])
      ]),
      u("div", Os, [
        u("h1", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Is),
        e.text ? (i(), I(T(n), {
          key: 0,
          class: "snippet",
          "rich-text-content": e.text
        }, null, 8, ["rich-text-content"])) : m("", !0),
        U(u("div", Ps, [
          U(u("div", Es, [
            e.byline.length ? (i(), o("div", Ds, [
              (i(!0), o(B, null, N(e.byline, (C, j) => (i(), o("div", {
                key: `${C}-${j}`,
                class: "byline-item"
              }, D(C), 1))), 128))
            ])) : m("", !0),
            e.subjectAreas.length ? (i(), o("div", Rs, [
              (i(!0), o(B, null, N(e.subjectAreas, (C, j) => (i(), o("div", {
                key: `${C.title}-${j}`
              }, D(C.title), 1))), 128))
            ])) : m("", !0),
            e.dateCreated ? (i(), o("time", {
              key: 2,
              class: "date-created",
              innerHTML: _.value
            }, null, 8, qs)) : m("", !0),
            e.startDate ? (i(), o("time", {
              key: 3,
              class: "schedule-item",
              innerHTML: g.value
            }, null, 8, Hs)) : m("", !0),
            v.value ? (i(), o("time", {
              key: 4,
              class: "schedule-item",
              innerHTML: v.value
            }, null, 8, As)) : m("", !0)
          ], 512), [
            [
              dt,
              e.byline.length || e.subjectAreas.length || e.dateCreated || e.startDate
            ]
          ]),
          e.email || e.phone || e.staffDirectoryLink || e.addressLink ? (i(), o("div", Bs, [
            e.email ? (i(), I(T(a), {
              key: 0,
              text: e.email,
              "icon-name": "svg-icon-email",
              to: `mailto:${e.email}`
            }, null, 8, ["text", "to"])) : m("", !0),
            e.phone ? (i(), I(T(a), {
              key: 1,
              text: e.phone,
              "icon-name": "svg-icon-phone",
              to: `tel:${e.phone}`
            }, null, 8, ["text", "to"])) : m("", !0),
            e.staffDirectoryLink ? (i(), I(T(a), {
              key: 2,
              text: "View staff directory",
              "icon-name": "svg-icon-person",
              to: e.staffDirectoryLink
            }, null, 8, ["to"])) : m("", !0),
            e.addressLink ? (i(), I(T(a), {
              key: 3,
              text: e.address,
              "icon-name": "svg-icon-location",
              to: e.addressLink
            }, null, 8, ["text", "to"])) : m("", !0)
          ])) : m("", !0),
          e.locations.length ? (i(), o("div", Ns, [
            (i(!0), o(B, null, N(R.value, (C) => (i(), I(T(a), {
              key: `location-${C.id}`,
              text: C.title,
              "icon-name": C.svg,
              to: C.to
            }, null, 8, ["text", "icon-name", "to"]))), 128))
          ])) : m("", !0)
        ], 512), [
          [
            dt,
            e.byline.length || e.subjectAreas.length || e.dateCreated || e.startDate || e.email || e.phone || e.staffDirectoryLink || e.addressLink
          ]
        ]),
        e.to ? (i(), I(T(r), {
          key: 1,
          label: e.prompt,
          "is-secondary": !0,
          class: "button",
          to: e.to
        }, null, 8, ["label", "to"])) : m("", !0)
      ]),
      !e.to && e.registerEvent ? (i(), o("div", js, [
        q(nt)
      ])) : m("", !0)
    ], 2));
  }
}), yo = /* @__PURE__ */ W(Ws, [["__scopeId", "data-v-a5497b29"]]), Vs = { class: "banner-text" }, Ys = { class: "banner-text-content-container" }, Us = {
  key: 0,
  class: "category"
}, zs = ["innerHTML"], Gs = { class: "content" }, Zs = { class: "title" }, Qs = ["lang", "innerHTML"], Xs = {
  key: 1,
  class: "meta-block"
}, Js = {
  key: 0,
  class: "byline-item"
}, Ks = {
  key: 1,
  class: "subject-areas"
}, ei = {
  key: 2,
  class: "contact-info"
}, ti = {
  key: 3,
  class: "contact-info"
}, ri = {
  key: 4,
  class: "contact-info"
}, ni = {
  key: 5,
  class: "contact-info"
}, ai = {
  key: 6,
  class: "schedule"
}, si = ["innerHTML"], ii = ["innerHTML"], oi = ["innerHTML"], li = {
  key: 3,
  class: "schedule-item"
}, ci = {
  key: 2,
  class: "location-group"
}, ui = {
  key: 0,
  class: "block-form-container"
}, di = /* @__PURE__ */ te({
  __name: "BannerText",
  props: {
    category: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "",
      required: !0
    },
    alternativeFullName: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: ""
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    },
    dateCreated: {
      type: String,
      default: ""
    },
    locations: {
      type: Array,
      default: () => []
    },
    isOnline: {
      type: Boolean,
      default: !1
    },
    text: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    },
    isDarkBlue: {
      type: Boolean,
      default: !1
    },
    // contact info for Location Detail Page
    email: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      default: ""
    },
    addressLink: {
      type: String,
      default: ""
    },
    staffDirectoryLink: {
      type: String,
      default: ""
    },
    articleType: {
      type: String,
      default: ""
    },
    byline: {
      type: Array,
      default: () => []
    },
    subjectAreas: {
      type: Array,
      default: () => []
    },
    registerEvent: {
      type: Boolean,
      default: !1
    },
    sectionHandle: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = d(() => Promise.resolve().then(() => at)), n = d(() => Promise.resolve().then(() => hr)), a = d(() => Promise.resolve().then(() => lr)), s = d(() => Promise.resolve().then(() => kr)), l = p(() => {
      let _ = ["banner-text-container", "theme-light"];
      return t.isDarkBlue && (_ = ["banner-text-container", "theme-dark"]), _;
    }), c = p(() => ve(t.to)), h = p(() => ["text", `color-${c.value}`]), f = p(() => Y(new Date(t.dateCreated), "MMMM d, Y")), y = p(() => it(t.startDate, t.endDate)), w = p(() => t.startDate && t.sectionHandle === "event" ? ot(t.startDate, t.endDate) : ""), M = p(() => t.locations.map((_) => {
      let g = "svg-icon-location";
      return _.title === "Online" && (g = "svg-icon-virtual"), {
        ..._,
        svg: g,
        to: _.to != null ? st(_.to) : ""
      };
    }));
    return (_, g) => (i(), o("div", Vs, [
      u("div", {
        class: A(l.value)
      }, [
        u("div", Ys, [
          e.category ? (i(), o("div", Us, [
            q(T(s), {
              class: "heading-line",
              "aria-hidden": "true"
            }),
            u("div", {
              class: A(h.value),
              innerHTML: e.category
            }, null, 10, zs)
          ])) : m("", !0),
          u("div", Gs, [
            u("h1", Zs, [
              G(D(e.title) + " ", 1),
              e.alternativeFullName ? (i(), o("span", {
                key: 0,
                lang: e.language,
                class: "translation",
                innerHTML: e.alternativeFullName
              }, null, 8, Qs)) : m("", !0)
            ]),
            e.text ? (i(), I(T(n), {
              key: 0,
              class: "text",
              "rich-text-content": e.text
            }, null, 8, ["rich-text-content"])) : m("", !0),
            e.byline || e.subjectAreas || e.startDate || e.phone || e.email || e.addressLink || e.staffDirectoryLink ? (i(), o("div", Xs, [
              e.byline ? (i(), o("div", Js, [
                (i(!0), o(B, null, N(e.byline, (v, L) => (i(), o("div", {
                  key: `${v}-${L}`
                }, D(v), 1))), 128))
              ])) : m("", !0),
              e.subjectAreas ? (i(), o("div", Ks, [
                (i(!0), o(B, null, N(e.subjectAreas, (v, L) => (i(), o("div", {
                  key: `${v.title}-${L}`
                }, D(v.title), 1))), 128))
              ])) : m("", !0),
              e.email ? (i(), o("div", ei, [
                q(T(a), {
                  text: e.email,
                  "icon-name": "svg-icon-email",
                  to: `mailto:${e.email}`
                }, null, 8, ["text", "to"])
              ])) : m("", !0),
              e.phone ? (i(), o("div", ti, [
                q(T(a), {
                  text: e.phone,
                  "icon-name": "svg-icon-phone",
                  to: `tel:${e.phone}`
                }, null, 8, ["text", "to"])
              ])) : m("", !0),
              e.staffDirectoryLink ? (i(), o("div", ri, [
                q(T(a), {
                  text: "View staff directory",
                  "icon-name": "svg-icon-person",
                  to: e.staffDirectoryLink
                }, null, 8, ["to"])
              ])) : m("", !0),
              e.addressLink ? (i(), o("div", ni, [
                q(T(a), {
                  text: e.address,
                  "icon-name": "svg-icon-location",
                  to: e.addressLink
                }, null, 8, ["text", "to"])
              ])) : m("", !0),
              e.startDate || e.dateCreated ? (i(), o("div", ai, [
                e.dateCreated ? (i(), o("time", {
                  key: 0,
                  class: "date-created",
                  innerHTML: f.value
                }, null, 8, si)) : m("", !0),
                e.startDate ? (i(), o("time", {
                  key: 1,
                  class: "schedule-item",
                  innerHTML: y.value
                }, null, 8, ii)) : m("", !0),
                w.value ? (i(), o("time", {
                  key: 2,
                  class: "schedule-item",
                  innerHTML: w.value
                }, null, 8, oi)) : m("", !0),
                e.isOnline ? (i(), o("div", li, " Online ")) : m("", !0)
              ])) : m("", !0)
            ])) : m("", !0),
            e.locations.length ? (i(), o("div", ci, [
              (i(!0), o(B, null, N(M.value, (v) => (i(), I(T(a), {
                key: `location-${v.id}`,
                text: v.title,
                "icon-name": v.svg,
                to: v.to
              }, null, 8, ["text", "icon-name", "to"]))), 128))
            ])) : m("", !0),
            e.to && !e.isDarkBlue ? (i(), I(T(r), {
              key: 3,
              label: e.buttonText,
              to: e.to,
              "is-secondary": !0
            }, null, 8, ["label", "to"])) : m("", !0),
            e.to && e.isDarkBlue ? (i(), I(T(r), {
              key: 4,
              label: e.buttonText,
              to: e.to,
              "is-tertiary": !0
            }, null, 8, ["label", "to"])) : m("", !0)
          ])
        ])
      ], 2),
      !e.to && e.registerEvent ? (i(), o("div", ui, [
        q(nt)
      ])) : m("", !0)
    ]));
  }
}), po = /* @__PURE__ */ W(di, [["__scopeId", "data-v-04cddc69"]]), hi = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-share-printer"
};
function _r(e, t) {
  return i(), o("svg", hi, t[0] || (t[0] = [
    fe('<circle cx="16" cy="16" r="16" fill="#F2F2F2" class="svg__fill--secondary-grey-01"></circle><path d="M7 21.1984h-.75c0 .4142.33579.75.75.75v-.75Zm0-8.1205v-.75c-.41421 0-.75.3358-.75.75H7Zm18 0h.75c0-.4142-.3358-.75-.75-.75v.75Zm0 8.1205v.75c.4142 0 .75-.3358.75-.75H25Zm-16.29837.75h.75v-1.5h-.75v1.5Zm14.57147-1.5h-.75v1.5h.75v-1.5Zm-15.5231.75v-8.1205h-1.5v8.1205h1.5ZM7 13.8279h18v-1.5H7v1.5Zm17.25-.75v8.1205h1.5v-8.1205h-1.5ZM8.70163 20.4484H7v1.5h1.70163v-1.5Zm16.29837 0h-1.7269v1.5H25v-1.5Z" fill="#0F0F0F" class="svg__fill--black"></path><path d="M11.4482 18.7737v6.5454h9.0013v-6.5454h-9.0013Z" stroke="#0F0F0F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="svg__stroke--black"></path><path d="M13.5213 21.0669h4.8821" stroke="#0F0F0F" class="svg__stroke--black"></path><path d="M13.5213 22.812h2.99" stroke="#0F0F0F" class="svg__stroke--black"></path><path d="M10.6306 16.4412h1.6243" stroke="#0F0F0F" stroke-width="1.25" class="svg__stroke--black"></path><path d="M9.86359 8.68115v4.41055H22.5071V8.68115H9.86359Z" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svg__stroke--black"></path>', 7)
  ]));
}
const Sr = { render: _r }, fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sr,
  render: _r
}, Symbol.toStringTag, { value: "Module" })), mi = { class: "block-amenities" }, gi = { class: "amenity-column" }, vi = { class: "amenities-list" }, yi = { class: "amenity-name" }, pi = /* @__PURE__ */ te({
  __name: "BlockAmenities",
  props: {
    amenities: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, r = d(
      () => import("./icon-clock-CG3EE-5W.js")
    ), n = d(
      () => import("./icon-accessible-C8Gup1rK.js")
    ), a = d(
      () => import("./icon-chair-D8fW8Dnx.js")
    ), s = d(
      () => import("./icon-virtual-CwZieS3s.js")
    ), l = d(
      () => import("./icon-laptop-Bmg8PSn7.js")
    ), c = d(
      () => import("./icon-locker-BBQPsbYg.js")
    ), h = d(
      () => import("./icon-light-wkkuRssP.js")
    ), f = d(
      () => import("./icon-book-Dhs3bbZ0.js")
    ), y = {
      "icon-clock": {
        icon: r,
        label: "24 Hour Study Space"
      },
      "icon-accessible": {
        icon: n,
        label: "ADA Stations"
      },
      "icon-chair": {
        icon: a,
        label: "Cafe"
      },
      "icon-virtual": {
        icon: s,
        label: "Computer/Laptop Access"
      },
      "icon-laptop": {
        icon: l,
        label: "Laptop Lending"
      },
      "icon-locker": {
        icon: c,
        label: "Locker"
      },
      "icon-light": {
        icon: h,
        label: "Makerspace"
      },
      "icon-share-printer": {
        icon: Sr,
        label: "Print, Copy and Scan"
      },
      "icon-book": {
        icon: f,
        label: "Research Help"
      }
    }, w = p(() => t.amenities.map((M) => {
      const _ = y[M];
      return {
        svgIcon: _.icon,
        svgLabel: _.label
      };
    }));
    return (M, _) => (i(), o("div", mi, [
      _[0] || (_[0] = u("h3", { class: "amenities-title" }, " At This Location ", -1)),
      u("div", gi, [
        u("ul", vi, [
          (i(!0), o(B, null, N(w.value, (g, v) => (i(), o("li", {
            key: `${g.svgLabel}-${v}`,
            class: "amenitiy-row"
          }, [
            g.svgIcon ? (i(), I(X(g.svgIcon), { key: 0 })) : m("", !0),
            u("span", yi, D(g.svgLabel), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), ko = /* @__PURE__ */ W(pi, [["__scopeId", "data-v-3ecae64a"]]);
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var be, kt;
function Lr() {
  if (kt) return be;
  kt = 1;
  var e = typeof ue == "object" && ue && ue.Object === Object && ue;
  return be = e, be;
}
var we, bt;
function ki() {
  if (bt) return we;
  bt = 1;
  var e = Lr(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return we = r, we;
}
var _e, wt;
function lt() {
  if (wt) return _e;
  wt = 1;
  var e = ki(), t = e.Symbol;
  return _e = t, _e;
}
var Se, _t;
function bi() {
  if (_t) return Se;
  _t = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, s = Array(a); ++n < a; )
      s[n] = r(t[n], n, t);
    return s;
  }
  return Se = e, Se;
}
var Me, St;
function wi() {
  if (St) return Me;
  St = 1;
  var e = Array.isArray;
  return Me = e, Me;
}
var Le, Mt;
function _i() {
  if (Mt) return Le;
  Mt = 1;
  var e = lt(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function s(l) {
    var c = r.call(l, a), h = l[a];
    try {
      l[a] = void 0;
      var f = !0;
    } catch {
    }
    var y = n.call(l);
    return f && (c ? l[a] = h : delete l[a]), y;
  }
  return Le = s, Le;
}
var xe, Lt;
function Si() {
  if (Lt) return xe;
  Lt = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return xe = r, xe;
}
var Fe, xt;
function xr() {
  if (xt) return Fe;
  xt = 1;
  var e = lt(), t = _i(), r = Si(), n = "[object Null]", a = "[object Undefined]", s = e ? e.toStringTag : void 0;
  function l(c) {
    return c == null ? c === void 0 ? a : n : s && s in Object(c) ? t(c) : r(c);
  }
  return Fe = l, Fe;
}
var Te, Ft;
function Fr() {
  if (Ft) return Te;
  Ft = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Te = e, Te;
}
var $e, Tt;
function Tr() {
  if (Tt) return $e;
  Tt = 1;
  var e = xr(), t = Fr(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return $e = n, $e;
}
var Ce, $t;
function $r() {
  if ($t) return Ce;
  $t = 1;
  var e = lt(), t = bi(), r = wi(), n = Tr(), a = e ? e.prototype : void 0, s = a ? a.toString : void 0;
  function l(c) {
    if (typeof c == "string")
      return c;
    if (r(c))
      return t(c, l) + "";
    if (n(c))
      return s ? s.call(c) : "";
    var h = c + "";
    return h == "0" && 1 / c == -1 / 0 ? "-0" : h;
  }
  return Ce = l, Ce;
}
var Oe, Ct;
function Mi() {
  if (Ct) return Oe;
  Ct = 1;
  function e(t, r, n) {
    var a = -1, s = t.length;
    r < 0 && (r = -r > s ? 0 : s + r), n = n > s ? s : n, n < 0 && (n += s), s = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var l = Array(s); ++a < s; )
      l[a] = t[a + r];
    return l;
  }
  return Oe = e, Oe;
}
var Ie, Ot;
function Li() {
  if (Ot) return Ie;
  Ot = 1;
  var e = Mi();
  function t(r, n, a) {
    var s = r.length;
    return a = a === void 0 ? s : a, !n && a >= s ? r : e(r, n, a);
  }
  return Ie = t, Ie;
}
var Pe, It;
function ct() {
  if (It) return Pe;
  It = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, s = "\\ufe0e\\ufe0f", l = "\\u200d", c = RegExp("[" + l + e + a + s + "]");
  function h(f) {
    return c.test(f);
  }
  return Pe = h, Pe;
}
var Ee, Pt;
function Cr() {
  if (Pt) return Ee;
  Pt = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ee = e, Ee;
}
var De, Et;
function xi() {
  if (Et) return De;
  Et = 1;
  var e = xr(), t = Fr(), r = "[object RegExp]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return De = n, De;
}
var Re, Dt;
function Fi() {
  if (Dt) return Re;
  Dt = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Re = e, Re;
}
var oe = { exports: {} };
oe.exports;
var Rt;
function Ti() {
  return Rt || (Rt = 1, function(e, t) {
    var r = Lr(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, l = s && r.process, c = function() {
      try {
        var h = a && a.require && a.require("util").types;
        return h || l && l.binding && l.binding("util");
      } catch {
      }
    }();
    e.exports = c;
  }(oe, oe.exports)), oe.exports;
}
var qe, qt;
function $i() {
  if (qt) return qe;
  qt = 1;
  var e = xi(), t = Fi(), r = Ti(), n = r && r.isRegExp, a = n ? t(n) : e;
  return qe = a, qe;
}
var He, Ht;
function Ci() {
  if (Ht) return He;
  Ht = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return He = e, He;
}
var Ae, At;
function Oi() {
  if (At) return Ae;
  At = 1;
  var e = Ci(), t = e("length");
  return Ae = t, Ae;
}
var Be, Bt;
function Ii() {
  if (Bt) return Be;
  Bt = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, s = "\\ufe0e\\ufe0f", l = "[" + e + "]", c = "[" + a + "]", h = "\\ud83c[\\udffb-\\udfff]", f = "(?:" + c + "|" + h + ")", y = "[^" + e + "]", w = "(?:\\ud83c[\\udde6-\\uddff]){2}", M = "[\\ud800-\\udbff][\\udc00-\\udfff]", _ = "\\u200d", g = f + "?", v = "[" + s + "]?", L = "(?:" + _ + "(?:" + [y, w, M].join("|") + ")" + v + g + ")*", O = v + g + L, R = "(?:" + [y + c + "?", c, w, M, l].join("|") + ")", x = RegExp(h + "(?=" + h + ")|" + R + O, "g");
  function F(C) {
    for (var j = x.lastIndex = 0; x.test(C); )
      ++j;
    return j;
  }
  return Be = F, Be;
}
var Ne, Nt;
function Pi() {
  if (Nt) return Ne;
  Nt = 1;
  var e = Oi(), t = ct(), r = Ii();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Ne = n, Ne;
}
var je, jt;
function Ei() {
  if (jt) return je;
  jt = 1;
  function e(t) {
    return t.split("");
  }
  return je = e, je;
}
var We, Wt;
function Di() {
  if (Wt) return We;
  Wt = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, s = "\\ufe0e\\ufe0f", l = "[" + e + "]", c = "[" + a + "]", h = "\\ud83c[\\udffb-\\udfff]", f = "(?:" + c + "|" + h + ")", y = "[^" + e + "]", w = "(?:\\ud83c[\\udde6-\\uddff]){2}", M = "[\\ud800-\\udbff][\\udc00-\\udfff]", _ = "\\u200d", g = f + "?", v = "[" + s + "]?", L = "(?:" + _ + "(?:" + [y, w, M].join("|") + ")" + v + g + ")*", O = v + g + L, R = "(?:" + [y + c + "?", c, w, M, l].join("|") + ")", x = RegExp(h + "(?=" + h + ")|" + R + O, "g");
  function F(C) {
    return C.match(x) || [];
  }
  return We = F, We;
}
var Ve, Vt;
function Ri() {
  if (Vt) return Ve;
  Vt = 1;
  var e = Ei(), t = ct(), r = Di();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Ve = n, Ve;
}
var Ye, Yt;
function qi() {
  if (Yt) return Ye;
  Yt = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Ye = t, Ye;
}
var Ue, Ut;
function Hi() {
  if (Ut) return Ue;
  Ut = 1;
  var e = qi(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Ue = r, Ue;
}
var ze, zt;
function Ai() {
  if (zt) return ze;
  zt = 1;
  var e = Hi(), t = Cr(), r = Tr(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, l = /^0o[0-7]+$/i, c = parseInt;
  function h(f) {
    if (typeof f == "number")
      return f;
    if (r(f))
      return n;
    if (t(f)) {
      var y = typeof f.valueOf == "function" ? f.valueOf() : f;
      f = t(y) ? y + "" : y;
    }
    if (typeof f != "string")
      return f === 0 ? f : +f;
    f = e(f);
    var w = s.test(f);
    return w || l.test(f) ? c(f.slice(2), w ? 2 : 8) : a.test(f) ? n : +f;
  }
  return ze = h, ze;
}
var Ge, Gt;
function Bi() {
  if (Gt) return Ge;
  Gt = 1;
  var e = Ai(), t = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === t || a === -1 / 0) {
      var s = a < 0 ? -1 : 1;
      return s * r;
    }
    return a === a ? a : 0;
  }
  return Ge = n, Ge;
}
var Ze, Zt;
function Ni() {
  if (Zt) return Ze;
  Zt = 1;
  var e = Bi();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return Ze = t, Ze;
}
var Qe, Qt;
function Or() {
  if (Qt) return Qe;
  Qt = 1;
  var e = $r();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Qe = t, Qe;
}
var Xe, Xt;
function ji() {
  if (Xt) return Xe;
  Xt = 1;
  var e = $r(), t = Li(), r = ct(), n = Cr(), a = $i(), s = Pi(), l = Ri(), c = Ni(), h = Or(), f = 30, y = "...", w = /\w*$/;
  function M(_, g) {
    var v = f, L = y;
    if (n(g)) {
      var O = "separator" in g ? g.separator : O;
      v = "length" in g ? c(g.length) : v, L = "omission" in g ? e(g.omission) : L;
    }
    _ = h(_);
    var R = _.length;
    if (r(_)) {
      var x = l(_);
      R = x.length;
    }
    if (v >= R)
      return _;
    var F = v - s(L);
    if (F < 1)
      return L;
    var C = x ? t(x, 0, F).join("") : _.slice(0, F);
    if (O === void 0)
      return C + L;
    if (x && (F += C.length - F), a(O)) {
      if (_.slice(F).search(O)) {
        var j, S = C;
        for (O.global || (O = RegExp(O.source, h(w.exec(O)) + "g")), O.lastIndex = 0; j = O.exec(S); )
          var V = j.index;
        C = C.slice(0, V === void 0 ? F : V);
      }
    } else if (_.indexOf(e(O), F) != F) {
      var E = C.lastIndexOf(O);
      E > -1 && (C = C.slice(0, E));
    }
    return C + L;
  }
  return Xe = M, Xe;
}
var Wi = ji();
const Vi = /* @__PURE__ */ Mr(Wi);
var Je, Jt;
function Yi() {
  if (Jt) return Je;
  Jt = 1;
  function e(t) {
    return function(r) {
      return t == null ? void 0 : t[r];
    };
  }
  return Je = e, Je;
}
var Ke, Kt;
function Ui() {
  if (Kt) return Ke;
  Kt = 1;
  var e = Yi(), t = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  }, r = e(t);
  return Ke = r, Ke;
}
var et, er;
function zi() {
  if (er) return et;
  er = 1;
  var e = Or(), t = Ui(), r = /&(?:amp|lt|gt|quot|#39);/g, n = RegExp(r.source);
  function a(s) {
    return s = e(s), s && n.test(s) ? s.replace(r, t) : s;
  }
  return et = a, et;
}
var Gi = zi();
const Zi = /* @__PURE__ */ Mr(Gi);
function tr(e = "", t = Number.POSITIVE_INFINITY) {
  if (e == null)
    return e;
  const r = Zi(
    e.replace(/<[^>]+>/g, "").replace(/"/g, "")
  );
  return Vi(r, {
    length: t,
    omission: "…",
    separator: /\s/
  });
}
const Qi = {
  width: "200",
  height: "160",
  viewBox: "0 0 200 160",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__illustration-digitized-resources"
};
function Xi(e, t) {
  return i(), o("svg", Qi, t[0] || (t[0] = [
    fe('<path d="M9.08984 113.223H190.91V131.489C190.91 135.493 187.664 138.739 183.66 138.739H115.956H83.8441H16.3398C12.3358 138.739 9.08984 135.493 9.08984 131.489V113.223Z" stroke="#0B6AB7" stroke-width="1.5" class="svg__stroke--primary-blue-03"></path><path d="M83.791 139.489V155M116.002 139.489V155M116.002 155H135.066M116.002 155H83.791M83.791 155H65.3848" stroke="#0B6AB7" stroke-width="1.5" class="svg__stroke--primary-blue-03"></path><path d="M14.3398 5.75H185.66C188.56 5.75 190.91 8.10051 190.91 11V113.253H9.08984V11C9.08984 8.10051 11.4403 5.75 14.3398 5.75Z" stroke="#0B6AB7" stroke-width="1.5" class="svg__stroke--primary-blue-03"></path><path d="M185.176 19.3555L157.085 30.991L145.45 59.0816L157.085 87.1723L185.176 98.8078" stroke="#FFD600" stroke-width="1.5" class="svg__stroke--secondary-yellow-03"></path><path d="M17.7856 10.9407H182.213C184.008 10.9407 185.463 12.3957 185.463 14.1907V103.971C185.463 105.766 184.008 107.221 182.213 107.221H17.7856C15.9907 107.221 14.5356 105.766 14.5356 103.971V14.1907C14.5356 12.3957 15.9907 10.9407 17.7856 10.9407Z" stroke="#0AA5FF" stroke-width="1.5" class="svg__stroke--default-cyan-03"></path><path d="M99.9953 131.954L104.221 130.204L105.971 125.979L104.221 121.754L99.9953 120.003L95.7701 121.754L94.02 125.979L95.7701 130.204L99.9953 131.954Z" fill="#0AA5FF" class="svg__fill--default-cyan-03"></path><path d="M44.4458 35.502H84.4458" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 41.502H84.4458" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 47.502L84.4458 47.5019" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 53.502L84.4458 53.5019" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 59.502L75.4405 59.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 71.502L84.4458 71.5019" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 77.502L84.4458 77.5019" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 83.502L68.388 83.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 41.502H116.446" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 35.502H116.446" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 47.502H105.364" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 59.502L116.446 59.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 65.502L116.446 65.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 71.502L116.446 71.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 77.502L116.446 77.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 83.502L112.79 83.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path>', 22)
  ]));
}
const Ji = { render: Xi }, Ki = {
  width: "200",
  height: "160",
  viewBox: "0 0 200 160",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__illustration-teaching"
};
function eo(e, t) {
  return i(), o("svg", Ki, t[0] || (t[0] = [
    fe('<path d="M98.6874 4.74365L99.414 4.55781C99.3291 4.22585 99.03 3.99364 98.6874 3.99365C98.3447 3.99366 98.0457 4.22589 97.9608 4.55785L98.6874 4.74365ZM97.9608 4.92949L132.152 138.616L133.606 138.244L99.414 4.55781L97.9608 4.92949ZM132.158 138.635L136.786 154.948L138.229 154.539L133.601 138.225L132.158 138.635ZM97.9608 4.55785L63.7763 138.244L65.2295 138.616L99.414 4.92945L97.9608 4.55785ZM63.7814 138.225L59.1535 154.539L60.5965 154.948L65.2244 138.635L63.7814 138.225ZM132.879 137.68H64.5029V139.18H132.879V137.68Z" fill="#0B6AB7" class="svg__fill--primary-blue-03"></path><rect x="91.8477" y="16.0012" width="13.6887" height="8.52157" fill="white" class="svg__fill--white"></rect><rect x="15.6284" y="24.1885" width="168.77" height="101.715" rx="1.25" fill="white" stroke="#0B6AB7" stroke-width="1.5" class="svg__fill--white svg__stroke--primary-blue-03"></rect><rect x="15.6284" y="16.5989" width="168.77" height="7.17405" rx="1.25" stroke="#0B6AB7" stroke-width="1.5" class="svg__stroke--primary-blue-03"></rect><rect x="18.8344" y="19.5251" width="162.503" height="1.35532" rx="0.67766" stroke="#0AA5FF" stroke-width="1.35532" class="svg__stroke--default-cyan-03"></rect><path d="M118.251 50.2215H120.732C121.642 50.2215 122.379 50.9586 122.379 51.8678V99.3356C122.379 100.245 121.642 100.982 120.732 100.982H116.912H82.5513C82.5513 100.982 77.6423 100.982 77.6426 95.5711M118.251 50.2215V89.9373C118.251 89.9373 90.4163 89.9373 82.5513 89.9373C82.5513 89.9373 77.6428 90.1604 77.6426 95.5711M118.251 50.2215V46.0938H85.8739C81.3279 46.0938 77.6426 49.779 77.6426 54.3251V95.5711" stroke="#0B6AB7" stroke-width="1.25" class="svg__stroke--primary-blue-03"></path><path d="M98.7616 58.0586L106.301 61.1814L109.424 68.7206L106.301 76.2598L98.7616 79.3826L91.2224 76.2598L88.0996 68.7206L91.2224 61.1814L98.7616 58.0586Z" stroke="#FFD600" stroke-width="1.25" class="svg__stroke--secondary-yellow-03"></path><path d="M84.665 96.2986L106.396 96.2986" stroke="#00E0E0" stroke-width="1.25" class="svg__stroke--help-green-03"></path><path d="M108.205 96.2986L112.156 96.2986" stroke="#00E0E0" stroke-width="1.25" class="svg__stroke--help-green-03"></path><path d="M113.8 96.2986L115.117 96.2986" stroke="#00E0E0" stroke-width="1.25" class="svg__stroke--help-green-03"></path><path d="M94.3551 101.378L98.6348 104.292C98.6591 104.309 98.6921 104.291 98.6921 104.262V95.6572H90.0181V104.262C90.0181 104.291 90.051 104.309 90.0754 104.292L94.3551 101.378Z" fill="#0AA5FF" class="svg__fill--default-cyan-03"></path>', 11)
  ]));
}
const to = { render: eo }, ro = {
  name: "BlockCardWithIllustration",
  components: {
    SmartLink: me,
    IllustrationBookBinding: d(() => import("./illustration-book-binding-CgZ-Lhg2.js")),
    IllustrationBorrowingBooks: d(() => import("./illustration-borrowing-books-B8qR2SUi.js")),
    IllustrationDatabases: d(() => import("./illustration-databases-D85yQ2d_.js")),
    IllustrationDigitizedResources: Ji,
    /* : defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-digitized-resources.svg'
      )), */
    IllustrationFindSpace: d(() => import("./illustration-find-space-Cp5L5B6y.js")),
    IllustrationRemoteAccess: d(() => import("./illustration-remote-access-B1gfhv8X.js")),
    IllustrationResearch: d(() => import("./illustration-research-BET8HhYT.js")),
    IllustrationTeaching: to
    /* : defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-teaching.svg'
      )), */
  },
  props: {
    iconName: {
      type: String,
      default: "illustration-remote-access"
    },
    category: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    },
    isHorizontal: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    classes() {
      return [
        "block-card-with-illustration",
        `color-${this.sectionName}`,
        { "is-horizontal": this.isHorizontal }
      ];
    },
    sectionName() {
      return ve(this.to);
    },
    parsedSvgName() {
      return `${this.iconName}`;
    },
    isExternalLink() {
      return !!this.to.includes("http");
    },
    parsedTextHorizontal() {
      return this.text ? tr(this.text, 250) : "";
    },
    parsedTextVertical() {
      return this.text ? tr(this.text) : "";
    }
  }
}, no = { class: "meta" }, ao = ["innerHTML"], so = ["innerHTML"], io = {
  key: 2,
  class: "text"
}, oo = {
  key: 3,
  class: "text"
};
function lo(e, t, r, n, a, s) {
  const l = rt("SmartLink");
  return i(), o("li", {
    class: A(s.classes)
  }, [
    (i(), I(X(s.parsedSvgName), {
      class: "svg",
      "aria-hidden": "true"
    })),
    u("div", no, [
      r.category ? (i(), o("div", {
        key: 0,
        class: "category",
        innerHTML: r.category
      }, null, 8, ao)) : m("", !0),
      r.to ? (i(), I(l, {
        key: 1,
        to: r.to
      }, {
        default: ee(() => [
          u("h3", {
            class: "title",
            innerHTML: r.title
          }, null, 8, so)
        ]),
        _: 1
      }, 8, ["to"])) : m("", !0),
      r.isHorizontal ? (i(), o("div", io, D(s.parsedTextHorizontal), 1)) : (i(), o("div", oo, D(s.parsedTextVertical), 1))
    ])
  ], 2);
}
const bo = /* @__PURE__ */ W(ro, [["render", lo], ["__scopeId", "data-v-9fd02525"]]), co = {
  name: "AlphabeticalBrowseBy",
  props: {
    selectedLetterProp: {
      type: String,
      default: "All"
    }
  },
  emits: ["selectedLetter"],
  data() {
    return {
      alphabet: [
        {
          letter: "All"
        },
        {
          letter: "A"
        },
        {
          letter: "B"
        },
        {
          letter: "C"
        },
        {
          letter: "D"
        },
        {
          letter: "E"
        },
        {
          letter: "F"
        },
        {
          letter: "G"
        },
        {
          letter: "H"
        },
        {
          letter: "I"
        },
        {
          letter: "J"
        },
        {
          letter: "K"
        },
        {
          letter: "L"
        },
        {
          letter: "M"
        },
        {
          letter: "N"
        },
        {
          letter: "O"
        },
        {
          letter: "P"
        },
        {
          letter: "Q"
        },
        {
          letter: "R"
        },
        {
          letter: "S"
        },
        {
          letter: "T"
        },
        {
          letter: "U"
        },
        {
          letter: "V"
        },
        {
          letter: "W"
        },
        {
          letter: "X"
        },
        {
          letter: "Y"
        },
        {
          letter: "Z"
        }
      ],
      selectedLetter: ""
    };
  },
  computed: {
    parsedAlphabet: {
      get() {
        return this.alphabet.map((e) => {
          let t = "letter";
          return e.letter === this.selectedLetterProp && this.selectedLetter === "" && (t = `${t} is-selected`), e.letter === this.selectedLetter && (t = `${t} is-selected`), {
            ...e,
            class: t
          };
        });
      },
      set(e) {
        this.alphabet = e;
      }
    }
  },
  methods: {
    checkIfLetterIsSelected() {
      this.parsedAlphabet = this.alphabet.map((e) => {
        let t = "letter";
        return this.selectedLetter === e.letter && (t = `${t} is-selected`), {
          ...e,
          class: t
        };
      });
    },
    handleSelectedLetter(e) {
      this.selectedLetter = e.letter, this.checkIfLetterIsSelected(), this.$emit("selectedLetter", this.selectedLetter);
    }
  }
}, uo = { class: "alphabetical-browse-by" }, ho = { class: "alphabet-list" }, fo = ["onClick"];
function mo(e, t, r, n, a, s) {
  return i(), o("div", uo, [
    t[0] || (t[0] = u("h2", { class: "title" }, " Browse by Last Name ", -1)),
    u("ul", ho, [
      (i(!0), o(B, null, N(s.parsedAlphabet, (l) => (i(), o("li", {
        key: l.letter,
        class: A(l.class),
        onClick: (c) => s.handleSelectedLetter(l)
      }, [
        u("a", null, D(l.letter), 1)
      ], 10, fo))), 128))
    ])
  ]);
}
const wo = /* @__PURE__ */ W(co, [["render", mo], ["__scopeId", "data-v-a5f902ae"]]);
export {
  wo as AlphabeticalBrowseBy,
  vo as BannerFeatured,
  yo as BannerHeader,
  po as BannerText,
  ko as BlockAmenities,
  bo as BlockCardWithIllustration,
  ir as ButtonLink,
  or as IconWithLink,
  cr as ResponsiveImage,
  ur as ResponsiveVideo,
  dr as RichText,
  me as SmartLink
};
