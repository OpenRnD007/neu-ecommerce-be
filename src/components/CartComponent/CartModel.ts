import * as connections from '../../config/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface ICartModel
 * @extends {Document}
 */
export interface ICartModel extends Document {
    cid: number;
    title: string;
    price: number;
    qty: number;

    createdat?: Date,
    updatedat?: Date,
    isdeleted?: boolean
}

const CartSchema: Schema = new Schema({
    cid: Number,
    products: [{
        title: String,
        price: Number,
        qty: Number,
    }],
    createdat: {
        type: Date,
        default: new Date()
    },
    updatedat: Date,
    isdeleted: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'carts',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise<void> {
    const cart: any = this; // tslint:disable-line

    cart.updatedat = new Date();
    next();
});

CartSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc: any, ret: any) {
        delete ret._id;
    }
});

export default connections.db.model<ICartModel>('carts', CartSchema);
