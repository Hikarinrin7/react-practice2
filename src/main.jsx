// reactは、より厳密な警告が出る"strictmode"での開発を推奨
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// htmlファイルの中でid=rootにしている箇所（jsを差し込む箇所）を取得
const rootElement = document.getElementById("root");
// バージョン18以降の記法、createRoot関数を使いrootを生成しレンダリング
const root = createRoot(rootElement);


// root.render();の中身にhtmlみたいに記述する（jsx記法）
root.render(
    // <StrictMode>
        <App />
    // </StrictMode>
);