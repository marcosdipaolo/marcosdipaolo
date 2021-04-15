import { Component } from 'react';
import ReactDom from 'react-dom';

class AppPortal extends Component {
  constructor(props) {
    super(props);
    this.portalWrapper = document.createElement('div');
  }

  componentDidMount() {
    this.parentEl = document.querySelector(this.props.parent);
    if (this.parentEl) {
      this.parentEl.appendChild(this.portalWrapper);
    }
  }

  componentWillUnmount() {
    if (this.parentEl) {
      this.parentEl.removeChild(this.portalWrapper);
    }
  }

  render() {
    return ReactDom.createPortal(this.props.children, this.portalWrapper);
  }
}

export default AppPortal;
