import { withTranslation } from 'react-i18next';
import { Component } from 'react';
import mailSender from '../../../apis/blackend';
import Notification from './Notification';
import Spinner from '../../Spinner';
import AppPortal from '../../AppPortal';

export class ConctactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    status: null,
    notificationShow: false,
    notificationMessage: '',
    loading: false,
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  hideNotification = () => new Promise((res) => {
    this.setState({ notificationShow: false });
    setTimeout(() => { res(); }, 500);
  })

  showNotification = (status, message) => {
    this.setState({ status });
    this.setState({ notificationMessage: message, notificationShow: true });
    setTimeout(async () => {
      await this.hideNotification();
      this.setState({ status: null });
    }, 3000);
  }

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  onSubmit = () => {
    const {
      name, email, subject, message,
    } = this.state;
    this.setState({ loading: true });
    mailSender.post(`/api/mail?api_token=${process.env.REACT_APP_API_TOKEN}`, {
      name, email, subject, message,
    }).then((response) => {
      this.clearForm();
      this.setState({ loading: false });
      if (response.status === 200) {
        this.showNotification('success', this.props.t('pages.contact.notificationSuccess'));
      }
    }).catch((error) => {
      this.setState({ loading: false });
      const errors = (error.response && error.response.data) ? error.response.data.errors : null;
      if (errors) {
        const text = errors[Object.keys(errors)[0]][0];
        this.showNotification('error', (
          <span>
            {this.props.t('pages.contact.notificationError')}
            <br />
            {text}
          </span>));
      }
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
      <div className="contact-form position-relative">
        <AppPortal parent="section.contact">
          <Notification
            status={this.state.status}
            show={this.state.notificationShow}
            message={this.state.notificationMessage}
          />
        </AppPortal>
        {this.state.loading
          ? <Spinner />
          : (
            <div>
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
          )}
      </div>
    );
  }
}
export default withTranslation()(ConctactForm);
