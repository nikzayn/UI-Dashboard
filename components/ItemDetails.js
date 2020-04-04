import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card, Divider } from 'react-native-elements'

const users = [
    {
        item_name: 'Vedic Chai',
        item_type: 'Product',
        total_amount: '35,88800.00',
        upcoming_due: '35,8800.00',
        record_value: 'Record Payment',
        invoice_value: 'Oldest Invoice',
        invoice_days: '127 days'
    },
];

export default class ItemDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <View style={styles.items}>
                        <Text style={styles.symbol}>Vedic Chai</Text>
                        <Text style={styles.description}>Product</Text>
                        <Text>/</Text>
                    </View>
                    <View style={styles.sku}>
                        <Text style={styles.sku_value}>SKU: 761253401987</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.inner_row}>
                        <View style={styles.hsn}>
                            <Text style={styles.hsn_title}>HSN</Text>
                            <Text style={styles.hsn_value}>1234567</Text>
                        </View>
                        <View style={styles.hsn}>
                            <Text style={styles.hsn_title}>Item Price</Text>
                            <Text style={styles.hsn_value}>INR 10,000,000.00</Text>
                        </View>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.inner_row}>
                        <View style={styles.hsn}>
                            <Text style={styles.hsn_title}>Tax Rate</Text>
                            <Text style={styles.hsn_value}>5%</Text>
                        </View>
                        <View style={styles.hsn}>
                            <Text style={styles.hsn_title}>Unit</Text>
                            <Text style={styles.hsn_value}>KG</Text>
                        </View>
                        <View style={styles.hsn}>
                            <Text style={styles.hsn_title}>Initial Stock</Text>
                            <Text style={styles.hsn_value}>23</Text>
                        </View>
                    </View>
                </Card>

            </View>
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
    symbol: {
        fontSize: 20,
        fontWeight: "700"
    },
    description: {
        fontSize: 15,
        padding: 6,
        borderRadius: 20,
        backgroundColor: '#ffd6e7'
    },
    items: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    total: {
        textAlign: 'center',
        fontSize: 30,
        color: '#ff7875',
        fontWeight: '700'
    },
    // sku: {
    //     flexDirection: 'row',
    //     justifyContent: "space-between",
    // },
    sku_value: {

    },
    divider: {
        backgroundColor: '#ffd666',
        marginTop: 10,
        width: 300,
        height: 2
    },
    hsn: {
        marginTop: 10
    },
    hsn_title: {
        fontWeight: "700",
    },
    hsn_value: {

    },
    inner_row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});