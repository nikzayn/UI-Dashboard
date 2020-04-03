import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Items extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Sort By</Text>
                <Text>Filter</Text>
                <View>
                    <Text>Vedic Chai (Product)</Text>
                    <Text>SKU</Text>
                    <Text>HSN Number</Text>
                    <Text>Item Price</Text>
                    <Text>Tax Rate</Text>
                    <Text>KG</Text>
                    <Text>Initial Stock</Text>
                </View>
                <View>
                    <Text>Vedic Chai (Product)</Text>
                    <Text>SKU</Text>
                    <Text>HSN Number</Text>
                    <Text>Item Price</Text>
                    <Text>Tax Rate</Text>
                    <Text>KG</Text>
                    <Text>Initial Stock</Text>
                </View>
                <View>
                    <Text>Vedic Chai (Product)</Text>
                    <Text>SKU</Text>
                    <Text>HSN Number</Text>
                    <Text>Item Price</Text>
                    <Text>Tax Rate</Text>
                    <Text>KG</Text>
                    <Text>Initial Stock</Text>
                </View>
                <Button title="Add Item"></Button>
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