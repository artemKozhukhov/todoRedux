import React from 'react';

export default ({lastUpdate})=>{
    let hours = lastUpdate.getHours();
    let minutes = lastUpdate.getMinutes();
    let seconds = lastUpdate.getSeconds();
    return(
        <div>{`Last update-->${hours}:${minutes}:${seconds}`}</div>
    )
}