import { createBottomTabNavigator } from 'react-navigation-tabs';

export default createBottomTabNavigator({
    Home: { screen: Home },
    PaymentReports: { screen: PaymentReports },
    Reports: { screen: Reports },
    Items: { screen: Items }
});