const React = require('react');

class RegistrationForm extends React.Component{
	render(){
		return(
			<form>
				<label>User Name</label>
				<input type = "text"></input>
				<label>Password></label>
				<input type = "password"></input>
				<button type = "submit">Submit</button>
			</form>
		);
	}
}

module.exports = RegistrationForm;
