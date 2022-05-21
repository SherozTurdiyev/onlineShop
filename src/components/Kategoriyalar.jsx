import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function Kategoriyalar() {
  const [kategiraya, setKategoriya] = useState([]);
  useEffect(() => {
    Axios.get("http://myjson.dit.upm.es/api/bins/i6j3")
      .then((res) => {
        setKategoriya(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (<div className="container my-3">
      <h4 className="text-center txtColor"> Kategoriyalar</h4>
      <div className="row">
          {(kategiraya.length===0)?
          <>Kutib Turing...</>
        :
        <>
        {
            kategiraya.map((arr, index)=>{
                return(
                    <div className="col-4 my-1 " key={index}>
                <div className="card shadow p-2 d-flex flex-row myborder">
                  <img src={arr.img_src} alt="icons" width="30px" height="30px" />  
                  <p className="text-mutex ps-3">{arr.name}</p>
                </div>
            </div>
                )
            })
            
        }
        </>
        }
      </div>
  </div>);
}
