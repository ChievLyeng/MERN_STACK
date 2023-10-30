function validateProductData(productData) {
    const { p_Name, p_price, Quantity, min_Order } = productData;

    // Define validation rules here
    const errors = [];

    if (!p_Name || typeof p_Name !== 'string') {
        errors.push("Product name is required and must be a string.");
    }

    if (typeof p_price !== 'number' || p_price <= 0) {
        errors.push("Product price is required and must be a positive number.");
    }

    if (typeof Quantity !== 'number' || Quantity <= 0) {
        errors.push("Quantity is required and must be a positive number.");
    }

    if (typeof min_Order !== 'number' || min_Order <= 0) {
        errors.push("Minimum order quantity is required and must be a positive number.");
    }

    if (errors.length > 0) {
        // If there are validation errors, return the errors as an array
        return { isValid: false, errors };
    }

    // If there are no errors, return that the data is valid
    return { isValid: true };
}

module.exports = validateProductData;
