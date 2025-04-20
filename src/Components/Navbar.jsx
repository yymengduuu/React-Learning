import spencer from '../assets/spencer.jpeg';

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={spencer} alt="Spencer's Profile" width="50" style={{ borderRadius: '50%' }} />
        <span>Personal Introduction (Beginner Software Engineer)</span>
      </nav>
    </header>
  );
}