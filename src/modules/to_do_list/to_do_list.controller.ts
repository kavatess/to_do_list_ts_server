import { Router } from "express";

export const ToDoListController = Router();

ToDoListController.get("/get-task", function (req, res) {
    // const taskData = fs.readFileSync('./database/task/task.json', 'utf-8');
    return res.json({ msg: "hello" });
});
