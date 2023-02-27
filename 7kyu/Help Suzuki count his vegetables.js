/**
 * Help Suzuki count his vegetables....
 * Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students
 * and the villagers that come for lunch on a daily basis.
 * This week there was a problem with his deliveries and all the vegetables became mixed up.
 * There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted.
 * Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.
 *
 * You will be given a string with the following vegetables:
 *
 * "cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
 * Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them.
 * If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).
 */

const countVegetables = (string) => {
  const vegeb =
    "cabbage carrot celery cucumber mushroom onion pepper potato tofu turnip".split(
      " "
    );
  return Object.entries(
    string.split(" ").reduce((acc, veg) => {
      if (vegeb.includes(veg)) {
        acc[veg] = (acc[veg] || 0) + 1;
        return acc;
      }
      return acc;
    }, {})
  )
    .sort()
    .reverse()
    .sort((a, b) => b[1] - a[1])
    .map((arr) => arr.reverse());
};

// console.log(
//   countVegetables(
//     "mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber " +
//       "mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber "
//   )
// );
