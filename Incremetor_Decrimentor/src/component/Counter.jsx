import { increament,decrement,setZero } from "../feature/counter/CounterSlice";
import { useSelector,useDispatch } from "react-redux";

const Counter = ()=>{
    const counter = useSelector((state)=>state.value);
    const dispach = useDispatch();

    return(
        <div className="flex flex-col w-[30%] justify-center mx-auto ">
            <div className="flex items-center  justify-between mx-auto w-[100%] m-20">
                <button onClick={()=>{dispach(increament())}}
                    className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-extrabold py-2 px-4 border border-blue-700 rounded"
                >
                    +
                </button>

                <span>{counter}</span>

                <button onClick={()=>{dispach(decrement())}}
                    className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-extrabold  py-2 px-4 border border-blue-700 rounded"
                >
                    -
                </button>
            </div>  

            <button onClick={()=>{dispach(setZero())}}
                className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold  py-2 px-4 border border-blue-700 rounded "
            >
                Set Counter to Zero
            </button>
        </div>
    )
}

export default Counter;