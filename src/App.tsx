
const App = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div className="flex border-purple-700 rounded-md bg-slate-200 p-10">
      <button className="px-4 py-2 bg-green-600 text-xl font-bold text-white rounded-md">
        Increment
      </button>
      <h1 className="text-3xl mx-10">0</h1>
      <button className="px-4 py-2 bg-red-600 text-xl font-bold text-white rounded-md">
        Decrement
      </button>
    </div>
    </div>
  );
};

export default App;