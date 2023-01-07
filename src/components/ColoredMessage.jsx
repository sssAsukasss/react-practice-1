export const ColoredMessage = (props) => {
  
  // objectの分割代入
  const {color, children} = props;
  const contentStyle = {
    fontSize: '20px',
    //省略記法
    color,
  };

  return <p style={ contentStyle }>{ children }</p>;
};

//別パターン
export const ColoredMessage2 = ({color, children}) => {
  const contentStyle = {
    fontSize: "32px",
    color,
  };

  return <p style={ contentStyle }>{ children }</p>
};