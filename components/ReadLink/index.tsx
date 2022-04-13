import { StyledLink } from "./style";
import Link from "next/link";

interface ReadLinkProps {
  link: string;
}

const ReadLink = ({ link }: ReadLinkProps) => {
  return (
    <Link href={link} passHref={true}>
      <StyledLink target="_blank">
        Read{" "}
        <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 0C6.715 0 0 6.715 0 15c0 8.284 6.715 15 15 15 8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15Zm0 28.125C7.763 28.125 1.875 22.238 1.875 15 1.875 7.763 7.763 1.846 15 1.846c7.238 0 13.125 5.917 13.125 13.154 0 7.238-5.887 13.125-13.125 13.125Z"
            fill="#1A1D26"
          />
          <path
            d="M12.945 7.754a.931.931 0 0 0-1.326 0 .953.953 0 0 0 0 1.34l5.808 5.892-5.809 5.892a.953.953 0 0 0 0 1.34c.367.369.96.369 1.326 0l6.469-6.562a.972.972 0 0 0 0-1.34l-6.468-6.562Z"
            fill="#1A1D26"
          />
        </svg>
      </StyledLink>
    </Link>
  );
};

export default ReadLink;
