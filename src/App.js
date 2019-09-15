import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Detail, Home, MapDetail } from './screen';
import colors from './theme/colors';

const AppNavigator = createStackNavigator({
  Home: Home,
  Detail: Detail,
  Map: MapDetail
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.orange,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);
