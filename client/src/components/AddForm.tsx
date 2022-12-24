import React, { ChangeEvent, FC, ReactElement } from 'react'

const addForm: FC = (): ReactElement => {
  const handleTaskCreation = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault()
  }
  enum Status {
    todo = "todo",
    inProgress = "inProgress",
    Completed = "Completed",

  }
  return (
    <div className='p-4'>
      <form onSubmit={handleTaskCreation} className='space-y-6 px-6 text-slate-100'>
        <h4>Create a task</h4>
        <input type="text" name='title' className='border w-full bg-transparent rounded-md py-2 px-4 ' placeholder='Title' />
        <textarea name="desc" className='w-full border bg-transparent h-36 rounded-md resize-none px-4 py-2' placeholder='Description' />
        <input type="date" name="date" className=' accent-white uppercase border w-full bg-transparent rounded-md py-2 px-4 ' />
        {/* status and priority */}
        <div className='flex justify-between items-center'>
          {/* status */}
          <select name="status" className='  flex-1 py-2 px-4 bg-transparent mr-4 text-white rounded-md border'>
            {

            }
          </select>
          {/* priority */}
          <select name="prioity" className='flex-1 py-2 px-4 bg-transparent text-white rounded-md border' >
            <option value="completed" className='bg-slate-700'>High</option>
            <option value="completed" className='bg-slate-700'>Medium</option>
            <option value="completed" className='bg-slate-700'>Low</option>
          </select>
        </div>
        <button className='bg-purple-600 text-white py-2 rounded-md uppercase w-full'>create a task</button>
      </form>
    </div>
  )
}

export default addForm