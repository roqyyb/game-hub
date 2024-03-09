const getCroppedImageUrl = (url: string) => {
  const target = "/media/";

  return url.replace(target, target + "crop/600/400/");
};

export default getCroppedImageUrl;
