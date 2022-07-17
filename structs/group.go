package structs

type Group struct {
	ID          string       `db:"id"`
	Name        string       `db:"name"`
	Connections []Connection `db:"connections"`
}
