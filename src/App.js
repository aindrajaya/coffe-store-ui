import React from 'react'
import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.components.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import SignUpIn from './pages/signupin/signupin.component.jsx'
import Header from './components/header/header.component.jsx'
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth = null

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)      
      
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }
      this.setState({currentUser:userAuth})
    })
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignUpIn} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
