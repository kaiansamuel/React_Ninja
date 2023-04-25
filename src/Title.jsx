import React from 'react'

const Title = ({ name }) => {
  return (
    <h1>{ name }</h1>
  )
}
Title.defaultProps = {
  name: 'Desconhecido',

}

export default Title