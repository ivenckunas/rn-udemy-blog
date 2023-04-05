import {View, Text, TextInput} from 'react-native';
import React, {useState, useContext} from 'react';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation}) => {
	const {state} = useContext(Context);
	const blogPost = state.find((post) => post.id === navigation.getParam('id'));

	const [title, setTitle] = useState(blogPost.title);
	const [content, setContent] = useState(blogPost.content);

	return (
		<View>
			<Text>Edit Title:</Text>
			<TextInput
				value={title}
				onChangeText={(newTitle) => setTitle(newTitle)}
			/>
		</View>
	);
};

export default EditScreen;
