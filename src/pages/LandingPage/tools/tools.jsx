// import { FaAsterisk } from "react-icons/fa";
import Pic1 from './../../../assets/images/tool1.png';
import Pic2 from './../../../assets/images/tool2.png';
import Pic3 from './../../../assets/images/tool3.png';
import "./tools.css";
export default function Tools() {
  return (
    <div className="tools">
      <div className="head">
        <h2>One Platform to power your online academy</h2>
      </div>
      <div className="body">
        <div className="left">
          <img src={Pic1} alt="Tester" />
        </div>
        <div className="right">
          <h2>Host a fun and engaging experience</h2>
          <div className="list">
            <ul>
              <li>Interact in new ways with polls, emojis, Q+A</li>
              <li>Automate class reminders with Gcalendar</li>
              <li>Automate note-taking with Fireflies AI</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="left">
          <img src={Pic2} alt="Tester" />
        </div>
        <div className="right">
          <h2>Engage your learners</h2>
          <div className="list">
            <ul>
              <li>Create cohorts to help leaners share ideas and get feedback</li>
              <li>Direct messages and group chats with ease</li>
              <li>Searchable student directory and rich profiles</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="left">
          <img src={Pic3} alt="Tester" />
        </div>
        <div className="right">
          <h2>Built for Teamwork</h2>
          <div className="list">
            <ul>
              <li>Invite unlimited instructors, assign roles</li>
              <li>Add instructors to classes</li>
              <li>Manage all your team's classes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
