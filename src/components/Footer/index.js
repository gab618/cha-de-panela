import React, { useState, useEffect } from 'react';

import { Container, FooterContent } from './styles';

function Footer() {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    async function getViews() {
      fetch(
        'https://api.countapi.xyz/hit/matheusetaaaaaamara.netlify.app/visits'
      ).then(async (response) => {
        const data = await response.json();
        setViewCount(data.value);
      });
    }
    getViews();
  }, []);
  return (
    <Container>
      <FooterContent>
        <p>{viewCount} visitantes já conferiram nossa história de amor!</p>
      </FooterContent>
    </Container>
  );
}

export default Footer;
