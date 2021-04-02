export const isPangram = (str) => {
    // Create a unique Set of the characters ascii decimal equivalent (e.g: 'ab' -> [97, 98])
    const chars = new Set([...str.toLowerCase()].map((i) => i.charCodeAt(0)));
    // Filter out any ascii text that isn't part of the lowercase range, return if the length is 26 or not
    return [...chars].filter((n) => n >= 97 && n <= 122).length == 26;
};
