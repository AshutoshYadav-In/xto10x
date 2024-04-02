import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../Redux/Toggle';
import './Nav.css'
function Nav() {
  const dispatch = useDispatch()
  //handle toggle for filters
  function toggle() {
    dispatch(toggleFilter("togglefilter"))
  }
  return (
    <div className='Nav'>
      <p>Nextcart</p>
      <div className='NFC' onClick={toggle}>
        <FontAwesomeIcon icon={faFilter} />
        <p>Filter</p>
      </div>
    </div>
  )
}

export default Nav