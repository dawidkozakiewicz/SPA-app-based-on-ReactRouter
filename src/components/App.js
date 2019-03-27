import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.css';
 
const Home = () => <h1>Strona startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>kontakt do nas</h1>


class App extends Component {
	render() {
		return (
			<Router>
			<div>
			<header>
				<nav>
					{/* <NavLink to="/">Start</NavLink>
					<NavLink to="/news">Aktualności</NavLink>
					<NavLink to="/contact">Kontakt</NavLink> */}
				<ul>	
					 <li><NavLink to="/" exact activeClassName="home_selected" activeStyle={{backgroundColor: 'snow', letterSpacing: '6px', color: 'black'}}>Start</NavLink></li>
					 <li><NavLink to="/news" exact activeClassName="news_selected" activeStyle={{backgroundColor: 'snow', letterSpacing: '6px', color: 'black'}}>Aktualności</NavLink></li>
					 <li><NavLink to="/contact" exact activeClassName="contact_selected" activeStyle={{backgroundColor: 'snow', letterSpacing: '6px', color: 'black'}}>Kontakt</NavLink></li>
				</ul>	 
				</nav>
				<section>
				<Route path="/" exact component={Home}/>
				<Route path="/news" exact component={News}/>
				<Route path="/contact" exact component={Contact}/>
				</section>
			</header>
			</div>
			</Router>
		)
	}
}
 export default App;



