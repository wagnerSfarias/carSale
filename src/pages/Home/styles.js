import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
padding-top: ${(props)=>props.teste};
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode:'cover'
})`
height: 100%;
`;

export const ButtonNav = styled.TouchableOpacity`
  width: 70%;
  height: 64px;
  margin: 0 15% 64px;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  background-color: #0A1E25;  
`;

export const ButtonText = styled.Text`
font-size: 30px;
color: #FFF;
font-weight: bold;
`;

export const Title = styled.Text`
font-size: 40px;
color: #6d4b04;
font-weight: bold;
text-align: center;
margin-top: 10%;
`;

export const ContainTitle = styled.View`
flex: 1;
`;