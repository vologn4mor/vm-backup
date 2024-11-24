import DateHelper from "./DateHelper";

class Logger {
  public log(message: unknown): void {
    // eslint-disable-next-line
    console.log(`[${DateHelper.getTimeHMS()}] ${message}`);
  }
}

export default new Logger();
