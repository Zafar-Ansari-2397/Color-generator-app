import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <h2
        style={{ textAlign: "center", marginTop: "3rem", paddingLeft: "1rem" }}
      >
        Color Generator
      </h2>
      <section className='container'>
        <form onSubmit={handleSubmit} style={{ alignItems: "center" }}>
          <input
            type='text'
            name='color'
            id='color'
            value={color}
            placeholder='#f15025'
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null} `}
          />
          <button type='submit' className='btn'>
            Generator
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
