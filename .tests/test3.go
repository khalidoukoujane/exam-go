package main
import (
	"fmt"
	"os"
)
func main(){
	s1 := os.Args[1:2]
	s2 := os.Args[2:3]
	fmt.Println(Concat(s1[0],s2[0]))
}