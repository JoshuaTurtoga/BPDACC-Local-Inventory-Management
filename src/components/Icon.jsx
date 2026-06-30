import React from 'react'

const Icon = ({ src, alt = '', size = 24, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: size,
        height: size,
        display: 'inline-block',
      }}
      className={className}
    />
  )
}

export default Icon
