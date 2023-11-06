import React, { useState } from 'react'

export default function ImgHolder(props) {
    const thisComponentStyle={
      backgroundImage: 'url(' + props.url + ')',
    };
  return (
    <div style={thisComponentStyle}>
    </div>
  )
}
