export const toDecimal = (
  binary: string,
  decimal: number = 0,
  position: number = 0
): number => {
  /*
    if we were not doing this challenge,
    then this is the easiest way to do this
    in JS
     
  return parseInt(binary, 2);

    the challenge is suggesting we do the math
  */

  if (binary.length === 0) return decimal;

  return toDecimal(
    binary.substr(0, binary.length - 1),
    decimal + Number(binary[binary.length - 1]) * Math.pow(2, position),
    position + 1
  );
};
