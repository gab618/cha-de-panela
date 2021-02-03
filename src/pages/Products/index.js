import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import db from '../../db.json';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';
import Panel from '../../components/Panel';
import formatBRL from '../../utils/formatBRL';

function Products({ amount, addToCartRequest }) {
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
    <>
      <Panel
        title="CASA NOVA"
        text="Ficaremos muito felizes com a contribuição de vocês para montar o nosso lar :)"
      />
      <ProductList>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <div className="img-wrapper">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <strong>{product.title}</strong>
                <span>{formatBRL(product.price)}</span>
              </div>
              <button type="button" onClick={() => handleAddToCart(product.id)}>
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {amount[product.id] || 0}
                </div>
                <span>COMPRAR</span>
              </button>
            </li>
          ))}
      </ProductList>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
