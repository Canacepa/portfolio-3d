import { socialImgs } from "../Constants/Index";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          {/* <p>Terms & Conditions</p> */}
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} className="icon" href={socialImg.link} target="_blank" rel="noopener noreferrer" >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Cassandre Lavallard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};