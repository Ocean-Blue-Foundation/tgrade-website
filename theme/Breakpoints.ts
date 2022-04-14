export const size = {
  mobile: "560px",
  tablet: "1024px",
  smallLaptop: "1240px",
  laptop: "1440px",
  bigLaptop: "1728px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  smallLaptop: `(max-width: ${size.smallLaptop})`,
  laptop: `(min-width: ${size.laptop})`,
  responsiveLaptop: `(min-width: ${size.laptop}) and (max-width: ${size.bigLaptop})`,
  bigLaptop: `(min-width: ${size.bigLaptop})`,
};
