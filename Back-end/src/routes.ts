import { Router } from "express";
import { auth, login, register } from "./controller/userController.js";

export const router = Router();

// Rotas de usuários
router.post("/login", login);
router.post("/register", register);
router.get("/me", auth);