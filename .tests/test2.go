package main
import (
	"fmt"
	"os"
)
func main(){
	s1 := os.Args[1:2]
	fmt.Println(strRev(s1[0]))
}