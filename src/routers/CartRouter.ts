import { Router } from 'express';
import * as CartComponent from '../components/CartComponent';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * POST method route
 * @example /cart/save
 */
router.post('/save', CartComponent.save);

/**
 * GET method route
 * @example /cart/allcoupon/:cid
 */
router.get('/allcoupon/:cid', CartComponent.getAllCoupon);

/**
 * GET method route
 * @example /cart/coupon/:cid
 */
router.get('/coupon/:cid', CartComponent.coupon);


/**
 * @export {express.Router}
 */
export default router;
