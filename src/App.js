import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Alert, ImageBackground } from 'react-native';
import InputCard from './components/inputCard';
import TodoList from './components/todoList';

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [input, onChangeInput] = useState('');

    const handleAddButton = () => {
        if (input.trim() !== '') {
            setTodoList([...todoList, { text: input, completed: false }]);
            onChangeInput('');
        } else {
            Alert.alert('Input cannot be empty');
        }
    };

    const handleChangeItem = (index) => {
        const updatedTodoList = todoList.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );
        setTodoList(updatedTodoList);
    };

    const handleDeleteItem = (index) => {
        const updatedTodoList = todoList.filter((_, i) => i !== index);
        setTodoList(updatedTodoList);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/image.jpg')} resizeMode="cover" style={styles.image}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Today's Tasks</Text>
                    <Text style={styles.count}>{todoList.length}</Text>
                </View>
                <FlatList
                    data={todoList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TodoList
                            todoList={item.text}
                            index={index}
                            onPress={() => handleChangeItem(index)}
                            click={item.completed}
                            handleDeleteItem={() => handleDeleteItem(index)}
                        />
                    )}
                    contentContainerStyle={styles.flatListContent}
                    style={styles.flatList}
                />
                <View style={styles.inputCardPosition}>
                    <InputCard onPress={handleAddButton} input={input} onChangeInput={onChangeInput} />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    headerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 90,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    header: {
        color: '#565656',
        fontSize: 30,
        fontWeight: 'bold',
    },
    count: {
        color: '#565656',
        fontSize: 30,
        fontWeight: 'bold',
    },
    flatListContent: {
        flexGrow: 1,
        paddingBottom: 100,
    },
    flatList: {
        flex: 1,
    },
    inputCardPosition: {
        marginBottom: 10,
    },
});

export default App;
