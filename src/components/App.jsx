import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(item)
{
  return(
    <Entry  
    key = {item.id}
    emoji = {item.emoji}
    name = {item.name}
    description = {item.meaning}
/>
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      {
        emojipedia.map(createEmoji)
      }

        {/* {emojipedia.map(item => {
          return(
            <Entry 
            key = {item.id}
            emoji = {item.emoji}
            name = {item.name}
            description = {item.meaning}></Entry>
          )
        })} */}
      </dl>
    </div>
  );
}

export default App;
