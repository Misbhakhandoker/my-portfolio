import { FaFacebook, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-20 text-white bg-slate-950">
        <div className="flex items-center justify-center gap-5">
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCCSlHWfgzdRQggVrnwFpcBHNnLpvqSdMBGxsHvLWmkZKgDkLtpRGQnsmKNkFXfztKJPWg">
            <MdEmail />
          </a>
          <a href="https://github.com/Misbhakhandoker">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/misbha.khondaker">
            <FaFacebook />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
