import React,{useState} from "react";
import NotificationCard from './notificationcard';
 
function Dashboard() {
let notificationcard = [
    {
        cardTitle: "EARNINGS (MONTHLY)",
        value: 40000,
        currency: "$",
        color: "primary",
        icon: "fa-calendar",
        isProgress: false
    },
    {
        cardTitle: "EARNINGS (ANNUAL)",
        value: 215000,
        currency: "$",
        color: "success",
        icon: "fa-dollar-sign",
        isProgress: false
    },
    {
        cardTitle: "TASKS",
        value: 50,
        color: "info",
        icon: "fa-clipboard-list",
        isProgress: true
    },
    {
        cardTitle: "Pending Requests",
        value: 18,
        color: "warning",
        icon: "fa-comments",
        isProgress: false
    }
]

const [currentCard, Updatecard] = useState("None");

let handleCardClick = (value) => {
    Updatecard(value)
}

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
            {notificationcard.map((card) =>
            {
                return <NotificationCard data={card} handleCardClick={handleCardClick}></NotificationCard>
            })
        }
      </div>
      {currentCard}
    </>
  );
}
export default Dashboard;