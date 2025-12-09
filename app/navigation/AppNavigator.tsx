import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExerciseSelectorScreen from '../screens/ExerciseSelectorScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="ExerciseSelector"
          component={ExerciseSelectorWrapper} // ← 래퍼 등록
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 🔥 래퍼 컴포넌트
function ExerciseSelectorWrapper({ navigation }: any) {
  const handleSelect = (exercise: string) => {
    console.log("선택됨:", exercise);

    // 필요한 경우 다음 화면으로 이동
    // navigation.navigate("NextScreen", { exercise });
  };

  return <ExerciseSelectorScreen onSelect={handleSelect} />;
}
