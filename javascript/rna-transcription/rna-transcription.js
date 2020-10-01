const RNA = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
};

export const toRna = ([...DNA]) => {
    return DNA.map((i) => RNA[i])
        .filter(Boolean)
        .join("");
};
