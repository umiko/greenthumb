db = db.getSiblingDB('greenthumb')
//create db user for node server
db.createUser(
    {
        user: "node",
        pwd: "U!uaH8krpd$8Tq",      // Or  "<cleartext password>"
        roles: [
            { role: "readWrite", db: "mm" },
        ]
    }
)