/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oson6brpuwwscam")

  collection.viewRule = "userID = @request.auth.id || friendIDs = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oson6brpuwwscam")

  collection.viewRule = ""

  return dao.saveCollection(collection)
})
