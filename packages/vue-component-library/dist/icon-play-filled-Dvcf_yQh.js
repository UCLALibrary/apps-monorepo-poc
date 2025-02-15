import { createElementBlock as t, openBlock as o, createElementVNode as l } from "vue";
const r = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-play-filled"
};
function n(s, e) {
  return o(), t("svg", r, e[0] || (e[0] = [
    l("path", {
      d: "M10 8.37375C10 7.78037 10.6564 7.42199 11.1556 7.74287L23.0186 15.3691C23.4779 15.6643 23.4779 16.3357 23.0186 16.6309L11.1556 24.2571C10.6564 24.578 10 24.2196 10 23.6263V8.37375Z",
      fill: "#0B6AB7",
      class: "svg__fill--primary-blue-03"
    }, null, -1),
    l("path", {
      d: "M10 7L24 16L10 25V7Z",
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
