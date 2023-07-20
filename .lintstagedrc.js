module.exports = {
    '*.{js,ts,html}': ['npm run lint -- --fix', 'prettier --write', 'git add'],
};
