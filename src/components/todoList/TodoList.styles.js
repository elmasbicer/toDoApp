import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    listContainer: {
        backgroundColor: '#fff',
        height: 45,
        width: '95%',
        alignSelf: 'center',
        borderRadius:20,
        justifyContent: 'center',
        padding:10,
        margin: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    text: {
        color: '#565656',
        fontSize: 15,
        fontWeight: 'bold',
    },
    changeColorContainer: {
        backgroundColor: 'gray',
        height: 45,
        width: '95%',
        alignSelf: 'center',
        borderRadius:20,
        justifyContent: 'center',
        padding:10,
        margin: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    textLine : {
        textDecorationLine: 'line-through',
        fontSize: 15,
        fontWeight: 'bold',
    },
    icon: {
        width: 25,
        height: 25,
    }
})
