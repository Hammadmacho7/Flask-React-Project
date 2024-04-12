import React from 'react'
import './styles/main.css'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CreateRecipe from './components/CreateRecipe';
// const nameMap = new Map([
//     [21, ['Monterey','12']],
//     [20, ['Big Sur', '11']],
//     [19, ['Catalina', '10.15']],
//     [18, ['Mojave', '10.14']],
//     [17, ['High Sierra', '10.13']],
//     [16, ['Sierra', '10.12']],
//     [15, ['El Capitan', '10.11']],
//     [14, ['Yosemite', '10.10']],
//     [13, ['Mavericks', '10.9']],
//     [12, ['Mountain Lion', '10.8']],
//     [11, ['Lion', '10.7']],
//     [10, ['Snow Leopard', '10.6']],
//     [9, ['Leopard', '10.5']],
//     [8, ['Tiger', '10.4']],
//     [7, ['Panther', '10.3']],
//     [6, ['Jaguar', '10.2']],
//     [5, ['Puma', '10.1']]
// ]);


const App = () => {

    // useEffect(
    //     () => {
    //         fetch('/recipe/hello')
    //         .then(response => response.json())
    //         .then(data => {console.log(data)
    //             setMessage(data.message)
    //         })
    //         .catch(err => console.log(err))

            
    //     },[]
    // )
    // const [message, setMessage] = useState('...');
    return(
        <>
        <Router>
        <div className='back'>
            <Navbar/>
            <Switch>
                <Route path = "/create_recipe">
                    <CreateRecipe/>
                </Route>
                <Route path = "/login">
                    <Login/>
                </Route>
                <Route path = "/signup">
                    <SignUp/>
                </Route>
                <Route path = "/">
                    <Home/>
                </Route>
            </Switch>
            {/* <h1>{message}</h1> */}

        </div>
        </Router>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
//hello world  