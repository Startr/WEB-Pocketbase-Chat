/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bz16do7qes0opnf")

  collection.listRule = "senderID = @request.auth.id || recipientID = @request.auth.id"
  collection.viewRule = "senderID = @request.auth.id || recipientID = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bz16do7qes0opnf")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
