import { StyledSocialIcons, StyledImage } from "./style";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <Link href="https://twitter.com/TgradeFinance" passHref={true}>
        <StyledImage>
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
        <StyledImage>
          <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={15} cy={15} r={15} fill="#fff" />
            <path
              d="M22.25 16.583v5.099h-3.121v-4.788c0-1.181-.455-1.99-1.56-1.99-.846 0-1.366.56-1.561 1.057-.065.187-.13.436-.13.746v4.975h-3.121s.065-8.083 0-8.892h3.12v1.244c.39-.622 1.171-1.492 2.797-1.492 2.015 0 3.576 1.305 3.576 4.041ZM9.506 8.5c-1.04 0-1.756.684-1.756 1.555 0 .87.65 1.554 1.69 1.554 1.106 0 1.756-.684 1.756-1.554.065-.933-.585-1.555-1.69-1.555Zm-1.56 13.182h3.12V12.79h-3.12v8.892Z"
              fill="#302F2C"
            />
          </svg>
        </StyledImage>
      </Link>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
