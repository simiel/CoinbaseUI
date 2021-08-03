import bitcoinLogo from '../assets/bitcoinYellow.png';

const Earn = () => {
    return(
        <div className='max-w-5xl mx-auto py-10'>
            <div className='grid grid-cols-2'>
                <div className='max-w-sm space-y-5 my-auto'>
                    <p className='text-3xl font-semibold'>
                        Earn up to $28 worth of crypto
                    </p>
                    <p className='text-sm'>
                    Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
                    </p>
                    <button className='bg-coinbaseBlue text-white rounded-md px-4 py-2'>
                            Start earning
                    </button>
                </div>

                <div className=''>
                    <div className='flex py-5 px-6 space-x-5 transition duration-700 hover:shadow-lg'>
                        
                            <img className='mr-15 h-10 w-10' src={bitcoinLogo}/>
                            <div className='flex space-x-5 my-auto'>
                                <p className='my-auto text-3xl font-semibold'>BarnBridge</p>
                                <p className='my-auto font-semibold'>BOND</p>
                            </div>
                        
                        
                            <p className='text-right my-auto flex-grow font-semibold text-coinbaseGreen'>Earn 3$ BOND</p>
                    </div>

                    <div className='flex py-5 px-6 space-x-5 transition duration-700 hover:shadow-lg'>
                        
                            <img className='mr-15 h-10 w-10' src={bitcoinLogo}/>
                            <div className='flex space-x-5 my-auto'>
                                <p className='my-auto text-3xl font-semibold'>BarnBridge</p>
                                <p className='my-auto font-semibold'>BOND</p>
                            </div>
                        
                        
                            <p className='text-right my-auto flex-grow font-semibold text-coinbaseGreen'>Earn 3$ BOND</p>
                    </div>

                    <div className='flex py-5 px-6 space-x-5 transition duration-700 hover:shadow-lg'>
                        
                            <img className='mr-15 h-10 w-10' src={bitcoinLogo}/>
                            <div className='flex space-x-5 my-auto'>
                                <p className='my-auto text-3xl font-semibold'>BarnBridge</p>
                                <p className='my-auto font-semibold'>BOND</p>
                            </div>
                        
                        
                            <p className='text-right my-auto flex-grow font-semibold text-coinbaseGreen'>Earn 3$ BOND</p>
                    </div>

                    <div className='flex py-5 px-6 space-x-5 transition duration-700 hover:shadow-lg'>
                        
                            <img className='mr-15 h-10 w-10' src={bitcoinLogo}/>
                            <div className='flex space-x-5 my-auto'>
                                <p className='my-auto text-3xl font-semibold'>BarnBridge</p>
                                <p className='my-auto font-semibold'>BOND</p>
                            </div>
                        
                        
                            <p className='text-right my-auto flex-grow font-semibold text-coinbaseGreen'>Earn 3$ BOND</p>
                    </div>
                </div>
            </div>       
        </div>
    )
};

export default Earn;