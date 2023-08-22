interface IArrayBasicInfo { hash: string, key: string, value: number }
type TArgs<IArrayBasicInfo> = Array<IArrayBasicInfo>

class ErrorHandler extends Error {
    constructor(message: string) {
        super(`Error: ${message}`)
        this.message = message
    }
}

export class CreateHashTable {
    private content: Array<IArrayBasicInfo> = [];

    constructor(...args: TArgs<IArrayBasicInfo>) {
        this.content
        if (args.length) args.forEach((arg) => this.addNewRegister(arg.key, arg.value));
    }

    createHast(key: string) {
        const splittedWord = key.toLowerCase().split("");
        const codes = splittedWord.map((letter) => `${letter}${String(letter).charCodeAt(0)}`);
        return codes.join("");
    }

    addNewRegister(key: string, value: number): void {
        let isFindedHash = this.searchItem(key);
        if (isFindedHash) new ErrorHandler(`${key} Is already declared in the table. Choose another key`);
        const validHash: string = this.createHast(key.toLowerCase());
        const row: IArrayBasicInfo = { hash: validHash, key, value };
        this.content.push(row);
    }

    searchItem(key: string) {
        if (!key) throw new Error('Inroduce a key valid')
        const validateHash = this.createHast(key);
        const keyFinded = this.content.find((row) => row.hash === validateHash);
        return keyFinded
    }

    deleteRegister(key: string) {
        const isFindedHash = this.searchItem(key);
        if (isFindedHash) {
            const index = this.content.findIndex((row) => row.key == key.toLowerCase());
            this.content.splice(index, 1);
        } else {
            throw new Error(`${key} does not exist in the table`);
        }
    }
    getAllRegister() {
        return this.content
    }
}

