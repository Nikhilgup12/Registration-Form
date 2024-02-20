import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorMsgFirstName: '',
    errorMsgLastName: '',
    showErrorFirst: false,
    showErrorLast: false,
    isSuccess: true,
  }

  onFirst = event => {
    this.setState({firstName: event.target.value})
  }

  onLast = event => {
    this.setState({lastName: event.target.value})
  }

  onFirstName = () => {
    // const firstName = event.target.value
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({errorMsgFirstName: 'Required', showErrorFirst: true})
    } else {
      this.setState({errorMsgFirstName: '', showErrorFirst: false})
    }
  }

  onLastName = () => {
    // const lastName = event.target.value
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({errorMsgLastName: 'Required', showErrorLast: true})
    } else {
      this.setState({errorMsgLastName: '', showErrorLast: false})
    }
    // this.setState({lastName: event.target.value})
  }

  onValidateForm = () => {
    const {firstName, lastName} = this.state

    if (firstName === '') {
      this.setState({
        errorMsgFirstName: 'Required',
        showErrorFirst: true,
      })
    } else {
      this.setState({
        errorMsgFirstName: '',
        showErrorFirst: false,
      })
    }
    if (lastName === '') {
      this.setState({
        errorMsgLastName: 'Required',
        showErrorLast: true,
      })
    } else {
      this.setState({
        errorMsgLastName: '',
        showErrorLast: false,
      })
    }
  }

  onSubmitForm = async event => {
    event.preventDefault()
    await this.onValidateForm()
    const {showErrorFirst, showErrorLast} = this.state
    if (!showErrorFirst && !showErrorLast) {
      this.setState({isSuccess: false})
    }
  }

  onSubmitAnother = () => {
    this.setState({isSuccess: true})
  }

  onRegistrationForm = () => {
    const {
      errorMsgFirstName,
      errorMsgLastName,
      showErrorFirst,
      showErrorLast,
      firstName,
      lastName,
    } = this.state
    const firstClassname = showErrorFirst ? 'first-input' : ''
    const lastClassname = showErrorLast ? 'last-input' : ''
    return (
      <form onSubmit={this.onSubmitForm}>
        <div className='firstName-container'>
          <label htmlFor='firstName' className='firstName-label'>
            First Name
          </label>
          <br />
          <input
            type='text'
            id='firstName'
            placeholder='First name'
            className={`firstName-input ${firstClassname}`}
            onBlur={this.onFirstName}
            onChange={this.onFirst}
            value={firstName}
          />
          <p className='required-first'> {errorMsgFirstName} </p>
        </div>
        <div className='firstName-container'>
          <label htmlFor='lastName' className='firstName-label'>
            Last Name
          </label>
          <br />
          <input
            type='text'
            id='lastName'
            placeholder='Last name'
            className={`lastName-input ${lastClassname}`}
            onBlur={this.onLastName}
            onChange={this.onLast}
            value={lastName}
          />
          <p className='required-first'> {errorMsgLastName} </p>
        </div>
        <div className='btn'>
          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </div>
      </form>
    )
  }

  onSuccessFullCard = () => {
    return (
      <div className='Successfully-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
          className='success-logo'
          alt='success'
        />
        <p className='submit-name'> Submitted Successfully </p>
        <button
          className='submit-btn'
          type='button'
          onClick={this.onSubmitAnother}
        >
          Submit Another Response
        </button>
      </div>
    )
  }

  render() {
    const {isSuccess} = this.state
    return (
      <div className='RegistrationForm-main-container'>
        <h1 className='Registration-heading'> Registration </h1>
        <div className='RegistrationForm'>
          {isSuccess ? this.onRegistrationForm() : this.onSuccessFullCard()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
