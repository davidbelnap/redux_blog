import React from 'react';
import { connect } from 'react-redux';
import nextId from '../reducers/nextId';


const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const BlogForm = ({ dispatch, nextId }) => {
	let input;

	return (
		<div>
			<h3>Add a Blog</h3>
			<form block
				onSubmit={ e => {
					e.preventDefault();
					dispatch({
						type: 'ADD_BLOG',
						blog: {name: input.value, id: nextId}
					})
					dispatch({ type: 'INC_ID' })
					input.value = null;
				}}
			>
					<input ref={ n => input = n } />
				<div>
  			  <button bsStyle="info" bsSize="default">Submit</button>
				</div>			
			</form>
		</div>
	)
}

ReactDOM.render(BlogForm, mountNode);

const mapStateToProps = (state) => {
	return { nextId: state.nextId }
}


export default connect()(BlogForm);