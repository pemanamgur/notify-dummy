import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import './App.css'
function App() {
 
  return (
    <div>
      <SignedOut>
        
      <div>
    {/* <h1> Sign in </h1> */}
      <SignInButton>
      <button className=" bg-black border-2  border-gray-300 rounded-md px-1 text-white">Sign in </button>
      </SignInButton>
    </div>
        <p>This content is public. Only signed out users can see this.</p>
        {/* <Navbar /> */}
      </SignedOut>
      <SignedIn>
        <div>
        <SignOutButton aftersignouturl='/' >
        <button className=" bg-black border-2  border-gray-300 rounded-md px-1 text-white">Sign Out </button>
          </SignOutButton> 
        </div>
        {/* <p>This content is private. Only signed in users can see this.</p> */}
          
      </SignedIn>
    </div>
  )
}
 
export default App
