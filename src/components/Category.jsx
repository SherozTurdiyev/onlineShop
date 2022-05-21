import React, {useEffect , useState} from 'react'
import Axios from 'axios'
export default function Category() {
    const [category  , setCategory] = useState([])

    useEffect(()=>{
       Axios.get("https://myjson.dit.upm.es/api/bins/bbm7")
       .then((res)=>{
        //    console.log(res.data);
           setCategory(res.data)
       })
       .catch((err)=>{
           console.log(err);
       })
    }, [])

    
  return (
    <div className='container'>
        <div className="row">
                {
                    (category.length===0)?
                    <h1 className='text-center'>
                    Kutib turing...
                    </h1>
                    :
                    <>
                    {
                      category.map((arr, index)=>{
                        return(
                            <div className="col-2" key={index}>
                                <img src={arr.img_src} alt={arr.img_src} width="80%"/>
                            </div>
                        )
                    })
                }
                    </>
                  
                }
        </div>
    </div>
  )
}
