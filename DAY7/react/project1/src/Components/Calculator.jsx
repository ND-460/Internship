const Calculator = (props) =>{
    // let a = 10, b =20;
    return(
      <>
      <h1>Calculator</h1>
      <h4>The ans is {parseInt(props.a) + parseInt(props.b)}</h4>
      </>
    )
  }
export default Calculator;