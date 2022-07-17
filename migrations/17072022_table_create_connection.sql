CREATE TABLE Connections (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	username TEXT NOT NULL,
	password TEXT NOT NULL,
	port INTEGER NOT NULL,
	host TEXT NOT NULL,
	label TEXT NOT NULL,
	type TEXT NOT NULL,
	group INTEGER NOT NULL,
)