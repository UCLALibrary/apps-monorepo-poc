import { createElementBlock as c, openBlock as n, createElementVNode as l } from "vue";
const s = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-share-linkedin"
};
function i(t, e) {
  return n(), c("svg", s, e[0] || (e[0] = [
    l("circle", {
      cx: "16",
      cy: "16",
      r: "16",
      fill: "#F2F2F2",
      class: "svg__fill--secondary-grey-01"
    }, null, -1),
    l("path", {
      d: "M10.4191 21.1359h2.61v-8.4938h-2.61v8.4938Z",
      fill: "#0F0F0F",
      class: "svg__fill--black"
    }, null, -1),
    l("path", {
      d: "M10.2221 9.92606c0 .83954.6895 1.53084 1.5266 1.53084.8372 0 1.5267-.6419 1.5267-1.48146 0-.8395-.6895-1.53086-1.5267-1.53086-.8371 0-1.5266.64198-1.5266 1.48148Z",
      fill: "#0F0F0F",
      class: "svg__fill--black"
    }, null, -1),
    l("path", {
      d: "M20.3175 21.1359h2.6101v-4.6913c0-2.2716-.4925-4.0494-3.1518-4.0494-1.2804 0-2.1668.6914-2.5115 1.3827h-.0493v-1.1358h-2.5115v8.4445h2.6593V16.889c0-1.0864.197-2.1728 1.5759-2.1728 1.3788 0 1.3788 1.2839 1.3788 2.2716v4.1481Z",
      fill: "#0F0F0F",
      class: "svg__fill--black"
    }, null, -1)
  ]));
}
const a = { render: i };
export {
  a as default,
  i as render
};
