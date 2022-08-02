import React, { useEffect, useState } from "react";
import axios from 'axios';
import Target from "./Target.jsx";
import '../asset/style/containerCard.css'


function Upimg() {

    const [data, setData] = useState([])
    const [editar, setEditar] = useState(false);
    const [eliminar, setEliminar] = useState(false);

    useEffect(() => {
        axios.get('http://3.16.1.148/api/product/view')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    

    return (
        <div className="container-card-Upimg ">
           {
            data.map((data) => (
                    <Target
                    name={data.name}
                    nameProduc={data.nameProduc}
                    description={data.description}
                    price={data.price}
                    amount={data.amount}
                    />
            ))
           }

           
        </div>
        
    )



}

export default Upimg;