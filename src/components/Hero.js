import {ReactComponent as Ginger} from '../assets/ginger-root.svg';
import {ReactComponent as Icon} from '../assets/Consumer_Wordmark.svg';
import bitcoinLogo from '../assets/bitcoinYellow.png';
import {ReactComponent as Libraries} from '../assets/JavaScriptframeworks-bro.svg'

const HeroSection = () => {
    return(
        <div className='grid grid-cols-2 max-w-5xl mx-auto'>
            <div className='flex flex-col py-28 space-y-5'>
                <div className='flex space-x-2'>
                    <img src={bitcoinLogo} className='w-10 h-10 my-auto'></img>
                    <p className='text-coinbaseBlue font-semibold hover:underline p-5'>Jump start your portfolio</p>
                    <Icon className='w-5'/>
                </div>
                <div className='space-y-5'>
                    <p className='font-semibold text-7xl'>Jump start your crypto portfolio</p>
                    <p className='text-xl font-semibold'>vide an href, but still need the element to resemble a link, use a button and</p>
                    <div className='space-x-4'>
                        <input className='px-4 py-5 focus:outline-none border border-gray-200 rounded-md w-7/12' type='email' placeholder='Email address' />

                        <button className='bg-coinbaseBlue text-white rounded-md px-4 py-5 w-4/12'>
                            Get started
                        </button>
                    </div>

                    <p className='text-xs text-coinbaseBlue underline'>*Terms apply</p>
                </div>
            </div>
            <div>
                <Libraries className='mx-auto pt-20'/>
            </div>
        </div>
    )
}

export default HeroSection;