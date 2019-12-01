import { Message } from "discord.js";
import {randomBro} from "./util";


export function mood(msg: Message, cb: Function) {
	const responses = [
		"No u",
		"No.",
		"Not in the mood, " + randomBro()
	];

	if (Math.random() > 0.5) {
		// Good mood
		return cb();
	} else {
		// Bad mood
		return msg.reply(responses[Math.random() * responses.length]);
	}
};
