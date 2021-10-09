const { Command } = require('commander');
module.exports.program = new Command();

const package = require('../package.json');
const getLatestVersion = require('./utils/getLatestVersion.js');
const { get } = require('simple-requests');

this.program.version('0.0.1').name('protem').addHelpText('after', 'If you need additional support, join our Discord at https://discord.gg/NBxHE5UyTD')
    .option('-T, --create-template', 'Specify if you\'d like to create a project template, using this for otherwise is used for update checking', true)
    .option('-U, --check-updates', 'Specify if you want to check for Protem updates', true)
    .option('-C, --list-changes', 'If there is a new update, specify if you want to list the changes', false)
    .option('-p, --project', 'Set the project template to generate', 'hello-world')
    .option('-d, --new-directory', 'Specify if you want to create a new directory or not', true)
    .option('-w, --watermark', 'Specify if you want the Protem watermark to generate with the file', true)
    .option('-i, --install-dependencies', 'Specify if you want to install dependencies or not', true);

this.program.parse(process.argsv);

const options = this.program.opts();

const main = async () => {
    if(options.checkUpdates) {
        if(package.version < await getLatestVersion('protem')) {
            console.log('⚠ THERE IS A NEW VERSION AVALIABLE FOR PROTEM ⚠\n' +
                        'Please install the new version with this command: npm i protem --save\n' +
                        'If there are any bugs, report it to the developer on our Discord server: https://discord.gg/NBxHE5UyTD\n' +
                        '⚠ THERE IS A NEW VERSION AVALIABLE FOR PROTEM ⚠');
        }
    }
    
    if(options.listChanges) {
        if(package.version < await getLatestVersion('protem')) {
            await get('https://pastebin.com/raw/psZqjTzi').then((res) => {
                console.log(res.data);
            });
        }
    }
}

main();

if(!options.createTemplate) return;