import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #25221F;
padding-top: ${(props) => props.teste};
`;

export const ContainerLogo = styled.View`
align-items: center;
padding-top:10%;
`;

export const Logo = styled.Image`
width: 250px;
height: 250px;
`;

export const Summary = styled.View`
justify-content: center;
padding: 10px;
`;
export const SummaryText = styled.Text`
color: #FFF;
font-size:18px;
text-align: center;
`;

export const TitleBrand = styled.Text`
color: #FFF;
font-size: 22px;
text-align: center;
margin-top: 5%;
`;
export const List = styled.FlatList`
max-height: 130px;
margin: auto 7px;
border-radius: 8px;
z-index: 99;
background-color: #c1c1c1;
position: absolute;
bottom: 20px;
`;
