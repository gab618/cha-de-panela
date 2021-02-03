import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import { Container } from './styles';
import Review from '../../components/Review';
import Checkout from '../../components/Checkout';
import StepsPanel from '../../components/StepsPanel';

function Cart() {
  const [step, setStep] = useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Review setStep={setStep} />;
      case 1:
        return <Checkout setStep={setStep} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <Container>
      <StepsPanel />
      {getStepContent(step)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
