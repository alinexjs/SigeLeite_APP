import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const InicioRoute = () => <Text>Inicio</Text>;
const ProduRoute = () => <Text>Producoes</Text>;
const CadRoute = () => <Text>Cadastrar</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'inicio', title: 'Início', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'producoes', title: 'Produções', focusedIcon: 'album' },
    { key: 'cadastrar', title: 'Cadastrar', focusedIcon: 'plus-box' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: InicioRoute,
    producoes: ProduRoute,
    cadastrar: CadRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#ffff' }} 
    />
  );
};

export default MyComponent;
