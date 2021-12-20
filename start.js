const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('USAGE: day <num> [args..]');
}

const day = args[0];
const dayArgs = args.slice(1);
const { fork } = require('child_process');

const child = fork('index.js', [dayArgs], { cwd: `days/${day}` });
child.on('error', (error) => {
    console.log(`spawning day ${day} with args "${dayArgs}" failed with exit code ${error.errno} ${error.code}`);
});
