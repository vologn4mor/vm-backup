import { execSync } from "node:child_process";
import Logger from "../helpers/Logger";

export class BackupService {
  public start(): void {
    try {
      Logger.log("Backup started!");

      execSync(
        `${process.env.V_BOX_MANAGE_PATH} controlvm ${process.env.VM_NAME} poweroff`,
      );

      execSync(
        `${process.env.ARCHIVER_PATH} ${process.env.BACKUP_PATH} ${process.env.VM_FOLDER_PATH}`,
      );

      execSync(
        `${process.env.V_BOX_MANAGE_PATH} startvm ${process.env.VM_NAME} --type headless`,
      );

      Logger.log("Backup ended!");
    } catch (error) {
      if (error instanceof Error) return console.log(error.message);
    }
  }
}
