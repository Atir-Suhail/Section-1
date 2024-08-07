import React from 'react'

const loginform = () => {
  return (
    <div className=' flex justify-center '>
      <div className="border-2 bg-white lg:w-1/4 md:w-1/2 sm:w-3/4 w-[90%] w-1/4 rounded-xl p-8 shadow-xl  ">
  <h2 className="uppercase text-center text-2xl font-bold text-blue-500 my-4">
    Brand Name
  </h2>
  <h3 className="text-center font-bold text-xl mb-8">Login Form</h3>
  <form>
    <label htmlFor="email">Email Address</label>
    <input
      className="block  bg-blue-300 border-2-b  rounded-md border-blue-500 w-full py-2 px-4 mt-3 mb-6"
      id="email"
      type="email"
    />
    <label htmlFor="Password">Password</label>
    <input
      className="block  bg-blue-300 border-2-b  rounded-md border-blue-500 w-full py-2 px-4 mt-3 mb-6"
      id="Password"
      type="Password"
    />
    <a className="link Forgot-link" href="#">
      Forgot Password
    </a>
    <br />
    <button className="bg-blue-800 text-white rounded-md items-center p-2 w-full  ">
      Submit
    </button>
    <br />
    <a className="block text-center  font-bold text-blue-800 " href="#">
      not Registered Yet? Signup
    </a>
  </form>
</div>

    </div>
  )
}

export default loginform;
