import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="font-display italic text-7xl">404</h1>
      <Link to="/" className="rounded-full bg-text-primary text-bg px-7 py-3.5 text-sm">Back home</Link>
    </div>
  );
}
