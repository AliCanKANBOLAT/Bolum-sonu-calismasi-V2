import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
- [x] Default olarak hiç bir görsel secilmesin ve bu durumda gorsel secilmedi componenti ekranda gozuksun
- [x] product icerisinde id,name,imgName,thumbNail,isAvailable(false/true),isActive(false),
- [x] Lorem Picsum gorselleri imgName icinde ve thumbNail icinde tutulsun,
- [x] Bolum sonu calismasi v1 Layout uygulansin,
- [x] Img ThumbNail altinda sec butonu olsun ve sec dediginde isActive True olsun..

*/
