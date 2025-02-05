import express from "express";
import { authSspwallet, checkPrivilege } from "../controller/auth.controller";
import {authMiddleware} from "../middleware/checkUser";


const router = express.Router();


router.post("/verifyLogin",authMiddleware.validateZelId, authSspwallet);
router.post("/checkPrivilege", checkPrivilege);



export default router; 


