import { createElementBlock as o, openBlock as s, createElementVNode as u, defineAsyncComponent as f, inject as ne, ref as A, computed as y, watch as nr, createBlock as I, unref as x, withModifiers as dt, normalizeClass as q, createVNode as H, createCommentVNode as m, createTextVNode as B, withDirectives as z, vModelRadio as be, vModelText as de, mergeProps as Or, Fragment as N, renderList as j, toDisplayString as P, vModelCheckbox as Dr, vModelSelect as Pr, resolveComponent as at, withCtx as Q, renderSlot as Z, resolveDynamicComponent as J, defineComponent as ee, normalizeStyle as fe, reactive as Er, onMounted as Hr, createStaticVNode as ge, vShow as ht } from "vue";
const Rr = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-close"
};
function ar(e, t) {
  return s(), o("svg", Rr, t[0] || (t[0] = [
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
const nt = { render: ar }, qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt,
  render: ar
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
}, Yr = { for: "in-person" }, Ur = { for: "online" }, zr = { class: "input-wrapper" }, Zr = { class: "input-container" }, Gr = {
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
    const t = f(() => Promise.resolve().then(() => ot)), r = ne("eventId"), n = ne("blockFormData"), a = ne("registrationType"), i = ne("libcalWaitlist"), l = ne("libcalEndpoint");
    console.log("BlockForm eventId", r.value), console.log("BlockForm blockFormData", n.value), console.log("BlockForm registrationType", a.value), console.log("BlockForm libcalWaitlist", i.value), console.log("BlockForm libcalEndpoint", l);
    const c = A([]), d = A(""), h = A(""), v = A(""), b = A({}), M = A({}), _ = A(null), g = A(!1), p = A(!1), L = A({}), O = A(!1), R = A(""), F = y(() => n.value.questions ? n.value.questions.map((E) => (E.type === "string" || E.type === "radio" || E.type === "dropdown" ? M.value[E.id] = "" : M.value[E.id] = [], b.value[E.id] = E.required, {
      ...E,
      classes: `input-${E.type}`
    })) : []);
    function T() {
      console.log("registrationTypeInput", R.value, a.value && a === "both");
      const E = {
        form: {
          first_name: d.value,
          last_name: h.value,
          email: v.value,
          questions: []
        },
        registration_type: a && a.value !== "both" && a.value !== "" ? a.value : a.value && a.value === "both" ? R.value : "",
        is_waitlist: i.value && i.value !== "" ? i.value : "0"
      };
      E.form.questions = n.value.questions.map((k) => ({
        id: k.id,
        answer: M.value[k.id]
      })), console.log("data submitting", JSON.stringify(E));
      let w = "";
      console.log("eventId", r), l ? w = `${l}api/1.1/events/${r.value}/register` : w = `${process.env.VUE_APP_CALENDAR_LIBRARY_URL}${r}/register`, fetch(w, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(E)
      }).then(() => {
        p.value = !0, L.value = {
          code: "success",
          text: "One seat is sent to LibCal to be registered or will be on wait list"
        };
      }).catch((k) => {
        console.error(k), p.value = !0, L.value = {
          code: "error",
          text: k
        };
      });
    }
    function $() {
      let E = !1, w = !1, k = !1;
      d.value && h.value && (E = !0), n.value.emailMethod.status === "required" && v.value && (w = !0), a && a.value === "both" && R.value === "" ? k = !1 : (a && a.value, k = !0), c.value = [], E || c.value.push("Full Name 1 required."), w || c.value.push("Email 2 required."), k || c.value.push("Registration Type 3 required.");
      for (const D of n.value.questions)
        b.value[D.id] && !M.value[D.id] ? D.type === "string" ? c.value.push(
          `${n.value.questions.label} 4a required.`
        ) : c.value.push(`${D.label} 4b required.`) : b.value[D.id] && D.type === "checkbox" && M.value[D.id].length === 0 && c.value.push(`${D.label} 4c required.`);
      c.value.length === 0 ? T() : window.scrollTo(0, 0);
    }
    function V() {
      O.value = !0;
    }
    function S() {
      O.value = !1;
    }
    function Y() {
      clearTimeout(_.value), g.value = !1, O.value = !1;
    }
    return nr(L, () => {
      g.value = !0, _.value = setTimeout(Y, 113e3);
    }), (E, w) => O.value ? (s(), o("div", {
      key: 1,
      class: q(["block-form", {
        "form-error": c.value.length,
        "form-success": g.value
      }])
    }, [
      g.value ? (s(), o("div", Ar, [
        w[8] || (w[8] = u("h3", null, "Registration complete", -1)),
        w[9] || (w[9] = u("p", null, "Please check your email to view your booking.", -1)),
        u("button", {
          type: "button",
          class: "notification--remove",
          onClick: w[1] || (w[1] = (k) => Y())
        }, [
          H(x(nt), { class: "svg-glyph-close" })
        ])
      ])) : (s(), o("form", Br, [
        u("div", Nr, [
          w[10] || (w[10] = u("h3", { class: "formTitle" }, " Registration ", -1)),
          u("button", {
            type: "button",
            onClick: w[2] || (w[2] = (k) => S())
          }, [
            H(x(nt), { class: "svg-glyph-close" })
          ])
        ]),
        c.value.length ? (s(), o("div", jr, w[11] || (w[11] = [
          u("p", null, " Please complete the required fields to complete registration ", -1)
        ]))) : m("", !0),
        c.value.length ? (s(), o("br", Wr)) : m("", !0),
        w[18] || (w[18] = u("div", { class: "registrationInfo" }, [
          u("p", null, "Registration is required for this event.")
        ], -1)),
        x(a) === "both" ? (s(), o("div", Vr, [
          w[14] || (w[14] = u("legend", null, [
            B(" Registration Type "),
            u("span", { class: "required" }, "(required)")
          ], -1)),
          u("label", Yr, [
            z(u("input", {
              id: "in-person",
              "onUpdate:modelValue": w[3] || (w[3] = (k) => R.value = k),
              type: "radio",
              value: "in-person",
              required: ""
            }, null, 512), [
              [be, R.value]
            ]),
            w[12] || (w[12] = B("in-person"))
          ]),
          u("label", Ur, [
            z(u("input", {
              id: "online",
              "onUpdate:modelValue": w[4] || (w[4] = (k) => R.value = k),
              type: "radio",
              value: "online"
            }, null, 512), [
              [be, R.value]
            ]),
            w[13] || (w[13] = B(" online"))
          ])
        ])) : m("", !0),
        u("div", zr, [
          w[15] || (w[15] = u("label", null, [
            B("Full Name "),
            u("span", { class: "required" }, "(required)")
          ], -1)),
          u("div", Zr, [
            z(u("input", {
              id: "firstName",
              "onUpdate:modelValue": w[5] || (w[5] = (k) => d.value = k),
              type: "text",
              name: "firstName",
              required: "",
              placeholder: "First Name"
            }, null, 512), [
              [de, d.value]
            ]),
            z(u("input", {
              id: "lastName",
              "onUpdate:modelValue": w[6] || (w[6] = (k) => h.value = k),
              type: "text",
              name: "lastName",
              required: "",
              placeholder: "Last Name"
            }, null, 512), [
              [de, h.value]
            ])
          ])
        ]),
        x(n).emailMethod ? (s(), o("div", Gr, [
          u("label", Qr, [
            x(n).emailMethod.status === "required" ? (s(), o("span", Xr, w[16] || (w[16] = [
              B(" Email "),
              u("span", { class: "required" }, "(required)", -1)
            ]))) : (s(), o("span", Jr, "Email"))
          ]),
          z(u("input", Or({
            id: "email",
            "onUpdate:modelValue": w[7] || (w[7] = (k) => v.value = k),
            type: "email",
            name: "email",
            required: x(n).emailMethod.status
          }, {}), null, 16, Kr), [
            [de, v.value]
          ])
        ])) : m("", !0),
        (s(!0), o(N, null, j(F.value, (k) => (s(), o("div", {
          key: k.id,
          class: "input-wrapper parsedQuestionsLabelWrapper"
        }, [
          k.type !== "string" ? (s(), o("label", {
            key: 0,
            for: k.id,
            class: q(k.required ? "questionRequired" : "")
          }, [
            B(P(k.label) + " ", 1),
            k.required ? (s(), o("span", tn, " (required) ")) : m("", !0)
          ], 10, en)) : m("", !0),
          k.type === "string" ? (s(), o("div", rn, [
            u("label", {
              for: k.id,
              class: q(k.required ? "questionRequired" : "")
            }, [
              B(P(k.label) + " ", 1),
              k.required ? (s(), o("span", an, "(required)")) : m("", !0)
            ], 10, nn),
            z(u("textarea", {
              "onUpdate:modelValue": (D) => M.value[k.id] = D,
              placeholder: "Add multiple lines"
            }, null, 8, sn), [
              [de, M.value[k.id]]
            ])
          ])) : m("", !0),
          k.type === "radio" ? (s(), o("div", on, [
            (s(!0), o(N, null, j(k.options, (D, se) => (s(), o("div", {
              key: se,
              class: "radioWrapper"
            }, [
              u("label", { for: D }, [
                z(u("input", {
                  id: D,
                  "onUpdate:modelValue": (ke) => M.value[k.id] = ke,
                  type: "radio",
                  value: D,
                  name: k.id
                }, null, 8, cn), [
                  [be, M.value[k.id]]
                ]),
                B(" " + P(D), 1)
              ], 8, ln)
            ]))), 128))
          ])) : m("", !0),
          k.type === "checkbox" ? (s(), o("div", un, [
            (s(!0), o(N, null, j(k.options, (D, se) => (s(), o("div", {
              key: se,
              class: "checkboxWrapper"
            }, [
              z(u("input", {
                id: D,
                "onUpdate:modelValue": (ke) => M.value[k.id] = ke,
                type: "checkbox",
                "true-value": D,
                value: D
              }, null, 8, dn), [
                [Dr, M.value[k.id]]
              ]),
              u("label", { for: D }, P(D), 9, hn)
            ]))), 128))
          ])) : m("", !0),
          k.type === "dropdown" ? z((s(), o("select", {
            key: 4,
            id: k.id,
            "onUpdate:modelValue": (D) => M.value[k.id] = D,
            name: k.id,
            class: q(["input-dropdown", k.classes])
          }, [
            w[17] || (w[17] = u("option", {
              disabled: "",
              value: ""
            }, " Please select one ", -1)),
            (s(!0), o(N, null, j(k.options, (D, se) => (s(), o("option", {
              key: se,
              value: D
            }, P(D), 9, mn))), 128))
          ], 10, fn)), [
            [Pr, M.value[k.id]]
          ]) : m("", !0)
        ]))), 128)),
        H(x(t), {
          type: "submit",
          label: "Register",
          "icon-name": "none",
          "is-secondary": !0,
          onClick: dt($, ["prevent"])
        })
      ]))
    ], 2)) : (s(), I(x(t), {
      key: 0,
      label: "Register",
      "icon-name": "none",
      "is-secondary": !0,
      class: "register-button",
      onClick: w[0] || (w[0] = dt((k) => V(), ["prevent"]))
    }));
  }
}, st = /* @__PURE__ */ W(gn, [["__scopeId", "data-v-201d7bab"]]);
function it() {
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
function Mn(e, t, r, n, a, i) {
  const l = at("router-link");
  return i.isRelative && !r.isDownload && !i.parsedTarget ? (s(), I(l, {
    key: 0,
    class: "smart-link is-router-link",
    to: i.parsedTo
  }, {
    default: Q(() => [
      Z(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["to"])) : r.isDownload ? (s(), o("a", {
    key: 1,
    href: r.to,
    class: "smart-link is-link",
    download: ""
  }, [
    Z(e.$slots, "default", {}, void 0, !0)
  ], 8, wn)) : r.to ? (s(), o("a", {
    key: 2,
    href: r.to,
    target: i.parsedTarget,
    class: "smart-link is-link"
  }, [
    Z(e.$slots, "default", {}, void 0, !0)
  ], 8, _n)) : (s(), o("button", Sn, [
    Z(e.$slots, "default", {}, void 0, !0)
  ]));
}
const ae = /* @__PURE__ */ W(bn, [["render", Mn], ["__scopeId", "data-v-57dec64c"]]), Ln = { class: "label" }, xn = { class: "hover" }, Fn = { class: "label" }, Tn = {
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
    const t = e, r = f(
      () => import("./icon-external-link-WeOL_8ZY.js")
    ), n = f(
      () => import("./icon-arrow-right-wLk03dY8.js")
    ), a = f(
      () => import("./icon-download-Dp9VXiET.js")
    ), i = f(
      () => Promise.resolve().then(() => qr)
    ), l = it(), c = y(() => [
      "button-link",
      (l == null ? void 0 : l.value) || "",
      t.isSecondary ? "is-secondary" : t.isTertiary ? "is-tertiary" : t.isQuaternary ? "is-quaternary" : ""
    ]), d = y(() => {
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
          return i;
        // case props.iconName:
        //     return props.iconName
        default:
          return r;
      }
    });
    return (h, v) => (s(), I(ae, {
      to: e.to,
      class: q(c.value),
      "is-download": e.isDownload,
      "link-target": e.linkTarget
    }, {
      default: Q(() => [
        u("span", Ln, P(e.label), 1),
        Z(h.$slots, "default", {}, void 0, !0),
        d.value !== "" ? (s(), I(J(d.value), {
          key: 0,
          class: "arrow",
          "aria-hidden": "true"
        })) : m("", !0),
        u("div", xn, [
          u("span", Fn, P(e.label), 1),
          d.value !== "" ? (s(), I(J(d.value), {
            key: 0,
            class: "arrow",
            "aria-hidden": "true"
          })) : m("", !0)
        ])
      ]),
      _: 3
    }, 8, ["to", "class", "is-download", "link-target"]));
  }
}, ir = /* @__PURE__ */ W(Tn, [["__scopeId", "data-v-2c45c183"]]), ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), Cn = {
  name: "IconWithLink",
  components: {
    SmartLink: ae,
    SvgIconConsultation: f(
      () => import("./icon-chat-DCvwPwHu.js")
    ),
    SvgIconList: f(
      () => import("./icon-list-CvgvlR7v.js")
    ),
    SvgIconLocation: f(
      () => import("./icon-location-DNog__Cl.js")
    ),
    SvgIconPhone: f(
      () => import("./icon-phone-DPv-PoqA.js")
    ),
    SvgIconSearch: f(
      () => import("./icon-search-iss6-A2x.js")
    ),
    SvgIconVirtual: f(
      () => import("./icon-virtual-CwZieS3s.js")
    ),
    SvgIconHeadphones: f(
      () => import("./icon-headphones-Vk0iXmnu.js")
    ),
    SvgIconVideo: f(
      () => import("./icon-video-Tda9BGRR.js")
    ),
    SvgIconImageStack: f(
      () => import("./icon-image-stack-B7_3hmGM.js")
    ),
    SvgIconMoney: f(
      () => import("./icon-money-BxPRObPA.js")
    ),
    SvgIconMessage: f(
      () => import("./icon-message-CyHSPUb-.js")
    ),
    SvgIconPlay: f(
      () => import("./icon-play-BaMxYNFG.js")
    ),
    SvgIconPlayFilled: f(
      () => import("./icon-play-filled-Dvcf_yQh.js")
    ),
    SvgIconEye: f(
      () => import("./icon-eye-L7brvvQ3.js")
    ),
    SvgIconCheck: f(
      () => import("./icon-check-CKGDA7ua.js")
    ),
    SvgIconEmail: f(
      () => import("./icon-email-d9JGcdKa.js")
    ),
    SvgIconCard: f(
      () => import("./icon-card-BiKDOVdQ.js")
    ),
    SvgIconCalendar: f(
      () => import("./icon-calendar-BFfsVZ3B.js")
    ),
    SvgIconLaptop: f(
      () => import("./icon-laptop-Bmg8PSn7.js")
    ),
    SvgIconBook: f(
      () => import("./icon-book-Dhs3bbZ0.js")
    ),
    SvgIconLocker: f(
      () => import("./icon-locker-BBQPsbYg.js")
    ),
    SvgIconPerson: f(
      () => import("./icon-person-BPUoRkt6.js")
    ),
    SvgIconAccessible: f(
      () => import("./icon-accessible-C8Gup1rK.js")
    ),
    SvgIconClock: f(
      () => import("./icon-clock-CG3EE-5W.js")
    ),
    SvgIconChair: f(
      () => import("./icon-chair-D8fW8Dnx.js")
    ),
    SvgIconLight: f(
      () => import("./icon-light-wkkuRssP.js")
    ),
    SvgIconLocationFilled: f(
      () => import("./icon-location-filled-Cyf_QfPI.js")
    ),
    SvgIconAlert: f(
      () => import("./icon-alert-C-nJ0RMX.js")
    ),
    SvgIconShareEmail: f(
      () => import("./icon-share-email-ds0LMlnf.js")
    ),
    SvgIconSharePrinter: f(
      () => Promise.resolve().then(() => fi)
    ),
    SvgIconShareFacebook: f(
      () => import("./icon-share-facebook-jNsnyfWc.js")
    ),
    SvgIconShareInstagram: f(
      () => import("./icon-share-instagram-CHpDcj4d.js")
    ),
    SvgIconShareLinkedin: f(
      () => import("./icon-share-linkedin-D_WCf0Fz.js")
    ),
    SvgIconShareTwitter: f(
      () => import("./icon-share-twitter-CS2kovPG.js")
    ),
    SvgIconShareWhatsapp: f(
      () => import("./icon-share-whatsapp-B2hhPPEt.js")
    ),
    // FTVA Icons
    SvgIconFtvaAppleinc: f(
      () => import("./icon-ftva-appleinc-D6O1BYI_.js")
    ),
    SvgIconFtvaGcal: f(
      () => import("./icon-ftva-gcal-C7UpU-sa.js")
    ),
    SvgIconFtvaOutlook: f(
      () => import("./icon-ftva-outlook-D01ntAYf.js")
    ),
    SvgIconFtvaDownload: f(
      () => import("./icon-ftva-download-CfgJu8GR.js")
    ),
    SvgIconFtvaShare: f(
      () => import("./icon-ftva-share-bwURDOcD.js")
    ),
    SvgIconFtvaSocialConfirm: f(
      () => import("./icon-ftva-social_confirm-iljw2AFe.js")
    ),
    SvgIconFtvaSocialEmail: f(
      () => import("./icon-ftva-social_email-C1L_bljr.js")
    ),
    SvgIconFtvaSocialFacebook: f(
      () => import("./icon-ftva-social_facebook-BgnF7yg7.js")
    ),
    SvgIconFtvaSocialLink: f(
      () => import("./icon-ftva-social_link-BZIDORpF.js")
    ),
    SvgIconFtvaSocialX: f(
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
}, $n = { class: "icon-with-link" }, In = ["textContent"], On = {
  key: 1,
  class: "icon-with-link-container"
}, Dn = ["textContent"];
function Pn(e, t, r, n, a, i) {
  const l = at("SmartLink");
  return s(), o("div", $n, [
    r.to ? (s(), I(l, {
      key: 0,
      to: r.to,
      class: "icon-with-link-container link"
    }, {
      default: Q(() => [
        (s(), I(J(r.iconName), {
          class: "icon",
          "aria-hidden": "true"
        })),
        u("div", {
          class: "text",
          textContent: P(r.text)
        }, null, 8, In)
      ]),
      _: 1
    }, 8, ["to"])) : (s(), o("div", On, [
      (s(), I(J(r.iconName), {
        class: "icon",
        "aria-hidden": "true"
      })),
      u("div", {
        class: "text",
        textContent: P(r.text)
      }, null, 8, Dn)
    ]))
  ]);
}
const or = /* @__PURE__ */ W(Cn, [["render", Pn], ["__scopeId", "data-v-065bd989"]]), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: or
}, Symbol.toStringTag, { value: "Module" })), En = ["src", "height", "width", "alt", "srcset", "sizes", "object-fit"], Hn = ["innerHTML"], Rn = {
  key: 1,
  class: "credit"
}, qn = { class: "credit-text" }, An = /* @__PURE__ */ ee({
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
    const t = e, r = A(!1), n = A(!1);
    function a() {
      r.value = !0;
    }
    function i() {
      n.value = !0;
    }
    const l = y(() => {
      let v = "";
      return t.media.focalPoint && t.media.focalPoint.length > 0 && (v = `object-position:${t.media.focalPoint.map((M) => `${M * 100}%`).join(" ")}`), v;
    }), c = y(() => {
      const v = t.media.height || t.height, b = t.media.width || t.width;
      return t.aspectRatio || v / b * 100;
    }), d = y(() => ({
      paddingBottom: `${c.value}%`
    })), h = y(() => [
      "responsive-image",
      `object-fit-${t.objectFit}`,
      { "has-loaded": r },
      { "has-errored": n }
    ]);
    return (v, b) => t.media && t.media.src ? (s(), o("figure", {
      key: 0,
      class: q(h.value)
    }, [
      u("img", {
        src: t.media.src || t.src,
        height: t.media.width || t.width,
        width: t.media.height || t.height,
        alt: t.media.alt || t.alt,
        srcset: t.media.srcset || t.srcset,
        sizes: t.media.sizes || t.sizes,
        "object-fit": t.objectFit,
        style: fe(l.value),
        class: "media",
        onLoad: a,
        onError: i
      }, null, 44, En),
      t.media.caption || t.caption ? (s(), o("figcaption", {
        key: 0,
        class: "caption",
        innerHTML: t.media.caption || t.caption
      }, null, 8, Hn)) : m("", !0),
      u("div", {
        class: "sizer",
        style: fe(d.value)
      }, null, 4),
      Z(v.$slots, "default", {}, void 0, !0),
      v.$slots.credit ? (s(), o("div", Rn, [
        u("div", qn, [
          Z(v.$slots, "credit", {}, void 0, !0)
        ])
      ])) : m("", !0)
    ], 2)) : m("", !0);
  }
}), cr = /* @__PURE__ */ W(An, [["__scopeId", "data-v-c5a3f593"]]), Bn = ["src", "alt", "controls", "autoplay", "muted", "loop", "playsinline"], Nn = /* @__PURE__ */ ee({
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
    const r = e, n = t, a = A(null), i = Er({
      video: !1
    }), l = A({
      video: !1
    }), c = y(() => Object.values(l.value).includes(!0)), d = y(() => Object.values(i).every(Boolean)), h = y(() => r.media.src), v = y(() => {
      const S = r.media.height;
      return S && typeof S == "string" ? Number.parseInt(S) : S;
    }), b = y(() => {
      const S = r.media.width;
      return S && typeof S == "string" ? Number.parseInt(S) : S;
    }), M = y(() => {
      let S = "landscape";
      switch (!0) {
        case v.value > b.value:
          S = "portrait";
          break;
        case v.value === b.value:
          S = "square";
          break;
      }
      return S;
    }), _ = y(() => [
      "responsive-video",
      `mode-${r.mode}`,
      { "has-loaded": d.value },
      { "has-error": c.value },
      { "has-video-error": l.value.video },
      `is-orientation-${M.value}`,
      `object-fit-${r.objectFit}`
    ]), g = y(() => {
      let S = r.aspectRatio || v.value / b.value * 100;
      return S || (S = 0), S;
    }), p = y(() => r.media.focalPoint.length > 0 ? {
      x: r.media.focalPoint[0],
      y: r.media.focalPoint[1]
    } : {
      x: "0.5",
      y: "0.5"
    }), L = y(() => r.media.alt), O = y(() => {
      const S = {};
      return r.mode === "intrinsic-ratio" && (S.paddingBottom = `${g.value}%`), S;
    }), R = y(() => {
      const S = {};
      return p.value.x !== "" && p.value.y !== "" && (S.objectPosition = `${p.value.x}% ${p.value.y}%`), S;
    });
    nr(h, (S) => {
      S && (i.video = !1, l.value.video = !1);
    }), Hr(() => {
      h.value && (i.video = a.value.readyState >= 3);
    });
    function F(S) {
      i[S] = !0, n("loaded", S), n(`loaded-${S}`);
    }
    function T(S) {
      l.value[S] = !0, n("error", S), n(`error-${S}`);
    }
    function $(S) {
      n("ended", S);
    }
    function V() {
      n("playing");
    }
    return (S, Y) => (s(), o("figure", {
      class: q(_.value)
    }, [
      h.value ? (s(), o("video", {
        key: 0,
        ref_key: "videoRef",
        ref: a,
        class: "media media-video",
        src: h.value,
        alt: L.value,
        style: fe(R.value),
        controls: e.controls,
        autoplay: e.autoplay,
        muted: e.muted,
        loop: e.loop,
        playsinline: e.playsinline,
        onLoadeddata: Y[0] || (Y[0] = (E) => F("video")),
        onError: Y[1] || (Y[1] = (E) => T("video")),
        onEnded: $,
        onPlaying: V
      }, null, 44, Bn)) : m("", !0),
      u("div", {
        class: "sizer",
        style: fe(O.value)
      }, null, 4),
      Y[2] || (Y[2] = u("div", { class: "background-color" }, null, -1)),
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
const Vn = ["innerHTML"], Yn = /* @__PURE__ */ ee({
  __name: "RichText",
  props: {
    richTextContent: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = it(), n = y(() => ["rich-text", (r == null ? void 0 : r.value) || ""]), a = y(() => {
      const i = Wn(t.richTextContent);
      return jn(i);
    });
    return (i, l) => (s(), o("div", {
      class: q(n.value)
    }, [
      u("div", {
        class: "parsed-content",
        innerHTML: a.value
      }, null, 8, Vn),
      Z(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), dr = /* @__PURE__ */ W(Yn, [["__scopeId", "data-v-7e21c6ae"]]), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" }));
function lt(e = "") {
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
function we(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const Zn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Gn = {
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
  date: we({
    formats: Zn,
    defaultWidth: "full"
  }),
  time: we({
    formats: Gn,
    defaultWidth: "full"
  }),
  dateTime: we({
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
function ie(e) {
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
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[i];
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
  era: ie({
    values: ea,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: ta,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ie({
    values: ra,
    defaultWidth: "wide"
  }),
  day: ie({
    values: na,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: aa,
    defaultWidth: "wide",
    formattingValues: sa,
    defaultFormattingWidth: "wide"
  })
};
function oe(e) {
  return (t, r = {}) => {
    const n = r.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    const l = i[0], c = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(c) ? ca(c, (b) => b.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      la(c, (b) => b.test(l))
    );
    let h;
    h = e.valueCallback ? e.valueCallback(d) : d, h = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(h)
    ) : h;
    const v = t.slice(l.length);
    return { value: h, rest: v };
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
    const a = n[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let l = e.valueCallback ? e.valueCallback(i[0]) : i[0];
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
  era: oe({
    matchPatterns: fa,
    defaultMatchWidth: "wide",
    parsePatterns: ma,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: ga,
    defaultMatchWidth: "wide",
    parsePatterns: va,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: ya,
    defaultMatchWidth: "wide",
    parsePatterns: pa,
    defaultParseWidth: "any"
  }),
  day: oe({
    matchPatterns: ka,
    defaultMatchWidth: "wide",
    parsePatterns: ba,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
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
function ve() {
  return La;
}
const fr = 6048e5, xa = 864e5, ft = Symbol.for("constructDateFrom");
function K(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && ft in e ? e[ft](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function G(e, t) {
  return K(t || e, e);
}
function mt(e) {
  const t = G(e), r = new Date(
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
  const r = K.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function gt(e, t) {
  const r = G(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function Ta(e, t, r) {
  const [n, a] = Fa(
    r == null ? void 0 : r.in,
    e,
    t
  ), i = gt(n), l = gt(a), c = +i - mt(i), d = +l - mt(l);
  return Math.round((c - d) / xa);
}
function Ca(e, t) {
  const r = G(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function $a(e, t) {
  const r = G(e, t == null ? void 0 : t.in);
  return Ta(r, Ca(r)) + 1;
}
function ce(e, t) {
  var c, d, h, v;
  const r = ve(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((v = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? 0, a = G(e, t == null ? void 0 : t.in), i = a.getDay(), l = (i < n ? 7 : 0) + i - n;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function me(e, t) {
  return ce(e, { ...t, weekStartsOn: 1 });
}
function mr(e, t) {
  const r = G(e, t == null ? void 0 : t.in), n = r.getFullYear(), a = K(r, 0);
  a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = me(a), l = K(r, 0);
  l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
  const c = me(l);
  return r.getTime() >= i.getTime() ? n + 1 : r.getTime() >= c.getTime() ? n : n - 1;
}
function Ia(e, t) {
  const r = mr(e, t), n = K(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), me(n);
}
function Oa(e, t) {
  const r = G(e, t == null ? void 0 : t.in), n = +me(r) - +Ia(r);
  return Math.round(n / fr) + 1;
}
function gr(e, t) {
  var v, b, M, _;
  const r = G(e, t == null ? void 0 : t.in), n = r.getFullYear(), a = ve(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((b = (v = t == null ? void 0 : t.locale) == null ? void 0 : v.options) == null ? void 0 : b.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((_ = (M = a.locale) == null ? void 0 : M.options) == null ? void 0 : _.firstWeekContainsDate) ?? 1, l = K((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(n + 1, 0, i), l.setHours(0, 0, 0, 0);
  const c = ce(l, t), d = K((t == null ? void 0 : t.in) || e, 0);
  d.setFullYear(n, 0, i), d.setHours(0, 0, 0, 0);
  const h = ce(d, t);
  return +r >= +c ? n + 1 : +r >= +h ? n : n - 1;
}
function Da(e, t) {
  var c, d, h, v;
  const r = ve(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, a = gr(e, t), i = K((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(a, 0, n), i.setHours(0, 0, 0, 0), ce(i, t);
}
function Pa(e, t) {
  const r = G(e, t == null ? void 0 : t.in), n = +ce(r, t) - +Da(r, t);
  return Math.round(n / fr) + 1;
}
function C(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const X = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return C(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : C(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return C(e.getDate(), t.length);
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
    return C(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return C(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return C(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return C(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return C(a, t.length);
  }
}, re = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, vt = {
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
    return X.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const a = gr(e, n), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const l = i % 100;
      return C(l, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, { unit: "year" }) : C(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = mr(e);
    return C(r, t.length);
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
    return C(r, t.length);
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
        return C(n, 2);
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
        return C(n, 2);
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
        return X.M(e, t);
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
        return C(n + 1, 2);
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
    const a = Pa(e, n);
    return t === "wo" ? r.ordinalNumber(a, { unit: "week" }) : C(a, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Oa(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : C(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : X.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = $a(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : C(n, t.length);
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
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(i);
      // Padded numerical value
      case "ee":
        return C(i, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return r.ordinalNumber(i, { unit: "day" });
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
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(i);
      // Padded numerical value
      case "cc":
        return C(i, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return r.ordinalNumber(i, { unit: "day" });
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
        return C(a, t.length);
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
    return X.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : X.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : C(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : C(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : X.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : X.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return X.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return pt(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return te(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return te(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return pt(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return te(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return te(n, ":");
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
        return "GMT" + yt(n, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + te(n, ":");
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
        return "GMT" + yt(n, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + te(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return C(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return C(+e, t.length);
  }
};
function yt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? r + String(a) : r + String(a) + t + C(i, 2);
}
function pt(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + C(Math.abs(e) / 60, 2) : te(e, t);
}
function te(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = C(Math.trunc(n / 60), 2), i = C(n % 60, 2);
  return r + a + t + i;
}
const kt = (e, t) => {
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
}, Ea = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return kt(e, t);
  let i;
  switch (n) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", kt(n, t)).replace("{{time}}", vr(a, t));
}, Ha = {
  p: vr,
  P: Ea
}, Ra = /^D+$/, qa = /^Y+$/, Aa = ["D", "DD", "YY", "YYYY"];
function Ba(e) {
  return Ra.test(e);
}
function Na(e) {
  return qa.test(e);
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
  return !(!Va(e) && typeof e != "number" || isNaN(+G(e)));
}
const Ua = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, za = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Za = /^'([^]*?)'?$/, Ga = /''/g, Qa = /[a-zA-Z]/;
function U(e, t, r) {
  var v, b, M, _;
  const n = ve(), a = n.locale ?? Ma, i = n.firstWeekContainsDate ?? ((b = (v = n.locale) == null ? void 0 : v.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, l = n.weekStartsOn ?? ((_ = (M = n.locale) == null ? void 0 : M.options) == null ? void 0 : _.weekStartsOn) ?? 0, c = G(e, r == null ? void 0 : r.in);
  if (!Ya(c))
    throw new RangeError("Invalid time value");
  let d = t.match(za).map((g) => {
    const p = g[0];
    if (p === "p" || p === "P") {
      const L = Ha[p];
      return L(g, a.formatLong);
    }
    return g;
  }).join("").match(Ua).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const p = g[0];
    if (p === "'")
      return { isToken: !1, value: Xa(g) };
    if (vt[p])
      return { isToken: !0, value: g };
    if (p.match(Qa))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: g };
  });
  a.localize.preprocessor && (d = a.localize.preprocessor(c, d));
  const h = {
    firstWeekContainsDate: i,
    weekStartsOn: l,
    locale: a
  };
  return d.map((g) => {
    if (!g.isToken) return g.value;
    const p = g.value;
    (Na(p) || Ba(p)) && ja(p, t, String(e));
    const L = vt[p[0]];
    return L(c, p, a.localize, h);
  }).join("");
}
function Xa(e) {
  const t = e.match(Za);
  return t ? t[1].replace(Ga, "'") : e;
}
function ue(e = "", t = "", r = "long") {
  const n = U(new Date(e), "MMMM d, Y"), a = U(new Date(t), "MMMM d, Y");
  let i = `${n} - ${a}`;
  if (n === a && (i = U(new Date(e), "MMMM d, Y")), t || (i = n), r === "short" || r === "shortWithYear") {
    const l = i.slice(0, 3), c = i.split(" ").slice(1).join(" ");
    if (t && t !== e) {
      const d = U(new Date(e), "MMM d"), h = U(new Date(t), "MMM d");
      if (r === "shortWithYear") {
        const v = U(new Date(t), "MMM d, Y");
        return `${d} - ${v}`;
      }
      return `${d} - ${h}`;
    }
    return `${l} ${c}`;
  }
  return i;
}
function ye(e = "", t = "") {
  const r = U(new Date(e), "h:mm aaa"), n = U(new Date(t), "h:mm aaa");
  let a = `${r} - ${n}`;
  return r === n && (a = U(new Date(e), "h:mm aaa")), t || (a = r), a;
}
function pe(e = "") {
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
  return s(), o("svg", Ja, t[0] || (t[0] = [
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
  return s(), o("svg", Ka, t[0] || (t[0] = [
    ge('<path d="M144.445 318.242L12.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M160.445 318.242L28.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M176.445 318.242L44.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M192.445 318.242L60.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M208.445 318.242L76.7009 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M224.445 318.242L92.7009 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M240.445 318.242L108.701 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M256.445 318.242L124.701 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M272.445 318.242L140.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M288.445 318.242L156.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M304.445 318.242L172.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M320.445 318.242L188.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M336.445 318.242L204.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M352.445 318.242L220.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M368.445 318.242L236.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M384.445 318.242L252.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M400.445 318.242L268.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M416.445 318.242L284.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M432.445 318.242L300.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M448.445 318.242L316.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M464.445 318.242L332.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M480.445 318.242L348.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M496.445 318.242L364.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M512.445 318.242L380.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M528.445 318.242L396.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M544.445 318.242L412.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M560.445 318.242L428.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M576.445 318.242L444.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M592.445 318.242L460.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M608.445 318.242L476.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M624.445 318.242L492.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M640.445 318.242L508.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M656.445 318.242L524.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M672.445 318.242L540.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M688.445 318.242L556.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M704.445 318.242L572.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M720.445 318.242L588.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M736.445 318.242L604.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M752.445 318.242L620.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M768.445 318.242L636.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M784.445 318.242L654.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M800.445 318.242L670.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M816.445 318.242L686.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M832.445 318.242L702.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M848.445 318.242L718.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M864.445 318.242L734.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M880.445 318.242L750.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path>', 47)
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
  return s(), o("svg", ts, t[0] || (t[0] = [
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
}, xs = /* @__PURE__ */ ee({
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
    const t = e, r = y(() => {
      if (t.media && t.media.src) {
        const p = t.media.src.toLowerCase().split(".").pop();
        return p === "mp4" || p === "m4a" || p === "f4v" || p === "m4b" || p === "mov";
      } else
        return !1;
    }), n = y(() => r.value ? ur : cr), a = y(() => r.value ? null : t.media), i = y(() => {
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
    }), l = y(() => r.value ? i.value : a.value), c = y(() => t.ratio), d = y(() => t.locations.map((g) => ({
      ...g,
      svg: g.title === "Online" ? "svg-icon-virtual" : "svg-icon-location",
      class: g.title === "Online" ? "location-online" : "location-link",
      to: g.to != null ? lt(g.to) : ""
    }))), h = y(() => ue(t.startDate, t.endDate)), v = y(() => U(new Date(t.dateCreated), "MMMM d, Y")), b = y(() => t.startDate && t.sectionHandle === "event" ? ye(t.startDate, t.endDate) : ""), M = y(() => pe(t.to)), _ = y(() => [
      "banner-featured",
      { "hatch-left": !t.alignRight },
      `color-${M.value}`
    ]);
    return (g, p) => (s(), o("div", {
      class: q(_.value)
    }, [
      u("div", ns, [
        Z(g.$slots, "default", {}, () => [
          e.breadcrumb ? (s(), o("div", as, [
            H(x(pr), {
              class: "heading-line",
              "aria-hidden": "true"
            }),
            u("h2", ss, P(e.breadcrumb), 1)
          ])) : m("", !0)
        ], !0)
      ]),
      (s(), I(J(n.value), {
        class: "media",
        media: l.value,
        "aspect-ratio": c.value
      }, {
        default: Q(() => [
          r.value ? m("", !0) : (s(), o("div", is)),
          H(x(wr), {
            class: "molecule",
            "aria-hidden": "true"
          })
        ]),
        _: 1
      }, 8, ["media", "aspect-ratio"])),
      u("div", os, [
        u("div", ls, [
          e.category ? (s(), o("h2", {
            key: 0,
            class: "category category-mobile",
            innerHTML: e.category
          }, null, 8, cs)) : m("", !0)
        ]),
        u("div", us, [
          H(x(br), {
            class: "svg",
            "aria-hidden": "true"
          })
        ])
      ]),
      u("div", ds, [
        e.category ? (s(), o("div", {
          key: 0,
          class: "category category-desktop",
          innerHTML: e.category
        }, null, 8, hs)) : m("", !0),
        e.titleLink.length > 0 ? (s(), o("div", fs, [
          H(ae, {
            id: "banner-featured",
            to: e.titleLink,
            class: "title title-linked"
          }, {
            default: Q(() => [
              B(P(e.title), 1)
            ]),
            _: 1
          }, 8, ["to"])
        ])) : (s(), o("div", ms, [
          u("h3", {
            id: "banner-featured",
            class: "title",
            innerHTML: e.title
          }, null, 8, gs)
        ])),
        u("div", vs, [
          e.dateCreated ? (s(), o("div", ys, [
            e.dateCreated ? (s(), o("time", {
              key: 0,
              class: "date-created",
              innerHTML: v.value
            }, null, 8, ps)) : m("", !0)
          ])) : m("", !0),
          e.byline.length ? (s(), o("div", ks, [
            (s(!0), o(N, null, j(e.byline, (L, O) => (s(), o("div", {
              key: `external-${O}`,
              class: "byline-item",
              innerHTML: L
            }, null, 8, bs))), 128))
          ])) : m("", !0),
          e.description ? (s(), I(dr, {
            key: 2,
            class: "description",
            "rich-text-content": e.description
          }, null, 8, ["rich-text-content"])) : m("", !0),
          e.startDate || e.endDate ? (s(), o("div", ws, [
            e.startDate ? (s(), o("time", {
              key: 0,
              class: "schedule-item",
              innerHTML: h.value
            }, null, 8, _s)) : m("", !0),
            b.value ? (s(), o("time", {
              key: 1,
              class: "schedule-item",
              innerHTML: b.value
            }, null, 8, Ss)) : m("", !0)
          ])) : m("", !0),
          e.locations.length ? (s(), o("div", Ms, [
            (s(!0), o(N, null, j(d.value, (L) => (s(), I(or, {
              key: `location-${L.id}`,
              text: L.title,
              "icon-name": L.svg,
              to: L.to,
              class: q(L.class)
            }, null, 8, ["text", "icon-name", "to", "class"]))), 128))
          ])) : m("", !0)
        ]),
        e.to ? (s(), I(ir, {
          key: 3,
          id: "banner-featured-button",
          label: e.prompt,
          to: e.to,
          "aria-labelledby": "banner-featured-button banner-featured",
          class: "button"
        }, null, 8, ["label", "to"])) : m("", !0)
      ]),
      !e.to && e.registerEvent ? (s(), o("div", Ls, [
        H(st)
      ])) : m("", !0)
    ], 2));
  }
}), Oo = /* @__PURE__ */ W(xs, [["__scopeId", "data-v-d975c59b"]]), Fs = {
  key: 0,
  class: "category"
}, Ts = ["innerHTML"], Cs = { class: "hatch-box" }, $s = { class: "hatch" }, Is = { class: "meta" }, Os = ["innerHTML"], Ds = { class: "meta-text" }, Ps = { class: "meta-block" }, Es = {
  key: 0,
  class: "byline-item"
}, Hs = {
  key: 1,
  class: "subject-areas"
}, Rs = ["innerHTML"], qs = ["innerHTML"], As = ["innerHTML"], Bs = {
  key: 0,
  class: "contact-info-group"
}, Ns = {
  key: 1,
  class: "location-group"
}, js = {
  key: 1,
  class: "block-form-container"
}, Ws = /* @__PURE__ */ ee({
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
    const t = e, r = f(() => Promise.resolve().then(() => ot)), n = f(() => Promise.resolve().then(() => hr)), a = f(() => Promise.resolve().then(() => lr)), i = f(() => Promise.resolve().then(() => kr)), l = y(() => pe(t.to)), c = y(() => [
      "banner-header",
      { "hatch-left": !t.alignRight },
      `color-${l.value}`
    ]), d = y(() => {
      if (t.media && t.media.src) {
        const T = t.media.src.toLowerCase().split(".").pop();
        return T === "mp4" || T === "m4a" || T === "f4v" || T === "m4b" || T === "mov";
      } else
        return !1;
    }), h = y(() => d.value ? ur : cr), v = y(() => d.value ? null : t.media), b = y(() => {
      if (!d.value)
        return null;
      const F = t.media;
      return {
        src: F.src,
        focalPoint: F.focalPoint,
        sizes: F.sizes,
        height: F.height,
        width: F.width,
        alt: F.alt,
        caption: F.caption,
        poster: F.poster
      };
    }), M = y(() => d.value ? b.value : v.value), _ = y(() => U(new Date(t.dateCreated), "MMMM d, Y")), g = y(() => ue(t.startDate, t.endDate)), p = y(() => t.startDate && t.sectionHandle === "event" ? ye(t.startDate, t.endDate) : ""), L = y(() => t.ratio), O = y(() => t.category ? "gradient" : "gradient-no-category"), R = y(() => t.locations.map((F) => {
      let T = "svg-icon-location";
      return F.title === "Online" && (T = "svg-icon-virtual"), {
        ...F,
        svg: T,
        to: F.to != null ? lt(F.to) : ""
      };
    }));
    return (F, T) => (s(), o("div", {
      class: q(c.value)
    }, [
      e.category ? (s(), o("div", Fs, [
        H(x(i), {
          class: "heading-line",
          "aria-hidden": "true"
        }),
        u("div", {
          class: "text",
          innerHTML: e.category
        }, null, 8, Ts)
      ])) : m("", !0),
      (s(), I(J(h.value), {
        class: "media",
        media: M.value,
        "aspect-ratio": L.value
      }, {
        default: Q(() => [
          d.value ? m("", !0) : (s(), o("div", {
            key: 0,
            class: q(O.value)
          }, null, 2)),
          H(x(wr), {
            class: "molecule",
            "aria-hidden": "true"
          })
        ]),
        _: 1
      }, 8, ["media", "aspect-ratio"])),
      u("div", Cs, [
        T[0] || (T[0] = u("div", { class: "clipped-box" }, null, -1)),
        u("div", $s, [
          H(x(br), {
            class: "svg",
            "aria-hidden": "true"
          })
        ])
      ]),
      u("div", Is, [
        u("h1", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Os),
        e.text ? (s(), I(x(n), {
          key: 0,
          class: "snippet",
          "rich-text-content": e.text
        }, null, 8, ["rich-text-content"])) : m("", !0),
        z(u("div", Ds, [
          z(u("div", Ps, [
            e.byline.length ? (s(), o("div", Es, [
              (s(!0), o(N, null, j(e.byline, ($, V) => (s(), o("div", {
                key: `${$}-${V}`,
                class: "byline-item"
              }, P($), 1))), 128))
            ])) : m("", !0),
            e.subjectAreas.length ? (s(), o("div", Hs, [
              (s(!0), o(N, null, j(e.subjectAreas, ($, V) => (s(), o("div", {
                key: `${$.title}-${V}`
              }, P($.title), 1))), 128))
            ])) : m("", !0),
            e.dateCreated ? (s(), o("time", {
              key: 2,
              class: "date-created",
              innerHTML: _.value
            }, null, 8, Rs)) : m("", !0),
            e.startDate ? (s(), o("time", {
              key: 3,
              class: "schedule-item",
              innerHTML: g.value
            }, null, 8, qs)) : m("", !0),
            p.value ? (s(), o("time", {
              key: 4,
              class: "schedule-item",
              innerHTML: p.value
            }, null, 8, As)) : m("", !0)
          ], 512), [
            [
              ht,
              e.byline.length || e.subjectAreas.length || e.dateCreated || e.startDate
            ]
          ]),
          e.email || e.phone || e.staffDirectoryLink || e.addressLink ? (s(), o("div", Bs, [
            e.email ? (s(), I(x(a), {
              key: 0,
              text: e.email,
              "icon-name": "svg-icon-email",
              to: `mailto:${e.email}`
            }, null, 8, ["text", "to"])) : m("", !0),
            e.phone ? (s(), I(x(a), {
              key: 1,
              text: e.phone,
              "icon-name": "svg-icon-phone",
              to: `tel:${e.phone}`
            }, null, 8, ["text", "to"])) : m("", !0),
            e.staffDirectoryLink ? (s(), I(x(a), {
              key: 2,
              text: "View staff directory",
              "icon-name": "svg-icon-person",
              to: e.staffDirectoryLink
            }, null, 8, ["to"])) : m("", !0),
            e.addressLink ? (s(), I(x(a), {
              key: 3,
              text: e.address,
              "icon-name": "svg-icon-location",
              to: e.addressLink
            }, null, 8, ["text", "to"])) : m("", !0)
          ])) : m("", !0),
          e.locations.length ? (s(), o("div", Ns, [
            (s(!0), o(N, null, j(R.value, ($) => (s(), I(x(a), {
              key: `location-${$.id}`,
              text: $.title,
              "icon-name": $.svg,
              to: $.to
            }, null, 8, ["text", "icon-name", "to"]))), 128))
          ])) : m("", !0)
        ], 512), [
          [
            ht,
            e.byline.length || e.subjectAreas.length || e.dateCreated || e.startDate || e.email || e.phone || e.staffDirectoryLink || e.addressLink
          ]
        ]),
        e.to ? (s(), I(x(r), {
          key: 1,
          label: e.prompt,
          "is-secondary": !0,
          class: "button",
          to: e.to
        }, null, 8, ["label", "to"])) : m("", !0)
      ]),
      !e.to && e.registerEvent ? (s(), o("div", js, [
        H(st)
      ])) : m("", !0)
    ], 2));
  }
}), Do = /* @__PURE__ */ W(Ws, [["__scopeId", "data-v-a5497b29"]]), Vs = { class: "banner-text" }, Ys = { class: "banner-text-content-container" }, Us = {
  key: 0,
  class: "category"
}, zs = ["innerHTML"], Zs = { class: "content" }, Gs = { class: "title" }, Qs = ["lang", "innerHTML"], Xs = {
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
}, di = /* @__PURE__ */ ee({
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
    const t = e, r = f(() => Promise.resolve().then(() => ot)), n = f(() => Promise.resolve().then(() => hr)), a = f(() => Promise.resolve().then(() => lr)), i = f(() => Promise.resolve().then(() => kr)), l = y(() => {
      let _ = ["banner-text-container", "theme-light"];
      return t.isDarkBlue && (_ = ["banner-text-container", "theme-dark"]), _;
    }), c = y(() => pe(t.to)), d = y(() => ["text", `color-${c.value}`]), h = y(() => U(new Date(t.dateCreated), "MMMM d, Y")), v = y(() => ue(t.startDate, t.endDate)), b = y(() => t.startDate && t.sectionHandle === "event" ? ye(t.startDate, t.endDate) : ""), M = y(() => t.locations.map((_) => {
      let g = "svg-icon-location";
      return _.title === "Online" && (g = "svg-icon-virtual"), {
        ..._,
        svg: g,
        to: _.to != null ? lt(_.to) : ""
      };
    }));
    return (_, g) => (s(), o("div", Vs, [
      u("div", {
        class: q(l.value)
      }, [
        u("div", Ys, [
          e.category ? (s(), o("div", Us, [
            H(x(i), {
              class: "heading-line",
              "aria-hidden": "true"
            }),
            u("div", {
              class: q(d.value),
              innerHTML: e.category
            }, null, 10, zs)
          ])) : m("", !0),
          u("div", Zs, [
            u("h1", Gs, [
              B(P(e.title) + " ", 1),
              e.alternativeFullName ? (s(), o("span", {
                key: 0,
                lang: e.language,
                class: "translation",
                innerHTML: e.alternativeFullName
              }, null, 8, Qs)) : m("", !0)
            ]),
            e.text ? (s(), I(x(n), {
              key: 0,
              class: "text",
              "rich-text-content": e.text
            }, null, 8, ["rich-text-content"])) : m("", !0),
            e.byline || e.subjectAreas || e.startDate || e.phone || e.email || e.addressLink || e.staffDirectoryLink ? (s(), o("div", Xs, [
              e.byline ? (s(), o("div", Js, [
                (s(!0), o(N, null, j(e.byline, (p, L) => (s(), o("div", {
                  key: `${p}-${L}`
                }, P(p), 1))), 128))
              ])) : m("", !0),
              e.subjectAreas ? (s(), o("div", Ks, [
                (s(!0), o(N, null, j(e.subjectAreas, (p, L) => (s(), o("div", {
                  key: `${p.title}-${L}`
                }, P(p.title), 1))), 128))
              ])) : m("", !0),
              e.email ? (s(), o("div", ei, [
                H(x(a), {
                  text: e.email,
                  "icon-name": "svg-icon-email",
                  to: `mailto:${e.email}`
                }, null, 8, ["text", "to"])
              ])) : m("", !0),
              e.phone ? (s(), o("div", ti, [
                H(x(a), {
                  text: e.phone,
                  "icon-name": "svg-icon-phone",
                  to: `tel:${e.phone}`
                }, null, 8, ["text", "to"])
              ])) : m("", !0),
              e.staffDirectoryLink ? (s(), o("div", ri, [
                H(x(a), {
                  text: "View staff directory",
                  "icon-name": "svg-icon-person",
                  to: e.staffDirectoryLink
                }, null, 8, ["to"])
              ])) : m("", !0),
              e.addressLink ? (s(), o("div", ni, [
                H(x(a), {
                  text: e.address,
                  "icon-name": "svg-icon-location",
                  to: e.addressLink
                }, null, 8, ["text", "to"])
              ])) : m("", !0),
              e.startDate || e.dateCreated ? (s(), o("div", ai, [
                e.dateCreated ? (s(), o("time", {
                  key: 0,
                  class: "date-created",
                  innerHTML: h.value
                }, null, 8, si)) : m("", !0),
                e.startDate ? (s(), o("time", {
                  key: 1,
                  class: "schedule-item",
                  innerHTML: v.value
                }, null, 8, ii)) : m("", !0),
                b.value ? (s(), o("time", {
                  key: 2,
                  class: "schedule-item",
                  innerHTML: b.value
                }, null, 8, oi)) : m("", !0),
                e.isOnline ? (s(), o("div", li, " Online ")) : m("", !0)
              ])) : m("", !0)
            ])) : m("", !0),
            e.locations.length ? (s(), o("div", ci, [
              (s(!0), o(N, null, j(M.value, (p) => (s(), I(x(a), {
                key: `location-${p.id}`,
                text: p.title,
                "icon-name": p.svg,
                to: p.to
              }, null, 8, ["text", "icon-name", "to"]))), 128))
            ])) : m("", !0),
            e.to && !e.isDarkBlue ? (s(), I(x(r), {
              key: 3,
              label: e.buttonText,
              to: e.to,
              "is-secondary": !0
            }, null, 8, ["label", "to"])) : m("", !0),
            e.to && e.isDarkBlue ? (s(), I(x(r), {
              key: 4,
              label: e.buttonText,
              to: e.to,
              "is-tertiary": !0
            }, null, 8, ["label", "to"])) : m("", !0)
          ])
        ])
      ], 2),
      !e.to && e.registerEvent ? (s(), o("div", ui, [
        H(st)
      ])) : m("", !0)
    ]));
  }
}), Po = /* @__PURE__ */ W(di, [["__scopeId", "data-v-04cddc69"]]), hi = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-share-printer"
};
function _r(e, t) {
  return s(), o("svg", hi, t[0] || (t[0] = [
    ge('<circle cx="16" cy="16" r="16" fill="#F2F2F2" class="svg__fill--secondary-grey-01"></circle><path d="M7 21.1984h-.75c0 .4142.33579.75.75.75v-.75Zm0-8.1205v-.75c-.41421 0-.75.3358-.75.75H7Zm18 0h.75c0-.4142-.3358-.75-.75-.75v.75Zm0 8.1205v.75c.4142 0 .75-.3358.75-.75H25Zm-16.29837.75h.75v-1.5h-.75v1.5Zm14.57147-1.5h-.75v1.5h.75v-1.5Zm-15.5231.75v-8.1205h-1.5v8.1205h1.5ZM7 13.8279h18v-1.5H7v1.5Zm17.25-.75v8.1205h1.5v-8.1205h-1.5ZM8.70163 20.4484H7v1.5h1.70163v-1.5Zm16.29837 0h-1.7269v1.5H25v-1.5Z" fill="#0F0F0F" class="svg__fill--black"></path><path d="M11.4482 18.7737v6.5454h9.0013v-6.5454h-9.0013Z" stroke="#0F0F0F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="svg__stroke--black"></path><path d="M13.5213 21.0669h4.8821" stroke="#0F0F0F" class="svg__stroke--black"></path><path d="M13.5213 22.812h2.99" stroke="#0F0F0F" class="svg__stroke--black"></path><path d="M10.6306 16.4412h1.6243" stroke="#0F0F0F" stroke-width="1.25" class="svg__stroke--black"></path><path d="M9.86359 8.68115v4.41055H22.5071V8.68115H9.86359Z" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svg__stroke--black"></path>', 7)
  ]));
}
const Sr = { render: _r }, fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sr,
  render: _r
}, Symbol.toStringTag, { value: "Module" })), mi = { class: "block-amenities" }, gi = { class: "amenity-column" }, vi = { class: "amenities-list" }, yi = { class: "amenity-name" }, pi = /* @__PURE__ */ ee({
  __name: "BlockAmenities",
  props: {
    amenities: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, r = f(
      () => import("./icon-clock-CG3EE-5W.js")
    ), n = f(
      () => import("./icon-accessible-C8Gup1rK.js")
    ), a = f(
      () => import("./icon-chair-D8fW8Dnx.js")
    ), i = f(
      () => import("./icon-virtual-CwZieS3s.js")
    ), l = f(
      () => import("./icon-laptop-Bmg8PSn7.js")
    ), c = f(
      () => import("./icon-locker-BBQPsbYg.js")
    ), d = f(
      () => import("./icon-light-wkkuRssP.js")
    ), h = f(
      () => import("./icon-book-Dhs3bbZ0.js")
    ), v = {
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
        icon: i,
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
        icon: d,
        label: "Makerspace"
      },
      "icon-share-printer": {
        icon: Sr,
        label: "Print, Copy and Scan"
      },
      "icon-book": {
        icon: h,
        label: "Research Help"
      }
    }, b = y(() => t.amenities.map((M) => {
      const _ = v[M];
      return {
        svgIcon: _.icon,
        svgLabel: _.label
      };
    }));
    return (M, _) => (s(), o("div", mi, [
      _[0] || (_[0] = u("h3", { class: "amenities-title" }, " At This Location ", -1)),
      u("div", gi, [
        u("ul", vi, [
          (s(!0), o(N, null, j(b.value, (g, p) => (s(), o("li", {
            key: `${g.svgLabel}-${p}`,
            class: "amenitiy-row"
          }, [
            g.svgIcon ? (s(), I(J(g.svgIcon), { key: 0 })) : m("", !0),
            u("span", yi, P(g.svgLabel), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Eo = /* @__PURE__ */ W(pi, [["__scopeId", "data-v-3ecae64a"]]);
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _e, bt;
function Lr() {
  if (bt) return _e;
  bt = 1;
  var e = typeof he == "object" && he && he.Object === Object && he;
  return _e = e, _e;
}
var Se, wt;
function ki() {
  if (wt) return Se;
  wt = 1;
  var e = Lr(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Se = r, Se;
}
var Me, _t;
function ct() {
  if (_t) return Me;
  _t = 1;
  var e = ki(), t = e.Symbol;
  return Me = t, Me;
}
var Le, St;
function bi() {
  if (St) return Le;
  St = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return Le = e, Le;
}
var xe, Mt;
function wi() {
  if (Mt) return xe;
  Mt = 1;
  var e = Array.isArray;
  return xe = e, xe;
}
var Fe, Lt;
function _i() {
  if (Lt) return Fe;
  Lt = 1;
  var e = ct(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function i(l) {
    var c = r.call(l, a), d = l[a];
    try {
      l[a] = void 0;
      var h = !0;
    } catch {
    }
    var v = n.call(l);
    return h && (c ? l[a] = d : delete l[a]), v;
  }
  return Fe = i, Fe;
}
var Te, xt;
function Si() {
  if (xt) return Te;
  xt = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Te = r, Te;
}
var Ce, Ft;
function xr() {
  if (Ft) return Ce;
  Ft = 1;
  var e = ct(), t = _i(), r = Si(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function l(c) {
    return c == null ? c === void 0 ? a : n : i && i in Object(c) ? t(c) : r(c);
  }
  return Ce = l, Ce;
}
var $e, Tt;
function Fr() {
  if (Tt) return $e;
  Tt = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return $e = e, $e;
}
var Ie, Ct;
function Tr() {
  if (Ct) return Ie;
  Ct = 1;
  var e = xr(), t = Fr(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return Ie = n, Ie;
}
var Oe, $t;
function Cr() {
  if ($t) return Oe;
  $t = 1;
  var e = ct(), t = bi(), r = wi(), n = Tr(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
  function l(c) {
    if (typeof c == "string")
      return c;
    if (r(c))
      return t(c, l) + "";
    if (n(c))
      return i ? i.call(c) : "";
    var d = c + "";
    return d == "0" && 1 / c == -1 / 0 ? "-0" : d;
  }
  return Oe = l, Oe;
}
var De, It;
function Mi() {
  if (It) return De;
  It = 1;
  function e(t, r, n) {
    var a = -1, i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var l = Array(i); ++a < i; )
      l[a] = t[a + r];
    return l;
  }
  return De = e, De;
}
var Pe, Ot;
function Li() {
  if (Ot) return Pe;
  Ot = 1;
  var e = Mi();
  function t(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : e(r, n, a);
  }
  return Pe = t, Pe;
}
var Ee, Dt;
function ut() {
  if (Dt) return Ee;
  Dt = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", l = "\\u200d", c = RegExp("[" + l + e + a + i + "]");
  function d(h) {
    return c.test(h);
  }
  return Ee = d, Ee;
}
var He, Pt;
function $r() {
  if (Pt) return He;
  Pt = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return He = e, He;
}
var Re, Et;
function xi() {
  if (Et) return Re;
  Et = 1;
  var e = xr(), t = Fr(), r = "[object RegExp]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Re = n, Re;
}
var qe, Ht;
function Fi() {
  if (Ht) return qe;
  Ht = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return qe = e, qe;
}
var le = { exports: {} };
le.exports;
var Rt;
function Ti() {
  return Rt || (Rt = 1, function(e, t) {
    var r = Lr(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, l = i && r.process, c = function() {
      try {
        var d = a && a.require && a.require("util").types;
        return d || l && l.binding && l.binding("util");
      } catch {
      }
    }();
    e.exports = c;
  }(le, le.exports)), le.exports;
}
var Ae, qt;
function Ci() {
  if (qt) return Ae;
  qt = 1;
  var e = xi(), t = Fi(), r = Ti(), n = r && r.isRegExp, a = n ? t(n) : e;
  return Ae = a, Ae;
}
var Be, At;
function $i() {
  if (At) return Be;
  At = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return Be = e, Be;
}
var Ne, Bt;
function Ii() {
  if (Bt) return Ne;
  Bt = 1;
  var e = $i(), t = e("length");
  return Ne = t, Ne;
}
var je, Nt;
function Oi() {
  if (Nt) return je;
  Nt = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", l = "[" + e + "]", c = "[" + a + "]", d = "\\ud83c[\\udffb-\\udfff]", h = "(?:" + c + "|" + d + ")", v = "[^" + e + "]", b = "(?:\\ud83c[\\udde6-\\uddff]){2}", M = "[\\ud800-\\udbff][\\udc00-\\udfff]", _ = "\\u200d", g = h + "?", p = "[" + i + "]?", L = "(?:" + _ + "(?:" + [v, b, M].join("|") + ")" + p + g + ")*", O = p + g + L, R = "(?:" + [v + c + "?", c, b, M, l].join("|") + ")", F = RegExp(d + "(?=" + d + ")|" + R + O, "g");
  function T($) {
    for (var V = F.lastIndex = 0; F.test($); )
      ++V;
    return V;
  }
  return je = T, je;
}
var We, jt;
function Di() {
  if (jt) return We;
  jt = 1;
  var e = Ii(), t = ut(), r = Oi();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return We = n, We;
}
var Ve, Wt;
function Pi() {
  if (Wt) return Ve;
  Wt = 1;
  function e(t) {
    return t.split("");
  }
  return Ve = e, Ve;
}
var Ye, Vt;
function Ei() {
  if (Vt) return Ye;
  Vt = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", l = "[" + e + "]", c = "[" + a + "]", d = "\\ud83c[\\udffb-\\udfff]", h = "(?:" + c + "|" + d + ")", v = "[^" + e + "]", b = "(?:\\ud83c[\\udde6-\\uddff]){2}", M = "[\\ud800-\\udbff][\\udc00-\\udfff]", _ = "\\u200d", g = h + "?", p = "[" + i + "]?", L = "(?:" + _ + "(?:" + [v, b, M].join("|") + ")" + p + g + ")*", O = p + g + L, R = "(?:" + [v + c + "?", c, b, M, l].join("|") + ")", F = RegExp(d + "(?=" + d + ")|" + R + O, "g");
  function T($) {
    return $.match(F) || [];
  }
  return Ye = T, Ye;
}
var Ue, Yt;
function Hi() {
  if (Yt) return Ue;
  Yt = 1;
  var e = Pi(), t = ut(), r = Ei();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Ue = n, Ue;
}
var ze, Ut;
function Ri() {
  if (Ut) return ze;
  Ut = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return ze = t, ze;
}
var Ze, zt;
function qi() {
  if (zt) return Ze;
  zt = 1;
  var e = Ri(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Ze = r, Ze;
}
var Ge, Zt;
function Ai() {
  if (Zt) return Ge;
  Zt = 1;
  var e = qi(), t = $r(), r = Tr(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, l = /^0o[0-7]+$/i, c = parseInt;
  function d(h) {
    if (typeof h == "number")
      return h;
    if (r(h))
      return n;
    if (t(h)) {
      var v = typeof h.valueOf == "function" ? h.valueOf() : h;
      h = t(v) ? v + "" : v;
    }
    if (typeof h != "string")
      return h === 0 ? h : +h;
    h = e(h);
    var b = i.test(h);
    return b || l.test(h) ? c(h.slice(2), b ? 2 : 8) : a.test(h) ? n : +h;
  }
  return Ge = d, Ge;
}
var Qe, Gt;
function Bi() {
  if (Gt) return Qe;
  Gt = 1;
  var e = Ai(), t = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === t || a === -1 / 0) {
      var i = a < 0 ? -1 : 1;
      return i * r;
    }
    return a === a ? a : 0;
  }
  return Qe = n, Qe;
}
var Xe, Qt;
function Ni() {
  if (Qt) return Xe;
  Qt = 1;
  var e = Bi();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return Xe = t, Xe;
}
var Je, Xt;
function Ir() {
  if (Xt) return Je;
  Xt = 1;
  var e = Cr();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Je = t, Je;
}
var Ke, Jt;
function ji() {
  if (Jt) return Ke;
  Jt = 1;
  var e = Cr(), t = Li(), r = ut(), n = $r(), a = Ci(), i = Di(), l = Hi(), c = Ni(), d = Ir(), h = 30, v = "...", b = /\w*$/;
  function M(_, g) {
    var p = h, L = v;
    if (n(g)) {
      var O = "separator" in g ? g.separator : O;
      p = "length" in g ? c(g.length) : p, L = "omission" in g ? e(g.omission) : L;
    }
    _ = d(_);
    var R = _.length;
    if (r(_)) {
      var F = l(_);
      R = F.length;
    }
    if (p >= R)
      return _;
    var T = p - i(L);
    if (T < 1)
      return L;
    var $ = F ? t(F, 0, T).join("") : _.slice(0, T);
    if (O === void 0)
      return $ + L;
    if (F && (T += $.length - T), a(O)) {
      if (_.slice(T).search(O)) {
        var V, S = $;
        for (O.global || (O = RegExp(O.source, d(b.exec(O)) + "g")), O.lastIndex = 0; V = O.exec(S); )
          var Y = V.index;
        $ = $.slice(0, Y === void 0 ? T : Y);
      }
    } else if (_.indexOf(e(O), T) != T) {
      var E = $.lastIndexOf(O);
      E > -1 && ($ = $.slice(0, E));
    }
    return $ + L;
  }
  return Ke = M, Ke;
}
var Wi = ji();
const Vi = /* @__PURE__ */ Mr(Wi);
var et, Kt;
function Yi() {
  if (Kt) return et;
  Kt = 1;
  function e(t) {
    return function(r) {
      return t == null ? void 0 : t[r];
    };
  }
  return et = e, et;
}
var tt, er;
function Ui() {
  if (er) return tt;
  er = 1;
  var e = Yi(), t = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  }, r = e(t);
  return tt = r, tt;
}
var rt, tr;
function zi() {
  if (tr) return rt;
  tr = 1;
  var e = Ir(), t = Ui(), r = /&(?:amp|lt|gt|quot|#39);/g, n = RegExp(r.source);
  function a(i) {
    return i = e(i), i && n.test(i) ? i.replace(r, t) : i;
  }
  return rt = a, rt;
}
var Zi = zi();
const Gi = /* @__PURE__ */ Mr(Zi);
function rr(e = "", t = Number.POSITIVE_INFINITY) {
  if (e == null)
    return e;
  const r = Gi(
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
  return s(), o("svg", Qi, t[0] || (t[0] = [
    ge('<path d="M9.08984 113.223H190.91V131.489C190.91 135.493 187.664 138.739 183.66 138.739H115.956H83.8441H16.3398C12.3358 138.739 9.08984 135.493 9.08984 131.489V113.223Z" stroke="#0B6AB7" stroke-width="1.5" class="svg__stroke--primary-blue-03"></path><path d="M83.791 139.489V155M116.002 139.489V155M116.002 155H135.066M116.002 155H83.791M83.791 155H65.3848" stroke="#0B6AB7" stroke-width="1.5" class="svg__stroke--primary-blue-03"></path><path d="M14.3398 5.75H185.66C188.56 5.75 190.91 8.10051 190.91 11V113.253H9.08984V11C9.08984 8.10051 11.4403 5.75 14.3398 5.75Z" stroke="#0B6AB7" stroke-width="1.5" class="svg__stroke--primary-blue-03"></path><path d="M185.176 19.3555L157.085 30.991L145.45 59.0816L157.085 87.1723L185.176 98.8078" stroke="#FFD600" stroke-width="1.5" class="svg__stroke--secondary-yellow-03"></path><path d="M17.7856 10.9407H182.213C184.008 10.9407 185.463 12.3957 185.463 14.1907V103.971C185.463 105.766 184.008 107.221 182.213 107.221H17.7856C15.9907 107.221 14.5356 105.766 14.5356 103.971V14.1907C14.5356 12.3957 15.9907 10.9407 17.7856 10.9407Z" stroke="#0AA5FF" stroke-width="1.5" class="svg__stroke--default-cyan-03"></path><path d="M99.9953 131.954L104.221 130.204L105.971 125.979L104.221 121.754L99.9953 120.003L95.7701 121.754L94.02 125.979L95.7701 130.204L99.9953 131.954Z" fill="#0AA5FF" class="svg__fill--default-cyan-03"></path><path d="M44.4458 35.502H84.4458" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 41.502H84.4458" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 47.502L84.4458 47.5019" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 53.502L84.4458 53.5019" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 59.502L75.4405 59.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 71.502L84.4458 71.5019" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 77.502L84.4458 77.5019" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M44.4458 83.502L68.388 83.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 41.502H116.446" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 35.502H116.446" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 47.502H105.364" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 59.502L116.446 59.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 65.502L116.446 65.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 71.502L116.446 71.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 77.502L116.446 77.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path><path d="M92.4458 83.502L112.79 83.502" stroke="#00E0E0" stroke-width="1.5" class="svg__stroke--help-green-03"></path>', 22)
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
  return s(), o("svg", Ki, t[0] || (t[0] = [
    ge('<path d="M98.6874 4.74365L99.414 4.55781C99.3291 4.22585 99.03 3.99364 98.6874 3.99365C98.3447 3.99366 98.0457 4.22589 97.9608 4.55785L98.6874 4.74365ZM97.9608 4.92949L132.152 138.616L133.606 138.244L99.414 4.55781L97.9608 4.92949ZM132.158 138.635L136.786 154.948L138.229 154.539L133.601 138.225L132.158 138.635ZM97.9608 4.55785L63.7763 138.244L65.2295 138.616L99.414 4.92945L97.9608 4.55785ZM63.7814 138.225L59.1535 154.539L60.5965 154.948L65.2244 138.635L63.7814 138.225ZM132.879 137.68H64.5029V139.18H132.879V137.68Z" fill="#0B6AB7" class="svg__fill--primary-blue-03"></path><rect x="91.8477" y="16.0012" width="13.6887" height="8.52157" fill="white" class="svg__fill--white"></rect><rect x="15.6284" y="24.1885" width="168.77" height="101.715" rx="1.25" fill="white" stroke="#0B6AB7" stroke-width="1.5" class="svg__fill--white svg__stroke--primary-blue-03"></rect><rect x="15.6284" y="16.5989" width="168.77" height="7.17405" rx="1.25" stroke="#0B6AB7" stroke-width="1.5" class="svg__stroke--primary-blue-03"></rect><rect x="18.8344" y="19.5251" width="162.503" height="1.35532" rx="0.67766" stroke="#0AA5FF" stroke-width="1.35532" class="svg__stroke--default-cyan-03"></rect><path d="M118.251 50.2215H120.732C121.642 50.2215 122.379 50.9586 122.379 51.8678V99.3356C122.379 100.245 121.642 100.982 120.732 100.982H116.912H82.5513C82.5513 100.982 77.6423 100.982 77.6426 95.5711M118.251 50.2215V89.9373C118.251 89.9373 90.4163 89.9373 82.5513 89.9373C82.5513 89.9373 77.6428 90.1604 77.6426 95.5711M118.251 50.2215V46.0938H85.8739C81.3279 46.0938 77.6426 49.779 77.6426 54.3251V95.5711" stroke="#0B6AB7" stroke-width="1.25" class="svg__stroke--primary-blue-03"></path><path d="M98.7616 58.0586L106.301 61.1814L109.424 68.7206L106.301 76.2598L98.7616 79.3826L91.2224 76.2598L88.0996 68.7206L91.2224 61.1814L98.7616 58.0586Z" stroke="#FFD600" stroke-width="1.25" class="svg__stroke--secondary-yellow-03"></path><path d="M84.665 96.2986L106.396 96.2986" stroke="#00E0E0" stroke-width="1.25" class="svg__stroke--help-green-03"></path><path d="M108.205 96.2986L112.156 96.2986" stroke="#00E0E0" stroke-width="1.25" class="svg__stroke--help-green-03"></path><path d="M113.8 96.2986L115.117 96.2986" stroke="#00E0E0" stroke-width="1.25" class="svg__stroke--help-green-03"></path><path d="M94.3551 101.378L98.6348 104.292C98.6591 104.309 98.6921 104.291 98.6921 104.262V95.6572H90.0181V104.262C90.0181 104.291 90.051 104.309 90.0754 104.292L94.3551 101.378Z" fill="#0AA5FF" class="svg__fill--default-cyan-03"></path>', 11)
  ]));
}
const to = { render: eo }, ro = {
  name: "BlockCardWithIllustration",
  components: {
    SmartLink: ae,
    IllustrationBookBinding: f(() => import("./illustration-book-binding-CgZ-Lhg2.js")),
    IllustrationBorrowingBooks: f(() => import("./illustration-borrowing-books-B8qR2SUi.js")),
    IllustrationDatabases: f(() => import("./illustration-databases-D85yQ2d_.js")),
    IllustrationDigitizedResources: Ji,
    /* : defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-digitized-resources.svg'
      )), */
    IllustrationFindSpace: f(() => import("./illustration-find-space-Cp5L5B6y.js")),
    IllustrationRemoteAccess: f(() => import("./illustration-remote-access-B1gfhv8X.js")),
    IllustrationResearch: f(() => import("./illustration-research-BET8HhYT.js")),
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
      return pe(this.to);
    },
    parsedSvgName() {
      return `${this.iconName}`;
    },
    isExternalLink() {
      return !!this.to.includes("http");
    },
    parsedTextHorizontal() {
      return this.text ? rr(this.text, 250) : "";
    },
    parsedTextVertical() {
      return this.text ? rr(this.text) : "";
    }
  }
}, no = { class: "meta" }, ao = ["innerHTML"], so = ["innerHTML"], io = {
  key: 2,
  class: "text"
}, oo = {
  key: 3,
  class: "text"
};
function lo(e, t, r, n, a, i) {
  const l = at("SmartLink");
  return s(), o("li", {
    class: q(i.classes)
  }, [
    (s(), I(J(i.parsedSvgName), {
      class: "svg",
      "aria-hidden": "true"
    })),
    u("div", no, [
      r.category ? (s(), o("div", {
        key: 0,
        class: "category",
        innerHTML: r.category
      }, null, 8, ao)) : m("", !0),
      r.to ? (s(), I(l, {
        key: 1,
        to: r.to
      }, {
        default: Q(() => [
          u("h3", {
            class: "title",
            innerHTML: r.title
          }, null, 8, so)
        ]),
        _: 1
      }, 8, ["to"])) : m("", !0),
      r.isHorizontal ? (s(), o("div", io, P(i.parsedTextHorizontal), 1)) : (s(), o("div", oo, P(i.parsedTextVertical), 1))
    ])
  ], 2);
}
const Ho = /* @__PURE__ */ W(ro, [["render", lo], ["__scopeId", "data-v-9fd02525"]]), co = {
  width: "20",
  height: "21",
  viewBox: "0 0 20 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-ftva-calendar"
};
function uo(e, t) {
  return s(), o("svg", co, t[0] || (t[0] = [
    u("path", {
      d: "M7 0.5V2.5H13V0.5H15V2.5H19C19.2652 2.5 19.5196 2.60536 19.7071 2.79289C19.8946 2.98043 20 3.23478 20 3.5V19.5C20 19.7652 19.8946 20.0196 19.7071 20.2071C19.5196 20.3946 19.2652 20.5 19 20.5H1C0.734784 20.5 0.48043 20.3946 0.292893 20.2071C0.105357 20.0196 0 19.7652 0 19.5V3.5C0 3.23478 0.105357 2.98043 0.292893 2.79289C0.48043 2.60536 0.734784 2.5 1 2.5H5V0.5H7ZM18 10.5H2V18.5H18V10.5ZM5 4.5H2V8.5H18V4.5H15V6.5H13V4.5H7V6.5H5V4.5Z",
      fill: "#115DAF",
      class: "svg__fill--accent-blue"
    }, null, -1)
  ]));
}
const ho = { render: uo }, fo = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-ftva-clock"
};
function mo(e, t) {
  return s(), o("svg", fo, t[0] || (t[0] = [
    u("path", {
      d: "M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM10 4C10.2449 4.00003 10.4813 4.08996 10.6644 4.25272C10.8474 4.41547 10.9643 4.63975 10.993 4.883L11 5V9.586L13.707 12.293C13.8863 12.473 13.9905 12.7144 13.9982 12.9684C14.006 13.2223 13.9168 13.4697 13.7488 13.6603C13.5807 13.8508 13.3464 13.9703 13.0935 13.9944C12.8406 14.0185 12.588 13.9454 12.387 13.79L12.293 13.707L9.293 10.707C9.13758 10.5514 9.03776 10.349 9.009 10.131L9 10V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4Z",
      fill: "#115DAF",
      class: "svg__fill--accent-blue"
    }, null, -1)
  ]));
}
const go = { render: mo }, vo = {
  width: "16",
  height: "22",
  viewBox: "0 0 16 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-ftva-location"
};
function yo(e, t) {
  return s(), o("svg", vo, t[0] || (t[0] = [
    u("path", {
      d: "M8.00005 10.45C7.2707 10.45 6.57123 10.1603 6.05551 9.64454C5.53978 9.12882 5.25005 8.42935 5.25005 7.7C5.25005 6.97065 5.53978 6.27118 6.05551 5.75546C6.57123 5.23973 7.2707 4.95 8.00005 4.95C8.72939 4.95 9.42887 5.23973 9.94459 5.75546C10.4603 6.27118 10.75 6.97065 10.75 7.7C10.75 8.06114 10.6789 8.41873 10.5407 8.75238C10.4025 9.08603 10.2 9.38918 9.94459 9.64454C9.68923 9.89991 9.38607 10.1025 9.05243 10.2407C8.71878 10.3789 8.36118 10.45 8.00005 10.45ZM8.00005 0C5.95788 0 3.99936 0.811248 2.55533 2.25528C1.1113 3.69931 0.300049 5.65783 0.300049 7.7C0.300049 13.475 8.00005 22 8.00005 22C8.00005 22 15.7 13.475 15.7 7.7C15.7 5.65783 14.8888 3.69931 13.4448 2.25528C12.0007 0.811248 10.0422 0 8.00005 0Z",
      fill: "#115DAF",
      class: "svg__fill--accent-blue"
    }, null, -1)
  ]));
}
const po = { render: yo }, ko = { class: "event-list date" }, bo = {
  key: 0,
  class: "event-list time"
}, wo = {
  key: 1,
  class: "event-list location"
}, _o = { key: 0 }, So = { key: 1 }, Mo = {
  key: 2,
  class: "locations-wrapper"
}, Lo = /* @__PURE__ */ ee({
  __name: "BlockEventDetail",
  props: {
    startDate: {
      type: String,
      required: !1
    },
    endDate: {
      type: String,
      required: !1
    },
    // Implied this is the start time
    time: {
      type: String,
      required: !1
    },
    ongoing: {
      type: Boolean,
      default: !1
    },
    locations: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = it(), r = y(() => ["block-event-detail", (t == null ? void 0 : t.value) || ""]), n = y(() => {
      switch (t == null ? void 0 : t.value) {
        case "ftva":
          return {
            multiLocationMsgDisplay: !0
          };
        default:
          return {
            multiLocationMsgDisplay: !1
          };
      }
    }), a = y(() => (t == null ? void 0 : t.value) === "ftva" ? "_blank" : ""), i = y(() => e.ongoing ? "Ongoing" : e.endDate ? ue(e.startDate, e.endDate, "shortWithYear") : e.startDate ? ue(e.startDate, e.startDate) : null);
    return (l, c) => {
      var d, h;
      return s(), o("div", {
        class: q(r.value)
      }, [
        u("div", ko, [
          u("span", null, [
            e.startDate ? (s(), I(x(ho), {
              key: 0,
              class: "row-icon"
            })) : m("", !0),
            B(" " + P(i.value), 1)
          ])
        ]),
        e.time ? (s(), o("div", bo, [
          u("span", null, [
            H(x(go), { class: "row-icon" }),
            B(" " + P(x(ye)(e.time, e.time)), 1)
          ])
        ])) : m("", !0),
        e.locations && e.locations.length > 0 ? (s(), o("div", wo, [
          u("span", null, [
            H(x(po), { class: "row-icon" }),
            (d = n.value) != null && d.multiLocationMsgDisplay && e.locations.length > 1 ? (s(), o("span", _o, " Multiple Locations ")) : (h = n.value) != null && h.multiLocationMsgDisplay && e.locations.length === 1 ? (s(), o("span", So, [
              H(ae, {
                to: e.locations[0].publicUrl,
                "link-target": a.value
              }, {
                default: Q(() => [
                  B(P(e.locations[0].title), 1)
                ]),
                _: 1
              }, 8, ["to", "link-target"])
            ])) : (s(), o("span", Mo, [
              (s(!0), o(N, null, j(e.locations, (v, b) => (s(), o("span", {
                key: v.title,
                class: "location-link"
              }, [
                H(ae, {
                  to: v.url,
                  "link-target": a.value
                }, {
                  default: Q(() => [
                    B(P(v.title), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "link-target"]),
                B(" " + P(b < e.locations.length - 1 ? ", " : ""), 1)
              ]))), 128))
            ]))
          ])
        ])) : m("", !0),
        Z(l.$slots, "default", {}, void 0, !0)
      ], 2);
    };
  }
}), Ro = /* @__PURE__ */ W(Lo, [["__scopeId", "data-v-0d26c83c"]]), xo = {
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
}, Fo = { class: "alphabetical-browse-by" }, To = { class: "alphabet-list" }, Co = ["onClick"];
function $o(e, t, r, n, a, i) {
  return s(), o("div", Fo, [
    t[0] || (t[0] = u("h2", { class: "title" }, " Browse by Last Name ", -1)),
    u("ul", To, [
      (s(!0), o(N, null, j(i.parsedAlphabet, (l) => (s(), o("li", {
        key: l.letter,
        class: q(l.class),
        onClick: (c) => i.handleSelectedLetter(l)
      }, [
        u("a", null, P(l.letter), 1)
      ], 10, Co))), 128))
    ])
  ]);
}
const qo = /* @__PURE__ */ W(xo, [["render", $o], ["__scopeId", "data-v-a5f902ae"]]);
export {
  qo as AlphabeticalBrowseBy,
  Oo as BannerFeatured,
  Do as BannerHeader,
  Po as BannerText,
  Eo as BlockAmenities,
  Ho as BlockCardWithIllustration,
  Ro as BlockEventDetail,
  ir as ButtonLink,
  or as IconWithLink,
  cr as ResponsiveImage,
  ur as ResponsiveVideo,
  dr as RichText,
  ae as SmartLink
};
