import { Router } from "express";
import signUp from "../controllers/signup";
import { body } from "express-validator";

const router = Router();

router.post(
  "/signup",
  body("firstName").isLength({
    min: 1,
  }),
  body("lastName").isLength({
    min: 1,
  }),
  body("emailAddress").isEmail(),
  body("phoneNumber").isMobilePhone(["en-US"]),
  body("password")
    .isStrongPassword({
      minUppercase: 1,
      minLowercase: 1,
      minNumbers: 1,
      minLength: 8,
      minSymbols: 0,
    })
    .withMessage(
      "Oops! You need a password longer than 8 characters with numbers and letters"
    ),
  signUp
);
export default router;
