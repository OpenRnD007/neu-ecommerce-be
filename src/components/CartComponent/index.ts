import CartService from './CartService';
import { HttpError } from '../../error';
import { NextFunction, Request, Response } from 'express';

/** Cart Component entry point */

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function coupon(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        if (!req.params.cid) {
            throw new Error('Invalid request');
        }
        if (!(/^-?\d+$/.test(req.params.cid))) {
            throw new Error('Invalid request');
        }
        const data: any = await CartService.coupon(parseInt(req.params.cid, 10));

        res.status(200).json(data);

    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function save(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        if (!req.body.cid) {
            throw new Error('Invalid request');
        }
        if (!(/^-?\d+$/.test(req.body.cid))) {
            throw new Error('Invalid request');
        }
        const data: any = await CartService.save(req.body);
        res.status(200).json(data);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function getAllCoupon(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        if (!req.params.cid) {
            throw new Error('Invalid request');
        }
        if (!(/^-?\d+$/.test(req.params.cid))) {
            throw new Error('Invalid request');
        }
        const data: any = await CartService.getAllCoupon(parseInt(req.params.cid, 10));

        res.status(200).json(data);

    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}