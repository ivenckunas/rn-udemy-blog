import React, {useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const {addBlogPost} = useContext(Context);

	return (
		<View style={styles.view}>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Button
				title='Add blog'
				onPress={() => {
					addBlogPost(title, content, () => {
						navigation.navigate('Index');
					});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		margin: 10,
	},
	input: {
		fontSize: 18,
		padding: 5,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
	},
});

export default CreateScreen;
