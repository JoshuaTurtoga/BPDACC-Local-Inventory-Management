import React from 'react'

const Icon = ({ src, alt = '', size = 24, className = '', style = {} }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style,
      }}
      className={className}
    />
  )
}

export default Icon
