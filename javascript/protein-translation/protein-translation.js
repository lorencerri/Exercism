const proteins = {
    Methionine: ["AUG"],
    Phenylalanine: ["UUU", "UUC"],
    Leucine: ["UUA", "UUG"],
    Serine: ["UCU", "UCC", "UCA", "UCG"],
    Tyrosine: ["UAU", "UAC"],
    Cysteine: ["UGU", "UGC"],
    Tryptophan: ["UGG"],
    STOP: ["UAA", "UAG", "UGA"],
};

const getProtein = (codon) => {
    return Object.keys(proteins).find((x) => proteins[x].includes(codon));
};

export const translate = (strand = "") => {
    let res = [];
    for (var i = 0; i < strand.length; i += 3) {
        let protein = getProtein(strand.substring(i, i + 3));
        if (!protein) throw new Error("Invalid codon");
        if (protein === "STOP") break;
        res.push(protein);
    }
    return res;
};
