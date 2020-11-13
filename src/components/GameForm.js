import React,{useState , useContext} from 'react';
import GameLogic from './GameLogic';
import {GameContext} from './GameContext';

const GameForm = () => {
    const [numberOfQuestions, setNumberOfQuestions] = useState('10');
    const [category, setCategory] = useState('18');
    const [dificulty, setDificulty] = useState('easy');
    const [isCompleted, setCompleted] = useState(false);
    const [url, setUrl] = useContext(GameContext);

    const updateNumberOfQuestions = (e) => {
        setNumberOfQuestions(e.target.value);
    }
    const updateCategory = (e) => {
        setCategory(e.target.value);
        //console.log('category updated')
    }
    const updateDificulty = (e) => {
        setDificulty(e.target.value);
        //console.log('dificulty updated')
    }
    const updateGameReady = (e) => {
        e.preventDefault();
        setCompleted(true);
        setUrl({url:`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${dificulty}&type=multiple`})
    }
    

    return(
        <div className="flex flex-col-1 flex-wrap justify-center">
            <div className="flex bg-white text-purple-800 rounded-lg shadow-md text-2xl min-w-full content-center justify-center m-6 p-10">
                <h1 >Welcome to my trivia quiz</h1>
            </div>
            <div className="flex bg-white text-purple-800 p-10  m-6 rounded-lg shadow-md text-xl min-w-full justify-center">
                <h2>Pick a category and a difficulty and let's find out how smart you are </h2>
            </div>
            <div className="flex bg-white text-purple-800 p-10  m-6 rounded-lg shadow-md text-2xl min-w-full justify-center">
                <form>
                    <label for="NumberOfQuestions">Number of Questions: </label>
                    <input type="text" id="NumberOfQuestions" value={numberOfQuestions} name="NumberOfQuestions" onChange={updateNumberOfQuestions} />

                    <label for="category">Choose a category: </label>
                        <select id="category" name="category" value={category} onChange={updateCategory}>
                            <option value="18">Computers and science</option>
                            <option value="17">Science and nature</option>
                            <option value="27">Animals</option>
                            <option value="28">Cars</option>
                        </select>
                        <label for="dificulty">Choose a dificulty: </label>
                        <select id="dificulty" name="dificulty" value={dificulty} onChange={updateDificulty}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                   
                    <button onClick={updateGameReady}>Save options</button>
                    
                </form>
            </div>
        </div>
    );
}
// export const category={category};
// export const NumberOfQuestions={NumberOfQuestions};
export default GameForm;
