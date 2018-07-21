import { Client, SpeechBuilder, Middleware } from '@line/clova-cek-sdk-nodejs';
import * as express from 'express';
const app = express();

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
        SpeechBuilder.createSpeechText('きのこのこのこ元気の子 from Bluemix')
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
const clovaHandler: any = Client
  .configureSkill()
  .onLaunchRequest(launchHandler)
  .onIntentRequest(intentHandler)
  .onSessionEndedRequest(sessionEndedHandler)
  .handle();

const clovaMiddleware = Middleware({ applicationId: process.env.APPLICATION_ID });

app.post('/clova', clovaMiddleware, clovaHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
