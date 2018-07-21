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
        SpeechBuilder.createSpeechText('きのこのこのこ元気の子 from Lambda')
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
export const handle = Client
  .configureSkill()
  .onLaunchRequest(launchHandler)
  .onIntentRequest(intentHandler)
  .onSessionEndedRequest(sessionEndedHandler)
  .lambda();
