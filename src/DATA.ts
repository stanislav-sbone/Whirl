import type { CaresItem } from "./types"
import antiLoss from "/anti-loss.svg";
import exchange from "/exchange.svg";
import encrypt from "/encrypt.svg";
import options from "/options.svg";
import arrowDown from "/arrow-down.svg";

export const CARES: CaresItem[] = [
    {
        id: 1,
        image: antiLoss,
        title: "Anti-loss technology",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        arrowDown: arrowDown,
        isOpened: false
    },
    {
        id: 2,
        image: exchange,
        title: "Exchange easily",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        arrowDown: arrowDown,
        isOpened: false
    },
    {
        id: 3,
        image: encrypt,
        title: "Fully encrypted",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        arrowDown: arrowDown,
        isOpened: false
    },
    {
        id: 4,
        image: options,
        title: "Plenty of options",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        arrowDown: arrowDown,
        isOpened: false
    }
]