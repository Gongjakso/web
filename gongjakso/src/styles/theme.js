const windowSize = {};

const fontSize = {
    xs: '0.5rem',
    sm: '0.75rem',
    base: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
};

const colorSystem = {
    Main1: '#0150F1',
    Main2: '#00A3FF',
    Light1: '#7CD0FF',
    Light2: '#0150F1',
    Green: '#00EFAF',
    Navy: '#000B6E',
    Purple: '#9556FF',
    Pink: '#E789FF',
    border: '#dbdbdb',
    borderline: '#969696',
};

const defaultfont = {
    mainFont: '#000000',
    subFont: '#8C8C8C',
    subFont2: '#C4C4C4',
    mainFont2: '#FFFFFF',
};

const repo = {
    open: 'red',
    close: 'blue',
};

const theme = {
    windowSize,
    repo,
    fontSize,
    ...colorSystem,
    ...defaultfont,
};

export default theme;
