import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/Welcome';
import Login from './components/Login';
import { Provider as PaperProvider } from 'react-native-paper';
import Profile from './components/Profile';
import PDFDrawer from './components/PDFDrawer';
import VideoList from './components/VideoList';
import Tab from './components/Tab';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <PaperProvider>

        <Stack.Navigator initialRouteName='welcome'>

          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="Tab" component={Tab} />

        </Stack.Navigator>

      </PaperProvider>

    </NavigationContainer>
  )
};

