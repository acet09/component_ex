import React from 'react';

const ListEx = (props) => {

  const listItmes = props.data.map(
    (index, text) => {
      return <li>{index} : {text}</li>
    })

  return (
    <ul>
      {listItmes}
    </ul>
  )
}

export default ListEx