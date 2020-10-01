const GIGASECOND_IN_MS = 1e12;

export const gigasecond = (date) => {
    return new Date(date.getTime() + GIGASECOND_IN_MS);
};
