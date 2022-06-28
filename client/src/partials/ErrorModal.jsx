import React from 'react'

import errorImg from '../assets/images/error.png'

const ErrorModal = ({ closeModal, error }) => {

  return (
    <div className={`w-screen h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-dark-faded `} onClick={closeModal}>
        <div className={`w-2/5 h-[15rem] flex flex-col justify-center items-center bg-midnight rounded-lg shadow-lg errorModal`}>
            <div className={`w-full h-full flex flex-row justify-center items-center px-4 gap-4`}>
                <div className='w-1/2 border-r-2 border-pink-blush border-dashed'>
                    <img className='w-7/12 object-cover' src={errorImg} alt='error' />
                </div>
                <div className='flex flex-col text-center gap-2 text-white'>
                    <h1 className='text-2xl'>Error</h1>
                    <p>{error}</p>
                </div>
                </div>
         </div>
    </div>
  )
}

export default ErrorModal