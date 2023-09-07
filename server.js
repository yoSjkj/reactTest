const express = require("express");
const app = express();

// http 서버 실행 + 실행 시 동작할 기능
app.listen("5000", () => {
    console.log("서버실행");
});

// http:/localhost:5000/ 경로로 접근하면..
app.get("/", (request, response) => {
    response.send("New page");
});