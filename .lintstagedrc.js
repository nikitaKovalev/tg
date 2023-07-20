module.exports = {
    '*.{js,ts,html}': ['npm run lint -- --fix=true', 'prettier --write', 'git add'],
};
