import { createElementBlock as l, openBlock as r, createElementVNode as e } from "vue";
const o = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-virtual"
};
function s(n, t) {
  return r(), l("svg", o, t[0] || (t[0] = [
    e("path", {
      d: "M22 26.75H22.75V25.25H22V26.75ZM10 25.25H9.25V26.75H10V25.25ZM16.75 21.2C16.75 20.7857 16.4142 20.45 16 20.45C15.5858 20.45 15.25 20.7857 15.25 21.2H16.75ZM22 25.25H16V26.75H22V25.25ZM16 25.25H10V26.75H16V25.25ZM16.75 26V21.2H15.25V26H16.75Z",
      fill: "#0B6AB7",
      class: "svg__fill--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M26.5 20.5C26.5 20.7761 26.2761 21 26 21H16H6C5.72386 21 5.5 20.7761 5.5 20.5V7.5C5.5 7.22386 5.72386 7 6 7H16H26C26.2761 7 26.5 7.22386 26.5 7.5V20.5Z",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("g", null, [
      e("path", {
        d: "M13.8627 11.8256L16.0189 10.917L18.1751 11.8256L19.074 14.0334L18.1751 16.2412L16.0189 17.1498L13.8627 16.2412L12.9638 14.0334L13.8627 11.8256Z",
        stroke: "#0AA5FF",
        "stroke-width": "1.25",
        class: "svg__stroke-default-cyan-03"
      })
    ], -1)
  ]));
}
const a = { render: s };
export {
  a as default,
  s as render
};
