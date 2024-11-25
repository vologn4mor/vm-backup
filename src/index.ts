import "dotenv/config";
import { BackupService } from "./services/BackupService";
import cron from "node-cron";
import Logger from "./helpers/Logger";

const backupService = new BackupService();

const rule = process.env.CRON_RULE ?? "0 3 * * *";

Logger.logWithChannel('System loaded successfuly!').then();

cron.schedule(rule, () => {
  backupService.start();
});
