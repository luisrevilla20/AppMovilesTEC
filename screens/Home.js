/* eslint-disable */
import React, {Component} from 'react';
import {Share, ActivityIndicator} from 'react-native';
import { AsyncStorage } from "react-native";
import { ///JJJJJ
  Container,
  Header,
  Content,
  View,
  Footer,
  FooterTab,
  Badge,
  Item,
  Input,
  Icon,
  Text,
  ScrollView,
  Button,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props);

    global.getData = [];
    global.counter = 0;
    
    this.state = {
      loading: false,
      modalVisible: false,
      getData: [],
      username:"",
      password:"",
    };
  }

  static navigationOptions = ({navigation}) => {    
    return {
      swipeEnabled: false,
      gestureResponseDistance: {
        horizontal: -1,
        vertical: -1,
      },
      header: (
        <Header searchBar rounded>        
          <Button transparent>
            <Icon name="menu" />
          </Button>
        
          <Item>
            <Input placeholder="Buscar..." />
            <Icon name="people" />
          </Item>
          
          <Button transparent>
            <Icon name="funnel"></Icon>
          </Button>
          

        </Header>
      ),

      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#626262',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  _storeData = async () => {
    try {
      //guardar el primer elemento.
      await AsyncStorage.setItem('username', '');
      await AsyncStorage.setItem('password', '');
      //this.props.navigation.push('Info');
    } catch (error) {
      // Error saving data
    }
  };
  
  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username');
    const password = navigation.getParam('password');

    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="Grey" />
        </View>
      );
    }
    return (
      <Container>
        <Header>
          <Text>Welcome: {username}</Text>
          
        </Header>

        <Body>
        <Text>Password: {password}</Text>
        </Body>

        <Content />
      </Container>
    );
  }
}
