import cron from "node-cron";
import { exec } from "child_process";

console.log("自动签到任务已启动...");

// 每天早上 8 点签到
cron.schedule("0 8 * * *", () => {
    console.log("开始执行签到任务...");

    exec("npm run signin", (err, stdout, stderr) => {
        if (err) return console.error("执行失败：", err);
        console.log(stdout);
    });
});
