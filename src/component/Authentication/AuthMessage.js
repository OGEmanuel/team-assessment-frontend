import chrome from '../../assets/chrome.png';
import firefox from '../../assets/firefox.png';
import explorer from '../../assets/explorer.png';

const AuthMessage = () => {
  return (
    <div className="bg-primary-400 text-white pt-28 pl-20">
      <div className="mb-16">
        <h1 className="font-medium text-3xl w-3/4 mb-2">
          Give your best shot while answering the questions
        </h1>
        <p className="text-lg">Wish you the best in it.</p>
      </div>
      <div className="mb-14">
        <h2 className="h2 mb-4">Browser Compatibility works best with</h2>
        <div className="flex gap-7">
          <img src={chrome} alt="chrome" />
          <img src={firefox} alt="firefox" />
          <img src={explorer} alt="explorer" />
        </div>
      </div>
      <div className="mb-14">
        <h2 className="h2 mb-2.5">Network Speed</h2>
        <p className="text-lg w-4/5">
          Check if you have a decent internet speed. This can be done by logging
          into your email account. A decent internet connection should enable
          you to login within seconds.
        </p>
      </div>
      <p className="text-lg">
        Keep your password safe, as it would be needed at other times.
      </p>
    </div>
  );
};

export default AuthMessage;
