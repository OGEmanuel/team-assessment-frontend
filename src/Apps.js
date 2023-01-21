import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AssessmentInstructionsPage from './page/Assessment/AssessmentInstructions';
import AssessmentQuizPage from './page/Assessment/AssessmentQuiz';
import AssessmentSubmissionPage from './page/Assessment/AssessmentSubmission';
import DashboardPage from './page/Dashboard';
import ErrorPage from './page/Error';
import NotificationPage from './page/Notification';
import ProfilePage from './page/Profile';
import AssessmentRootLayout from './page/Assessment/AssessmentRoot';
import ScorePage from './page/Score';
import SignInPage from './page/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  { path: 'dashboard', element: <DashboardPage /> },
  {
    path: 'assessment',
    element: <AssessmentRootLayout />,
    children: [
      { index: true, element: <AssessmentInstructionsPage /> },
      { path: 'quiz', element: <AssessmentQuizPage /> },
      {
        path: 'quiz/submission',
        element: <AssessmentSubmissionPage />,
      },
    ],
  },
  { path: 'notification', element: <NotificationPage /> },
  { path: 'profile', element: <ProfilePage /> },
  { path: 'score', element: <ScorePage /> },
]);

function Apps() {
  return <RouterProvider router={router} />;
}

export default Apps;
