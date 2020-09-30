protein_list = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan"
}

def proteins(strand):
    codons = []
    result = []
    for i in range(0, len(strand), 3):
        codons.append(strand[i: i + 3])
    for i in range(len(codons)):
        protein = protein_list.get(codons[i])
        if protein:
            result.append(protein)
        else:
            break
    return result