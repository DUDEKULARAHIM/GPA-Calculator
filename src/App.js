import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>madda Guduv ra erri puka</h1>
    </div>
  );
}

export default App;








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
