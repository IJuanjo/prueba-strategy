import { calculate } from "./functions"
import { greet as greetGa } from "./function-2"
export function myFunctionFeat() {
    const getNumberSum = calculate(0);
    return getNumberSum + 1; // 2
}

export function greet() {
    const isMetakBra = greetGa("") === "tu no mete kbra..";

    return isMetakBra ? "GAA" : "🦀"
}