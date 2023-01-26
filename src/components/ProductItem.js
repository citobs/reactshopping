import React from 'react';
import { Link } from 'react-router-dom';
import './main.css'

function ProductItem({ product_code, product_name, price, filename }) {
  let loading = false;
  const url = `https://localhost:8000/static/images/${filename}`;
  // const url = 'http://localhost:8000/static/images/bok.jpg'
  if (loading) {
    return (
      <div>loading</div>
    )
  } else {
    let img = '';
    if (filename !== '-') {
      img = "<img src=${url} alt='상품명'/><br />";
    } else {
      img = '[상품 이미지 미등록]<br />';
    }
    return (
      <div style={{ margin: '5px' }}>
        <span dangerouslySetInnerHTML={{ __html: img }}></span>
        <Link to={`/detail/${product_code}`}>
          상품명 : {product_name}<br />
          가격: {price}원
        </Link>
        <br /><br />
      </div>
    )
  }
}

export default ProductItem;