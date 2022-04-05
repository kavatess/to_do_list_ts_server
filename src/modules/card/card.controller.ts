import { Router } from "express";
import { CreateTaskBody } from "./models/create-task.model";
import { addTaskToCard } from "./services/create-task.service";
import { getCard } from "./services/get-card.service";

export const ToDoListController = Router();

ToDoListController.get("/card", function (req, res) {
    const cardData = getCard();
    return res.json(cardData);
});

// Post: Create, add
ToDoListController.post("/card", function (req, res) {
    const { jobName, assignedMembers, createdAt, endTime, cardId }: CreateTaskBody = req.body;
    if (!jobName) {
        res.end(new Error("jobName is missing."));
    }
    addTaskToCard(req.body);
    // return res.json(cardData);
});

// Put: Update, add to set
ToDoListController.put("/card", function (req, res) {
    const cardData = getCard();
    return res.json(cardData);
});

// Delete: Remove an element in array, delete
ToDoListController.delete("/card", function (req, res) {
    const cardData = getCard();
    return res.json(cardData);
});
