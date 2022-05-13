const commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");
const fs = require("fs");

var sale_address = fs.readFileSync(__dirname + "/sale_address.txt", "utf8");

class sale extends commando.Command {
  constructor(client) {
    super(client, {
      name: "sale",
      group: "utility",
      memberName: "sale",
      description: "Shows current sales in Idle Wizard"
    });
  }
  run(msg) {
    try {
      fetch(sale_address)
        .then(function(response) {
          {
            return response.json();
          }
        })
        .then(function(myJson) {
          if (myJson && myJson.items) {
            var sale_info =
              "```diff\n " +
              "Current Market Sales\n" +
              " Time Left:\n" +
              "+" +
              myJson.seconds_left / 3600 +
              "hours \n";

            for (var i = 0; i < myJson.items.length; i++) {
              sale_info = sale_info.concat(
                " Name:\n" + "+" + myJson.items[i].name + "\n"
              );
              sale_info = sale_info.concat(
                " Discount:\n" + "+" + myJson.items[i].discount + "% \n"
              );
            }
            sale_info = sale_info.concat("```");
            msg.say(sale_info);
          } else msg.say("There is no sale currently going on.");
        });
    } catch (err) {
      console.log(err);
      msg.say("Something went wrong trying to display the sale information.");
    }
  }
}
module.exports = sale;
