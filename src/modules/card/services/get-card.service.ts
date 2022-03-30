import { linkDb } from "../../../shared/db/link-db";

export function getCard() {
    return linkDb("card", "task", "tasks", "id");
}
