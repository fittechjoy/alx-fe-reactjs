function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f7' }}>
      <h2 style={{ textAlign: 'center', color: 'darkslategray' }}>Welcome to My Profile</h2>
      <p style={{ marginTop: '10px', fontSize: '16px' }}>
        I love to visit <span style={{ fontWeight: 'bold', color: 'darkblue' }}>New York</span>,{" "}
        <span style={{ fontWeight: 'bold', color: 'darkred' }}>Paris</span>, and{" "}
        <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>Tokyo</span>.
      </p>
    </main>
  );
}

export default MainContent;