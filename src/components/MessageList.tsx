import React, {useEffect, useState} from 'react';
import {Category} from "../models/models";
import api from "../api/api";


interface MessageDto{
    text: string,
    timestamp: Date,
    chatId: number,
    senderId: number,
    id: number
}



interface MessageListProps{
    chatId: number
}
function MessageList({chatId}: MessageListProps) {

    const userId = Number(localStorage.getItem('userId'));
    const [messages, setMessages] = useState<MessageDto[]>([]);

    // Assuming this user ID is used to determine if the message is from the user or another person

    useEffect(() => {
        const fetchMessagesById = async () => {
            try {
                const response = await api.get<MessageDto[]>(`/Chat/${chatId}/messages`);
                const fetchedMessages = response.data;

                // Compare lengths to see if new messages were fetched
                if (fetchedMessages.length !== messages.length) {
                    setMessages(fetchedMessages);
                }
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        // Fetch messages initially and set up an interval to fetch periodically
        fetchMessagesById();
        const intervalId = setInterval(fetchMessagesById, 500); // Fetch every 5 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [chatId, messages.length, userId]);

    function formatDate(timestamp: string): string {
        const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date: Date = new Date(timestamp);
        const day: string = days[date.getUTCDay()];
        const hour: number = date.getUTCHours(); // Keep hour in 24-hour format
        const minute: string = date.getUTCMinutes().toString().padStart(2, '0');

        return `${day}, ${hour}:${minute}`; // Output in 24-hour format
    }

    return (
        <div className="message-list">
            {messages.map(message => (
                <div key={message.id} className={`message-item ${message.senderId !== userId ? 'from-user' : ''}`}>
                    <p>{message.text}</p>
                    <span>{formatDate(message.timestamp.toString())}</span>
                </div>
            ))}
        </div>
    );
}

export default MessageList;
