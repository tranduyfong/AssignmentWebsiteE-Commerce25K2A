import express, { Express } from 'express';
import { getHomePage, getIntroduction, getProduct } from '../controllers/controllers';
const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/products", getProduct);
    router.get("/introducts", getIntroduction)

    app.use("/", router);
}

export default webRoutes;