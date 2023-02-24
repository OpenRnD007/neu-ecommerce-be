import { Types } from 'mongoose';
import { ICartService, ICartServiceParams } from './CartInterface';
import CartModel, { ICartModel } from './CartModel';
/**
 * `CartService` contains all Cart related business logic
 * @export
 * @implements {ICartService}
 */
const CartService: ICartService = {
    /**
     * @returns {Promise < { user?: ICartModel, token?: any, isloggedin?: boolean } >}
     * @memberof CartService
     */
    async getAllCoupon(cid: number): Promise<any> {
        try {
            const query: any = { isdeleted: false }
            if (cid) {
                query.cid = cid
            }
            const data: ICartModel[] = await CartModel.find(query);

            return data;
        } catch (error) {
            throw new Error(error.message || JSON.stringify(error));
        }
    },

    /**
     * @returns {Promise < { user?: ICartModel, token?: any, isloggedin?: boolean } >}
     * @memberof CartService
     */
    async coupon(cid: number): Promise<any> {
        try {
            const data: ICartModel[] = await CartModel.find({
                cid,
                isdeleted: false
            });
            if (data.length && (data.length + 1) % parseInt(process.env.NTH_ORDER, 10) === 0) {
                return { "success": Types.ObjectId().toString(), discount: process.env.DISCOUNT };
            }
            return { "success": "No Coupon" };
        } catch (error) {
            throw new Error(error.message || JSON.stringify(error));
        }
    },

    /**
     * @returns {Promise < { user: ICartModel, token: any } >}
     * @memberof CartService
     */
    async save(params: ICartServiceParams): Promise<any> {
        try {
            const data: ICartModel = await CartModel.create(params);
            return { "success": 1, data };
        } catch (error) {
            throw new Error(error.message || JSON.stringify(error));
        }
    },
};

export default CartService;

