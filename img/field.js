(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("field",
{ "height":18,
 "infinite":false,
 "layers":[
        {
         "data":[26, 26, 26, 26, 26, 22, 23, 23, 23, 23, 23, 23, 24, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 2, 3, 1, 2, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 8, 8, 8, 8, 8, 8, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 2, 9, 7, 2, 26, 26, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 26, 26, 26, 26, 22, 23, 33, 8, 19, 20, 20, 21, 8, 25, 26, 26, 22, 23, 23, 23, 23, 26, 23, 23, 23, 2, 15, 13, 2, 26, 26, 28, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30, 26, 26, 26, 26, 27, 8, 8, 8, 25, 26, 26, 27, 8, 31, 32, 26, 27, 8, 8, 8, 8, 26, 8, 8, 8, 8, 3, 1, 2, 26, 26, 28, 8, 26, 26, 26, 26, 26, 26, 26, 3, 1, 8, 30, 26, 23, 23, 23, 33, 8, 26, 8, 31, 32, 32, 33, 8, 8, 8, 25, 27, 8, 19, 21, 8, 26, 8, 19, 21, 8, 9, 7, 2, 26, 26, 28, 8, 8, 8, 8, 25, 26, 27, 8, 8, 8, 8, 30, 26, 5, 8, 8, 8, 8, 26, 8, 8, 8, 8, 8, 8, 26, 8, 25, 27, 8, 25, 27, 8, 26, 8, 25, 27, 8, 15, 13, 2, 26, 26, 34, 35, 21, 32, 8, 31, 24, 27, 8, 3, 1, 26, 26, 26, 20, 20, 20, 20, 20, 26, 20, 20, 20, 20, 20, 20, 26, 8, 25, 27, 8, 25, 27, 8, 32, 8, 25, 27, 8, 6, 4, 2, 32, 32, 23, 23, 33, 8, 8, 8, 25, 27, 8, 8, 8, 8, 30, 26, 26, 26, 26, 26, 26, 22, 23, 23, 23, 23, 23, 23, 26, 8, 25, 27, 8, 25, 27, 8, 8, 8, 25, 27, 8, 12, 10, 8, 8, 8, 8, 8, 8, 8, 17, 8, 25, 26, 26, 3, 1, 8, 30, 26, 26, 26, 26, 26, 26, 27, 8, 8, 8, 8, 8, 8, 8, 8, 25, 27, 8, 25, 27, 11, 19, 20, 26, 26, 2, 18, 16, 2, 20, 20, 20, 20, 21, 8, 8, 8, 25, 27, 8, 8, 8, 8, 30, 26, 26, 26, 26, 26, 26, 27, 8, 8, 8, 8, 8, 8, 8, 19, 36, 27, 8, 8, 26, 11, 25, 26, 26, 26, 2, 3, 1, 2, 26, 26, 26, 26, 34, 20, 20, 20, 36, 27, 8, 3, 1, 26, 30, 26, 26, 26, 26, 26, 26, 27, 8, 8, 8, 8, 8, 8, 8, 25, 26, 27, 8, 19, 27, 11, 25, 22, 32, 32, 2, 9, 7, 2, 32, 32, 24, 26, 26, 26, 26, 26, 26, 27, 8, 8, 8, 8, 30, 26, 26, 26, 26, 26, 26, 27, 8, 8, 8, 8, 8, 8, 8, 25, 26, 27, 8, 25, 27, 11, 25, 27, 11, 11, 11, 15, 13, 8, 8, 8, 25, 26, 26, 26, 26, 26, 26, 26, 26, 3, 1, 8, 30, 26, 26, 26, 26, 26, 26, 27, 8, 8, 8, 8, 8, 8, 8, 25, 26, 27, 8, 25, 27, 11, 31, 33, 11, 11, 11, 6, 4, 8, 8, 8, 25, 26, 26, 26, 26, 26, 26, 27, 8, 8, 8, 8, 30, 26, 26, 26, 26, 26, 26, 34, 27, 8, 19, 20, 20, 20, 20, 36, 26, 27, 8, 25, 27, 11, 11, 11, 11, 11, 11, 12, 10, 8, 8, 8, 25, 26, 26, 26, 26, 26, 26, 27, 8, 3, 1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 8, 31, 32, 32, 32, 32, 32, 32, 27, 8, 25, 34, 20, 20, 20, 11, 11, 11, 18, 16, 8, 8, 8, 31, 24, 26, 26, 26, 26, 26, 27, 8, 8, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 25, 26, 26, 26, 26, 11, 11, 11, 3, 1, 8, 8, 8, 8, 31, 23, 23, 23, 23, 23, 33, 27, 8, 30, 26, 26, 26, 26, 26, 26, 26, 26, 26, 34, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 36, 26, 26, 26, 26, 20, 21, 2, 15, 13, 2, 19, 21, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 3, 1, 26, 26, 26, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36, 26, 26, 26],
         "height":18,
         "name":"layer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":44,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.1.6",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"monsters-within.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":1,
 "width":44
});