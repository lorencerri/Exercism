export const compute = ([...a], [...b]) => {
    if ((a.length == 0 || b.length == 0) && a.length + b.length >= 1)
        throw new Error(
            `${a.length == 0 ? "left" : "right"} strand must not be empty`
        );
    else if (a.length !== b.length)
        throw new Error("left and right strands must be of equal length");
    return a.map((_, index) => a[index] === b[index]).filter((i) => !i).length;
};
