package structs

type Connection struct {
	ID              string `db:"id"`
	Username        string `db:"username"`
	Password        string `db:"password"`
	Port            string `db:"port"`
	Host            string `db:"host"`
	ConnectionLabel string `db:"label"`
	ConnectionType  string `db:"type"`
	GroupID         string `db:"group_id"`
}
