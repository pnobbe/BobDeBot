import {Message} from "discord.js";

export interface ICommand {
    readonly CMD: RegExp;
    init(): void
    isValid(cmd: string): Boolean
    process(cmd: string, msg: Message): Promise<void>
}

export abstract class Command implements ICommand{
    abstract readonly CMD: RegExp;

    init(): void {
    }

    isValid(cmd: string): Boolean {
        return this.CMD.test(cmd);
    }

    abstract process(cmd: string, msg: Message): Promise<void>

}
