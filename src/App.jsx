// reactでは、画面の要素はすべて関数（コンポーネント）で書く！！
// returnの中身は必ずタグで囲む
// ファイルを分けたら、export付けることでこの関数を他でも使えるようになる
// importはmain側で使うときに自動で追加される

import { ColorfulMessage } from "./components/ColorfulMessage";


export const App = () => {
    // return内でのイベントはjsの関数として{}で、スタイルはjsのオブジェクトとして
    const onClickButton = () => alert();

    return (
        <div>
            <h1>こんにちは！</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です！</ColorfulMessage>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};