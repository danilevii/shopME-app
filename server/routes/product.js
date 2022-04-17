const router = require("express").Router();

const {
    createProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct
} = require("../controllers/product")

router.route("/").post(createProduct).get(getAllProducts);
router.route("/:id").get(getProduct).delete(deleteProduct).patch(updateProduct);

module.exports = router;