import Home from './MainPage/Home'
import UserRegister from './MainPage/RegisterPage'
import Navbar from './NavBar/Navbar'
import Sidebar from './NavBar/Sidebar'

function App (){

  return(
    <div className='flex justify-center items-center h-screen bg-blue-200'>
      <UserRegister/>
      {/* <Sidebar/> */}
      {/* <div className='flex flex-col flex-1'> */}

        {/* <Navbar/> */}

        {/* <div className='flex-1 bg-gray-100 p-5'> */}
          {/* <Home/> */}
        </div>

      // </div>

    // </div>
  )
}

export default App