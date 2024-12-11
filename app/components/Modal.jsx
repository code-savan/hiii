import Image from "next/image";
import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, isSharing, handleContinue, userName }) => {
  const [messages, setMessages] = useState([]);


  // useEffect to update messages when userName changes
  useEffect(() => {
    if (userName.trim() === "") {
      setMessages([]); // Clear messages if userName is empty
      return; // Exit early if userName is empty
    }

    const customMessage = `🎁🎁🎁 Have you seen this??? ${userName} sends you a surprise message 🎉🎉🎉 Open this 👉 ${window.location.origin}?name=${encodeURIComponent(userName)} 🎄`;

    const newMessages = [
      {
        link: `https://api.whatsapp.com/send?text=${encodeURIComponent(customMessage)}`,
        src: "/whatsapp.png",
      },
      {
        link: `https://wa.me/?text=${encodeURIComponent(customMessage)}`,
        src: "/whatsapp_business.png",
      },
      {
        link: `https://www.snapchat.com/scan?attachmentUrl=${encodeURIComponent(customMessage)}`,
        src: "/snapchat.png",
      },
      {
        link: `https://www.instagram.com/`,
        src: "/instagram.png",
      },
      {
        link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(customMessage)}`,
        src: "/facebook.png",
      },
    ];

    setMessages(newMessages); // Update messages when userName changes
  }, [userName]); // Only run the effect when userName changes

   // Return null if the modal is not open, after the hooks are executed
   if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-3 md:p-6 w-[90%] max-w-md relative">
        <Image src="/stars.gif" alt="fireworks" unoptimized="true" className="w-[50px] absolute left-2 z-1 top-2" width={100} height={100} />
        <Image src="/stars.gif" alt="fireworks" unoptimized="true" className="w-[50px] absolute right-2 z-1 bottom-0" width={100} height={100} />

        {!isSharing ? (
          <div>
            <p className=" text-[16px] md:text-[20px] font-medium text-center text-gray-800">
              Your message has been copied!!! Share it with friends now!!!
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              <button
                className="md:w-[30%] py-3 px-3 text-gray-800 rounded-[20px] border"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="md:w-[70%] py-2 px-3 bg-blue-600 text-white rounded-[20px]"
                onClick={handleContinue}
              >
                Send this to Someone
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-lg font-semibold text-center text-gray-800 mb-4">
              Share to:
            </p>
            <div className="flex justify-center space-x-6 w-full ">
              {messages.map((message, index) => (
                <a
                  key={index} // Use index if message.src is not unique enough
                  href={message.link}
                >
                  <Image src={message.src} alt="icon" width={100} height={100} className="w-[60px]" />
                </a>
              ))}
            </div>
            <button
              className="mt-6 px-4 py-2 text-gray-800 rounded-[20px] border w-full"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
