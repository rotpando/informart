"use client"
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface AnimatedDivProps {
  delay: number;
}

const AnimatedDiv = styled.div<AnimatedDivProps>`
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeInUp} 0.5s forwards;

  &:nth-child(odd) {
    animation-delay: ${({ delay }) => delay}s;
  }
`;

export default AnimatedDiv;
