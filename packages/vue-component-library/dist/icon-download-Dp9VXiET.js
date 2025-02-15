import { createElementBlock as o, openBlock as l, createElementVNode as e } from "vue";
const s = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-download"
};
function r(n, t) {
  return l(), o("svg", s, t[0] || (t[0] = [
    e("path", {
      d: "M15.958 5.99992V21.0327",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "square",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "m7.48562 14.4725-.53033-.5303 1.06066-1.0607.53033.5303-1.06066 1.0607Zm8.47218 7.4115.5303.5304-.5303.5303-.5303-.5303.5303-.5304Zm7.4115-8.4722.5304-.5303 1.0606 1.0607-.5303.5303-1.0607-1.0607Zm-14.82302 0 7.94182 7.9419-1.0606 1.0607-7.94188-7.9419 1.06066-1.0607Zm6.88122 7.9419 7.9418-7.9419 1.0607 1.0607-7.9419 7.9419-1.0606-1.0607Z",
      fill: "#0B6AB7",
      class: "svg__fill--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M8.44116 25.8755H23.4412",
      stroke: "#0AA5FF",
      "stroke-width": "1.5",
      class: "svg__stroke--default-cyan-03"
    }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
