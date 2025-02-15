import { createElementBlock as l, openBlock as o, createElementVNode as n } from "vue";
const t = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg__icon-location-filled"
};
function i(r, e) {
  return o(), l("svg", t, e[0] || (e[0] = [
    n("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M17.2548 27.5288C22.3816 23.342 26.66 19.8481 26.66 14.4C26.66 8.51263 21.8873 3.73999 16 3.73999C10.1126 3.73999 5.33997 8.51263 5.33997 14.4C5.33997 19.8481 9.61829 23.342 14.7451 27.5288C14.9348 27.6837 15.1257 27.8396 15.3176 27.9966C15.7141 28.321 16.2859 28.321 16.6824 27.9966C16.8742 27.8396 17.0651 27.6837 17.2548 27.5288ZM15.9996 18.0645C17.6177 18.0645 18.9295 16.7527 18.9295 15.1345C18.9295 13.5163 17.6177 12.2045 15.9996 12.2045C14.3814 12.2045 13.0696 13.5163 13.0696 15.1345C13.0696 16.7527 14.3814 18.0645 15.9996 18.0645Z",
      fill: "#0B6AB7",
      class: "svg__fill--primary-blue-03"
    }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
