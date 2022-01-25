import React, { useState } from 'react'
import { GitHub, Linkedin, Twitter, Instagram } from 'react-feather'
import SocialLink from './SocialLink'

const Footer: React.FC = ({}) => {
    const [success, setSuccess] = useState(false)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        e.currentTarget.reset()
        setSuccess(true)
    }
    return (
        <footer className='bg-orange-900 p-5 sm:p-8 md:p-14 lg:px-28 xl:grid xl:grid-cols-2'>
            <div className='max-w-lg'>
                <h3 className='text-3xl font-piazzolla font-bold text-orange-100 mb-3'>
                    Contact me!
                </h3>
                <form
                    action='#'
                    method='POST'
                    onSubmit={handleSubmit}
                    onChange={() => {
                        if (success) setSuccess(false)
                    }}
                >
                    <div className='sm:rounded-md'>
                        <div className='space-y-3 lg:space-y-4'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-orange-50 font-piazzolla'
                                >
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    required
                                    id='name'
                                    placeholder='John Doe'
                                    autoComplete='family-name'
                                    className='mt-1 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-orange-50 font-piazzolla'
                                >
                                    Email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    required
                                    id='email'
                                    placeholder='e.g@mail.com'
                                    autoComplete='family-name'
                                    className='mt-1 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-orange-50 font-piazzolla'
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
                                        className='shadow-sm focus:ring-black focus:border-black mt-1 block w-full sm:text-sm border border-gray-300 rounded-md min-h-[60px] max-h-[440px]'
                                        placeholder='Your message...'
                                    ></textarea>
                                </div>
                            </div>
                            {success && (
                                <div className='bg-green-200 text-green-800 border border-green-800 rounded-lg px-3 py-2'>
                                    Successfully sent email
                                </div>
                            )}

                            <button
                                type='submit'
                                className='mt-3 w-max py-3 px-5 tracking-widest text-sm font-piazzolla font-semibold cursor-pointer bg-black text-white'
                            >
                                Send email
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='xl:w-max mt-6 xl:mt-0 xl:ml-auto flex flex-col justify-center items-center'>
                <h2 className='mr-auto xl:mr-0 text-orange-100 text-5xl font-piazzolla font-black xl:text-right'>
                    Find me online
                </h2>
                <div className='flex gap-2 mt-4'>
                    <SocialLink
                        Icon={GitHub}
                        href='https://github.com/imMatheus/'
                    />
                    <SocialLink
                        Icon={Twitter}
                        href='https://github.com/imMatheus/'
                    />
                    <SocialLink
                        Icon={Linkedin}
                        href='https://github.com/imMatheus/'
                    />
                    <SocialLink
                        Icon={Instagram}
                        href='https://github.com/imMatheus/'
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer
