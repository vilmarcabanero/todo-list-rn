import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './index.style';

const Index = ({item, deleteItem}) => {
  return (
    <S.ComponentContainer>
      <S.ListContainer>
        <S.CirlceContainer>
          <Icon name="circle-o" size={20} color="midnightblue" />
        </S.CirlceContainer>
        <View>
          <S.TextItem>{item.value}</S.TextItem>
          <S.TextTask> Task</S.TextTask>
        </View>
        <S.IconContainer onPress={() => deleteItem(item.key)}>
          <Icon name="trash" size={24} color="midnightblue" />
        </S.IconContainer>
      </S.ListContainer>
    </S.ComponentContainer>
  );
};

export default Index;
