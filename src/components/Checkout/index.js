import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as CartActions from '../../store/modules/cart/actions';
import formatBRL from '../../utils/formatBRL';
import Pix from '../../utils/Pix';

import { Container, Total } from './styles';

function Checkout({ total, setStep }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [pixString, setPixString] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const pix = new Pix(
      process.env.REACT_APP_PIX_KEY,
      msg,
      process.env.REACT_APP_PIX_NAME,
      process.env.REACT_APP_PIX_CITY,
      'ID001',
      total
    );
    setPixString(pix.getPayload());
    console.log(pixString);
    console.log(name);
    console.log(phone);
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

  return (
    <Container>
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
          <div>
            <button
              className="prev-button"
              type="button"
              onClick={() => setStep(0)}
            >
              Voltar
            </button>
            <button type="submit">Gerar Pagamento</button>
          </div>
        </footer>
      </form>
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
