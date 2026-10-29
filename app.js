function getUserData(userId) {
    const user = fetchUserFromDb(userId);
    return user;
}

function calculateTotal(price, tax, discount = 0) {
    const discountedPrice = price - discount;
    return discountedPrice * (1 + tax);
}