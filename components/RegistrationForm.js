const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
      <label>Name: </label><input type="text" name="password" /><br />
      <label>Password: </label><input type="password" name="password" /><br/>
      <button type="submit" value="Submit" />
      </form>
    );
  }
}
module.exports = RegistrationForm;
