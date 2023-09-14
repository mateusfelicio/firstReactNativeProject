import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <Home />      
      <StatusBar style="auto" /> 
    </>
  );
}
