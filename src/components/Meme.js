import React from "react";
import memesData from "../data";

export default function Meme() {
  const [url, setUrl] = React.useState("");

  function getMemeImg() {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    setUrl(memesArray[randomNum].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImg}>
          Get a new meme image
        </button>
      </div>
      <img src={url} className="meme--image" />
    </main>
  );
}
