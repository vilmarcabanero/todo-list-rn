import React from 'react';
import {View} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import * as S from './index.style';

const Index = ({item, deleteItem}) => {
  return (
    <S.ComponentContainer>
      <S.ListContainer>
        <S.CirlceContainer>
          <Entypo name="circle" size={20} color="midnightblue" />
        </S.CirlceContainer>
        <View>
          <S.TextItem>{item.value}</S.TextItem>
          <S.TextTask> Task</S.TextTask>
        </View>
        <S.IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="midnightblue" />
        </S.IconContainer>
      </S.ListContainer>
    </S.ComponentContainer>
  );
};

export default Index;
