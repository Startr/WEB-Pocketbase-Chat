/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oson6brpuwwscam")

  collection.listRule = "userID = @request.auth.id || friendIDs = @request.auth.id"
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oson6brpuwwscam")

  collection.listRule = ""
  collection.viewRule = null

  return dao.saveCollection(collection)
})
