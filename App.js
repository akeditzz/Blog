import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator({
  index:IndexScreen
},{
  initialRouteName:'index',
  defaultNavigationOptions:{
    title:'Blogs'
  }
})

export default createAppContainer(navigator)
