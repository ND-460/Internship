import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
    {/* <h1>hello world</h1> */}
    <Component1 />
   </>
   
  );
}
const Component1 = () => {
  // const [count, setCount] = useState(0)
  let myTag = <h1>sdfsfsdffsdf</h1>
  let obj = {name : "neel", lname: "dobariya",contact: "12314212",isauthorised:false};
 const fullname = () => {
  return obj.name + " " + obj.lname;
 }
  return (
    <>
    <div style={{backgroundColor:"red",maxWidth:"500px"}}>
    <h1>{obj.name}</h1>
      {/* <h1>{print()}</h1> */}
      <h1>{fullname()}</h1>
      <h1>{obj.isauthorised? "yes" : "no"}</h1>
      <h1>Neel Dobariya</h1>
      <h1>XYZ</h1>
    </div>
    </>
  )
}
export default App;
