// import React, {useState, useEffect} from 'react';

// import ListCar from '../../components/ListCar';
// import api from '../../services/api';
// import { useRoute } from '@react-navigation/native';

// import { Container, List } from './styles';
// export default function Cars() {

//   const route = useRoute();
//     // const [carros,setCarros] = useState([
//     //     {key:1, nome:'Golf 1.4 TSI Highline ', valor:70.000, ano:2016, km:75.200, Combustivel:'Gasolina',imgCar:(require('../assets/golf.jpg')),
//     //     imgEsquerda:(require('../assets/golfTraseira.jpg')), imgDireita:(require('../assets/painelGolf.jpg'))},
//     //     {key:2, nome:'BMW 320I 2.0 Turbo', valor:290.000, ano:2021, km:10.800, Combustivel:'Gasolina',imgCar:(require('../assets/bmw.jpg')),
//     //     imgEsquerda:(require('../assets/bmwTraseira.jpg')),imgDireita:(require('../assets/painelBmw.jpg'))},
//     //     {key:3, nome:'Tiguan R-Line 350', valor:130.000, ano:2021, km:16.250,Combustivel:'Flex',imgCar:(require('../assets/tiguan.jpg')),
//     //     imgEsquerda:(require('../assets/tiguanTraseira.jpg')),imgDireita:(require('../assets/painelTiguan.jpg'))},
//     //     {key:4, nome:'Audi A3 Sedan 1.4 Turbo', valor:149.900, ano:2021,km:1.000, Combustivel:'Flex',imgCar:(require('../assets/audi.jpg')),
//     //     imgEsquerda:(require('../assets/audiTraseira.jpg')),imgDireita:(require('../assets/painelAudi.jpg'))},
//     //     {key:5, nome:'Corolla 2.0 xei 16V', valor:80.000, ano:2018,km:35.000, Combustivel:'Flex',imgCar:(require('../assets/corolla.jpg')),
//     //     imgEsquerda:(require('../assets/corollaTraseira.jpg')),imgDireita:(require('../assets/painelCorolla.jpg'))},
        
//     //   ])

//     const [cars, setCars] = useState([]);

//       useEffect(()=>{
//       async function loadData(){

//         const response = await api.get(`api/brands/${route.params?.id}?fields=name&populate=cars,cars.imgMain,cars.imgRight,cars.imgLeft`);

//         setCars(response.data?.data?.attributes?.cars?.data);
//       }

//       loadData();

//   },[])


//  return (
//    <Container>
//      <List data={cars}
//       keyExtractor={item=>String(item.id)}
//       renderItem={({item})=><ListCar data={item} />}/>
//    </Container>
//   );
// }


import React, {useState, useEffect} from 'react';

import ListCar from '../../components/ListCar';
import api from '../../services/api';
import { useRoute } from '@react-navigation/native';

import { Container, List } from './styles';
export default function Cars() {

  const route = useRoute();
    // const [carros,setCarros] = useState([
    //     {key:1, nome:'Golf 1.4 TSI Highline ', valor:70.000, ano:2016, km:75.200, Combustivel:'Gasolina',imgCar:(require('../assets/golf.jpg')),
    //     imgEsquerda:(require('../assets/golfTraseira.jpg')), imgDireita:(require('../assets/painelGolf.jpg'))},
    //     {key:2, nome:'BMW 320I 2.0 Turbo', valor:290.000, ano:2021, km:10.800, Combustivel:'Gasolina',imgCar:(require('../assets/bmw.jpg')),
    //     imgEsquerda:(require('../assets/bmwTraseira.jpg')),imgDireita:(require('../assets/painelBmw.jpg'))},
    //     {key:3, nome:'Tiguan R-Line 350', valor:130.000, ano:2021, km:16.250,Combustivel:'Flex',imgCar:(require('../assets/tiguan.jpg')),
    //     imgEsquerda:(require('../assets/tiguanTraseira.jpg')),imgDireita:(require('../assets/painelTiguan.jpg'))},
    //     {key:4, nome:'Audi A3 Sedan 1.4 Turbo', valor:149.900, ano:2021,km:1.000, Combustivel:'Flex',imgCar:(require('../assets/audi.jpg')),
    //     imgEsquerda:(require('../assets/audiTraseira.jpg')),imgDireita:(require('../assets/painelAudi.jpg'))},
    //     {key:5, nome:'Corolla 2.0 xei 16V', valor:80.000, ano:2018,km:35.000, Combustivel:'Flex',imgCar:(require('../assets/corolla.jpg')),
    //     imgEsquerda:(require('../assets/corollaTraseira.jpg')),imgDireita:(require('../assets/painelCorolla.jpg'))},
        
    //   ])

    const [cars, setCars] = useState([]);

      useEffect(()=>{
      async function loadData(){

        // const response = await api.get(`api/brands/${route.params?.id}?fields=name&populate=cars,cars.imgMain,cars.imgRight,cars.imgLeft`);
         const response = await api.get(`/cars?id=${route.params?.id}`);
        //  console.log(route.params?.id)
        //  console.log(response.data)
        setCars(response.data);
      }

      loadData();

  },[])


 return (
   <Container>
     <List data={cars}
      keyExtractor={item=> item.name}
      renderItem={({item})=><ListCar data={item} />}/>
   </Container>
  );
}
