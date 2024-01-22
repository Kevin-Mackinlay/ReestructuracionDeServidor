import { Router } from "express";
import ProductsManager from "../services/fs/Products.service.fs.js";
import chatService from "../services/db/Chat.service.db.js";

const viewsRouter = Router();
const productManager = new ProductManager("src/products.json");
const chatService = new ChatService();

viewsRouter.get("/products", async (req, res) => {
  const products = await productManager.getProducts();
  res.render("products", {
    title: "Listado de productos",
    products: products,
    style: "css/products.css",
  });
});

viewsRouter.get("/realtimeproducts", async (req, res) => {
  const products = await productManager.getProducts();
  res.render("realtime", {
    title: "Productos en tiempo real",
    products: products,
    style: "css/products.css",
  });
});

viewsRouter.get("/chat", async (req, res) => {
  const messages = await chatService.findMessages();

  res.render("chat", {
    title: "Chat",
    messages: messages,
    style: "css/chat.css",
  });
});
export default viewsRouter;
