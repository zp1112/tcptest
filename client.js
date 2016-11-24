import net from 'net';

const client = new net.Socket();
client.connect(5556, '0.0.0.0', () => {
  console.log('hi');
  client.write(JSON.stringify({username: 'cmic0101aea213ccbd31', password: 'wulian'}));
});

client.on('data', (data) => {
  console.log(`data from server: ${data}`);
  client.destroy();
});
client.on('close', () => {
  console.log('Connection closed');
});
