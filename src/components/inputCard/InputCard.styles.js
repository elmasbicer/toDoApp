import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '70%',
        borderRadius:20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 45,
        padding: 10,
        marginRight:'4%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },

    button: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    buttonText: {
        color: '#565656',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 13,
        color: '#565656'
    },

});
