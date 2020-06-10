import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';


const LogItem = ( { log } ) => {
    return (
      <li className='collection-item'>
      <div>
    <a href='#edit-log-model' className={`model-trigger ${log.attention ? 'red-text': 'blue-text'}`}>{log.message}</a>
        <br />
    <span className='grey-text'>
    <span className='black-text'>ID #{log.id} </span> last updated by {''}
        <span className='black-text'>{log.tech }</span> on <moment format= ' do mmmm yyyy, h:mm:ss'>{ log.date}</moment>
    </span>
        </div>
        </li>
    )
}
LogItem.prpTypes = {
    log: PropTypes.object.isRequired
}

export default LogItem;

