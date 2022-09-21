// import React from 'react'; 
// import { useNavigation} from '@react-navigation/native';
// import { Container, LogoBrand, NameBrand } from './styles';
// import {urlImg} from '../../services/api';

// export default function ListBrands({data}) {

//     const navigation = useNavigation();
   
//  return (
//     <Container onPress={()=>{navigation.navigate('Cars', {id: data.id, title: data?.attributes?.name});}}>
//         <LogoBrand
//        source={{uri:`${urlImg}${data.attributes?.icon.data?.attributes?.url}`}} />
//            <NameBrand>{data.attributes?.name}</NameBrand>
//     </Container>

//   );
// }


import React from 'react'; 
import { useNavigation} from '@react-navigation/native';
import { Container, LogoBrand, NameBrand } from './styles';
import {urlImg} from '../../services/api';

export default function ListBrands({data}) {

    const navigation = useNavigation();
   
 return (
    <Container onPress={()=>{navigation.navigate('Cars', {id: data.id, title: data?.name});}}>
        <LogoBrand
          //  source={{uri:`${data.icon}`}} 
          source={{uri:'https://images-shoptime.b2w.io/produtos/5453911000/imagens/emblema-logo-toyota-cromado-grade-yaris/5453911000_1_large.jpg'}} 
           />
           <NameBrand>{data.name}</NameBrand>
    </Container>

  );
}


