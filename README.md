# :rocket: Protem

The rocket-fast project generator made in Node.js created by [asciidude](https://www.github.com/asciidude).

Looking for support? [Join us on Discord](https://discord.gg/NBxHE5UyTD).

## :thinking:  What is Protem?
Protem is a CLI where there is a set of projects to use, Protem will handle installing the node dependencies for the project (unless configured not to) along with any other requirements needed.

## :sunglasses: Why Protem?
Protem was made for convinence and ease-of-use. It gives you a starter template for a variety of projects, ranging from Discord bots (using Discord.js v12) to Express apps, and much more.

The file structure is already setup as well, with a clear description with what goes where and why in the `FILE_STRUCTURE.md` file. Protem also checks if the version is outdated to the latest version, and if so, notifys you that it is and that you should update. It also has a list of changes, but this is false by default.

## :gear: CLI Options
Everything is <b>optional</b> in the CLI, if left blank the default command should be `help`.

`create-template` | default: `true` | short: `T`\
Enable or disable if you want to actually create a template, most of the time you won't update this unless you want to check updates.

`check-updates` | default: `true` | short: `U`\
Check for updates every time Protem is used.

`list-changes` | default: `false` | short: `C`\
Show the list of changes if there is a new update.

`include-structure` | default: `true` | short: `f`\
This will include the `FILE_STRUCTURE.md` file.

`project` | default: `hello-world` | short: `p`\
This is the project to generate.

`include-builds` | default: `false` | short: `b`\
Specify if you want to include a build directory.

`new-directory` | default: `true` | short: `d`\
Specify if you want to make a new directory for the project (node modules will still install in root directory).

`watermark` | default: `true` | short: `w`\
Include the watermark for Protem at the start of your project.

`install-dependencies` | default: `true` | short: `i`\
Specify if you want to install dependencies or not.

Example command: `protem --check-updates false --project express-hbs --new-directory false`

## :robot: Exported Functions
`createProject(project: string, projectName: string, version: string)` Create a new project.

<b>createProject paremeters</b>\
`project` The project to use\
`name` What the project is named\
`version` The version of <b>your</b> project, not the Protem project.

## :cd: Projects

`hello-world` The default hello world project\
`express-https` An Express app that uses Handlebars and creates an HTTPS server\
`web-scraper` A simple web-scraper using Puppeteer\
`discord-bot` A bot with a command handler made in Discord.js v12, with a help and ping command

:lightbulb: <i>Protem stands for Project Templates</i>