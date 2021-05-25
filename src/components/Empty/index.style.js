import styled from 'styled-components';
import {View, Image, Text} from 'react-native';

export const ComponentContainer = styled(View)`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

export const EmptyImage = styled(Image)`
  width: 350px;
  height: 200px;
`;

export const EmptyText = styled(Text)`
  color: white;
  font-family: poppins-bold;
  margin-top: 30px;
  font-size: 30px;
`;
