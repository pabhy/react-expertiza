import ReactOnRails from 'react-on-rails';

import App from '../bundles/Expertiza/App';
import Main from '../bundles/Expertiza/components/MainComponent';
import Header from '../bundles/Expertiza/components/HeaderComponent';
import Footer from '../bundles/Expertiza/components/FooterComponent';
import Login from '../bundles/Expertiza/components/login/Login';
import PasswordForgotten from '../bundles/Expertiza/components/passwordForgotten/PasswordForgotten'
import PasswordForgottenUpdate from '../bundles/Expertiza/components/passwordForgotten/passwordForgottenUpdate/PasswordForgottenUpdate'
import Logout from '../bundles/Expertiza/components/logout/Logout'
import StudentTaskView from '../bundles/Expertiza/components/studentTaskView/StudentTaskView'
// import ProfileComponent from './ProfileComponent';
import StudentTeamComponent from '../bundles/Expertiza/components/studentTeamComponent/StudentTeamComponent'
import ChangeHandleComponent from '../bundles/Expertiza/components/changeHandle/ChangeHandleComponent';
import SignUpSheetComponent from '../bundles/Expertiza/components/signUpSheet/SignUpSheetComponent'
import SubmittedContentEditComponent from '../bundles/Expertiza/components/submittedContentEdit/SubmittedContentEditComponent';
import StudentQuizzesComponent from '../bundles/Expertiza/components/studentQuizzes/StudentQuizzesComponent';
import GradesViewTeamComponent from '../bundles/Expertiza/components/gradesViewTeam/GradesViewTeamComponent';
import GradesViewMyScores from '../bundles/Expertiza/components/gradesViewMyScores/GradesViewMyScores';
import StudentReviewListComponent from '../bundles/Expertiza/components/studentReviewList/StudentReviewListComponent';
import SuggestionsComponent from '../bundles/Expertiza/components/suggestions/SuggestionsComponent';
import responseViewComponent from '../bundles/Expertiza/components/responseView/responseViewComponent';
import ResponseEditComponent from '../bundles/Expertiza/components/responseView/responseEdit/ResponseEditComponent';
import StudentTaskUpload from '../bundles/Expertiza/components/studentTaskUpload/StudentTaskUpload';
import Profile from '../bundles/Expertiza/components/ProfileComponent';


// This is how react_on_rails can see the Expertiza in the browser.
ReactOnRails.register({
    App,
    Main,
    Header,
    Footer,
    Login,
    Profile,
    StudentList,
    SignupSheet,
    PasswordForgotten,
    PasswordForgottenUpdate,
    Logout,
    StudentTaskUpload,
    StudentTaskView,
    StudentTeamComponent,
    ChangeHandleComponent,
    SignUpSheetComponent,
    SubmittedContentEditComponent,
    StudentQuizzesComponent,
    GradesViewTeamComponent,
    GradesViewMyScores,
    StudentReviewListComponent,
    SuggestionsComponent,
    responseViewComponent,
    ResponseEditComponent
});
