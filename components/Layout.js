import Meta from "./Header/Meta";

function Layout({ children }) {
  return (
    <div className="">
      <Meta />
      {children}
    </div>
  );
}

export default Layout;
