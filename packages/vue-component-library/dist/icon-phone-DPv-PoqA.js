import { createElementBlock as t, openBlock as n, createElementVNode as e } from "vue";
const r = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-phone"
};
function s(l, o) {
  return n(), t("svg", r, o[0] || (o[0] = [
    e("path", {
      d: "M19.1125 27.5892C16.4452 28.3039 13.7035 26.721 12.9888 24.0537C11.781 19.546 10.5731 15.0384 9.36531 10.5307C8.6506 7.86339 10.2335 5.12171 12.9008 4.407L14.5026 3.97781C15.036 3.83487 15.5844 4.15145 15.7273 4.68492L16.9342 9.18908C17.2145 10.2352 16.6112 11.3144 15.5732 11.6235L13.6804 12.1873L15.8975 20.4615L17.8186 20.0033C18.8721 19.7521 19.9342 20.385 20.2145 21.4311L21.4213 25.9353C21.5643 26.4688 21.2477 27.0171 20.7142 27.16L19.1125 27.5892Z",
      fill: "white",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M22.4121 20.6392L23.6027 25.0824",
      stroke: "#0AA5FF",
      "stroke-width": "1.25",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--default-cyan-03"
    }, null, -1),
    e("path", {
      d: "M17.9845 4.11792L19.1751 8.56116",
      stroke: "#0AA5FF",
      "stroke-width": "1.25",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--default-cyan-03"
    }, null, -1)
  ]));
}
const d = { render: s };
export {
  d as default,
  s as render
};
