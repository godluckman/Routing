import {Router} from "../core/Router.js";

export const cartRouter = new Router()

cartRouter.get('', (req, res) => {
    res.end('CART');
})