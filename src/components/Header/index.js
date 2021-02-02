import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { FaGift, FaShoppingCart } from 'react-icons/fa';
import {
  Container,
  MenuItem,
  HeaderWrapper,
  Menu,
  MenuWrapper,
} from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <HeaderWrapper>
        <Link to="/">M & T</Link>
        <Menu>
          <MenuWrapper>
            <li>
              <MenuItem to="/">
                <div>
                  <strong>Presentes</strong>
                </div>
                <FaGift size={18} />
              </MenuItem>
            </li>
            <div className="divider" />
            <li>
              <MenuItem to="/cart">
                <div>
                  <strong>Meu carrinho</strong>
                  {/* <span>{cartSize} itens</span> */}
                </div>
                <FaShoppingCart size={18} />
              </MenuItem>
            </li>
          </MenuWrapper>
        </Menu>
      </HeaderWrapper>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
