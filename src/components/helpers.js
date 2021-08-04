export const getImages = (product) => {
  const imageObj = product.currentVariant.images;
  const imageProp = Object.keys(imageObj)[0];
  return imageObj[imageProp].url;
};
