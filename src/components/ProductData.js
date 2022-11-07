import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const ProductData = () => {
    const { id } = useParams();

    const [Result, setResult] = useState({})
    useEffect(() => {
        (async () => {
            const result = await axios.get(
                `https://api.escuelajs.co/api/v1/products/${id}`
            )
            setResult(result.data)
        })()
    }, [id])
    console.log("a", id)
    return (
        <div>
            <table>
                <tbody>
                    <tr key={id}>
                        <td>
                            {Result.price}
                        </td>
                        <td>
                            {Result.id}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductData;