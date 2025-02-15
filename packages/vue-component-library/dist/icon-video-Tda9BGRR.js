import { createElementBlock as t, openBlock as n, createElementVNode as e } from "vue";
const r = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-video"
};
function s(l, o) {
  return n(), t("svg", r, o[0] || (o[0] = [
    e("path", {
      d: "M29 24.6666C20.3333 24.6666 11.6667 24.6666 3 24.6666V7.33325H29V24.6666Z",
      stroke: "#0B6AB7",
      "stroke-width": "0.83871",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("g", null, [
      e("path", {
        d: "M12.6102 10.9678L20.4382 16L12.6102 21.0323V10.9678Z",
        stroke: "#0AA5FF",
        "stroke-width": "0.83871",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: "svg__fill--default-cyan-03"
      })
    ], -1)
  ]));
}
const d = { render: s };
export {
  d as default,
  s as render
};
