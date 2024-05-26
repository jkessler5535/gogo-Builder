import React from 'react';
import cx from "classnames";

const Switch = ({ rounded = false, isToggled, onToggle}) => {
  const sliderCx = cx('slider',{
    'rounded': rounded
  })
  return(
    <div>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={sliderCx}/>
      </label>
    </div>
  )
}
export default Switch;