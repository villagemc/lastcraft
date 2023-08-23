import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@images/logo.png';

interface InterfaceIP {
  server: string;
  copy: string;
}

const DashLogoIP: FC = () => {
  const [IP, setIP] = useState<InterfaceIP>({
    server: 'mc.last-craft.net',
    copy: ''
  });

  const copyIP = () => {
    if (!IP.copy) {
      navigator.clipboard.writeText(IP.server);
      setIP(prevState => ({ ...prevState, copy: 'скопировано' }));
      setTimeout(() => setIP(prevState => ({ ...prevState, copy: '' })), 1000);
    }
  }

  return (
    <div className="dash__logos">
      <Link to="/" className="dash__site">
        <img src={Logo} alt="Логотип" className="dash__logo" />
      </Link>
      <p
        onClick={copyIP}
        data-copy={IP.copy}
        className="dash__ip"
      >{IP.server}</p>
    </div>
  );
}

export default DashLogoIP;