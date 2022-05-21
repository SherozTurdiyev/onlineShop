import React , {useState} from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Style.css";
import {useSelector , useDispatch} from 'react-redux'


export default function Search() {
let allData = useSelector(state=>{
  return state.bascet
})
let dispatch = useDispatch()

let korzCount = useSelector(state => {
  return state.korzink.length
})

const [value , setVAlue] = useState([])
const [searchDiv , setSearchDiv] = useState(false)

  function searchFunc(val){
    let value = val.target.value;
    let natija
    if(value===''){
      natija=[]
      setSearchDiv(false)
    }
    else{
      setSearchDiv(true)
      natija = allData.filter((arr)=>{
       return arr.name.toLowerCase().includes(value.toLowerCase())
     })

    }
    setVAlue(natija)

    console.log(natija);
  }

  function addBascet(val){
    dispatch({type: "add" , payload:{arr: val}})
}

  return (
    <div className="container my-3">
      <div className="row d-flex flex-row justify-content-between align-items-center ">
        <Link to="/Main" className="menu col-1">
          <div >
            <div className="chiziq"></div>
            <div className="chiziq"></div>
            <div className="chiziq"></div>
          </div>
        </Link>
        <div className="search col-10">
          <input type="text" placeholder="Search" className="form-control" onKeyDown={()=>{setSearchDiv(false) }} onChange={(e)=>{searchFunc(e)}}/>
          {
            (searchDiv)?
            <>
            <div className="row resultSearch">
               {
                 (value.length===0)?
                 <>
                 <h3 className="text-center py-5">Bunday turdagi mahsulot topilmadi</h3>
                 </>
                 :
                 <>
                 {
                   value.map((arr , index)=>{
                     return(
                       <div className="col-12 d-flex flex-row justify-content-between px-5" key={index}>
                         <img src={arr.img_src} alt="natija" />
                         <h5 className="text-muted">{arr.name}</h5>
                         <p className="text-muted">{arr.cost} so'm</p>
                         <button className="btn btn-primary p-2 btnHeight " onClick={()=>{addBascet(arr)}}>Qo'shish</button>
                       </div>
                     )
                   })
                 }
                 </>
               }
            </div>
            </>
            :
            <></>
          }
        </div>
        <Link to="/Basket" className="col-1">
          <div className="icons">
            <MdShoppingCart className="icons" />
            {
              (korzCount===0)?
              <></>
              :
              <><sup className="bg-danger p-1 text-light rounded-circle" width="10px" height="10px">{korzCount}</sup></>
              }
          </div>
        </Link>
      </div>
    </div>
  );
}
