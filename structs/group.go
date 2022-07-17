package structs

type Group struct {
	ID          string       `json:"id"`
	Name        string       `json:"name"`
	Connections []Connection `json:"connections"`
}
