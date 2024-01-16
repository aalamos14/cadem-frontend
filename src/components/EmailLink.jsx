import React from "react";

const EmailLink = () => {

    return (
        <div>
            <a href="" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center">
                <img src="https://quotall.com/wp-content/uploads/2020/04/Support-Email-Icon-White.png" alt="Email" className="w-7 h-7 mr-2" />
                <button onClick={() => window.location = 'mailto:aalamos14@gmail.com'}>aalamos14@gmail.com</button>
                </div>
                
            </a>
        </div>
    );
}

export default EmailLink;