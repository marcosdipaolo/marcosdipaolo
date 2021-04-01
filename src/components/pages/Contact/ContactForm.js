import { withTranslation } from 'react-i18next';
import { Component } from 'react';
import mailSender from '../../../apis/blackend';
import Notification from './Notification';

export class ConctactForm extends Component {
  state = {
    name: '', email: '', subject: '', message: '', status: null, notificationShow: false, notificationMessage: '',
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  hideNotification = () => new Promise((res) => {
    this.setState({ notificationShow: false });
    setTimeout(() => { res(); }, 300);
  })

  showNotification = (status, message) => {
    this.setState({ status });
    this.setState({ notificationShow: true });
    this.setState({ notificationMessage: message });
    setTimeout(() => {
      this.hideNotification().then(() => {
        this.setState({ status: null });
      });
    }, 3000);
  }

  onSubmit = () => {
    const {
      name, email, subject, message,
    } = this.state;
    console.log('token', process.env.REACT_APP_API_TOKEN);
    console.log(name, email, subject, message);
    mailSender.post(`/api/mail?api_token=${process.env.REACT_APP_API_TOKEN}`, {
      name, email, subject, message,
    }).then((response) => {
      if (response.status === 200) {
        this.showNotification('success', this.props.t('pages.contact.notificationSuccess'));
      }
    }).catch((error) => {
      console.log(error.response.data.errors);
      const { errors } = error.response.data;
      const text = errors[Object.keys(errors)[0]];
      this.showNotification('error', (
        <span>
          {this.props.t('pages.contact.notificationError')}
          <br />
          {text}
        </span>));
    });
  }

  formInput(value, name, placeholder) {
    return (
      <div className="col-12 col-md-4">
        <input
          onChange={this.changeHandler}
          value={value}
          name={name}
          className="mb-35 pl-30"
          type="text"
          placeholder={placeholder}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="contact-form">
        <Notification
          status={this.state.status}
          show={this.state.notificationShow}
          message={this.state.notificationMessage}
        />
        <div className="row">
          {this.formInput(this.state.name, 'name', this.props.t('pages.contact.form.yourName'))}
          {this.formInput(this.state.email, 'email', this.props.t('pages.contact.form.yourEmail'))}
          {this.formInput(this.state.subject, 'subject', this.props.t('pages.contact.form.theSubject'))}
        </div>
        <textarea
          onChange={this.changeHandler}
          value={this.state.message}
          name="message"
          className="mb-20 pt-20 pl-30"
          placeholder={this.props.t('pages.contact.form.yourMessage')}
        />
        <button
          onClick={this.onSubmit}
          type="button"
          className="mdp-btn mb-20"
        >
          {this.props.t('pages.contact.sendMessage')}
        </button>
      </div>
    );
  }
}
export default withTranslation()(ConctactForm);
