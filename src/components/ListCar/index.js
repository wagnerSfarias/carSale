
import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  ButtonCar,
  ContainerImg,
  ImageCar,
  ContainerTxt,
  TextPlus,
  ContainerTitle,
  Title,
  Split,
  ModalDetail,
  ContainerModal,
  ButtonBack,
  ButtonText,
  Background,
  ContainerButtons,
  ButtonArrows,
  ContainerDetail,
  DetailText
} from './styles';


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 0 : 64;
const Img = Animatable.createAnimatableComponent(ImageCar);

export default function ListCar({ data }) {


  const [visibleModal, setVisibleModal] = useState(false);
  const [image, setImage] = useState(data.imgMain);

  const imgLeft = data.imgLeft;
  const imgRight = data.imgRight;

  function btnLeft() {
    if (image === data.imgMain) {
      console.log(imgRight)
      setImage(imgLeft);
    } else if (image === imgLeft) {
      setImage(imgRight);
    }
    else {
      setImage(data.imgMain);
    }
  };
  function btnRight() {
    if (image === data.imgMain) {
      setImage(imgRight);
    } else if (image === imgRight) {
      setImage(imgLeft);
    }
    else {
      setImage(data.imgMain);
    }
  }

  return (
    <Container teste={`${statusBarHeight + 'px'}`}>

      <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />

      <ButtonCar onPress={() => setVisibleModal(true)}>
        <ContainerImg>
         
          <Img animation="flipInY" 
            source={{ uri: `${data.imgMain}` }}
            // source={{uri:'https://cdn.motor1.com/images/mgl/PKw42/s3/bmw-3er-touring-2019-luxury-line.jpg'}}
            >
          </Img>

          <ContainerTxt>
            <TextPlus>Ver Mais</TextPlus>
          </ContainerTxt>

        </ContainerImg>

        <ContainerTitle>
          <Title> {data.name}</Title>
          <Title>Ano - {data.year}</Title>
        </ContainerTitle>

        <Split></Split>

      </ButtonCar>
      

      <ModalDetail transparent={true} animationType='slide' visible={visibleModal}>

        <ContainerModal>
          <ButtonBack onPress={() => setVisibleModal(false)}>
            <Icon1 name="times" size={25} color='#0A1E25' style={{ marginHorizontal: 10 }} />
            <ButtonText>Fechar</ButtonText>
          </ButtonBack>

          <Background source={{ uri: `${image}` }}>
            <ContainerButtons>
              <ButtonArrows onPress={btnLeft}><Icon name="angle-left" size={45} color='#FFF' /></ButtonArrows>
              <ButtonArrows onPress={btnRight}><Icon name="angle-right" size={45} color='#fff' /></ButtonArrows>
            </ContainerButtons>
          </Background>

          <ContainerDetail>
            <DetailText>KM   {data.km}</DetailText>
            <Icon name="tachometer" size={25} color='#FFF' />
          </ContainerDetail>

          <ContainerDetail>
            <DetailText> {data.fuel}</DetailText>
            <Icon1 name="gas-pump" size={25} color='#FFF' />
          </ContainerDetail>

          <ContainerDetail>
            <DetailText>Câmbio {data.transmission}</DetailText>
          </ContainerDetail>

          <ContainerDetail>
            <DetailText>Cor: {data.color}</DetailText>
          </ContainerDetail>

          <ContainerDetail>
            <Title>R$ : {data.value}</Title>
          </ContainerDetail>

        </ContainerModal>
      </ModalDetail>
    </Container>
  );
}

















































