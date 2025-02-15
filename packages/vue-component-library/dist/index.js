import { createElementBlock as i, openBlock as s, createElementVNode as l, defineAsyncComponent as u, inject as ne, ref as W, computed as f, watch as De, createBlock as $, unref as _, withModifiers as Me, normalizeClass as H, createVNode as D, createCommentVNode as c, createTextVNode as Q, withDirectives as q, vModelRadio as fe, vModelText as le, mergeProps as nt, Fragment as N, renderList as E, toDisplayString as O, vModelCheckbox as at, vModelSelect as rt, resolveComponent as Oe, withCtx as ae, renderSlot as z, resolveDynamicComponent as K, defineComponent as ee, normalizeStyle as ce, reactive as st, onMounted as it, createStaticVNode as Ie, vShow as _e } from "vue";
const ot = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-close"
};
function We(e, t) {
  return s(), i("svg", ot, t[0] || (t[0] = [
    l("circle", {
      cx: "16",
      cy: "15.8645",
      r: "12",
      fill: "#F2F2F2",
      class: "svg__fill--secondary-grey-01"
    }, null, -1),
    l("path", {
      d: "M22 21.8088 10 9.91943",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    l("path", {
      d: "m10.0497 21.8645 11.9017-12",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1)
  ]));
}
const ge = { render: We }, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ge,
  render: We
}, Symbol.toStringTag, { value: "Module" })), A = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, ct = {
  key: 0,
  class: "success-message"
}, dt = {
  key: 1,
  id: "app",
  method: "post",
  class: "form"
}, ut = { class: "formTitleWrapper" }, ht = {
  key: 0,
  class: "form-errors"
}, ft = { key: 1 }, mt = {
  key: 2,
  class: "input-wrapper input-radio"
}, gt = { for: "in-person" }, vt = { for: "online" }, yt = { class: "input-wrapper" }, kt = { class: "input-container" }, pt = {
  key: 3,
  class: "input-wrapper"
}, wt = { for: "email" }, bt = { key: 0 }, St = { key: 1 }, Mt = ["required"], _t = ["for"], Ft = {
  key: 0,
  class: "required"
}, Lt = {
  key: 1,
  class: "textareaWrapper"
}, xt = ["for"], $t = {
  key: 0,
  class: "required"
}, Tt = ["onUpdate:modelValue"], Ct = {
  key: 2,
  class: "radio-wrapper"
}, Pt = ["for"], Dt = ["id", "onUpdate:modelValue", "value", "name"], Ot = {
  key: 3,
  class: "checkbox-wrapper"
}, It = ["id", "onUpdate:modelValue", "true-value", "value"], Wt = ["for"], Ht = ["id", "onUpdate:modelValue", "name"], Bt = ["value"], Nt = {
  __name: "BlockForm",
  setup(e) {
    const t = u(() => Promise.resolve().then(() => ke)), n = ne("eventId"), a = ne("blockFormData"), r = ne("registrationType"), o = ne("libcalWaitlist"), d = ne("libcalEndpoint");
    console.log("BlockForm eventId", n.value), console.log("BlockForm blockFormData", a.value), console.log("BlockForm registrationType", r.value), console.log("BlockForm libcalWaitlist", o.value), console.log("BlockForm libcalEndpoint", d);
    const h = W([]), v = W(""), w = W(""), p = W(""), M = W({}), S = W({}), F = W(null), g = W(!1), y = W(!1), T = W({}), j = W(!1), R = W(""), C = f(() => a.value.questions ? a.value.questions.map((P) => (P.type === "string" || P.type === "radio" || P.type === "dropdown" ? S.value[P.id] = "" : S.value[P.id] = [], M.value[P.id] = P.required, {
      ...P,
      classes: `input-${P.type}`
    })) : []);
    function I() {
      console.log("registrationTypeInput", R.value, r.value && r === "both");
      const P = {
        form: {
          first_name: v.value,
          last_name: w.value,
          email: p.value,
          questions: []
        },
        registration_type: r && r.value !== "both" && r.value !== "" ? r.value : r.value && r.value === "both" ? R.value : "",
        is_waitlist: o.value && o.value !== "" ? o.value : "0"
      };
      P.form.questions = a.value.questions.map((m) => ({
        id: m.id,
        answer: S.value[m.id]
      })), console.log("data submitting", JSON.stringify(P));
      let k = "";
      console.log("eventId", n), d ? k = `${d}api/1.1/events/${n.value}/register` : k = `${process.env.VUE_APP_CALENDAR_LIBRARY_URL}${n}/register`, fetch(k, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(P)
      }).then(() => {
        y.value = !0, T.value = {
          code: "success",
          text: "One seat is sent to LibCal to be registered or will be on wait list"
        };
      }).catch((m) => {
        console.error(m), y.value = !0, T.value = {
          code: "error",
          text: m
        };
      });
    }
    function B() {
      let P = !1, k = !1, m = !1;
      v.value && w.value && (P = !0), a.value.emailMethod.status === "required" && p.value && (k = !0), r && r.value === "both" && R.value === "" ? m = !1 : (r && r.value, m = !0), h.value = [], P || h.value.push("Full Name 1 required."), k || h.value.push("Email 2 required."), m || h.value.push("Registration Type 3 required.");
      for (const x of a.value.questions)
        M.value[x.id] && !S.value[x.id] ? x.type === "string" ? h.value.push(
          `${a.value.questions.label} 4a required.`
        ) : h.value.push(`${x.label} 4b required.`) : M.value[x.id] && x.type === "checkbox" && S.value[x.id].length === 0 && h.value.push(`${x.label} 4c required.`);
      h.value.length === 0 ? I() : window.scrollTo(0, 0);
    }
    function Z() {
      j.value = !0;
    }
    function b() {
      j.value = !1;
    }
    function U() {
      clearTimeout(F.value), g.value = !1, j.value = !1;
    }
    return De(T, () => {
      g.value = !0, F.value = setTimeout(U, 113e3);
    }), (P, k) => j.value ? (s(), i("div", {
      key: 1,
      class: H(["block-form", {
        "form-error": h.value.length,
        "form-success": g.value
      }])
    }, [
      g.value ? (s(), i("div", ct, [
        k[8] || (k[8] = l("h3", null, "Registration complete", -1)),
        k[9] || (k[9] = l("p", null, "Please check your email to view your booking.", -1)),
        l("button", {
          type: "button",
          class: "notification--remove",
          onClick: k[1] || (k[1] = (m) => U())
        }, [
          D(_(ge), { class: "svg-glyph-close" })
        ])
      ])) : (s(), i("form", dt, [
        l("div", ut, [
          k[10] || (k[10] = l("h3", { class: "formTitle" }, " Registration ", -1)),
          l("button", {
            type: "button",
            onClick: k[2] || (k[2] = (m) => b())
          }, [
            D(_(ge), { class: "svg-glyph-close" })
          ])
        ]),
        h.value.length ? (s(), i("div", ht, k[11] || (k[11] = [
          l("p", null, " Please complete the required fields to complete registration ", -1)
        ]))) : c("", !0),
        h.value.length ? (s(), i("br", ft)) : c("", !0),
        k[18] || (k[18] = l("div", { class: "registrationInfo" }, [
          l("p", null, "Registration is required for this event.")
        ], -1)),
        _(r) === "both" ? (s(), i("div", mt, [
          k[14] || (k[14] = l("legend", null, [
            Q(" Registration Type "),
            l("span", { class: "required" }, "(required)")
          ], -1)),
          l("label", gt, [
            q(l("input", {
              id: "in-person",
              "onUpdate:modelValue": k[3] || (k[3] = (m) => R.value = m),
              type: "radio",
              value: "in-person",
              required: ""
            }, null, 512), [
              [fe, R.value]
            ]),
            k[12] || (k[12] = Q("in-person"))
          ]),
          l("label", vt, [
            q(l("input", {
              id: "online",
              "onUpdate:modelValue": k[4] || (k[4] = (m) => R.value = m),
              type: "radio",
              value: "online"
            }, null, 512), [
              [fe, R.value]
            ]),
            k[13] || (k[13] = Q(" online"))
          ])
        ])) : c("", !0),
        l("div", yt, [
          k[15] || (k[15] = l("label", null, [
            Q("Full Name "),
            l("span", { class: "required" }, "(required)")
          ], -1)),
          l("div", kt, [
            q(l("input", {
              id: "firstName",
              "onUpdate:modelValue": k[5] || (k[5] = (m) => v.value = m),
              type: "text",
              name: "firstName",
              required: "",
              placeholder: "First Name"
            }, null, 512), [
              [le, v.value]
            ]),
            q(l("input", {
              id: "lastName",
              "onUpdate:modelValue": k[6] || (k[6] = (m) => w.value = m),
              type: "text",
              name: "lastName",
              required: "",
              placeholder: "Last Name"
            }, null, 512), [
              [le, w.value]
            ])
          ])
        ]),
        _(a).emailMethod ? (s(), i("div", pt, [
          l("label", wt, [
            _(a).emailMethod.status === "required" ? (s(), i("span", bt, k[16] || (k[16] = [
              Q(" Email "),
              l("span", { class: "required" }, "(required)", -1)
            ]))) : (s(), i("span", St, "Email"))
          ]),
          q(l("input", nt({
            id: "email",
            "onUpdate:modelValue": k[7] || (k[7] = (m) => p.value = m),
            type: "email",
            name: "email",
            required: _(a).emailMethod.status
          }, {}), null, 16, Mt), [
            [le, p.value]
          ])
        ])) : c("", !0),
        (s(!0), i(N, null, E(C.value, (m) => (s(), i("div", {
          key: m.id,
          class: "input-wrapper parsedQuestionsLabelWrapper"
        }, [
          m.type !== "string" ? (s(), i("label", {
            key: 0,
            for: m.id,
            class: H(m.required ? "questionRequired" : "")
          }, [
            Q(O(m.label) + " ", 1),
            m.required ? (s(), i("span", Ft, " (required) ")) : c("", !0)
          ], 10, _t)) : c("", !0),
          m.type === "string" ? (s(), i("div", Lt, [
            l("label", {
              for: m.id,
              class: H(m.required ? "questionRequired" : "")
            }, [
              Q(O(m.label) + " ", 1),
              m.required ? (s(), i("span", $t, "(required)")) : c("", !0)
            ], 10, xt),
            q(l("textarea", {
              "onUpdate:modelValue": (x) => S.value[m.id] = x,
              placeholder: "Add multiple lines"
            }, null, 8, Tt), [
              [le, S.value[m.id]]
            ])
          ])) : c("", !0),
          m.type === "radio" ? (s(), i("div", Ct, [
            (s(!0), i(N, null, E(m.options, (x, re) => (s(), i("div", {
              key: re,
              class: "radioWrapper"
            }, [
              l("label", { for: x }, [
                q(l("input", {
                  id: x,
                  "onUpdate:modelValue": (he) => S.value[m.id] = he,
                  type: "radio",
                  value: x,
                  name: m.id
                }, null, 8, Dt), [
                  [fe, S.value[m.id]]
                ]),
                Q(" " + O(x), 1)
              ], 8, Pt)
            ]))), 128))
          ])) : c("", !0),
          m.type === "checkbox" ? (s(), i("div", Ot, [
            (s(!0), i(N, null, E(m.options, (x, re) => (s(), i("div", {
              key: re,
              class: "checkboxWrapper"
            }, [
              q(l("input", {
                id: x,
                "onUpdate:modelValue": (he) => S.value[m.id] = he,
                type: "checkbox",
                "true-value": x,
                value: x
              }, null, 8, It), [
                [at, S.value[m.id]]
              ]),
              l("label", { for: x }, O(x), 9, Wt)
            ]))), 128))
          ])) : c("", !0),
          m.type === "dropdown" ? q((s(), i("select", {
            key: 4,
            id: m.id,
            "onUpdate:modelValue": (x) => S.value[m.id] = x,
            name: m.id,
            class: H(["input-dropdown", m.classes])
          }, [
            k[17] || (k[17] = l("option", {
              disabled: "",
              value: ""
            }, " Please select one ", -1)),
            (s(!0), i(N, null, E(m.options, (x, re) => (s(), i("option", {
              key: re,
              value: x
            }, O(x), 9, Bt))), 128))
          ], 10, Ht)), [
            [rt, S.value[m.id]]
          ]) : c("", !0)
        ]))), 128)),
        D(_(t), {
          type: "submit",
          label: "Register",
          "icon-name": "none",
          "is-secondary": !0,
          onClick: Me(B, ["prevent"])
        })
      ]))
    ], 2)) : (s(), $(_(t), {
      key: 0,
      label: "Register",
      "icon-name": "none",
      "is-secondary": !0,
      class: "register-button",
      onClick: k[0] || (k[0] = Me((m) => Z(), ["prevent"]))
    }));
  }
}, ve = /* @__PURE__ */ A(Nt, [["__scopeId", "data-v-201d7bab"]]);
function He() {
  return ne("theme");
}
function Be(e = "") {
  let t = !1;
  return (e == null || String(e).indexOf("/") === 0 || !e.includes(".") && e.length !== 0) && (t = !0), t;
}
const Et = ["1", "_blank", "blank"], Yt = ["", null];
function At(e = "", t = "") {
  let n = "";
  return Et.includes(e) || Yt.includes(e) && !Be(t) ? n = "_blank" : n = "", n;
}
function Rt(e = "") {
  let t = !1;
  switch (!0) {
    case String(e).indexOf("/") === 0:
      t = !0;
      break;
  }
  return t;
}
const qt = {
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
      return At(this.linkTarget, this.to);
    },
    isRelative() {
      return !!Rt(this.to);
    },
    parsedTo() {
      return this.isRelative && !this.isDownload && !this.parsedTarget ? this.to !== "/" && !this.to.endsWith("/") && !this.to.includes("q=") && !this.to.includes("&filters=") ? `${this.to}/` : this.to : this.to;
    }
  }
}, Vt = ["href"], jt = ["href", "target"], Qt = {
  key: 3,
  class: "smart-link is-link"
};
function zt(e, t, n, a, r, o) {
  const d = Oe("router-link");
  return o.isRelative && !n.isDownload && !o.parsedTarget ? (s(), $(d, {
    key: 0,
    class: "smart-link is-router-link",
    to: o.parsedTo
  }, {
    default: ae(() => [
      z(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["to"])) : n.isDownload ? (s(), i("a", {
    key: 1,
    href: n.to,
    class: "smart-link is-link",
    download: ""
  }, [
    z(e.$slots, "default", {}, void 0, !0)
  ], 8, Vt)) : n.to ? (s(), i("a", {
    key: 2,
    href: n.to,
    target: o.parsedTarget,
    class: "smart-link is-link"
  }, [
    z(e.$slots, "default", {}, void 0, !0)
  ], 8, jt)) : (s(), i("button", Qt, [
    z(e.$slots, "default", {}, void 0, !0)
  ]));
}
const ye = /* @__PURE__ */ A(qt, [["render", zt], ["__scopeId", "data-v-57dec64c"]]), Ut = { class: "label" }, Xt = { class: "hover" }, Gt = { class: "label" }, Zt = {
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
    const t = e, n = u(
      () => import("./icon-external-link-WeOL_8ZY.js")
    ), a = u(
      () => import("./icon-arrow-right-wLk03dY8.js")
    ), r = u(
      () => import("./icon-download-Dp9VXiET.js")
    ), o = u(
      () => Promise.resolve().then(() => lt)
    ), d = He(), h = f(() => [
      "button-link",
      (d == null ? void 0 : d.value) || "",
      t.isSecondary ? "is-secondary" : t.isTertiary ? "is-tertiary" : t.isQuaternary ? "is-quaternary" : ""
    ]), v = f(() => {
      switch (!0) {
        case t.isDownload:
          return r;
        case t.iconName === "none":
          return "";
        case Be(t.to):
          return a;
        case (t.linkTarget === "_blank" || t.iconName === "svg-external-link"):
          return n;
        case t.iconName === "icon-close":
          return o;
        // case props.iconName:
        //     return props.iconName
        default:
          return n;
      }
    });
    return (w, p) => (s(), $(ye, {
      to: e.to,
      class: H(h.value),
      "is-download": e.isDownload,
      "link-target": e.linkTarget
    }, {
      default: ae(() => [
        l("span", Ut, O(e.label), 1),
        z(w.$slots, "default", {}, void 0, !0),
        v.value !== "" ? (s(), $(K(v.value), {
          key: 0,
          class: "arrow",
          "aria-hidden": "true"
        })) : c("", !0),
        l("div", Xt, [
          l("span", Gt, O(e.label), 1),
          v.value !== "" ? (s(), $(K(v.value), {
            key: 0,
            class: "arrow",
            "aria-hidden": "true"
          })) : c("", !0)
        ])
      ]),
      _: 3
    }, 8, ["to", "class", "is-download", "link-target"]));
  }
}, Ne = /* @__PURE__ */ A(Zt, [["__scopeId", "data-v-2c45c183"]]), ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" })), Jt = {
  name: "IconWithLink",
  components: {
    SmartLink: ye,
    SvgIconConsultation: u(
      () => import("./icon-chat-DCvwPwHu.js")
    ),
    SvgIconList: u(
      () => import("./icon-list-CvgvlR7v.js")
    ),
    SvgIconLocation: u(
      () => import("./icon-location-DNog__Cl.js")
    ),
    SvgIconPhone: u(
      () => import("./icon-phone-DPv-PoqA.js")
    ),
    SvgIconSearch: u(
      () => import("./icon-search-iss6-A2x.js")
    ),
    SvgIconVirtual: u(
      () => import("./icon-virtual-CwZieS3s.js")
    ),
    SvgIconHeadphones: u(
      () => import("./icon-headphones-Vk0iXmnu.js")
    ),
    SvgIconVideo: u(
      () => import("./icon-video-Tda9BGRR.js")
    ),
    SvgIconImageStack: u(
      () => import("./icon-image-stack-B7_3hmGM.js")
    ),
    SvgIconMoney: u(
      () => import("./icon-money-BxPRObPA.js")
    ),
    SvgIconMessage: u(
      () => import("./icon-message-CyHSPUb-.js")
    ),
    SvgIconPlay: u(
      () => import("./icon-play-BaMxYNFG.js")
    ),
    SvgIconPlayFilled: u(
      () => import("./icon-play-filled-Dvcf_yQh.js")
    ),
    SvgIconEye: u(
      () => import("./icon-eye-L7brvvQ3.js")
    ),
    SvgIconCheck: u(
      () => import("./icon-check-CKGDA7ua.js")
    ),
    SvgIconEmail: u(
      () => import("./icon-email-d9JGcdKa.js")
    ),
    SvgIconCard: u(
      () => import("./icon-card-BiKDOVdQ.js")
    ),
    SvgIconCalendar: u(
      () => import("./icon-calendar-BFfsVZ3B.js")
    ),
    SvgIconLaptop: u(
      () => import("./icon-laptop-Bmg8PSn7.js")
    ),
    SvgIconBook: u(
      () => import("./icon-book-Dhs3bbZ0.js")
    ),
    SvgIconLocker: u(
      () => import("./icon-locker-BBQPsbYg.js")
    ),
    SvgIconPerson: u(
      () => import("./icon-person-BPUoRkt6.js")
    ),
    SvgIconAccessible: u(
      () => import("./icon-accessible-C8Gup1rK.js")
    ),
    SvgIconClock: u(
      () => import("./icon-clock-CG3EE-5W.js")
    ),
    SvgIconChair: u(
      () => import("./icon-chair-D8fW8Dnx.js")
    ),
    SvgIconLight: u(
      () => import("./icon-light-wkkuRssP.js")
    ),
    SvgIconLocationFilled: u(
      () => import("./icon-location-filled-Cyf_QfPI.js")
    ),
    SvgIconAlert: u(
      () => import("./icon-alert-C-nJ0RMX.js")
    ),
    SvgIconShareEmail: u(
      () => import("./icon-share-email-ds0LMlnf.js")
    ),
    SvgIconSharePrinter: u(
      () => Promise.resolve().then(() => Br)
    ),
    SvgIconShareFacebook: u(
      () => import("./icon-share-facebook-jNsnyfWc.js")
    ),
    SvgIconShareInstagram: u(
      () => import("./icon-share-instagram-CHpDcj4d.js")
    ),
    SvgIconShareLinkedin: u(
      () => import("./icon-share-linkedin-D_WCf0Fz.js")
    ),
    SvgIconShareTwitter: u(
      () => import("./icon-share-twitter-CS2kovPG.js")
    ),
    SvgIconShareWhatsapp: u(
      () => import("./icon-share-whatsapp-B2hhPPEt.js")
    ),
    // FTVA Icons
    SvgIconFtvaAppleinc: u(
      () => import("./icon-ftva-appleinc-D6O1BYI_.js")
    ),
    SvgIconFtvaGcal: u(
      () => import("./icon-ftva-gcal-C7UpU-sa.js")
    ),
    SvgIconFtvaOutlook: u(
      () => import("./icon-ftva-outlook-D01ntAYf.js")
    ),
    SvgIconFtvaDownload: u(
      () => import("./icon-ftva-download-CfgJu8GR.js")
    ),
    SvgIconFtvaShare: u(
      () => import("./icon-ftva-share-bwURDOcD.js")
    ),
    SvgIconFtvaSocialConfirm: u(
      () => import("./icon-ftva-social_confirm-iljw2AFe.js")
    ),
    SvgIconFtvaSocialEmail: u(
      () => import("./icon-ftva-social_email-C1L_bljr.js")
    ),
    SvgIconFtvaSocialFacebook: u(
      () => import("./icon-ftva-social_facebook-BgnF7yg7.js")
    ),
    SvgIconFtvaSocialLink: u(
      () => import("./icon-ftva-social_link-BZIDORpF.js")
    ),
    SvgIconFtvaSocialX: u(
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
}, Kt = { class: "icon-with-link" }, en = ["textContent"], tn = {
  key: 1,
  class: "icon-with-link-container"
}, nn = ["textContent"];
function an(e, t, n, a, r, o) {
  const d = Oe("SmartLink");
  return s(), i("div", Kt, [
    n.to ? (s(), $(d, {
      key: 0,
      to: n.to,
      class: "icon-with-link-container link"
    }, {
      default: ae(() => [
        (s(), $(K(n.iconName), {
          class: "icon",
          "aria-hidden": "true"
        })),
        l("div", {
          class: "text",
          textContent: O(n.text)
        }, null, 8, en)
      ]),
      _: 1
    }, 8, ["to"])) : (s(), i("div", tn, [
      (s(), $(K(n.iconName), {
        class: "icon",
        "aria-hidden": "true"
      })),
      l("div", {
        class: "text",
        textContent: O(n.text)
      }, null, 8, nn)
    ]))
  ]);
}
const Ee = /* @__PURE__ */ A(Jt, [["render", an], ["__scopeId", "data-v-065bd989"]]), Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ee
}, Symbol.toStringTag, { value: "Module" })), rn = ["src", "height", "width", "alt", "srcset", "sizes", "object-fit"], sn = ["innerHTML"], on = {
  key: 1,
  class: "credit"
}, ln = { class: "credit-text" }, cn = /* @__PURE__ */ ee({
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
    const t = e, n = W(!1), a = W(!1);
    function r() {
      n.value = !0;
    }
    function o() {
      a.value = !0;
    }
    const d = f(() => {
      let p = "";
      return t.media.focalPoint && t.media.focalPoint.length > 0 && (p = `object-position:${t.media.focalPoint.map((S) => `${S * 100}%`).join(" ")}`), p;
    }), h = f(() => {
      const p = t.media.height || t.height, M = t.media.width || t.width;
      return t.aspectRatio || p / M * 100;
    }), v = f(() => ({
      paddingBottom: `${h.value}%`
    })), w = f(() => [
      "responsive-image",
      `object-fit-${t.objectFit}`,
      { "has-loaded": n },
      { "has-errored": a }
    ]);
    return (p, M) => t.media && t.media.src ? (s(), i("figure", {
      key: 0,
      class: H(w.value)
    }, [
      l("img", {
        src: t.media.src || t.src,
        height: t.media.width || t.width,
        width: t.media.height || t.height,
        alt: t.media.alt || t.alt,
        srcset: t.media.srcset || t.srcset,
        sizes: t.media.sizes || t.sizes,
        "object-fit": t.objectFit,
        style: ce(d.value),
        class: "media",
        onLoad: r,
        onError: o
      }, null, 44, rn),
      t.media.caption || t.caption ? (s(), i("figcaption", {
        key: 0,
        class: "caption",
        innerHTML: t.media.caption || t.caption
      }, null, 8, sn)) : c("", !0),
      l("div", {
        class: "sizer",
        style: ce(v.value)
      }, null, 4),
      z(p.$slots, "default", {}, void 0, !0),
      p.$slots.credit ? (s(), i("div", on, [
        l("div", ln, [
          z(p.$slots, "credit", {}, void 0, !0)
        ])
      ])) : c("", !0)
    ], 2)) : c("", !0);
  }
}), Ae = /* @__PURE__ */ A(cn, [["__scopeId", "data-v-c5a3f593"]]), dn = ["src", "alt", "controls", "autoplay", "muted", "loop", "playsinline"], un = /* @__PURE__ */ ee({
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
    const n = e, a = t, r = W(null), o = st({
      video: !1
    }), d = W({
      video: !1
    }), h = f(() => Object.values(d.value).includes(!0)), v = f(() => Object.values(o).every(Boolean)), w = f(() => n.media.src), p = f(() => {
      const b = n.media.height;
      return b && typeof b == "string" ? Number.parseInt(b) : b;
    }), M = f(() => {
      const b = n.media.width;
      return b && typeof b == "string" ? Number.parseInt(b) : b;
    }), S = f(() => {
      let b = "landscape";
      switch (!0) {
        case p.value > M.value:
          b = "portrait";
          break;
        case p.value === M.value:
          b = "square";
          break;
      }
      return b;
    }), F = f(() => [
      "responsive-video",
      `mode-${n.mode}`,
      { "has-loaded": v.value },
      { "has-error": h.value },
      { "has-video-error": d.value.video },
      `is-orientation-${S.value}`,
      `object-fit-${n.objectFit}`
    ]), g = f(() => {
      let b = n.aspectRatio || p.value / M.value * 100;
      return b || (b = 0), b;
    }), y = f(() => n.media.focalPoint.length > 0 ? {
      x: n.media.focalPoint[0],
      y: n.media.focalPoint[1]
    } : {
      x: "0.5",
      y: "0.5"
    }), T = f(() => n.media.alt), j = f(() => {
      const b = {};
      return n.mode === "intrinsic-ratio" && (b.paddingBottom = `${g.value}%`), b;
    }), R = f(() => {
      const b = {};
      return y.value.x !== "" && y.value.y !== "" && (b.objectPosition = `${y.value.x}% ${y.value.y}%`), b;
    });
    De(w, (b) => {
      b && (o.video = !1, d.value.video = !1);
    }), it(() => {
      w.value && (o.video = r.value.readyState >= 3);
    });
    function C(b) {
      o[b] = !0, a("loaded", b), a(`loaded-${b}`);
    }
    function I(b) {
      d.value[b] = !0, a("error", b), a(`error-${b}`);
    }
    function B(b) {
      a("ended", b);
    }
    function Z() {
      a("playing");
    }
    return (b, U) => (s(), i("figure", {
      class: H(F.value)
    }, [
      w.value ? (s(), i("video", {
        key: 0,
        ref_key: "videoRef",
        ref: r,
        class: "media media-video",
        src: w.value,
        alt: T.value,
        style: ce(R.value),
        controls: e.controls,
        autoplay: e.autoplay,
        muted: e.muted,
        loop: e.loop,
        playsinline: e.playsinline,
        onLoadeddata: U[0] || (U[0] = (P) => C("video")),
        onError: U[1] || (U[1] = (P) => I("video")),
        onEnded: B,
        onPlaying: Z
      }, null, 44, dn)) : c("", !0),
      l("div", {
        class: "sizer",
        style: ce(j.value)
      }, null, 4),
      U[2] || (U[2] = l("div", { class: "background-color" }, null, -1)),
      z(b.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Re = /* @__PURE__ */ A(un, [["__scopeId", "data-v-b034df33"]]);
function hn(e = "") {
  if (e == null)
    return e;
  const t = /<a\s[^>]*?target=["'_blank][^>]*>.*?<\/a>/g;
  return e.replace(t, (n) => `${n.replace("</a>", "")}<span class="visually-hidden">(opens in a new tab)</span></a>`);
}
function fn(e = "") {
  return e == null ? e : e.includes("https://test-craft.library.ucla.edu") ? e.replaceAll("https://test-craft.library.ucla.edu", "") : e.includes("https://stage-craft.library.ucla.edu") ? e.replaceAll("https://stage-craft.library.ucla.edu", "") : e.replaceAll("https://craft.library.ucla.edu", "");
}
const mn = ["innerHTML"], gn = /* @__PURE__ */ ee({
  __name: "RichText",
  props: {
    richTextContent: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, n = He(), a = f(() => ["rich-text", (n == null ? void 0 : n.value) || ""]), r = f(() => {
      const o = fn(t.richTextContent);
      return hn(o);
    });
    return (o, d) => (s(), i("div", {
      class: H(a.value)
    }, [
      l("div", {
        class: "parsed-content",
        innerHTML: r.value
      }, null, 8, mn),
      z(o.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ A(gn, [["__scopeId", "data-v-7e21c6ae"]]), Ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe
}, Symbol.toStringTag, { value: "Module" }));
function pe(e = "") {
  return e === null || /^https?:\/\//.test(e) || e.startsWith("/") || (e = `/${e}`), e;
}
const vn = {
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
}, yn = (e, t, n) => {
  let a;
  const r = vn[e];
  return typeof r == "string" ? a = r : t === 1 ? a = r.one : a = r.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + a : a + " ago" : a;
};
function me(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const kn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, pn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, wn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, bn = {
  date: me({
    formats: kn,
    defaultWidth: "full"
  }),
  time: me({
    formats: pn,
    defaultWidth: "full"
  }),
  dateTime: me({
    formats: wn,
    defaultWidth: "full"
  })
}, Sn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Mn = (e, t, n, a) => Sn[e];
function se(e) {
  return (t, n) => {
    const a = n != null && n.context ? String(n.context) : "standalone";
    let r;
    if (a === "formatting" && e.formattingValues) {
      const d = e.defaultFormattingWidth || e.defaultWidth, h = n != null && n.width ? String(n.width) : d;
      r = e.formattingValues[h] || e.formattingValues[d];
    } else {
      const d = e.defaultWidth, h = n != null && n.width ? String(n.width) : e.defaultWidth;
      r = e.values[h] || e.values[d];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return r[o];
  };
}
const _n = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Fn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ln = {
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
}, xn = {
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
}, $n = {
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
}, Tn = {
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
}, Cn = (e, t) => {
  const n = Number(e), a = n % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Pn = {
  ordinalNumber: Cn,
  era: se({
    values: _n,
    defaultWidth: "wide"
  }),
  quarter: se({
    values: Fn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: se({
    values: Ln,
    defaultWidth: "wide"
  }),
  day: se({
    values: xn,
    defaultWidth: "wide"
  }),
  dayPeriod: se({
    values: $n,
    defaultWidth: "wide",
    formattingValues: Tn,
    defaultFormattingWidth: "wide"
  })
};
function ie(e) {
  return (t, n = {}) => {
    const a = n.width, r = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], o = t.match(r);
    if (!o)
      return null;
    const d = o[0], h = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], v = Array.isArray(h) ? On(h, (M) => M.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      Dn(h, (M) => M.test(d))
    );
    let w;
    w = e.valueCallback ? e.valueCallback(v) : v, w = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(w)
    ) : w;
    const p = t.slice(d.length);
    return { value: w, rest: p };
  };
}
function Dn(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function On(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function In(e) {
  return (t, n = {}) => {
    const a = t.match(e.matchPattern);
    if (!a) return null;
    const r = a[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let d = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    d = n.valueCallback ? n.valueCallback(d) : d;
    const h = t.slice(r.length);
    return { value: d, rest: h };
  };
}
const Wn = /^(\d+)(th|st|nd|rd)?/i, Hn = /\d+/i, Bn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Nn = {
  any: [/^b/i, /^(a|c)/i]
}, En = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Yn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, An = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Rn = {
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
}, qn = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Vn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, jn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Qn = {
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
}, zn = {
  ordinalNumber: In({
    matchPattern: Wn,
    parsePattern: Hn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ie({
    matchPatterns: Bn,
    defaultMatchWidth: "wide",
    parsePatterns: Nn,
    defaultParseWidth: "any"
  }),
  quarter: ie({
    matchPatterns: En,
    defaultMatchWidth: "wide",
    parsePatterns: Yn,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ie({
    matchPatterns: An,
    defaultMatchWidth: "wide",
    parsePatterns: Rn,
    defaultParseWidth: "any"
  }),
  day: ie({
    matchPatterns: qn,
    defaultMatchWidth: "wide",
    parsePatterns: Vn,
    defaultParseWidth: "any"
  }),
  dayPeriod: ie({
    matchPatterns: jn,
    defaultMatchWidth: "any",
    parsePatterns: Qn,
    defaultParseWidth: "any"
  })
}, Un = {
  code: "en-US",
  formatDistance: yn,
  formatLong: bn,
  formatRelative: Mn,
  localize: Pn,
  match: zn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let Xn = {};
function ue() {
  return Xn;
}
const je = 6048e5, Gn = 864e5, Fe = Symbol.for("constructDateFrom");
function G(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Fe in e ? e[Fe](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function V(e, t) {
  return G(t || e, e);
}
function Le(e) {
  const t = V(e), n = new Date(
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
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Zn(e, ...t) {
  const n = G.bind(
    null,
    t.find((a) => typeof a == "object")
  );
  return t.map(n);
}
function xe(e, t) {
  const n = V(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Jn(e, t, n) {
  const [a, r] = Zn(
    n == null ? void 0 : n.in,
    e,
    t
  ), o = xe(a), d = xe(r), h = +o - Le(o), v = +d - Le(d);
  return Math.round((h - v) / Gn);
}
function Kn(e, t) {
  const n = V(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ea(e, t) {
  const n = V(e, t == null ? void 0 : t.in);
  return Jn(n, Kn(n)) + 1;
}
function oe(e, t) {
  var h, v, w, p;
  const n = ue(), a = (t == null ? void 0 : t.weekStartsOn) ?? ((v = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? n.weekStartsOn ?? ((p = (w = n.locale) == null ? void 0 : w.options) == null ? void 0 : p.weekStartsOn) ?? 0, r = V(e, t == null ? void 0 : t.in), o = r.getDay(), d = (o < a ? 7 : 0) + o - a;
  return r.setDate(r.getDate() - d), r.setHours(0, 0, 0, 0), r;
}
function de(e, t) {
  return oe(e, { ...t, weekStartsOn: 1 });
}
function Qe(e, t) {
  const n = V(e, t == null ? void 0 : t.in), a = n.getFullYear(), r = G(n, 0);
  r.setFullYear(a + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = de(r), d = G(n, 0);
  d.setFullYear(a, 0, 4), d.setHours(0, 0, 0, 0);
  const h = de(d);
  return n.getTime() >= o.getTime() ? a + 1 : n.getTime() >= h.getTime() ? a : a - 1;
}
function ta(e, t) {
  const n = Qe(e, t), a = G(e, 0);
  return a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0), de(a);
}
function na(e, t) {
  const n = V(e, t == null ? void 0 : t.in), a = +de(n) - +ta(n);
  return Math.round(a / je) + 1;
}
function ze(e, t) {
  var p, M, S, F;
  const n = V(e, t == null ? void 0 : t.in), a = n.getFullYear(), r = ue(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((M = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : M.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((F = (S = r.locale) == null ? void 0 : S.options) == null ? void 0 : F.firstWeekContainsDate) ?? 1, d = G((t == null ? void 0 : t.in) || e, 0);
  d.setFullYear(a + 1, 0, o), d.setHours(0, 0, 0, 0);
  const h = oe(d, t), v = G((t == null ? void 0 : t.in) || e, 0);
  v.setFullYear(a, 0, o), v.setHours(0, 0, 0, 0);
  const w = oe(v, t);
  return +n >= +h ? a + 1 : +n >= +w ? a : a - 1;
}
function aa(e, t) {
  var h, v, w, p;
  const n = ue(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((v = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((p = (w = n.locale) == null ? void 0 : w.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, r = ze(e, t), o = G((t == null ? void 0 : t.in) || e, 0);
  return o.setFullYear(r, 0, a), o.setHours(0, 0, 0, 0), oe(o, t);
}
function ra(e, t) {
  const n = V(e, t == null ? void 0 : t.in), a = +oe(n, t) - +aa(n, t);
  return Math.round(a / je) + 1;
}
function L(e, t) {
  const n = e < 0 ? "-" : "", a = Math.abs(e).toString().padStart(t, "0");
  return n + a;
}
const X = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
    return L(t === "yy" ? a % 100 : a, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : L(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return L(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return L(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return L(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return L(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return L(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, a = e.getMilliseconds(), r = Math.trunc(
      a * Math.pow(10, n - 3)
    );
    return L(r, t.length);
  }
}, te = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, $e = {
  // Era
  G: function(e, t, n) {
    const a = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(a, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(a, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(a, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const a = e.getFullYear(), r = a > 0 ? a : 1 - a;
      return n.ordinalNumber(r, { unit: "year" });
    }
    return X.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, a) {
    const r = ze(e, a), o = r > 0 ? r : 1 - r;
    if (t === "YY") {
      const d = o % 100;
      return L(d, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : L(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Qe(e);
    return L(n, t.length);
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
    const n = e.getFullYear();
    return L(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(a);
      // 01, 02, 03, 04
      case "QQ":
        return L(a, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(a);
      // 01, 02, 03, 04
      case "qq":
        return L(a, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const a = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return X.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(a + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(a, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(a, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const a = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(a + 1);
      // 01, 02, ..., 12
      case "LL":
        return L(a + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(a + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(a, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(a, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, a) {
    const r = ra(e, a);
    return t === "wo" ? n.ordinalNumber(r, { unit: "week" }) : L(r, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const a = na(e);
    return t === "Io" ? n.ordinalNumber(a, { unit: "week" }) : L(a, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : X.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const a = ea(e);
    return t === "Do" ? n.ordinalNumber(a, { unit: "dayOfYear" }) : L(a, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const a = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, a) {
    const r = e.getDay(), o = (r - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return L(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, a) {
    const r = e.getDay(), o = (r - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return L(o, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(r, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(r, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const a = e.getDay(), r = a === 0 ? 7 : a;
    switch (t) {
      // 2
      case "i":
        return String(r);
      // 02
      case "ii":
        return L(r, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(r, { unit: "day" });
      // Tue
      case "iii":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const a = e.getHours();
    let r;
    switch (a === 12 ? r = te.noon : a === 0 ? r = te.midnight : r = a / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const a = e.getHours();
    let r;
    switch (a >= 17 ? r = te.evening : a >= 12 ? r = te.afternoon : a >= 4 ? r = te.morning : r = te.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let a = e.getHours() % 12;
      return a === 0 && (a = 12), n.ordinalNumber(a, { unit: "hour" });
    }
    return X.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : X.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const a = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(a, { unit: "hour" }) : L(a, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let a = e.getHours();
    return a === 0 && (a = 24), t === "ko" ? n.ordinalNumber(a, { unit: "hour" }) : L(a, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : X.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : X.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return X.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const a = e.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Ce(a);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return J(a);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return J(a, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const a = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Ce(a);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return J(a);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return J(a, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const a = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Te(a, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + J(a, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const a = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Te(a, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + J(a, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const a = Math.trunc(+e / 1e3);
    return L(a, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return L(+e, t.length);
  }
};
function Te(e, t = "") {
  const n = e > 0 ? "-" : "+", a = Math.abs(e), r = Math.trunc(a / 60), o = a % 60;
  return o === 0 ? n + String(r) : n + String(r) + t + L(o, 2);
}
function Ce(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + L(Math.abs(e) / 60, 2) : J(e, t);
}
function J(e, t = "") {
  const n = e > 0 ? "-" : "+", a = Math.abs(e), r = L(Math.trunc(a / 60), 2), o = L(a % 60, 2);
  return n + r + t + o;
}
const Pe = (e, t) => {
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
}, Ue = (e, t) => {
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
}, sa = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], a = n[1], r = n[2];
  if (!r)
    return Pe(e, t);
  let o;
  switch (a) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", Pe(a, t)).replace("{{time}}", Ue(r, t));
}, ia = {
  p: Ue,
  P: sa
}, oa = /^D+$/, la = /^Y+$/, ca = ["D", "DD", "YY", "YYYY"];
function da(e) {
  return oa.test(e);
}
function ua(e) {
  return la.test(e);
}
function ha(e, t, n) {
  const a = fa(e, t, n);
  if (console.warn(a), ca.includes(e)) throw new RangeError(a);
}
function fa(e, t, n) {
  const a = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function ma(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ga(e) {
  return !(!ma(e) && typeof e != "number" || isNaN(+V(e)));
}
const va = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ya = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ka = /^'([^]*?)'?$/, pa = /''/g, wa = /[a-zA-Z]/;
function Y(e, t, n) {
  var p, M, S, F;
  const a = ue(), r = a.locale ?? Un, o = a.firstWeekContainsDate ?? ((M = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : M.firstWeekContainsDate) ?? 1, d = a.weekStartsOn ?? ((F = (S = a.locale) == null ? void 0 : S.options) == null ? void 0 : F.weekStartsOn) ?? 0, h = V(e, n == null ? void 0 : n.in);
  if (!ga(h))
    throw new RangeError("Invalid time value");
  let v = t.match(ya).map((g) => {
    const y = g[0];
    if (y === "p" || y === "P") {
      const T = ia[y];
      return T(g, r.formatLong);
    }
    return g;
  }).join("").match(va).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const y = g[0];
    if (y === "'")
      return { isToken: !1, value: ba(g) };
    if ($e[y])
      return { isToken: !0, value: g };
    if (y.match(wa))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: g };
  });
  r.localize.preprocessor && (v = r.localize.preprocessor(h, v));
  const w = {
    firstWeekContainsDate: o,
    weekStartsOn: d,
    locale: r
  };
  return v.map((g) => {
    if (!g.isToken) return g.value;
    const y = g.value;
    (ua(y) || da(y)) && ha(y, t, String(e));
    const T = $e[y[0]];
    return T(h, y, r.localize, w);
  }).join("");
}
function ba(e) {
  const t = e.match(ka);
  return t ? t[1].replace(pa, "'") : e;
}
function we(e = "", t = "", n = "long") {
  const a = Y(new Date(e), "MMMM d, Y"), r = Y(new Date(t), "MMMM d, Y");
  let o = `${a} - ${r}`;
  if (a === r && (o = Y(new Date(e), "MMMM d, Y")), t || (o = a), n === "short" || n === "shortWithYear") {
    const d = o.slice(0, 3), h = o.split(" ").slice(1).join(" ");
    if (t && t !== e) {
      const v = Y(new Date(e), "MMM d"), w = Y(new Date(t), "MMM d");
      if (n === "shortWithYear") {
        const p = Y(new Date(t), "MMM d, Y");
        return `${v} - ${p}`;
      }
      return `${v} - ${w}`;
    }
    return `${d} ${h}`;
  }
  return o;
}
function be(e = "", t = "") {
  const n = Y(new Date(e), "h:mm aaa"), a = Y(new Date(t), "h:mm aaa");
  let r = `${n} - ${a}`;
  return n === a && (r = Y(new Date(e), "h:mm aaa")), t || (r = n), r;
}
function Se(e = "") {
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
const Sa = {
  width: "42",
  height: "100",
  viewBox: "0 0 42 100",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__graphic-category-slash"
};
function Xe(e, t) {
  return s(), i("svg", Sa, t[0] || (t[0] = [
    l("path", {
      d: "M40.8666 1L20.4532 51.5248L7.48442 83.6237L1.00001 99.6732",
      stroke: "#0AA5FF",
      "stroke-width": "1.5",
      class: "svg__stroke--default-cyan-03"
    }, null, -1)
  ]));
}
const Ge = { render: Xe }, Ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge,
  render: Xe
}, Symbol.toStringTag, { value: "Module" })), Ma = {
  width: "900",
  height: "300",
  viewBox: "0 0 900 300",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__graphic-hatch-lines"
};
function _a(e, t) {
  return s(), i("svg", Ma, t[0] || (t[0] = [
    Ie('<path d="M144.445 318.242L12.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M160.445 318.242L28.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M176.445 318.242L44.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M192.445 318.242L60.7009 0.182617" stroke="#C099FF" stroke-width="1.5" class="svg__stroke--wayfinder"></path><path d="M208.445 318.242L76.7009 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M224.445 318.242L92.7009 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M240.445 318.242L108.701 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M256.445 318.242L124.701 0.182617" stroke="#C099FF" stroke-width="2" class="svg__stroke--wayfinder"></path><path d="M272.445 318.242L140.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M288.445 318.242L156.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M304.445 318.242L172.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M320.445 318.242L188.701 0.182617" stroke="#C099FF" stroke-width="2.5" class="svg__stroke--wayfinder"></path><path d="M336.445 318.242L204.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M352.445 318.242L220.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M368.445 318.242L236.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M384.445 318.242L252.701 0.182617" stroke="#C099FF" stroke-width="3" class="svg__stroke--wayfinder"></path><path d="M400.445 318.242L268.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M416.445 318.242L284.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M432.445 318.242L300.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M448.445 318.242L316.701 0.182617" stroke="#C099FF" stroke-width="3.5" class="svg__stroke--wayfinder"></path><path d="M464.445 318.242L332.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M480.445 318.242L348.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M496.445 318.242L364.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M512.445 318.242L380.701 0.182617" stroke="#C099FF" stroke-width="4" class="svg__stroke--wayfinder"></path><path d="M528.445 318.242L396.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M544.445 318.242L412.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M560.445 318.242L428.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M576.445 318.242L444.701 0.182617" stroke="#C099FF" stroke-width="4.5" class="svg__stroke--wayfinder"></path><path d="M592.445 318.242L460.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M608.445 318.242L476.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M624.445 318.242L492.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M640.445 318.242L508.701 0.182617" stroke="#C099FF" stroke-width="5" class="svg__stroke--wayfinder"></path><path d="M656.445 318.242L524.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M672.445 318.242L540.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M688.445 318.242L556.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M704.445 318.242L572.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M720.445 318.242L588.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M736.445 318.242L604.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M752.445 318.242L620.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M768.445 318.242L636.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M784.445 318.242L654.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M800.445 318.242L670.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M816.445 318.242L686.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M832.445 318.242L702.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M848.445 318.242L718.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M864.445 318.242L734.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path><path d="M880.445 318.242L750.701 0.182617" stroke="#C099FF" stroke-width="5.5" class="svg__stroke--wayfinder"></path>', 47)
  ]));
}
const Je = { render: _a }, Fa = {
  width: "225",
  height: "496",
  viewBox: "0 0 225 496",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function La(e, t) {
  return s(), i("svg", Fa, t[0] || (t[0] = [
    l("g", null, [
      l("path", {
        opacity: "0.25",
        d: "M71.1732 72.8843L243 0.393311V49.8933L105.538 107.886L48.6001 247.893L105.538 387.9L243 445.893V495.393L71.1732 422.902L0 247.893L71.1732 72.8843Z",
        fill: "#F2F2F2"
      })
    ], -1)
  ]));
}
const Ke = { render: La }, xa = { class: "slot" }, $a = {
  key: 0,
  class: "breadcrumb"
}, Ta = { class: "text" }, Ca = {
  key: 0,
  class: "gradient"
}, Pa = { class: "hatch-box" }, Da = { class: "clipped-box" }, Oa = ["innerHTML"], Ia = { class: "hatch" }, Wa = { class: "meta" }, Ha = ["innerHTML"], Ba = { key: 1 }, Na = { key: 2 }, Ea = ["innerHTML"], Ya = { class: "meta-text" }, Aa = {
  key: 0,
  class: "date-created"
}, Ra = ["innerHTML"], qa = {
  key: 1,
  class: "byline"
}, Va = ["innerHTML"], ja = {
  key: 3,
  class: "schedule"
}, Qa = ["innerHTML"], za = ["innerHTML"], Ua = {
  key: 4,
  class: "location-group"
}, Xa = {
  key: 0,
  class: "block-form-container"
}, Ga = /* @__PURE__ */ ee({
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
    const t = e, n = f(() => {
      if (t.media && t.media.src) {
        const y = t.media.src.toLowerCase().split(".").pop();
        return y === "mp4" || y === "m4a" || y === "f4v" || y === "m4b" || y === "mov";
      } else
        return !1;
    }), a = f(() => n.value ? Re : Ae), r = f(() => n.value ? null : t.media), o = f(() => {
      if (!n.value)
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
    }), d = f(() => n.value ? o.value : r.value), h = f(() => t.ratio), v = f(() => t.locations.map((g) => ({
      ...g,
      svg: g.title === "Online" ? "svg-icon-virtual" : "svg-icon-location",
      class: g.title === "Online" ? "location-online" : "location-link",
      to: g.to != null ? pe(g.to) : ""
    }))), w = f(() => we(t.startDate, t.endDate)), p = f(() => Y(new Date(t.dateCreated), "MMMM d, Y")), M = f(() => t.startDate && t.sectionHandle === "event" ? be(t.startDate, t.endDate) : ""), S = f(() => Se(t.to)), F = f(() => [
      "banner-featured",
      { "hatch-left": !t.alignRight },
      `color-${S.value}`
    ]);
    return (g, y) => (s(), i("div", {
      class: H(F.value)
    }, [
      l("div", xa, [
        z(g.$slots, "default", {}, () => [
          e.breadcrumb ? (s(), i("div", $a, [
            D(_(Ge), {
              class: "heading-line",
              "aria-hidden": "true"
            }),
            l("h2", Ta, O(e.breadcrumb), 1)
          ])) : c("", !0)
        ], !0)
      ]),
      (s(), $(K(a.value), {
        class: "media",
        media: d.value,
        "aspect-ratio": h.value
      }, {
        default: ae(() => [
          n.value ? c("", !0) : (s(), i("div", Ca)),
          D(_(Ke), {
            class: "molecule",
            "aria-hidden": "true"
          })
        ]),
        _: 1
      }, 8, ["media", "aspect-ratio"])),
      l("div", Pa, [
        l("div", Da, [
          e.category ? (s(), i("h2", {
            key: 0,
            class: "category category-mobile",
            innerHTML: e.category
          }, null, 8, Oa)) : c("", !0)
        ]),
        l("div", Ia, [
          D(_(Je), {
            class: "svg",
            "aria-hidden": "true"
          })
        ])
      ]),
      l("div", Wa, [
        e.category ? (s(), i("div", {
          key: 0,
          class: "category category-desktop",
          innerHTML: e.category
        }, null, 8, Ha)) : c("", !0),
        e.titleLink.length > 0 ? (s(), i("div", Ba, [
          D(ye, {
            id: "banner-featured",
            to: e.titleLink,
            class: "title title-linked"
          }, {
            default: ae(() => [
              Q(O(e.title), 1)
            ]),
            _: 1
          }, 8, ["to"])
        ])) : (s(), i("div", Na, [
          l("h3", {
            id: "banner-featured",
            class: "title",
            innerHTML: e.title
          }, null, 8, Ea)
        ])),
        l("div", Ya, [
          e.dateCreated ? (s(), i("div", Aa, [
            e.dateCreated ? (s(), i("time", {
              key: 0,
              class: "date-created",
              innerHTML: p.value
            }, null, 8, Ra)) : c("", !0)
          ])) : c("", !0),
          e.byline.length ? (s(), i("div", qa, [
            (s(!0), i(N, null, E(e.byline, (T, j) => (s(), i("div", {
              key: `external-${j}`,
              class: "byline-item",
              innerHTML: T
            }, null, 8, Va))), 128))
          ])) : c("", !0),
          e.description ? (s(), $(qe, {
            key: 2,
            class: "description",
            "rich-text-content": e.description
          }, null, 8, ["rich-text-content"])) : c("", !0),
          e.startDate || e.endDate ? (s(), i("div", ja, [
            e.startDate ? (s(), i("time", {
              key: 0,
              class: "schedule-item",
              innerHTML: w.value
            }, null, 8, Qa)) : c("", !0),
            M.value ? (s(), i("time", {
              key: 1,
              class: "schedule-item",
              innerHTML: M.value
            }, null, 8, za)) : c("", !0)
          ])) : c("", !0),
          e.locations.length ? (s(), i("div", Ua, [
            (s(!0), i(N, null, E(v.value, (T) => (s(), $(Ee, {
              key: `location-${T.id}`,
              text: T.title,
              "icon-name": T.svg,
              to: T.to,
              class: H(T.class)
            }, null, 8, ["text", "icon-name", "to", "class"]))), 128))
          ])) : c("", !0)
        ]),
        e.to ? (s(), $(Ne, {
          key: 3,
          id: "banner-featured-button",
          label: e.prompt,
          to: e.to,
          "aria-labelledby": "banner-featured-button banner-featured",
          class: "button"
        }, null, 8, ["label", "to"])) : c("", !0)
      ]),
      !e.to && e.registerEvent ? (s(), i("div", Xa, [
        D(ve)
      ])) : c("", !0)
    ], 2));
  }
}), Xr = /* @__PURE__ */ A(Ga, [["__scopeId", "data-v-d975c59b"]]), Za = {
  key: 0,
  class: "category"
}, Ja = ["innerHTML"], Ka = { class: "hatch-box" }, er = { class: "hatch" }, tr = { class: "meta" }, nr = ["innerHTML"], ar = { class: "meta-text" }, rr = { class: "meta-block" }, sr = {
  key: 0,
  class: "byline-item"
}, ir = {
  key: 1,
  class: "subject-areas"
}, or = ["innerHTML"], lr = ["innerHTML"], cr = ["innerHTML"], dr = {
  key: 0,
  class: "contact-info-group"
}, ur = {
  key: 1,
  class: "location-group"
}, hr = {
  key: 1,
  class: "block-form-container"
}, fr = /* @__PURE__ */ ee({
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
    const t = e, n = u(() => Promise.resolve().then(() => ke)), a = u(() => Promise.resolve().then(() => Ve)), r = u(() => Promise.resolve().then(() => Ye)), o = u(() => Promise.resolve().then(() => Ze)), d = f(() => Se(t.to)), h = f(() => [
      "banner-header",
      { "hatch-left": !t.alignRight },
      `color-${d.value}`
    ]), v = f(() => {
      if (t.media && t.media.src) {
        const I = t.media.src.toLowerCase().split(".").pop();
        return I === "mp4" || I === "m4a" || I === "f4v" || I === "m4b" || I === "mov";
      } else
        return !1;
    }), w = f(() => v.value ? Re : Ae), p = f(() => v.value ? null : t.media), M = f(() => {
      if (!v.value)
        return null;
      const C = t.media;
      return {
        src: C.src,
        focalPoint: C.focalPoint,
        sizes: C.sizes,
        height: C.height,
        width: C.width,
        alt: C.alt,
        caption: C.caption,
        poster: C.poster
      };
    }), S = f(() => v.value ? M.value : p.value), F = f(() => Y(new Date(t.dateCreated), "MMMM d, Y")), g = f(() => we(t.startDate, t.endDate)), y = f(() => t.startDate && t.sectionHandle === "event" ? be(t.startDate, t.endDate) : ""), T = f(() => t.ratio), j = f(() => t.category ? "gradient" : "gradient-no-category"), R = f(() => t.locations.map((C) => {
      let I = "svg-icon-location";
      return C.title === "Online" && (I = "svg-icon-virtual"), {
        ...C,
        svg: I,
        to: C.to != null ? pe(C.to) : ""
      };
    }));
    return (C, I) => (s(), i("div", {
      class: H(h.value)
    }, [
      e.category ? (s(), i("div", Za, [
        D(_(o), {
          class: "heading-line",
          "aria-hidden": "true"
        }),
        l("div", {
          class: "text",
          innerHTML: e.category
        }, null, 8, Ja)
      ])) : c("", !0),
      (s(), $(K(w.value), {
        class: "media",
        media: S.value,
        "aspect-ratio": T.value
      }, {
        default: ae(() => [
          v.value ? c("", !0) : (s(), i("div", {
            key: 0,
            class: H(j.value)
          }, null, 2)),
          D(_(Ke), {
            class: "molecule",
            "aria-hidden": "true"
          })
        ]),
        _: 1
      }, 8, ["media", "aspect-ratio"])),
      l("div", Ka, [
        I[0] || (I[0] = l("div", { class: "clipped-box" }, null, -1)),
        l("div", er, [
          D(_(Je), {
            class: "svg",
            "aria-hidden": "true"
          })
        ])
      ]),
      l("div", tr, [
        l("h1", {
          class: "title",
          innerHTML: e.title
        }, null, 8, nr),
        e.text ? (s(), $(_(a), {
          key: 0,
          class: "snippet",
          "rich-text-content": e.text
        }, null, 8, ["rich-text-content"])) : c("", !0),
        q(l("div", ar, [
          q(l("div", rr, [
            e.byline.length ? (s(), i("div", sr, [
              (s(!0), i(N, null, E(e.byline, (B, Z) => (s(), i("div", {
                key: `${B}-${Z}`,
                class: "byline-item"
              }, O(B), 1))), 128))
            ])) : c("", !0),
            e.subjectAreas.length ? (s(), i("div", ir, [
              (s(!0), i(N, null, E(e.subjectAreas, (B, Z) => (s(), i("div", {
                key: `${B.title}-${Z}`
              }, O(B.title), 1))), 128))
            ])) : c("", !0),
            e.dateCreated ? (s(), i("time", {
              key: 2,
              class: "date-created",
              innerHTML: F.value
            }, null, 8, or)) : c("", !0),
            e.startDate ? (s(), i("time", {
              key: 3,
              class: "schedule-item",
              innerHTML: g.value
            }, null, 8, lr)) : c("", !0),
            y.value ? (s(), i("time", {
              key: 4,
              class: "schedule-item",
              innerHTML: y.value
            }, null, 8, cr)) : c("", !0)
          ], 512), [
            [
              _e,
              e.byline.length || e.subjectAreas.length || e.dateCreated || e.startDate
            ]
          ]),
          e.email || e.phone || e.staffDirectoryLink || e.addressLink ? (s(), i("div", dr, [
            e.email ? (s(), $(_(r), {
              key: 0,
              text: e.email,
              "icon-name": "svg-icon-email",
              to: `mailto:${e.email}`
            }, null, 8, ["text", "to"])) : c("", !0),
            e.phone ? (s(), $(_(r), {
              key: 1,
              text: e.phone,
              "icon-name": "svg-icon-phone",
              to: `tel:${e.phone}`
            }, null, 8, ["text", "to"])) : c("", !0),
            e.staffDirectoryLink ? (s(), $(_(r), {
              key: 2,
              text: "View staff directory",
              "icon-name": "svg-icon-person",
              to: e.staffDirectoryLink
            }, null, 8, ["to"])) : c("", !0),
            e.addressLink ? (s(), $(_(r), {
              key: 3,
              text: e.address,
              "icon-name": "svg-icon-location",
              to: e.addressLink
            }, null, 8, ["text", "to"])) : c("", !0)
          ])) : c("", !0),
          e.locations.length ? (s(), i("div", ur, [
            (s(!0), i(N, null, E(R.value, (B) => (s(), $(_(r), {
              key: `location-${B.id}`,
              text: B.title,
              "icon-name": B.svg,
              to: B.to
            }, null, 8, ["text", "icon-name", "to"]))), 128))
          ])) : c("", !0)
        ], 512), [
          [
            _e,
            e.byline.length || e.subjectAreas.length || e.dateCreated || e.startDate || e.email || e.phone || e.staffDirectoryLink || e.addressLink
          ]
        ]),
        e.to ? (s(), $(_(n), {
          key: 1,
          label: e.prompt,
          "is-secondary": !0,
          class: "button",
          to: e.to
        }, null, 8, ["label", "to"])) : c("", !0)
      ]),
      !e.to && e.registerEvent ? (s(), i("div", hr, [
        D(ve)
      ])) : c("", !0)
    ], 2));
  }
}), Gr = /* @__PURE__ */ A(fr, [["__scopeId", "data-v-a5497b29"]]), mr = { class: "banner-text" }, gr = { class: "banner-text-content-container" }, vr = {
  key: 0,
  class: "category"
}, yr = ["innerHTML"], kr = { class: "content" }, pr = { class: "title" }, wr = ["lang", "innerHTML"], br = {
  key: 1,
  class: "meta-block"
}, Sr = {
  key: 0,
  class: "byline-item"
}, Mr = {
  key: 1,
  class: "subject-areas"
}, _r = {
  key: 2,
  class: "contact-info"
}, Fr = {
  key: 3,
  class: "contact-info"
}, Lr = {
  key: 4,
  class: "contact-info"
}, xr = {
  key: 5,
  class: "contact-info"
}, $r = {
  key: 6,
  class: "schedule"
}, Tr = ["innerHTML"], Cr = ["innerHTML"], Pr = ["innerHTML"], Dr = {
  key: 3,
  class: "schedule-item"
}, Or = {
  key: 2,
  class: "location-group"
}, Ir = {
  key: 0,
  class: "block-form-container"
}, Wr = /* @__PURE__ */ ee({
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
    const t = e, n = u(() => Promise.resolve().then(() => ke)), a = u(() => Promise.resolve().then(() => Ve)), r = u(() => Promise.resolve().then(() => Ye)), o = u(() => Promise.resolve().then(() => Ze)), d = f(() => {
      let F = ["banner-text-container", "theme-light"];
      return t.isDarkBlue && (F = ["banner-text-container", "theme-dark"]), F;
    }), h = f(() => Se(t.to)), v = f(() => ["text", `color-${h.value}`]), w = f(() => Y(new Date(t.dateCreated), "MMMM d, Y")), p = f(() => we(t.startDate, t.endDate)), M = f(() => t.startDate && t.sectionHandle === "event" ? be(t.startDate, t.endDate) : ""), S = f(() => t.locations.map((F) => {
      let g = "svg-icon-location";
      return F.title === "Online" && (g = "svg-icon-virtual"), {
        ...F,
        svg: g,
        to: F.to != null ? pe(F.to) : ""
      };
    }));
    return (F, g) => (s(), i("div", mr, [
      l("div", {
        class: H(d.value)
      }, [
        l("div", gr, [
          e.category ? (s(), i("div", vr, [
            D(_(o), {
              class: "heading-line",
              "aria-hidden": "true"
            }),
            l("div", {
              class: H(v.value),
              innerHTML: e.category
            }, null, 10, yr)
          ])) : c("", !0),
          l("div", kr, [
            l("h1", pr, [
              Q(O(e.title) + " ", 1),
              e.alternativeFullName ? (s(), i("span", {
                key: 0,
                lang: e.language,
                class: "translation",
                innerHTML: e.alternativeFullName
              }, null, 8, wr)) : c("", !0)
            ]),
            e.text ? (s(), $(_(a), {
              key: 0,
              class: "text",
              "rich-text-content": e.text
            }, null, 8, ["rich-text-content"])) : c("", !0),
            e.byline || e.subjectAreas || e.startDate || e.phone || e.email || e.addressLink || e.staffDirectoryLink ? (s(), i("div", br, [
              e.byline ? (s(), i("div", Sr, [
                (s(!0), i(N, null, E(e.byline, (y, T) => (s(), i("div", {
                  key: `${y}-${T}`
                }, O(y), 1))), 128))
              ])) : c("", !0),
              e.subjectAreas ? (s(), i("div", Mr, [
                (s(!0), i(N, null, E(e.subjectAreas, (y, T) => (s(), i("div", {
                  key: `${y.title}-${T}`
                }, O(y.title), 1))), 128))
              ])) : c("", !0),
              e.email ? (s(), i("div", _r, [
                D(_(r), {
                  text: e.email,
                  "icon-name": "svg-icon-email",
                  to: `mailto:${e.email}`
                }, null, 8, ["text", "to"])
              ])) : c("", !0),
              e.phone ? (s(), i("div", Fr, [
                D(_(r), {
                  text: e.phone,
                  "icon-name": "svg-icon-phone",
                  to: `tel:${e.phone}`
                }, null, 8, ["text", "to"])
              ])) : c("", !0),
              e.staffDirectoryLink ? (s(), i("div", Lr, [
                D(_(r), {
                  text: "View staff directory",
                  "icon-name": "svg-icon-person",
                  to: e.staffDirectoryLink
                }, null, 8, ["to"])
              ])) : c("", !0),
              e.addressLink ? (s(), i("div", xr, [
                D(_(r), {
                  text: e.address,
                  "icon-name": "svg-icon-location",
                  to: e.addressLink
                }, null, 8, ["text", "to"])
              ])) : c("", !0),
              e.startDate || e.dateCreated ? (s(), i("div", $r, [
                e.dateCreated ? (s(), i("time", {
                  key: 0,
                  class: "date-created",
                  innerHTML: w.value
                }, null, 8, Tr)) : c("", !0),
                e.startDate ? (s(), i("time", {
                  key: 1,
                  class: "schedule-item",
                  innerHTML: p.value
                }, null, 8, Cr)) : c("", !0),
                M.value ? (s(), i("time", {
                  key: 2,
                  class: "schedule-item",
                  innerHTML: M.value
                }, null, 8, Pr)) : c("", !0),
                e.isOnline ? (s(), i("div", Dr, " Online ")) : c("", !0)
              ])) : c("", !0)
            ])) : c("", !0),
            e.locations.length ? (s(), i("div", Or, [
              (s(!0), i(N, null, E(S.value, (y) => (s(), $(_(r), {
                key: `location-${y.id}`,
                text: y.title,
                "icon-name": y.svg,
                to: y.to
              }, null, 8, ["text", "icon-name", "to"]))), 128))
            ])) : c("", !0),
            e.to && !e.isDarkBlue ? (s(), $(_(n), {
              key: 3,
              label: e.buttonText,
              to: e.to,
              "is-secondary": !0
            }, null, 8, ["label", "to"])) : c("", !0),
            e.to && e.isDarkBlue ? (s(), $(_(n), {
              key: 4,
              label: e.buttonText,
              to: e.to,
              "is-tertiary": !0
            }, null, 8, ["label", "to"])) : c("", !0)
          ])
        ])
      ], 2),
      !e.to && e.registerEvent ? (s(), i("div", Ir, [
        D(ve)
      ])) : c("", !0)
    ]));
  }
}), Zr = /* @__PURE__ */ A(Wr, [["__scopeId", "data-v-04cddc69"]]), Hr = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-share-printer"
};
function et(e, t) {
  return s(), i("svg", Hr, t[0] || (t[0] = [
    Ie('<circle cx="16" cy="16" r="16" fill="#F2F2F2" class="svg__fill--secondary-grey-01"></circle><path d="M7 21.1984h-.75c0 .4142.33579.75.75.75v-.75Zm0-8.1205v-.75c-.41421 0-.75.3358-.75.75H7Zm18 0h.75c0-.4142-.3358-.75-.75-.75v.75Zm0 8.1205v.75c.4142 0 .75-.3358.75-.75H25Zm-16.29837.75h.75v-1.5h-.75v1.5Zm14.57147-1.5h-.75v1.5h.75v-1.5Zm-15.5231.75v-8.1205h-1.5v8.1205h1.5ZM7 13.8279h18v-1.5H7v1.5Zm17.25-.75v8.1205h1.5v-8.1205h-1.5ZM8.70163 20.4484H7v1.5h1.70163v-1.5Zm16.29837 0h-1.7269v1.5H25v-1.5Z" fill="#0F0F0F" class="svg__fill--black"></path><path d="M11.4482 18.7737v6.5454h9.0013v-6.5454h-9.0013Z" stroke="#0F0F0F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="svg__stroke--black"></path><path d="M13.5213 21.0669h4.8821" stroke="#0F0F0F" class="svg__stroke--black"></path><path d="M13.5213 22.812h2.99" stroke="#0F0F0F" class="svg__stroke--black"></path><path d="M10.6306 16.4412h1.6243" stroke="#0F0F0F" stroke-width="1.25" class="svg__stroke--black"></path><path d="M9.86359 8.68115v4.41055H22.5071V8.68115H9.86359Z" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svg__stroke--black"></path>', 7)
  ]));
}
const tt = { render: et }, Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tt,
  render: et
}, Symbol.toStringTag, { value: "Module" })), Nr = { class: "block-amenities" }, Er = { class: "amenity-column" }, Yr = { class: "amenities-list" }, Ar = { class: "amenity-name" }, Rr = /* @__PURE__ */ ee({
  __name: "BlockAmenities",
  props: {
    amenities: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, n = u(
      () => import("./icon-clock-CG3EE-5W.js")
    ), a = u(
      () => import("./icon-accessible-C8Gup1rK.js")
    ), r = u(
      () => import("./icon-chair-D8fW8Dnx.js")
    ), o = u(
      () => import("./icon-virtual-CwZieS3s.js")
    ), d = u(
      () => import("./icon-laptop-Bmg8PSn7.js")
    ), h = u(
      () => import("./icon-locker-BBQPsbYg.js")
    ), v = u(
      () => import("./icon-light-wkkuRssP.js")
    ), w = u(
      () => import("./icon-book-Dhs3bbZ0.js")
    ), p = {
      "icon-clock": {
        icon: n,
        label: "24 Hour Study Space"
      },
      "icon-accessible": {
        icon: a,
        label: "ADA Stations"
      },
      "icon-chair": {
        icon: r,
        label: "Cafe"
      },
      "icon-virtual": {
        icon: o,
        label: "Computer/Laptop Access"
      },
      "icon-laptop": {
        icon: d,
        label: "Laptop Lending"
      },
      "icon-locker": {
        icon: h,
        label: "Locker"
      },
      "icon-light": {
        icon: v,
        label: "Makerspace"
      },
      "icon-share-printer": {
        icon: tt,
        label: "Print, Copy and Scan"
      },
      "icon-book": {
        icon: w,
        label: "Research Help"
      }
    }, M = f(() => t.amenities.map((S) => {
      const F = p[S];
      return {
        svgIcon: F.icon,
        svgLabel: F.label
      };
    }));
    return (S, F) => (s(), i("div", Nr, [
      F[0] || (F[0] = l("h3", { class: "amenities-title" }, " At This Location ", -1)),
      l("div", Er, [
        l("ul", Yr, [
          (s(!0), i(N, null, E(M.value, (g, y) => (s(), i("li", {
            key: `${g.svgLabel}-${y}`,
            class: "amenitiy-row"
          }, [
            g.svgIcon ? (s(), $(K(g.svgIcon), { key: 0 })) : c("", !0),
            l("span", Ar, O(g.svgLabel), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Jr = /* @__PURE__ */ A(Rr, [["__scopeId", "data-v-3ecae64a"]]), qr = {
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
}, Vr = { class: "alphabetical-browse-by" }, jr = { class: "alphabet-list" }, Qr = ["onClick"];
function zr(e, t, n, a, r, o) {
  return s(), i("div", Vr, [
    t[0] || (t[0] = l("h2", { class: "title" }, " Browse by Last Name ", -1)),
    l("ul", jr, [
      (s(!0), i(N, null, E(o.parsedAlphabet, (d) => (s(), i("li", {
        key: d.letter,
        class: H(d.class),
        onClick: (h) => o.handleSelectedLetter(d)
      }, [
        l("a", null, O(d.letter), 1)
      ], 10, Qr))), 128))
    ])
  ]);
}
const Kr = /* @__PURE__ */ A(qr, [["render", zr], ["__scopeId", "data-v-a5f902ae"]]);
export {
  Kr as AlphabeticalBrowseBy,
  Xr as BannerFeatured,
  Gr as BannerHeader,
  Zr as BannerText,
  Jr as BlockAmenities,
  Ne as ButtonLink,
  Ee as IconWithLink,
  Ae as ResponsiveImage,
  Re as ResponsiveVideo,
  qe as RichText,
  ye as SmartLink
};
