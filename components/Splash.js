import React,{Component} from 'react';
import { StyleSheet,Image} from 'react-native';
import {  Container,Body} from 'native-base';
// import Login from './Login';

class Splash extends Component{
    
    constructor(){
        super()

        this.state = {
            
            timePassed:false
        }
  
       
    }

    componentDidMount() {
       
        this.setState({ loading: false })

        setTimeout( () => {
            this.setTimePassed();
        },2000);
    }


    setTimePassed() {
        this.setState({timePassed: true});
    }




    tryNews = () =>{
        return this.props.navigation.navigate('News');
    }
    
  
    render(){
        
        if (!this.state.timePassed) {

            return (
                <Container style={{backgroundColor:'#fff'}}>
                    <Body>
                        <Image source={require('../assets/logo.png')}
                            style={{width:300,height:86,marginTop:300}}
                        />
                    </Body>
                
                </Container>
            );
        }else{

            return(
                this.tryNews()
            )
                
            
                
            
            

        }        
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Splash;