import Menu from './ui/Menu'
import ShowErrors from './containers/ShowErrors'
import GoalProgress from './containers/GoalProgress'
import '../stylesheets/index.scss'

//first action of app-- load this App from routes.js' '/' path
export const App = ({children}) =>
    <div className="app">
      <div className="wrapper">
        { /*<ShowErrors /> */ }
        {children}
        {/*<GoalProgress />*/}
        <Menu />
      </div>
    </div>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Whoops, route not found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>
