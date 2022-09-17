import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import ListBrands from '../../components/ListBrands';

import api from '../../services/api';

import * as Animatable from 'react-native-animatable';
import {Container, ContainerLogo, Logo, Summary, SummaryText, TitleBrand, List} from './styles';

const Summarytxt = Animatable.createAnimatableComponent(SummaryText);

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 0 : 64;

export default function Brands() {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
         async function loadBrands(){
            const response = await api.get('api/brands?populate=icon');
            setBrands(response.data.data);
         }

         loadBrands();
    }, []);

    return (
        <Container teste={`${statusBarHeight + 'px'}`}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />

            <ContainerLogo>
                 <Logo source={require('../../assets/Vehicle-Sale-bro.png')} />
            </ContainerLogo>

            <Summary>
                <Summarytxt animation={'fadeInUp'} delay={1000} easing={'ease-out'}>
                    A mais de 20 anos no mercado
                    nos somos especialistas na venda de carros novos
                    e seminovos, confira nosso estoque.  
                 </Summarytxt>
            </Summary>

            <TitleBrand>Marcas</TitleBrand>
                            
       <List
       data={brands}
       showsHorizontalScrollIndicator={false}
       horizontal={true}
       keyExtractor={(item) => String(item.id)} 
       renderItem={({item})=><ListBrands data={item}/>}
       />
        </Container>
    );
}
