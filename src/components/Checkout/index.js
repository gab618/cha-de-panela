import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nanoid } from 'nanoid';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import QRCode from 'react-qr-code';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaCheckCircle } from 'react-icons/fa';
import * as CartActions from '../../store/modules/cart/actions';
import formatBRL from '../../utils/formatBRL';
import Pix from '../../utils/Pix';

import { Container, CheckoutWrapper, Total, SuccessContent } from './styles';
import ButtonSecondary from '../ButtonSecondary';
import ButtonPrimary from '../ButtonPrimary';

function Checkout({ total, setStep, cart }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [pixString, setPixString] = useState('');
  const [copied, setCopied] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const id = `CHA-${nanoid(4).toUpperCase()}`;
    const pix = new Pix(
      process.env.REACT_APP_PIX_KEY,
      msg,
      process.env.REACT_APP_PIX_NAME,
      process.env.REACT_APP_PIX_CITY,
      id,
      total
    );
    setPixString(pix.getPayload());
    let items = '';
    cart.forEach((item) => {
      const output = `${item.amount}x ${item.title}; `;
      items += output;
    });
    const logPayment = `https://script.google.com/macros/s/AKfycbwO6mXURJZkqItBnuSyg9rzphlFNH6AevDhudd5bL56mCzDa6x8Qrom/exec?name=${name}&id=${id}&valor=${formatBRL(
      total
    )}&msg=${msg}&telefone=${phone}&items=${items}`;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', logPayment, true);
    xmlHttp.send(null);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  };

  const handleCopyQR = () => {
    setTimeout(() => {
      setCopied(false);
    }, 1 * 1000);
    setCopied(true);
  };

  return (
    <Container>
      <CheckoutWrapper>
        {pixString.length === 0 ? (
          <>
            <Typography variant="h6" gutterBottom>
              Pagamento
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="name"
                    label="Nome"
                    fullWidth
                    autoComplete="given-name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="phone"
                    label="Celular"
                    fullWidth
                    autoComplete="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="msg"
                    label="Mensagem"
                    helperText={`Deixe aqui uma pequena mensagem para os futuros casados :) - ${msg.length}/40`}
                    fullWidth
                    value={msg}
                    inputProps={{ maxLength: 40 }}
                    onChange={handleMsgChange}
                  />
                </Grid>
              </Grid>
              <footer>
                <Total>
                  <span>TOTAL</span>
                  <strong>{formatBRL(total)}</strong>
                </Total>
                <div className="checkout-buttons">
                  <ButtonSecondary
                    text="Voltar"
                    type="button"
                    onClick={() => setStep(0)}
                  />
                  <ButtonPrimary text="próximo passo" type="submit" />
                </div>
              </footer>
            </form>
          </>
        ) : (
          <SuccessContent>
            <h2>Muito obrigado pelo presente, {name}!</h2>
            <QRCode value={pixString} />
            <CopyToClipboard text={pixString} onCopy={handleCopyQR}>
              <button className="copy-button" type="button">
                {copied ? (
                  <>
                    <span>Copiado</span>
                    <FaCheckCircle size={18} />
                  </>
                ) : (
                  <>
                    <span>Copiar código QR</span>
                    <FaCopy size={18} />
                  </>
                )}
              </button>
            </CopyToClipboard>
            <span>
              Para finalizar, basta realizar o pagamento escaneando ou colando o
              código Pix acima :)
            </span>
            <p>
              Caso alguma coisa de errado, minha chave pix é{' '}
              <strong>{process.env.REACT_APP_PIX_KEY}</strong>
            </p>
          </SuccessContent>
        )}
      </CheckoutWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
