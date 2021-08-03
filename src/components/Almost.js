import logo from '../assets/Consumer_Wordmark.svg';

const Footer =()=> {
    return(
        <div className='grid grid-cols-4 max-w-6xl mx-auto py-20 px-10'>
            <div className='space-y-5'>
                <img src={logo} className='w-28' />
                <select className='w-70 p-1 border border-gray-400'>
                    <option value="de">Deutsch</option>
                </select>
                <div className='text-gray-400'>
                    <p>© 2021 Coinbase</p>
                    <div>
                        <a>Blog</a>
                        <span>•</span>
                        <a>Twitter</a>
                        <span>•</span>
                        <a>Facebook</a>
                    </div>
                </div>
            </div>
            <div className='col-span-3 grid grid-cols-3'>
                <div className='space-y-5'>
                    <div className='space-y-2'>
                        <p className='font-semibold text-lg'>Header</p>
                            <div>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-lg'>Header</p>
                            <div>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-lg'>Header</p>
                            <div>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='space-y-2'>
                        <p className='font-semibold text-lg'>Header</p>
                            <div>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-lg'>Header</p>
                            <div>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-lg'>Header</p>
                            <div>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='space-y-2'>
                        <p className='font-semibold text-lg'>Header</p>
                            <div>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                            <p className='text-gray-400'>Child</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Footer;