import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="home-container container-fluid">
				<nav className="navbar navbar-light bg-light">
					<Link to="/">
						<img src="/assets/img/logo.png" width={120} height={120} alt="panne logo" />
					</Link>
                    <a class="navbar-brand" href="#">Navbar</a>
 <div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div></div>

	</nav>

            <div className="card-group container">
                <div className="card col-lg-4 col-md-12 col-sm-12 home-card">
                    <h2>Espace Dépanneur</h2>
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-12 col-sm-12 home-card">
                    <h2>Quel est votre panne?</h2>
                    <p>Un dépanneur va vous contactez</p>
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
            </div>
        </div>
    </div>
		);
	}
}

export default Home;
