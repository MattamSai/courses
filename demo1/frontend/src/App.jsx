import Home from './MainPage/Home'
import Navbar from './NavBar/Navbar'
import Sidebar from './NavBar/Sidebar'

function App (){

  return(
    <div className='flex h-screen'>
      <Sidebar/>
      <div className='flex flex-col flex-1'>

        <Navbar/>

        <div className='flex-1 bg-gray-100 p-5'>
          <Home/>
        </div>

      </div>

    </div>
  )
}

export default App