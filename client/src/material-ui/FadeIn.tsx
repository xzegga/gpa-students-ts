import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    margin: 20px;
  }
  to {
    opacity: 1;
    margin: 0px;
  }
`;

interface IProps {
  duration?: number;
  delay?: number;
  children?: ReactElement;
}
const FadeIn = ({duration = 300, delay = 0, children} : IProps) => {
  return (
    <Wrapper
      style={{
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

export default FadeIn