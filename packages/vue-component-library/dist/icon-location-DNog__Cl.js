import { createElementBlock as t, openBlock as o, createElementVNode as e } from "vue";
const r = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-location"
};
function s(n, l) {
  return o(), t("svg", r, l[0] || (l[0] = [
    e("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M22.5291 20.7109C24.2103 18.7387 25.158 16.7671 25.158 14.3999C25.158 9.34211 21.0578 5.24194 16 5.24194C10.9422 5.24194 6.84204 9.34211 6.84204 14.3999C6.84204 16.7671 7.78975 18.7387 9.47089 20.7109C11.0688 22.5855 13.229 24.3503 15.7251 26.3896C15.8163 26.4641 15.9079 26.5389 16 26.6142C16.0921 26.5389 16.1837 26.4641 16.2749 26.3896C18.7711 24.3503 20.9312 22.5855 22.5291 20.7109ZM17.2546 27.5262C22.3805 23.3402 26.658 19.847 26.658 14.3999C26.658 8.51368 21.8863 3.74194 16 3.74194C10.1138 3.74194 5.34204 8.51368 5.34204 14.3999C5.34204 19.847 9.61956 23.3402 14.7454 27.5262C14.95 27.6933 15.1559 27.8615 15.363 28.031C15.7332 28.3339 16.2668 28.3339 16.637 28.031C16.8441 27.8615 17.05 27.6933 17.2546 27.5262Z",
      fill: "#0B6AB7",
      class: "svg__fill--primary-blue-03"
    }, null, -1),
    e("circle", {
      cx: "16",
      cy: "14.1343",
      r: "2.92943",
      stroke: "#0B6AB7",
      "stroke-width": "1.5",
      class: "svg__stroke--primary-blue-03"
    }, null, -1),
    e("path", {
      d: "M22.8552 24.4468C21.0562 26.2058 18.9059 27.9252 16.6359 29.7837C16.2658 30.0867 15.7329 30.0867 15.3628 29.7837C13.0927 27.9252 10.9425 26.2058 9.14343 24.4468",
      stroke: "#0AA5FF",
      "stroke-width": "1.25",
      "stroke-linecap": "round",
      class: "svg__stroke--default-cyan-03"
    }, null, -1)
  ]));
}
const i = { render: s };
export {
  i as default,
  s as render
};
