import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((datas) => setData(datas))
      .catch((err) => console.log(err));
  }, []);

  const advice = data && data.slip.advice;
  const id = data && data.slip.id;

  const refreshHandler = () => {
    window.location.reload(false);
  };
  return (
    <div className='App'>
      <div className='advice-container'>
        <small>ADVICE #{id}</small>
        <p>{advice ? `"${advice}"` : "Loading..."}</p>
        <div className='line'>
          <div className='line1'></div>
          <div className='row1'></div>
          <div className='row2'></div>
          <div className='line2'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'>
            <div className='square' onClick={refreshHandler}>
              <div className='top'>
                <div></div>
                <div></div>
              </div>
              <div className='middle'>
                <div></div>
              </div>
              <div className='bot'>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
