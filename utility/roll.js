const commando = require("discord.js-commando");
const { Random } = require("random-js");
const random = new Random(); // so all the functions are inside the Random class and we need to do const {class name} to access them
//then we need to create a class to work with the functions; does it not already exist if imported??????????????????

/*



var roll_times=parseInt(amount,10);
            for(var i=0;i<roll_times;i++)
            {   msg.say("we are inside the for()");
                var value=r.integer(1,parseInt(side,10));
                try{
                msg.say("Rolled a"+ value +'\n');
            
                }catch(err){
                    console.log(err);
                    msg.say("I understood what dice to roll, but couldn't.");
                }
            }*/

class roll extends commando.Command {
  constructor(client) {
    super(client, {
      name: "roll",
      group: "utility",
      memberName: "roll",
      description:
        "Rolls a die with X sides Y amount of times. Takes X then Y as parameters",
      args: [
        {
          key: "side",
          prompt: "What die would you like to roll?",
          type: "string"
        },
        {
          key: "amount",
          prompt: "How many times would you like to roll?",
          type: "string"
        }
      ]
    });
  }
  run(msg, { side, amount }) {
    if (isNaN(side) || isNaN(amount)) {
      msg.say("You need to specify numbers for me to roll a die.");
    } else {
      if (0 < side && side < 100) {
        if (0 < amount && amount < 400) {
          try {
            var results = [];
            for (var i = 0; i < amount; i++) {
              const value = random.integer(1, side);
              results.push(value);
            }
            msg.say("The dice rolls are : " + results.join());
          } catch (err) {
            console.log(err);
            msg.say("Something went wrong rolling the dice");
          }
        } else {
          msg.say("Sorry, but I can't roll that many times");
        }
      } else {
        msg.say("Sorry, but I can't roll a die with that number of sides.");
      }
    }
  }
}
module.exports = roll;
