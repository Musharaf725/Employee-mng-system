import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
            Make youtube animated video using artificil intelligence.
        </p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Desigining portfolio</h2>
        <p className='text-sm mt-2'>
            Design a attaractive fronted portfolio website mentioning all the details.
        </p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Working on Freelancing</h2>
        <p className='text-sm mt-2'>
            Accept client project, work on it, and handover him.
        </p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>learning backend and mongodb database</h2>
        <p className='text-sm mt-2'>
            Learn Backend development and mongodb database from own pace.
        </p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
            Make youtube animated video using artificil intelligence.
        </p>
      </div>
    </div>
  )
}

export default TaskList
