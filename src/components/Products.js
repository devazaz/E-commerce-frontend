import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductData from "./ProductData";
const Products = () => {
    const navigate = useNavigate();
    const [Result, setResult] = useState([])

    useEffect(() => {
        (async () => {
            const result = await axios.get(
                "https://api.escuelajs.co/api/v1/products"
            )
            setResult(result.data.slice(1, 10))
        })()

    }, [])
    console.log(Result)
    const ShowSpecificProduct = (id) => {
        navigate('/products/'+id)
    }



    return (
        <div>
            
            <table>
                <tbody>
                    {Result.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    <button onClick={() => ShowSpecificProduct(item.id)}>check</button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <Link to="/"></Link>
        </div>
    )
}

export default Products;