import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Reports extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card1}>
                    <Text>Total Invoices</Text>
                    <Text>INR 35,8800.00</Text>
                </View>
                <View style={styles.card2}>
                    <Text>Total Revenue</Text>
                    <Text>INR 26,480,100.00</Text>
                </View>
                <Text>Total Due Amount INR 100,000.00</Text>
                <Text>Get Reports</Text>
                <View>
                    <Button title="Invoice Reports" onPress={() =>
                        this.props.navigation.navigate('Items')
                    } />
                    <Text>Get Daily Reports</Text>
                </View>
                <View>
                    <Button title="Payment Reports" onPress={() =>
                        this.props.navigation.navigate('Items')
                    } />
                    <Text>My Daily</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    card1: {
        backgroundColor: 'red'
    },
    card2: {
        backgroundColor: 'yellow'
    }
});
