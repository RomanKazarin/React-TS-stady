import React from 'react';
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <h1>Страница Информации</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempora saepe quaerat eveniet veritatis optio labore, sequi cum porro? Repellat!</p>
      <button className='btn' onClick={() => navigate('/')}>Обратно к списку дел</button>
    </React.Fragment>
  )
}