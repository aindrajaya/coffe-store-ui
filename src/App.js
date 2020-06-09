import React from 'react'
import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.components.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import SignUpIn from './pages/signupin/signupin.component.jsx'
import Header from './components/header/header.component.jsx'
import {auth} from './firebase/firebase.utils.jsx'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      
    })
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <Header />
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
