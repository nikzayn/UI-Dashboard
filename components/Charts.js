import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BarChart } from "react-native-chart-kit";

export default class Charts extends Component {
    render() {
        return (
            <View>
                <View style={styles.chartInfo}>
                    <Text style={styles.revenue}>Total Revenue</Text>
                    <Text style={styles.revenue_value}>INR 25,980.00</Text>
                </View>
                <BarChart
                    data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                        datasets: [{
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,

                            ],
                            color: (opacity = 1) => `rgba(20, 20, 20, ${opacity})`
                        }]
                    }}
                    width={300}
                    height={220}
                    yAxisInterval={1}
                    chartConfig={{
                        withShadow: false,
                        withOuterLines: false,
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(90, 90, 90, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chartInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    revenue: {
        fontSize: 16,
        fontWeight: "700",
        color: '#69c0ff'
    },
    revenue_value: {
        fontSize: 16,
        fontWeight: "700",
        color: '#52c41a'
    }
})