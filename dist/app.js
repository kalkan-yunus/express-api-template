"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const home_1 = require("./routes/home");
const createApp = () => {
    const app = (0, express_1.default)();
    configureApp(app);
    applyRoutes(app);
    return app;
};
exports.app = createApp;
const applyRoutes = (app) => {
    app.use(home_1.homeRouter);
};
const configureApp = (app) => {
    app.use((0, helmet_1.default)());
};
