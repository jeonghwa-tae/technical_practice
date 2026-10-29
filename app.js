// 【目的1: 新機能の実装】
function calculateTax(price) {
    return price * 0.1;
}

function main() {
    // 【目的3: リファクタ】変数名 x を itemCount へリネーム
    let itemCount = 10;
    
    // 【目的2: 既存バグの修正】文字列結合の修正 (Val: -> Item Count:)
    console.log("Item Count: " + itemCount);
    return itemCount;
}