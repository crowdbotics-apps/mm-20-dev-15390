import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen014740Navigator from '../features/CopyOfBlankScreen014740/navigator';
import CopyOfBlankScreen014739Navigator from '../features/CopyOfBlankScreen014739/navigator';
import BlankScreen014738Navigator from '../features/BlankScreen014738/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen014740: { screen: CopyOfBlankScreen014740Navigator },
CopyOfBlankScreen014739: { screen: CopyOfBlankScreen014739Navigator },
BlankScreen014738: { screen: BlankScreen014738Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
