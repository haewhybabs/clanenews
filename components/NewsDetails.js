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
import HeaderScreen from './Header';

class NewsDetails extends Component{
    
    
    constructor(props){
        super(props)

        this.state = {
            
            isLoading:true,
            url:props.navigation.getParam('url'),
            title:'News Details'
           
            
        }
  
       
    }

    fetchData = () => 
    {
        const url = this.state.url;  
        fetch(url,{
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

   
    componentDidMount() 
    {       
        this.fetchData();   
    }

    componentWillReceiveProps(props){

        this.setState({
            url:props.navigation.getParam('url')
        },()=>{
            this.showLoader();
            this.fetchData();
        });
        
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
                        <HeaderScreen navigation={this.props.navigation} title={this.state.title}/>
                        <Content>          
                            <Image source={require('../assets/news-background.jpg')}
                                style={{width:'100%',height:250}}
                            />
                            
                            <View style={{marginLeft:10, marginRight:10, marginTop:10}}>
                                <Text style={{fontWeight:'bold', fontSize:20}}>{this.state.dataSource.title}</Text>
                                <Text style={{fontSize:14,marginTop:5}}>{this.state.dataSource.createdAt}</Text>
                                <Row>
                                    <Thumbnail
                                        source={require('../assets/noImage.png')}
                                        scaleX={1} scaleY={1}
                                        style={{width:30, height:30, borderRadius:30/2,marginTop:10}}
                                    />
                                    <Text style={{marginTop:15,marginLeft:5,fontWeight:'bold'}}>{this.state.dataSource.author}</Text>
                                </Row>
                                <View>
                                    <Text style={{marginTop:5,lineHeight:23}}>{this.state.dataSource.body}</Text>
                                </View>
                                <View style={{marginTop:15}}>
                                    <View style={{borderBottomColor:'#e83e8c',borderBottomWidth:3,alignSelf:'stretch',marginTop:10}}/>
                                    <Text style={{fontWeight:'bold',marginTop:10}}>Comments</Text>
                                </View>
                                <View>
                                    <Row>
                                        <Thumbnail
                                            source={require('../assets/noImage.png')}
                                            scaleX={1} scaleY={1}
                                            style={{width:30, height:30, borderRadius:30/2,marginTop:10}}
                                        />
                                        <Text style={{marginTop:15,marginLeft:5}}>Ayobami Babalola</Text>
                                    </Row>
                                    <View>
                                        <Text style={{marginTop:5,lineHeight:23}}>We designed our loan process to fit your needs and help you grow. We support Small and Medium Scale Enterprises (SMEs) operators in Nigeria. Irrespective of the sector
                                        your enterprise is operating at an affordable interest rate.
                                        </Text>
                                        <Text style={{lineHeight:23,fontWeight:'bold'}}>NB: 0.95% is our Monthly Interest,Overdue Interest is 1.00%</Text>
                                    </View>
                                   

                                </View>

                                <View>
                                    <Row>
                                        <Thumbnail
                                            source={require('../assets/noImage.png')}
                                            scaleX={1} scaleY={1}
                                            style={{width:30, height:30, borderRadius:30/2,marginTop:10}}
                                        />
                                        <Text style={{marginTop:15,marginLeft:5}}>Ayobami Babalola</Text>
                                    </Row>
                                    <View>
                                        <Text style={{marginTop:5,lineHeight:23}}>We designed our loan process to fit your needs and help you grow. We support Small and Medium Scale Enterprises (SMEs) operators in Nigeria. Irrespective of the sector
                                        your enterprise is operating at an affordable interest rate.
                                        </Text>
                                        <Text style={{lineHeight:23,fontWeight:'bold'}}>NB: 0.95% is our Monthly Interest,Overdue Interest is 1.00%</Text>
                                    </View>
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


export default connect(mapStateToProp,mapActionstoProps)(NewsDetails);