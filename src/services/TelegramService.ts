import Logger from "../helpers/Logger";

export enum messagesTypesList {
  success = "🟢",
  warning = "🟠",
  error = "🔴",
}

export type message = "success" | "warning" | "error";

class TelegramService {
  public async sendMessageToChannel(
    message: string,
    type: message,
  ): Promise<void> {
    if (!process.env.BOT_TOKEN || process.env.CHANNEL_ID) {
      new Error("Need to add BOT_TOKEN or CHANNEL_ID to dot env");
    }

    const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.CHANNEL_ID,
          text: `${messagesTypesList[type]} ${message}`,
          parse_mode: "HTML",
        }),
      });

      if (!response.ok) {
        new Error(`${response.status}`);
      }
    } catch (error) {
      if (error instanceof Error)
        Logger.log("Error send message: " + error.message);
    }
  }
}

export default new TelegramService();
