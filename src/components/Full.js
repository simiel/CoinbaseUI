import {ReactComponent as Image} from '../assets/JavaScriptframeworks-bro.svg';

const Full = () => {
    return(
        <div className='bg-coinbaseGreen'>
            <div className='grid-cols-2 grid max-w-5xl mx-auto'>
            <div className='max-w-sm m-auto space-y-5'>
                <p className='text-4xl font-semibold'>Earn up to 28 worth of crypto</p>
                <p className='text-sm text-gray-500'>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                <button className='bg-coinbaseBlue text-white rounded-md px-4 py-2'>
                            Start earning
                    </button>
            </div>
            <Image className='mx-auto pt-20'/>
            </div>
        </div>
    )
}

export default Full;