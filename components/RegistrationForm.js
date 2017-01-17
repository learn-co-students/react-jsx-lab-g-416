const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form className="registration-form">
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit"></button>
      </form>
    )
  }
};

module.exports = RegistrationForm;
