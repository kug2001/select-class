import React, {useState} from 'react';
import Navbar from '../navbar/navbar'
import Subject from '../subject/subject';

const ClassList = ({firebase, user}) => {
  const title = "선택특강 리스트";
  const [list, setLset] = useState([
    '기도강의',
    '기도강의',
    '기술강의',
    '성경강의',
    '오락강의',
    '이성교제',
  ]);
  firebase.readData();

  return(
    <>
      <Navbar title={title} firebase={firebase} user={user} />
      <ul>
        {list.map((item) => {
          return(
            <li>
              <Subject title={item}/>
            </li>
          )  
        })}
      </ul>
    </>
  )
}

export default ClassList;