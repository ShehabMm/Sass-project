import './header.css'
const Head = () => {
  return (
    <>
      <div className="header">
        <div className="sides">
          <a href="#" className="logo">
            BLOG
          </a>
        </div>
        <div className="sides">
          {" "}
          <a href="#" className="menu">
            {" "}
          </a>
        </div>
        <div className="info">
          <h4>
            <a href="#category">UI DESIGN</a>
          </h4>
          <h1>KEN BURNS HEADERS ARE THE BEST</h1>
          <div className="meta">
            <a
              href="https://twitter.com/nodws"
              target="_b"
              className="author"
            ></a>
            <br />
            By{" "}
            <a href="https://twitter.com/nodws" target="_b">
              James Nodws
            </a>{" "}
            on May 30, 2019
          </div>
        </div>
      </div>
      <section className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl
          turpis, porttitor et finibus id, viverra a metus. Praesent non ante
          sed orci posuere varius quis sit amet dui. Cras molestie magna orci,
          id gravida dolor molestie in. Duis sollicitudin turpis quis tortor
          egestas, ut ultrices nisl elementum. Vestibulum sed ipsum eget nulla
          laoreet cursus in ac sem. Integer a suscipit justo, quis aliquam
          sapien. Maecenas et tellus nibh. Vivamus tincidunt eros id commodo
          pellentesque.
        </p>
      </section>
    </>
  );
};

export default Head;
