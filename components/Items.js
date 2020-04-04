import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import ItemDetails from './ItemDetails';

export default class Items extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.invoice}>
                    <Text style={styles.invoice_value}>Sort by </Text>
                    <Text style={styles.invoice_days}>Filter</Text>
                </View>
                <ItemDetails />
                <ItemDetails />
                <ItemDetails />
                <View style={styles.add_item}>
                    <Button title="Add Item"></Button>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    invoice: {
        flexDirection: 'row',
        justifyContent: "space-between",
        fontSize: 17,
        margin: 15
    },
    invoice_value: {
        fontSize: 17,
        fontWeight: "700"
    },
    invoice_days: {
        color: '#ff7875',
        fontSize: 17,
        fontWeight: "700"
    },
    add_item: {
        margin: 20
    }
});