const { execSync } = require("child_process");
const { writeFileSync } = require("fs");
const { join } = require("path");

function readGitValue(command, fallback) {
  try {
    return execSync(command, { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch (error) {
    return fallback;
  }
}

const buildInfo = {
  builtAt: new Date().toISOString(),
  commit: readGitValue("git rev-parse --short HEAD", "local"),
};

writeFileSync(
  join(__dirname, "..", "src", "build-info.json"),
  `${JSON.stringify(buildInfo, null, 2)}\n`
);
