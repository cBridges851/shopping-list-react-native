import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export default class ListItem extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.listItemView}>
                    <Text style={styles.shoppingListItem}>{this.props.item.name}</Text>
                    <Icon
                        name="remove" 
                        size={30} 
                        color={"#FF0000"}
                        onPress={() => this.props.deleteItem(this.props.item.id)}>
                    </Icon>
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