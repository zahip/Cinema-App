import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavBarBox, LogoContainer, LogoImg, AuthBox, UnorderList, Tab, TextLink} from './style';
import Logo from '../../images/tenants-img.png';

class Navbar extends Component {
    
    render() {
        return (
            <NavBarBox>
                <LogoContainer>
                    <Link to='/' className="logo">
                        <LogoImg src={Logo} alt="logo"/>
                    </Link>
                </LogoContainer>

            </NavBarBox>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(Navbar)