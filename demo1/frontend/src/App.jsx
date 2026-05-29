import { AppRoutes } from './routes/AppRoutes'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

console.log("store",store)

function App (){

  return(
    <div className='flex justify-center items-center h-screen bg-blue-200'>
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
        </div>
  )
}

export default App