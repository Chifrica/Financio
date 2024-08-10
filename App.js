import Onboarding from './src/frontend/onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/frontend/login';
import SignUp from './src/frontend/signup';
import BottomNavigation from './src/navigation/bottomNavigation';
import Investment2 from './src/frontend/investment/index2';
import AddBankAccount from './src/frontend/investment/addBankAccount';
import Expenses from './src/frontend/finance/expenses';
import { ImageProvider } from './src/frontend/context/imageContext'; // Adjust the import path as necessary

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Onboarding" 
            component={Onboarding} 
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="BottomNavigation"
            component={BottomNavigation}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="Investment2"
            component={Investment2}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="AddBankAccount"
            component={AddBankAccount}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="Expenses"
            component={Expenses}
            options={{
              headerShown: false
            }}
          />

          {/* <Stack.Screen 
            name="ProfileEditing"
            component={ProfileEditing}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
  );
}
