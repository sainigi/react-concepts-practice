import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import UserContextProvider from "../ContextAPI/UserContextProvider";

function MiniContextApi() {
    return(
        <UserContextProvider>
            <div className="flex flex-col justify-center items-center m-10">
                <h2 className="text-4xl font-bold">Learning Context API</h2>
                <Login />
                <Profile />
            </div>
        </UserContextProvider>
    )
}

export default MiniContextApi