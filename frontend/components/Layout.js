import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        style={{
          color: "rgb(45, 55, 72)"
        }}
      >
        {children}
      </main>
    </>
  );
}
