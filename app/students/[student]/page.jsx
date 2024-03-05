import React from 'react'

const Student = ({params}) => {
  return (
    <div>This page is all about : {params.student}  </div>
  )
}

export default Student