const commando=require("discord.js-commando")
class rolehelp extends commando.Command{
    constructor(client){
        super(client,{
            name: 'rolehelp',
            group: 'utility',
            memberName: 'rolehelp',
            description: "information about how to assign certain roles on the server(roles must be lesser than the Asmodeus role)"
           
        })};
    run(msg)
    {
        msg.say("To get assigned a role on a server, provided i can assign that role, type "+ ".role followed by the role name." 
        +"\n"
    +"To remove all roles you currently have and that i can remove, type .exile");
    }
}
module.exports=rolehelp;