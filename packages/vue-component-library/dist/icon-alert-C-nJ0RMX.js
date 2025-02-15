import { createElementBlock as t, openBlock as o, createElementVNode as e } from "vue";
const s = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-alert"
};
function n(l, r) {
  return o(), t("svg", s, r[0] || (r[0] = [
    e("path", {
      d: "M16 25C20.9706 25 25 20.9706 25 16C25 11.0294 20.9706 7 16 7C11.0294 7 7 11.0294 7 16C7 20.9706 11.0294 25 16 25Z",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M16 12V17",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "square",
      "stroke-linejoin": "bevel",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M16 20H16.01",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
