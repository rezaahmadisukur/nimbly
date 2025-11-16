import Navbar from "./Navbar";

interface TypeProps {
  children?: React.ReactNode;
}

const App = ({ children }: TypeProps) => {
  return (
    <div>
      <Navbar />

      <main className="w-11/12 mt-10 min-h-screen mx-auto">{children}</main>
    </div>
  );
};

export default App;
