import React, {useeffect, useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const [message, setmessage] = useState('Hello');
    return(
        <div className="app">
            {message}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
//hello world 