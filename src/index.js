import { useState } from 'react'; 
import { View, TextInput, Button, Text, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './components/styles';
import { AddItem } from './components/index';
import TaskItem from './components/task/item';


export default function App() {
  const [task, setTask] = useState ('');
  const [taskList, setTaskList] = useState ([]);
  const [modalVisible, setModalVisible] = useState (false);
  const [selectedTask, setSelectedTask] = useState (null);

  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    setTask('');
  }
  const onHandleSelected = (item) => {
    setSelectedTask(item);
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected} />
  )
  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  }
  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList)=> prevTaskList.filter((item) => item.id !== selectedTask.id))
    setModalVisible(!modalVisible);
  }
  const onHandleChange = (text) => setTask(text);

  return (
    <View style={styles.container}>
      <AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      <View style={styles.listContainer}>
      <Text style={styles.listTitle}>List</Text>
      </View>
      <FlatList
      style={styles.listContainer}
      data={taskList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
      <Modal visible={modalVisible} animationType='slide'>
       <View style={styles.modalContainer}>
         <Text style={styles.modalTitle}>Task Detail</Text>
      <View style={styles.modalDetailContainer}>
         <Text style={styles.modalDetailText}>Are you sure?</Text>
         <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
       </View>
       <View style={styles.modalButtonContainer}>
           <Button  
              title='Cancel' 
              color='#999966'
              onPress={onHandleCancel} 
           />
            <Button  
              title='Delete' 
              color='#999966' 
              onPress={onHandleDeleteItem} 
           />
      </View>
      </View>
    </Modal>
   </View>
  );
} 
      