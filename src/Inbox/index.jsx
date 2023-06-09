import React from "react";
import './style.css'





const Inbox = ({ account, messages }) => {
  const Unread = () => {
    return <div className="unread">Nepřečtených zpráv: {messages}</div>

  }

  const NoUnread = () => {
    return <div className="no-unread">Žádné nepřečtené zprávy</div>
  }

  return (
    <div className="inbox">
      <div className="account">{account}</div>
      {messages > 0 ? <Unread /> : <NoUnread />}
    </div>
  )

}

export default Inbox