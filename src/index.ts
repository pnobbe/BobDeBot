import {Client} from 'discord.js'
import {default_clownify, prefix} from "./config/config.json"
import {token} from "../secret.json"


import {vibe} from './commands/vibe';
import {mood} from './mood';
import {randomBro} from "./util";


const client = new Client();


client.on('message', msg => {
    return mood(msg,() => {
        if (msg.author.bot) return;

        let command = null
        if (msg.content.indexOf(prefix) === 0) {
            const args: String[] = msg.content.slice(prefix.length).trim().split(/ +/g);
            command = args.shift()!.toLowerCase();
        }


        switch (command) {
            case "vibecheck":
                return vibe(msg);
            default:
                return msg.reply("I don't know that command, " + randomBro());
        }
    });
});


client.login(token);
