import express from "express";
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../controllers/shortUrl";

const Router= express.Router();

Router.post("/shortUrl", createUrl);
Router.get("/shortUrl", getAllUrl);
Router.get("/shortUrl/:id", getUrl);
Router.delete("/shortUrl/:id", deleteUrl);

export default Router;