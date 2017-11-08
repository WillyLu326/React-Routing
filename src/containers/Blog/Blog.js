import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li><NavLink to="/"> Home </NavLink></li>
							<li><NavLink to={
								{
									pathname: '/new-post',
									hase: '#coming',
									search: '?query=value'
								}
							}>New Post</NavLink></li>
						</ul>
					</nav>
				</header>
				<Route path="/" exact={true} component={Posts} />
				<Route path="/new-post" exact component={NewPost} />
			</div>
		);
	}
}

export default Blog;