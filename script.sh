#!bash/bin
posts='post1 post2 post3 post4'

#mkdir source dist 

for post in $posts
do
if ! [ -d source/$post ]
then 
  mkdir source/$post
fi
if ! [ -d dist/$post ]
then 
  mkdir dist/$post
fi
done


