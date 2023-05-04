

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
        <br /> <br />
        <p>
          To celebrate the launch of the new docs and, more importantly, to
          clearly separate the old and the new content, we’ve moved to the
          shorter react.dev domain. The old reactjs.org domain will now redirect
          here. The old React docs are now archived at legacy.reactjs.org.
        </p>
        <p>
          All existing links to the old content will automatically redirect
          there to avoid “breaking the web”, but the legacy site will not get
          many more updates. Believe it or not, React will soon be ten years
          old. In JavaScript years, it’s like a whole century!
        </p>
        <p>
          We’ve refreshed the React homepage to reflect why we think React is a 
          great way to create user interfaces today, and updated the getting
          started guides to more prominently mention modern React-based frameworks.
          If you haven’t seen the new homepage yet, check it out!
        </p>
      </div>
    </>
  );
};


