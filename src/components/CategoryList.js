import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryCard from './Categorycard';
var FontAwesome = require('react-fontawesome');
class CategoryList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { categories } = this.props;
		return (
			<div className=" container category-list-container">
				<h1 className="col-lg-12 col-md-12 col-sm-12">Hello categories</h1>
				<input
					type="text"
					name="categorySearch"
					className="col-lg-9 col-md-12 col-sm-12 align-self-center search-category"
					placeholder="Lancer votre recherche"
				/>
				{categories.map((el, index) => (
					<CategoryCard key={index} item={el} />
				))}
				<div className="card-container col-lg-3 col-md-6 col-sm-12 add-card-icon">
				<button className="">
					<FontAwesome
						className="super-crazy-colors"
						name="plus-circle"
						size="3x"
						style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
					/>{' '}
				</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		categories: state.categoryReducer,
	};
};
export default connect(mapStateToProps)(CategoryList);
