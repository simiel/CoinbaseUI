import Ginger from '../assets/ginger-root.svg';

const Trusted = () => {
    return(
        <div className='max-w-5xl mx-auto py-20'>
            <div className='text-center p-10 space-y-5'>
                <p className='font-semibold text-5xl'>The most trusted cryptocurrency platform</p>
                <p className='text-gray-400'>Here are a few reasons why you should choose Coinbase</p>
            </div>
            <div className='py-10 mx-auto grid text-center items-center grid-cols-3'>
                <div className='space-y-5'>
                    <img src={Ginger} className='mx-auto'/>
                    <p className='font-semibold text-xl'>Secure storage</p>
                    <p  className='text-gray-400 text-lg'>Lorem lorem</p>
                    <a className='text-coinbaseBlue'>lorem lorem</a>
                </div>
                <div className='space-y-5'>
                    <img src={Ginger} className='mx-auto'/>
                    <p className='font-semibold text-xl'>Secure storage</p>
                    <p  className='text-gray-400 text-lg'>Lorem lorem</p>
                    <a className='text-coinbaseBlue'>lorem lorem</a>
                </div>
                <div className='space-y-5'>
                    <img src={Ginger} className='mx-auto'/>
                    <p className='font-semibold text-xl'>Secure storage</p>
                    <p  className='text-gray-400 text-lg'>Lorem lorem</p>
                    <a className='text-coinbaseBlue'>lorem lorem</a>
                </div>
            </div>
            
        </div>
    )
}

export default Trusted;