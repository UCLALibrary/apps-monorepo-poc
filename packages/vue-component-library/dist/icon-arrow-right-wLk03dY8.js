import { createElementBlock as r, openBlock as o, createElementVNode as e } from "vue";
const n = {
  width: "32",
  height: "33",
  viewBox: "0 0 32 33",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-arrow-right"
};
function s(i, t) {
  return o(), r("svg", n, t[0] || (t[0] = [
    e("g", {
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "square",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, [
      e("path", { d: "M9 16.729h13.25" }),
      e("path", { d: "m16 23.729 7-7-7-7" })
    ], -1)
  ]));
}
const a = { render: s };
export {
  a as default,
  s as render
};
