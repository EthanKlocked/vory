/****************** IMPORT *****************/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, MyPage, Home } from '../routes';

/***************** SETTING *****************/
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**************** COMPONENT ****************/
const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/****************** EXPORT *****************/
export default Navigation;
