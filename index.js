const Box = (props) => {
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  ); //  Write your code here.
};

const element = (
  <div className="boxes-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div> //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
