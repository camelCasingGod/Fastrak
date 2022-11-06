import logo from './logo.svg';
import './App.css';
import { WorldIDWidget } from '@worldcoin/id'


function App() {

  const signal = "100";

  function handleVerification(verificationResponse) {
    console.log(verificationResponse);
    let mRoot = verificationResponse.merkle_root;
    let nHash = verificationResponse.nullifier_hash;
    let proof = verificationResponse.proof;
    console.log(signal);
    // Fetch request would go here... localhost:3000 fetch request blocked by CORS
  }

  return (
    <div className="App">
      <header className="App-header">
        please verify using World ID to receive your venue pass
        <br></br>
        <br></br>
        <WorldIDWidget
          actionId="wid_staging_9c3b50f5324a3fff220f0b9222cf5521" // obtain this from developer.worldcoin.org
          signal={signal}
          enableTelemetry
          onSuccess={(verificationResponse) => handleVerification(verificationResponse)}
          onError={(error) => console.error(error)}
        />
      </header>
    </div>
  );
}

export default App;
