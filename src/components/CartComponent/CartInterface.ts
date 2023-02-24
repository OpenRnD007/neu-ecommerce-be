/**
 * Interface `Cart Service Login Params`
 * @export
 * @interface ICartServiceParams
 */
export interface ICartServiceParams {
    cid: number;
    title: string;
    price: number;
    qty: number;
}

/**
 * Interface `Cart Service`
 * @export
 * @interface ICartService
 */
export interface ICartService {

    /**
     * get all coupon
     * cid: number customerid
     * @memberof ICartService
     */
    getAllCoupon(cid: number): Promise<any>;

    /**
     * get coupon
     * cid: number customerid
     * @memberof ICartService
     */
    coupon(cid: number): Promise<any>;

    /**
     * User save cart
     * @memberof ICartService
     */
    save(data: ICartServiceParams): Promise<any>;
}
