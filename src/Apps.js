import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './page/Dashboard';
import ErrorPage from './page/Error';
import NotificationPage from './page/Notification';
import ProfilePage from './page/Profile';
import ScorePage from './page/Score';
import AuthenticationPage from './page/Authentication';
import AssessmentInstructions from './component/Home/Assessment/AssessmentInstructions';
import AssessmentQuiz from './component/Home/Assessment/AssessmentQuiz';
import AssessmentSubmission from './component/Home/Assessment/AssessmentSubmission';
import AssessmentRootLayout from './page/AssessmentRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticationPage />,
    errorElement: <ErrorPage />,
  },
  { path: 'dashboard', element: <DashboardPage /> },
  {
    path: 'assessment',
    element: <AssessmentRootLayout />,
    children: [
      { index: true, element: <AssessmentInstructions /> },
      { path: 'quiz', element: <AssessmentQuiz /> },
      {
        path: 'quiz/submission',
        element: <AssessmentSubmission />,
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
