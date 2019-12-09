import ReactOnRails from 'react-on-rails';

import App from '../bundles/Expertiza/components/App';
import Header from '../bundles/Expertiza/components/Common/HeaderComponent';
import Footer from '../bundles/Expertiza/components/Common/FooterComponent';
import Login from '../bundles/Expertiza/components/Authentication/Login';


// This is how react_on_rails can see the Expertiza in the browser.
ReactOnRails.register({
    App,
    Header,
    Footer,
    Login
});
