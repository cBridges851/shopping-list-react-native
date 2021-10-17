import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#128DFA",
        padding: 20,
        height: 75,
    },
    headerText: {
        color: "#FFFFFF",
        fontSize: 25, 
        textAlign: "center"
    }
});
