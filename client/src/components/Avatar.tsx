import React, { FC, ReactElement } from 'react'

interface ProfileProps {
  name: String
}
const Avatar: FC<ProfileProps> = ({ name }): ReactElement => {
  return (

    <div className='px-4 font-medium text-center mt-6 py-8 flex flex-col  items-center justify-center'>
      <button  className='w-28 h-28 text-4xl rounded-full bg-purple-600 text-white' >{name.substring(0, 1)}</button>
      <h4 className='text-lg mt-4  text-slate-100'>{name}</h4>
      <p className='text-md text-slate-400'>my personal todo list</p>
    </div>
  )
}

export default Avatar