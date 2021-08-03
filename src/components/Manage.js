import pic from '../assets/app.jpg';
import bitcoinLogo from '../assets/bitcoinYellow.png';

const Manage = () => {
    return(
        <div className='max-w-7xl mx-auto p-10'>
            <div className='space-y-5 content-around'>
                <p className='text-5xl font-bold text-center'>Create your cryptocurrency portfolio today</p>
                <p className='text-gray-400 mx-auto text-center'>Coinbase has a variety of features that make it the best place to start trading</p>
            </div>
            <div className='flex mt-20'>
                <div className='w-6/12 mr-5 pl-5 pt-5'>
                    <div className='flex mb-10'>
                        <img src={bitcoinLogo} className='h-14 w-14 mr-5'/>
                        <div>
                            <p className='font-semibold text-xl mb-1'>Manage your portfolio</p>
                            <p className='text-gray-500 text-md'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                        </div>
                    </div>
                    <div className='flex mb-10'>
                        <img src={bitcoinLogo} className='h-14 w-14 mr-5'/>
                        <div>
                            <p className='font-semibold text-xl mb-1'>Manage your portfolio</p>
                            <p className='text-gray-500 text-md'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                        </div>
                    </div>
                    <div className='flex mb-10'>
                        <img src={bitcoinLogo} className='h-14 w-14 mr-5'/>
                        <div>
                            <p className='font-semibold text-xl mb-1'>Manage your portfolio</p>
                            <p className='text-gray-500 text-md'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                        </div>
                    </div>
                    <div className='flex mb-10'>
                        <img src={bitcoinLogo} className='h-14 w-14 mr-5'/>
                        <div>
                            <p className='font-semibold text-xl mb-1'>Manage your portfolio</p>
                            <p className='text-gray-500 text-md'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                        </div>
                    </div>
                </div>

                <div className='flex-grow'>
                    <img src={pic} />
                </div>
            </div>
            
        </div>
    )
};

export default Manage;