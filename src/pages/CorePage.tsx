import { Link } from "react-router";

const CorePage = () => {
  return (
    <>
      <div>Core Page Content</div>
      <div>
        <ul>
          <li>
            <Link to="/">Core</Link>
          </li>
          <li>
            <Link to="/fallout-76/mod/current-install">
              Mod Current Install
            </Link>
          </li>
          <li>
            <Link to="/fallout-76/mod/install-guide">Mod Install Guide</Link>
          </li>
          <li>
            <Link to="/fallout-76/guide">Guide Init Setting</Link>
          </li>
          <li>
            <Link to="/fallout-76/collection/mischief-night">
              Event Mischief Night
            </Link>
          </li>
          <li>
            <Link to="/fallout-76/collection/spooky-scorched">
              Event Spooky Scorched
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CorePage;
