const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({ message: "Blogify API is running 🚀" })
  );
});
server.get("/s",(req,res)=>{
  res.send("agro")
})
server.get("/ch",(req,res)=>{
  res.send("agroconnect")
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
