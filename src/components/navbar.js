import logo from '../assets/Consumer_Wordmark.svg';

const Navbar = () => {
    return(
        <div className='w-full bg-white border-b border-grey-200'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between font-semibold items-center py-3 px-10'>
                    <div className='flex flex-1 justify-start'>
                        <img src={logo} className='w-28' />
                    </div>
                    <div className='space-x-10 flex'>
                        <a className='text-sm'>Prices</a>
                        <a className='text-sm'>Learn</a>
                        <a className='text-sm'>Individual</a>
                        <a className='text-sm'>Businesses</a>
                        <a className='text-sm'>Developers</a>
                        <a className='text-sm'>Company</a>
                    </div>
                    <div className='flex flex-1 items-center justify-end space-x-5'>
                        <a className='text-sm'>Sign in</a>
                        <button className='bg-coinbaseBlue text-white rounded-md px-3 py-2'>
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;