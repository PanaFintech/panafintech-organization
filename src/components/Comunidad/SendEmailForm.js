import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'react';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';

class SendEmailForm extends React.Component {

  constructor(props) {
    super(props);
    this.validatorTypes = {
      email: Joi.string().email().required().label('Email'),
      firstname: Joi.string().required().label('Nombre'),
      lastname: Joi.string().required().label('Apellido')
    };

    this.getValidatorData = this.getValidatorData.bind(this);
    this.renderHelpText = this.renderHelpText.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: null,
      firstname: null,
      lastname: null
    }
  }

  getValidatorData() {
    return this.state;
  }

  onChange(field) {

    return event => {
      let state = {};
      if(event.target.value == null){
        state[field] = "";
      }else {
        state[field] = event.target.value;
      }
      this.setState(state);
    };

  }

  render() {
    return (
      <form id="form-sendmail" onSubmit={this.onSubmit}>

        <div className="name-div">
          <div className={this.getClasses('firstname')}>
            <label htmlFor='firstname'>
              NOMBRE <span className="red-sup">*</span>
            </label>
            <input
              ref='firstname'
              type='text'
              className='form-control'
              placeholder=''
              onChange={this.onChange('firstname')}
              onBlur={this.props.handleValidation('firstname')}
            />
          </div>

          <div className={this.getClasses('lastname')}>
            <label htmlFor='lastname'>
              APELLIDO <span className="red-sup">*</span>
            </label>
            <input
              ref='lastname'
              type='text'
              className='form-control'
              placeholder=''
              onChange={this.onChange('lastname')}
              onBlur={this.props.handleValidation('lastname')}
            />
          </div>
        </div>

        <div className={this.getClasses('email')}>
          <label htmlFor='email'>
            EMAIL <span className="red-sup">*</span>
          </label>
          <input
            ref='email'
            type='email'
            className='form-control'
            placeholder=''
            onChange={this.onChange('email')}
            onBlur={this.props.handleValidation('email')}
          />
        </div>

        <div className='text-left form-group'>
          <button type='submit' className='btn-submit btn btn-large btn-primary'>SUBMIT</button>
        </div>
        <div className="form-group">
          {this.renderHelpText()}
        </div>

      </form>
    );
  }

  renderHelpText() {
    return (
      <label className={this.getValidClassName()}>
      Please correct the highlighted fields.
      </label>
    );
  }

  getClasses(field) {
    return classnames({
      'form-group': true,
      'has-error': !this.props.isValid(field)
    });
  }

  getValidClassName() {
    Object.keys(this.state).map((key) => {
      if( this.props.isValid[key] )
        return 'help-block display-none';
    });
    return 'help-block';
  }

  onSubmit(event) {
    event.preventDefault();

    const onValidate = (error) => {
      if (error) {

      } else {
        //no errors; submit form
        console.log("Submit");
      }
    };
    this.props.validate(onValidate);
  }
}

SendEmailForm.propTypes = {
  errors: PropTypes.object,
  validate: PropTypes.func,
  isValid: PropTypes.func,
  handleValidation: PropTypes.func,
  getValidationMessages: PropTypes.func,
  clearValidations: PropTypes.func,
};

module.exports = validation(strategy)(SendEmailForm);
