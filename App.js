import { useState, useEffect, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import LoggedOutNav from './navigator/LggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        const fontsToLoad = [Ionicons.font];
        const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
        const imagesToLoad = [
          require('./assets/logo.png'),
          'https://similarpng.com/instagram-name-logo-transparent-png/',
        ];
        const imagePromises = imagesToLoad.map((image) =>
          Asset.loadAsync(image)
        );

        //await Font.loadAsync(Entypo.font);
        await new Promise.all([...fontPromises, ...imagePromises]);
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (loading) {
      await SplashScreen.hideAsync();
    }
  }, [loading]);

  if (!loading) {
    return null;
  }
  const subscription = Appearance.addChangeListener(({ colorScheme }) => {
    console.log(colorScheme);
  });
  return (
    // <ThemeProvider theme={ligth ? ligthTheme : darkTheme}>
    <NavigationContainer onReady={onLayoutRootView}>
      <LoggedOutNav />
    </NavigationContainer>
    // </ThemeProvider>
  );
}
