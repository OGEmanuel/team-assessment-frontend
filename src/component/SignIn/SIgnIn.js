import { Link } from 'react-router-dom';
import SiginInForm from './SignInForm';
import SignInMessage from './SIgnInMessage';

const SignIn = () => {
  return (
    <section>
      <SiginInForm />
      <SignInMessage />
    </section>
  );
};

export default SignIn;
