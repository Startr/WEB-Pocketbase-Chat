/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oson6brpuwwscam")

  collection.listRule = "userID = @request.auth.id || friendIDs = @collection.friends.friendIDs"
  collection.viewRule = "userID = @request.auth.id || friendIDs = @collection.friends.friendIDs"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oson6brpuwwscam")

  collection.listRule = "userID = @request.auth.id || friendIDs = @request.auth.id"
  collection.viewRule = "userID = @request.auth.id || friendIDs = @request.auth.id"

  return dao.saveCollection(collection)
})
