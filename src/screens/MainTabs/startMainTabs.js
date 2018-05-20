import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-paper", 30),
        Icon.getImageSource("md-home", 30),
        Icon.getImageSource("ios-print", 30),
        Icon.getImageSource("ios-menu", 30),
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "smart-caredose.MyDosesScreen",
                    label: "My Doses",
                    title: "My Doses",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: 'Menu',
                                id: "sideDrawerToggle",
                            }
                        ]
                    }
                },
                {
                    screen: "smart-caredose.HomeScreen",
                    label: "Home",
                    title: "Home",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: 'Menu',
                                id: "sideDrawerToggle",
                            }
                        ]
                    }
                },
                {
                    screen: "smart-caredose.DispenserScreen",
                    label: "Dispenser",
                    title: "Dispenser",
                    icon: sources[2],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: 'Menu',
                                id: "sideDrawerToggle",
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: "smart-caredose.SideDrawer",
                }
            }
        });
    });
    
}

export default startTabs;