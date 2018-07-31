import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import check from './check.svg';

export const DropdownList = ({ options, btnClick }) => (
  <Fragment>
    {options.map(({ id, value, isActive }) => {
        return (<div> 
             {isActive && <img src={check} alt="check"/>}
             <button key={id} onClick={btnClick}>{value}</button>
           </div>);
    })}
  </Fragment>
);

DropdownList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  btnClick: PropTypes.func.isRequired
};

DropdownList.defaultProps = {
  options: [{ id: 1, value: 'По дате выхода', isActive: true }, { id: 2, value: 'По рейтингу', isActive: false }, { id: 3, value: 'По алфавиту', isActive: false }]
};