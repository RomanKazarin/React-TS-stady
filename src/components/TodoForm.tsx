import React, { useState } from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props): JSX.Element => {

  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(title)
      setTitle('')
    }
  }

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={title}
        type="text"
        id="title"
        placeholder='Введите название дела'
      />
      <label htmlFor="title" className='active'>Новое дело</label>
    </div>
  )
}