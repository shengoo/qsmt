import React from 'react';

import defaultImage from '../../images/no-image-box.png';
import './portfolio.css'

class PortfolioItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			url:defaultImage
		};
	}


	render() {
		return (
			<div className="portfolio-item col-md-4 col-sm-6 col-xs-12">
				<div className="title">

				</div>
				<div className="img">
					<img src={this.props.src || defaultImage}  alt={''}/>
				</div>
			</div>
		);
	}
}

export default PortfolioItem;
