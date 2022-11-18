import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d6d6c2',
    },
    listContainer: {
      marginHorizontal: 20,
    },
    listTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#2e2e1f',
    }, 
    modalContainer: {
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 40,
       paddingVertical: 20,
    },
    modalTitle: {
       fontSize: 18,
       fontWeight: 'bold',
       marginBottom: 10,
    },
    modalDetailContainer: {
       paddingVertical: 20,
       justifyContent: 'center',
       alignItems: 'center',

    },
    modalDetailText: {
      fontSize: 14,
      color: '#212121',
    },
    selectedTask: {
       fontSize: 14,
       color: '#212121',
       fontWeight: 'bold',
       paddingVertical: 20,
    },
    modalButtonContainer: {
       width: '70%',
       flexDirection: 'row',
       justifyContent: 'space-around',
       marginHorizontal: 20,
    },
    });
    