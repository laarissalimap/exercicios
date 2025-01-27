import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import chalk from "chalk";

const filePath = path.join("./tasks.json");

if (!existsSync(filePath)) {
  writeFileSync(filePath, JSON.stringify([]), "utf-8");
}

const data = readFileSync(filePath, { encoding: "utf-8" });
const parsed = JSON.parse(data);

const tasks = new Map(parsed.map(task => [task.name, task]));

export const taskManager = {
  tasks,
  save() {
    const data = Array.from(tasks.values());
    writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  },
  create(task) {
    tasks.set(task.name, task);
    this.save();
  },
  toArray() {
    return Array.from(tasks.values());
  },
  colorStatus(status) {
    switch (status) {
      case "Em andamento":
        return chalk.bgHex("#e3923b")(`${status}`);
      case "Concluida":
        return chalk.bgGreen(`${status}`);
      case "Cancelada":
        return chalk.bgRed(`${status}`);
      default:
        return chalk.bgWhite(`${status}`);
    }
  }
};