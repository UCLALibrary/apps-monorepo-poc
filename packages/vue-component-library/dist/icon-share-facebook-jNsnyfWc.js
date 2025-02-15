import { createElementBlock as c, openBlock as o, createElementVNode as l } from "vue";
const n = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-share-facebook"
};
function r(s, e) {
  return o(), c("svg", n, e[0] || (e[0] = [
    l("circle", {
      cx: "16",
      cy: "16",
      r: "16",
      fill: "#F2F2F2",
      class: "svg__fill--secondary-grey-01"
    }, null, -1),
    l("path", {
      d: "M17.5732 16.5905v7.0915H14.538v-7.0915h-2.5381v-2.7637h2.5381v-2.0382c0-2.36517 1.5363-3.6531 3.7801-3.6531 1.0749 0 1.9987.07523 2.268.1089v2.4719l-1.5566.0006c-1.2201 0-1.4563.5453-1.4563 1.3454v1.7645h2.9104l-.3789 2.7637h-2.5315Z",
      fill: "#0F0F0F",
      class: "svg__fill--black"
    }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
