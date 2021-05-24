import React, {useState} from 'react';
import * as S from './index.style';

const Index = ({submitHandler}) => {
  const [value, setValue] = useState('');

  const onChangeText = text => {
    setValue(text);
  };

  return (
    <S.ComponentContainer>
      <S.InputContainer>
        <S.Input placeholder="Add Task..." onChangeText={onChangeText} />
      </S.InputContainer>
      <S.SubmitButton
        onPress={() => {
          setValue(submitHandler(value));
        }}>
        <S.Text>Submit</S.Text>
      </S.SubmitButton>
    </S.ComponentContainer>
  );
};

export default Index;
