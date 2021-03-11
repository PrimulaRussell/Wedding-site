import React from 'react';
import { useState } from 'react';

//Styled Components//

//RegistryList Component//
const RegistryList = () => {
    const [list] = useState([])
    const [text, setText] = useState("")

    const addListItem = event => {
        event.preventDefault();
        list.push(text);
        setText("");
    }

    const listItems = list.map((item) =>
  <li>{item}</li>
);

    return (
        <div>
            <ul>
         {listItems}
            </ul>

        <form onSubmit={addListItem}>
        <input 
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <input type="submit" value="Submit"/>
    </form>

        </div>
    )
}

export default RegistryList;