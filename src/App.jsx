// use~という関数（フックと呼ばれる）
import { useEffect, useState } from "react";

// reactでは、画面の要素はすべて関数（コンポーネント）で書く！！
// returnの中身は必ずタグで囲む
// ファイルを分けたら、export付けることでこの関数を他でも使えるようになる
// importはmain側で使うときに自動で追加される

import { ColorfulMessage } from "./components/ColorfulMessage";


export const App = () => {
    // この値はstateとして定義しますよ〜と宣言
    // useState関数は、「実際のstate」と「stateを更新するための関数」の二つを受け取る
    // 配列の分割代入で受け取る
    // stateの初期値は0にしてある
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(false);
    // return内でのイベントはjsの関数として{}で、スタイルはjsのオブジェクトとして
    const onClickCountUp = () => {
        setNum((prev)=>prev+1);
    };
    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    };

    // useEffectの第一引数が関数、第二引数は配列（依存配列）
    // 配列に変更があった時だけ実行される！！
    // 空配列を引数にすると最初（マウント時）しか実行されない
    useEffect(() => {
        console.log("--useEffect--");
        // カウントアップボタンを押して、stateが3の倍数の時だけ顔を表示するプログラム
        // isShowFace ||...　がないと無限レンダリングになってしまう
        // さらに、useEffectの中に入れたことで、この処理の「関心」がnumだけになったので
        // on/offボタンと被らなくなった
        if (num>0){
            if (num%3 === 0){
                isShowFace || setIsShowFace(true);
            } else {
                isShowFace && setIsShowFace(false);
            }
        }
    }, [num]);

    

    return (
        <div>
            <h1>こんにちは！</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です！</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>

            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>Σ('◉⌓◉’)</p>}
        </div>
    );
};