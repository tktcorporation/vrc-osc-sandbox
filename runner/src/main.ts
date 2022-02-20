import { Client, Message } from 'node-osc';

const main = async () => {
  const client = new Client('host.docker.internal', 9000);
  while (true) {
    // const path = '/input/Jump';
    // client.send(path, ['1'], () => {
    //   console.log('sent', path);
    // });
    // client.send('/input/Vertical', ['1'], () => {
    //   console.log('sent', '/input/Vertical');
    // });
    const message = new Message('/input/Horizontal', 1);
    client.send(message, () => {
      console.log('sent', '/input/Horizontal');
    });
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  client.send('/input/MoveForward', ['2'], () => {
    client.close();
  });
};

main();
