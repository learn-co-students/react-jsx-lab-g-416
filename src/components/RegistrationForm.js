import React, { Component } from "react";

class RegistrationForm extends Component 
{
    render() 
    {
        return (
            <form>
                <input type="text" placeholder="Input Text" />
                <input type="password" placeholder="Input Password" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RegistrationForm;