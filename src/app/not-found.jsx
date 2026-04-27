import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-center mt-10'>404 - Page Not Found</h1>
            <p className='text-center mt-4'>Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className='text-blue-500 hover:underline'>
                Go back home
            </Link>
        </div>
    );
};

export default NotFoundPage;