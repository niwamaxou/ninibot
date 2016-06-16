const exec = require('child_process').exec;
import * as LOGGER from "./log"
import {logout} from "./login"

export default function update(bot, message) {
  exec('/home/maxou/workspace/ninibot/src/admin/./version.sh', (error, stdout, stderr) => {
    if (error) {
      bot.sendMessage(message.channel, ""+error);
      LOGGER.LOG(`exec error: ${error}`);
      return;
    }
    bot.sendMessage(message.channel, ""+JSON.parse(stdout));
    LOGGER.LOG(`stdout: ${stdout}`);

    return;
  });

}
