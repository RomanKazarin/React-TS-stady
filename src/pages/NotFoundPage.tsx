import React from 'react';
import { useNavigate } from 'react-router-dom'

export const NotFoundPage: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <h1>404 NOT FOUND</h1>
      <h2>Страница не найдена</h2>
      <button className='btn primary' onClick={() => navigate('/')}>Вернуться к списку дел</button>
    </React.Fragment>
  )
}