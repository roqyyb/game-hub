const getCroppedImageUrl = (url: string) => {
  const target = "/media/";
  const index = url.indexOf(target);
  const newUrl =
    url.slice(0, index) +
    target +
    "crop/600/400/" +
    url.slice(index + target.length);

  return newUrl;
};

export default getCroppedImageUrl;
