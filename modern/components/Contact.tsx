import React, { useState } from 'react'

const Contact: React.FC = ({}) => {
    const [success, setSuccess] = useState(false)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        e.currentTarget.reset()
        setSuccess(true)
    }

    return (
        <section className='my-16 px-4 sm:px-4 md:px-8' id='contact'>
            <h2 className='text-center text-3xl md:text-5xl font-bold mb-3'>
                Contact
            </h2>
            <div className='mt-5 md:mt-0 md:col-span-2 max-w-2xl mx-auto'>
                <form
                    action='#'
                    method='POST'
                    onSubmit={handleSubmit}
                    onChange={() => {
                        if (success) setSuccess(false)
                    }}
                >
                    <div className='sm:rounded-md sm:overflow-hidden'>
                        <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    required
                                    id='name'
                                    autoComplete='family-name'
                                    className='mt-1 focus:ring-theme focus:border-theme block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    required
                                    id='email'
                                    autoComplete='family-name'
                                    className='mt-1 focus:ring-theme focus:border-theme block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Message
                                </label>
                                <div className='mt-1'>
                                    <textarea
                                        id='about'
                                        name='message'
                                        required
                                        rows={3}
                                        maxLength={1500}
                                        className='shadow-sm focus:ring-theme focus:border-theme mt-1 block w-full sm:text-sm border border-gray-300 rounded-md min-h-[60px] max-h-[600px]'
                                        placeholder='Your message...'
                                    ></textarea>
                                </div>
                            </div>
                            {success && (
                                <div className='bg-green-200 text-green-800 border border-green-800 rounded-lg px-3 py-2'>
                                    Successfully sent email
                                </div>
                            )}
                            <input
                                type='submit'
                                value='Submit'
                                className='py-2 border border-black rounded-md w-32 sm:w-36 text-sm cursor-pointer bg-black text-white'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
