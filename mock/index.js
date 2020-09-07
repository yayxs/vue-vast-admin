import { handleMockArray } from "./utils";
import chalk from "chalk";
import fs from "fs";
import { baseURL, devPort, httpRequestFile } from "../src/settings";

const mocks = [];
const mockArray = handleMockArray();

// if (httpRequestFile) {
//   fs.writeFile("./http/mock.http", "", {}, function(err) {
//     if (err) throw err;
//   });
// }
mockArray.forEach(async (item) => {
  const obj = require(item).default;
  await mocks.push(...obj);
  // if (httpRequestFile) {
  //   obj.forEach((item) => {
  //     fs.appendFile(
  //       "./http/mock.http",
  //       `\r\n###${item.url}###\r\POST http://localhost:${devPort}/${baseURL}${item.url}\r\nContent-Type: application/x-www-form-urlencoded\r\n###\r\n`,
  //       (error) => {
  //         if (error)
  //           return chalk.red(`\n > 追加HTTP Request失败${error.message}`);
  //       }
  //     );
  //   });
  // }
});
export default mocks;
