insert into products (name, description, price, imgurl)
values($1,$2,$3,$4)
returning *;
