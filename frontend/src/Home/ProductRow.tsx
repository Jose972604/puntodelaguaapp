export default function ProductRow(props: { product: any })  {
      const product = props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr>
        <td>{product.id}</td>
          <td>{name}</td>
          <td>{product.category}</td>
          <td>{product.unity}</td>
        </tr>
      );
  }