import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './enroll.module.css';

const EnrollPost = ({firebase, user, path, post}) => {

  const history = useHistory();

  const [checkId, setCheckId] = useState('');

  useEffect(()=>{
    const setRef = firebase.setDatabaseRef(path).child('member').child(user);
      firebase.onDatabase(setRef)
        .then((data)=> {
          if(!data.exists()){
            setCheckId(false);
            return;
          }
          setCheckId(true);
        })
  }, [])

  const userNameValue = useRef();
  const campusValue = useRef();
  const yearValue = useRef();

  const handleEnrollUser = () => {
    const userName = userNameValue.current.value;
    const campus = campusValue.current.value;
    const year = yearValue.current.value;

    if(!userName || !campus || !year){
      alert('정보를 입력해주세요');
      return;
    }
    else {
      setEnrollUser(userName, campus, year);
    }
  }
  const setEnrollUser = (userName, campus, year) => {
    const item = {
      'userName' : userName,
      'campus' : campus,
      'year' : year,
    };
    if(!checkId){
      const setRef = firebase.setDatabaseRef(path).child('member').child(user);
      firebase.setDatabase(setRef, item)
        .then((data)=>{
          alert(data);
          setCheckId(true);
          clickBtn();
        });
      return;
    }
    alert('이미 등록되어 있습니다.');
  }

  const handleCancleUser = () => {
    if(checkId){
      const setRef = firebase.setDatabaseRef(path).child('member').child(user);
      firebase.removeDatabase(setRef)
        .then((data)=>{
          alert(data);
          setCheckId(false);
          clickBtn();
          
        });
      return;
    }
    alert('등록되어 있지 않습니다.');
  }

  const clickBtn = () => {
    post();
  }

  return (
    <div className={styles.postBox}>
      <label>
          이 &emsp; 름 : &ensp;
          <input type="text" ref={userNameValue} placeholder="ex)홍길동"/>
        </label>
        <label>
          캠 퍼 스 : &ensp;
          <input type="text" ref={campusValue} placeholder="ex)00대학교"/>
        </label>
        <label>
          학 &emsp; 번 : &ensp;
          <input type="text" ref={yearValue} placeholder="ex)21학번" / >
        </label>
        <div className={styles.btnBox}>
          <button onClick={handleEnrollUser}>등록하기</button>
          <button onClick={handleCancleUser}>취소하기</button>
        </div>
    </div>
  )
}

export default EnrollPost;