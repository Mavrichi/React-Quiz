import React,{useState, createContext} from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [Url, setUrl] = useState(
        {
            url:''
        }

    );
    return (
        <GameContext.Provider value={[Url, setUrl]}>
            {props.children} 
        </GameContext.Provider>
    );
}

