import React from 'react';

const IndivualMessage = ({name, message}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
            <div>
                <h1>{name}</h1>
                <p>{message}</p>
            </div>
        </div>


    )


}
export default IndivualMessage;