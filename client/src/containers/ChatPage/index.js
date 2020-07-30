import React from 'react';
import './ChatPage.scss';
import Chat from '../../components/Chat';
import ChatPageFirst from './ChatPageFirst';
import { socket } from '../../socket';

const withChatPage = (WrappedComponent) => () => (
	<div className="chat-page">
		<WrappedComponent />
	</div>
)

class ChatPage extends React.Component {
	state = {
		user: '',
		isFirst: true,
		value: '',
		messages: []
	}

	componentDidMount() {
		socket.on('chat message', (msg) => {
      this.setState((state) => ({
				messages: [
					...state.messages,
					msg
				]
			}))
    });
	}

	isEnter(e) {
		if (e.key.toLowerCase() === 'enter') return true;
		return false;
	}

	changeUserHandler(e) {
		this.setState({user: e.target.value});
	}

	keyDownUserHandler(e) {
		if (!this.isEnter(e) || !this.state.user) return;

		this.setState({
			isFirst: false,
		});
	}

	changeHandler(e) {
		this.setState({value: e.target.value});
	}

	keyDownHandler(e) {
		if (!this.isEnter(e)) return;

		if (!this.state.value) return;

		socket.emit('chat message', [this.state.user, this.state.value]);

		this.setState({
			value: ''
		});
	}

	render() {
		if (this.state.isFirst) return (
			<ChatPageFirst
				onChange={this.changeUserHandler.bind(this)}
				onKeyDown={this.keyDownUserHandler.bind(this)}
			/>
		);

		return (
			<Chat
				data={this.state.messages}
				user={this.state.user}
				value={this.state.value}
				onChange={this.changeHandler.bind(this)}
				onKeyDown={this.keyDownHandler.bind(this)}
			/>
		);
	}
}

export default withChatPage(ChatPage);