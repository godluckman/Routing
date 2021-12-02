import {Router} from "../core/Router.js";

export const profileRouter = new Router();

profileRouter.get('', (req, res) => {
    res.end('Profile');
})

