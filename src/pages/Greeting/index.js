import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
      <Panel
        title="sobre nós"
        subtitle="#acasacaiu"
        text="***Alterar texto***"
      />
      <Text>
        <section className="text-wrapper">
          <p>
            Não entendo esses caras que escrevem textão. Tá achando que isso
            aqui é a Redação do Enem?
          </p>
          <p>
            Aqui é chat da Twitch, se eu quisesse ler eu pegava um livro ao
            invés de assistir livestream!
          </p>
          <p>
            Gente assim não deve ter um pingo de bom senso pra escrever esses
            textões, típico comportamento de sabichão que quer pagar de
            inteligente na internet e se aparecer, quando na realidade só faz
            passar vergonha, completamente ridículo...
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
