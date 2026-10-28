function getUserData(userId) {
    const user = fetchUserFromDb(userId);
    return user;
}

function calculateTotal(price, tax) {
    return price * (1 + tax);
}
