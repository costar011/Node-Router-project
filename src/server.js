import express from "express";
import path from "path";

// 3000 이라는 port를 담음
const PORT = 3000;

// app 이라는 변수를 만듬
const app = express();

// view engine 으로 pug를 세팅.
app.set("view engine", "pug");

// app.js 에게 CSS나 js는 /assets에 있음
// app.use(express.static(path.join(__dirname, "/assets")));

// 아무것도 없는 것 "/" 을 get해서 응답을 해준 후 res.render "퍼그설정했던 것" 을 불러와 사용자에게 웹페이지를 보여준다.
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/intro", (req, res) => {
  res.render("intro");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`✅ Server Start localhost: ${PORT}`);
});
