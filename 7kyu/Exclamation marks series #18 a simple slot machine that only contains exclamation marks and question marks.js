/**
 * Exclamation marks series #18: a simple slot machine that only contains exclamation marks and question marks
 * Description:
 * You are playing a simple slot machine that only contains exclamation marks and question marks.
 * Every time the slot machine is started, a string of 5 length is obtained. If you're lucky enough to get a Special permutation, you'll win the bonus.
 * Give you a string s, return the highest bonus.
 *
 * Bouns list:
 *
 * Five-of-a-Kind:   ---- 1000
 * "!!!!!" or "?????"
 *
 * Four-of-a-Kind:    ---- 800
 * The string contains a "!!!!" or "????"
 * "!!!!?","?!!!!","????!","!????"
 *
 * Full House:         ----500
 * such as "!!!??" or "???!!"...
 *
 * Three-of-a-Kind:    ---- 300
 * The string contains a "!!!" or "???"
 * such as "!!!?!","!???!"...
 *
 * Two pair:           ---- 200
 * The string contains two "!!" or "??"
 * such as "??!!?","!!?!!"
 *
 * A Pair:             ---- 100
 * The string contains a "!!" or "??"
 * such as "?!??!","!!?!?"
 *
 * Others              ---- 0
 * such as "?!?!?","!?!?!"
 */

function slot(s) {
  if (s.includes("!!!!!") || s.includes("?????")) {
    return 1000;
  }
  if (s.includes("!!!!") || s.includes("????")) {
    return 800;
  }
  if (
    (s.includes("!!!") && s.includes("??")) ||
    (s.includes("???") && s.includes("!!"))
  ) {
    return 500;
  }
  if (s.includes("!!!") || s.includes("???")) {
    return 300;
  }
  if (
    s === "??!!?" ||
    s === "!!?!!" ||
    s === "!??!!" ||
    s === "?!!??" ||
    s === "!!??!" ||
    s === "??!??"
  ) {
    return 200;
  }
  if (s.includes("!!") || s.includes("??")) {
    return 100;
  }
  return 0;
}

// function slot(str) {
//   const length = str
//     .match(/([?!])\1*/g)
//     .map((char) => char.length)
//     .sort((a, b) => b - a);

//   switch (length.length) {
//     case 1:
//       return 1000;
//     case 2:
//       return length[0] === 4 ? 800 : 500;
//     case 3:
//       return length[0] === 3 ? 300 : 200;
//     case 4:
//       return 100;
//     default:
//       return 0;
//   }
// }

// console.log(slot("!?!?!"));
