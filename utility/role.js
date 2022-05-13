const commando=require("discord.js-commando");
class role extends commando.Command{
    constructor(client){
        super(client,{
            name: 'role',
            group: 'utility',
            memberName: 'role',
            
            description: "assigns a role(provided the role is lesser than the Asmodeus role)",
            args:[
                {
                    key:'role',
                    prompt:"What class would you like to choose?",
                    type:"string"
                }
            ]
          
        })};

        run(msg,{role})
        {   
            try{
                if(msg.guild.roles.find("name",role))
                {  let rolee=msg.guild.roles.find("name",role)
                    if(msg.member.roles.find("name",role))
                        msg.say("You already have that role!");
                    else
                    {  
                        msg.member.addRole(rolee.id);
                        msg.say("Role assigned");
                    }
                }
                else
                    msg.say("There is no such role on this server,please check if you spelled it correctly");
            }catch(err){
                console.log(err);
                msg.say("Something went wrong trying to assign the role.");
            }
           
        
    
}
    }
    module.exports=role;