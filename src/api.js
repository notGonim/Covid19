const baseUrl = "https://covid19.mathdro.id/api";

export const dataUrl = () => baseUrl;

export const dataUrlCountry = (country) => {
  return `https://covid19.mathdro.id/api/countries/${country}`;
};
