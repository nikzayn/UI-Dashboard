import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome, Kumar</Text>
                <View style={styles.card1}>
                    <Text>rupee</Text>
                    <Text>Total Due</Text>
                    <Text>INR 35,8800.00</Text>
                </View>
                <View style={styles.card2}>
                    <Text>rupee</Text>
                    <Text>Total Due</Text>
                    <Text>INR 35,8800.00</Text>
                </View>
                <Button title="Record Payment" onPress={() =>
                    this.props.navigation.navigate('PaymentReports')
                } />
                <Button title="Oldest Invoice" />
                <View>
                    <Text>Chart Representation</Text>
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
