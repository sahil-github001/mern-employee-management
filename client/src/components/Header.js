import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <>
            <Link to={"/"} className='text-decoration-none'>
                <h1 className='bg-primary text-white text-center p-3'>Employee Management System</h1>
            </Link>
        </>
    )
}

export default Header