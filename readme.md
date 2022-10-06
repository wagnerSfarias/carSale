# Concessionaria

## Sobre

Mais um aplicativo finalizado baseado em uma concessionaria essa aplicação permite visualizar os carros disponíveis e seus detalhes, os carros estão separados por marcas que facilita a procura.

Durante o desenvolvimento optei por 
criar uma API que está hospedada no heroku.

## Layout 

![apresentacao](https://github.com/wagnerSfarias/carSale/blob/main/src/assets/ezgif.com-gif-maker.gif?raw=true=300x534) 

## Detalhes API 📖

[API concessionaria](https://api-salecar.herokuapp.com)

Para buscar todas as marcas.


 ### Exemplo:
 https://api-salecar.herokuapp.com/brands


 [Marcas - Clique aqui](https://api-salecar.herokuapp.com/brands) 

 <hr>

Para buscar os carros disponíveis é necessario passar como parâmetro query o ID da marca.

 ### Exemplo:

 https://api-salecar.herokuapp.com/cars?id=IDMARCA

[Carros - Clique aqui](https://api-salecar.herokuapp.com/cars?id=2)

## Tecnologias utilizadas 🖥️
- React Native
- Axios
- React Navigation / Stack
- React Native Vector Icons
- Styled Components
- React Native Animatable 