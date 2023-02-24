## Technology Stack Used
Nodejs + Expressjs + mongoAtlas

## Installation
```bash
npm install
# or
yarn
# or
pnpm
```
## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Curl Request
Place order
```bash
curl -XPOST -H "Content-type: application/json" -d '{"cid":1, "products":[ {"id":1,"title":"iPhone X","price":899, "qty":1}]}' 'http://localhost:3001/cart/save'
```
Get all order
```bash
curl -XGET 'http://localhost:3001/cart/allcoupon/1'
```
Check if coupon is applicable for this order
```bash
curl -XGET 'http://localhost:3001/cart/coupon/1'
```
## Deploy on Render https://neu-ecommerce-be.onrender.com
```bash
curl -XPOST -H "Content-type: application/json" -d '{"cid":1, "products":[ {"id":1,"title":"iPhone X","price":899, "qty":1}]}' 'https://neu-ecommerce-be.onrender.com/cart/save'

curl -XGET 'https://neu-ecommerce-be.onrender.com/cart/allcoupon/1'

curl -XGET 'https://neu-ecommerce-be.onrender.com/cart/coupon/1'
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
