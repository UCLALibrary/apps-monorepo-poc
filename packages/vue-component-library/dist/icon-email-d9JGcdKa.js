import { createElementBlock as t, openBlock as o, createElementVNode as l } from "vue";
const r = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-email"
};
function n(s, e) {
  return o(), t("svg", r, e[0] || (e[0] = [
    l("path", {
      d: "M3.5 7.77211V24.3239C3.5 24.6755 3.78502 24.9605 4.13661 24.9605H27.8634C28.215 24.9605 28.5 24.6755 28.5 24.3239V7.77211C28.5 7.42052 28.215 7.1355 27.8634 7.1355H4.13661C3.78502 7.1355 3.5 7.42052 3.5 7.77211Z",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    l("path", {
      d: "M16.8316 18.36L17.3214 18.9279L16.8316 18.36ZM27.9748 7.758L16.3417 17.7921L17.3214 18.9279L28.9545 8.89385L27.9748 7.758ZM15.6582 17.792L4.02901 7.75808L3.04911 8.89377L14.6783 18.9277L15.6582 17.792ZM16.3417 17.7921C16.1453 17.9615 15.8545 17.9614 15.6582 17.792L14.6783 18.9277C15.4375 19.5828 16.5621 19.5829 17.3214 18.9279L16.3417 17.7921Z",
      fill: "#0B6AB7",
      class: "svg__fill--primary-blue-03"
    }, null, -1)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
