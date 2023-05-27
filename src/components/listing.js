import React from 'react'
import { useEffect,useState} from 'react'
import axios from 'axios'
import '../components/listing.css'
function Listing(props) {
    const[data,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/getData")
        .then((res)=>{
            
            setData(res.data.data)
            

            
        })
        .catch((err)=>{
            console.log(err)
        })

    },[props])
  return (
    <div>
        <table className='product-table'>
            <thead>
                <tr key={-1}>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Brand</th>
                    <th>image</th>
                </tr>
            </thead>
                
            

            <tbody>
                {
                    data.map((obj,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{obj.name}</td>
                                <td>{obj.type}</td>
                                <td>{obj.price}</td>
                                <td>{obj.brand}</td>
                                <td><img src={obj.image} alt={obj.name} /></td>

                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>

    </div>
  )
}

export default Listing