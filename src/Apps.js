import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AssessmentInstructionsPage from './page/Assessment/AssessmentInstructions';
import AssessmentQuizPage from './page/Assessment/AssessmentQuiz';
// import AssessmentRootLayout from './page/Assessment/AssessmentRoot';
import AssessmentSubmissionPage from './page/Assessment/AssessmentSubmission';
import DashboardPage from './page/Dashboard';
import ErrorPage from './page/Error';
import NotificationPage from './page/Notification';
import ProfilePage from './page/Profile';
import RootLayout from './page/Root';
import ScorePage from './page/Score';
import SignInPage from './page/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'home',
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'assessment', element: <AssessmentInstructionsPage /> },
      { path: 'assessment/quiz', element: <AssessmentQuizPage /> },
      { path: 'assessment/submission', element: <AssessmentSubmissionPage /> },
      { path: 'notification', element: <NotificationPage /> },
    ],
  },
  { path: 'profile', element: <ProfilePage /> },
  { path: 'score', element: <ScorePage /> },
]);

function Apps() {
  return <RouterProvider router={router} />;
}

export default Apps;
