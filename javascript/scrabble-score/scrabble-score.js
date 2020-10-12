const values = {
    1: "AEIOULNRST",
    2: "DG",
    3: "BCMP",
    4: "FHVWY",
    5: "K",
    8: "JX",
    10: "QZ",
};

export const score = ([...letters]) => {
    return letters.reduce(
        (p, c) =>
            p +
            Number(
                Object.keys(values).find((v) =>
                    values[v].includes(c.toUpperCase())
                )
            ),
        0
    );
};
