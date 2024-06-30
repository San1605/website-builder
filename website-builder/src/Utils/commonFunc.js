export const addPxToStyle = (styleObj) => {
    const newStyle = { ...styleObj };
    ['fontSize', 'width', 'height'].forEach(prop => {
        if (newStyle[prop] && !isNaN(newStyle[prop]) && !newStyle[prop].toString().endsWith('px')) {
            newStyle[prop] = `${newStyle[prop]}px`;
        }
    });
    return newStyle;
}