var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from "fs";
const FILE_PATH = "./dist/data.json";
const initialValue = [
    { name: "Daksh Lohar", company: "Wisflux Private Limited!" },
];
var FILE_MODE;
(function (FILE_MODE) {
    FILE_MODE["READ"] = "r";
    FILE_MODE["WRITE"] = "w";
    FILE_MODE["APPEND"] = "a";
})(FILE_MODE || (FILE_MODE = {}));
const checkFileExists = (file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs.promises.access(file, fs.constants.F_OK);
        return true;
    }
    catch (e) {
        return false;
    }
});
function fillInitialDataIfFileNotExist() {
    return __awaiter(this, void 0, void 0, function* () {
        fs.appendFile(FILE_PATH, JSON.stringify(initialValue), (err) => {
            console.log(err);
        });
        return;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const isFileExist = yield checkFileExists(FILE_PATH);
        if (isFileExist) {
            fs.readFile(FILE_PATH, "utf-8", (err, data) => {
                if (err) {
                    console.log(err);
                }
                const newDetail = {
                    name: "D",
                    company: "Wisflux",
                };
                const parsedData = JSON.parse(data);
                const appendedData = [...parsedData, newDetail];
                fs.writeFile(FILE_PATH, JSON.stringify(appendedData), (err) => {
                    console.log(err);
                });
            });
        }
        else {
            fillInitialDataIfFileNotExist();
        }
    });
}
main();
//# sourceMappingURL=index.js.map