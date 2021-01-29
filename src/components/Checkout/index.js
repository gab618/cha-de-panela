import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as CartActions from '../../store/modules/cart/actions';
import formatBRL from '../../utils/formatBRL';

import { Container, Total } from './styles';

function Checkout({ total, setStep }) {
  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Pagamento
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="name"
            label="Nome"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="phone"
            label="Celular"
            fullWidth
            autoComplete="tel"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            id="msg"
            label="Mensagem"
            helperText="Deixe aqui uma pequena mensagem para os futuros casados :)"
            fullWidth
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
          <button type="button">Gerar Pagamento</button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
