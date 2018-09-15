import React, { Component } from 'react';
import data from './topranks';
class Top extends React.Component{


    render(){
        return(
            <div>

                {data.map((v,i) => {
                    console.log("data ",v);
                    return(
                        <li>{v}</li>
                    )
                    
                })}
            </div>
        )
    }
}

export default Top;