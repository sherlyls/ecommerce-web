import express from  "express"
const router = express.Router()
import { deleteProduct, getProductDetails, getProducts, newProduct, updateProduct } from "../controllers/productControllers.js"
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js"

router.route("/products").get(getProducts)
router.route("/admin/products").post(isAuthenticatedUser, authorizeRoles("admin"), newProduct)
router.route("/products/:id").get(getProductDetails)
router.route("/admin/products/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
router.route("/admin/products/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

export default router