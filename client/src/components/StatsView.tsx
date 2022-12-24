import React, { FC, ReactElement } from 'react'

const StatsView: FC = (): ReactElement => {
  return (
    <section className="flex bg-[#151515] shadow-lg  py-6 my-6 text-3xl font-semibold items-center justify-evenly">
      <div>

        <button className="todo w-24 h-24 rounded-full border-4 border-current text-red-500">2</button>
        <h4 className="text-slate-200 text-sm text-center mt-4 font-normal">To do</h4>
      </div>
      <div>

        <button className="progress w-24 h-24 rounded-full border-4 border-current text-orange-500">3</button>
        <h4 className="text-slate-200 text-sm text-center mt-4 font-normal">In progress</h4>

      </div>
      <div>

        <button className="completed w-24 h-24 rounded-full border-4 border-current text-green-500">4</button>
        <h4 className="text-slate-200 text-sm text-center mt-4 font-normal">Complete</h4>
      </div>
    </section>
  )
}

export default StatsView