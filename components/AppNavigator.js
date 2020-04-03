import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import PaymentReports from './PaymentReports';
import Reports from './Reports';
import Items from './Items';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    PaymentReports: { screen: PaymentReports },
    Reports: { screen: Reports },
    Items: { screen: Items }
});

export default createAppContainer(AppNavigator);