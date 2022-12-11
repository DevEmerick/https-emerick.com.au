import "../src/css/style.css";

function App() {
  return (
    <>
      <div className="landing-page">
        <div className="nav-menu">
          <div className="logo" src="" alt="logo" />
          <div className="menu-items">
            <a href="#contact">Contact</a>
            <a href="#project">Project</a>
            <a href="#menu">About</a>
          </div>
        </div>

        <div className="content">
          <span>
            <p>Hi my name is</p>
            <p>Guilherme Emerick</p>
            <p>I'm a Web Developer</p>
            <p>
              I've always been passionate about technology and nowadays my
              hobbie and profession is to give life to websites. Welcome to my
              personal website and feel free to get in touch.
            </p>
          </span>

          <button type="button">Check out My Projects</button>
        </div>
        <div className="back-image"></div>
        <div className="back-image2"></div>
        <div className="socials">
          <a
            href="https://www.instagram.com/_emericks/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 18.3333C14.4145 18.3333 15.7711 17.7714 16.7713 16.7712C17.7715 15.771 18.3334 14.4144 18.3334 13C18.3334 11.5855 17.7715 10.2289 16.7713 9.22872C15.7711 8.22853 14.4145 7.66663 13 7.66663C11.5855 7.66663 10.229 8.22853 9.22878 9.22872C8.22859 10.2289 7.66669 11.5855 7.66669 13C7.66669 14.4144 8.22859 15.771 9.22878 16.7712C10.229 17.7714 11.5855 18.3333 13 18.3333V18.3333Z"
                stroke="#CCD6F6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 18.3333V7.66667C1 5.89856 1.70238 4.20286 2.95262 2.95262C4.20286 1.70238 5.89856 1 7.66667 1H18.3333C20.1014 1 21.7971 1.70238 23.0474 2.95262C24.2976 4.20286 25 5.89856 25 7.66667V18.3333C25 20.1014 24.2976 21.7971 23.0474 23.0474C21.7971 24.2976 20.1014 25 18.3333 25H7.66667C5.89856 25 4.20286 24.2976 2.95262 23.0474C1.70238 21.7971 1 20.1014 1 18.3333Z"
                stroke="#CCD6F6"
                stroke-width="1.5"
              />
              <path
                d="M20.3333 5.68007L20.3466 5.66541"
                stroke="#CCD6F6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="https://github.com/EmerickDev" rel="noreferrer" target="_blank">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.71289 25C8.71289 25 7.74878 21.16 9.677 19.24C9.677 19.24 5.82056 19.24 2.92822 16.36C0.0358887 13.48 1 7.72 2.92822 5.8C1.96411 2.92 3.89233 1 3.89233 1C3.89233 1 6.78467 1 8.71289 2.92C10.6411 1.96 15.4617 1.96 17.3899 2.92C19.3181 1 22.2104 1 22.2104 1C22.2104 1 24.1387 2.92 23.1746 5.8C25.1028 7.72 26.0669 13.48 23.1746 16.36C20.2822 19.24 16.4258 19.24 16.4258 19.24C18.354 21.16 17.3899 25 17.3899 25M7.74878 24.04C4.85645 25 1.96411 23.08 1 22.12"
                stroke="#CCD6F6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/guilherme-emerick-26945816a/" rel="noreferrer" target="_blank">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8 8.57898C19.7096 8.57898 21.5409 9.37747 22.8912 10.7988C24.2414 12.2201 25 14.1479 25 16.1579V25H20.2V16.1579C20.2 15.4879 19.9471 14.8453 19.4971 14.3716C19.047 13.8978 18.4365 13.6316 17.8 13.6316C17.1635 13.6316 16.553 13.8978 16.1029 14.3716C15.6529 14.8453 15.4 15.4879 15.4 16.1579V25H10.6V16.1579C10.6 14.1479 11.3586 12.2201 12.7088 10.7988C14.0591 9.37747 15.8904 8.57898 17.8 8.57898V8.57898ZM1 9.84214H5.8V25H1V9.84214Z"
                stroke="#CCD6F6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.4 6.05263C4.72548 6.05263 5.8 4.92156 5.8 3.52632C5.8 2.13107 4.72548 1 3.4 1C2.07452 1 1 2.13107 1 3.52632C1 4.92156 2.07452 6.05263 3.4 6.05263Z"
                stroke="#CCD6F6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="https://codepen.io/emerick832" rel="noreferrer" target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6727 7.34047L12.7527 0.225919C12.5228 0.0777948 12.2636 0 12 0C11.7364 0 11.4772 0.0777948 11.2473 0.225919L0.327273 7.34047C0.227708 7.40647 0.14504 7.50142 0.0875876 7.61576C0.0301356 7.7301 -7.35764e-05 7.8598 1.3457e-07 7.9918V16.0082C-7.35764e-05 16.1402 0.0301356 16.2699 0.0875876 16.3842C0.14504 16.4986 0.227708 16.5935 0.327273 16.6595L11.2473 23.7741C11.4772 23.9222 11.7364 24 12 24C12.2636 24 12.5228 23.9222 12.7527 23.7741L23.6727 16.6595C23.7723 16.5935 23.855 16.4986 23.9124 16.3842C23.9699 16.2699 24.0001 16.1402 24 16.0082V7.9918C24.0001 7.8598 23.9699 7.7301 23.9124 7.61576C23.855 7.50142 23.7723 7.40647 23.6727 7.34047V7.34047ZM22.6909 14.7181L18.5236 12L22.6909 9.28194V14.7181ZM22.0145 7.9918L17.1927 11.1357L12.6545 8.17969V1.89183L22.0145 7.9918ZM12 14.5176L8.13818 12L12 9.48235L15.8618 12L12 14.5176ZM11.3455 1.89183V8.17969L6.80727 11.1357L1.98545 7.9918L11.3455 1.89183ZM1.30909 9.28194L5.47636 12L1.30909 14.7181V9.28194ZM1.98545 16.0082L6.80727 12.8643L11.3455 15.8203V22.1082L1.98545 16.0082ZM12.6545 22.1082V15.8203L17.1927 12.8643L22.0145 16.0082L12.6545 22.1082Z"
                fill="#CCD6F6"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
