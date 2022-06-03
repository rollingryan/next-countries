const getHeadTitle = (path: string): string => {
  const route = path.split("/").pop();
  let titleString = "Welcome";

  if (route && route.length > 0) {
    titleString =
      route.charAt(0).toUpperCase() + route.slice(1).replace("-", " ");
  }

  return `${titleString} - Next Countries`;
};

export default getHeadTitle;
