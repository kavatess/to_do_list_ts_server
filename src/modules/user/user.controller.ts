import { Router } from "express";

export const UserController = Router();

UserController.post("/login", function (req, res) {
    // var loginInfo = req.body;
    // var authArray = fileProcess.getAuthData();
    // var loginData = authArray.find(auth => auth.username == loginInfo.username);
    // if (loginData != undefined && loginData.password == loginInfo.password) {
    //     return res.end(JSON.stringify({ loginResult: true }));
    // }
    return res.end(JSON.stringify({ loginResult: false }));
});
