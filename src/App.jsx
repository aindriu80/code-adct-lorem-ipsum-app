import { useState } from 'react';
import data from './data';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello from the terminal');
  };

  return (
    <section className='section-center'>
      <h3>Lorem Ipsum App</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          dignissimos ratione quod magni deleniti quidem, id in sunt a fugiat
          ducimus reprehenderit error quisquam vitae nam rem qui, modi quam!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          dignissimos ratione quod magni deleniti quidem, id in sunt a fugiat
          ducimus reprehenderit error quisquam vitae nam rem qui, modi quam!
        </p>
      </article>
    </section>
  );
}

export default App;
