import React from 'react'

function Fragments() {

    // If component has to return multiple DOM elements (not enclosed in single parent) 
    // Fragments lets you to group elements without using an additional Div

    return (
        // <div>
        <React.Fragment>

            <h1>
                Fragments
            </h1>
            <p>This describes describes Fragments</p>
            
        </React.Fragment>
        // </div>
    )
}

export default Fragments

