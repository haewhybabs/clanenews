import React,{Component} from 'react';
import { 
  StyleSheet,
  Image,
  Text,View,TouchableOpacity,StatusBar,Platform,ActivityIndicator
   } from 'react-native';
import {  Container,Header,Body,CheckBox,Title,Card,
    CardItem,Left,Right,Content,Grid,
    Col,Button, Subtitle,Form, Item, Input,Label,Row,Toast,Root,Thumbnail,Icon,Footer,FooterTab,
    Picker} from 'native-base';
import {apiUrl} from '../Config';
import {bindActionCreators} from 'redux';
import {saveUserDetailsAction} from '../redux/actions';
import {connect} from 'react-redux';
import FooterScreen from './Footer';

class News extends Component{
    
    
    constructor(props){
        super(props)

        this.state = {
            
            isLoading:true,
            page:1,
            limit:10,
            dataSource:[],
           
            
        }
  
       
    }

   
    componentDidMount() {

        fetch(apiUrl+'news?page='+this.state.page+'&limit='+this.state.limit,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
            
        })
        .then(response => {
                                
            return response.json();      
        })
        
        .then((contents)=>{

            this.setState({

                dataSource:contents,
                isLoading:false

            });
        })
        .catch((error)=>{

            this.errorInConnection();
        })
       
       
        
    }

    errorInConnection = () => {
        this.hideLoader();

        Toast.show({
            text:'Ops!! Connection Problem',
            buttonText:'Okay',
            style:{backgroundColor:'red'}
            
        })
    }
    showLoader = () => {
        this.setState({isLoading:true})
    }

    hideLoader = () =>{
        this.setState({isLoading:false})
    }

    ReadHandler = () =>{
        this.props.navigation.navigate('NewsDetails')
    }

    

  
    render(){
        
    
       
            return (  
                this.state.isLoading
                ?
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size="large" color="#00CCFF" animating  />
                </View>
                :
                <Root>
                    <Container style={{backgroundColor:'#fff'}}>
                   
                        <Content>
                            
                            <Image source={require('../assets/news-background.jpg')}
                                style={{width:'100%',height:300}}
                            />
                           
                            <View style={{ alignItems:'center'}}>
                                <Text style={{fontSize:15, marginTop:20, marginBottom:10}}>Latest News</Text>
                            </View>
                                
                            <View style={{marginLeft:5,marginRight:5}}>
                                <Card>
                                    <CardItem>
                                        <Row>
                                            <Icon active name="logo-hackernews" />
                                            <Text style={{fontWeight:'bold'}}>Corona Virus is up to 9000 cases in Nigeria</Text>
                                        </Row>
                                        <Right>
                                            <Button rounded style={{width:60,height:30}} onPress={this.ReadHandler}>
                                                <Text style={{textAlign:'center',width:'100%',color:'#fff'}}>Read</Text>
                                            </Button>
                                        </Right>
                                    </CardItem>
                                    <CardItem>  
                                        <Text>Ajani Adekemi</Text>
                                        <Right>
                                            <Text>4-jan-2020</Text>
                                        </Right>
                                    </CardItem>
                                </Card>
                                <Card>
                                    <CardItem>
                                        <Row>
                                            <Icon active name="logo-hackernews" />
                                            <Text style={{fontWeight:'bold'}}>Corona Virus is up to 9000 cases in Nigeria</Text>
                                        </Row>
                                        <Right>
                                            <Button rounded style={{width:60,height:30}}>
                                                <Text style={{textAlign:'center',width:'100%',color:'#fff'}}>Read</Text>
                                            </Button>
                                        </Right>
                                    </CardItem>
                                    <CardItem>  
                                        <Text>Ajani Adekemi</Text>
                                        <Right>
                                            <Text>4-jan-2020</Text>
                                        </Right>
                                    </CardItem>
                                </Card>

                                <Card>
                                    <CardItem>
                                        <Row>
                                            <Icon active name="logo-hackernews" />
                                            <Text style={{fontWeight:'bold'}}>Corona Virus is up to 9000 cases in Nigeria</Text>
                                        </Row>
                                        <Right>
                                            <Button rounded style={{width:60,height:30}}>
                                                <Text style={{textAlign:'center',width:'100%',color:'#fff'}}>Read</Text>
                                            </Button>
                                        </Right>
                                    </CardItem>
                                    <CardItem>  
                                        <Text>Ajani Adekemi</Text>
                                        <Right>
                                            <Text>4-jan-2020</Text>
                                        </Right>
                                    </CardItem>
                                </Card>

                                <View>
                                    <Row>
                                        
                                        <Button transparent style={{width:60}}>
                                            <Text style={{textAlign:'center',width:'100%',color:'red'}}>Previous</Text>
                                        </Button>
                                    

                                        <Button transparent style={{width:60}}>
                                            <Text style={{textAlign:'center',width:'100%',color:'green'}}>Next</Text>
                                        </Button>
                                    </Row>
                                </View>

                                
                            </View>       
                        </Content>
                        <FooterScreen navigation = {this.props.navigation}/>                    
                    </Container>
                </Root>
            );

        

        
    }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});



const mapStateToProp = (state) =>{

    return {
        user:state.user
    }

    
}

const mapActionstoProps = (dispatch) => {
    return bindActionCreators({
        saveUserDetailsAction
    },dispatch)
}


export default connect(mapStateToProp,mapActionstoProps)(News);