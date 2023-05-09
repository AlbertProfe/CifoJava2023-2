

export default function Layout() {

  return (
    <>
      <h1 style={{ padding: "20px", backgroundColor: "#E8E8E8" }}>Home</h1>
      {/* Grid semantic component calling PersonCard component from map and spread operator
       https://react.semantic-ui.com/collections/grid/ */}
      <div style={{ padding: "20px", backgroundColor: "#F0F0F0" }}>
        <h2>New site, new domain, new homepage</h2>
        <h3>First, a little bit of housekeeping.</h3>
        <a href="https://react.dev/blog/2023/03/16/introducing-react-dev">
          react.dev{" "}
        </a>
        
      </div>
    </>
  );
};


