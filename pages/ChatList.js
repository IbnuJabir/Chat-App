import { NavLink } from 'react-router-dom';
import profile_pic from '../Images/logo.jpg'
export  default function ChatList(){
  let groupName = "Ibnu Jabir";
  return(
    <div className="chat-nav">
        <h3>chats</h3>
        <div className="groupName">
          <NavLink to="/InChat">
          <img src={profile_pic} className="profile-pic"  alt="profile-pic"/>
          { groupName }
          </NavLink>
        </div>
      </div>
    )
}