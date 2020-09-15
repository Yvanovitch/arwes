import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import AnimationComponent from '../Animation';

export default class Header extends Component {

  static propTypes = {
    Animation: PropTypes.any.isRequired,

    theme: PropTypes.any.isRequired,
    classes: PropTypes.any.isRequired,

    animate: PropTypes.bool,
    show: PropTypes.bool,
    animation: PropTypes.object,
    inverseSeparator: PropTypes.bool,

    /**
     * It uses the `deploy` player.
     */
    sounds: PropTypes.object,

    /**
     * If function, receives the animation status object.
     */
    children: PropTypes.any,
  }

  static defaultProps = {
    Animation: AnimationComponent,
    animate: true,
    sounds: {},
    show: true,
    inverseSeparator: false,
  }

  componentDidMount () {
    const { animate, show, sounds } = this.props;
    if (animate && show) {
      sounds.deploy?.play();
    }
  }

  componentDidUpdate (prevProps) {
    const { animate, show, sounds } = this.props;
    if (animate && prevProps.show !== show) {
      sounds.deploy?.play();
    }
  }

  componentWillUnmount () {
    const { animate, sounds } = this.props;
    if (animate) {
      sounds.deploy?.stop();
    }
  }

  render () {
    const {
      theme,
      classes,
      Animation,
      animation,
      inverseSeparator,
      sounds,
      animate,
      show,
      className,
      children,
      ...etc
    } = this.props;
    const cls = cx(classes.root, className);

    return (
      <Animation
        animate={animate}
        show={show}
        timeout={theme.animTime}
        {...animation}
      >
        {anim => (
          <header className={cx(cls, classes[anim.status])} {...etc}>
            {inverseSeparator && <div className={classes.separator} />}
            <div className={classes.children}>
              {typeof children === 'function' ? children(anim) : children}
            </div>
            {!inverseSeparator && <div className={classes.separator} />}
          </header>
        )}
      </Animation>
    );
  }
}
