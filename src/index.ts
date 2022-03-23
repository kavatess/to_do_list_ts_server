import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { ToDoListController } from "./modules/card/card.controller";
import { UserController } from "./modules/user/user.controller";
import bodyParser from "body-parser";

// Initialize application variables
const app = express();
const PORT = process.env.PORT || 1000;

app.use(helmet());
app.use(morgan('common'));
app.use(bodyParser());
app.use(UserController);
app.use(ToDoListController);

app.listen(PORT, () => {
    console.log(`⚡️[Starting]: Server is running at https://localhost:${PORT}`);
});
