"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTokenExpired = exports.generateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var secretKey = process.env.JWT_SECRET_KEY || "JWT_SECRET_KEY";
var generateToken = function (userId, days) {
    return (0, jsonwebtoken_1.sign)({ userId: userId }, secretKey, { expiresIn: days + ' days' });
};
exports.generateToken = generateToken;
var isTokenExpired = function (token) {
    try {
        var decoded = (0, jsonwebtoken_1.verify)(token, secretKey);
        return decoded;
    }
    catch (error) {
        if (error.name === 'TokenExpiredError') {
            return true;
        }
        else {
            throw error;
        }
    }
};
exports.isTokenExpired = isTokenExpired;
