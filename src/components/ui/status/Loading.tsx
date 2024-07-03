import React, { useEffect, useState } from 'react';

import { Container, StyledP } from '@/constants/theme';

import {
  CircleBackground,
  CircleForeground,
  LoaderContainer,
  SpinnerContainer,
  StyledText
} from './Loading.ui';

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prev) => prev + 1);
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      onLoadingComplete();
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <Container>
      <LoaderContainer>
        <SpinnerContainer>
          <svg width='120' height='120' viewBox='0 0 40 40'>
            <CircleBackground r='18' cx='20' cy='20' />
            <CircleForeground r='18' cx='20' cy='20' />
          </svg>
          <StyledText>{percentage}%</StyledText>
        </SpinnerContainer>
        <StyledP>Finding collections for you...</StyledP>
      </LoaderContainer>
    </Container>
  );
};

export default Loading;
