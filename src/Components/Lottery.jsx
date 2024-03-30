import React, { useState } from "react";
import { generatenum, sum } from "./helper";
import Ticket from "./Ticket";

function Lottery({n=3,winningsum=15,winingcondition }) {
  let [ticket, setticket] = useState(generatenum(n));
  let iswinning=winingcondition(ticket);
  //lifting state up ak esi technique ha jismy hum nechy sa uper properties  ko bhjskty hn , means like child to parent 

  function buyaticket(){
    setticket(generatenum(n));
  }
  return (
    <div className="bg-cyan-600 min-h-screen m-6 rounded-lg flex justify-center items-center">
      <div className="border-2 border-cyan-600 bg-opacity-10 bg-black m-auto mt-11 h-1/2 w-1/2 flex justify-center items-center">
        <div className="w-full md:w-1/2 rounded-lg border-3 border-cyan-600 p-6">
          <h1 className="m-6 md:m-12 text-2xl md:text-3xl rounded-xl font-bold p-3 text-center border-2 border-cyan-600 bg-cyan-300 ">
            Lottery Ticket
          </h1>
          <div className="text-black font-bold p-3 m-4 border-2 border-cyan-600 bg-cyan-300 rounded-lg flex justify-center items-center">
            <Ticket ticket={ticket}/>
          </div>

          <button onClick={buyaticket}  className="border-cyan-600  bg-cyan-300 m-auto font-bold p-3 border-2 rounded-lg flex justify-center items-center">
            Buy a ticket
          </button>
          {iswinning && (
            <h3 className="border-cyan-600 bg-cyan-300 rounded-lg font-bold text-center mt-4">
              Congratulations, you won!
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lottery;
