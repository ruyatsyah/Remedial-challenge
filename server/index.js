const http = require("http");
const getHtml = require("./helpers/getHtml");
const readStaticFiles = require("./helpers/readStaticFiles.js")
const fs = require("fs");
const path = require("path");
const PORT = 8000;
const getPublicDir = (url) => path.join(__dirname, './../public', url);

const onReq = (req, res) => {
    const url = req.url;
    
    if (url === "/") {
        res.writeHead(200);
        res.end(getHtml("index.html"));
    } else if (url === "/cars") {
        res.writeHead(200);
        res.end(getHtml("carList.html"));
    } else if (url === "/testing") {
        res.writeHead(200);
        res.end(getHtml("testing.html"));
    }else if(url.match("\.js$")){
        readStaticFiles(url, res, "text/js", "UTF-8");
    }else if(url.match("\.css$")){
        readStaticFiles(url, res, "text/css", "UTF-8");
    }else if(url.match("\.png$")){
        readStaticFiles(url, res, "image/png")
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
};

const server = http.createServer(onReq);

server.listen(PORT, "0.0.0.0", () => {
    console.info(`Server is listening on port ${PORT}`);
});
