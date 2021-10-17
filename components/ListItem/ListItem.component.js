import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CrossIcon } from "../CrossIcon/CrossIcon.component";

export default class ListItem extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.listItemView}>
                    <Text style={styles.shoppingListItem}>{this.props.item.name}</Text>
                    <CrossIcon item={this.props.item} deleteItem={this.props.deleteItem}></CrossIcon>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
        listItemView: {
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#212121",
            alignItems: "center"
        },
        shoppingListItem : {
            color: "#FFFFFF",
            fontSize: 20,
            padding: 15
        }
    }
)