/**
 * Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
 */

// const colorOf = (r, g, b) =>
//   `#${r.toString(16).length === 2 ? r.toString(16) : "0" + r.toString(16)}${
//     g.toString(16).length === 2 ? g.toString(16) : "0" + g.toString(16)
//   }${b.toString(16).length === 2 ? b.toString(16) : "0" + b.toString(16)}`;

const colorOf = (...rgb) =>
  "#" + rgb.map((color) => `0${color.toString(16)}`.slice(-2)).join("");
