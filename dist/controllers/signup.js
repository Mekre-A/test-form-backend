"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_validator_1 = require("express-validator");
const db_1 = __importDefault(require("../db"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(req.body.password, 8);
        const sqlQuery = `insert into user_form values ('${req.body.firstName}', '${req.body.lastName}', '${req.body.phoneNumber}', '${req.body.emailAddress}', '${hashedPassword}')`;
        db_1.default.query(sqlQuery, (error, results, fields) => {
            if (error) {
                console.log(error);
                return res.status(500).send();
            }
            return res.status(201).send({
                status: "success",
            });
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            error: e,
        });
    }
});
exports.default = signUp;
