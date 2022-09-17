import React from 'react'; 
import { useNavigation} from '@react-navigation/native';
import { Container, LogoBrand, NameBrand } from './styles';
import {urlImg} from '../../services/api';

export default function ListBrands({data}) {

    const navigation = useNavigation();
   
 return (
    <Container onPress={()=>{navigation.navigate('Cars', {id: data.id, title: data?.attributes?.name});}}>
        <LogoBrand
       source={{uri:`${urlImg}${data.attributes?.icon.data?.attributes?.url}`}} />
           <NameBrand>{data.attributes?.name}</NameBrand>
    </Container>

  );
}

