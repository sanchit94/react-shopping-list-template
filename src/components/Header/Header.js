import React, {
  Component
} from 'react';
import { Link } from 'react-router-dom';

//@TODO convert it later to array with loop.

// or
const Link1 = props => <Link to="/" {...props} />
// <Button component={Link1}>Button</Button>

const menu = [
  ['/', 'Home'],
  ['/profile', 'Profile'],
  ['/new', 'Create New Grocery'],
  ['/display', 'Display????'],
  ['/departments', 'Departments']

];

class Header extends Component {

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                          <Link to='/'>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to='/profile'>
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to='/new'>
                            New
                          </Link>
                        </li>

                        <li>
                          <Link to='/display'>
                            display
                          </Link>
                        </li>
                        <li>
                          <Link to='/departments'>
                            departments
                          </Link>
                        </li>
                        <li>
                          <Link to='/examples'>
                            examples
                          </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
