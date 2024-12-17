import { useState } from 'react';

export default function Home() {

  // Declare states for user input & page validation
  const [email, setEmail] = useState('');
  const [isXwf, setIsXwf] = useState(0);

  // Function to check if user input contains "@xwf."
  function containsXwfSequence(str: string): boolean {
    return str.includes("@xwf.");
  }

  // A message to any nosy interlopers who inspect the source
  const cantMinifyThis = "Good job, you know how to inspect source code. The security of this app is a farce. Please give me a SWE job."

  // Function that updates page based on user input
  const checkEmail = (email: string) => {
    if (containsXwfSequence(email)) {
      setIsXwf(1);
    } else {
      setIsXwf(2);
      console.log(cantMinifyThis)
    }
  }

  return (
    // isXwf 0 - Initial state with form/input
    isXwf === 0 && (
      <>
        <div className="bg-black flex justify-center py-16">
          <h1 className="text-4xl font-bold tracking-widest text-white">
            <span className="text-blue-500">TGI</span>
            <span className="text-yellow-500">XW</span>
            <span className="text-blue-500">F</span>

          </h1>
        </div>

        <div className="flex justify-center"> {/* Added this wrapper div */}
          <form className="bg-black flex flex-col px-4">
            <label className="text-white mb-4">
              Full LDAP/XWF Email
            </label>

            <input
              className="max-w-96 text-black py-2 px-4 rounded-md border border-gray-500"
              type="text"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="button"
              onClick={() => checkEmail(email)}
              className="max-w-96 mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </>)
    // isXwf 1 - Succesfully validated
    ||
    isXwf === 1 && (
      <div className="bg-black h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold tracking-widest text-white">
          <span className="text-blue-500">TGI</span>
          <span className="text-yellow-500">XW</span>
          <span className="text-blue-500">F</span>
        </h1>
        <h2 className="text-2xl font-bold text-white mt-8">Congratulations!</h2>
        <h3 className="text-lg font-semibold text-white mt-4">You are eligible to attend TGIXWF.</h3>
        <p className="text-white mt-2">You will receive an email with further instructions.</p>
      </div>
    )
    // isXwf 2 - Failed validation
    ||
    isXwf === 2 && (
      <div className="bg-black h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold tracking-widest text-white">
          <span className="text-blue-500">TGI</span>
          <span className="text-yellow-500">XW</span>
          <span className="text-blue-500">F</span>
        </h1>
        <h2 className="text-2xl font-bold text-white mt-8">We're sorry.</h2>
        <h3 className="text-lg font-semibold text-white mt-4">You are not eligible to attend TGIXWF.</h3>
      </div>)
  );
}
