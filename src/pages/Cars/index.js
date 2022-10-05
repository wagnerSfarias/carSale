import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import ListCar from '../../components/ListCar';
import api from '../../services/api';
import { useRoute } from '@react-navigation/native';

import { Container, List } from './styles';
import { ContainerLoading } from '../Home/styles';

export default function Cars() {

  const route = useRoute();
 
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {

      const response = await api.get(`/cars?id=${route.params?.id}`);
    
      setCars(response.data);
      setLoading(false);
    }

    loadData();

  }, [])
  if (loading) {
    return (
      <ContainerLoading>
        <ActivityIndicator color='#FFF' size={45} />
      </ContainerLoading>
    )
  } else {

    return (
      <Container>
        <List data={cars}
          keyExtractor={item => item.name}
          renderItem={({ item }) => <ListCar data={item} />} />
      </Container>
    );
  }
}