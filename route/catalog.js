import {Router} from "../core/Router.js";
import {vegetablesRouter} from "./vegetables.js";
import {fruitsRouter} from "./fruits.js";

const goods = {
    fruits: {apple :'apple', pineapple: 'pineapple', orange: 'orange'},
    vegetables: {carrot: 'carrot', potato:'potato', cucumber: 'cucumber'}
}

export const catalogRouter = new Router();
catalogRouter.use('vegetables', vegetablesRouter);
catalogRouter.use('fruits', fruitsRouter);

catalogRouter.get('', (req, res) =>{
    let json = JSON.stringify(goods);
    res.end(json);
})