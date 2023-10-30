package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) != 2 {
		fmt.Print("a")
	} else {
		for _, char := range os.Args[1] {
			if char == 'a' {
				fmt.Print("a")
				break
			}
		}
	}
	fmt.Print("\n")
}
