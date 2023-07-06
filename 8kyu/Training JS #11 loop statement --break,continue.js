/**
 * You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll",
 * you should push it to a bag.
 */

const grabDoll = (dolls) => {
  const bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (!/^(Hello Kitty|Barbie doll)$/.test(dolls[i])) continue;
    bag.push(dolls[i]);
    if (bag.length === 3) break;
  }
  return bag;
};
