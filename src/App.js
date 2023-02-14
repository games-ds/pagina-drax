import './App.css';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

//ICONOS
import { FaDiscord, FaTiktok, FaPatreon, FaFire } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

function App() {


  // ESTADOS 

  const [navScroll, setNavScroll] = useState('nav navDown');

  // HACE QUE LA NAVEGACION SE OCULTE Y MUESTRE AUTOMATICAMENTE

  let lastScroll = 0;

	window.addEventListener('scroll', () => {
		const currentScroll = window.pageYOffset;

		if (document.documentElement.scrollTop === 0) {
			setNavScroll('navAppContainer navDown')
		}

		if (currentScroll > lastScroll && navScroll === 'navAppContainer navDown') {
			setNavScroll('navAppContainer');
		} else if (currentScroll < lastScroll && navScroll === 'navAppContainer') {
			setNavScroll('navAppContainer navDown');
		}
		lastScroll = currentScroll;
	});




  return (
    <div className="App">

      {/* NAVBAR */}
      <div className={navScroll}>

        <nav className='navApp'>
          <li className="ItemNavApp">iniciar sesion</li>
          <li className="ItemNavApp">crear cuenta</li>

          <li className="itemNav itemNavUs">
            <div className="btnUserContainer">
              <p className="btnUser">
                <div className="redesDrop">
                  <AiOutlineDown className='downIconApp'/>
                  usuario
                </div>
              </p>

              <div className="dropdown">
                <div className="dropdownElement">
                  <p>
                    <FaDiscord size={20} className='discordIcon iconApp' />
                    Discord
                  </p>
                </div>
                <div className="dropdownElement">
                  <p>
                    <FaPatreon size={20} className='patreonIcon iconApp' />
                    Patreon
                  </p>
                </div>
                <div className="dropdownElement">
                  <p>
                    <FaTiktok size={20} className='tiktokIcon iconApp' />
                    Tiktok
                  </p>
                </div>
                <div className="dropdownElement">
                  <p>
                    <FaFire size={20} className='lovenseIcon iconApp' />
                    Lovense
                  </p>
                </div>
              </div>

            </div>
          </li>

        </nav>

      </div>

      {/* OUTLET */}
      <Outlet />

      {/* FOOTER */}
      <div>

      </div>


    </div>
  );
}

export default App;
