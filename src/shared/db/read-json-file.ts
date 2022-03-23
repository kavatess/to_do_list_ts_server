import { readFileSync } from "fs";

export function readJsonFile(path: string) {
    return JSON.parse(readFileSync(path, "utf-8"));
}
