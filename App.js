import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LensProvider } from '@lens-protocol/react-native-lens-ui-kit';

import Profiles from './Profiles'
import ViewProfile from './ProfileView'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <LensProvider theme="dark">
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Profiles}  />
          <Stack.Screen name="ViewProfile" component={ViewProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </LensProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});