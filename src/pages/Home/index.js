import React, { useState, useEffect } from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 0 : 64;
import { Container, Background, ContainTitle, Title, ButtonNav, ButtonText } from './styles';

const Summarytxt = Animatable.createAnimatableComponent(Title);

export default function Home() {

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);

  
  useEffect(() => {

    setTimeout(() => {

      setLoading(false);

    }, 5000)

  }, [])

  function handleBrands() {
    setLoadingBtn(true)
    setTimeout(() => {

      navigation.navigate('Brands')
      setLoadingBtn(false)

    }, 2000)

  }

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color='#121212' size={45} />
      </View>
    )
  } else {

    return (

      <Background source={require('../../assets/concessionaria.jpg')}>
        <Container teste={`${statusBarHeight + 'px'}`}>

          <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />

          <ContainTitle>           
            <Summarytxt animation={'fadeInRight'} duration={3000}>SUPERCAR</Summarytxt>
          </ContainTitle>

          {loadingBtn ? (

            <ButtonNav>
              <ActivityIndicator size={30} color="#fff" />
            </ButtonNav>

          ) : (
            <ButtonNav onPress={handleBrands}>
              <ButtonText>Modelos</ButtonText>
            </ButtonNav>

          )}
     
        </Container>
      </Background>

    );
  }
}

