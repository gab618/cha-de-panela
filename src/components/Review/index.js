import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { Link } from 'react-router-dom';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductTableWrapper,
  ProductTable,
  TotalContainer,
  TableHeader,
  TableItem,
  IncrementBox,
  RemoveButton,
} from './styles';
import formatBRL from '../../utils/formatBRL';
import ButtonPrimary from '../ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary';

function Review({ cart, total, removeFromCart, updateAmountRequest, setStep }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTableWrapper>
        <ProductTable>
          <TableHeader>
            <div className="desc">Descrição</div>
            <div className="amount">Quantidade</div>
            <div className="price">Valor</div>
          </TableHeader>

          {cart.map((product) => (
            <TableItem key={product.id}>
              <div className="desc">
                <div className="img-wrapper">
                  <img src={product.image} alt={product.title} />
                </div>
                <p>{product.title}</p>
              </div>

              <div className="amount">
                <IncrementBox>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <div>{product.amount}</div>
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} />
                  </button>
                </IncrementBox>
                <RemoveButton onClick={() => removeFromCart(product.id)}>
                  Remover
                </RemoveButton>
              </div>

              <div className="price">
                <div>{formatBRL(product.subtotal)}</div>
              </div>
              <div className="price-mobile">
                <span>Valor</span>
                <div>{formatBRL(product.subtotal)}</div>
              </div>
            </TableItem>
          ))}
          <TotalContainer>
            <div className="desc" />
            <div className="amount">Total</div>
            <div className="price">
              <strong>{formatBRL(total)}</strong>
            </div>
            <div className="price-mobile">
              <div>Total</div>
              <div>{formatBRL(total)}</div>
            </div>
          </TotalContainer>
        </ProductTable>
      </ProductTableWrapper>
      <footer>
        <Link to="/shop">
          <ButtonSecondary text="adicionar presentes" />
        </Link>
        <ButtonPrimary text="próximo passo" onClick={() => setStep(1)} />
      </footer>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
