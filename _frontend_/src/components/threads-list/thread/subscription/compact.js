import React from 'react'; // jshint ignore:line
import SubscriptionFull from 'misago/components/threads-list/thread/subscription/full'; // jshint ignore:line
import OptionsModal from 'misago/components/threads-list/thread/subscription/modal'; // jshint ignore:line
import modal from 'misago/services/modal'; // jshint ignore:line

export default class extends SubscriptionFull {
  /* jshint ignore:start */
  showOptions = () => {
    modal.show(<OptionsModal thread={this.props.thread} />);
  };
  /* jshint ignore:end */

  render() {
    /* jshint ignore:start */
    const { moderation } = this.props.thread;

    let className = ''
    if (moderation.length) {
      className += 'col-xs-6';
    } else {
      className += 'col-xs-12';
    }
    className += ' hidden-md hidden-lg';

    return (
      <div className={className}>
        <button
          type="button"
          className={this.getClassName()}
          disabled={this.props.disabled}
          onClick={this.showOptions}
        >
          <span className="material-icon">
            {this.getIcon()}
          </span>
        </button>
      </div>
    );
    /* jshint ignore:end */
  }
}