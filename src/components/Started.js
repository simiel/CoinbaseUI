import {ReactComponent as Ginger} from '../assets/ginger-root.svg'

const Started = () => {
    return(
        <div className='max-w-6xl mx-auto my-10'>
                <div className='text-center p-10 space-y-5'>
                    <p className='text-5xl'>Getting started in a few minutes</p>
                    <p className='text-sm text-gray-500'>Coinbase supports a variety of the most popular cryptocurrencies</p>
                </div>

                <div className='flex justify-between px-20 align-middle'>
                    <div>
                        <Ginger className='mx-auto' />
                        <p>Create an account</p>
                    </div>
                    <hr  className='w-50 border-b border-gray-400'/>
                    <div>
                        <Ginger className='mx-auto' />
                        <p>Create an account</p>
                    </div>
                    <div></div>
                    <div>
                        <Ginger className='mx-auto' />
                        <p>Create an account</p>
                    </div>
                </div>
        </div>
    )
}

export default Started;