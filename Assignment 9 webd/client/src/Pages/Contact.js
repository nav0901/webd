import React from 'react'
import Header from '../Components/Header/Header'

const Contact = () => {
  return (
    <div className="Contact">
      <Header title="Contact Us" />
      <form>
        <input type="text" placeholder='Full Name' className='typeB' required/>
        <br />
        <input type="email" placeholder='Email Address' className='typeB' required/>
        <br />
        <textarea name="message" cols="30" rows="10" placeholder='Message'className='typeB' required/>
        <br />
        <button type='submit' value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact