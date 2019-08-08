import React, {useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar } from "./components/Navbar";
import { getUser } from './_actions/user.actions';
// import Footer from "./components/Footer";
import Landing from "./containers/Landing";
import { LaundryList } from "./containers/LaundryList";
import { LaundryProfile } from "./containers/LaundryProfile";
import { Orders } from "./containers/Orders";
import { Chekcout } from "./containers/Chekcout";
import { Cart } from "./containers/Cart";
import { Favourites } from "./containers/Favourites";
import { Notifications } from "./containers/Notifications";
import { GoCredit } from "./containers/GoCredit";
import { AccountSettings } from "./containers/AccountSettings";
import { AddressPage } from "./containers/AccountSettings/AddressPage";
import OrderSuccess from './containers/OrderSuccess';
import OrderFailed  from './containers/OrderFailed';
import ContactUs from './containers/ContactUs';
import FAQ from './containers/faq';
import WaitingApproval from './containers/WaitingApproval';
import "./_styles/main.scss";
import { PrivateRoute } from './_routes/PrivateRoute';



class App extends React.Component {

  componentWillMount() {
    const token = localStorage.getItem("authToken")
    if(token){
      const userId = localStorage.getItem("userId");
      console.log(token);
      this.props.getUser(token, userId);
    }
  }

  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/orders/" component={Orders} isAuth={this.props.isAuth} />
            <PrivateRoute exact path="/chekcout/" component={Chekcout} isAuth={this.props.isAuth} />
            <PrivateRoute exact path="/cart/" component={Cart} isAuth={this.props.isAuth} />
            <PrivateRoute exact path="/favourites/" component={Favourites} isAuth={this.props.isAuth} />
            <PrivateRoute exact path="/notifications/" component={Notifications} isAuth={this.props.isAuth} />
            <PrivateRoute exact path="/gocredit/" component={GoCredit} isAuth={this.props.isAuth} />
            <PrivateRoute exact path="/settings/" component={AccountSettings} isAuth={this.props.isAuth} />
            <PrivateRoute exact path="/list/" component={LaundryList} isAuth={this.props.isAuth} />
            <PrivateRoute path="/list/:id" component={LaundryProfile} isAuth={this.props.isAuth} />
            <PrivateRoute exact path="/address/" component={AddressPage} isAuth={this.props.isAuth} />
            <PrivateRoute path="/address/:id" component={AddressPage} isAuth={this.props.isAuth} />
            
            <Route path="/FAQ" component={FAQ} />
            <Route path="/contact-us" component={ContactUs} />
            <PrivateRoute path="/waiting-approval" component={WaitingApproval} isAuth={this.props.isAuth} />
            <PrivateRoute path="/order-success" component={OrderSuccess} isAuth={this.props.isAuth} />
            <PrivateRoute path="/order-failed" component={OrderFailed} isAuth={this.props.isAuth} />
          </Switch>
          
          
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
};

const mapDispatchToProps = {
  getUser: getUser
};

const mapStateToProps = state => ({
  isAuth: state.user.isAuth
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
