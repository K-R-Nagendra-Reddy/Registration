// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    blurGotFirst: false,
    blurGotLast: false,
    loginSuccess: false,
    focusFirstName: false,
    focusLastName: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onBlurFirstName = event => {
    if (event.target.value.length < 1) {
      // console.log('first element got blurred')
      this.setState({blurGotFirst: true})
    }
  }

  onFocusFirstName = event => {
    // console.log('firstName focus got')
    this.setState({focusFirstName: true})
  }

  renderFirstNameElement = () => {
    const {firstName, focusFirstName} = this.state
    const styleOnFocusFirst = focusFirstName ? 'focusStyle' : ''

    return (
      <>
        <label htmlFor="firstName" className="label-element">
          FIRST NAME
        </label>
        <input
          type="text"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          onFocus={this.onFocusFirstName}
          className={`inputElement ${styleOnFocusFirst}`}
          placeholder="First name"
        />
      </>
    )
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurLastName = event => {
    // console.log('last name blur got')
    if (event.target.value.length < 1) {
      this.setState({blurGotLast: true})
    }
  }

  onFocusLastName = event => {
    // console.log('last name focused')
    this.setState({focusLastName: true})
  }

  renderLastNameElement = () => {
    const {lastName, focusLastName} = this.state
    const styleOnFocusLast = focusLastName ? 'focusStyle' : ''
    return (
      <>
        <label htmlFor="lastName" className="label-element">
          LAST NAME
        </label>
        <input
          type="text"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          onFocus={this.onFocusLastName}
          className={`inputElement ${styleOnFocusLast}`}
          placeholder="Last name"
        />
      </>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName.length < 1) {
      this.setState({blurGotFirst: true})
    }
    if (lastName.length < 1) {
      this.setState({blurGotLast: true})
    }
    if (lastName.length > 0 && firstName.length > 0) {
      this.setState({loginSuccess: true})
    }
  }

  SubmitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      blurGotFirst: false,
      blurGotLast: false,
      loginSuccess: false,
      focusFirstName: false,
      focusLastName: false,
    })
  }

  render() {
    const {
      blurGotFirst,
      blurGotLast,
      loginSuccess,
      focusFirstName,
      focusLastName,
    } = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>

        {loginSuccess === false ? (
          <form onSubmit={this.onSubmitForm} className="form">
            <div className="input-element">{this.renderFirstNameElement()}</div>
            {blurGotFirst && <p className="error-message">Required</p>}
            <div className="input-element">{this.renderLastNameElement()}</div>
            {blurGotLast && <p className="error-message">Required</p>}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="success-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              className="success-image"
              alt="success"
            />
            <p className="success-text">Submitted Successfully</p>
            <button
              type="button"
              onClick={this.SubmitAnotherResponse}
              className="submit-button"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
