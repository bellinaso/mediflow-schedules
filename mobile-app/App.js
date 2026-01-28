import Login from "./src/templates/login/login";
import Register from "./src/templates/register/register";
import Home from "./src/templates/home/home";
import Calendar from "./src/templates/calendar/calendar";
import Profile from "./src/templates/profile/profile";
import Main from "./src/templates/main/main";
import Services from "./src/templates/services/services";
import Schedule from './src/templates/schedule/schedule'
import { useSafeAreaInsets } from "react-native-safe-area-context";

function App() {    
    return (
        // <Services style={paddingTop = useSafeAreaInsets().top}/>
        <Schedule/>
    );
}

export default App;