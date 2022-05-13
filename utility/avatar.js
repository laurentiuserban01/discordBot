const commando=require("discord.js-commando");
const {RichEmbed}=require("discord.js");
class avatar extends commando.Command{
    constructor(client){
        super(client,{
            name: 'avatar',
            group: 'utility',
            memberName: 'avatar',
            description: "Posts the user's avatar"
           
        })};
        run(msg)
        { try{
            msg.say(msg.mentions.users.first().avatarURL);
        }catch(err){
            console.log(err);
            msg.say("Something went wrong trying to display the avatar.");
        }

        }
    }
module.exports=avatar;