import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
const cors = require('cors')({ origin: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const emojify = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {

        functions.logger.debug("the body ", request.body);
        const url = `https://api.ritekit.com/v1/emoji/suggestions?text=${request.body.text}&client_id=8c9c3bdd0dd47815a8eebef91b9711a042c28c7a2b1d`;
        const res = await fetch(url);
        const json = await res.json();

        const emojis = (json.emojis as any[]).slice(0, 5)

        response.status(200).json({ emojis });
    })

});




