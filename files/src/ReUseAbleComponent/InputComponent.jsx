import React from 'react'

export default function InputComponent(props) {
  return <input type={props.type} style={props.style} autoComplete={props.autoComplete} placeholder={props.placeholder} validation={props.validation} name={props.name} onChange={props.onChange} className={props.className} value={props.value} defaultValue={props.defaultValue}/>
}
