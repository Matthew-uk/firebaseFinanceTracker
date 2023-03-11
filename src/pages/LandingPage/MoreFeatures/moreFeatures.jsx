import Card from "./Card/card";
import Card1 from "./../../../assets/images/card1.png";
import Card2 from "./../../../assets/images/card2.png";
import Card3 from "./../../../assets/images/card3.png";
import Card4 from "./../../../assets/images/card4.png";
import Card5 from "./../../../assets/images/card5.png";
import Card6 from "./../../../assets/images/card6.png";
import './moreFeatures.css';

export default function MoreFeatures() {
  return (
    <div className="moreFeatures">
      <div className="head">
        <h2>And many more features</h2>
      </div>
      <div className="body">
        <Card
          img={Card1}
          head={"Student dashboards"}
          p={
            "A central learning hub for your students track upcoming classes, quizzes."
          }
        />
        <Card
          img={Card2}
          head={"Engaging quizzes"}
          p={
            "Create engaging quizzes for students, enjoy automated marking."
          }
        />
        <Card
          img={Card3}
          head={"Resources library"}
          p={
            "Upload supplementary materials such as videos, docs, presentations."
          }
        />
        <Card
          img={Card4}
          head={"Class reminders"}
          p={
            "Send SMS/email reminders for your class via Klas Notify."
          }
        />
        <Card
          img={Card5}
          head={"Booking pages"}
          p={
            "Easily collect free or paid enrolments from students."
          }
        />
        <Card
          img={Card6}
          head={"Advanced analytics"}
          p={
            "Track your student attendance, learning progress, and more."
          }
        />
      </div>
    </div>
  );
}
