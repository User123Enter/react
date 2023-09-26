import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderRadius: 20,
        backgroundColor: '#d3d3d3',
        height: 50,
        justifyContent: 'flex-start',
        paddingLeft: 20,
        textAlign: 'left',
        fontSize: 20,
        color: '#6C63FF',
        margin: 5
    },
    inputContainer: {
        width: '95%',
        paddingRight: 40,
        paddingLeft: 40
    },
    baseText: {
        fontSize: 15,
        color: '#000000',
    },
    buttonContainer: {
        justifyContent: 'center',
        paddingTop:10,
        width: '65%'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6C63FF',
        padding: 10,
        borderRadius: 35,
        height: 50,
        width: '100%'
    },
    image: {
        width: 167,
        height: 198
    },
    imageContainer: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    welcomeText: {
        fontSize: 35,
        marginTop: 10,
        margin: 5
    },
    signInQuestionContainer: {
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    clickableText: {
        paddingLeft: 5,
        color: '#6C63FF',
        fontWeight: 'bold'
    }
});