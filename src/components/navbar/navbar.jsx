import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './navbar.module.css';


const Navbar = ({title, firebase, user}) => {

  const history = useHistory();

  useEffect(()=>{
    if(!user){
      logout.current.style.visibility = "hidden";
      return;
    }
    else{
      logout.current.style.visibility = "visible";
      return;
    }
  }, [user])
  
  const logout = useRef();
  
  const handleLogout = () =>{
      firebase.googleLogout()
        .then(() => {
          alert('로그아웃 되었습니다');
        })
  }

  const handleBackPage = () => {
    history.push('/class-list');
  }

  return (
    <section className={styles.navbarContainer}>
      <span className={styles.btnBox}>
        <button onClick={handleBackPage} className={styles.backPageBtn}> 뒤로 </button>
      </span>
      <h1 className={styles.navbarTitle}>{title}</h1>
      <span className={styles.btnBox}>
        <button className={styles.logoutBtn} onClick={handleLogout} ref={logout}>Logout</button>
      </span>
    </section>
  )
}
export default Navbar;