import { Link, Outlet } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import Navbar from '../component/Navbar'
 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <header className="header">
        <div>
          <div>
            <p>Clerk + React + React Router App</p>
          </div>
          <SignedIn>
            <UserButton afterSignOutUrl='/sign-in' />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
          {/* <Navbar /> */}
        </div>
      </header>
      <main>
        
        <Outlet />
      </main>
    </ClerkProvider>
  )
}