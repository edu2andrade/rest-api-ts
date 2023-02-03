"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
// Body Parse thing -->
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json()); // To parse the incoming requests with JSON payloads
/**
 * We don't need body-parser anymore.
 *
 * To parse the incoming requests with JSON payloads.
 * More info: https://stackoverflow.com/questions/66525078/bodyparser-is-deprecated
 *
 */
// CORS -->
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(todos_1.default);
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
