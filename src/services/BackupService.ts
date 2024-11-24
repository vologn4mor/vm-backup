import Logger from "../helpers/Logger";
import * as util from "node:util";
import { exec } from "node:child_process";

const execute = util.promisify(exec);

export class BackupService {
  public async start(): Promise<void> {
    try {
      Logger.log("Backup started!");

      const { stdout, stderr } = await execute(
        `${process.env.V_BOX_MANAGE_PATH} controlvm ${process.env.VM_NAME} poweroff && ${process.env.ARCHIVER_PATH} ${process.env.BACKUP_PATH} ${process.env.VM_FOLDER_PATH} && ${process.env.V_BOX_MANAGE_PATH} startvm ${process.env.VM_NAME} --type headless`,
      );

      if (stderr) {
        Logger.log(stderr);
      }

      if (stdout) {
        Logger.log(stdout);
      }

      Logger.log("Backup ended!");
    } catch (error) {
      if (error instanceof Error) return Logger.log(error.message);
    }
  }
}
