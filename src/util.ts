import { bros } from "./assets/data/bro.json"

export function randomBro() { return bros[Math.random() * bros.length] }
