// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>madda Guduv ra erri puka</h1>
//     </div>
//   );
// }

// export default App;








// import React, { useState } from 'react';
// import TGPA from './components/TGPA';
// import CGPA from './components/CGPA';

// const App = () => {
//   const [activeView, setActiveView] = useState(null); // State to track active view

//   const showTGPA = () => setActiveView('tgpa');
//   const showCGPA = () => setActiveView('cgpa');
//   const goBack = () => setActiveView(null); // Go back to the main screen

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       minHeight: '100vh', 
//       fontFamily: 'Arial' 
//     }}>
//       <div style={{ padding: "20px", flex: 1 }}>
//         <h1>
//           <center>CGPA & TGPA Calculator</center>
//         </h1>
//         <div style={{ textAlign: "center", marginBottom: "40px" }}>
//           {activeView === null && (
//             <>
//               <button
//                 onClick={showTGPA}
//                 style={{
//                   margin: "10px",
//                   padding: "10px 20px",
//                   fontSize: "16px",
//                   backgroundColor: "#4caf50",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: "4px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Calculate TGPA
//               </button>
//               <button
//                 onClick={showCGPA}
//                 style={{
//                   margin: "10px",
//                   padding: "10px 20px",
//                   fontSize: "16px",
//                   backgroundColor: "#2196f3",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: "4px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Calculate CGPA
//               </button>
//             </>
//           )}
//           {activeView !== null && (
//             <button
//               onClick={goBack}
//               style={{
//                 margin: "10px",
//                 padding: "10px 20px",
//                 fontSize: "16px",
//                 backgroundColor: "#f44336",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               Back
//             </button>
//           )}
//         </div>
//         <div>
//           {activeView === 'tgpa' && (
//             <div>
//               <h2>Calculate TGPA</h2>
//               <TGPA />
//             </div>
//           )}
//           {activeView === 'cgpa' && (
//             <div>
//               <h2>Calculate CGPA</h2>
//               <CGPA />
//             </div>
//           )}
//         </div>
//       </div>

//       <footer style={{
//         backgroundColor: '#333',
//         color: 'white',
//         textAlign: 'center',
//         padding: '20px 0',
//         position: 'relative',
//         bottom: '0',
//         width: '100%',
//       }}>
//         <p>Made by Murtyy Mohan</p>
//         <div>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
//             Facebook
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
//             Twitter
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
//             LinkedIn
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;























import React, { useState, useRef } from 'react';
import TGPA from './components/TGPA';
import CGPA from './components/CGPA';

const App = () => {
  const [activeView, setActiveView] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const inputsRef = useRef([]);

  const showTGPA = () => setActiveView('tgpa');
  const showCGPA = () => setActiveView('cgpa');
  const goBack = () => setActiveView(null);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const verifyCode = () => {
    if (otp.join('') === '1234') {
      setIsVerified(true);
      setError('');
    } else {
      setError('Invalid verification code');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      fontFamily: 'Arial' 
    }}>
      <div style={{ padding: "20px", flex: 1 }}>
        <h1>
          <center>CGPA & TGPA Calculator</center>
        </h1>

        {/* 🔐 VERIFICATION SCREEN */}
        {!isVerified && (
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3>Enter 4-Digit Verification Code</h3>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="tel"                 // 📱 mobile numeric keypad
  inputMode="numeric"        // ✅ forces numbers
  pattern="[0-9]*"           // ✅ restricts digits
  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  style={{
                    width: '45px',
                    height: '45px',
                    fontSize: '18px',
                    textAlign: 'center',
                    border: '2px solid #4caf50',
                    borderRadius: '4px',
                  }}
                />
              ))}
            </div>

            <button
              onClick={verifyCode}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#4caf50",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Verify
            </button>

            {error && (
              <p style={{ color: 'red', marginTop: '10px' }}>
                {error}
              </p>
            )}

            <h1 style={{ marginTop: '30px', fontSize: '22px', color: '#555' }}>
              Note: Please enter the correct verification code to access
              the TGPA and CGPA calculators.
            </h1>
              <h1 style={{ marginTop: '30px', fontSize: '22px', color: '#555' }}>
              Modda Guduv ra Erri Puka
            </h1>
          </div>
        )}

        {/* ✅ MAIN CONTENT (UNCHANGED) */}
        {isVerified && (
          <>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              {activeView === null && (
                <>
                  <button
                    onClick={showTGPA}
                    style={{
                      margin: "10px",
                      padding: "10px 20px",
                      fontSize: "16px",
                      backgroundColor: "#4caf50",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Calculate TGPA
                  </button>
                  <button
                    onClick={showCGPA}
                    style={{
                      margin: "10px",
                      padding: "10px 20px",
                      fontSize: "16px",
                      backgroundColor: "#2196f3",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Calculate CGPA
                  </button>
                </>
              )}

              {activeView !== null && (
                <button
                  onClick={goBack}
                  style={{
                    margin: "10px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#f44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
              )}
            </div>

            <div>
              {activeView === 'tgpa' && (
                <div>
                  <h2>Calculate TGPA</h2>
                  <TGPA />
                </div>
              )}
              {activeView === 'cgpa' && (
                <div>
                  <h2>Calculate CGPA</h2>
                  <CGPA />
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <footer style={{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
        position: 'relative',
        bottom: '0',
        width: '100%',
      }}>
        <p>Made by D Rahim</p>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
