import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../assets/Amazon_logo.svg';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import numeral from 'numeral';

const Header = () => {
    const [input, setInput] = useState('');

    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.userLogin);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Not yet implemented...`);
        setInput('');
    };

    const handleLoginOnClick = () => {
        history.push('/login');
    };

    const handleProfileOnClick = () => {
        history.push('/profile');
    };

    const handleCartOnClick = () => {
        history.push('/cart');
    };

    const handleOrderHistoryOnClick = () => {
        history.push('/orderhistory');
    };

    return (
        <div className='md:flex items-center p-4 bg-header text-white'>
            <div className='flex flex-1'>
                <Link to='/'>
                    <img src={logo} alt='logo' className='w-24 md:w-32' />
                </Link>
                <form
                    className='flex-1 flex ml-4 md:mr-4 relative'
                    onSubmit={handleSubmit}
                >
                    <input
                        type='text'
                        name='search'
                        id='search'
                        value={input}
                        className='flex-1 p-2 rounded focus:outline-none focus:ring-4 focus:ring-yellow-500 text-black'
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='p-3 bg-buttonSearch text-black rounded-tr rounded-br absolute top-0 right-0'
                    >
                        <AiOutlineSearch />
                    </button>
                </form>
            </div>
            <div className='flex mt-2 justify-between'>
                {userInfo ? (
                    <button
                        onClick={handleProfileOnClick}
                        className='mx-2 p-2 border border-transparent hover:border-white focus:outline-none'
                    >
                        <p className='text-left text-xs'>
                            Hello, {userInfo.name}
                        </p>
                        <p className='text-left font-bold text-xs'>
                            Account & List
                        </p>
                    </button>
                ) : (
                    <button
                        onClick={handleLoginOnClick}
                        className='mx-2 p-2 border border-transparent hover:border-white focus:outline-none'
                    >
                        <p className='text-left text-xs'>Hello, Sign in</p>
                        <p className='text-left font-bold text-xs'>
                            Account & Lists
                        </p>
                    </button>
                )}
                <button
                    onClick={handleOrderHistoryOnClick}
                    className='mx-2 p-2 border border-transparent hover:border-white focus:outline-none'
                >
                    <p className='text-left text-xs'>Returns</p>
                    <p className='text-left font-bold text-xs'>& Orders</p>
                </button>
                <button
                    onClick={handleCartOnClick}
                    className='flex items-center mx-2 pl-2 pr-4 border border-transparent hover:border-white relative focus:outline-none'
                >
                    <AiOutlineShoppingCart size={28} />
                    <span className='absolute right-0 top-0 bg-cartAmount px-2 rounded-full'>
                        {numeral(
                            cartItems.reduce((a, c) => a + c.quantity, 0)
                        ).format('0,0')}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Header;
