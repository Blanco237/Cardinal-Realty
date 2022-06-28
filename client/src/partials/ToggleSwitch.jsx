import React from 'react'

import classes from '../assets/styles/partials/toggle.module.css'

const ToggleSwitch = ({ isChecked, setIsChecked}) => {
  return (
    <div>
        <label className={classes.switch}>
            <input type={'checkbox'} className={classes.input} checked={isChecked} onClick={()=>setIsChecked(!isChecked)}/>
            <span className={classes.slider}></span>
        </label>
    </div>
  )
}

export default ToggleSwitch