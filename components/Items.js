import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import Down from 'react-native-vector-icons/Ionicons';
import Filter from 'react-native-vector-icons/FontAwesome';

import ItemDetails from './ItemDetails';

export default class Items extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.invoice}>
                    <View style={styles.sort_by}>
                        <Text style={styles.invoice_value}>Sort by </Text>
                        <Down name="ios-arrow-down" size={25} />
                    </View>
                    <View style={styles.sort_by}>
                        <Filter name="filter" size={25} />
                        <Text style={styles.invoice_days}>Filter</Text>
                    </View>
                </View>
                <ItemDetails />
                <ItemDetails />
                <ItemDetails />
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
        fontSize: 17,
        fontWeight: "700",
        margin: 3
    },
    add_item: {
        margin: 20
    },
    sort_by: {
        flexDirection: 'row'
    }
});