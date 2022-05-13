const commando=require("discord.js-commando");
class unmute extends commando.Command{
    constructor(client){
        super(client,{
            name: 'unmute',
            group: 'admin',
            memberName: 'unmute',
            description: "Unmutes a user. Requires a role called muted and a muted user"
           
        })};
        run(msg)
        { 
            try{
                if(msg.member.hasPermission("KICK_MEMBERS"))
                {   let rolee=msg.guild.roles.find("name","muted");
                    let memb= msg.mentions.members.first();
                    if(memb.roles.find("name","muted"))
                    {memb.removeRole(rolee.id);
                        msg.say("user unmuted");
                    }
                    else
                        msg.say("This user is not muted");
                }
                else
                    msg.say("You cannot unmute users on this server");
            } catch (err) {
                console.log(err);
                msg.say("You cannot unmute users on this server");

            }

       
    }
}
module.exports=unmute;