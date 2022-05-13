const commando=require("discord.js-commando");
class exile extends commando.Command{
    constructor(client){
        super(client,{
            name: 'exile',
            group: 'utility',
            memberName: 'exile',
            description: "Removes all lesser roles(uses SetRoles())"
          
        })};
        run(msg)
        {  try{
            if(msg.member.roles.find("name","muted"))
                msg.say("I don't know how this happened but you are supposed to be muted. I cannot remove your roles.Please wait for a better muting/unmuting function or a server role hierarchy change.Whichever is to blame.Probably the bot's owner.")
            else
            {msg.member.setRoles([]);
                msg.say("You exile and become Colorless");
            }
        } catch (err) {
            console.log(err);
            msg.say("Something went wrong trying to remove roles");
        }
            
        };

    }
    module.exports=exile;