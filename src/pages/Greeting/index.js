import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Countdown from '../../components/Countdown';
import FancySvg from '../../components/FancySvg';
import Panel from '../../components/Panel';
import ButtonPrimary from '../../components/ButtonPrimary';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, Cover, Text, Photo } from './styles';

function Greeting() {
  return (
    <Container>
      <Cover imgSrc="https://img.freepik.com/fotos-gratis/piso-de-madeira-marrom_53876-90802.jpg?w=360">
        <div className="cover-container">
          <figure className="figure">
            <div>
              <strong className="full-name">Armstrong & Gabriely</strong>
              <strong className="min-name">A & G</strong>
              <span>04.02.2023</span>
            </div>
          </figure>
        </div>
      </Cover>
      <Countdown />
      <Panel
        title="Lista de presentes"
        subtitle="Fique a vontade"
        text="Olá, seja bem-vindo a nossa lista"
      />
      <Text>
        <section className="text-wrapper">
          {/* <h2>AVISO</h2> */}
          <p>
            Nada nos deixaria mais felizes do que compartilhar com todos vocês o
            momento da nossa união! Mas nem sempre a vida permite que nossos
            planos aconteçam como sonhamos.
          </p>
          <p>
            Obrigado por reservar o seu tempo e nos dar o seu carinho. Iremos
            lembrar para sempre deste momento tão esperado.
          </p>
          <FancySvg />
        </section>
      </Text>

      <Photo imgSrc="https://cdn-assets-legacy.casar.com/dados/sitenoivos/wed602798/paginas/1sR4a_1673576615.jpg">
        <div className="photo-wrapper">
          <figure />
        </div>
      </Photo>
      <div className="button-container">
        <Link to="/shop">
          <ButtonPrimary type="button" text="Ver presentes" />
        </Link>
      </div>
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
