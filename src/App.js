import logo from './logo.svg';
import './App.css';
import { WorldIDWidget } from '@worldcoin/id'
import { QRCodeCanvas } from "qrcode.react";

var proof;

function App() {

  const signal = String(Math.random());

  function handleVerification(verificationResponse) {
    console.log(verificationResponse);
    let mRoot = verificationResponse.merkle_root;
    let nHash = verificationResponse.nullifier_hash;
    let proof = verificationResponse.proof;
    console.log(mRoot);
    console.log(nHash);
    console.log(proof);
    document.getElementById("qrCode").style.display = "block";
    document.getElementById("verify").style.display = "none";
    document.getElementById("pass").style.display = "block";
    // Fetch request would go here... localhost:3000 fetch request blocked by CORS
    // I don't have access to an orb, so I didn't get a chance to verify my world ID for testing purposes
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id="verify">Welcome! Please verify using World ID to receive your venue pass:</p>
        <br></br>
        <WorldIDWidget
          actionId="wid_staging_9c3b50f5324a3fff220f0b9222cf5521" // obtain this from developer.worldcoin.org
          signal={signal}
          enableTelemetry
          onSuccess={(verificationResponse) => handleVerification(verificationResponse)}
          onError={(error) => console.error(error)}
        />
        <br></br>
        <br></br>
        <QRCodeCanvas
          hidden
          id="qrCode"
          value={signal}
          size={300}
          level={"H"}
        />
        <p hidden id="pass">YOUR VENUE PASS</p>
      </header>
    </div>
  );
}

export default App;
