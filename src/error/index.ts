import * as http from 'http';
import { NextFunction, Request } from 'express';

/**
 * @export
 * @class HttpError
 * @extends {Error}
 */
export class HttpError extends Error {
    status: number;
    message: string;
    name: 'HttpError';

    /**
     * Creates an instance of HttpError.
     * @param {number} [status]
     * @param {string} [message]
     * @memberof HttpError
     */
    constructor(status ? : number, message ? : string) {
        super(message);

        Error.captureStackTrace(this, this.constructor);

        this.status = status || 500;
        this.name = this.name;
        this.message = message || http.STATUS_CODES[this.status] || 'Error';
    }
}

/**
 * @exports
 * @param {Request} req
 * @param {*} res
 * @param {NextFunction} next
 *
 */
export function sendHttpErrorModule(req: Request, res: any, next: NextFunction): void {
    res.sendHttpError = (error: HttpError): void => {
        res.status(error.status);
        res.json({
            status: error.status,
            name: error.name,
            message: error.message
        });
    };

    next();
}

