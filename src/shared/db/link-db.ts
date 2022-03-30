import { ProcessFile } from "./process-file";
import path from "path";

const rootPath = `${path.resolve(__dirname)}/../../../`;

export function linkDb(
    root: string,
    child: string,
    rootVar: string,
    childVar: string
) {
    const rootDb = ProcessFile.readJsonFile(`${rootPath}/database/common/${root}.json`) as any[];
    const childDb = ProcessFile.readJsonFile(`${rootPath}/database/common/${child}.json`) as any[];
    return rootDb.map((rootDoc) => {
        if (typeof rootDoc[rootVar] === "string") {
            childDb.map(doc => {
                if (doc[childVar] === rootDoc[rootVar]) {
                    rootDoc[rootVar] = doc;
                }
            });
        }
        else if (typeof rootDoc[rootVar] === "object" && rootDoc[rootVar].length >= 0) {
            const arr = [];
            rootDoc[rootVar].map((id: string) => {
                childDb.map((doc) => {
                    if (doc[childVar] === id) {
                        arr.push(doc);
                    }
                });
            });
            rootDoc[rootVar] = arr;
        }
        else {
            throw new Error("Cannot link");
        }
        return rootDoc;
    });
}
