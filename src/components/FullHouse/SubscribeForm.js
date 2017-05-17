import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'react';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';

class SubscribeForm extends React.Component {

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

  getValidateInput(type) {

    if(type == 'email') {
      if( this.state.email == null ) {
        return "  ";
      }else {
        if( this.state.email.length == 0) {
          return "Este campo es obligatorio.";
        }else {
          let atpos = this.state.email.indexOf("@");
          let dotpos = this.state.email.lastIndexOf(".");
          if (atpos<1 || dotpos<atpos+2 || dotpos+2>=this.state.email.length) {
            return "Por favor, escribe una dirección de correo válida";
          }else{
            return "  ";
          }
        }
      }
    }else if(type == 'firstname') {
      if( this.state.firstname == null ) {
        return "  ";
      }else {
        if( this.state.firstname.length == 0) {
          return "Este campo es obligatorio.";
        }else {
          return "  ";
        }
      }

    }
    else if(type == 'lastname') {
      if( this.state.lastname == null ) {
        return "  ";
      }else {
        if( this.state.lastname.length == 0) {
          return "Este campo es obligatorio.";
        }else {
          return "  ";
        }
      }

    }

  }

  onChange(field) {

    return event => {
      let state = {};
      state[field] = event.target.value;
      this.setState(state);
    };

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <div className={this.getClasses('email')}>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            ref='email'
            type='email'
            className='form-control'
            placeholder=''
            onChange={this.onChange('email')}
            onBlur={this.props.handleValidation('email')}
          />
          {this.renderHelpText(this.getValidateInput('email'))}
        </div>

        <div className={this.getClasses('firstname')}>
          <label htmlFor='firstname'>Nombre *</label>
          <input
            ref='firstname'
            type='firstname'
            className='form-control'
            placeholder=''
            onChange={this.onChange('firstname')}
            onBlur={this.props.handleValidation('firstname')}
          />
          {this.renderHelpText(this.getValidateInput('firstname'))}
        </div>

        <div className={this.getClasses('lastname')}>
          <label htmlFor='lastname'>Apellido *</label>
          <input
            ref='lastname'
            type='lastname'
            className='form-control'
            placeholder=''
            onChange={this.onChange('lastname')}
            onBlur={this.props.handleValidation('lastname')}
          />
          {this.renderHelpText(this.getValidateInput('lastname'))}
        </div>

      </form>
    );
  }

  renderHelpText(message) {
    return (
     <span className='help-block'>{message}</span>
    );
  }

  getClasses(field) {
    return classnames({
      'form-group': true,
      'has-error': !this.props.isValid(field)
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const onValidate = (error) => {
      if (error) {
        //form has errors; do not submit
      } else {
        //no errors; submit form
      }
    };
    this.props.validate(onValidate);
  }
}

SubscribeForm.propTypes = {
  errors: PropTypes.object,
  validate: PropTypes.func,
  isValid: PropTypes.func,
  handleValidation: PropTypes.func,
  getValidationMessages: PropTypes.func,
  clearValidations: PropTypes.func,
};

module.exports = validation(strategy)(SubscribeForm);
