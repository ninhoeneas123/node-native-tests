export class Exception extends Error {
    statusCode

    constructor(message, statusCode = 500, name = 'Internal Server Error') {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
        this.message = message
    }
}