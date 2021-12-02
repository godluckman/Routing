import http from 'http';
import {HandleRoutes} from "./core/HandleRoutes.js";
import {mainRouter} from "./route/mainCollector.js";

const routesHandler = new HandleRoutes(mainRouter);
console.log(routesHandler)

http.createServer((req, res) => {
    routesHandler.handleReq(req, res);
}).listen(3000);