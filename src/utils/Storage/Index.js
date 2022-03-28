export const setDataStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
export const getDataStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
};
export const removeDataStorage = (key) => {
    localStorage.removeItem(key);
};
export const clearDataStorage = () => {
    localStorage.clear();
};
