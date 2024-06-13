import React, { useState } from 'react';
import api from "../api/api";

interface ChatInputProps {
    chatId: number; // You need the chat ID to send the message
    userId: number; // User ID of the sender
}

const ChatInput: React.FC<ChatInputProps> = ({ chatId, userId }) => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSend = async () => {
        if (input.trim() === '') return; // Prevent sending empty messages

        try {
            const sendMessageDto = {
                SenderId: userId,
                Message: input
            };
            // POST request to send the message
            await api.post(`/Chat/${chatId}/send`, sendMessageDto);
            console.log("Message sent successfully");
        } catch (error) {
            console.error('Failed to send message:', error);
        }

        setInput(''); // Clear input field after sending
    };

    return (
        <div className="chat-input">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Напишіть повідомлення..."
            />
            <button onClick={handleSend}>Відправити</button>
        </div>
    );
}

export default ChatInput;
