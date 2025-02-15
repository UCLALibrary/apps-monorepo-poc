import { createElementBlock as s, openBlock as t, createElementVNode as e } from "vue";
const o = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-person"
};
function l(n, r) {
  return t(), s("svg", o, r[0] || (r[0] = [
    e("circle", {
      cx: "16.0194",
      cy: "15.199",
      r: "12.0989",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M26.3528 24.3154C23.795 27.2077 20.0563 29.0313 15.8917 29.0313C8.18163 29.0313 1.9314 22.7811 1.9314 15.071C1.9314 11.4724 3.29301 8.1918 5.52916 5.71631",
      stroke: "#0AA5FF",
      "stroke-width": "1.25",
      "stroke-linecap": "round",
      class: "svg__stroke--default-cyan-03"
    }, null, -1),
    e("circle", {
      cx: "16.0199",
      cy: "11.0138",
      r: "3.72274",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M13.2277 16.6643H18.8119C20.4537 16.6643 21.7846 17.9952 21.7846 19.637V20.8033C21.7846 21.4546 21.5811 21.9975 21.1958 22.3319C20.2877 23.1199 18.5683 24.2184 16.0198 24.2184C13.4713 24.2184 11.7519 23.1199 10.8438 22.3319C10.4585 21.9975 10.255 21.4546 10.255 20.8033V19.637C10.255 17.9952 11.5859 16.6643 13.2277 16.6643Z",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "svg__stroke--primary-blue-03"
    }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
