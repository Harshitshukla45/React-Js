import React from "react";
import Emcontent from "./Emcontent";
import emojipedia from "../emojipedia";

function createEmoji(emo) {
  return (
    <Emcontent
      key={emo.id}
      emoji={emo.emoji}
      name={emo.name}
      meaning={emo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
