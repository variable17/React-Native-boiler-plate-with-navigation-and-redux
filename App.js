import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import MyDosesScreen from './src/screens/MyDoses/MyDoses';
import HomeScreen from './src/screens/Home/Home';
import DispenserScreen from './src/screens/Dispenser/Dispenser';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import configureStore from './src/Store/ConfigureStore';

const store = configureStore();


// Register Screens
Navigation.registerComponent(
	"smart-caredose.AuthScreen",
	() => AuthScreen,
	store,
	Provider,
);
Navigation.registerComponent(
	"smart-caredose.MyDosesScreen",
	() => MyDosesScreen,
	store,
	Provider,
);
Navigation.registerComponent(
	"smart-caredose.HomeScreen",
	() => HomeScreen,
	store,
	Provider,
);
Navigation.registerComponent(
	"smart-caredose.DispenserScreen",
	() => DispenserScreen,
	store,
	Provider,
);
Navigation.registerComponent(
	"smart-caredose.SideDrawer",
	() => SideDrawer,
);

// Start a app
Navigation.startSingleScreenApp({
	screen: {
		screen: "smart-caredose.AuthScreen",
		title: "Login"
	}
});
