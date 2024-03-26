import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const DropDown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <View style={styles.button}>
          <Text>i</Text>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default DropDown;