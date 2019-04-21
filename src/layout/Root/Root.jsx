import React, { Component } from 'react'
import { css } from 'aphrodite';
import { root_layout_styles as rls } from './styles/styles';
import NavBar from '../../components/NavBar/NavBar';
import Terminal from '../../components/Terminal/Terminal'
// import UpBtn from '../../components/UpBtn/UpBtn'
import Bg from '../../components/Bg/Bg';
const _rls = [rls.root_std];
class Root extends Component {
	constructor(props){
		super(props);
		this.state = {
			showTerminal: true,
		}
		this.restrictShowup = this.restrictShowup.bind(this);
	}
	restrictShowup(){
		// alert('BOOOOOM!!!');
		this.setState({
			showTerminal: false,
		});
	}
	render(){
		const {children, location} = this.props;
		return (
		<div id={'my_root'} className={`${css(..._rls)}`} style={{direction:'ltr'}}>
			<NavBar location={location}/>
			{location.pathname === '/' && <Bg/>}
			{children}
			{((location.pathname === '/') && this.state.showTerminal) && <Terminal restrictShowup={this.restrictShowup} location={location}/>}
			{/* <UpBtn location={location}/> */}
		</div>
		)
	}
}

export default Root
