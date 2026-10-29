// 【変更1：デバッグ出力】
console.log("DEBUG: App starting...");

function main() {
    // 【変更2：誤字修正】 Welcome -> Welcome to My App
    console.log("Welcome to My App");
    const result = calc(10, 20);
    return result;
}

// 【変更3：機能追加】
function calc(a, b) {
    return a + b;
}


