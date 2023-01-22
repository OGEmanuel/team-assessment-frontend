import AuthForm from './AuthForm';
import AuthMessage from './AuthMessage';

const Auth = () => {
  return (
    <section className="font-style flex min-h-screen">
      <AuthForm />
      <AuthMessage />
    </section>
  );
};

export default Auth;
