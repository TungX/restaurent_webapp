## Yêu cầu môi trường
```
node: 12.16.1
npm: 6.13.4
mongo: 4.2
```

## Import db

```
cd $BASE_FORLDER/db
mongorestore
```

## Chạy môi trường dev
### Thiết lập môi trường
```
cp .env.default .env
```

### Start server
```
cd $BASE_FORLDER
node server/index.js
```

### Build web lần đầu tiên
```
npm run build
```

### Chạy web để dev
```
npm start
```

## Chạy product trên server
```
npm run build
node server/index
```
## Lưu ý
### Sửa nội dung hiển thị
```
Khi sửa nội dung hiển thị, cần vào 2 file lang/lang.en.js và lang/lang.na.js
trong đó, lang.en.js là file chứa nội dung tiếng anh
còn lang.na.js là file chứa nội dung tiếng nauy
xem trong code để xác định vị trí của page cũng như tư khóa tương ứng
```