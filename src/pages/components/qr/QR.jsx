import React from "react";
import QRCode from "react-qr-code";

const QR = ({qrValue}) => {
  return <QRCode value={qrValue} />;
};

export default QR;
