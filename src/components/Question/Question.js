import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                <h5>How Does React Work?</h5>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h5>Difference Between Props And State</h5>
                <p>props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes. I think what is meant by "props should not be changed" is that they should not be changed by children components</p>
            </div>
            <div>
                <h5>How Many Ways To Use useEffect in React </h5>
                <li>Side Effect Runs After Every Render. ...</li>
                 <li>Side Effect Runs Only Once After Initial Render. ...</li>
                <li>Side Effect Runs After State Value Changes. ...
                </li>
                <li>
                Side Effect Runs After Props Value Change. ...
                </li>
                Side Effect Runs After Props and State Value Change.
                <li></li>            
</div>
        </div>
    );
};

export default Question;