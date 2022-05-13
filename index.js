
const fs=require("fs");
var moment=require("moment");
const commando= require("discord.js-commando");
const bot = new commando.Client({
    commandPrefix:'.',
    disableEveryone:true,
    unknownCommandResponse:false
});
var time=moment().format("dddd, MMMM Do YYYY, h:mm:ss a");


bot.registry.registerGroups([
   ["utility","utility"],["admin","admin"]
]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn( __dirname + "/commands");

bot.on('reconnecting', () => {
    console.log('I am reconnecting now!'+" on "+time);
}).on('resume', () => {
    console.log('Reconnected '+" on "+time);
}).on('disconnect', () => {
    console.log('Disconnected from the server'+" on "+time);
}).on('unhandledRejection',err=>{
    console.error("Uncaught promise rejection!\n"+ err.stack);

})

var secret=fs.readFileSync(__dirname+ "/BotSecret.txt", "utf8");
bot.login(secret);
