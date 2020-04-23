module.exports = io => {
  io.on("connection", socket => {
    console.log("Usuario new connection");

    socket.on("userCoordinates", coords => {
      socket.broadcast.emit("newUserCoordinates", coords);
    });
  });
};
