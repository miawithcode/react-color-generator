import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#f15025');
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className='form-container'>
      <h2>Color Generator</h2>
      <form onSubmit={handleSubmit} className='color-form'>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button type="submit" style={{ background: color }}>
          Generate
        </button>
      </form>
    </section>
  );
};
export default Form;
