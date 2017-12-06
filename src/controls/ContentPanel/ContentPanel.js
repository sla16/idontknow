import React, {Component} from 'react';
import { connect } from 'react-redux';

import './ContentPanel.css';

/**
 * Content panel, displays information about various activities
 */
class ContentPanel extends Component {
  /**
   * Render function react
   */
  render() {
    const { selectedPlace } = this.props.places;

    var open = selectedPlace && selectedPlace.opening_hours ? selectedPlace.opening_hours.open_now : false;

    return (
      <div className='ContentPanel'>
        {
          selectedPlace &&
          <div className='ContentPanel__information'>
            <div className='ContentPanel__place-name'>
              {selectedPlace.name}
            </div>

            <div className='ContentPanel__place-hours'>
              <span>
                {<span className={'ContentPanel__' + (open ? 'open' : 'closed')}>
                  {open ? 'Open Now' : 'Closed'}
                </span>}
              </span>
            </div>

            <div className='ContentPanel__place-rating'>
              <span>
                {<span>Rating: {selectedPlace.rating}</span>}
              </span>
            </div>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps ({ places }) {
  return { places };
}

export default connect(mapStateToProps)(ContentPanel);
