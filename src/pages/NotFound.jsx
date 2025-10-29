import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="card center">
      <h2>404 - Page Not Found</h2>
      <p>
        Go back to <Link to="/">Home</Link>
      </p>
    </div>
  );
}
