import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleModal } from '../../store/actions/modal';
import { NavBarBox, LogoContainer, LogoImg, AddBox, AddIcon } from './style';
import Logo from '../../images/cinema.jpg';
import addIcon from '../../images/add.svg';

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
                    <AddIcon src={addIcon} alt="add" onClick={() => handleModal({isOpen:"open", type: "add"})}></AddIcon>
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