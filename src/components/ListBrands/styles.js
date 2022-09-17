import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
background-color: #FFF;
margin: 8px 4px;
border-radius: 8px;
align-items: center;
justify-content: center;
padding: 5px 15px;
border-bottom-width: 5px;
border-color: #000;
`;

export const LogoBrand = styled.Image.attrs({ resizeMode: 'contain' })`
width: 80px;
height: 80px;
`;

export const NameBrand = styled.Text`
color: #000;
font-size: 16px;
`; 