import { Component } from 'react';
import PropTypes from 'prop-types';
import getModifiedProps from '../../utils/getModifiedProps';

class Credits extends Component {

  static propTypes = {
    update: PropTypes.object
  };

  constructor (props) {
    super(props);

    this.updateCredits = this.updateCredits.bind(this);
  }

  componentDidMount () {
    const { children, ...rest } = this.props;
    this.updateCredits({
      ...rest,
      text: children
    });
  }

  componentDidUpdate (prevProps) {
    const modifiedProps = getModifiedProps(prevProps, this.props, true);
    if (modifiedProps !== false) {
      this.updateCredits(modifiedProps);
    }
  }

  componentWillUnmount () {
    this.updateCredits({
      text: null
    });
  }

  updateCredits (config) {
    this.props.update({
      credits: config
    }, true);
  }

  render () {
    return null
  }
}

export default Credits;
