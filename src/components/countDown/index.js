import React, { useEffect, useState } from 'react';
import { Container, CountDownWrapper, TimeSection, Time, TimeText, NotifyWrapper} from './countDownElement';

function CountDown() {
  const [countdownDate, setCountdownDate] = useState(
    new Date('06/25/2021').getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000);
  }, []);

  const updateCountdown = () => {
    // TODO: Code to calculate how long between the countdown date and the current time

    if (countdownDate) {

        // get the current time
        const currentTime = new Date().getTime();

        // get the time remaining until the countdown date
        const distanceToDate = countdownDate -  currentTime ;

         // Calculate days, hours, minutes and seconds remaining
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        // For visual appeal, add a zero to each number that's only one digit
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
        }

        // Set the state to each new time
        setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <Container>
      <CountDownWrapper>
        <TimeSection>
          <Time>{state.days || '0'}</Time>
          <TimeText>Days</TimeText>
        </TimeSection>
        <TimeSection>
          <Time style={{paddingBottom: '1.5rem'}}>:</Time>
        </TimeSection>
        <TimeSection>
          <Time>{state.hours || '00'}</Time>
          <TimeText>Hours</TimeText>
        </TimeSection>
        <TimeSection>
          <Time style={{paddingBottom: '1.5rem'}}>:</Time>
        </TimeSection>
        <TimeSection>
          <Time>{state.minutes || '00'}</Time>
          <TimeText>Min</TimeText>
        </TimeSection>
        <TimeSection>
          <Time style={{paddingBottom: '1.5rem'}}>:</Time>
        </TimeSection>
        <TimeSection>
          <Time>{state.seconds || '00'}</Time>
          <TimeText>Sec</TimeText>
        </TimeSection>
      </CountDownWrapper>
      <NotifyWrapper>
        <p>Email: info@muersolutions.com</p>
      </NotifyWrapper>
    </Container>
  );
}

export default CountDown;
