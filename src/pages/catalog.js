import React, { useEffect } from "react";
import { setProducts, setCategories } from "./../redux";
import { connect } from "react-redux";
import { Select } from "../components";

const Catalog = (props) => {

  useEffect(() => {
    if (props.products.length === 0) {
      fetch("http://localhost:7000/products")
        .then(res => res.json())
        .then(json => {
          props.setProducts(json)
        });
    }
    if (props.categories.length === 0) {
      fetch("http://localhost:7000/categories")
      .then(res => res.json())
      .then(json => {
        props.setCategories(json)
      });
    }
  }, []);

  const onSelectCallback = (obj) => {
    console.log(obj);
  }

  const sortOptions = [
    {
      id: "title",
      text: "По названию"
    },
    {
      id: "price-desc",
      text: "Сначала дешевле"
    },
    {
      id: "price-asc",
      text: "Сначала дороже"
    }
  ]

  if (props.products) {
    let products = props.products.map(item => {
      return (
        <div className="productCard" key={item.id}>
          <img src={item.imgSrc} />
          <h4>{item.title}</h4>
          <span className={CSS.price} >{item.price} Руб.</span>
        </div>
      )
    })
    return <>
      <Select 
        items={sortOptions} 
        onSelect={onSelectCallback} 
        defaultSelected={"title"} 
        title={"Сортировка: "} 
      />   
      <div className="productsContainer" >
        <div className="productsList">
          {products}
        </div>
      </div>
    </>
  } else return <div>Products not found</div>
}

const mapStateToProps = (state) => {
  return {
    products: state.catalog.products,
    categories: state.catalog.categories
  }
}

const mapDispatchToProps = {
    setProducts,
    setCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);