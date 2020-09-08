#!/bin/bash

name="elminino/covid-front"
version="v0.0."

num=$(<./buildNum.txt)

docker build -t $name:$version$num ../Covid-Front/

while getopts ":p" opt; do
  case $opt in
    p) docker push $name:$version$num;;
  esac
done

num=$(expr $num + 1)

echo $num > buildNum.txt
