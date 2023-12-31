import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FilmesPopulares from "./screens/filmes/FilmesPopulares";
import { PaperProvider } from "react-native-paper";
import FilmesDetalhes from "./screens/filmes/FilmesDetalhes";
import Atores from "./screens/filmes/Atores";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilmesStack from "./screens/filmes/FilmesStack";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Filmes"
              component={FilmesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="movie" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Detalhes"
              component={FilmesDetalhes}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-question" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Atores"
              component={Atores}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-multiple" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Configurações"
              component={Atores}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="cog" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
