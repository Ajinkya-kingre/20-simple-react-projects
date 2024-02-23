import React, { useState } from "react";
import "../qr-code/style.css";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQrCode(input);
  }
  return (
    <div>
      <div className="tt">
        <h1>QR code generator</h1>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr code"
          placeholder="Enter Your Value here!"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>
      <div className="pp">
        <QRCode  className="qrcode" id="qr-code" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
