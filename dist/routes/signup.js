"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup_1 = __importDefault(require("../controllers/signup"));
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post("/signup", (0, express_validator_1.body)("firstName").isLength({
    min: 1,
}), (0, express_validator_1.body)("lastName").isLength({
    min: 1,
}), (0, express_validator_1.body)("emailAddress").isEmail(), (0, express_validator_1.body)("phoneNumber").isMobilePhone(["en-US"]), (0, express_validator_1.body)("password")
    .isStrongPassword({
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
    minLength: 8,
    minSymbols: 0,
})
    .withMessage("Oops! You need a password longer than 8 characters with numbers and letters"), signup_1.default);
exports.default = router;
