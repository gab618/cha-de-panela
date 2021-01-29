import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import db from '../../db.json';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';
import formatBRL from '../../utils/formatBRL';

function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function loadProducts() {
      const response = db;
      setProducts(response);
    }

    loadProducts();
  }, [products]);

  function handleAddToCart(id) {
    addToCartRequest(id);
  }

  return (
    <ProductList>
      {products &&
        products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{formatBRL(product.price)}</span>
            <button type="button" onClick={() => handleAddToCart(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#ddd" />
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
    </ProductList>
  );
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
