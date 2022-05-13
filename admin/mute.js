const commando=require("discord.js-commando");
class mute extends commando.Command{
    constructor(client){
        super(client,{
            name: 'mute',
            group: 'admin',
            memberName: 'mute',
            description: "Mutes a user. Requires a role called muted"
           
        })};
        run(msg)

        { let memb= msg.mentions.members.first();
            try{
                if(msg.member.hasPermission("KICK_MEMBERS"))
                {
                    if(msg.guild.roles.find("name","muted"))
                    {
                        let rolee=msg.guild.roles.find("name","muted");
                        memb.addRole(rolee.id);
                        msg.say("User muted");
                    }
                    else
                        msg.say("You do not have a role named"+"'"+"muted"+"'"+"on this server.");
                }
                else
                    msg.say("You cannot mute people on this server");
            } catch (err) {
                console.log(err);
                msg.say("You cannot mute people on this server");

            }

        }
    }
module.exports=mute;