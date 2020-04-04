import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet } from 'react-native';

import HomeIcon from 'react-native-vector-icons/Ionicons';
import PaymentIcon from 'react-native-vector-icons/MaterialIcons';
import ReportIcon from 'react-native-vector-icons/Feather';
import ItemIcon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import PaymentReports from './PaymentReports';
import Reports from './Reports';
import Items from './Items';


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <HomeIcon name="md-home" size={30} style={styles.icon} />
            )
        },
    },
    PaymentReports: {
        screen: PaymentReports,
        navigationOptions: {
            tabBarLabel: "Payment Reports",
            tabBarIcon: ({ tintColor }) => (
                <PaymentIcon name="payment" size={30} style={styles.icon} />
            )
        },
    },
    Reports: {
        screen: Reports,
        navigationOptions: {
            tabBarLabel: "Reports",
            tabBarIcon: ({ tintColor }) => (
                <ReportIcon name="file-text" size={30} style={styles.icon} />
            )
        },
    },
    Items: {
        screen: Items,
        navigationOptions: {
            tabBarLabel: "Items",
            tabBarIcon: ({ tintColor }) => (
                <ItemIcon name="list-alt" size={30} style={styles.icon} />
            )
        },
    }
});


export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    icon: {
        color: '#69c0ff'
    }
})