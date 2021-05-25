import styled from 'styled-components';
import {View, TextInput, TouchableOpacity} from 'react-native';

export const ComponentContainer = styled(View)`
  flex-direction: row;
`;

export const InputContainer = styled(View)`
  flex-direction: row;
  border-radius: 10px;
`;

export const Input = styled(TextInput)`
  font-size: 20px;
  background-color: white;
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const SubmitButton = styled(TouchableOpacity)`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin-bottom: 20px;
  border-radius: 50px;
`;
