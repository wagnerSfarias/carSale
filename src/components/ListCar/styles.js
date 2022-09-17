import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
padding-top: ${(props) => props.teste};
`;

export const ButtonCar = styled.TouchableOpacity`
margin-bottom: 20px;
`;

export const ContainerImg = styled.View`
width: 70%;
margin: 0 15%;
`;

export const ImageCar = styled.Image`
width: 100%;
height: 189px;
`;

export const ContainerTxt = styled.View`
background-color: #FFF;
padding: 0 8px;
border-top-left-radius: 5px;
position: absolute;
bottom: 0;
right: 0;
`;

export const TextPlus = styled.Text`
color: #000;
text-align: center;
font-size: 16px;
`;

export const ContainerTitle = styled.View`
flex-direction: row;
justify-content: space-between;
margin-right: 20px;
`;

export const Title = styled.Text`
font-size: 20px;
font-weight: bold;
margin-left: 10px;
color: #FFF;
padding: 10px 0;
`;
export const Split = styled.View`
width: 100%;
height: 1%;
background-color: #FFF;
`;

export const ModalDetail = styled.Modal`

`;

export const ContainerModal = styled.View`
height: 100%;
background-color:#25221F;
`;

export const ButtonBack = styled.TouchableOpacity`
background-color: #FFF;
padding: 10px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
flex-direction: row;
`;

export const ButtonText = styled.Text`
color: #0A1E25;
font-size: 18px;
`;

export const Background = styled.ImageBackground`
height: 300px;
margin-bottom: 5%;
`;

export const ContainerButtons = styled.View`
flex-direction :row ;
justify-content: space-between;
height: 100%;
`;
export const ButtonArrows = styled.TouchableOpacity`
height: 100%;
width: 35px;
justify-content: center;
padding: 10px;
`;

export const ButtonRight = styled.TouchableOpacity`
height: 100%;
width: 35px;
justify-content: center;
padding: 10px;  
`;
export const ContainerDetail = styled.View`
flex-direction: row;
text-align: center;
justify-content: center;
border-width:2px;
border-color: #FFF;
width: 70% ;
margin: 0 15% 2%;
`;
export const DetailText = styled.Text`
text-align: center;
font-size: 20px;
color: #FFF;
margin-bottom: 5px;
margin-right: 15px;
`;
