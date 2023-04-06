import albumModel from "./albums-model.js";

export const findAlbumByAlbumId = async (albumId) =>
  await albumModel.findOne({ albumId });

export const createAlbum = async (album) => {
  const newAlbum = await albumModel.create(album);
  return newAlbum;
};
