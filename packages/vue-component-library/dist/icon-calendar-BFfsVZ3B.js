import { createElementBlock as r, openBlock as t, createElementVNode as e } from "vue";
const n = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-calendar"
};
function s(l, o) {
  return t(), r("svg", n, o[0] || (o[0] = [
    e("path", {
      d: "M26.9902 25.9316C26.9902 26.2589 26.7248 26.5243 26.3975 26.5243C19.4626 26.5243 12.5277 26.5243 5.59274 26.5243C5.26538 26.5243 5 26.2589 5 25.9316V12.9113V8.26828C5 7.94092 5.26538 7.67554 5.59274 7.67554H26.3975C26.7248 7.67554 26.9902 7.94092 26.9902 8.26828V12.9113V25.9316Z",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M11.8063 10.283L11.8063 4.00004",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M20.1835 10.283L20.1835 4.00004",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M7.8147 13.9585H15.9953H24.1759",
      stroke: "#0AA5FF",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--default-cyan-03"
    }, null, -1)
  ]));
}
const a = { render: s };
export {
  a as default,
  s as render
};
