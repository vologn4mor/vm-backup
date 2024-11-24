import "dotenv/config";
import { BackupService } from "./services/BackupService";
import cron from "node-cron";

const backupService = new BackupService();

const rule = process.env.CRON_RULE ?? "0 3 * * *";

cron.schedule(rule, () => {
  backupService.start();
});
