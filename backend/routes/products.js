import express from  "express"
const router = express.Router()
import { getProducts, newProduct, getProductDetails } from "../controllers/productControllers.js"

router.route("/products").get(getProducts)
router.route("/admin/products").post(newProduct)
router.route("/products/:id").get(getProductDetails)

export default router