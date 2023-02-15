import Header from "./Components/Header";
function App() {
  const name = 'Eddy Vittini';
  const name2 = 'shaitasia holley';
  return (
    // this is where all the html is going
    <div className="container">
      {/* i am going to add an import here  with <Header />*/}
      <Header/>
      {/* <h2>Hello {name}</h2> */}
      
    </div>
  );
}

export default App;
