import React from 'react';

function ChatInfo () {

    const userId = Number(localStorage.getItem('userId'));
    return (
        <div className="chat-info">
            <div className="chat-name">
                <p>{userId === 3 ? "Admin Admin" : "Artem Huk"}</p>
            </div>
        </div>
    );
};

export default ChatInfo;