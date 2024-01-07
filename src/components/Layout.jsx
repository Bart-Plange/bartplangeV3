// Layout.js
import Navigation from './navigation/Navigation'; // Adjust the path based on your project structure

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
