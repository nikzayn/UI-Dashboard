import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class PaymentReports extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="My Reports" onPress={() =>
                    this.props.navigation.navigate('Reports')
                } />
                <Button title="Statements Reports" />
                <Button title="Invoice reports" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});