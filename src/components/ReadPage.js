import React, { useEffect } from 'react';

const ReadPageContent = () => {
  useEffect(() => {
    const readAllContent = () => {
      // Get all text content from the entire webpage
      const entireWebpageContent = document.body.innerText;
        console.log(entireWebpageContent);
      if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(entireWebpageContent);
        window.speechSynthesis.speak(speech);
      } else {
        console.error('Speech synthesis not supported in this browser.');
      }
    };

    // Trigger reading all content when the component has mounted
    readAllContent();

    // Clean up any resources when the component unmounts
    return () => {
      // Stop speech synthesis when the component is unmounted
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default ReadPageContent;
