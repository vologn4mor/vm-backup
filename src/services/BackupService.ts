import Logger from "../helpers/Logger";
import * as util from "node:util";
import { exec } from "node:child_process";

const execute = util.promisify(exec);

export class BackupService {
  public async start(): Promise<void> {
    try {
      await Logger.logWithChannel("Backup started!");

      await this.shutdownVM();
      await this.backupVm();
      await this.startupVm();

      await Logger.logWithChannel("Backup ended!");
    } catch (error) {
      if (error instanceof Error) return Logger.log(error.message);
    }
  }

  private async runExecute(command: string) {
    Logger.log(command);
    const { stdout, stderr } = await execute(command);

    if (stdout) {
      Logger.log(stdout);
    }

    if (stderr) {
      Logger.log(stderr);
    }
  }

  private async shutdownVM(): Promise<void> {
    await this.runExecute(
      `${process.env.V_BOX_MANAGE_PATH} controlvm ${process.env.VM_NAME} poweroff`,
    );
  }

  private async backupVm(): Promise<void> {
    await this.runExecute(
      `${process.env.ARCHIVER_PATH} ${process.env.VM_FOLDER_PATH} ${process.env.BACKUP_PATH} ${process.env.BACKUP_ARGS}`,
    );
  }

  private async startupVm(): Promise<void> {
    await this.runExecute(
      `${process.env.V_BOX_MANAGE_PATH} startvm ${process.env.VM_NAME} --type headless`,
    );
  }
}
