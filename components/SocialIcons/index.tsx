import { StyledSocialIcons, StyledImage } from "./style";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <Link href="https://twitter.com/TgradeFinance" passHref={true}>
        <StyledImage target="_blank">
          <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={15} cy={15} r={15} fill="#fff" />
            <path
              d="M23.25 9.894c-.59.26-1.263.433-1.936.52.673-.433 1.262-1.126 1.515-1.904-.673.432-1.347.692-2.189.865A3.274 3.274 0 0 0 18.2 8.25c-1.852 0-3.367 1.558-3.367 3.461 0 .26 0 .52.084.78-2.778-.174-5.304-1.558-6.987-3.635a4.028 4.028 0 0 0-.421 1.73c0 1.212.589 2.25 1.515 2.856-.59 0-1.094-.173-1.515-.432 0 1.644 1.178 3.115 2.693 3.375-.252.086-.589.086-.925.086-.253 0-.421 0-.674-.086.421 1.384 1.684 2.423 3.199 2.423-1.178.952-2.61 1.47-4.21 1.47-.252 0-.504 0-.841-.086 1.515.952 3.283 1.558 5.22 1.558 6.229 0 9.596-5.279 9.596-9.865v-.433c.674-.26 1.263-.866 1.684-1.558Z"
              fill="#302F2C"
            />
          </svg>
        </StyledImage>
      </Link>
      <Link href="https://www.linkedin.com/company/tgrade" passHref={true}>
        <StyledImage target="_blank">
          <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={15} cy={15} r={15} fill="#fff" />
            <path
              d="M22.25 16.583v5.099h-3.121v-4.788c0-1.181-.455-1.99-1.56-1.99-.846 0-1.366.56-1.561 1.057-.065.187-.13.436-.13.746v4.975h-3.121s.065-8.083 0-8.892h3.12v1.244c.39-.622 1.171-1.492 2.797-1.492 2.015 0 3.576 1.305 3.576 4.041ZM9.506 8.5c-1.04 0-1.756.684-1.756 1.555 0 .87.65 1.554 1.69 1.554 1.106 0 1.756-.684 1.756-1.554.065-.933-.585-1.555-1.69-1.555Zm-1.56 13.182h3.12V12.79h-3.12v8.892Z"
              fill="#302F2C"
            />
          </svg>
        </StyledImage>
      </Link>
      <Link href="https://t.me/confio_tech" passHref={true}>
        <StyledImage target="_blank">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM12.2678 17.4456L12.0192 21.0256C12.3832 21.0256 12.5518 20.8648 12.756 20.6702L14.5226 19.0367L18.1978 21.6265C18.8724 21.982 19.3607 21.7958 19.5294 21.0256L21.944 10.1841C22.1925 9.23617 21.5711 8.80454 20.9231 9.08383L6.74611 14.2973C5.77849 14.6696 5.78736 15.1859 6.56856 15.3975L10.2082 16.4977L18.6239 11.4282C19.0234 11.1997 19.3873 11.3266 19.0855 11.589L12.2678 17.4456Z"
              fill="white"
            />
          </svg>
        </StyledImage>
      </Link>
      <Link href="https://www.coingecko.com/en/coins/tgradee" passHref={true}>
        <StyledImage target="_blank">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM14.937 4.98148C9.41296 5.00741 4.95741 9.5037 4.98148 15.0259C5.00741 20.5481 9.5037 25.0056 15.0259 24.9815C20.5481 24.9556 25.0056 20.4593 24.9815 14.937C24.9556 9.41296 20.4593 4.95741 14.937 4.98148ZM13.6704 14.4907C12.6833 14.4907 11.8815 13.6907 11.8815 12.7037C11.8815 11.7167 12.6815 10.9167 13.6704 10.9167C14.6574 10.9167 15.4574 11.7167 15.4574 12.7037C15.4574 13.6907 14.6574 14.4907 13.6704 14.4907ZM15.0963 16.4241L15.1056 16.413L15.1148 16.4019C15.6259 16.7315 16.2074 16.8463 16.7889 16.8648C17.3722 16.8796 17.9648 16.837 18.55 16.7185C19.1333 16.5981 19.7074 16.4185 20.2611 16.1889C20.5722 16.0611 20.8815 15.9204 21.1759 15.7556C21.1778 15.7537 21.1796 15.7537 21.1815 15.7519C21.3648 15.6407 21.5444 15.5259 21.7204 15.4056C21.7593 15.3778 21.7963 15.35 21.8315 15.3204L21.8352 15.3259L21.85 15.3444C21.4 15.7537 20.8648 16.0574 20.3204 16.3259C19.7704 16.5852 19.1963 16.7981 18.6037 16.9519C18.013 17.1037 17.3963 17.2204 16.7722 17.163C16.1574 17.1056 15.5093 16.8907 15.0963 16.4241ZM19.6852 14.4907C19.6852 14.2759 19.8574 14.1037 20.0704 14.1019C20.2852 14.1019 20.4574 14.2741 20.4593 14.487C20.4593 14.7 20.287 14.8759 20.0741 14.8759C19.8611 14.8778 19.6852 14.7056 19.6852 14.4907ZM16.6222 24.0833C16.2352 21.3759 18.5981 18.7259 19.9315 17.3704C20.0601 17.2394 20.219 17.0872 20.3927 16.9208C20.6266 16.6968 20.8873 16.4471 21.137 16.1889C22.8667 14.5722 23.2111 12.6389 19.6704 11.6722C19.01 11.4807 18.3244 11.21 17.6314 10.9365L17.6313 10.9364L17.6 10.9241C17.5778 10.8593 17.5519 10.7981 17.5241 10.7407C17.4426 10.6019 17.3019 10.4407 17.087 10.2593C16.6259 9.85926 15.763 9.87037 15.0167 10.0463C14.1907 9.85185 13.3778 9.78333 12.5944 9.97037C9.17037 10.913 8.62037 12.5833 8.48704 14.5963L8.46496 14.862C8.29565 16.9042 8.16608 18.467 7.37593 20.2426C6.34815 18.7593 5.74259 16.963 5.73519 15.0222C5.71296 9.91667 9.83333 5.75741 14.9407 5.73519C20.0481 5.71296 24.2056 9.83333 24.2296 14.9407C24.2481 19.5019 20.963 23.3074 16.6222 24.0833ZM13.6704 13.9778C14.3648 13.9778 14.9278 13.4148 14.9278 12.7204C14.9278 12.0259 14.3648 11.463 13.6704 11.463C12.9759 11.463 12.413 12.0259 12.413 12.7204C12.413 13.4148 12.9759 13.9778 13.6704 13.9778Z"
              fill="white"
            />
          </svg>
        </StyledImage>
      </Link>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
