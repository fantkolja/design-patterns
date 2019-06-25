import { fork } from 'child_process';
import { lstatSync, readdirSync } from'fs';
import { resolve } from 'path';
import { prompt } from 'inquirer';

const PATTERNS_ROOT = 'patterns';

function isDirectory(source) {
    return lstatSync(source).isDirectory();
}
function getDirectories(source) {
    return readdirSync(source).reduce((dirs, name) => {
        if (isDirectory(resolve(source, name))) {
            dirs.push(name);
        }
        return dirs;
      }, [])
}
function runPattern(pattern) {
    console.log(`Running "${pattern}"...\n`);
    const subprocess = fork(`./${PATTERNS_ROOT}/${pattern}`, ['-r', 'ts-node/register']);
}

function isProvidedByUser(patterns, argPattern) {
    return argPattern
     && patterns.find(dir => dir.toLowerCase() === argPattern.toLowerCase());
}

async function main() {
    const argPattern = process.argv[2];
    const directories = getDirectories(resolve(__dirname, PATTERNS_ROOT));

    if (isProvidedByUser(directories, argPattern)) {
        runPattern(argPattern);
    } else {
        const { patternChoice } = await prompt({
            type: 'list',
            name: 'patternChoice',
            message: 'Please choose a pattern to be launched!',
            choices: directories,
        });
        runPattern(patternChoice);
    }
}
main();