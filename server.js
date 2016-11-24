import net from 'net';

// net.createServer((sock) => {
//   sock.on('data', (data) => {
//     console.log(`data from client: ${data}`);
//     sock.write('hello! client');
//   });
//   sock.on('close', () => {
//     console.log('closed.');
//   });
// }).listen(3000, '0.0.0.0');

const server = net.createServer();
server.on('connection', (sock) => {
  sock.on('data', (data) => {
    console.log(`data from client: ${data}`);
    sock.write('hello! client');
  });
  sock.on('error', () => {
    console.log('error.');
  });
  sock.on('close', () => {
    console.log('closed.');
  });
});
server.listen(5555, '0.0.0.0');

// import express from 'express';
// // import cluster from 'cluster';
// // 设定启动进程数为cpu个数
// // const numCPUs = require('os').cpus().length;
// // if (cluster.isMaster) {
// //   for (let i = 0; i < numCPUs; i++) {
// //     cluster.fork();// 启动子进程
// //   }
// // } else {
// const app = express();
// const fibo = (n) => {
//     // 定义斐波那契数组算法
//   return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
// };
// app.get('/', (req, res) => {
//   const n = fibo(~~req.query.n || 1);// 接收参数
//   res.send(n.toString());
// });
// app.listen(8124, '0.0.0.0');
// console.log('listen on 8124');
// }
// const express = require('express');
// const spawn = require('child_process').spawn;
// const app = express();
// const spawnWorker = (n, end) => {// 定义工作函数
//   const fibo = (m) => m > 1 ? fibo(m - 1) + fibo(m - 2) : 1;
//   end(fibo(n));
// };
// const spawnEnd = (result) => {// 定义工作函数结束的回调函数参数
//   console.log(result);
//   process.exit();
// };
// app.get('/', (req, res) => {
//   const n = req.query.n || 1;
//   // 拼接-e后面的参数
//   const spawnCmd = `(${spawnWorker.toString()}(${n},${spawnEnd.toString()}));`;
//   console.log(spawnCmd);// 注意这个打印结果
//   const worker = spawn('node', ['-e', spawnCmd]);// 执行node -e "xxx"命令
//   let fiboRes = '';
//   worker.stdout.on('data', (data) => { // 接收工作函数的返回
//     fiboRes += data.toString();
//   });
//   worker.on('close', () => {// 将结果响应给客户端
//     res.send(fiboRes);
//   });
// });
// app.listen(8124);
