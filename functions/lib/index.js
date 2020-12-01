"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojify = void 0;
const functions = require("firebase-functions");
const node_fetch_1 = require("node-fetch");
const cors = require('cors')({ origin: true });
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript


exports.emojify = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        functions.logger.debug("the body ", request.body);
        const url = `https://api.ritekit.com/v1/emoji/suggestions?text=${request.body.text}&client_id=8c9c3bdd0dd47815a8eebef91b9711a042c28c7a2b1d`;
        const res = await node_fetch_1.default(url);
        const json = await res.json();
        const emojis = json.emojis.slice(0, 5);
        response.status(200).json({ emojis });
    });
});
//sourceMappingURL=index.js.map
