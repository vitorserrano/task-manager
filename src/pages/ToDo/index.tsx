import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

const ToDo = () => {
  const [data, setData] = useState<number[]>([1, 2, 3]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => String(data)}
        renderItem={({ item: data }) => (
          <View style={styles.listItem}>
            <Text>{data}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ToDo;
