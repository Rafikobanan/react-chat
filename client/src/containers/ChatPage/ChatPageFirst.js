import React from 'react';
import Input from '../../components/Input';

const ChatPageFirst = (props) => (
	<div className="chat-page-first">
		<div className="chat-page-first__text">Ваш никнейм:</div>
		<Input className="chat-page-first__input" {...props}/>
	</div>
);

export default ChatPageFirst;