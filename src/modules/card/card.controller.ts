import { Router } from "express";
import { getCard } from "./services/get-card.service";

export const ToDoListController = Router();

ToDoListController.get("/card", function (req, res) {
    const cardData = getCard();
    return res.json(cardData);
});

// Post: Create, add
ToDoListController.post("/card", function (req, res) {
    const cardData = getCard();
    return res.json(cardData);
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
