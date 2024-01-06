import { useState } from 'react';

const Form = () => {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {};

  return (
    <section>
      <h4>Color Generator</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button type='submit' style={{background: color}}>Generate</button>
      </form>
    </section>
  );
};
export default Form;
