"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_osc_1 = require("node-osc");
const main = async () => {
    const client = new node_osc_1.Client('host.docker.internal', 9000);
    while (true) {
        const message = new node_osc_1.Message('/input/Horizontal', 1);
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
//# sourceMappingURL=main.js.map