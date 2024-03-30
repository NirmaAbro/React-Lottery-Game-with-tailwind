import Lottery from "./Components/Lottery";
// import Ticket from "./Components/Ticket";
import { sum } from "./Components/helper";

function App() {
  let winingcondition=(ticket)=>{
    return sum(ticket) === 15;
  }
  return (
    <div className="App">
      <Lottery num={3} winningsum={15} winingcondition={winingcondition}/>
      {/* <Ticket ticket={[0,1,2]}/> */}
    </div>
  );
}

export default App;
