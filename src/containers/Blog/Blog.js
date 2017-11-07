import React, { Component } from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';
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
							<li><a href="/"> Home </a></li>
							<li><a href="new-post">New Post</a></li>
						</ul>
					</nav>
				</header>
				<Route path="/" exact render={() => <div>It's Home Page</div>} />

			</div>
		);
	}
}

export default Blog;