import React, { useRef } from 'react';
import { useEffect } from 'react';
import styles from './navbar.module.css';


const Navbar = ({title, firebase, user}) => {
  useEffect(()=>{
    if(!user){
      logout.current.style.visibility = "hidden";
    }
    else{
      logout.current.style.visibility = "visible";
    }
  }, [])
  
  const logout = useRef();
  
  const handleLogout = () =>{
      firebase.googleLogout();
  }

  const handleBackPage = () => {
    console.log('뒤로');
  }

  return (
    <section className={styles.navbarContainer}>
      <button onClick={handleBackPage} className={styles.backPageBtn}> 뒤로 </button>
      <h1 className={styles.navbarTitle}>{title}</h1>
      <button className={styles.logoutBtn} onClick={handleLogout} ref={logout}>구글 로그 아웃</button>
    </section>
  )
}
export default Navbar;