import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './App.css';
 


class App extends Component {
	render() {
		return (
			<BrowserRouter>
			<div>
			<header>
				<nav>
					{/* <Link to="/">Start</Link>
					<Link to="/news">Aktualności</Link>
					<Link to="/contact">Kontakt</Link> */}

					 <li><Link to="/">Start</Link></li>
					 <li><Link to="/news">Aktualności</Link></li>
					 <li><Link to="/contact">Kontakt</Link></li>
				</nav>
				<section>
					Strona -witaj!
				</section>
			</header>
			</div>
			</BrowserRouter>
		)
	}
}
 export default App;



