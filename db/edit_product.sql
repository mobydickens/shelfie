UPDATE product
SET name = $1, price = $2, image_url = $3
WHERE id = $4;