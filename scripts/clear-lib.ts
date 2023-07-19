const {exec} = require('child_process');

const isKnownArg = args => {
    const knownArgs = ['--dir', '--name'];

    // args should start with known args and should have both of them
    return (
        args.every(arg => knownArgs.includes(arg.split('=')[0])) &&
        args.length === knownArgs.length
    );
};

const getValue = (arg, knownArg) =>
    arg.find(a => a.split('=')[0] === knownArg).split('=')[1];

/**
 * Function to remove unnecessary files from lib
 * should be run for libraries type like assets, styles etc.
 * Libraries that don't need to be tested or built
 *
 * @example npm run clear-lib -- --dir=shared --name=environments
 **/
(function main() {
    const args = process.argv.slice(2);

    if (args.length < 2) {
        throw new Error('Please, pass command line arguments: --dir, --name');
    }

    if (!isKnownArg(args)) {
        throw new Error('Unknown command line arguments');
    }

    const dir = getValue(args, '--dir');
    const name = getValue(args, '--name');

    exec(
        `
        npx rimraf ./libs/${dir}/${name}/*.js ./libs/${dir}/${name}/*.json ./libs/${dir}/${name}/src/*.* ./libs/${dir}/${name}/src/lib
        `,
        {stdio: `inherit`},
    );
})();
