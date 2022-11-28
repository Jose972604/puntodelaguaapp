import axios from "axios";
import React,{useState,useEffect} from "react";
import ProductRow from "./ProductRow";

export default function CallAPIView() {

  const [rows, setRows]:any[] = useState([]);
  const results:any[] = [];
  
   useEffect(() => {
      fetch('http://localhost:3001/getProducts')
         .then((response) => response.json())
         .then((data) => {
            //console.log(data.PRODUCTS);
            setRows(data.PRODUCTS);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  rows.forEach((product:any) => {
    console.log(product);
    results.push(
      <ProductRow
      product={product} />
    );
});

    return (
      <div className="App">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Unidades</th>
          </tr>
        </thead>
        <tbody>
          {results}</tbody>
      </table>
      </div>
    )
  };
