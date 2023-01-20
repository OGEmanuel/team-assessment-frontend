import SiginInForm from './SignInForm';
import SignInMessage from './SIgnInMessage';

const SignIn = () => {
  return (
    <section className="flex h-screen">
      <SiginInForm />
      <SignInMessage />
    </section>
  );
};

export default SignIn;
