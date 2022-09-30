import { Routes, Route} from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Edit } from "../pages/Edit";

export function AppRoutes() {

    const { user } = useAuth();

   

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            { user.is_admin === 0 ?(
            <>
            <Route path="/new" element={<Home/>}/>
            </>) : 
            <>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/new" element={<New/>}/>
            </>}
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    );
}