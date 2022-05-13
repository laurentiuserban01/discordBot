const commando=require("discord.js-commando");
class kick extends commando.Command{
    constructor(client){
        super(client,{
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: "Kicks a user(permissions and roles must allow Arachna to kick)."
            
        })};
        run(msg)
        { let memb = msg.mentions.members.first();
            try{
                if(msg.member.hasPermission("KICK_MEMBERS"))
                {memb.kick();
                    msg.say("User kicked");   
                }
                else
                    msg.say("you can't kick members");
            } catch (err) {
                console.log(err);
                msg.say("you can't kick members");

            }

        }
    }
module.exports=kick;