import React, { useState, useEffect } from 'react';

import { Container, FlipperContainer, Flipper } from './styles';

function Countdown() {
  // Set the date we're counting down to
  const countDownDate = new Date('Mar 27, 2021 11:00:00').getTime();
  const [nowDate, setCurrentDate] = useState(new Date());

  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [days, setDays] = useState();

  useEffect(() => {
    const id = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const distance = countDownDate - nowDate.getTime();

    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
  }, [countDownDate, nowDate]);

  return (
    <Container>
      <h2>Contagem regressiva para o grande dia</h2>
      <div className="flippers">
        <div>
          <FlipperContainer>
            <Flipper>
              <span>{days}</span>
            </Flipper>
            <p>Dias</p>
          </FlipperContainer>
          <FlipperContainer>
            <Flipper>
              <span>{hours}</span>
            </Flipper>
            <p>Horas</p>
          </FlipperContainer>
        </div>

        <div>
          <FlipperContainer>
            <Flipper>
              <span>{minutes}</span>
            </Flipper>
            <p>Minutos</p>
          </FlipperContainer>
          <FlipperContainer>
            <Flipper>
              <span>{seconds}</span>
            </Flipper>
            <p>Segundos</p>
          </FlipperContainer>
        </div>
      </div>
    </Container>
  );
}

export default Countdown;
