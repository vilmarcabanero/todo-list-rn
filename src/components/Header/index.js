import React from 'react';
import * as S from './index.style';

let today = new Date().toISOString().slice(0, 10);

const Index = () => {
  return (
    <S.ComponentContainer>
      <S.HeaderText>To-Do.</S.HeaderText>
      <S.HeaderList>{today}</S.HeaderList>
    </S.ComponentContainer>
  );
};

export default Index;
