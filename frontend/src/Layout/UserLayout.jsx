
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'


const UserLayout = () => {
  return (
    <>
    <div className='w-full'>
        <Navbar/>
    <main>
        <Outlet>
            
        </Outlet>
    </main>

    
    <Footer/>
    </div>
    
    </>
  )
}

export default UserLayout
