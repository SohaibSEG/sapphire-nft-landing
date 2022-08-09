import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-column main">
          <div className="logo clickable">
            <h2 className="logo-text">Sapphire</h2>
          </div>
          <p>
            Amazing NFTs marketplace, Authentic and unique digital creation.
          </p>
          <ul className="social-icons inline-list">
            <li className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 512 512"
              >
                <path d="M255.022 511.998l.229.001h-.079l-.15-.001zm1.806.001h-.079l.229-.001-.15.001zm-2.588-.005l.247.001h-.142l-.105-.001zm3.415.001h-.142l.247-.001-.105.001zm-4.169-.007l.165.001-.132-.001h-.033zm4.995 0l-.132.001.165-.001h-.033zm.826-.009l-.058.001.223-.003-.165.002zm-6.779-.002l.223.003-.058-.001-.165-.002zm7.604-.01l-.135.002.275-.004-.14.002zm-8.404-.002l.275.004-.135-.002-.14-.002zm9.228-.012l-.182.003.254-.005-.072.002zm-9.984-.002l.254.005-.182-.003-.072-.002zm-.937-.019l.225.005-.04-.001-.185-.004zm11.745.004l-.04.001.225-.005-.185.004zm-12.567-.025l.309.008-.125-.003-.184-.005zm13.39.005l-.125.003.309-.008-.184.005zm.823-.022l-.201.006.316-.009-.115.003zm-14.967-.003l.316.009-.201-.006-.115-.003zm-.72-.022l.225.007-.212-.007-.194-.006.181.006zm16.509 0l-.212.007.225-.007.181-.006-.194.006zm.821-.027l-.112.004.345-.012-.233.008zm-18.371-.008l.345.012-.112-.004-.233-.008zm-.749-.028l.362.013-.201-.007-.161-.006zm19.941.006l-.201.007.362-.013-.161.006zm-20.676-.036l.354.015-.277-.011-.077-.004zm21.495.004l-.277.011.354-.015-.077.004zm-22.525-.049l.38.017-.093-.003-.287-.014zm23.345.014l-.093.003.38-.017-.287.014zm-24.084-.048l.394.018-.186-.008-.208-.01zm24.902.01l-.186.008.394-.018-.208.01zm-25.63-.047l.397.02-.279-.013-.118-.007zm26.448.007l-.279.013.397-.02-.118.007zm.818-.043l-.362.019.321-.017.378-.021-.337.019zm-27.925.002l.321.017-.362-.019-.337-.019.378.021zm28.741-.048l-.16.009.406-.023-.246.014zm-29.844-.014l.406.023-.16-.009-.246-.014zm-.722-.043l.405.024-.253-.014-.152-.01zm31.382.01l-.253.014.405-.024-.152.01zm-32.071-.053l.365.023-.34-.021-.342-.022.317.02zm32.887.002l-.34.021.365-.023.317-.02-.342.022zm.814-.053l-.122.008.387-.026-.265.018zm-34.755-.018l.387.026-.122-.008-.265-.018zm-.721-.05l.38.027-.208-.014-.172-.013zm36.29.013l-.208.014.38-.027-.172.013zm-37.009-.064l.349.025-.271-.019-.078-.006zm37.822.006l-.271.019.349-.025-.078.006zm-38.789-.079l.306.023-.074-.005-.232-.018zm39.602.018l-.074.005.306-.023-.232.018zm.811-.063l-.146.011.311-.025-.165.014zm-41.157-.014l.311.025-.146-.011-.165-.014zm-.725-.059l.264.022-.186-.015-.078-.007zm42.694.007l-.186.015.264-.022-.078.007zm-43.492-.074l.079.007-.013-.001-.066-.006zm44.302.006l-.013.001.079-.007-.066.006zm.81-.071l-.072.006.181-.016-.109.01zm-45.965-.01l.181.016-.072-.006-.109-.01zm-.75-.068l.135.013-.084-.008-.051-.005zm47.523.005l-.084.008.135-.013-.051.005zM216 508.887C93.681 489.661 0 383.684 0 256 0 114.71 114.71 0 256 0c141.29 0 256 114.71 256 256 0 127.684-93.681 233.661-216 252.887V330h59.65L367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.887z"></path>
              </svg>
            </li>
            <li className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 512 512"
              >
                <path d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0zm0 96c-43.453 0-48.902.184-65.968.963-17.03.777-28.661 3.482-38.839 7.437-10.521 4.089-19.444 9.56-28.339 18.455-8.895 8.895-14.366 17.818-18.455 28.339-3.955 10.177-6.659 21.808-7.437 38.838C96.184 207.098 96 212.547 96 256s.184 48.902.962 65.968c.778 17.03 3.482 28.661 7.437 38.838 4.089 10.521 9.56 19.444 18.455 28.34 8.895 8.895 17.818 14.366 28.339 18.455 10.178 3.954 21.809 6.659 38.839 7.436 17.066.779 22.515.963 65.968.963s48.902-.184 65.968-.963c17.03-.777 28.661-3.482 38.838-7.436 10.521-4.089 19.444-9.56 28.34-18.455 8.895-8.896 14.366-17.819 18.455-28.34 3.954-10.177 6.659-21.808 7.436-38.838.779-17.066.963-22.515.963-65.968s-.184-48.902-.963-65.968c-.777-17.03-3.482-28.661-7.436-38.838-4.089-10.521-9.56-19.444-18.455-28.339-8.896-8.895-17.819-14.366-28.34-18.455-10.177-3.955-21.808-6.66-38.838-7.437C304.902 96.184 299.453 96 256 96zm0 28.829c42.722 0 47.782.163 64.654.933 15.6.712 24.071 3.318 29.709 5.509 7.469 2.902 12.799 6.37 18.397 11.969 5.6 5.598 9.067 10.929 11.969 18.397 2.191 5.638 4.798 14.109 5.509 29.709.77 16.872.933 21.932.933 64.654 0 42.722-.163 47.782-.933 64.654-.711 15.6-3.318 24.071-5.509 29.709-2.902 7.469-6.369 12.799-11.969 18.397-5.598 5.6-10.928 9.067-18.397 11.969-5.638 2.191-14.109 4.798-29.709 5.509-16.869.77-21.929.933-64.654.933-42.725 0-47.784-.163-64.654-.933-15.6-.711-24.071-3.318-29.709-5.509-7.469-2.902-12.799-6.369-18.398-11.969-5.599-5.598-9.066-10.928-11.968-18.397-2.191-5.638-4.798-14.109-5.51-29.709-.77-16.872-.932-21.932-.932-64.654 0-42.722.162-47.782.932-64.654.712-15.6 3.319-24.071 5.51-29.709 2.902-7.468 6.369-12.799 11.968-18.397 5.599-5.599 10.929-9.067 18.398-11.969 5.638-2.191 14.109-4.797 29.709-5.509 16.872-.77 21.932-.933 64.654-.933zm0 49.009c-45.377 0-82.162 36.785-82.162 82.162 0 45.377 36.785 82.162 82.162 82.162 45.377 0 82.162-36.785 82.162-82.162 0-45.377-36.785-82.162-82.162-82.162zm0 135.495c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333 53.333 23.878 53.333 53.333-23.878 53.333-53.333 53.333zm104.609-138.741c0 10.604-8.597 19.199-19.201 19.199-10.603 0-19.199-8.595-19.199-19.199 0-10.604 8.596-19.2 19.199-19.2 10.604 0 19.201 8.596 19.201 19.2z"></path>
              </svg>
            </li>
            <li className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 512 512"
              >
                <path d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0zm-80.037 399.871V199.95h-66.464v199.921h66.464zm239.62 0V285.225c0-61.409-32.787-89.976-76.509-89.976-35.255 0-51.047 19.389-59.889 33.007V199.95h-66.447c.881 18.757 0 199.921 0 199.921h66.446v-111.65c0-5.976.43-11.95 2.191-16.221 4.795-11.935 15.737-24.299 34.095-24.299 24.034 0 33.663 18.34 33.663 45.204v106.966h66.45zM143.18 103.55c-22.74 0-37.597 14.95-37.597 34.545 0 19.182 14.405 34.544 36.717 34.544h.429c23.175 0 37.6-15.362 37.6-34.544-.43-19.595-14.424-34.545-37.149-34.545z"></path>
              </svg>
            </li>
            <li className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 512 512"
              >
                <path d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0zm153.315 178.978c-3.68-13.769-14.522-24.61-28.29-28.29C356.067 144 256 144 256 144s-100.067 0-125.025 6.688c-13.765 3.68-24.61 14.521-28.29 28.29C96 203.933 96 256.002 96 256.002s0 52.067 6.685 77.02c3.68 13.769 14.525 24.614 28.29 28.293C155.933 368 256 368 256 368s100.067 0 125.025-6.685c13.768-3.679 24.61-14.524 28.29-28.293C416 308.069 416 256.002 416 256.002s0-52.069-6.685-77.024zM223.999 304.003v-96.002l83.137 48.001-83.137 48.001z"></path>
              </svg>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Marketplace</h3>
          <ul className="col-links">
            <li className="col-link">
              <a href="#">Explore</a>
            </li>
            <li className="col-link">
              <a href="#">NFTs</a>
            </li>
            <li className="col-link">
              <a href="#">Collectibles</a>
            </li>
            <li className="col-link">
              <a href="#">Virtual Reality</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Recources</h3>
          <ul className="col-links">
            <li className="col-link">
              <a href="#">Help Center</a>
            </li>
            <li className="col-link">
              <a href="#">Partners</a>
            </li>
            <li className="col-link">
              <a href="#">Blog</a>
            </li>
            <li className="col-link">
              <a href="#">Newsletter</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul className="col-links">
            <li className="col-link">
              <a href="#">About US</a>
            </li>
            <li className="col-link">
              <a href="#">Careers</a>
            </li>
            <li className="col-link">
              <a href="#">Support</a>
            </li>
            <li className="col-link">
              <a href="#">Hiring</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <p>Copyright 2022 sapphire, All right reserved.</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>

      </div>
    </footer>
  );
}

export default Footer;
