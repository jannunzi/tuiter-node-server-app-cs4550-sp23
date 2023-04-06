import * as albumsDao from "./albums-dao.js";
import * as likesDao from "../likes/likes-dao.js";

const AlbumsController = (app) => {
  const likeAlbum = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }

    let album = await albumsDao.findAlbumByAlbumId(req.params.albumId);
    if (!album) {
      album = await albumsDao.createAlbum(req.body);
    }
    const like = await likesDao.createLike({
      userId: currentUser._id,
      albumId: album.albumId,
      albumMongooseKey: album._id,
    });
    res.json(like);
  };

  app.post("/api/albums/:albumId/likes", likeAlbum);
};

export default AlbumsController;
