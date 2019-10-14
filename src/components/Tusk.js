import React from 'react';

export default ({isCompleted,text, id, onclick})=>{
    return (
        <li onClick={(e)=>{onclick(id)}} style={{
            textDecoration: isCompleted ? 'line-through' : 'none',
            cursor: 'pointer'
        }}>
            {`${text}(id:${id})`}
        </li>
    )
}