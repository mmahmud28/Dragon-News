import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format, compareAsc } from "date-fns";


const Header = () => {
    return (
        <div className='text-center py-8 mx-auto space-y-3'>
            <Image width={200} height={100} src={logo} alt="Logo" />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(2014, 1, 11), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;