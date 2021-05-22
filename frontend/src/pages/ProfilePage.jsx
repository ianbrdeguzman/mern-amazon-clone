import React, { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails, userLogout } from '../redux/actions/user.action';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { userInfo } = useSelector((state) => state.userLogin);
    const { user, isLoading, errorMessage } = useSelector(
        (state) => state.userDetails
    );

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const [passwordErr, setPasswordErr] = useState(null);
    const [passwordAgainErr, setPasswordAgainErr] = useState(null);

    const handleLogoutOnClick = () => {
        dispatch(userLogout());
        history.push('/');
    };

    const handleUpdateUserDetailsOnSubmit = (e) => {
        e.preventDefault();
        password.length < 6 && password.length > 0
            ? setPasswordErr(true)
            : setPasswordErr(false);
        password !== passwordAgain
            ? setPasswordAgainErr(true)
            : setPasswordAgainErr(false);
    };

    useEffect(() => {
        if (passwordErr === false && passwordAgainErr === false) {
            setPasswordErr(null);
            setPasswordAgainErr(null);
            setPassword('');
            setPasswordAgain('');
            // dispatch(
            //     userUpdateDetails({ userId: user._id, name, email, password })
            // );
        }
    }, [passwordErr, passwordAgainErr, dispatch]);

    useEffect(() => {
        dispatch(userDetails(userInfo._id));
    }, [dispatch, userInfo._id]);

    return isLoading ? (
        <div className='w-full flex justify-center mt-32'>
            <Loader />
        </div>
    ) : (
        <div>
            <div className='w-full max-w-[348px] mx-auto p-4 m-4 border rounded'>
                <h1 className='text-3xl py-4'>Manage your account</h1>
                {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
                <form onSubmit={handleUpdateUserDetailsOnSubmit}>
                    <label
                        htmlFor='name'
                        className='block mt-4 text-sm font-bold'
                    >
                        Your name
                    </label>
                    <input
                        className='border w-full py-1 px-2 rounded text-sm focus:ring-2 focus:ring-yellow-500 outline-none'
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label
                        htmlFor='email'
                        className='block mt-4 text-sm font-bold'
                    >
                        E-mail address
                    </label>
                    <input
                        className='border w-full py-1 px-2 rounded text-sm focus:ring-2 focus:ring-yellow-500 outline-none'
                        type='text'
                        name='email'
                        id='email'
                        pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                        htmlFor='password'
                        className='block mt-4 text-sm font-bold'
                    >
                        Password
                    </label>
                    <input
                        className='border w-full py-1 px-2 rounded text-sm focus:ring-2 focus:ring-yellow-500 outline-none'
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordErr && (
                        <p className='text-xs text-red-500'>
                            Password must consist of at least 6 characters
                        </p>
                    )}
                    <label
                        htmlFor='password'
                        className='block mt-4 text-sm font-bold'
                    >
                        Password again
                    </label>
                    <input
                        className='border w-full py-1 px-2 rounded text-sm focus:ring-2 focus:ring-yellow-500 outline-none'
                        type='password'
                        name='password'
                        id='passwordAgain'
                        value={passwordAgain}
                        onChange={(e) => setPasswordAgain(e.target.value)}
                    />
                    {passwordAgainErr && (
                        <p className='text-xs text-red-500'>
                            Passwords do not match
                        </p>
                    )}
                    <button
                        className='w-full border border-gray-500 rounded my-4 py-1 text-sm bg-button'
                        type='submit'
                    >
                        Update your account
                    </button>
                </form>
                <button
                    className='w-full border border-gray-500 rounded mb-4 py-1 text-sm bg-button'
                    onClick={handleLogoutOnClick}
                >
                    Sign out
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;