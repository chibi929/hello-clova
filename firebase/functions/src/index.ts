import * as functions from 'firebase-functions';
import { Client, SpeechBuilder, Middleware } from '@line/clova-cek-sdk-nodejs';

const launchHandler = async responseHelper => {
  responseHelper.setSimpleSpeech(
    SpeechBuilder.createSpeechText('おはよう')
  );
};

const intentHandler = async responseHelper => {
  const intent = responseHelper.getIntentName();
  const sessionId = responseHelper.getSessionId();

  switch (intent) {
    case 'KinokoIntent':
      responseHelper.setSimpleSpeech(
        SpeechBuilder.createSpeechText('きのこのこのこ元気の子 from Firebase')
      );
      break;
    case 'Clova.YesIntent':
      responseHelper.setSimpleSpeech(
        SpeechBuilder.createSpeechText('はいはい')
      );
      break;
    case 'Clova.NoIntent':
      responseHelper.setSimpleSpeech(
        SpeechBuilder.createSpeechText('いえいえ')
      );
      break;
    default:
      responseHelper.setSimpleSpeech(
        SpeechBuilder.createSpeechText('なんなん')
      );
      break;
  }
};

const sessionEndedHandler = async responseHelper => { };

// TypeScript だと RequestHandler 型にしないと怒られるのでとりあえず any で逃げる
const handle: any = Client
  .configureSkill()
  .onLaunchRequest(launchHandler)
  .onIntentRequest(intentHandler)
  .onSessionEndedRequest(sessionEndedHandler)
  .firebase();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
export const clova = functions.https.onRequest(handle);
