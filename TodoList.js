import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => {
                this.setState(
                    {
                        list: res.map(function(item) { return item.title; })
                    }
                );
            });
    }

    render() {
        return (
            <View>
                {this.state.list.map(function(todo, i) {
                    return <TodoItem todo={todo} key={i}/>;
                })}
            </View>
        );
    }
}

export default TodoList;
