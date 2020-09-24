import React, {Component} from 'react'

class RegistrationfForm extends React.Component{
  render(){
    return(
      <form className='registration-form'>
       
          <input type='text' name='text'/>
          <input type="password" name='password'/>
        <button type='submit'>Submit</button>
      </form>
    )
  }

}

export default RegistrationfForm