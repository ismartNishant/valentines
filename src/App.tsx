import { useState } from "react";
import "./App.css";
import { FaHeart } from "react-icons/fa6";
import ConfettiExplosion from 'react-confetti-explosion';
import { GiRose } from "react-icons/gi";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 3 + 15;
  const [isExploding, setIsExploding] = useState(false);


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
              <img src="/giphy.webp" />
            </div>

            <div className="text-container gap-2  flex items-center">
              <p className="text-lg sm:text-5xl font-bold">Aww Ok yay Happpy Rose Day!!!  </p>
              <FaHeart size={20} color="red" className="animate-bounce" />
            </div>
            {isExploding && <ConfettiExplosion force={0.8}  duration={4000} height={1000} colors={["white","#08a3e6","#B4F8C8","#FE7C6","red","pink","#e60751","#FFAEBC"]}  width={1600} particleCount={450}/>}
          </>
        ) : (
          <>
            <img
              className="w-[260px] h-[250px] rounded-full overflow-hidden"

              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container text-2xl flex items-center ">Will you accept my rose <GiRose color="#e60751" className="mx-1" />   ?</h1>
          
            
            <div className="flex items-center">
              <button
                className="hover:bg-pink-400  px-4 py-1 me-2 font-bold font-lobster rounded-lg bg-pink-200 border-4 border-pink-400"
                style={{ fontSize: yesButtonSize }}
                onClick={() => {
                  setYesPressed(true);
                    setIsExploding(true)
                }
                }
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="text-lg border-4 px-2 py-[2px] m-0 hover:bg-green-300 rounded-lg font-lobster bg-green-100 border-green-300">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
