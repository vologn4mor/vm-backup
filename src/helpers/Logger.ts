import DateHelper from "./DateHelper";
import TelegramService, { message } from "../services/TelegramService";

class Logger {
  public log(message: unknown): void {
    // eslint-disable-next-line
    console.log(`[${DateHelper.getTimeHMS()}] ${message}`);
  }

  public async logWithChannel(
    message: string,
    type: message = "success",
  ): Promise<void> {
    this.log(message);
    await TelegramService.sendMessageToChannel(message, type);
  }
}

export default new Logger();
