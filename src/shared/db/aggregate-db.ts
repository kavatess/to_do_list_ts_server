import { readJsonFile } from "./read-json-file";

export function aggregate(
    root: string,
    child: string,
    rootVar: string,
    childVar: string
) {
    let rootDb = readJsonFile(`../../../database/common/${root}.json`) as any[];
    let childDb = readJsonFile(`../../../database/common/${child}.json`) as any[];
    return rootDb.map((rootDoc) => {
        if (typeof rootDoc[rootVar] === "string") {
            childDb.map((doc) => {
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
aggregate("card", "task", "tasks", "id");
