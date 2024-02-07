import { useState } from "react";
import "./App.css";
import { FaHeart } from "react-icons/fa6";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 24;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container pb-10">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <div className="w-56 rounded-full overflow-hidden h-56 relative">
              <iframe src="https://giphy.com/embed/IvWYwE0k0RPp2tHqAl" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" className="giphy-embed" allowFullScreen>
              </iframe>
            </div>

            <div className="text-container gap-2  flex items-center">
              <p className="text-5xl  font-bold">Ok yay!!!  </p>
              <FaHeart color="red" className="animate-pulse"/>
            </div>
          </>
        ) : (
          <>
            <img
              className="h-[200px] "
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div className="flex items-center">
              <button
                className="hover:bg-pink-400 px-8 py-1 me-2 font-bold font-lobster rounded-lg bg-pink-200 border-4 border-pink-400"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="text-2xl border-4 px-8 py-[7px] m-0 hover:bg-green-300 rounded-lg font-lobster bg-green-100 border-green-300">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
