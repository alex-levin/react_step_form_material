import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            name="firstName"
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            name="lastName"
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            name="email"
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;

{/* Replaces
<TextField
hintText="Enter Your First Name"
floatingLabelText="First Name"
onChange={handleChange('firstName')}
defaultValue={values.firstName}
/> 
See also handleChange in UserForm
*/}
