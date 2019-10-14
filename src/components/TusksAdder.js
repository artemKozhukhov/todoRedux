import React, {useState} from 'react';

export default ({addTusk})=>{
    let [text, setText]= useState('введите значение');
    let [isCompleted, setCompleted]= useState(false);
    return (
        <div>
            <span>text</span>
            <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <span>isCompleted</span>
            <input type='checkbox' value={isCompleted} onChange={(e)=>{setCompleted(e.target.checked)}}/>
            <button onClick={(e)=>{addTusk(text, isCompleted)}}>Add tusk</button>
        </div>
    )
}