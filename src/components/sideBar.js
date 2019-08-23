import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
        <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="main-menu">
                    <li className="text-center user-image-back">
                        <img src="assets/img/find_user.png" className="img-responsive" alt="user logo"/>
                     
                    </li>


                    <li>
                        <Link to='/Dashboard'><i className="fa fa-desktop "></i>tableau de bord</Link>
                    </li>
                    <li>
                        <Link to='/profile'><i className="fa fa-edit "></i>Mon Compte<span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level">
                            <li>
                                <Link to='/profile'>Mes Coordonnées</Link>
                            </li>
                            <li>
                                <Link to='/notifications'>Notifications</Link>
                            </li>
                            <li>
                                <Link to='/messages'>Messages</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to='/depanneur'><i className="fa fa-table "></i>Liste depanneur</Link>
                    </li>
                    <li>
                        <Link to='/utilisateur'><i className="fa fa-edit "></i>Utilisateur </Link>
                    </li>
                    <li>
                        <Link to='/gerer'><i className="fa fa-sitemap "></i>Gérer Tout<span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level">
                            <li>
                                <Link to='/categories'>Catégories</Link>
                            </li>
                           
                            <li>
                                <Link to='/depanneur'>Dépanneur</Link>
                            </li>
                            <li>
                                <Link to='/utilisateur'>utilisateur</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/statistiques'><i className="fa fa-qrcode "></i>Statistiques</Link>
                    </li>
                    <li>
                        <Link to='/blank'><i className="fa fa-table "></i>Blank Page</Link>
                    </li>
                </ul>

            </div>

        </nav>

        </div> );
    }
}
 
export default SideBar;