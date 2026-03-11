
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Beautiful Website</h1>
        <p>This is a stunning React app with simple yet elegant CSS</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <div className="card-icon">🚀</div>
          <h3>Fast Performance</h3>
          <p>Built with React for optimal performance and smooth user experience.</p>
        </div>

        <div className="card">
          <div className="card-icon">💅</div>
          <h3>Beautiful Design</h3>
          <p>Simple yet elegant CSS with gradients, animations, and responsive layout.</p>
        </div>

        <div className="card">
          <div className="card-icon">🔄</div>
          <h3>CI/CD Ready</h3>
          <p>Automatically deployed to GitHub Pages with every push to main branch.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 My Beautiful Website. Built with React and ❤️</p>
      </footer>
    </div>
  );
}

export default App;
