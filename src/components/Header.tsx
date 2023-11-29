import Link from 'next/link'
 
function Header() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
     
      <li>
        <Link href="/About">About Us</Link>
      </li>
      
    </ul>
  )
}
 
export default Header