#!/bin/bash
FILES=*
i=0
str=".png"
str1="bsh.sh"
for f in $FILES
do
if [ $str1 -ne $f ];
        then
                #echo "$i Processing $f file..."
				  let i=$i+1
				  j="$i$str"
				  echo $j

				  mv $f $j
        fi
  
  #mv $f $j
  # take action on each file. $f store current file name
done

