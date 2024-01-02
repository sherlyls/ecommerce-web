export const getProducts = async (req, res) => {
    res.status(200).json({
        message: "All Products"
    })
}

// Create new Product => /api/v1/admin/products
export const newProduct = async (req, res) => {
    res.status(200).json({
        message: "All Products"
    });
}