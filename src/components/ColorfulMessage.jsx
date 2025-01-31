// この関数（コンポーネント）の呼び出しコードはこんな感じ↓
/* <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage> */
// propsはオブジェクトの形で渡ってくるので、.で指定
// タグで囲った内容（お元気ですか？）はchildrenで受け取れる！決まり
// chilerenに渡すのはなんでもいいので、htmlタグの集まりを渡したら階層構造ができたり、、あ、複雑そう、、、

// 分割代入とか省略記法とかでいろんな書き方があるよ
// ベーシックver
export const ColorfulMessage = (props) => {
    const contentStyleA = {
        color: props.color,
        fontSize: "18px",
    }
    return (
        <p style={contentStyleA}>{props.children}</p>
    );
};

// 分割代入ver。props. がいらなくなる
export const ColorfulMessage2 = (props) => {
    const { color, children } = props;
    const contentStyleA = {
        color: color,
        fontSize: "18px",
    }
    return (
        <p style={contentStyleA}>{children}</p>
    );
};
// 分割代入()内でやっちゃう & color: colorは略せるから略しちゃうver
export const ColorfulMessage3 = ({color, children}) => {
    const contentStyleA = {
        color,
        fontSize: "18px",
    }
    return (
        <p style={contentStyleA}>{children}</p>
    );
};