package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed frontend/dist
var assets embed.FS

func main() {

	// Create an instance of the app structure
	app := NewApp()

	// options for the app
	options := &options.App{
		Title:     "FTPingo",
		Width:     1400,
		Height:    768,
		Frameless: true,
		Assets:    assets,
		OnStartup: app.startup,
		Bind: []interface{}{
			app,
		},
	}

	// Create application with options
	if err := wails.Run(options); err != nil {
		println("Error:", err)
	}
}
