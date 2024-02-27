
import { Provider } from "react-redux";
import { store } from "../../app/store";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function ReduxLayout() {
  return (
    <Provider store={store} >
        <div className="flex flex-col justify-center items-center bg-gray-600 py-32">
            <h1 className="text-4xl font-bold">Learn about redux toolkit</h1>
            <AddTodo />
            <Todos />
        </div>  
    </Provider>
  )
}

export default ReduxLayout