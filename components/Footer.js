import React,{Component} from 'react';

import {   Text} from 'react-native';

import{
    Col,Button,Icon,Footer,FooterTab} from 'native-base';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';


class FooterScreen extends Component{
    
    constructor(){
        super()

        this.state = {
        
        }
      
    }

    NewsHandler = () =>{
        this.props.navigation.navigate('News');
    }
    
    CreateNewsHandler = () =>{
        this.props.navigation.navigate('CreateNews');
    }


    render(){
        return(
            <Footer>
                <FooterTab  style={{backgroundColor:'#3200c8'}}>
                    <Button vertical onPress={()=>this.NewsHandler()}>
                        <Icon name="apps" />
                        <Text style={{color:'#fff'}}>News</Text>
                    </Button>
                    <Button vertical onPress={this.CreateNewsHandler}>
                        <Icon active name="md-create" />
                        <Text style={{color:'#fff'}}>Create</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default FooterScreen;;