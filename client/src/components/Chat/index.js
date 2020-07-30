import React from 'react';
import './Chat.scss';
import Input from '../Input';

const Chat = ({className = '', data = [[]], user = '', ...rest}) => (
	<div className={`chat ${className}`}>
		{data.map((item, index) => (
			<div key={'chat_' + index} className="chat__row">
				<div className="chat__author">{item[0] + ' >'}</div>
				<div className="chat__message">{item[1]}</div>
			</div>
		))}
		<div className="chat__row">
			<div className="chat__author">{user + ' >'}</div>
			<Input {...rest} className="chat__message chat__input"/>
		</div>
	</div>
);


export default Chat;