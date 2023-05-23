import express from "express";
import passport from "passport";

import {
  getFollowersOfAParticularUser,
  getFollowingsOfAParticularUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/:_id/followers", getFollowersOfAParticularUser);
router.post("/:_id/followings", getFollowingsOfAParticularUser);

export default router;
