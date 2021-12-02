import {Router} from "../core/Router.js";
import {profileRouter} from "./profile.js";
import {catalogRouter} from "./catalog.js";
import {cartRouter} from "./cart.js";

export const mainRouter = new Router();

mainRouter.use('profile', profileRouter);
mainRouter.use('catalog', catalogRouter);
mainRouter.use('cart', cartRouter);

