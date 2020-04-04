import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { Card } from 'react-native-elements'
import Rupee from 'react-native-vector-icons/FontAwesome';
import Due from 'react-native-vector-icons/Ionicons';
import Forward from 'react-native-vector-icons/Ionicons';

import Charts from './Charts';

const users = [
    {
        name: 'Kumar',
        description_first: 'Total Due',
        description_second: 'Upcoming Due',
        total_amount: '35,88800.00',
        upcoming_due: '35,8800.00',
        record_value: 'Record Payment',
        invoice_value: 'Oldest Invoice',
        invoice_days: '127 days'
    },
];
export default class Home extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                {
                    users.map((u, i) => {
                        return (
                            <ScrollView key={i}>
                                <Text style={styles.title}>Welcome, <Text style={styles.name}>{u.name}</Text></Text>
                                <Card style={styles.card}>
                                    <View>
                                        <Rupee name="rupee" size={30} style={styles.symbol} />
                                        <Text style={styles.description}>{u.description_first}</Text>
                                        <Text style={styles.total}>{u.total_amount}</Text>
                                    </View>
                                </Card>
                                <Card style={styles.card}>
                                    <View key={i}>
                                        <Due name="ios-timer" size={30} style={styles.symbol} color="#ffe58f" />
                                        <Text style={styles.description}>{u.description_second}</Text>
                                        <Text style={styles.total}>{u.upcoming_due}</Text>
                                    </View>
                                </Card>
                                <Card containerStyle={styles.record}>
                                    <View>
                                        <Text style={styles.record_value}>{u.record_value}</Text>
                                    </View>
                                </Card>
                                <Card>
                                    <View style={styles.invoice}>
                                        <Text style={styles.invoice_value}>{u.invoice_value}</Text>
                                        <View style={styles.days_info}>
                                            <Text style={styles.invoice_days}>{u.invoice_days}</Text>
                                            <Forward name="ios-arrow-forward" size={25} color="#ff7875" />
                                        </View>
                                    </View>
                                </Card>
                                <View style={styles.chartContainer}>
                                    <Charts />
                                </View>
                            </ScrollView>
                        );
                    })
                }

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
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10
    },
    name: {
        color: '#69c0ff',
        fontWeight: "bold",
        textAlign: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'red'
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
        fontSize: 40,
        color: '#ff7875',
        fontWeight: '700'
    },
    record: {
        backgroundColor: '#d9f7be'
    },
    record_value: {
        color: '#52c41a',
        fontSize: 17,
        fontWeight: "700"
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
        fontWeight: "700",
        marginRight: 10
    },
    days_info: {
        flexDirection: 'row',
    },
    chartContainer: {
        margin: 16,
        borderWidth: 2,
        borderColor: "#69c0ff",
    }
});
