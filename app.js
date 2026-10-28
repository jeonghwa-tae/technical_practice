function getUserData(userId) {
    // (a) デバッグログの混入
    console.log("debug", user);

    // (b) コメントアウトした旧コード 5 行の混入
    // const oldUser = fetchUserOld(userId);
    // if (!oldUser) {
    //     return null;
    // }
    // return oldUser;

    // (c) 無関係なインデント変更 20 行の混入
    const user = fetchUserFromDb(userId);
    return user;
}

// (d) APIキーのハードコード混入
const API_KEY = "sk-dummy-abc123";

// 意図した機能変更 3 行
function calculateTotal(price, tax, discount = 0) {
    const discountedPrice = price - discount;
    return discountedPrice * (1 + tax);
}
