import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';


const App = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 const createUserApi = "https://66fc914ac3a184a84d175710.mockapi.io/Job"
 const [user, setUser] = useState({
  name: "",
  email: "",
  phone: ""
})

  const handleAdd = async (event) () => {
    event.preventDefault();
    console.log(user)
    try {
        setIsLoading(true);
        const response = await fetch(createUserApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            console.log('Form submitted successfully!');
            setUser({name: "",email: "",phone: ""})
            navigate('/show-user');
        } else {
            console.error('Form submission failed!');
        }

    } catch (error) {
        setError(error.message);
    } finally{
        setIsLoading(false);
    }
  };

  return (
    <View style= { styles.button}>
      <TouchableOpacity onPress={handleAdd} style = { styles.button1}>
        <Text>ADD</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAdd} style = { styles.button1}>
        <Text>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAdd} style = { styles.button1}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  button1: {
    padding: 10,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
  },
};

export default App;