import React from 'react';

interface Message {
    id: number;
    text: string;
    time: string;
    fromUser: boolean;
}

const messages: Message[] = [
    { id: 1, text: 'Привіт Артем', time: '17:38', fromUser: true },
    { id: 2, text: 'Привіт Василь', time: 'Прочитано вчора о 18:07', fromUser: false },
    { id: 3, text: 'Давно хотів сказати що, да, я тобі дарю 2 стіка (один скурений, другий ні)', time: '17:45', fromUser: false },
];

const MessageList: React.FC = () => {
    return (
        <div className="message-list">
            {messages.map(message => (
                <div key={message.id} className={`message-item ${message.fromUser ? 'from-user' : ''}`}>
                    <p>{message.text}</p>
                    <span>{message.time}</span>
                </div>
            ))}
        </div>
    );
}

export default MessageList;
