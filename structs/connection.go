package main

type ConnectionType string

const (
	FTP  string = "ftp"
	SFTP string = "sftp"
)

type Connection struct {
	ID              string         `json:"id"`
	Username        string         `json:"username"`
	Password        string         `json:"password"`
	Port            string         `json:"port"`
	Host            string         `json:"host"`
	ConnectionLabel string         `json:"label"`
	ConnectionType  ConnectionType `json:"type"`
	GroupID         string         `json:"group_id"`
}
