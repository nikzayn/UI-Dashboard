import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card } from 'react-native-elements'
import Forward from 'react-native-vector-icons/Ionicons';

export default class PaymentReports extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <View style={styles.reports}>
                        <Text style={styles.value}>My Report</Text>
                        <Forward name="ios-arrow-forward" size={20} color="#69c0ff" />
                    </View>
                </Card>
                <Card>
                    <View style={styles.reports}>
                        <Text style={styles.value}>Statements Report</Text>
                        <Forward name="ios-arrow-forward" size={20} color="#69c0ff" />
                    </View>
                </Card>
                <Card>
                    <View style={styles.reports}>
                        <Text style={styles.value}>Invoice Report</Text>
                        <Forward name="ios-arrow-forward" size={20} color="#69c0ff" />
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
    reports: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    value: {
        fontSize: 15,
        fontWeight: "700"
    },
    my_reports: {
        margin: 20
    }
});