import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements'


// import charts from './charts.json';

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
                                        <Text style={styles.symbol}>₹</Text>
                                        <Text style={styles.description}>{u.description_first}</Text>
                                        <Text style={styles.total}>{u.total_amount}</Text>
                                    </View>

                                </Card>
                                <Card style={styles.card}>
                                    <View key={i}>
                                        <Text style={styles.symbol}>₹</Text>
                                        <Text style={styles.description}>{u.description_second}</Text>
                                        <Text style={styles.total}>{u.upcoming_due}</Text>
                                    </View>
                                </Card>
                                <Card>
                                    <View>
                                        <Text style={styles.record_value}>{u.record_value}</Text>
                                    </View>
                                </Card>
                                <Card>
                                    <View style={styles.invoice}>
                                        <Text style={styles.invoice_value}>{u.invoice_value}</Text>
                                        <Text style={styles.invoice_days}>{u.invoice_days}</Text>
                                    </View>
                                </Card>
                                <Card>
                                    <Text>Charts</Text>
                                </Card>
                                <Button style={styles.reports} title="Reports" onPress={() => this.props.navigation.navigate('PaymentReports')} />
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
    record_value: {
        color: '#73d13d',
        fontSize: 15,
    },
    invoice: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    invoice_days: {
        color: '#ff7875',
    },
});
