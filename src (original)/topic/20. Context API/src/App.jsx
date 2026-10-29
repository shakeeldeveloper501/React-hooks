import './App.css'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import ThemeProvider from './contexts/providers/ThemeProvider'
import UserProvider from './contexts/providers/UserProvider'

const App = () => {

  return (
    <div className='bg-red-500 p-10'>
     <ThemeProvider>
        <Navbar />
      </ThemeProvider>
        <Counter />
      <UserProvider>
        <Profile />
      </UserProvider>
    </div>
  )
}

export default App