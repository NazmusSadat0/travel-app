import React from 'react'

const Button = ({type, title, icon, variant}) => {
  return (
    <button type='button' className={`flex`}>
        {icon && <img src={icon} width={24} height={24}/>}
        <label className='font-bold'>{title}</label>
    </button>
  )
}

export default Button