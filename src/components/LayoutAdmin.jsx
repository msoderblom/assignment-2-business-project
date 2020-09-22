import React from "react";

export default function LayoutAdmin({ children }) {
  return (
    <div>
      <header>
        <h1>Business Project</h1>
      </header>
      <aside>
        <nav>
          <ul>
            <li>Create customer</li>
          </ul>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
