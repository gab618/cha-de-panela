import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Countdown from '../../components/Countdown';
import Panel from '../../components/Panel';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, Cover, Text, Photo } from './styles';

function Greeting() {
  return (
    <Container>
      <Cover imgSrc="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/31271238_10156405833644884_5060567756500369408_o.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_eui2=AeFOQebyqbBjV4eQNY4rpkPlQOAHvxzOl4xA4Ae_HM6XjNa-Z1-igBUHKh1NoG7J301Yr-UFYEy-dfV8b6d1P2JO&_nc_ohc=9T4OCyDhMw4AX-dMtxr&_nc_ht=scontent.fcgh37-1.fna&oh=307cc5adafda95225bb13ab36628e610&oe=604199A0">
        <div className="cover-container">
          <figure className="figure">
            <div>
              <strong className="full-name">MATHEUS & TAMARA</strong>
              <strong className="min-name">M & T</strong>
              <span>xx.03.2021</span>
            </div>
          </figure>
        </div>
      </Cover>
      <Countdown />
      <Panel
        title="sobre nós"
        subtitle="#casoriomatheusetamara___#acasacaiu"
        text="Olá, seja bem-vindo ao nosso site de casamento!___Aqui vamos contar à vocês, queridos amigos e familiares, sobre um pouquinho da nossa vida antes desse momento especial em que daremos esse passo a mais para unirmos nossas vidas. É um prazer compartilhar esse momento com você!___No início trabalhávamos juntos na mesma empresa e nos conhecemos através de outros colegas de trabalho, então uma grande amizade surgiu, não imaginaríamos nunca que seria desse jeito, mas depois essa amizade acabou se tornando paixão que rendeu um fruto de amor que cresceu e floresceu.___Nossa história juntos começou no dia 24 de maio de 2013 e depois de quase 8 anos (do noivo enrolando) nós vamos casar! A contagem regressiva começa, o frio na barriga e toda a ansiedade do dia mais esperado de nossas vidas nos enche de alegria, o dia em que uniremos nossas almas e corpos para sempre, o dia do nosso casamento."
      />
      <Text>
        <section className="text-wrapper">
          <p>
            Nada nos deixaria mais felizes que compartilhar com todos vocês o
            momento da nossa união, mas nem sempre a vida permite que nossos
            planos aconteçam como sonhamos.
          </p>
          <p>
            Devido ao atual momento que estamos vivendo, decidimos não reunir
            muitas pessoas na celebração da nossa união.
          </p>
          <p>Aguardamos vocês no nosso grande dia!</p>
          <p>Matheus e Tamara</p>
        </section>
      </Text>

      <Photo imgSrc="https://scontent.fcgh37-1.fna.fbcdn.net/v/t31.0-8/1277785_10151940056869884_1057468271_o.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeElGq6-pMLqCmTmA4dUJ6A-W21lJpvGFulbbWUmm8YW6cy2_maRW2RoCe5-BQ5z2BQlnk9TlnyXhaXWh3bISNmm&_nc_ohc=fwFxDyXomZ4AX8NW8mo&_nc_ht=scontent.fcgh37-1.fna&oh=58439a9fdd168bc28ba2b5d748ff22cb&oe=603EF04A">
        <div className="photo-wrapper">
          <figure />
        </div>
      </Photo>
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
