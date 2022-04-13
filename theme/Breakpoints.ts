export const size = {
  mobile: "480px",
  tablet: "1024px",
  smallLaptop: "1240px",
  laptop: "1440px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  smallLaptop: `(max-width: ${size.smallLaptop})`,
  laptop: `(min-width: ${size.laptop})`,
};
