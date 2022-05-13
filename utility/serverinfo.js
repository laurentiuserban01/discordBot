const commando= require("discord.js-commando");
const {RichEmbed}=require("discord.js");
class serverinfo extends commando.Command{
    constructor(client){
       super(client,{ 
        name:"serverinfo",
        group:"utility",
        memberName:"serverinfo",
       description:"Shows server information"

    })
};
    run(msg)
        {
        try{
            const embed = new RichEmbed()
            .setDescription("Information about "+msg.guild.name)
            .setAuthor(msg.author.username, msg.author.displayAvatarURL)
            .setColor(0x00AE86)
            .setThumbnail(msg.guild.iconURL)
            .addField("User count","**[**"+msg.guild.memberCount+"**]**")
            .addField("Server region",msg.guild.region.toUpperCase())
            .addField("Server owner",msg.guild.owner)
            .addField("Created on ",msg.guild.createdAt)
            .setTimestamp();
            return msg.embed(embed);
        }catch(err){
            console.log(err);
            msg.say("Something went wrong trying to display the server information.");
        }
   
}


}
module.exports=serverinfo;