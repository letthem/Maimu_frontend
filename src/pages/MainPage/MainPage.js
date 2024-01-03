import React from "react";
import "./MainPage.css";
import Locker from "../../components/Locker/Locker";
import SmallLogoImg from "../../images/SmallLogo.svg";
import ProfileImg from "../../images/Profile.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const MainPage = () => {

  const [clickedButton, setClickedButton] = useState(null);
  
  const navigate = useNavigate();


  const addButtonClick = () => {
    setClickedButton('add');
};

const editButtonClick = () => {
  setClickedButton('edit');
};

const delButtonClick = () => {
  setClickedButton('delete');
};

const MoveToMyPage =() => {
  navigate("/MyPage");
};

  return (
    <div className="MainPage">
      <div className="Header">
        <img className="Profile" alt="ProfileButton" src={ProfileImg} onClick={MoveToMyPage}/>
        <img className="SmallLogo" alt="" src={SmallLogoImg}/>
      </div>
      
      <div className="Locker">
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        </div>

        <div className="EditGroup">
          <button className={`EditButton ${clickedButton === 'add' ? 'clicked' : ''}`} onClick={addButtonClick}>
            추가
          </button>
          <button className={`EditButton ${clickedButton === 'edit' ? 'clicked' : ''}`} onClick={editButtonClick}>
            편집
          </button>
          <button className={`EditButton ${clickedButton === 'delete' ? 'clicked' : ''}`} onClick={delButtonClick}>
            삭제
          </button>
          
        </div>
        
    </div>
  );
};


export default MainPage;
