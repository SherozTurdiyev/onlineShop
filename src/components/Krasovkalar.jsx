import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function Krasovkalar() {
  const [product, setProducts] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    Axios.get("http://myjson.dit.upm.es/api/bins/a9vv")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        dispatch({ type: "all", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addBascet(val) {
    console.log(val);
    dispatch({ type: "add", payload: { arr: val } });
  }

  setTimeout(()=>{

  }, 1000)

  return (
    <div className="container">
      <h4 className="txtColor py-2">Obuvi</h4>
      <div className="row">
        {product.length === 0 ? (
          <>Kutib Turing</>
        ) : (
          <>
            {product.map((arr, index) => {
              return (
                <div className="col-2" key={index}>
                  <div className="card shadow p-1">
                  <img src={arr.img_src} alt="krasovka" height="180px" />
                    <p className="py-1">{arr.cost} so'm</p>
                    <h4>{arr.name}</h4>
                    <button
                      onClick={() => {
                        addBascet(arr);
                      }}
                      className="btn btnColor"
                    >
                      Qo'shish
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
