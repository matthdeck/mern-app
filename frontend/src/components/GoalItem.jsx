import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteGoal, updateGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState('')

  const handleEdit = (boolean) => {
    setEdit(boolean)
  }

  const onSubmit = e => {
    e.preventDefault()
    dispatch(updateGoal({text: {text}, id: goal._id}))
    setText('')
  }

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      {edit ? (
        <form onSubmit={onSubmit}>
          <label>
            Edit Goal:
            <textarea 
              type='text' 
              defaultValue={goal.text}
              onChange={(e) => setText(e.target.value)} 
            />
          </label>
          <input 
            type='submit' 
            value='update goal' 
          />
          <button type='button' onClick={() => handleEdit(false)}>
            X
          </button>
        </form>) : (
        <>
          <h2>{goal.text}</h2>
          <AiFillEdit onClick={() => handleEdit(true)} className='edit' />
        </>
        )
      }
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem