/*export const reverseString = (str) => {
    return [...str].reverse().join("");
};*/

export const reverseString = ([...str], out = "") => {
    for (var i = str.length - 1; i >= 0; i--) out += str[i];
    return out;
};
