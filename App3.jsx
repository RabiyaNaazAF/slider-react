import React from "react";
import SlidingCarousel from "./component/SlidingCarousel";

export default function App() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem", backgroundColor: "#f7f7f7" }}>
      {/* Heading */}
      <h1 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>
        Multi‑Image Slider Demo
      </h1>

      {/* Intro Section */}
      <section style={{ textAlign: "center", marginBottom: "2rem", maxWidth: "700px", margin: "0 auto", color: "#555" }}>
        <p>
          Welcome to the multi-image slider project built in React! This slider showcases a beautiful, scrollable collection of images. You can use it in portfolios, product showcases, or any image gallery on the web.
        </p>
      </section>

      {/* Carousel Component */}
      <SlidingCarousel />

      {/* Features Section */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ textAlign: "center", color: "#444" }}>🚀 Features</h2>
        <ul style={{ maxWidth: "600px", margin: "1rem auto", color: "#444", lineHeight: "1.8" }}>
          <li>Responsive and mobile-friendly slider</li>
          <li>Reusable React component</li>
          <li>Easy to customize and extend</li>
          <li>Built completely from scratch with React</li>
        </ul>
      </section>

      {/* About Developer */}
      <section style={{
        marginTop: "3rem",
        padding: "1.5rem",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
      }}>
        <h3>👩‍💻 Developed by Rabiya Naaz A.F.</h3>
        <p>
          A React enthusiast from Government Engineering College Ramanagar.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <a href="https://github.com/RabiyaNaazAF" target="_blank" style={{ marginRight: "1rem", color: "#333" }}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-link" target="_blank" style={{ color: "#333" }}>
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", marginTop: "4rem", color: "#aaa", fontSize: "14px" }}>
        © 2025 Rabiya Naaz A.F. | All Rights Reserved
      </footer>
    </main>
  );
}
