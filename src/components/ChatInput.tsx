import React, { useState } from 'react';

const ChatInput: React.FC = () => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSend = () => {
        // Обробка відправки повідомлення
        setInput('');
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
