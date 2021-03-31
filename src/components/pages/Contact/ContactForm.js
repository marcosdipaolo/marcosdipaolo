import { withTranslation } from 'react-i18next';
import { Component } from 'react';
import mailSender from '../../../apis/blackend';

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

  processNotification = (status, message) => {
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
    mailSender.post(`/api/mail?api_token=${process.env.REACT_APP_API_TOKEN}`, {
      name, email, subject, message,
    }).then((response) => {
      if (response.status === 200) {
        this.processNotification('success', this.props.t('pages.contact.notificationSuccess'));
      }
    }).catch((error) => {
      console.log(error.response.data.errors);
      const { errors } = error.response.data;
      const text = errors[Object.keys(errors)[0]];
      this.processNotification('error', (
        <span>
          {this.props.t('pages.contact.notificationError')}
          <br />
          {text}
        </span>));
    });
  }

  render() {
    return (
      <div className="contact-form">
        <div
          className="notification px-20"
          style={{
            // eslint-disable-next-line no-nested-ternary
            backgroundColor: this.state.status === 'success' ? '#00807a9e' : '#ff000066',
            opacity: this.state.notificationShow ? '1' : '0',
            display: 'flex',
          }}
        >
          <p style={{ margin: 'auto' }}>{this.state.notificationMessage}</p>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <input
              onChange={this.changeHandler}
              value={this.state.name}
              name="name"
              className="mb-35 pl-30"
              type="text"
              placeholder={this.props.t('pages.contact.form.yourName')}
            />
          </div>
          <div className="col-12 col-md-4">
            <input
              onChange={this.changeHandler}
              value={this.state.email}
              name="email"
              className="mb-35 pl-30"
              type="text"
              placeholder={this.props.t('pages.contact.form.yourEmail')}
            />
          </div>
          <div className="col-12 col-md-4">
            <input
              onChange={this.changeHandler}
              value={this.state.subject}
              name="subject"
              className="mb-35 pl-30"
              type="text"
              placeholder={this.props.t('pages.contact.form.theSubject')}
            />
          </div>
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
