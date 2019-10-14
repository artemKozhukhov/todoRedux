import React from 'react';
import Tusk from './Tusk';

export default ({tusks, toggleTusk})=>{
    console.log("arrived tusks in List", tusks);
    return (
        <ul>
            {
                tusks.length
                ?
                tusks.map((tusk)=>
                    <Tusk onclick={toggleTusk} key={tusk.id} {...tusk}/>
                )
                :
                null
            }
        </ul>
    )
}