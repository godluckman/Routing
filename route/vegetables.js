import {Router} from "../core/Router.js";

export const vegetablesRouter = new Router();

const vegetables = {
carrot: 'carrot', potato:'potato', cucumber: 'cucumber'
}

vegetablesRouter.get('', (req, res) =>{
    let json = JSON.stringify(vegetables);
    res.end(json);
})