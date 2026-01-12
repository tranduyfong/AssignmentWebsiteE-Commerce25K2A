import { Response, Request } from "express";

const getHomePage = (req: Request, res: Response) => {
    res.send("Home page");
}

const getProduct = (req: Request, res: Response) => {
    res.send("Product page");
}

const getIntroduction = (req: Request, res: Response) => {
    res.send("Introduction page");
}

export { getHomePage, getProduct, getIntroduction };