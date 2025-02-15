import { createElementBlock as t, openBlock as r, createElementVNode as e } from "vue";
const s = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-image-stack"
};
function n(l, o) {
  return r(), t("svg", s, o[0] || (o[0] = [
    e("path", {
      d: "M4.4856 9.95076V8.48584H27.5142V23.8382H26.0894",
      stroke: "#0B6AB7",
      "stroke-width": "0.619048",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M5.97156 8.49587V7H29.0001V22.3524H27.6063",
      stroke: "#0B6AB7",
      "stroke-width": "0.619048",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M26.0286 25.3238C18.3524 25.3238 10.6762 25.3238 3 25.3238V9.97144H26.0286V25.3238Z",
      stroke: "#0B6AB7",
      "stroke-width": "0.742857",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M12.2856 14.3049L17.4856 17.6478L12.2856 20.9906V14.3049Z",
      stroke: "#0AA5FF",
      "stroke-width": "0.619048",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--default-cyan-03"
    }, null, -1)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
