import React from "react";

function NotificationCard(p)
{
    return(
        <>
                  <div className="col-xl-3 col-md-6 mb-4 notification-card" onClick={() => p.handleCardClick(p.data.value)}>
                            <div className={`card shadow h-100 py-2 border-left-${p.data.color}`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-uppercase mb-1 text-${p.data.color}`}>
                                               {p.data.cardTitle}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{p.data.currency}{p.data.value}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas text-gray-300 ${p.data.icon}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    );
}
export default NotificationCard;