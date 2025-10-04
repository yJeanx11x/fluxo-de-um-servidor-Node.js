import http from "node:http"

const server = http.createServer((req, res) => {
    const { url, method } = req


    if (method === "GET" && url === "/produto") {
        return res.end('Buscando Produto !')
    }
    if (method === "POST" && url === "/produto") {
        return res.writeHead(201).end("✅ Tarefa criada com sucesso!")
    }
    if(method === "DELETE" && url === "/produto"){
        return res.end(`O Produto de ID: Foi Deletado`)
    }

    return res.writeHead(404).end('❌ Rota não encontrada!')











})

server.listen(3333,()=>{
     console.log("🚀 Servidor rodando em http://localhost:3333");
})