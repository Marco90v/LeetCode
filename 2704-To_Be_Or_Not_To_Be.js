/**
 * @param {string} val
 * @return {Object}
 */
const expect = function (val) {
  return {
    toBe: (v2) => {
      if (val !== v2) throw new Error("Not Equal");
      else return true;
    },
    notToBe: (v2) => {
      if (val === v2) throw new Error("Not Equal");
      else return true;
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));
