package cli

import (
	"errors"
	"fmt"
	"strings"
)

type Command struct {
	Name        string
	Description string
	Action      func([]string) error
}

func (c *Command) Run(args []string) error {
	return c.Action(args)
}

var commands = make(map[string]*Command)

func RegisterCommand(name, description string, action func([]string) error) {
	commands[name] = &Command{
		Name:        name,
		Description: description,
		Action:      action,
	}
}

func GetCommand(name string) *Command {
	return commands[name]
}

func HandleCommands(args []string) error {

	if len(args) == 0 {
		return errors.New("No command specified")
	}

	if args[0] == "help" {
		fmt.Println("Available commands:")
		for name, command := range commands {
			fmt.Printf("%s: %s\n", name, command.Description)
		}
		return nil
	}

	if args[1] == "run" {

	}

	return nil
}

func GetInput() string {
	var input string
	fmt.Scanln(&input)
	return input
}

// parse the input of the terminal
func ParseInput(input string) []string {
	return strings.Split(input, " ")
}
