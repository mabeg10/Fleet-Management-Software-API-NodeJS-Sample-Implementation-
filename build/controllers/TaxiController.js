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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaxis = void 0;
const TaxiRepository_1 = require("../repositories/TaxiRepository");
const getTaxis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const page = (_a = req.query.page) !== null && _a !== void 0 ? _a : "1";
        const limit = (_b = req.query.limit) !== null && _b !== void 0 ? _b : "10";
        const startIndex = (+page - 1) * +limit;
        console.log(page, limit, startIndex);
        const plateIn = req.query.plate;
        if (+page < 0 || +limit < 0) {
            return res.status(400).json({ message: "The page number and limit cannot be less than 0" });
        }
        const taxis = yield (0, TaxiRepository_1.queryTaxis)(startIndex, +limit, plateIn);
        return res.status(200).json(taxis);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'error al obtener los taxis' });
    }
});
exports.getTaxis = getTaxis;
