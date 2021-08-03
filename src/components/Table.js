import bitcoinLogo from '../assets/bitcoinYellow.png';
import chart from '../assets/app.jpg';

const Row = () => {
    return(
        <tr className='space-x-4'>
            <td className='py-6'>1</td>
            <td>
                <div  className='flex items-center space-x-4 ml-4'>
                    <div className="flex-shrink-0">
                        <img src={bitcoinLogo} className='h-10 w-10' />
                    </div>

                    <div>
                        <p className='text-lg'>Bitcoin</p>
                    </div>
                    <div>
                        <p className='text-lg'>BTC</p>
                    </div>
                </div>
            </td>
            <td className='py-6'>
                <p className='text-coinbaseGreen'>GHS1000.00</p>
            </td>
            <td className='py-6'>
                <p>+2.06%</p>
            </td>
            <td className='py-6'>
                <img src={chart} className='w-10 h-10'/>
            </td>
            <td className='py-6'>
                <button className='bg-coinbaseGreen text-white px-3 py-2 rounded-md'>
                    Buy
                </button>
            </td>
        </tr>
    );
};

const Table = () => {
    return(
        <div className='max-w-5xl flex flex-col mx-auto w-full'>
            <div className='border border-gray-200 rounded-md px-10'>
                <table className='divide-y divide-gray-200 w-full'>
                    <thead>
                        <tr>
                            <th className='py-5 font-normal text-gray-400 text-left'>#</th>
                            <th className='py-5 px-5 font-normal text-gray-400 text-left'>Name</th>
                            <th className='py-5 font-normal text-gray-400 text-left'>Price</th>
                            <th className='py-5 font-normal text-gray-400 text-left'>Chart</th>
                            <th className='py-5 font-normal text-gray-400 text-left'>Change</th>
                            <th className='py-5 font-normal text-gray-400 text-left'>Trade</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 space-x-5'>
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;