const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const modelPrototype = require('./resource/model.prototype')
const typePrototype = require('./resource/type.prototype')
const resolverPrototype = require('./resource/resolver.prototype')
let args = process.argv.slice(3)

const modelPath = path.join(__dirname, "../app/models/" + args[1] + ".js")
const typePath = path.join(__dirname, "../app/types/" + args[1] + ".js")
const resolverPath = path.join(__dirname, "../app/resolvers/" + args[1] + "Resolver.js")

switch (args[0]) {
    case "model":
        fs.exists(modelPath, function (exists) {
            if (exists) {
                console.log(chalk.red(`Error! model ${args[1]} was exits!`));
            } else {
                createModel(args[1])
            }
        })
        break
    case "resouce":
        fs.exists(modelPath, function (exists) {
            if (exists) {
                console.log(chalk.red(`Error! model ${args[1]} is exits!`));
            } else {
                createModel(args[1])
            }
        })
        fs.exists(typePath, function (exists) {
            if (exists) {
                console.log(chalk.red(`Error! type ${args[1]} is exits!`));
            } else {
                createType(args[1])
            }
        })
        fs.exists(resolverPath, function (exists) {
            if (exists) {
                console.log(chalk.red(`Error! model ${args[1]} is exits!`));
            } else {
                createResolver(args[1])
            }
        })
        break
    default:
        console.log("There are nothing here!")
}

function createModel(name) {
    fs.writeFile(
        modelPath,
        modelPrototype(name),
        "utf-8",
        function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(chalk.green(`Awesome! model ${name} was create succesfully!`));
        });
}
function createType(name) {
    fs.writeFile(
        typePath,
        typePrototype(name),
        "utf-8",
        function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(chalk.green(`Awesome! type ${name} was create succesfully!`));
        });
}
function createResolver(name) {
    fs.writeFile(
        resolverPath,
        resolverPrototype(name),
        "utf-8",
        function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(chalk.green(`Awesome! resolver ${name} was create succesfully!`));
        });
}