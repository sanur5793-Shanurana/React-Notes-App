
import React, { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [note, setNote] = useState([]);

  function btntitle(value) {
    setTitle(value);
  }

  function btnDescription(value) {
    setDesc(value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const newNote = {
      title: title,
      desc: desc
    };

    setNote(prev => [...prev, newNote]);

    setTitle('');
    setDesc('');
  }

  function deleteNote(idx) {
    setNote(prev => prev.filter((elem, index) => index !== idx));
  }

  return (
    <div className='w-full min-h-screen flex'>

      {/* Left Side - Form */}

      <div className='bg-blue-200 w-1/2 min-h-screen flex justify-center items-center'>

        <form
          onSubmit={submitHandler}
          className='flex bg-black min-h-[350px] flex-col w-1/2 p-6 gap-5 rounded-xl'
        >

          <input
            type="text"
            placeholder='Enter topic name...'
            value={title}
            onChange={(e) => {
              btntitle(e.target.value);
            }}
            className='h-20 w-full border border-gray-400 rounded-2xl p-4 text-white bg-gray-800'
          />

          <textarea
            placeholder='Enter topic desc...'
            value={desc}
            onChange={(e) => {
              btnDescription(e.target.value);
            }}
            className='h-40 w-full border border-gray-400 rounded-2xl p-4 text-white bg-gray-800'
          />

          <button
            type="submit"
            className='bg-blue-500 text-white p-3 rounded-xl'
          >
            Submit
          </button>

        </form>

      </div>


      {/* Right Side - Notes */}

      <div className='bg-black w-1/2 min-h-screen flex justify-around items-start p-8 flex-wrap gap-5'>

        {
          note.map(function (elem, idx) {
            return (

              <div
                key={idx}
                style={{
                  backgroundImage: "url('https://template.canva.com/EAFy0Dt_K-k/1/0/1131w-gOyPWxb9UyI.jpg')"
                }}
                className="w-[150px] min-h-[200px] h-auto bg-cover bg-center bg-no-repeat rounded-2xl p-5 break-words whitespace-normal flex flex-col gap-3"
              >

                <h1 className=' mt-6 font-bold text-2xl break-words'>
                  {elem.title}
                </h1>

                <p className='text-sm whitespace-normal break-words'>
                  {elem.desc}
                </p>

                <button
                  type="button"
                  onClick={() => deleteNote(idx)}
                  className='bg-red-500 text-white rounded px-3 py-2 mt-auto'
                >
                  Delete
                </button>

              </div>

            );
          })
        }

      </div>

    </div>
  );
};

export default App;
