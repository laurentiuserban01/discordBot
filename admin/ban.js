const commando=require("discord.js-commando");
class ban extends commando.Command{
    constructor(client){
        super(client,{
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: "Bans a user(permissions and roles must allow Arachna to ban)."
            
        })};
        run(msg)
        { 
            
            
            try{
                    let memb = msg.mentions.members.first();
                if (msg.member.hasPermission("BAN_MEMBERS"))
                {memb.ban();
                    msg.say("User banned");   
                }
                else
                    msg.say("you can't ban members");
            } catch (err) {
                console.log(err);
                msg.say("you can't ban members");

            }
            


        }
    }
module.exports=ban;
