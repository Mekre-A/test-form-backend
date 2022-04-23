import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { Request, Response } from "express";
import connection from "../db";

const signUp = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const sqlQuery = `insert into user_form values ('${req.body.firstName}', '${req.body.lastName}', '${req.body.phoneNumber}', '${req.body.emailAddress}', '${hashedPassword}')`;
    connection.query(sqlQuery, (error, results, fields) => {
      if (error) {
        console.log(error);
        return res.status(500).send();
      }
      return res.status(201).send({
        status: "success",
      });
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      error: e,
    });
  }
};

export default signUp;
