export const color = {
  // Palette
  white: "#ffffff",
  black: "#000000",
  pale: "#fff4d6",
  duck_egg_blue: "#cff1f2",
  charcoal_grey: "#333f48",
  light_grey_blue: "#adb1b5",
};

export const spacing = {
  margin: {
    xs: 4,
    s: 8,
    m: 32,
  },
  padding: {
    xs: 4,
    s: 8,
    m: 32,
  },
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  size: {
    s1: "12",
    s2: "14",
    s3: "16",
    m1: "20",
    m2: "24",
    m3: "28",
    l1: "32",
    l2: "40",
    l3: "48",
    code: "90",
  },
};

export const phone_upper_boundary = 600;
export const tablet_portrait_upper_boundary = 900;
export const tablet_landscape_upper_boundary = 1200;
export const desktop_upper_boundary = 1600;


export const breakpoints = (content) => {

  let phone_only = `
  @media (max-width: ${phone_upper_boundary - 1}px) {
    ${content}
  }
  `

  return {
    phone_only
  }
}

