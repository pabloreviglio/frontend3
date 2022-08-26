import React from 'react';

const words = ["HOLA", "HOLA", "HOLA", "MUNDO"];
class App extends React.Component {
  render() {
    return(
      <div>
        {words.map((word, i) => (
          <h2 style={{ color: "blue", textAlign: "center" }} key={i}>
            {word}
          </h2>
        ))}
      </div>
    )
  }
}

export default App;