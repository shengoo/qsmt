
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/less/bootstrap.less';
import '../less/style.less';


import logo from '../images/logo.png';

import {Index, About, Career, Partners, Portfolio, Solutions} from './components';

const app = (
	<BrowserRouter>
		<div>
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<LinkContainer to="/">
							<a>
								<span><img src={logo} /></span>
								青色麦田
							</a>
						</LinkContainer>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<LinkContainer to="/" exact={true}>
							<NavItem eventKey={1} href="#">首页</NavItem>
						</LinkContainer>
						<LinkContainer to="/about">
							<NavItem eventKey={2} href="#">关于我们</NavItem>
						</LinkContainer>
						<LinkContainer to="/portfolio">
							<NavItem eventKey={3} href="#">成功案例</NavItem>
						</LinkContainer>
						<LinkContainer to="/solutions">
							<NavItem eventKey={4} href="#">解决方案</NavItem>
						</LinkContainer>
						<LinkContainer to="/partners">
							<NavItem eventKey={5} href="#">伙伴计划</NavItem>
						</LinkContainer>
						<LinkContainer to="/career">
							<NavItem eventKey={6}>加入我们</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Route exact={true} path="/" component={Index} />
			<Route path="/about" component={About} />
			<Route path="/career" component={Career} />
			<Route path="/partners" component={Partners} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/solutions" component={Solutions} />
		</div>
	</BrowserRouter>
);


ReactDOM.render(
	app,
	document.getElementById('root')
);
