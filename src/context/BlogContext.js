import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'delete_blogpost':
			return state.filter((blogPost) => blogPost.id !== action.payload);
		case 'add_blogpost':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 9999),
					title: action.payload.title,
					content: action.payload.content,
				},
			];
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return (title, content, callback) => {
		dispatch({type: 'add_blogpost', payload: {title, content}});
		callback();
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({type: 'delete_blogpost', payload: id});
	};
};

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, [
	{
		title: 'New post test1',
		content: 'Some content',
		id: 1,
	},
]);
