import React,{Component} from 'react';
import { 
  StyleSheet,
  Image,
  Text,View,TouchableOpacity,StatusBar,Platform,ActivityIndicator
   } from 'react-native';
import {  Container,Header,Body,CheckBox,Title,Card,
    CardItem,Left,Right,Content,Grid,
    Col,Button, Subtitle,Form, Item, Input,Label,Row,Toast,Root,Thumbnail,Icon,Footer,FooterTab,Textarea,
    Picker} from 'native-base';
import {apiUrl} from '../Config';
import {bindActionCreators} from 'redux';
import {saveUserDetailsAction} from '../redux/actions';
import {connect} from 'react-redux';
import FooterScreen from './Footer';
import HeaderScreen from './Header';

class CreateNews extends Component{
    
    
    constructor(props){
        super(props)

        this.state = {  
            isLoading:false,
            ScreenTitle:'Create News',
            author:'',
            title:'',
            body:'',
            authorError:'',
            titleError:'',
            bodyError:''           
        }
  
       
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

    titleValidation =(title) =>
    {
        let error=""
        if(title == ""){
            error = 'Title Field cannot be empty';
        } 
        this.setState({
            title,
            titleError:error
        });
       
    }

    authorValidation =(author) =>
    {
        let error=""
        if(author == ""){
            error = 'Author Field cannot be empty';
        } 
        this.setState({
            author,
            authorError:error
        });
       
    }

    bodyValidation =(body) =>
    {
        let error=""
        if(body == ""){
            error = 'Author Field cannot be empty';
        } 
        this.setState({
            body,
            bodyError:error
        });
       
    }

    submitValidation = () =>{
        
        let state = this.state;

        let titleError =""
        let authorError=""
        let bodyError =""

        if(state.title == ""){
            titleError = 'Email cannot be empty';
        }
        if(state.author ==""){
            authorError='Name Field cannot be empty';
        }
        if(state.body==""){
            bodyError= "Password Field cannot be empty";
        }
        

        this.setState({
            titleError,
            authorError,
            bodyError,
        });
    }

    submitHandler =() =>{
        this.submitValidation();
        let state = this.state

        if(this.state.titleError=="" && this.state.authorError =="" && this.state.bodyError=="" ){
            this.showLoader();
            fetch(apiUrl+'news',{
                method:"POST",
                headers: {
                    "key": "Content-Type",
                    "name": "Content-Type",
                    "value": "application/json",
                    "type": "text"
                },
                body: {
                    raw:{
                    title:state.title,
                    body:state.body,
                    author:state.author

                    },
                    mode:'raw',
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    }
                } 
            })
            .then(response => {
                return response.json();      
            })
            
            .then((contents)=>{

                console.log(contents)

                 
                this.setState({
                    dataSource:contents,
                    isLoading:false
    
                });
                Toast.show({
                    text:'Success!!!!',
                    buttonText:'Okay',
                    style:{backgroundColor:'green'}
                    
                }) 
            })
            .catch((error)=>{
    
                this.errorInConnection();
            })
        }
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
                    <HeaderScreen navigation={this.props.navigation} title={this.state.ScreenTitle}/>
                    <Content>          
                    <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>Create a News</Text>

                        <Form>

                            <Item inlineLabel last>
                                <Label>Author</Label>
                                <Input onChangeText={(author)=>this.authorValidation(author)}/>
                            </Item>
                            <Text style={{color:'red'}}>{this.state.authorError}</Text>

                            <Item inlineLabel last>
                                <Label>Title</Label>
                                <Input onChangeText={(title)=>this.titleValidation(title)}/>
                            </Item>
                            <Text style={{color:'red'}}>{this.state.titleError}</Text>
                            
                            <Textarea rowSpan={5} bordered placeholder="Your message" onChangeText={(body)=>this.bodyValidation(body)}/>
                            <Text style={{color:'red'}}>{this.state.bodyError}</Text>
                        </Form>


                        <View style={{marginTop:40}}>
                            <Button rounded primary style={{width:'100%',backgroundColor:'#00CCFF'}} onPress={()=>this.submitHandler()}>
                                <Text style={{width: '100%',textAlign: 'center',color:'#fff',fontSize:20}}>Submit</Text>
                            </Button>
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
export default connect(mapStateToProp,mapActionstoProps)(CreateNews);