var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ErrorHandler = /** @class */ (function (_super) {
    __extends(ErrorHandler, _super);
    function ErrorHandler(message) {
        var _this = _super.call(this, "Error: ".concat(message)) || this;
        _this.message = message;
        return _this;
    }
    return ErrorHandler;
}(Error));
var CreateHashTable = /** @class */ (function () {
    function CreateHashTable() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        this.content = [];
        this.content;
        if (args.length)
            args.forEach(function (arg) { return _this.addNewRegister(arg.key, arg.value); });
    }
    CreateHashTable.prototype.createHast = function (key) {
        var splittedWord = key.toLowerCase().split("");
        var codes = splittedWord.map(function (letter) { return "".concat(letter).concat(String(letter).charCodeAt(0)); });
        return codes.join("");
    };
    CreateHashTable.prototype.addNewRegister = function (key, value) {
        var isFindedHash = this.searchItem(key);
        if (isFindedHash)
            new ErrorHandler("".concat(key, " Is already declared in the table. Choose another key"));
        var validHash = this.createHast(key.toLowerCase());
        var row = { hash: validHash, key: key, value: value };
        this.content.push(row);
    };
    CreateHashTable.prototype.searchItem = function (key) {
        if (!key)
            throw new Error('Inroduce a key valid');
        var validateHash = this.createHast(key);
        var keyFinded = this.content.find(function (row) { return row.hash === validateHash; });
        return keyFinded;
    };
    CreateHashTable.prototype.deleteRegister = function (key) {
        var isFindedHash = this.searchItem(key);
        if (isFindedHash) {
            var index = this.content.findIndex(function (row) { return row.key == key.toLowerCase(); });
            this.content.splice(index, 1);
        }
        else {
            throw new Error("".concat(key, " does not exist in the table"));
        }
    };
    CreateHashTable.prototype.getAllRegister = function () {
        return this.content;
    };
    return CreateHashTable;
}());
export { CreateHashTable };
