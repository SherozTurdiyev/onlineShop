import React , {useState , useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
export default function Basket() {
  const [allCost , setAllCost]=useState(0)

  const korz = useSelector((state) => {
    return state.korzink;
  });
 let dispatch = useDispatch()

 useEffect(()=>{
    let x=0
    korz.map((arr)=>{
      x = x + parseInt(arr.cost *arr.count)
      console.log(arr.cost);
    })
   setAllCost(x)
 },[korz])

  function increment (arr) {
    dispatch({type: "increment"  , payload:{count: arr}})
  }

  function decrement(val){
    dispatch({type:"decrement" , payload :{count: val}})
  }

  function deleteItem(val){
    dispatch({type: "delete" , payload:{name: val}})
  }
  
  return (
    <div className="container">
      <h3 className="text-center my-3">Umumiy narx: {allCost} so'm</h3>
      <div className="row">
        {korz.length === 0 ? (
          <>
            <h1 className="text-center mt-5 p-5">Hech narsa Qo'shilmagan</h1>
          </>
        ) : (
          <>
            {korz.map((arr, index) => {
              return (

                <div className="col-12" key={index}>
                  <div className="card d-flex flex-row justofy-content-between align-items-center my-3 shadow p-5 MyCard">
                  <img src={arr.img_src} alt={arr.name} height="250px"/>
                    <div className="count m-auto ">
                      <h4>{arr.cost} so'm</h4>
                  <h4 className="">{arr.name}</h4>
                      <div className="box d-flex flex-row justofy-content-between align-items-center">
                      <button onClick = {()=>{decrement(arr)}}  className="btn btn-primary">-</button>
                      <h3 className="p-4">{arr.count}</h3>
                      <button onClick={()=>{increment(arr)}} className="btn btn-primary">+</button>
                      </div>

                    </div>
                      <button onClick={()=>{deleteItem(arr.name)}} className="btn btn-danger deleteBtn">O'chirish</button>
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
