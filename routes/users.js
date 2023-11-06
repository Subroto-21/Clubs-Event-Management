import express from "express";
import {getAllOrganizer, organizerSignin, organizerSignup, signin, signup } from "../controllers/user.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/organizer/signin",organizerSignin);
router.post("/organizer/signup",organizerSignup);
router.get("/allOrganizers",getAllOrganizer);


export default router;