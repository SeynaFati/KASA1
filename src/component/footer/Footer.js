import "./Footer.sass";

function Footer() {
  return (
    <div className="footer">
      <img
        src={`${process.env.PUBLIC_URL}/footer-logo.png`}
        className="Footer-logo"
        alt="logo"
      />
      <p> © 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
