import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import Friends from './Friends';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Friends: { screen: Friends },
});

export default createAppContainer(AppNavigator);