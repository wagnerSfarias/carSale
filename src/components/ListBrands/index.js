
import React from 'react'; 
import { useNavigation} from '@react-navigation/native';
import { Container, LogoBrand, NameBrand } from './styles';

export default function ListBrands({data}) {

    const navigation = useNavigation();
   
 return (
    <Container onPress={()=>{navigation.navigate('Cars', {id: data.id});}}>
        <LogoBrand
           source={{uri:`${data.icon}`}} 
           />
           <NameBrand>{data.name}</NameBrand>
    </Container>

  );
}


