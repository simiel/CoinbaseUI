const Banner = () => {
    return(
        <div className='bg-coinbaseBlue text-white p-10'>
            <div className='grid grid-cols-3 justify-center text-center mx-auto'>
                <div className='space-y-5'>
                    <p className='text-5xl font-semibold'>$335B</p>
                    <p className='text-sm'>Quaterly volume traded</p>
                </div>
                <div className='space-y-5'>
                    <p className='text-5xl font-semibold'>100M+</p>
                    <p className='text-sm'>Countries supported</p>
                </div>
                <div className='space-y-5'>
                    <p className='text-5xl font-semibold'>56+M</p>
                    <p className='text-sm'>Verified users</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;