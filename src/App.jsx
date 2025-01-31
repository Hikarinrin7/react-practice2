// reactでは、画面の要素はすべて関数（コンポーネント）で書く！！
// returnの中身は必ずタグで囲む
// ファイルを分けたら、export付けることでこの関数を他でも使えるようになる
// importはmain側で使うときに自動で追加される


export const App = () => {
    // return内での操作はjsの関数として{}で、スタイルはjsのオブジェクトとして
    const onClickButton = () => alert();
    const contentStyle = {
        color: "blue",
        fontSize: "18px",
    }

    return (
        <div>
            <h1>こんにちは！</h1>
            <p style={contentStyle}>お元気ですか？</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};