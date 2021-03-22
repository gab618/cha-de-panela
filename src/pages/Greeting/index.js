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
      <Cover imgSrc="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/31271238_10156405833644884_5060567756500369408_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=znHcOyU7lM8AX_oFohF&_nc_ht=scontent.fcgh37-1.fna&oh=960e95cd5d03749e30b3f889e1fef952&oe=607CED20">
        <div className="cover-container">
          <figure className="figure">
            <div>
              <strong className="full-name">MATHEUS & TAMARA</strong>
              <strong className="min-name">M & T</strong>
              <span>27.03.2021</span>
            </div>
          </figure>
        </div>
      </Cover>
      <Countdown />
      <Panel
        title="sobre nós"
        subtitle="#casoriomatheusetamara___#acasacaiu"
        text="Olá, seja bem-vindo ao nosso site de casamento!___Aqui vamos contar à vocês, queridos amigos e familiares, sobre um pouquinho da nossa vida antes desse momento especial em que daremos esse passo a mais para unirmos nossas vidas. É um prazer compartilhar esse momento com vocês!___No início trabalhávamos juntos na mesma empresa e nos conhecemos através de outros colegas de trabalho, então uma grande amizade surgiu, não imaginaríamos nunca que seria desse jeito, mas depois essa amizade acabou se tornando paixão que rendeu um fruto de amor que cresceu e floresceu.___Nossa história juntos começou no dia 24 de maio de 2013 e depois de quase 8 anos (do noivo enrolando) nós vamos casar! A contagem regressiva começa, o frio na barriga e toda a ansiedade do dia mais esperado de nossas vidas nos enche de alegria, o dia em que uniremos nossas almas e corpos para sempre, o dia do nosso casamento."
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
            Devido ao atual momento que estamos vivendo, decidimos não reunir
            muitas pessoas na celebração da nossa união, mas não é um motivo
            para deixarmos de comemorar este momento único nas nossas vidas.
          </p>
          <p>
            Obrigado por reservar o seu tempo e nos dar o seu carinho. Iremos
            lembrar para sempre deste momento tão esperado.
          </p>
          <FancySvg />
        </section>
      </Text>

      <Photo imgSrc="https://lh3.googleusercontent.com/pw/ACtC-3cahIQqgxONfOvPeSpu7GbRw0VDE-ANeL0-jUjxzj-ykFdRkUuUK5_ik0rHpFejF36K9v1rPJGUhZJaetA92F2FoKIugcchHYG0cl7Jw5VYOkWXVvfL9MfdoH3_47hogdo8SlGMOyVkT4rklRyCv5Ie=w1707-h960-no?authuser=0">
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
