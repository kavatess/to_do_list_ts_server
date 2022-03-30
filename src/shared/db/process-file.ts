import { readFileSync, writeFileSync } from "fs";

class FileProcess {
    readJsonFile(path: string) {
        return JSON.parse(readFileSync(path, "utf-8"));
    }

    writeJsonFile(path: string, data: string | NodeJS.ArrayBufferView) {
        return writeFileSync(path, data, "utf-8");
    }
}

export const ProcessFile = new FileProcess();
