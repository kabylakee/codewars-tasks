/**
 * return a string "This white dog has 4 legs."
 */

const animal = ({ name, legs, color }) =>
  `This ${color} ${name} has ${legs} legs.`;

animal({ name: "dog", legs: 4, color: "white" });
