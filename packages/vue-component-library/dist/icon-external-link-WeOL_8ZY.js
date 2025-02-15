import { createElementBlock as r, openBlock as s, createElementVNode as e } from "vue";
const l = {
  width: "32",
  height: "33",
  viewBox: "0 0 32 33",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-external-link"
};
function o(n, t) {
  return s(), r("svg", l, t[0] || (t[0] = [
    e("g", { "clip-path": "url(#a)" }, [
      e("path", {
        d: "m11.878 19.5671 9.5414-9.5415",
        stroke: "#0B6AB7",
        "stroke-width": "1.5",
        "stroke-linecap": "square",
        "stroke-linejoin": "round",
        class: "svg__stroke--primary-blue-03"
      }),
      e("path", {
        d: "M22.7092 19.5667v.75h-1.5v-.75h1.5Zm-.75-10.08159v-.75h.75v.75h-.75Zm-10.0815.74999h-.75V8.73511h.75v1.49999Zm9.3315 9.3316V9.48511h1.5V19.5667h-1.5Zm.75-9.3316H11.8777V8.73511h10.0815v1.49999Z",
        fill: "#0B6AB7",
        class: "svg__fill--primary-blue-03"
      }),
      e("path", {
        d: "M7 25.4744h14.2857",
        stroke: "#0AA5FF",
        "stroke-width": "1.5",
        class: "svg__stroke--default-cyan-03"
      })
    ], -1)
  ]));
}
const a = { render: o };
export {
  a as default,
  o as render
};
