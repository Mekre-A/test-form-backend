import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

const signUp = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    res.status(200).send({
      nice: "body",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      error: e,
    });
  }
};

export default signUp;
