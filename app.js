import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/Home";
import PersonagensScreen from "./src/screens/Personagens";
import DetalhesScreen from "./src/screens/Detalhes";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="PersonagensScreen"
                    component={PersonagensScreen}
                    options={{ title: "Personagens" }}
                />

                <Stack.Screen
                    name="DetalhesScreen"
                    component={DetalhesScreen}
                    options={{ title: "Detalhes" }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}