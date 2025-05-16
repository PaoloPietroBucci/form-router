

const formUrls = [
  "https://docs.google.com/forms/d/e/1FAIpQLSc6fg6CCCGRH2g4o7AAjaJSjlAwWf3_efA0Qvt1q2YPn2-2qg/viewform?usp=dialog",
  "https://docs.google.com/forms/d/e/1FAIpQLSemP_8wrkknlYnC8tNMHQM3RWMrFpx2OAYN1OxE33v88q6-ew/viewform?usp=dialog",
  "https://docs.google.com/forms/d/e/1FAIpQLSd6QnA9m5tBxUQPpUyxJag6L60Izl3OuT41_1asi2pCpH9C7A/viewform?usp=dialog",
  "https://docs.google.com/forms/d/e/1FAIpQLSeaU2Y59HbOyltc_-bdhdcDw7dKM1sp-4WQf6NMAFQqYbo6nQ/viewform?usp=dialog",
  "https://docs.google.com/forms/d/e/1FAIpQLSckwEbyYeyc9jlFRefJuO4DNwEv_kZ2iX3TGHJtsUYYb9a7Iw/viewform?usp=dialog"
];

const FormRouter = () => {
  console.log('Handling')
  const handleClick = async () => {
  const response = await fetch("https://script.google.com/macros/s/AKfycbzTEiCnkUggRV37vfyuJDnLdEUkJvjstXy8LNWgftNLVmwN7jVIPMsUUPGUUhV3Kl1TIQ/exec");
  const data = await response.json();
  const index = data.formIndex - 1;  // da 0 a 19
  window.location.href = formUrls[index];
};
  ;

  return (
<div style={{
  backgroundColor: '#001F3F',
  color: 'white',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
}}>

  <h2 style={{ fontSize: '2.2em', fontWeight: 'bold', marginBottom: '20px' }}>
    Welcome!
  </h2>

  <p style={{ fontSize: '1.2em', maxWidth: '700px', lineHeight: '1.6' }}>
    You will be shown a series of short financial posts.<br />
    For each one, please evaluate the overall market sentiment it conveys.
  </p>

  <p style={{ fontSize: '1.2em', maxWidth: '700px', lineHeight: '1.6', marginTop: '20px' }}>
    Choose <strong>bullish</strong> if you think the post reflects a <strong>positive</strong> market outlook,<br />
    <strong>neutral</strong> if it is balanced or unclear,<br />
    and <strong>bearish</strong> if it suggests a <strong>negative</strong> market expectation.
  </p>

  <button
    onClick={handleClick}
    style={{
      marginTop: '40px',
      padding: '14px 28px',
      fontSize: '18px',
      fontWeight: 'bold',
      backgroundColor: 'white',
      color: '#007BFF',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      transition: '0.2s',
    }}
    onMouseOver={e => e.target.style.backgroundColor = '#f0f0f0'}
    onMouseOut={e => e.target.style.backgroundColor = 'white'}
  >
    Go To Form
  </button>
</div>
  );
};

export default FormRouter;
