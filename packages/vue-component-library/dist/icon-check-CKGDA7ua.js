import { createElementBlock as t, openBlock as o, createElementVNode as r } from "vue";
const n = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-check"
};
function s(l, e) {
  return o(), t("svg", n, e[0] || (e[0] = [
    r("path", {
      d: "M8 17.4296L12.2029 21.6327L23.8356 10",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "square",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1)
  ]));
}
const i = { render: s };
export {
  i as default,
  s as render
};
