import Navbar from '@/components/shared/Navbar';
import React from 'react';

const AugthLayout = ({ children }) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};

export default AugthLayout;