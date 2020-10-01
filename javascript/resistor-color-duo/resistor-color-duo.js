const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];

const getColor = (index) => {
    return COLORS.indexOf(index);
};

export const decodedValue = (colors) => {
    return getColor(colors[0]) * 10 + getColor(colors[1]);
};
