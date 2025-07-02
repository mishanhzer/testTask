import React from "react"
import { whatsAppImg } from "../../assets/logo/logo"

export const WhatsApp = () => {
  return (
    <div>
      <a href="https://wa.me/79222636130">
        <img className={`w-[60px] fixed bottom-10 right-10 animate-bounce`} src={whatsAppImg} alt="" />
      </a>
    </div>
  )
}

