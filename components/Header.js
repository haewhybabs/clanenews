import React,{Component} from 'react';

import { 
  StyleSheet,
  View,

  Text
   } from 'react-native';

import{
    Container,Header,Body,CheckBox,Title,Card,
    CardItem,Left,
    Col,Button,Icon, 
} from 'native-base';



class HeaderScreen extends Component{
    
    constructor(){
        super()

        this.state = {
            dataSource:[],
            isLoading:true,
           
        }
  
       
    }

    render(){
        return(
            <Header style={{backgroundColor:'#3200c8'}}>
                <Left>
                    <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
                        <Icon name='menu' />
                    </Button>            
                </Left>
                <Body>
                    <Text style={{color:'#fff',fontSize:15}}>{this.props.title}</Text>
                </Body>
                
            </Header>
        );
    }
}

export default HeaderScreen;