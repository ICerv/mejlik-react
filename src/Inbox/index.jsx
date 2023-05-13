import React from "react";
import './style.css'


const Inbox = ({ account, messages }) => {
  return (
    <div className="inbox">
      <div className="account">{account}</div>
      {messages > 0 ? (
        <div className="unread">Nepřečtených zpráv: {messages}</div>
      ) : (
        <div className="no-unread">Žádné nepřečtené zprávy</div>
      )}
    </div>
  )

}

export default Inbox