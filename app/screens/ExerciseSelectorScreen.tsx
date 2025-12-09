import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ExerciseSelectorScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>운동 선택</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('ExerciseDetail', { name: '스쿼트' })}
      >
        <Text style={styles.cardText}>스쿼트</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('ExerciseDetail', { name: '푸시업' })}
      >
        <Text style={styles.cardText}>푸시업</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  header: { color: 'white', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#1c1c1e',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardText: { color: 'white', fontSize: 20 },
});
