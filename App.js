import React from "react";
import { Alert, Button, View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Header } from "./components/Header/Header.component";
import { ListItem } from "./components/ListItem/ListItem.component";
import { AddItem } from "./components/AddItem/AddItem.component";

export default class App extends React.Component {
    state = {
        items: 
        [
            {
                id: Math.random(),
                name: "milk"
            }, 
            {
                id: Math.random(),
                name: "oreos"
            }
        ]
    };

    addItem = name => {
        if (name) {
            let items = this.state.items;
            let newItem = {
                id: Math.random(),
                name: name
            }
    
            items.push(newItem);
    
            this.setState(items);
        } else {
            Alert.alert("Error", "Please enter an item", [{text: "OK"}]);
        }
    }

    deleteItem = id => {
        let items = this.state.items;

        for (let item of items) {
            if (item.id === id) {
                items.splice(items.indexOf(item), 1);
                break;
            }
        }

        this.setState(items)
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="Shopping List"/>
                <AddItem addItem={this.addItem}></AddItem>
                <FlatList
                    data={this.state.items}
                    renderItem={({item}) => (<ListItem item={item} deleteItem={this.deleteItem}></ListItem>)}
                    keyExtractor= {item => item.id}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:"#121212", 
    }
});