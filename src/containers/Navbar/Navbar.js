import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleModal } from '../../store/actions/modal';
import { NavBarBox, LogoContainer, LogoImg, AddBox } from './style';
import Logo from '../../images/tenants-img.png';

class Navbar extends Component {
    
    render() {
        const { handleModal } = this.props;
        return (
            <NavBarBox>
                <LogoContainer>
                    <Link to='/' className="logo">
                        <LogoImg src={Logo} alt="logo"/>
                    </Link>
                </LogoContainer>
                <AddBox>
                    <div onClick={() => handleModal({isOpen:"open", type: "add"})}>Add New Movie</div>
                 </AddBox>
            </NavBarBox>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    }
}

export default connect(mapStateToProps, {handleModal})(Navbar)