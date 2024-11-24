import DateHelper from "./DateHelper";

class Logger {
  public log(message: unknown): void {
    console.log(`[${DateHelper.getTimeHMS()}] ${message}`);
  }
}

export default new Logger();
