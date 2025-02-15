import { createElementBlock as o, openBlock as t, createElementVNode as n } from "vue";
const r = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-play-video"
};
function s(l, e) {
  return t(), o("svg", r, e[0] || (e[0] = [
    n("path", {
      d: "M10 7L24 16L10 25V7Z",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1)
  ]));
}
const c = { render: s };
export {
  c as default,
  s as render
};
