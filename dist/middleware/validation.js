"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validate = (method) => {
    switch (method) {
        case "signup": {
            return [
                (0, express_validator_1.body)("firstName").isLength({
                    min: 1,
                }),
                (0, express_validator_1.body)("lastName").isLength({
                    min: 1,
                }),
                (0, express_validator_1.body)("email").isEmail(),
                (0, express_validator_1.body)("phoneNumber").isMobilePhone(["en-US"]),
                (0, express_validator_1.body)("password")
                    .isStrongPassword({
                    minUppercase: 1,
                    minLowercase: 1,
                    minNumbers: 1,
                    minLength: 8,
                    minSymbols: 0,
                })
                    .withMessage("Oops! You need a password longer than 8 characters with numbers and letters"),
            ];
        }
    }
};
exports.default = validate;
