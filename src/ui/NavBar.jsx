//Navbar para la aplicacion

import { useState } from "react"

export const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
    console.log(toggle)
  }

  return (

    <>
      <nav className="h-11 flex bg-white w-full justify-between items-center px-2 shadow-md sticky top-0">

        <div className=" flex items-center">
          <img src="https://i.ibb.co/59jC2Nd/logo.png" alt="logo" className="w-9" />
          <span>Manualidades Chapis</span>
          
        </div>

        <div className="flex">
          <button onClick={handleClick} className='lg:hidden'>
            <svg className="w-5 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>
          <ul className='lg:flex hidden lg:visibleo gap-2 '>
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>Contacto</li>
          </ul>
        </div>

        

      </nav>

      <div className="">
        <ul className={`lg:hidden flex justify-around bg-white  w-full ${toggle ? 'hidden ' : 'fixed'}`}>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Contacto</li>
        </ul>
      </div>
    
    </>
  )
}

{/* <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg> */}
