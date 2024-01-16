import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border-purple-700 rounded-md bg-slate-200 p-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-600 text-xl font-bold text-white rounded-md"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-4 py-2 bg-green-600 text-xl font-bold text-white rounded-md"
        >
          Increment with 5
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-600 text-xl font-bold text-white rounded-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
