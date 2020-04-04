import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import Due from 'react-native-vector-icons/Ionicons';

export default class Reports extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card containerStyle={styles.card}>
                        <View>
                            <Due name="ios-timer" size={30} style={styles.symbol} color="#ffe58f" />
                            <Text style={styles.description}>Total Invoices</Text>
                            <Text style={styles.total}>35,8800</Text>
                        </View>
                    </Card>
                    <Card containerStyle={styles.card}>
                        <View>
                            <Due name="ios-timer" size={30} style={styles.symbol} color="#ffe58f" />
                            <Text style={styles.description}>Total Revenue</Text>
                            <Text style={styles.revenue}>INR 26,480,100.00</Text>
                        </View>
                    </Card>
                    <Card containerStyle={styles.due_amount}>
                        <View style={styles.invoice}>
                            <Text style={styles.invoice_value}>Total Due Amount</Text>
                            <Text style={styles.invoice_days}>INR 100,000.00</Text>
                        </View>
                    </Card>
                    <Divider style={styles.divider} />
                    <Card containerStyle={styles.card}>
                        <View style={styles.reports}>
                            <Text style={styles.value}>Invoice Reports</Text>
                            <Text style={styles.invoice_days}>></Text>
                        </View>
                    </Card>
                    <View style={styles.tags}>
                        <Button style={styles.tag_button} title="Get Daily Report" />
                        <Button style={styles.tag_button} title="Get Monthly" />
                        <Button style={styles.tag_button} title="Financial Year" />
                        <Button style={styles.tag_button} title="Custom" />
                        <Button style={styles.tag_button} title="More Reports" />
                    </View>
                    <Card containerStyle={styles.card}>
                        <View style={styles.reports}>
                            <Text style={styles.value}>Payment Reports</Text>
                            <Text style={styles.invoice_days}>></Text>
                        </View>
                    </Card>
                    <View style={styles.tags}>
                        <Button style={styles.tag_button} title="Get Daily Report" />
                        <Button title="Get Monthly" />
                        <Button title="Financial Year" />
                        <Button title="Custom" />
                        <Button title="More Reports" />
                    </View>
                </ScrollView>
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
    card: {
        borderWidth: 0
    },
    symbol: {
        textAlign: 'center',
        fontSize: 40
    },
    description: {
        textAlign: 'center',
        fontSize: 20
    },
    total: {
        textAlign: 'center',
        fontSize: 30,
        color: '#ff7875',
        fontWeight: '700'
    },
    revenue: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700'
    },
    due_amount: {
        backgroundColor: '#fff1f0',
        borderWidth: 0
    },
    invoice: {
        flexDirection: 'row',
        justifyContent: "space-between",
        fontSize: 17,
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
    divider: {
        backgroundColor: '#ffd666',
        marginLeft: 28,
        marginBottom: 10,
        marginTop: 15,
        width: 300,
        height: 2
    },
    reports: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    value: {
        fontSize: 15,
        fontWeight: "700"
    },
    tags: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 12,
        flex: 1,
        flexWrap: 'wrap'
    },
});
