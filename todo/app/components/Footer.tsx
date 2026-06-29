"use client"

export default function Footer() {
  return(
    <footer className="flex justify-between bg-secondary-1/30 backdrop-blur-md p-4 h-24 items-center">
      <div className="text-text-primary cursor-default">Todo App © 2026 Rajarshi</div>
      <div>
        <a href="https://github.com/rajarshi-tech" target="_blank" rel="noopener noreferrer"
          className="text-text-secondary
          hover:underline
          active:underline active:text-text-muted"
        >
          Github
        </a>
      </div>
    </footer>
  );
}