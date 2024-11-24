class DateHelper {
  public getTimeHMS() {
    const d = new Date();

    let seconds = "" + d.getSeconds();
    let minutes = "" + d.getMinutes();
    let hour = "" + d.getHours();
    if (seconds.length < 2) seconds = "0" + seconds;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (hour.length < 2) hour = "0" + hour;

    return `${hour}:${minutes}:${seconds}`;
  }
}

export default new DateHelper();
