import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
  <div className='flex p-5 mx-auto mb-5 flex-col border-red-600 bg-zinc-950 text-white' >
    <h1>Registration</h1>
    <form>
    <label className="flex border-red-600">FullName
      <input 
        type="text" 
        id='fullName'
        name='fullName' required
        placeholder="Enter your name"
        className=" "
      />
      </label>
    <label className="">Email
      <input 
        type="text" 
        id='email'
        name='email' required
        placeholder="Enter your email"
        className=" "  
      />
      </label>
    <label className="">Password
      <input 
        type="password" 
        id='password'
        name='password' required
        placeholder="Enter your password"
        className=" "  
      />
      </label>
    <label className="">ConfirmPassword
      <input 
        type="password" 
        id='Confirmpassword'
        name='Confirmpassword' required
        placeholder="Confirmpassword"
        className=" "  
      />
      </label>
    <label className="">Phone Number
      <input 
        type="number" 
        id='number'
        name='number' required
        placeholder="Enter your phone number" 
        className=" "  
      />
      </label>
      <label className="">
          Address
          <input 
            type="text" 
            id='address'
            name='address' 
            required
            placeholder="Enter your address"
            
          />
        </label>
      <div className="gender-box">
      <label className="">Gender</label>
      <div className="">
        <div className="">
          <input 
            type="radio" 
            name="gender" 
            id="male"
            className="cursor-pointer"
          />
          <label htmlFor="male" className="">Male</label>
        </div>
        <div className="">
          <input 
            type="radio" 
            name="gender" 
            id="female"
            className="cursor-pointer"
          />
          <label htmlFor="female" className="">Female</label>
        </div>
      </div>
    </div>
      <div className="address">
      <label className="">Country</label>
      <select className="">
        <option value="">Select your country</option>
        <option value="nigeria">Nigeria</option>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
      </select>
    </div>

      <input 
      type="submit" 
      value="Submit" 
      className="] transition-all"
    />

    </form>
    <p>Already have an account?<Link to={"/login"} >Login</Link></p>
  </div>
  )
}

export default Registration