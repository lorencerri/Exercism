export const transform = (prev) => {
    const next = {};
    for (var i in prev) {
        for (var x = 0; x < prev[i].length; x++) {
            next[prev[i][x].toLowerCase()] = Number(i);
        }
    }
    return next;
};
