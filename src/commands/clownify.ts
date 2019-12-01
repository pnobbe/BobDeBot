import {default_clownify} from "../config/config.json";
import {clowns} from "../assets/data/clowns.json";
import {Command} from "./ICommand";
import {Message} from "discord.js";

export default class Clownify extends Command {
    readonly CMD: RegExp = /^\/(off|on)(?: |$)/im;
    private shouldClownify: Boolean = default_clownify;

    async process(cmd: string, msg: Message): Promise<void> {
        switch (cmd) {
            case "on":
                this.shouldClownify = true;
                break;
            case "off":
                this.shouldClownify = false;
                break;
            default:
                break;
        }

        if (!this.shouldClownify) return;

        if (clowns.filter(clown => clown.id === msg.author.id)) {
            msg.react('🤡');
        }

    }
}
