"use client";
import { useState, useEffect } from "react";

export default function CoinMarket(){
  const API_KEY = "606d2aab1227a2411ab189bcdd97f986";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);
  return(
    <>
       <div className="card">
         <table className="table">
           <thead >
             <tr>
               <th className="table-list-heading-1">Coin</th>
               <th className="table-list-heading">Price</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td className="table-list-heading-1">Bitcoin:</td>
               <td className="table-list-heading">{data?.rates?.BTC}</td>
             </tr>
             <tr>
               <td className="table-list-heading-1">Solana:</td>
               <td className="table-list-heading">{data?.rates?.SOL}</td>
             </tr>
             <tr>
               <td className="table-list-heading-1">ETHEthereum:</td>
               <td className="table-list-heading">{data?.rates?.ETH}</td>
             </tr>
             <tr>
               <td className="table-list-heading-1">Dogecoin:</td>
               <td className="table-list-heading">{data?.rates?.DOGE}</td>
             </tr>
             <tr>
               <td className="table-list-heading-1">Tether:</td>
               <td className="table-list-heading">{data?.rates?.USDT}</td>
             </tr>
             <tr>
               <td className="table-list-heading-1">XRP:</td>
               <td className="table-list-heading">{data?.rates?.XRP}</td>
             </tr>
             <tr>
               <td className="table-list-heading-1">BNB:</td>
               <td className="table-list-heading">{data?.rates?.BNB}</td>
             </tr>
             <tr>
               <td className="table-list-heading-1">TRON:</td>
               <td className="table-list-heading">{data?.rates?.TRX}</td>
             </tr>
           </tbody>
         </table>
      </div>        
      </>
  );
} 
