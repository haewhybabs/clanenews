import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    Image
     } from 'react-native';
  
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';
import Splash from './Splash';
import News from './News';
import NewsDetails from './NewsDetails';
import{Container,Content,Header,Body} from 'native-base';


class Route extends Component {

    constructor() {
        super()
    }

    render() {

        return ( <Navigator />);
    }
}

export default Route;




const screens = {

    Splash: {
        screen: Splash,
        header: null,
        navigationOptions:({navigation}) =>{
            return {
                drawerLabel: ()=> null,
                drawerLockMode:'locked-closed'
            }
        }
    },   

    News: {
        screen: News,
        header: null,
        
    },
    NewsDetails: {
        screen: NewsDetails,
        header: null,
        
    },      
}
const CustomDrawerContentComponent = props =>(
    <Container>
        <Header style={{height:200,backgroundColor:'#fff'}}>
            <Body>
                <Image style={styles.drawerImage} source = {require('../assets/logo.png')}/>
            </Body>
            
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)

const HomeStack = createDrawerNavigator(screens,{
    contentComponent:CustomDrawerContentComponent,
    initialRouteName:'Splash',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle'
});

const Navigator = createAppContainer(HomeStack);

const styles = StyleSheet.create({
    
    drawerImage:{
        height:40,
        width:200,
        borderRadius:75
    }
});