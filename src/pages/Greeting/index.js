import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Panel from '../../components/Panel';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, Cover } from './styles';

function Greeting() {
  return (
    <Container>
      <Cover imgSrc="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/31271238_10156405833644884_5060567756500369408_o.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_eui2=AeFOQebyqbBjV4eQNY4rpkPlQOAHvxzOl4xA4Ae_HM6XjNa-Z1-igBUHKh1NoG7J301Yr-UFYEy-dfV8b6d1P2JO&_nc_ohc=9T4OCyDhMw4AX-dMtxr&_nc_ht=scontent.fcgh37-1.fna&oh=307cc5adafda95225bb13ab36628e610&oe=604199A0">
        <div className="cover-container">
          <figure />
        </div>
      </Cover>
      <Panel title="sobre nós" subtitle="#acasacaiu" />
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
