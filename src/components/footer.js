import { Twitter, Github, Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <section className="header">
      <div className="row justify-content-center text-center bg-light pt-4">
        <div className="col-1">
          <a
            href="https://github.com/rodolphonapoleon"
            target="_blank"
            rel="noreferrer"
            className="icon-footer fs-3 text-info"
          >
            <Github />
          </a>
        </div>
        <div className="col-1">
          <a
            href="https://www.linkedin.com/in/rodolpho-richard-napoleon-30337113/"
            target="_blank"
            rel="noreferrer" 
            className="icon-footer fs-3 text-info"
          >
            <Linkedin />
          </a>
        </div>
        <div className="col-1">
          <a
            href="https://twitter.com/papinapo"
            target="_blank"
            rel="noreferrer" 
            className="icon-footer fs-3 text-info"
          >
            <Twitter />
          </a>
        </div>
      </div>
      <div className="row text-center bg-light">
        <div className="col mt-3">
          <p>Copyright ©2021 Rodolpho Richard Napoleon</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;