// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import 'bootstrap/js/dist/collapse.js';
import { BookList } from '../components/bookList'

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          FED Assessment
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className="jumbotron text-center">
      <h1 className="display-4">Welcome to FED Assessment</h1>
      <p className="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea repellat
        aliquam quas aliquid, doloribus deleniti minima perferendis rem laborum
        ullam voluptatibus odio impedit consequatur rerum nobis libero quos
        enim. Eius.
      </p>
    </header>
  );
}



function Footer() {
  return (
    <footer className="container-fluid bg-dark text-light text-center py-3">
      <p>&copy; 2024 FED Assessment. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <BookList />
      <div className="py-5"></div>
      <Footer />
    </>
  );
}

export default App;
