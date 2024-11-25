import DateHelper from "./DateHelper";
import TelegramService from "../services/TelegramService";

class Logger {
  public log(message: unknown): void {
    // eslint-disable-next-line
    console.log(`[${DateHelper.getTimeHMS()}] ${message}`);
  }

  public async logWithChannel(message: string): Promise<void> {
    this.log(message);
    await TelegramService.sendMessageToChannel(message);
  }
}

export default new Logger();
