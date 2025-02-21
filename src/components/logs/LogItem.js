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
        <span className='black-text'>ID #{log.id} </span> last updated by {' '}
        <span className='black-text'>{log.tech }</span> on {' '}
        <Moment format= ' do MMMM yyyy, h:mm:ss   a'>{ log.date}</Moment>
    </span>
    <a href="#!" className="secendary-content  ">
          <div align="right">
        <i className="   material-icons  grey-text" >   delete   </i>
        </div>
    </a>
        </div>
        </li>
    );
};
LogItem.prpTypes = {
    log: PropTypes.object.isRequired
}

export default LogItem;

